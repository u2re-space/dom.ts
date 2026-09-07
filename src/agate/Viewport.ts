/*
 * FIND:virtual-keyboard
 * WHY: Work Center composer and markdown raw read `--virtual-keyboard-height`.
 * Capacitor Android has no Virtual Keyboard API; IME height comes from
 * visualViewport overlap, layout shrink, or Capacitor Keyboard.
 * INVARIANT: IME must not shift shell / `--lv-height`. Capacitor uses Keyboard
 * plugin height only — visualViewport shrink (Select All, handles) is not IME.
 */
import type { StyleTuple } from "@fest-lib/style-lib";
import { addEvent } from "./Utils";

const runWhenIdle = (cb: IdleRequestCallback, timeout = 100) => {
    if (typeof globalThis.requestIdleCallback === "function") {
        return globalThis.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 } as IdleDeadline), 0);
};

const KEYBOARD_OVERLAY_PX = 80;

type VirtualKeyboardLike = {
    overlaysContent?: boolean;
    boundingBox?: { height?: number };
};

type CapacitorKeyboardLike = {
    addListener?: (name: string, cb: (info?: { keyboardHeight?: number }) => void) => void;
    setScroll?: (opts: { isDisabled: boolean }) => Promise<void> | void;
    setResizeMode?: (opts: { mode: string }) => Promise<void> | void;
};

let capacitorKeyboardHeight = 0;
let capacitorKeyboardBound = false;
let windowKeyboardBound = false;
let viewportTrackingStarted = false;

const isNativeCapacitorHost = (): boolean => {
    try {
        if (typeof document !== "undefined" && document.documentElement.dataset.cwspNativeShell === "capacitor") {
            return true;
        }
        const cap = (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
        return typeof cap?.isNativePlatform === "function" && Boolean(cap.isNativePlatform());
    } catch {
        return false;
    }
};

const virtualKeyboard = (): VirtualKeyboardLike | null => {
    try {
        return (globalThis.navigator as Navigator & { virtualKeyboard?: VirtualKeyboardLike })?.virtualKeyboard ?? null;
    } catch {
        return null;
    }
};

const INTERACTIVE_WIDGET = "interactive-widget=overlays-content";
const VIEWPORT_FIT = "viewport-fit=cover";

/** Stamp overlay IME + `viewport-fit=cover` ([MDN viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport)). */
export const ensureViewportInteractiveWidgetOverlay = (): void => {
    if (typeof document === "undefined") return;
    const head = document.head || document.documentElement;
    if (!head) return;
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.content = `width=device-width, initial-scale=1.0, ${VIEWPORT_FIT}, ${INTERACTIVE_WIDGET}`;
        head.insertBefore(meta, head.firstChild);
        return;
    }
    let content = String(meta.content || "").trim();
    if (!/interactive-widget\s*=\s*overlays-content/i.test(content)) {
        if (/interactive-widget\s*=/i.test(content)) {
            content = content.replace(/interactive-widget\s*=\s*[a-z-]+/i, INTERACTIVE_WIDGET);
        } else {
            content = content ? `${content.replace(/,\s*$/, "")}, ${INTERACTIVE_WIDGET}` : INTERACTIVE_WIDGET;
        }
    }
    if (!/viewport-fit\s*=\s*cover/i.test(content)) {
        if (/viewport-fit\s*=/i.test(content)) {
            content = content.replace(/viewport-fit\s*=\s*[a-z-]+/i, VIEWPORT_FIT);
        } else {
            content = content ? `${content.replace(/,\s*$/, "")}, ${VIEWPORT_FIT}` : VIEWPORT_FIT;
        }
    }
    if (content !== String(meta.content || "").trim()) meta.content = content;
};

/* WHY: VirtualKeyboard API overlaysContent + viewport interactive-widget=overlays-content
 * so IME does not resize layout / visual viewport ([MDN VirtualKeyboard](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)). */
export const ensureVirtualKeyboardOverlay = (): void => {
    ensureViewportInteractiveWidgetOverlay();
    const vk = virtualKeyboard();
    if (!vk) return;
    try {
        if (vk.overlaysContent !== true) vk.overlaysContent = true;
    } catch {
        /* older WebView */
    }
};

const isImeTarget = (el: Element | null): boolean => {
    if (!el || !(el instanceof HTMLElement)) return false;
    if (el.isContentEditable) return true;
    const tag = el.tagName;
    if (tag === "TEXTAREA" || tag === "SELECT") return true;
    if (tag !== "INPUT") return false;
    const type = String((el as HTMLInputElement).type || "text").toLowerCase();
    return !["button", "checkbox", "radio", "file", "submit", "reset", "image", "range", "color", "hidden"].includes(type);
};

const isCollapsedCaret = (): boolean => {
    try {
        const sel = document.getSelection();
        return Boolean(sel && sel.rangeCount && sel.isCollapsed);
    } catch {
        return true;
    }
};

let layoutLockOrient = "";
let layoutLockW = 0;
let layoutLockH = 0;
let lastStableKeyboard = 0;

export type FixedOverlayViewport = {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};

/** Build client-coordinate bounds for a fixed overlay root. */
export const createFixedOverlayViewport = (
    width: number,
    height: number,
    left = 0,
    top = 0,
): FixedOverlayViewport => {
    const safeWidth = Math.max(0, Number(width) || 0);
    const safeHeight = Math.max(0, Number(height) || 0);
    const safeLeft = Number(left) || 0;
    const safeTop = Number(top) || 0;
    return {
        left: safeLeft,
        top: safeTop,
        right: safeLeft + safeWidth,
        bottom: safeTop + safeHeight,
        width: safeWidth,
        height: safeHeight,
    };
};

/**
 * Read bounds for `position: fixed` overlays.
 * INVARIANT: use the same client-coordinate origin as PointerEvent and DOMRect;
 * layout-lock variables remain reserved for desktop/workspace sizing.
 */
export const readFixedOverlayViewport = (): FixedOverlayViewport => {
    if (typeof window === "undefined") return createFixedOverlayViewport(0, 0);
    const root = typeof document !== "undefined" ? document.documentElement : null;
    return createFixedOverlayViewport(
        Number(root?.clientWidth) || Number(window.innerWidth) || 0,
        Number(root?.clientHeight) || Number(window.innerHeight) || 0,
    );
};

const readLayoutViewport = (): { width: number; height: number; keyboard: number } => {
    if (typeof window === "undefined") return { width: 0, height: 0, keyboard: 0 };
    const vv = window.visualViewport;
    const innerW = Number(window.innerWidth) || 0;
    const innerH = Number(window.innerHeight) || 0;
    const vvW = Number(vv?.width) || 0;
    const vvH = Number(vv?.height) || 0;
    const vvTop = Number(vv?.offsetTop) || 0;
    const vkH = Number(virtualKeyboard()?.boundingBox?.height) || 0;
    const vvOverlap = innerH > 0 && vvH > 0 ? innerH - vvH - vvTop : 0;
    const capH = capacitorKeyboardHeight;
    /* WHY: Capacitor Select All / selection handles shrink visualViewport; that is
     * not the IME. Overlay height comes only from the Keyboard plugin (or VK API). */
    const nativeCap = isNativeCapacitorHost();
    let keyboard = capH >= KEYBOARD_OVERLAY_PX
        ? capH
        : !nativeCap && vkH >= KEYBOARD_OVERLAY_PX
          ? vkH
          : !nativeCap && vvOverlap >= KEYBOARD_OVERLAY_PX
            ? vvOverlap
            : 0;
    const candidateW = Math.max(innerW, vvW);
    const candidateH = Math.max(innerH, vvH + vvTop, keyboard > 0 ? vvH + keyboard : 0);
    const orient = typeof matchMedia !== "undefined" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
    if (orient !== layoutLockOrient) {
        layoutLockOrient = orient;
        layoutLockW = 0;
        layoutLockH = 0;
    }
    /* WHY: Android often resizes the WebView before `focusin`; a sudden height drop
     * is the IME even when `innerHeight` and `visualViewport` shrink together. */
    const suddenShrink = !nativeCap && layoutLockH > 0 && layoutLockH - candidateH >= KEYBOARD_OVERLAY_PX;
    if (keyboard < KEYBOARD_OVERLAY_PX && suddenShrink) {
        const shrink = Math.max(0, layoutLockH - candidateH, layoutLockH - (vvH + vvTop));
        if (shrink >= KEYBOARD_OVERLAY_PX) keyboard = shrink;
    }
    /* WHY: Select All / handles shrink visualViewport again. That is not more IME —
     * keep the last real keyboard height so shell tokens and editor padding stay put. */
    const expandedSelection = !isCollapsedCaret();
    if (expandedSelection && lastStableKeyboard >= KEYBOARD_OVERLAY_PX) {
        keyboard = lastStableKeyboard;
    } else if (keyboard >= KEYBOARD_OVERLAY_PX) {
        lastStableKeyboard = keyboard;
    } else if (!isImeTarget(document.activeElement)) {
        lastStableKeyboard = 0;
    }
    const imeOpen = keyboard > 0 || isImeTarget(document.activeElement) || suddenShrink || expandedSelection;
    if (!imeOpen) {
        layoutLockW = candidateW;
        layoutLockH = candidateH;
    } else {
        layoutLockW = Math.max(candidateW, layoutLockW);
        layoutLockH = Math.max(candidateH, layoutLockH);
    }
    return {
        width: layoutLockW || candidateW,
        height: layoutLockH || candidateH,
        keyboard
    };
};

const isImeChromeLock = (el: HTMLElement): boolean => {
    const tag = el.tagName;
    if (tag === "HTML" || tag === "BODY") return true;
    const cls = el.classList;
    return (
        cls.contains("app-shell") ||
        cls.contains("app-shell__viewport") ||
        cls.contains("app-shell__nav") ||
        cls.contains("env-shell-root") ||
        cls.contains("env-shell-workspace") ||
        cls.contains("env-shell-chrome") ||
        cls.contains("env-ui-window") ||
        cls.contains("env-ui-window__body") ||
        cls.contains("wf-frame") ||
        cls.contains("ui-window") ||
        cls.contains("view-viewer") ||
        cls.contains("view-viewer__toolbar") ||
        cls.contains("view-viewer__chrome") ||
        cls.contains("view-viewer__content") ||
        cls.contains("cw-view-viewer-shell") ||
        cls.contains("cw-markdown-view-frame")
    );
};

const parentOf = (el: Element | null): Element | null => {
    if (!el) return null;
    if (el.parentElement) return el.parentElement;
    const root = el.getRootNode();
    return root instanceof ShadowRoot ? root.host : null;
};

const isScrollport = (el: HTMLElement): boolean => {
    if (isImeChromeLock(el)) return false;
    const style = getComputedStyle(el);
    const oy = style.overflowY || style.overflowBlock;
    if (oy !== "auto" && oy !== "scroll") return false;
    return el.scrollHeight > el.clientHeight + 1;
};

const findImeScrollport = (start: Element | null): HTMLElement | null => {
    let node: Element | null = start;
    while (node) {
        if (node instanceof HTMLElement && isScrollport(node)) return node;
        node = parentOf(node);
    }
    return null;
};

const readCaretRect = (): DOMRect | null => {
    try {
        const sel = document.getSelection();
        if (sel?.rangeCount) {
            const range = sel.getRangeAt(0);
            const rects = range.getClientRects();
            const rect = rects.length ? rects[rects.length - 1] : range.getBoundingClientRect();
            if (rect && (rect.height || rect.width || rect.top || rect.bottom)) return rect;
        }
    } catch {
        /* no selection */
    }
    const el = document.activeElement;
    return el instanceof HTMLElement ? el.getBoundingClientRect() : null;
};

const pinImeCaretInScrollport = (): void => {
    if (!isImeTarget(document.activeElement)) return;
    /* WHY: Select All's range box is the whole document — scrolling it shifts every surface. */
    if (!isCollapsedCaret()) return;
    const keyboard = readLayoutViewport().keyboard;
    const vv = window.visualViewport;
    const visibleBottom = (Number(vv?.height) || Number(window.innerHeight) || 0) - Math.max(8, keyboard ? 12 : 0);
    if (visibleBottom <= 0) return;
    const rect = readCaretRect();
    if (!rect) return;
    const overflow = rect.bottom - visibleBottom;
    if (overflow <= 1) return;
    const port = findImeScrollport(document.activeElement);
    if (port) port.scrollTop += overflow;
};

const pinVisualViewport = (): void => {
    const vv = window.visualViewport;
    if (!vv) return;
    const top = Number(vv.offsetTop) || 0;
    const left = Number(vv.offsetLeft) || 0;
    if (!top && !left) return;
    try {
        vv.scrollTo({ left: 0, top: 0, behavior: "instant" as ScrollBehavior });
    } catch {
        try {
            (vv as { scrollTo?: (x: number, y: number) => void }).scrollTo?.(0, 0);
        } catch {
            /* older WebView */
        }
    }
};

let overlayPinning = false;

const resetChromeScroll = (start: Element | null): void => {
    const port = findImeScrollport(start);
    let node: Element | null = start;
    while (node) {
        if (node instanceof HTMLElement && node !== port && (isImeChromeLock(node) || node.scrollTop || node.scrollLeft)) {
            if (node !== port) {
                node.scrollTop = 0;
                node.scrollLeft = 0;
            }
        }
        node = parentOf(node);
    }
};

const pinOverlayScroll = (): void => {
    if (typeof window === "undefined" || overlayPinning) return;
    const ime = readLayoutViewport().keyboard > 0 || isImeTarget(document.activeElement);
    if (!ime) return;
    overlayPinning = true;
    try {
        /* INVARIANT: IME/Select All may pan visualViewport; chrome stays at layout origin.
         * Only the editor scrollport may move. */
        pinVisualViewport();
        if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
        const root = document.documentElement;
        const body = document.body;
        if (root.scrollTop || root.scrollLeft) root.scrollTo(0, 0);
        if (body && (body.scrollTop || body.scrollLeft)) body.scrollTo(0, 0);
        if (!isCollapsedCaret()) resetChromeScroll(document.activeElement);
    } finally {
        overlayPinning = false;
    }
};

let scrollIntoViewPatched = false;
const patchImeScrollIntoView = (): void => {
    if (scrollIntoViewPatched || typeof Element === "undefined") return;
    scrollIntoViewPatched = true;
    const orig = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (this: Element, arg?: boolean | ScrollIntoViewOptions) {
        if (isImeTarget(document.activeElement) && !isCollapsedCaret()) return;
        if (this instanceof HTMLElement && isImeChromeLock(this)) return;
        return orig.call(this, arg as never);
    };
};

const pinImeChrome = (opts?: { caret?: boolean }): void => {
    pinOverlayScroll();
    if (!opts?.caret) return;
    requestAnimationFrame(() => {
        pinOverlayScroll();
        pinImeCaretInScrollport();
    });
};

//
export const getAvailSize = () => {
    ensureVirtualKeyboardOverlay();
    const l = typeof matchMedia != "undefined" ? matchMedia("(orientation: landscape)")?.matches : false;
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    const layout = readLayoutViewport();
    const vvBlock: Record<string, string> = {
        "--vv-width": `${vv?.width ?? (typeof window !== "undefined" ? window.innerWidth : 0)}px`,
        "--vv-height": `${vv?.height ?? (typeof window !== "undefined" ? window.innerHeight : 0)}px`,
        "--vv-offset-left": `${vv?.offsetLeft ?? 0}px`,
        "--vv-offset-top": `${vv?.offsetTop ?? 0}px`,
        "--vv-scale": String(vv?.scale ?? 1),
        /* INVARIANT: desktop / wallpaper / Speed Dial size to layout, not the IME visual viewport. */
        "--lv-width": `${layout.width}px`,
        "--lv-height": `${layout.height}px`,
        "--keyboard-overlay-height": `${layout.keyboard}px`,
        /* INVARIANT: `.workcenter-composer` and Capacitor chat padding read this token. */
        "--virtual-keyboard-height": `${layout.keyboard}px`
    };
    if (typeof document !== "undefined") {
        /* WHY: `html[data-vk-open]` + `max-block-size: 100%` shrinks the whole shell
         * to the visual viewport (Select All / handles). IME is padding-only. */
        document.documentElement.removeAttribute("data-vk-open");
    }
    if (typeof screen != "undefined") {
        const aw = screen?.availWidth + "px";
        const ah = screen?.availHeight + "px";
        return {
            "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
            "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
            "--avail-width": l ? ah : aw,
            "--avail-height": l ? aw : ah,
            "--view-height": `${layout.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
            "--pixel-ratio": String(devicePixelRatio || 1),
            ...vvBlock
        };
    };
    return {
        "--screen-width": 0 + "px",
        "--screen-height": 0 + "px",
        "--avail-width": 0 + "px",
        "--avail-height": 0 + "px",
        "--view-height": `${layout.height}px`,
        "--pixel-ratio": "1",
        ...vvBlock
    };
}

//
export const availSize = getAvailSize();
export const classes: StyleTuple[] = [ [":root, :host, :scope", availSize] ];
export const orientationNumberMap = {
    "portrait-primary": 0, // as 0deg, aka. 360deg
    "landscape-primary": 1, // as -90deg, aka. 270deg
    "portrait-secondary": 2, // as -180deg, aka. 180deg
    "landscape-secondary": 3 // as -270deg, aka. 90deg
}

//
export const updateVP = (ev?: any)=>{
    const rule = document.documentElement;
    Object.assign(availSize, getAvailSize());
    Object.entries(availSize).forEach(([propName, propValue]) => {
        const exists = rule?.style?.getPropertyValue(propName);
        if (!exists || exists != propValue) {
            rule?.style?.setProperty?.(propName, (propValue || "") as string, "");
        }
    });

    // make secondary screen orientation detectable
    document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}

//
export const getCorrectOrientation = () => {
    let orientationType: string = screen?.orientation?.type || "portrait-primary";
    if (!globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches) {
        if (matchMedia("(orientation: portrait)").matches) {orientationType = orientationType.replace("landscape", "portrait");} else
            if (matchMedia("(orientation: landscape)").matches) {orientationType = orientationType.replace("portrait", "landscape");};
    }
    return orientationType;
};

//
const passiveOpts = { passive: true };

//
const applyCapacitorKeyboardHeight = (raw: unknown): void => {
    const next = Number(raw) || 0;
    if (next > 0) capacitorKeyboardHeight = next;
    updateVP();
    pinImeChrome({ caret: true });
};

const clearCapacitorKeyboardHeight = (): void => {
    capacitorKeyboardHeight = 0;
    updateVP();
};

/* WHY: native Keyboard also dispatches window CustomEvents; plugin stub may appear after first focus. */
const bindWindowKeyboardEvents = (): void => {
    if (windowKeyboardBound || typeof window === "undefined") return;
    windowKeyboardBound = true;
    const onShow = (ev: Event): void => {
        const e = ev as Event & { keyboardHeight?: number; detail?: { keyboardHeight?: number } | string };
        const detail = e.detail;
        const fromDetail = typeof detail === "string"
            ? (() => {
                try { return JSON.parse(detail)?.keyboardHeight; } catch { return 0; }
            })()
            : detail?.keyboardHeight;
        applyCapacitorKeyboardHeight(e.keyboardHeight ?? fromDetail);
    };
    window.addEventListener("keyboardWillShow", onShow);
    window.addEventListener("keyboardDidShow", onShow);
    window.addEventListener("keyboardWillHide", clearCapacitorKeyboardHeight);
    window.addEventListener("keyboardDidHide", clearCapacitorKeyboardHeight);
};

const bindCapacitorKeyboard = (): void => {
    bindWindowKeyboardEvents();
    if (capacitorKeyboardBound || typeof globalThis === "undefined") return;
    const cap = (
        globalThis as {
            Capacitor?: {
                isNativePlatform?: () => boolean;
                Plugins?: { Keyboard?: CapacitorKeyboardLike };
            };
        }
    ).Capacitor;
    const Keyboard = cap?.Plugins?.Keyboard;
    if (!Keyboard?.addListener) return;
    if (typeof cap.isNativePlatform === "function" && !cap.isNativePlatform()) return;
    capacitorKeyboardBound = true;
    try {
        void Keyboard.setScroll?.({ isDisabled: true });
    } catch {
        /* optional */
    }
    try {
        void Keyboard.setResizeMode?.({ mode: "none" });
    } catch {
        /* optional */
    }
    Keyboard.addListener("keyboardWillShow", (info) => applyCapacitorKeyboardHeight(info?.keyboardHeight));
    Keyboard.addListener("keyboardDidShow", (info) => applyCapacitorKeyboardHeight(info?.keyboardHeight));
    Keyboard.addListener("keyboardWillHide", clearCapacitorKeyboardHeight);
    Keyboard.addListener("keyboardDidHide", clearCapacitorKeyboardHeight);
};

/** Start IME / visualViewport listeners once (Process Capacitor has no SpeedDial). */
export const ensureViewportTracking = (): void => {
    if (viewportTrackingStarted || typeof window === "undefined") return;
    viewportTrackingStarted = true;
    bindCapacitorKeyboard();
    whenAnyScreenChanges(() => {});
};

export const whenAnyScreenChanges = (cb: () => void) => {
    let ticking = false;
    const update = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateVP();
                cb();
                ticking = false;
            });
            ticking = true;
        }
    };

    const unsubscribers: Array<() => void> = [];

    bindCapacitorKeyboard();
    patchImeScrollIntoView();
    // @ts-ignore
    unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", update, passiveOpts));
    unsubscribers.push(addEvent(document, "selectionchange", () => {
        pinOverlayScroll();
    }, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "scroll", () => {
        pinOverlayScroll();
        update();
    }, passiveOpts));
    unsubscribers.push(addEvent(window, "scroll", () => {
        pinOverlayScroll();
    }, { capture: true, passive: true }));
    unsubscribers.push(addEvent(window?.visualViewport, "resize", () => {
        pinImeChrome({ caret: true });
        update();
    }, passiveOpts));
    unsubscribers.push(addEvent(screen?.orientation, "change", update));
    unsubscribers.push(addEvent(window, "resize", update));
    unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", update));
    unsubscribers.push(addEvent(document, "DOMContentLoaded", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: landscape)"), "change", update));
    unsubscribers.push(addEvent(document, "focusin", () => {
        bindCapacitorKeyboard();
        ensureVirtualKeyboardOverlay();
        if (isImeTarget(document.activeElement)) {
            layoutLockW = Math.max(layoutLockW, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0);
            layoutLockH = Math.max(layoutLockH, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0);
        }
        pinImeChrome({ caret: true });
        update();
    }, { capture: true, passive: true }));
    unsubscribers.push(addEvent(document, "focusout", update, passiveOpts));

    //
    ensureVirtualKeyboardOverlay();
    update();
    runWhenIdle(() => update(), 100);
    return () => unsubscribers.forEach((unsub) => unsub());
};

//
export const fixOrientToScreen = (element: HTMLElement & { orient?: number }) => {
    if (!element?.classList?.contains?.("native-portrait-optimized")) {
        element?.classList?.add?.("native-portrait-optimized");
        return whenAnyScreenChanges(() => {
            const next = orientationNumberMap?.[getCorrectOrientation()] ?? 0;
            element.orient = next;
            element.setAttribute?.("orient", String(next));
            element.style?.setProperty?.("--orient", String(next));
        });
    }
}

if (typeof document !== "undefined") {
    ensureVirtualKeyboardOverlay();
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => ensureVirtualKeyboardOverlay(), { once: true });
    }
}
