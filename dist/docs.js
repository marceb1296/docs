import Y, { createContext as Ie, useContext as A, Fragment as jr, useDeferredValue as gr, Suspense as yr, useEffect as se, useRef as $e } from "react";
import { useComputed as K, useSignal as N, batch as br } from "@preact/signals-react";
var r = {}, Er = {
  get exports() {
    return r;
  },
  set exports(a) {
    r = a;
  }
}, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Cr() {
  if (Fe)
    return z;
  Fe = 1;
  var a = Y, s = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, d, y) {
    var E, j = {}, _ = null, D = null;
    y !== void 0 && (_ = "" + y), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (D = d.ref);
    for (E in d)
      u.call(d, E) && !c.hasOwnProperty(E) && (j[E] = d[E]);
    if (m && m.defaultProps)
      for (E in d = m.defaultProps, d)
        j[E] === void 0 && (j[E] = d[E]);
    return { $$typeof: s, type: m, key: _, ref: D, props: j, _owner: l.current };
  }
  return z.Fragment = o, z.jsx = h, z.jsxs = h, z;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Rr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Y, s = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), P = Symbol.iterator, le = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = P && e[P] || e[le];
      return typeof t == "function" ? t : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        ue("error", e, n);
      }
    }
    function ue(e, t, n) {
      {
        var i = O.ReactDebugCurrentFrame, p = i.getStackAddendum();
        p !== "" && (t += "%s", n = n.concat([p]));
        var x = n.map(function(v) {
          return String(v);
        });
        x.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var ze = !1, We = !1, Ye = !1, Be = !1, Ve = !1, de;
    de = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === c || Ve || e === l || e === y || e === E || Be || e === D || ze || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === j || e.$$typeof === h || e.$$typeof === m || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function He(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
      var p = t.displayName || t.name || "";
      return p !== "" ? n + "(" + p + ")" : n;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case y:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return fe(t) + ".Consumer";
          case h:
            var n = e;
            return fe(n._context) + ".Provider";
          case d:
            return He(e, e.render, "ForwardRef");
          case j:
            var i = e.displayName || null;
            return i !== null ? i : T(e.type) || "Memo";
          case _: {
            var p = e, x = p._payload, v = p._init;
            try {
              return T(v(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, he, ve, pe, xe, me, je, ge;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function qe() {
      {
        if (I === 0) {
          he = console.log, ve = console.info, pe = console.warn, xe = console.error, me = console.group, je = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ke() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: he
            }),
            info: k({}, e, {
              value: ve
            }),
            warn: k({}, e, {
              value: pe
            }),
            error: k({}, e, {
              value: xe
            }),
            group: k({}, e, {
              value: me
            }),
            groupCollapsed: k({}, e, {
              value: je
            }),
            groupEnd: k({}, e, {
              value: ge
            })
          });
        }
        I < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = O.ReactCurrentDispatcher, X;
    function B(e, t, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (p) {
            var i = p.stack.trim().match(/\n( *(at )?)/);
            X = i && i[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, V;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Je();
    }
    function be(e, t) {
      if (!e || Z)
        return "";
      {
        var n = V.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      Z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = G.current, G.current = null, qe();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (S) {
              i = S;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (S) {
              i = S;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            i = S;
          }
          e();
        }
      } catch (S) {
        if (S && i && typeof S.stack == "string") {
          for (var f = S.stack.split(`
`), R = i.stack.split(`
`), g = f.length - 1, b = R.length - 1; g >= 1 && b >= 0 && f[g] !== R[b]; )
            b--;
          for (; g >= 1 && b >= 0; g--, b--)
            if (f[g] !== R[b]) {
              if (g !== 1 || b !== 1)
                do
                  if (g--, b--, b < 0 || f[g] !== R[b]) {
                    var w = `
` + f[g].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, w), w;
                  }
                while (g >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = x, Ke(), Error.prepareStackTrace = p;
      }
      var L = e ? e.displayName || e.name : "", Ne = L ? B(L) : "";
      return typeof e == "function" && V.set(e, Ne), Ne;
    }
    function Ge(e, t, n) {
      return be(e, !1);
    }
    function Xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function U(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Xe(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case y:
          return B("Suspense");
        case E:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case j:
            return U(e.type, t, n);
          case _: {
            var i = e, p = i._payload, x = i._init;
            try {
              return U(x(p), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, Ee = {}, Ce = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ze(e, t, n, i, p) {
      {
        var x = Function.call.bind(H);
        for (var v in e)
          if (x(e, v)) {
            var f = void 0;
            try {
              if (typeof e[v] != "function") {
                var R = Error((i || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              f = e[v](t, v, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              f = g;
            }
            f && !(f instanceof Error) && (q(p), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, v, typeof f), q(null)), f instanceof Error && !(f.message in Ee) && (Ee[f.message] = !0, q(p), C("Failed %s type: %s", n, f.message), q(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Q(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function rr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (rr(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Re(e);
    }
    var $ = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Te, ee;
    ee = {};
    function nr(e) {
      if (H.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (H.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, t) {
      if (typeof e.ref == "string" && $.current && t && $.current.stateNode !== t) {
        var n = T($.current.type);
        ee[n] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T($.current.type), e.ref), ee[n] = !0);
      }
    }
    function ir(e, t) {
      {
        var n = function() {
          we || (we = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function or(e, t) {
      {
        var n = function() {
          Te || (Te = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, t, n, i, p, x, v) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: v,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function lr(e, t, n, i, p) {
      {
        var x, v = {}, f = null, R = null;
        n !== void 0 && (_e(n), f = "" + n), ar(t) && (_e(t.key), f = "" + t.key), nr(t) && (R = t.ref, sr(t, p));
        for (x in t)
          H.call(t, x) && !tr.hasOwnProperty(x) && (v[x] = t[x]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (x in g)
            v[x] === void 0 && (v[x] = g[x]);
        }
        if (f || R) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && ir(v, b), R && or(v, b);
        }
        return cr(e, f, R, p, i, $.current, v);
      }
    }
    var re = O.ReactCurrentOwner, Se = O.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function De() {
      {
        if (re.current) {
          var e = T(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function dr(e) {
      {
        var t = De();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Pe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(t);
        if (Oe[n])
          return;
        Oe[n] = !0;
        var i = "";
        e && e._owner && e._owner !== re.current && (i = " It was passed a child from " + T(e._owner.type) + "."), F(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), F(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ne(i) && Pe(i, t);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = J(e);
          if (typeof p == "function" && p !== e.entries)
            for (var x = p.call(e), v; !(v = x.next()).done; )
              ne(v.value) && Pe(v.value, t);
        }
      }
    }
    function fr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === j))
          n = t.propTypes;
        else
          return;
        if (n) {
          var i = T(t);
          Ze(n, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !te) {
          te = !0;
          var p = T(t);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var i = t[n];
          if (i !== "children" && i !== "key") {
            F(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Ae(e, t, n, i, p, x) {
      {
        var v = Ue(e);
        if (!v) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ur(p);
          R ? f += R : f += De();
          var g;
          e === null ? g = "null" : Q(e) ? g = "array" : e !== void 0 && e.$$typeof === s ? (g = "<" + (T(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, f);
        }
        var b = lr(e, t, n, p, x);
        if (b == null)
          return b;
        if (v) {
          var w = t.children;
          if (w !== void 0)
            if (i)
              if (Q(w)) {
                for (var L = 0; L < w.length; L++)
                  ke(w[L], e);
                Object.freeze && Object.freeze(w);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(w, e);
        }
        return e === u ? hr(b) : fr(b), b;
      }
    }
    function vr(e, t, n) {
      return Ae(e, t, n, !0);
    }
    function pr(e, t, n) {
      return Ae(e, t, n, !1);
    }
    var xr = pr, mr = vr;
    W.Fragment = u, W.jsx = xr, W.jsxs = mr;
  }()), W;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = Cr() : a.exports = Rr();
})(Er);
const Kr = ({ children: a }) => /* @__PURE__ */ r.jsx("pre", { children: /* @__PURE__ */ r.jsx("code", { children: a }) }), _r = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 50 50",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"
      }
    )
  }
), wr = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 492.963 492.963",
    children: /* @__PURE__ */ r.jsx("g", { fill: "currentColor", children: /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: `M246.458,169.582c-11.5,0-19.1,9.6-19.1,19.1v114.8c0,11.5,7.6,19.101,19.1,19.101s19.101-9.601,19.101-19.101v-114.8
			C265.559,177.182,257.958,169.582,246.458,169.582z`
        }
      ),
      /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: "246.458",
          cy: "379.982",
          r: "19.1"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: `M483.658,391.382l-206.6-334.7c-17.2-26.8-44-26.8-61.2,0l-206.5,334.7c-21,36.3-5.7,65,36.3,65h399.7
			C489.358,456.382,504.658,427.781,483.658,391.382z M451.158,437.281h-409.3c-21,0-28.7-15.3-17.2-32.5l210.4-340.399
			c5.7-11.5,17.2-11.5,24.899,0l210.4,340.399C479.858,421.981,472.158,437.281,451.158,437.281z`
        }
      )
    ] }) })
  }
), Tr = () => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 50 50",
    children: [
      /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: "25",
          cy: "25",
          r: "23",
          fill: "red"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z "
        }
      ),
      /* @__PURE__ */ r.jsx(
        "text",
        {
          fill: "currentColor",
          fontSize: "2px",
          style: {
            whiteSpace: "pre"
          },
          x: "25.486",
          y: "24.000",
          transform: "matrix(21.958294, 0, 0, 18.849676, -542.510376, -414.568176)",
          children: "!"
        }
      )
    ]
  }
), Sr = {
  info: /* @__PURE__ */ r.jsx(_r, {}),
  warn: /* @__PURE__ */ r.jsx(wr, {}),
  danger: /* @__PURE__ */ r.jsx(Tr, {})
}, ie = ({ label: a, classType: s, children: o }) => /* @__PURE__ */ r.jsxs("div", { className: `alert-container ${s}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "alert-header", children: [
    /* @__PURE__ */ r.jsx("div", { className: "icon-container", children: /* @__PURE__ */ r.jsx("span", { className: "icon", children: Sr[s] }) }),
    /* @__PURE__ */ r.jsx("label", { children: a })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "alert-body", children: o })
] }), Jr = ({ children: a }) => /* @__PURE__ */ r.jsx(
  ie,
  {
    label: "Note",
    classType: "info",
    children: a
  }
), Gr = ({
  children: a
}) => /* @__PURE__ */ r.jsx(
  ie,
  {
    label: "Danger",
    classType: "danger",
    children: a
  }
), Xr = ({
  children: a
}) => /* @__PURE__ */ r.jsx(
  ie,
  {
    label: "Warning",
    classType: "warn",
    children: a
  }
), Dr = ({ text: a }) => /* @__PURE__ */ r.jsx("td", { children: a }), Or = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Name" }),
  /* @__PURE__ */ r.jsx("th", { children: "Type" }),
  /* @__PURE__ */ r.jsx("th", { children: "Required" }),
  /* @__PURE__ */ r.jsx("th", { children: "Description" }),
  /* @__PURE__ */ r.jsx("th", { children: "Default" })
] }), Pr = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Code" }),
  /* @__PURE__ */ r.jsx("th", { children: "Response" })
] }), kr = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Endpoint" }),
  /* @__PURE__ */ r.jsx("th", { children: "Method" }),
  /* @__PURE__ */ r.jsx("th", { children: "Headers" }),
  /* @__PURE__ */ r.jsx("th", { children: "Body" }),
  /* @__PURE__ */ r.jsx("th", { children: "Example" }),
  /* @__PURE__ */ r.jsx("th", { children: "Successful" }),
  /* @__PURE__ */ r.jsx("th", { children: "Failed" })
] }), oe = ({ defaultHeaders: a, header: s, body: o }) => /* @__PURE__ */ r.jsx("div", { className: "table", children: /* @__PURE__ */ r.jsxs("table", { children: [
  /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { children: s !== void 0 ? s.map((u, l) => /* @__PURE__ */ r.jsx("th", { children: u }, l)) : a }) }),
  /* @__PURE__ */ r.jsx("tbody", { children: o.map(
    (u, l) => /* @__PURE__ */ r.jsx("tr", { children: u.map((c, h) => /* @__PURE__ */ r.jsx(Dr, { text: c }, h)) }, l)
  ) })
] }) }), Zr = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(Pr, {}), header: a, body: s }), Qr = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(Or, {}), header: a, body: s }), et = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(kr, {}), header: a, body: s }), M = Ie({}), ce = Ie({});
const Ar = () => {
  const a = A(M), s = K(() => {
    if (a.content === void 0)
      return [];
    let o = {
      childs: {},
      childsKeys: []
    };
    return Object.entries(a.content).forEach(([l, { childs: c }]) => {
      c && c.forEach((h) => {
        h in a.content && (o = {
          ...o,
          childs: {
            ...o.childs,
            [l]: o.childs[l] ? [...o.childs[l], a.content[h]] : [a.content[h]]
          },
          childsKeys: [...o.childsKeys, h]
        });
      });
    }), Object.entries(a.content).map(
      ([l, { title: c, childs: h, data: m, id: d }]) => ({
        title: c,
        data: m,
        id: d,
        dataChilds: o.childs[l] ? o.childs[l] : [],
        key: l
      })
    ).filter((l) => !o.childsKeys.includes(l.key));
  });
  return /* @__PURE__ */ r.jsx("main", { className: "docs-container", children: s.value.map(
    ({ id: o, title: u, data: l, dataChilds: c }, h) => /* @__PURE__ */ r.jsx(
      ae,
      {
        id: o,
        title: u,
        data: l,
        childClass: "",
        dataChilds: c
      },
      h
    )
  ) });
};
const Me = "element-child", ae = ({
  id: a,
  title: s,
  data: o,
  childClass: u,
  dataChilds: l,
  subTitle: c
}) => /* @__PURE__ */ r.jsx(
  "section",
  {
    id: a,
    className: `docs-section ${u !== "" ? u : ""}`,
    children: o !== void 0 ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      c ? /* @__PURE__ */ r.jsx("h3", { children: s }) : /* @__PURE__ */ r.jsx("h2", { children: s }),
      o.length !== 0 && o.map(
        (h, m) => typeof h == "string" ? /* @__PURE__ */ r.jsx("p", { children: h }, m) : /* @__PURE__ */ r.jsxs(jr, { children: [
          h,
          " ",
          l.length > 0 && l.map((d, y) => /* @__PURE__ */ r.jsx(
            ae,
            {
              ...d,
              dataChilds: [],
              childClass: Me,
              subTitle: !0
            },
            `${d.title}-${y}`
          ))
        ] }, m)
      )
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      c ? /* @__PURE__ */ r.jsx("h3", { children: s }) : /* @__PURE__ */ r.jsx("h2", { children: s }),
      l.length > 0 && l.map((h, m) => /* @__PURE__ */ r.jsx(
        ae,
        {
          ...h,
          dataChilds: [],
          childClass: Me,
          subTitle: !0
        },
        `${h.title}-${m}`
      ))
    ] })
  }
);
const Nr = () => {
  const a = N(""), s = A(M), o = (c) => {
    if (typeof c == "string")
      return c;
    if (Y.isValidElement(c)) {
      let h = "";
      const m = Y.Children.toArray(c.props.children), d = Y.Children.toArray(c.props.body);
      return h += m.map(o).join(""), h += d.map(o).join(" "), h;
    }
    return "";
  }, { value: u } = K(() => {
    let c = [];
    const { content: h } = s;
    return Object.entries(h).forEach(
      ([m, { title: d, data: y, id: E }]) => {
        y && y.forEach((j) => {
          let _;
          typeof j == "string" ? _ = j : _ = o(j);
          const P = new RegExp(`(.{0,10})(${a.value})(.{0,100})`).exec(_);
          if (P) {
            let [le, J, O, C, ...ue] = P;
            c.push({
              title: d,
              firstMatch: J,
              mainMatch: O,
              secondMatch: C,
              to: E ?? ""
            });
          }
        });
      }
    ), c;
  });
  return {
    result: a,
    queryValue: u,
    handleChange: (c) => a.value = c.target.value
  };
}, Fr = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    children: /* @__PURE__ */ r.jsxs(
      "g",
      {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        fill: "currentColor",
        stroke: "none",
        children: [
          /* @__PURE__ */ r.jsx("path", { d: "M4120 5100 c-23 -23 -27 -39 -34 -136 -7 -91 -37 -188 -89 -289 -32 -62 -63 -102 -137 -176 -81 -81 -109 -102 -190 -142 -110 -53 -182 -73 -298 -83 -99 -8 -132 -32 -132 -94 0 -59 32 -81 132 -91 104 -10 165 -25 250 -60 178 -73 334 -231 409 -411 32 -77 59 -196 59 -257 0 -80 30 -120 91 -121 61 0 85 33 93 132 10 116 30 188 83 298 40 81 61 109 142 190 74 74 114 105 176 137 103 53 200 82 295 89 123 9 150 27 150 99 0 50 -36 85 -88 85 -69 0 -207 29 -279 58 -193 79 -353 241 -429 435 -26 66 -54 205 -54 269 0 54 -35 88 -90 88 -26 0 -47 -7 -60 -20z m100 -542 c73 -127 211 -265 338 -338 34 -19 61 -37 61 -40 1 -3 -32 -23 -72 -45 -99 -54 -267 -223 -322 -322 -22 -40 -42 -73 -45 -73 -3 0 -17 24 -33 53 -67 128 -226 287 -353 354 -30 15 -54 30 -54 33 0 3 33 23 73 45 99 55 268 223 322 322 22 40 42 73 45 72 3 0 21 -27 40 -61z" }),
          /* @__PURE__ */ r.jsx("path", { d: "M1805 5011 c-306 -97 -527 -210 -785 -400 -141 -104 -398 -358 -499 -494 -283 -380 -444 -776 -506 -1251 -24 -177 -17 -546 14 -722 91 -530 319 -982 691 -1368 382 -396 869 -652 1424 -747 176 -31 545 -38 722 -14 475 62 872 223 1251 506 136 101 390 358 494 499 87 117 192 286 248 397 50 100 126 300 160 419 35 120 33 147 -11 178 -47 33 -80 22 -180 -62 -221 -183 -427 -301 -668 -384 -448 -153 -961 -145 -1385 22 l-30 11 40 25 c55 34 153 63 247 73 96 11 128 33 128 91 0 61 -34 86 -128 94 -90 8 -191 41 -269 88 -72 43 -170 148 -211 225 -36 69 -72 195 -72 255 0 44 -22 93 -45 102 -9 3 -32 6 -51 6 -51 0 -84 -36 -84 -92 -1 -129 -64 -286 -154 -383 l-56 -60 -79 81 c-158 163 -310 397 -402 624 -210 516 -199 1101 30 1608 81 178 170 317 314 490 86 104 96 139 55 186 -35 40 -70 39 -203 -3z m-151 -268 c-200 -303 -319 -629 -364 -993 -13 -109 -13 -401 0 -510 28 -223 102 -485 193 -681 88 -189 234 -407 372 -557 37 -40 65 -75 62 -78 -11 -11 -115 -34 -182 -41 -53 -5 -74 -12 -92 -29 -30 -30 -31 -91 -3 -122 20 -21 37 -26 140 -37 187 -21 366 -148 451 -319 38 -79 68 -189 69 -253 0 -65 36 -103 96 -103 39 0 84 51 84 95 0 103 52 258 116 344 2 1 45 -13 97 -33 128 -50 278 -92 416 -117 146 -27 480 -37 630 -20 369 43 696 162 1004 365 27 18 27 18 21 0 -45 -126 -182 -367 -297 -523 -85 -115 -341 -374 -453 -458 -360 -272 -754 -430 -1199 -482 -116 -14 -388 -14 -513 0 -416 45 -823 207 -1172 465 -135 100 -374 339 -474 474 -258 349 -420 756 -465 1172 -14 125 -14 397 0 513 52 445 210 839 482 1199 84 112 343 368 458 453 95 70 251 168 339 213 44 23 191 89 199 90 2 0 -5 -12 -15 -27z m772 -2690 c36 -62 165 -191 227 -227 26 -15 47 -31 47 -34 0 -4 -23 -20 -51 -37 -68 -40 -180 -152 -221 -220 -18 -30 -35 -55 -38 -55 -3 0 -22 26 -42 58 -47 73 -143 169 -213 213 -30 19 -55 37 -55 41 0 3 20 18 45 33 61 35 186 160 225 224 17 28 35 51 40 51 4 0 21 -21 36 -47z" }),
          /* @__PURE__ */ r.jsx("path", { d: "M2275 4180 c-45 -18 -60 -48 -63 -134 l-4 -81 -101 -102 -102 -103 -73 0 c-104 0 -141 -24 -142 -91 0 -26 7 -44 26 -63 25 -24 34 -26 108 -26 l81 0 103 -103 102 -102 0 -68 c0 -90 18 -131 63 -146 24 -8 42 -9 62 -1 45 17 54 38 55 125 l0 80 108 108 107 107 72 0 c82 0 116 12 132 47 18 40 13 73 -18 104 -28 27 -34 29 -113 29 l-83 0 -103 103 -102 102 0 86 c0 76 -3 88 -22 106 -28 25 -66 34 -93 23z m93 -453 l62 -63 -63 -62 -63 -62 -64 65 -64 65 59 60 c33 33 62 60 65 60 3 0 34 -28 68 -63z" }),
          /* @__PURE__ */ r.jsx("path", { d: "M3803 2895 c-44 -19 -53 -42 -53 -132 l0 -78 -102 -102 -103 -103 -72 0 c-91 0 -120 -11 -138 -52 -17 -43 -9 -83 23 -108 20 -16 40 -20 106 -20 l81 0 103 -103 102 -102 0 -82 c0 -72 3 -85 24 -110 34 -39 98 -39 132 0 21 25 24 38 24 110 l0 82 102 102 103 103 81 0 c66 0 86 4 106 20 32 25 40 65 23 108 -18 41 -47 52 -138 52 l-72 0 -103 103 -102 102 0 78 c0 91 -9 114 -55 133 -40 16 -32 17 -72 -1z m102 -445 l60 -60 -63 -63 -62 -62 -62 62 -63 63 60 60 c33 33 62 60 65 60 3 0 32 -27 65 -60z" })
        ]
      }
    )
  }
), Lr = () => /* @__PURE__ */ r.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ r.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ r.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] }), Mr = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    children: /* @__PURE__ */ r.jsxs(
      "g",
      {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        fill: "currentColor",
        stroke: "none",
        children: [
          /* @__PURE__ */ r.jsx("path", { d: "M2528 5100 c-9 -6 -117 -145 -239 -310 -122 -165 -227 -300 -232 -300 -6 0 -156 75 -334 166 -343 175 -357 180 -387 131 -7 -12 -39 -186 -71 -387 -31 -201 -58 -367 -61 -369 -2 -2 -171 -7 -375 -10 l-372 -6 -20 -27 -20 -27 123 -365 c68 -202 121 -368 119 -370 -2 -2 -143 -79 -314 -171 -171 -92 -318 -174 -327 -183 -10 -8 -18 -29 -18 -48 0 -29 25 -56 276 -294 151 -145 273 -268 271 -274 -3 -7 -95 -145 -206 -308 -126 -186 -201 -305 -201 -320 0 -14 9 -33 19 -42 11 -10 176 -61 373 -117 194 -54 358 -101 363 -103 7 -2 -2 -117 -27 -332 -40 -358 -44 -424 -26 -442 21 -21 75 -13 438 62 195 41 355 74 356 73 0 -1 56 -146 124 -322 68 -176 129 -333 137 -348 18 -35 56 -51 86 -35 12 6 146 113 297 238 151 124 280 229 286 232 5 4 134 -101 285 -232 227 -198 279 -239 305 -240 16 0 38 6 47 13 9 6 82 167 161 356 80 189 147 345 150 348 3 3 157 -31 343 -76 187 -45 353 -81 370 -81 46 0 63 22 63 83 0 29 -13 203 -29 387 -16 184 -28 336 -26 338 2 2 162 44 357 94 366 93 388 102 388 150 0 11 -91 162 -203 336 -111 173 -203 319 -205 322 -1 4 121 119 273 255 251 227 275 251 275 280 0 18 -8 39 -17 48 -10 8 -162 98 -338 199 l-321 183 128 345 c70 190 127 350 128 357 0 7 -10 23 -22 37 l-23 25 -380 12 c-209 7 -381 13 -383 14 -1 1 -25 168 -52 371 -44 332 -52 371 -71 387 -12 9 -29 17 -38 17 -9 0 -171 -74 -359 -164 l-342 -164 -97 136 c-53 76 -149 212 -214 303 -129 182 -144 196 -191 169z m222 -446 c207 -298 220 -314 250 -314 12 0 168 70 347 155 179 86 327 154 328 153 1 -2 21 -149 44 -328 50 -391 48 -378 71 -390 10 -6 182 -17 381 -24 198 -8 362 -16 364 -18 1 -2 -51 -147 -116 -323 -65 -176 -119 -332 -119 -347 0 -34 -7 -29 348 -232 160 -93 292 -169 292 -171 0 -2 -117 -109 -260 -239 -234 -213 -260 -240 -260 -268 0 -23 48 -105 192 -330 137 -215 188 -302 178 -308 -6 -4 -143 -40 -304 -80 -318 -80 -366 -94 -378 -113 -4 -7 -8 -33 -8 -59 0 -47 45 -587 55 -659 l5 -35 -333 78 c-182 43 -344 78 -358 78 -14 0 -33 -8 -42 -17 -8 -10 -77 -164 -152 -343 -75 -179 -138 -326 -139 -327 -1 -2 -121 101 -267 227 -220 192 -269 230 -294 230 -25 0 -81 -42 -309 -230 -153 -127 -280 -229 -281 -228 -2 2 -58 145 -125 318 -67 173 -126 323 -131 332 -5 10 -20 20 -32 23 -12 3 -179 -28 -372 -69 -192 -41 -352 -72 -354 -70 -2 2 13 159 33 348 21 190 35 354 31 365 -3 12 -14 25 -23 29 -9 5 -169 51 -354 103 -186 52 -338 97 -338 101 0 3 88 137 195 297 107 160 195 298 195 308 0 18 -119 139 -380 386 -85 80 -152 148 -149 151 2 3 139 77 304 164 213 114 304 168 315 186 14 25 9 43 -99 363 -63 186 -116 344 -119 351 -3 9 38 12 184 12 104 0 267 3 362 7 161 6 175 8 187 27 7 12 36 167 64 346 29 179 54 337 57 353 l6 27 317 -160 c274 -139 321 -160 342 -151 16 6 104 114 240 295 117 157 216 286 219 286 3 -1 88 -120 190 -266z" }),
          /* @__PURE__ */ r.jsx("path", { d: "M2375 4084 c-322 -48 -576 -160 -818 -362 -194 -161 -369 -420 -452 -666 -108 -321 -106 -684 6 -1002 178 -510 597 -876 1136 -996 83 -18 131 -22 308 -22 185 -1 222 2 315 22 314 71 547 198 771 421 225 226 350 454 421 773 20 90 23 129 23 313 -1 227 -13 311 -70 482 -128 383 -434 728 -795 896 -223 104 -374 138 -630 142 -102 2 -198 1 -215 -1z m400 -139 c322 -52 627 -220 837 -461 159 -183 271 -405 323 -644 9 -41 19 -145 22 -230 9 -251 -30 -438 -136 -655 -207 -422 -593 -708 -1056 -782 -121 -19 -371 -13 -485 12 -770 169 -1255 907 -1095 1667 118 560 579 996 1155 1093 104 18 327 18 435 0z" }),
          /* @__PURE__ */ r.jsx("path", { d: "M2513 3689 c-7 -7 -13 -30 -13 -51 0 -52 24 -64 140 -72 243 -15 469 -123 645 -307 170 -178 265 -393 282 -634 6 -102 19 -125 68 -125 57 0 69 25 62 132 -33 499 -372 909 -855 1035 -116 30 -309 43 -329 22z" })
        ]
      }
    )
  }
), Ir = () => {
  const { result: a, queryValue: s, handleChange: o } = Nr(), u = gr(s);
  return /* @__PURE__ */ r.jsxs("div", { className: "search-bar", children: [
    /* @__PURE__ */ r.jsx(Lr, {}),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        onChange: o,
        value: a.value,
        type: "text"
      }
    ),
    a.value && /* @__PURE__ */ r.jsx("div", { className: "search-result", children: /* @__PURE__ */ r.jsx(yr, { fallback: /* @__PURE__ */ r.jsx("h2", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(
      $r,
      {
        query: u,
        result: a
      }
    ) }) })
  ] });
}, $r = ({ query: a, result: s }) => {
  const { menu: o } = A(ce), u = () => {
    s.value = "", o.value && (o.value = !o.value);
  };
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: a.length > 0 ? a.map(
    ({ title: l, to: c, firstMatch: h, mainMatch: m, secondMatch: d }, y) => /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h3", { children: l }),
      /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: "#" + c,
          onClick: u,
          children: [
            "...",
            h,
            /* @__PURE__ */ r.jsx("span", { className: "search-keyword", children: m }),
            d
          ]
        }
      )
    ] }, y)
  ) : /* @__PURE__ */ r.jsx("h5", { children: "Sorry, we cant find any match..." }) });
};
const zr = () => {
  const { theme: a } = A(M), s = () => {
    a.value = !a.value;
  };
  return /* @__PURE__ */ r.jsx("div", { onClick: s, className: "theme-icon-docs", children: a.value ? /* @__PURE__ */ r.jsx(Mr, {}) : /* @__PURE__ */ r.jsx(Fr, {}) });
}, Wr = () => {
  const a = A(M), s = N(!1), o = K(() => s.value ? "0" : "100%"), u = N(!1);
  return se(() => {
    const l = window.matchMedia("(min-width: 1540px)");
    s.value = l.matches, u.value = l.matches;
  }, []), /* @__PURE__ */ r.jsxs(
    ce.Provider,
    {
      value: { position: o.value, menu: s, translate: u },
      children: [
        /* @__PURE__ */ r.jsx("header", { children: /* @__PURE__ */ r.jsxs(
          "nav",
          {
            "aria-label": "header-nav",
            style: { top: a.navTop },
            className: "nav-doc-container",
            children: [
              /* @__PURE__ */ r.jsx("span", { children: a.title }),
              /* @__PURE__ */ r.jsxs("div", { className: "header-nav", children: [
                /* @__PURE__ */ r.jsx(Ir, {}),
                /* @__PURE__ */ r.jsx(zr, {}),
                /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    onClick: () => s.value = !s.value,
                    className: s.value ? "menu active" : "menu",
                    children: [
                      /* @__PURE__ */ r.jsx("span", {}),
                      /* @__PURE__ */ r.jsx("span", {}),
                      /* @__PURE__ */ r.jsx("span", {})
                    ]
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsx(Yr, {})
      ]
    }
  );
};
const Yr = () => {
  const a = A(M), s = A(ce);
  return /* @__PURE__ */ r.jsx(
    "aside",
    {
      "aria-label": "side-nav",
      style: {
        transform: `translateX(${s.position})`,
        right: s.translate.value ? "calc(50% - 98ch)" : "0"
      },
      className: "side-nav-doc-container",
      children: /* @__PURE__ */ r.jsx("div", { className: "side-nav-elements", children: Object.values(a.navSide).map(
        ({ title: o, to: u, childs: l }, c) => u !== void 0 ? /* @__PURE__ */ r.jsx(
          Br,
          {
            to: u,
            menu: s.menu,
            title: o
          },
          c
        ) : /* @__PURE__ */ r.jsx(
          Vr,
          {
            menu: s.menu,
            title: o,
            childs: l
          },
          c
        )
      ) })
    }
  );
}, Br = ({ title: a, menu: s, to: o }) => /* @__PURE__ */ r.jsx(
  "a",
  {
    href: "#" + o,
    onClick: () => s.value = !s.value,
    children: a
  }
), Vr = ({ title: a, childs: s, menu: o }) => {
  const u = N({
    initial: 0,
    dinamic: 0
  }), l = N(!1), c = $e(null);
  se(() => {
    const m = setInterval(() => {
      c.current && (u.value.initial = c.current.offsetHeight, c.current.style.height = "0", clearInterval(m));
    }, 200);
    return () => clearInterval(m);
  }, []);
  const h = () => {
    c.current !== null && (br(() => {
      l.value = !l.value, l.value ? u.value.dinamic = u.value.initial : u.value.dinamic = 0;
    }), c.current.style.height = u.value.dinamic.toString() + "px", c.current.classList.toggle("active"));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "collapse-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        onClick: h,
        className: "collapse-target",
        children: [
          /* @__PURE__ */ r.jsx("a", { children: a }),
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: l.value ? "collapse-icon" : "collapse-icon active",
              children: [
                /* @__PURE__ */ r.jsx("span", {}),
                /* @__PURE__ */ r.jsx("span", {})
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("ul", { ref: c, children: s !== void 0 && s.map(([m, d], y) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "a",
      {
        href: "#" + m,
        onClick: () => o.value = !o.value,
        children: d
      }
    ) }, y)) }) })
  ] });
};
const Ur = () => {
  const a = window.matchMedia("(prefers-color-scheme: dark)").matches, s = N(a);
  return se(() => {
    document.body.style.transition = "all .2s ease-in-out", s.value ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [s.value]), {
    prefersBlackTheme: s
  };
}, rt = ({ content: a, navSide: s, title: o }) => {
  const { prefersBlackTheme: u } = Ur(), l = $e(0), c = N("0"), h = K(() => {
    var E;
    let d = {}, y = ((E = s.exclude) == null ? void 0 : E.exclude) ?? [];
    return Object.keys(a).forEach((j) => {
      if (y.includes(j))
        return;
      let { title: _, id: D } = a[j];
      if (s.hasOwnProperty(j) && s[j].hasOwnProperty("childs")) {
        let { childs: P } = s[j];
        d = {
          ...d,
          [j]: {
            title: _,
            to: D,
            childs: P
          }
        };
      } else
        d = {
          ...d,
          [j]: {
            title: _,
            to: D
          }
        };
    }), d;
  }), m = (d) => {
    const { scrollTop: y } = d.currentTarget;
    y > l.current ? c.value = "-70px" : c.value = "0", l.current = y;
  };
  return /* @__PURE__ */ r.jsx(
    M.Provider,
    {
      value: {
        title: o,
        content: a,
        navTop: c.value,
        navSide: h.value,
        theme: u
      },
      children: /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "docs-main",
          style: {
            height: "100vh",
            overflowY: "auto",
            margin: "0 auto"
          },
          onScroll: m,
          children: [
            /* @__PURE__ */ r.jsx(Wr, {}),
            /* @__PURE__ */ r.jsx(Ar, {}),
            /* @__PURE__ */ r.jsx("p", {})
          ]
        }
      )
    }
  );
};
export {
  rt as Docs,
  Gr as DocsAlertDanger,
  Jr as DocsAlertInfo,
  Xr as DocsAlertWarning,
  Kr as DocsCode,
  Zr as DocsTableStatus,
  Qr as DocsTableTypes,
  et as DocsTableView
};
