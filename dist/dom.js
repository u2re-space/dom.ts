import { $avoidTrigger as R, camelToKebab as je, cvt_cs_to_os as Se, hasValue as B, isArrayOrIterable as Ye, isVal as Xe, isValueUnit as Ue, kebabToCamel as He, normalizeGridLayout as Je, normalizePrimitive as me, resolveLocalPointToGridCell as Ge } from "@fest-lib/core";
import { appear as Qe, decorHide as et, decorShow as tt, disappear as nt, observeStyleTree as rt, setStyleProperty as V } from "@fest-lib/style-lib";
export * from "@fest-lib/style-lib";
var it = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), Ee = globalThis[it] ??= /* @__PURE__ */ new Set();
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
  if (!(!t || Ee.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      Ee.add(t);
    }
});
var Gt = () => {
}, Qt = () => {
  let e = navigator?.userAgentData?.mobile || !1;
  return ((t) => {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
  })(navigator.userAgent || navigator.vendor || globalThis.opera), e;
}, en = () => [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) && globalThis.matchMedia("(pointer: coarse)").matches, ot = () => ({
  didTimeout: !1,
  timeRemaining: () => 0
}), ke = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(ot()), 0), at = (e) => e?.offsetParent ?? e?.host, tn = (e) => {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = at(n);
    if (r && r instanceof HTMLHtmlElement) break;
    (n = r) && t.push(n);
  }
  return t;
}, nn = (e, t = 1e-6) => Math.abs(e.a - 1) < t && Math.abs(e.b) < t && Math.abs(e.c) < t && Math.abs(e.d - 1) < t && Math.abs(e.e) < t && Math.abs(e.f) < t, st = () => {
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
}, rn = (e = st()) => (t) => e.shedule(t), on = typeof document < "u" ? document?.documentElement : null, an = (e, t = {}) => {
  if (!(!t || typeof t != "object" || !e))
    return Array.from(Object.entries(t)).map(([n, r]) => {
      const i = e.getAttribute(n);
      r == null ? e.removeAttribute(n) : r != i && e.setAttribute(n, i == "" ? r ?? i : i ?? r);
    });
}, sn = (e, t = {}) => Array.from(Object.entries(t)).map(([n, r]) => {
  r == null ? e.removeAttribute(n) : e.setAttribute(n, r ?? e.getAttribute(n));
}), ct = /* @__PURE__ */ new Map(), cn = (e, t = 1e3, ...n) => {
  const r = {
    running: !0,
    cancel: () => {
      r.running = !1;
    }
  };
  return ke(async () => {
    if (!(!e || typeof e != "function")) {
      for (; r.running; )
        await Promise.all([Promise.try(e, ...n), new Promise((i) => setTimeout(i, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((i) => ke(i, t)), new Promise((i) => setTimeout(i, t))]);
      r.cancel = () => {
      };
    }
  }, t), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    ct.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Z = /* @__PURE__ */ Symbol("@border-box-width"), K = /* @__PURE__ */ Symbol("@border-box-height"), Y = /* @__PURE__ */ Symbol("@content-box-width"), X = /* @__PURE__ */ Symbol("@content-box-height"), Me = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), un = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Ce.has(e)) {
    e[Y] = e.clientWidth, e[X] = e.clientHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.contentBoxSize) {
        const o = i.contentBoxSize[0];
        o && (e[Y] = Math.min(o.inlineSize, e.clientWidth), e[X] = Math.min(o.blockSize, e.clientHeight), t?.(e));
      }
    });
    Ce.set(e, n), n.observe(e?.element ?? e, { box: "content-box" });
  }
}, ln = (e, t = () => {
}) => {
  if (e instanceof HTMLElement && !Me.has(e)) {
    e[Z] = e.offsetWidth, e[K] = e.offsetHeight;
    const n = new ResizeObserver((r) => {
      for (const i of r) if (i.borderBoxSize) {
        const o = i.borderBoxSize[0];
        o && (e[Z] = Math.min(o.inlineSize, e.offsetWidth), e[K] = Math.min(o.blockSize, e.offsetHeight), t?.(e));
      }
    });
    Me.set(e, n), n.observe(e?.element ?? e, { box: "border-box" });
  }
}, dn = (e, ...t) => URL.createObjectURL(new Blob(t, { type: e })), fn = (e, t = "text/html") => {
  const n = new DOMParser().parseFromString(e, t);
  return n.querySelector("template") ?? n.querySelector("*");
}, hn = (e, t, n) => {
  t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
    bubbles: !0,
    cancelable: !0
  }))));
}, pn = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, mn = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, _ = "(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)", vn = "^(?:" + _ + ")|^#" + _ + "|^\\." + _ + "|^\\[" + _ + `(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`, gn = (e) => {
  if (e == ":fragment:") return document.createDocumentFragment();
  const t = document.createElement.bind(document);
  for (var n = t("div"), r, i = ""; e && (r = e.match(`^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)(["'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]`)); )
    r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
  return i && (n.className = i.slice(1)), n;
}, bn = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, yn = (e, t) => {
  const n = typeof t == "string" ? t.trim() : "";
  if (!n || !e) return e ?? null;
  try {
    return e.querySelector(n) ?? (e.matches(n) ? e : null);
  } catch {
    return null;
  }
}, te = (e, t) => {
  for (; e; ) {
    if (!(e?.element ?? e)) return !1;
    if ((e?.element ?? e) === (t?.element ?? t)) return !0;
    e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
  }
}, Oe = {};
function p(e, t, n, r = Oe) {
  e?.addEventListener?.(t, n, r);
  const i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Te(e, t, n, r = Oe) {
  e?.removeEventListener?.(t, n, r);
}
var wn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? p(e, n, ...r) : p(e, n, r))), xn = (e, t) => {
  if (t) {
    let n = t;
    return t instanceof Map ? n = [...t.entries()] : n = [...Object.entries(t)], n.map(([r, i]) => ((Ye(i) ? [...i] : i) ?? [])?.map?.((o) => p(e, r, o)));
  }
}, Sn = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)].map?.(([n, r]) => Array.isArray(r) ? Te(e, n, ...r) : Te(e, n, r))), En = (e) => {
  if (!e) return null;
  if (e?.composedPath && typeof e.composedPath == "function") {
    const n = e.composedPath();
    for (const r of n) if (r instanceof HTMLElement || r instanceof Element) return r;
  }
  const t = e?.target;
  return t instanceof HTMLElement || t instanceof Element ? t : null;
}, kn = (e, t, n) => {
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
}, ae = (e, t, n) => {
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
}, Mn = (e, t) => !!ae(e, t), Cn = (e, t, n = "parent") => {
  if (!e || e.checkVisibility && !e.checkVisibility({
    checkOpacity: !0,
    checkVisibilityCSS: !0
  }) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
  let r = document.activeElement;
  for (; r && r.shadowRoot && r.shadowRoot.activeElement; ) r = r.shadowRoot.activeElement;
  const i = r === e || te(r, e), o = e.matches(":hover");
  if (!i && !o && !t) return !1;
  if (t) {
    if (typeof t == "string") {
      if (n === "parent") return !!ae(e, t);
      {
        const s = i ? r : e.querySelector(":hover") || e, a = !!ae(s, t);
        return e?.querySelector?.(t) != null || e?.matches?.(t) || a;
      }
    } else if (t instanceof HTMLElement)
      return n === "parent" ? te(e, t) || !1 : te(t, e) || !1;
  }
  return !0;
}, Tn = () => "currentCSSZoom" in document.documentElement ? document.documentElement.currentCSSZoom || 1 : parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1, ut = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), lt = globalThis[ut] ??= /* @__PURE__ */ new WeakMap(), dt = (e = document.documentElement) => lt.getOrInsertComputed(e, () => {
  const t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
  if (t?.zoom) return t?.zoom || 1;
  if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), An = (e = 1) => (document.documentElement.style.setProperty("--scaling", e), document.documentElement.dispatchEvent(new CustomEvent("scaling", {
  detail: { zoom: e },
  bubbles: !0,
  cancelable: !0
})), e), Nn = (e = document.documentElement) => (e?.currentCSSZoom != null ? 1 : dt(e)) || 1, se = (e = document.documentElement) => (e?.currentCSSZoom == null ? 1 : e?.currentCSSZoom) || 1, T = (e = document.documentElement) => {
  const t = (e?.matches?.('[orient], [data-mixin="ui-orientbox"]') ? e : null) || e?.closest?.('[orient], [data-mixin="ui-orientbox"]') || e;
  if (t?.hasAttribute?.("orient")) return parseInt(t?.getAttribute?.("orient") || "0") || 0;
  if (t?.orient != null && Number.isFinite(Number(t.orient))) return Number(t.orient) || 0;
  try {
    const n = t?.style?.getPropertyValue?.("--orient") || (typeof getComputedStyle == "function" && t ? getComputedStyle(t).getPropertyValue("--orient") : "") || "", r = parseInt(String(n).trim(), 10);
    if (Number.isFinite(r)) return r;
  } catch {
  }
  return 0;
}, Ln = (e, t = null) => {
  const n = se(e) || 1, r = e?.getBoundingClientRect?.(), i = {
    left: r?.left / n,
    right: r?.right / n,
    top: r?.top / n,
    bottom: r?.bottom / n,
    width: r?.width / n,
    height: r?.height / n
  }, o = t ?? (T(e) || 0), s = typeof window < "u" ? window.visualViewport : null, a = [((s?.width ?? document.documentElement?.clientWidth ?? window.innerWidth) || 1) / n, ((s?.height ?? document.documentElement?.clientHeight ?? window.innerHeight) || 1) / n], [d, h] = Se([i.left, i.top], a, o), [l, v] = Se([i.right, i.bottom], a, o), [f, u] = o == 0 || o == 3 ? [d, l] : [l, d], [c, m] = o == 0 || o == 1 ? [h, v] : [v, h], [y, Ke] = o % 2 ? [i.height, i.width] : [i.width, i.height];
  return {
    left: f,
    top: c,
    right: u,
    bottom: m,
    width: y,
    height: Ke
  };
}, Vn = (e, t = null) => (t ?? T(e)) % 2 ? e[K] ?? e?.clientHeight : e[Z] ?? e?.clientWidth, zn = (e, t = null) => (t ?? T(e)) % 2 ? e[Z] ?? e?.clientWidth : e[K] ?? e?.clientHeight, Pn = (e, t = null) => (t ?? T(e)) % 2 ? e[X] ?? e?.clientHeight : e[Y] ?? e?.clientWidth, jn = (e, t = null) => (t ?? T(e)) % 2 ? e[Y] ?? e?.clientWidth : e[X] ?? e?.clientHeight, ft = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
  didTimeout: !1,
  timeRemaining: () => 0
}), 0), w = 80, ve = 0, Ae = !1, Ne = !1, Le = !1, ht = () => {
  try {
    if (typeof document < "u" && document.documentElement.dataset.cwspNativeShell === "capacitor") return !0;
    const e = globalThis.Capacitor;
    return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
  } catch {
    return !1;
  }
}, We = () => {
  try {
    return globalThis.navigator?.virtualKeyboard ?? null;
  } catch {
    return null;
  }
}, F = "interactive-widget=overlays-content", $ = "viewport-fit=cover", pt = () => {
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
}, H = () => {
  pt();
  const e = We();
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
}, Ve = "", S = 0, b = 0, D = 0, ze = (e, t, n = 0, r = 0) => {
  const i = Math.max(0, Number(e) || 0), o = Math.max(0, Number(t) || 0), s = Number(n) || 0, a = Number(r) || 0;
  return {
    left: s,
    top: a,
    right: s + i,
    bottom: a + o,
    width: i,
    height: o
  };
}, Hn = () => {
  if (typeof window > "u") return ze(0, 0);
  const e = typeof document < "u" ? document.documentElement : null;
  return ze(Number(e?.clientWidth) || Number(window.innerWidth) || 0, Number(e?.clientHeight) || Number(window.innerHeight) || 0);
}, ge = () => {
  if (typeof window > "u") return {
    width: 0,
    height: 0,
    keyboard: 0
  };
  const e = window.visualViewport, t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e?.width) || 0, i = Number(e?.height) || 0, o = Number(e?.offsetTop) || 0, s = Number(We()?.boundingBox?.height) || 0, a = n > 0 && i > 0 ? n - i - o : 0, d = ve, h = ht();
  let l = d >= w ? d : !h && s >= w ? s : !h && a >= w ? a : 0;
  const v = Math.max(t, r), f = Math.max(n, i + o, l > 0 ? i + l : 0), u = typeof matchMedia < "u" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
  u !== Ve && (Ve = u, S = 0, b = 0);
  const c = !h && b > 0 && b - f >= w;
  if (l < w && c) {
    const y = Math.max(0, b - f, b - (i + o));
    y >= w && (l = y);
  }
  const m = !Q();
  return m && D >= w ? l = D : l >= w ? D = l : C(document.activeElement) || (D = 0), l > 0 || C(document.activeElement) || c || m ? (S = Math.max(v, S), b = Math.max(f, b)) : (S = v, b = f), {
    width: S || v,
    height: b || f,
    keyboard: l
  };
}, be = (e) => {
  const t = e.tagName;
  if (t === "HTML" || t === "BODY") return !0;
  const n = e.classList;
  return n.contains("app-shell") || n.contains("app-shell__viewport") || n.contains("app-shell__nav") || n.contains("env-shell-root") || n.contains("env-shell-workspace") || n.contains("env-shell-chrome") || n.contains("env-ui-window") || n.contains("env-ui-window__body") || n.contains("wf-frame") || n.contains("ui-window") || n.contains("view-viewer") || n.contains("view-viewer__toolbar") || n.contains("view-viewer__chrome") || n.contains("view-viewer__content") || n.contains("cw-view-viewer-shell") || n.contains("cw-markdown-view-frame");
}, Re = (e) => {
  if (!e) return null;
  if (e.parentElement) return e.parentElement;
  const t = e.getRootNode();
  return t instanceof ShadowRoot ? t.host : null;
}, mt = (e) => {
  if (be(e)) return !1;
  const t = getComputedStyle(e), n = t.overflowY || t.overflowBlock;
  return n !== "auto" && n !== "scroll" ? !1 : e.scrollHeight > e.clientHeight + 1;
}, Be = (e) => {
  let t = e;
  for (; t; ) {
    if (t instanceof HTMLElement && mt(t)) return t;
    t = Re(t);
  }
  return null;
}, vt = () => {
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
}, gt = () => {
  if (!C(document.activeElement) || !Q()) return;
  const e = ge().keyboard, t = window.visualViewport, n = (Number(t?.height) || Number(window.innerHeight) || 0) - Math.max(8, e ? 12 : 0);
  if (n <= 0) return;
  const r = vt();
  if (!r) return;
  const i = r.bottom - n;
  if (i <= 1) return;
  const o = Be(document.activeElement);
  o && (o.scrollTop += i);
}, bt = () => {
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
}, ne = !1, yt = (e) => {
  const t = Be(e);
  let n = e;
  for (; n; )
    n instanceof HTMLElement && n !== t && (be(n) || n.scrollTop || n.scrollLeft) && n !== t && (n.scrollTop = 0, n.scrollLeft = 0), n = Re(n);
}, z = () => {
  if (!(typeof window > "u" || ne) && (ge().keyboard > 0 || C(document.activeElement))) {
    ne = !0;
    try {
      bt(), (window.scrollX || window.scrollY) && window.scrollTo(0, 0);
      const e = document.documentElement, t = document.body;
      (e.scrollTop || e.scrollLeft) && e.scrollTo(0, 0), t && (t.scrollTop || t.scrollLeft) && t.scrollTo(0, 0), Q() || yt(document.activeElement);
    } finally {
      ne = !1;
    }
  }
}, Pe = !1, wt = () => {
  if (Pe || typeof Element > "u") return;
  Pe = !0;
  const e = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(t) {
    if (!(C(document.activeElement) && !Q()) && !(this instanceof HTMLElement && be(this)))
      return e.call(this, t);
  };
}, ce = (e) => {
  z(), e?.caret && requestAnimationFrame(() => {
    z(), gt();
  });
}, Ie = () => {
  H();
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = ge(), r = {
    "--vv-width": `${t?.width ?? (typeof window < "u" ? window.innerWidth : 0)}px`,
    "--vv-height": `${t?.height ?? (typeof window < "u" ? window.innerHeight : 0)}px`,
    "--vv-offset-left": `${t?.offsetLeft ?? 0}px`,
    "--vv-offset-top": `${t?.offsetTop ?? 0}px`,
    "--vv-scale": String(t?.scale ?? 1),
    "--lv-width": `${n.width}px`,
    "--lv-height": `${n.height}px`,
    "--keyboard-overlay-height": `${n.keyboard}px`,
    "--virtual-keyboard-height": `${n.keyboard}px`
  };
  if (typeof document < "u" && document.documentElement.removeAttribute("data-vk-open"), typeof screen < "u") {
    const i = screen?.availWidth + "px", o = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? o : i,
      "--avail-height": e ? i : o,
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
}, ue = Ie(), On = [[":root, :host, :scope", ue]], xt = {
  "portrait-primary": 0,
  "landscape-primary": 1,
  "portrait-secondary": 2,
  "landscape-secondary": 3
}, ye = (e) => {
  const t = document.documentElement;
  Object.assign(ue, Ie()), Object.entries(ue).forEach(([n, r]) => {
    const i = t?.style?.getPropertyValue(n);
    (!i || i != r) && t?.style?.setProperty?.(n, r || "", "");
  }), document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}, St = () => {
  let e = screen?.orientation?.type || "portrait-primary";
  return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
}, A = { passive: !0 }, le = (e) => {
  const t = Number(e) || 0;
  t > 0 && (ve = t), ye(), ce({ caret: !0 });
}, U = () => {
  ve = 0, ye();
}, Et = () => {
  if (Ne || typeof window > "u") return;
  Ne = !0;
  const e = (t) => {
    const n = t, r = n.detail, i = typeof r == "string" ? (() => {
      try {
        return JSON.parse(r)?.keyboardHeight;
      } catch {
        return 0;
      }
    })() : r?.keyboardHeight;
    le(n.keyboardHeight ?? i);
  };
  window.addEventListener("keyboardWillShow", e), window.addEventListener("keyboardDidShow", e), window.addEventListener("keyboardWillHide", U), window.addEventListener("keyboardDidHide", U);
}, de = () => {
  if (Et(), Ae || typeof globalThis > "u") return;
  const e = globalThis.Capacitor, t = e?.Plugins?.Keyboard;
  if (t?.addListener && !(typeof e.isNativePlatform == "function" && !e.isNativePlatform())) {
    Ae = !0;
    try {
      t.setScroll?.({ isDisabled: !0 });
    } catch {
    }
    try {
      t.setResizeMode?.({ mode: "none" });
    } catch {
    }
    t.addListener("keyboardWillShow", (n) => le(n?.keyboardHeight)), t.addListener("keyboardDidShow", (n) => le(n?.keyboardHeight)), t.addListener("keyboardWillHide", U), t.addListener("keyboardDidHide", U);
  }
}, Wn = () => {
  Le || typeof window > "u" || (Le = !0, de(), _e(() => {
  }));
}, _e = (e) => {
  let t = !1;
  const n = () => {
    t || (requestAnimationFrame(() => {
      ye(), e(), t = !1;
    }), t = !0);
  }, r = [];
  return de(), wt(), r.push(p(navigator?.virtualKeyboard, "geometrychange", n, A)), r.push(p(document, "selectionchange", () => {
    z();
  }, A)), r.push(p(window?.visualViewport, "scroll", () => {
    z(), n();
  }, A)), r.push(p(window, "scroll", () => {
    z();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(window?.visualViewport, "resize", () => {
    ce({ caret: !0 }), n();
  }, A)), r.push(p(screen?.orientation, "change", n)), r.push(p(window, "resize", n)), r.push(p(document?.documentElement, "fullscreenchange", n)), r.push(p(document, "DOMContentLoaded", n)), r.push(p(matchMedia("(orientation: portrait)"), "change", n)), r.push(p(matchMedia("(orientation: landscape)"), "change", n)), r.push(p(document, "focusin", () => {
    de(), H(), C(document.activeElement) && (S = Math.max(S, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0), b = Math.max(b, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0)), ce({ caret: !0 }), n();
  }, {
    capture: !0,
    passive: !0
  })), r.push(p(document, "focusout", n, A)), H(), n(), ft(() => n(), 100), () => r.forEach((i) => i());
}, Rn = (e) => {
  if (!e?.classList?.contains?.("native-portrait-optimized"))
    return e?.classList?.add?.("native-portrait-optimized"), _e(() => {
      const t = xt?.[St()] ?? 0;
      e.orient = t, e.setAttribute?.("orient", String(t)), e.style?.setProperty?.("--orient", String(t));
    });
};
typeof document < "u" && (H(), document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => H(), { once: !0 }));
var M = new OffscreenCanvas(1, 1).getContext("2d"), Fe = (e, t) => {
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
}, kt = (e, t) => {
  if (M) {
    Fe(t, M);
    try {
      return M.measureText(e);
    } catch {
    }
  }
  return { width: null };
}, Bn = (e) => {
  const t = e.value.slice(0, e.selectionEnd || 0);
  return kt(t, e);
}, Mt = (e, t) => {
  const n = e?.value || "";
  if (M) {
    Fe(e, M);
    let r = 0;
    for (let i = 0; i < n.length; i++) {
      if (r = M.measureText(n.slice(0, i))?.width, r == null) return n.length;
      if (r != null && r >= t[0]) return Math.max(i - 1, 0);
    }
  }
  return n.length;
}, In = (e, t) => {
  const n = e.getBoundingClientRect(), r = [t[0] - n.left / se(), t[1] - n.top / se()];
  return Mt(e, r);
}, Ct = (e, t) => {
  const n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = Je(t ?? [4, 8]);
  return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, _n = (e, t, n, r = "floor") => {
  if (!e) return [0, 0];
  const i = e.getBoundingClientRect?.();
  if (!i) return [0, 0];
  const o = Ct(e, n?.layout), s = T(e), a = globalThis.getComputedStyle?.(e), d = parseFloat(a?.paddingLeft) || 0, h = parseFloat(a?.paddingTop) || 0, l = parseFloat(a?.paddingRight) || 0, v = parseFloat(a?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - d - l), u = Math.max(1, (i.height || e.clientHeight || 1) - h - v), c = [(t?.[0] || 0) - i.left - d, (t?.[1] || 0) - i.top - h];
  return Ge(c, [f, u], o, s, {
    mode: r,
    redirect: {
      item: n?.item,
      list: n?.list,
      items: n?.items
    }
  });
}, Fn = (e) => Qe(e, tt), $n = (e) => nt(e, et), Dn = (e = 100, t = 0.05, n = 8) => {
  const r = [];
  for (let a = 0; a < e; a++) r.push(a / e);
  const i = (a) => `calc(${a}rad * pi * 2)`, o = (a) => `calc(calc(cos(calc(var(--clip-freq, 8) * ${i(a)})) * 0.5 + 0.5) * var(--clip-amplitude, 0))`, s = (a) => [`calc(calc(0.5 + calc(cos(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`, `calc(calc(0.5 + calc(sin(${i(a)}) * calc(0.5 - ${o(a)}))) * var(--icon-size, 100%))`];
  return {
    "--clip-amplitude": t,
    "--clip-freq": n,
    "--clip-path": `polygon(${r.map((a) => s(a).join(" ")).join(", ")})`
  };
}, Tt = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), N = globalThis[Tt] ??= /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), L = globalThis[At] ??= /* @__PURE__ */ new WeakMap(), I = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ee = (e, t = "*") => typeof e != "string" ? t : e.trim() || t, P = (e, t) => {
  if (!e || typeof e.querySelectorAll != "function") return [];
  const n = ee(t, "");
  if (!n) return [];
  try {
    return Array.from(e.querySelectorAll(n) || []);
  } catch {
    return [];
  }
}, fe = (e, t) => {
  if (!e || typeof e.matches != "function") return !1;
  const n = ee(t, "");
  if (!n) return !1;
  try {
    return !!e.matches(n);
  } catch {
    return !1;
  }
}, qn = (e, t) => {
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
}, Zn = (e, t) => {
  if (!N.has(e = I(e))) {
    const n = [], r = new ResizeObserver((i) => {
      for (const o of i) if (o.borderBoxSize) {
        const s = o.borderBoxSize[0];
        s && n.forEach((a) => a?.(s, r));
      }
    });
    t?.({
      inlineSize: e.offsetWidth,
      blockSize: e.offsetHeight
    }, r), N.set(e, n), (e?.element ?? e) instanceof Node && r.observe(e?.element ?? e, { box: "border-box" });
  }
  return N.get(e)?.push?.(t), { disconnect: () => N.get(e)?.splice?.(N.get(e)?.indexOf(t) || -1, 1) };
}, Kn = (e, t, n) => {
  if (typeof e?.selector == "string") return $e(e, e?.selector, t, n);
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
}, $e = (e, t, n, r) => {
  const i = ee(t), o = new Set([...n.split(",") || [n]].map((a) => a.trim())), s = new MutationObserver((a, d) => {
    for (const h of a) if (h.type == "childList") {
      const l = Array.from(h.addedNodes) || [], v = Array.from(h.removedNodes) || [];
      l.push(...Array.from(h.addedNodes || []).flatMap((f) => P(f, i))), v.push(...Array.from(h.removedNodes || []).flatMap((f) => P(f, i))), [...new Set(l)].filter((f) => fe(f, i))?.map?.((f) => {
        o.forEach((u) => {
          r({
            target: f,
            type: "attributes",
            attributeName: u,
            oldValue: f?.getAttribute?.(u)
          }, d);
        });
      });
    } else fe(h.target, i) && h.attributeName && o.has(h.attributeName) && r(h, d);
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
}, Nt = (e, t = "*", n = (r, i) => {
}) => {
  const r = ee(t), i = (u) => {
    const c = Array.from(u || []) || [];
    return c.push(...Array.from(u || []).flatMap((m) => P(m, r))), [...Array.from(new Set(c).values())].filter((m) => fe(m, r));
  };
  let o = null;
  const s = (u) => {
    const c = o?.deref?.(), m = i(u.addedNodes), y = i(u.removedNodes);
    (m.length > 0 || y.length > 0) && n?.({
      type: u.type,
      target: u.target,
      attributeName: u.attributeName,
      attributeNamespace: u.attributeNamespace,
      nextSibling: u.nextSibling,
      oldValue: u.oldValue,
      previousSibling: u.previousSibling,
      addedNodes: m,
      removedNodes: y
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
}, De = /* @__PURE__ */ new WeakMap(), Lt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Yn = (e, t) => {
  if (e) {
    if (t) {
      const n = De.getOrInsert(e, /* @__PURE__ */ new Set());
      [...t?.values?.() || []].map((r) => Lt(e, n, r));
    }
    return e;
  }
}, Vt = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), O = globalThis[Vt] ??= /* @__PURE__ */ new Map(), zt = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([r, i]) => [r, i?.get?.(t)])?.filter?.(([r, i]) => !!i) || []);
}, Pt = (e) => (typeof e == "object" || typeof e == "function") && e != null, jt = (e, t, n) => {
  if (!Pt(e) && e != null) return e;
  let r = O.get(t);
  return r || (r = /* @__PURE__ */ new WeakMap(), O.set(t, r)), !r.has(e) && e != null && r.set(e, n), e;
}, Xn = (e, t) => {
  if (!(!e || !t)) {
    for (const [n, r] of t.entries()) jt(e, n, r);
    return e;
  }
}, Un = (e, t) => {
  if (e) {
    if (t) {
      const n = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
      x?.has?.(e) || x?.set?.(e, n), [...t?.values?.() || []].map((r) => Ht(e, r, n));
    }
    return e;
  }
}, j = (e) => ({
  storeSet: zt(O, e),
  mixinSet: x?.get?.(e),
  behaviorSet: De?.get?.(e)
}), Ht = (e, t, n) => {
  const r = new WeakRef(e);
  return n ||= x?.get?.(e), n?.has?.(t) || (n?.add?.(t), k?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((i) => !!i).join(" ")), t?.connect?.(r, t, j(e))), e;
}, Ot = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), x = globalThis[Ot] ??= /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), k = globalThis[Wt] ??= /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), W = globalThis[Rt] ??= /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), J = globalThis[Bt] ??= /* @__PURE__ */ new WeakMap(), qe = (e, t) => {
  typeof t == "string" && (t = W?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((s) => W?.get?.(s)).filter((s) => !!s)), i = x?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  k?.has?.(t) || k?.set?.(t, /* @__PURE__ */ new WeakSet()), x?.has?.(e) || x?.set?.(e, i);
  const o = new WeakRef(e);
  i?.has?.(t) || (r.has(t) || t?.disconnect?.(o, t, j(e)), (r.has(t) || !k?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, j(e)), n.add(J?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((s) => !!s).join(" "))), k?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(o, t, j(e))));
}, he = /* @__PURE__ */ new Set(), It = (e = typeof document < "u" ? document : null) => {
  if (e)
    return he?.has?.(e) || (he?.add?.(e), $e(e, "*", "data-mixin", (t) => pe(t.target)), Nt(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && pe(n);
    }), rt(e)), e;
}, pe = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => W?.get?.(n)).filter((n) => !!n))].map?.((n) => qe(e, n));
}, _t = (e, t) => {
  e.forEach((n) => t ? qe(n, t) : pe(n));
}, Ft = (e) => {
  for (const t of he) _t(t?.querySelectorAll?.("[data-mixin]"), e);
}, $t = new FinalizationRegistry((e) => {
  W?.delete?.(e);
}), Dt = (e, t) => {
  if (!J?.has?.(t)) {
    const n = e?.trim?.();
    n && (J?.set?.(t, n), W?.set?.(n, t), $t?.register?.(t, n), Ft(t));
  }
};
It(typeof document < "u" ? document : null);
var we = class {
  constructor(e = null) {
    e && Dt(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return O.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return j(e);
  }
  get elements() {
    return k?.get?.(this);
  }
  get storage() {
    return O?.get?.(this.name || "");
  }
  get name() {
    return J?.get?.(this);
  }
}, Jn = (e, t, n) => {
  const r = n;
  B(n) && (n = n.value);
  const i = (n = me(n)) != null && n !== !1;
  return R(r, () => {
    e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
  }), e;
}, Gn = (e, t, n) => {
  if (!(t = typeof t == "string" ? He(t) : t) || !e || [
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
}, Qn = (e, t, n) => {
  const r = e?.dataset;
  if (!t || !e || !r) return e;
  const i = n;
  return B(n) && (n = n?.value), t = He(t), r?.[t] === (n = me(n)) || (n == null || n === !1 ? delete r[t] : R(i, () => {
    typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
  })), e;
}, qt = (e, t) => e.style.removeProperty(je(t)), er = (e, t, n) => {
  const r = e?.style;
  return !t || typeof t != "string" || !e || !r || R(n, () => {
    Xe(n) || B(n) || Ue(n) ? V(e, t, n) : n == null && qt(e, t);
  }), e;
}, tr = (e, t, n) => {
  if (!t || !e) return e;
  const r = n;
  return B(n) && (n = n.value), t = je(t), e?.getAttribute?.(t) === (n = me(n)) || R(r, () => {
    typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == !0) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
  }), e;
};
function re(e, t) {
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
}, ie = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, oe = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Zt = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), G = globalThis[Zt] ??= /* @__PURE__ */ new WeakMap(), g = (e, t, n) => {
  const r = G.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
  i.push(n), r.set(t, i), G.set(e, r);
}, xe = (e, t) => {
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
}, Ze = (e, t, n) => {
  const r = e.getAttribute(t)?.trim();
  if (!r) return n;
  const i = e.querySelector(r);
  return i instanceof HTMLElement ? i : n;
}, Kt = class extends we {
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
      const c = re(o, s);
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
      const m = re(o, s);
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
      const m = re(o, s);
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
    return g(t, "ui-junction-select", () => {
      n.remove();
    }), g(t, "ui-junction-select", p(t, "pointerdown", h)), g(t, "ui-junction-select", p(t, "pointermove", l)), g(t, "ui-junction-select", p(t, "pointerup", f)), g(t, "ui-junction-select", p(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-select"), this;
  }
}, Yt = class extends we {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    V(t, "--jx-drag-x", E(t, "--jx-drag-x")), V(t, "--jx-drag-y", E(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const r = Ze(t, "data-junction-drag-handle", t);
    let i = !1, o = 0, s = 0, a = 0, d = 0;
    const h = (f) => {
      f.button === 0 && (f.target !== r && !r.contains(f.target) || (i = !0, o = f.clientX, s = f.clientY, a = E(t, "--jx-drag-x"), d = E(t, "--jx-drag-y"), r.setPointerCapture(f.pointerId), t.dispatchEvent(new CustomEvent(ie.start, {
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
      const u = f.clientX - o, c = f.clientY - s, m = a + u, y = d + c;
      V(t, "--jx-drag-x", m), V(t, "--jx-drag-y", y), t.dispatchEvent(new CustomEvent(ie.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
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
        t.dispatchEvent(new CustomEvent(ie.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: E(t, "--jx-drag-x"),
            y: E(t, "--jx-drag-y")
          }
        }));
      }
    };
    return g(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), g(t, "ui-junction-drag", p(r, "pointerdown", h)), g(t, "ui-junction-drag", p(r, "pointermove", l)), g(t, "ui-junction-drag", p(r, "pointerup", v)), g(t, "ui-junction-drag", p(r, "pointercancel", v)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-drag"), this;
  }
}, Xt = class extends we {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = Ze(t, "data-junction-resize-handle", t);
    let r = !1, i = 0, o = 0, s = 0, a = 0;
    const d = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), h = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), l = (u) => {
      u.button === 0 && (u.target !== n && !n.contains(u.target) || (r = !0, i = u.clientX, o = u.clientY, s = t.offsetWidth, a = t.offsetHeight, n.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(oe.start, {
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
      t.style.width = `${c}px`, t.style.height = `${m}px`, t.dispatchEvent(new CustomEvent(oe.move, {
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
        t.dispatchEvent(new CustomEvent(oe.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return g(t, "ui-junction-resize", p(n, "pointerdown", l)), g(t, "ui-junction-resize", p(n, "pointermove", v)), g(t, "ui-junction-resize", p(n, "pointerup", f)), g(t, "ui-junction-resize", p(n, "pointercancel", f)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && xe(t, "ui-junction-resize"), this;
  }
};
new Kt();
new Yt();
new Xt();
export {
  we as DOMMixin,
  Yt as JunctionDragMixin,
  Xt as JunctionResizeMixin,
  Kt as JunctionSelectMixin,
  _ as MATCH,
  Mn as MOC,
  ae as MOCElement,
  rn as RAFBehavior,
  vn as REGEX,
  on as ROOT,
  Dn as WavyShapedCircle,
  Gt as __exportProperties,
  Ee as __registeredCssProperties,
  p as addEvent,
  wn as addEvents,
  xn as addEventsList,
  It as addRoot,
  $n as animateHide,
  Fn as animateShow,
  ue as availSize,
  zn as bbh,
  Vn as bbw,
  Lt as bindBehavior,
  Ht as bindMixins,
  jt as bindStore,
  K as borderBoxHeight,
  Z as borderBoxWidth,
  De as boundBehaviors,
  x as boundMixinSet,
  jn as cbh,
  Pn as cbw,
  An as changeZoom,
  On as classes,
  Mt as computeCaretPosition,
  In as computeCaretPositionFromClient,
  kn as containsOrSelf,
  X as contentBoxHeight,
  Y as contentBoxWidth,
  gn as createElementVanilla,
  ze as createFixedOverlayViewport,
  qt as deleteStyleProperty,
  en as detectMobile,
  ln as doBorderObserve,
  un as doContentObserve,
  pt as ensureViewportInteractiveWidgetOverlay,
  Wn as ensureViewportTracking,
  H as ensureVirtualKeyboardOverlay,
  Rn as fixOrientToScreen,
  Nn as fixedClientZoom,
  Ie as getAvailSize,
  Ln as getBoundingOrientRect,
  St as getCorrectOrientation,
  j as getElementRelated,
  En as getEventTarget,
  at as getOffsetParent,
  tn as getOffsetParentChain,
  zt as getStoresOfElement,
  Tn as getZoom,
  tr as handleAttribute,
  Qn as handleDataset,
  Jn as handleHidden,
  Gn as handleProperty,
  er as handleStyleChange,
  te as hasParent,
  fn as html,
  yn as includeSelf,
  mn as indexOf,
  Fe as initTextStyle,
  bn as isElement,
  Cn as isInFocus,
  Qt as isMobile,
  nn as isNearlyIdentity,
  pn as isValidParent,
  st as makeRAFCycle,
  Bn as measureInputInFocus,
  kt as measureText,
  G as mixinDisposers,
  k as mixinElements,
  J as mixinNamespace,
  W as mixinRegistry,
  $t as nameRegistryF,
  O as namedStoreMaps,
  Kn as observeAttribute,
  $e as observeAttributeBySelector,
  Zn as observeBorderBox,
  Nt as observeBySelector,
  qn as observeContentBox,
  Me as onBorderObserve,
  Ce as onContentObserve,
  T as orientOf,
  xt as orientationNumberMap,
  Oe as passiveOpts,
  Hn as readFixedOverlayViewport,
  Ct as readLauncherLayoutFromElement,
  Yn as reflectBehaviors,
  Un as reflectMixins,
  Xn as reflectStores,
  Dt as registerMixin,
  Te as removeEvent,
  Sn as removeEvents,
  _n as resolveGridCellFromClientPoint,
  he as roots,
  sn as setAttributes,
  an as setAttributesIfNull,
  hn as setChecked,
  cn as setIdleInterval,
  ct as throttleMap,
  se as unfixedClientZoom,
  pe as updateAllMixins,
  qe as updateMixinAttributes,
  _t as updateMixinAttributesAll,
  Ft as updateMixinAttributesAllInRoots,
  ye as updateVP,
  dn as url,
  _e as whenAnyScreenChanges,
  dt as zoomOf,
  lt as zoomValues
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyAkYXZvaWRUcmlnZ2VyLCBjYW1lbFRvS2ViYWIsIGN2dF9jc190b19vcywgaGFzVmFsdWUsIGlzQXJyYXlPckl0ZXJhYmxlLCBpc1ZhbCwgaXNWYWx1ZVVuaXQsIGtlYmFiVG9DYW1lbCwgbm9ybWFsaXplR3JpZExheW91dCwgbm9ybWFsaXplUHJpbWl0aXZlLCByZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwgfSBmcm9tIFwiQGZlc3QtbGliL2NvcmVcIjtcbmltcG9ydCB7IGFwcGVhciwgZGVjb3JIaWRlLCBkZWNvclNob3csIGRpc2FwcGVhciwgb2JzZXJ2ZVN0eWxlVHJlZSwgc2V0U3R5bGVQcm9wZXJ0eSB9IGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCI7XG5cbmV4cG9ydCAqIGZyb20gXCJAZmVzdC1saWIvc3R5bGUtbGliXCJcblxuLy8jcmVnaW9uIHNyYy9hZ2F0ZS9Qcm9wZXJ0aWVzLnRzXG52YXIgX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAX19yZWdpc3RlcmVkQ3NzUHJvcGVydGllc1wiKTtcbnZhciBfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzID0gZ2xvYmFsVGhpc1tfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbltcblx0e1xuXHRcdG5hbWU6IFwiLS1zY3JlZW4td2lkdGhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNjcmVlbi1oZWlnaHRcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aC1wZXJjZW50YWdlPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXZpc3VhbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tdmlzdWFsLWhlaWdodFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY2xpcC1hbXBsXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNsaXAtZnJlcVwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1hdmFpbC13aWR0aFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tYXZhaWwtaGVpZ2h0XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGgtcGVyY2VudGFnZT5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1waXhlbC1yYXRpb1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIxXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50XCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IHRydWUsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXBlcmNlbnQteFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1wZXJjZW50LXlcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLWxlZnRcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogdHJ1ZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tc2Nyb2xsLXRvcFwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiB0cnVlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1kcmFnLXhcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZHJhZy15XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteFwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1yZXNpemUteVwiLFxuXHRcdHN5bnRheDogXCI8bGVuZ3RoPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMHB4XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1zaGlmdC14XCIsXG5cdFx0c3ludGF4OiBcIjxsZW5ndGg+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwcHhcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXNoaWZ0LXlcIixcblx0XHRzeW50YXg6IFwiPGxlbmd0aD5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBweFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tY3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLWNzLXAtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jcy1wLWdyaWQtY1wiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tb3MtZ3JpZC1yXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1vcy1ncmlkLWNcIixcblx0XHRzeW50YXg6IFwiPG51bWJlcj5cIixcblx0XHRpbmhlcml0czogZmFsc2UsXG5cdFx0aW5pdGlhbFZhbHVlOiBcIjBcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCItLXJ2LWdyaWQtclwiLFxuXHRcdHN5bnRheDogXCI8bnVtYmVyPlwiLFxuXHRcdGluaGVyaXRzOiBmYWxzZSxcblx0XHRpbml0aWFsVmFsdWU6IFwiMFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIi0tcnYtZ3JpZC1jXCIsXG5cdFx0c3ludGF4OiBcIjxudW1iZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXhcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiLS1jZWxsLXlcIixcblx0XHRzeW50YXg6IFwiPGludGVnZXI+XCIsXG5cdFx0aW5oZXJpdHM6IGZhbHNlLFxuXHRcdGluaXRpYWxWYWx1ZTogXCIwXCJcblx0fVxuXS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG5cdGlmICh0eXBlb2YgQ1NTID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIENTUz8ucmVnaXN0ZXJQcm9wZXJ0eSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcblx0Y29uc3QgbmFtZSA9IFN0cmluZyhvcHRpb25zPy5uYW1lIHx8IFwiXCIpLnRyaW0oKTtcblx0aWYgKCFuYW1lIHx8IF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuaGFzKG5hbWUpKSByZXR1cm47XG5cdHRyeSB7XG5cdFx0Q1NTLnJlZ2lzdGVyUHJvcGVydHkob3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAoIShTdHJpbmcoZT8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImludmFsaWRtb2RpZmljYXRpb25lcnJvclwiKSkgY29uc29sZS53YXJuKGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMuYWRkKG5hbWUpO1xuXHR9XG59KTtcbnZhciBfX2V4cG9ydFByb3BlcnRpZXMgPSAoKSA9PiB7fTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL0RldGVjdC50c1xudmFyIGlzTW9iaWxlID0gKCkgPT4ge1xuXHRsZXQgY2hlY2sgPSBuYXZpZ2F0b3I/LnVzZXJBZ2VudERhdGE/Lm1vYmlsZSB8fCBmYWxzZTtcblx0KChhKSA9PiB7XG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSBjaGVjayA9IHRydWU7XG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCBnbG9iYWxUaGlzLm9wZXJhKTtcblx0cmV0dXJuIGNoZWNrO1xufTtcbnZhciBkZXRlY3RNb2JpbGUgPSAoKSA9PiB7XG5cdHJldHVybiBbXG5cdFx0L0FuZHJvaWQvaSxcblx0XHQvd2ViT1MvaSxcblx0XHQvaVBob25lL2ksXG5cdFx0L2lQYWQvaSxcblx0XHQvaVBvZC9pLFxuXHRcdC9CbGFja0JlcnJ5L2ksXG5cdFx0L1dpbmRvd3MgUGhvbmUvaVxuXHRdLnNvbWUobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaC5iaW5kKG5hdmlnYXRvci51c2VyQWdlbnQpKSAmJiAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXCIocG9pbnRlcjogY29hcnNlKVwiKS5tYXRjaGVzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1V0aWxzLnRzXG52YXIgY3JlYXRlSWRsZURlYWRsaW5lRmFsbGJhY2sgPSAoKSA9PiAoe1xuXHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0dGltZVJlbWFpbmluZzogKCkgPT4gMFxufSk7XG52YXIgcnVuV2hlbklkbGUkMSA9IChjYiwgdGltZW91dCA9IDFlMykgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKGNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrKCkpLCAwKTtcbn07XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIGVsZW1lbnQ/Lm9mZnNldFBhcmVudCA/PyBlbGVtZW50Py5ob3N0O1xufTtcbnZhciBnZXRPZmZzZXRQYXJlbnRDaGFpbiA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IHBhcmVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuXHR3aGlsZSAoY3VycmVudCkge1xuXHRcdGNvbnN0IHBhcmVudCA9IGdldE9mZnNldFBhcmVudChjdXJyZW50KTtcblx0XHRpZiAocGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCkgYnJlYWs7XG5cdFx0aWYgKGN1cnJlbnQgPSBwYXJlbnQpIHBhcmVudHMucHVzaChjdXJyZW50KTtcblx0fVxuXHRyZXR1cm4gcGFyZW50cztcbn07XG52YXIgaXNOZWFybHlJZGVudGl0eSA9IChtYXRyaXgsIGVwc2lsb24gPSAxZS02KSA9PiB7XG5cdHJldHVybiBNYXRoLmFicyhtYXRyaXguYSAtIDEpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguYikgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1hdHJpeC5jKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmQgLSAxKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobWF0cml4LmUpIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtYXRyaXguZikgPCBlcHNpbG9uO1xufTtcbnZhciBtYWtlUkFGQ3ljbGUgPSAoKSA9PiB7XG5cdGNvbnN0IGNvbnRyb2wgPSB7XG5cdFx0Y2FuY2VsZWQ6IGZhbHNlLFxuXHRcdHJBRnM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0bGFzdDogbnVsbCxcblx0XHRjYW5jZWwoKSB7XG5cdFx0XHR0aGlzLmNhbmNlbGVkID0gdHJ1ZTtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdHNoZWR1bGUoY2IpIHtcblx0XHRcdHRoaXMuckFGcy5hZGQoY2IpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHR9O1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHdoaWxlICghY29udHJvbD8uY2FuY2VsZWQpIHtcblx0XHRcdGF3YWl0IFByb21pc2UuYWxsKChjb250cm9sPy5yQUZzPy52YWx1ZXM/LigpID8/IFtdKT8ubWFwPy4oKHJBRikgPT4gUHJvbWlzZS50cnkockFGKT8uY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSkpKTtcblx0XHRcdGNvbnRyb2wuckFGcz8uY2xlYXI/LigpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT0gXCJ1bmRlZmluZWRcIikgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb250cm9sLmxhc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdFx0ZWxzZSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQocmVzLCAxNik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pKCk7XG5cdHJldHVybiBjb250cm9sO1xufTtcbnZhciBSQUZCZWhhdmlvciA9IChzaGVkID0gbWFrZVJBRkN5Y2xlKCkpID0+IHtcblx0cmV0dXJuIChjYikgPT4gc2hlZC5zaGVkdWxlKGNiKTtcbn07XG52YXIgUk9PVCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG52YXIgc2V0QXR0cmlidXRlc0lmTnVsbCA9IChlbGVtZW50LCBhdHRycyA9IHt9KSA9PiB7XG5cdGlmICghYXR0cnMgfHwgdHlwZW9mIGF0dHJzICE9IFwib2JqZWN0XCIgfHwgIWVsZW1lbnQpIHJldHVybjtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRjb25zdCBvbGQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBpZiAodmFsdWUgIT0gb2xkKSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBvbGQgPT0gXCJcIiA/IHZhbHVlID8/IG9sZCA6IG9sZCA/PyB2YWx1ZSk7XG5cdH0pO1xufTtcbnZhciBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJzID0ge30pID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMoYXR0cnMpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA/PyBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKSk7XG5cdH0pO1xufTtcbnZhciB0aHJvdHRsZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgc2V0SWRsZUludGVydmFsID0gKGNiLCB0aW1lb3V0ID0gMWUzLCAuLi5hcmdzKSA9PiB7XG5cdGNvbnN0IHN0YXR1cyA9IHtcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGNhbmNlbDogKCkgPT4ge1xuXHRcdFx0c3RhdHVzLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cdHJ1bldoZW5JZGxlJDEoYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghY2IgfHwgdHlwZW9mIGNiICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRcdHdoaWxlIChzdGF0dXMucnVubmluZykge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoW1Byb21pc2UudHJ5KGNiLCAuLi5hcmdzKSwgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZW91dCkpXSkuY2F0Y2g/Lihjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSk7XG5cdFx0XHRhd2FpdCBQcm9taXNlLmFueShbbmV3IFByb21pc2UoKHIpID0+IHJ1bldoZW5JZGxlJDEociwgdGltZW91dCkpLCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lb3V0KSldKTtcblx0XHR9XG5cdFx0c3RhdHVzLmNhbmNlbCA9ICgpID0+IHt9O1xuXHR9LCB0aW1lb3V0KTtcblx0cmV0dXJuIHN0YXR1cz8uY2FuY2VsO1xufTtcbmlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9IFwidW5kZWZpbmVkXCIpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dGhyb3R0bGVNYXAuZm9yRWFjaCgoY2IpID0+IGNiPy4oKSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyKSk7XG5cdH1cbn0pO1xudmFyIGJvcmRlckJveFdpZHRoID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtd2lkdGhcIik7XG52YXIgYm9yZGVyQm94SGVpZ2h0ID0gU3ltYm9sKFwiQGJvcmRlci1ib3gtaGVpZ2h0XCIpO1xudmFyIGNvbnRlbnRCb3hXaWR0aCA9IFN5bWJvbChcIkBjb250ZW50LWJveC13aWR0aFwiKTtcbnZhciBjb250ZW50Qm94SGVpZ2h0ID0gU3ltYm9sKFwiQGNvbnRlbnQtYm94LWhlaWdodFwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZG9Db250ZW50T2JzZXJ2ZSA9IChlbGVtZW50LCBjYiA9ICgpID0+IHt9KSA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbY29udGVudEJveFdpZHRoXSA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0ZWxlbWVudFtjb250ZW50Qm94SGVpZ2h0XSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBjb250ZW50Qm94U2l6ZSA9IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdO1xuXHRcdFx0XHRpZiAoY29udGVudEJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hXaWR0aF0gPSBNYXRoLm1pbihjb250ZW50Qm94U2l6ZS5pbmxpbmVTaXplLCBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdFx0XHRlbGVtZW50W2NvbnRlbnRCb3hIZWlnaHRdID0gTWF0aC5taW4oY29udGVudEJveFNpemUuYmxvY2tTaXplLCBlbGVtZW50LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdFx0Y2I/LihlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9uQ29udGVudE9ic2VydmUuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCwgeyBib3g6IFwiY29udGVudC1ib3hcIiB9KTtcblx0fVxufTtcbnZhciBkb0JvcmRlck9ic2VydmUgPSAoZWxlbWVudCwgY2IgPSAoKSA9PiB7fSkgPT4ge1xuXHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlLmhhcyhlbGVtZW50KSkge1xuXHRcdGVsZW1lbnRbYm9yZGVyQm94V2lkdGhdID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblx0XHRlbGVtZW50W2JvcmRlckJveEhlaWdodF0gPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSBpZiAoZW50cnkuYm9yZGVyQm94U2l6ZSkge1xuXHRcdFx0XHRjb25zdCBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXTtcblx0XHRcdFx0aWYgKGJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0XHRlbGVtZW50W2JvcmRlckJveFdpZHRoXSA9IE1hdGgubWluKGJvcmRlckJveFNpemUuaW5saW5lU2l6ZSwgZWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0ZWxlbWVudFtib3JkZXJCb3hIZWlnaHRdID0gTWF0aC5taW4oYm9yZGVyQm94U2l6ZS5ibG9ja1NpemUsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0XHRjYj8uKGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b25Cb3JkZXJPYnNlcnZlLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50Py5lbGVtZW50ID8/IGVsZW1lbnQsIHsgYm94OiBcImJvcmRlci1ib3hcIiB9KTtcblx0fVxufTtcbnZhciB1cmwgPSAodHlwZSwgLi4uc291cmNlKSA9PiB7XG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKHNvdXJjZSwgeyB0eXBlIH0pKTtcbn07XG52YXIgaHRtbCA9IChzb3VyY2UsIHR5cGUgPSBcInRleHQvaHRtbFwiKSA9PiB7XG5cdGNvbnN0IHBhcnNlZCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc291cmNlLCB0eXBlKTtcblx0cmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikgPz8gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoXCIqXCIpO1xufTtcbnZhciBzZXRDaGVja2VkID0gKGlucHV0LCB2YWx1ZSwgZXYpID0+IHtcblx0aWYgKHZhbHVlICE9IG51bGwgJiYgaW5wdXQuY2hlY2tlZCAhPSB2YWx1ZSkge1xuXHRcdGlmIChpbnB1dD8uW1widHlwZVwiXSA9PSBcImNoZWNrYm94XCIgfHwgaW5wdXQ/LltcInR5cGVcIl0gPT0gXCJyYWRpb1wiICYmICFpbnB1dD8uY2hlY2tlZCkge1xuXHRcdFx0aW5wdXQ/LmNsaWNrPy4oKTtcblx0XHRcdGV2Py5wcmV2ZW50RGVmYXVsdD8uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0LmNoZWNrZWQgPSAhIXZhbHVlO1xuXHRcdFx0aW5wdXQ/LmRpc3BhdGNoRXZlbnQ/LihuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyIGlzVmFsaWRQYXJlbnQgPSAocGFyZW50KSA9PiB7XG5cdHJldHVybiBwYXJlbnQgIT0gbnVsbCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgSFRNTEJvZHlFbGVtZW50KSA/IHBhcmVudCA6IG51bGw7XG59O1xudmFyIGluZGV4T2YgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuXHRpZiAoZWxlbWVudCA9PSBudWxsIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuIC0xO1xuXHRyZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50Py5jaGlsZE5vZGVzID8/IFtdKT8uaW5kZXhPZj8uKG5vZGUpID8/IC0xO1xufTtcbnZhciBNQVRDSCA9IFwiKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKVwiO1xudmFyIFJFR0VYID0gXCJeKD86XCIgKyBNQVRDSCArIFwiKXxeI1wiICsgTUFUQ0ggKyBcInxeXFxcXC5cIiArIE1BVENIICsgXCJ8XlxcXFxbXCIgKyBNQVRDSCArIFwiKD86KFsqJHx+Xl0/PSkoW1xcXCInXSkoKD86KD89KFxcXFxcXFxcPykpXFxcXDguKSo/KVxcXFw2KT9cXFxcXVwiO1xudmFyIGNyZWF0ZUVsZW1lbnRWYW5pbGxhID0gKHNlbGVjdG9yKSA9PiB7XG5cdGlmIChzZWxlY3RvciA9PSBcIjpmcmFnbWVudDpcIikgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0Y29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudC5iaW5kKGRvY3VtZW50KTtcblx0Zm9yICh2YXIgbm9kZSA9IGNyZWF0ZShcImRpdlwiKSwgbWF0Y2gsIGNsYXNzTmFtZSA9IFwiXCI7IHNlbGVjdG9yICYmIChtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKFwiXig/OigtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikpfF4jKC0/W19hLXpBLVpdK1tfYS16QS1aMC05LV0qKXxeXFxcXC4oLT9bX2EtekEtWl0rW19hLXpBLVowLTktXSopfF5cXFxcWygtP1tfYS16QS1aXStbX2EtekEtWjAtOS1dKikoPzooWyokfH5eXT89KShbXFxcIiddKSgoPzooPz0oXFxcXFxcXFw/KSlcXFxcOC4pKj8pXFxcXDYpP1xcXFxdXCIpKTspIHtcblx0XHRpZiAobWF0Y2hbMV0pIG5vZGUgPSBjcmVhdGUobWF0Y2hbMV0pO1xuXHRcdGlmIChtYXRjaFsyXSkgbm9kZS5pZCA9IG1hdGNoWzJdO1xuXHRcdGlmIChtYXRjaFszXSkgY2xhc3NOYW1lICs9IFwiIFwiICsgbWF0Y2hbM107XG5cdFx0aWYgKG1hdGNoWzRdKSBub2RlLnNldEF0dHJpYnV0ZShtYXRjaFs0XSwgbWF0Y2hbN10gfHwgXCJcIik7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuXHR9XG5cdGlmIChjbGFzc05hbWUpIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLnNsaWNlKDEpO1xuXHRyZXR1cm4gbm9kZTtcbn07XG52YXIgaXNFbGVtZW50ID0gKGVsKSA9PiB7XG5cdHJldHVybiBlbCAhPSBudWxsICYmIChlbCBpbnN0YW5jZW9mIE5vZGUgfHwgZWwgaW5zdGFuY2VvZiBUZXh0IHx8IGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIENvbW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gZWwgOiBudWxsO1xufTtcbnZhciBpbmNsdWRlU2VsZiA9ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB7XG5cdGNvbnN0IHNlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IHNlbGVjdG9yLnRyaW0oKSA6IFwiXCI7XG5cdGlmICghc2VsIHx8ICF0YXJnZXQpIHJldHVybiB0YXJnZXQgPz8gbnVsbDtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3Ioc2VsKSA/PyAodGFyZ2V0Lm1hdGNoZXMoc2VsKSA/IHRhcmdldCA6IG51bGwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbnZhciBoYXNQYXJlbnQgPSAoY3VycmVudCwgcGFyZW50KSA9PiB7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0aWYgKCEoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICgoY3VycmVudD8uZWxlbWVudCA/PyBjdXJyZW50KSA9PT0gKHBhcmVudD8uZWxlbWVudCA/PyBwYXJlbnQpKSByZXR1cm4gdHJ1ZTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50ID8/IChjdXJyZW50LnBhcmVudE5vZGUgPT0gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pID8gY3VycmVudD8uZ2V0Um9vdE5vZGU/Lih7IGNvbXBvc2VkOiB0cnVlIH0pPy5ob3N0IDogY3VycmVudD8ucGFyZW50Tm9kZSk7XG5cdH1cbn07XG52YXIgcGFzc2l2ZU9wdHMgPSB7fTtcbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2IsIG9wdHMgPSBwYXNzaXZlT3B0cykge1xuXHR0YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG5cdGNvbnN0IHdyID0gdHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB0YXJnZXQgPT0gXCJmdW5jdGlvblwiICYmICF0YXJnZXQ/LmRlcmVmID8gbmV3IFdlYWtSZWYodGFyZ2V0KSA6IHRhcmdldDtcblx0cmV0dXJuICgpID0+IHdyPy5kZXJlZj8uKCk/LnJlbW92ZUV2ZW50TGlzdGVuZXI/Lih0eXBlLCBjYiwgb3B0cyk7XG59XG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGNiLCBvcHRzID0gcGFzc2l2ZU9wdHMpIHtcblx0dGFyZ2V0Py5yZW1vdmVFdmVudExpc3RlbmVyPy4odHlwZSwgY2IsIG9wdHMpO1xufVxudmFyIGFkZEV2ZW50cyA9IChyb290LCBoYW5kbGVycykgPT4ge1xuXHRyb290ID0gcm9vdCBpbnN0YW5jZW9mIFdlYWtSZWYgPyByb290LmRlcmVmKCkgOiByb290O1xuXHRyZXR1cm4gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IEFycmF5LmlzQXJyYXkoY2IpID8gYWRkRXZlbnQocm9vdCwgbmFtZSwgLi4uY2IpIDogYWRkRXZlbnQocm9vdCwgbmFtZSwgY2IpKTtcbn07XG52YXIgYWRkRXZlbnRzTGlzdCA9IChlbCwgZXZlbnRzKSA9PiB7XG5cdGlmIChldmVudHMpIHtcblx0XHRsZXQgZW50cmllcyA9IGV2ZW50cztcblx0XHRpZiAoZXZlbnRzIGluc3RhbmNlb2YgTWFwKSBlbnRyaWVzID0gWy4uLmV2ZW50cy5lbnRyaWVzKCldO1xuXHRcdGVsc2UgZW50cmllcyA9IFsuLi5PYmplY3QuZW50cmllcyhldmVudHMpXTtcblx0XHRyZXR1cm4gZW50cmllcy5tYXAoKFtuYW1lLCBsaXN0XSkgPT4gKChpc0FycmF5T3JJdGVyYWJsZShsaXN0KSA/IFsuLi5saXN0XSA6IGxpc3QpID8/IFtdKT8ubWFwPy4oKGNicykgPT4ge1xuXHRcdFx0cmV0dXJuIGFkZEV2ZW50KGVsLCBuYW1lLCBjYnMpO1xuXHRcdH0pKTtcblx0fVxufTtcbnZhciByZW1vdmVFdmVudHMgPSAocm9vdCwgaGFuZGxlcnMpID0+IHtcblx0cm9vdCA9IHJvb3QgaW5zdGFuY2VvZiBXZWFrUmVmID8gcm9vdC5kZXJlZigpIDogcm9vdDtcblx0cmV0dXJuIFsuLi5PYmplY3QuZW50cmllcyhoYW5kbGVycyldLm1hcD8uKChbbmFtZSwgY2JdKSA9PiBBcnJheS5pc0FycmF5KGNiKSA/IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIC4uLmNiKSA6IHJlbW92ZUV2ZW50KHJvb3QsIG5hbWUsIGNiKSk7XG59O1xudmFyIGdldEV2ZW50VGFyZ2V0ID0gKGV2KSA9PiB7XG5cdGlmICghZXYpIHJldHVybiBudWxsO1xuXHRpZiAoZXY/LmNvbXBvc2VkUGF0aCAmJiB0eXBlb2YgZXYuY29tcG9zZWRQYXRoID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRjb25zdCBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIHBhdGgpIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHJldHVybiBub2RlO1xuXHR9XG5cdGNvbnN0IHRhcmdldCA9IGV2Py50YXJnZXQ7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gdGFyZ2V0O1xuXHRyZXR1cm4gbnVsbDtcbn07XG52YXIgY29udGFpbnNPclNlbGYgPSAoYSwgYiwgZXYpID0+IHtcblx0aWYgKGIgPT0gbnVsbCB8fCAhKGIgaW5zdGFuY2VvZiBOb2RlKSAmJiBiPy5lbGVtZW50ID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gYiB8fCAoYT8uZWxlbWVudCA/PyBhKSA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRjb25zdCBhRWwgPSBhPy5lbGVtZW50ID8/IGE7XG5cdFx0Y29uc3QgYkVsID0gYj8uZWxlbWVudCA/PyBiO1xuXHRcdGlmIChwYXRoLmluY2x1ZGVzKGFFbCkgJiYgcGF0aC5pbmNsdWRlcyhiRWwpKSB7XG5cdFx0XHRjb25zdCBhSW5kZXggPSBwYXRoLmluZGV4T2YoYUVsKTtcblx0XHRcdGNvbnN0IGJJbmRleCA9IHBhdGguaW5kZXhPZihiRWwpO1xuXHRcdFx0aWYgKGJJbmRleCA+PSAwICYmIGFJbmRleCA+PSAwICYmIGJJbmRleCA8IGFJbmRleCkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChhPy5jb250YWlucz8uKGI/LmVsZW1lbnQgPz8gYikgfHwgYT8uZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KT8uaG9zdCA9PSAoYj8uZWxlbWVudCA/PyBiKSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgTU9DRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvciwgZXYpID0+IHtcblx0Y29uc3Qgc2VsID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gc2VsZWN0b3IudHJpbSgpIDogXCJcIjtcblx0aWYgKCFzZWwpIHJldHVybiBlbGVtZW50ID8/IG51bGw7XG5cdGlmIChldj8uY29tcG9zZWRQYXRoICYmIHR5cGVvZiBldi5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5jb21wb3NlZFBhdGgoKTtcblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgcGF0aCkgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudCkgdHJ5IHtcblx0XHRcdGlmIChub2RlLm1hdGNoZXM/LihzZWwpKSByZXR1cm4gbm9kZTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblx0bGV0IHNlbGYgPSBudWxsO1xuXHRsZXQgaG9zdE1hdGNoZWQgPSBudWxsO1xuXHRsZXQgY2xvc2VzdCA9IG51bGw7XG5cdHRyeSB7XG5cdFx0c2VsZiA9IGVsZW1lbnQ/Lm1hdGNoZXM/LihzZWwpID8gZWxlbWVudCA6IG51bGw7XG5cdFx0Y29uc3QgaG9zdCA9IChlbGVtZW50Py5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pID8/IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmdldFJvb3ROb2RlKHsgY29tcG9zZWQ6IHRydWUgfSkpPy5ob3N0O1xuXHRcdGhvc3RNYXRjaGVkID0gaG9zdD8ubWF0Y2hlcz8uKHNlbCkgPyBob3N0IDogbnVsbDtcblx0XHRjbG9zZXN0ID0gZWxlbWVudD8uY2xvc2VzdD8uKHNlbCkgPz8gc2VsZj8uY2xvc2VzdD8uKHNlbCkgPz8gaG9zdE1hdGNoZWQ/LmNsb3Nlc3Q/LihzZWwpID8/IG51bGw7XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIHNlbGYgPz8gY2xvc2VzdCA/PyBob3N0TWF0Y2hlZDtcbn07XG52YXIgTU9DID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG5cdHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbnZhciBpc0luRm9jdXMgPSAoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQsIGRpciA9IFwicGFyZW50XCIpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiAhZWxlbWVudC5jaGVja1Zpc2liaWxpdHkoe1xuXHRcdGNoZWNrT3BhY2l0eTogdHJ1ZSxcblx0XHRjaGVja1Zpc2liaWxpdHlDU1M6IHRydWVcblx0fSkpIHJldHVybiBmYWxzZTtcblx0aWYgKCFlbGVtZW50LmNoZWNrVmlzaWJpbGl0eSAmJiBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbCAmJiBlbGVtZW50LnN0eWxlLnBvc2l0aW9uICE9PSBcImZpeGVkXCIpIHJldHVybiBmYWxzZTtcblx0bGV0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdHdoaWxlIChhY3RpdmUgJiYgYWN0aXZlLnNoYWRvd1Jvb3QgJiYgYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudCkgYWN0aXZlID0gYWN0aXZlLnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcblx0Y29uc3QgaXNGb2N1c2VkID0gYWN0aXZlID09PSBlbGVtZW50IHx8IGhhc1BhcmVudChhY3RpdmUsIGVsZW1lbnQpO1xuXHRjb25zdCBpc0hvdmVyZWQgPSBlbGVtZW50Lm1hdGNoZXMoXCI6aG92ZXJcIik7XG5cdGlmICghaXNGb2N1c2VkICYmICFpc0hvdmVyZWQgJiYgIXNlbGVjdG9yT3JFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cdGlmIChzZWxlY3Rvck9yRWxlbWVudCkge1xuXHRcdGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmIChkaXIgPT09IFwicGFyZW50XCIpIHJldHVybiAhIU1PQ0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3JPckVsZW1lbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGlzRm9jdXNlZCA/IGFjdGl2ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIjpob3ZlclwiKSB8fCBlbGVtZW50O1xuXHRcdFx0XHRjb25zdCBhbHRDbmQgPSAhIU1PQ0VsZW1lbnQodGFyZ2V0LCBzZWxlY3Rvck9yRWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oc2VsZWN0b3JPckVsZW1lbnQpICE9IG51bGwgfHwgZWxlbWVudD8ubWF0Y2hlcz8uKHNlbGVjdG9yT3JFbGVtZW50KSB8fCBhbHRDbmQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzZWxlY3Rvck9yRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZGlyID09PSBcInBhcmVudFwiKSByZXR1cm4gaGFzUGFyZW50KGVsZW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KSB8fCBmYWxzZTtcblx0XHRcdGVsc2UgcmV0dXJuIGhhc1BhcmVudChzZWxlY3Rvck9yRWxlbWVudCwgZWxlbWVudCkgfHwgZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL1pvb20udHNcbnZhciBnZXRab29tID0gKCkgPT4ge1xuXHRpZiAoXCJjdXJyZW50Q1NTWm9vbVwiIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHRyZXR1cm4gcGFyc2VGbG9hdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tc2NhbGluZ1wiKSB8fCBcIjFcIikgfHwgMTtcbn07XG52YXIgem9vbVZhbHVlc1N5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAem9vbVZhbHVlc1wiKTtcbnZhciB6b29tVmFsdWVzID0gZ2xvYmFsVGhpc1t6b29tVmFsdWVzU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgem9vbU9mID0gKGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHpvb21WYWx1ZXMuZ2V0T3JJbnNlcnRDb21wdXRlZChlbGVtZW50LCAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gKGVsZW1lbnQ/Lm1hdGNoZXM/LihcIi51aS1vcmllbnRib3hcIikgPyBlbGVtZW50IDogbnVsbCkgfHwgZWxlbWVudD8uY2xvc2VzdD8uKFwiLnVpLW9yaWVudGJveFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmIChjb250YWluZXI/Lnpvb20pIHJldHVybiBjb250YWluZXI/Lnpvb20gfHwgMTtcblx0XHRpZiAoZWxlbWVudD8uY3VycmVudENTU1pvb20pIHJldHVybiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSB8fCAxO1xuXHR9KTtcbn07XG52YXIgY2hhbmdlWm9vbSA9IChzY2FsZSA9IDEpID0+IHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zY2FsaW5nXCIsIHNjYWxlKTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic2NhbGluZ1wiLCB7XG5cdFx0ZGV0YWlsOiB7IHpvb206IHNjYWxlIH0sXG5cdFx0YnViYmxlczogdHJ1ZSxcblx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdH0pKTtcblx0cmV0dXJuIHNjYWxlO1xufTtcbnZhciBmaXhlZENsaWVudFpvb20gPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKGVsZW1lbnQ/LmN1cnJlbnRDU1Nab29tICE9IG51bGwgPyAxIDogem9vbU9mKGVsZW1lbnQpKSB8fCAxO1xufTtcbnZhciB1bmZpeGVkQ2xpZW50Wm9vbSA9IChlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoZWxlbWVudD8uY3VycmVudENTU1pvb20gPT0gbnVsbCA/IDEgOiBlbGVtZW50Py5jdXJyZW50Q1NTWm9vbSkgfHwgMTtcbn07XG52YXIgb3JpZW50T2YgPSAoZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjb250YWluZXIgPSAoZWxlbWVudD8ubWF0Y2hlcz8uKFwiW29yaWVudF0sIFtkYXRhLW1peGluPVxcXCJ1aS1vcmllbnRib3hcXFwiXVwiKSA/IGVsZW1lbnQgOiBudWxsKSB8fCBlbGVtZW50Py5jbG9zZXN0Py4oXCJbb3JpZW50XSwgW2RhdGEtbWl4aW49XFxcInVpLW9yaWVudGJveFxcXCJdXCIpIHx8IGVsZW1lbnQ7XG5cdGlmIChjb250YWluZXI/Lmhhc0F0dHJpYnV0ZT8uKFwib3JpZW50XCIpKSByZXR1cm4gcGFyc2VJbnQoY29udGFpbmVyPy5nZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiKSB8fCBcIjBcIikgfHwgMDtcblx0aWYgKGNvbnRhaW5lcj8ub3JpZW50ICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKE51bWJlcihjb250YWluZXIub3JpZW50KSkpIHJldHVybiBOdW1iZXIoY29udGFpbmVyLm9yaWVudCkgfHwgMDtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBjb250YWluZXI/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlPy4oXCItLW9yaWVudFwiKSB8fCAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgPyBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIi0tb3JpZW50XCIpIDogXCJcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHJhdykudHJpbSgpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG47XG5cdH0gY2F0Y2gge31cblx0cmV0dXJuIDA7XG59O1xudmFyIGdldEJvdW5kaW5nT3JpZW50UmVjdCA9IChlbGVtZW50LCBvcmllbnQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHpvb20gPSB1bmZpeGVkQ2xpZW50Wm9vbShlbGVtZW50KSB8fCAxO1xuXHRjb25zdCBib3ggPSBlbGVtZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xuXHRjb25zdCBuYnggPSB7XG5cdFx0bGVmdDogYm94Py5sZWZ0IC8gem9vbSxcblx0XHRyaWdodDogYm94Py5yaWdodCAvIHpvb20sXG5cdFx0dG9wOiBib3g/LnRvcCAvIHpvb20sXG5cdFx0Ym90dG9tOiBib3g/LmJvdHRvbSAvIHpvb20sXG5cdFx0d2lkdGg6IGJveD8ud2lkdGggLyB6b29tLFxuXHRcdGhlaWdodDogYm94Py5oZWlnaHQgLyB6b29tXG5cdH07XG5cdGNvbnN0IG9yX2kgPSBvcmllbnQgPz8gKG9yaWVudE9mKGVsZW1lbnQpIHx8IDApO1xuXHRjb25zdCB2diA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQgOiBudWxsO1xuXHRjb25zdCBzaXplID0gWygodnY/LndpZHRoID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50V2lkdGggPz8gd2luZG93LmlubmVyV2lkdGgpIHx8IDEpIC8gem9vbSwgKCh2dj8uaGVpZ2h0ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0ID8/IHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMSkgLyB6b29tXTtcblx0Y29uc3QgW2xlZnRfLCB0b3BfXSA9IGN2dF9jc190b19vcyhbbmJ4LmxlZnQsIG5ieC50b3BdLCBzaXplLCBvcl9pKTtcblx0Y29uc3QgW3JpZ2h0XywgYm90dG9tX10gPSBjdnRfY3NfdG9fb3MoW25ieC5yaWdodCwgbmJ4LmJvdHRvbV0sIHNpemUsIG9yX2kpO1xuXHRjb25zdCBbbGVmdCwgcmlnaHRdID0gb3JfaSA9PSAwIHx8IG9yX2kgPT0gMyA/IFtsZWZ0XywgcmlnaHRfXSA6IFtyaWdodF8sIGxlZnRfXTtcblx0Y29uc3QgW3RvcCwgYm90dG9tXSA9IG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBbdG9wXywgYm90dG9tX10gOiBbYm90dG9tXywgdG9wX107XG5cdGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IG9yX2kgJSAyID8gW25ieC5oZWlnaHQsIG5ieC53aWR0aF0gOiBbbmJ4LndpZHRoLCBuYnguaGVpZ2h0XTtcblx0cmV0dXJuIHtcblx0XHRsZWZ0LFxuXHRcdHRvcCxcblx0XHRyaWdodCxcblx0XHRib3R0b20sXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdH07XG59O1xudmFyIGJidyA9IChlbCwgb3JpZW50ID0gbnVsbCkgPT4gKG9yaWVudCA/PyBvcmllbnRPZihlbCkpICUgMiA/IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodCA6IGVsW2JvcmRlckJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgYmJoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbYm9yZGVyQm94V2lkdGhdID8/IGVsPy5jbGllbnRXaWR0aCA6IGVsW2JvcmRlckJveEhlaWdodF0gPz8gZWw/LmNsaWVudEhlaWdodDtcbnZhciBjYncgPSAoZWwsIG9yaWVudCA9IG51bGwpID0+IChvcmllbnQgPz8gb3JpZW50T2YoZWwpKSAlIDIgPyBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0IDogZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGg7XG52YXIgY2JoID0gKGVsLCBvcmllbnQgPSBudWxsKSA9PiAob3JpZW50ID8/IG9yaWVudE9mKGVsKSkgJSAyID8gZWxbY29udGVudEJveFdpZHRoXSA/PyBlbD8uY2xpZW50V2lkdGggOiBlbFtjb250ZW50Qm94SGVpZ2h0XSA/PyBlbD8uY2xpZW50SGVpZ2h0O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvVmlld3BvcnQudHNcbnZhciBydW5XaGVuSWRsZSA9IChjYiwgdGltZW91dCA9IDEwMCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMucmVxdWVzdElkbGVDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZ2xvYmFsVGhpcy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNiLCB7IHRpbWVvdXQgfSk7XG5cdHJldHVybiBzZXRUaW1lb3V0KCgpID0+IGNiKHtcblx0XHRkaWRUaW1lb3V0OiBmYWxzZSxcblx0XHR0aW1lUmVtYWluaW5nOiAoKSA9PiAwXG5cdH0pLCAwKTtcbn07XG52YXIgS0VZQk9BUkRfT1ZFUkxBWV9QWCA9IDgwO1xudmFyIGNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gMDtcbnZhciBjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gZmFsc2U7XG52YXIgd2luZG93S2V5Ym9hcmRCb3VuZCA9IGZhbHNlO1xudmFyIHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkID0gZmFsc2U7XG52YXIgaXNOYXRpdmVDYXBhY2l0b3JIb3N0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQuY3dzcE5hdGl2ZVNoZWxsID09PSBcImNhcGFjaXRvclwiKSByZXR1cm4gdHJ1ZTtcblx0XHRjb25zdCBjYXAgPSBnbG9iYWxUaGlzLkNhcGFjaXRvcjtcblx0XHRyZXR1cm4gdHlwZW9mIGNhcD8uaXNOYXRpdmVQbGF0Zm9ybSA9PT0gXCJmdW5jdGlvblwiICYmIEJvb2xlYW4oY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB2aXJ0dWFsS2V5Ym9hcmQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMubmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQgPz8gbnVsbDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG52YXIgSU5URVJBQ1RJVkVfV0lER0VUID0gXCJpbnRlcmFjdGl2ZS13aWRnZXQ9b3ZlcmxheXMtY29udGVudFwiO1xudmFyIFZJRVdQT1JUX0ZJVCA9IFwidmlld3BvcnQtZml0PWNvdmVyXCI7XG52YXIgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkgPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRpZiAoIWhlYWQpIHJldHVybjtcblx0bGV0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPVxcXCJ2aWV3cG9ydFxcXCJdXCIpO1xuXHRpZiAoIW1ldGEpIHtcblx0XHRtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG5cdFx0bWV0YS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmlld3BvcnRcIik7XG5cdFx0bWV0YS5jb250ZW50ID0gYHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsICR7VklFV1BPUlRfRklUfSwgJHtJTlRFUkFDVElWRV9XSURHRVR9YDtcblx0XHRoZWFkLmluc2VydEJlZm9yZShtZXRhLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgY29udGVudCA9IFN0cmluZyhtZXRhLmNvbnRlbnQgfHwgXCJcIikudHJpbSgpO1xuXHRpZiAoIS9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypvdmVybGF5cy1jb250ZW50L2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvaW50ZXJhY3RpdmUtd2lkZ2V0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9pbnRlcmFjdGl2ZS13aWRnZXRcXHMqPVxccypbYS16LV0rL2ksIElOVEVSQUNUSVZFX1dJREdFVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke0lOVEVSQUNUSVZFX1dJREdFVH1gIDogSU5URVJBQ1RJVkVfV0lER0VUO1xuXHR9XG5cdGlmICghL3ZpZXdwb3J0LWZpdFxccyo9XFxzKmNvdmVyL2kudGVzdChjb250ZW50KSkge1xuXHRcdGlmICgvdmlld3BvcnQtZml0XFxzKj0vaS50ZXN0KGNvbnRlbnQpKSBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC92aWV3cG9ydC1maXRcXHMqPVxccypbYS16LV0rL2ksIFZJRVdQT1JUX0ZJVCk7XG5cdFx0ZWxzZSBjb250ZW50ID0gY29udGVudCA/IGAke2NvbnRlbnQucmVwbGFjZSgvLFxccyokLywgXCJcIil9LCAke1ZJRVdQT1JUX0ZJVH1gIDogVklFV1BPUlRfRklUO1xuXHR9XG5cdGlmIChjb250ZW50ICE9PSBTdHJpbmcobWV0YS5jb250ZW50IHx8IFwiXCIpLnRyaW0oKSkgbWV0YS5jb250ZW50ID0gY29udGVudDtcbn07XG52YXIgZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSA9ICgpID0+IHtcblx0ZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXkoKTtcblx0Y29uc3QgdmsgPSB2aXJ0dWFsS2V5Ym9hcmQoKTtcblx0aWYgKCF2aykgcmV0dXJuO1xuXHR0cnkge1xuXHRcdGlmICh2ay5vdmVybGF5c0NvbnRlbnQgIT09IHRydWUpIHZrLm92ZXJsYXlzQ29udGVudCA9IHRydWU7XG5cdH0gY2F0Y2gge31cbn07XG52YXIgaXNJbWVUYXJnZXQgPSAoZWwpID0+IHtcblx0aWYgKCFlbCB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG5cdGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkgcmV0dXJuIHRydWU7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiVEVYVEFSRUFcIiB8fCB0YWcgPT09IFwiU0VMRUNUXCIpIHJldHVybiB0cnVlO1xuXHRpZiAodGFnICE9PSBcIklOUFVUXCIpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgdHlwZSA9IFN0cmluZyhlbC50eXBlIHx8IFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gIVtcblx0XHRcImJ1dHRvblwiLFxuXHRcdFwiY2hlY2tib3hcIixcblx0XHRcInJhZGlvXCIsXG5cdFx0XCJmaWxlXCIsXG5cdFx0XCJzdWJtaXRcIixcblx0XHRcInJlc2V0XCIsXG5cdFx0XCJpbWFnZVwiLFxuXHRcdFwicmFuZ2VcIixcblx0XHRcImNvbG9yXCIsXG5cdFx0XCJoaWRkZW5cIlxuXHRdLmluY2x1ZGVzKHR5cGUpO1xufTtcbnZhciBpc0NvbGxhcHNlZENhcmV0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdHJldHVybiBCb29sZWFuKHNlbCAmJiBzZWwucmFuZ2VDb3VudCAmJiBzZWwuaXNDb2xsYXBzZWQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBsYXlvdXRMb2NrT3JpZW50ID0gXCJcIjtcbnZhciBsYXlvdXRMb2NrVyA9IDA7XG52YXIgbGF5b3V0TG9ja0ggPSAwO1xudmFyIGxhc3RTdGFibGVLZXlib2FyZCA9IDA7XG52YXIgY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQgPSAod2lkdGgsIGhlaWdodCwgbGVmdCA9IDAsIHRvcCA9IDApID0+IHtcblx0Y29uc3Qgc2FmZVdpZHRoID0gTWF0aC5tYXgoMCwgTnVtYmVyKHdpZHRoKSB8fCAwKTtcblx0Y29uc3Qgc2FmZUhlaWdodCA9IE1hdGgubWF4KDAsIE51bWJlcihoZWlnaHQpIHx8IDApO1xuXHRjb25zdCBzYWZlTGVmdCA9IE51bWJlcihsZWZ0KSB8fCAwO1xuXHRjb25zdCBzYWZlVG9wID0gTnVtYmVyKHRvcCkgfHwgMDtcblx0cmV0dXJuIHtcblx0XHRsZWZ0OiBzYWZlTGVmdCxcblx0XHR0b3A6IHNhZmVUb3AsXG5cdFx0cmlnaHQ6IHNhZmVMZWZ0ICsgc2FmZVdpZHRoLFxuXHRcdGJvdHRvbTogc2FmZVRvcCArIHNhZmVIZWlnaHQsXG5cdFx0d2lkdGg6IHNhZmVXaWR0aCxcblx0XHRoZWlnaHQ6IHNhZmVIZWlnaHRcblx0fTtcbn07XG52YXIgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KDAsIDApO1xuXHRjb25zdCByb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcblx0cmV0dXJuIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0KE51bWJlcihyb290Py5jbGllbnRXaWR0aCkgfHwgTnVtYmVyKHdpbmRvdy5pbm5lcldpZHRoKSB8fCAwLCBOdW1iZXIocm9vdD8uY2xpZW50SGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKTtcbn07XG52YXIgcmVhZExheW91dFZpZXdwb3J0ID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHtcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDAsXG5cdFx0a2V5Ym9hcmQ6IDBcblx0fTtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGNvbnN0IGlubmVyVyA9IE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMDtcblx0Y29uc3QgaW5uZXJIID0gTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZXID0gTnVtYmVyKHZ2Py53aWR0aCkgfHwgMDtcblx0Y29uc3QgdnZIID0gTnVtYmVyKHZ2Py5oZWlnaHQpIHx8IDA7XG5cdGNvbnN0IHZ2VG9wID0gTnVtYmVyKHZ2Py5vZmZzZXRUb3ApIHx8IDA7XG5cdGNvbnN0IHZrSCA9IE51bWJlcih2aXJ0dWFsS2V5Ym9hcmQoKT8uYm91bmRpbmdCb3g/LmhlaWdodCkgfHwgMDtcblx0Y29uc3QgdnZPdmVybGFwID0gaW5uZXJIID4gMCAmJiB2dkggPiAwID8gaW5uZXJIIC0gdnZIIC0gdnZUb3AgOiAwO1xuXHRjb25zdCBjYXBIID0gY2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQ7XG5cdGNvbnN0IG5hdGl2ZUNhcCA9IGlzTmF0aXZlQ2FwYWNpdG9ySG9zdCgpO1xuXHRsZXQga2V5Ym9hcmQgPSBjYXBIID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyBjYXBIIDogIW5hdGl2ZUNhcCAmJiB2a0ggPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCA/IHZrSCA6ICFuYXRpdmVDYXAgJiYgdnZPdmVybGFwID49IEtFWUJPQVJEX09WRVJMQVlfUFggPyB2dk92ZXJsYXAgOiAwO1xuXHRjb25zdCBjYW5kaWRhdGVXID0gTWF0aC5tYXgoaW5uZXJXLCB2dlcpO1xuXHRjb25zdCBjYW5kaWRhdGVIID0gTWF0aC5tYXgoaW5uZXJILCB2dkggKyB2dlRvcCwga2V5Ym9hcmQgPiAwID8gdnZIICsga2V5Ym9hcmQgOiAwKTtcblx0Y29uc3Qgb3JpZW50ID0gdHlwZW9mIG1hdGNoTWVkaWEgIT09IFwidW5kZWZpbmVkXCIgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKT8ubWF0Y2hlcyA/IFwibFwiIDogXCJwXCI7XG5cdGlmIChvcmllbnQgIT09IGxheW91dExvY2tPcmllbnQpIHtcblx0XHRsYXlvdXRMb2NrT3JpZW50ID0gb3JpZW50O1xuXHRcdGxheW91dExvY2tXID0gMDtcblx0XHRsYXlvdXRMb2NrSCA9IDA7XG5cdH1cblx0Y29uc3Qgc3VkZGVuU2hyaW5rID0gIW5hdGl2ZUNhcCAmJiBsYXlvdXRMb2NrSCA+IDAgJiYgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVIID49IEtFWUJPQVJEX09WRVJMQVlfUFg7XG5cdGlmIChrZXlib2FyZCA8IEtFWUJPQVJEX09WRVJMQVlfUFggJiYgc3VkZGVuU2hyaW5rKSB7XG5cdFx0Y29uc3Qgc2hyaW5rID0gTWF0aC5tYXgoMCwgbGF5b3V0TG9ja0ggLSBjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCAtICh2dkggKyB2dlRvcCkpO1xuXHRcdGlmIChzaHJpbmsgPj0gS0VZQk9BUkRfT1ZFUkxBWV9QWCkga2V5Ym9hcmQgPSBzaHJpbms7XG5cdH1cblx0Y29uc3QgZXhwYW5kZWRTZWxlY3Rpb24gPSAhaXNDb2xsYXBzZWRDYXJldCgpO1xuXHRpZiAoZXhwYW5kZWRTZWxlY3Rpb24gJiYgbGFzdFN0YWJsZUtleWJvYXJkID49IEtFWUJPQVJEX09WRVJMQVlfUFgpIGtleWJvYXJkID0gbGFzdFN0YWJsZUtleWJvYXJkO1xuXHRlbHNlIGlmIChrZXlib2FyZCA+PSBLRVlCT0FSRF9PVkVSTEFZX1BYKSBsYXN0U3RhYmxlS2V5Ym9hcmQgPSBrZXlib2FyZDtcblx0ZWxzZSBpZiAoIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSBsYXN0U3RhYmxlS2V5Ym9hcmQgPSAwO1xuXHRpZiAoIShrZXlib2FyZCA+IDAgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgfHwgc3VkZGVuU2hyaW5rIHx8IGV4cGFuZGVkU2VsZWN0aW9uKSkge1xuXHRcdGxheW91dExvY2tXID0gY2FuZGlkYXRlVztcblx0XHRsYXlvdXRMb2NrSCA9IGNhbmRpZGF0ZUg7XG5cdH0gZWxzZSB7XG5cdFx0bGF5b3V0TG9ja1cgPSBNYXRoLm1heChjYW5kaWRhdGVXLCBsYXlvdXRMb2NrVyk7XG5cdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChjYW5kaWRhdGVILCBsYXlvdXRMb2NrSCk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHR3aWR0aDogbGF5b3V0TG9ja1cgfHwgY2FuZGlkYXRlVyxcblx0XHRoZWlnaHQ6IGxheW91dExvY2tIIHx8IGNhbmRpZGF0ZUgsXG5cdFx0a2V5Ym9hcmRcblx0fTtcbn07XG52YXIgaXNJbWVDaHJvbWVMb2NrID0gKGVsKSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG5cdGlmICh0YWcgPT09IFwiSFRNTFwiIHx8IHRhZyA9PT0gXCJCT0RZXCIpIHJldHVybiB0cnVlO1xuXHRjb25zdCBjbHMgPSBlbC5jbGFzc0xpc3Q7XG5cdHJldHVybiBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxcIikgfHwgY2xzLmNvbnRhaW5zKFwiYXBwLXNoZWxsX192aWV3cG9ydFwiKSB8fCBjbHMuY29udGFpbnMoXCJhcHAtc2hlbGxfX25hdlwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtcm9vdFwiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtc2hlbGwtd29ya3NwYWNlXCIpIHx8IGNscy5jb250YWlucyhcImVudi1zaGVsbC1jaHJvbWVcIikgfHwgY2xzLmNvbnRhaW5zKFwiZW52LXVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJlbnYtdWktd2luZG93X19ib2R5XCIpIHx8IGNscy5jb250YWlucyhcIndmLWZyYW1lXCIpIHx8IGNscy5jb250YWlucyhcInVpLXdpbmRvd1wiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fdG9vbGJhclwiKSB8fCBjbHMuY29udGFpbnMoXCJ2aWV3LXZpZXdlcl9fY2hyb21lXCIpIHx8IGNscy5jb250YWlucyhcInZpZXctdmlld2VyX19jb250ZW50XCIpIHx8IGNscy5jb250YWlucyhcImN3LXZpZXctdmlld2VyLXNoZWxsXCIpIHx8IGNscy5jb250YWlucyhcImN3LW1hcmtkb3duLXZpZXctZnJhbWVcIik7XG59O1xudmFyIHBhcmVudE9mID0gKGVsKSA9PiB7XG5cdGlmICghZWwpIHJldHVybiBudWxsO1xuXHRpZiAoZWwucGFyZW50RWxlbWVudCkgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHJvb3QgPSBlbC5nZXRSb290Tm9kZSgpO1xuXHRyZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290Lmhvc3QgOiBudWxsO1xufTtcbnZhciBpc1Njcm9sbHBvcnQgPSAoZWwpID0+IHtcblx0aWYgKGlzSW1lQ2hyb21lTG9jayhlbCkpIHJldHVybiBmYWxzZTtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblx0Y29uc3Qgb3kgPSBzdHlsZS5vdmVyZmxvd1kgfHwgc3R5bGUub3ZlcmZsb3dCbG9jaztcblx0aWYgKG95ICE9PSBcImF1dG9cIiAmJiBveSAhPT0gXCJzY3JvbGxcIikgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0ICsgMTtcbn07XG52YXIgZmluZEltZVNjcm9sbHBvcnQgPSAoc3RhcnQpID0+IHtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2Nyb2xscG9ydChub2RlKSkgcmV0dXJuIG5vZGU7XG5cdFx0bm9kZSA9IHBhcmVudE9mKG5vZGUpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbnZhciByZWFkQ2FyZXRSZWN0ID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdGlmIChzZWw/LnJhbmdlQ291bnQpIHtcblx0XHRcdGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cdFx0XHRjb25zdCByZWN0cyA9IHJhbmdlLmdldENsaWVudFJlY3RzKCk7XG5cdFx0XHRjb25zdCByZWN0ID0gcmVjdHMubGVuZ3RoID8gcmVjdHNbcmVjdHMubGVuZ3RoIC0gMV0gOiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChyZWN0ICYmIChyZWN0LmhlaWdodCB8fCByZWN0LndpZHRoIHx8IHJlY3QudG9wIHx8IHJlY3QuYm90dG9tKSkgcmV0dXJuIHJlY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG59O1xudmFyIHBpbkltZUNhcmV0SW5TY3JvbGxwb3J0ID0gKCkgPT4ge1xuXHRpZiAoIWlzSW1lVGFyZ2V0KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47XG5cdGlmICghaXNDb2xsYXBzZWRDYXJldCgpKSByZXR1cm47XG5cdGNvbnN0IGtleWJvYXJkID0gcmVhZExheW91dFZpZXdwb3J0KCkua2V5Ym9hcmQ7XG5cdGNvbnN0IHZ2ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0O1xuXHRjb25zdCB2aXNpYmxlQm90dG9tID0gKE51bWJlcih2dj8uaGVpZ2h0KSB8fCBOdW1iZXIod2luZG93LmlubmVySGVpZ2h0KSB8fCAwKSAtIE1hdGgubWF4KDgsIGtleWJvYXJkID8gMTIgOiAwKTtcblx0aWYgKHZpc2libGVCb3R0b20gPD0gMCkgcmV0dXJuO1xuXHRjb25zdCByZWN0ID0gcmVhZENhcmV0UmVjdCgpO1xuXHRpZiAoIXJlY3QpIHJldHVybjtcblx0Y29uc3Qgb3ZlcmZsb3cgPSByZWN0LmJvdHRvbSAtIHZpc2libGVCb3R0b207XG5cdGlmIChvdmVyZmxvdyA8PSAxKSByZXR1cm47XG5cdGNvbnN0IHBvcnQgPSBmaW5kSW1lU2Nyb2xscG9ydChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblx0aWYgKHBvcnQpIHBvcnQuc2Nyb2xsVG9wICs9IG92ZXJmbG93O1xufTtcbnZhciBwaW5WaXN1YWxWaWV3cG9ydCA9ICgpID0+IHtcblx0Y29uc3QgdnYgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQ7XG5cdGlmICghdnYpIHJldHVybjtcblx0Y29uc3QgdG9wID0gTnVtYmVyKHZ2Lm9mZnNldFRvcCkgfHwgMDtcblx0Y29uc3QgbGVmdCA9IE51bWJlcih2di5vZmZzZXRMZWZ0KSB8fCAwO1xuXHRpZiAoIXRvcCAmJiAhbGVmdCkgcmV0dXJuO1xuXHR0cnkge1xuXHRcdHZ2LnNjcm9sbFRvKHtcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRiZWhhdmlvcjogXCJpbnN0YW50XCJcblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0dHJ5IHtcblx0XHRcdHZ2LnNjcm9sbFRvPy4oMCwgMCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xudmFyIG92ZXJsYXlQaW5uaW5nID0gZmFsc2U7XG52YXIgcmVzZXRDaHJvbWVTY3JvbGwgPSAoc3RhcnQpID0+IHtcblx0Y29uc3QgcG9ydCA9IGZpbmRJbWVTY3JvbGxwb3J0KHN0YXJ0KTtcblx0bGV0IG5vZGUgPSBzdGFydDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUgIT09IHBvcnQgJiYgKGlzSW1lQ2hyb21lTG9jayhub2RlKSB8fCBub2RlLnNjcm9sbFRvcCB8fCBub2RlLnNjcm9sbExlZnQpKSB7XG5cdFx0XHRpZiAobm9kZSAhPT0gcG9ydCkge1xuXHRcdFx0XHRub2RlLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHRcdG5vZGUuc2Nyb2xsTGVmdCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5vZGUgPSBwYXJlbnRPZihub2RlKTtcblx0fVxufTtcbnZhciBwaW5PdmVybGF5U2Nyb2xsID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvdmVybGF5UGlubmluZykgcmV0dXJuO1xuXHRpZiAoIShyZWFkTGF5b3V0Vmlld3BvcnQoKS5rZXlib2FyZCA+IDAgfHwgaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSByZXR1cm47XG5cdG92ZXJsYXlQaW5uaW5nID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRwaW5WaXN1YWxWaWV3cG9ydCgpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cuc2Nyb2xsWSkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYgKHJvb3Quc2Nyb2xsVG9wIHx8IHJvb3Quc2Nyb2xsTGVmdCkgcm9vdC5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoYm9keSAmJiAoYm9keS5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxMZWZ0KSkgYm9keS5zY3JvbGxUbygwLCAwKTtcblx0XHRpZiAoIWlzQ29sbGFwc2VkQ2FyZXQoKSkgcmVzZXRDaHJvbWVTY3JvbGwoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cdH0gZmluYWxseSB7XG5cdFx0b3ZlcmxheVBpbm5pbmcgPSBmYWxzZTtcblx0fVxufTtcbnZhciBzY3JvbGxJbnRvVmlld1BhdGNoZWQgPSBmYWxzZTtcbnZhciBwYXRjaEltZVNjcm9sbEludG9WaWV3ID0gKCkgPT4ge1xuXHRpZiAoc2Nyb2xsSW50b1ZpZXdQYXRjaGVkIHx8IHR5cGVvZiBFbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdHNjcm9sbEludG9WaWV3UGF0Y2hlZCA9IHRydWU7XG5cdGNvbnN0IG9yaWcgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldztcblx0RWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbihhcmcpIHtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiYgIWlzQ29sbGFwc2VkQ2FyZXQoKSkgcmV0dXJuO1xuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNJbWVDaHJvbWVMb2NrKHRoaXMpKSByZXR1cm47XG5cdFx0cmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBhcmcpO1xuXHR9O1xufTtcbnZhciBwaW5JbWVDaHJvbWUgPSAob3B0cykgPT4ge1xuXHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdGlmICghb3B0cz8uY2FyZXQpIHJldHVybjtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRwaW5PdmVybGF5U2Nyb2xsKCk7XG5cdFx0cGluSW1lQ2FyZXRJblNjcm9sbHBvcnQoKTtcblx0fSk7XG59O1xudmFyIGdldEF2YWlsU2l6ZSA9ICgpID0+IHtcblx0ZW5zdXJlVmlydHVhbEtleWJvYXJkT3ZlcmxheSgpO1xuXHRjb25zdCBsID0gdHlwZW9mIG1hdGNoTWVkaWEgIT0gXCJ1bmRlZmluZWRcIiA/IG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik/Lm1hdGNoZXMgOiBmYWxzZTtcblx0Y29uc3QgdnYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnZpc3VhbFZpZXdwb3J0IDogbnVsbDtcblx0Y29uc3QgbGF5b3V0ID0gcmVhZExheW91dFZpZXdwb3J0KCk7XG5cdGNvbnN0IHZ2QmxvY2sgPSB7XG5cdFx0XCItLXZ2LXdpZHRoXCI6IGAke3Z2Py53aWR0aCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMCl9cHhgLFxuXHRcdFwiLS12di1oZWlnaHRcIjogYCR7dnY/LmhlaWdodCA/PyAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IDApfXB4YCxcblx0XHRcIi0tdnYtb2Zmc2V0LWxlZnRcIjogYCR7dnY/Lm9mZnNldExlZnQgPz8gMH1weGAsXG5cdFx0XCItLXZ2LW9mZnNldC10b3BcIjogYCR7dnY/Lm9mZnNldFRvcCA/PyAwfXB4YCxcblx0XHRcIi0tdnYtc2NhbGVcIjogU3RyaW5nKHZ2Py5zY2FsZSA/PyAxKSxcblx0XHRcIi0tbHYtd2lkdGhcIjogYCR7bGF5b3V0LndpZHRofXB4YCxcblx0XHRcIi0tbHYtaGVpZ2h0XCI6IGAke2xheW91dC5oZWlnaHR9cHhgLFxuXHRcdFwiLS1rZXlib2FyZC1vdmVybGF5LWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgLFxuXHRcdFwiLS12aXJ0dWFsLWtleWJvYXJkLWhlaWdodFwiOiBgJHtsYXlvdXQua2V5Ym9hcmR9cHhgXG5cdH07XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXZrLW9wZW5cIik7XG5cdGlmICh0eXBlb2Ygc2NyZWVuICE9IFwidW5kZWZpbmVkXCIpIHtcblx0XHRjb25zdCBhdyA9IHNjcmVlbj8uYXZhaWxXaWR0aCArIFwicHhcIjtcblx0XHRjb25zdCBhaCA9IHNjcmVlbj8uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFwiLS1zY3JlZW4td2lkdGhcIjogTWF0aC5taW4oc2NyZWVuPy53aWR0aCwgc2NyZWVuPy5hdmFpbFdpZHRoKSArIFwicHhcIixcblx0XHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IE1hdGgubWluKHNjcmVlbj8uaGVpZ2h0LCBzY3JlZW4/LmF2YWlsSGVpZ2h0KSArIFwicHhcIixcblx0XHRcdFwiLS1hdmFpbC13aWR0aFwiOiBsID8gYWggOiBhdyxcblx0XHRcdFwiLS1hdmFpbC1oZWlnaHRcIjogbCA/IGF3IDogYWgsXG5cdFx0XHRcIi0tdmlldy1oZWlnaHRcIjogYCR7bGF5b3V0LmhlaWdodCB8fCBNYXRoLm1pbihzY3JlZW4/LmF2YWlsSGVpZ2h0LCB3aW5kb3c/LmlubmVySGVpZ2h0KSB8fCAwfXB4YCxcblx0XHRcdFwiLS1waXhlbC1yYXRpb1wiOiBTdHJpbmcoZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSxcblx0XHRcdC4uLnZ2QmxvY2tcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0XCItLXNjcmVlbi13aWR0aFwiOiBcIjBweFwiLFxuXHRcdFwiLS1zY3JlZW4taGVpZ2h0XCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLXdpZHRoXCI6IFwiMHB4XCIsXG5cdFx0XCItLWF2YWlsLWhlaWdodFwiOiBcIjBweFwiLFxuXHRcdFwiLS12aWV3LWhlaWdodFwiOiBgJHtsYXlvdXQuaGVpZ2h0fXB4YCxcblx0XHRcIi0tcGl4ZWwtcmF0aW9cIjogXCIxXCIsXG5cdFx0Li4udnZCbG9ja1xuXHR9O1xufTtcbnZhciBhdmFpbFNpemUgPSBnZXRBdmFpbFNpemUoKTtcbnZhciBjbGFzc2VzID0gW1tcIjpyb290LCA6aG9zdCwgOnNjb3BlXCIsIGF2YWlsU2l6ZV1dO1xudmFyIG9yaWVudGF0aW9uTnVtYmVyTWFwID0ge1xuXHRcInBvcnRyYWl0LXByaW1hcnlcIjogMCxcblx0XCJsYW5kc2NhcGUtcHJpbWFyeVwiOiAxLFxuXHRcInBvcnRyYWl0LXNlY29uZGFyeVwiOiAyLFxuXHRcImxhbmRzY2FwZS1zZWNvbmRhcnlcIjogM1xufTtcbnZhciB1cGRhdGVWUCA9IChldikgPT4ge1xuXHRjb25zdCBydWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRPYmplY3QuYXNzaWduKGF2YWlsU2l6ZSwgZ2V0QXZhaWxTaXplKCkpO1xuXHRPYmplY3QuZW50cmllcyhhdmFpbFNpemUpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFZhbHVlXSkgPT4ge1xuXHRcdGNvbnN0IGV4aXN0cyA9IHJ1bGU/LnN0eWxlPy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKTtcblx0XHRpZiAoIWV4aXN0cyB8fCBleGlzdHMgIT0gcHJvcFZhbHVlKSBydWxlPy5zdHlsZT8uc2V0UHJvcGVydHk/Lihwcm9wTmFtZSwgcHJvcFZhbHVlIHx8IFwiXCIsIFwiXCIpO1xuXHR9KTtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcmllbnRhdGlvbi1zZWNvbmRhcnlcIiwgc2NyZWVuPy5vcmllbnRhdGlvbj8udHlwZT8uZW5kc1dpdGg/LihcInNlY29uZGFyeVwiKSA/IFwiMVwiIDogXCIwXCIpO1xufTtcbnZhciBnZXRDb3JyZWN0T3JpZW50YXRpb24gPSAoKSA9PiB7XG5cdGxldCBvcmllbnRhdGlvblR5cGUgPSBzY3JlZW4/Lm9yaWVudGF0aW9uPy50eXBlIHx8IFwicG9ydHJhaXQtcHJpbWFyeVwiO1xuXHRpZiAoIWdsb2JhbFRoaXMubWF0Y2hNZWRpYShcIigoZGlzcGxheS1tb2RlOiBmdWxsc2NyZWVuKSBvciAoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKSBvciAoZGlzcGxheS1tb2RlOiB3aW5kb3ctY29udHJvbHMtb3ZlcmxheSkpXCIpLm1hdGNoZXMpIHtcblx0XHRpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIG9yaWVudGF0aW9uVHlwZSA9IG9yaWVudGF0aW9uVHlwZS5yZXBsYWNlKFwibGFuZHNjYXBlXCIsIFwicG9ydHJhaXRcIik7XG5cdFx0ZWxzZSBpZiAobWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSBvcmllbnRhdGlvblR5cGUgPSBvcmllbnRhdGlvblR5cGUucmVwbGFjZShcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIpO1xuXHR9XG5cdHJldHVybiBvcmllbnRhdGlvblR5cGU7XG59O1xudmFyIHBhc3NpdmVPcHRzJDEgPSB7IHBhc3NpdmU6IHRydWUgfTtcbnZhciBhcHBseUNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKHJhdykgPT4ge1xuXHRjb25zdCBuZXh0ID0gTnVtYmVyKHJhdykgfHwgMDtcblx0aWYgKG5leHQgPiAwKSBjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IG5leHQ7XG5cdHVwZGF0ZVZQKCk7XG5cdHBpbkltZUNocm9tZSh7IGNhcmV0OiB0cnVlIH0pO1xufTtcbnZhciBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0ID0gKCkgPT4ge1xuXHRjYXBhY2l0b3JLZXlib2FyZEhlaWdodCA9IDA7XG5cdHVwZGF0ZVZQKCk7XG59O1xudmFyIGJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyA9ICgpID0+IHtcblx0aWYgKHdpbmRvd0tleWJvYXJkQm91bmQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHR3aW5kb3dLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0Y29uc3Qgb25TaG93ID0gKGV2KSA9PiB7XG5cdFx0Y29uc3QgZSA9IGV2O1xuXHRcdGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xuXHRcdGNvbnN0IGZyb21EZXRhaWwgPSB0eXBlb2YgZGV0YWlsID09PSBcInN0cmluZ1wiID8gKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRldGFpbCk/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdH0pKCkgOiBkZXRhaWw/LmtleWJvYXJkSGVpZ2h0O1xuXHRcdGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoZS5rZXlib2FyZEhlaWdodCA/PyBmcm9tRGV0YWlsKTtcblx0fTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZFdpbGxTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmREaWRTaG93XCIsIG9uU2hvdyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5Ym9hcmRXaWxsSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlib2FyZERpZEhpZGVcIiwgY2xlYXJDYXBhY2l0b3JLZXlib2FyZEhlaWdodCk7XG59O1xudmFyIGJpbmRDYXBhY2l0b3JLZXlib2FyZCA9ICgpID0+IHtcblx0YmluZFdpbmRvd0tleWJvYXJkRXZlbnRzKCk7XG5cdGlmIChjYXBhY2l0b3JLZXlib2FyZEJvdW5kIHx8IHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cdGNvbnN0IGNhcCA9IGdsb2JhbFRoaXMuQ2FwYWNpdG9yO1xuXHRjb25zdCBLZXlib2FyZCA9IGNhcD8uUGx1Z2lucz8uS2V5Ym9hcmQ7XG5cdGlmICghS2V5Ym9hcmQ/LmFkZExpc3RlbmVyKSByZXR1cm47XG5cdGlmICh0eXBlb2YgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FwLmlzTmF0aXZlUGxhdGZvcm0oKSkgcmV0dXJuO1xuXHRjYXBhY2l0b3JLZXlib2FyZEJvdW5kID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRTY3JvbGw/Lih7IGlzRGlzYWJsZWQ6IHRydWUgfSk7XG5cdH0gY2F0Y2gge31cblx0dHJ5IHtcblx0XHRLZXlib2FyZC5zZXRSZXNpemVNb2RlPy4oeyBtb2RlOiBcIm5vbmVcIiB9KTtcblx0fSBjYXRjaCB7fVxuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkV2lsbFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZERpZFNob3dcIiwgKGluZm8pID0+IGFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQoaW5mbz8ua2V5Ym9hcmRIZWlnaHQpKTtcblx0S2V5Ym9hcmQuYWRkTGlzdGVuZXIoXCJrZXlib2FyZFdpbGxIaWRlXCIsIGNsZWFyQ2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQpO1xuXHRLZXlib2FyZC5hZGRMaXN0ZW5lcihcImtleWJvYXJkRGlkSGlkZVwiLCBjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0KTtcbn07XG52YXIgZW5zdXJlVmlld3BvcnRUcmFja2luZyA9ICgpID0+IHtcblx0aWYgKHZpZXdwb3J0VHJhY2tpbmdTdGFydGVkIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0dmlld3BvcnRUcmFja2luZ1N0YXJ0ZWQgPSB0cnVlO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0d2hlbkFueVNjcmVlbkNoYW5nZXMoKCkgPT4ge30pO1xufTtcbnZhciB3aGVuQW55U2NyZWVuQ2hhbmdlcyA9IChjYikgPT4ge1xuXHRsZXQgdGlja2luZyA9IGZhbHNlO1xuXHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aWNraW5nKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR1cGRhdGVWUCgpO1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0XHR0aWNraW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdHRpY2tpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgdW5zdWJzY3JpYmVycyA9IFtdO1xuXHRiaW5kQ2FwYWNpdG9yS2V5Ym9hcmQoKTtcblx0cGF0Y2hJbWVTY3JvbGxJbnRvVmlldygpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQobmF2aWdhdG9yPy52aXJ0dWFsS2V5Ym9hcmQsIFwiZ2VvbWV0cnljaGFuZ2VcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChkb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93Py52aXN1YWxWaWV3cG9ydCwgXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdHBpbk92ZXJsYXlTY3JvbGwoKTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0cGluT3ZlcmxheVNjcm9sbCgpO1xuXHR9LCB7XG5cdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRwYXNzaXZlOiB0cnVlXG5cdH0pKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KHdpbmRvdz8udmlzdWFsVmlld3BvcnQsIFwicmVzaXplXCIsICgpID0+IHtcblx0XHRwaW5JbWVDaHJvbWUoeyBjYXJldDogdHJ1ZSB9KTtcblx0XHR1cGRhdGUoKTtcblx0fSwgcGFzc2l2ZU9wdHMkMSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoc2NyZWVuPy5vcmllbnRhdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudCwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHVwZGF0ZSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKSwgXCJjaGFuZ2VcIiwgdXBkYXRlKSk7XG5cdHVuc3Vic2NyaWJlcnMucHVzaChhZGRFdmVudChtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCBcImNoYW5nZVwiLCB1cGRhdGUpKTtcblx0dW5zdWJzY3JpYmVycy5wdXNoKGFkZEV2ZW50KGRvY3VtZW50LCBcImZvY3VzaW5cIiwgKCkgPT4ge1xuXHRcdGJpbmRDYXBhY2l0b3JLZXlib2FyZCgpO1xuXHRcdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0XHRpZiAoaXNJbWVUYXJnZXQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcblx0XHRcdGxheW91dExvY2tXID0gTWF0aC5tYXgobGF5b3V0TG9ja1csIE51bWJlcih3aW5kb3cuaW5uZXJXaWR0aCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8ud2lkdGgpIHx8IDApO1xuXHRcdFx0bGF5b3V0TG9ja0ggPSBNYXRoLm1heChsYXlvdXRMb2NrSCwgTnVtYmVyKHdpbmRvdy5pbm5lckhlaWdodCkgfHwgMCwgTnVtYmVyKHdpbmRvdy52aXN1YWxWaWV3cG9ydD8uaGVpZ2h0KSB8fCAwKTtcblx0XHR9XG5cdFx0cGluSW1lQ2hyb21lKHsgY2FyZXQ6IHRydWUgfSk7XG5cdFx0dXBkYXRlKCk7XG5cdH0sIHtcblx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdHBhc3NpdmU6IHRydWVcblx0fSkpO1xuXHR1bnN1YnNjcmliZXJzLnB1c2goYWRkRXZlbnQoZG9jdW1lbnQsIFwiZm9jdXNvdXRcIiwgdXBkYXRlLCBwYXNzaXZlT3B0cyQxKSk7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0dXBkYXRlKCk7XG5cdHJ1bldoZW5JZGxlKCgpID0+IHVwZGF0ZSgpLCAxMDApO1xuXHRyZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVycy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSk7XG59O1xudmFyIGZpeE9yaWVudFRvU2NyZWVuID0gKGVsZW1lbnQpID0+IHtcblx0aWYgKCFlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zPy4oXCJuYXRpdmUtcG9ydHJhaXQtb3B0aW1pemVkXCIpKSB7XG5cdFx0ZWxlbWVudD8uY2xhc3NMaXN0Py5hZGQ/LihcIm5hdGl2ZS1wb3J0cmFpdC1vcHRpbWl6ZWRcIik7XG5cdFx0cmV0dXJuIHdoZW5BbnlTY3JlZW5DaGFuZ2VzKCgpID0+IHtcblx0XHRcdGNvbnN0IG5leHQgPSBvcmllbnRhdGlvbk51bWJlck1hcD8uW2dldENvcnJlY3RPcmllbnRhdGlvbigpXSA/PyAwO1xuXHRcdFx0ZWxlbWVudC5vcmllbnQgPSBuZXh0O1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGU/LihcIm9yaWVudFwiLCBTdHJpbmcobmV4dCkpO1xuXHRcdFx0ZWxlbWVudC5zdHlsZT8uc2V0UHJvcGVydHk/LihcIi0tb3JpZW50XCIsIFN0cmluZyhuZXh0KSk7XG5cdFx0fSk7XG5cdH1cbn07XG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkoKTtcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiBlbnN1cmVWaXJ0dWFsS2V5Ym9hcmRPdmVybGF5KCksIHsgb25jZTogdHJ1ZSB9KTtcbn1cblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL2FnYXRlL01lYXN1cmUudHNcbnZhciBjdHggPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBpbml0VGV4dFN0eWxlID0gKGVsZW1lbnQsIGN0eCkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgXCJcIik7XG5cdGlmIChjdHggJiYgc3R5bGUpIHtcblx0XHRjb25zdCBmb250V2VpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtd2VpZ2h0XCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0Y29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpIHx8IFwiMTZweFwiO1xuXHRcdGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1mYW1pbHlcIikgfHwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcblx0XHRjb25zdCBmb250U3RyZXRjaCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXN0cmV0Y2hcIikgfHwgXCJub3JtYWxcIjtcblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRTdHJldGNoID0gZm9udFN0cmV0Y2guaW5jbHVkZXMoXCIlXCIpID8gXCJub3JtYWxcIiA6IGZvbnRTdHJldGNoO1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5sZXR0ZXJTcGFjaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxldHRlci1zcGFjaW5nXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnRLZXJuaW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQta2VybmluZ1wiKSB8fCBcImF1dG9cIjtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdHRyeSB7XG5cdFx0XHRjdHguZm9udFZhcmlhbnRDYXBzID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtdmFyaWFudC1jYXBzXCIpIHx8IFwibm9ybWFsXCI7XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHR0cnkge1xuXHRcdFx0Y3R4LmZvbnQgPSBgJHtmb250V2VpZ2h0fSAke2ZvbnRTaXplfSAke2ZvbnRGYW1pbHl9YDtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG59O1xudmFyIG1lYXN1cmVUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoZWxlbWVudCwgY3R4KTtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cdHJldHVybiB7IHdpZHRoOiBudWxsIH07XG59O1xudmFyIG1lYXN1cmVJbnB1dEluRm9jdXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdGV4dCA9IGlucHV0LnZhbHVlLnNsaWNlKDAsIGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKTtcblx0cmV0dXJuIG1lYXN1cmVUZXh0KHRleHQsIGlucHV0KTtcbn07XG52YXIgY29tcHV0ZUNhcmV0UG9zaXRpb24gPSAoaW5wdXQsIHBvaW50KSA9PiB7XG5cdGNvbnN0IHRleHQgPSBpbnB1dD8udmFsdWUgfHwgXCJcIjtcblx0aWYgKGN0eCkge1xuXHRcdGluaXRUZXh0U3R5bGUoaW5wdXQsIGN0eCk7XG5cdFx0bGV0IGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dC5zbGljZSgwLCBpKSk/LndpZHRoO1xuXHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA9PSBudWxsKSByZXR1cm4gdGV4dC5sZW5ndGg7XG5cdFx0XHRpZiAoY3VycmVudFdpZHRoICE9IG51bGwgJiYgY3VycmVudFdpZHRoID49IHBvaW50WzBdKSByZXR1cm4gTWF0aC5tYXgoaSAtIDEsIDApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dC5sZW5ndGg7XG59O1xudmFyIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCA9IChpbnB1dCwgY2xpZW50KSA9PiB7XG5cdGNvbnN0IGJveCA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBwb2ludCA9IFtjbGllbnRbMF0gLSBib3gubGVmdCAvIHVuZml4ZWRDbGllbnRab29tKCksIGNsaWVudFsxXSAtIGJveC50b3AgLyB1bmZpeGVkQ2xpZW50Wm9vbSgpXTtcblx0cmV0dXJuIGNvbXB1dGVDYXJldFBvc2l0aW9uKGlucHV0LCBwb2ludCk7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvYWdhdGUvTGF1bmNoZXJHcmlkLnRzXG52YXIgcmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQgPSAoZWwsIGxheW91dE92ZXJyaWRlKSA9PiB7XG5cdGNvbnN0IGMgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtY29sdW1uc1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IHIgPSBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyaWQtcm93c1wiKSB8fCBcIlwiLCAxMCk7XG5cdGNvbnN0IGJhc2UgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dE92ZXJyaWRlID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTnVtYmVyLmlzRmluaXRlKGMpICYmIGMgPiAwID8gYyA6IGJhc2VbMF0sIE51bWJlci5pc0Zpbml0ZShyKSAmJiByID4gMCA/IHIgOiBiYXNlWzFdXTtcbn07XG52YXIgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50ID0gKGdyaWRTeXN0ZW0sIGNsaWVudFBvaW50LCBhcmdzLCBtb2RlID0gXCJmbG9vclwiKSA9PiB7XG5cdGlmICghZ3JpZFN5c3RlbSkgcmV0dXJuIFswLCAwXTtcblx0Y29uc3QgcmVjdCA9IGdyaWRTeXN0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKTtcblx0aWYgKCFyZWN0KSByZXR1cm4gWzAsIDBdO1xuXHRjb25zdCBsYXlvdXQgPSByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudChncmlkU3lzdGVtLCBhcmdzPy5sYXlvdXQpO1xuXHRjb25zdCBvcmllbnQgPSBvcmllbnRPZihncmlkU3lzdGVtKTtcblx0Y29uc3QgY3MgPSBnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/LihncmlkU3lzdGVtKTtcblx0Y29uc3QgcGwgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nTGVmdCkgfHwgMDtcblx0Y29uc3QgcHQgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nVG9wKSB8fCAwO1xuXHRjb25zdCBwciA9IHBhcnNlRmxvYXQoY3M/LnBhZGRpbmdSaWdodCkgfHwgMDtcblx0Y29uc3QgcGIgPSBwYXJzZUZsb2F0KGNzPy5wYWRkaW5nQm90dG9tKSB8fCAwO1xuXHRjb25zdCBjb250ZW50VyA9IE1hdGgubWF4KDEsIChyZWN0LndpZHRoIHx8IGdyaWRTeXN0ZW0uY2xpZW50V2lkdGggfHwgMSkgLSBwbCAtIHByKTtcblx0Y29uc3QgY29udGVudEggPSBNYXRoLm1heCgxLCAocmVjdC5oZWlnaHQgfHwgZ3JpZFN5c3RlbS5jbGllbnRIZWlnaHQgfHwgMSkgLSBwdCAtIHBiKTtcblx0Y29uc3QgY3NDb29yZCA9IFsoY2xpZW50UG9pbnQ/LlswXSB8fCAwKSAtIHJlY3QubGVmdCAtIHBsLCAoY2xpZW50UG9pbnQ/LlsxXSB8fCAwKSAtIHJlY3QudG9wIC0gcHRdO1xuXHRyZXR1cm4gcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsKGNzQ29vcmQsIFtjb250ZW50VywgY29udGVudEhdLCBsYXlvdXQsIG9yaWVudCwge1xuXHRcdG1vZGUsXG5cdFx0cmVkaXJlY3Q6IHtcblx0XHRcdGl0ZW06IGFyZ3M/Lml0ZW0sXG5cdFx0XHRsaXN0OiBhcmdzPy5saXN0LFxuXHRcdFx0aXRlbXM6IGFyZ3M/Lml0ZW1zXG5cdFx0fVxuXHR9KTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9kZWNvci9BbmltYXRpb24udHNcbnZhciBhbmltYXRlU2hvdyA9ICh0YXJnZXQpID0+IGFwcGVhcih0YXJnZXQsIGRlY29yU2hvdyk7XG52YXIgYW5pbWF0ZUhpZGUgPSAodGFyZ2V0KSA9PiBkaXNhcHBlYXIodGFyZ2V0LCBkZWNvckhpZGUpO1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvZGVjb3IvU2hhcGUudHNcbnZhciBXYXZ5U2hhcGVkQ2lyY2xlID0gKHN0ZXBzID0gMTAwLCBhbXBsaXR1ZGUgPSAuMDUsIGZyZXEgPSA4KSA9PiB7XG5cdGNvbnN0IHBvaW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHBvaW50cy5wdXNoKGkgLyBzdGVwcyk7XG5cdGNvbnN0IGFuZ2xlID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoJHtzdGVwfXJhZCAqIHBpICogMilgO1xuXHR9O1xuXHRjb25zdCB2YXJpYW50ID0gKHN0ZXApID0+IHtcblx0XHRyZXR1cm4gYGNhbGMoY2FsYyhjb3MoY2FsYyh2YXIoLS1jbGlwLWZyZXEsIDgpICogJHthbmdsZShzdGVwKX0pKSAqIDAuNSArIDAuNSkgKiB2YXIoLS1jbGlwLWFtcGxpdHVkZSwgMCkpYDtcblx0fTtcblx0Y29uc3QgZnVuYyA9IChzdGVwKSA9PiBbYGNhbGMoY2FsYygwLjUgKyBjYWxjKGNvcygke2FuZ2xlKHN0ZXApfSkgKiBjYWxjKDAuNSAtICR7dmFyaWFudChzdGVwKX0pKSkgKiB2YXIoLS1pY29uLXNpemUsIDEwMCUpKWAsIGBjYWxjKGNhbGMoMC41ICsgY2FsYyhzaW4oJHthbmdsZShzdGVwKX0pICogY2FsYygwLjUgLSAke3ZhcmlhbnQoc3RlcCl9KSkpICogdmFyKC0taWNvbi1zaXplLCAxMDAlKSlgXTtcblx0cmV0dXJuIHtcblx0XHRcIi0tY2xpcC1hbXBsaXR1ZGVcIjogYW1wbGl0dWRlLFxuXHRcdFwiLS1jbGlwLWZyZXFcIjogZnJlcSxcblx0XHRcIi0tY2xpcC1wYXRoXCI6IGBwb2x5Z29uKCR7cG9pbnRzLm1hcCgoc3RlcCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZ1bmMoc3RlcCkuam9pbihcIiBcIik7XG5cdFx0fSkuam9pbihcIiwgXCIpfSlgXG5cdH07XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vT2JzZXJ2ZXIudHNcbnZhciBvbkJvcmRlck9ic2VydmVTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG9uQm9yZGVyT2JzZXJ2ZVwiKTtcbnZhciBvbkJvcmRlck9ic2VydmUkMSA9IGdsb2JhbFRoaXNbb25Cb3JkZXJPYnNlcnZlU3ltYm9sXSA/Pz0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgb25Db250ZW50T2JzZXJ2ZVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJkb20udHNAb25Db250ZW50T2JzZXJ2ZVwiKTtcbnZhciBvbkNvbnRlbnRPYnNlcnZlJDEgPSBnbG9iYWxUaGlzW29uQ29udGVudE9ic2VydmVTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciB1bndyYXBGcm9tUXVlcnkgPSAoZWxlbWVudCkgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LmN1cnJlbnQgPT0gXCJvYmplY3RcIikgZWxlbWVudCA9IGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudD8uY3VycmVudCA/PyAodHlwZW9mIGVsZW1lbnQ/LnNlbGYgPT0gXCJvYmplY3RcIiA/IGVsZW1lbnQ/LnNlbGYgOiBudWxsKSA/PyBlbGVtZW50O1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgbm9ybWFsaXplU2VsZWN0b3IgPSAoc2VsZWN0b3IsIGZhbGxiYWNrID0gXCIqXCIpID0+IHtcblx0aWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbGxiYWNrO1xuXHRyZXR1cm4gc2VsZWN0b3IudHJpbSgpIHx8IGZhbGxiYWNrO1xufTtcbnZhciBzYWZlUXVlcnlTZWxlY3RvckFsbCA9IChlbCwgc2VsZWN0b3IpID0+IHtcblx0aWYgKCFlbCB8fCB0eXBlb2YgZWwucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gW107XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLCBcIlwiKTtcblx0aWYgKCFzZWwpIHJldHVybiBbXTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgfHwgW10pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn07XG52YXIgc2FmZU1hdGNoZXMgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG5cdGlmICghZWwgfHwgdHlwZW9mIGVsLm1hdGNoZXMgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvciwgXCJcIik7XG5cdGlmICghc2VsKSByZXR1cm4gZmFsc2U7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZWwubWF0Y2hlcyhzZWwpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgb2JzZXJ2ZUNvbnRlbnRCb3ggPSAoZWxlbWVudCwgY2IpID0+IHtcblx0aWYgKCFvbkNvbnRlbnRPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemVbMF07XG5cdFx0XHRcdGlmIChjb250ZW50Qm94U2l6ZSkgY2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYj8uKGNvbnRlbnRCb3hTaXplLCBvYnNlcnZlcikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNiPy4oe1xuXHRcdFx0aW5saW5lU2l6ZTogZWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGJsb2NrU2l6ZTogZWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9LCBvYnNlcnZlcik7XG5cdFx0b25Db250ZW50T2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJjb250ZW50LWJveFwiIH0pO1xuXHR9XG5cdG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnB1c2g/LihjYik7XG5cdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQ29udGVudE9ic2VydmUkMS5nZXQoZWxlbWVudCk/LmluZGV4T2YoY2IpIHx8IC0xLCAxKSB9O1xufTtcbnZhciBvYnNlcnZlQm9yZGVyQm94ID0gKGVsZW1lbnQsIGNiKSA9PiB7XG5cdGlmICghb25Cb3JkZXJPYnNlcnZlJDEuaGFzKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCkpKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykgaWYgKGVudHJ5LmJvcmRlckJveFNpemUpIHtcblx0XHRcdFx0Y29uc3QgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemVbMF07XG5cdFx0XHRcdGlmIChib3JkZXJCb3hTaXplKSBjYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiPy4oYm9yZGVyQm94U2l6ZSwgb2JzZXJ2ZXIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYj8uKHtcblx0XHRcdGlubGluZVNpemU6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG5cdFx0XHRibG9ja1NpemU6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cdFx0fSwgb2JzZXJ2ZXIpO1xuXHRcdG9uQm9yZGVyT2JzZXJ2ZSQxLnNldChlbGVtZW50LCBjYWxsYmFja3MpO1xuXHRcdGlmICgoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50KSBpbnN0YW5jZW9mIE5vZGUpIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudD8uZWxlbWVudCA/PyBlbGVtZW50LCB7IGJveDogXCJib3JkZXItYm94XCIgfSk7XG5cdH1cblx0b25Cb3JkZXJPYnNlcnZlJDEuZ2V0KGVsZW1lbnQpPy5wdXNoPy4oY2IpO1xuXHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiBvbkJvcmRlck9ic2VydmUkMS5nZXQoZWxlbWVudCk/LnNwbGljZT8uKG9uQm9yZGVyT2JzZXJ2ZSQxLmdldChlbGVtZW50KT8uaW5kZXhPZihjYikgfHwgLTEsIDEpIH07XG59O1xudmFyIG9ic2VydmVBdHRyaWJ1dGUgPSAoZWxlbWVudCwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRpZiAodHlwZW9mIGVsZW1lbnQ/LnNlbGVjdG9yID09IFwic3RyaW5nXCIpIHJldHVybiBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvcihlbGVtZW50LCBlbGVtZW50Py5zZWxlY3RvciwgYXR0cmlidXRlLCBjYik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KChhdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdKS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgJiYgYXR0cmlidXRlTGlzdC5oYXMobXV0YXRpb24uYXR0cmlidXRlTmFtZSkpIGNiKG11dGF0aW9uLCBvYnNlcnZlcik7XG5cdH0pO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWy4uLmF0dHJpYnV0ZUxpc3RdXG5cdH0pO1xuXHRhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gY2Ioe1xuXHRcdHRhcmdldDogZWxlbWVudCxcblx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRhdHRyaWJ1dGVOYW1lOiBhdHRyaWJ1dGUsXG5cdFx0b2xkVmFsdWU6IGVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKTtcblx0cmV0dXJuIG9ic2VydmVyO1xufTtcbnZhciBvYnNlcnZlQXR0cmlidXRlQnlTZWxlY3RvciA9IChlbGVtZW50LCBzZWxlY3RvciwgYXR0cmlidXRlLCBjYikgPT4ge1xuXHRjb25zdCBzZWwgPSBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcik7XG5cdGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBuZXcgU2V0KFsuLi5hdHRyaWJ1dGUuc3BsaXQoXCIsXCIpIHx8IFthdHRyaWJ1dGVdXS5tYXAoKHMpID0+IHMudHJpbSgpKSk7XG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkgaWYgKG11dGF0aW9uLnR5cGUgPT0gXCJjaGlsZExpc3RcIikge1xuXHRcdFx0Y29uc3QgYWRkZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykgfHwgW107XG5cdFx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSBBcnJheS5mcm9tKG11dGF0aW9uLnJlbW92ZWROb2RlcykgfHwgW107XG5cdFx0XHRhZGRlZE5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdHJlbW92ZWROb2Rlcy5wdXNoKC4uLkFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzIHx8IFtdKS5mbGF0TWFwKChlbCkgPT4gc2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWwsIHNlbCkpKTtcblx0XHRcdFsuLi5uZXcgU2V0KGFkZGVkTm9kZXMpXS5maWx0ZXIoKGVsKSA9PiBzYWZlTWF0Y2hlcyhlbCwgc2VsKSk/Lm1hcD8uKCh0YXJnZXQpID0+IHtcblx0XHRcdFx0YXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcblx0XHRcdFx0XHRjYih7XG5cdFx0XHRcdFx0XHR0YXJnZXQsXG5cdFx0XHRcdFx0XHR0eXBlOiBcImF0dHJpYnV0ZXNcIixcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0XHRcdFx0XHR9LCBvYnNlcnZlcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChzYWZlTWF0Y2hlcyhtdXRhdGlvbi50YXJnZXQsIHNlbCkgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSAmJiBhdHRyaWJ1dGVMaXN0LmhhcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkgY2IobXV0YXRpb24sIG9ic2VydmVyKTtcblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCA9IHVud3JhcEZyb21RdWVyeShlbGVtZW50KSwge1xuXHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbLi4uYXR0cmlidXRlTGlzdF0sXG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZVxuXHR9KTtcblx0c2FmZVF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudCwgc2VsKS5tYXAoKHRhcmdldCkgPT4gYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGNiKHtcblx0XHR0YXJnZXQsXG5cdFx0dHlwZTogXCJhdHRyaWJ1dGVzXCIsXG5cdFx0YXR0cmlidXRlTmFtZTogYXR0cmlidXRlLFxuXHRcdG9sZFZhbHVlOiB0YXJnZXQ/LmdldEF0dHJpYnV0ZT8uKGF0dHJpYnV0ZSlcblx0fSwgb2JzZXJ2ZXIpKSk7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG52YXIgb2JzZXJ2ZUJ5U2VsZWN0b3IgPSAoZWxlbWVudCwgc2VsZWN0b3IgPSBcIipcIiwgY2IgPSAobXV0LCBvYnMpID0+IHt9KSA9PiB7XG5cdGNvbnN0IHNlbCA9IG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0Y29uc3QgdW53cmFwTm9kZXNCeVNlbGVjdG9yID0gKG5vZGVzKSA9PiB7XG5cdFx0Y29uc3QgJG5vZGVzID0gQXJyYXkuZnJvbShub2RlcyB8fCBbXSkgfHwgW107XG5cdFx0JG5vZGVzLnB1c2goLi4uQXJyYXkuZnJvbShub2RlcyB8fCBbXSkuZmxhdE1hcCgoZWwpID0+IHNhZmVRdWVyeVNlbGVjdG9yQWxsKGVsLCBzZWwpKSk7XG5cdFx0cmV0dXJuIFsuLi5BcnJheS5mcm9tKG5ldyBTZXQoJG5vZGVzKS52YWx1ZXMoKSldLmZpbHRlcigoZWwpID0+IHNhZmVNYXRjaGVzKGVsLCBzZWwpKTtcblx0fTtcblx0bGV0IG9iUmVmID0gbnVsbDtcblx0Y29uc3QgaGFuZGxlTXV0YXRpb24gPSAobXV0YXRpb24pID0+IHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG9iUmVmPy5kZXJlZj8uKCk7XG5cdFx0Y29uc3QgYWRkZWROb2RlcyA9IHVud3JhcE5vZGVzQnlTZWxlY3RvcihtdXRhdGlvbi5hZGRlZE5vZGVzKTtcblx0XHRjb25zdCByZW1vdmVkTm9kZXMgPSB1bndyYXBOb2Rlc0J5U2VsZWN0b3IobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcblx0XHRpZiAoYWRkZWROb2Rlcy5sZW5ndGggPiAwIHx8IHJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSBjYj8uKHtcblx0XHRcdHR5cGU6IG11dGF0aW9uLnR5cGUsXG5cdFx0XHR0YXJnZXQ6IG11dGF0aW9uLnRhcmdldCxcblx0XHRcdGF0dHJpYnV0ZU5hbWU6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUsXG5cdFx0XHRhdHRyaWJ1dGVOYW1lc3BhY2U6IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVzcGFjZSxcblx0XHRcdG5leHRTaWJsaW5nOiBtdXRhdGlvbi5uZXh0U2libGluZyxcblx0XHRcdG9sZFZhbHVlOiBtdXRhdGlvbi5vbGRWYWx1ZSxcblx0XHRcdHByZXZpb3VzU2libGluZzogbXV0YXRpb24ucHJldmlvdXNTaWJsaW5nLFxuXHRcdFx0YWRkZWROb2Rlcyxcblx0XHRcdHJlbW92ZWROb2Rlc1xuXHRcdH0sIG9ic2VydmVyKTtcblx0fTtcblx0Y29uc3QgaGFuZGxlQ29tZSA9IChldikgPT4ge1xuXHRcdGhhbmRsZU11dGF0aW9uKHtcblx0XHRcdGFkZGVkTm9kZXM6IFtldj8udGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHJlbW92ZWROb2RlczogW2V2Py5yZWxhdGVkVGFyZ2V0XS5maWx0ZXIoKGVsKSA9PiAhIWVsKSxcblx0XHRcdHR5cGU6IFwiY2hpbGRMaXN0XCIsXG5cdFx0XHR0YXJnZXQ6IGV2Py5jdXJyZW50VGFyZ2V0XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZU91dENvbWUgPSAoZXYpID0+IHtcblx0XHRoYW5kbGVNdXRhdGlvbih7XG5cdFx0XHRhZGRlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnRhcmdldF0uZmlsdGVyKChlbCkgPT4gISFlbCksXG5cdFx0XHR0eXBlOiBcImNoaWxkTGlzdFwiLFxuXHRcdFx0dGFyZ2V0OiBldj8uY3VycmVudFRhcmdldFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVGb2N1c0NsaWNrID0gKGV2KSA9PiB7XG5cdFx0aGFuZGxlTXV0YXRpb24oe1xuXHRcdFx0YWRkZWROb2RlczogW2V2Py50YXJnZXRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0cmVtb3ZlZE5vZGVzOiBbZXY/LnJlbGF0ZWRUYXJnZXQgfHwgZG9jdW1lbnQ/LmFjdGl2ZUVsZW1lbnRdLmZpbHRlcigoZWwpID0+ICEhZWwpLFxuXHRcdFx0dHlwZTogXCJjaGlsZExpc3RcIixcblx0XHRcdHRhcmdldDogZXY/LmN1cnJlbnRUYXJnZXRcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZmFjdG9ycyA9IHtcblx0XHRwYXNzaXZlOiB0cnVlLFxuXHRcdGNhcHR1cmU6IGZhbHNlXG5cdH07XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6aG92ZXJcIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmFjdGl2ZVwiKSkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdmVyXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmhvdmVyXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm92ZXJcIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRyZXR1cm4geyBkaXNjb25uZWN0OiAoKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3ZlclwiLCBoYW5kbGVDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJvdXRcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0fSB9O1xuXHR9XG5cdGlmIChzZWw/LmluY2x1ZGVzPy4oXCI6YWN0aXZlXCIpKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0cmV0dXJuIHsgZGlzY29ubmVjdDogKCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlT3V0Q29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRpZiAoc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzXCIpICYmIHNlbD8uaW5jbHVkZXM/LihcIjpmb2N1cy13aXRoaW5cIikgJiYgc2VsPy5pbmNsdWRlcz8uKFwiOmZvY3VzLXZpc2libGVcIikpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGhhbmRsZUNvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZU91dENvbWUsIGZhY3RvcnMpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdHJldHVybiB7IGRpc2Nvbm5lY3Q6ICgpID0+IHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgaGFuZGxlQ29tZSwgZmFjdG9ycyk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBoYW5kbGVPdXRDb21lLCBmYWN0b3JzKTtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvY3VzQ2xpY2ssIGZhY3RvcnMpO1xuXHRcdH0gfTtcblx0fVxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIGlmIChtdXRhdGlvbi50eXBlID09IFwiY2hpbGRMaXN0XCIpIGhhbmRsZU11dGF0aW9uKG11dGF0aW9uKTtcblx0fSk7XG5cdG9iUmVmID0gbmV3IFdlYWtSZWYob2JzZXJ2ZXIpO1xuXHRpZiAoKGVsZW1lbnQ/LmVsZW1lbnQgPz8gZWxlbWVudCkgaW5zdGFuY2VvZiBOb2RlKSBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQgPSB1bndyYXBGcm9tUXVlcnkoZWxlbWVudCksIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZVxuXHR9KTtcblx0Y29uc3Qgc2VsZWN0ZWQgPSBzYWZlUXVlcnlTZWxlY3RvckFsbChlbGVtZW50LCBzZWwpO1xuXHRpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkgY2I/Lih7XG5cdFx0YWRkZWROb2Rlczogc2VsZWN0ZWQsXG5cdFx0cmVtb3ZlZE5vZGVzOiBbXVxuXHR9LCBvYnNlcnZlcik7XG5cdHJldHVybiBvYnNlcnZlcjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9CZWhhdmlvci50c1xudmFyIGJvdW5kQmVoYXZpb3JzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgYmluZEJlaGF2aW9yID0gKGVsZW1lbnQsIGJlaFNldCwgYmVoYXZpb3IpID0+IHtcblx0bmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdGlmICghYmVoU2V0LmhhcyhiZWhhdmlvcikpIGJlaFNldC5hZGQoYmVoYXZpb3IpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn07XG52YXIgcmVmbGVjdEJlaGF2aW9ycyA9IChlbGVtZW50LCBiZWhhdmlvcnMpID0+IHtcblx0aWYgKCFlbGVtZW50KSByZXR1cm47XG5cdGlmIChiZWhhdmlvcnMpIHtcblx0XHRjb25zdCBiZWhTZXQgPSBib3VuZEJlaGF2aW9ycy5nZXRPckluc2VydChlbGVtZW50LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRbLi4uYmVoYXZpb3JzPy52YWx1ZXM/LigpIHx8IFtdXS5tYXAoKGUpID0+IGJpbmRCZWhhdmlvcihlbGVtZW50LCBiZWhTZXQsIGUpKTtcblx0fVxuXHRyZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9TdG9yZS50c1xudmFyIG5hbWVkU3RvcmVNYXBzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BuYW1lZFN0b3JlTWFwc1wiKTtcbnZhciBuYW1lZFN0b3JlTWFwcyA9IGdsb2JhbFRoaXNbbmFtZWRTdG9yZU1hcHNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGdldFN0b3Jlc09mRWxlbWVudCA9IChtYXAsIGVsZW1lbnQpID0+IHtcblx0Y29uc3QgRSA9IFsuLi5tYXAuZW50cmllcygpIHx8IFtdXTtcblx0cmV0dXJuIG5ldyBNYXAoRT8ubWFwPy4oKFtuLCBtXSkgPT4gW24sIG0/LmdldD8uKGVsZW1lbnQpXSk/LmZpbHRlcj8uKChbbiwgZV0pID0+ICEhZSkgfHwgW10pO1xufTtcbnZhciBpc1dlYWtDb21wYXRpYmxlID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh0eXBlb2YgZWxlbWVudCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBlbGVtZW50ID09IFwiZnVuY3Rpb25cIikgJiYgZWxlbWVudCAhPSBudWxsO1xufTtcbnZhciBiaW5kU3RvcmUgPSAoZWxlbWVudCwgbmFtZSwgb2JqKSA9PiB7XG5cdGlmICghaXNXZWFrQ29tcGF0aWJsZShlbGVtZW50KSAmJiBlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50O1xuXHRsZXQgd2Vha01hcCA9IG5hbWVkU3RvcmVNYXBzLmdldChuYW1lKTtcblx0aWYgKCF3ZWFrTWFwKSB7XG5cdFx0d2Vha01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdG5hbWVkU3RvcmVNYXBzLnNldChuYW1lLCB3ZWFrTWFwKTtcblx0fVxuXHRpZiAoIXdlYWtNYXAuaGFzKGVsZW1lbnQpICYmIGVsZW1lbnQgIT0gbnVsbCkgd2Vha01hcC5zZXQoZWxlbWVudCwgb2JqKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIHJlZmxlY3RTdG9yZXMgPSAoZWxlbWVudCwgc3RvcmVzKSA9PiB7XG5cdGlmICghZWxlbWVudCB8fCAhc3RvcmVzKSByZXR1cm47XG5cdGZvciAoY29uc3QgW25hbWUsIG9ial0gb2Ygc3RvcmVzLmVudHJpZXMoKSkgYmluZFN0b3JlKGVsZW1lbnQsIG5hbWUsIG9iaik7XG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL21peGluL01peGlucy50c1xudmFyIHJlZmxlY3RNaXhpbnMgPSAoZWxlbWVudCwgbWl4aW5zKSA9PiB7XG5cdGlmICghZWxlbWVudCkgcmV0dXJuO1xuXHRpZiAobWl4aW5zKSB7XG5cdFx0Y29uc3QgbWl4aW5TZXQgPSBib3VuZE1peGluU2V0Py5nZXQ/LihlbGVtZW50KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcblx0XHRpZiAoIWJvdW5kTWl4aW5TZXQ/Lmhhcz8uKGVsZW1lbnQpKSBib3VuZE1peGluU2V0Py5zZXQ/LihlbGVtZW50LCBtaXhpblNldCk7XG5cdFx0Wy4uLm1peGlucz8udmFsdWVzPy4oKSB8fCBbXV0ubWFwKChlKSA9PiBiaW5kTWl4aW5zKGVsZW1lbnQsIGUsIG1peGluU2V0KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGdldEVsZW1lbnRSZWxhdGVkID0gKGVsZW1lbnQpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdG9yZVNldDogZ2V0U3RvcmVzT2ZFbGVtZW50KG5hbWVkU3RvcmVNYXBzLCBlbGVtZW50KSxcblx0XHRtaXhpblNldDogYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCksXG5cdFx0YmVoYXZpb3JTZXQ6IGJvdW5kQmVoYXZpb3JzPy5nZXQ/LihlbGVtZW50KVxuXHR9O1xufTtcbnZhciBiaW5kTWl4aW5zID0gKGVsZW1lbnQsIG1peGluLCBtaXhTZXQpID0+IHtcblx0Y29uc3Qgd2VsID0gbmV3IFdlYWtSZWYoZWxlbWVudCk7XG5cdG1peFNldCB8fD0gYm91bmRNaXhpblNldD8uZ2V0Py4oZWxlbWVudCk7XG5cdGlmICghbWl4U2V0Py5oYXM/LihtaXhpbikpIHtcblx0XHRtaXhTZXQ/LmFkZD8uKG1peGluKTtcblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHRcdGlmIChtaXhpbi5uYW1lKSBlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW10sIG1peGluLm5hbWVdLmZpbHRlcigobikgPT4gISFuKS5qb2luKFwiIFwiKSk7XG5cdFx0bWl4aW4/LmNvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdH1cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xudmFyIGJvdW5kTWl4aW5TZXRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQGJvdW5kTWl4aW5TZXRcIik7XG52YXIgYm91bmRNaXhpblNldCA9IGdsb2JhbFRoaXNbYm91bmRNaXhpblNldFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluRWxlbWVudHNTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluRWxlbWVudHNcIik7XG52YXIgbWl4aW5FbGVtZW50cyA9IGdsb2JhbFRoaXNbbWl4aW5FbGVtZW50c1N5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIG1peGluUmVnaXN0cnlTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluUmVnaXN0cnlcIik7XG52YXIgbWl4aW5SZWdpc3RyeSA9IGdsb2JhbFRoaXNbbWl4aW5SZWdpc3RyeVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbWl4aW5OYW1lc3BhY2VTeW1ib2wgPSBTeW1ib2wuZm9yKFwiZG9tLnRzQG1peGluTmFtZXNwYWNlXCIpO1xudmFyIG1peGluTmFtZXNwYWNlID0gZ2xvYmFsVGhpc1ttaXhpbk5hbWVzcGFjZVN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHVwZGF0ZU1peGluQXR0cmlidXRlcyA9IChlbGVtZW50LCBtaXhpbikgPT4ge1xuXHRpZiAodHlwZW9mIG1peGluID09IFwic3RyaW5nXCIpIG1peGluID0gbWl4aW5SZWdpc3RyeT8uZ2V0Py4obWl4aW4pO1xuXHRjb25zdCBuYW1lcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi5lbGVtZW50Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIik/LnNwbGl0Py4oXCIgXCIpIHx8IFtdXSk7XG5cdGNvbnN0IG1peGlucyA9IG5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpO1xuXHRjb25zdCBtaXhpblNldCA9IGJvdW5kTWl4aW5TZXQ/LmdldD8uKGVsZW1lbnQpID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoIW1peGluRWxlbWVudHM/Lmhhcz8uKG1peGluKSkgbWl4aW5FbGVtZW50cz8uc2V0Py4obWl4aW4sIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpKTtcblx0aWYgKCFib3VuZE1peGluU2V0Py5oYXM/LihlbGVtZW50KSkgYm91bmRNaXhpblNldD8uc2V0Py4oZWxlbWVudCwgbWl4aW5TZXQpO1xuXHRjb25zdCB3ZWwgPSBuZXcgV2Vha1JlZihlbGVtZW50KTtcblx0aWYgKCFtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkgbWl4aW4/LmRpc2Nvbm5lY3Q/Lih3ZWwsIG1peGluLCBnZXRFbGVtZW50UmVsYXRlZChlbGVtZW50KSk7XG5cdFx0aWYgKG1peGlucy5oYXMobWl4aW4pIHx8ICFtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/Lmhhcz8uKGVsZW1lbnQpKSB7XG5cdFx0XHRtaXhpbj8uY29ubmVjdD8uKHdlbCwgbWl4aW4sIGdldEVsZW1lbnRSZWxhdGVkKGVsZW1lbnQpKTtcblx0XHRcdG5hbWVzLmFkZChtaXhpbk5hbWVzcGFjZT8uZ2V0Py4obWl4aW4pKTtcblx0XHRcdG1peGluU2V0Py5hZGQ/LihtaXhpbik7XG5cdFx0XHRlbGVtZW50Py5zZXRBdHRyaWJ1dGU/LihcImRhdGEtbWl4aW5cIiwgWy4uLm5hbWVzXS5maWx0ZXIoKG4pID0+ICEhbikuam9pbihcIiBcIikpO1xuXHRcdH1cblx0XHRtaXhpbkVsZW1lbnRzPy5nZXQ/LihtaXhpbik/LmFkZD8uKGVsZW1lbnQpO1xuXHR9XG5cdGlmIChtaXhpblNldD8uaGFzPy4obWl4aW4pKSB7XG5cdFx0aWYgKCFtaXhpbnMuaGFzKG1peGluKSkge1xuXHRcdFx0bWl4aW5TZXQ/LmRlbGV0ZT8uKG1peGluKTtcblx0XHRcdG1peGluPy5kaXNjb25uZWN0Py4od2VsLCBtaXhpbiwgZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCkpO1xuXHRcdH1cblx0fVxufTtcbnZhciByb290cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG52YXIgYWRkUm9vdCA9IChyb290ID0gdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGwpID0+IHtcblx0aWYgKCFyb290KSByZXR1cm47XG5cdGlmICghcm9vdHM/Lmhhcz8uKHJvb3QpKSB7XG5cdFx0cm9vdHM/LmFkZD8uKHJvb3QpO1xuXHRcdG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yKHJvb3QsIFwiKlwiLCBcImRhdGEtbWl4aW5cIiwgKG11dGF0aW9uKSA9PiB1cGRhdGVBbGxNaXhpbnMobXV0YXRpb24udGFyZ2V0KSk7XG5cdFx0b2JzZXJ2ZUJ5U2VsZWN0b3Iocm9vdCwgXCJbZGF0YS1taXhpbl1cIiwgKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXV0YXRpb24uYWRkZWROb2RlcykgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdXBkYXRlQWxsTWl4aW5zKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdG9ic2VydmVTdHlsZVRyZWUocm9vdCk7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59O1xudmFyIHVwZGF0ZUFsbE1peGlucyA9IChlbGVtZW50KSA9PiB7XG5cdGNvbnN0IG5hbWVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoWy4uLmVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1taXhpblwiKT8uc3BsaXQ/LihcIiBcIikgfHwgW11dKTtcblx0Wy4uLm5ldyBTZXQoWy4uLm5hbWVzXS5tYXAoKG4pID0+IG1peGluUmVnaXN0cnk/LmdldD8uKG4pKS5maWx0ZXIoKG0pID0+ICEhbSkpXS5tYXA/LigobSkgPT4gdXBkYXRlTWl4aW5BdHRyaWJ1dGVzKGVsZW1lbnQsIG0pKTtcbn07XG52YXIgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsID0gKGVsZW1lbnRzLCBtaXhpbikgPT4ge1xuXHRlbGVtZW50cy5mb3JFYWNoKChlKSA9PiBtaXhpbiA/IHVwZGF0ZU1peGluQXR0cmlidXRlcyhlLCBtaXhpbikgOiB1cGRhdGVBbGxNaXhpbnMoZSkpO1xufTtcbnZhciB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGxJblJvb3RzID0gKG1peGluKSA9PiB7XG5cdGZvciAoY29uc3Qgcm9vdCBvZiByb290cykgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsKHJvb3Q/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcIltkYXRhLW1peGluXVwiKSwgbWl4aW4pO1xufTtcbnZhciBuYW1lUmVnaXN0cnlGID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChrZXkpID0+IHtcblx0bWl4aW5SZWdpc3RyeT8uZGVsZXRlPy4oa2V5KTtcbn0pO1xudmFyIHJlZ2lzdGVyTWl4aW4gPSAobmFtZSwgbWl4aW4pID0+IHtcblx0aWYgKCFtaXhpbk5hbWVzcGFjZT8uaGFzPy4obWl4aW4pKSB7XG5cdFx0Y29uc3Qga2V5ID0gbmFtZT8udHJpbT8uKCk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bWl4aW5OYW1lc3BhY2U/LnNldD8uKG1peGluLCBrZXkpO1xuXHRcdFx0bWl4aW5SZWdpc3RyeT8uc2V0Py4oa2V5LCBtaXhpbik7XG5cdFx0XHRuYW1lUmVnaXN0cnlGPy5yZWdpc3Rlcj8uKG1peGluLCBrZXkpO1xuXHRcdFx0dXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsSW5Sb290cyhtaXhpbik7XG5cdFx0fVxuXHR9XG59O1xuYWRkUm9vdCh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbCk7XG52YXIgRE9NTWl4aW4gPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKG5hbWUgPSBudWxsKSB7XG5cdFx0aWYgKG5hbWUpIHJlZ2lzdGVyTWl4aW4obmFtZSwgdGhpcyk7XG5cdH1cblx0Y29ubmVjdCh3RWxlbWVudCwgd1NlbGYsIHJlbGF0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkaXNjb25uZWN0KHdFbGVtZW50LCB3U2VsZiwgcmVsYXRlZCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHN0b3JlRm9yRWxlbWVudChlbGVtZW50KSB7XG5cdFx0cmV0dXJuIG5hbWVkU3RvcmVNYXBzLmdldCh0aGlzLm5hbWUgfHwgXCJcIik/LmdldD8uKGVsZW1lbnQpO1xuXHR9XG5cdHJlbGF0ZWRGb3JFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZ2V0RWxlbWVudFJlbGF0ZWQoZWxlbWVudCk7XG5cdH1cblx0Z2V0IGVsZW1lbnRzKCkge1xuXHRcdHJldHVybiBtaXhpbkVsZW1lbnRzPy5nZXQ/Lih0aGlzKTtcblx0fVxuXHRnZXQgc3RvcmFnZSgpIHtcblx0XHRyZXR1cm4gbmFtZWRTdG9yZU1hcHM/LmdldD8uKHRoaXMubmFtZSB8fCBcIlwiKTtcblx0fVxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gbWl4aW5OYW1lc3BhY2U/LmdldD8uKHRoaXMpO1xuXHR9XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vSGFuZGxlci50c1xudmFyIGhhbmRsZUhpZGRlbiA9IChlbGVtZW50LCBfLCB2aXNpYmxlKSA9PiB7XG5cdGNvbnN0ICRyZWYgPSB2aXNpYmxlO1xuXHRpZiAoaGFzVmFsdWUodmlzaWJsZSkpIHZpc2libGUgPSB2aXNpYmxlLnZhbHVlO1xuXHRjb25zdCBpc1Zpc2libGUgPSAodmlzaWJsZSA9IG5vcm1hbGl6ZVByaW1pdGl2ZSh2aXNpYmxlKSkgIT0gbnVsbCAmJiB2aXNpYmxlICE9PSBmYWxzZTtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSBlbGVtZW50LmhpZGRlbiA9ICFpc1Zpc2libGU7XG5cdFx0ZWxzZSBpZiAoaXNWaXNpYmxlKSBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGU/LihcImRhdGEtaGlkZGVuXCIpO1xuXHRcdGVsc2UgZWxlbWVudD8uc2V0QXR0cmlidXRlPy4oXCJkYXRhLWhpZGRlblwiLCBcIlwiKTtcblx0fSk7XG5cdHJldHVybiBlbGVtZW50O1xufTtcbnZhciBoYW5kbGVQcm9wZXJ0eSA9IChlbCwgcHJvcCwgdmFsKSA9PiB7XG5cdGlmICghKHByb3AgPSB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiID8ga2ViYWJUb0NhbWVsKHByb3ApIDogcHJvcCkgfHwgIWVsIHx8IFtcblx0XHRcInN0eWxlXCIsXG5cdFx0XCJkYXRhc2V0XCIsXG5cdFx0XCJhdHRyaWJ1dGVTdHlsZU1hcFwiLFxuXHRcdFwic3R5bGVNYXBcIixcblx0XHRcImNvbXB1dGVkU3R5bGVNYXBcIlxuXHRdLmluZGV4T2YocHJvcCB8fCBcIlwiKSAhPSAtMSkgcmV0dXJuIGVsO1xuXHRjb25zdCAkcmVmID0gdmFsO1xuXHRpZiAoaGFzVmFsdWUodmFsKSkgdmFsID0gdmFsLnZhbHVlO1xuXHRpZiAoZWw/Lltwcm9wXSA9PT0gdmFsKSByZXR1cm4gZWw7XG5cdGlmIChlbD8uW3Byb3BdICE9PSB2YWwpICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh2YWwgIT0gbnVsbCkgZWxbcHJvcF0gPSB2YWw7XG5cdFx0ZWxzZSBkZWxldGUgZWxbcHJvcF07XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xudmFyIGhhbmRsZURhdGFzZXQgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRjb25zdCBkYXRhc2V0UmVmID0gZWw/LmRhdGFzZXQ7XG5cdGlmICghcHJvcCB8fCAhZWwgfHwgIWRhdGFzZXRSZWYpIHJldHVybiBlbDtcblx0Y29uc3QgJHJlZiA9IHZhbDtcblx0aWYgKGhhc1ZhbHVlKHZhbCkpIHZhbCA9IHZhbD8udmFsdWU7XG5cdHByb3AgPSBrZWJhYlRvQ2FtZWwocHJvcCk7XG5cdGlmIChkYXRhc2V0UmVmPy5bcHJvcF0gPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0aWYgKHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2UpIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHRlbHNlICRhdm9pZFRyaWdnZXIoJHJlZiwgKCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgdmFsICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbCAhPSBcImZ1bmN0aW9uXCIpIGRhdGFzZXRSZWZbcHJvcF0gPSBTdHJpbmcodmFsKTtcblx0XHRlbHNlIGRlbGV0ZSBkYXRhc2V0UmVmW3Byb3BdO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBkZWxldGVTdHlsZVByb3BlcnR5ID0gKGVsLCBuYW1lKSA9PiBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShjYW1lbFRvS2ViYWIobmFtZSkpO1xudmFyIGhhbmRsZVN0eWxlQ2hhbmdlID0gKGVsLCBwcm9wLCB2YWwpID0+IHtcblx0Y29uc3Qgc3R5bGVSZWYgPSBlbD8uc3R5bGU7XG5cdGlmICghcHJvcCB8fCB0eXBlb2YgcHJvcCAhPSBcInN0cmluZ1wiIHx8ICFlbCB8fCAhc3R5bGVSZWYpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcih2YWwsICgpID0+IHtcblx0XHRpZiAoaXNWYWwodmFsKSB8fCBoYXNWYWx1ZSh2YWwpIHx8IGlzVmFsdWVVbml0KHZhbCkpIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3AsIHZhbCk7XG5cdFx0ZWxzZSBpZiAodmFsID09IG51bGwpIGRlbGV0ZVN0eWxlUHJvcGVydHkoZWwsIHByb3ApO1xuXHR9KTtcblx0cmV0dXJuIGVsO1xufTtcbnZhciBoYW5kbGVBdHRyaWJ1dGUgPSAoZWwsIHByb3AsIHZhbCkgPT4ge1xuXHRpZiAoIXByb3AgfHwgIWVsKSByZXR1cm4gZWw7XG5cdGNvbnN0ICRyZWYgPSB2YWw7XG5cdGlmIChoYXNWYWx1ZSh2YWwpKSB2YWwgPSB2YWwudmFsdWU7XG5cdHByb3AgPSBjYW1lbFRvS2ViYWIocHJvcCk7XG5cdGlmIChlbD8uZ2V0QXR0cmlidXRlPy4ocHJvcCkgPT09ICh2YWwgPSBub3JtYWxpemVQcmltaXRpdmUodmFsKSkpIHJldHVybiBlbDtcblx0JGF2b2lkVHJpZ2dlcigkcmVmLCAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiB2YWwgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsICE9IFwiZnVuY3Rpb25cIiAmJiB2YWwgIT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PSBcImJvb2xlYW5cIiA/IHZhbCA9PSB0cnVlIDogdHJ1ZSkpIGVsPy5zZXRBdHRyaWJ1dGU/Lihwcm9wLCBTdHJpbmcodmFsKSk7XG5cdFx0ZWxzZSBlbD8ucmVtb3ZlQXR0cmlidXRlPy4ocHJvcCk7XG5cdH0pO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvbWl4aW4vanVuY3Rpb24vdHlwZXMudHNcbmZ1bmN0aW9uIGp1bmN0aW9uVG9Cb3goYSwgYikge1xuXHRjb25zdCBsZWZ0ID0gTWF0aC5taW4oYS54LCBiLngpO1xuXHRjb25zdCB0b3AgPSBNYXRoLm1pbihhLnksIGIueSk7XG5cdGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoYS54LCBiLngpO1xuXHRjb25zdCBib3R0b20gPSBNYXRoLm1heChhLnksIGIueSk7XG5cdHJldHVybiB7XG5cdFx0bGVmdCxcblx0XHR0b3AsXG5cdFx0cmlnaHQsXG5cdFx0Ym90dG9tLFxuXHRcdHdpZHRoOiByaWdodCAtIGxlZnQsXG5cdFx0aGVpZ2h0OiBib3R0b20gLSB0b3Bcblx0fTtcbn1cbnZhciBKVU5DVElPTl9TRUxFQ1RfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1zZWxlY3Q6c3RhcnRcIixcblx0bW92ZTogXCJqdW5jdGlvbi1zZWxlY3Q6bW92ZVwiLFxuXHRlbmQ6IFwianVuY3Rpb24tc2VsZWN0OmVuZFwiLFxuXHRjYW5jZWw6IFwianVuY3Rpb24tc2VsZWN0OmNhbmNlbFwiXG59O1xudmFyIEpVTkNUSU9OX0RSQUdfRVZFTlRTID0ge1xuXHRzdGFydDogXCJqdW5jdGlvbi1kcmFnOnN0YXJ0XCIsXG5cdG1vdmU6IFwianVuY3Rpb24tZHJhZzptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1kcmFnOmVuZFwiXG59O1xudmFyIEpVTkNUSU9OX1JFU0laRV9FVkVOVFMgPSB7XG5cdHN0YXJ0OiBcImp1bmN0aW9uLXJlc2l6ZTpzdGFydFwiLFxuXHRtb3ZlOiBcImp1bmN0aW9uLXJlc2l6ZTptb3ZlXCIsXG5cdGVuZDogXCJqdW5jdGlvbi1yZXNpemU6ZW5kXCJcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy9taXhpbi9qdW5jdGlvbi9KdW5jdGlvbk1peGlucy50c1xudmFyIG1peGluRGlzcG9zZXJzU3ltYm9sID0gU3ltYm9sLmZvcihcImRvbS50c0BtaXhpbkRpc3Bvc2Vyc1wiKTtcbnZhciBtaXhpbkRpc3Bvc2VycyA9IGdsb2JhbFRoaXNbbWl4aW5EaXNwb3NlcnNTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBwdXNoRGlzcG9zYWJsZSA9IChob3N0LCBtaXhpbk5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KSA/PyAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRjb25zdCBsaXN0ID0gbWFwLmdldChtaXhpbk5hbWUpID8/IFtdO1xuXHRsaXN0LnB1c2goZm4pO1xuXHRtYXAuc2V0KG1peGluTmFtZSwgbGlzdCk7XG5cdG1peGluRGlzcG9zZXJzLnNldChob3N0LCBtYXApO1xufTtcbnZhciBydW5EaXNwb3NlcnMgPSAoaG9zdCwgbWl4aW5OYW1lKSA9PiB7XG5cdGNvbnN0IG1hcCA9IG1peGluRGlzcG9zZXJzLmdldChob3N0KTtcblx0Y29uc3QgbGlzdCA9IG1hcD8uZ2V0KG1peGluTmFtZSk7XG5cdGlmICghbGlzdCkgcmV0dXJuO1xuXHRmb3IgKGNvbnN0IGZuIG9mIGxpc3QpIHRyeSB7XG5cdFx0Zm4oKTtcblx0fSBjYXRjaCB7fVxuXHRtYXAuZGVsZXRlKG1peGluTmFtZSk7XG5cdGlmIChtYXAuc2l6ZSA9PT0gMCkgbWl4aW5EaXNwb3NlcnMuZGVsZXRlKGhvc3QpO1xufTtcbnZhciBwYXJzZVB4VmFyID0gKGhvc3QsIG5hbWUpID0+IHtcblx0Y29uc3QgcmF3ID0gZ2xvYmFsVGhpcy5nZXRDb21wdXRlZFN0eWxlPy4oaG9zdCk/LmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8udHJpbT8uKCkgPz8gXCJcIjtcblx0Y29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiAwO1xufTtcbnZhciBxdWVyeUhhbmRsZSA9IChob3N0LCBhdHRyLCBmYWxsYmFjaykgPT4ge1xuXHRjb25zdCBzZWwgPSBob3N0LmdldEF0dHJpYnV0ZShhdHRyKT8udHJpbSgpO1xuXHRpZiAoIXNlbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRjb25zdCBmb3VuZCA9IGhvc3QucXVlcnlTZWxlY3RvcihzZWwpO1xuXHRyZXR1cm4gZm91bmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZvdW5kIDogZmFsbGJhY2s7XG59O1xudmFyIEp1bmN0aW9uU2VsZWN0TWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdH1cblx0Y29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKCFob3N0KSByZXR1cm4gdGhpcztcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRvdmVybGF5LmNsYXNzTmFtZSA9IFwidWktanVuY3Rpb24tc2VsZWN0LW92ZXJsYXlcIjtcblx0XHRvdmVybGF5LnNldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tb3ZlcmxheVwiLCBcIlwiKTtcblx0XHRvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDp2YXIoLS16LW1heCwgOTk5OSk7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjoxcHggZGFzaGVkIGNvbG9yLW1peChpbiBva2xhYiwgdmFyKC0tY29sb3ItcHJpbWFyeSwgIzVhN2ZmZikgNzAlLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZDpjb2xvci1taXgoaW4gb2tsYWIsIHZhcigtLWNvbG9yLXByaW1hcnksICM1YTdmZmYpIDE0JSwgdHJhbnNwYXJlbnQpO2Rpc3BsYXk6bm9uZTtpbnNldDphdXRvO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtcIjtcblx0XHRjb25zdCBlbnN1cmVQb3NpdGlvbmVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKChnbG9iYWxUaGlzLmdldENvbXB1dGVkU3R5bGU/Lihob3N0KSk/LnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSBob3N0LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH07XG5cdFx0ZW5zdXJlUG9zaXRpb25lZCgpO1xuXHRcdGhvc3QuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0bGV0IGFjdGl2ZSA9IGZhbHNlO1xuXHRcdGxldCBhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGxldCBiID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDBcblx0XHR9O1xuXHRcdGNvbnN0IGxvY2FsUG9pbnQgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHIgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogZXYuY2xpZW50WCAtIHIubGVmdCxcblx0XHRcdFx0eTogZXYuY2xpZW50WSAtIHIudG9wXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3QgYXBwbHlPdmVybGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGlmIChib3gud2lkdGggPCAxICYmIGJveC5oZWlnaHQgPCAxKSB7XG5cdFx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtib3gubGVmdH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLnRvcCA9IGAke2JveC50b3B9cHhgO1xuXHRcdFx0b3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2JveC53aWR0aH1weGA7XG5cdFx0XHRvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2JveC5oZWlnaHR9cHhgO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Eb3duID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cdFx0XHRpZiAoZXYudGFyZ2V0Py5jbG9zZXN0Py4oXCJbZGF0YS1qdW5jdGlvbi1pZ25vcmUtc2VsZWN0XSwgW2RhdGEtanVuY3Rpb24tZHJhZy1oYW5kbGVdLCBbZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXSwgYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuXHRcdFx0aWYgKCEoZXYudGFyZ2V0ID09PSBob3N0IHx8IGhvc3QuY29udGFpbnMoZXYudGFyZ2V0KSkpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRhID0gbG9jYWxQb2ludChldik7XG5cdFx0XHRiID0geyAuLi5hIH07XG5cdFx0XHRob3N0LnNldFBvaW50ZXJDYXB0dXJlKGV2LnBvaW50ZXJJZCk7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuc3RhcnQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YTogeyAuLi5hIH0sXG5cdFx0XHRcdFx0YjogeyAuLi5iIH0sXG5cdFx0XHRcdFx0aG9zdFxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0XHRhcHBseU92ZXJsYXkoKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uTW92ZSA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGIgPSBsb2NhbFBvaW50KGV2KTtcblx0XHRcdGFwcGx5T3ZlcmxheSgpO1xuXHRcdFx0Y29uc3QgYm94ID0ganVuY3Rpb25Ub0JveChhLCBiKTtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVuZCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGNvbnN0IGJveCA9IGp1bmN0aW9uVG9Cb3goYSwgYik7XG5cdFx0XHRob3N0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEpVTkNUSU9OX1NFTEVDVF9FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGE6IHsgLi4uYSB9LFxuXHRcdFx0XHRcdGI6IHsgLi4uYiB9LFxuXHRcdFx0XHRcdGJveCxcblx0XHRcdFx0XHRob3N0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uVXAgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRlbmQoZXYpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25DYW5jZWwgPSAoZXYpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aG9zdC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fU0VMRUNUX0VWRU5UUy5jYW5jZWwsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7IGhvc3QgfVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgKCkgPT4ge1xuXHRcdFx0b3ZlcmxheS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXNlbGVjdFwiLCBhZGRFdmVudChob3N0LCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIiwgYWRkRXZlbnQoaG9zdCwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tc2VsZWN0XCIsIGFkZEV2ZW50KGhvc3QsIFwicG9pbnRlcmNhbmNlbFwiLCBvbkNhbmNlbCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1zZWxlY3RcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25EcmFnTWl4aW4gPSBjbGFzcyBleHRlbmRzIERPTU1peGluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXCJ1aS1qdW5jdGlvbi1kcmFnXCIpO1xuXHR9XG5cdGNvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmICghaG9zdCkgcmV0dXJuIHRoaXM7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy14XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteFwiKSk7XG5cdFx0c2V0U3R5bGVQcm9wZXJ0eShob3N0LCBcIi0tangtZHJhZy15XCIsIHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKSk7XG5cdFx0Y29uc3QgcHJldmlvdXNUcmFuc2Zvcm0gPSBob3N0LnN0eWxlLnRyYW5zZm9ybTtcblx0XHRpZiAoIWhvc3Quc3R5bGUudHJhbnNmb3JtIHx8IGhvc3Quc3R5bGUudHJhbnNmb3JtID09PSBcIm5vbmVcIikgaG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKGNhbGModmFyKC0tangtZHJhZy14LCAwKSAqIDFweCksIGNhbGModmFyKC0tangtZHJhZy15LCAwKSAqIDFweCksIDApXCI7XG5cdFx0Y29uc3QgaGFuZGxlID0gcXVlcnlIYW5kbGUoaG9zdCwgXCJkYXRhLWp1bmN0aW9uLWRyYWctaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCBkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdGxldCBzdGFydFggPSAwO1xuXHRcdGxldCBzdGFydFkgPSAwO1xuXHRcdGxldCBiYXNlWCA9IDA7XG5cdFx0bGV0IGJhc2VZID0gMDtcblx0XHRjb25zdCBvbkRvd24gPSAoZXYpID0+IHtcblx0XHRcdGlmIChldi5idXR0b24gIT09IDApIHJldHVybjtcblx0XHRcdGlmIChldi50YXJnZXQgIT09IGhhbmRsZSAmJiAhaGFuZGxlLmNvbnRhaW5zKGV2LnRhcmdldCkpIHJldHVybjtcblx0XHRcdGRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdHN0YXJ0WCA9IGV2LmNsaWVudFg7XG5cdFx0XHRzdGFydFkgPSBldi5jbGllbnRZO1xuXHRcdFx0YmFzZVggPSBwYXJzZVB4VmFyKGhvc3QsIFwiLS1qeC1kcmFnLXhcIik7XG5cdFx0XHRiYXNlWSA9IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKTtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5zdGFydCwge1xuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRob3N0LFxuXHRcdFx0XHRcdGNsaWVudFg6IGV2LmNsaWVudFgsXG5cdFx0XHRcdFx0Y2xpZW50WTogZXYuY2xpZW50WSxcblx0XHRcdFx0XHRiYXNlWCxcblx0XHRcdFx0XHRiYXNlWVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRjb25zdCBvbk1vdmUgPSAoZXYpID0+IHtcblx0XHRcdGlmICghZHJhZ2dpbmcpIHJldHVybjtcblx0XHRcdGNvbnN0IGR4ID0gZXYuY2xpZW50WCAtIHN0YXJ0WDtcblx0XHRcdGNvbnN0IGR5ID0gZXYuY2xpZW50WSAtIHN0YXJ0WTtcblx0XHRcdGNvbnN0IG54ID0gYmFzZVggKyBkeDtcblx0XHRcdGNvbnN0IG55ID0gYmFzZVkgKyBkeTtcblx0XHRcdHNldFN0eWxlUHJvcGVydHkoaG9zdCwgXCItLWp4LWRyYWcteFwiLCBueCk7XG5cdFx0XHRzZXRTdHlsZVByb3BlcnR5KGhvc3QsIFwiLS1qeC1kcmFnLXlcIiwgbnkpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9EUkFHX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0ZHgsXG5cdFx0XHRcdFx0ZHksXG5cdFx0XHRcdFx0eDogbngsXG5cdFx0XHRcdFx0eTogbnlcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFkcmFnZ2luZykgcmV0dXJuO1xuXHRcdFx0ZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fRFJBR19FVkVOVFMuZW5kLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0eDogcGFyc2VQeFZhcihob3N0LCBcIi0tangtZHJhZy14XCIpLFxuXHRcdFx0XHRcdHk6IHBhcnNlUHhWYXIoaG9zdCwgXCItLWp4LWRyYWcteVwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9KSk7XG5cdFx0fTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgKCkgPT4ge1xuXHRcdFx0aG9zdC5zdHlsZS50cmFuc2Zvcm0gPSBwcmV2aW91c1RyYW5zZm9ybTtcblx0XHR9KTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJkb3duXCIsIG9uRG93bikpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1kcmFnXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVydXBcIiwgb25VcCkpO1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tZHJhZ1wiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcmNhbmNlbFwiLCBvblVwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGlzY29ubmVjdCh3RWwpIHtcblx0XHRjb25zdCBob3N0ID0gd0VsPy5kZXJlZj8uKCk7XG5cdFx0aWYgKGhvc3QpIHJ1bkRpc3Bvc2Vycyhob3N0LCBcInVpLWp1bmN0aW9uLWRyYWdcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG52YXIgSnVuY3Rpb25SZXNpemVNaXhpbiA9IGNsYXNzIGV4dGVuZHMgRE9NTWl4aW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcInVpLWp1bmN0aW9uLXJlc2l6ZVwiKTtcblx0fVxuXHRjb25uZWN0KHdFbCkge1xuXHRcdGNvbnN0IGhvc3QgPSB3RWw/LmRlcmVmPy4oKTtcblx0XHRpZiAoIWhvc3QpIHJldHVybiB0aGlzO1xuXHRcdGNvbnN0IGhhbmRsZSA9IHF1ZXJ5SGFuZGxlKGhvc3QsIFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtaGFuZGxlXCIsIGhvc3QpO1xuXHRcdGxldCByZXNpemluZyA9IGZhbHNlO1xuXHRcdGxldCBzeCA9IDA7XG5cdFx0bGV0IHN5ID0gMDtcblx0XHRsZXQgc3cgPSAwO1xuXHRcdGxldCBzaCA9IDA7XG5cdFx0Y29uc3QgbWluVyA9IE1hdGgubWF4KDEyMCwgcGFyc2VGbG9hdChob3N0LmdldEF0dHJpYnV0ZShcImRhdGEtanVuY3Rpb24tcmVzaXplLW1pbi13XCIpIHx8IFwiXCIpIHx8IDEyMCk7XG5cdFx0Y29uc3QgbWluSCA9IE1hdGgubWF4KDgwLCBwYXJzZUZsb2F0KGhvc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1qdW5jdGlvbi1yZXNpemUtbWluLWhcIikgfHwgXCJcIikgfHwgODApO1xuXHRcdGNvbnN0IG9uRG93biA9IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0aWYgKGV2LnRhcmdldCAhPT0gaGFuZGxlICYmICFoYW5kbGUuY29udGFpbnMoZXYudGFyZ2V0KSkgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSB0cnVlO1xuXHRcdFx0c3ggPSBldi5jbGllbnRYO1xuXHRcdFx0c3kgPSBldi5jbGllbnRZO1xuXHRcdFx0c3cgPSBob3N0Lm9mZnNldFdpZHRoO1xuXHRcdFx0c2ggPSBob3N0Lm9mZnNldEhlaWdodDtcblx0XHRcdGhhbmRsZS5zZXRQb2ludGVyQ2FwdHVyZShldi5wb2ludGVySWQpO1xuXHRcdFx0aG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChKVU5DVElPTl9SRVNJWkVfRVZFTlRTLnN0YXJ0LCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IHN3LFxuXHRcdFx0XHRcdGhlaWdodDogc2hcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25Nb3ZlID0gKGV2KSA9PiB7XG5cdFx0XHRpZiAoIXJlc2l6aW5nKSByZXR1cm47XG5cdFx0XHRjb25zdCBudyA9IE1hdGgubWF4KG1pblcsIHN3ICsgKGV2LmNsaWVudFggLSBzeCkpO1xuXHRcdFx0Y29uc3QgbmggPSBNYXRoLm1heChtaW5ILCBzaCArIChldi5jbGllbnRZIC0gc3kpKTtcblx0XHRcdGhvc3Quc3R5bGUud2lkdGggPSBgJHtud31weGA7XG5cdFx0XHRob3N0LnN0eWxlLmhlaWdodCA9IGAke25ofXB4YDtcblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5tb3ZlLCB7XG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGhvc3QsXG5cdFx0XHRcdFx0d2lkdGg6IG53LFxuXHRcdFx0XHRcdGhlaWdodDogbmhcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25VcCA9IChldikgPT4ge1xuXHRcdFx0aWYgKCFyZXNpemluZykgcmV0dXJuO1xuXHRcdFx0cmVzaXppbmcgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXYucG9pbnRlcklkKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdGhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoSlVOQ1RJT05fUkVTSVpFX0VWRU5UUy5lbmQsIHtcblx0XHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0aG9zdCxcblx0XHRcdFx0XHR3aWR0aDogaG9zdC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGhvc3Qub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH0pKTtcblx0XHR9O1xuXHRcdHB1c2hEaXNwb3NhYmxlKGhvc3QsIFwidWktanVuY3Rpb24tcmVzaXplXCIsIGFkZEV2ZW50KGhhbmRsZSwgXCJwb2ludGVyZG93blwiLCBvbkRvd24pKTtcblx0XHRwdXNoRGlzcG9zYWJsZShob3N0LCBcInVpLWp1bmN0aW9uLXJlc2l6ZVwiLCBhZGRFdmVudChoYW5kbGUsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJ1cFwiLCBvblVwKSk7XG5cdFx0cHVzaERpc3Bvc2FibGUoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIiwgYWRkRXZlbnQoaGFuZGxlLCBcInBvaW50ZXJjYW5jZWxcIiwgb25VcCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRpc2Nvbm5lY3Qod0VsKSB7XG5cdFx0Y29uc3QgaG9zdCA9IHdFbD8uZGVyZWY/LigpO1xuXHRcdGlmIChob3N0KSBydW5EaXNwb3NlcnMoaG9zdCwgXCJ1aS1qdW5jdGlvbi1yZXNpemVcIik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5uZXcgSnVuY3Rpb25TZWxlY3RNaXhpbigpO1xubmV3IEp1bmN0aW9uRHJhZ01peGluKCk7XG5uZXcgSnVuY3Rpb25SZXNpemVNaXhpbigpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7IERPTU1peGluLCBKdW5jdGlvbkRyYWdNaXhpbiwgSnVuY3Rpb25SZXNpemVNaXhpbiwgSnVuY3Rpb25TZWxlY3RNaXhpbiwgTUFUQ0gsIE1PQywgTU9DRWxlbWVudCwgUkFGQmVoYXZpb3IsIFJFR0VYLCBST09ULCBXYXZ5U2hhcGVkQ2lyY2xlLCBfX2V4cG9ydFByb3BlcnRpZXMsIF9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMsIGFkZEV2ZW50LCBhZGRFdmVudHMsIGFkZEV2ZW50c0xpc3QsIGFkZFJvb3QsIGFuaW1hdGVIaWRlLCBhbmltYXRlU2hvdywgYXZhaWxTaXplLCBiYmgsIGJidywgYmluZEJlaGF2aW9yLCBiaW5kTWl4aW5zLCBiaW5kU3RvcmUsIGJvcmRlckJveEhlaWdodCwgYm9yZGVyQm94V2lkdGgsIGJvdW5kQmVoYXZpb3JzLCBib3VuZE1peGluU2V0LCBjYmgsIGNidywgY2hhbmdlWm9vbSwgY2xhc3NlcywgY29tcHV0ZUNhcmV0UG9zaXRpb24sIGNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCwgY29udGFpbnNPclNlbGYsIGNvbnRlbnRCb3hIZWlnaHQsIGNvbnRlbnRCb3hXaWR0aCwgY3JlYXRlRWxlbWVudFZhbmlsbGEsIGNyZWF0ZUZpeGVkT3ZlcmxheVZpZXdwb3J0LCBkZWxldGVTdHlsZVByb3BlcnR5LCBkZXRlY3RNb2JpbGUsIGRvQm9yZGVyT2JzZXJ2ZSwgZG9Db250ZW50T2JzZXJ2ZSwgZW5zdXJlVmlld3BvcnRJbnRlcmFjdGl2ZVdpZGdldE92ZXJsYXksIGVuc3VyZVZpZXdwb3J0VHJhY2tpbmcsIGVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXksIGZpeE9yaWVudFRvU2NyZWVuLCBmaXhlZENsaWVudFpvb20sIGdldEF2YWlsU2l6ZSwgZ2V0Qm91bmRpbmdPcmllbnRSZWN0LCBnZXRDb3JyZWN0T3JpZW50YXRpb24sIGdldEVsZW1lbnRSZWxhdGVkLCBnZXRFdmVudFRhcmdldCwgZ2V0T2Zmc2V0UGFyZW50LCBnZXRPZmZzZXRQYXJlbnRDaGFpbiwgZ2V0U3RvcmVzT2ZFbGVtZW50LCBnZXRab29tLCBoYW5kbGVBdHRyaWJ1dGUsIGhhbmRsZURhdGFzZXQsIGhhbmRsZUhpZGRlbiwgaGFuZGxlUHJvcGVydHksIGhhbmRsZVN0eWxlQ2hhbmdlLCBoYXNQYXJlbnQsIGh0bWwsIGluY2x1ZGVTZWxmLCBpbmRleE9mLCBpbml0VGV4dFN0eWxlLCBpc0VsZW1lbnQsIGlzSW5Gb2N1cywgaXNNb2JpbGUsIGlzTmVhcmx5SWRlbnRpdHksIGlzVmFsaWRQYXJlbnQsIG1ha2VSQUZDeWNsZSwgbWVhc3VyZUlucHV0SW5Gb2N1cywgbWVhc3VyZVRleHQsIG1peGluRGlzcG9zZXJzLCBtaXhpbkVsZW1lbnRzLCBtaXhpbk5hbWVzcGFjZSwgbWl4aW5SZWdpc3RyeSwgbmFtZVJlZ2lzdHJ5RiwgbmFtZWRTdG9yZU1hcHMsIG9ic2VydmVBdHRyaWJ1dGUsIG9ic2VydmVBdHRyaWJ1dGVCeVNlbGVjdG9yLCBvYnNlcnZlQm9yZGVyQm94LCBvYnNlcnZlQnlTZWxlY3Rvciwgb2JzZXJ2ZUNvbnRlbnRCb3gsIG9uQm9yZGVyT2JzZXJ2ZSwgb25Db250ZW50T2JzZXJ2ZSwgb3JpZW50T2YsIG9yaWVudGF0aW9uTnVtYmVyTWFwLCBwYXNzaXZlT3B0cywgcmVhZEZpeGVkT3ZlcmxheVZpZXdwb3J0LCByZWFkTGF1bmNoZXJMYXlvdXRGcm9tRWxlbWVudCwgcmVmbGVjdEJlaGF2aW9ycywgcmVmbGVjdE1peGlucywgcmVmbGVjdFN0b3JlcywgcmVnaXN0ZXJNaXhpbiwgcmVtb3ZlRXZlbnQsIHJlbW92ZUV2ZW50cywgcmVzb2x2ZUdyaWRDZWxsRnJvbUNsaWVudFBvaW50LCByb290cywgc2V0QXR0cmlidXRlcywgc2V0QXR0cmlidXRlc0lmTnVsbCwgc2V0Q2hlY2tlZCwgc2V0SWRsZUludGVydmFsLCB0aHJvdHRsZU1hcCwgdW5maXhlZENsaWVudFpvb20sIHVwZGF0ZUFsbE1peGlucywgdXBkYXRlTWl4aW5BdHRyaWJ1dGVzLCB1cGRhdGVNaXhpbkF0dHJpYnV0ZXNBbGwsIHVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMsIHVwZGF0ZVZQLCB1cmwsIHdoZW5BbnlTY3JlZW5DaGFuZ2VzLCB6b29tT2YsIHpvb21WYWx1ZXMgfTsiXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFBQSxHQUFlLGdCQUFBQyxJQUFjLGdCQUFBQyxJQUFjLFlBQUFDLEdBQVUscUJBQUFDLElBQW1CLFNBQUFDLElBQU8sZUFBQUMsSUFBYSxnQkFBQUMsSUFBYyx1QkFBQUMsSUFBcUIsc0JBQUFDLElBQW9CLCtCQUFBQyxVQUFtQztBQUMvTCxTQUFTLFVBQUFDLElBQVEsYUFBQUMsSUFBVyxhQUFBQyxJQUFXLGFBQUFDLElBQVcsb0JBQUFDLElBQWtCLG9CQUFBQyxTQUF3QjtBQUU1RixjQUFjO0FBR2QsSUFBSUMsS0FBa0MsdUJBQU8sSUFBSSxrQ0FBa0MsR0FDL0VDLEtBQTRCLFdBQVdELEVBQStCLE1BQXNCLG9CQUFJLElBQUk7QUFDeEc7QUFBQSxFQUNDO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxFQUNmO0FBQUEsRUFDQTtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7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QVltUyxHQUF1QixLQUFLO0FBQUEsVUFDOUQsU0FBUztBQUFBLFVBQ1QsUUFBUTtBQUFBLFlBQ1AsTUFBQW5TO0FBQUEsWUFDQSxPQUFPQSxFQUFLO0FBQUEsWUFDWixRQUFRQSxFQUFLO0FBQUEsVUFDZDtBQUFBLFFBQ0QsQ0FBQyxDQUFDO0FBQUE7QUFBQSxJQUNIO0FBQ0EsV0FBQXNTLEVBQWV0UyxHQUFNLHNCQUFzQnhCLEVBQVNrVixHQUFRLGVBQWVQLENBQU0sQ0FBQyxHQUNsRmIsRUFBZXRTLEdBQU0sc0JBQXNCeEIsRUFBU2tWLEdBQVEsZUFBZU4sQ0FBTSxDQUFDLEdBQ2xGZCxFQUFldFMsR0FBTSxzQkFBc0J4QixFQUFTa1YsR0FBUSxhQUFhSixDQUFJLENBQUMsR0FDOUVoQixFQUFldFMsR0FBTSxzQkFBc0J4QixFQUFTa1YsR0FBUSxpQkFBaUJKLENBQUksQ0FBQyxHQUMzRTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFdBQVdQLEdBQUs7QUFDZixVQUFNL1MsSUFBTytTLEdBQUssUUFBUTtBQUMxQixXQUFJL1MsS0FBTXlTLEdBQWF6UyxHQUFNLG9CQUFvQixHQUMxQztBQUFBLEVBQ1I7QUFDRDtBQUNBLElBQUk4UyxHQUFvQjtBQUN4QixJQUFJVSxHQUFrQjtBQUN0QixJQUFJWSxHQUFvQjsiLAogICJuYW1lcyI6IFsiJGF2b2lkVHJpZ2dlciIsICJjYW1lbFRvS2ViYWIiLCAiY3Z0X2NzX3RvX29zIiwgImhhc1ZhbHVlIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImlzVmFsIiwgImlzVmFsdWVVbml0IiwgImtlYmFiVG9DYW1lbCIsICJub3JtYWxpemVHcmlkTGF5b3V0IiwgIm5vcm1hbGl6ZVByaW1pdGl2ZSIsICJyZXNvbHZlTG9jYWxQb2ludFRvR3JpZENlbGwiLCAiYXBwZWFyIiwgImRlY29ySGlkZSIsICJkZWNvclNob3ciLCAiZGlzYXBwZWFyIiwgIm9ic2VydmVTdHlsZVRyZWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJfX3JlZ2lzdGVyZWRDc3NQcm9wZXJ0aWVzU3ltYm9sIiwgIl9fcmVnaXN0ZXJlZENzc1Byb3BlcnRpZXMiLCAib3B0aW9ucyIsICJuYW1lIiwgImUiLCAiX19leHBvcnRQcm9wZXJ0aWVzIiwgImlzTW9iaWxlIiwgImNoZWNrIiwgImEiLCAiZGV0ZWN0TW9iaWxlIiwgImNyZWF0ZUlkbGVEZWFkbGluZUZhbGxiYWNrIiwgInJ1bldoZW5JZGxlJDEiLCAiY2IiLCAidGltZW91dCIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZWxlbWVudCIsICJnZXRPZmZzZXRQYXJlbnRDaGFpbiIsICJwYXJlbnRzIiwgImN1cnJlbnQiLCAicGFyZW50IiwgImlzTmVhcmx5SWRlbnRpdHkiLCAibWF0cml4IiwgImVwc2lsb24iLCAibWFrZVJBRkN5Y2xlIiwgImNvbnRyb2wiLCAickFGIiwgInJlcyIsICJSQUZCZWhhdmlvciIsICJzaGVkIiwgIlJPT1QiLCAic2V0QXR0cmlidXRlc0lmTnVsbCIsICJhdHRycyIsICJ2YWx1ZSIsICJvbGQiLCAic2V0QXR0cmlidXRlcyIsICJ0aHJvdHRsZU1hcCIsICJzZXRJZGxlSW50ZXJ2YWwiLCAiYXJncyIsICJzdGF0dXMiLCAiciIsICJib3JkZXJCb3hXaWR0aCIsICJib3JkZXJCb3hIZWlnaHQiLCAiY29udGVudEJveFdpZHRoIiwgImNvbnRlbnRCb3hIZWlnaHQiLCAib25Cb3JkZXJPYnNlcnZlIiwgIm9uQ29udGVudE9ic2VydmUiLCAiZG9Db250ZW50T2JzZXJ2ZSIsICJvYnNlcnZlciIsICJlbnRyaWVzIiwgImVudHJ5IiwgImNvbnRlbnRCb3hTaXplIiwgImRvQm9yZGVyT2JzZXJ2ZSIsICJib3JkZXJCb3hTaXplIiwgInVybCIsICJ0eXBlIiwgInNvdXJjZSIsICJodG1sIiwgInBhcnNlZCIsICJzZXRDaGVja2VkIiwgImlucHV0IiwgImV2IiwgImlzVmFsaWRQYXJlbnQiLCAiaW5kZXhPZiIsICJub2RlIiwgIk1BVENIIiwgIlJFR0VYIiwgImNyZWF0ZUVsZW1lbnRWYW5pbGxhIiwgInNlbGVjdG9yIiwgImNyZWF0ZSIsICJtYXRjaCIsICJjbGFzc05hbWUiLCAiaXNFbGVtZW50IiwgImVsIiwgImluY2x1ZGVTZWxmIiwgInRhcmdldCIsICJzZWwiLCAiaGFzUGFyZW50IiwgInBhc3NpdmVPcHRzIiwgImFkZEV2ZW50IiwgIm9wdHMiLCAid3IiLCAicmVtb3ZlRXZlbnQiLCAiYWRkRXZlbnRzIiwgInJvb3QiLCAiaGFuZGxlcnMiLCAiYWRkRXZlbnRzTGlzdCIsICJldmVudHMiLCAibGlzdCIsICJjYnMiLCAicmVtb3ZlRXZlbnRzIiwgImdldEV2ZW50VGFyZ2V0IiwgInBhdGgiLCAiY29udGFpbnNPclNlbGYiLCAiYiIsICJhRWwiLCAiYkVsIiwgImFJbmRleCIsICJiSW5kZXgiLCAiTU9DRWxlbWVudCIsICJzZWxmIiwgImhvc3RNYXRjaGVkIiwgImNsb3Nlc3QiLCAiaG9zdCIsICJNT0MiLCAiaXNJbkZvY3VzIiwgInNlbGVjdG9yT3JFbGVtZW50IiwgImRpciIsICJhY3RpdmUiLCAiaXNGb2N1c2VkIiwgImlzSG92ZXJlZCIsICJhbHRDbmQiLCAiZ2V0Wm9vbSIsICJ6b29tVmFsdWVzU3ltYm9sIiwgInpvb21WYWx1ZXMiLCAiem9vbU9mIiwgImNvbnRhaW5lciIsICJjaGFuZ2Vab29tIiwgInNjYWxlIiwgImZpeGVkQ2xpZW50Wm9vbSIsICJ1bmZpeGVkQ2xpZW50Wm9vbSIsICJvcmllbnRPZiIsICJyYXciLCAibiIsICJnZXRCb3VuZGluZ09yaWVudFJlY3QiLCAib3JpZW50IiwgInpvb20iLCAiYm94IiwgIm5ieCIsICJvcl9pIiwgInZ2IiwgInNpemUiLCAibGVmdF8iLCAidG9wXyIsICJyaWdodF8iLCAiYm90dG9tXyIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAid2lkdGgiLCAiaGVpZ2h0IiwgImJidyIsICJiYmgiLCAiY2J3IiwgImNiaCIsICJydW5XaGVuSWRsZSIsICJLRVlCT0FSRF9PVkVSTEFZX1BYIiwgImNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImNhcGFjaXRvcktleWJvYXJkQm91bmQiLCAid2luZG93S2V5Ym9hcmRCb3VuZCIsICJ2aWV3cG9ydFRyYWNraW5nU3RhcnRlZCIsICJpc05hdGl2ZUNhcGFjaXRvckhvc3QiLCAiY2FwIiwgInZpcnR1YWxLZXlib2FyZCIsICJJTlRFUkFDVElWRV9XSURHRVQiLCAiVklFV1BPUlRfRklUIiwgImVuc3VyZVZpZXdwb3J0SW50ZXJhY3RpdmVXaWRnZXRPdmVybGF5IiwgImhlYWQiLCAibWV0YSIsICJjb250ZW50IiwgImVuc3VyZVZpcnR1YWxLZXlib2FyZE92ZXJsYXkiLCAidmsiLCAiaXNJbWVUYXJnZXQiLCAidGFnIiwgImlzQ29sbGFwc2VkQ2FyZXQiLCAibGF5b3V0TG9ja09yaWVudCIsICJsYXlvdXRMb2NrVyIsICJsYXlvdXRMb2NrSCIsICJsYXN0U3RhYmxlS2V5Ym9hcmQiLCAiY3JlYXRlRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAic2FmZVdpZHRoIiwgInNhZmVIZWlnaHQiLCAic2FmZUxlZnQiLCAic2FmZVRvcCIsICJyZWFkRml4ZWRPdmVybGF5Vmlld3BvcnQiLCAicmVhZExheW91dFZpZXdwb3J0IiwgImlubmVyVyIsICJpbm5lckgiLCAidnZXIiwgInZ2SCIsICJ2dlRvcCIsICJ2a0giLCAidnZPdmVybGFwIiwgImNhcEgiLCAibmF0aXZlQ2FwIiwgImtleWJvYXJkIiwgImNhbmRpZGF0ZVciLCAiY2FuZGlkYXRlSCIsICJzdWRkZW5TaHJpbmsiLCAic2hyaW5rIiwgImV4cGFuZGVkU2VsZWN0aW9uIiwgImlzSW1lQ2hyb21lTG9jayIsICJjbHMiLCAicGFyZW50T2YiLCAiaXNTY3JvbGxwb3J0IiwgInN0eWxlIiwgIm95IiwgImZpbmRJbWVTY3JvbGxwb3J0IiwgInN0YXJ0IiwgInJlYWRDYXJldFJlY3QiLCAicmFuZ2UiLCAicmVjdHMiLCAicmVjdCIsICJwaW5JbWVDYXJldEluU2Nyb2xscG9ydCIsICJ2aXNpYmxlQm90dG9tIiwgIm92ZXJmbG93IiwgInBvcnQiLCAicGluVmlzdWFsVmlld3BvcnQiLCAib3ZlcmxheVBpbm5pbmciLCAicmVzZXRDaHJvbWVTY3JvbGwiLCAicGluT3ZlcmxheVNjcm9sbCIsICJib2R5IiwgInNjcm9sbEludG9WaWV3UGF0Y2hlZCIsICJwYXRjaEltZVNjcm9sbEludG9WaWV3IiwgIm9yaWciLCAiYXJnIiwgInBpbkltZUNocm9tZSIsICJnZXRBdmFpbFNpemUiLCAibCIsICJsYXlvdXQiLCAidnZCbG9jayIsICJhdyIsICJhaCIsICJhdmFpbFNpemUiLCAiY2xhc3NlcyIsICJvcmllbnRhdGlvbk51bWJlck1hcCIsICJ1cGRhdGVWUCIsICJydWxlIiwgInByb3BOYW1lIiwgInByb3BWYWx1ZSIsICJleGlzdHMiLCAiZ2V0Q29ycmVjdE9yaWVudGF0aW9uIiwgIm9yaWVudGF0aW9uVHlwZSIsICJwYXNzaXZlT3B0cyQxIiwgImFwcGx5Q2FwYWNpdG9yS2V5Ym9hcmRIZWlnaHQiLCAibmV4dCIsICJjbGVhckNhcGFjaXRvcktleWJvYXJkSGVpZ2h0IiwgImJpbmRXaW5kb3dLZXlib2FyZEV2ZW50cyIsICJvblNob3ciLCAiZGV0YWlsIiwgImZyb21EZXRhaWwiLCAiYmluZENhcGFjaXRvcktleWJvYXJkIiwgIktleWJvYXJkIiwgImluZm8iLCAiZW5zdXJlVmlld3BvcnRUcmFja2luZyIsICJ3aGVuQW55U2NyZWVuQ2hhbmdlcyIsICJ0aWNraW5nIiwgInVwZGF0ZSIsICJ1bnN1YnNjcmliZXJzIiwgInVuc3ViIiwgImZpeE9yaWVudFRvU2NyZWVuIiwgImN0eCIsICJpbml0VGV4dFN0eWxlIiwgImZvbnRXZWlnaHQiLCAiZm9udFNpemUiLCAiZm9udEZhbWlseSIsICJmb250U3RyZXRjaCIsICJtZWFzdXJlVGV4dCIsICJ0ZXh0IiwgIm1lYXN1cmVJbnB1dEluRm9jdXMiLCAiY29tcHV0ZUNhcmV0UG9zaXRpb24iLCAicG9pbnQiLCAiY3VycmVudFdpZHRoIiwgImNvbXB1dGVDYXJldFBvc2l0aW9uRnJvbUNsaWVudCIsICJjbGllbnQiLCAicmVhZExhdW5jaGVyTGF5b3V0RnJvbUVsZW1lbnQiLCAibGF5b3V0T3ZlcnJpZGUiLCAiYyIsICJiYXNlIiwgInJlc29sdmVHcmlkQ2VsbEZyb21DbGllbnRQb2ludCIsICJncmlkU3lzdGVtIiwgImNsaWVudFBvaW50IiwgIm1vZGUiLCAiY3MiLCAicGwiLCAicHQiLCAicHIiLCAicGIiLCAiY29udGVudFciLCAiY29udGVudEgiLCAiY3NDb29yZCIsICJhbmltYXRlU2hvdyIsICJhbmltYXRlSGlkZSIsICJXYXZ5U2hhcGVkQ2lyY2xlIiwgInN0ZXBzIiwgImFtcGxpdHVkZSIsICJmcmVxIiwgInBvaW50cyIsICJpIiwgImFuZ2xlIiwgInN0ZXAiLCAidmFyaWFudCIsICJmdW5jIiwgIm9uQm9yZGVyT2JzZXJ2ZVN5bWJvbCIsICJvbkJvcmRlck9ic2VydmUkMSIsICJvbkNvbnRlbnRPYnNlcnZlU3ltYm9sIiwgIm9uQ29udGVudE9ic2VydmUkMSIsICJ1bndyYXBGcm9tUXVlcnkiLCAibm9ybWFsaXplU2VsZWN0b3IiLCAiZmFsbGJhY2siLCAic2FmZVF1ZXJ5U2VsZWN0b3JBbGwiLCAic2FmZU1hdGNoZXMiLCAib2JzZXJ2ZUNvbnRlbnRCb3giLCAiY2FsbGJhY2tzIiwgIm9ic2VydmVCb3JkZXJCb3giLCAib2JzZXJ2ZUF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAib2JzZXJ2ZUF0dHJpYnV0ZUJ5U2VsZWN0b3IiLCAiYXR0cmlidXRlTGlzdCIsICJzIiwgIm11dGF0aW9uTGlzdCIsICJtdXRhdGlvbiIsICJhZGRlZE5vZGVzIiwgInJlbW92ZWROb2RlcyIsICJvYnNlcnZlQnlTZWxlY3RvciIsICJtdXQiLCAib2JzIiwgInVud3JhcE5vZGVzQnlTZWxlY3RvciIsICJub2RlcyIsICIkbm9kZXMiLCAib2JSZWYiLCAiaGFuZGxlTXV0YXRpb24iLCAiaGFuZGxlQ29tZSIsICJoYW5kbGVPdXRDb21lIiwgImhhbmRsZUZvY3VzQ2xpY2siLCAiZmFjdG9ycyIsICJzZWxlY3RlZCIsICJib3VuZEJlaGF2aW9ycyIsICJiaW5kQmVoYXZpb3IiLCAiYmVoU2V0IiwgImJlaGF2aW9yIiwgInJlZmxlY3RCZWhhdmlvcnMiLCAiYmVoYXZpb3JzIiwgIm5hbWVkU3RvcmVNYXBzU3ltYm9sIiwgIm5hbWVkU3RvcmVNYXBzIiwgImdldFN0b3Jlc09mRWxlbWVudCIsICJtYXAiLCAiRSIsICJtIiwgImlzV2Vha0NvbXBhdGlibGUiLCAiYmluZFN0b3JlIiwgIm9iaiIsICJ3ZWFrTWFwIiwgInJlZmxlY3RTdG9yZXMiLCAic3RvcmVzIiwgInJlZmxlY3RNaXhpbnMiLCAibWl4aW5zIiwgIm1peGluU2V0IiwgImJvdW5kTWl4aW5TZXQiLCAiYmluZE1peGlucyIsICJnZXRFbGVtZW50UmVsYXRlZCIsICJtaXhpbiIsICJtaXhTZXQiLCAid2VsIiwgIm1peGluRWxlbWVudHMiLCAiYm91bmRNaXhpblNldFN5bWJvbCIsICJtaXhpbkVsZW1lbnRzU3ltYm9sIiwgIm1peGluUmVnaXN0cnlTeW1ib2wiLCAibWl4aW5SZWdpc3RyeSIsICJtaXhpbk5hbWVzcGFjZVN5bWJvbCIsICJtaXhpbk5hbWVzcGFjZSIsICJ1cGRhdGVNaXhpbkF0dHJpYnV0ZXMiLCAibmFtZXMiLCAicm9vdHMiLCAiYWRkUm9vdCIsICJ1cGRhdGVBbGxNaXhpbnMiLCAidXBkYXRlTWl4aW5BdHRyaWJ1dGVzQWxsIiwgImVsZW1lbnRzIiwgInVwZGF0ZU1peGluQXR0cmlidXRlc0FsbEluUm9vdHMiLCAibmFtZVJlZ2lzdHJ5RiIsICJrZXkiLCAicmVnaXN0ZXJNaXhpbiIsICJET01NaXhpbiIsICJ3RWxlbWVudCIsICJ3U2VsZiIsICJyZWxhdGVkIiwgImhhbmRsZUhpZGRlbiIsICJfIiwgInZpc2libGUiLCAiJHJlZiIsICJpc1Zpc2libGUiLCAiaGFuZGxlUHJvcGVydHkiLCAicHJvcCIsICJ2YWwiLCAiaGFuZGxlRGF0YXNldCIsICJkYXRhc2V0UmVmIiwgImRlbGV0ZVN0eWxlUHJvcGVydHkiLCAiaGFuZGxlU3R5bGVDaGFuZ2UiLCAic3R5bGVSZWYiLCAiaGFuZGxlQXR0cmlidXRlIiwgImp1bmN0aW9uVG9Cb3giLCAiSlVOQ1RJT05fU0VMRUNUX0VWRU5UUyIsICJKVU5DVElPTl9EUkFHX0VWRU5UUyIsICJKVU5DVElPTl9SRVNJWkVfRVZFTlRTIiwgIm1peGluRGlzcG9zZXJzU3ltYm9sIiwgIm1peGluRGlzcG9zZXJzIiwgInB1c2hEaXNwb3NhYmxlIiwgIm1peGluTmFtZSIsICJmbiIsICJydW5EaXNwb3NlcnMiLCAicGFyc2VQeFZhciIsICJxdWVyeUhhbmRsZSIsICJhdHRyIiwgImZvdW5kIiwgIkp1bmN0aW9uU2VsZWN0TWl4aW4iLCAid0VsIiwgIm92ZXJsYXkiLCAibG9jYWxQb2ludCIsICJhcHBseU92ZXJsYXkiLCAib25Eb3duIiwgIm9uTW92ZSIsICJlbmQiLCAib25VcCIsICJvbkNhbmNlbCIsICJKdW5jdGlvbkRyYWdNaXhpbiIsICJwcmV2aW91c1RyYW5zZm9ybSIsICJoYW5kbGUiLCAiZHJhZ2dpbmciLCAic3RhcnRYIiwgInN0YXJ0WSIsICJiYXNlWCIsICJiYXNlWSIsICJkeCIsICJkeSIsICJueCIsICJueSIsICJKdW5jdGlvblJlc2l6ZU1peGluIiwgInJlc2l6aW5nIiwgInN4IiwgInN5IiwgInN3IiwgInNoIiwgIm1pblciLCAibWluSCIsICJudyIsICJuaCJdCn0K
