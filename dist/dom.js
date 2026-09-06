import { $avoidTrigger as j, camelToKebab as Mt, cvt_cs_to_os as pt, hasValue as H, isArrayOrIterable as Ot, isVal as Wt, isValueUnit as Rt, kebabToCamel as kt, normalizeGridLayout as Bt, normalizePrimitive as lt, resolveLocalPointToGridCell as Ft } from "@fest-lib/core";
import { appear as It, decorHide as _t, decorShow as $t, disappear as qt, observeStyleTree as Dt, setStyleProperty as N } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var Zt = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), mt = globalThis[Zt] ??= /* @__PURE__ */ new Set();
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
].forEach((t) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const e = String(t?.name || "").trim();
  if (!(!e || mt.has(e)))
    try {
      CSS.registerProperty(t);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      mt.add(e);
    }
});
var Re = () => {
}, Be = () => {
  let t = navigator?.userAgentData?.mobile || !1;
  return ((e) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), t;
}, Fe = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, Yt = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), vt = (t, e = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t(Yt()), 0), Xt = (t) => t?.offsetParent ?? t?.host, Ie = (t) => {
  const e = [];
  let n = t;
  for (; n; ) {
    const r = Xt(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && e.push(n);
  }
  return e;
}, _e = (t, e = 1e-6) => Math.abs(t.a - 1) < e && Math.abs(t.b) < e && Math.abs(t.c) < e && Math.abs(t.d - 1) < e && Math.abs(t.e) < e && Math.abs(t.f) < e, Kt = () => {
  const t = {
    canceled: !1,
    rAFs: /* @__PURE__ */ new Set(),
    last: null,
    cancel() {
      return this.canceled = !0, cancelAnimationFrame(this.last), this;
    },
    shedule(e) {
      return this.rAFs.add(e), this;
    }
  };
  return (async () => {
    for (; !t?.canceled; )
      await Promise.all((t?.rAFs?.values?.() ?? [])?.map?.((e) => Promise.try(e)?.catch?.(console.warn.bind(console)))), t.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((e) => {
        t.last = requestAnimationFrame(e);
      }) : await new Promise((e) => {
        setTimeout(e, 16);
      });
  })(), t;
}, $e = (t = Kt()) => (e) => t.shedule(e), qe = typeof document < "u" ? document?.documentElement : null, De = (t, e = {}) => {
  if (!(!e || typeof e != "object" || !t))
    return Array.from(Object.entries(e)).map(([n, r]) => {
      const i = t.getAttribute(n);
      r == null ? t.removeAttribute(n) : r != i && t.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, Ze = (t, e = {}) => Array.from(Object.entries(e)).map(([n, r]) => {
  r == null ? t.removeAttribute(n) : t.setAttribute(n, r ?? t.getAttribute(n));
}), Ut = /* @__PURE__ */ new Map(), Ye = (t, e = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return vt(async () => {
    if (!(!t || typeof t != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(t, ...n), new Promise((i) => setTimeout(i, e))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => vt(i, e)), new Promise((i) => setTimeout(i, e))]);
      r.cancel = () => {
      };
    }
  }, e), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    Ut.forEach((t) => t?.()), await new Promise((t) => requestAnimationFrame(t));
});
var F = /* @__PURE__ */ Symbol("@border-box-width"), I = /* @__PURE__ */ Symbol("@border-box-height"), _ = /* @__PURE__ */ Symbol("@content-box-width"), $ = /* @__PURE__ */ Symbol("@content-box-height"), gt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Xe = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !bt.has(t)) {
    t[_] = t.clientWidth, t[$] = t.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (t[_] = Math.min(o.inlineSize, t.clientWidth), t[$] = Math.min(o.blockSize, t.clientHeight), e?.(t));
      }
    });
    bt.set(t, n), n.observe(t?.element ?? t, { box: "content-box" });
  }
}, Ke = (t, e = () => {
}) => {
  if (t instanceof HTMLElement && !gt.has(t)) {
    t[F] = t.offsetWidth, t[I] = t.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (t[F] = Math.min(o.inlineSize, t.offsetWidth), t[I] = Math.min(o.blockSize, t.offsetHeight), e?.(t));
      }
    });
    gt.set(t, n), n.observe(t?.element ?? t, { box: "border-box" });
  }
}, Ue = (t, ...e) => URL.createObjectURL(new Blob(e, { type: t })), Je = (t, e = "text/html") => {
  const n = new DOMParser().parseFromString(t, e);
  return n.querySelector("template") ?? n.querySelector("*");
}, Ge = (t, e, n) => {
  e != null && t.checked != e && (t?.type == "checkbox" || t?.type == "radio" && !t?.checked ? (t?.click?.(), n?.preventDefault?.()) : (t.checked = !!e, t?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, Qe = (t) => t != null && t instanceof HTMLElement && !(t instanceof DocumentFragment || t instanceof HTMLBodyElement) ? t : null, tn = (t, e) => t == null || e == null ? -1 : Array.from(t?.childNodes ?? [])?.indexOf?.(e) ?? -1, W = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", en = "^(?:" + W + ")|^#" + W + "|^\\." + W + "|^\\[" + W + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, nn = (t) => {
  if (t == ":fragment:") return document.createDocumentFragment();
  const e = document.createElement.bind(document);
  for (var n = e("div"), r, i = ""; t && (r = t.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = e(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), t = t.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, rn = (t) => t != null && (t instanceof Node || t instanceof Text || t instanceof Element || t instanceof Comment || t instanceof HTMLElement || t instanceof DocumentFragment) ? t : null, on = (t, e) => {
  const n = typeof e == "string" ? e.trim() : "";
  if (!n || !t) return t ?? null;
  try {
    return t.querySelector(n) ?? (t.matches(n) ? t : null);
  } catch {
    return null;
  }
}, K = (t, e) => {
  for (; t; ) {
    if (!(t?.element ?? t)) return !1;
    if ((t?.element ?? t) === (e?.element ?? e)) return !0;
    t = t.parentElement ?? (t.parentNode == t?.getRootNode?.({ composed: !0 }) ? t?.getRootNode?.({ composed: !0 })?.host : t?.parentNode);
  }
}, Ct = {};
function p(t, e, n, r = Ct) {
  t?.addEventListener?.(e, n, r);
  const i = typeof t == "object" || typeof t == "function" && !t?.deref ? new WeakRef(t) : t;
  return () => i?.deref?.()?.removeEventListener?.(e, n, r);
}
function yt(t, e, n, r = Ct) {
  t?.removeEventListener?.(e, n, r);
}
var an = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? p(t, n, ...r) : p(t, n, r))), sn = (t, e) => {
  if (e) {
    let n = e;
    return e instanceof Map ? n = [...e.entries()] : n = [...Object.entries(e)], n.map(([r, i]) => ((Ot(i) ? [...i] : i) ?? [])?.map?.((o) => p(t, r, o)));
  }
}, cn = (t, e) => (t = t instanceof WeakRef ? t.deref() : t, [...Object.entries(e)].map?.(([n, r]) => Array.isArray(r) ? yt(t, n, ...r) : yt(t, n, r))), un = (t) => {
  if (!t) return null;
  if (t?.composedPath && typeof t.composedPath == "function") {
    const n = t.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const e = t?.target;
  return e instanceof HTMLElement || e instanceof Element ? e : null;
}, ln = (t, e, n) => {
  if (e == null || !(e instanceof Node) && e?.element == null) return !1;
  if (t == e || (t?.element ?? t) == (e?.element ?? e)) return !0;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const r = n.composedPath(), i = t?.element ?? t, o = e?.element ?? e;
    if (r.includes(i) && r.includes(o)) {
      const s = r.indexOf(i), a = r.indexOf(o);
      if (a >= 0 && s >= 0 && a < s) return !0;
    }
  }
  return !!(t?.contains?.(e?.element ?? e) || t?.getRootNode({ composed: !0 })?.host == (e?.element ?? e));
}, Q = (t, e, n) => {
  const r = typeof e == "string" ? e.trim() : "";
  if (!r) return t ?? null;
  if (n?.composedPath && typeof n.composedPath == "function") {
    const a = n.composedPath();
    for (const d of a) if (d instanceof HTMLElement || d instanceof Element) try {
      if (d.matches?.(r)) return d;
    } catch {
    }
  }
  let i = null, o = null, s = null;
  try {
    i = t?.matches?.(r) ? t : null;
    const a = (t?.getRootNode({ composed: !0 }) ?? t?.parentElement?.getRootNode({ composed: !0 }))?.host;
    o = a?.matches?.(r) ? a : null, s = t?.closest?.(r) ?? i?.closest?.(r) ?? o?.closest?.(r) ?? null;
  } catch {
  }
  return i ?? s ?? o;
}, dn = (t, e) => !!Q(t, e), fn = (t, e, n = "parent") => {
  if (!t || t.checkVisibility && !t.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !t.checkVisibility && t.offsetParent === null && t.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === t || K(r, t), o = t.matches(":hover");
  if (!i && !o && !e) return !1;
  if (e) {
    if (typeof e == "string") {
      if (n === "parent") return !!Q(t, e);
      {
        const s = i ? r : t.querySelector(":hover") || t, a = !!Q(s, e);
        return t?.querySelector?.(e) != null || t?.matches?.(e) || a;
      }
    } else if (e instanceof HTMLElement)
      return n === "parent" ? K(t, e) || !1 : K(e, t) || !1;
  }
  return !0;
}, hn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, Jt = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), Gt = globalThis[Jt] ??= /* @__PURE__ */ new WeakMap(), Qt = (t = document.documentElement) => Gt.getOrInsertComputed(t, () => {
  const e = (t?.matches?.(".ui-orientbox") ? t : null) || t?.closest?.(".ui-orientbox") || document.body;
  if (e?.zoom) return e?.zoom || 1;
  if (t?.currentCSSZoom) return t?.currentCSSZoom || 1;
}), pn = (t = 1) => (document.documentElement.style.setProperty("--scaling", t), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: t },
  bubbles: !0,
  cancelable: !0
})), t), mn = (t = document.documentElement) => (t?.currentCSSZoom != null ? 1 : Qt(t)) || 1, tt = (t = document.documentElement) => (t?.currentCSSZoom == null ? 1 : t?.currentCSSZoom) || 1, C = (t = document.documentElement) => {
  const e = (t?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? t : null) || t?.closest?.('[orient], [data-mixin="ui-orientbox"]') || t;
  if (e?.hasAttribute?.("orient")) return parseInt(e?.getAttribute?.("orient") || "0") || 0;
  if (e?.orient != null && Number.isFinite(Number(e.orient))) return Number(e.orient) || 0;
  try {
    const n = e?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && e ? getComputedStyle(e).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, vn = (t, e = null) => {
  const n = tt(t) || 1, r = t?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = e ?? (C(t) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = pt([i.left, i.top], a, o), [l, m] = pt([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [d, l] : [l, d], [c, v] = o == 0 || o == 1 ? [h, m] : [m, h], [w, Ht] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: v,
    width: w,
    height: Ht
  };
}, gn = (t, e = null) => (e ?? C(t)) % 2 ? t[I] ?? t?.clientHeight : t[F] ?? t?.clientWidth, bn = (t, e = null) => (e ?? C(t)) % 2 ? t[F] ?? t?.clientWidth : t[I] ?? t?.clientHeight, yn = (t, e = null) => (e ?? C(t)) % 2 ? t[$] ?? t?.clientHeight : t[_] ?? t?.clientWidth, wn = (t, e = null) => (e ?? C(t)) % 2 ? t[_] ?? t?.clientWidth : t[$] ?? t?.clientHeight, te = (t, e = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(t, { timeout: e }) : setTimeout(() => t({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), S = 80, et = 0, wt = !1, xt = !1, At = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, nt = () => {
  const t = At();
  if (t)
    try {
      t.overlaysContent !== !0 && (t.overlaysContent = !0);
    } catch {
    }
}, Y = (t) => {
  if (!t || !(t instanceof HTMLElement)) return !1;
  if (t.isContentEditable) return !0;
  const e = t.tagName;
  if (e === "TEXTAREA" || e === "SELECT") return !0;
  if (e !== "INPUT") return !1;
  const n = String(t.type || "text").toLowerCase();
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
}, St = "", x = 0, b = 0, Et = (t, e, n = 0, r = 0) => {
  const i = Math.max(0, Number(t) || 0), o = Math.max(0, Number(e) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, xn = () => {
  if (typeof window > "u") return Et(0, 0);
  const t = typeof document < "u" ? document.documentElement : null;
  return Et(Number(t?.clientWidth) || Number(window.innerWidth) || 0, Number(t?.clientHeight) || Number(window.innerHeight) || 0);
}, dt = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const t = window.visualViewport, e = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(t?.width) || 0, i = Number(t?.height) || 0, o = Number(t?.offsetTop) || 0, s = Number(At()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = et;
  let h = d >= S ? d : s >= S ? s : a >= S ? a : 0;
  const l = Math.max(e, r), m = Math.max(n, i + o, h > 0 ? i + h : 0), f = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  f !== St && (St = f, x = 0, b = 0);
  const u = b > 0 && b - m >= S;
  if (h < S && u) {
    const c = Math.max(0, b - m, b - (i + o));
    c >= S && (h = c);
  }
  return h > 0 || Y(document.activeElement) || u ? (x = Math.max(l, x), b = Math.max(m, b)) : (x = l, b = m), {
    width: x || l,
    height: b || m,
    keyboard: h
  };
}, ee = (t) => {
  const e = t.tagName;
  if (e === "HTML" || e === "BODY") return !0;
  const n = t.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("view-viewer__toolbar");
}, ne = (t) => {
  if (!t) return null;
  if (t.parentElement) return t.parentElement;
  const e = t.getRootNode();
  return e instanceof ShadowRoot ? e.host : null;
}, re = (t) => {
  if (ee(t)) return !1;
  const e = getComputedStyle(t), n = e.overflowY || e.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : t.scrollHeight > t.clientHeight + 1;
}, ie = (t) => {
  let e = t;
  for (; e; ) {
    if (e instanceof HTMLElement && re(e)) return e;
    e = ne(e);
  }
  return null;
}, oe = () => {
  try {
    const e = document.getSelection();
    if (e?.rangeCount) {
      const n = e.getRangeAt(0), r = n.getClientRects(), i = r.length ? r[r.length - 1] : n.getBoundingClientRect();
      if (i && (i.height || i.width || i.top || i.bottom)) return i;
    }
  } catch {
  }
  const t = document.activeElement;
  return t instanceof HTMLElement ? t.getBoundingClientRect() : null;
}, ae = () => {
  if (!Y(document.activeElement)) return;
  const t = dt().keyboard, e = window.visualViewport, n = (Number(e?.height) || Number(window.innerHeight) || 0) - Math.max(8, t ? 12 : 0);
  if (n <= 0) return;
  const r = oe();
  if (!r) return;
  const i = r.bottom - n;
  if (i <= 1) return;
  const o = ie(document.activeElement);
  o && (o.scrollTop += i);
}, se = () => {
  const t = window.visualViewport;
  if (!t) return;
  const e = Number(t.offsetTop) || 0, n = Number(t.offsetLeft) || 0;
  if (!(!e && !n))
    try {
      t.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant"
      });
    } catch {
      try {
        t.scrollTo?.(0, 0);
      } catch {
      }
    }
}, q = () => {
  typeof window > "u" || dt().keyboard <= 0 && !Y(document.activeElement) || (se(), (window.scrollX || window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) && window.scrollTo(0, 0));
}, rt = (t) => {
  q(), t?.caret && requestAnimationFrame(() => {
    q(), ae();
  });
}, Tt = () => {
  nt();
  const t = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, e = typeof window < "u" ? window.visualViewport : null, n = dt(), r = {
    "--vv-width": `${e?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${e?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${e?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${e?.offsetTop ?? 0}px`,
    "--vv-scale": String(e?.scale ?? 1),
    "--lv-width": `${n.width}px`,
    "--lv-height": `${n.height}px`,
    "--keyboard-overlay-height": `${n.keyboard}px`,
    "--virtual-keyboard-height": `${n.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.toggleAttribute("data-vk-open", n.keyboard > 0), typeof screen < "u") {
    const i = screen?.availWidth + "px", o = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": t ? o : i,
      "--avail-height": t ? i : o,
      "--view-height": `${n.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...r
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": `${n.height}px`,
    "--pixel-ratio": "1",
    ...r
  };
}, it = Tt(), Sn = [[":root, :host, :scope", it]], ce = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ot = (t) => {
  const e = document.documentElement;
  Object.assign(it, Tt()), Object.entries(it).forEach(([n, r]) => {
    const i = e?.style?.getPropertyValue(n);
    (!i || i != r) && e?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, ue = () => {
  let t = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? t = t.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (t = t.replace("portrait", "landscape"))), t;
}, R = { passive: !0 }, at = () => {
  if (wt || typeof globalThis > "u") return;
  const t = globalThis.Capacitor, e = t?.Plugins?.Keyboard;
  if (!e?.addListener || typeof t.isNativePlatform == "function" && !t.isNativePlatform()) return;
  wt = !0;
  try {
    e.setScroll?.({ isDisabled: !0 });
  } catch {
  }
  try {
    e.setResizeMode?.({ mode: "none" });
  } catch {
  }
  const n = (i) => {
    const o = Number(i?.keyboardHeight) || 0;
    o > 0 && (et = o), ot(), rt({ caret: !0 });
  }, r = () => {
    et = 0, ot();
  };
  e.addListener("keyboardWillShow", n), e.addListener("keyboardDidShow", n), e.addListener("keyboardWillHide", r), e.addListener("keyboardDidHide", r);
}, En = () => {
  xt || typeof window > "u" || (xt = !0, at(), Nt(() => {
  }));
}, Nt = (t) => {
  let e = !1;
  const n = () => {
    e || (requestAnimationFrame(() => {
      ot(), t(), e = !1;
    }), e = !0);
  }, r = [];
  return at(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, R)), r.push(p(window?.visualViewport, "scroll", () => {
    q(), n();
  }, R)), r.push(p(window, "scroll", () => {
    q();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    rt({ caret: !0 }), n();
  }, R)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    at(), nt(), Y(document.activeElement) && (x = Math.max(x, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), rt({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, R)), nt(), n(), te(() => n(), 100), () => r.forEach((i) => i());
}, Mn = (t) => {
  if (!t?.classList?.contains?.("native-portrait-optimized"))
    return t?.classList?.add?.("native-portrait-optimized"), Nt(() => {
      const e = ce?.[ue()] ?? 0;
      t.orient = e, t.setAttribute?.("orient", String(e)), t.style?.setProperty?.("--orient", String(e));
    });
}, k = new OffscreenCanvas(1, 1).getContext("2d"), zt = (t, e) => {
  const n = getComputedStyle(t, "");
  if (e && n) {
    const r = n.getPropertyValue("font-weight") || "normal", i = n.getPropertyValue("font-size") || "16px", o = n.getPropertyValue("font-family") || "Times New Roman", s = n.getPropertyValue("font-stretch") || "normal";
    try {
      e.fontStretch = s.includes("%") ? "normal" : s;
    } catch {
    }
    try {
      e.letterSpacing = n.getPropertyValue("letter-spacing") || "normal";
    } catch {
    }
    try {
      e.fontKerning = n.getPropertyValue("font-kerning") || "auto";
    } catch {
    }
    try {
      e.fontVariantCaps = n.getPropertyValue("font-variant-caps") || "normal";
    } catch {
    }
    try {
      e.font = `${r} ${i} ${o}`;
    } catch {
    }
  }
}, le = (t, e) => {
  if (k) {
    zt(e, k);
    try {
      return k.measureText(t);
    } catch {
    }
  }
  return { width: null };
}, kn = (t) => {
  const e = t.value.slice(0, t.selectionEnd || 0);
  return le(e, t);
}, de = (t, e) => {
  const n = t?.value || "";
  if (k) {
    zt(t, k);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = k.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= e[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, Cn = (t, e) => {
  const n = t.getBoundingClientRect(), r = [e[0] - n.left / tt(), e[1] - n.top / tt()];
  return de(t, r);
}, fe = (t, e) => {
  const n = parseInt(t.getAttribute("data-grid-columns") || "", 10), r = parseInt(t.getAttribute("data-grid-rows") || "", 10), i = Bt(e ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, An = (t, e, n, r = "floor") => {
  if (!t) return [0, 0];
  const i = t.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = fe(t, n?.layout), s = C(t), a = globalThis.getComputedStyle?.(t), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, l = parseFloat(a?.paddingRight) || 0, m = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || t.clientWidth || 1) - d - l), u = Math.max(1, (i.height || t.clientHeight || 1) - h - m), c = [(e?.[0] || 0) - i.left - d, (e?.[1] || 0) - i.top - h];
  return Ft(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Tn = (t) => It(t, $t), Nn = (t) => qt(t, _t), zn = (t = 100, e = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < t; a++) r.push(a / t);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": e,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, he = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), A = globalThis[he] ??= /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), T = globalThis[pe] ??= /* @__PURE__ */ new WeakMap(), O = (t) => (typeof t?.current == "object" && (t = t?.element ?? t?.current ?? (typeof t?.self == "object" ? t?.self : null) ?? t), t), X = (t, e = "*") => typeof t != "string" ? e : t.trim() || e, z = (t, e) => {
  if (!t || typeof t.querySelectorAll != "function") return [];
  const n = X(e, "");
  if (!n) return [];
  try {
    return Array.from(t.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, st = (t, e) => {
  if (!t || typeof t.matches != "function") return !1;
  const n = X(e, "");
  if (!n) return !1;
  try {
    return !!t.matches(n);
  } catch {
    return !1;
  }
}, Vn = (t, e) => {
  if (!T.has(t = O(t))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.contentBoxSize) {
        const s = o.contentBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    e?.({
      inlineSize: t.clientWidth,
      blockSize: t.clientHeight
    }, r), T.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "content-box" });
  }
  return T.get(t)?.push?.(e), { disconnect: () => T.get(t)?.splice?.(T.get(t)?.indexOf(e) || -1, 1) };
}, Ln = (t, e) => {
  if (!A.has(t = O(t))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    e?.({
      inlineSize: t.offsetWidth,
      blockSize: t.offsetHeight
    }, r), A.set(t, n), (t?.element ?? t) instanceof Node && r.observe(t?.element ?? t, { box: "border-box" });
  }
  return A.get(t)?.push?.(e), { disconnect: () => A.get(t)?.splice?.(A.get(t)?.indexOf(e) || -1, 1) };
}, Pn = (t, e, n) => {
  if (typeof t?.selector == "string") return Vt(t, t?.selector, e, n);
  const r = new Set((e.split(",") || [e]).map((o) => o.trim())), i = new MutationObserver((o, s) => {
    for (const a of o) a.attributeName && r.has(a.attributeName) && n(a, s);
  });
  return (t?.element ?? t) instanceof Node && i.observe(t = O(t), {
    attributes: !0,
    attributeOldValue: !0,
    attributeFilter: [...r]
  }), r.forEach((o) => n({
    target: t,
    type: "attributes",
    attributeName: o,
    oldValue: t?.getAttribute?.(o)
  }, i)), i;
}, Vt = (t, e, n, r) => {
  const i = X(e), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const l = Array.from(h.addedNodes) || [], m = Array.from(h.removedNodes) || [];
      l.push(...Array.from(h.addedNodes || []).flatMap((f) => z(f, i))), m.push(...Array.from(h.removedNodes || []).flatMap((f) => z(f, i))), [...new Set(l)].filter((f) => st(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, d);
        });
      });
    } else st(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
  });
  return s.observe(t = O(t), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...o],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), z(t, i).map((a) => o.forEach((d) => r({
    target: a,
    type: "attributes",
    attributeName: d,
    oldValue: a?.getAttribute?.(d)
  }, s))), s;
}, me = (t, e = "*", n = (r, i) => {
}) => {
  const r = X(e), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((v) => z(v, r))), [...Array.from(new Set(c).values())].filter((v) => st(v, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), v = i(u.addedNodes), w = i(u.removedNodes);
    (v.length > 0 || w.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: v,
      removedNodes: w
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
    return t.addEventListener("pointerover", a, l), t.addEventListener("pointerout", d, l), t.addEventListener("pointerdown", a, l), t.addEventListener("pointerup", d, l), t.addEventListener("pointercancel", d, l), { disconnect: () => {
      t.removeEventListener("pointerover", a, l), t.removeEventListener("pointerout", d, l), t.removeEventListener("pointerdown", a, l), t.removeEventListener("pointerup", d, l), t.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":hover"))
    return t.addEventListener("pointerover", a, l), t.addEventListener("pointerout", d, l), { disconnect: () => {
      t.removeEventListener("pointerover", a, l), t.removeEventListener("pointerout", d, l);
    } };
  if (r?.includes?.(":active"))
    return t.addEventListener("pointerdown", a, l), t.addEventListener("pointerup", d, l), t.addEventListener("pointercancel", d, l), { disconnect: () => {
      t.removeEventListener("pointerdown", a, l), t.removeEventListener("pointerup", d, l), t.removeEventListener("pointercancel", d, l);
    } };
  if (r?.includes?.(":focus") && r?.includes?.(":focus-within") && r?.includes?.(":focus-visible"))
    return t.addEventListener("focusin", a, l), t.addEventListener("focusout", d, l), t.addEventListener("click", h, l), { disconnect: () => {
      t.removeEventListener("focusin", a, l), t.removeEventListener("focusout", d, l), t.removeEventListener("click", h, l);
    } };
  const m = new MutationObserver((u, c) => {
    for (const v of u) v.type == "childList" && s(v);
  });
  o = new WeakRef(m), (t?.element ?? t) instanceof Node && m.observe(t = O(t), {
    childList: !0,
    subtree: !0
  });
  const f = z(t, r);
  return f.length > 0 && n?.({
    addedNodes: f,
    removedNodes: []
  }, m), m;
}, Lt = /* @__PURE__ */ new WeakMap(), ve = (t, e, n) => (new WeakRef(t), e.has(n) || e.add(n), t), jn = (t, e) => {
  if (t) {
    if (e) {
      const n = Lt.getOrInsert(t, /* @__PURE__ */ new Set());
      [...e?.values?.() || []].map((r) => ve(t, n, r));
    }
    return t;
  }
}, ge = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), L = globalThis[ge] ??= /* @__PURE__ */ new Map(), be = (t, e) => {
  const n = [...t.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(e)])?.filter?.(([r, i]) => !!i) || []);
}, ye = (t) => (typeof t == "object" || typeof t == "function") && t != null, we = (t, e, n) => {
  if (!ye(t) && t != null) return t;
  let r = L.get(e);
  return r || (r = /* @__PURE__ */ new WeakMap(), L.set(e, r)), !r.has(t) && t != null && r.set(t, n), t;
}, Hn = (t, e) => {
  if (!(!t || !e)) {
    for (const [n, r] of e.entries()) we(t, n, r);
    return t;
  }
}, On = (t, e) => {
  if (t) {
    if (e) {
      const n = y?.get?.(t) ?? /* @__PURE__ */ new WeakSet();
      y?.has?.(t) || y?.set?.(t, n), [...e?.values?.() || []].map((r) => xe(t, r, n));
    }
    return t;
  }
}, V = (t) => ({
  storeSet: be(L, t),
  mixinSet: y?.get?.(t),
  behaviorSet: Lt?.get?.(t)
}), xe = (t, e, n) => {
  const r = new WeakRef(t);
  return n ||= y?.get?.(t), n?.has?.(e) || (n?.add?.(e), M?.get?.(e)?.add?.(t), e.name && t?.setAttribute?.("data-mixin", [...t?.getAttribute?.("data-mixin")?.split?.(" ") || [], e.name].filter((i) => !!i).join(" ")), e?.connect?.(r, e, V(t))), t;
}, Se = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), y = globalThis[Se] ??= /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), M = globalThis[Ee] ??= /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), P = globalThis[Me] ??= /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), D = globalThis[ke] ??= /* @__PURE__ */ new WeakMap(), Pt = (t, e) => {
  typeof e == "string" && (e = P?.get?.(e));
  const n = /* @__PURE__ */ new Set([...t?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => P?.get?.(s)).filter((s) => !!s)), i = y?.get?.(t) ?? /* @__PURE__ */ new WeakSet();
  M?.has?.(e) || M?.set?.(e, /* @__PURE__ */ new WeakSet()), y?.has?.(t) || y?.set?.(t, i);
  const o = new WeakRef(t);
  i?.has?.(e) || (r.has(e) || e?.disconnect?.(o, e, V(t)), (r.has(e) || !M?.get?.(e)?.has?.(t)) && (e?.connect?.(o, e, V(t)), n.add(D?.get?.(e)), i?.add?.(e), t?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), M?.get?.(e)?.add?.(t)), i?.has?.(e) && (r.has(e) || (i?.delete?.(e), e?.disconnect?.(o, e, V(t))));
}, ct = /* @__PURE__ */ new Set(), Ce = (t = typeof document < "u" ? document : null) => {
  if (t)
    return ct?.has?.(t) || (ct?.add?.(t), Vt(t, "*", "data-mixin", (e) => ut(e.target)), me(t, "[data-mixin]", (e) => {
      for (const n of e.addedNodes) n instanceof HTMLElement && ut(n);
    }), Dt(t)), t;
}, ut = (t) => {
  const e = /* @__PURE__ */ new Set([...t?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...e].map((n) => P?.get?.(n)).filter((n) => !!n))].map?.((n) => Pt(t, n));
}, Ae = (t, e) => {
  t.forEach((n) => e ? Pt(n, e) : ut(n));
}, Te = (t) => {
  for (const e of ct) Ae(e?.querySelectorAll?.("[data-mixin]"), t);
}, Ne = new FinalizationRegistry((t) => {
  P?.delete?.(t);
}), ze = (t, e) => {
  if (!D?.has?.(e)) {
    const n = t?.trim?.();
    n && (D?.set?.(e, n), P?.set?.(n, e), Ne?.register?.(e, n), Te(e));
  }
};
Ce(typeof document < "u" ? document : null);
var ft = class {
  constructor(t = null) {
    t && ze(t, this);
  }
  connect(t, e, n) {
    return this;
  }
  disconnect(t, e, n) {
    return this;
  }
  storeForElement(t) {
    return L.get(this.name || "")?.get?.(t);
  }
  relatedForElement(t) {
    return V(t);
  }
  get elements() {
    return M?.get?.(this);
  }
  get storage() {
    return L?.get?.(this.name || "");
  }
  get name() {
    return D?.get?.(this);
  }
}, Wn = (t, e, n) => {
  const r = n;
  H(n) && (n = n.value);
  const i = (n = lt(n)) != null && n !== !1;
  return j(r, () => {
    t instanceof HTMLInputElement ? t.hidden = !i : i ? t?.removeAttribute?.("data-hidden") : t?.setAttribute?.("data-hidden", "");
  }), t;
}, Rn = (t, e, n) => {
  if (!(e = typeof e == "string" ? kt(e) : e) || !t || [
    "style",
    "dataset",
    "attributeStyleMap",
    "styleMap",
    "computedStyleMap"
  ].indexOf(e || "") != -1) return t;
  const r = n;
  return H(n) && (n = n.value), t?.[e] === n || t?.[e] !== n && j(r, () => {
    n != null ? t[e] = n : delete t[e];
  }), t;
}, Bn = (t, e, n) => {
  const r = t?.dataset;
  if (!e || !t || !r) return t;
  const i = n;
  return H(n) && (n = n?.value), e = kt(e), r?.[e] === (n = lt(n)) || (n == null || n === !1 ? delete r[e] : j(i, () => {
    typeof n != "object" && typeof n != "function" ? r[e] = String(n) : delete r[e];
  })), t;
}, Ve = (t, e) => t.style.removeProperty(Mt(e)), Fn = (t, e, n) => {
  const r = t?.style;
  return !e || typeof e != "string" || !t || !r || j(n, () => {
    Wt(n) || H(n) || Rt(n) ? N(t, e, n) : n == null && Ve(t, e);
  }), t;
}, In = (t, e, n) => {
  if (!e || !t) return t;
  const r = n;
  return H(n) && (n = n.value), e = Mt(e), t?.getAttribute?.(e) === (n = lt(n)) || j(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? t?.setAttribute?.(e, String(n)) : t?.removeAttribute?.(e);
  }), t;
};
function U(t, e) {
  const n = Math.min(t.x, e.x), r = Math.min(t.y, e.y), i = Math.max(t.x, e.x), o = Math.max(t.y, e.y);
  return {
    left: n,
    top: r,
    right: i,
    bottom: o,
    width: i - n,
    height: o - r
  };
}
var B = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, J = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, G = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Le = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), Z = globalThis[Le] ??= /* @__PURE__ */ new WeakMap(), g = (t, e, n) => {
  const r = Z.get(t) ?? /* @__PURE__ */ new Map(), i = r.get(e) ?? [];
  i.push(n), r.set(e, i), Z.set(t, r);
}, ht = (t, e) => {
  const n = Z.get(t), r = n?.get(e);
  if (r) {
    for (const i of r) try {
      i();
    } catch {
    }
    n.delete(e), n.size === 0 && Z.delete(t);
  }
}, E = (t, e) => {
  const n = globalThis.getComputedStyle?.(t)?.getPropertyValue?.(e)?.trim?.() ?? "", r = parseFloat(n);
  return Number.isFinite(r) ? r : 0;
}, jt = (t, e, n) => {
  const r = t.getAttribute(e)?.trim();
  if (!r) return n;
  const i = t.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Pe = class extends ft {
  constructor() {
    super("ui-junction-select");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:var(--z-max, 9999);box-sizing:border-box;border:1px dashed color-mix(in oklab, var(--color-primary, #5a7fff) 70%, transparent);background:color-mix(in oklab, var(--color-primary, #5a7fff) 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(e)?.position === "static" && (e.style.position = "relative"), e.appendChild(n);
    let i = !1, o = {
      x: 0,
      y: 0
    }, s = {
      x: 0,
      y: 0
    };
    const a = (c) => {
      const v = e.getBoundingClientRect();
      return {
        x: c.clientX - v.left,
        y: c.clientY - v.top
      };
    }, d = () => {
      const c = U(o, s);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, h = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === e || e.contains(c.target)) && (i = !0, o = a(c), s = { ...o }, e.setPointerCapture(c.pointerId), e.dispatchEvent(new CustomEvent(B.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          host: e
        }
      })), d()));
    }, l = (c) => {
      if (!i) return;
      s = a(c), d();
      const v = U(o, s);
      e.dispatchEvent(new CustomEvent(B.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: v,
          host: e
        }
      }));
    }, m = (c) => {
      if (!i) return;
      i = !1;
      try {
        e.releasePointerCapture(c.pointerId);
      } catch {
      }
      const v = U(o, s);
      e.dispatchEvent(new CustomEvent(B.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...s },
          box: v,
          host: e
        }
      }));
    }, f = (c) => {
      i && m(c);
    }, u = (c) => {
      if (i) {
        i = !1, n.style.display = "none";
        try {
          e.releasePointerCapture(c.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(B.cancel, {
          bubbles: !0,
          detail: { host: e }
        }));
      }
    };
    return g(e, "ui-junction-select", () => {
      n.remove();
    }), g(e, "ui-junction-select", p(e, "pointerdown", h)), g(e, "ui-junction-select", p(e, "pointermove", l)), g(e, "ui-junction-select", p(e, "pointerup", f)), g(e, "ui-junction-select", p(e, "pointercancel", u)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && ht(e, "ui-junction-select"), this;
  }
}, je = class extends ft {
  constructor() {
    super("ui-junction-drag");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    N(e, "--jx-drag-x", E(e, "--jx-drag-x")), N(e, "--jx-drag-y", E(e, "--jx-drag-y"));
    const n = e.style.transform;
    (!e.style.transform || e.style.transform === "none") && (e.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = jt(e, "data-junction-drag-handle", e);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = E(e, "--jx-drag-x"), d = E(e, "--jx-drag-y"), r.setPointerCapture(f.pointerId), e.dispatchEvent(new CustomEvent(J.start, {
        bubbles: !0,
        detail: {
          host: e,
          clientX: f.clientX,
          clientY: f.clientY,
          baseX: a,
          baseY: d
        }
      }))));
    }, l = (f) => {
      if (!i) return;
      const u = f.clientX - o, c = f.clientY - s, v = a + u, w = d + c;
      N(e, "--jx-drag-x", v), N(e, "--jx-drag-y", w), e.dispatchEvent(new CustomEvent(J.move, {
        bubbles: !0,
        detail: {
          host: e,
          dx: u,
          dy: c,
          x: v,
          y: w
        }
      }));
    }, m = (f) => {
      if (i) {
        i = !1;
        try {
          r.releasePointerCapture(f.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(J.end, {
          bubbles: !0,
          detail: {
            host: e,
            x: E(e, "--jx-drag-x"),
            y: E(e, "--jx-drag-y")
          }
        }));
      }
    };
    return g(e, "ui-junction-drag", () => {
      e.style.transform = n;
    }), g(e, "ui-junction-drag", p(r, "pointerdown", h)), g(e, "ui-junction-drag", p(r, "pointermove", l)), g(e, "ui-junction-drag", p(r, "pointerup", m)), g(e, "ui-junction-drag", p(r, "pointercancel", m)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && ht(e, "ui-junction-drag"), this;
  }
}, He = class extends ft {
  constructor() {
    super("ui-junction-resize");
  }
  connect(t) {
    const e = t?.deref?.();
    if (!e) return this;
    const n = jt(e, "data-junction-resize-handle", e);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(e.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(e.getAttribute("data-junction-resize-min-h") || "") || 80), l = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = e.offsetWidth, a = e.offsetHeight, n.setPointerCapture(u.pointerId), e.dispatchEvent(new CustomEvent(G.start, {
        bubbles: !0,
        detail: {
          host: e,
          width: s,
          height: a
        }
      }))));
    }, m = (u) => {
      if (!r) return;
      const c = Math.max(d, s + (u.clientX - i)), v = Math.max(h, a + (u.clientY - o));
      e.style.width = `${c}px`, e.style.height = `${v}px`, e.dispatchEvent(new CustomEvent(G.move, {
        bubbles: !0,
        detail: {
          host: e,
          width: c,
          height: v
        }
      }));
    }, f = (u) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(u.pointerId);
        } catch {
        }
        e.dispatchEvent(new CustomEvent(G.end, {
          bubbles: !0,
          detail: {
            host: e,
            width: e.offsetWidth,
            height: e.offsetHeight
          }
        }));
      }
    };
    return g(e, "ui-junction-resize", p(n, "pointerdown", l)), g(e, "ui-junction-resize", p(n, "pointermove", m)), g(e, "ui-junction-resize", p(n, "pointerup", f)), g(e, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(t) {
    const e = t?.deref?.();
    return e && ht(e, "ui-junction-resize"), this;
  }
};
new Pe();
new je();
new He();
export {
  ft as DOMMixin,
  je as JunctionDragMixin,
  He as JunctionResizeMixin,
  Pe as JunctionSelectMixin,
  W as MATCH,
  dn as MOC,
  Q as MOCElement,
  $e as RAFBehavior,
  en as REGEX,
  qe as ROOT,
  zn as WavyShapedCircle,
  Re as __exportProperties,
  mt as __registeredCssProperties,
  p as addEvent,
  an as addEvents,
  sn as addEventsList,
  Ce as addRoot,
  Nn as animateHide,
  Tn as animateShow,
  it as availSize,
  bn as bbh,
  gn as bbw,
  ve as bindBehavior,
  xe as bindMixins,
  we as bindStore,
  I as borderBoxHeight,
  F as borderBoxWidth,
  Lt as boundBehaviors,
  y as boundMixinSet,
  wn as cbh,
  yn as cbw,
  pn as changeZoom,
  Sn as classes,
  de as computeCaretPosition,
  Cn as computeCaretPositionFromClient,
  ln as containsOrSelf,
  $ as contentBoxHeight,
  _ as contentBoxWidth,
  nn as createElementVanilla,
  Et as createFixedOverlayViewport,
  Ve as deleteStyleProperty,
  Fe as detectMobile,
  Ke as doBorderObserve,
  Xe as doContentObserve,
  En as ensureViewportTracking,
  nt as ensureVirtualKeyboardOverlay,
  Mn as fixOrientToScreen,
  mn as fixedClientZoom,
  Tt as getAvailSize,
  vn as getBoundingOrientRect,
  ue as getCorrectOrientation,
  V as getElementRelated,
  un as getEventTarget,
  Xt as getOffsetParent,
  Ie as getOffsetParentChain,
  be as getStoresOfElement,
  hn as getZoom,
  In as handleAttribute,
  Bn as handleDataset,
  Wn as handleHidden,
  Rn as handleProperty,
  Fn as handleStyleChange,
  K as hasParent,
  Je as html,
  on as includeSelf,
  tn as indexOf,
  zt as initTextStyle,
  rn as isElement,
  fn as isInFocus,
  Be as isMobile,
  _e as isNearlyIdentity,
  Qe as isValidParent,
  Kt as makeRAFCycle,
  kn as measureInputInFocus,
  le as measureText,
  Z as mixinDisposers,
  M as mixinElements,
  D as mixinNamespace,
  P as mixinRegistry,
  Ne as nameRegistryF,
  L as namedStoreMaps,
  Pn as observeAttribute,
  Vt as observeAttributeBySelector,
  Ln as observeBorderBox,
  me as observeBySelector,
  Vn as observeContentBox,
  gt as onBorderObserve,
  bt as onContentObserve,
  C as orientOf,
  ce as orientationNumberMap,
  Ct as passiveOpts,
  xn as readFixedOverlayViewport,
  fe as readLauncherLayoutFromElement,
  jn as reflectBehaviors,
  On as reflectMixins,
  Hn as reflectStores,
  ze as registerMixin,
  yt as removeEvent,
  cn as removeEvents,
  An as resolveGridCellFromClientPoint,
  ct as roots,
  Ze as setAttributes,
  De as setAttributesIfNull,
  Ge as setChecked,
  Ye as setIdleInterval,
  Ut as throttleMap,
  tt as unfixedClientZoom,
  ut as updateAllMixins,
  Pt as updateMixinAttributes,
  Ae as updateMixinAttributesAll,
  Te as updateMixinAttributesAllInRoots,
  ot as updateVP,
  Ue as url,
  Nt as whenAnyScreenChanges,
  Qt as zoomOf,
  Gt as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgdmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSBmYWxzZTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiVEVYVEFSRUFcIiB8fCB0YWcgPT09IFwiU0VMRUNUXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnICE9PSBcIklOUFVUXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdHlwZSA9IFN0cmluZyhlbC50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gIVtcblx0XHRcImJ1dHRvblwiLFxuXHRcdFwiY2hlY2tib3hcIixcblx0XHRcInJhZGlvXCIsXG5cdFx0XCJmaWxlXCIsXG5cdFx0XCJzdWJtaXRcIixcblx0XHRcInJlc2V0XCIsXG5cdFx0XCJpbWFnZVwiLFxuXHRcdFwicmFuZ2VcIixcblx0XHRcImNvbG9yXCIsXG5cdFx0XCJoaWRkZW5cIlxuXHRdLmluY2x1ZGVzKHR5cGUpO1xufTtcbnZhciBsYXlvdXRMb2NrT3JpZW50ID0gXCJcIjtcbnZhciBsYXlvdXRMb2NrVyA9IDA7XG52YXIgbGF5b3V0TG9ja0ggPSAwO1xudmFyIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKHdpZHRoLCBoZWlnaHQsIGxlZnQgPSAwLCB0b3AgPSAwKSA9PiB7XG5cdGNvbnN0IHNhZmVXaWR0aCA9IE1hdGgubWF4KDAsIE51bWJlcih3aWR0aCkgfHwgMCk7XG5cdGNvbnN0IHNhZmVIZWlnaHQgPSBNYXRoLm1heCgwLCBOdW1iZXIoaGVpZ2h0KSB8fCAwKTtcblx0Y29uc3Qgc2FmZUxlZnQgPSBOdW1iZXIobGVmdCkgfHwgMDtcblx0Y29uc3Qgc2FmZVRvcCA9IE51bWJlcih0b3ApIHx8IDA7XG5cdHJldHVybiB7XG5cdFx0bGVmdDogc2FmZUxlZnQsXG5cdFx0dG9wOiBzYWZlVG9wLFxuXHRcdHJpZ2h0OiBzYWZlTGVmdCArIHNhZmVXaWR0aCxcblx0XHRib3R0b206IHNhZmVUb3AgKyBzYWZlSGVpZ2h0LFxuXHRcdHdpZHRoOiBzYWZlV2lkdGgsXG5cdFx0aGVpZ2h0OiBzYWZlSGVpZ2h0XG5cdH07XG59O1xudmFyIHJlYWRGaXhlZE92ZXJsYXlWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCgwLCAwKTtcblx0Y29uc3Qgcm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG5cdHJldHVybiBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydChOdW1iZXIocm9vdD8uY2xpZW50V2lkdGgpIHx8IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHJvb3Q/LmNsaWVudEhlaWdodCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCk7XG59O1xudmFyIHJlYWRMYXlvdXRWaWV3cG9ydCA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdGtleWJvYXJkOiAwXG5cdH07XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCBpbm5lclcgPSBOdW1iZXIod2luZG93LmlubmVyV2lkdGgpIHx8IDA7XG5cdGNvbnN0IGlubmVySCA9IE51bWJlcih3aW5kb3cuaW5uZXJIZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VyA9IE51bWJlcih2dj8ud2lkdGgpIHx8IDA7XG5cdGNvbnN0IHZ2SCA9IE51bWJlcih2dj8uaGVpZ2h0KSB8fCAwO1xuXHRjb25zdCB2dlRvcCA9IE51bWJlcih2dj8ub2Zmc2V0VG9wKSB8fCAwO1xuXHRjb25zdCB2a0ggPSBOdW1iZXIodmlydHVhbEtleWJvYXJkKCk/LmJvdW5kaW5nQm94Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2T3ZlcmxhcCA9IGlubmVySCA+IDAgJiYgdnZIID4gMCA/IGlubmVySCAtIHZ2SCAtIHZ2VG9wIDogMDtcblx0Y29uc3QgY2FwSCA9IGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0O1xuXHRsZXQga2V5Ym9hcmQgPSBjYXBIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyBjYXBIIDogdmtIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2a0ggOiB2dk92ZXJsYXAgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZ2T3ZlcmxhcCA6IDA7XG5cdGNvbnN0IGNhbmRpZGF0ZVcgPSBNYXRoLm1heChpbm5lclcsIHZ2Vyk7XG5cdGNvbnN0IGNhbmRpZGF0ZUggPSBNYXRoLm1heChpbm5lckgsIHZ2SCArIHZ2VG9wLCBrZXlib2FyZCA+IDAgPyB2dkggKyBrZXlib2FyZCA6IDApO1xuXHRjb25zdCBvcmllbnQgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpPy5tYXRjaGVzID8gXCJsXCIgOiBcInBcIjtcblx0aWYgKG9yaWVudCAhPT0gbGF5b3V0TG9ja09yaWVudCkge1xuXHRcdGxheW91dExvY2tPcmllbnQgPSBvcmllbnQ7XG5cdFx0bGF5b3V0TG9ja1cgPSAwO1xuXHRcdGxheW91dExvY2tIID0gMDtcblx0fVxuXHRjb25zdCBzdWRkZW5TaHJpbmsgPSBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmIChrZXlib2FyZCA8IEtFWUJPQVJEX09WRVJMQVlfUFggJiYgc3VkZGVuU2hyaW5rKSB7XG5cdFx0Y29uc3Qgc2hyaW5rID0gTWF0aC5tYXgoMCwgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCAtICh2dkggKyB2dlRvcCkpO1xuXHRcdGlmIChzaHJpbmsgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBzaHJpbms7XG5cdH1cblx0aWYgKCEoa2V5Ym9hcmQgPiAwIHx8IGlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHN1ZGRlblNocmluaykpIHtcblx0XHRsYXlvdXRMb2NrVyA9IGNhbmRpZGF0ZVc7XG5cdFx0bGF5b3V0TG9ja0ggPSBjYW5kaWRhdGVIO1xuXHR9IGVsc2Uge1xuXHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgoY2FuZGlkYXRlVywgbGF5b3V0TG9ja1cpO1xuXHRcdGxheW91dExvY2tIID0gTWF0aC5tYXgoY2FuZGlkYXRlSCwgbGF5b3V0TG9ja0gpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0d2lkdGg6IGxheW91dExvY2tXIHx8IGNhbmRpZGF0ZVcsXG5cdFx0aGVpZ2h0OiBsYXlvdXRMb2NrSCB8fCBjYW5kaWRhdGVILFxuXHRcdGtleWJvYXJkXG5cdH07XG59O1xudmFyIGlzSW1lQ2hyb21lTG9jayA9IChlbCkgPT4ge1xuXHRjb25zdCB0YWcgPSBlbC50YWdOYW1lO1xuXHRpZiAodGFnID09PSBcIkhUTUxcIiB8fCB0YWcgPT09IFwiQk9EWVwiKSByZXR1cm4gdHJ1ZTtcblx0Y29uc3QgY2xzID0gZWwuY2xhc3NMaXN0O1xuXHRyZXR1cm4gY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImFwcC1zaGVsbF9fdmlld3BvcnRcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX19uYXZcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLXJvb3RcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXNoZWxsLXdvcmtzcGFjZVwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX190b29sYmFyXCIpO1xufTtcbnZhciBwYXJlbnRPZiA9IChlbCkgPT4ge1xuXHRpZiAoIWVsKSByZXR1cm4gbnVsbDtcblx0aWYgKGVsLnBhcmVudEVsZW1lbnQpIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuXHRjb25zdCByb290ID0gZWwuZ2V0Um9vdE5vZGUoKTtcblx0cmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdC5ob3N0IDogbnVsbDtcbn07XG52YXIgaXNTY3JvbGxwb3J0ID0gKGVsKSA9PiB7XG5cdGlmIChpc0ltZUNocm9tZUxvY2soZWwpKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdGNvbnN0IG95ID0gc3R5bGUub3ZlcmZsb3dZIHx8IHN0eWxlLm92ZXJmbG93QmxvY2s7XG5cdGlmIChveSAhPT0gXCJhdXRvXCIgJiYgb3kgIT09IFwic2Nyb2xsXCIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCArIDE7XG59O1xudmFyIGZpbmRJbWVTY3JvbGxwb3J0ID0gKHN0YXJ0KSA9PiB7XG5cdGxldCBub2RlID0gc3RhcnQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc1Njcm9sbHBvcnQobm9kZSkpIHJldHVybiBub2RlO1xuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgcmVhZENhcmV0UmVjdCA9ICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRpZiAoc2VsPy5yYW5nZUNvdW50KSB7XG5cdFx0XHRjb25zdCByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xuXHRcdFx0Y29uc3QgcmVjdHMgPSByYW5nZS5nZXRDbGllbnRSZWN0cygpO1xuXHRcdFx0Y29uc3QgcmVjdCA9IHJlY3RzLmxlbmd0aCA/IHJlY3RzW3JlY3RzLmxlbmd0aCAtIDFdIDogcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRpZiAocmVjdCAmJiAocmVjdC5oZWlnaHQgfHwgcmVjdC53aWR0aCB8fCByZWN0LnRvcCB8fCByZWN0LmJvdHRvbSkpIHJldHVybiByZWN0O1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHJldHVybiBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xufTtcbnZhciBwaW5JbWVDYXJldEluU2Nyb2xscG9ydCA9ICgpID0+IHtcblx0aWYgKCFpc0ltZVRhcmdldChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgcmV0dXJuO1xuXHRjb25zdCBrZXlib2FyZCA9IHJlYWRMYXlvdXRWaWV3cG9ydCgpLmtleWJvYXJkO1xuXHRjb25zdCB2diA9IHdpbmRvdy52aXN1YWxWaWV3cG9ydDtcblx0Y29uc3QgdmlzaWJsZUJvdHRvbSA9IChOdW1iZXIodnY/LmhlaWdodCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCkgLSBNYXRoLm1heCg4LCBrZXlib2FyZCA/IDEyIDogMCk7XG5cdGlmICh2aXNpYmxlQm90dG9tIDw9IDApIHJldHVybjtcblx0Y29uc3QgcmVjdCA9IHJlYWRDYXJldFJlY3QoKTtcblx0aWYgKCFyZWN0KSByZXR1cm47XG5cdGNvbnN0IG92ZXJmbG93ID0gcmVjdC5ib3R0b20gLSB2aXNpYmxlQm90dG9tO1xuXHRpZiAob3ZlcmZsb3cgPD0gMSkgcmV0dXJuO1xuXHRjb25zdCBwb3J0ID0gZmluZEltZVNjcm9sbHBvcnQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdGlmIChwb3J0KSBwb3J0LnNjcm9sbFRvcCArPSBvdmVyZmxvdztcbn07XG52YXIgcGluVmlzdWFsVmlld3BvcnQgPSAoKSA9PiB7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRpZiAoIXZ2KSByZXR1cm47XG5cdGNvbnN0IHRvcCA9IE51bWJlcih2di5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IGxlZnQgPSBOdW1iZXIodnYub2Zmc2V0TGVmdCkgfHwgMDtcblx0aWYgKCF0b3AgJiYgIWxlZnQpIHJldHVybjtcblx0dHJ5IHtcblx0XHR2di5zY3JvbGxUbyh7XG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0YmVoYXZpb3I6IFwiaW5zdGFudFwiXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHR2di5zY3JvbGxUbz8uKDAsIDApO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRpZiAocmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQgPD0gMCAmJiAhaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblx0cGluVmlzdWFsVmlld3BvcnQoKTtcblx0aWYgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keT8uc2Nyb2xsVG9wKSB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xudmFyIHBpbkltZUNocm9tZSA9IChvcHRzKSA9PiB7XG5cdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0aWYgKCFvcHRzPy5jYXJldCkgcmV0dXJuO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHRwaW5JbWVDYXJldEluU2Nyb2xscG9ydCgpO1xuXHR9KTtcbn07XG52YXIgZ2V0QXZhaWxTaXplID0gKCkgPT4ge1xuXHRlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCk7XG5cdGNvbnN0IGwgPSB0eXBlb2YgbWF0Y2hNZWRpYSAhPSBcInVuZGVmaW5lZFwiID8gbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA6IGZhbHNlO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF5b3V0Vmlld3BvcnQoKTtcblx0Y29uc3QgdnZCbG9jayA9IHtcblx0XHRcIi0tdnYtd2lkdGhcIjogYCR7dnY/LndpZHRoID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiAwKX1weGAsXG5cdFx0XCItLXZ2LWhlaWdodFwiOiBgJHt2dj8uaGVpZ2h0ID8/ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVySGVpZ2h0IDogMCl9cHhgLFxuXHRcdFwiLS12di1vZmZzZXQtbGVmdFwiOiBgJHt2dj8ub2Zmc2V0TGVmdCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LXRvcFwiOiBgJHt2dj8ub2Zmc2V0VG9wID8/IDB9cHhgLFxuXHRcdFwiLS12di1zY2FsZVwiOiBTdHJpbmcodnY/LnNjYWxlID8/IDEpLFxuXHRcdFwiLS1sdi13aWR0aFwiOiBgJHtsYXlvdXQud2lkdGh9cHhgLFxuXHRcdFwiLS1sdi1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodH1weGAsXG5cdFx0XCItLWtleWJvYXJkLW92ZXJsYXktaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGAsXG5cdFx0XCItLXZpcnR1YWwta2V5Ym9hcmQtaGVpZ2h0XCI6IGAke2xheW91dC5rZXlib2FyZH1weGBcblx0fTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZShcImRhdGEtdmstb3BlblwiLCBsYXlvdXQua2V5Ym9hcmQgPiAwKTtcblx0aWYgKHR5cGVvZiBzY3JlZW4gIT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGNvbnN0IGF3ID0gc2NyZWVuPy5hdmFpbFdpZHRoICsgXCJweFwiO1xuXHRcdGNvbnN0IGFoID0gc2NyZWVuPy5hdmFpbEhlaWdodCArIFwicHhcIjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XCItLXNjcmVlbi13aWR0aFwiOiBNYXRoLm1pbihzY3JlZW4/LndpZHRoLCBzY3JlZW4/LmF2YWlsV2lkdGgpICsgXCJweFwiLFxuXHRcdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogTWF0aC5taW4oc2NyZWVuPy5oZWlnaHQsIHNjcmVlbj8uYXZhaWxIZWlnaHQpICsgXCJweFwiLFxuXHRcdFx0XCItLWF2YWlsLXdpZHRoXCI6IGwgPyBhaCA6IGF3LFxuXHRcdFx0XCItLWF2YWlsLWhlaWdodFwiOiBsID8gYXcgOiBhaCxcblx0XHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0IHx8IE1hdGgubWluKHNjcmVlbj8uYXZhaWxIZWlnaHQsIHdpbmRvdz8uaW5uZXJIZWlnaHQpIHx8IDB9cHhgLFxuXHRcdFx0XCItLXBpeGVsLXJhdGlvXCI6IFN0cmluZyhkZXZpY2VQaXhlbFJhdGlvIHx8IDEpLFxuXHRcdFx0Li4udnZCbG9ja1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRcIi0tc2NyZWVuLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLXNjcmVlbi1oZWlnaHRcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtd2lkdGhcIjogXCIwcHhcIixcblx0XHRcIi0tYXZhaWwtaGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLXZpZXctaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1waXhlbC1yYXRpb1wiOiBcIjFcIixcblx0XHQuLi52dkJsb2NrXG5cdH07XG59O1xudmFyIGF2YWlsU2l6ZSA9IGdldEF2YWlsU2l6ZSgpO1xudmFyIGNsYXNzZXMgPSBbW1wiOnJvb3QsIDpob3N0LCA6c2NvcGVcIiwgYXZhaWxTaXplXV07XG52YXIgb3JpZW50YXRpb25OdW1iZXJNYXAgPSB7XG5cdFwicG9ydHJhaXQtcHJpbWFyeVwiOiAwLFxuXHRcImxhbmRzY2FwZS1wcmltYXJ5XCI6IDEsXG5cdFwicG9ydHJhaXQtc2Vjb25kYXJ5XCI6IDIsXG5cdFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOiAzXG59O1xudmFyIHVwZGF0ZVZQID0gKGV2KSA9PiB7XG5cdGNvbnN0IHJ1bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdE9iamVjdC5hc3NpZ24oYXZhaWxTaXplLCBnZXRBdmFpbFNpemUoKSk7XG5cdE9iamVjdC5lbnRyaWVzKGF2YWlsU2l6ZSkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG5cdFx0Y29uc3QgZXhpc3RzID0gcnVsZT8uc3R5bGU/LmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpO1xuXHRcdGlmICghZXhpc3RzIHx8IGV4aXN0cyAhPSBwcm9wVmFsdWUpIHJ1bGU/LnN0eWxlPy5zZXRQcm9wZXJ0eT8uKHByb3BOYW1lLCBwcm9wVmFsdWUgfHwgXCJcIiwgXCJcIik7XG5cdH0pO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9yaWVudGF0aW9uLXNlY29uZGFyeVwiLCBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlPy5lbmRzV2l0aD8uKFwic2Vjb25kYXJ5XCIpID8gXCIxXCIgOiBcIjBcIik7XG59O1xudmFyIGdldENvcnJlY3RPcmllbnRhdGlvbiA9ICgpID0+IHtcblx0bGV0IG9yaWVudGF0aW9uVHlwZSA9IHNjcmVlbj8ub3JpZW50YXRpb24/LnR5cGUgfHwgXCJwb3J0cmFpdC1wcmltYXJ5XCI7XG5cdGlmICghZ2xvYmFsVGhpcy5tYXRjaE1lZGlhKFwiKChkaXNwbGF5LW1vZGU6IGZ1bGxzY3JlZW4pIG9yIChkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpIG9yIChkaXNwbGF5LW1vZGU6IHdpbmRvdy1jb250cm9scy1vdmVybGF5KSlcIikubWF0Y2hlcykge1xuXHRcdGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykgb3JpZW50YXRpb25UeXBlID0gb3JpZW50YXRpb25UeXBlLnJlcGxhY2UoXCJsYW5kc2NhcGVcIiwgXCJwb3J0cmFpdFwiKTtcblx0XHRlbHNlIGlmIChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIik7XG5cdH1cblx0cmV0dXJuIG9yaWVudGF0aW9uVHlwZTtcbn07XG52YXIgcGFzc2l2ZU9wdHMkMSA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xudmFyIGJpbmRDYXBhY2l0b3JLZXlib2FyZCA9ICgpID0+IHtcblx0aWYgKGNhcGFjaXRvcktleWJvYXJkQm91bmQgfHwgdHlwZW9mIGdsb2JhbFRoaXMgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgY2FwID0gZ2xvYmFsVGhpcy5DYXBhY2l0b3I7XG5cdGNvbnN0IEtleWJvYXJkID0gY2FwPy5QbHVnaW5zPy5LZXlib2FyZDtcblx0aWYgKCFLZXlib2FyZD8uYWRkTGlzdGVuZXIpIHJldHVybjtcblx0aWYgKHR5cGVvZiBjYXAuaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmICFjYXAuaXNOYXRpdmVQbGF0Zm9ybSgpKSByZXR1cm47XG5cdGNhcGFjaXRvcktleWJvYXJkQm91bmQgPSB0cnVlO1xuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFNjcm9sbD8uKHsgaXNEaXNhYmxlZDogdHJ1ZSB9KTtcblx0fSBjYXRjaCB7fVxuXHR0cnkge1xuXHRcdEtleWJvYXJkLnNldFJlc2l6ZU1vZGU/Lih7IG1vZGU6IFwibm9uZVwiIH0pO1xuXHR9IGNhdGNoIHt9XG5cdGNvbnN0IG9uU2hvdyA9IChpbmZvKSA9PiB7XG5cdFx0Y29uc3QgbmV4dCA9IE51bWJlcihpbmZvPy5rZXlib2FyZEhlaWdodCkgfHwgMDtcblx0XHRpZiAobmV4dCA+IDApIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gbmV4dDtcblx0XHR1cGRhdGVWUCgpO1xuXHRcdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xuXHR9O1xuXHRjb25zdCBvbkhpZGUgPSAoKSA9PiB7XG5cdFx0Y2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQgPSAwO1xuXHRcdHVwZGF0ZVZQKCk7XG5cdH07XG5cdEtleWJvYXJkLmFkZExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsU2hvd1wiLCBvblNob3cpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkU2hvd1wiLCBvblNob3cpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbEhpZGVcIiwgb25IaWRlKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgb25IaWRlKTtcbn07XG52YXIgZW5zdXJlVmlld3BvcnRUcmFja2luZyA9ICgpID0+IHtcblx0aWYgKHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0dmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSB0cnVlO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0d2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge30pO1xufTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG5hdmlnYXRvcj8udmlydHVhbEtleWJvYXJkLCBcImdlb21ldHJ5Y2hhbmdlXCIsIHVwZGF0ZSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3VzaW5cIiwgKCkgPT4ge1xuXHRcdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNvdXRcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0dXBkYXRlKCk7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHVwZGF0ZSgpLCAxMDApO1xuXHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG59O1xudmFyIGZpeE9yaWVudFRvU2NyZWVuID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKCFlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpKSB7XG5cdFx0ZWxlbWVudD8uY2xhc3NMaXN0Py5hZGQ/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIik7XG5cdFx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHtcblx0XHRcdGNvbnN0IG5leHQgPSBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xuXHRcdFx0ZWxlbWVudC5vcmllbnQgPSBuZXh0O1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZT8uc2V0UHJvcGVydHk/LihcIi0tb3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9NZWFzdXJlLnRzXG52YXIgY3R4ID0gbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKS5nZXRDb250ZXh0KFwiMmRcIik7XG52YXIgaW5pdFRleHRTdHlsZSA9IChlbGVtZW50LCBjdHgpID0+IHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIFwiXCIpO1xuXHRpZiAoY3R4ICYmIHN0eWxlKSB7XG5cdFx0Y29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXdlaWdodFwiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdGNvbnN0IGZvbnRTaXplID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKSB8fCBcIjE2cHhcIjtcblx0XHRjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtZmFtaWx5XCIpIHx8IFwiVGltZXMgTmV3IFJvbWFuXCI7XG5cdFx0Y29uc3QgZm9udFN0cmV0Y2ggPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zdHJldGNoXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250U3RyZXRjaCA9IGZvbnRTdHJldGNoLmluY2x1ZGVzKFwiJVwiKSA/IFwibm9ybWFsXCIgOiBmb250U3RyZXRjaDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHgubGV0dGVyU3BhY2luZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZXR0ZXItc3BhY2luZ1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250S2VybmluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LWtlcm5pbmdcIikgfHwgXCJhdXRvXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRWYXJpYW50Q2FwcyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXZhcmlhbnQtY2Fwc1wiKSB8fCBcIm5vcm1hbFwiO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5mb250ID0gYCR7Zm9udFdlaWdodH0gJHtmb250U2l6ZX0gJHtmb250RmFtaWx5fWA7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxufTtcbnZhciBtZWFzdXJlVGV4dCA9ICh0ZXh0LCBlbGVtZW50KSA9PiB7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGVsZW1lbnQsIGN0eCk7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBjdHgubWVhc3VyZVRleHQodGV4dCk7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXHRyZXR1cm4geyB3aWR0aDogbnVsbCB9O1xufTtcbnZhciBtZWFzdXJlSW5wdXRJbkZvY3VzID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMCk7XG5cdHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0LCBpbnB1dCk7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uID0gKGlucHV0LCBwb2ludCkgPT4ge1xuXHRjb25zdCB0ZXh0ID0gaW5wdXQ/LnZhbHVlIHx8IFwiXCI7XG5cdGlmIChjdHgpIHtcblx0XHRpbml0VGV4dFN0eWxlKGlucHV0LCBjdHgpO1xuXHRcdGxldCBjdXJyZW50V2lkdGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQuc2xpY2UoMCwgaSkpPy53aWR0aDtcblx0XHRcdGlmIChjdXJyZW50V2lkdGggPT0gbnVsbCkgcmV0dXJuIHRleHQubGVuZ3RoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCAhPSBudWxsICYmIGN1cnJlbnRXaWR0aCA+PSBwb2ludFswXSkgcmV0dXJuIE1hdGgubWF4KGkgLSAxLCAwKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcbnZhciBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQgPSAoaW5wdXQsIGNsaWVudCkgPT4ge1xuXHRjb25zdCBib3ggPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgcG9pbnQgPSBbY2xpZW50WzBdIC0gYm94LmxlZnQgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpLCBjbGllbnRbMV0gLSBib3gudG9wIC8gdW5maXhlZENsaWVudFpvb20oKV07XG5cdHJldHVybiBjb21wdXRlQ2FyZXRQb3NpdGlvbihpbnB1dCwgcG9pbnQpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0xhdW5jaGVyR3JpZC50c1xudmFyIHJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50ID0gKGVsLCBsYXlvdXRPdmVycmlkZSkgPT4ge1xuXHRjb25zdCBjID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLWNvbHVtbnNcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCByID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1ncmlkLXJvd3NcIikgfHwgXCJcIiwgMTApO1xuXHRjb25zdCBiYXNlID0gbm9ybWFsaXplR3JpZExheW91dChsYXlvdXRPdmVycmlkZSA/PyBbNCwgOF0pO1xuXHRyZXR1cm4gW051bWJlci5pc0Zpbml0ZShjKSAmJiBjID4gMCA/IGMgOiBiYXNlWzBdLCBOdW1iZXIuaXNGaW5pdGUocikgJiYgciA+IDAgPyByIDogYmFzZVsxXV07XG59O1xudmFyIHJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCA9IChncmlkU3lzdGVtLCBjbGllbnRQb2ludCwgYXJncywgbW9kZSA9IFwiZmxvb3JcIikgPT4ge1xuXHRpZiAoIWdyaWRTeXN0ZW0pIHJldHVybiBbMCwgMF07XG5cdGNvbnN0IHJlY3QgPSBncmlkU3lzdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCk7XG5cdGlmICghcmVjdCkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQoZ3JpZFN5c3RlbSwgYXJncz8ubGF5b3V0KTtcblx0Y29uc3Qgb3JpZW50ID0gb3JpZW50T2YoZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IGNzID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oZ3JpZFN5c3RlbSk7XG5cdGNvbnN0IHBsID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0xlZnQpIHx8IDA7XG5cdGNvbnN0IHB0ID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ1RvcCkgfHwgMDtcblx0Y29uc3QgcHIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nUmlnaHQpIHx8IDA7XG5cdGNvbnN0IHBiID0gcGFyc2VGbG9hdChjcz8ucGFkZGluZ0JvdHRvbSkgfHwgMDtcblx0Y29uc3QgY29udGVudFcgPSBNYXRoLm1heCgxLCAocmVjdC53aWR0aCB8fCBncmlkU3lzdGVtLmNsaWVudFdpZHRoIHx8IDEpIC0gcGwgLSBwcik7XG5cdGNvbnN0IGNvbnRlbnRIID0gTWF0aC5tYXgoMSwgKHJlY3QuaGVpZ2h0IHx8IGdyaWRTeXN0ZW0uY2xpZW50SGVpZ2h0IHx8IDEpIC0gcHQgLSBwYik7XG5cdGNvbnN0IGNzQ29vcmQgPSBbKGNsaWVudFBvaW50Py5bMF0gfHwgMCkgLSByZWN0LmxlZnQgLSBwbCwgKGNsaWVudFBvaW50Py5bMV0gfHwgMCkgLSByZWN0LnRvcCAtIHB0XTtcblx0cmV0dXJuIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbChjc0Nvb3JkLCBbY29udGVudFcsIGNvbnRlbnRIXSwgbGF5b3V0LCBvcmllbnQsIHtcblx0XHRtb2RlLFxuXHRcdHJlZGlyZWN0OiB7XG5cdFx0XHRpdGVtOiBhcmdzPy5pdGVtLFxuXHRcdFx0bGlzdDogYXJncz8ubGlzdCxcblx0XHRcdGl0ZW1zOiBhcmdzPy5pdGVtc1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvQW5pbWF0aW9uLnRzXG52YXIgYW5pbWF0ZVNob3cgPSAodGFyZ2V0KSA9PiBhcHBlYXIodGFyZ2V0LCBkZWNvclNob3cpO1xudmFyIGFuaW1hdGVIaWRlID0gKHRhcmdldCkgPT4gZGlzYXBwZWFyKHRhcmdldCwgZGVjb3JIaWRlKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2RlY29yL1NoYXBlLnRzXG52YXIgV2F2eVNoYXBlZENpcmNsZSA9IChzdGVwcyA9IDEwMCwgYW1wbGl0dWRlID0gLjA1LCBmcmVxID0gOCkgPT4ge1xuXHRjb25zdCBwb2ludHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSBwb2ludHMucHVzaChpIC8gc3RlcHMpO1xuXHRjb25zdCBhbmdsZSA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKCR7c3RlcH1yYWQgKiBwaSAqIDIpYDtcblx0fTtcblx0Y29uc3QgdmFyaWFudCA9IChzdGVwKSA9PiB7XG5cdFx0cmV0dXJuIGBjYWxjKGNhbGMoY29zKGNhbGModmFyKC0tY2xpcC1mcmVxLCA4KSAqICR7YW5nbGUoc3RlcCl9KSkgKiAwLjUgKyAwLjUpICogdmFyKC0tY2xpcC1hbXBsaXR1ZGUsIDApKWA7XG5cdH07XG5cdGNvbnN0IGZ1bmMgPSAoc3RlcCkgPT4gW2BjYWxjKGNhbGMoMC41ICsgY2FsYyhjb3MoJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgLCBgY2FsYyhjYWxjKDAuNSArIGNhbGMoc2luKCR7YW5nbGUoc3RlcCl9KSAqIGNhbGMoMC41IC0gJHt2YXJpYW50KHN0ZXApfSkpKSAqIHZhcigtLWljb24tc2l6ZSwgMTAwJSkpYF07XG5cdHJldHVybiB7XG5cdFx0XCItLWNsaXAtYW1wbGl0dWRlXCI6IGFtcGxpdHVkZSxcblx0XHRcIi0tY2xpcC1mcmVxXCI6IGZyZXEsXG5cdFx0XCItLWNsaXAtcGF0aFwiOiBgcG9seWdvbigke3BvaW50cy5tYXAoKHN0ZXApID0+IHtcblx0XHRcdHJldHVybiBmdW5jKHN0ZXApLmpvaW4oXCIgXCIpO1xuXHRcdH0pLmpvaW4oXCIsIFwiKX0pYFxuXHR9O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL09ic2VydmVyLnRzXG52YXIgb25Cb3JkZXJPYnNlcnZlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BvbkJvcmRlck9ic2VydmVcIik7XG52YXIgb25Cb3JkZXJPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQm9yZGVyT2JzZXJ2ZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG9uQ29udGVudE9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQ29udGVudE9ic2VydmVcIik7XG52YXIgb25Db250ZW50T2JzZXJ2ZSQxID0gZ2xvYmFsVGhpc1tvbkNvbnRlbnRPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgdW53cmFwRnJvbVF1ZXJ5ID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5jdXJyZW50ID09IFwib2JqZWN0XCIpIGVsZW1lbnQgPSBlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQ/LmN1cnJlbnQgPz8gKHR5cGVvZiBlbGVtZW50Py5zZWxmID09IFwib2JqZWN0XCIgPyBlbGVtZW50Py5zZWxmIDogbnVsbCkgPz8gZWxlbWVudDtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIG5vcm1hbGl6ZVNlbGVjdG9yID0gKHNlbGVjdG9yLCBmYWxsYmFjayA9IFwiKlwiKSA9PiB7XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxsYmFjaztcblx0cmV0dXJuIHNlbGVjdG9yLnRyaW0oKSB8fCBmYWxsYmFjaztcbn07XG52YXIgc2FmZVF1ZXJ5U2VsZWN0b3JBbGwgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFtdO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gW107XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWwpIHx8IFtdKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xudmFyIHNhZmVNYXRjaGVzID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuXHRpZiAoIWVsIHx8IHR5cGVvZiBlbC5tYXRjaGVzICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IsIFwiXCIpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbHNlO1xuXHR0cnkge1xuXHRcdHJldHVybiAhIWVsLm1hdGNoZXMoc2VsKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIG9ic2VydmVDb250ZW50Qm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Db250ZW50T2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2I/Lihjb250ZW50Qm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQ29udGVudE9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxuXHRvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkNvbnRlbnRPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5pbmRleE9mKGNiKSB8fCAtMSwgMSkgfTtcbn07XG52YXIgb2JzZXJ2ZUJvcmRlckJveCA9IChlbGVtZW50LCBjYikgPT4ge1xuXHRpZiAoIW9uQm9yZGVyT2JzZXJ2ZSQxLmhhcyhlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpKSkge1xuXHRcdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5ib3JkZXJCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGJvcmRlckJveFNpemUgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoYm9yZGVyQm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGJvcmRlckJveFNpemUsIG9ic2VydmVyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2I/Lih7XG5cdFx0XHRpbmxpbmVTaXplOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuXHRcdFx0YmxvY2tTaXplOiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXHRcdH0sIG9ic2VydmVyKTtcblx0XHRvbkJvcmRlck9ic2VydmUkMS5zZXQoZWxlbWVudCwgY2FsbGJhY2tzKTtcblx0XHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiYm9yZGVyLWJveFwiIH0pO1xuXHR9XG5cdG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8ucHVzaD8uKGNiKTtcblx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4gb25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5zcGxpY2U/LihvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlID0gKGVsZW1lbnQsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0aWYgKHR5cGVvZiBlbGVtZW50Py5zZWxlY3RvciA9PSBcInN0cmluZ1wiKSByZXR1cm4gb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IoZWxlbWVudCwgZWxlbWVudD8uc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldCgoYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXSkubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICYmIGF0dHJpYnV0ZUxpc3QuaGFzKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpKSBjYihtdXRhdGlvbiwgb2JzZXJ2ZXIpO1xuXHR9KTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsuLi5hdHRyaWJ1dGVMaXN0XVxuXHR9KTtcblx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQ6IGVsZW1lbnQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiBlbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IsIGF0dHJpYnV0ZSwgY2IpID0+IHtcblx0Y29uc3Qgc2VsID0gbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRjb25zdCBhdHRyaWJ1dGVMaXN0ID0gbmV3IFNldChbLi4uYXR0cmlidXRlLnNwbGl0KFwiLFwiKSB8fCBbYXR0cmlidXRlXV0ubWFwKChzKSA9PiBzLnRyaW0oKSkpO1xuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIHtcblx0XHRcdGNvbnN0IGFkZGVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHx8IFtdO1xuXHRcdFx0YWRkZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRyZW1vdmVkTm9kZXMucHVzaCguLi5BcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0XHRbLi4ubmV3IFNldChhZGRlZE5vZGVzKV0uZmlsdGVyKChlbCkgPT4gc2FmZU1hdGNoZXMoZWwsIHNlbCkpPy5tYXA/LigodGFyZ2V0KSA9PiB7XG5cdFx0XHRcdGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRcdFx0Y2Ioe1xuXHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdFx0XHRcdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoc2FmZU1hdGNoZXMobXV0YXRpb24udGFyZ2V0LCBzZWwpICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoYXJhY3RlckRhdGE6IHRydWVcblx0fSk7XG5cdHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQsIHNlbCkubWFwKCh0YXJnZXQpID0+IGF0dHJpYnV0ZUxpc3QuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBjYih7XG5cdFx0dGFyZ2V0LFxuXHRcdHR5cGU6IFwiYXR0cmlidXRlc1wiLFxuXHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRvbGRWYWx1ZTogdGFyZ2V0Py5nZXRBdHRyaWJ1dGU/LihhdHRyaWJ1dGUpXG5cdH0sIG9ic2VydmVyKSkpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xudmFyIG9ic2VydmVCeVNlbGVjdG9yID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gXCIqXCIsIGNiID0gKG11dCwgb2JzKSA9PiB7fSkgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IHVud3JhcE5vZGVzQnlTZWxlY3RvciA9IChub2RlcykgPT4ge1xuXHRcdGNvbnN0ICRub2RlcyA9IEFycmF5LmZyb20obm9kZXMgfHwgW10pIHx8IFtdO1xuXHRcdCRub2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obm9kZXMgfHwgW10pLmZsYXRNYXAoKGVsKSA9PiBzYWZlUXVlcnlTZWxlY3RvckFsbChlbCwgc2VsKSkpO1xuXHRcdHJldHVybiBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KCRub2RlcykudmFsdWVzKCkpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk7XG5cdH07XG5cdGxldCBvYlJlZiA9IG51bGw7XG5cdGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKG11dGF0aW9uKSA9PiB7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBvYlJlZj8uZGVyZWY/LigpO1xuXHRcdGNvbnN0IGFkZGVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24uYWRkZWROb2Rlcyk7XG5cdFx0Y29uc3QgcmVtb3ZlZE5vZGVzID0gdW53cmFwTm9kZXNCeVNlbGVjdG9yKG11dGF0aW9uLnJlbW92ZWROb2Rlcyk7XG5cdFx0aWYgKGFkZGVkTm9kZXMubGVuZ3RoID4gMCB8fCByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0XHR0eXBlOiBtdXRhdGlvbi50eXBlLFxuXHRcdFx0dGFyZ2V0OiBtdXRhdGlvbi50YXJnZXQsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lLFxuXHRcdFx0YXR0cmlidXRlTmFtZXNwYWNlOiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lc3BhY2UsXG5cdFx0XHRuZXh0U2libGluZzogbXV0YXRpb24ubmV4dFNpYmxpbmcsXG5cdFx0XHRvbGRWYWx1ZTogbXV0YXRpb24ub2xkVmFsdWUsXG5cdFx0XHRwcmV2aW91c1NpYmxpbmc6IG11dGF0aW9uLnByZXZpb3VzU2libGluZyxcblx0XHRcdGFkZGVkTm9kZXMsXG5cdFx0XHRyZW1vdmVkTm9kZXNcblx0XHR9LCBvYnNlcnZlcik7XG5cdH07XG5cdGNvbnN0IGhhbmRsZUNvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHRyZW1vdmVkTm9kZXM6IFtldj8ucmVsYXRlZFRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVPdXRDb21lID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRm9jdXNDbGljayA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50Py5hY3RpdmVFbGVtZW50XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGZhY3RvcnMgPSB7XG5cdFx0cGFzc2l2ZTogdHJ1ZSxcblx0XHRjYXB0dXJlOiBmYWxzZVxuXHR9O1xuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjphY3RpdmVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpob3ZlclwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0aWYgKHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1c1wiKSAmJiBzZWw/LmluY2x1ZGVzPy4oXCI6Zm9jdXMtd2l0aGluXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy12aXNpYmxlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVGb2N1c0NsaWNrLCBmYWN0b3JzKTtcblx0XHR9IH07XG5cdH1cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSBoYW5kbGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdH0pO1xuXHRvYlJlZiA9IG5ldyBXZWFrUmVmKG9ic2VydmVyKTtcblx0aWYgKChlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQpIGluc3RhbmNlb2YgTm9kZSkgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50ID0gdW53cmFwRnJvbVF1ZXJ5KGVsZW1lbnQpLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWVcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkID0gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKTtcblx0aWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIGNiPy4oe1xuXHRcdGFkZGVkTm9kZXM6IHNlbGVjdGVkLFxuXHRcdHJlbW92ZWROb2RlczogW11cblx0fSwgb2JzZXJ2ZXIpO1xuXHRyZXR1cm4gb2JzZXJ2ZXI7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vQmVoYXZpb3IudHNcbnZhciBib3VuZEJlaGF2aW9ycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGJpbmRCZWhhdmlvciA9IChlbGVtZW50LCBiZWhTZXQsIGJlaGF2aW9yKSA9PiB7XG5cdG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRpZiAoIWJlaFNldC5oYXMoYmVoYXZpb3IpKSBiZWhTZXQuYWRkKGJlaGF2aW9yKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RCZWhhdmlvcnMgPSAoZWxlbWVudCwgYmVoYXZpb3JzKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAoYmVoYXZpb3JzKSB7XG5cdFx0Y29uc3QgYmVoU2V0ID0gYm91bmRCZWhhdmlvcnMuZ2V0T3JJbnNlcnQoZWxlbWVudCwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Wy4uLmJlaGF2aW9ycz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kQmVoYXZpb3IoZWxlbWVudCwgYmVoU2V0LCBlKSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vU3RvcmUudHNcbnZhciBuYW1lZFN0b3JlTWFwc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbmFtZWRTdG9yZU1hcHNcIik7XG52YXIgbmFtZWRTdG9yZU1hcHMgPSBnbG9iYWxUaGlzW25hbWVkU3RvcmVNYXBzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBnZXRTdG9yZXNPZkVsZW1lbnQgPSAobWFwLCBlbGVtZW50KSA9PiB7XG5cdGNvbnN0IEUgPSBbLi4ubWFwLmVudHJpZXMoKSB8fCBbXV07XG5cdHJldHVybiBuZXcgTWFwKEU/Lm1hcD8uKChbbiwgbV0pID0+IFtuLCBtPy5nZXQ/LihlbGVtZW50KV0pPy5maWx0ZXI/LigoW24sIGVdKSA9PiAhIWUpIHx8IFtdKTtcbn07XG52YXIgaXNXZWFrQ29tcGF0aWJsZSA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGVsZW1lbnQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZWxlbWVudCA9PSBcImZ1bmN0aW9uXCIpICYmIGVsZW1lbnQgIT0gbnVsbDtcbn07XG52YXIgYmluZFN0b3JlID0gKGVsZW1lbnQsIG5hbWUsIG9iaikgPT4ge1xuXHRpZiAoIWlzV2Vha0NvbXBhdGlibGUoZWxlbWVudCkgJiYgZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudDtcblx0bGV0IHdlYWtNYXAgPSBuYW1lZFN0b3JlTWFwcy5nZXQobmFtZSk7XG5cdGlmICghd2Vha01hcCkge1xuXHRcdHdlYWtNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHRuYW1lZFN0b3JlTWFwcy5zZXQobmFtZSwgd2Vha01hcCk7XG5cdH1cblx0aWYgKCF3ZWFrTWFwLmhhcyhlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHdlYWtNYXAuc2V0KGVsZW1lbnQsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciByZWZsZWN0U3RvcmVzID0gKGVsZW1lbnQsIHN0b3JlcykgPT4ge1xuXHRpZiAoIWVsZW1lbnQgfHwgIXN0b3JlcykgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IFtuYW1lLCBvYmpdIG9mIHN0b3Jlcy5lbnRyaWVzKCkpIGJpbmRTdG9yZShlbGVtZW50LCBuYW1lLCBvYmopO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9NaXhpbnMudHNcbnZhciByZWZsZWN0TWl4aW5zID0gKGVsZW1lbnQsIG1peGlucykgPT4ge1xuXHRpZiAoIWVsZW1lbnQpIHJldHVybjtcblx0aWYgKG1peGlucykge1xuXHRcdGNvbnN0IG1peGluU2V0ID0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5cdFx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRcdFsuLi5taXhpbnM/LnZhbHVlcz8uKCkgfHwgW11dLm1hcCgoZSkgPT4gYmluZE1peGlucyhlbGVtZW50LCBlLCBtaXhpblNldCkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBnZXRFbGVtZW50UmVsYXRlZCA9IChlbGVtZW50KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0c3RvcmVTZXQ6IGdldFN0b3Jlc09mRWxlbWVudChuYW1lZFN0b3JlTWFwcywgZWxlbWVudCksXG5cdFx0bWl4aW5TZXQ6IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpLFxuXHRcdGJlaGF2aW9yU2V0OiBib3VuZEJlaGF2aW9ycz8uZ2V0Py4oZWxlbWVudClcblx0fTtcbn07XG52YXIgYmluZE1peGlucyA9IChlbGVtZW50LCBtaXhpbiwgbWl4U2V0KSA9PiB7XG5cdGNvbnN0IHdlbCA9IG5ldyBXZWFrUmVmKGVsZW1lbnQpO1xuXHRtaXhTZXQgfHw9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpO1xuXHRpZiAoIW1peFNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0bWl4U2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0bWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5hZGQ/LihlbGVtZW50KTtcblx0XHRpZiAobWl4aW4ubmFtZSkgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdLCBtaXhpbi5uYW1lXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdG1peGluPy5jb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBib3VuZE1peGluU2V0U3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0Bib3VuZE1peGluU2V0XCIpO1xudmFyIGJvdW5kTWl4aW5TZXQgPSBnbG9iYWxUaGlzW2JvdW5kTWl4aW5TZXRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBtaXhpbkVsZW1lbnRzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkVsZW1lbnRzXCIpO1xudmFyIG1peGluRWxlbWVudHMgPSBnbG9iYWxUaGlzW21peGluRWxlbWVudHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBtaXhpblJlZ2lzdHJ5U3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpblJlZ2lzdHJ5XCIpO1xudmFyIG1peGluUmVnaXN0cnkgPSBnbG9iYWxUaGlzW21peGluUmVnaXN0cnlTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIG1peGluTmFtZXNwYWNlU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbk5hbWVzcGFjZVwiKTtcbnZhciBtaXhpbk5hbWVzcGFjZSA9IGdsb2JhbFRoaXNbbWl4aW5OYW1lc3BhY2VTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgbWl4aW4pID0+IHtcblx0aWYgKHR5cGVvZiBtaXhpbiA9PSBcInN0cmluZ1wiKSBtaXhpbiA9IG1peGluUmVnaXN0cnk/LmdldD8uKG1peGluKTtcblx0Y29uc3QgbmFtZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4uZWxlbWVudD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIpPy5zcGxpdD8uKFwiIFwiKSB8fCBbXV0pO1xuXHRjb25zdCBtaXhpbnMgPSBuZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKTtcblx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0aWYgKCFtaXhpbkVsZW1lbnRzPy5oYXM/LihtaXhpbikpIG1peGluRWxlbWVudHM/LnNldD8uKG1peGluLCAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKSk7XG5cdGlmICghYm91bmRNaXhpblNldD8uaGFzPy4oZWxlbWVudCkpIGJvdW5kTWl4aW5TZXQ/LnNldD8uKGVsZW1lbnQsIG1peGluU2V0KTtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghbWl4aW5TZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdGlmICghbWl4aW5zLmhhcyhtaXhpbikpIG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdGlmIChtaXhpbnMuaGFzKG1peGluKSB8fCAhbWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5oYXM/LihlbGVtZW50KSkge1xuXHRcdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0XHRuYW1lcy5hZGQobWl4aW5OYW1lc3BhY2U/LmdldD8uKG1peGluKSk7XG5cdFx0XHRtaXhpblNldD8uYWRkPy4obWl4aW4pO1xuXHRcdFx0ZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLW1peGluXCIsIFsuLi5uYW1lc10uZmlsdGVyKChuKSA9PiAhIW4pLmpvaW4oXCIgXCIpKTtcblx0XHR9XG5cdFx0bWl4aW5FbGVtZW50cz8uZ2V0Py4obWl4aW4pPy5hZGQ/LihlbGVtZW50KTtcblx0fVxuXHRpZiAobWl4aW5TZXQ/Lmhhcz8uKG1peGluKSkge1xuXHRcdGlmICghbWl4aW5zLmhhcyhtaXhpbikpIHtcblx0XHRcdG1peGluU2V0Py5kZWxldGU/LihtaXhpbik7XG5cdFx0XHRtaXhpbj8uZGlzY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHR9XG5cdH1cbn07XG52YXIgcm9vdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xudmFyIGFkZFJvb3QgPSAocm9vdCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQgOiBudWxsKSA9PiB7XG5cdGlmICghcm9vdCkgcmV0dXJuO1xuXHRpZiAoIXJvb3RzPy5oYXM/Lihyb290KSkge1xuXHRcdHJvb3RzPy5hZGQ/Lihyb290KTtcblx0XHRvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3Rvcihyb290LCBcIipcIiwgXCJkYXRhLW1peGluXCIsIChtdXRhdGlvbikgPT4gdXBkYXRlQWxsTWl4aW5zKG11dGF0aW9uLnRhcmdldCkpO1xuXHRcdG9ic2VydmVCeVNlbGVjdG9yKHJvb3QsIFwiW2RhdGEtbWl4aW5dXCIsIChtdXRhdGlvbikgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHVwZGF0ZUFsbE1peGlucyhlbGVtZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlU3R5bGVUcmVlKHJvb3QpO1xuXHR9XG5cdHJldHVybiByb290O1xufTtcbnZhciB1cGRhdGVBbGxNaXhpbnMgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdFsuLi5uZXcgU2V0KFsuLi5uYW1lc10ubWFwKChuKSA9PiBtaXhpblJlZ2lzdHJ5Py5nZXQ/LihuKSkuZmlsdGVyKChtKSA9PiAhIW0pKV0ubWFwPy4oKG0pID0+IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlbGVtZW50LCBtKSk7XG59O1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCA9IChlbGVtZW50cywgbWl4aW4pID0+IHtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZSkgPT4gbWl4aW4gPyB1cGRhdGVNaXhpbkF0dHJpYnV0ZXMoZSwgbWl4aW4pIDogdXBkYXRlQWxsTWl4aW5zKGUpKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyA9IChtaXhpbikgPT4ge1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbChyb290Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCJbZGF0YS1taXhpbl1cIiksIG1peGluKTtcbn07XG52YXIgbmFtZVJlZ2lzdHJ5RiA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoa2V5KSA9PiB7XG5cdG1peGluUmVnaXN0cnk/LmRlbGV0ZT8uKGtleSk7XG59KTtcbnZhciByZWdpc3Rlck1peGluID0gKG5hbWUsIG1peGluKSA9PiB7XG5cdGlmICghbWl4aW5OYW1lc3BhY2U/Lmhhcz8uKG1peGluKSkge1xuXHRcdGNvbnN0IGtleSA9IG5hbWU/LnRyaW0/LigpO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdG1peGluTmFtZXNwYWNlPy5zZXQ/LihtaXhpbiwga2V5KTtcblx0XHRcdG1peGluUmVnaXN0cnk/LnNldD8uKGtleSwgbWl4aW4pO1xuXHRcdFx0bmFtZVJlZ2lzdHJ5Rj8ucmVnaXN0ZXI/LihtaXhpbiwga2V5KTtcblx0XHRcdHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMobWl4aW4pO1xuXHRcdH1cblx0fVxufTtcbmFkZFJvb3QodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpO1xudmFyIERPTU1peGluID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gbnVsbCkge1xuXHRcdGlmIChuYW1lKSByZWdpc3Rlck1peGluKG5hbWUsIHRoaXMpO1xuXHR9XG5cdGNvbm5lY3Qod0VsZW1lbnQsIHdTZWxmLCByZWxhdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRzdG9yZUZvckVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiBuYW1lZFN0b3JlTWFwcy5nZXQodGhpcy5uYW1lIHx8IFwiXCIpPy5nZXQ/LihlbGVtZW50KTtcblx0fVxuXHRyZWxhdGVkRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpO1xuXHR9XG5cdGdldCBlbGVtZW50cygpIHtcblx0XHRyZXR1cm4gbWl4aW5FbGVtZW50cz8uZ2V0Py4odGhpcyk7XG5cdH1cblx0Z2V0IHN0b3JhZ2UoKSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzPy5nZXQ/Lih0aGlzLm5hbWUgfHwgXCJcIik7XG5cdH1cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIG1peGluTmFtZXNwYWNlPy5nZXQ/Lih0aGlzKTtcblx0fVxufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL0hhbmRsZXIudHNcbnZhciBoYW5kbGVIaWRkZW4gPSAoZWxlbWVudCwgXywgdmlzaWJsZSkgPT4ge1xuXHRjb25zdCAkcmVmID0gdmlzaWJsZTtcblx0aWYgKGhhc1ZhbHVlKHZpc2libGUpKSB2aXNpYmxlID0gdmlzaWJsZS52YWx1ZTtcblx0Y29uc3QgaXNWaXNpYmxlID0gKHZpc2libGUgPSBub3JtYWxpemVQcmltaXRpdmUodmlzaWJsZSkpICE9IG51bGwgJiYgdmlzaWJsZSAhPT0gZmFsc2U7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgZWxlbWVudC5oaWRkZW4gPSAhaXNWaXNpYmxlO1xuXHRcdGVsc2UgaWYgKGlzVmlzaWJsZSkgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiKTtcblx0XHRlbHNlIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1oaWRkZW5cIiwgXCJcIik7XG5cdH0pO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgaGFuZGxlUHJvcGVydHkgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIShwcm9wID0gdHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IGtlYmFiVG9DYW1lbChwcm9wKSA6IHByb3ApIHx8ICFlbCB8fCBbXG5cdFx0XCJzdHlsZVwiLFxuXHRcdFwiZGF0YXNldFwiLFxuXHRcdFwiYXR0cmlidXRlU3R5bGVNYXBcIixcblx0XHRcInN0eWxlTWFwXCIsXG5cdFx0XCJjb21wdXRlZFN0eWxlTWFwXCJcblx0XS5pbmRleE9mKHByb3AgfHwgXCJcIikgIT0gLTEpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbC52YWx1ZTtcblx0aWYgKGVsPy5bcHJvcF0gPT09IHZhbCkgcmV0dXJuIGVsO1xuXHRpZiAoZWw/Lltwcm9wXSAhPT0gdmFsKSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodmFsICE9IG51bGwpIGVsW3Byb3BdID0gdmFsO1xuXHRcdGVsc2UgZGVsZXRlIGVsW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVEYXRhc2V0ID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3QgZGF0YXNldFJlZiA9IGVsPy5kYXRhc2V0O1xuXHRpZiAoIXByb3AgfHwgIWVsIHx8ICFkYXRhc2V0UmVmKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWw/LnZhbHVlO1xuXHRwcm9wID0ga2ViYWJUb0NhbWVsKHByb3ApO1xuXHRpZiAoZGF0YXNldFJlZj8uW3Byb3BdID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlKSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0ZWxzZSAkYXZvaWRUcmlnZ2VyKCRyZWYsICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHZhbCAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWwgIT0gXCJmdW5jdGlvblwiKSBkYXRhc2V0UmVmW3Byb3BdID0gU3RyaW5nKHZhbCk7XG5cdFx0ZWxzZSBkZWxldGUgZGF0YXNldFJlZltwcm9wXTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgZGVsZXRlU3R5bGVQcm9wZXJ0eSA9IChlbCwgbmFtZSkgPT4gZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoY2FtZWxUb0tlYmFiKG5hbWUpKTtcbnZhciBoYW5kbGVTdHlsZUNoYW5nZSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGNvbnN0IHN0eWxlUmVmID0gZWw/LnN0eWxlO1xuXHRpZiAoIXByb3AgfHwgdHlwZW9mIHByb3AgIT0gXCJzdHJpbmdcIiB8fCAhZWwgfHwgIXN0eWxlUmVmKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIodmFsLCAoKSA9PiB7XG5cdFx0aWYgKGlzVmFsKHZhbCkgfHwgaGFzVmFsdWUodmFsKSB8fCBpc1ZhbHVlVW5pdCh2YWwpKSBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wLCB2YWwpO1xuXHRcdGVsc2UgaWYgKHZhbCA9PSBudWxsKSBkZWxldGVTdHlsZVByb3BlcnR5KGVsLCBwcm9wKTtcblx0fSk7XG5cdHJldHVybiBlbDtcbn07XG52YXIgaGFuZGxlQXR0cmlidXRlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0aWYgKCFwcm9wIHx8ICFlbCkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRwcm9wID0gY2FtZWxUb0tlYmFiKHByb3ApO1xuXHRpZiAoZWw/LmdldEF0dHJpYnV0ZT8uKHByb3ApID09PSAodmFsID0gbm9ybWFsaXplUHJpbWl0aXZlKHZhbCkpKSByZXR1cm4gZWw7XG5cdCRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIgJiYgdmFsICE9IG51bGwgJiYgKHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPT0gdHJ1ZSA6IHRydWUpKSBlbD8uc2V0QXR0cmlidXRlPy4ocHJvcCwgU3RyaW5nKHZhbCkpO1xuXHRcdGVsc2UgZWw/LnJlbW92ZUF0dHJpYnV0ZT8uKHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL2p1bmN0aW9uL3R5cGVzLnRzXG5mdW5jdGlvbiBqdW5jdGlvblRvQm94KGEsIGIpIHtcblx0Y29uc3QgbGVmdCA9IE1hdGgubWluKGEueCwgYi54KTtcblx0Y29uc3QgdG9wID0gTWF0aC5taW4oYS55LCBiLnkpO1xuXHRjb25zdCByaWdodCA9IE1hdGgubWF4KGEueCwgYi54KTtcblx0Y29uc3QgYm90dG9tID0gTWF0aC5tYXgoYS55LCBiLnkpO1xuXHRyZXR1cm4ge1xuXHRcdGxlZnQsXG5cdFx0dG9wLFxuXHRcdHJpZ2h0LFxuXHRcdGJvdHRvbSxcblx0XHR3aWR0aDogcmlnaHQgLSBsZWZ0LFxuXHRcdGhlaWdodDogYm90dG9tIC0gdG9wXG5cdH07XG59XG52YXIgSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tc2VsZWN0OnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tc2VsZWN0Om1vdmVcIixcblx0ZW5kOiBcImp1bmN0aW9uLXNlbGVjdDplbmRcIixcblx0Y2FuY2VsOiBcImp1bmN0aW9uLXNlbGVjdDpjYW5jZWxcIlxufTtcbnZhciBKVU5DVElPTl9EUkFHX0VWRU5UUyA9IHtcblx0c3RhcnQ6IFwianVuY3Rpb24tZHJhZzpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLWRyYWc6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tZHJhZzplbmRcIlxufTtcbnZhciBKVU5DVElPTl9SRVNJWkVfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1yZXNpemU6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1yZXNpemU6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tcmVzaXplOmVuZFwiXG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vSnVuY3Rpb25NaXhpbnMudHNcbnZhciBtaXhpbkRpc3Bvc2Vyc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAbWl4aW5EaXNwb3NlcnNcIik7XG52YXIgbWl4aW5EaXNwb3NlcnMgPSBnbG9iYWxUaGlzW21peGluRGlzcG9zZXJzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcHVzaERpc3Bvc2FibGUgPSAoaG9zdCwgbWl4aW5OYW1lLCBmbikgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCkgPz8gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbGlzdCA9IG1hcC5nZXQobWl4aW5OYW1lKSA/PyBbXTtcblx0bGlzdC5wdXNoKGZuKTtcblx0bWFwLnNldChtaXhpbk5hbWUsIGxpc3QpO1xuXHRtaXhpbkRpc3Bvc2Vycy5zZXQoaG9zdCwgbWFwKTtcbn07XG52YXIgcnVuRGlzcG9zZXJzID0gKGhvc3QsIG1peGluTmFtZSkgPT4ge1xuXHRjb25zdCBtYXAgPSBtaXhpbkRpc3Bvc2Vycy5nZXQoaG9zdCk7XG5cdGNvbnN0IGxpc3QgPSBtYXA/LmdldChtaXhpbk5hbWUpO1xuXHRpZiAoIWxpc3QpIHJldHVybjtcblx0Zm9yIChjb25zdCBmbiBvZiBsaXN0KSB0cnkge1xuXHRcdGZuKCk7XG5cdH0gY2F0Y2gge31cblx0bWFwLmRlbGV0ZShtaXhpbk5hbWUpO1xuXHRpZiAobWFwLnNpemUgPT09IDApIG1peGluRGlzcG9zZXJzLmRlbGV0ZShob3N0KTtcbn07XG52YXIgcGFyc2VQeFZhciA9IChob3N0LCBuYW1lKSA9PiB7XG5cdGNvbnN0IHJhdyA9IGdsb2JhbFRoaXMuZ2V0Q29tcHV0ZWRTdHlsZT8uKGhvc3QpPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnRyaW0/LigpID8/IFwiXCI7XG5cdGNvbnN0IG4gPSBwYXJzZUZsb2F0KHJhdyk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogMDtcbn07XG52YXIgcXVlcnlIYW5kbGUgPSAoaG9zdCwgYXR0ciwgZmFsbGJhY2spID0+IHtcblx0Y29uc3Qgc2VsID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0cik/LnRyaW0oKTtcblx0aWYgKCFzZWwpIHJldHVybiBmYWxsYmFjaztcblx0Y29uc3QgZm91bmQgPSBob3N0LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcblx0cmV0dXJuIGZvdW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmb3VuZCA6IGZhbGxiYWNrO1xufTtcbnZhciBKdW5jdGlvblNlbGVjdE1peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0b3ZlcmxheS5jbGFzc05hbWUgPSBcInVpLWp1bmN0aW9uLXNlbGVjdC1vdmVybGF5XCI7XG5cdFx0b3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLW92ZXJsYXlcIiwgXCJcIik7XG5cdFx0b3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6dmFyKC0tei1tYXgsIDk5OTkpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IGRhc2hlZCBjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDcwJSwgdHJhbnNwYXJlbnQpO2JhY2tncm91bmQ6Y29sb3ItbWl4KGluIG9rbGFiLCB2YXIoLS1jb2xvci1wcmltYXJ5LCAjNWE3ZmZmKSAxNCUsIHRyYW5zcGFyZW50KTtkaXNwbGF5Om5vbmU7aW5zZXQ6YXV0bzttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7XCI7XG5cdFx0Y29uc3QgZW5zdXJlUG9zaXRpb25lZCA9ICgpID0+IHtcblx0XHRcdGlmICgoZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCkpPy5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikgaG9zdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9O1xuXHRcdGVuc3VyZVBvc2l0aW9uZWQoKTtcblx0XHRob3N0LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdGxldCBhY3RpdmUgPSBmYWxzZTtcblx0XHRsZXQgYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRsZXQgYiA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwXG5cdFx0fTtcblx0XHRjb25zdCBsb2NhbFBvaW50ID0gKGV2KSA9PiB7XG5cdFx0XHRjb25zdCByID0gaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IGV2LmNsaWVudFggLSByLmxlZnQsXG5cdFx0XHRcdHk6IGV2LmNsaWVudFkgLSByLnRvcFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IGFwcGx5T3ZlcmxheSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRpZiAoYm94LndpZHRoIDwgMSAmJiBib3guaGVpZ2h0IDwgMSkge1xuXHRcdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0b3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7Ym94LmxlZnR9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtib3gudG9wfXB4YDtcblx0XHRcdG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtib3gud2lkdGh9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtib3guaGVpZ2h0fXB4YDtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldD8uY2xvc2VzdD8uKFwiW2RhdGEtanVuY3Rpb24taWdub3JlLXNlbGVjdF0sIFtkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXSwgW2RhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZV0sIGJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcblx0XHRcdGlmICghKGV2LnRhcmdldCA9PT0gaG9zdCB8fCBob3N0LmNvbnRhaW5zKGV2LnRhcmdldCkpKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSB0cnVlO1xuXHRcdFx0YSA9IGxvY2FsUG9pbnQoZXYpO1xuXHRcdFx0YiA9IHsgLi4uYSB9O1xuXHRcdFx0aG9zdC5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGhvc3Rcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdFx0YXBwbHlPdmVybGF5KCk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRiID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBlbmQgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCBib3ggPSBqdW5jdGlvblRvQm94KGEsIGIpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9TRUxFQ1RfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRhOiB7IC4uLmEgfSxcblx0XHRcdFx0XHRiOiB7IC4uLmIgfSxcblx0XHRcdFx0XHRib3gsXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvblVwID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0ZW5kKGV2KTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uQ2FuY2VsID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhvc3QucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuY2FuY2VsLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDogeyBob3N0IH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsICgpID0+IHtcblx0XHRcdG92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJjYW5jZWxcIiwgb25DYW5jZWwpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uRHJhZ01peGluID0gY2xhc3MgZXh0ZW5kcyBET01NaXhpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFwidWktanVuY3Rpb24tZHJhZ1wiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIikpO1xuXHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteVwiLCBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIikpO1xuXHRcdGNvbnN0IHByZXZpb3VzVHJhbnNmb3JtID0gaG9zdC5zdHlsZS50cmFuc2Zvcm07XG5cdFx0aWYgKCFob3N0LnN0eWxlLnRyYW5zZm9ybSB8fCBob3N0LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJub25lXCIpIGhvc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChjYWxjKHZhcigtLWp4LWRyYWcteCwgMCkgKiAxcHgpLCBjYWxjKHZhcigtLWp4LWRyYWcteSwgMCkgKiAxcHgpLCAwKVwiO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1kcmFnLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRsZXQgc3RhcnRYID0gMDtcblx0XHRsZXQgc3RhcnRZID0gMDtcblx0XHRsZXQgYmFzZVggPSAwO1xuXHRcdGxldCBiYXNlWSA9IDA7XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0ICE9PSBoYW5kbGUgJiYgIWhhbmRsZS5jb250YWlucyhldi50YXJnZXQpKSByZXR1cm47XG5cdFx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBldi5jbGllbnRYO1xuXHRcdFx0c3RhcnRZID0gZXYuY2xpZW50WTtcblx0XHRcdGJhc2VYID0gcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpO1xuXHRcdFx0YmFzZVkgPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIik7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHRjbGllbnRYOiBldi5jbGllbnRYLFxuXHRcdFx0XHRcdGNsaWVudFk6IGV2LmNsaWVudFksXG5cdFx0XHRcdFx0YmFzZVgsXG5cdFx0XHRcdFx0YmFzZVlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIWRyYWdnaW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBkeCA9IGV2LmNsaWVudFggLSBzdGFydFg7XG5cdFx0XHRjb25zdCBkeSA9IGV2LmNsaWVudFkgLSBzdGFydFk7XG5cdFx0XHRjb25zdCBueCA9IGJhc2VYICsgZHg7XG5cdFx0XHRjb25zdCBueSA9IGJhc2VZICsgZHk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXhcIiwgbngpO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIG55KTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGR4LFxuXHRcdFx0XHRcdGR5LFxuXHRcdFx0XHRcdHg6IG54LFxuXHRcdFx0XHRcdHk6IG55XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX0RSQUdfRVZFTlRTLmVuZCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHg6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSxcblx0XHRcdFx0XHR5OiBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXlcIilcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsICgpID0+IHtcblx0XHRcdGhvc3Quc3R5bGUudHJhbnNmb3JtID0gcHJldmlvdXNUcmFuc2Zvcm07XG5cdFx0fSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcnVwXCIsIG9uVXApKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xudmFyIEp1bmN0aW9uUmVzaXplTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBoYW5kbGUgPSBxdWVyeUhhbmRsZShob3N0LCBcImRhdGEtanVuY3Rpb24tcmVzaXplLWhhbmRsZVwiLCBob3N0KTtcblx0XHRsZXQgcmVzaXppbmcgPSBmYWxzZTtcblx0XHRsZXQgc3ggPSAwO1xuXHRcdGxldCBzeSA9IDA7XG5cdFx0bGV0IHN3ID0gMDtcblx0XHRsZXQgc2ggPSAwO1xuXHRcdGNvbnN0IG1pblcgPSBNYXRoLm1heCgxMjAsIHBhcnNlRmxvYXQoaG9zdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWp1bmN0aW9uLXJlc2l6ZS1taW4td1wiKSB8fCBcIlwiKSB8fCAxMjApO1xuXHRcdGNvbnN0IG1pbkggPSBNYXRoLm1heCg4MCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi1oXCIpIHx8IFwiXCIpIHx8IDgwKTtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gdHJ1ZTtcblx0XHRcdHN4ID0gZXYuY2xpZW50WDtcblx0XHRcdHN5ID0gZXYuY2xpZW50WTtcblx0XHRcdHN3ID0gaG9zdC5vZmZzZXRXaWR0aDtcblx0XHRcdHNoID0gaG9zdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRoYW5kbGUuc2V0UG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbncgPSBNYXRoLm1heChtaW5XLCBzdyArIChldi5jbGllbnRYIC0gc3gpKTtcblx0XHRcdGNvbnN0IG5oID0gTWF0aC5tYXgobWluSCwgc2ggKyAoZXYuY2xpZW50WSAtIHN5KSk7XG5cdFx0XHRob3N0LnN0eWxlLndpZHRoID0gYCR7bnd9cHhgO1xuXHRcdFx0aG9zdC5zdHlsZS5oZWlnaHQgPSBgJHtuaH1weGA7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMubW92ZSwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdHdpZHRoOiBudyxcblx0XHRcdFx0XHRoZWlnaHQ6IG5oXG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghcmVzaXppbmcpIHJldHVybjtcblx0XHRcdHJlc2l6aW5nID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRoYW5kbGUucmVsZWFzZVBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1JFU0laRV9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IGhvc3Qub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBob3N0Lm9mZnNldEhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgb25Eb3duKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyY2FuY2VsXCIsIG9uVXApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoaG9zdCkgcnVuRGlzcG9zZXJzKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xubmV3IEp1bmN0aW9uU2VsZWN0TWl4aW4oKTtcbm5ldyBKdW5jdGlvbkRyYWdNaXhpbigpO1xubmV3IEp1bmN0aW9uUmVzaXplTWl4aW4oKTtcblxuLy8jZW5kcmVnaW9uXG5leHBvcnQgeyBET01NaXhpbiwgSnVuY3Rpb25EcmFnTWl4aW4sIEp1bmN0aW9uUmVzaXplTWl4aW4sIEp1bmN0aW9uU2VsZWN0TWl4aW4sIE1BVENILCBNT0MsIE1PQ0VsZW1lbnQsIFJBRkJlaGF2aW9yLCBSRUdFWCwgUk9PVCwgV2F2eVNoYXBlZENpcmNsZSwgX19leHBvcnRQcm9wZXJ0aWVzLCBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzLCBhZGRFdmVudCwgYWRkRXZlbnRzLCBhZGRFdmVudHNMaXN0LCBhZGRSb290LCBhbmltYXRlSGlkZSwgYW5pbWF0ZVNob3csIGF2YWlsU2l6ZSwgYmJoLCBiYncsIGJpbmRCZWhhdmlvciwgYmluZE1peGlucywgYmluZFN0b3JlLCBib3JkZXJCb3hIZWlnaHQsIGJvcmRlckJveFdpZHRoLCBib3VuZEJlaGF2aW9ycywgYm91bmRNaXhpblNldCwgY2JoLCBjYncsIGNoYW5nZVpvb20sIGNsYXNzZXMsIGNvbXB1dGVDYXJldFBvc2l0aW9uLCBjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQsIGNvbnRhaW5zT3JTZWxmLCBjb250ZW50Qm94SGVpZ2h0LCBjb250ZW50Qm94V2lkdGgsIGNyZWF0ZUVsZW1lbnRWYW5pbGxhLCBjcmVhdGVGaXhlZE92ZXJsYXlWaWV3cG9ydCwgZGVsZXRlU3R5bGVQcm9wZXJ0eSwgZGV0ZWN0TW9iaWxlLCBkb0JvcmRlck9ic2VydmUsIGRvQ29udGVudE9ic2VydmUsIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcsIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXksIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpc0VsZW1lbnQsIGlzSW5Gb2N1cywgaXNNb2JpbGUsIGlzTmVhcmx5SWRlbnRpdHksIGlzVmFsaWRQYXJlbnQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXNzaXZlT3B0cywgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0LCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxHQUFlLGdCQUFBQyxJQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxVQUFtQztBQUMvTCxTQUFTLFVBQUFDLElBQVEsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLGFBQUFDLElBQVcsb0JBQUFDLElBQWtCLG9CQUFBQyxTQUF3QjtBQUU1RixjQUFjO0FBR2QsSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFD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YUFBYUosQ0FBSSxDQUFDLEdBQzlFaEIsRUFBZS9RLEdBQU0sc0JBQXNCeEIsRUFBUzJULEdBQVEsaUJBQWlCSixDQUFJLENBQUMsR0FDM0U7QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXUCxHQUFLO0FBQ2YsVUFBTXhSLElBQU93UixHQUFLLFFBQVE7QUFDMUIsV0FBSXhSLEtBQU1rUixHQUFhbFIsR0FBTSxvQkFBb0IsR0FDMUM7QUFBQSxFQUNSO0FBQ0Q7QUFDQSxJQUFJdVIsR0FBb0I7QUFDeEIsSUFBSVUsR0FBa0I7QUFDdEIsSUFBSVksR0FBb0I7IiwKICAibmFtZXMiOiBbIiRhdm9pZFRyaWdnZXIiLCAiY2FtZWxUb0tlYmFiIiwgImN2dF9jc190b19vcyIsICJoYXNWYWx1ZSIsICJpc0FycmF5T3JJdGVyYWJsZSIsICJpc1ZhbCIsICJpc1ZhbHVlVW5pdCIsICJrZWJhYlRvQ2FtZWwiLCAibm9ybWFsaXplR3JpZExheW91dCIsICJub3JtYWxpemVQcmltaXRpdmUiLCAicmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsIiwgImFwcGVhciIsICJkZWNvckhpZGUiLCAiZGVjb3JTaG93IiwgImRpc2FwcGVhciIsICJvYnNlcnZlU3R5bGVUcmVlIiwgInNldFN0eWxlUHJvcGVydHkiLCAiX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzIiwgIm9wdGlvbnMiLCAibmFtZSIsICJlIiwgIl9fZXhwb3J0UHJvcGVydGllcyIsICJpc01vYmlsZSIsICJjaGVjayIsICJhIiwgImRldGVjdE1vYmlsZSIsICJjcmVhdGVJZGxlRGVhZGxpbmVGYWxsYmFjayIsICJydW5XaGVuSWRsZSQxIiwgImNiIiwgInRpbWVvdXQiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgImVsZW1lbnQiLCAiZ2V0T2Zmc2V0UGFyZW50Q2hhaW4iLCAicGFyZW50cyIsICJjdXJyZW50IiwgInBhcmVudCIsICJpc05lYXJseUlkZW50aXR5IiwgIm1hdHJpeCIsICJlcHNpbG9uIiwgIm1ha2VSQUZDeWNsZSIsICJjb250cm9sIiwgInJBRiIsICJyZXMiLCAiUkFGQmVoYXZpb3IiLCAic2hlZCIsICJST09UIiwgInNldEF0dHJpYnV0ZXNJZk51bGwiLCAiYXR0cnMiLCAidmFsdWUiLCAib2xkIiwgInNldEF0dHJpYnV0ZXMiLCAidGhyb3R0bGVNYXAiLCAic2V0SWRsZUludGVydmFsIiwgImFyZ3MiLCAic3RhdHVzIiwgInIiLCAiYm9yZGVyQm94V2lkdGgiLCAiYm9yZGVyQm94SGVpZ2h0IiwgImNvbnRlbnRCb3hXaWR0aCIsICJjb250ZW50Qm94SGVpZ2h0IiwgIm9uQm9yZGVyT2JzZXJ2ZSIsICJvbkNvbnRlbnRPYnNlcnZlIiwgImRvQ29udGVudE9ic2VydmUiLCAib2JzZXJ2ZXIiLCAiZW50cmllcyIsICJlbnRyeSIsICJjb250ZW50Qm94U2l6ZSIsICJkb0JvcmRlck9ic2VydmUiLCAiYm9yZGVyQm94U2l6ZSIsICJ1cmwiLCAidHlwZSIsICJzb3VyY2UiLCAiaHRtbCIsICJwYXJzZWQiLCAic2V0Q2hlY2tlZCIsICJpbnB1dCIsICJldiIsICJpc1ZhbGlkUGFyZW50IiwgImluZGV4T2YiLCAibm9kZSIsICJNQVRDSCIsICJSRUdFWCIsICJjcmVhdGVFbGVtZW50VmFuaWxsYSIsICJzZWxlY3RvciIsICJjcmVhdGUiLCAibWF0Y2giLCAiY2xhc3NOYW1lIiwgImlzRWxlbWVudCIsICJlbCIsICJpbmNsdWRlU2VsZiIsICJ0YXJnZXQiLCAic2VsIiwgImhhc1BhcmVudCIsICJwYXNzaXZlT3B0cyIsICJhZGRFdmVudCIsICJvcHRzIiwgIndyIiwgInJlbW92ZUV2ZW50IiwgImFkZEV2ZW50cyIsICJyb290IiwgImhhbmRsZXJzIiwgImFkZEV2ZW50c0xpc3QiLCAiZXZlbnRzIiwgImxpc3QiLCAiY2JzIiwgInJlbW92ZUV2ZW50cyIsICJnZXRFdmVudFRhcmdldCIsICJwYXRoIiwgImNvbnRhaW5zT3JTZWxmIiwgImIiLCAiYUVsIiwgImJFbCIsICJhSW5kZXgiLCAiYkluZGV4IiwgIk1PQ0VsZW1lbnQiLCAic2VsZiIsICJob3N0TWF0Y2hlZCIsICJjbG9zZXN0IiwgImhvc3QiLCAiTU9DIiwgImlzSW5Gb2N1cyIsICJzZWxlY3Rvck9yRWxlbWVudCIsICJkaXIiLCAiYWN0aXZlIiwgImlzRm9jdXNlZCIsICJpc0hvdmVyZWQiLCAiYWx0Q25kIiwgImdldFpvb20iLCAiem9vbVZhbHVlc1N5bWJvbCIsICJ6b29tVmFsdWVzIiwgInpvb21PZiIsICJjb250YWluZXIiLCAiY2hhbmdlWm9vbSIsICJzY2FsZSIsICJmaXhlZENsaWVudFpvb20iLCAidW5maXhlZENsaWVudFpvb20iLCAib3JpZW50T2YiLCAicmF3IiwgIm4iLCAiZ2V0Qm91bmRpbmdPcmllbnRSZWN0IiwgIm9yaWVudCIsICJ6b29tIiwgImJveCIsICJuYngiLCAib3JfaSIsICJ2diIsICJzaXplIiwgImxlZnRfIiwgInRvcF8iLCAicmlnaHRfIiwgImJvdHRvbV8iLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIndpZHRoIiwgImhlaWdodCIsICJiYnciLCAiYmJoIiwgImNidyIsICJjYmgiLCAicnVuV2hlbklkbGUiLCAiS0VZQk9BUkRfT1ZFUkxBWV9QWCIsICJjYXBhY2l0b3JLZXlib2FyZEhlaWdodCIsICJjYXBhY2l0b3JLZXlib2FyZEJvdW5kIiwgInZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIiwgInZpcnR1YWxLZXlib2FyZCIsICJlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5IiwgInZrIiwgImlzSW1lVGFyZ2V0IiwgInRhZyIsICJsYXlvdXRMb2NrT3JpZW50IiwgImxheW91dExvY2tXIiwgImxheW91dExvY2tIIiwgImNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInNhZmVXaWR0aCIsICJzYWZlSGVpZ2h0IiwgInNhZmVMZWZ0IiwgInNhZmVUb3AiLCAicmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0IiwgInJlYWRMYXlvdXRWaWV3cG9ydCIsICJpbm5lclciLCAiaW5uZXJIIiwgInZ2VyIsICJ2dkgiLCAidnZUb3AiLCAidmtIIiwgInZ2T3ZlcmxhcCIsICJjYXBIIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImlzSW1lQ2hyb21lTG9jayIsICJjbHMiLCAicGFyZW50T2YiLCAiaXNTY3JvbGxwb3J0IiwgInN0eWxlIiwgIm95IiwgImZpbmRJbWVTY3JvbGxwb3J0IiwgInN0YXJ0IiwgInJlYWRDYXJldFJlY3QiLCAicmFuZ2UiLCAicmVjdHMiLCAicmVjdCIsICJwaW5JbWVDYXJldEluU2Nyb2xscG9ydCIsICJ2aXNpYmxlQm90dG9tIiwgIm92ZXJmbG93IiwgInBvcnQiLCAicGluVmlzdWFsVmlld3BvcnQiLCAicGluT3ZlcmxheVNjcm9sbCIsICJwaW5JbWVDaHJvbWUiLCAiZ2V0QXZhaWxTaXplIiwgImwiLCAibGF5b3V0IiwgInZ2QmxvY2siLCAiYXciLCAiYWgiLCAiYXZhaWxTaXplIiwgImNsYXNzZXMiLCAib3JpZW50YXRpb25OdW1iZXJNYXAiLCAidXBkYXRlVlAiLCAicnVsZSIsICJwcm9wTmFtZSIsICJwcm9wVmFsdWUiLCAiZXhpc3RzIiwgImdldENvcnJlY3RPcmllbnRhdGlvbiIsICJvcmllbnRhdGlvblR5cGUiLCAicGFzc2l2ZU9wdHMkMSIsICJiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQiLCAiY2FwIiwgIktleWJvYXJkIiwgIm9uU2hvdyIsICJpbmZvIiwgIm5leHQiLCAib25IaWRlIiwgImVuc3VyZVZpZXdwb3J0VHJhY2tpbmciLCAid2hlbkFueVNjcmVlbkNoYW5nZXMiLCAidGlja2luZyIsICJ1cGRhdGUiLCAidW5zdWJzY3JpYmVycyIsICJ1bnN1YiIsICJmaXhPcmllbnRUb1NjcmVlbiIsICJjdHgiLCAiaW5pdFRleHRTdHlsZSIsICJmb250V2VpZ2h0IiwgImZvbnRTaXplIiwgImZvbnRGYW1pbHkiLCAiZm9udFN0cmV0Y2giLCAibWVhc3VyZVRleHQiLCAidGV4dCIsICJtZWFzdXJlSW5wdXRJbkZvY3VzIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uIiwgInBvaW50IiwgImN1cnJlbnRXaWR0aCIsICJjb21wdXRlQ2FyZXRQb3NpdGlvbkZyb21DbGllbnQiLCAiY2xpZW50IiwgInJlYWRMYXVuY2hlckxheW91dEZyb21FbGVtZW50IiwgImxheW91dE92ZXJyaWRlIiwgImMiLCAiYmFzZSIsICJyZXNvbHZlR3JpZENlbGxGcm9tQ2xpZW50UG9pbnQiLCAiZ3JpZFN5c3RlbSIsICJjbGllbnRQb2ludCIsICJtb2RlIiwgImNzIiwgInBsIiwgInB0IiwgInByIiwgInBiIiwgImNvbnRlbnRXIiwgImNvbnRlbnRIIiwgImNzQ29vcmQiLCAiYW5pbWF0ZVNob3ciLCAiYW5pbWF0ZUhpZGUiLCAiV2F2eVNoYXBlZENpcmNsZSIsICJzdGVwcyIsICJhbXBsaXR1ZGUiLCAiZnJlcSIsICJwb2ludHMiLCAiaSIsICJhbmdsZSIsICJzdGVwIiwgInZhcmlhbnQiLCAiZnVuYyIsICJvbkJvcmRlck9ic2VydmVTeW1ib2wiLCAib25Cb3JkZXJPYnNlcnZlJDEiLCAib25Db250ZW50T2JzZXJ2ZVN5bWJvbCIsICJvbkNvbnRlbnRPYnNlcnZlJDEiLCAidW53cmFwRnJvbVF1ZXJ5IiwgIm5vcm1hbGl6ZVNlbGVjdG9yIiwgImZhbGxiYWNrIiwgInNhZmVRdWVyeVNlbGVjdG9yQWxsIiwgInNhZmVNYXRjaGVzIiwgIm9ic2VydmVDb250ZW50Qm94IiwgImNhbGxiYWNrcyIsICJvYnNlcnZlQm9yZGVyQm94IiwgIm9ic2VydmVBdHRyaWJ1dGUiLCAiYXR0cmlidXRlIiwgIm9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yIiwgImF0dHJpYnV0ZUxpc3QiLCAicyIsICJtdXRhdGlvbkxpc3QiLCAibXV0YXRpb24iLCAiYWRkZWROb2RlcyIsICJyZW1vdmVkTm9kZXMiLCAib2JzZXJ2ZUJ5U2VsZWN0b3IiLCAibXV0IiwgIm9icyIsICJ1bndyYXBOb2Rlc0J5U2VsZWN0b3IiLCAibm9kZXMiLCAiJG5vZGVzIiwgIm9iUmVmIiwgImhhbmRsZU11dGF0aW9uIiwgImhhbmRsZUNvbWUiLCAiaGFuZGxlT3V0Q29tZSIsICJoYW5kbGVGb2N1c0NsaWNrIiwgImZhY3RvcnMiLCAic2VsZWN0ZWQiLCAiYm91bmRCZWhhdmlvcnMiLCAiYmluZEJlaGF2aW9yIiwgImJlaFNldCIsICJiZWhhdmlvciIsICJyZWZsZWN0QmVoYXZpb3JzIiwgImJlaGF2aW9ycyIsICJuYW1lZFN0b3JlTWFwc1N5bWJvbCIsICJuYW1lZFN0b3JlTWFwcyIsICJnZXRTdG9yZXNPZkVsZW1lbnQiLCAibWFwIiwgIkUiLCAibSIsICJpc1dlYWtDb21wYXRpYmxlIiwgImJpbmRTdG9yZSIsICJvYmoiLCAid2Vha01hcCIsICJyZWZsZWN0U3RvcmVzIiwgInN0b3JlcyIsICJyZWZsZWN0TWl4aW5zIiwgIm1peGlucyIsICJtaXhpblNldCIsICJib3VuZE1peGluU2V0IiwgImJpbmRNaXhpbnMiLCAiZ2V0RWxlbWVudFJlbGF0ZWQiLCAibWl4aW4iLCAibWl4U2V0IiwgIndlbCIsICJtaXhpbkVsZW1lbnRzIiwgImJvdW5kTWl4aW5TZXRTeW1ib2wiLCAibWl4aW5FbGVtZW50c1N5bWJvbCIsICJtaXhpblJlZ2lzdHJ5U3ltYm9sIiwgIm1peGluUmVnaXN0cnkiLCAibWl4aW5OYW1lc3BhY2VTeW1ib2wiLCAibWl4aW5OYW1lc3BhY2UiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzIiwgIm5hbWVzIiwgInJvb3RzIiwgImFkZFJvb3QiLCAidXBkYXRlQWxsTWl4aW5zIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbCIsICJlbGVtZW50cyIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzIiwgIm5hbWVSZWdpc3RyeUYiLCAia2V5IiwgInJlZ2lzdGVyTWl4aW4iLCAiRE9NTWl4aW4iLCAid0VsZW1lbnQiLCAid1NlbGYiLCAicmVsYXRlZCIsICJoYW5kbGVIaWRkZW4iLCAiXyIsICJ2aXNpYmxlIiwgIiRyZWYiLCAiaXNWaXNpYmxlIiwgImhhbmRsZVByb3BlcnR5IiwgInByb3AiLCAidmFsIiwgImhhbmRsZURhdGFzZXQiLCAiZGF0YXNldFJlZiIsICJkZWxldGVTdHlsZVByb3BlcnR5IiwgImhhbmRsZVN0eWxlQ2hhbmdlIiwgInN0eWxlUmVmIiwgImhhbmRsZUF0dHJpYnV0ZSIsICJqdW5jdGlvblRvQm94IiwgIkpVTkNUSU9OX1NFTEVDVF9FVkVOVFMiLCAiSlVOQ1RJT05fRFJBR19FVkVOVFMiLCAiSlVOQ1RJT05fUkVTSVpFX0VWRU5UUyIsICJtaXhpbkRpc3Bvc2Vyc1N5bWJvbCIsICJtaXhpbkRpc3Bvc2VycyIsICJwdXNoRGlzcG9zYWJsZSIsICJtaXhpbk5hbWUiLCAiZm4iLCAicnVuRGlzcG9zZXJzIiwgInBhcnNlUHhWYXIiLCAicXVlcnlIYW5kbGUiLCAiYXR0ciIsICJmb3VuZCIsICJKdW5jdGlvblNlbGVjdE1peGluIiwgIndFbCIsICJvdmVybGF5IiwgImxvY2FsUG9pbnQiLCAiYXBwbHlPdmVybGF5IiwgIm9uRG93biIsICJvbk1vdmUiLCAiZW5kIiwgIm9uVXAiLCAib25DYW5jZWwiLCAiSnVuY3Rpb25EcmFnTWl4aW4iLCAicHJldmlvdXNUcmFuc2Zvcm0iLCAiaGFuZGxlIiwgImRyYWdnaW5nIiwgInN0YXJ0WCIsICJzdGFydFkiLCAiYmFzZVgiLCAiYmFzZVkiLCAiZHgiLCAiZHkiLCAibngiLCAibnkiLCAiSnVuY3Rpb25SZXNpemVNaXhpbiIsICJyZXNpemluZyIsICJzeCIsICJzeSIsICJzdyIsICJzaCIsICJtaW5XIiwgIm1pbkgiLCAibnciLCAibmgiXQp9Cg==
