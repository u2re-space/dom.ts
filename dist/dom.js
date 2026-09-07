import { $avoidTrigger as $, camelToKebab as Ke, cvt_cs_to_os as ze, hasValue as q, isArrayOrIterable as lt, isVal as dt, isValueUnit as ft, kebabToCamel as Ye, normalizeGridLayout as ht, normalizePrimitive as ke, resolveLocalPointToGridCell as pt } from "@fest-lib/core";
import { appear as mt, decorHide as vt, decorShow as gt, disappear as yt, observeStyleTree as bt, setStyleProperty as R } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var wt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Pe = globalThis[wt] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Pe.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Pe.add(t);
    }
});
var pn = () => {
}, mn = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, vn = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, xt = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), Re = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(xt()), 0), St = (e) => e?.offsetParent ?? e?.host, gn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = St(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, yn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, Et = () => {
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
}, bn = (e = Et()) => (t) => e.shedule(t), wn = typeof document < "u" ? document?.documentElement : null, xn = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Sn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), Ct = /* @__PURE__ */ new Map(), En = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return Re(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => Re(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Ct.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var G = /* @__PURE__ */ Symbol("@border-box-width"), Q = /* @__PURE__ */ Symbol("@border-box-height"), ee = /* @__PURE__ */ Symbol("@content-box-width"), te = /* @__PURE__ */ Symbol("@content-box-height"), je = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), Cn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Oe.has(e)) {
    e[ee] = e.clientWidth, e[te] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[ee] = Math.min(o.inlineSize, e.clientWidth), e[te] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Oe.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, Mn = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !je.has(e)) {
    e[G] = e.offsetWidth, e[Q] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[G] = Math.min(o.inlineSize, e.offsetWidth), e[Q] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    je.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, Nn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), kn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, Tn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, An = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Ln = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, K = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", Hn = "^(?:" + K + ")|^#" + K + "|^\\." + K + "|^\\[" + K + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, Wn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, Vn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, zn = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, de = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Xe = {};
function p(e, t, n, r = Xe) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function _e(e, t, n, r = Xe) {
  e?.removeEventListener?.(t, n, r);
}
var Pn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), Rn = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((lt(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, jn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? _e(e, n, ...r) : _e(e, n, r))), On = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, _n = (e, t, n) => {
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
}, ye = (e, t, n) => {
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
}, Bn = (e, t) => !!ye(e, t), In = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || de(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!ye(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!ye(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? de(e, t) || !1 : de(t, e) || !1;
  }
  return !0;
}, Fn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Mt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Nt = globalThis[Mt] ??= /* @__PURE__ */ new WeakMap(), kt = (e = document.documentElement) => Nt.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Dn = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), $n = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : kt(e)) || 1, be = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, L = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, qn = (e, t = null) => {
  const n = be(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (L(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = ze([i.left, i.top], a, o), [u, v] = ze([i.right, i.bottom], a, o), [f, l] = o == 0 || o == 3 ? [d, u] : [u, d], [c, m] = o == 0 || o == 1 ? [h, v] : [v, h], [y, le] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: l,
    bottom: m,
    width: y,
    height: le
  };
}, Zn = (e, t = null) => (t ?? L(e)) % 2 ? e[Q] ?? e?.clientHeight : e[G] ?? e?.clientWidth, Kn = (e, t = null) => (t ?? L(e)) % 2 ? e[G] ?? e?.clientWidth : e[Q] ?? e?.clientHeight, Yn = (e, t = null) => (t ?? L(e)) % 2 ? e[te] ?? e?.clientHeight : e[ee] ?? e?.clientWidth, Xn = (e, t = null) => (t ?? L(e)) % 2 ? e[ee] ?? e?.clientWidth : e[te] ?? e?.clientHeight, Ue = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), S = 80, Te = 0, Be = !1, Ie = !1, Fe = !1, g = null, De = !1, fe = !1, H = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const e = globalThis.Capacitor;
    return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
  } catch {
    return !1;
  }
}, Je = () => {
  try {
    return globalThis.Capacitor?.Plugins?.CwsBridge ?? null;
  } catch {
    return null;
  }
}, Tt = (e) => {
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
}, Ge = (e) => {
  const t = Tt(e);
  if (!t) return;
  const n = g, r = !!(n && n.windowWidthCss === t.windowWidthCss && n.windowHeightCss === t.windowHeightCss && n.displayWidthCss === t.displayWidthCss && n.displayHeightCss === t.displayHeightCss && n.density === t.density && n.densityDpi === t.densityDpi && n.ppi === t.ppi && n.fontScale === t.fontScale);
  g = t, r || ce();
}, Qe = () => {
  if (!H()) return;
  const e = Je();
  e && (typeof e.getDisplayMetrics == "function" ? e.getDisplayMetrics() : e.getShellInfo?.())?.then((t) => Ge(t)).catch(() => {
  });
}, W = () => {
  !H() || fe || (fe = !0, Ue(() => {
    fe = !1, ne(), Qe();
  }, 80));
}, ne = () => {
  if (!(De || typeof globalThis > "u") && H() && Je()) {
    De = !0;
    try {
      const e = globalThis.window?.__CWS_SHELL_INFO__;
      e && Ge(e);
    } catch {
    }
    Qe();
  }
}, et = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, Y = "interactive-widget=overlays-content", X = "viewport-fit=cover", At = () => {
  if (typeof document > "u") return;
  const e = document.head || document.documentElement;
  if (!e) return;
  let t = document.querySelector('meta[name="viewport"]');
  if (!t) {
    t = document.createElement("meta"), t.setAttribute("name", "viewport"), t.content = `width=device-width, initial-scale=1.0, ${X}, ${Y}`, e.insertBefore(t, e.firstChild);
    return;
  }
  let n = String(t.content || "").trim();
  /interactive-widget\s*=\s*overlays-content/i.test(n) || (/interactive-widget\s*=/i.test(n) ? n = n.replace(/interactive-widget\s*=\s*[a-z-]+/i, Y) : n = n ? `${n.replace(/,\s*$/, "")}, ${Y}` : Y), /viewport-fit\s*=\s*cover/i.test(n) || (/viewport-fit\s*=/i.test(n) ? n = n.replace(/viewport-fit\s*=\s*[a-z-]+/i, X) : n = n ? `${n.replace(/,\s*$/, "")}, ${X}` : X), n !== String(t.content || "").trim() && (t.content = n);
}, _ = () => {
  At();
  const e = et();
  if (e)
    try {
      e.overlaysContent !== !0 && (e.overlaysContent = !0);
    } catch {
    }
}, A = () => {
  let e = typeof document < "u" ? document.activeElement : null;
  for (; e instanceof HTMLElement && e.shadowRoot?.activeElement; ) e = e.shadowRoot.activeElement;
  return e;
}, x = (e) => {
  if (!e || !(e instanceof HTMLElement)) return !1;
  if (e.localName === "cw-raw-editor" || e.isContentEditable) return !0;
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
}, B = () => {
  try {
    const e = document.getSelection();
    return !!(e && e.rangeCount && e.isCollapsed);
  } catch {
    return !0;
  }
}, $e = "", E = 0, w = 0, U = 0, tt = () => {
  try {
    const e = typeof screen < "u" ? String(screen.orientation?.type || "") : "";
    return e.startsWith("landscape") ? !0 : e.startsWith("portrait") ? !1 : !!(typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches);
  } catch {
    return !1;
  }
}, nt = () => {
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
  const n = tt(), r = e > 0 && t > 0 && e > t;
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
}, Lt = (e, t) => {
  const n = nt(), r = typeof window < "u" && Number(window.innerWidth) || 0, i = typeof window < "u" && Number(window.innerHeight) || 0, o = typeof document < "u" ? document.documentElement : null, s = Number(o?.clientWidth) || 0, a = Number(o?.clientHeight) || 0, d = Math.max(n.width, r, s), h = Math.max(n.height, i, a);
  return {
    width: d > 0 ? Math.min(e, d) : e,
    height: h > 0 ? Math.min(t, h) : t
  };
}, qe = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, Un = () => {
  if (typeof window > "u") return qe(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return qe(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, se = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(et()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = Te, h = H();
  let u = d >= S ? d : !h && s >= S ? s : !h && a >= S ? a : 0;
  const v = Math.max(t, r), f = Math.max(n, i + o, u > 0 ? i + u : 0), l = tt() ? "l" : "p";
  l !== $e && ($e = l, E = 0, w = 0);
  const c = !h && w > 0 && w - f >= S;
  if (u < S && c) {
    const Ve = Math.max(0, w - f, w - (i + o));
    Ve >= S && (u = Ve);
  }
  const m = !B();
  m && U >= S ? u = U : u >= S ? U = u : !x(A()) && !x(document.activeElement) && (U = 0), u > 0 || x(A()) || x(document.activeElement) || c || m ? (E = Math.max(v, E), w = Math.max(f, w)) : (E = v, w = f);
  const y = Lt(E || v, w || f);
  E = y.width, w = y.height;
  const le = y.height > 0 ? Math.min(u, y.height) : u;
  return {
    width: y.width,
    height: y.height,
    keyboard: le
  };
}, Ae = (e) => {
  const t = e.tagName;
  if (t === "HTML" || t === "BODY" || t === "CW-RAW-EDITOR" || t === "CW-VIEW-VIEWER" || t === "CW-MARKDOWN-VIEW-FRAME" || t === "CW-MARKDOWN-TOOLBAR-FRAME") return !0;
  const n = e.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame") || n.contains("cw-view-viewer__slot-raw");
}, Le = (e) => {
  if (!e) return null;
  if (e.parentElement) return e.parentElement;
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, Ht = (e) => {
  if (Ae(e)) return !1;
  const t = getComputedStyle(e), n = t.overflowY || t.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : e.scrollHeight > e.clientHeight + 1;
}, I = (e) => {
  let t = e;
  for (; t; ) {
    if (t instanceof HTMLElement && t.classList.contains("cw-raw-editor__scroll")) return t;
    if (t instanceof HTMLElement && t.localName === "cw-raw-editor") {
      const r = t.shadowRoot?.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    const n = t.getRootNode();
    if (n instanceof ShadowRoot) {
      const r = n.querySelector(".cw-raw-editor__scroll");
      if (r instanceof HTMLElement) return r;
    }
    t = Le(t);
  }
  return null;
}, we = (e) => {
  const t = I(e);
  if (t) return t;
  let n = e;
  for (; n; ) {
    if (n instanceof HTMLElement && Ht(n)) return n;
    n = Le(n);
  }
  return null;
}, Wt = () => {
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
}, Vt = () => {
  const e = A();
  if (!x(e) && !x(document.activeElement) || !B()) return;
  const t = se().keyboard, n = window.visualViewport, r = (Number(n?.height) || Number(window.innerHeight) || 0) - Math.max(8, t ? 12 : 0);
  if (r <= 0) return;
  const i = Wt();
  if (!i) return;
  const o = i.bottom - r;
  if (o <= 1) return;
  const s = we(e) || we(document.activeElement);
  s && (s.scrollTop += o);
}, zt = () => {
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
}, he = !1, pe = (e) => {
  const t = we(e);
  let n = e;
  for (; n; )
    n instanceof HTMLElement && n !== t && Ae(n) && (n.scrollTop || n.scrollLeft) && (n.scrollTop = 0, n.scrollLeft = 0), n = Le(n);
}, N = () => {
  if (typeof window > "u" || he) return;
  const e = A(), t = H(), n = !!(I(e) || I(document.activeElement)), r = se().keyboard > 0 || x(e) || x(document.activeElement);
  if (!(!r && !t)) {
    he = !0;
    try {
      zt(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const i = document.documentElement, o = document.body;
      (i.scrollTop || i.scrollLeft) && i.scrollTo(0, 0), o && (o.scrollTop || o.scrollLeft) && o.scrollTo(0, 0), (n || r || !B()) && (pe(e), pe(document.activeElement)), t && document.querySelectorAll("cw-raw-editor").forEach((s) => {
        s instanceof HTMLElement && !s.hidden && pe(s);
      });
    } finally {
      he = !1;
    }
  }
}, Ze = !1, Pt = () => {
  if (Ze || typeof Element > "u") return;
  Ze = !0;
  const e = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(t) {
    const n = A();
    if ((I(this) || I(n) || x(n) && !B()) && (H() || !B())) {
      re({ caret: !0 });
      return;
    }
    if (!(this instanceof HTMLElement && Ae(this)))
      return e.call(this, t);
  };
}, re = (e) => {
  N(), e?.caret && requestAnimationFrame(() => {
    N(), Vt();
  });
}, Jn = () => typeof window > "u" ? 0 : se().keyboard, rt = () => {
  _();
  const e = typeof window < "u" ? window.visualViewport : null, t = se(), n = {
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
    const r = nt(), i = typeof window < "u" && Number(window.innerWidth) || 0, o = typeof window < "u" && Number(window.innerHeight) || 0, s = Math.max(r.width, i, t.width), a = Math.max(r.height, o, t.height), d = s > 0 ? `${s}px` : "100lvi", h = a > 0 ? `${a}px` : "100lvb", u = g?.density || Number(devicePixelRatio) || 1, v = g ? {
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
}, xe = rt(), Gn = [[":root, :host, :scope", xe]], Rt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ce = (e) => {
  const t = document.documentElement;
  Object.assign(xe, rt()), Object.entries(xe).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, jt = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, V = { passive: !0 }, Se = (e) => {
  const t = Number(e) || 0;
  t > 0 && (Te = t), ce(), re({ caret: !0 });
}, ie = () => {
  Te = 0, ce();
}, Ot = () => {
  if (Ie || typeof window > "u") return;
  Ie = !0;
  const e = (t) => {
    const n = t, r = n.detail, i = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    Se(n.keyboardHeight ?? i);
  };
  window.addEventListener("keyboardWillShow", e), window.addEventListener("keyboardDidShow", e), window.addEventListener("keyboardWillHide", ie), window.addEventListener("keyboardDidHide", ie);
}, Ee = () => {
  if (Ot(), Be || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (t?.addListener && !(typeof e.isNativePlatform == "function" && !e.isNativePlatform())) {
    Be = !0;
    try {
      t.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      t.setResizeMode?.({ mode: "none" });
    } catch {
    }
    t.addListener("keyboardWillShow", (n) => Se(n?.keyboardHeight)), t.addListener("keyboardDidShow", (n) => Se(n?.keyboardHeight)), t.addListener("keyboardWillHide", ie), t.addListener("keyboardDidHide", ie);
  }
}, Qn = () => {
  Fe || typeof window > "u" || (Fe = !0, Ee(), ne(), it(() => {
  }));
}, it = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      ce(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return Ee(), ne(), Pt(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, V)), r.push(p(document, "selectionchange", () => {
    N();
  }, V)), r.push(p(window?.visualViewport, "scroll", () => {
    N(), n();
  }, V)), r.push(p(window, "scroll", () => {
    N();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "scroll", () => {
    N();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    re({ caret: !0 }), n();
  }, V)), r.push(p(screen?.orientation, "change", () => {
    W(), n();
  })), r.push(p(window, "resize", () => {
    W(), n();
  })), r.push(p(document?.documentElement, "fullscreenchange", () => {
    W(), n();
  })), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", () => {
    W(), n();
  })), r.push(p(matchMedia("(orientation: landscape)"), "change", () => {
    W(), n();
  })), r.push(p(document, "focusin", () => {
    Ee(), ne(), _(), (x(A()) || x(document.activeElement)) && (E = Math.max(E, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), w = Math.max(w, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), re({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, V)), _(), n(), Ue(() => n(), 100), () => r.forEach((i) => i());
}, er = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), it(() => {
      const t = Rt?.[jt()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
};
typeof document < "u" && (_(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => _(), { once: !0 }));
var T = new OffscreenCanvas(1, 1).getContext("2d"), ot = (e, t) => {
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
}, _t = (e, t) => {
  if (T) {
    ot(t, T);
    try {
      return T.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, tr = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return _t(t, e);
}, Bt = (e, t) => {
  const n = e?.value || "";
  if (T) {
    ot(e, T);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = T.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, nr = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / be(), t[1] - n.top / be()];
  return Bt(e, r);
}, It = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = ht(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, rr = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = It(e, n?.layout), s = L(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, u = parseFloat(a?.paddingRight) || 0, v = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - u), l = Math.max(1, (i.height || e.clientHeight || 1) - h - v), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return pt(c, [f, l], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, ir = (e) => mt(e, gt), or = (e) => yt(e, vt), ar = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, Ft = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), z = globalThis[Ft] ??= /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), P = globalThis[Dt] ??= /* @__PURE__ */ new WeakMap(), Z = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ue = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, j = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = ue(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, Ce = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = ue(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, sr = (e, t) => {
  if (!P.has(e = Z(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.clientWidth,
      blockSize: e.clientHeight
    }, r), P.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "content-box" });
  }
  return P.get(e)?.push?.(t), { disconnect: () => P.get(e)?.splice?.(P.get(e)?.indexOf(t) || -1, 1) };
}, cr = (e, t) => {
  if (!z.has(e = Z(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), z.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return z.get(e)?.push?.(t), { disconnect: () => z.get(e)?.splice?.(z.get(e)?.indexOf(t) || -1, 1) };
}, ur = (e, t, n) => {
  if (typeof e?.selector == "string") return at(e, e?.selector, t, n);
  const r = new Set((t.split(",") || [t]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (e?.element ?? e) instanceof Node && i.observe(e = Z(e), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: e,
    type: "attributes",
    attributeName: o,
    oldValue: e?.getAttribute?.(o)
  }, i)), i;
}, at = (e, t, n, r) => {
  const i = ue(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const u = Array.from(h.addedNodes) || [], v = Array.from(h.removedNodes) || [];
      u.push(...Array.from(h.addedNodes || []).flatMap((f) => j(f, i))), v.push(...Array.from(h.removedNodes || []).flatMap((f) => j(f, i))), [...new Set(u)].filter((f) => Ce(f, i))?.map?.((f) => {
        o.forEach((l) => {
          r({
            target: f,
            type: "attributes",
            attributeName: l,
            oldValue: f?.getAttribute?.(l)
          }, d);
        });
      });
    } else Ce(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
  });
  return s.observe(e = Z(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), j(e, i).map((a) => o.forEach((d) => r({
    target: a,
    type: "attributes",
    attributeName: d,
    oldValue: a?.getAttribute?.(d)
  }, s))), s;
}, $t = (e, t = "*", n = (r, i) => {
}) => {
  const r = ue(t), i = (l) => {
    const c = Array.from(l || []) || [];
    return c.push(...Array.from(l || []).flatMap((m) => j(m, r))), [...Array.from(new Set(c).values())].filter((m) => Ce(m, r));
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
  o = new WeakRef(v), (e?.element ?? e) instanceof Node && v.observe(e = Z(e), {
    childList: !0,
    subtree: !0
  });
  const f = j(e, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, v), v;
}, st = /* @__PURE__ */ new WeakMap(), qt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), lr = (e, t) => {
  if (e) {
    if (t) {
      const n = st.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => qt(e, n, r));
    }
    return e;
  }
}, Zt = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), F = globalThis[Zt] ??= /* @__PURE__ */ new Map(), Kt = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Yt = (e) => (typeof e == "object" || typeof e == "function") && e != null, Xt = (e, t, n) => {
  if (!Yt(e) && e != null) return e;
  let r = F.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), F.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, dr = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) Xt(e, n, r);
    return e;
  }
}, fr = (e, t) => {
  if (e) {
    if (t) {
      const n = C?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      C?.has?.(e) || C?.set?.(e, n), [...t?.values?.() || []].map((r) => Ut(e, r, n));
    }
    return e;
  }
}, O = (e) => ({
  storeSet: Kt(F, e),
  mixinSet: C?.get?.(e),
  behaviorSet: st?.get?.(e)
}), Ut = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= C?.get?.(e), n?.has?.(t) || (n?.add?.(t), k?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, O(e))), e;
}, Jt = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), C = globalThis[Jt] ??= /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), k = globalThis[Gt] ??= /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), D = globalThis[Qt] ??= /* @__PURE__ */ new Map(), en = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), oe = globalThis[en] ??= /* @__PURE__ */ new WeakMap(), ct = (e, t) => {
  typeof t == "string" && (t = D?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => D?.get?.(s)).filter((s) => !!s)), i = C?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  k?.has?.(t) || k?.set?.(t, /* @__PURE__ */ new WeakSet()), C?.has?.(e) || C?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, O(e)), (r.has(t) || !k?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, O(e)), n.add(oe?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), k?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, O(e))));
}, Me = /* @__PURE__ */ new Set(), tn = (e = typeof document < "u" ? document : null) => {
  if (e)
    return Me?.has?.(e) || (Me?.add?.(e), at(e, "*", "data-mixin", (t) => Ne(t.target)), $t(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && Ne(n);
    }), bt(e)), e;
}, Ne = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => D?.get?.(n)).filter((n) => !!n))].map?.((n) => ct(e, n));
}, nn = (e, t) => {
  e.forEach((n) => t ? ct(n, t) : Ne(n));
}, rn = (e) => {
  for (const t of Me) nn(t?.querySelectorAll?.("[data-mixin]"), e);
}, on = new FinalizationRegistry((e) => {
  D?.delete?.(e);
}), an = (e, t) => {
  if (!oe?.has?.(t)) {
    const n = e?.trim?.();
    n && (oe?.set?.(t, n), D?.set?.(n, t), on?.register?.(t, n), rn(t));
  }
};
tn(typeof document < "u" ? document : null);
var He = class {
  constructor(e = null) {
    e && an(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return F.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return O(e);
  }
  get elements() {
    return k?.get?.(this);
  }
  get storage() {
    return F?.get?.(this.name || "");
  }
  get name() {
    return oe?.get?.(this);
  }
}, hr = (e, t, n) => {
  const r = n;
  q(n) && (n = n.value);
  const i = (n = ke(n)) != null && n !== !1;
  return $(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, pr = (e, t, n) => {
  if (!(t = typeof t == "string" ? Ye(t) : t) || !e || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(t || "") != -1) return e;
  const r = n;
  return q(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && $(r, () => {
    n != null ? e[t] = n : delete e[t];
  }), e;
}, mr = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return q(n) && (n = n?.value), t = Ye(t), r?.[t] === (n = ke(n)) || (n == null || n === !1 ? delete r[t] : $(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, sn = (e, t) => e.style.removeProperty(Ke(t)), vr = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || $(n, () => {
    dt(n) || q(n) || ft(n) ? R(e, t, n) : n == null && sn(e, t);
  }), e;
}, gr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return q(n) && (n = n.value), t = Ke(t), e?.getAttribute?.(t) === (n = ke(n)) || $(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function me(e, t) {
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
var J = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, ve = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, ge = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, cn = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), ae = globalThis[cn] ??= /* @__PURE__ */ new WeakMap(), b = (e, t, n) => {
  const r = ae.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), ae.set(e, r);
}, We = (e, t) => {
  const n = ae.get(e), r = n?.get(t);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(t), n.size === 0 && ae.delete(e);
  }
}, M = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, ut = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, un = class extends He {
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
      const c = me(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(J.start, {
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
      const m = me(o, s);
      t.dispatchEvent(new CustomEvent(J.move, {
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
      const m = me(o, s);
      t.dispatchEvent(new CustomEvent(J.end, {
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
        t.dispatchEvent(new CustomEvent(J.cancel, {
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
    return t && We(t, "ui-junction-select"), this;
  }
}, ln = class extends He {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    R(t, "--jx-drag-x", M(t, "--jx-drag-x")), R(t, "--jx-drag-y", M(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = ut(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = M(t, "--jx-drag-x"), d = M(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(ve.start, {
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
      R(t, "--jx-drag-x", m), R(t, "--jx-drag-y", y), t.dispatchEvent(new CustomEvent(ve.move, {
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
        t.dispatchEvent(new CustomEvent(ve.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: M(t, "--jx-drag-x"),
            y: M(t, "--jx-drag-y")
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
    return t && We(t, "ui-junction-drag"), this;
  }
}, dn = class extends He {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = ut(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (l) => {
      l.button === 0 && (l.target !== n && !n.contains(l.target) || (r = !0, i = l.clientX, o = l.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(ge.start, {
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
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(ge.move, {
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
        t.dispatchEvent(new CustomEvent(ge.end, {
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
    return t && We(t, "ui-junction-resize"), this;
  }
};
new un();
new ln();
new dn();
export {
  He as DOMMixin,
  ln as JunctionDragMixin,
  dn as JunctionResizeMixin,
  un as JunctionSelectMixin,
  K as MATCH,
  Bn as MOC,
  ye as MOCElement,
  bn as RAFBehavior,
  Hn as REGEX,
  wn as ROOT,
  ar as WavyShapedCircle,
  pn as __exportProperties,
  Pe as __registeredCssProperties,
  p as addEvent,
  Pn as addEvents,
  Rn as addEventsList,
  tn as addRoot,
  or as animateHide,
  ir as animateShow,
  xe as availSize,
  Kn as bbh,
  Zn as bbw,
  qt as bindBehavior,
  Ut as bindMixins,
  Xt as bindStore,
  Q as borderBoxHeight,
  G as borderBoxWidth,
  st as boundBehaviors,
  C as boundMixinSet,
  Xn as cbh,
  Yn as cbw,
  Dn as changeZoom,
  Gn as classes,
  Bt as computeCaretPosition,
  nr as computeCaretPositionFromClient,
  _n as containsOrSelf,
  te as contentBoxHeight,
  ee as contentBoxWidth,
  Wn as createElementVanilla,
  qe as createFixedOverlayViewport,
  sn as deleteStyleProperty,
  vn as detectMobile,
  Mn as doBorderObserve,
  Cn as doContentObserve,
  At as ensureViewportInteractiveWidgetOverlay,
  Qn as ensureViewportTracking,
  _ as ensureVirtualKeyboardOverlay,
  er as fixOrientToScreen,
  $n as fixedClientZoom,
  rt as getAvailSize,
  qn as getBoundingOrientRect,
  jt as getCorrectOrientation,
  O as getElementRelated,
  On as getEventTarget,
  St as getOffsetParent,
  gn as getOffsetParentChain,
  Kt as getStoresOfElement,
  Fn as getZoom,
  gr as handleAttribute,
  mr as handleDataset,
  hr as handleHidden,
  pr as handleProperty,
  vr as handleStyleChange,
  de as hasParent,
  kn as html,
  zn as includeSelf,
  Ln as indexOf,
  ot as initTextStyle,
  Vn as isElement,
  In as isInFocus,
  mn as isMobile,
  yn as isNearlyIdentity,
  An as isValidParent,
  Et as makeRAFCycle,
  tr as measureInputInFocus,
  _t as measureText,
  ae as mixinDisposers,
  k as mixinElements,
  oe as mixinNamespace,
  D as mixinRegistry,
  on as nameRegistryF,
  F as namedStoreMaps,
  ur as observeAttribute,
  at as observeAttributeBySelector,
  cr as observeBorderBox,
  $t as observeBySelector,
  sr as observeContentBox,
  je as onBorderObserve,
  Oe as onContentObserve,
  L as orientOf,
  Rt as orientationNumberMap,
  Xe as passiveOpts,
  Un as readFixedOverlayViewport,
  It as readLauncherLayoutFromElement,
  Jn as readVirtualKeyboardHeightPx,
  lr as reflectBehaviors,
  fr as reflectMixins,
  dr as reflectStores,
  an as registerMixin,
  _e as removeEvent,
  jn as removeEvents,
  rr as resolveGridCellFromClientPoint,
  Me as roots,
  Sn as setAttributes,
  xn as setAttributesIfNull,
  Tn as setChecked,
  En as setIdleInterval,
  Ct as throttleMap,
  be as unfixedClientZoom,
  Ne as updateAllMixins,
  ct as updateMixinAttributes,
  nn as updateMixinAttributesAll,
  rn as updateMixinAttributesAllInRoots,
  ce as updateVP,
  Nn as url,
  it as whenAnyScreenChanges,
  kt as zoomOf,
  Nt as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheSA9IG51bGw7XG52YXIgbmF0aXZlRGlzcGxheUJvdW5kID0gZmFsc2U7XG52YXIgbmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQgPSBmYWxzZTtcbnZhciBpc05hdGl2ZUNhcGFjaXRvckhvc3QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5jd3NwTmF0aXZlU2hlbGwgPT09IFwiY2FwYWNpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRcdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgY2FwPy5pc05hdGl2ZVBsYXRmb3JtID09PSBcImZ1bmN0aW9uXCIgJiYgQm9vbGVhbihjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHJlYWRDd3NCcmlkZ2UgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuQ2FwYWNpdG9yPy5QbHVnaW5zPy5Dd3NCcmlkZ2UgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgcGFyc2VOYXRpdmVEaXNwbGF5ID0gKGluZm8pID0+IHtcblx0aWYgKCFpbmZvKSByZXR1cm4gbnVsbDtcblx0Y29uc3Qgd2luZG93VyA9IE51bWJlcihpbmZvLndpbmRvd1dpZHRoQ3NzKSB8fCAwO1xuXHRjb25zdCB3aW5kb3dIID0gTnVtYmVyKGluZm8ud2luZG93SGVpZ2h0Q3NzKSB8fCAwO1xuXHRjb25zdCBkaXNwbGF5VyA9IE51bWJlcihpbmZvLmRpc3BsYXlXaWR0aENzcykgfHwgd2luZG93Vztcblx0Y29uc3QgZGlzcGxheUggPSBOdW1iZXIoaW5mby5kaXNwbGF5SGVpZ2h0Q3NzKSB8fCB3aW5kb3dIO1xuXHRjb25zdCB3ID0gd2luZG93VyB8fCBkaXNwbGF5Vztcblx0Y29uc3QgaCA9IHdpbmRvd0ggfHwgZGlzcGxheUg7XG5cdGlmICh3IDw9IDAgfHwgaCA8PSAwKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgZGVuc2l0eSA9IE51bWJlcihpbmZvLmRlbnNpdHkpIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0d2luZG93V2lkdGhDc3M6IHcsXG5cdFx0d2luZG93SGVpZ2h0Q3NzOiBoLFxuXHRcdGRpc3BsYXlXaWR0aENzczogZGlzcGxheVcgfHwgdyxcblx0XHRkaXNwbGF5SGVpZ2h0Q3NzOiBkaXNwbGF5SCB8fCBoLFxuXHRcdGRlbnNpdHksXG5cdFx0ZGVuc2l0eURwaTogTnVtYmVyKGluZm8uZGVuc2l0eURwaSkgfHwgMCxcblx0XHR4ZHBpOiBOdW1iZXIoaW5mby54ZHBpKSB8fCAwLFxuXHRcdHlkcGk6IE51bWJlcihpbmZvLnlkcGkpIHx8IDAsXG5cdFx0cHBpOiBOdW1iZXIoaW5mby5wcGkpIHx8IDAsXG5cdFx0c2NhbGVkRGVuc2l0eTogTnVtYmVyKGluZm8uc2NhbGVkRGVuc2l0eSkgfHwgZGVuc2l0eSxcblx0XHRmb250U2NhbGU6IE51bWJlcihpbmZvLmZvbnRTY2FsZSkgfHwgKGRlbnNpdHkgPiAwID8gKE51bWJlcihpbmZvLnNjYWxlZERlbnNpdHkpIHx8IGRlbnNpdHkpIC8gZGVuc2l0eSA6IDEpXG5cdH07XG59O1xudmFyIGFwcGx5TmF0aXZlRGlzcGxheSA9IChpbmZvKSA9PiB7XG5cdGNvbnN0IG5leHQgPSBwYXJzZU5hdGl2ZURpc3BsYXkoaW5mbyk7XG5cdGlmICghbmV4dCkgcmV0dXJuO1xuXHRjb25zdCBwcmV2ID0gbmF0aXZlRGlzcGxheTtcblx0Y29uc3Qgc2FtZSA9IEJvb2xlYW4ocHJldiAmJiBwcmV2LndpbmRvd1dpZHRoQ3NzID09PSBuZXh0LndpbmRvd1dpZHRoQ3NzICYmIHByZXYud2luZG93SGVpZ2h0Q3NzID09PSBuZXh0LndpbmRvd0hlaWdodENzcyAmJiBwcmV2LmRpc3BsYXlXaWR0aENzcyA9PT0gbmV4dC5kaXNwbGF5V2lkdGhDc3MgJiYgcHJldi5kaXNwbGF5SGVpZ2h0Q3NzID09PSBuZXh0LmRpc3BsYXlIZWlnaHRDc3MgJiYgcHJldi5kZW5zaXR5ID09PSBuZXh0LmRlbnNpdHkgJiYgcHJldi5kZW5zaXR5RHBpID09PSBuZXh0LmRlbnNpdHlEcGkgJiYgcHJldi5wcGkgPT09IG5leHQucHBpICYmIHByZXYuZm9udFNjYWxlID09PSBuZXh0LmZvbnRTY2FsZSk7XG5cdG5hdGl2ZURpc3BsYXkgPSBuZXh0O1xuXHRpZiAoIXNhbWUpIHVwZGF0ZVZQKCk7XG59O1xudmFyIHJlZnJlc2hOYXRpdmVEaXNwbGF5ID0gKCkgPT4ge1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGNvbnN0IEJyaWRnZSA9IHJlYWRDd3NCcmlkZ2UoKTtcblx0aWYgKCFCcmlkZ2UpIHJldHVybjtcblx0KHR5cGVvZiBCcmlkZ2UuZ2V0RGlzcGxheU1ldHJpY3MgPT09IFwiZnVuY3Rpb25cIiA/IEJyaWRnZS5nZXREaXNwbGF5TWV0cmljcygpIDogQnJpZGdlLmdldFNoZWxsSW5mbz8uKCkpPy50aGVuKChpbmZvKSA9PiBhcHBseU5hdGl2ZURpc3BsYXkoaW5mbykpLmNhdGNoKCgpID0+IHt9KTtcbn07XG52YXIgcXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCA9ICgpID0+IHtcblx0aWYgKCFpc05hdGl2ZUNhcGFjaXRvckhvc3QoKSB8fCBuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCkgcmV0dXJuO1xuXHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IHRydWU7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHtcblx0XHRuYXRpdmVEaXNwbGF5UmVmcmVzaFF1ZXVlZCA9IGZhbHNlO1xuXHRcdGJpbmROYXRpdmVEaXNwbGF5KCk7XG5cdFx0cmVmcmVzaE5hdGl2ZURpc3BsYXkoKTtcblx0fSwgODApO1xufTtcbnZhciBiaW5kTmF0aXZlRGlzcGxheSA9ICgpID0+IHtcblx0aWYgKG5hdGl2ZURpc3BsYXlCb3VuZCB8fCB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAoIWlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpKSByZXR1cm47XG5cdGlmICghcmVhZEN3c0JyaWRnZSgpKSByZXR1cm47XG5cdG5hdGl2ZURpc3BsYXlCb3VuZCA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY2FjaGVkID0gZ2xvYmFsVGhpcy53aW5kb3c/Ll9fQ1dTX1NIRUxMX0lORk9fXztcblx0XHRpZiAoY2FjaGVkKSBhcHBseU5hdGl2ZURpc3BsYXkoY2FjaGVkKTtcblx0fSBjYXRjaCB7fVxuXHRyZWZyZXNoTmF0aXZlRGlzcGxheSgpO1xufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLmluc2VydEJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgZGVlcEFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG5cdGxldCBlbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBudWxsO1xuXHR3aGlsZSAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbC5zaGFkb3dSb290Py5hY3RpdmVFbGVtZW50KSBlbCA9IGVsLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBpc0ltZVRhcmdldCA9IChlbCkgPT4ge1xuXHRpZiAoIWVsIHx8ICEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBmYWxzZTtcblx0aWYgKGVsLmxvY2FsTmFtZSA9PT0gXCJjdy1yYXctZWRpdG9yXCIpIHJldHVybiB0cnVlO1xuXHRpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiB0cnVlO1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIlRFWFRBUkVBXCIgfHwgdGFnID09PSBcIlNFTEVDVFwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyAhPT0gXCJJTlBVVFwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHR5cGUgPSBTdHJpbmcoZWwudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuICFbXG5cdFx0XCJidXR0b25cIixcblx0XHRcImNoZWNrYm94XCIsXG5cdFx0XCJyYWRpb1wiLFxuXHRcdFwiZmlsZVwiLFxuXHRcdFwic3VibWl0XCIsXG5cdFx0XCJyZXNldFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcInJhbmdlXCIsXG5cdFx0XCJjb2xvclwiLFxuXHRcdFwiaGlkZGVuXCJcblx0XS5pbmNsdWRlcyh0eXBlKTtcbn07XG52YXIgaXNDb2xsYXBzZWRDYXJldCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRyZXR1cm4gQm9vbGVhbihzZWwgJiYgc2VsLnJhbmdlQ291bnQgJiYgc2VsLmlzQ29sbGFwc2VkKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG52YXIgbGF5b3V0TG9ja09yaWVudCA9IFwiXCI7XG52YXIgbGF5b3V0TG9ja1cgPSAwO1xudmFyIGxheW91dExvY2tIID0gMDtcbnZhciBsYXN0U3RhYmxlS2V5Ym9hcmQgPSAwO1xudmFyIGlzTGFuZHNjYXBlID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHR5cGUgPSB0eXBlb2Ygc2NyZWVuICE9PSBcInVuZGVmaW5lZFwiID8gU3RyaW5nKHNjcmVlbi5vcmllbnRhdGlvbj8udHlwZSB8fCBcIlwiKSA6IFwiXCI7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcImxhbmRzY2FwZVwiKSkgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHR5cGUuc3RhcnRzV2l0aChcInBvcnRyYWl0XCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIEJvb2xlYW4odHlwZW9mIG1hdGNoTWVkaWEgIT09IFwidW5kZWZpbmVkXCIgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciByZWFkUGh5c2ljYWxTY3JlZW4gPSAoKSA9PiB7XG5cdGxldCB3ID0gMDtcblx0bGV0IGggPSAwO1xuXHRpZiAobmF0aXZlRGlzcGxheSkge1xuXHRcdHcgPSBuYXRpdmVEaXNwbGF5LndpbmRvd1dpZHRoQ3NzIHx8IG5hdGl2ZURpc3BsYXkuZGlzcGxheVdpZHRoQ3NzO1xuXHRcdGggPSBuYXRpdmVEaXNwbGF5LndpbmRvd0hlaWdodENzcyB8fCBuYXRpdmVEaXNwbGF5LmRpc3BsYXlIZWlnaHRDc3M7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHNjcmVlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IHN3ID0gTnVtYmVyKHNjcmVlbi53aWR0aCkgfHwgMDtcblx0XHRjb25zdCBzaCA9IE51bWJlcihzY3JlZW4uaGVpZ2h0KSB8fCAwO1xuXHRcdGNvbnN0IGF3ID0gTnVtYmVyKHNjcmVlbi5hdmFpbFdpZHRoKSB8fCAwO1xuXHRcdGNvbnN0IGFoID0gTnVtYmVyKHNjcmVlbi5hdmFpbEhlaWdodCkgfHwgMDtcblx0XHR3ID0gTWF0aC5tYXgodywgc3csIGF3KTtcblx0XHRoID0gTWF0aC5tYXgoaCwgc2gsIGFoKTtcblx0fVxuXHRpZiAoIXcgJiYgIWgpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG5cdGNvbnN0IGxhbmRzY2FwZSA9IGlzTGFuZHNjYXBlKCk7XG5cdGNvbnN0IGJveExhbmRzY2FwZSA9IHcgPiAwICYmIGggPiAwICYmIHcgPiBoO1xuXHRpZiAobGFuZHNjYXBlICYmIHcgPiAwICYmIGggPiAwICYmIHcgPCBoKSByZXR1cm4ge1xuXHRcdHdpZHRoOiBoLFxuXHRcdGhlaWdodDogd1xuXHR9O1xuXHRpZiAoIWxhbmRzY2FwZSAmJiBib3hMYW5kc2NhcGUpIHJldHVybiB7XG5cdFx0d2lkdGg6IGgsXG5cdFx0aGVpZ2h0OiB3XG5cdH07XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IHcgfHwgaCxcblx0XHRoZWlnaHQ6IGggfHwgd1xuXHR9O1xufTtcbnZhciBjbGFtcFRvUGh5c2ljYWwgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xuXHRjb25zdCBwaHlzID0gcmVhZFBoeXNpY2FsU2NyZWVuKCk7XG5cdGNvbnN0IGlubmVyVyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAgOiAwO1xuXHRjb25zdCBpbm5lckggPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCA6IDA7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRjb25zdCBjbGllbnRXID0gTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCAwO1xuXHRjb25zdCBjbGllbnRIID0gTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgMDtcblx0Y29uc3QgY2FwVyA9IE1hdGgubWF4KHBoeXMud2lkdGgsIGlubmVyVywgY2xpZW50Vyk7XG5cdGNvbnN0IGNhcEggPSBNYXRoLm1heChwaHlzLmhlaWdodCwgaW5uZXJILCBjbGllbnRIKTtcblx0cmV0dXJuIHtcblx0XHR3aWR0aDogY2FwVyA+IDAgPyBNYXRoLm1pbih3aWR0aCwgY2FwVykgOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGNhcEggPiAwID8gTWF0aC5taW4oaGVpZ2h0LCBjYXBIKSA6IGhlaWdodFxuXHR9O1xufTtcbnZhciBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICh3aWR0aCwgaGVpZ2h0LCBsZWZ0ID0gMCwgdG9wID0gMCkgPT4ge1xuXHRjb25zdCBzYWZlV2lkdGggPSBNYXRoLm1heCgwLCBOdW1iZXIod2lkdGgpIHx8IDApO1xuXHRjb25zdCBzYWZlSGVpZ2h0ID0gTWF0aC5tYXgoMCwgTnVtYmVyKGhlaWdodCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVMZWZ0ID0gTnVtYmVyKGxlZnQpIHx8IDA7XG5cdGNvbnN0IHNhZmVUb3AgPSBOdW1iZXIodG9wKSB8fCAwO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQ6IHNhZmVMZWZ0LFxuXHRcdHRvcDogc2FmZVRvcCxcblx0XHRyaWdodDogc2FmZUxlZnQgKyBzYWZlV2lkdGgsXG5cdFx0Ym90dG9tOiBzYWZlVG9wICsgc2FmZUhlaWdodCxcblx0XHR3aWR0aDogc2FmZVdpZHRoLFxuXHRcdGhlaWdodDogc2FmZUhlaWdodFxuXHR9O1xufTtcbnZhciByZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoMCwgMCk7XG5cdGNvbnN0IHJvb3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsO1xuXHRyZXR1cm4gY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQoTnVtYmVyKHJvb3Q/LmNsaWVudFdpZHRoKSB8fCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcihyb290Py5jbGllbnRIZWlnaHQpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDApO1xufTtcbnZhciByZWFkTGF5b3V0Vmlld3BvcnQgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRrZXlib2FyZDogMFxuXHR9O1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgaW5uZXJXID0gTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwO1xuXHRjb25zdCBpbm5lckggPSBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlcgPSBOdW1iZXIodnY/LndpZHRoKSB8fCAwO1xuXHRjb25zdCB2dkggPSBOdW1iZXIodnY/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZUb3AgPSBOdW1iZXIodnY/Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgdmtIID0gTnVtYmVyKHZpcnR1YWxLZXlib2FyZCgpPy5ib3VuZGluZ0JveD8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dk92ZXJsYXAgPSBpbm5lckggPiAwICYmIHZ2SCA+IDAgPyBpbm5lckggLSB2dkggLSB2dlRvcCA6IDA7XG5cdGNvbnN0IGNhcEggPSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodDtcblx0Y29uc3QgbmF0aXZlQ2FwID0gaXNOYXRpdmVDYXBhY2l0b3JIb3N0KCk7XG5cdGxldCBrZXlib2FyZCA9IGNhcEggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IGNhcEggOiAhbmF0aXZlQ2FwICYmIHZrSCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYID8gdmtIIDogIW5hdGl2ZUNhcCAmJiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSBpc0xhbmRzY2FwZSgpID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSAhbmF0aXZlQ2FwICYmIGxheW91dExvY2tIID4gMCAmJiBsYXlvdXRMb2NrSCAtIGNhbmRpZGF0ZUggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWDtcblx0aWYgKGtleWJvYXJkIDwgS0VZQk9BUkRfT1ZFUkxBWV9QWCAmJiBzdWRkZW5TaHJpbmspIHtcblx0XHRjb25zdCBzaHJpbmsgPSBNYXRoLm1heCgwLCBsYXlvdXRMb2NrSCAtIGNhbmRpZGF0ZUgsIGxheW91dExvY2tIIC0gKHZ2SCArIHZ2VG9wKSk7XG5cdFx0aWYgKHNocmluayA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBrZXlib2FyZCA9IHNocmluaztcblx0fVxuXHRjb25zdCBleHBhbmRlZFNlbGVjdGlvbiA9ICFpc0NvbGxhcHNlZENhcmV0KCk7XG5cdGlmIChleHBhbmRlZFNlbGVjdGlvbiAmJiBsYXN0U3RhYmxlS2V5Ym9hcmQgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBsYXN0U3RhYmxlS2V5Ym9hcmQ7XG5cdGVsc2UgaWYgKGtleWJvYXJkID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGxhc3RTdGFibGVLZXlib2FyZCA9IGtleWJvYXJkO1xuXHRlbHNlIGlmICghaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgJiYgIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSBsYXN0U3RhYmxlS2V5Ym9hcmQgPSAwO1xuXHRpZiAoIShrZXlib2FyZCA+IDAgfHwgaXNJbWVUYXJnZXQoZGVlcEFjdGl2ZUVsZW1lbnQoKSkgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgfHwgc3VkZGVuU2hyaW5rIHx8IGV4cGFuZGVkU2VsZWN0aW9uKSkge1xuXHRcdGxheW91dExvY2tXID0gY2FuZGlkYXRlVztcblx0XHRsYXlvdXRMb2NrSCA9IGNhbmRpZGF0ZUg7XG5cdH0gZWxzZSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBNYXRoLm1heChjYW5kaWRhdGVXLCBsYXlvdXRMb2NrVyk7XG5cdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCk7XG5cdH1cblx0Y29uc3QgbG9ja2VkID0gY2xhbXBUb1BoeXNpY2FsKGxheW91dExvY2tXIHx8IGNhbmRpZGF0ZVcsIGxheW91dExvY2tIIHx8IGNhbmRpZGF0ZUgpO1xuXHRsYXlvdXRMb2NrVyA9IGxvY2tlZC53aWR0aDtcblx0bGF5b3V0TG9ja0ggPSBsb2NrZWQuaGVpZ2h0O1xuXHRjb25zdCBrYiA9IGxvY2tlZC5oZWlnaHQgPiAwID8gTWF0aC5taW4oa2V5Ym9hcmQsIGxvY2tlZC5oZWlnaHQpIDoga2V5Ym9hcmQ7XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IGxvY2tlZC53aWR0aCxcblx0XHRoZWlnaHQ6IGxvY2tlZC5oZWlnaHQsXG5cdFx0a2V5Ym9hcmQ6IGtiXG5cdH07XG59O1xudmFyIGlzSW1lQ2hyb21lTG9jayA9IChlbCkgPT4ge1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIkhUTUxcIiB8fCB0YWcgPT09IFwiQk9EWVwiKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHRhZyA9PT0gXCJDVy1SQVctRURJVE9SXCIgfHwgdGFnID09PSBcIkNXLVZJRVctVklFV0VSXCIgfHwgdGFnID09PSBcIkNXLU1BUktET1dOLVZJRVctRlJBTUVcIiB8fCB0YWcgPT09IFwiQ1ctTUFSS0RPV04tVE9PTEJBUi1GUkFNRVwiKSByZXR1cm4gdHJ1ZTtcblx0Y29uc3QgY2xzID0gZWwuY2xhc3NMaXN0O1xuXHRyZXR1cm4gY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImFwcC1zaGVsbF9fdmlld3BvcnRcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX19uYXZcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLXJvb3RcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLXdvcmtzcGFjZVwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcImVudi11aS13aW5kb3dcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXVpLXdpbmRvd19fYm9keVwiKSB8fCBjbHMuY29udGFpbnMoXCJ3Zi1mcmFtZVwiKSB8fCBjbHMuY29udGFpbnMoXCJ1aS13aW5kb3dcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJfX3Rvb2xiYXJcIikgfHwgY2xzLmNvbnRhaW5zKFwidmlldy12aWV3ZXJfX2Nocm9tZVwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fY29udGVudFwiKSB8fCBjbHMuY29udGFpbnMoXCJjdy12aWV3LXZpZXdlci1zaGVsbFwiKSB8fCBjbHMuY29udGFpbnMoXCJjdy1tYXJrZG93bi12aWV3LWZyYW1lXCIpIHx8IGNscy5jb250YWlucyhcImN3LXZpZXctdmlld2VyX19zbG90LXJhd1wiKTtcbn07XG52YXIgcGFyZW50T2YgPSAoZWwpID0+IHtcblx0aWYgKCFlbCkgcmV0dXJuIG51bGw7XG5cdGlmIChlbC5wYXJlbnRFbGVtZW50KSByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcblx0Y29uc3Qgcm9vdCA9IGVsLmdldFJvb3ROb2RlKCk7XG5cdHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QuaG9zdCA6IG51bGw7XG59O1xudmFyIGlzU2Nyb2xscG9ydCA9IChlbCkgPT4ge1xuXHRpZiAoaXNJbWVDaHJvbWVMb2NrKGVsKSkgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXHRjb25zdCBveSA9IHN0eWxlLm92ZXJmbG93WSB8fCBzdHlsZS5vdmVyZmxvd0Jsb2NrO1xuXHRpZiAob3kgIT09IFwiYXV0b1wiICYmIG95ICE9PSBcInNjcm9sbFwiKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBlbC5zY3JvbGxIZWlnaHQgPiBlbC5jbGllbnRIZWlnaHQgKyAxO1xufTtcbnZhciBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCA9IChzdGFydCkgPT4ge1xuXHRsZXQgbm9kZSA9IHN0YXJ0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdy1yYXctZWRpdG9yX19zY3JvbGxcIikpIHJldHVybiBub2RlO1xuXHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZS5sb2NhbE5hbWUgPT09IFwiY3ctcmF3LWVkaXRvclwiKSB7XG5cdFx0XHRjb25zdCBpbm5lciA9IG5vZGUuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcihcIi5jdy1yYXctZWRpdG9yX19zY3JvbGxcIik7XG5cdFx0XHRpZiAoaW5uZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIGlubmVyO1xuXHRcdH1cblx0XHRjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSgpO1xuXHRcdGlmIChyb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuXHRcdFx0Y29uc3QgaW5uZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCIuY3ctcmF3LWVkaXRvcl9fc2Nyb2xsXCIpO1xuXHRcdFx0aWYgKGlubmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBpbm5lcjtcblx0XHR9XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciBmaW5kSW1lU2Nyb2xscG9ydCA9IChzdGFydCkgPT4ge1xuXHRjb25zdCByYXcgPSBmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydChzdGFydCk7XG5cdGlmIChyYXcpIHJldHVybiByYXc7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc1Njcm9sbHBvcnQobm9kZSkpIHJldHVybiBub2RlO1xuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgcmVhZENhcmV0UmVjdCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRpZiAoc2VsPy5yYW5nZUNvdW50KSB7XG5cdFx0XHRjb25zdCByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xuXHRcdFx0Y29uc3QgcmVjdHMgPSByYW5nZS5nZXRDbGllbnRSZWN0cygpO1xuXHRcdFx0Y29uc3QgcmVjdCA9IHJlY3RzLmxlbmd0aCA/IHJlY3RzW3JlY3RzLmxlbmd0aCAtIDFdIDogcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRpZiAocmVjdCAmJiAocmVjdC5oZWlnaHQgfHwgcmVjdC53aWR0aCB8fCByZWN0LnRvcCB8fCByZWN0LmJvdHRvbSkpIHJldHVybiByZWN0O1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHJldHVybiBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xufTtcbnZhciBwaW5JbWVDYXJldEluU2Nyb2xscG9ydCA9ICgpID0+IHtcblx0Y29uc3QgYWN0aXZlID0gZGVlcEFjdGl2ZUVsZW1lbnQoKTtcblx0aWYgKCFpc0ltZVRhcmdldChhY3RpdmUpICYmICFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgcmV0dXJuO1xuXHRpZiAoIWlzQ29sbGFwc2VkQ2FyZXQoKSkgcmV0dXJuO1xuXHRjb25zdCBrZXlib2FyZCA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkO1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgdmlzaWJsZUJvdHRvbSA9IChOdW1iZXIodnY/LmhlaWdodCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCkgLSBNYXRoLm1heCg4LCBrZXlib2FyZCA/IDEyIDogMCk7XG5cdGlmICh2aXNpYmxlQm90dG9tIDw9IDApIHJldHVybjtcblx0Y29uc3QgcmVjdCA9IHJlYWRDYXJldFJlY3QoKTtcblx0aWYgKCFyZWN0KSByZXR1cm47XG5cdGNvbnN0IG92ZXJmbG93ID0gcmVjdC5ib3R0b20gLSB2aXNpYmxlQm90dG9tO1xuXHRpZiAob3ZlcmZsb3cgPD0gMSkgcmV0dXJuO1xuXHRjb25zdCBwb3J0ID0gZmluZEltZVNjcm9sbHBvcnQoYWN0aXZlKSB8fCBmaW5kSW1lU2Nyb2xscG9ydChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0aWYgKHBvcnQpIHBvcnQuc2Nyb2xsVG9wICs9IG92ZXJmbG93O1xufTtcbnZhciBwaW5WaXN1YWxWaWV3cG9ydCA9ICgpID0+IHtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGlmICghdnYpIHJldHVybjtcblx0Y29uc3QgdG9wID0gTnVtYmVyKHZ2Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgbGVmdCA9IE51bWJlcih2di5vZmZzZXRMZWZ0KSB8fCAwO1xuXHRpZiAoIXRvcCAmJiAhbGVmdCkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdHZ2LnNjcm9sbFRvKHtcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRiZWhhdmlvcjogXCJpbnN0YW50XCJcblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0dHJ5IHtcblx0XHRcdHZ2LnNjcm9sbFRvPy4oMCwgMCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xudmFyIG92ZXJsYXlQaW5uaW5nID0gZmFsc2U7XG52YXIgcmVzZXRDaHJvbWVTY3JvbGwgPSAoc3RhcnQpID0+IHtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KHN0YXJ0KTtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUgIT09IHBvcnQgJiYgaXNJbWVDaHJvbWVMb2NrKG5vZGUpKSB7XG5cdFx0XHRpZiAobm9kZS5zY3JvbGxUb3AgfHwgbm9kZS5zY3JvbGxMZWZ0KSB7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsVG9wID0gMDtcblx0XHRcdFx0bm9kZS5zY3JvbGxMZWZ0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG59O1xudmFyIHBpbk92ZXJsYXlTY3JvbGwgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IG92ZXJsYXlQaW5uaW5nKSByZXR1cm47XG5cdGNvbnN0IGFjdGl2ZSA9IGRlZXBBY3RpdmVFbGVtZW50KCk7XG5cdGNvbnN0IGNhcCA9IGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpO1xuXHRjb25zdCByYXcgPSBCb29sZWFuKGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KGFjdGl2ZSkgfHwgZmluZFJhd0VkaXRvclNjcm9sbHBvcnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpO1xuXHRjb25zdCBpbWUgPSByZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZCA+IDAgfHwgaXNJbWVUYXJnZXQoYWN0aXZlKSB8fCBpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0aWYgKCFpbWUgJiYgIWNhcCkgcmV0dXJuO1xuXHRvdmVybGF5UGlubmluZyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0cGluVmlzdWFsVmlld3BvcnQoKTtcblx0XHRpZiAod2luZG93LnNjcm9sbFggfHwgd2luZG93LnNjcm9sbFkpIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChyb290LnNjcm9sbFRvcCB8fCByb290LnNjcm9sbExlZnQpIHJvb3Quc2Nyb2xsVG8oMCwgMCk7XG5cdFx0aWYgKGJvZHkgJiYgKGJvZHkuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsTGVmdCkpIGJvZHkuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0aWYgKHJhdyB8fCBpbWUgfHwgIWlzQ29sbGFwc2VkQ2FyZXQoKSkge1xuXHRcdFx0cmVzZXRDaHJvbWVTY3JvbGwoYWN0aXZlKTtcblx0XHRcdHJlc2V0Q2hyb21lU2Nyb2xsKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRpZiAoY2FwKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiY3ctcmF3LWVkaXRvclwiKS5mb3JFYWNoKChob3N0KSA9PiB7XG5cdFx0XHRpZiAoaG9zdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICFob3N0LmhpZGRlbikgcmVzZXRDaHJvbWVTY3JvbGwoaG9zdCk7XG5cdFx0fSk7XG5cdH0gZmluYWxseSB7XG5cdFx0b3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcblx0fVxufTtcbnZhciBzY3JvbGxJbnRvVmlld1BhdGNoZWQgPSBmYWxzZTtcbnZhciBwYXRjaEltZVNjcm9sbEludG9WaWV3ID0gKCkgPT4ge1xuXHRpZiAoc2Nyb2xsSW50b1ZpZXdQYXRjaGVkIHx8IHR5cGVvZiBFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IHRydWU7XG5cdGNvbnN0IG9yaWcgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldztcblx0RWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbihhcmcpIHtcblx0XHRjb25zdCBhY3RpdmUgPSBkZWVwQWN0aXZlRWxlbWVudCgpO1xuXHRcdGlmIChCb29sZWFuKGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KHRoaXMpIHx8IGZpbmRSYXdFZGl0b3JTY3JvbGxwb3J0KGFjdGl2ZSkpIHx8IGlzSW1lVGFyZ2V0KGFjdGl2ZSkgJiYgIWlzQ29sbGFwc2VkQ2FyZXQoKSkge1xuXHRcdFx0aWYgKGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpIHx8ICFpc0NvbGxhcHNlZENhcmV0KCkpIHtcblx0XHRcdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0ltZUNocm9tZUxvY2sodGhpcykpIHJldHVybjtcblx0XHRyZXR1cm4gb3JpZy5jYWxsKHRoaXMsIGFyZyk7XG5cdH07XG59O1xudmFyIHBpbkltZUNocm9tZSA9IChvcHRzKSA9PiB7XG5cdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0aWYgKCFvcHRzPy5jYXJldCkgcmV0dXJuO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHRwaW5JbWVDYXJldEluU2Nyb2xscG9ydCgpO1xuXHR9KTtcbn07XG52YXIgcmVhZFZpcnR1YWxLZXlib2FyZEhlaWdodFB4ID0gKCkgPT4gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IDAgOiByZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZDtcbnZhciBnZXRBdmFpbFNpemUgPSAoKSA9PiB7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExheW91dFZpZXdwb3J0KCk7XG5cdGNvbnN0IHZ2QmxvY2sgPSB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2Py53aWR0aCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCl9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnY/LmhlaWdodCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDApfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnY/Lm9mZnNldExlZnQgPz8gMH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnY/Lm9mZnNldFRvcCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2Py5zY2FsZSA/PyAxKSxcblx0XHRcIi0tbHYtd2lkdGhcIjogYCR7bGF5b3V0LndpZHRofXB4YCxcblx0XHRcIi0tbHYtaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1rZXlib2FyZC1vdmVybGF5LWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgLFxuXHRcdFwiLS12aXJ0dWFsLWtleWJvYXJkLWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgXG5cdH07XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXZrLW9wZW5cIik7XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBwaHlzID0gcmVhZFBoeXNpY2FsU2NyZWVuKCk7XG5cdFx0Y29uc3QgaW5uZXJXID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCA6IDA7XG5cdFx0Y29uc3QgaW5uZXJIID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAgOiAwO1xuXHRcdGNvbnN0IGNhcFcgPSBNYXRoLm1heChwaHlzLndpZHRoLCBpbm5lclcsIGxheW91dC53aWR0aCk7XG5cdFx0Y29uc3QgY2FwSCA9IE1hdGgubWF4KHBoeXMuaGVpZ2h0LCBpbm5lckgsIGxheW91dC5oZWlnaHQpO1xuXHRcdGNvbnN0IHNjcmVlblcgPSBjYXBXID4gMCA/IGAke2NhcFd9cHhgIDogXCIxMDBsdmlcIjtcblx0XHRjb25zdCBzY3JlZW5IID0gY2FwSCA+IDAgPyBgJHtjYXBIfXB4YCA6IFwiMTAwbHZiXCI7XG5cdFx0Y29uc3QgZGVuc2l0eSA9IG5hdGl2ZURpc3BsYXk/LmRlbnNpdHkgfHwgTnVtYmVyKGRldmljZVBpeGVsUmF0aW8pIHx8IDE7XG5cdFx0Y29uc3QgbmF0aXZlU2NhbGUgPSBuYXRpdmVEaXNwbGF5ID8ge1xuXHRcdFx0XCItLW5hdGl2ZS1kZW5zaXR5XCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LmRlbnNpdHkgfHwgZGVuc2l0eSksXG5cdFx0XHRcIi0tbmF0aXZlLWRwaVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5kZW5zaXR5RHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS1wcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkucHBpIHx8IDApLFxuXHRcdFx0XCItLW5hdGl2ZS14ZHBpXCI6IFN0cmluZyhuYXRpdmVEaXNwbGF5LnhkcGkgfHwgMCksXG5cdFx0XHRcIi0tbmF0aXZlLXlkcGlcIjogU3RyaW5nKG5hdGl2ZURpc3BsYXkueWRwaSB8fCAwKSxcblx0XHRcdFwiLS1uYXRpdmUtZm9udC1zY2FsZVwiOiBTdHJpbmcobmF0aXZlRGlzcGxheS5mb250U2NhbGUgfHwgMSlcblx0XHR9IDoge307XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IHNjcmVlbkgsXG5cdFx0XHRcIi0tYXZhaWwtd2lkdGhcIjogc2NyZWVuVyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogc2NyZWVuSCxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGVuc2l0eSksXG5cdFx0XHQuLi5uYXRpdmVTY2FsZSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjEwMGx2aVwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMTAwbHZiXCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMTAwbHZpXCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjEwMGx2YlwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKHJhdykgPT4ge1xuXHRjb25zdCBuZXh0ID0gTnVtYmVyKHJhdykgfHwgMDtcblx0aWYgKG5leHQgPiAwKSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IG5leHQ7XG5cdHVwZGF0ZVZQKCk7XG5cdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xufTtcbnZhciBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKCkgPT4ge1xuXHRjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IDA7XG5cdHVwZGF0ZVZQKCk7XG59O1xudmFyIGJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyA9ICgpID0+IHtcblx0aWYgKHdpbmRvd0tleWJvYXJkQm91bmQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR3aW5kb3dLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0Y29uc3Qgb25TaG93ID0gKGV2KSA9PiB7XG5cdFx0Y29uc3QgZSA9IGV2O1xuXHRcdGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xuXHRcdGNvbnN0IGZyb21EZXRhaWwgPSB0eXBlb2YgZGV0YWlsID09PSBcInN0cmluZ1wiID8gKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRldGFpbCk/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH0pKCkgOiBkZXRhaWw/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoZS5rZXlib2FyZEhlaWdodCA/PyBmcm9tRGV0YWlsKTtcblx0fTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG59O1xudmFyIGJpbmRDYXBhY2l0b3JLZXlib2FyZCA9ICgpID0+IHtcblx0YmluZFdpbmRvd0tleWJvYXJkRXZlbnRzKCk7XG5cdGlmIChjYXBhY2l0b3JLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRjb25zdCBLZXlib2FyZCA9IGNhcD8uUGx1Z2lucz8uS2V5Ym9hcmQ7XG5cdGlmICghS2V5Ym9hcmQ/LmFkZExpc3RlbmVyKSByZXR1cm47XG5cdGlmICh0eXBlb2YgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSkgcmV0dXJuO1xuXHRjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRTY3JvbGw/Lih7IGlzRGlzYWJsZWQ6IHRydWUgfSk7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRSZXNpemVNb2RlPy4oeyBtb2RlOiBcIm5vbmVcIiB9KTtcblx0fSBjYXRjaCB7fVxuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgZW5zdXJlVmlld3BvcnRUcmFja2luZyA9ICgpID0+IHtcblx0aWYgKHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0dmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSB0cnVlO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0d2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge30pO1xufTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0cGF0Y2hJbWVTY3JvbGxJbnRvVmlldygpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0cXVldWVOYXRpdmVEaXNwbGF5UmVmcmVzaCgpO1xuXHRcdHVwZGF0ZSgpO1xuXHR9KSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50LCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2goKTtcblx0XHR1cGRhdGUoKTtcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNpblwiLCAoKSA9PiB7XG5cdFx0YmluZENhcGFjaXRvcktleWJvYXJkKCk7XG5cdFx0YmluZE5hdGl2ZURpc3BsYXkoKTtcblx0XHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdFx0aWYgKGlzSW1lVGFyZ2V0KGRlZXBBY3RpdmVFbGVtZW50KCkpIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG5cdFx0XHRsYXlvdXRMb2NrVyA9IE1hdGgubWF4KGxheW91dExvY2tXLCBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LndpZHRoKSB8fCAwKTtcblx0XHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgobGF5b3V0TG9ja0gsIE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDAsIE51bWJlcih3aW5kb3cudmlzdWFsVmlld3BvcnQ/LmhlaWdodCkgfHwgMCk7XG5cdFx0fVxuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHRcdHVwZGF0ZSgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3Vzb3V0XCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdHVwZGF0ZSgpO1xuXHRydW5XaGVuSWRsZSgoKSA9PiB1cGRhdGUoKSwgMTAwKTtcblx0cmV0dXJuICgpID0+IHVuc3Vic2NyaWJlcnMuZm9yRWFjaCgodW5zdWIpID0+IHVuc3ViKCkpO1xufTtcbnZhciBmaXhPcmllbnRUb1NjcmVlbiA9IChlbGVtZW50KSA9PiB7XG5cdGlmICghZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucz8uKFwibmF0aXZlLXBvcnRyYWl0LW9wdGltaXplZFwiKSkge1xuXHRcdGVsZW1lbnQ/LmNsYXNzTGlzdD8uYWRkPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpO1xuXHRcdHJldHVybiB3aGVuQW55U2NyZWVuQ2hhbmdlcygoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gb3JpZW50YXRpb25OdW1iZXJNYXA/LltnZXRDb3JyZWN0T3JpZW50YXRpb24oKV0gPz8gMDtcblx0XHRcdGVsZW1lbnQub3JpZW50ID0gbmV4dDtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlPy4oXCJvcmllbnRcIiwgU3RyaW5nKG5leHQpKTtcblx0XHRcdGVsZW1lbnQuc3R5bGU/LnNldFByb3BlcnR5Py4oXCItLW9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdH0pO1xuXHR9XG59O1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpLCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9NZWFzdXJlLnRzXG52YXIgY3R4ID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgaW5pdFRleHRTdHlsZSA9IChlbGVtZW50LCBjdHgpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiXCIpO1xuXHRpZiAoY3R4ICYmIHN0eWxlKSB7XG5cdFx0Y29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXdlaWdodFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSB8fCBcIjE2cHhcIjtcblx0XHRjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtZmFtaWx5XCIpIHx8IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdFx0Y29uc3QgZm9udFN0cmV0Y2ggPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zdHJldGNoXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250U3RyZXRjaCA9IGZvbnRTdHJldGNoLmluY2x1ZGVzKFwiJVwiKSA/IFwibm9ybWFsXCIgOiBmb250U3RyZXRjaDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHgubGV0dGVyU3BhY2luZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZXR0ZXItc3BhY2luZ1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250S2VybmluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWtlcm5pbmdcIikgfHwgXCJhdXRvXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRWYXJpYW50Q2FwcyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXZhcmlhbnQtY2Fwc1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFdlaWdodH0gJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxufTtcbnZhciBtZWFzdXJlVGV4dCA9ICh0ZXh0LCBlbGVtZW50KSA9PiB7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGVsZW1lbnQsIGN0eCk7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXHRyZXR1cm4geyB3aWR0aDogbnVsbCB9O1xufTtcbnZhciBtZWFzdXJlSW5wdXRJbkZvY3VzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMCk7XG5cdHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0LCBpbnB1dCk7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uID0gKGlucHV0LCBwb2ludCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQ/LnZhbHVlIHx8IFwiXCI7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGlucHV0LCBjdHgpO1xuXHRcdGxldCBjdXJyZW50V2lkdGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQuc2xpY2UoMCwgaSkpPy53aWR0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggPT0gbnVsbCkgcmV0dXJuIHRleHQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCAhPSBudWxsICYmIGN1cnJlbnRXaWR0aCA+PSBwb2ludFswXSkgcmV0dXJuIE1hdGgubWF4KGkgLSAxLCAwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQgPSAoaW5wdXQsIGNsaWVudCkgPT4ge1xuXHRjb25zdCBib3ggPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgcG9pbnQgPSBbY2xpZW50WzBdIC0gYm94LmxlZnQgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpLCBjbGllbnRbMV0gLSBib3gudG9wIC8gdW5maXhlZENsaWVudFpvb20oKV07XG5cdHJldHVybiBjb21wdXRlQ2FyZXRQb3NpdGlvbihpbnB1dCwgcG9pbnQpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0xhdW5jaGVyR3JpZC50c1xudmFyIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50ID0gKGVsLCBsYXlvdXRPdmVycmlkZSkgPT4ge1xuXHRjb25zdCBjID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWNvbHVtbnNcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCByID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLXJvd3NcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCBiYXNlID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXRPdmVycmlkZSA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW051bWJlci5pc0Zpbml0ZShjKSAmJiBjID4gMCA/IGMgOiBiYXNlWzBdLCBOdW1iZXIuaXNGaW5pdGUocikgJiYgciA+IDAgPyByIDogYmFzZVsxXV07XG59O1xudmFyIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCA9IChncmlkU3lzdGVtLCBjbGllbnRQb2ludCwgYXJncywgbW9kZSA9IFwiZmxvb3JcIikgPT4ge1xuXHRpZiAoIWdyaWRTeXN0ZW0pIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IHJlY3QgPSBncmlkU3lzdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGlmICghcmVjdCkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQoZ3JpZFN5c3RlbSwgYXJncz8ubGF5b3V0KTtcblx0Y29uc3Qgb3JpZW50ID0gb3JpZW50T2YoZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IGNzID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IHBsID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0xlZnQpIHx8IDA7XG5cdGNvbnN0IHB0ID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1RvcCkgfHwgMDtcblx0Y29uc3QgcHIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nUmlnaHQpIHx8IDA7XG5cdGNvbnN0IHBiID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0JvdHRvbSkgfHwgMDtcblx0Y29uc3QgY29udGVudFcgPSBNYXRoLm1heCgxLCAocmVjdC53aWR0aCB8fCBncmlkU3lzdGVtLmNsaWVudFdpZHRoIHx8IDEpIC0gcGwgLSBwcik7XG5cdGNvbnN0IGNvbnRlbnRIID0gTWF0aC5tYXgoMSwgKHJlY3QuaGVpZ2h0IHx8IGdyaWRTeXN0ZW0uY2xpZW50SGVpZ2h0IHx8IDEpIC0gcHQgLSBwYik7XG5cdGNvbnN0IGNzQ29vcmQgPSBbKGNsaWVudFBvaW50Py5bMF0gfHwgMCkgLSByZWN0LmxlZnQgLSBwbCwgKGNsaWVudFBvaW50Py5bMV0gfHwgMCkgLSByZWN0LnRvcCAtIHB0XTtcblx0cmV0dXJuIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbChjc0Nvb3JkLCBbY29udGVudFcsIGNvbnRlbnRIXSwgbGF5b3V0LCBvcmllbnQsIHtcblx0XHRtb2RlLFxuXHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRpdGVtOiBhcmdzPy5pdGVtLFxuXHRcdFx0bGlzdDogYXJncz8ubGlzdCxcblx0XHRcdGl0ZW1zOiBhcmdzPy5pdGVtc1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQW5pbWF0aW9uLnRzXG52YXIgYW5pbWF0ZVNob3cgPSAodGFyZ2V0KSA9PiBhcHBlYXIodGFyZ2V0LCBkZWNvclNob3cpO1xudmFyIGFuaW1hdGVIaWRlID0gKHRhcmdldCkgPT4gZGlzYXBwZWFyKHRhcmdldCwgZGVjb3JIaWRlKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG5vcm1hbGl6ZVNlbGVjdG9yID0gKHNlbGVjdG9yLCBmYWxsYmFjayA9IFwiKlwiKSA9PiB7XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxsYmFjaztcblx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKSB8fCBmYWxsYmFjaztcbn07XG52YXIgc2FmZVF1ZXJ5U2VsZWN0b3JBbGwgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFtdO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gW107XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWwpIHx8IFtdKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xudmFyIHNhZmVNYXRjaGVzID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5tYXRjaGVzICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiAhIWVsLm1hdGNoZXMoc2VsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldChbLi4uYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXV0ubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0YWRkZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRyZW1vdmVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRbLi4ubmV3IFNldChhZGRlZE5vZGVzKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpPy5tYXA/LigodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRcdFx0Y2Ioe1xuXHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdFx0XHRcdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoc2FmZU1hdGNoZXMobXV0YXRpb24udGFyZ2V0LCBzZWwpICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoYXJhY3RlckRhdGE6IHRydWVcblx0fSk7XG5cdHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCkubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IHVud3JhcE5vZGVzQnlTZWxlY3RvciA9IChub2RlcykgPT4ge1xuXHRcdGNvbnN0ICRub2RlcyA9IEFycmF5LmZyb20obm9kZXMgfHwgW10pIHx8IFtdO1xuXHRcdCRub2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdHJldHVybiBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KCRub2RlcykudmFsdWVzKCkpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk7XG5cdH07XG5cdGxldCBvYlJlZiA9IG51bGw7XG5cdGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKG11dGF0aW9uKSA9PiB7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBvYlJlZj8uZGVyZWY/LigpO1xuXHRcdGNvbnN0IGFkZGVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24uYWRkZWROb2Rlcyk7XG5cdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cdFx0aWYgKGFkZGVkTm9kZXMubGVuZ3RoID4gMCB8fCByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0XHR0eXBlOiBtdXRhdGlvbi50eXBlLFxuXHRcdFx0dGFyZ2V0OiBtdXRhdGlvbi50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogbXV0YXRpb24ubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogbXV0YXRpb24ub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IG11dGF0aW9uLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXMsXG5cdFx0XHRyZW1vdmVkTm9kZXNcblx0XHR9LCBvYnNlcnZlcik7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVPdXRDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRm9jdXNDbGljayA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGZhY3RvcnMgPSB7XG5cdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRjYXB0dXJlOiBmYWxzZVxuXHR9O1xuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vQmVoYXZpb3IudHNcbnZhciBib3VuZEJlaGF2aW9ycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRCZWhhdmlvciA9IChlbGVtZW50LCBiZWhTZXQsIGJlaGF2aW9yKSA9PiB7XG5cdG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIWJlaFNldC5oYXMoYmVoYXZpb3IpKSBiZWhTZXQuYWRkKGJlaGF2aW9yKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RCZWhhdmlvcnMgPSAoZWxlbWVudCwgYmVoYXZpb3JzKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAoYmVoYXZpb3JzKSB7XG5cdFx0Y29uc3QgYmVoU2V0ID0gYm91bmRCZWhhdmlvcnMuZ2V0T3JJbnNlcnQoZWxlbWVudCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Wy4uLmJlaGF2aW9ycz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kQmVoYXZpb3IoZWxlbWVudCwgYmVoU2V0LCBlKSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3RvcmUudHNcbnZhciBuYW1lZFN0b3JlTWFwc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgbmFtZWRTdG9yZU1hcHMgPSBnbG9iYWxUaGlzW25hbWVkU3RvcmVNYXBzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnZXRTdG9yZXNPZkVsZW1lbnQgPSAobWFwLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IEUgPSBbLi4ubWFwLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKEU/Lm1hcD8uKChbbiwgbV0pID0+IFtuLCBtPy5nZXQ/LihlbGVtZW50KV0pPy5maWx0ZXI/LigoW24sIGVdKSA9PiAhIWUpIHx8IFtdKTtcbn07XG52YXIgaXNXZWFrQ29tcGF0aWJsZSA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGVsZW1lbnQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZWxlbWVudCA9PSBcImZ1bmN0aW9uXCIpICYmIGVsZW1lbnQgIT0gbnVsbDtcbn07XG52YXIgYmluZFN0b3JlID0gKGVsZW1lbnQsIG5hbWUsIG9iaikgPT4ge1xuXHRpZiAoIWlzV2Vha0NvbXBhdGlibGUoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHdlYWtNYXAgPSBuYW1lZFN0b3JlTWFwcy5nZXQobmFtZSk7XG5cdGlmICghd2Vha01hcCkge1xuXHRcdHdlYWtNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHRuYW1lZFN0b3JlTWFwcy5zZXQobmFtZSwgd2Vha01hcCk7XG5cdH1cblx0aWYgKCF3ZWFrTWFwLmhhcyhlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHdlYWtNYXAuc2V0KGVsZW1lbnQsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0U3RvcmVzID0gKGVsZW1lbnQsIHN0b3JlcykgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIXN0b3JlcykgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IFtuYW1lLCBvYmpdIG9mIHN0b3Jlcy5lbnRyaWVzKCkpIGJpbmRTdG9yZShlbGVtZW50LCBuYW1lLCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9NaXhpbnMudHNcbnZhciByZWZsZWN0TWl4aW5zID0gKGVsZW1lbnQsIG1peGlucykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKG1peGlucykge1xuXHRcdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdFx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRcdFsuLi5taXhpbnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZE1peGlucyhlbGVtZW50LCBlLCBtaXhpblNldCkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBnZXRFbGVtZW50UmVsYXRlZCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0c3RvcmVTZXQ6IGdldFN0b3Jlc09mRWxlbWVudChuYW1lZFN0b3JlTWFwcywgZWxlbWVudCksXG5cdFx0bWl4aW5TZXQ6IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpLFxuXHRcdGJlaGF2aW9yU2V0OiBib3VuZEJlaGF2aW9ycz8uZ2V0Py4oZWxlbWVudClcblx0fTtcbn07XG52YXIgYmluZE1peGlucyA9IChlbGVtZW50LCBtaXhpbiwgbWl4U2V0KSA9PiB7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRtaXhTZXQgfHw9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpO1xuXHRpZiAoIW1peFNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0bWl4U2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0bWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5hZGQ/LihlbGVtZW50KTtcblx0XHRpZiAobWl4aW4ubmFtZSkgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdLCBtaXhpbi5uYW1lXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBib3VuZE1peGluU2V0U3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIGJvdW5kTWl4aW5TZXQgPSBnbG9iYWxUaGlzW2JvdW5kTWl4aW5TZXRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBtaXhpbkVsZW1lbnRzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIpO1xudmFyIG1peGluRWxlbWVudHMgPSBnbG9iYWxUaGlzW21peGluRWxlbWVudHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBtaXhpblJlZ2lzdHJ5U3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIG1peGluUmVnaXN0cnkgPSBnbG9iYWxUaGlzW21peGluUmVnaXN0cnlTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIG1peGluTmFtZXNwYWNlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBtaXhpbk5hbWVzcGFjZSA9IGdsb2JhbFRoaXNbbWl4aW5OYW1lc3BhY2VTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgbWl4aW4pID0+IHtcblx0aWYgKHR5cGVvZiBtaXhpbiA9PSBcInN0cmluZ1wiKSBtaXhpbiA9IG1peGluUmVnaXN0cnk/LmdldD8uKG1peGluKTtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRjb25zdCBtaXhpbnMgPSBuZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKTtcblx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0aWYgKCFtaXhpbkVsZW1lbnRzPy5oYXM/LihtaXhpbikpIG1peGluRWxlbWVudHM/LnNldD8uKG1peGluLCAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG5cdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghbWl4aW5TZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdGlmICghbWl4aW5zLmhhcyhtaXhpbikpIG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdGlmIChtaXhpbnMuaGFzKG1peGluKSB8fCAhbWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5oYXM/LihlbGVtZW50KSkge1xuXHRcdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0XHRuYW1lcy5hZGQobWl4aW5OYW1lc3BhY2U/LmdldD8uKG1peGluKSk7XG5cdFx0XHRtaXhpblNldD8uYWRkPy4obWl4aW4pO1xuXHRcdFx0ZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uYW1lc10uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHR9XG5cdFx0bWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5hZGQ/LihlbGVtZW50KTtcblx0fVxuXHRpZiAobWl4aW5TZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdGlmICghbWl4aW5zLmhhcyhtaXhpbikpIHtcblx0XHRcdG1peGluU2V0Py5kZWxldGU/LihtaXhpbik7XG5cdFx0XHRtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHR9XG5cdH1cbn07XG52YXIgcm9vdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGFkZFJvb3QgPSAocm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKSA9PiB7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRpZiAoIXJvb3RzPy5oYXM/Lihyb290KSkge1xuXHRcdHJvb3RzPy5hZGQ/Lihyb290KTtcblx0XHRvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvcihyb290LCBcIipcIiwgXCJkYXRhLW1peGluXCIsIChtdXRhdGlvbikgPT4gdXBkYXRlQWxsTWl4aW5zKG11dGF0aW9uLnRhcmdldCkpO1xuXHRcdG9ic2VydmVCeVNlbGVjdG9yKHJvb3QsIFwiW2RhdGEtbWl4aW5dXCIsIChtdXRhdGlvbikgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlU3R5bGVUcmVlKHJvb3QpO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6dmFyKC0tei1tYXgsIDk5OTkpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCI7XG5cdFx0Y29uc3QgZW5zdXJlUG9zaXRpb25lZCA9ICgpID0+IHtcblx0XHRcdGlmICgoZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCkpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgaG9zdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9O1xuXHRcdGVuc3VyZVBvc2l0aW9uZWQoKTtcblx0XHRob3N0LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRsZXQgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRsZXQgYiA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gKGV2KSA9PiB7XG5cdFx0XHRjb25zdCByID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGV2LmNsaWVudFggLSByLmxlZnQsXG5cdFx0XHRcdHk6IGV2LmNsaWVudFkgLSByLnRvcFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IGFwcGx5T3ZlcmxheSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRpZiAoYm94LndpZHRoIDwgMSAmJiBib3guaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7Ym94LmxlZnR9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtib3gudG9wfXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtib3gud2lkdGh9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtib3guaGVpZ2h0fXB4YDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcblx0XHRcdGlmICghKGV2LnRhcmdldCA9PT0gaG9zdCB8fCBob3N0LmNvbnRhaW5zKGV2LnRhcmdldCkpKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0YSA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YiA9IHsgLi4uYSB9O1xuXHRcdFx0aG9zdC5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRiID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0ZW5kKGV2KTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uQ2FuY2VsID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuY2FuY2VsLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDogeyBob3N0IH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIikpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIG55KTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGR4LFxuXHRcdFx0XHRcdGR5LFxuXHRcdFx0XHRcdHg6IG54LFxuXHRcdFx0XHRcdHk6IG55XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHg6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHR5OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdGhvc3Quc3R5bGUudHJhbnNmb3JtID0gcHJldmlvdXNUcmFuc2Zvcm07XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBET01NaXhpbiwgSnVuY3Rpb25EcmFnTWl4aW4sIEp1bmN0aW9uUmVzaXplTWl4aW4sIEp1bmN0aW9uU2VsZWN0TWl4aW4sIE1BVENILCBNT0MsIE1PQ0VsZW1lbnQsIFJBRkJlaGF2aW9yLCBSRUdFWCwgUk9PVCwgV2F2eVNoYXBlZENpcmNsZSwgX19leHBvcnRQcm9wZXJ0aWVzLCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLCBhZGRFdmVudCwgYWRkRXZlbnRzLCBhZGRFdmVudHNMaXN0LCBhZGRSb290LCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCwgZGVsZXRlU3R5bGVQcm9wZXJ0eSwgZGV0ZWN0TW9iaWxlLCBkb0JvcmRlck9ic2VydmUsIGRvQ29udGVudE9ic2VydmUsIGVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5LCBlbnN1cmVWaWV3cG9ydFRyYWNraW5nLCBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5LCBmaXhPcmllbnRUb1NjcmVlbiwgZml4ZWRDbGllbnRab29tLCBnZXRBdmFpbFNpemUsIGdldEJvdW5kaW5nT3JpZW50UmVjdCwgZ2V0Q29ycmVjdE9yaWVudGF0aW9uLCBnZXRFbGVtZW50UmVsYXRlZCwgZ2V0RXZlbnRUYXJnZXQsIGdldE9mZnNldFBhcmVudCwgZ2V0T2Zmc2V0UGFyZW50Q2hhaW4sIGdldFN0b3Jlc09mRWxlbWVudCwgZ2V0Wm9vbSwgaGFuZGxlQXR0cmlidXRlLCBoYW5kbGVEYXRhc2V0LCBoYW5kbGVIaWRkZW4sIGhhbmRsZVByb3BlcnR5LCBoYW5kbGVTdHlsZUNoYW5nZSwgaGFzUGFyZW50LCBodG1sLCBpbmNsdWRlU2VsZiwgaW5kZXhPZiwgaW5pdFRleHRTdHlsZSwgaXNFbGVtZW50LCBpc0luRm9jdXMsIGlzTW9iaWxlLCBpc05lYXJseUlkZW50aXR5LCBpc1ZhbGlkUGFyZW50LCBtYWtlUkFGQ3ljbGUsIG1lYXN1cmVJbnB1dEluRm9jdXMsIG1lYXN1cmVUZXh0LCBtaXhpbkRpc3Bvc2VycywgbWl4aW5FbGVtZW50cywgbWl4aW5OYW1lc3BhY2UsIG1peGluUmVnaXN0cnksIG5hbWVSZWdpc3RyeUYsIG5hbWVkU3RvcmVNYXBzLCBvYnNlcnZlQXR0cmlidXRlLCBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvciwgb2JzZXJ2ZUJvcmRlckJveCwgb2JzZXJ2ZUJ5U2VsZWN0b3IsIG9ic2VydmVDb250ZW50Qm94LCBvbkJvcmRlck9ic2VydmUsIG9uQ29udGVudE9ic2VydmUsIG9yaWVudE9mLCBvcmllbnRhdGlvbk51bWJlck1hcCwgcGFzc2l2ZU9wdHMsIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCwgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQsIHJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxHQUFlLGdCQUFBQyxJQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxVQUFtQztBQUMvTCxTQUFTLFVBQUFDLElBQVEsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLGFBQUFDLElBQVcsb0JBQUFDLElBQWtCLG9CQUFBQyxTQUF3QjtBQUU1RixjQUFjO0FBR2QsSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQ0QsRUFBRSxRQUFRLENB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b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgImFwcGVhciIsICJkZWNvckhpZGUiLCAiZGVjb3JTaG93IiwgImRpc2FwcGVhciIsICJvYnNlcnZlU3R5bGVUcmVlIiwgInNldFN0eWxlUHJvcGVydHkiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzIiwgIm9wdGlvbnMiLCAibmFtZSIsICJlIiwgIl9fZXhwb3J0UHJvcGVydGllcyIsICJpc01vYmlsZSIsICJjaGVjayIsICJhIiwgImRldGVjdE1vYmlsZSIsICJjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayIsICJydW5XaGVuSWRsZSQxIiwgImNiIiwgInRpbWVvdXQiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgImVsZW1lbnQiLCAiZ2V0T2Zmc2V0UGFyZW50Q2hhaW4iLCAicGFyZW50cyIsICJjdXJyZW50IiwgInBhcmVudCIsICJpc05lYXJseUlkZW50aXR5IiwgIm1hdHJpeCIsICJlcHNpbG9uIiwgIm1ha2VSQUZDeWNsZSIsICJjb250cm9sIiwgInJBRiIsICJyZXMiLCAiUkFGQmVoYXZpb3IiLCAic2hlZCIsICJST09UIiwgInNldEF0dHJpYnV0ZXNJZk51bGwiLCAiYXR0cnMiLCAidmFsdWUiLCAib2xkIiwgInNldEF0dHJpYnV0ZXMiLCAidGhyb3R0bGVNYXAiLCAic2V0SWRsZUludGVydmFsIiwgImFyZ3MiLCAic3RhdHVzIiwgInIiLCAiYm9yZGVyQm94V2lkdGgiLCAiYm9yZGVyQm94SGVpZ2h0IiwgImNvbnRlbnRCb3hXaWR0aCIsICJjb250ZW50Qm94SGVpZ2h0IiwgIm9uQm9yZGVyT2JzZXJ2ZSIsICJvbkNvbnRlbnRPYnNlcnZlIiwgImRvQ29udGVudE9ic2VydmUiLCAib2JzZXJ2ZXIiLCAiZW50cmllcyIsICJlbnRyeSIsICJjb250ZW50Qm94U2l6ZSIsICJkb0JvcmRlck9ic2VydmUiLCAiYm9yZGVyQm94U2l6ZSIsICJ1cmwiLCAidHlwZSIsICJzb3VyY2UiLCAiaHRtbCIsICJwYXJzZWQiLCAic2V0Q2hlY2tlZCIsICJpbnB1dCIsICJldiIsICJpc1ZhbGlkUGFyZW50IiwgImluZGV4T2YiLCAibm9kZSIsICJNQVRDSCIsICJSRUdFWCIsICJjcmVhdGVFbGVtZW50VmFuaWxsYSIsICJzZWxlY3RvciIsICJjcmVhdGUiLCAibWF0Y2giLCAiY2xhc3NOYW1lIiwgImlzRWxlbWVudCIsICJlbCIsICJpbmNsdWRlU2VsZiIsICJ0YXJnZXQiLCAic2VsIiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgImhvc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiS0VZQk9BUkRfT1ZFUkxBWV9QWCIsICJjYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJjYXBhY2l0b3JLZXlib2FyZEJvdW5kIiwgIndpbmRvd0tleWJvYXJkQm91bmQiLCAidmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQiLCAibmF0aXZlRGlzcGxheSIsICJuYXRpdmVEaXNwbGF5Qm91bmQiLCAibmF0aXZlRGlzcGxheVJlZnJlc2hRdWV1ZWQiLCAiaXNOYXRpdmVDYXBhY2l0b3JIb3N0IiwgImNhcCIsICJyZWFkQ3dzQnJpZGdlIiwgInBhcnNlTmF0aXZlRGlzcGxheSIsICJpbmZvIiwgIndpbmRvd1ciLCAid2luZG93SCIsICJkaXNwbGF5VyIsICJkaXNwbGF5SCIsICJ3IiwgImgiLCAiZGVuc2l0eSIsICJhcHBseU5hdGl2ZURpc3BsYXkiLCAibmV4dCIsICJwcmV2IiwgInNhbWUiLCAidXBkYXRlVlAiLCAicmVmcmVzaE5hdGl2ZURpc3BsYXkiLCAiQnJpZGdlIiwgInF1ZXVlTmF0aXZlRGlzcGxheVJlZnJlc2giLCAiYmluZE5hdGl2ZURpc3BsYXkiLCAiY2FjaGVkIiwgInZpcnR1YWxLZXlib2FyZCIsICJJTlRFUkFDVElWRV9XSURHRVQiLCAiVklFV1BPUlRfRklUIiwgImVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5IiwgImhlYWQiLCAibWV0YSIsICJjb250ZW50IiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiZGVlcEFjdGl2ZUVsZW1lbnQiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImlzQ29sbGFwc2VkQ2FyZXQiLCAibGF5b3V0TG9ja09yaWVudCIsICJsYXlvdXRMb2NrVyIsICJsYXlvdXRMb2NrSCIsICJsYXN0U3RhYmxlS2V5Ym9hcmQiLCAiaXNMYW5kc2NhcGUiLCAicmVhZFBoeXNpY2FsU2NyZWVuIiwgInN3IiwgInNoIiwgImF3IiwgImFoIiwgImxhbmRzY2FwZSIsICJib3hMYW5kc2NhcGUiLCAiY2xhbXBUb1BoeXNpY2FsIiwgInBoeXMiLCAiaW5uZXJXIiwgImlubmVySCIsICJjbGllbnRXIiwgImNsaWVudEgiLCAiY2FwVyIsICJjYXBIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJ2dlciLCAidnZIIiwgInZ2VG9wIiwgInZrSCIsICJ2dk92ZXJsYXAiLCAibmF0aXZlQ2FwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImV4cGFuZGVkU2VsZWN0aW9uIiwgImxvY2tlZCIsICJrYiIsICJpc0ltZUNocm9tZUxvY2siLCAiY2xzIiwgInBhcmVudE9mIiwgImlzU2Nyb2xscG9ydCIsICJzdHlsZSIsICJveSIsICJmaW5kUmF3RWRpdG9yU2Nyb2xscG9ydCIsICJzdGFydCIsICJpbm5lciIsICJmaW5kSW1lU2Nyb2xscG9ydCIsICJyZWFkQ2FyZXRSZWN0IiwgInJhbmdlIiwgInJlY3RzIiwgInJlY3QiLCAicGluSW1lQ2FyZXRJblNjcm9sbHBvcnQiLCAidmlzaWJsZUJvdHRvbSIsICJvdmVyZmxvdyIsICJwb3J0IiwgInBpblZpc3VhbFZpZXdwb3J0IiwgIm92ZXJsYXlQaW5uaW5nIiwgInJlc2V0Q2hyb21lU2Nyb2xsIiwgInBpbk92ZXJsYXlTY3JvbGwiLCAiaW1lIiwgImJvZHkiLCAic2Nyb2xsSW50b1ZpZXdQYXRjaGVkIiwgInBhdGNoSW1lU2Nyb2xsSW50b1ZpZXciLCAib3JpZyIsICJhcmciLCAicGluSW1lQ2hyb21lIiwgInJlYWRWaXJ0dWFsS2V5Ym9hcmRIZWlnaHRQeCIsICJnZXRBdmFpbFNpemUiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAic2NyZWVuVyIsICJzY3JlZW5IIiwgIm5hdGl2ZVNjYWxlIiwgImF2YWlsU2l6ZSIsICJjbGFzc2VzIiwgIm9yaWVudGF0aW9uTnVtYmVyTWFwIiwgInJ1bGUiLCAicHJvcE5hbWUiLCAicHJvcFZhbHVlIiwgImV4aXN0cyIsICJnZXRDb3JyZWN0T3JpZW50YXRpb24iLCAib3JpZW50YXRpb25UeXBlIiwgInBhc3NpdmVPcHRzJDEiLCAiYXBwbHlDYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyIsICJvblNob3ciLCAiZGV0YWlsIiwgImZyb21EZXRhaWwiLCAiYmluZENhcGFjaXRvcktleWJvYXJkIiwgIktleWJvYXJkIiwgImVuc3VyZVZpZXdwb3J0VHJhY2tpbmciLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAidGlja2luZyIsICJ1cGRhdGUiLCAidW5zdWJzY3JpYmVycyIsICJ1bnN1YiIsICJmaXhPcmllbnRUb1NjcmVlbiIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0ZUhpZGUiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiaSIsICJhbmdsZSIsICJzdGVwIiwgInZhcmlhbnQiLCAiZnVuYyIsICJvbkJvcmRlck9ic2VydmVTeW1ib2wiLCAib25Cb3JkZXJPYnNlcnZlJDEiLCAib25Db250ZW50T2JzZXJ2ZVN5bWJvbCIsICJvbkNvbnRlbnRPYnNlcnZlJDEiLCAidW53cmFwRnJvbVF1ZXJ5IiwgIm5vcm1hbGl6ZVNlbGVjdG9yIiwgImZhbGxiYWNrIiwgInNhZmVRdWVyeVNlbGVjdG9yQWxsIiwgInNhZmVNYXRjaGVzIiwgIm9ic2VydmVDb250ZW50Qm94IiwgImNhbGxiYWNrcyIsICJvYnNlcnZlQm9yZGVyQm94IiwgIm9ic2VydmVBdHRyaWJ1dGUiLCAiYXR0cmlidXRlIiwgIm9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yIiwgImF0dHJpYnV0ZUxpc3QiLCAicyIsICJtdXRhdGlvbkxpc3QiLCAibXV0YXRpb24iLCAiYWRkZWROb2RlcyIsICJyZW1vdmVkTm9kZXMiLCAib2JzZXJ2ZUJ5U2VsZWN0b3IiLCAibXV0IiwgIm9icyIsICJ1bndyYXBOb2Rlc0J5U2VsZWN0b3IiLCAibm9kZXMiLCAiJG5vZGVzIiwgIm9iUmVmIiwgImhhbmRsZU11dGF0aW9uIiwgImhhbmRsZUNvbWUiLCAiaGFuZGxlT3V0Q29tZSIsICJoYW5kbGVGb2N1c0NsaWNrIiwgImZhY3RvcnMiLCAic2VsZWN0ZWQiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAidmFsIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgInN0eWxlUmVmIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAiZm4iLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==
