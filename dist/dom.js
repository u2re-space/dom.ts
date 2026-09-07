import { $avoidTrigger as _, camelToKebab as Fe, cvt_cs_to_os as Ae, hasValue as I, isArrayOrIterable as st, isVal as ct, isValueUnit as ut, kebabToCamel as De, normalizeGridLayout as lt, normalizePrimitive as Se, resolveLocalPointToGridCell as dt } from "@fest-lib/core";
import { appear as ft, decorHide as ht, decorShow as pt, disappear as mt, observeStyleTree as vt, setStyleProperty as z } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var gt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Le = globalThis[gt] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Le.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Le.add(t);
    }
});
var fn = () => {
}, hn = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, pn = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, yt = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), He = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(yt()), 0), bt = (e) => e?.offsetParent ?? e?.host, mn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = bt(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, vn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, wt = () => {
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
}, gn = (e = wt()) => (t) => e.shedule(t), yn = typeof document < "u" ? document?.documentElement : null, bn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, wn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), xt = /* @__PURE__ */ new Map(), xn = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return He(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => He(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    xt.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Y = /* @__PURE__ */ Symbol("@border-box-width"), X = /* @__PURE__ */ Symbol("@border-box-height"), U = /* @__PURE__ */ Symbol("@content-box-width"), J = /* @__PURE__ */ Symbol("@content-box-height"), Ve = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Sn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !ze.has(e)) {
    e[U] = e.clientWidth, e[J] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[U] = Math.min(o.inlineSize, e.clientWidth), e[J] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    ze.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, En = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ve.has(e)) {
    e[Y] = e.offsetWidth, e[X] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[Y] = Math.min(o.inlineSize, e.offsetWidth), e[X] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Ve.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, Cn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), Mn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Nn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, kn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Tn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, D = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", An = "^(?:" + D + ")|^#" + D + "|^\\." + D + "|^\\[" + D + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Ln = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Hn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Vn = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, se = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, $e = {};
function p(e, t, n, r = $e) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function We(e, t, n, r = $e) {
  e?.removeEventListener?.(t, n, r);
}
var zn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), Wn = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((st(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, Pn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? We(e, n, ...r) : We(e, n, r))), jn = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, On = (e, t, n) => {
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
}, he = (e, t, n) => {
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
}, Rn = (e, t) => !!he(e, t), Bn = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || se(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!he(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!he(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? se(e, t) || !1 : se(t, e) || !1;
  }
  return !0;
}, _n = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, St = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Et = globalThis[St] ??= /* @__PURE__ */ new WeakMap(), Ct = (e = document.documentElement) => Et.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), In = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Fn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : Ct(e)) || 1, pe = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, T = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Dn = (e, t = null) => {
  const n = pe(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (T(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = Ae([i.left, i.top], a, o), [u, v] = Ae([i.right, i.bottom], a, o), [f, l] = o == 0 || o == 3 ? [d, u] : [u, d], [c, m] = o == 0 || o == 1 ? [h, v] : [v, h], [y, ae] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: l,
    bottom: m,
    width: y,
    height: ae
  };
}, $n = (e, t = null) => (t ?? T(e)) % 2 ? e[X] ?? e?.clientHeight : e[Y] ?? e?.clientWidth, qn = (e, t = null) => (t ?? T(e)) % 2 ? e[Y] ?? e?.clientWidth : e[X] ?? e?.clientHeight, Zn = (e, t = null) => (t ?? T(e)) % 2 ? e[J] ?? e?.clientHeight : e[U] ?? e?.clientWidth, Kn = (e, t = null) => (t ?? T(e)) % 2 ? e[U] ?? e?.clientWidth : e[J] ?? e?.clientHeight, qe = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), x = 80, Ee = 0, Pe = !1, je = !1, Oe = !1, g = null, Re = !1, ce = !1, ne = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const e = globalThis.Capacitor;
    return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
  } catch {
    return !1;
  }
}, Ze = () => {
  try {
    return globalThis.Capacitor?.Plugins?.CwsBridge ?? null;
  } catch {
    return null;
  }
}, Mt = (e) => {
  if (!e) return null;
  const t = Number(e.windowWidthCss) || 0, n = Number(e.windowHeightCss) || 0, r = Number(e.displayWidthCss) || t, i = Number(e.displayHeightCss) || n, o = t || r, s = n || i;
  if (o <= 0 || s <= 0) return null;
  const a = Number(e.density) || 0;
  return {
    windowWidthCss: o,
    windowHeightCss: s,
    displayWidthCss: r || o,
    displayHeightCss: i || s,
    density: a,
    densityDpi: Number(e.densityDpi) || 0,
    xdpi: Number(e.xdpi) || 0,
    ydpi: Number(e.ydpi) || 0,
    ppi: Number(e.ppi) || 0,
    scaledDensity: Number(e.scaledDensity) || a,
    fontScale: Number(e.fontScale) || (a > 0 ? (Number(e.scaledDensity) || a) / a : 1)
  };
}, Ke = (e) => {
  const t = Mt(e);
  if (!t) return;
  const n = g, r = !!(n && n.windowWidthCss === t.windowWidthCss && n.windowHeightCss === t.windowHeightCss && n.displayWidthCss === t.displayWidthCss && n.displayHeightCss === t.displayHeightCss && n.density === t.density && n.densityDpi === t.densityDpi && n.ppi === t.ppi && n.fontScale === t.fontScale);
  g = t, r || ie();
}, Ye = () => {
  if (!ne()) return;
  const e = Ze();
  e && (typeof e.getDisplayMetrics == "function" ? e.getDisplayMetrics() : e.getShellInfo?.())?.then((t) => Ke(t)).catch(() => {
  });
}, A = () => {
  !ne() || ce || (ce = !0, qe(() => {
    ce = !1, G(), Ye();
  }, 80));
}, G = () => {
  if (!(Re || typeof globalThis > "u") && ne() && Ze()) {
    Re = !0;
    try {
      const e = globalThis.window?.__CWS_SHELL_INFO__;
      e && Ke(e);
    } catch {
    }
    Ye();
  }
}, Xe = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, $ = "interactive-widget=overlays-content", q = "viewport-fit=cover", Nt = () => {
  if (typeof document > "u") return;
  const e = document.head || document.documentElement;
  if (!e) return;
  let t = document.querySelector('meta[name="viewport"]');
  if (!t) {
    t = document.createElement("meta"), t.setAttribute("name", "viewport"), t.content = `width=device-width, initial-scale=1.0, ${q}, ${$}`, e.insertBefore(t, e.firstChild);
    return;
  }
  let n = String(t.content || "").trim();
  /interactive-widget\s*=\s*overlays-content/i.test(n) || (/interactive-widget\s*=/i.test(n) ? n = n.replace(/interactive-widget\s*=\s*[a-z-]+/i, $) : n = n ? `${n.replace(/,\s*$/, "")}, ${$}` : $), /viewport-fit\s*=\s*cover/i.test(n) || (/viewport-fit\s*=/i.test(n) ? n = n.replace(/viewport-fit\s*=\s*[a-z-]+/i, q) : n = n ? `${n.replace(/,\s*$/, "")}, ${q}` : q), n !== String(t.content || "").trim() && (t.content = n);
}, O = () => {
  Nt();
  const e = Xe();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, k = (e) => {
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
}, re = () => {
  try {
    const e = document.getSelection();
    return !!(e && e.rangeCount && e.isCollapsed);
  } catch {
    return !0;
  }
}, Be = "", S = 0, w = 0, Z = 0, Ue = () => {
  try {
    const e = typeof screen < "u" ? String(screen.orientation?.type || "") : "";
    return e.startsWith("landscape") ? !0 : e.startsWith("portrait") ? !1 : !!(typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches);
  } catch {
    return !1;
  }
}, Je = () => {
  let e = 0, t = 0;
  if (g)
    e = g.windowWidthCss || g.displayWidthCss, t = g.windowHeightCss || g.displayHeightCss;
  else if (typeof screen < "u") {
    const i = Number(screen.width) || 0, o = Number(screen.height) || 0, s = Number(screen.availWidth) || 0, a = Number(screen.availHeight) || 0;
    e = Math.max(e, i, s), t = Math.max(t, o, a);
  }
  if (!e && !t) return {
    width: 0,
    height: 0
  };
  const n = Ue(), r = e > 0 && t > 0 && e > t;
  return n && e > 0 && t > 0 && e < t ? {
    width: t,
    height: e
  } : !n && r ? {
    width: t,
    height: e
  } : {
    width: e || t,
    height: t || e
  };
}, kt = (e, t) => {
  const n = Je(), r = typeof window < "u" && Number(window.innerWidth) || 0, i = typeof window < "u" && Number(window.innerHeight) || 0, o = typeof document < "u" ? document.documentElement : null, s = Number(o?.clientWidth) || 0, a = Number(o?.clientHeight) || 0, d = Math.max(n.width, r, s), h = Math.max(n.height, i, a);
  return {
    width: d > 0 ? Math.min(e, d) : e,
    height: h > 0 ? Math.min(t, h) : t
  };
}, _e = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, Yn = () => {
  if (typeof window > "u") return _e(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return _e(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, Ce = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(Xe()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = Ee, h = ne();
  let u = d >= x ? d : !h && s >= x ? s : !h && a >= x ? a : 0;
  const v = Math.max(t, r), f = Math.max(n, i + o, u > 0 ? i + u : 0), l = Ue() ? "l" : "p";
  l !== Be && (Be = l, S = 0, w = 0);
  const c = !h && w > 0 && w - f >= x;
  if (u < x && c) {
    const Te = Math.max(0, w - f, w - (i + o));
    Te >= x && (u = Te);
  }
  const m = !re();
  m && Z >= x ? u = Z : u >= x ? Z = u : k(document.activeElement) || (Z = 0), u > 0 || k(document.activeElement) || c || m ? (S = Math.max(v, S), w = Math.max(f, w)) : (S = v, w = f);
  const y = kt(S || v, w || f);
  S = y.width, w = y.height;
  const ae = y.height > 0 ? Math.min(u, y.height) : u;
  return {
    width: y.width,
    height: y.height,
    keyboard: ae
  };
}, Me = (e) => {
  const t = e.tagName;
  if (t === "HTML" || t === "BODY") return !0;
  const n = e.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame");
}, Ge = (e) => {
  if (!e) return null;
  if (e.parentElement) return e.parentElement;
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, Tt = (e) => {
  if (Me(e)) return !1;
  const t = getComputedStyle(e), n = t.overflowY || t.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : e.scrollHeight > e.clientHeight + 1;
}, Qe = (e) => {
  let t = e;
  for (; t; ) {
    if (t instanceof HTMLElement && Tt(t)) return t;
    t = Ge(t);
  }
  return null;
}, At = () => {
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
}, Lt = () => {
  if (!k(document.activeElement) || !re()) return;
  const e = Ce().keyboard, t = window.visualViewport, n = (Number(t?.height) || Number(window.innerHeight) || 0) - Math.max(8, e ? 12 : 0);
  if (n <= 0) return;
  const r = At();
  if (!r) return;
  const i = r.bottom - n;
  if (i <= 1) return;
  const o = Qe(document.activeElement);
  o && (o.scrollTop += i);
}, Ht = () => {
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
}, ue = !1, Vt = (e) => {
  const t = Qe(e);
  let n = e;
  for (; n; )
    n instanceof HTMLElement && n !== t && (Me(n) || n.scrollTop || n.scrollLeft) && n !== t && (n.scrollTop = 0, n.scrollLeft = 0), n = Ge(n);
}, W = () => {
  if (!(typeof window > "u" || ue) && (Ce().keyboard > 0 || k(document.activeElement))) {
    ue = !0;
    try {
      Ht(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const e = document.documentElement, t = document.body;
      (e.scrollTop || e.scrollLeft) && e.scrollTo(0, 0), t && (t.scrollTop || t.scrollLeft) && t.scrollTo(0, 0), re() || Vt(document.activeElement);
    } finally {
      ue = !1;
    }
  }
}, Ie = !1, zt = () => {
  if (Ie || typeof Element > "u") return;
  Ie = !0;
  const e = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(t) {
    if (!(k(document.activeElement) && !re()) && !(this instanceof HTMLElement && Me(this)))
      return e.call(this, t);
  };
}, me = (e) => {
  W(), e?.caret && requestAnimationFrame(() => {
    W(), Lt();
  });
}, et = () => {
  O();
  const e = typeof window < "u" ? window.visualViewport : null, t = Ce(), n = {
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
    const r = Je(), i = typeof window < "u" && Number(window.innerWidth) || 0, o = typeof window < "u" && Number(window.innerHeight) || 0, s = Math.max(r.width, i, t.width), a = Math.max(r.height, o, t.height), d = s > 0 ? `${s}px` : "100lvi", h = a > 0 ? `${a}px` : "100lvb", u = g?.density || Number(devicePixelRatio) || 1, v = g ? {
      "--native-density": String(g.density || u),
      "--native-dpi": String(g.densityDpi || 0),
      "--native-ppi": String(g.ppi || 0),
      "--native-xdpi": String(g.xdpi || 0),
      "--native-ydpi": String(g.ydpi || 0),
      "--native-font-scale": String(g.fontScale || 1)
    } : {};
    return {
      "--screen-width": d,
      "--screen-height": h,
      "--avail-width": d,
      "--avail-height": h,
      "--view-height": `${t.height}px`,
      "--pixel-ratio": String(u),
      ...v,
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
}, ve = et(), Xn = [[":root, :host, :scope", ve]], Wt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ie = (e) => {
  const t = document.documentElement;
  Object.assign(ve, et()), Object.entries(ve).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, Pt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, L = { passive: !0 }, ge = (e) => {
  const t = Number(e) || 0;
  t > 0 && (Ee = t), ie(), me({ caret: !0 });
}, Q = () => {
  Ee = 0, ie();
}, jt = () => {
  if (je || typeof window > "u") return;
  je = !0;
  const e = (t) => {
    const n = t, r = n.detail, i = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    ge(n.keyboardHeight ?? i);
  };
  window.addEventListener("keyboardWillShow", e), window.addEventListener("keyboardDidShow", e), window.addEventListener("keyboardWillHide", Q), window.addEventListener("keyboardDidHide", Q);
}, ye = () => {
  if (jt(), Pe || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (t?.addListener && !(typeof e.isNativePlatform == "function" && !e.isNativePlatform())) {
    Pe = !0;
    try {
      t.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      t.setResizeMode?.({ mode: "none" });
    } catch {
    }
    t.addListener("keyboardWillShow", (n) => ge(n?.keyboardHeight)), t.addListener("keyboardDidShow", (n) => ge(n?.keyboardHeight)), t.addListener("keyboardWillHide", Q), t.addListener("keyboardDidHide", Q);
  }
}, Un = () => {
  Oe || typeof window > "u" || (Oe = !0, ye(), G(), tt(() => {
  }));
}, tt = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      ie(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return ye(), G(), zt(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, L)), r.push(p(document, "selectionchange", () => {
    W();
  }, L)), r.push(p(window?.visualViewport, "scroll", () => {
    W(), n();
  }, L)), r.push(p(window, "scroll", () => {
    W();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    me({ caret: !0 }), n();
  }, L)), r.push(p(screen?.orientation, "change", () => {
    A(), n();
  })), r.push(p(window, "resize", () => {
    A(), n();
  })), r.push(p(document?.documentElement, "fullscreenchange", () => {
    A(), n();
  })), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", () => {
    A(), n();
  })), r.push(p(matchMedia("(orientation: landscape)"), "change", () => {
    A(), n();
  })), r.push(p(document, "focusin", () => {
    ye(), G(), O(), k(document.activeElement) && (S = Math.max(S, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), w = Math.max(w, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), me({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, L)), O(), n(), qe(() => n(), 100), () => r.forEach((i) => i());
}, Jn = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), tt(() => {
      const t = Wt?.[Pt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
};
typeof document < "u" && (O(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => O(), { once: !0 }));
var N = new OffscreenCanvas(1, 1).getContext("2d"), nt = (e, t) => {
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
}, Ot = (e, t) => {
  if (N) {
    nt(t, N);
    try {
      return N.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, Gn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return Ot(t, e);
}, Rt = (e, t) => {
  const n = e?.value || "";
  if (N) {
    nt(e, N);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = N.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, Qn = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / pe(), t[1] - n.top / pe()];
  return Rt(e, r);
}, Bt = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = lt(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, er = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Bt(e, n?.layout), s = T(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, u = parseFloat(a?.paddingRight) || 0, v = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - u), l = Math.max(1, (i.height || e.clientHeight || 1) - h - v), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return dt(c, [f, l], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, tr = (e) => ft(e, pt), nr = (e) => mt(e, ht), rr = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, _t = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), H = globalThis[_t] ??= /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), V = globalThis[It] ??= /* @__PURE__ */ new WeakMap(), F = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), oe = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, P = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = oe(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, be = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = oe(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, ir = (e, t) => {
  if (!V.has(e = F(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), V.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return V.get(e)?.push?.(t), { disconnect: () => V.get(e)?.splice?.(V.get(e)?.indexOf(t) || -1, 1) };
}, or = (e, t) => {
  if (!H.has(e = F(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), H.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return H.get(e)?.push?.(t), { disconnect: () => H.get(e)?.splice?.(H.get(e)?.indexOf(t) || -1, 1) };
}, ar = (e, t, n) => {
  if (typeof e?.selector == "string") return rt(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = F(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, rt = (e, t, n, r) => {
  const i = oe(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const u = Array.from(h.addedNodes) || [], v = Array.from(h.removedNodes) || [];
      u.push(...Array.from(h.addedNodes || []).flatMap((f) => P(f, i))), v.push(...Array.from(h.removedNodes || []).flatMap((f) => P(f, i))), [...new Set(u)].filter((f) => be(f, i))?.map?.((f) => {
        o.forEach((l) => {
          r({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, d);
        });
      });
    } else be(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
  });
  return s.observe(e = F(e), {
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
}, Ft = (e, t = "*", n = (r, i) => {
}) => {
  const r = oe(t), i = (l) => {
    const c = Array.from(l || []) || [];
    return c.push(...Array.from(l || []).flatMap((m) => P(m, r))), [...Array.from(new Set(c).values())].filter((m) => be(m, r));
  };
  let o = null;
  const s = (l) => {
    const c = o?.deref?.(), m = i(l.addedNodes), y = i(l.removedNodes);
    (m.length > 0 || y.length > 0) && n?.({
      type: l.type,
      target: l.target,
      attributeName: l.attributeName,
      attributeNamespace: l.attributeNamespace,
      nextSibling: l.nextSibling,
      oldValue: l.oldValue,
      previousSibling: l.previousSibling,
      addedNodes: m,
      removedNodes: y
    }, c);
  }, a = (l) => {
    s({
      addedNodes: [l?.target].filter((c) => !!c),
      removedNodes: [l?.relatedTarget].filter((c) => !!c),
      type: "childList",
      target: l?.currentTarget
    });
  }, d = (l) => {
    s({
      addedNodes: [l?.relatedTarget].filter((c) => !!c),
      removedNodes: [l?.target].filter((c) => !!c),
      type: "childList",
      target: l?.currentTarget
    });
  }, h = (l) => {
    s({
      addedNodes: [l?.target].filter((c) => !!c),
      removedNodes: [l?.relatedTarget || document?.activeElement].filter((c) => !!c),
      type: "childList",
      target: l?.currentTarget
    });
  }, u = {
    passive: !0,
    capture: !1
  };
  if (r?.includes?.(":hover") && r?.includes?.(":active"))
    return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", d, u), e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", d, u), e.addEventListener("pointercancel", d, u), { disconnect: () => {
      e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", d, u), e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", d, u), e.removeEventListener("pointercancel", d, u);
    } };
  if (r?.includes?.(":hover"))
    return e.addEventListener("pointerover", a, u), e.addEventListener("pointerout", d, u), { disconnect: () => {
      e.removeEventListener("pointerover", a, u), e.removeEventListener("pointerout", d, u);
    } };
  if (r?.includes?.(":active"))
    return e.addEventListener("pointerdown", a, u), e.addEventListener("pointerup", d, u), e.addEventListener("pointercancel", d, u), { disconnect: () => {
      e.removeEventListener("pointerdown", a, u), e.removeEventListener("pointerup", d, u), e.removeEventListener("pointercancel", d, u);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", a, u), e.addEventListener("focusout", d, u), e.addEventListener("click", h, u), { disconnect: () => {
      e.removeEventListener("focusin", a, u), e.removeEventListener("focusout", d, u), e.removeEventListener("click", h, u);
    } };
  const v = new MutationObserver((l, c) => {
    for (const m of l) m.type == "childList" && s(m);
  });
  o = new WeakRef(v), (e?.element ?? e) instanceof Node && v.observe(e = F(e), {
    childList: !0,
    subtree: !0
  });
  const f = P(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, v), v;
}, it = /* @__PURE__ */ new WeakMap(), Dt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), sr = (e, t) => {
  if (e) {
    if (t) {
      const n = it.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => Dt(e, n, r));
    }
    return e;
  }
}, $t = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), R = globalThis[$t] ??= /* @__PURE__ */ new Map(), qt = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Zt = (e) => (typeof e == "object" || typeof e == "function") && e != null, Kt = (e, t, n) => {
  if (!Zt(e) && e != null) return e;
  let r = R.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), R.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, cr = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) Kt(e, n, r);
    return e;
  }
}, ur = (e, t) => {
  if (e) {
    if (t) {
      const n = E?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      E?.has?.(e) || E?.set?.(e, n), [...t?.values?.() || []].map((r) => Yt(e, r, n));
    }
    return e;
  }
}, j = (e) => ({
  storeSet: qt(R, e),
  mixinSet: E?.get?.(e),
  behaviorSet: it?.get?.(e)
}), Yt = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= E?.get?.(e), n?.has?.(t) || (n?.add?.(t), M?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, j(e))), e;
}, Xt = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), E = globalThis[Xt] ??= /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), M = globalThis[Ut] ??= /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), B = globalThis[Jt] ??= /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), ee = globalThis[Gt] ??= /* @__PURE__ */ new WeakMap(), ot = (e, t) => {
  typeof t == "string" && (t = B?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => B?.get?.(s)).filter((s) => !!s)), i = E?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  M?.has?.(t) || M?.set?.(t, /* @__PURE__ */ new WeakSet()), E?.has?.(e) || E?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, j(e)), (r.has(t) || !M?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, j(e)), n.add(ee?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), M?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, j(e))));
}, we = /* @__PURE__ */ new Set(), Qt = (e = typeof document < "u" ? document : null) => {
  if (e)
    return we?.has?.(e) || (we?.add?.(e), rt(e, "*", "data-mixin", (t) => xe(t.target)), Ft(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && xe(n);
    }), vt(e)), e;
}, xe = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => B?.get?.(n)).filter((n) => !!n))].map?.((n) => ot(e, n));
}, en = (e, t) => {
  e.forEach((n) => t ? ot(n, t) : xe(n));
}, tn = (e) => {
  for (const t of we) en(t?.querySelectorAll?.("[data-mixin]"), e);
}, nn = new FinalizationRegistry((e) => {
  B?.delete?.(e);
}), rn = (e, t) => {
  if (!ee?.has?.(t)) {
    const n = e?.trim?.();
    n && (ee?.set?.(t, n), B?.set?.(n, t), nn?.register?.(t, n), tn(t));
  }
};
Qt(typeof document < "u" ? document : null);
var Ne = class {
  constructor(e = null) {
    e && rn(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return R.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return j(e);
  }
  get elements() {
    return M?.get?.(this);
  }
  get storage() {
    return R?.get?.(this.name || "");
  }
  get name() {
    return ee?.get?.(this);
  }
}, lr = (e, t, n) => {
  const r = n;
  I(n) && (n = n.value);
  const i = (n = Se(n)) != null && n !== !1;
  return _(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, dr = (e, t, n) => {
  if (!(t = typeof t == "string" ? De(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return I(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && _(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, fr = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return I(n) && (n = n?.value), t = De(t), r?.[t] === (n = Se(n)) || (n == null || n === !1 ? delete r[t] : _(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, on = (e, t) => e.style.removeProperty(Fe(t)), hr = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || _(n, () => {
    ct(n) || I(n) || ut(n) ? z(e, t, n) : n == null && on(e, t);
  }), e;
}, pr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return I(n) && (n = n.value), t = Fe(t), e?.getAttribute?.(t) === (n = Se(n)) || _(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function le(e, t) {
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
var K = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, de = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, fe = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, an = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), te = globalThis[an] ??= /* @__PURE__ */ new WeakMap(), b = (e, t, n) => {
  const r = te.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), te.set(e, r);
}, ke = (e, t) => {
  const n = te.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && te.delete(e);
  }
}, C = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, at = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, sn = class extends Ne {
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
      const c = le(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(K.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: t
        }
      })), d()));
    }, u = (c) => {
      if (!i) return;
      s = a(c), d();
      const m = le(o, s);
      t.dispatchEvent(new CustomEvent(K.move, {
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
      const m = le(o, s);
      t.dispatchEvent(new CustomEvent(K.end, {
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
    }, l = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(K.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return b(t, "ui-junction-select", () => {
      n.remove();
    }), b(t, "ui-junction-select", p(t, "pointerdown", h)), b(t, "ui-junction-select", p(t, "pointermove", u)), b(t, "ui-junction-select", p(t, "pointerup", f)), b(t, "ui-junction-select", p(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-select"), this;
  }
}, cn = class extends Ne {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    z(t, "--jx-drag-x", C(t, "--jx-drag-x")), z(t, "--jx-drag-y", C(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = at(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = C(t, "--jx-drag-x"), d = C(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(de.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, u = (f) => {
      if (!i) return;
      const l = f.clientX - o, c = f.clientY - s, m = a + l, y = d + c;
      z(t, "--jx-drag-x", m), z(t, "--jx-drag-y", y), t.dispatchEvent(new CustomEvent(de.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: l,
          dy: c,
          x: m,
          y
        }
      }));
    }, v = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(de.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: C(t, "--jx-drag-x"),
            y: C(t, "--jx-drag-y")
          }
        }));
      }
    };
    return b(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), b(t, "ui-junction-drag", p(r, "pointerdown", h)), b(t, "ui-junction-drag", p(r, "pointermove", u)), b(t, "ui-junction-drag", p(r, "pointerup", v)), b(t, "ui-junction-drag", p(r, "pointercancel", v)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-drag"), this;
  }
}, un = class extends Ne {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = at(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (l) => {
      l.button === 0 && (l.target !== n && !n.contains(l.target) || (r = !0, i = l.clientX, o = l.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(fe.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: s,
          height: a
        }
      }))));
    }, v = (l) => {
      if (!r) return;
      const c = Math.max(d, s + (l.clientX - i)), m = Math.max(h, a + (l.clientY - o));
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(fe.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: m
        }
      }));
    }, f = (l) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(fe.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return b(t, "ui-junction-resize", p(n, "pointerdown", u)), b(t, "ui-junction-resize", p(n, "pointermove", v)), b(t, "ui-junction-resize", p(n, "pointerup", f)), b(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && ke(t, "ui-junction-resize"), this;
  }
};
new sn();
new cn();
new un();
export {
  Ne as DOMMixin,
  cn as JunctionDragMixin,
  un as JunctionResizeMixin,
  sn as JunctionSelectMixin,
  D as MATCH,
  Rn as MOC,
  he as MOCElement,
  gn as RAFBehavior,
  An as REGEX,
  yn as ROOT,
  rr as WavyShapedCircle,
  fn as __exportProperties,
  Le as __registeredCssProperties,
  p as addEvent,
  zn as addEvents,
  Wn as addEventsList,
  Qt as addRoot,
  nr as animateHide,
  tr as animateShow,
  ve as availSize,
  qn as bbh,
  $n as bbw,
  Dt as bindBehavior,
  Yt as bindMixins,
  Kt as bindStore,
  X as borderBoxHeight,
  Y as borderBoxWidth,
  it as boundBehaviors,
  E as boundMixinSet,
  Kn as cbh,
  Zn as cbw,
  In as changeZoom,
  Xn as classes,
  Rt as computeCaretPosition,
  Qn as computeCaretPositionFromClient,
  On as containsOrSelf,
  J as contentBoxHeight,
  U as contentBoxWidth,
  Ln as createElementVanilla,
  _e as createFixedOverlayViewport,
  on as deleteStyleProperty,
  pn as detectMobile,
  En as doBorderObserve,
  Sn as doContentObserve,
  Nt as ensureViewportInteractiveWidgetOverlay,
  Un as ensureViewportTracking,
  O as ensureVirtualKeyboardOverlay,
  Jn as fixOrientToScreen,
  Fn as fixedClientZoom,
  et as getAvailSize,
  Dn as getBoundingOrientRect,
  Pt as getCorrectOrientation,
  j as getElementRelated,
  jn as getEventTarget,
  bt as getOffsetParent,
  mn as getOffsetParentChain,
  qt as getStoresOfElement,
  _n as getZoom,
  pr as handleAttribute,
  fr as handleDataset,
  lr as handleHidden,
  dr as handleProperty,
  hr as handleStyleChange,
  se as hasParent,
  Mn as html,
  Vn as includeSelf,
  Tn as indexOf,
  nt as initTextStyle,
  Hn as isElement,
  Bn as isInFocus,
  hn as isMobile,
  vn as isNearlyIdentity,
  kn as isValidParent,
  wt as makeRAFCycle,
  Gn as measureInputInFocus,
  Ot as measureText,
  te as mixinDisposers,
  M as mixinElements,
  ee as mixinNamespace,
  B as mixinRegistry,
  nn as nameRegistryF,
  R as namedStoreMaps,
  ar as observeAttribute,
  rt as observeAttributeBySelector,
  or as observeBorderBox,
  Ft as observeBySelector,
  ir as observeContentBox,
  Ve as onBorderObserve,
  ze as onContentObserve,
  T as orientOf,
  Wt as orientationNumberMap,
  $e as passiveOpts,
  Yn as readFixedOverlayViewport,
  Bt as readLauncherLayoutFromElement,
  sr as reflectBehaviors,
  ur as reflectMixins,
  cr as reflectStores,
  rn as registerMixin,
  We as removeEvent,
  Pn as removeEvents,
  er as resolveGridCellFromClientPoint,
  we as roots,
  wn as setAttributes,
  bn as setAttributesIfNull,
  Nn as setChecked,
  xn as setIdleInterval,
  xt as throttleMap,
  pe as unfixedClientZoom,
  xe as updateAllMixins,
  ot as updateMixinAttributes,
  en as updateMixinAttributesAll,
  tn as updateMixinAttributesAllInRoots,
  ie as updateVP,
  Cn as url,
  tt as whenAnyScreenChanges,
  Ct as zoomOf,
  Et as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheSA9IG51bGw7XG52YXIgbmF0aXZlRGlzcGxheUJvdW5kID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQgPSBmYWxzZTtcbnZhciBpc05hdGl2ZUNhcGFjaXRvckhvc3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgY2FwPy5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgQm9vbGVhbihjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRDd3NCcmlkZ2UgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuQ2FwYWNpdG9yPy5QbHVnaW5zPy5Dd3NCcmlkZ2UgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcGFyc2VOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0aWYgKCFpbmZvKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgd2luZG93VyA9IE51bWJlcihpbmZvLndpbmRvd1dpZHRoQ3NzKSB8fCAwO1xuXHRjb25zdCB3aW5kb3dIID0gTnVtYmVyKGluZm8ud2luZG93SGVpZ2h0Q3NzKSB8fCAwO1xuXHRjb25zdCBkaXNwbGF5VyA9IE51bWJlcihpbmZvLmRpc3BsYXlXaWR0aENzcykgfHwgd2luZG93Vztcblx0Y29uc3QgZGlzcGxheUggPSBOdW1iZXIoaW5mby5kaXNwbGF5SGVpZ2h0Q3NzKSB8fCB3aW5kb3dIO1xuXHRjb25zdCB3ID0gd2luZG93VyB8fCBkaXNwbGF5Vztcblx0Y29uc3QgaCA9IHdpbmRvd0ggfHwgZGlzcGxheUg7XG5cdGlmICh3IDw9IDAgfHwgaCA8PSAwKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgZGVuc2l0eSA9IE51bWJlcihpbmZvLmRlbnNpdHkpIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0d2luZG93V2lkdGhDc3M6IHcsXG5cdFx0d2luZG93SGVpZ2h0Q3NzOiBoLFxuXHRcdGRpc3BsYXlXaWR0aENzczogZGlzcGxheVcgfHwgdyxcblx0XHRkaXNwbGF5SGVpZ2h0Q3NzOiBkaXNwbGF5SCB8fCBoLFxuXHRcdGRlbnNpdHksXG5cdFx0ZGVuc2l0eURwaTogTnVtYmVyKGluZm8uZGVuc2l0eURwaSkgfHwgMCxcblx0XHR4ZHBpOiBOdW1iZXIoaW5mby54ZHBpKSB8fCAwLFxuXHRcdHlkcGk6IE51bWJlcihpbmZvLnlkcGkpIHx8IDAsXG5cdFx0cHBpOiBOdW1iZXIoaW5mby5wcGkpIHx8IDAsXG5cdFx0c2NhbGVkRGVuc2l0eTogTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSxcblx0XHRmb250U2NhbGU6IE51bWJlcihpbmZvLmZvbnRTY2FsZSkgfHwgKGRlbnNpdHkgPiAwID8gKE51bWJlcihpbmZvLnNjYWxlZERlbnNpdHkpIHx8IGRlbnNpdHkpIC8gZGVuc2l0eSA6IDEpXG5cdH07XG59O1xudmFyIGFwcGx5TmF0aXZlRGlzcGxheSA9IChpbmZvKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBwYXJzZU5hdGl2ZURpc3BsYXkoaW5mbyk7XG5cdGlmICghbmV4dCkgcmV0dXJuO1xuXHRjb25zdCBwcmV2ID0gbmF0aXZlRGlzcGxheTtcblx0Y29uc3Qgc2FtZSA9IEJvb2xlYW4ocHJldiAmJiBwcmV2LndpbmRvd1dpZHRoQ3NzID09PSBuZXh0LndpbmRvd1dpZHRoQ3NzICYmIHByZXYud2luZG93SGVpZ2h0Q3NzID09PSBuZXh0LndpbmRvd0hlaWdodENzcyAmJiBwcmV2LmRpc3BsYXlXaWR0aENzcyA9PT0gbmV4dC5kaXNwbGF5V2lkdGhDc3MgJiYgcHJldi5kaXNwbGF5SGVpZ2h0Q3NzID09PSBuZXh0LmRpc3BsYXlIZWlnaHRDc3MgJiYgcHJldi5kZW5zaXR5ID09PSBuZXh0LmRlbnNpdHkgJiYgcHJldi5kZW5zaXR5RHBpID09PSBuZXh0LmRlbnNpdHlEcGkgJiYgcHJldi5wcGkgPT09IG5leHQucHBpICYmIHByZXYuZm9udFNjYWxlID09PSBuZXh0LmZvbnRTY2FsZSk7XG5cdG5hdGl2ZURpc3BsYXkgPSBuZXh0O1xuXHRpZiAoIXNhbWUpIHVwZGF0ZVZQKCk7XG59O1xudmFyIHJlZnJlc2hOYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGNvbnN0IEJyaWRnZSA9IHJlYWRDd3NCcmlkZ2UoKTtcblx0aWYgKCFCcmlkZ2UpIHJldHVybjtcblx0KHR5cGVvZiBCcmlkZ2UuZ2V0RGlzcGxheU1ldHJpY3MgPT09IFwiZnVuY3Rpb25cIiA/IEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcygpIDogQnJpZGdlLmdldFNoZWxsSW5mbz8uKCkpPy50aGVuKChpbmZvKSA9PiBhcHBseU5hdGl2ZURpc3BsYXkoaW5mbykpLmNhdGNoKCgpID0+IHt9KTtcbn07XG52YXIgcXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCA9ICgpID0+IHtcblx0aWYgKCFpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCkgcmV0dXJuO1xuXHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IHRydWU7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHtcblx0XHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0cmVmcmVzaE5hdGl2ZURpc3BsYXkoKTtcblx0fSwgODApO1xufTtcbnZhciBiaW5kTmF0aXZlRGlzcGxheSA9ICgpID0+IHtcblx0aWYgKG5hdGl2ZURpc3BsYXlCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGlmICghcmVhZEN3c0JyaWRnZSgpKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gZ2xvYmFsVGhpcy53aW5kb3c/Ll9fQ1dTX1NIRUxMX0lORk9fXztcblx0XHRpZiAoY2FjaGVkKSBhcHBseU5hdGl2ZURpc3BsYXkoY2FjaGVkKTtcblx0fSBjYXRjaCB7fVxuXHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLmluc2VydEJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiVEVYVEFSRUFcIiB8fCB0YWcgPT09IFwiU0VMRUNUXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnICE9PSBcIklOUFVUXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdHlwZSA9IFN0cmluZyhlbC50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gIVtcblx0XHRcImJ1dHRvblwiLFxuXHRcdFwiY2hlY2tib3hcIixcblx0XHRcInJhZGlvXCIsXG5cdFx0XCJmaWxlXCIsXG5cdFx0XCJzdWJtaXRcIixcblx0XHRcInJlc2V0XCIsXG5cdFx0XCJpbWFnZVwiLFxuXHRcdFwicmFuZ2VcIixcblx0XHRcImNvbG9yXCIsXG5cdFx0XCJoaWRkZW5cIlxuXHRdLmluY2x1ZGVzKHR5cGUpO1xufTtcbnZhciBpc0NvbGxhcHNlZENhcmV0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdHJldHVybiBCb29sZWFuKHNlbCAmJiBzZWwucmFuZ2VDb3VudCAmJiBzZWwuaXNDb2xsYXBzZWQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBsYXlvdXRMb2NrT3JpZW50ID0gXCJcIjtcbnZhciBsYXlvdXRMb2NrVyA9IDA7XG52YXIgbGF5b3V0TG9ja0ggPSAwO1xudmFyIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG52YXIgaXNMYW5kc2NhcGUgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdHlwZSA9IHR5cGVvZiBzY3JlZW4gIT09IFwidW5kZWZpbmVkXCIgPyBTdHJpbmcoc2NyZWVuLm9yaWVudGF0aW9uPy50eXBlIHx8IFwiXCIpIDogXCJcIjtcblx0XHRpZiAodHlwZS5zdGFydHNXaXRoKFwibGFuZHNjYXBlXCIpKSByZXR1cm4gdHJ1ZTtcblx0XHRpZiAodHlwZS5zdGFydHNXaXRoKFwicG9ydHJhaXRcIikpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gQm9vbGVhbih0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRQaHlzaWNhbFNjcmVlbiA9ICgpID0+IHtcblx0bGV0IHcgPSAwO1xuXHRsZXQgaCA9IDA7XG5cdGlmIChuYXRpdmVEaXNwbGF5KSB7XG5cdFx0dyA9IG5hdGl2ZURpc3BsYXkud2luZG93V2lkdGhDc3MgfHwgbmF0aXZlRGlzcGxheS5kaXNwbGF5V2lkdGhDc3M7XG5cdFx0aCA9IG5hdGl2ZURpc3BsYXkud2luZG93SGVpZ2h0Q3NzIHx8IG5hdGl2ZURpc3BsYXkuZGlzcGxheUhlaWdodENzcztcblx0fSBlbHNlIGlmICh0eXBlb2Ygc2NyZWVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3Qgc3cgPSBOdW1iZXIoc2NyZWVuLndpZHRoKSB8fCAwO1xuXHRcdGNvbnN0IHNoID0gTnVtYmVyKHNjcmVlbi5oZWlnaHQpIHx8IDA7XG5cdFx0Y29uc3QgYXcgPSBOdW1iZXIoc2NyZWVuLmF2YWlsV2lkdGgpIHx8IDA7XG5cdFx0Y29uc3QgYWggPSBOdW1iZXIoc2NyZWVuLmF2YWlsSGVpZ2h0KSB8fCAwO1xuXHRcdHcgPSBNYXRoLm1heCh3LCBzdywgYXcpO1xuXHRcdGggPSBNYXRoLm1heChoLCBzaCwgYWgpO1xuXHR9XG5cdGlmICghdyAmJiAhaCkgcmV0dXJuIHtcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDBcblx0fTtcblx0Y29uc3QgbGFuZHNjYXBlID0gaXNMYW5kc2NhcGUoKTtcblx0Y29uc3QgYm94TGFuZHNjYXBlID0gdyA+IDAgJiYgaCA+IDAgJiYgdyA+IGg7XG5cdGlmIChsYW5kc2NhcGUgJiYgdyA+IDAgJiYgaCA+IDAgJiYgdyA8IGgpIHJldHVybiB7XG5cdFx0d2lkdGg6IGgsXG5cdFx0aGVpZ2h0OiB3XG5cdH07XG5cdGlmICghbGFuZHNjYXBlICYmIGJveExhbmRzY2FwZSkgcmV0dXJuIHtcblx0XHR3aWR0aDogaCxcblx0XHRoZWlnaHQ6IHdcblx0fTtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogdyB8fCBoLFxuXHRcdGhlaWdodDogaCB8fCB3XG5cdH07XG59O1xudmFyIGNsYW1wVG9QaHlzaWNhbCA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG5cdGNvbnN0IHBoeXMgPSByZWFkUGh5c2ljYWxTY3JlZW4oKTtcblx0Y29uc3QgaW5uZXJXID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCA6IDA7XG5cdGNvbnN0IGlubmVySCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwIDogMDtcblx0Y29uc3Qgcm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG5cdGNvbnN0IGNsaWVudFcgPSBOdW1iZXIocm9vdD8uY2xpZW50V2lkdGgpIHx8IDA7XG5cdGNvbnN0IGNsaWVudEggPSBOdW1iZXIocm9vdD8uY2xpZW50SGVpZ2h0KSB8fCAwO1xuXHRjb25zdCBjYXBXID0gTWF0aC5tYXgocGh5cy53aWR0aCwgaW5uZXJXLCBjbGllbnRXKTtcblx0Y29uc3QgY2FwSCA9IE1hdGgubWF4KHBoeXMuaGVpZ2h0LCBpbm5lckgsIGNsaWVudEgpO1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBjYXBXID4gMCA/IE1hdGgubWluKHdpZHRoLCBjYXBXKSA6IHdpZHRoLFxuXHRcdGhlaWdodDogY2FwSCA+IDAgPyBNYXRoLm1pbihoZWlnaHQsIGNhcEgpIDogaGVpZ2h0XG5cdH07XG59O1xudmFyIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKHdpZHRoLCBoZWlnaHQsIGxlZnQgPSAwLCB0b3AgPSAwKSA9PiB7XG5cdGNvbnN0IHNhZmVXaWR0aCA9IE1hdGgubWF4KDAsIE51bWJlcih3aWR0aCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVIZWlnaHQgPSBNYXRoLm1heCgwLCBOdW1iZXIoaGVpZ2h0KSB8fCAwKTtcblx0Y29uc3Qgc2FmZUxlZnQgPSBOdW1iZXIobGVmdCkgfHwgMDtcblx0Y29uc3Qgc2FmZVRvcCA9IE51bWJlcih0b3ApIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogc2FmZUxlZnQsXG5cdFx0dG9wOiBzYWZlVG9wLFxuXHRcdHJpZ2h0OiBzYWZlTGVmdCArIHNhZmVXaWR0aCxcblx0XHRib3R0b206IHNhZmVUb3AgKyBzYWZlSGVpZ2h0LFxuXHRcdHdpZHRoOiBzYWZlV2lkdGgsXG5cdFx0aGVpZ2h0OiBzYWZlSGVpZ2h0XG5cdH07XG59O1xudmFyIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCgwLCAwKTtcblx0Y29uc3Qgcm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG5cdHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydChOdW1iZXIocm9vdD8uY2xpZW50V2lkdGgpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCk7XG59O1xudmFyIHJlYWRMYXlvdXRWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdGtleWJvYXJkOiAwXG5cdH07XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCBpbm5lclcgPSBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDA7XG5cdGNvbnN0IGlubmVySCA9IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VyA9IE51bWJlcih2dj8ud2lkdGgpIHx8IDA7XG5cdGNvbnN0IHZ2SCA9IE51bWJlcih2dj8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlRvcCA9IE51bWJlcih2dj8ub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCB2a0ggPSBOdW1iZXIodmlydHVhbEtleWJvYXJkKCk/LmJvdW5kaW5nQm94Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2T3ZlcmxhcCA9IGlubmVySCA+IDAgJiYgdnZIID4gMCA/IGlubmVySCAtIHZ2SCAtIHZ2VG9wIDogMDtcblx0Y29uc3QgY2FwSCA9IGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0O1xuXHRjb25zdCBuYXRpdmVDYXAgPSBpc05hdGl2ZUNhcGFjaXRvckhvc3QoKTtcblx0bGV0IGtleWJvYXJkID0gY2FwSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gY2FwSCA6ICFuYXRpdmVDYXAgJiYgdmtIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2a0ggOiAhbmF0aXZlQ2FwICYmIHZ2T3ZlcmxhcCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdnZPdmVybGFwIDogMDtcblx0Y29uc3QgY2FuZGlkYXRlVyA9IE1hdGgubWF4KGlubmVyVywgdnZXKTtcblx0Y29uc3QgY2FuZGlkYXRlSCA9IE1hdGgubWF4KGlubmVySCwgdnZIICsgdnZUb3AsIGtleWJvYXJkID4gMCA/IHZ2SCArIGtleWJvYXJkIDogMCk7XG5cdGNvbnN0IG9yaWVudCA9IGlzTGFuZHNjYXBlKCkgPyBcImxcIiA6IFwicFwiO1xuXHRpZiAob3JpZW50ICE9PSBsYXlvdXRMb2NrT3JpZW50KSB7XG5cdFx0bGF5b3V0TG9ja09yaWVudCA9IG9yaWVudDtcblx0XHRsYXlvdXRMb2NrVyA9IDA7XG5cdFx0bGF5b3V0TG9ja0ggPSAwO1xuXHR9XG5cdGNvbnN0IHN1ZGRlblNocmluayA9ICFuYXRpdmVDYXAgJiYgbGF5b3V0TG9ja0ggPiAwICYmIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYO1xuXHRpZiAoa2V5Ym9hcmQgPCBLRVlCT0FSRF9PVkVSTEFZX1BYICYmIHN1ZGRlblNocmluaykge1xuXHRcdGNvbnN0IHNocmluayA9IE1hdGgubWF4KDAsIGxheW91dExvY2tIIC0gY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0ggLSAodnZIICsgdnZUb3ApKTtcblx0XHRpZiAoc2hyaW5rID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gc2hyaW5rO1xuXHR9XG5cdGNvbnN0IGV4cGFuZGVkU2VsZWN0aW9uID0gIWlzQ29sbGFwc2VkQ2FyZXQoKTtcblx0aWYgKGV4cGFuZGVkU2VsZWN0aW9uICYmIGxhc3RTdGFibGVLZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBrZXlib2FyZCA9IGxhc3RTdGFibGVLZXlib2FyZDtcblx0ZWxzZSBpZiAoa2V5Ym9hcmQgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkgbGFzdFN0YWJsZUtleWJvYXJkID0ga2V5Ym9hcmQ7XG5cdGVsc2UgaWYgKCFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgbGFzdFN0YWJsZUtleWJvYXJkID0gMDtcblx0aWYgKCEoa2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHN1ZGRlblNocmluayB8fCBleHBhbmRlZFNlbGVjdGlvbikpIHtcblx0XHRsYXlvdXRMb2NrVyA9IGNhbmRpZGF0ZVc7XG5cdFx0bGF5b3V0TG9ja0ggPSBjYW5kaWRhdGVIO1xuXHR9IGVsc2Uge1xuXHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgoY2FuZGlkYXRlVywgbGF5b3V0TG9ja1cpO1xuXHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgoY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0gpO1xuXHR9XG5cdGNvbnN0IGxvY2tlZCA9IGNsYW1wVG9QaHlzaWNhbChsYXlvdXRMb2NrVyB8fCBjYW5kaWRhdGVXLCBsYXlvdXRMb2NrSCB8fCBjYW5kaWRhdGVIKTtcblx0bGF5b3V0TG9ja1cgPSBsb2NrZWQud2lkdGg7XG5cdGxheW91dExvY2tIID0gbG9ja2VkLmhlaWdodDtcblx0Y29uc3Qga2IgPSBsb2NrZWQuaGVpZ2h0ID4gMCA/IE1hdGgubWluKGtleWJvYXJkLCBsb2NrZWQuaGVpZ2h0KSA6IGtleWJvYXJkO1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBsb2NrZWQud2lkdGgsXG5cdFx0aGVpZ2h0OiBsb2NrZWQuaGVpZ2h0LFxuXHRcdGtleWJvYXJkOiBrYlxuXHR9O1xufTtcbnZhciBpc0ltZUNocm9tZUxvY2sgPSAoZWwpID0+IHtcblx0Y29uc3QgdGFnID0gZWwudGFnTmFtZTtcblx0aWYgKHRhZyA9PT0gXCJIVE1MXCIgfHwgdGFnID09PSBcIkJPRFlcIikgcmV0dXJuIHRydWU7XG5cdGNvbnN0IGNscyA9IGVsLmNsYXNzTGlzdDtcblx0cmV0dXJuIGNscy5jb250YWlucyhcImFwcC1zaGVsbFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX3ZpZXdwb3J0XCIpIHx8IGNscy5jb250YWlucyhcImFwcC1zaGVsbF9fbmF2XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1yb290XCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC13b3Jrc3BhY2VcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLWNocm9tZVwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcImVudi11aS13aW5kb3dfX2JvZHlcIikgfHwgY2xzLmNvbnRhaW5zKFwid2YtZnJhbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidWktd2luZG93XCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX190b29sYmFyXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJfX2NvbnRlbnRcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctdmlldy12aWV3ZXItc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiY3ctbWFya2Rvd24tdmlldy1mcmFtZVwiKTtcbn07XG52YXIgcGFyZW50T2YgPSAoZWwpID0+IHtcblx0aWYgKCFlbCkgcmV0dXJuIG51bGw7XG5cdGlmIChlbC5wYXJlbnRFbGVtZW50KSByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcblx0Y29uc3Qgcm9vdCA9IGVsLmdldFJvb3ROb2RlKCk7XG5cdHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QuaG9zdCA6IG51bGw7XG59O1xudmFyIGlzU2Nyb2xscG9ydCA9IChlbCkgPT4ge1xuXHRpZiAoaXNJbWVDaHJvbWVMb2NrKGVsKSkgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXHRjb25zdCBveSA9IHN0eWxlLm92ZXJmbG93WSB8fCBzdHlsZS5vdmVyZmxvd0Jsb2NrO1xuXHRpZiAob3kgIT09IFwiYXV0b1wiICYmIG95ICE9PSBcInNjcm9sbFwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBlbC5zY3JvbGxIZWlnaHQgPiBlbC5jbGllbnRIZWlnaHQgKyAxO1xufTtcbnZhciBmaW5kSW1lU2Nyb2xscG9ydCA9IChzdGFydCkgPT4ge1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTY3JvbGxwb3J0KG5vZGUpKSByZXR1cm4gbm9kZTtcblx0XHRub2RlID0gcGFyZW50T2Yobm9kZSk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xudmFyIHJlYWRDYXJldFJlY3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0aWYgKHNlbD8ucmFuZ2VDb3VudCkge1xuXHRcdFx0Y29uc3QgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcblx0XHRcdGNvbnN0IHJlY3RzID0gcmFuZ2UuZ2V0Q2xpZW50UmVjdHMoKTtcblx0XHRcdGNvbnN0IHJlY3QgPSByZWN0cy5sZW5ndGggPyByZWN0c1tyZWN0cy5sZW5ndGggLSAxXSA6IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0aWYgKHJlY3QgJiYgKHJlY3QuaGVpZ2h0IHx8IHJlY3Qud2lkdGggfHwgcmVjdC50b3AgfHwgcmVjdC5ib3R0b20pKSByZXR1cm4gcmVjdDtcblx0XHR9XG5cdH0gY2F0Y2gge31cblx0Y29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRyZXR1cm4gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbn07XG52YXIgcGluSW1lQ2FyZXRJblNjcm9sbHBvcnQgPSAoKSA9PiB7XG5cdGlmICghaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFpc0NvbGxhcHNlZENhcmV0KCkpIHJldHVybjtcblx0Y29uc3Qga2V5Ym9hcmQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZDtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IHZpc2libGVCb3R0b20gPSAoTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApIC0gTWF0aC5tYXgoOCwga2V5Ym9hcmQgPyAxMiA6IDApO1xuXHRpZiAodmlzaWJsZUJvdHRvbSA8PSAwKSByZXR1cm47XG5cdGNvbnN0IHJlY3QgPSByZWFkQ2FyZXRSZWN0KCk7XG5cdGlmICghcmVjdCkgcmV0dXJuO1xuXHRjb25zdCBvdmVyZmxvdyA9IHJlY3QuYm90dG9tIC0gdmlzaWJsZUJvdHRvbTtcblx0aWYgKG92ZXJmbG93IDw9IDEpIHJldHVybjtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRpZiAocG9ydCkgcG9ydC5zY3JvbGxUb3AgKz0gb3ZlcmZsb3c7XG59O1xudmFyIHBpblZpc3VhbFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0aWYgKCF2dikgcmV0dXJuO1xuXHRjb25zdCB0b3AgPSBOdW1iZXIodnYub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCBsZWZ0ID0gTnVtYmVyKHZ2Lm9mZnNldExlZnQpIHx8IDA7XG5cdGlmICghdG9wICYmICFsZWZ0KSByZXR1cm47XG5cdHRyeSB7XG5cdFx0dnYuc2Nyb2xsVG8oe1xuXHRcdFx0bGVmdDogMCxcblx0XHRcdHRvcDogMCxcblx0XHRcdGJlaGF2aW9yOiBcImluc3RhbnRcIlxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHR0cnkge1xuXHRcdFx0dnYuc2Nyb2xsVG8/LigwLCAwKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG52YXIgb3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcbnZhciByZXNldENocm9tZVNjcm9sbCA9IChzdGFydCkgPT4ge1xuXHRjb25zdCBwb3J0ID0gZmluZEltZVNjcm9sbHBvcnQoc3RhcnQpO1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZSAhPT0gcG9ydCAmJiAoaXNJbWVDaHJvbWVMb2NrKG5vZGUpIHx8IG5vZGUuc2Nyb2xsVG9wIHx8IG5vZGUuc2Nyb2xsTGVmdCkpIHtcblx0XHRcdGlmIChub2RlICE9PSBwb3J0KSB7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsVG9wID0gMDtcblx0XHRcdFx0bm9kZS5zY3JvbGxMZWZ0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG59O1xudmFyIHBpbk92ZXJsYXlTY3JvbGwgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IG92ZXJsYXlQaW5uaW5nKSByZXR1cm47XG5cdGlmICghKHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkID4gMCB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpIHJldHVybjtcblx0b3ZlcmxheVBpbm5pbmcgPSB0cnVlO1xuXHR0cnkge1xuXHRcdHBpblZpc3VhbFZpZXdwb3J0KCk7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5zY3JvbGxZKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZiAocm9vdC5zY3JvbGxUb3AgfHwgcm9vdC5zY3JvbGxMZWZ0KSByb290LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmIChib2R5ICYmIChib2R5LnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbExlZnQpKSBib2R5LnNjcm9sbFRvKDAsIDApO1xuXHRcdGlmICghaXNDb2xsYXBzZWRDYXJldCgpKSByZXNldENocm9tZVNjcm9sbChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0fSBmaW5hbGx5IHtcblx0XHRvdmVybGF5UGlubmluZyA9IGZhbHNlO1xuXHR9XG59O1xudmFyIHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IGZhbHNlO1xudmFyIHBhdGNoSW1lU2Nyb2xsSW50b1ZpZXcgPSAoKSA9PiB7XG5cdGlmIChzY3JvbGxJbnRvVmlld1BhdGNoZWQgfHwgdHlwZW9mIEVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0c2Nyb2xsSW50b1ZpZXdQYXRjaGVkID0gdHJ1ZTtcblx0Y29uc3Qgb3JpZyA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3O1xuXHRFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKGFyZykge1xuXHRcdGlmIChpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAmJiAhaXNDb2xsYXBzZWRDYXJldCgpKSByZXR1cm47XG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0ltZUNocm9tZUxvY2sodGhpcykpIHJldHVybjtcblx0XHRyZXR1cm4gb3JpZy5jYWxsKHRoaXMsIGFyZyk7XG5cdH07XG59O1xudmFyIHBpbkltZUNocm9tZSA9IChvcHRzKSA9PiB7XG5cdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0aWYgKCFvcHRzPy5jYXJldCkgcmV0dXJuO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHRwaW5JbWVDYXJldEluU2Nyb2xscG9ydCgpO1xuXHR9KTtcbn07XG52YXIgZ2V0QXZhaWxTaXplID0gKCkgPT4ge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGNvbnN0IHZ2ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydCA6IG51bGw7XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpO1xuXHRjb25zdCB2dkJsb2NrID0ge1xuXHRcdFwiLS12di13aWR0aFwiOiBgJHt2dj8ud2lkdGggPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDApfXB4YCxcblx0XHRcIi0tdnYtaGVpZ2h0XCI6IGAke3Z2Py5oZWlnaHQgPz8gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAwKX1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC1sZWZ0XCI6IGAke3Z2Py5vZmZzZXRMZWZ0ID8/IDB9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtdG9wXCI6IGAke3Z2Py5vZmZzZXRUb3AgPz8gMH1weGAsXG5cdFx0XCItLXZ2LXNjYWxlXCI6IFN0cmluZyh2dj8uc2NhbGUgPz8gMSksXG5cdFx0XCItLWx2LXdpZHRoXCI6IGAke2xheW91dC53aWR0aH1weGAsXG5cdFx0XCItLWx2LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0ta2V5Ym9hcmQtb3ZlcmxheS1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YCxcblx0XHRcIi0tdmlydHVhbC1rZXlib2FyZC1oZWlnaHRcIjogYCR7bGF5b3V0LmtleWJvYXJkfXB4YFxuXHR9O1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS12ay1vcGVuXCIpO1xuXHRpZiAodHlwZW9mIHNjcmVlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0Y29uc3QgcGh5cyA9IHJlYWRQaHlzaWNhbFNjcmVlbigpO1xuXHRcdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRcdGNvbnN0IGlubmVySCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwIDogMDtcblx0XHRjb25zdCBjYXBXID0gTWF0aC5tYXgocGh5cy53aWR0aCwgaW5uZXJXLCBsYXlvdXQud2lkdGgpO1xuXHRcdGNvbnN0IGNhcEggPSBNYXRoLm1heChwaHlzLmhlaWdodCwgaW5uZXJILCBsYXlvdXQuaGVpZ2h0KTtcblx0XHRjb25zdCBzY3JlZW5XID0gY2FwVyA+IDAgPyBgJHtjYXBXfXB4YCA6IFwiMTAwbHZpXCI7XG5cdFx0Y29uc3Qgc2NyZWVuSCA9IGNhcEggPiAwID8gYCR7Y2FwSH1weGAgOiBcIjEwMGx2YlwiO1xuXHRcdGNvbnN0IGRlbnNpdHkgPSBuYXRpdmVEaXNwbGF5Py5kZW5zaXR5IHx8IE51bWJlcihkZXZpY2VQaXhlbFJhdGlvKSB8fCAxO1xuXHRcdGNvbnN0IG5hdGl2ZVNjYWxlID0gbmF0aXZlRGlzcGxheSA/IHtcblx0XHRcdFwiLS1uYXRpdmUtZGVuc2l0eVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5kZW5zaXR5IHx8IGRlbnNpdHkpLFxuXHRcdFx0XCItLW5hdGl2ZS1kcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkuZGVuc2l0eURwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUtcHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LnBwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUteGRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS54ZHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS15ZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LnlkcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLWZvbnQtc2NhbGVcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkuZm9udFNjYWxlIHx8IDEpXG5cdFx0fSA6IHt9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IHNjcmVlblcsXG5cdFx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBzY3JlZW5ILFxuXHRcdFx0XCItLWF2YWlsLXdpZHRoXCI6IHNjcmVlblcsXG5cdFx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IHNjcmVlbkgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogU3RyaW5nKGRlbnNpdHkpLFxuXHRcdFx0Li4ubmF0aXZlU2NhbGUsXG5cdFx0XHQuLi52dkJsb2NrXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdFwiLS1zY3JlZW4td2lkdGhcIjogXCIxMDBsdmlcIixcblx0XHRcIi0tc2NyZWVuLWhlaWdodFwiOiBcIjEwMGx2YlwiLFxuXHRcdFwiLS1hdmFpbC13aWR0aFwiOiBcIjEwMGx2aVwiLFxuXHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogXCIxMDBsdmJcIixcblx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLXBpeGVsLXJhdGlvXCI6IFwiMVwiLFxuXHRcdC4uLnZ2QmxvY2tcblx0fTtcbn07XG52YXIgYXZhaWxTaXplID0gZ2V0QXZhaWxTaXplKCk7XG52YXIgY2xhc3NlcyA9IFtbXCI6cm9vdCwgOmhvc3QsIDpzY29wZVwiLCBhdmFpbFNpemVdXTtcbnZhciBvcmllbnRhdGlvbk51bWJlck1hcCA9IHtcblx0XCJwb3J0cmFpdC1wcmltYXJ5XCI6IDAsXG5cdFwibGFuZHNjYXBlLXByaW1hcnlcIjogMSxcblx0XCJwb3J0cmFpdC1zZWNvbmRhcnlcIjogMixcblx0XCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6IDNcbn07XG52YXIgdXBkYXRlVlAgPSAoZXYpID0+IHtcblx0Y29uc3QgcnVsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0T2JqZWN0LmFzc2lnbihhdmFpbFNpemUsIGdldEF2YWlsU2l6ZSgpKTtcblx0T2JqZWN0LmVudHJpZXMoYXZhaWxTaXplKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BWYWx1ZV0pID0+IHtcblx0XHRjb25zdCBleGlzdHMgPSBydWxlPy5zdHlsZT8uZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG5cdFx0aWYgKCFleGlzdHMgfHwgZXhpc3RzICE9IHByb3BWYWx1ZSkgcnVsZT8uc3R5bGU/LnNldFByb3BlcnR5Py4ocHJvcE5hbWUsIHByb3BWYWx1ZSB8fCBcIlwiLCBcIlwiKTtcblx0fSk7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb3JpZW50YXRpb24tc2Vjb25kYXJ5XCIsIHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGU/LmVuZHNXaXRoPy4oXCJzZWNvbmRhcnlcIikgPyBcIjFcIiA6IFwiMFwiKTtcbn07XG52YXIgZ2V0Q29ycmVjdE9yaWVudGF0aW9uID0gKCkgPT4ge1xuXHRsZXQgb3JpZW50YXRpb25UeXBlID0gc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZSB8fCBcInBvcnRyYWl0LXByaW1hcnlcIjtcblx0aWYgKCFnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIoKGRpc3BsYXktbW9kZTogZnVsbHNjcmVlbikgb3IgKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSkgb3IgKGRpc3BsYXktbW9kZTogd2luZG93LWNvbnRyb2xzLW92ZXJsYXkpKVwiKS5tYXRjaGVzKSB7XG5cdFx0aWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcImxhbmRzY2FwZVwiLCBcInBvcnRyYWl0XCIpO1xuXHRcdGVsc2UgaWYgKG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiKTtcblx0fVxuXHRyZXR1cm4gb3JpZW50YXRpb25UeXBlO1xufTtcbnZhciBwYXNzaXZlT3B0cyQxID0geyBwYXNzaXZlOiB0cnVlIH07XG52YXIgYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IChyYXcpID0+IHtcblx0Y29uc3QgbmV4dCA9IE51bWJlcihyYXcpIHx8IDA7XG5cdGlmIChuZXh0ID4gMCkgY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSBuZXh0O1xuXHR1cGRhdGVWUCgpO1xuXHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcbn07XG52YXIgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9ICgpID0+IHtcblx0Y2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAwO1xuXHR1cGRhdGVWUCgpO1xufTtcbnZhciBiaW5kV2luZG93S2V5Ym9hcmRFdmVudHMgPSAoKSA9PiB7XG5cdGlmICh3aW5kb3dLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0d2luZG93S2V5Ym9hcmRCb3VuZCA9IHRydWU7XG5cdGNvbnN0IG9uU2hvdyA9IChldikgPT4ge1xuXHRcdGNvbnN0IGUgPSBldjtcblx0XHRjb25zdCBkZXRhaWwgPSBlLmRldGFpbDtcblx0XHRjb25zdCBmcm9tRGV0YWlsID0gdHlwZW9mIGRldGFpbCA9PT0gXCJzdHJpbmdcIiA/ICgoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShkZXRhaWwpPy5rZXlib2FyZEhlaWdodDtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9KSgpIDogZGV0YWlsPy5rZXlib2FyZEhlaWdodDtcblx0XHRhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KGUua2V5Ym9hcmRIZWlnaHQgPz8gZnJvbURldGFpbCk7XG5cdH07XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsU2hvd1wiLCBvblNob3cpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkRGlkU2hvd1wiLCBvblNob3cpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWJvYXJkV2lsbEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xufTtcbnZhciBiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdGJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cygpO1xuXHRpZiAoY2FwYWNpdG9yS2V5Ym9hcmRCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRjb25zdCBjYXAgPSBnbG9iYWxUaGlzLkNhcGFjaXRvcjtcblx0Y29uc3QgS2V5Ym9hcmQgPSBjYXA/LlBsdWdpbnM/LktleWJvYXJkO1xuXHRpZiAoIUtleWJvYXJkPy5hZGRMaXN0ZW5lcikgcmV0dXJuO1xuXHRpZiAodHlwZW9mIGNhcC5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhcC5pc05hdGl2ZVBsYXRmb3JtKCkpIHJldHVybjtcblx0Y2FwYWNpdG9yS2V5Ym9hcmRCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0S2V5Ym9hcmQuc2V0U2Nyb2xsPy4oeyBpc0Rpc2FibGVkOiB0cnVlIH0pO1xuXHR9IGNhdGNoIHt9XG5cdHRyeSB7XG5cdFx0S2V5Ym9hcmQuc2V0UmVzaXplTW9kZT8uKHsgbW9kZTogXCJub25lXCIgfSk7XG5cdH0gY2F0Y2gge31cblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxTaG93XCIsIChpbmZvKSA9PiBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KGluZm8/LmtleWJvYXJkSGVpZ2h0KSk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsIChpbmZvKSA9PiBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KGluZm8/LmtleWJvYXJkSGVpZ2h0KSk7XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG59O1xudmFyIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcgPSAoKSA9PiB7XG5cdGlmICh2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gdHJ1ZTtcblx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHt9KTtcbn07XG52YXIgd2hlbkFueVNjcmVlbkNoYW5nZXMgPSAoY2IpID0+IHtcblx0bGV0IHRpY2tpbmcgPSBmYWxzZTtcblx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdGlmICghdGlja2luZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0dXBkYXRlVlAoKTtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdFx0dGlja2luZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHR0aWNraW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBbXTtcblx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdHBhdGNoSW1lU2Nyb2xsSW50b1ZpZXcoKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdH0sIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdywgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0fSwge1xuXHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0cGFzc2l2ZTogdHJ1ZVxuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3c/LnZpc3VhbFZpZXdwb3J0LCBcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHBhc3NpdmVPcHRzJDEpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHNjcmVlbj8ub3JpZW50YXRpb24sIFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIiksIFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIiksIFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoKCk7XG5cdFx0dXBkYXRlKCk7XG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3VzaW5cIiwgKCkgPT4ge1xuXHRcdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRcdGlmIChpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuXHRcdFx0bGF5b3V0TG9ja1cgPSBNYXRoLm1heChsYXlvdXRMb2NrVywgTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwLCBOdW1iZXIod2luZG93LnZpc3VhbFZpZXdwb3J0Py53aWR0aCkgfHwgMCk7XG5cdFx0XHRsYXlvdXRMb2NrSCA9IE1hdGgubWF4KGxheW91dExvY2tILCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwLCBOdW1iZXIod2luZG93LnZpc3VhbFZpZXdwb3J0Py5oZWlnaHQpIHx8IDApO1xuXHRcdH1cblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwge1xuXHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0cGFzc2l2ZTogdHJ1ZVxuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJmb2N1c291dFwiLCB1cGRhdGUsIHBhc3NpdmVPcHRzJDEpKTtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHR1cGRhdGUoKTtcblx0cnVuV2hlbklkbGUoKCkgPT4gdXBkYXRlKCksIDEwMCk7XG5cdHJldHVybiAoKSA9PiB1bnN1YnNjcmliZXJzLmZvckVhY2goKHVuc3ViKSA9PiB1bnN1YigpKTtcbn07XG52YXIgZml4T3JpZW50VG9TY3JlZW4gPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAoIWVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnM/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIikpIHtcblx0XHRlbGVtZW50Py5jbGFzc0xpc3Q/LmFkZD8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKTtcblx0XHRyZXR1cm4gd2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9IG9yaWVudGF0aW9uTnVtYmVyTWFwPy5bZ2V0Q29ycmVjdE9yaWVudGF0aW9uKCldID8/IDA7XG5cdFx0XHRlbGVtZW50Lm9yaWVudCA9IG5leHQ7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZT8uKFwib3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0XHRlbGVtZW50LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKFwiLS1vcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHR9KTtcblx0fVxufTtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKSwgeyBvbmNlOiB0cnVlIH0pO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTWVhc3VyZS50c1xudmFyIGN0eCA9IG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIGluaXRUZXh0U3R5bGUgPSAoZWxlbWVudCwgY3R4KSA9PiB7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBcIlwiKTtcblx0aWYgKGN0eCAmJiBzdHlsZSkge1xuXHRcdGNvbnN0IGZvbnRXZWlnaHQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC13ZWlnaHRcIikgfHwgXCJub3JtYWxcIjtcblx0XHRjb25zdCBmb250U2l6ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikgfHwgXCIxNnB4XCI7XG5cdFx0Y29uc3QgZm9udEZhbWlseSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWZhbWlseVwiKSB8fCBcIlRpbWVzIE5ldyBSb21hblwiO1xuXHRcdGNvbnN0IGZvbnRTdHJldGNoID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc3RyZXRjaFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFN0cmV0Y2ggPSBmb250U3RyZXRjaC5pbmNsdWRlcyhcIiVcIikgPyBcIm5vcm1hbFwiIDogZm9udFN0cmV0Y2g7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmxldHRlclNwYWNpbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGV0dGVyLXNwYWNpbmdcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udEtlcm5pbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1rZXJuaW5nXCIpIHx8IFwiYXV0b1wiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250VmFyaWFudENhcHMgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC12YXJpYW50LWNhcHNcIikgfHwgXCJub3JtYWxcIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udCA9IGAke2ZvbnRXZWlnaHR9ICR7Zm9udFNpemV9ICR7Zm9udEZhbWlseX1gO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cbn07XG52YXIgbWVhc3VyZVRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShlbGVtZW50LCBjdHgpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdH1cblx0cmV0dXJuIHsgd2lkdGg6IG51bGwgfTtcbn07XG52YXIgbWVhc3VyZUlucHV0SW5Gb2N1cyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgaW5wdXQuc2VsZWN0aW9uRW5kIHx8IDApO1xuXHRyZXR1cm4gbWVhc3VyZVRleHQodGV4dCwgaW5wdXQpO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbiA9IChpbnB1dCwgcG9pbnQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0Py52YWx1ZSB8fCBcIlwiO1xuXHRpZiAoY3R4KSB7XG5cdFx0aW5pdFRleHRTdHlsZShpbnB1dCwgY3R4KTtcblx0XHRsZXQgY3VycmVudFdpZHRoID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGN1cnJlbnRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0LnNsaWNlKDAsIGkpKT8ud2lkdGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoID09IG51bGwpIHJldHVybiB0ZXh0Lmxlbmd0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggIT0gbnVsbCAmJiBjdXJyZW50V2lkdGggPj0gcG9pbnRbMF0pIHJldHVybiBNYXRoLm1heChpIC0gMSwgMCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50ID0gKGlucHV0LCBjbGllbnQpID0+IHtcblx0Y29uc3QgYm94ID0gaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IHBvaW50ID0gW2NsaWVudFswXSAtIGJveC5sZWZ0IC8gdW5maXhlZENsaWVudFpvb20oKSwgY2xpZW50WzFdIC0gYm94LnRvcCAvIHVuZml4ZWRDbGllbnRab29tKCldO1xuXHRyZXR1cm4gY29tcHV0ZUNhcmV0UG9zaXRpb24oaW5wdXQsIHBvaW50KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9MYXVuY2hlckdyaWQudHNcbnZhciByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCA9IChlbCwgbGF5b3V0T3ZlcnJpZGUpID0+IHtcblx0Y29uc3QgYyA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1jb2x1bW5zXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgciA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShcImRhdGEtZ3JpZC1yb3dzXCIpIHx8IFwiXCIsIDEwKTtcblx0Y29uc3QgYmFzZSA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQobGF5b3V0T3ZlcnJpZGUgPz8gWzQsIDhdKTtcblx0cmV0dXJuIFtOdW1iZXIuaXNGaW5pdGUoYykgJiYgYyA+IDAgPyBjIDogYmFzZVswXSwgTnVtYmVyLmlzRmluaXRlKHIpICYmIHIgPiAwID8gciA6IGJhc2VbMV1dO1xufTtcbnZhciByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQgPSAoZ3JpZFN5c3RlbSwgY2xpZW50UG9pbnQsIGFyZ3MsIG1vZGUgPSBcImZsb29yXCIpID0+IHtcblx0aWYgKCFncmlkU3lzdGVtKSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCByZWN0ID0gZ3JpZFN5c3RlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRpZiAoIXJlY3QpIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IGxheW91dCA9IHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50KGdyaWRTeXN0ZW0sIGFyZ3M/LmxheW91dCk7XG5cdGNvbnN0IG9yaWVudCA9IG9yaWVudE9mKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBjcyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGdyaWRTeXN0ZW0pO1xuXHRjb25zdCBwbCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdMZWZ0KSB8fCAwO1xuXHRjb25zdCBwdCA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdUb3ApIHx8IDA7XG5cdGNvbnN0IHByID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1JpZ2h0KSB8fCAwO1xuXHRjb25zdCBwYiA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdCb3R0b20pIHx8IDA7XG5cdGNvbnN0IGNvbnRlbnRXID0gTWF0aC5tYXgoMSwgKHJlY3Qud2lkdGggfHwgZ3JpZFN5c3RlbS5jbGllbnRXaWR0aCB8fCAxKSAtIHBsIC0gcHIpO1xuXHRjb25zdCBjb250ZW50SCA9IE1hdGgubWF4KDEsIChyZWN0LmhlaWdodCB8fCBncmlkU3lzdGVtLmNsaWVudEhlaWdodCB8fCAxKSAtIHB0IC0gcGIpO1xuXHRjb25zdCBjc0Nvb3JkID0gWyhjbGllbnRQb2ludD8uWzBdIHx8IDApIC0gcmVjdC5sZWZ0IC0gcGwsIChjbGllbnRQb2ludD8uWzFdIHx8IDApIC0gcmVjdC50b3AgLSBwdF07XG5cdHJldHVybiByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwoY3NDb29yZCwgW2NvbnRlbnRXLCBjb250ZW50SF0sIGxheW91dCwgb3JpZW50LCB7XG5cdFx0bW9kZSxcblx0XHRyZWRpcmVjdDoge1xuXHRcdFx0aXRlbTogYXJncz8uaXRlbSxcblx0XHRcdGxpc3Q6IGFyZ3M/Lmxpc3QsXG5cdFx0XHRpdGVtczogYXJncz8uaXRlbXNcblx0XHR9XG5cdH0pO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL0FuaW1hdGlvbi50c1xudmFyIGFuaW1hdGVTaG93ID0gKHRhcmdldCkgPT4gYXBwZWFyKHRhcmdldCwgZGVjb3JTaG93KTtcbnZhciBhbmltYXRlSGlkZSA9ICh0YXJnZXQpID0+IGRpc2FwcGVhcih0YXJnZXQsIGRlY29ySGlkZSk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9TaGFwZS50c1xudmFyIFdhdnlTaGFwZWRDaXJjbGUgPSAoc3RlcHMgPSAxMDAsIGFtcGxpdHVkZSA9IC4wNSwgZnJlcSA9IDgpID0+IHtcblx0Y29uc3QgcG9pbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykgcG9pbnRzLnB1c2goaSAvIHN0ZXBzKTtcblx0Y29uc3QgYW5nbGUgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYygke3N0ZXB9cmFkICogcGkgKiAyKWA7XG5cdH07XG5cdGNvbnN0IHZhcmlhbnQgPSAoc3RlcCkgPT4ge1xuXHRcdHJldHVybiBgY2FsYyhjYWxjKGNvcyhjYWxjKHZhcigtLWNsaXAtZnJlcSwgOCkgKiAke2FuZ2xlKHN0ZXApfSkpICogMC41ICsgMC41KSAqIHZhcigtLWNsaXAtYW1wbGl0dWRlLCAwKSlgO1xuXHR9O1xuXHRjb25zdCBmdW5jID0gKHN0ZXApID0+IFtgY2FsYyhjYWxjKDAuNSArIGNhbGMoY29zKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYCwgYGNhbGMoY2FsYygwLjUgKyBjYWxjKHNpbigke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWBdO1xuXHRyZXR1cm4ge1xuXHRcdFwiLS1jbGlwLWFtcGxpdHVkZVwiOiBhbXBsaXR1ZGUsXG5cdFx0XCItLWNsaXAtZnJlcVwiOiBmcmVxLFxuXHRcdFwiLS1jbGlwLXBhdGhcIjogYHBvbHlnb24oJHtwb2ludHMubWFwKChzdGVwKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnVuYyhzdGVwKS5qb2luKFwiIFwiKTtcblx0XHR9KS5qb2luKFwiLCBcIil9KWBcblx0fTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9PYnNlcnZlci50c1xudmFyIG9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Cb3JkZXJPYnNlcnZlXCIpO1xudmFyIG9uQm9yZGVyT2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkJvcmRlck9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkNvbnRlbnRPYnNlcnZlXCIpO1xudmFyIG9uQ29udGVudE9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Db250ZW50T2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVud3JhcEZyb21RdWVyeSA9IChlbGVtZW50KSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uY3VycmVudCA9PSBcIm9iamVjdFwiKSBlbGVtZW50ID0gZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50Py5jdXJyZW50ID8/ICh0eXBlb2YgZWxlbWVudD8uc2VsZiA9PSBcIm9iamVjdFwiID8gZWxlbWVudD8uc2VsZiA6IG51bGwpID8/IGVsZW1lbnQ7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBub3JtYWxpemVTZWxlY3RvciA9IChzZWxlY3RvciwgZmFsbGJhY2sgPSBcIipcIikgPT4ge1xuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsbGJhY2s7XG5cdHJldHVybiBzZWxlY3Rvci50cmltKCkgfHwgZmFsbGJhY2s7XG59O1xudmFyIHNhZmVRdWVyeVNlbGVjdG9yQWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBbXTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIFtdO1xuXHR0cnkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSB8fCBbXSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufTtcbnZhciBzYWZlTWF0Y2hlcyA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwubWF0Y2hlcyAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxzZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gISFlbC5tYXRjaGVzKHNlbCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBvYnNlcnZlQ29udGVudEJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQ29udGVudE9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGNvbnRlbnRCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oY29udGVudEJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkNvbnRlbnRPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImNvbnRlbnQtYm94XCIgfSk7XG5cdH1cblx0b25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Db250ZW50T2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVCb3JkZXJCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkJvcmRlck9ic2VydmUkMS5oYXMoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSkpIHtcblx0XHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihib3JkZXJCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5vZmZzZXRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5vZmZzZXRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Cb3JkZXJPYnNlcnZlJDEuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG5cdFx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxuXHRvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uc3BsaWNlPy4ob25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZSA9IChlbGVtZW50LCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGlmICh0eXBlb2YgZWxlbWVudD8uc2VsZWN0b3IgPT0gXCJzdHJpbmdcIikgcmV0dXJuIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKGVsZW1lbnQsIGVsZW1lbnQ/LnNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoKGF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV0pLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF1cblx0fSk7XG5cdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0OiBlbGVtZW50LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yLCBhdHRyaWJ1dGUsIGNiKSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgYXR0cmlidXRlTGlzdCA9IG5ldyBTZXQoWy4uLmF0dHJpYnV0ZS5zcGxpdChcIixcIikgfHwgW2F0dHJpYnV0ZV1dLm1hcCgocykgPT4gcy50cmltKCkpKTtcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG5cdFx0XHRjb25zdCBhZGRlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSB8fCBbXTtcblx0XHRcdGFkZGVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0cmVtb3ZlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdFx0Wy4uLm5ldyBTZXQoYWRkZWROb2RlcyldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKT8ubWFwPy4oKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuXHRcdFx0XHRcdGNiKHtcblx0XHRcdFx0XHRcdHRhcmdldCxcblx0XHRcdFx0XHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHRcdFx0XHRcdH0sIG9ic2VydmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHNhZmVNYXRjaGVzKG11dGF0aW9uLnRhcmdldCwgc2VsKSAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlXG5cdH0pO1xuXHRzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpLm1hcCgodGFyZ2V0KSA9PiBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IHRhcmdldD8uZ2V0QXR0cmlidXRlPy4oYXR0cmlidXRlKVxuXHR9LCBvYnNlcnZlcikpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciA9IFwiKlwiLCBjYiA9IChtdXQsIG9icykgPT4ge30pID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCB1bndyYXBOb2Rlc0J5U2VsZWN0b3IgPSAobm9kZXMpID0+IHtcblx0XHRjb25zdCAkbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVzIHx8IFtdKSB8fCBbXTtcblx0XHQkbm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRyZXR1cm4gWy4uLkFycmF5LmZyb20obmV3IFNldCgkbm9kZXMpLnZhbHVlcygpKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpO1xuXHR9O1xuXHRsZXQgb2JSZWYgPSBudWxsO1xuXHRjb25zdCBoYW5kbGVNdXRhdGlvbiA9IChtdXRhdGlvbikgPT4ge1xuXHRcdGNvbnN0IG9ic2VydmVyID0gb2JSZWY/LmRlcmVmPy4oKTtcblx0XHRjb25zdCBhZGRlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLmFkZGVkTm9kZXMpO1xuXHRcdGNvbnN0IHJlbW92ZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuXHRcdGlmIChhZGRlZE5vZGVzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdFx0dHlwZTogbXV0YXRpb24udHlwZSxcblx0XHRcdHRhcmdldDogbXV0YXRpb24udGFyZ2V0LFxuXHRcdFx0YXR0cmlidXRlTmFtZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZSxcblx0XHRcdGF0dHJpYnV0ZU5hbWVzcGFjZTogbXV0YXRpb24uYXR0cmlidXRlTmFtZXNwYWNlLFxuXHRcdFx0bmV4dFNpYmxpbmc6IG11dGF0aW9uLm5leHRTaWJsaW5nLFxuXHRcdFx0b2xkVmFsdWU6IG11dGF0aW9uLm9sZFZhbHVlLFxuXHRcdFx0cHJldmlvdXNTaWJsaW5nOiBtdXRhdGlvbi5wcmV2aW91c1NpYmxpbmcsXG5cdFx0XHRhZGRlZE5vZGVzLFxuXHRcdFx0cmVtb3ZlZE5vZGVzXG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlT3V0Q29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUZvY3VzQ2xpY2sgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldCB8fCBkb2N1bWVudD8uYWN0aXZlRWxlbWVudF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBmYWN0b3JzID0ge1xuXHRcdHBhc3NpdmU6IHRydWUsXG5cdFx0Y2FwdHVyZTogZmFsc2Vcblx0fTtcblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXNcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXdpdGhpblwiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtdmlzaWJsZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9jdXNDbGljaywgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikgaGFuZGxlTXV0YXRpb24obXV0YXRpb24pO1xuXHR9KTtcblx0b2JSZWYgPSBuZXcgV2Vha1JlZihvYnNlcnZlcik7XG5cdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZCA9IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCk7XG5cdGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRhZGRlZE5vZGVzOiBzZWxlY3RlZCxcblx0XHRyZW1vdmVkTm9kZXM6IFtdXG5cdH0sIG9ic2VydmVyKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0JlaGF2aW9yLnRzXG52YXIgYm91bmRCZWhhdmlvcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBiaW5kQmVoYXZpb3IgPSAoZWxlbWVudCwgYmVoU2V0LCBiZWhhdmlvcikgPT4ge1xuXHRuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFiZWhTZXQuaGFzKGJlaGF2aW9yKSkgYmVoU2V0LmFkZChiZWhhdmlvcik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0QmVoYXZpb3JzID0gKGVsZW1lbnQsIGJlaGF2aW9ycykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKGJlaGF2aW9ycykge1xuXHRcdGNvbnN0IGJlaFNldCA9IGJvdW5kQmVoYXZpb3JzLmdldE9ySW5zZXJ0KGVsZW1lbnQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuXHRcdFsuLi5iZWhhdmlvcnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZEJlaGF2aW9yKGVsZW1lbnQsIGJlaFNldCwgZSkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL1N0b3JlLnRzXG52YXIgbmFtZWRTdG9yZU1hcHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG5hbWVkU3RvcmVNYXBzXCIpO1xudmFyIG5hbWVkU3RvcmVNYXBzID0gZ2xvYmFsVGhpc1tuYW1lZFN0b3JlTWFwc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgZ2V0U3RvcmVzT2ZFbGVtZW50ID0gKG1hcCwgZWxlbWVudCkgPT4ge1xuXHRjb25zdCBFID0gWy4uLm1hcC5lbnRyaWVzKCkgfHwgW11dO1xuXHRyZXR1cm4gbmV3IE1hcChFPy5tYXA/LigoW24sIG1dKSA9PiBbbiwgbT8uZ2V0Py4oZWxlbWVudCldKT8uZmlsdGVyPy4oKFtuLCBlXSkgPT4gISFlKSB8fCBbXSk7XG59O1xudmFyIGlzV2Vha0NvbXBhdGlibGUgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGVsZW1lbnQgPT0gXCJmdW5jdGlvblwiKSAmJiBlbGVtZW50ICE9IG51bGw7XG59O1xudmFyIGJpbmRTdG9yZSA9IChlbGVtZW50LCBuYW1lLCBvYmopID0+IHtcblx0aWYgKCFpc1dlYWtDb21wYXRpYmxlKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQ7XG5cdGxldCB3ZWFrTWFwID0gbmFtZWRTdG9yZU1hcHMuZ2V0KG5hbWUpO1xuXHRpZiAoIXdlYWtNYXApIHtcblx0XHR3ZWFrTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5cdFx0bmFtZWRTdG9yZU1hcHMuc2V0KG5hbWUsIHdlYWtNYXApO1xuXHR9XG5cdGlmICghd2Vha01hcC5oYXMoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSB3ZWFrTWFwLnNldChlbGVtZW50LCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdFN0b3JlcyA9IChlbGVtZW50LCBzdG9yZXMpID0+IHtcblx0aWYgKCFlbGVtZW50IHx8ICFzdG9yZXMpIHJldHVybjtcblx0Zm9yIChjb25zdCBbbmFtZSwgb2JqXSBvZiBzdG9yZXMuZW50cmllcygpKSBiaW5kU3RvcmUoZWxlbWVudCwgbmFtZSwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vTWl4aW5zLnRzXG52YXIgcmVmbGVjdE1peGlucyA9IChlbGVtZW50LCBtaXhpbnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChtaXhpbnMpIHtcblx0XHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRcdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0XHRbLi4ubWl4aW5zPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRNaXhpbnMoZWxlbWVudCwgZSwgbWl4aW5TZXQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgZ2V0RWxlbWVudFJlbGF0ZWQgPSAoZWxlbWVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0b3JlU2V0OiBnZXRTdG9yZXNPZkVsZW1lbnQobmFtZWRTdG9yZU1hcHMsIGVsZW1lbnQpLFxuXHRcdG1peGluU2V0OiBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSxcblx0XHRiZWhhdmlvclNldDogYm91bmRCZWhhdmlvcnM/LmdldD8uKGVsZW1lbnQpXG5cdH07XG59O1xudmFyIGJpbmRNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW4sIG1peFNldCkgPT4ge1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0bWl4U2V0IHx8PSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KTtcblx0aWYgKCFtaXhTZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdG1peFNldD8uYWRkPy4obWl4aW4pO1xuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdFx0aWYgKG1peGluLm5hbWUpIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXSwgbWl4aW4ubmFtZV0uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgYm91bmRNaXhpblNldFN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAYm91bmRNaXhpblNldFwiKTtcbnZhciBib3VuZE1peGluU2V0ID0gZ2xvYmFsVGhpc1tib3VuZE1peGluU2V0U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5FbGVtZW50c1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5FbGVtZW50c1wiKTtcbnZhciBtaXhpbkVsZW1lbnRzID0gZ2xvYmFsVGhpc1ttaXhpbkVsZW1lbnRzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgbWl4aW5SZWdpc3RyeVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5SZWdpc3RyeVwiKTtcbnZhciBtaXhpblJlZ2lzdHJ5ID0gZ2xvYmFsVGhpc1ttaXhpblJlZ2lzdHJ5U3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBtaXhpbk5hbWVzcGFjZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5OYW1lc3BhY2VcIik7XG52YXIgbWl4aW5OYW1lc3BhY2UgPSBnbG9iYWxUaGlzW21peGluTmFtZXNwYWNlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzID0gKGVsZW1lbnQsIG1peGluKSA9PiB7XG5cdGlmICh0eXBlb2YgbWl4aW4gPT0gXCJzdHJpbmdcIikgbWl4aW4gPSBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihtaXhpbik7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Y29uc3QgbWl4aW5zID0gbmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSk7XG5cdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdGlmICghbWl4aW5FbGVtZW50cz8uaGFzPy4obWl4aW4pKSBtaXhpbkVsZW1lbnRzPy5zZXQ/LihtaXhpbiwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpO1xuXHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIW1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSBtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRpZiAobWl4aW5zLmhhcyhtaXhpbikgfHwgIW1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uaGFzPy4oZWxlbWVudCkpIHtcblx0XHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdFx0bmFtZXMuYWRkKG1peGluTmFtZXNwYWNlPy5nZXQ/LihtaXhpbikpO1xuXHRcdFx0bWl4aW5TZXQ/LmFkZD8uKG1peGluKTtcblx0XHRcdGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiLCBbLi4ubmFtZXNdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0fVxuXHRcdG1peGluRWxlbWVudHM/LmdldD8uKG1peGluKT8uYWRkPy4oZWxlbWVudCk7XG5cdH1cblx0aWYgKG1peGluU2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRpZiAoIW1peGlucy5oYXMobWl4aW4pKSB7XG5cdFx0XHRtaXhpblNldD8uZGVsZXRlPy4obWl4aW4pO1xuXHRcdFx0bWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIHJvb3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbnZhciBhZGRSb290ID0gKHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCkgPT4ge1xuXHRpZiAoIXJvb3QpIHJldHVybjtcblx0aWYgKCFyb290cz8uaGFzPy4ocm9vdCkpIHtcblx0XHRyb290cz8uYWRkPy4ocm9vdCk7XG5cdFx0b2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3Iocm9vdCwgXCIqXCIsIFwiZGF0YS1taXhpblwiLCAobXV0YXRpb24pID0+IHVwZGF0ZUFsbE1peGlucyhtdXRhdGlvbi50YXJnZXQpKTtcblx0XHRvYnNlcnZlQnlTZWxlY3Rvcihyb290LCBcIltkYXRhLW1peGluXVwiLCAobXV0YXRpb24pID0+IHtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB1cGRhdGVBbGxNaXhpbnMoZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZVN0eWxlVHJlZShyb290KTtcblx0fVxuXHRyZXR1cm4gcm9vdDtcbn07XG52YXIgdXBkYXRlQWxsTWl4aW5zID0gKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRbLi4ubmV3IFNldChbLi4ubmFtZXNdLm1hcCgobikgPT4gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obikpLmZpbHRlcigobSkgPT4gISFtKSldLm1hcD8uKChtKSA9PiB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZWxlbWVudCwgbSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwgPSAoZWxlbWVudHMsIG1peGluKSA9PiB7XG5cdGVsZW1lbnRzLmZvckVhY2goKGUpID0+IG1peGluID8gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGUsIG1peGluKSA6IHVwZGF0ZUFsbE1peGlucyhlKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMgPSAobWl4aW4pID0+IHtcblx0Zm9yIChjb25zdCByb290IG9mIHJvb3RzKSB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwocm9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwiW2RhdGEtbWl4aW5dXCIpLCBtaXhpbik7XG59O1xudmFyIG5hbWVSZWdpc3RyeUYgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoKGtleSkgPT4ge1xuXHRtaXhpblJlZ2lzdHJ5Py5kZWxldGU/LihrZXkpO1xufSk7XG52YXIgcmVnaXN0ZXJNaXhpbiA9IChuYW1lLCBtaXhpbikgPT4ge1xuXHRpZiAoIW1peGluTmFtZXNwYWNlPy5oYXM/LihtaXhpbikpIHtcblx0XHRjb25zdCBrZXkgPSBuYW1lPy50cmltPy4oKTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRtaXhpbk5hbWVzcGFjZT8uc2V0Py4obWl4aW4sIGtleSk7XG5cdFx0XHRtaXhpblJlZ2lzdHJ5Py5zZXQ/LihrZXksIG1peGluKTtcblx0XHRcdG5hbWVSZWdpc3RyeUY/LnJlZ2lzdGVyPy4obWl4aW4sIGtleSk7XG5cdFx0XHR1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzKG1peGluKTtcblx0XHR9XG5cdH1cbn07XG5hZGRSb290KHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKTtcbnZhciBET01NaXhpbiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9IG51bGwpIHtcblx0XHRpZiAobmFtZSkgcmVnaXN0ZXJNaXhpbihuYW1lLCB0aGlzKTtcblx0fVxuXHRjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0c3RvcmVGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHMuZ2V0KHRoaXMubmFtZSB8fCBcIlwiKT8uZ2V0Py4oZWxlbWVudCk7XG5cdH1cblx0cmVsYXRlZEZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KTtcblx0fVxuXHRnZXQgZWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIG1peGluRWxlbWVudHM/LmdldD8uKHRoaXMpO1xuXHR9XG5cdGdldCBzdG9yYWdlKCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcz8uZ2V0Py4odGhpcy5uYW1lIHx8IFwiXCIpO1xuXHR9XG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBtaXhpbk5hbWVzcGFjZT8uZ2V0Py4odGhpcyk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9IYW5kbGVyLnRzXG52YXIgaGFuZGxlSGlkZGVuID0gKGVsZW1lbnQsIF8sIHZpc2libGUpID0+IHtcblx0Y29uc3QgJHJlZiA9IHZpc2libGU7XG5cdGlmIChoYXNWYWx1ZSh2aXNpYmxlKSkgdmlzaWJsZSA9IHZpc2libGUudmFsdWU7XG5cdGNvbnN0IGlzVmlzaWJsZSA9ICh2aXNpYmxlID0gbm9ybWFsaXplUHJpbWl0aXZlKHZpc2libGUpKSAhPSBudWxsICYmIHZpc2libGUgIT09IGZhbHNlO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIGVsZW1lbnQuaGlkZGVuID0gIWlzVmlzaWJsZTtcblx0XHRlbHNlIGlmIChpc1Zpc2libGUpIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIik7XG5cdFx0ZWxzZSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIsIFwiXCIpO1xuXHR9KTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGhhbmRsZVByb3BlcnR5ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCEocHJvcCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBrZWJhYlRvQ2FtZWwocHJvcCkgOiBwcm9wKSB8fCAhZWwgfHwgW1xuXHRcdFwic3R5bGVcIixcblx0XHRcImRhdGFzZXRcIixcblx0XHRcImF0dHJpYnV0ZVN0eWxlTWFwXCIsXG5cdFx0XCJzdHlsZU1hcFwiLFxuXHRcdFwiY29tcHV0ZWRTdHlsZU1hcFwiXG5cdF0uaW5kZXhPZihwcm9wIHx8IFwiXCIpICE9IC0xKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdGlmIChlbD8uW3Byb3BdID09PSB2YWwpIHJldHVybiBlbDtcblx0aWYgKGVsPy5bcHJvcF0gIT09IHZhbCkgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHZhbCAhPSBudWxsKSBlbFtwcm9wXSA9IHZhbDtcblx0XHRlbHNlIGRlbGV0ZSBlbFtwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlRGF0YXNldCA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IGRhdGFzZXRSZWYgPSBlbD8uZGF0YXNldDtcblx0aWYgKCFwcm9wIHx8ICFlbCB8fCAhZGF0YXNldFJlZikgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsPy52YWx1ZTtcblx0cHJvcCA9IGtlYmFiVG9DYW1lbChwcm9wKTtcblx0aWYgKGRhdGFzZXRSZWY/Lltwcm9wXSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHRpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZSkgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdGVsc2UgJGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIikgZGF0YXNldFJlZltwcm9wXSA9IFN0cmluZyh2YWwpO1xuXHRcdGVsc2UgZGVsZXRlIGRhdGFzZXRSZWZbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGRlbGV0ZVN0eWxlUHJvcGVydHkgPSAoZWwsIG5hbWUpID0+IGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGNhbWVsVG9LZWJhYihuYW1lKSk7XG52YXIgaGFuZGxlU3R5bGVDaGFuZ2UgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBzdHlsZVJlZiA9IGVsPy5zdHlsZTtcblx0aWYgKCFwcm9wIHx8IHR5cGVvZiBwcm9wICE9IFwic3RyaW5nXCIgfHwgIWVsIHx8ICFzdHlsZVJlZikgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKHZhbCwgKCkgPT4ge1xuXHRcdGlmIChpc1ZhbCh2YWwpIHx8IGhhc1ZhbHVlKHZhbCkgfHwgaXNWYWx1ZVVuaXQodmFsKSkgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcCwgdmFsKTtcblx0XHRlbHNlIGlmICh2YWwgPT0gbnVsbCkgZGVsZXRlU3R5bGVQcm9wZXJ0eShlbCwgcHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZUF0dHJpYnV0ZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghcHJvcCB8fCAhZWwpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0cHJvcCA9IGNhbWVsVG9LZWJhYihwcm9wKTtcblx0aWYgKGVsPy5nZXRBdHRyaWJ1dGU/Lihwcm9wKSA9PT0gKHZhbCA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2YWwpKSkgcmV0dXJuIGVsO1xuXHQkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiICYmIHZhbCAhPSBudWxsICYmICh0eXBlb2YgdmFsID09IFwiYm9vbGVhblwiID8gdmFsID09IHRydWUgOiB0cnVlKSkgZWw/LnNldEF0dHJpYnV0ZT8uKHByb3AsIFN0cmluZyh2YWwpKTtcblx0XHRlbHNlIGVsPy5yZW1vdmVBdHRyaWJ1dGU/Lihwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi90eXBlcy50c1xuZnVuY3Rpb24ganVuY3Rpb25Ub0JveChhLCBiKSB7XG5cdGNvbnN0IGxlZnQgPSBNYXRoLm1pbihhLngsIGIueCk7XG5cdGNvbnN0IHRvcCA9IE1hdGgubWluKGEueSwgYi55KTtcblx0Y29uc3QgcmlnaHQgPSBNYXRoLm1heChhLngsIGIueCk7XG5cdGNvbnN0IGJvdHRvbSA9IE1hdGgubWF4KGEueSwgYi55KTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGg6IHJpZ2h0IC0gbGVmdCxcblx0XHRoZWlnaHQ6IGJvdHRvbSAtIHRvcFxuXHR9O1xufVxudmFyIEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXNlbGVjdDpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXNlbGVjdDptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1zZWxlY3Q6ZW5kXCIsXG5cdGNhbmNlbDogXCJqdW5jdGlvbi1zZWxlY3Q6Y2FuY2VsXCJcbn07XG52YXIgSlVOQ1RJT05fRFJBR19FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLWRyYWc6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1kcmFnOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLWRyYWc6ZW5kXCJcbn07XG52YXIgSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tcmVzaXplOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tcmVzaXplOm1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXJlc2l6ZTplbmRcIlxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL0p1bmN0aW9uTWl4aW5zLnRzXG52YXIgbWl4aW5EaXNwb3NlcnNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRGlzcG9zZXJzXCIpO1xudmFyIG1peGluRGlzcG9zZXJzID0gZ2xvYmFsVGhpc1ttaXhpbkRpc3Bvc2Vyc1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHB1c2hEaXNwb3NhYmxlID0gKGhvc3QsIG1peGluTmFtZSwgZm4pID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdGNvbnN0IGxpc3QgPSBtYXAuZ2V0KG1peGluTmFtZSkgPz8gW107XG5cdGxpc3QucHVzaChmbik7XG5cdG1hcC5zZXQobWl4aW5OYW1lLCBsaXN0KTtcblx0bWl4aW5EaXNwb3NlcnMuc2V0KGhvc3QsIG1hcCk7XG59O1xudmFyIHJ1bkRpc3Bvc2VycyA9IChob3N0LCBtaXhpbk5hbWUpID0+IHtcblx0Y29uc3QgbWFwID0gbWl4aW5EaXNwb3NlcnMuZ2V0KGhvc3QpO1xuXHRjb25zdCBsaXN0ID0gbWFwPy5nZXQobWl4aW5OYW1lKTtcblx0aWYgKCFsaXN0KSByZXR1cm47XG5cdGZvciAoY29uc3QgZm4gb2YgbGlzdCkgdHJ5IHtcblx0XHRmbigpO1xuXHR9IGNhdGNoIHt9XG5cdG1hcC5kZWxldGUobWl4aW5OYW1lKTtcblx0aWYgKG1hcC5zaXplID09PSAwKSBtaXhpbkRpc3Bvc2Vycy5kZWxldGUoaG9zdCk7XG59O1xudmFyIHBhcnNlUHhWYXIgPSAoaG9zdCwgbmFtZSkgPT4ge1xuXHRjb25zdCByYXcgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KT8uZ2V0UHJvcGVydHlWYWx1ZT8uKG5hbWUpPy50cmltPy4oKSA/PyBcIlwiO1xuXHRjb25zdCBuID0gcGFyc2VGbG9hdChyYXcpO1xuXHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IDA7XG59O1xudmFyIHF1ZXJ5SGFuZGxlID0gKGhvc3QsIGF0dHIsIGZhbGxiYWNrKSA9PiB7XG5cdGNvbnN0IHNlbCA9IGhvc3QuZ2V0QXR0cmlidXRlKGF0dHIpPy50cmltKCk7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsbGJhY2s7XG5cdGNvbnN0IGZvdW5kID0gaG9zdC5xdWVyeVNlbGVjdG9yKHNlbCk7XG5cdHJldHVybiBmb3VuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZm91bmQgOiBmYWxsYmFjaztcbn07XG52YXIgSnVuY3Rpb25TZWxlY3RNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJ1aS1qdW5jdGlvbi1zZWxlY3Qtb3ZlcmxheVwiO1xuXHRcdG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1vdmVybGF5XCIsIFwiXCIpO1xuXHRcdG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OnZhcigtLXotbWF4LCA5OTk5KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBkYXNoZWQgY29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSA3MCUsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgMTQlLCB0cmFuc3BhcmVudCk7ZGlzcGxheTpub25lO2luc2V0OmF1dG87bWluLXdpZHRoOjA7bWluLWhlaWdodDowO1wiO1xuXHRcdGNvbnN0IGVuc3VyZVBvc2l0aW9uZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoKGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpKT8ucG9zaXRpb24gPT09IFwic3RhdGljXCIpIGhvc3Quc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fTtcblx0XHRlbnN1cmVQb3NpdGlvbmVkKCk7XG5cdFx0aG9zdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRsZXQgYWN0aXZlID0gZmFsc2U7XG5cdFx0bGV0IGEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0bGV0IGIgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH07XG5cdFx0Y29uc3QgbG9jYWxQb2ludCA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgciA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBldi5jbGllbnRYIC0gci5sZWZ0LFxuXHRcdFx0XHR5OiBldi5jbGllbnRZIC0gci50b3Bcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBhcHBseU92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aWYgKGJveC53aWR0aCA8IDEgJiYgYm94LmhlaWdodCA8IDEpIHtcblx0XHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke2JveC5sZWZ0fXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUudG9wID0gYCR7Ym94LnRvcH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7Ym94LndpZHRofXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7Ym94LmhlaWdodH1weGA7XG5cdFx0fTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQ/LmNsb3Nlc3Q/LihcIltkYXRhLWp1bmN0aW9uLWlnbm9yZS1zZWxlY3RdLCBbZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZV0sIFtkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVdLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG5cdFx0XHRpZiAoIShldi50YXJnZXQgPT09IGhvc3QgfHwgaG9zdC5jb250YWlucyhldi50YXJnZXQpKSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdGEgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGIgPSB7IC4uLmEgfTtcblx0XHRcdGhvc3Quc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YiA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgZW5kID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0Ym94LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGVuZChldik7XG5cdFx0fTtcblx0XHRjb25zdCBvbkNhbmNlbCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRob3N0LnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmNhbmNlbCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHsgaG9zdCB9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCAoKSA9PiB7XG5cdFx0XHRvdmVybGF5LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyY2FuY2VsXCIsIG9uQ2FuY2VsKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvbkRyYWdNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpKTtcblx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpKTtcblx0XHRjb25zdCBwcmV2aW91c1RyYW5zZm9ybSA9IGhvc3Quc3R5bGUudHJhbnNmb3JtO1xuXHRcdGlmICghaG9zdC5zdHlsZS50cmFuc2Zvcm0gfHwgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPT09IFwibm9uZVwiKSBob3N0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoY2FsYyh2YXIoLS1qeC1kcmFnLXgsIDApICogMXB4KSwgY2FsYyh2YXIoLS1qeC1kcmFnLXksIDApICogMXB4KSwgMClcIjtcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHN0YXJ0WSA9IDA7XG5cdFx0bGV0IGJhc2VYID0gMDtcblx0XHRsZXQgYmFzZVkgPSAwO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0c3RhcnRYID0gZXYuY2xpZW50WDtcblx0XHRcdHN0YXJ0WSA9IGV2LmNsaWVudFk7XG5cdFx0XHRiYXNlWCA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKTtcblx0XHRcdGJhc2VZID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpO1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0Y2xpZW50WDogZXYuY2xpZW50WCxcblx0XHRcdFx0XHRjbGllbnRZOiBldi5jbGllbnRZLFxuXHRcdFx0XHRcdGJhc2VYLFxuXHRcdFx0XHRcdGJhc2VZXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZHggPSBldi5jbGllbnRYIC0gc3RhcnRYO1xuXHRcdFx0Y29uc3QgZHkgPSBldi5jbGllbnRZIC0gc3RhcnRZO1xuXHRcdFx0Y29uc3QgbnggPSBiYXNlWCArIGR4O1xuXHRcdFx0Y29uc3QgbnkgPSBiYXNlWSArIGR5O1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIG54KTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBueSk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRkeCxcblx0XHRcdFx0XHRkeSxcblx0XHRcdFx0XHR4OiBueCxcblx0XHRcdFx0XHR5OiBueVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR4OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIiksXG5cdFx0XHRcdFx0eTogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy15XCIpXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCAoKSA9PiB7XG5cdFx0XHRob3N0LnN0eWxlLnRyYW5zZm9ybSA9IHByZXZpb3VzVHJhbnNmb3JtO1xuXHRcdH0pO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbnZhciBKdW5jdGlvblJlc2l6ZU1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1oYW5kbGVcIiwgaG9zdCk7XG5cdFx0bGV0IHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0bGV0IHN4ID0gMDtcblx0XHRsZXQgc3kgPSAwO1xuXHRcdGxldCBzdyA9IDA7XG5cdFx0bGV0IHNoID0gMDtcblx0XHRjb25zdCBtaW5XID0gTWF0aC5tYXgoMTIwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLXdcIikgfHwgXCJcIikgfHwgMTIwKTtcblx0XHRjb25zdCBtaW5IID0gTWF0aC5tYXgoODAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4taFwiKSB8fCBcIlwiKSB8fCA4MCk7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IHRydWU7XG5cdFx0XHRzeCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzeSA9IGV2LmNsaWVudFk7XG5cdFx0XHRzdyA9IGhvc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRzaCA9IGhvc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0aGFuZGxlLnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogc3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IG53ID0gTWF0aC5tYXgobWluVywgc3cgKyAoZXYuY2xpZW50WCAtIHN4KSk7XG5cdFx0XHRjb25zdCBuaCA9IE1hdGgubWF4KG1pbkgsIHNoICsgKGV2LmNsaWVudFkgLSBzeSkpO1xuXHRcdFx0aG9zdC5zdHlsZS53aWR0aCA9IGAke253fXB4YDtcblx0XHRcdGhvc3Quc3R5bGUuaGVpZ2h0ID0gYCR7bmh9cHhgO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLm1vdmUsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogbncsXG5cdFx0XHRcdFx0aGVpZ2h0OiBuaFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRyZXNpemluZyA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aGFuZGxlLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBob3N0Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogaG9zdC5vZmZzZXRIZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbm5ldyBKdW5jdGlvblNlbGVjdE1peGluKCk7XG5uZXcgSnVuY3Rpb25EcmFnTWl4aW4oKTtcbm5ldyBKdW5jdGlvblJlc2l6ZU1peGluKCk7XG5cbi8vI2VuZHJlZ2lvblxuZXhwb3J0IHsgRE9NTWl4aW4sIEp1bmN0aW9uRHJhZ01peGluLCBKdW5jdGlvblJlc2l6ZU1peGluLCBKdW5jdGlvblNlbGVjdE1peGluLCBNQVRDSCwgTU9DLCBNT0NFbGVtZW50LCBSQUZCZWhhdmlvciwgUkVHRVgsIFJPT1QsIFdhdnlTaGFwZWRDaXJjbGUsIF9fZXhwb3J0UHJvcGVydGllcywgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcywgYWRkRXZlbnQsIGFkZEV2ZW50cywgYWRkRXZlbnRzTGlzdCwgYWRkUm9vdCwgYW5pbWF0ZUhpZGUsIGFuaW1hdGVTaG93LCBhdmFpbFNpemUsIGJiaCwgYmJ3LCBiaW5kQmVoYXZpb3IsIGJpbmRNaXhpbnMsIGJpbmRTdG9yZSwgYm9yZGVyQm94SGVpZ2h0LCBib3JkZXJCb3hXaWR0aCwgYm91bmRCZWhhdmlvcnMsIGJvdW5kTWl4aW5TZXQsIGNiaCwgY2J3LCBjaGFuZ2Vab29tLCBjbGFzc2VzLCBjb21wdXRlQ2FyZXRQb3NpdGlvbiwgY29tcHV0ZUNhcmV0UG9zaXRpb25Gcm9tQ2xpZW50LCBjb250YWluc09yU2VsZiwgY29udGVudEJveEhlaWdodCwgY29udGVudEJveFdpZHRoLCBjcmVhdGVFbGVtZW50VmFuaWxsYSwgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQsIGRlbGV0ZVN0eWxlUHJvcGVydHksIGRldGVjdE1vYmlsZSwgZG9Cb3JkZXJPYnNlcnZlLCBkb0NvbnRlbnRPYnNlcnZlLCBlbnN1cmVWaWV3cG9ydEludGVyYWN0aXZlV2lkZ2V0T3ZlcmxheSwgZW5zdXJlVmlld3BvcnRUcmFja2luZywgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSwgZml4T3JpZW50VG9TY3JlZW4sIGZpeGVkQ2xpZW50Wm9vbSwgZ2V0QXZhaWxTaXplLCBnZXRCb3VuZGluZ09yaWVudFJlY3QsIGdldENvcnJlY3RPcmllbnRhdGlvbiwgZ2V0RWxlbWVudFJlbGF0ZWQsIGdldEV2ZW50VGFyZ2V0LCBnZXRPZmZzZXRQYXJlbnQsIGdldE9mZnNldFBhcmVudENoYWluLCBnZXRTdG9yZXNPZkVsZW1lbnQsIGdldFpvb20sIGhhbmRsZUF0dHJpYnV0ZSwgaGFuZGxlRGF0YXNldCwgaGFuZGxlSGlkZGVuLCBoYW5kbGVQcm9wZXJ0eSwgaGFuZGxlU3R5bGVDaGFuZ2UsIGhhc1BhcmVudCwgaHRtbCwgaW5jbHVkZVNlbGYsIGluZGV4T2YsIGluaXRUZXh0U3R5bGUsIGlzRWxlbWVudCwgaXNJbkZvY3VzLCBpc01vYmlsZSwgaXNOZWFybHlJZGVudGl0eSwgaXNWYWxpZFBhcmVudCwgbWFrZVJBRkN5Y2xlLCBtZWFzdXJlSW5wdXRJbkZvY3VzLCBtZWFzdXJlVGV4dCwgbWl4aW5EaXNwb3NlcnMsIG1peGluRWxlbWVudHMsIG1peGluTmFtZXNwYWNlLCBtaXhpblJlZ2lzdHJ5LCBuYW1lUmVnaXN0cnlGLCBuYW1lZFN0b3JlTWFwcywgb2JzZXJ2ZUF0dHJpYnV0ZSwgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IsIG9ic2VydmVCb3JkZXJCb3gsIG9ic2VydmVCeVNlbGVjdG9yLCBvYnNlcnZlQ29udGVudEJveCwgb25Cb3JkZXJPYnNlcnZlLCBvbkNvbnRlbnRPYnNlcnZlLCBvcmllbnRPZiwgb3JpZW50YXRpb25OdW1iZXJNYXAsIHBhc3NpdmVPcHRzLCByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQsIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50LCByZWZsZWN0QmVoYXZpb3JzLCByZWZsZWN0TWl4aW5zLCByZWZsZWN0U3RvcmVzLCByZWdpc3Rlck1peGluLCByZW1vdmVFdmVudCwgcmVtb3ZlRXZlbnRzLCByZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQsIHJvb3RzLCBzZXRBdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzSWZOdWxsLCBzZXRDaGVja2VkLCBzZXRJZGxlSW50ZXJ2YWwsIHRocm90dGxlTWFwLCB1bmZpeGVkQ2xpZW50Wm9vbSwgdXBkYXRlQWxsTWl4aW5zLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCwgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cywgdXBkYXRlVlAsIHVybCwgd2hlbkFueVNjcmVlbkNoYW5nZXMsIHpvb21PZiwgem9vbVZhbHVlcyB9OyJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQUFBLEdBQWUsZ0JBQUFDLElBQWMsZ0JBQUFDLElBQWMsWUFBQUMsR0FBVSxxQkFBQUMsSUFBbUIsU0FBQUMsSUFBTyxlQUFBQyxJQUFhLGdCQUFBQyxJQUFjLHVCQUFBQyxJQUFxQixzQkFBQUMsSUFBb0IsK0JBQUFDLFVBQW1DO0FBQy9MLFNBQVMsVUFBQUMsSUFBUSxhQUFBQyxJQUFXLGFBQUFDLElBQVcsYUFBQUMsSUFBVyxvQkFBQUMsSUFBa0Isb0JBQUFDLFNBQXdCO0FBRTVGLGNBQWM7QUFHZCxJQUFJQyxLQUFrQyx1QkFBTyxJQUFJLGtDQUFrQyxHQUMvRUMsS0FBNEIsV0FBV0QsRUFBK0IsTUFBc0Isb0JBQUksSUFBSTtBQUN4RztBQUFBLEVBQ0M7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElB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RCxTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsWUFDUCxNQUFBdFU7QUFBQSxZQUNBLE9BQU9BLEVBQUs7QUFBQSxZQUNaLFFBQVFBLEVBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRCxDQUFDLENBQUM7QUFBQTtBQUFBLElBQ0g7QUFDQSxXQUFBeVUsRUFBZXpVLEdBQU0sc0JBQXNCeEIsRUFBU3FYLEdBQVEsZUFBZVAsQ0FBTSxDQUFDLEdBQ2xGYixFQUFlelUsR0FBTSxzQkFBc0J4QixFQUFTcVgsR0FBUSxlQUFlTixDQUFNLENBQUMsR0FDbEZkLEVBQWV6VSxHQUFNLHNCQUFzQnhCLEVBQVNxWCxHQUFRLGFBQWFKLENBQUksQ0FBQyxHQUM5RWhCLEVBQWV6VSxHQUFNLHNCQUFzQnhCLEVBQVNxWCxHQUFRLGlCQUFpQkosQ0FBSSxDQUFDLEdBQzNFO0FBQUEsRUFDUjtBQUFBLEVBQ0EsV0FBV1AsR0FBSztBQUNmLFVBQU1sVixJQUFPa1YsR0FBSyxRQUFRO0FBQzFCLFdBQUlsVixLQUFNNFUsR0FBYTVVLEdBQU0sb0JBQW9CLEdBQzFDO0FBQUEsRUFDUjtBQUNEO0FBQ0EsSUFBSWlWLEdBQW9CO0FBQ3hCLElBQUlVLEdBQWtCO0FBQ3RCLElBQUlZLEdBQW9COyIsCiAgIm5hbWVzIjogWyIkYXZvaWRUcmlnZ2VyIiwgImNhbWVsVG9LZWJhYiIsICJjdnRfY3NfdG9fb3MiLCAiaGFzVmFsdWUiLCAiaXNBcnJheU9ySXRlcmFibGUiLCAiaXNWYWwiLCAiaXNWYWx1ZVVuaXQiLCAia2ViYWJUb0NhbWVsIiwgIm5vcm1hbGl6ZUdyaWRMYXlvdXQiLCAibm9ybWFsaXplUHJpbWl0aXZlIiwgInJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCIsICJhcHBlYXIiLCAiZGVjb3JIaWRlIiwgImRlY29yU2hvdyIsICJkaXNhcHBlYXIiLCAib2JzZXJ2ZVN0eWxlVHJlZSIsICJzZXRTdHlsZVByb3BlcnR5IiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXNTeW1ib2wiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllcyIsICJvcHRpb25zIiwgIm5hbWUiLCAiZSIsICJfX2V4cG9ydFByb3BlcnRpZXMiLCAiaXNNb2JpbGUiLCAiY2hlY2siLCAiYSIsICJkZXRlY3RNb2JpbGUiLCAiY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2siLCAicnVuV2hlbklkbGUkMSIsICJjYiIsICJ0aW1lb3V0IiwgImdldE9mZnNldFBhcmVudCIsICJlbGVtZW50IiwgImdldE9mZnNldFBhcmVudENoYWluIiwgInBhcmVudHMiLCAiY3VycmVudCIsICJwYXJlbnQiLCAiaXNOZWFybHlJZGVudGl0eSIsICJtYXRyaXgiLCAiZXBzaWxvbiIsICJtYWtlUkFGQ3ljbGUiLCAiY29udHJvbCIsICJyQUYiLCAicmVzIiwgIlJBRkJlaGF2aW9yIiwgInNoZWQiLCAiUk9PVCIsICJzZXRBdHRyaWJ1dGVzSWZOdWxsIiwgImF0dHJzIiwgInZhbHVlIiwgIm9sZCIsICJzZXRBdHRyaWJ1dGVzIiwgInRocm90dGxlTWFwIiwgInNldElkbGVJbnRlcnZhbCIsICJhcmdzIiwgInN0YXR1cyIsICJyIiwgImJvcmRlckJveFdpZHRoIiwgImJvcmRlckJveEhlaWdodCIsICJjb250ZW50Qm94V2lkdGgiLCAiY29udGVudEJveEhlaWdodCIsICJvbkJvcmRlck9ic2VydmUiLCAib25Db250ZW50T2JzZXJ2ZSIsICJkb0NvbnRlbnRPYnNlcnZlIiwgIm9ic2VydmVyIiwgImVudHJpZXMiLCAiZW50cnkiLCAiY29udGVudEJveFNpemUiLCAiZG9Cb3JkZXJPYnNlcnZlIiwgImJvcmRlckJveFNpemUiLCAidXJsIiwgInR5cGUiLCAic291cmNlIiwgImh0bWwiLCAicGFyc2VkIiwgInNldENoZWNrZWQiLCAiaW5wdXQiLCAiZXYiLCAiaXNWYWxpZFBhcmVudCIsICJpbmRleE9mIiwgIm5vZGUiLCAiTUFUQ0giLCAiUkVHRVgiLCAiY3JlYXRlRWxlbWVudFZhbmlsbGEiLCAic2VsZWN0b3IiLCAiY3JlYXRlIiwgIm1hdGNoIiwgImNsYXNzTmFtZSIsICJpc0VsZW1lbnQiLCAiZWwiLCAiaW5jbHVkZVNlbGYiLCAidGFyZ2V0IiwgInNlbCIsICJoYXNQYXJlbnQiLCAicGFzc2l2ZU9wdHMiLCAiYWRkRXZlbnQiLCAib3B0cyIsICJ3ciIsICJyZW1vdmVFdmVudCIsICJhZGRFdmVudHMiLCAicm9vdCIsICJoYW5kbGVycyIsICJhZGRFdmVudHNMaXN0IiwgImV2ZW50cyIsICJsaXN0IiwgImNicyIsICJyZW1vdmVFdmVudHMiLCAiZ2V0RXZlbnRUYXJnZXQiLCAicGF0aCIsICJjb250YWluc09yU2VsZiIsICJiIiwgImFFbCIsICJiRWwiLCAiYUluZGV4IiwgImJJbmRleCIsICJNT0NFbGVtZW50IiwgInNlbGYiLCAiaG9zdE1hdGNoZWQiLCAiY2xvc2VzdCIsICJob3N0IiwgIk1PQyIsICJpc0luRm9jdXMiLCAic2VsZWN0b3JPckVsZW1lbnQiLCAiZGlyIiwgImFjdGl2ZSIsICJpc0ZvY3VzZWQiLCAiaXNIb3ZlcmVkIiwgImFsdENuZCIsICJnZXRab29tIiwgInpvb21WYWx1ZXNTeW1ib2wiLCAiem9vbVZhbHVlcyIsICJ6b29tT2YiLCAiY29udGFpbmVyIiwgImNoYW5nZVpvb20iLCAic2NhbGUiLCAiZml4ZWRDbGllbnRab29tIiwgInVuZml4ZWRDbGllbnRab29tIiwgIm9yaWVudE9mIiwgInJhdyIsICJuIiwgImdldEJvdW5kaW5nT3JpZW50UmVjdCIsICJvcmllbnQiLCAiem9vbSIsICJib3giLCAibmJ4IiwgIm9yX2kiLCAidnYiLCAic2l6ZSIsICJsZWZ0XyIsICJ0b3BfIiwgInJpZ2h0XyIsICJib3R0b21fIiwgImxlZnQiLCAicmlnaHQiLCAidG9wIiwgImJvdHRvbSIsICJ3aWR0aCIsICJoZWlnaHQiLCAiYmJ3IiwgImJiaCIsICJjYnciLCAiY2JoIiwgInJ1bldoZW5JZGxlIiwgIktFWUJPQVJEX09WRVJMQVlfUFgiLCAiY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiY2FwYWNpdG9yS2V5Ym9hcmRCb3VuZCIsICJ3aW5kb3dLZXlib2FyZEJvdW5kIiwgInZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIiwgIm5hdGl2ZURpc3BsYXkiLCAibmF0aXZlRGlzcGxheUJvdW5kIiwgIm5hdGl2ZURpc3BsYXlSZWZyZXNoUXVldWVkIiwgImlzTmF0aXZlQ2FwYWNpdG9ySG9zdCIsICJjYXAiLCAicmVhZEN3c0JyaWRnZSIsICJwYXJzZU5hdGl2ZURpc3BsYXkiLCAiaW5mbyIsICJ3aW5kb3dXIiwgIndpbmRvd0giLCAiZGlzcGxheVciLCAiZGlzcGxheUgiLCAidyIsICJoIiwgImRlbnNpdHkiLCAiYXBwbHlOYXRpdmVEaXNwbGF5IiwgIm5leHQiLCAicHJldiIsICJzYW1lIiwgInVwZGF0ZVZQIiwgInJlZnJlc2hOYXRpdmVEaXNwbGF5IiwgIkJyaWRnZSIsICJxdWV1ZU5hdGl2ZURpc3BsYXlSZWZyZXNoIiwgImJpbmROYXRpdmVEaXNwbGF5IiwgImNhY2hlZCIsICJ2aXJ0dWFsS2V5Ym9hcmQiLCAiSU5URVJBQ1RJVkVfV0lER0VUIiwgIlZJRVdQT1JUX0ZJVCIsICJlbnN1cmVWaWV3cG9ydEludGVyYWN0aXZlV2lkZ2V0T3ZlcmxheSIsICJoZWFkIiwgIm1ldGEiLCAiY29udGVudCIsICJlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5IiwgInZrIiwgImlzSW1lVGFyZ2V0IiwgInRhZyIsICJpc0NvbGxhcHNlZENhcmV0IiwgImxheW91dExvY2tPcmllbnQiLCAibGF5b3V0TG9ja1ciLCAibGF5b3V0TG9ja0giLCAibGFzdFN0YWJsZUtleWJvYXJkIiwgImlzTGFuZHNjYXBlIiwgInJlYWRQaHlzaWNhbFNjcmVlbiIsICJzdyIsICJzaCIsICJhdyIsICJhaCIsICJsYW5kc2NhcGUiLCAiYm94TGFuZHNjYXBlIiwgImNsYW1wVG9QaHlzaWNhbCIsICJwaHlzIiwgImlubmVyVyIsICJpbm5lckgiLCAiY2xpZW50VyIsICJjbGllbnRIIiwgImNhcFciLCAiY2FwSCIsICJjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCIsICJzYWZlV2lkdGgiLCAic2FmZUhlaWdodCIsICJzYWZlTGVmdCIsICJzYWZlVG9wIiwgInJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCIsICJyZWFkTGF5b3V0Vmlld3BvcnQiLCAidnZXIiwgInZ2SCIsICJ2dlRvcCIsICJ2a0giLCAidnZPdmVybGFwIiwgIm5hdGl2ZUNhcCIsICJrZXlib2FyZCIsICJjYW5kaWRhdGVXIiwgImNhbmRpZGF0ZUgiLCAic3VkZGVuU2hyaW5rIiwgInNocmluayIsICJleHBhbmRlZFNlbGVjdGlvbiIsICJsb2NrZWQiLCAia2IiLCAiaXNJbWVDaHJvbWVMb2NrIiwgImNscyIsICJwYXJlbnRPZiIsICJpc1Njcm9sbHBvcnQiLCAic3R5bGUiLCAib3kiLCAiZmluZEltZVNjcm9sbHBvcnQiLCAic3RhcnQiLCAicmVhZENhcmV0UmVjdCIsICJyYW5nZSIsICJyZWN0cyIsICJyZWN0IiwgInBpbkltZUNhcmV0SW5TY3JvbGxwb3J0IiwgInZpc2libGVCb3R0b20iLCAib3ZlcmZsb3ciLCAicG9ydCIsICJwaW5WaXN1YWxWaWV3cG9ydCIsICJvdmVybGF5UGlubmluZyIsICJyZXNldENocm9tZVNjcm9sbCIsICJwaW5PdmVybGF5U2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsSW50b1ZpZXdQYXRjaGVkIiwgInBhdGNoSW1lU2Nyb2xsSW50b1ZpZXciLCAib3JpZyIsICJhcmciLCAicGluSW1lQ2hyb21lIiwgImdldEF2YWlsU2l6ZSIsICJsYXlvdXQiLCAidnZCbG9jayIsICJzY3JlZW5XIiwgInNjcmVlbkgiLCAibmF0aXZlU2NhbGUiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAiYmluZFdpbmRvd0tleWJvYXJkRXZlbnRzIiwgIm9uU2hvdyIsICJkZXRhaWwiLCAiZnJvbURldGFpbCIsICJiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQiLCAiS2V5Ym9hcmQiLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRlSGlkZSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgIm1peGluU2V0IiwgImJvdW5kTWl4aW5TZXQiLCAiYmluZE1peGlucyIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJtaXhTZXQiLCAid2VsIiwgIm1peGluRWxlbWVudHMiLCAiYm91bmRNaXhpblNldFN5bWJvbCIsICJtaXhpbkVsZW1lbnRzU3ltYm9sIiwgIm1peGluUmVnaXN0cnlTeW1ib2wiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZVN5bWJvbCIsICJtaXhpbk5hbWVzcGFjZSIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAibmFtZXMiLCAicm9vdHMiLCAiYWRkUm9vdCIsICJ1cGRhdGVBbGxNaXhpbnMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgImVsZW1lbnRzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAibmFtZVJlZ2lzdHJ5RiIsICJrZXkiLCAicmVnaXN0ZXJNaXhpbiIsICJET01NaXhpbiIsICJ3RWxlbWVudCIsICJ3U2VsZiIsICJyZWxhdGVkIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJmbiIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K
