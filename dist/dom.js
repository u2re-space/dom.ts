import { $avoidTrigger as R, camelToKebab as je, cvt_cs_to_os as Me, hasValue as B, isArrayOrIterable as Je, isVal as Ge, isValueUnit as Qe, kebabToCamel as Oe, normalizeGridLayout as et, normalizePrimitive as ve, resolveLocalPointToGridCell as tt } from "@fest-lib/core";
import { appear as nt, decorHide as rt, decorShow as it, disappear as ot, observeStyleTree as at, setStyleProperty as V } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var st = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), ke = globalThis[st] ??= /* @__PURE__ */ new Set();
[
  {
    name: "--screen-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--screen-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--clip-ampl",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--clip-freq",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--avail-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--avail-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--pixel-ratio",
    syntax: "<number>",
    inherits: !0,
    initialValue: "1"
  },
  {
    name: "--percent",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-x",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-y",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-left",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-top",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--drag-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--drag-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--resize-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--resize-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--cs-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-x",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-y",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  }
].forEach((e) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const t = String(e?.name || "").trim();
  if (!(!t || ke.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      ke.add(t);
    }
});
var nn = () => {
}, rn = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, on = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, ct = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Ce = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(ct()), 0), ut = (e) => e?.offsetParent ?? e?.host, an = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = ut(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, sn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, lt = () => {
  const e = {
    canceled: !1,
    rAFs: /* @__PURE__ */ new Set(),
    last: null,
    cancel() {
      return this.canceled = !0, cancelAnimationFrame(this.last), this;
    },
    shedule(t) {
      return this.rAFs.add(t), this;
    }
  };
  return (async () => {
    for (; !e?.canceled; )
      await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((t) => Promise.try(t)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
        e.last = requestAnimationFrame(t);
      }) : await new Promise((t) => {
        setTimeout(t, 16);
      });
  })(), e;
}, cn = (e = lt()) => (t) => e.shedule(t), un = typeof document < "u" ? document?.documentElement : null, ln = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, dn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), dt = /* @__PURE__ */ new Map(), fn = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Ce(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Ce(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    dt.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Z = /* @__PURE__ */ Symbol("@border-box-width"), K = /* @__PURE__ */ Symbol("@border-box-height"), Y = /* @__PURE__ */ Symbol("@content-box-width"), X = /* @__PURE__ */ Symbol("@content-box-height"), Te = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), hn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ne.has(e)) {
    e[Y] = e.clientWidth, e[X] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[Y] = Math.min(o.inlineSize, e.clientWidth), e[X] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Ne.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, pn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Te.has(e)) {
    e[Z] = e.offsetWidth, e[K] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[Z] = Math.min(o.inlineSize, e.offsetWidth), e[K] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Te.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, mn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), vn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, gn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, bn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, yn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, _ = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", wn = "^(?:" + _ + ")|^#" + _ + "|^\\." + _ + "|^\\[" + _ + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, xn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Sn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, En = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, ne = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Re = {};
function p(e, t, n, r = Re) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Ae(e, t, n, r = Re) {
  e?.removeEventListener?.(t, n, r);
}
var Mn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), kn = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((Je(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, Cn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Ae(e, n, ...r) : Ae(e, n, r))), Tn = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, Nn = (e, t, n) => {
  if (t == null || !(t instanceof Node) && t?.element == null) return !1;
  if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = e?.element ?? e, o = t?.element ?? t;
    if (r.includes(i) && r.includes(o)) {
      const s = r.indexOf(i), a = r.indexOf(o);
      if (a >= 0 && s >= 0 && a < s) return !0;
    }
  }
  return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, se = (e, t, n) => {
  const r = typeof t == "string" ? t.trim() : "";
  if (!r) return e ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const d of a) if (d instanceof HTMLElement || d instanceof Element) try {
      if (d.matches?.(r)) return d;
    } catch {
    }
  }
  let i = null, o = null, s = null;
  try {
    i = e?.matches?.(r) ? e : null;
    const a = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = a?.matches?.(r) ? a : null, s = e?.closest?.(r) ?? i?.closest?.(r) ?? o?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? s ?? o;
}, An = (e, t) => !!se(e, t), Ln = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || ne(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!se(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!se(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? ne(e, t) || !1 : ne(t, e) || !1;
  }
  return !0;
}, Vn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, ft = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), ht = globalThis[ft] ??= /* @__PURE__ */ new WeakMap(), pt = (e = document.documentElement) => ht.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), zn = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Pn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : pt(e)) || 1, ce = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, T = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Hn = (e, t = null) => {
  const n = ce(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (T(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = Me([i.left, i.top], a, o), [l, v] = Me([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [d, l] : [l, d], [c, m] = o == 0 || o == 1 ? [h, v] : [v, h], [g, te] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: m,
    width: g,
    height: te
  };
}, Wn = (e, t = null) => (t ?? T(e)) % 2 ? e[K] ?? e?.clientHeight : e[Z] ?? e?.clientWidth, jn = (e, t = null) => (t ?? T(e)) % 2 ? e[Z] ?? e?.clientWidth : e[K] ?? e?.clientHeight, On = (e, t = null) => (t ?? T(e)) % 2 ? e[X] ?? e?.clientHeight : e[Y] ?? e?.clientWidth, Rn = (e, t = null) => (t ?? T(e)) % 2 ? e[Y] ?? e?.clientWidth : e[X] ?? e?.clientHeight, mt = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), w = 80, ge = 0, Le = !1, Ve = !1, ze = !1, vt = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const e = globalThis.Capacitor;
    return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
  } catch {
    return !1;
  }
}, Be = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, F = "interactive-widget=overlays-content", $ = "viewport-fit=cover", gt = () => {
  if (typeof document > "u") return;
  const e = document.head || document.documentElement;
  if (!e) return;
  let t = document.querySelector('meta[name="viewport"]');
  if (!t) {
    t = document.createElement("meta"), t.setAttribute("name", "viewport"), t.content = `width=device-width, initial-scale=1.0, ${$}, ${F}`, e.insertBefore(t, e.firstChild);
    return;
  }
  let n = String(t.content || "").trim();
  /interactive-widget\s*=\s*overlays-content/i.test(n) || (/interactive-widget\s*=/i.test(n) ? n = n.replace(/interactive-widget\s*=\s*[a-z-]+/i, F) : n = n ? `${n.replace(/,\s*$/, "")}, ${F}` : F), /viewport-fit\s*=\s*cover/i.test(n) || (/viewport-fit\s*=/i.test(n) ? n = n.replace(/viewport-fit\s*=\s*[a-z-]+/i, $) : n = n ? `${n.replace(/,\s*$/, "")}, ${$}` : $), n !== String(t.content || "").trim() && (t.content = n);
}, W = () => {
  gt();
  const e = Be();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, C = (e) => {
  if (!e || !(e instanceof HTMLElement)) return !1;
  if (e.isContentEditable) return !0;
  const t = e.tagName;
  if (t === "TEXTAREA" || t === "SELECT") return !0;
  if (t !== "INPUT") return !1;
  const n = String(e.type || "text").toLowerCase();
  return ![
    "button",
    "checkbox",
    "radio",
    "file",
    "submit",
    "reset",
    "image",
    "range",
    "color",
    "hidden"
  ].includes(n);
}, Q = () => {
  try {
    const e = document.getSelection();
    return !!(e && e.rangeCount && e.isCollapsed);
  } catch {
    return !0;
  }
}, Pe = "", x = 0, y = 0, D = 0, Ie = () => {
  try {
    const e = typeof screen < "u" ? String(screen.orientation?.type || "") : "";
    return e.startsWith("landscape") ? !0 : e.startsWith("portrait") ? !1 : !!(typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches);
  } catch {
    return !1;
  }
}, _e = () => {
  if (typeof screen > "u") return {
    width: 0,
    height: 0
  };
  const e = Number(screen.width) || 0, t = Number(screen.height) || 0, n = Number(screen.availWidth) || 0, r = Number(screen.availHeight) || 0, i = Math.max(e, n), o = Math.max(t, r);
  if (!i && !o) return {
    width: 0,
    height: 0
  };
  const s = Ie(), a = i > 0 && o > 0 && i > o;
  return s && i > 0 && o > 0 && i < o ? {
    width: o,
    height: i
  } : !s && a ? {
    width: o,
    height: i
  } : {
    width: i || o,
    height: o || i
  };
}, bt = (e, t) => {
  const n = _e(), r = typeof window < "u" && Number(window.innerWidth) || 0, i = typeof window < "u" && Number(window.innerHeight) || 0, o = typeof document < "u" ? document.documentElement : null, s = Number(o?.clientWidth) || 0, a = Number(o?.clientHeight) || 0, d = Math.max(n.width, r, s), h = Math.max(n.height, i, a);
  return {
    width: d > 0 ? Math.min(e, d) : e,
    height: h > 0 ? Math.min(t, h) : t
  };
}, He = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, Bn = () => {
  if (typeof window > "u") return He(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return He(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, be = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(Be()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = ge, h = vt();
  let l = d >= w ? d : !h && s >= w ? s : !h && a >= w ? a : 0;
  const v = Math.max(t, r), f = Math.max(n, i + o, l > 0 ? i + l : 0), u = Ie() ? "l" : "p";
  u !== Pe && (Pe = u, x = 0, y = 0);
  const c = !h && y > 0 && y - f >= w;
  if (l < w && c) {
    const Ee = Math.max(0, y - f, y - (i + o));
    Ee >= w && (l = Ee);
  }
  const m = !Q();
  m && D >= w ? l = D : l >= w ? D = l : C(document.activeElement) || (D = 0), l > 0 || C(document.activeElement) || c || m ? (x = Math.max(v, x), y = Math.max(f, y)) : (x = v, y = f);
  const g = bt(x || v, y || f);
  x = g.width, y = g.height;
  const te = g.height > 0 ? Math.min(l, g.height) : l;
  return {
    width: g.width,
    height: g.height,
    keyboard: te
  };
}, ye = (e) => {
  const t = e.tagName;
  if (t === "HTML" || t === "BODY") return !0;
  const n = e.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame");
}, Fe = (e) => {
  if (!e) return null;
  if (e.parentElement) return e.parentElement;
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, yt = (e) => {
  if (ye(e)) return !1;
  const t = getComputedStyle(e), n = t.overflowY || t.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : e.scrollHeight > e.clientHeight + 1;
}, $e = (e) => {
  let t = e;
  for (; t; ) {
    if (t instanceof HTMLElement && yt(t)) return t;
    t = Fe(t);
  }
  return null;
}, wt = () => {
  try {
    const t = document.getSelection();
    if (t?.rangeCount) {
      const n = t.getRangeAt(0), r = n.getClientRects(), i = r.length ? r[r.length - 1] : n.getBoundingClientRect();
      if (i && (i.height || i.width || i.top || i.bottom)) return i;
    }
  } catch {
  }
  const e = document.activeElement;
  return e instanceof HTMLElement ? e.getBoundingClientRect() : null;
}, xt = () => {
  if (!C(document.activeElement) || !Q()) return;
  const e = be().keyboard, t = window.visualViewport, n = (Number(t?.height) || Number(window.innerHeight) || 0) - Math.max(8, e ? 12 : 0);
  if (n <= 0) return;
  const r = wt();
  if (!r) return;
  const i = r.bottom - n;
  if (i <= 1) return;
  const o = $e(document.activeElement);
  o && (o.scrollTop += i);
}, St = () => {
  const e = window.visualViewport;
  if (!e) return;
  const t = Number(e.offsetTop) || 0, n = Number(e.offsetLeft) || 0;
  if (!(!t && !n))
    try {
      e.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
      });
    } catch {
      try {
        e.scrollTo?.(0, 0);
      } catch {
      }
    }
}, re = !1, Et = (e) => {
  const t = $e(e);
  let n = e;
  for (; n; )
    n instanceof HTMLElement && n !== t && (ye(n) || n.scrollTop || n.scrollLeft) && n !== t && (n.scrollTop = 0, n.scrollLeft = 0), n = Fe(n);
}, z = () => {
  if (!(typeof window > "u" || re) && (be().keyboard > 0 || C(document.activeElement))) {
    re = !0;
    try {
      St(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const e = document.documentElement, t = document.body;
      (e.scrollTop || e.scrollLeft) && e.scrollTo(0, 0), t && (t.scrollTop || t.scrollLeft) && t.scrollTo(0, 0), Q() || Et(document.activeElement);
    } finally {
      re = !1;
    }
  }
}, We = !1, Mt = () => {
  if (We || typeof Element > "u") return;
  We = !0;
  const e = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(t) {
    if (!(C(document.activeElement) && !Q()) && !(this instanceof HTMLElement && ye(this)))
      return e.call(this, t);
  };
}, ue = (e) => {
  z(), e?.caret && requestAnimationFrame(() => {
    z(), xt();
  });
}, De = () => {
  W();
  const e = typeof window < "u" ? window.visualViewport : null, t = be(), n = {
    "--vv-width": `${e?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${e?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${e?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${e?.offsetTop ?? 0}px`,
    "--vv-scale": String(e?.scale ?? 1),
    "--lv-width": `${t.width}px`,
    "--lv-height": `${t.height}px`,
    "--keyboard-overlay-height": `${t.keyboard}px`,
    "--virtual-keyboard-height": `${t.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.removeAttribute("data-vk-open"), typeof screen < "u") {
    const r = _e(), i = typeof window < "u" && Number(window.innerWidth) || 0, o = typeof window < "u" && Number(window.innerHeight) || 0, s = Math.max(r.width, i, t.width), a = Math.max(r.height, o, t.height), d = s > 0 ? `${s}px` : "100lvi", h = a > 0 ? `${a}px` : "100lvb";
    return {
      "--screen-width": d,
      "--screen-height": h,
      "--avail-width": d,
      "--avail-height": h,
      "--view-height": `${t.height}px`,
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "100lvi",
    "--screen-height": "100lvb",
    "--avail-width": "100lvi",
    "--avail-height": "100lvb",
    "--view-height": `${t.height}px`,
    "--pixel-ratio": "1",
    ...n
  };
}, le = De(), In = [[":root, :host, :scope", le]], kt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, we = (e) => {
  const t = document.documentElement;
  Object.assign(le, De()), Object.entries(le).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Ct = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, N = { passive: !0 }, de = (e) => {
  const t = Number(e) || 0;
  t > 0 && (ge = t), we(), ue({ caret: !0 });
}, U = () => {
  ge = 0, we();
}, Tt = () => {
  if (Ve || typeof window > "u") return;
  Ve = !0;
  const e = (t) => {
    const n = t, r = n.detail, i = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    de(n.keyboardHeight ?? i);
  };
  window.addEventListener("keyboardWillShow", e), window.addEventListener("keyboardDidShow", e), window.addEventListener("keyboardWillHide", U), window.addEventListener("keyboardDidHide", U);
}, fe = () => {
  if (Tt(), Le || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (t?.addListener && !(typeof e.isNativePlatform == "function" && !e.isNativePlatform())) {
    Le = !0;
    try {
      t.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      t.setResizeMode?.({ mode: "none" });
    } catch {
    }
    t.addListener("keyboardWillShow", (n) => de(n?.keyboardHeight)), t.addListener("keyboardDidShow", (n) => de(n?.keyboardHeight)), t.addListener("keyboardWillHide", U), t.addListener("keyboardDidHide", U);
  }
}, _n = () => {
  ze || typeof window > "u" || (ze = !0, fe(), qe(() => {
  }));
}, qe = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      we(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return fe(), Mt(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, N)), r.push(p(document, "selectionchange", () => {
    z();
  }, N)), r.push(p(window?.visualViewport, "scroll", () => {
    z(), n();
  }, N)), r.push(p(window, "scroll", () => {
    z();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    ue({ caret: !0 }), n();
  }, N)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    fe(), W(), C(document.activeElement) && (x = Math.max(x, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), y = Math.max(y, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), ue({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, N)), W(), n(), mt(() => n(), 100), () => r.forEach((i) => i());
}, Fn = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), qe(() => {
      const t = kt?.[Ct()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
};
typeof document < "u" && (W(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => W(), { once: !0 }));
var k = new OffscreenCanvas(1, 1).getContext("2d"), Ze = (e, t) => {
  const n = getComputedStyle(e, "");
  if (t && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", o = n.getPropertyValue("font-family") || "Times New Roman", s = n.getPropertyValue("font-stretch") || "normal";
    try {
      t.fontStretch = s.includes("%") ? "normal" : s;
    } catch {
    }
    try {
      t.letterSpacing = n.getPropertyValue("letter-spacing") || "normal";
    } catch {
    }
    try {
      t.fontKerning = n.getPropertyValue("font-kerning") || "auto";
    } catch {
    }
    try {
      t.fontVariantCaps = n.getPropertyValue("font-variant-caps") || "normal";
    } catch {
    }
    try {
      t.font = `${r} ${i} ${o}`;
    } catch {
    }
  }
}, Nt = (e, t) => {
  if (k) {
    Ze(t, k);
    try {
      return k.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, $n = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Nt(t, e);
}, At = (e, t) => {
  const n = e?.value || "";
  if (k) {
    Ze(e, k);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = k.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, Dn = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / ce(), t[1] - n.top / ce()];
  return At(e, r);
}, Lt = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = et(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, qn = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Lt(e, n?.layout), s = T(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, l = parseFloat(a?.paddingRight) || 0, v = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - l), u = Math.max(1, (i.height || e.clientHeight || 1) - h - v), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return tt(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Zn = (e) => nt(e, it), Kn = (e) => ot(e, rt), Yn = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, Vt = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), A = globalThis[Vt] ??= /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), L = globalThis[zt] ??= /* @__PURE__ */ new WeakMap(), I = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ee = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, P = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = ee(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, he = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = ee(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, Xn = (e, t) => {
  if (!L.has(e = I(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), L.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return L.get(e)?.push?.(t), { disconnect: () => L.get(e)?.splice?.(L.get(e)?.indexOf(t) || -1, 1) };
}, Un = (e, t) => {
  if (!A.has(e = I(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), A.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return A.get(e)?.push?.(t), { disconnect: () => A.get(e)?.splice?.(A.get(e)?.indexOf(t) || -1, 1) };
}, Jn = (e, t, n) => {
  if (typeof e?.selector == "string") return Ke(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = I(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, Ke = (e, t, n, r) => {
  const i = ee(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const l = Array.from(h.addedNodes) || [], v = Array.from(h.removedNodes) || [];
      l.push(...Array.from(h.addedNodes || []).flatMap((f) => P(f, i))), v.push(...Array.from(h.removedNodes || []).flatMap((f) => P(f, i))), [...new Set(l)].filter((f) => he(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, d);
        });
      });
    } else he(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
  });
  return s.observe(e = I(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), P(e, i).map((a) => o.forEach((d) => r({
    target: a,
    type: "attributes",
    attributeName: d,
    oldValue: a?.getAttribute?.(d)
  }, s))), s;
}, Pt = (e, t = "*", n = (r, i) => {
}) => {
  const r = ee(t), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((m) => P(m, r))), [...Array.from(new Set(c).values())].filter((m) => he(m, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), m = i(u.addedNodes), g = i(u.removedNodes);
    (m.length > 0 || g.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: m,
      removedNodes: g
    }, c);
  }, a = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, d = (u) => {
    s({
      addedNodes: [u?.relatedTarget].filter((c) => !!c),
      removedNodes: [u?.target].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, h = (u) => {
    s({
      addedNodes: [u?.target].filter((c) => !!c),
      removedNodes: [u?.relatedTarget || document?.activeElement].filter((c) => !!c),
      type: "childList",
      target: u?.currentTarget
    });
  }, l = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", a, l), e.addEventListener("pointerout", d, l), e.addEventListener("pointerdown", a, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", a, l), e.removeEventListener("pointerout", d, l), e.removeEventListener("pointerdown", a, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, l), e.addEventListener("pointerout", d, l), { disconnect: () => {
      e.removeEventListener("pointerover", a, l), e.removeEventListener("pointerout", d, l);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, l), e.addEventListener("pointerup", d, l), e.addEventListener("pointercancel", d, l), { disconnect: () => {
      e.removeEventListener("pointerdown", a, l), e.removeEventListener("pointerup", d, l), e.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, l), e.addEventListener("focusout", d, l), e.addEventListener("click", h, l), { disconnect: () => {
      e.removeEventListener("focusin", a, l), e.removeEventListener("focusout", d, l), e.removeEventListener("click", h, l);
    } };
  const v = new MutationObserver((u, c) => {
    for (const m of u) m.type == "childList" && s(m);
  });
  o = new WeakRef(v), (e?.element ?? e) instanceof Node && v.observe(e = I(e), {
    childList: !0,
    subtree: !0
  });
  const f = P(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, v), v;
}, Ye = /* @__PURE__ */ new WeakMap(), Ht = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Gn = (e, t) => {
  if (e) {
    if (t) {
      const n = Ye.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => Ht(e, n, r));
    }
    return e;
  }
}, Wt = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), j = globalThis[Wt] ??= /* @__PURE__ */ new Map(), jt = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Ot = (e) => (typeof e == "object" || typeof e == "function") && e != null, Rt = (e, t, n) => {
  if (!Ot(e) && e != null) return e;
  let r = j.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), j.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, Qn = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) Rt(e, n, r);
    return e;
  }
}, er = (e, t) => {
  if (e) {
    if (t) {
      const n = S?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      S?.has?.(e) || S?.set?.(e, n), [...t?.values?.() || []].map((r) => Bt(e, r, n));
    }
    return e;
  }
}, H = (e) => ({
  storeSet: jt(j, e),
  mixinSet: S?.get?.(e),
  behaviorSet: Ye?.get?.(e)
}), Bt = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= S?.get?.(e), n?.has?.(t) || (n?.add?.(t), M?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, H(e))), e;
}, It = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), S = globalThis[It] ??= /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), M = globalThis[_t] ??= /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), O = globalThis[Ft] ??= /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), J = globalThis[$t] ??= /* @__PURE__ */ new WeakMap(), Xe = (e, t) => {
  typeof t == "string" && (t = O?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => O?.get?.(s)).filter((s) => !!s)), i = S?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  M?.has?.(t) || M?.set?.(t, /* @__PURE__ */ new WeakSet()), S?.has?.(e) || S?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, H(e)), (r.has(t) || !M?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, H(e)), n.add(J?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), M?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, H(e))));
}, pe = /* @__PURE__ */ new Set(), Dt = (e = typeof document < "u" ? document : null) => {
  if (e)
    return pe?.has?.(e) || (pe?.add?.(e), Ke(e, "*", "data-mixin", (t) => me(t.target)), Pt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && me(n);
    }), at(e)), e;
}, me = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => O?.get?.(n)).filter((n) => !!n))].map?.((n) => Xe(e, n));
}, qt = (e, t) => {
  e.forEach((n) => t ? Xe(n, t) : me(n));
}, Zt = (e) => {
  for (const t of pe) qt(t?.querySelectorAll?.("[data-mixin]"), e);
}, Kt = new FinalizationRegistry((e) => {
  O?.delete?.(e);
}), Yt = (e, t) => {
  if (!J?.has?.(t)) {
    const n = e?.trim?.();
    n && (J?.set?.(t, n), O?.set?.(n, t), Kt?.register?.(t, n), Zt(t));
  }
};
Dt(typeof document < "u" ? document : null);
var xe = class {
  constructor(e = null) {
    e && Yt(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return j.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return H(e);
  }
  get elements() {
    return M?.get?.(this);
  }
  get storage() {
    return j?.get?.(this.name || "");
  }
  get name() {
    return J?.get?.(this);
  }
}, tr = (e, t, n) => {
  const r = n;
  B(n) && (n = n.value);
  const i = (n = ve(n)) != null && n !== !1;
  return R(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, nr = (e, t, n) => {
  if (!(t = typeof t == "string" ? Oe(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return B(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && R(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, rr = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return B(n) && (n = n?.value), t = Oe(t), r?.[t] === (n = ve(n)) || (n == null || n === !1 ? delete r[t] : R(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, Xt = (e, t) => e.style.removeProperty(je(t)), ir = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || R(n, () => {
    Ge(n) || B(n) || Qe(n) ? V(e, t, n) : n == null && Xt(e, t);
  }), e;
}, or = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return B(n) && (n = n.value), t = je(t), e?.getAttribute?.(t) === (n = ve(n)) || R(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function ie(e, t) {
  const n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), o = Math.max(e.y, t.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: o,
    width: i - n,
    height: o - r
  };
}
var q = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, oe = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ae = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Ut = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), G = globalThis[Ut] ??= /* @__PURE__ */ new WeakMap(), b = (e, t, n) => {
  const r = G.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), G.set(e, r);
}, Se = (e, t) => {
  const n = G.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && G.delete(e);
  }
}, E = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, Ue = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Jt = class extends xe {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let i = !1, o = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const a = (c) => {
      const m = t.getBoundingClientRect();
      return {
        x: c.clientX - m.left,
        y: c.clientY - m.top
      };
    }, d = () => {
      const c = ie(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(q.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: t
        }
      })), d()));
    }, l = (c) => {
      if (!i) return;
      s = a(c), d();
      const m = ie(o, s);
      t.dispatchEvent(new CustomEvent(q.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, v = (c) => {
      if (!i) return;
      i = !1;
      try {
        t.releasePointerCapture(c.pointerId);
      } catch {
      }
      const m = ie(o, s);
      t.dispatchEvent(new CustomEvent(q.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: m,
          host: t
        }
      }));
    }, f = (c) => {
      i && v(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(q.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return b(t, "ui-junction-select", () => {
      n.remove();
    }), b(t, "ui-junction-select", p(t, "pointerdown", h)), b(t, "ui-junction-select", p(t, "pointermove", l)), b(t, "ui-junction-select", p(t, "pointerup", f)), b(t, "ui-junction-select", p(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Se(t, "ui-junction-select"), this;
  }
}, Gt = class extends xe {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    V(t, "--jx-drag-x", E(t, "--jx-drag-x")), V(t, "--jx-drag-y", E(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Ue(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = E(t, "--jx-drag-x"), d = E(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(oe.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, l = (f) => {
      if (!i) return;
      const u = f.clientX - o, c = f.clientY - s, m = a + u, g = d + c;
      V(t, "--jx-drag-x", m), V(t, "--jx-drag-y", g), t.dispatchEvent(new CustomEvent(oe.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: c,
          x: m,
          y: g
        }
      }));
    }, v = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(oe.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: E(t, "--jx-drag-x"),
            y: E(t, "--jx-drag-y")
          }
        }));
      }
    };
    return b(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), b(t, "ui-junction-drag", p(r, "pointerdown", h)), b(t, "ui-junction-drag", p(r, "pointermove", l)), b(t, "ui-junction-drag", p(r, "pointerup", v)), b(t, "ui-junction-drag", p(r, "pointercancel", v)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Se(t, "ui-junction-drag"), this;
  }
}, Qt = class extends xe {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ue(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), l = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(ae.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: a
        }
      }))));
    }, v = (u) => {
      if (!r) return;
      const c = Math.max(d, s + (u.clientX - i)), m = Math.max(h, a + (u.clientY - o));
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(ae.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: m
        }
      }));
    }, f = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(ae.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return b(t, "ui-junction-resize", p(n, "pointerdown", l)), b(t, "ui-junction-resize", p(n, "pointermove", v)), b(t, "ui-junction-resize", p(n, "pointerup", f)), b(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && Se(t, "ui-junction-resize"), this;
  }
};
new Jt();
new Gt();
new Qt();
export {
  xe as DOMMixin,
  Gt as JunctionDragMixin,
  Qt as JunctionResizeMixin,
  Jt as JunctionSelectMixin,
  _ as MATCH,
  An as MOC,
  se as MOCElement,
  cn as RAFBehavior,
  wn as REGEX,
  un as ROOT,
  Yn as WavyShapedCircle,
  nn as __exportProperties,
  ke as __registeredCssProperties,
  p as addEvent,
  Mn as addEvents,
  kn as addEventsList,
  Dt as addRoot,
  Kn as animateHide,
  Zn as animateShow,
  le as availSize,
  jn as bbh,
  Wn as bbw,
  Ht as bindBehavior,
  Bt as bindMixins,
  Rt as bindStore,
  K as borderBoxHeight,
  Z as borderBoxWidth,
  Ye as boundBehaviors,
  S as boundMixinSet,
  Rn as cbh,
  On as cbw,
  zn as changeZoom,
  In as classes,
  At as computeCaretPosition,
  Dn as computeCaretPositionFromClient,
  Nn as containsOrSelf,
  X as contentBoxHeight,
  Y as contentBoxWidth,
  xn as createElementVanilla,
  He as createFixedOverlayViewport,
  Xt as deleteStyleProperty,
  on as detectMobile,
  pn as doBorderObserve,
  hn as doContentObserve,
  gt as ensureViewportInteractiveWidgetOverlay,
  _n as ensureViewportTracking,
  W as ensureVirtualKeyboardOverlay,
  Fn as fixOrientToScreen,
  Pn as fixedClientZoom,
  De as getAvailSize,
  Hn as getBoundingOrientRect,
  Ct as getCorrectOrientation,
  H as getElementRelated,
  Tn as getEventTarget,
  ut as getOffsetParent,
  an as getOffsetParentChain,
  jt as getStoresOfElement,
  Vn as getZoom,
  or as handleAttribute,
  rr as handleDataset,
  tr as handleHidden,
  nr as handleProperty,
  ir as handleStyleChange,
  ne as hasParent,
  vn as html,
  En as includeSelf,
  yn as indexOf,
  Ze as initTextStyle,
  Sn as isElement,
  Ln as isInFocus,
  rn as isMobile,
  sn as isNearlyIdentity,
  bn as isValidParent,
  lt as makeRAFCycle,
  $n as measureInputInFocus,
  Nt as measureText,
  G as mixinDisposers,
  M as mixinElements,
  J as mixinNamespace,
  O as mixinRegistry,
  Kt as nameRegistryF,
  j as namedStoreMaps,
  Jn as observeAttribute,
  Ke as observeAttributeBySelector,
  Un as observeBorderBox,
  Pt as observeBySelector,
  Xn as observeContentBox,
  Te as onBorderObserve,
  Ne as onContentObserve,
  T as orientOf,
  kt as orientationNumberMap,
  Re as passiveOpts,
  Bn as readFixedOverlayViewport,
  Lt as readLauncherLayoutFromElement,
  Gn as reflectBehaviors,
  er as reflectMixins,
  Qn as reflectStores,
  Yt as registerMixin,
  Ae as removeEvent,
  Cn as removeEvents,
  qn as resolveGridCellFromClientPoint,
  pe as roots,
  dn as setAttributes,
  ln as setAttributesIfNull,
  gn as setChecked,
  fn as setIdleInterval,
  dt as throttleMap,
  ce as unfixedClientZoom,
  me as updateAllMixins,
  Xe as updateMixinAttributes,
  qt as updateMixinAttributesAll,
  Zt as updateMixinAttributesAllInRoots,
  we as updateVP,
  mn as url,
  qe as whenAnyScreenChanges,
  pt as zoomOf,
  ht as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgaXNOYXRpdmVDYXBhY2l0b3JIb3N0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQuY3dzcE5hdGl2ZVNoZWxsID09PSBcImNhcGFjaXRvclwiKSByZXR1cm4gdHJ1ZTtcblx0XHRjb25zdCBjYXAgPSBnbG9iYWxUaGlzLkNhcGFjaXRvcjtcblx0XHRyZXR1cm4gdHlwZW9mIGNhcD8uaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmIEJvb2xlYW4oY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLmluc2VydEJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiVEVYVEFSRUFcIiB8fCB0YWcgPT09IFwiU0VMRUNUXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnICE9PSBcIklOUFVUXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdHlwZSA9IFN0cmluZyhlbC50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gIVtcblx0XHRcImJ1dHRvblwiLFxuXHRcdFwiY2hlY2tib3hcIixcblx0XHRcInJhZGlvXCIsXG5cdFx0XCJmaWxlXCIsXG5cdFx0XCJzdWJtaXRcIixcblx0XHRcInJlc2V0XCIsXG5cdFx0XCJpbWFnZVwiLFxuXHRcdFwicmFuZ2VcIixcblx0XHRcImNvbG9yXCIsXG5cdFx0XCJoaWRkZW5cIlxuXHRdLmluY2x1ZGVzKHR5cGUpO1xufTtcbnZhciBpc0NvbGxhcHNlZENhcmV0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdHJldHVybiBCb29sZWFuKHNlbCAmJiBzZWwucmFuZ2VDb3VudCAmJiBzZWwuaXNDb2xsYXBzZWQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBsYXlvdXRMb2NrT3JpZW50ID0gXCJcIjtcbnZhciBsYXlvdXRMb2NrVyA9IDA7XG52YXIgbGF5b3V0TG9ja0ggPSAwO1xudmFyIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG52YXIgaXNMYW5kc2NhcGUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiBzY3JlZW4gIT09IFwidW5kZWZpbmVkXCIgPyBTdHJpbmcoc2NyZWVuLm9yaWVudGF0aW9uPy50eXBlIHx8IFwiXCIpIDogXCJcIjtcblx0XHRpZiAodHlwZS5zdGFydHNXaXRoKFwibGFuZHNjYXBlXCIpKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAodHlwZS5zdGFydHNXaXRoKFwicG9ydHJhaXRcIikpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gQm9vbGVhbih0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRQaHlzaWNhbFNjcmVlbiA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBzY3JlZW4gPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG5cdGNvbnN0IHN3ID0gTnVtYmVyKHNjcmVlbi53aWR0aCkgfHwgMDtcblx0Y29uc3Qgc2ggPSBOdW1iZXIoc2NyZWVuLmhlaWdodCkgfHwgMDtcblx0Y29uc3QgYXcgPSBOdW1iZXIoc2NyZWVuLmF2YWlsV2lkdGgpIHx8IDA7XG5cdGNvbnN0IGFoID0gTnVtYmVyKHNjcmVlbi5hdmFpbEhlaWdodCkgfHwgMDtcblx0Y29uc3QgdyA9IE1hdGgubWF4KHN3LCBhdyk7XG5cdGNvbnN0IGggPSBNYXRoLm1heChzaCwgYWgpO1xuXHRpZiAoIXcgJiYgIWgpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG5cdGNvbnN0IGxhbmRzY2FwZSA9IGlzTGFuZHNjYXBlKCk7XG5cdGNvbnN0IGJveExhbmRzY2FwZSA9IHcgPiAwICYmIGggPiAwICYmIHcgPiBoO1xuXHRpZiAobGFuZHNjYXBlICYmIHcgPiAwICYmIGggPiAwICYmIHcgPCBoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRpZiAoIWxhbmRzY2FwZSAmJiBib3hMYW5kc2NhcGUpIHJldHVybiB7XG5cdFx0d2lkdGg6IGgsXG5cdFx0aGVpZ2h0OiB3XG5cdH07XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IHcgfHwgaCxcblx0XHRoZWlnaHQ6IGggfHwgd1xuXHR9O1xufTtcbnZhciBjbGFtcFRvUGh5c2ljYWwgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuXHRjb25zdCBwaHlzID0gcmVhZFBoeXNpY2FsU2NyZWVuKCk7XG5cdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRjb25zdCBjbGllbnRXID0gTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCAwO1xuXHRjb25zdCBjbGllbnRIID0gTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgMDtcblx0Y29uc3QgY2FwVyA9IE1hdGgubWF4KHBoeXMud2lkdGgsIGlubmVyVywgY2xpZW50Vyk7XG5cdGNvbnN0IGNhcEggPSBNYXRoLm1heChwaHlzLmhlaWdodCwgaW5uZXJILCBjbGllbnRIKTtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogY2FwVyA+IDAgPyBNYXRoLm1pbih3aWR0aCwgY2FwVykgOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGNhcEggPiAwID8gTWF0aC5taW4oaGVpZ2h0LCBjYXBIKSA6IGhlaWdodFxuXHR9O1xufTtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGNhcEggPSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodDtcblx0Y29uc3QgbmF0aXZlQ2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGxldCBrZXlib2FyZCA9IGNhcEggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IGNhcEggOiAhbmF0aXZlQ2FwICYmIHZrSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdmtIIDogIW5hdGl2ZUNhcCAmJiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSBpc0xhbmRzY2FwZSgpID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSAhbmF0aXZlQ2FwICYmIGxheW91dExvY2tIID4gMCAmJiBsYXlvdXRMb2NrSCAtIGNhbmRpZGF0ZUggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWDtcblx0aWYgKGtleWJvYXJkIDwgS0VZQk9BUkRfT1ZFUkxBWV9QWCAmJiBzdWRkZW5TaHJpbmspIHtcblx0XHRjb25zdCBzaHJpbmsgPSBNYXRoLm1heCgwLCBsYXlvdXRMb2NrSCAtIGNhbmRpZGF0ZUgsIGxheW91dExvY2tIIC0gKHZ2SCArIHZ2VG9wKSk7XG5cdFx0aWYgKHNocmluayA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBrZXlib2FyZCA9IHNocmluaztcblx0fVxuXHRjb25zdCBleHBhbmRlZFNlbGVjdGlvbiA9ICFpc0NvbGxhcHNlZENhcmV0KCk7XG5cdGlmIChleHBhbmRlZFNlbGVjdGlvbiAmJiBsYXN0U3RhYmxlS2V5Ym9hcmQgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBsYXN0U3RhYmxlS2V5Ym9hcmQ7XG5cdGVsc2UgaWYgKGtleWJvYXJkID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGxhc3RTdGFibGVLZXlib2FyZCA9IGtleWJvYXJkO1xuXHRlbHNlIGlmICghaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG5cdGlmICghKGtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCBzdWRkZW5TaHJpbmsgfHwgZXhwYW5kZWRTZWxlY3Rpb24pKSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBjYW5kaWRhdGVXO1xuXHRcdGxheW91dExvY2tIID0gY2FuZGlkYXRlSDtcblx0fSBlbHNlIHtcblx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGNhbmRpZGF0ZVcsIGxheW91dExvY2tXKTtcblx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGNhbmRpZGF0ZUgsIGxheW91dExvY2tIKTtcblx0fVxuXHRjb25zdCBsb2NrZWQgPSBjbGFtcFRvUGh5c2ljYWwobGF5b3V0TG9ja1cgfHwgY2FuZGlkYXRlVywgbGF5b3V0TG9ja0ggfHwgY2FuZGlkYXRlSCk7XG5cdGxheW91dExvY2tXID0gbG9ja2VkLndpZHRoO1xuXHRsYXlvdXRMb2NrSCA9IGxvY2tlZC5oZWlnaHQ7XG5cdGNvbnN0IGtiID0gbG9ja2VkLmhlaWdodCA+IDAgPyBNYXRoLm1pbihrZXlib2FyZCwgbG9ja2VkLmhlaWdodCkgOiBrZXlib2FyZDtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogbG9ja2VkLndpZHRoLFxuXHRcdGhlaWdodDogbG9ja2VkLmhlaWdodCxcblx0XHRrZXlib2FyZDoga2Jcblx0fTtcbn07XG52YXIgaXNJbWVDaHJvbWVMb2NrID0gKGVsKSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiSFRNTFwiIHx8IHRhZyA9PT0gXCJCT0RZXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBjbHMgPSBlbC5jbGFzc0xpc3Q7XG5cdHJldHVybiBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX192aWV3cG9ydFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX25hdlwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtcm9vdFwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtd29ya3NwYWNlXCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93X19ib2R5XCIpIHx8IGNscy5jb250YWlucyhcIndmLWZyYW1lXCIpIHx8IGNscy5jb250YWlucyhcInVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fdG9vbGJhclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jb250ZW50XCIpIHx8IGNscy5jb250YWlucyhcImN3LXZpZXctdmlld2VyLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImN3LW1hcmtkb3duLXZpZXctZnJhbWVcIik7XG59O1xudmFyIHBhcmVudE9mID0gKGVsKSA9PiB7XG5cdGlmICghZWwpIHJldHVybiBudWxsO1xuXHRpZiAoZWwucGFyZW50RWxlbWVudCkgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBlbC5nZXRSb290Tm9kZSgpO1xuXHRyZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290Lmhvc3QgOiBudWxsO1xufTtcbnZhciBpc1Njcm9sbHBvcnQgPSAoZWwpID0+IHtcblx0aWYgKGlzSW1lQ2hyb21lTG9jayhlbCkpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0Y29uc3Qgb3kgPSBzdHlsZS5vdmVyZmxvd1kgfHwgc3R5bGUub3ZlcmZsb3dCbG9jaztcblx0aWYgKG95ICE9PSBcImF1dG9cIiAmJiBveSAhPT0gXCJzY3JvbGxcIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0ICsgMTtcbn07XG52YXIgZmluZEltZVNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2Nyb2xscG9ydChub2RlKSkgcmV0dXJuIG5vZGU7XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciByZWFkQ2FyZXRSZWN0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdGlmIChzZWw/LnJhbmdlQ291bnQpIHtcblx0XHRcdGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cdFx0XHRjb25zdCByZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XG5cdFx0XHRjb25zdCByZWN0ID0gcmVjdHMubGVuZ3RoID8gcmVjdHNbcmVjdHMubGVuZ3RoIC0gMV0gOiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChyZWN0ICYmIChyZWN0LmhlaWdodCB8fCByZWN0LndpZHRoIHx8IHJlY3QudG9wIHx8IHJlY3QuYm90dG9tKSkgcmV0dXJuIHJlY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG59O1xudmFyIHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0ID0gKCkgPT4ge1xuXHRpZiAoIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghaXNDb2xsYXBzZWRDYXJldCgpKSByZXR1cm47XG5cdGNvbnN0IGtleWJvYXJkID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCB2aXNpYmxlQm90dG9tID0gKE51bWJlcih2dj8uaGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKSAtIE1hdGgubWF4KDgsIGtleWJvYXJkID8gMTIgOiAwKTtcblx0aWYgKHZpc2libGVCb3R0b20gPD0gMCkgcmV0dXJuO1xuXHRjb25zdCByZWN0ID0gcmVhZENhcmV0UmVjdCgpO1xuXHRpZiAoIXJlY3QpIHJldHVybjtcblx0Y29uc3Qgb3ZlcmZsb3cgPSByZWN0LmJvdHRvbSAtIHZpc2libGVCb3R0b207XG5cdGlmIChvdmVyZmxvdyA8PSAxKSByZXR1cm47XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0aWYgKHBvcnQpIHBvcnQuc2Nyb2xsVG9wICs9IG92ZXJmbG93O1xufTtcbnZhciBwaW5WaXN1YWxWaWV3cG9ydCA9ICgpID0+IHtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGlmICghdnYpIHJldHVybjtcblx0Y29uc3QgdG9wID0gTnVtYmVyKHZ2Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgbGVmdCA9IE51bWJlcih2di5vZmZzZXRMZWZ0KSB8fCAwO1xuXHRpZiAoIXRvcCAmJiAhbGVmdCkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdHZ2LnNjcm9sbFRvKHtcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRiZWhhdmlvcjogXCJpbnN0YW50XCJcblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0dHJ5IHtcblx0XHRcdHZ2LnNjcm9sbFRvPy4oMCwgMCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xudmFyIG92ZXJsYXlQaW5uaW5nID0gZmFsc2U7XG52YXIgcmVzZXRDaHJvbWVTY3JvbGwgPSAoc3RhcnQpID0+IHtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KHN0YXJ0KTtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUgIT09IHBvcnQgJiYgKGlzSW1lQ2hyb21lTG9jayhub2RlKSB8fCBub2RlLnNjcm9sbFRvcCB8fCBub2RlLnNjcm9sbExlZnQpKSB7XG5cdFx0XHRpZiAobm9kZSAhPT0gcG9ydCkge1xuXHRcdFx0XHRub2RlLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsTGVmdCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvdmVybGF5UGlubmluZykgcmV0dXJuO1xuXHRpZiAoIShyZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZCA+IDAgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSByZXR1cm47XG5cdG92ZXJsYXlQaW5uaW5nID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRwaW5WaXN1YWxWaWV3cG9ydCgpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cuc2Nyb2xsWSkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKHJvb3Quc2Nyb2xsVG9wIHx8IHJvb3Quc2Nyb2xsTGVmdCkgcm9vdC5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoYm9keSAmJiAoYm9keS5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxMZWZ0KSkgYm9keS5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoIWlzQ29sbGFwc2VkQ2FyZXQoKSkgcmVzZXRDaHJvbWVTY3JvbGwoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdH0gZmluYWxseSB7XG5cdFx0b3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcblx0fVxufTtcbnZhciBzY3JvbGxJbnRvVmlld1BhdGNoZWQgPSBmYWxzZTtcbnZhciBwYXRjaEltZVNjcm9sbEludG9WaWV3ID0gKCkgPT4ge1xuXHRpZiAoc2Nyb2xsSW50b1ZpZXdQYXRjaGVkIHx8IHR5cGVvZiBFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IHRydWU7XG5cdGNvbnN0IG9yaWcgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldztcblx0RWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbihhcmcpIHtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiYgIWlzQ29sbGFwc2VkQ2FyZXQoKSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNJbWVDaHJvbWVMb2NrKHRoaXMpKSByZXR1cm47XG5cdFx0cmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBhcmcpO1xuXHR9O1xufTtcbnZhciBwaW5JbWVDaHJvbWUgPSAob3B0cykgPT4ge1xuXHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdGlmICghb3B0cz8uY2FyZXQpIHJldHVybjtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0cGluSW1lQ2FyZXRJblNjcm9sbHBvcnQoKTtcblx0fSk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKTtcblx0Y29uc3QgdnZCbG9jayA9IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnY/LndpZHRoID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwKX1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt2dj8uaGVpZ2h0ID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVySGVpZ2h0IDogMCl9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt2dj8ub2Zmc2V0TGVmdCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt2dj8ub2Zmc2V0VG9wID8/IDB9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodnY/LnNjYWxlID8/IDEpLFxuXHRcdFwiLS1sdi13aWR0aFwiOiBgJHtsYXlvdXQud2lkdGh9cHhgLFxuXHRcdFwiLS1sdi1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLWtleWJvYXJkLW92ZXJsYXktaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGAsXG5cdFx0XCItLXZpcnR1YWwta2V5Ym9hcmQtaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGBcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdmstb3BlblwiKTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHBoeXMgPSByZWFkUGh5c2ljYWxTY3JlZW4oKTtcblx0XHRjb25zdCBpbm5lclcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwIDogMDtcblx0XHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdFx0Y29uc3QgY2FwVyA9IE1hdGgubWF4KHBoeXMud2lkdGgsIGlubmVyVywgbGF5b3V0LndpZHRoKTtcblx0XHRjb25zdCBjYXBIID0gTWF0aC5tYXgocGh5cy5oZWlnaHQsIGlubmVySCwgbGF5b3V0LmhlaWdodCk7XG5cdFx0Y29uc3Qgc2NyZWVuVyA9IGNhcFcgPiAwID8gYCR7Y2FwV31weGAgOiBcIjEwMGx2aVwiO1xuXHRcdGNvbnN0IHNjcmVlbkggPSBjYXBIID4gMCA/IGAke2NhcEh9cHhgIDogXCIxMDBsdmJcIjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBzY3JlZW5XLFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBzY3JlZW5ILFxuXHRcdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIxMDBsdmJcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIxMDBsdmlcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi52dkJsb2NrXG5cdH07XG59O1xudmFyIGF2YWlsU2l6ZSA9IGdldEF2YWlsU2l6ZSgpO1xudmFyIGNsYXNzZXMgPSBbW1wiOnJvb3QsIDpob3N0LCA6c2NvcGVcIiwgYXZhaWxTaXplXV07XG52YXIgb3JpZW50YXRpb25OdW1iZXJNYXAgPSB7XG5cdFwicG9ydHJhaXQtcHJpbWFyeVwiOiAwLFxuXHRcImxhbmRzY2FwZS1wcmltYXJ5XCI6IDEsXG5cdFwicG9ydHJhaXQtc2Vjb25kYXJ5XCI6IDIsXG5cdFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOiAzXG59O1xudmFyIHVwZGF0ZVZQID0gKGV2KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdE9iamVjdC5hc3NpZ24oYXZhaWxTaXplLCBnZXRBdmFpbFNpemUoKSk7XG5cdE9iamVjdC5lbnRyaWVzKGF2YWlsU2l6ZSkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RzID0gcnVsZT8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuXHRcdGlmICghZXhpc3RzIHx8IGV4aXN0cyAhPSBwcm9wVmFsdWUpIHJ1bGU/LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKHByb3BOYW1lLCBwcm9wVmFsdWUgfHwgXCJcIiwgXCJcIik7XG5cdH0pO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudGF0aW9uLXNlY29uZGFyeVwiLCBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlPy5lbmRzV2l0aD8uKFwic2Vjb25kYXJ5XCIpID8gXCIxXCIgOiBcIjBcIik7XG59O1xudmFyIGdldENvcnJlY3RPcmllbnRhdGlvbiA9ICgpID0+IHtcblx0bGV0IG9yaWVudGF0aW9uVHlwZSA9IHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJwb3J0cmFpdC1wcmltYXJ5XCI7XG5cdGlmICghZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKChkaXNwbGF5LW1vZGU6IGZ1bGxzY3JlZW4pIG9yIChkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpIG9yIChkaXNwbGF5LW1vZGU6IHdpbmRvdy1jb250cm9scy1vdmVybGF5KSlcIikubWF0Y2hlcykge1xuXHRcdGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJsYW5kc2NhcGVcIiwgXCJwb3J0cmFpdFwiKTtcblx0XHRlbHNlIGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIik7XG5cdH1cblx0cmV0dXJuIG9yaWVudGF0aW9uVHlwZTtcbn07XG52YXIgcGFzc2l2ZU9wdHMkMSA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xudmFyIGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAocmF3KSA9PiB7XG5cdGNvbnN0IG5leHQgPSBOdW1iZXIocmF3KSB8fCAwO1xuXHRpZiAobmV4dCA+IDApIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gbmV4dDtcblx0dXBkYXRlVlAoKTtcblx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG59O1xudmFyIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAoKSA9PiB7XG5cdGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcblx0dXBkYXRlVlAoKTtcbn07XG52YXIgYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzID0gKCkgPT4ge1xuXHRpZiAod2luZG93S2V5Ym9hcmRCb3VuZCB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHdpbmRvd0tleWJvYXJkQm91bmQgPSB0cnVlO1xuXHRjb25zdCBvblNob3cgPSAoZXYpID0+IHtcblx0XHRjb25zdCBlID0gZXY7XG5cdFx0Y29uc3QgZGV0YWlsID0gZS5kZXRhaWw7XG5cdFx0Y29uc3QgZnJvbURldGFpbCA9IHR5cGVvZiBkZXRhaWwgPT09IFwic3RyaW5nXCIgPyAoKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoZGV0YWlsKT8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0fSkoKSA6IGRldGFpbD8ua2V5Ym9hcmRIZWlnaHQ7XG5cdFx0YXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChlLmtleWJvYXJkSGVpZ2h0ID8/IGZyb21EZXRhaWwpO1xuXHR9O1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgb25TaG93KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgYmluZENhcGFjaXRvcktleWJvYXJkID0gKCkgPT4ge1xuXHRiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMoKTtcblx0aWYgKGNhcGFjaXRvcktleWJvYXJkQm91bmQgfHwgdHlwZW9mIGdsb2JhbFRoaXMgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgY2FwID0gZ2xvYmFsVGhpcy5DYXBhY2l0b3I7XG5cdGNvbnN0IEtleWJvYXJkID0gY2FwPy5QbHVnaW5zPy5LZXlib2FyZDtcblx0aWYgKCFLZXlib2FyZD8uYWRkTGlzdGVuZXIpIHJldHVybjtcblx0aWYgKHR5cGVvZiBjYXAuaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmICFjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKSByZXR1cm47XG5cdGNhcGFjaXRvcktleWJvYXJkQm91bmQgPSB0cnVlO1xuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFNjcm9sbD8uKHsgaXNEaXNhYmxlZDogdHJ1ZSB9KTtcblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFJlc2l6ZU1vZGU/Lih7IG1vZGU6IFwibm9uZVwiIH0pO1xuXHR9IGNhdGNoIHt9XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkU2hvd1wiLCAoaW5mbykgPT4gYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodChpbmZvPy5rZXlib2FyZEhlaWdodCkpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmREaWRIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xufTtcbnZhciBlbnN1cmVWaWV3cG9ydFRyYWNraW5nID0gKCkgPT4ge1xuXHRpZiAodmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCA9IHRydWU7XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHR3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7fSk7XG59O1xudmFyIHdoZW5BbnlTY3JlZW5DaGFuZ2VzID0gKGNiKSA9PiB7XG5cdGxldCB0aWNraW5nID0gZmFsc2U7XG5cdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRpZiAoIXRpY2tpbmcpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZVZQKCk7XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHRcdHRpY2tpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0dGlja2luZyA9IHRydWU7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCB1bnN1YnNjcmliZXJzID0gW107XG5cdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRwYXRjaEltZVNjcm9sbEludG9WaWV3KCk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChuYXZpZ2F0b3I/LnZpcnR1YWxLZXlib2FyZCwgXCJnZW9tZXRyeWNoYW5nZVwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChzY3JlZW4/Lm9yaWVudGF0aW9uLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIFwiY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNpblwiLCAoKSA9PiB7XG5cdFx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdFx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRcdGlmIChpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuXHRcdFx0bGF5b3V0TG9ja1cgPSBNYXRoLm1heChsYXlvdXRMb2NrVywgTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwLCBOdW1iZXIod2luZG93LnZpc3VhbFZpZXdwb3J0Py53aWR0aCkgfHwgMCk7XG5cdFx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGxheW91dExvY2tILCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwLCBOdW1iZXIod2luZG93LnZpc3VhbFZpZXdwb3J0Py5oZWlnaHQpIHx8IDApO1xuXHRcdH1cblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwge1xuXHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0cGFzc2l2ZTogdHJ1ZVxuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c291dFwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHR1cGRhdGUoKTtcblx0cnVuV2hlbklkbGUoKCkgPT4gdXBkYXRlKCksIDEwMCk7XG5cdHJldHVybiAoKSA9PiB1bnN1YnNjcmliZXJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbn07XG52YXIgZml4T3JpZW50VG9TY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAoIWVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnM/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIikpIHtcblx0XHRlbGVtZW50Py5jbGFzc0xpc3Q/LmFkZD8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKTtcblx0XHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG5cdFx0XHRlbGVtZW50Lm9yaWVudCA9IG5leHQ7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0XHRlbGVtZW50LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKFwiLS1vcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHR9KTtcblx0fVxufTtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKSwgeyBvbmNlOiB0cnVlIH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gKHRhcmdldCkgPT4gYXBwZWFyKHRhcmdldCwgZGVjb3JTaG93KTtcbnZhciBhbmltYXRlSGlkZSA9ICh0YXJnZXQpID0+IGRpc2FwcGVhcih0YXJnZXQsIGRlY29ySGlkZSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9TaGFwZS50c1xudmFyIFdhdnlTaGFwZWRDaXJjbGUgPSAoc3RlcHMgPSAxMDAsIGFtcGxpdHVkZSA9IC4wNSwgZnJlcSA9IDgpID0+IHtcblx0Y29uc3QgcG9pbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykgcG9pbnRzLnB1c2goaSAvIHN0ZXBzKTtcblx0Y29uc3QgYW5nbGUgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYygke3N0ZXB9cmFkICogcGkgKiAyKWA7XG5cdH07XG5cdGNvbnN0IHZhcmlhbnQgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYyhjYWxjKGNvcyhjYWxjKHZhcigtLWNsaXAtZnJlcSwgOCkgKiAke2FuZ2xlKHN0ZXApfSkpICogMC41ICsgMC41KSAqIHZhcigtLWNsaXAtYW1wbGl0dWRlLCAwKSlgO1xuXHR9O1xuXHRjb25zdCBmdW5jID0gKHN0ZXApID0+IFtgY2FsYyhjYWxjKDAuNSArIGNhbGMoY29zKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYCwgYGNhbGMoY2FsYygwLjUgKyBjYWxjKHNpbigke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWBdO1xuXHRyZXR1cm4ge1xuXHRcdFwiLS1jbGlwLWFtcGxpdHVkZVwiOiBhbXBsaXR1ZGUsXG5cdFx0XCItLWNsaXAtZnJlcVwiOiBmcmVxLFxuXHRcdFwiLS1jbGlwLXBhdGhcIjogYHBvbHlnb24oJHtwb2ludHMubWFwKChzdGVwKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnVuYyhzdGVwKS5qb2luKFwiIFwiKTtcblx0XHR9KS5qb2luKFwiLCBcIil9KWBcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZVN0eWxlVHJlZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdDtcbn07XG52YXIgdXBkYXRlQWxsTWl4aW5zID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSldLm1hcD8uKChtKSA9PiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwgPSAoZWxlbWVudHMsIG1peGluKSA9PiB7XG5cdGVsZW1lbnRzLmZvckVhY2goKGUpID0+IG1peGluID8gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGUsIG1peGluKSA6IHVwZGF0ZUFsbE1peGlucyhlKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMgPSAobWl4aW4pID0+IHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwocm9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBtaXhpbik7XG59O1xudmFyIG5hbWVSZWdpc3RyeUYgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGtleSkgPT4ge1xuXHRtaXhpblJlZ2lzdHJ5Py5kZWxldGU/LihrZXkpO1xufSk7XG52YXIgcmVnaXN0ZXJNaXhpbiA9IChuYW1lLCBtaXhpbikgPT4ge1xuXHRpZiAoIW1peGluTmFtZXNwYWNlPy5oYXM/LihtaXhpbikpIHtcblx0XHRjb25zdCBrZXkgPSBuYW1lPy50cmltPy4oKTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRtaXhpbk5hbWVzcGFjZT8uc2V0Py4obWl4aW4sIGtleSk7XG5cdFx0XHRtaXhpblJlZ2lzdHJ5Py5zZXQ/LihrZXksIG1peGluKTtcblx0XHRcdG5hbWVSZWdpc3RyeUY/LnJlZ2lzdGVyPy4obWl4aW4sIGtleSk7XG5cdFx0XHR1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKTtcblx0XHR9XG5cdH1cbn07XG5hZGRSb290KHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBET01NaXhpbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9IG51bGwpIHtcblx0XHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZWxlbWVudCk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIG1peGluRWxlbWVudHM/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcz8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBtaXhpbk5hbWVzcGFjZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9IYW5kbGVyLnRzXG52YXIgaGFuZGxlSGlkZGVuID0gKGVsZW1lbnQsIF8sIHZpc2libGUpID0+IHtcblx0Y29uc3QgJHJlZiA9IHZpc2libGU7XG5cdGlmIChoYXNWYWx1ZSh2aXNpYmxlKSkgdmlzaWJsZSA9IHZpc2libGUudmFsdWU7XG5cdGNvbnN0IGlzVmlzaWJsZSA9ICh2aXNpYmxlID0gbm9ybWFsaXplUHJpbWl0aXZlKHZpc2libGUpKSAhPSBudWxsICYmIHZpc2libGUgIT09IGZhbHNlO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGVsZW1lbnQuaGlkZGVuID0gIWlzVmlzaWJsZTtcblx0XHRlbHNlIGlmIChpc1Zpc2libGUpIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIik7XG5cdFx0ZWxzZSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIsIFwiXCIpO1xuXHR9KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGhhbmRsZVByb3BlcnR5ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCEocHJvcCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBrZWJhYlRvQ2FtZWwocHJvcCkgOiBwcm9wKSB8fCAhZWwgfHwgW1xuXHRcdFwic3R5bGVcIixcblx0XHRcImRhdGFzZXRcIixcblx0XHRcImF0dHJpYnV0ZVN0eWxlTWFwXCIsXG5cdFx0XCJzdHlsZU1hcFwiLFxuXHRcdFwiY29tcHV0ZWRTdHlsZU1hcFwiXG5cdF0uaW5kZXhPZihwcm9wIHx8IFwiXCIpICE9IC0xKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdGlmIChlbD8uW3Byb3BdID09PSB2YWwpIHJldHVybiBlbDtcblx0aWYgKGVsPy5bcHJvcF0gIT09IHZhbCkgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHZhbCAhPSBudWxsKSBlbFtwcm9wXSA9IHZhbDtcblx0XHRlbHNlIGRlbGV0ZSBlbFtwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlRGF0YXNldCA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IGRhdGFzZXRSZWYgPSBlbD8uZGF0YXNldDtcblx0aWYgKCFwcm9wIHx8ICFlbCB8fCAhZGF0YXNldFJlZikgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsPy52YWx1ZTtcblx0cHJvcCA9IGtlYmFiVG9DYW1lbChwcm9wKTtcblx0aWYgKGRhdGFzZXRSZWY/Lltwcm9wXSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHRpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZSkgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdGVsc2UgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIikgZGF0YXNldFJlZltwcm9wXSA9IFN0cmluZyh2YWwpO1xuXHRcdGVsc2UgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGRlbGV0ZVN0eWxlUHJvcGVydHkgPSAoZWwsIG5hbWUpID0+IGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihuYW1lKSk7XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9IFwic3RyaW5nXCIgfHwgIWVsIHx8ICFzdHlsZVJlZikgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKHZhbCwgKCkgPT4ge1xuXHRcdGlmIChpc1ZhbCh2YWwpIHx8IGhhc1ZhbHVlKHZhbCkgfHwgaXNWYWx1ZVVuaXQodmFsKSkgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcCwgdmFsKTtcblx0XHRlbHNlIGlmICh2YWwgPT0gbnVsbCkgZGVsZXRlU3R5bGVQcm9wZXJ0eShlbCwgcHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZUF0dHJpYnV0ZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghcHJvcCB8fCAhZWwpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0cHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wKTtcblx0aWYgKGVsPy5nZXRBdHRyaWJ1dGU/Lihwcm9wKSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiICYmIHZhbCAhPSBudWxsICYmICh0eXBlb2YgdmFsID09IFwiYm9vbGVhblwiID8gdmFsID09IHRydWUgOiB0cnVlKSkgZWw/LnNldEF0dHJpYnV0ZT8uKHByb3AsIFN0cmluZyh2YWwpKTtcblx0XHRlbHNlIGVsPy5yZW1vdmVBdHRyaWJ1dGU/Lihwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi90eXBlcy50c1xuZnVuY3Rpb24ganVuY3Rpb25Ub0JveChhLCBiKSB7XG5cdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihhLngsIGIueCk7XG5cdGNvbnN0IHRvcCA9IE1hdGgubWluKGEueSwgYi55KTtcblx0Y29uc3QgcmlnaHQgPSBNYXRoLm1heChhLngsIGIueCk7XG5cdGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KGEueSwgYi55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGg6IHJpZ2h0IC0gbGVmdCxcblx0XHRoZWlnaHQ6IGJvdHRvbSAtIHRvcFxuXHR9O1xufVxudmFyIEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSlVOQ1RJT05fRFJBR19FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL0p1bmN0aW9uTWl4aW5zLnRzXG52YXIgbWl4aW5EaXNwb3NlcnNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG1peGluRGlzcG9zZXJzID0gZ2xvYmFsVGhpc1ttaXhpbkRpc3Bvc2Vyc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHB1c2hEaXNwb3NhYmxlID0gKGhvc3QsIG1peGluTmFtZSwgZm4pID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGxpc3QgPSBtYXAuZ2V0KG1peGluTmFtZSkgPz8gW107XG5cdGxpc3QucHVzaChmbik7XG5cdG1hcC5zZXQobWl4aW5OYW1lLCBsaXN0KTtcblx0bWl4aW5EaXNwb3NlcnMuc2V0KGhvc3QsIG1hcCk7XG59O1xudmFyIHJ1bkRpc3Bvc2VycyA9IChob3N0LCBtaXhpbk5hbWUpID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpO1xuXHRjb25zdCBsaXN0ID0gbWFwPy5nZXQobWl4aW5OYW1lKTtcblx0aWYgKCFsaXN0KSByZXR1cm47XG5cdGZvciAoY29uc3QgZm4gb2YgbGlzdCkgdHJ5IHtcblx0XHRmbigpO1xuXHR9IGNhdGNoIHt9XG5cdG1hcC5kZWxldGUobWl4aW5OYW1lKTtcblx0aWYgKG1hcC5zaXplID09PSAwKSBtaXhpbkRpc3Bvc2Vycy5kZWxldGUoaG9zdCk7XG59O1xudmFyIHBhcnNlUHhWYXIgPSAoaG9zdCwgbmFtZSkgPT4ge1xuXHRjb25zdCByYXcgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KT8uZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy50cmltPy4oKSA/PyBcIlwiO1xuXHRjb25zdCBuID0gcGFyc2VGbG9hdChyYXcpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG59O1xudmFyIHF1ZXJ5SGFuZGxlID0gKGhvc3QsIGF0dHIsIGZhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHNlbCA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHIpPy50cmltKCk7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsbGJhY2s7XG5cdGNvbnN0IGZvdW5kID0gaG9zdC5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdHJldHVybiBmb3VuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZm91bmQgOiBmYWxsYmFjaztcbn07XG52YXIgSnVuY3Rpb25TZWxlY3RNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiO1xuXHRcdG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpO1xuXHRcdG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLXotbWF4LCA5OTk5KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaWV3cG9ydEludGVyYWN0aXZlV2lkZ2V0T3ZlcmxheSwgZW5zdXJlVmlld3BvcnRUcmFja2luZywgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEV2ZW50VGFyZ2V0LCBnZXRPZmZzZXRQYXJlbnQsIGdldE9mZnNldFBhcmVudENoYWluLCBnZXRTdG9yZXNPZkVsZW1lbnQsIGdldFpvb20sIGhhbmRsZUF0dHJpYnV0ZSwgaGFuZGxlRGF0YXNldCwgaGFuZGxlSGlkZGVuLCBoYW5kbGVQcm9wZXJ0eSwgaGFuZGxlU3R5bGVDaGFuZ2UsIGhhc1BhcmVudCwgaHRtbCwgaW5jbHVkZVNlbGYsIGluZGV4T2YsIGluaXRUZXh0U3R5bGUsIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOZWFybHlJZGVudGl0eSwgaXNWYWxpZFBhcmVudCwgbWFrZVJBRkN5Y2xlLCBtZWFzdXJlSW5wdXRJbkZvY3VzLCBtZWFzdXJlVGV4dCwgbWl4aW5EaXNwb3NlcnMsIG1peGluRWxlbWVudHMsIG1peGluTmFtZXNwYWNlLCBtaXhpblJlZ2lzdHJ5LCBuYW1lUmVnaXN0cnlGLCBuYW1lZFN0b3JlTWFwcywgb2JzZXJ2ZUF0dHJpYnV0ZSwgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IsIG9ic2VydmVCb3JkZXJCb3gsIG9ic2VydmVCeVNlbGVjdG9yLCBvYnNlcnZlQ29udGVudEJveCwgb25Cb3JkZXJPYnNlcnZlLCBvbkNvbnRlbnRPYnNlcnZlLCBvcmllbnRPZiwgb3JpZW50YXRpb25OdW1iZXJNYXAsIHBhc3NpdmVPcHRzLCByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQsIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3Rlck1peGluLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHRocm90dGxlTWFwLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLEdBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsR0FBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLFVBQW1DO0FBQy9MLFNBQVMsVUFBQUMsSUFBUSxhQUFBQyxJQUFXLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxvQkFBQUMsSUFBa0Isb0JBQUFDLFNBQXdCO0FBRTVGLGNBQWM7QUFHZCxJQUFJQyxLQUFrQyx1QkFBTyxJQUFJLGtDQUFrQyxHQUMvRUMsS0FBNEIsV0FBV0QsRUFBK0IsTUFBc0Isb0JBQUksSUFBSTtBQUN4RztBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEs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LEVBQU8sc0JBQXNCcFgsRUFBRyxTQUFTO0FBQUEsUUFDMUMsUUFBUTtBQUFBLFFBQUM7QUFDVCxRQUFBMEMsRUFBSyxjQUFjLElBQUksWUFBWW1ULEdBQXVCLEtBQUs7QUFBQSxVQUM5RCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsWUFDUCxNQUFBblQ7QUFBQSxZQUNBLE9BQU9BLEVBQUs7QUFBQSxZQUNaLFFBQVFBLEVBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRCxDQUFDLENBQUM7QUFBQTtBQUFBLElBQ0g7QUFDQSxXQUFBc1QsRUFBZXRULEdBQU0sc0JBQXNCeEIsRUFBU2tXLEdBQVEsZUFBZVAsQ0FBTSxDQUFDLEdBQ2xGYixFQUFldFQsR0FBTSxzQkFBc0J4QixFQUFTa1csR0FBUSxlQUFlTixDQUFNLENBQUMsR0FDbEZkLEVBQWV0VCxHQUFNLHNCQUFzQnhCLEVBQVNrVyxHQUFRLGFBQWFKLENBQUksQ0FBQyxHQUM5RWhCLEVBQWV0VCxHQUFNLHNCQUFzQnhCLEVBQVNrVyxHQUFRLGlCQUFpQkosQ0FBSSxDQUFDLEdBQzNFO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBV1AsR0FBSztBQUNmLFVBQU0vVCxJQUFPK1QsR0FBSyxRQUFRO0FBQzFCLFdBQUkvVCxLQUFNeVQsR0FBYXpULEdBQU0sb0JBQW9CLEdBQzFDO0FBQUEsRUFDUjtBQUNEO0FBQ0EsSUFBSThULEdBQW9CO0FBQ3hCLElBQUlVLEdBQWtCO0FBQ3RCLElBQUlZLEdBQW9COyIsCiAgIm5hbWVzIjogWyIkYXZvaWRUcmlnZ2VyIiwgImNhbWVsVG9LZWJhYiIsICJjdnRfY3NfdG9fb3MiLCAiaGFzVmFsdWUiLCAiaXNBcnJheU9ySXRlcmFibGUiLCAiaXNWYWwiLCAiaXNWYWx1ZVVuaXQiLCAia2ViYWJUb0NhbWVsIiwgIm5vcm1hbGl6ZUdyaWRMYXlvdXQiLCAibm9ybWFsaXplUHJpbWl0aXZlIiwgInJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCIsICJhcHBlYXIiLCAiZGVjb3JIaWRlIiwgImRlY29yU2hvdyIsICJkaXNhcHBlYXIiLCAib2JzZXJ2ZVN0eWxlVHJlZSIsICJzZXRTdHlsZVByb3BlcnR5IiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgInNlbCIsICJoYXNQYXJlbnQiLCAicGFzc2l2ZU9wdHMiLCAiYWRkRXZlbnQiLCAib3B0cyIsICJ3ciIsICJyZW1vdmVFdmVudCIsICJhZGRFdmVudHMiLCAicm9vdCIsICJoYW5kbGVycyIsICJhZGRFdmVudHNMaXN0IiwgImV2ZW50cyIsICJsaXN0IiwgImNicyIsICJyZW1vdmVFdmVudHMiLCAiZ2V0RXZlbnRUYXJnZXQiLCAicGF0aCIsICJjb250YWluc09yU2VsZiIsICJiIiwgImFFbCIsICJiRWwiLCAiYUluZGV4IiwgImJJbmRleCIsICJNT0NFbGVtZW50IiwgInNlbGYiLCAiaG9zdE1hdGNoZWQiLCAiY2xvc2VzdCIsICJob3N0IiwgIk1PQyIsICJpc0luRm9jdXMiLCAic2VsZWN0b3JPckVsZW1lbnQiLCAiZGlyIiwgImFjdGl2ZSIsICJpc0ZvY3VzZWQiLCAiaXNIb3ZlcmVkIiwgImFsdENuZCIsICJnZXRab29tIiwgInpvb21WYWx1ZXNTeW1ib2wiLCAiem9vbVZhbHVlcyIsICJ6b29tT2YiLCAiY29udGFpbmVyIiwgImNoYW5nZVpvb20iLCAic2NhbGUiLCAiZml4ZWRDbGllbnRab29tIiwgInVuZml4ZWRDbGllbnRab29tIiwgIm9yaWVudE9mIiwgInJhdyIsICJuIiwgImdldEJvdW5kaW5nT3JpZW50UmVjdCIsICJvcmllbnQiLCAiem9vbSIsICJib3giLCAibmJ4IiwgIm9yX2kiLCAidnYiLCAic2l6ZSIsICJsZWZ0XyIsICJ0b3BfIiwgInJpZ2h0XyIsICJib3R0b21fIiwgImxlZnQiLCAicmlnaHQiLCAidG9wIiwgImJvdHRvbSIsICJ3aWR0aCIsICJoZWlnaHQiLCAiYmJ3IiwgImJiaCIsICJjYnciLCAiY2JoIiwgInJ1bldoZW5JZGxlIiwgIktFWUJPQVJEX09WRVJMQVlfUFgiLCAiY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiY2FwYWNpdG9yS2V5Ym9hcmRCb3VuZCIsICJ3aW5kb3dLZXlib2FyZEJvdW5kIiwgInZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIiwgImlzTmF0aXZlQ2FwYWNpdG9ySG9zdCIsICJjYXAiLCAidmlydHVhbEtleWJvYXJkIiwgIklOVEVSQUNUSVZFX1dJREdFVCIsICJWSUVXUE9SVF9GSVQiLCAiZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkiLCAiaGVhZCIsICJtZXRhIiwgImNvbnRlbnQiLCAiZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSIsICJ2ayIsICJpc0ltZVRhcmdldCIsICJ0YWciLCAiaXNDb2xsYXBzZWRDYXJldCIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImxhc3RTdGFibGVLZXlib2FyZCIsICJpc0xhbmRzY2FwZSIsICJyZWFkUGh5c2ljYWxTY3JlZW4iLCAic3ciLCAic2giLCAiYXciLCAiYWgiLCAidyIsICJoIiwgImxhbmRzY2FwZSIsICJib3hMYW5kc2NhcGUiLCAiY2xhbXBUb1BoeXNpY2FsIiwgInBoeXMiLCAiaW5uZXJXIiwgImlubmVySCIsICJjbGllbnRXIiwgImNsaWVudEgiLCAiY2FwVyIsICJjYXBIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJ2dlciLCAidnZIIiwgInZ2VG9wIiwgInZrSCIsICJ2dk92ZXJsYXAiLCAibmF0aXZlQ2FwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImV4cGFuZGVkU2VsZWN0aW9uIiwgImxvY2tlZCIsICJrYiIsICJpc0ltZUNocm9tZUxvY2siLCAiY2xzIiwgInBhcmVudE9mIiwgImlzU2Nyb2xscG9ydCIsICJzdHlsZSIsICJveSIsICJmaW5kSW1lU2Nyb2xscG9ydCIsICJzdGFydCIsICJyZWFkQ2FyZXRSZWN0IiwgInJhbmdlIiwgInJlY3RzIiwgInJlY3QiLCAicGluSW1lQ2FyZXRJblNjcm9sbHBvcnQiLCAidmlzaWJsZUJvdHRvbSIsICJvdmVyZmxvdyIsICJwb3J0IiwgInBpblZpc3VhbFZpZXdwb3J0IiwgIm92ZXJsYXlQaW5uaW5nIiwgInJlc2V0Q2hyb21lU2Nyb2xsIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiYm9keSIsICJzY3JvbGxJbnRvVmlld1BhdGNoZWQiLCAicGF0Y2hJbWVTY3JvbGxJbnRvVmlldyIsICJvcmlnIiwgImFyZyIsICJwaW5JbWVDaHJvbWUiLCAiZ2V0QXZhaWxTaXplIiwgImxheW91dCIsICJ2dkJsb2NrIiwgInNjcmVlblciLCAic2NyZWVuSCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgImFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAibmV4dCIsICJjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyIsICJvblNob3ciLCAiZGV0YWlsIiwgImZyb21EZXRhaWwiLCAiYmluZENhcGFjaXRvcktleWJvYXJkIiwgIktleWJvYXJkIiwgImluZm8iLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRlSGlkZSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgIm1peGluU2V0IiwgImJvdW5kTWl4aW5TZXQiLCAiYmluZE1peGlucyIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJtaXhTZXQiLCAid2VsIiwgIm1peGluRWxlbWVudHMiLCAiYm91bmRNaXhpblNldFN5bWJvbCIsICJtaXhpbkVsZW1lbnRzU3ltYm9sIiwgIm1peGluUmVnaXN0cnlTeW1ib2wiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZVN5bWJvbCIsICJtaXhpbk5hbWVzcGFjZSIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAibmFtZXMiLCAicm9vdHMiLCAiYWRkUm9vdCIsICJ1cGRhdGVBbGxNaXhpbnMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgImVsZW1lbnRzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAibmFtZVJlZ2lzdHJ5RiIsICJrZXkiLCAicmVnaXN0ZXJNaXhpbiIsICJET01NaXhpbiIsICJ3RWxlbWVudCIsICJ3U2VsZiIsICJyZWxhdGVkIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJmbiIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K
