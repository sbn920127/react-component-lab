import Be, { createContext as qe, useContext as Je } from "react";
var ce = { exports: {} }, te = {};
var ye;
function Xe() {
  if (ye) return te;
  ye = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(t, s, c) {
    var i = null;
    if (c !== void 0 && (i = "" + c), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: e,
      type: t,
      key: i,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return te.Fragment = n, te.jsx = r, te.jsxs = r, te;
}
var oe = {};
var ke;
function He() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === le ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case k:
          return "Fragment";
        case B:
          return "Profiler";
        case O:
          return "StrictMode";
        case j:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case _:
            return "Portal";
          case L:
            return o.displayName || "Context";
          case W:
            return (o._context.displayName || "Context") + ".Consumer";
          case V:
            var f = o.render;
            return o = o.displayName, o || (o = f.displayName || f.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case m:
            return f = o.displayName || null, f !== null ? f : e(o.type) || "Memo";
          case C:
            f = o._payload, o = o._init;
            try {
              return e(o(f));
            } catch {
            }
        }
      return null;
    }
    function n(o) {
      return "" + o;
    }
    function r(o) {
      try {
        n(o);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var h = f.error, v = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          v
        ), n(o);
      }
    }
    function t(o) {
      if (o === k) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === C)
        return "<...>";
      try {
        var f = e(o);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = G.A;
      return o === null ? null : o.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function i(o) {
      if (Q.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function p(o, f) {
      function h() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: h,
        configurable: !0
      });
    }
    function u() {
      var o = e(this.type);
      return z[o] || (z[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function b(o, f, h, v, N, q) {
      var x = h.ref;
      return o = {
        $$typeof: S,
        type: o,
        key: f,
        props: h,
        _owner: v
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function y(o, f, h, v, N, q) {
      var x = f.children;
      if (x !== void 0)
        if (v)
          if (K(x)) {
            for (v = 0; v < x.length; v++)
              w(x[v]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(x);
      if (Q.call(f, "key")) {
        x = e(o);
        var I = Object.keys(f).filter(function(J) {
          return J !== "key";
        });
        v = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", re[x + v] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          v,
          x,
          I,
          x
        ), re[x + v] = !0);
      }
      if (x = null, h !== void 0 && (r(h), x = "" + h), i(f) && (r(f.key), x = "" + f.key), "key" in f) {
        h = {};
        for (var D in f)
          D !== "key" && (h[D] = f[D]);
      } else h = f;
      return x && p(
        h,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), b(
        o,
        x,
        h,
        s(),
        N,
        q
      );
    }
    function w(o) {
      R(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === C && (o._payload.status === "fulfilled" ? R(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function R(o) {
      return typeof o == "object" && o !== null && o.$$typeof === S;
    }
    var A = Be, S = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), le = /* @__PURE__ */ Symbol.for("react.client.reference"), G = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, K = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var T, z = {}, d = A.react_stack_bottom_frame.bind(
      A,
      c
    )(), ee = P(t(c)), re = {};
    oe.Fragment = k, oe.jsx = function(o, f, h) {
      var v = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        o,
        f,
        h,
        !1,
        v ? Error("react-stack-top-frame") : d,
        v ? P(t(o)) : ee
      );
    }, oe.jsxs = function(o, f, h) {
      var v = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        o,
        f,
        h,
        !0,
        v ? Error("react-stack-top-frame") : d,
        v ? P(t(o)) : ee
      );
    };
  })()), oe;
}
var we;
function Ze() {
  return we || (we = 1, process.env.NODE_ENV === "production" ? ce.exports = Xe() : ce.exports = He()), ce.exports;
}
var $ = Ze();
function Pe(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (r = Pe(e[n])) && (t && (t += " "), t += r);
  } else for (r in e) e[r] && (t && (t += " "), t += r);
  return t;
}
function ze() {
  for (var e, n, r = 0, t = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (n = Pe(e)) && (t && (t += " "), t += n);
  return t;
}
const Re = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ee = ze, xe = (e, n) => (r) => {
  var t;
  if (n?.variants == null) return Ee(e, r?.class, r?.className);
  const { variants: s, defaultVariants: c } = n, i = Object.keys(s).map((b) => {
    const y = r?.[b], w = c?.[b];
    if (y === null) return null;
    const R = Re(y) || Re(w);
    return s[b][R];
  }), p = r && Object.entries(r).reduce((b, y) => {
    let [w, R] = y;
    return R === void 0 || (b[w] = R), b;
  }, {}), u = n == null || (t = n.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((b, y) => {
    let { class: w, className: R, ...A } = y;
    return Object.entries(A).every((S) => {
      let [_, k] = S;
      return Array.isArray(k) ? k.includes({
        ...c,
        ...p
      }[_]) : {
        ...c,
        ...p
      }[_] === k;
    }) ? [
      ...b,
      w,
      R
    ] : b;
  }, []);
  return Ee(e, i, u, r?.class, r?.className);
}, Qe = (e, n) => {
  const r = new Array(e.length + n.length);
  for (let t = 0; t < e.length; t++)
    r[t] = e[t];
  for (let t = 0; t < n.length; t++)
    r[e.length + t] = n[t];
  return r;
}, Ke = (e, n) => ({
  classGroupId: e,
  validator: n
}), Oe = (e = /* @__PURE__ */ new Map(), n = null, r) => ({
  nextPart: e,
  validators: n,
  classGroupId: r
}), me = "-", _e = [], er = "arbitrary..", rr = (e) => {
  const n = or(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return tr(i);
      const p = i.split(me), u = p[0] === "" && p.length > 1 ? 1 : 0;
      return je(p, u, n);
    },
    getConflictingClassGroupIds: (i, p) => {
      if (p) {
        const u = t[i], b = r[i];
        return u ? b ? Qe(b, u) : u : b || _e;
      }
      return r[i] || _e;
    }
  };
}, je = (e, n, r) => {
  if (e.length - n === 0)
    return r.classGroupId;
  const s = e[n], c = r.nextPart.get(s);
  if (c) {
    const b = je(e, n + 1, c);
    if (b) return b;
  }
  const i = r.validators;
  if (i === null)
    return;
  const p = n === 0 ? e.join(me) : e.slice(n).join(me), u = i.length;
  for (let b = 0; b < u; b++) {
    const y = i[b];
    if (y.validator(p))
      return y.classGroupId;
  }
}, tr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), r = n.indexOf(":"), t = n.slice(0, r);
  return t ? er + t : void 0;
})(), or = (e) => {
  const {
    theme: n,
    classGroups: r
  } = e;
  return nr(r, n);
}, nr = (e, n) => {
  const r = Oe();
  for (const t in e) {
    const s = e[t];
    ve(s, r, t, n);
  }
  return r;
}, ve = (e, n, r, t) => {
  const s = e.length;
  for (let c = 0; c < s; c++) {
    const i = e[c];
    sr(i, n, r, t);
  }
}, sr = (e, n, r, t) => {
  if (typeof e == "string") {
    ar(e, n, r);
    return;
  }
  if (typeof e == "function") {
    lr(e, n, r, t);
    return;
  }
  ir(e, n, r, t);
}, ar = (e, n, r) => {
  const t = e === "" ? n : Ne(n, e);
  t.classGroupId = r;
}, lr = (e, n, r, t) => {
  if (cr(e)) {
    ve(e(t), n, r, t);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Ke(r, e));
}, ir = (e, n, r, t) => {
  const s = Object.entries(e), c = s.length;
  for (let i = 0; i < c; i++) {
    const [p, u] = s[i];
    ve(u, Ne(n, p), r, t);
  }
}, Ne = (e, n) => {
  let r = e;
  const t = n.split(me), s = t.length;
  for (let c = 0; c < s; c++) {
    const i = t[c];
    let p = r.nextPart.get(i);
    p || (p = Oe(), r.nextPart.set(i, p)), r = p;
  }
  return r;
}, cr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, dr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, r = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const s = (c, i) => {
    r[c] = i, n++, n > e && (n = 0, t = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(c) {
      let i = r[c];
      if (i !== void 0)
        return i;
      if ((i = t[c]) !== void 0)
        return s(c, i), i;
    },
    set(c, i) {
      c in r ? r[c] = i : s(c, i);
    }
  };
}, he = "!", Ae = ":", ur = [], Ce = (e, n, r, t, s) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: r,
  maybePostfixModifierPosition: t,
  isExternal: s
}), mr = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: r
  } = e;
  let t = (s) => {
    const c = [];
    let i = 0, p = 0, u = 0, b;
    const y = s.length;
    for (let _ = 0; _ < y; _++) {
      const k = s[_];
      if (i === 0 && p === 0) {
        if (k === Ae) {
          c.push(s.slice(u, _)), u = _ + 1;
          continue;
        }
        if (k === "/") {
          b = _;
          continue;
        }
      }
      k === "[" ? i++ : k === "]" ? i-- : k === "(" ? p++ : k === ")" && p--;
    }
    const w = c.length === 0 ? s : s.slice(u);
    let R = w, A = !1;
    w.endsWith(he) ? (R = w.slice(0, -1), A = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      w.startsWith(he) && (R = w.slice(1), A = !0)
    );
    const S = b && b > u ? b - u : void 0;
    return Ce(c, A, R, S);
  };
  if (n) {
    const s = n + Ae, c = t;
    t = (i) => i.startsWith(s) ? c(i.slice(s.length)) : Ce(ur, !1, i, void 0, !0);
  }
  if (r) {
    const s = t;
    t = (c) => r({
      className: c,
      parseClassName: s
    });
  }
  return t;
}, fr = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, t) => {
    n.set(r, 1e6 + t);
  }), (r) => {
    const t = [];
    let s = [];
    for (let c = 0; c < r.length; c++) {
      const i = r[c], p = i[0] === "[", u = n.has(i);
      p || u ? (s.length > 0 && (s.sort(), t.push(...s), s = []), t.push(i)) : s.push(i);
    }
    return s.length > 0 && (s.sort(), t.push(...s)), t;
  };
}, pr = (e) => ({
  cache: dr(e.cacheSize),
  parseClassName: mr(e),
  sortModifiers: fr(e),
  ...rr(e)
}), br = /\s+/, gr = (e, n) => {
  const {
    parseClassName: r,
    getClassGroupId: t,
    getConflictingClassGroupIds: s,
    sortModifiers: c
  } = n, i = [], p = e.trim().split(br);
  let u = "";
  for (let b = p.length - 1; b >= 0; b -= 1) {
    const y = p[b], {
      isExternal: w,
      modifiers: R,
      hasImportantModifier: A,
      baseClassName: S,
      maybePostfixModifierPosition: _
    } = r(y);
    if (w) {
      u = y + (u.length > 0 ? " " + u : u);
      continue;
    }
    let k = !!_, O = t(k ? S.substring(0, _) : S);
    if (!O) {
      if (!k) {
        u = y + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (O = t(S), !O) {
        u = y + (u.length > 0 ? " " + u : u);
        continue;
      }
      k = !1;
    }
    const B = R.length === 0 ? "" : R.length === 1 ? R[0] : c(R).join(":"), W = A ? B + he : B, L = W + O;
    if (i.indexOf(L) > -1)
      continue;
    i.push(L);
    const V = s(O, k);
    for (let j = 0; j < V.length; ++j) {
      const Y = V[j];
      i.push(W + Y);
    }
    u = y + (u.length > 0 ? " " + u : u);
  }
  return u;
}, hr = (...e) => {
  let n = 0, r, t, s = "";
  for (; n < e.length; )
    (r = e[n++]) && (t = Ie(r)) && (s && (s += " "), s += t);
  return s;
}, Ie = (e) => {
  if (typeof e == "string")
    return e;
  let n, r = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (n = Ie(e[t])) && (r && (r += " "), r += n);
  return r;
}, xr = (e, ...n) => {
  let r, t, s, c;
  const i = (u) => {
    const b = n.reduce((y, w) => w(y), e());
    return r = pr(b), t = r.cache.get, s = r.cache.set, c = p, p(u);
  }, p = (u) => {
    const b = t(u);
    if (b)
      return b;
    const y = gr(u, r);
    return s(u, y), y;
  };
  return c = i, (...u) => c(hr(...u));
}, vr = [], E = (e) => {
  const n = (r) => r[e] || vr;
  return n.isThemeGetter = !0, n;
}, Me = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Le = /^\((?:(\w[\w-]*):)?(.+)\)$/i, yr = /^\d+\/\d+$/, kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Er = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _r = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, X = (e) => yr.test(e), g = (e) => !!e && !Number.isNaN(Number(e)), F = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && g(e.slice(0, -1)), M = (e) => kr.test(e), Ar = () => !0, Cr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wr.test(e) && !Rr.test(e)
), Ve = () => !1, Sr = (e) => Er.test(e), Tr = (e) => _r.test(e), Pr = (e) => !a(e) && !l(e), zr = (e) => H(e, Fe, Ve), a = (e) => Me.test(e), U = (e) => H(e, $e, Cr), ge = (e) => H(e, Mr, g), Se = (e) => H(e, Ge, Ve), Or = (e) => H(e, De, Tr), de = (e) => H(e, We, Sr), l = (e) => Le.test(e), ne = (e) => Z(e, $e), jr = (e) => Z(e, Lr), Te = (e) => Z(e, Ge), Nr = (e) => Z(e, Fe), Ir = (e) => Z(e, De), ue = (e) => Z(e, We, !0), H = (e, n, r) => {
  const t = Me.exec(e);
  return t ? t[1] ? n(t[1]) : r(t[2]) : !1;
}, Z = (e, n, r = !1) => {
  const t = Le.exec(e);
  return t ? t[1] ? n(t[1]) : r : !1;
}, Ge = (e) => e === "position" || e === "percentage", De = (e) => e === "image" || e === "url", Fe = (e) => e === "length" || e === "size" || e === "bg-size", $e = (e) => e === "length", Mr = (e) => e === "number", Lr = (e) => e === "family-name", We = (e) => e === "shadow", Vr = () => {
  const e = E("color"), n = E("font"), r = E("text"), t = E("font-weight"), s = E("tracking"), c = E("leading"), i = E("breakpoint"), p = E("container"), u = E("spacing"), b = E("radius"), y = E("shadow"), w = E("inset-shadow"), R = E("text-shadow"), A = E("drop-shadow"), S = E("blur"), _ = E("perspective"), k = E("aspect"), O = E("ease"), B = E("animate"), W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], V = () => [...L(), l, a], j = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], m = () => [l, a, u], C = () => [X, "full", "auto", ...m()], ae = () => [F, "none", "subgrid", l, a], le = () => ["auto", {
    span: ["full", F, l, a]
  }, F, l, a], G = () => [F, "auto", l, a], Q = () => ["auto", "min", "max", "fr", l, a], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...m()], z = () => [X, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], d = () => [e, l, a], ee = () => [...L(), Te, Se, {
    position: [l, a]
  }], re = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], o = () => ["auto", "cover", "contain", Nr, zr, {
    size: [l, a]
  }], f = () => [be, ne, U], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    l,
    a
  ], v = () => ["", g, ne, U], N = () => ["solid", "dashed", "dotted", "double"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], x = () => [g, be, Te, Se], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    S,
    l,
    a
  ], D = () => ["none", g, l, a], J = () => ["none", g, l, a], pe = () => [g, l, a], ie = () => [X, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [M],
      breakpoint: [M],
      color: [Ar],
      container: [M],
      "drop-shadow": [M],
      ease: ["in", "out", "in-out"],
      font: [Pr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [M],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [M],
      shadow: [M],
      spacing: ["px", g],
      text: [M],
      "text-shadow": [M],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", X, a, l, k]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [g, a, l, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: V()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: C()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": C()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": C()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: C()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: C()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: C()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: C()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: C()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: C()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [F, "auto", l, a]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [X, "full", "auto", p, ...m()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [g, X, "auto", "initial", "none", a]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", g, l, a]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", g, l, a]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [F, "first", "last", "none", l, a]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ae()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: le()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ae()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: le()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...K(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": K()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: m()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": m()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ne, U]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, l, ge]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", be, a]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jr, a, n]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, l, a]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [g, "none", l, ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          c,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", l, a]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", l, a]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: d()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: d()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [g, "from-font", "auto", l, U]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: d()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [g, "auto", l, a]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l, a]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", l, a]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ee()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: re()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: o()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, F, l, a],
          radial: ["", l, a],
          conic: [F, l, a]
        }, Ir, Or]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: d()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: f()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: f()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: f()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: d()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: d()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: d()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: h()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": h()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": h()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": h()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": h()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": h()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": h()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": h()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": h()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": h()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": h()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": h()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": h()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": h()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": h()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: v()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": v()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": v()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": v()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": v()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": v()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": v()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": v()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": v()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": v()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": v()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...N(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: d()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": d()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": d()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": d()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": d()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": d()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": d()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": d()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": d()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: d()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...N(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [g, l, a]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", g, ne, U]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: d()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          ue,
          de
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: d()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, ue, de]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": d()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: v()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: d()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [g, U]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": d()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": v()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": d()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", R, ue, de]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": d()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g, l, a]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [g]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": x()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": x()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": d()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": d()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": x()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": x()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": d()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": d()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": x()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": x()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": d()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": d()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": x()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": x()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": d()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": d()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": x()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": x()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": d()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": d()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": x()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": x()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": d()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": d()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": x()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": x()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": d()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": d()
      }],
      "mask-image-radial": [{
        "mask-radial": [l, a]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": x()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": x()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": d()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": d()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": L()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [g]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": x()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": x()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": d()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": d()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ee()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: re()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: o()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", l, a]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          a
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: I()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [g, l, a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g, l, a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          A,
          ue,
          de
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": d()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", g, l, a]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g, l, a]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", g, l, a]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g, l, a]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", g, l, a]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          l,
          a
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": I()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [g, l, a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g, l, a]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", g, l, a]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g, l, a]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", g, l, a]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g, l, a]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g, l, a]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", g, l, a]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", l, a]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [g, "initial", l, a]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", O, l, a]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [g, l, a]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", B, l, a]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [_, l, a]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": V()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: D()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": D()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": D()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": D()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [l, a, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: V()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ie()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ie()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ie()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ie()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: d()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: d()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l, a]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": m()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", l, a]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...d()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [g, ne, U, ge]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...d()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Gr = /* @__PURE__ */ xr(Vr);
function se(...e) {
  return Gr(ze(...e));
}
const Dr = xe(
  // 基礎樣式 (所有按鈕都有的)
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      intent: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
        ghost: "hover:bg-gray-100 hover:text-gray-900"
      },
      // 定義 size (尺寸)
      size: {
        sm: "h-9 px-3",
        md: "h-10 py-2 px-4",
        lg: "h-11 px-8 rounded-md"
      }
    },
    // 設定預設值
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), Jr = ({
  as: e,
  children: n,
  className: r,
  intent: t,
  size: s,
  ...c
}) => {
  const i = e || "button";
  return /* @__PURE__ */ $.jsx(
    i,
    {
      className: se(Dr({ intent: t, size: s, className: r })),
      ...c,
      children: n
    }
  );
}, Ye = qe(null);
function Ue() {
  const e = Je(Ye);
  if (!e)
    throw new Error("useDataListContext must be used within a DataListProvider");
  return e;
}
const Fr = xe("w-full", {
  variants: {
    layout: {
      list: "flex flex-col gap-y-3",
      grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    }
  },
  defaultVariants: {
    layout: "list"
  }
}), $r = ({
  layout: e = "list",
  className: n,
  children: r,
  ...t
}) => /* @__PURE__ */ $.jsx(Ye.Provider, { value: { layout: e }, children: /* @__PURE__ */ $.jsx(
  "ul",
  {
    className: se(Fr({ layout: e }), n),
    ...t,
    children: r
  }
) }), Wr = xe("group relative transition-all", {
  variants: {
    layout: {
      list: "w-full",
      grid: "h-full"
    }
  }
}), Yr = ({ className: e, children: n, ...r }) => {
  const { layout: t } = Ue();
  return /* @__PURE__ */ $.jsx("li", { className: se(Wr({ layout: t }), e), ...r, children: n });
}, Ur = ({ className: e, children: n, ...r }) => /* @__PURE__ */ $.jsx("div", { className: se("flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500", e), ...r, children: n }), Br = ({ count: e = 3, className: n }) => {
  const { layout: r } = Ue();
  return /* @__PURE__ */ $.jsx($.Fragment, { children: Array.from({ length: e }).map((t, s) => /* @__PURE__ */ $.jsx(
    "li",
    {
      className: se(
        "animate-pulse rounded-md bg-slate-200",
        // 共用樣式
        r === "list" ? "h-16 w-full" : "aspect-[4/3] w-full",
        // 根據 layout 改變形狀
        n
      )
    },
    s
  )) });
}, fe = $r;
fe.Item = Yr;
fe.Empty = Ur;
fe.Skeleton = Br;
const Xr = fe;
export {
  Jr as Button,
  Xr as DataList,
  Ur as DataListEmpty,
  Yr as DataListItem,
  Br as DataListSkeleton,
  se as cn
};
