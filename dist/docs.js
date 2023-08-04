import V, { createContext as Me, useContext as N, Fragment as xr, useDeferredValue as mr, Suspense as jr, useEffect as ne, useRef as Ie } from "react";
import { useSignal as M, useComputed as ae, batch as gr } from "@preact/signals-react";
var r = {}, yr = {
  get exports() {
    return r;
  },
  set exports(a) {
    r = a;
  }
}, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function br() {
  if (Ae)
    return Y;
  Ae = 1;
  var a = V, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, p = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, d, b) {
    var E, x = {}, T = null, D = null;
    b !== void 0 && (T = "" + b), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (D = d.ref);
    for (E in d)
      l.call(d, E) && !u.hasOwnProperty(E) && (x[E] = d[E]);
    if (y && y.defaultProps)
      for (E in d = y.defaultProps, d)
        x[E] === void 0 && (x[E] = d[E]);
    return { $$typeof: s, type: y, key: T, ref: D, props: x, _owner: p.current };
  }
  return Y.Fragment = c, Y.jsx = g, Y.jsxs = g, Y;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Er() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = V, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), P = Symbol.iterator, ce = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = P && e[P] || e[ce];
      return typeof t == "function" ? t : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        le("error", e, n);
      }
    }
    function le(e, t, n) {
      {
        var o = O.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (t += "%s", n = n.concat([v]));
        var h = n.map(function(f) {
          return String(f);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var We = !1, $e = !1, Ye = !1, Le = !1, Ve = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === u || Ve || e === p || e === b || e === E || Le || e === D || We || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === x || e.$$typeof === g || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ze(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var v = t.displayName || t.name || "";
      return v !== "" ? n + "(" + v + ")" : n;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case c:
          return "Portal";
        case u:
          return "Profiler";
        case p:
          return "StrictMode";
        case b:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var t = e;
            return fe(t) + ".Consumer";
          case g:
            var n = e;
            return fe(n._context) + ".Provider";
          case d:
            return ze(e, e.render, "ForwardRef");
          case x:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case T: {
            var v = e, h = v._payload, f = v._init;
            try {
              return C(f(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, de, ve, he, pe, xe, me, je;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ue() {
      {
        if (W === 0) {
          de = console.log, ve = console.info, he = console.warn, pe = console.error, xe = console.group, me = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        W++;
      }
    }
    function He() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: de
            }),
            info: k({}, e, {
              value: ve
            }),
            warn: k({}, e, {
              value: he
            }),
            error: k({}, e, {
              value: pe
            }),
            group: k({}, e, {
              value: xe
            }),
            groupCollapsed: k({}, e, {
              value: me
            }),
            groupEnd: k({}, e, {
              value: je
            })
          });
        }
        W < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = O.ReactCurrentDispatcher, K;
    function B(e, t, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            K = o && o[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, z;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new qe();
    }
    function ye(e, t) {
      if (!e || X)
        return "";
      {
        var n = z.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      X = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = G.current, G.current = null, Ue();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (S) {
              o = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              o = S;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            o = S;
          }
          e();
        }
      } catch (S) {
        if (S && o && typeof S.stack == "string") {
          for (var i = S.stack.split(`
`), _ = o.stack.split(`
`), m = i.length - 1, j = _.length - 1; m >= 1 && j >= 0 && i[m] !== _[j]; )
            j--;
          for (; m >= 1 && j >= 0; m--, j--)
            if (i[m] !== _[j]) {
              if (m !== 1 || j !== 1)
                do
                  if (m--, j--, j < 0 || i[m] !== _[j]) {
                    var w = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, w), w;
                  }
                while (m >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = h, He(), Error.prepareStackTrace = v;
      }
      var F = e ? e.displayName || e.name : "", Ne = F ? B(F) : "";
      return typeof e == "function" && z.set(e, Ne), Ne;
    }
    function Je(e, t, n) {
      return ye(e, !1);
    }
    function Ge(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function U(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Ge(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case b:
          return B("Suspense");
        case E:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case x:
            return U(e.type, t, n);
          case T: {
            var o = e, v = o._payload, h = o._init;
            try {
              return U(h(v), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, be = {}, Ee = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ke(e, t, n, o, v) {
      {
        var h = Function.call.bind(H);
        for (var f in e)
          if (h(e, f)) {
            var i = void 0;
            try {
              if (typeof e[f] != "function") {
                var _ = Error((o || "React class") + ": " + n + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[f](t, f, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (q(v), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, f, typeof i), q(null)), i instanceof Error && !(i.message in be) && (be[i.message] = !0, q(v), R("Failed %s type: %s", n, i.message), q(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Z(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Qe(e) {
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
      if (Qe(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Re(e);
    }
    var $ = O.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, we, Q;
    Q = {};
    function rr(e) {
      if (H.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (H.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, t) {
      if (typeof e.ref == "string" && $.current && t && $.current.stateNode !== t) {
        var n = C($.current.type);
        Q[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C($.current.type), e.ref), Q[n] = !0);
      }
    }
    function ar(e, t) {
      {
        var n = function() {
          Te || (Te = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, t) {
      {
        var n = function() {
          we || (we = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var or = function(e, t, n, o, v, h, f) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: f,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ir(e, t, n, o, v) {
      {
        var h, f = {}, i = null, _ = null;
        n !== void 0 && (_e(n), i = "" + n), tr(t) && (_e(t.key), i = "" + t.key), rr(t) && (_ = t.ref, nr(t, v));
        for (h in t)
          H.call(t, h) && !er.hasOwnProperty(h) && (f[h] = t[h]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (h in m)
            f[h] === void 0 && (f[h] = m[h]);
        }
        if (i || _) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ar(f, j), _ && sr(f, j);
        }
        return or(e, i, _, v, o, $.current, f);
      }
    }
    var ee = O.ReactCurrentOwner, Ce = O.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var t = e._owner, n = U(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Se() {
      {
        if (ee.current) {
          var e = C(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var De = {};
    function lr(e) {
      {
        var t = Se();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Oe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = lr(t);
        if (De[n])
          return;
        De[n] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + C(e._owner.type) + "."), A(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), A(null);
      }
    }
    function Pe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            te(o) && Oe(o, t);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = J(e);
          if (typeof v == "function" && v !== e.entries)
            for (var h = v.call(e), f; !(f = h.next()).done; )
              te(f.value) && Oe(f.value, t);
        }
      }
    }
    function ur(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === x))
          n = t.propTypes;
        else
          return;
        if (n) {
          var o = C(t);
          Ke(n, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !re) {
          re = !0;
          var v = C(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var o = t[n];
          if (o !== "children" && o !== "key") {
            A(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function ke(e, t, n, o, v, h) {
      {
        var f = Be(e);
        if (!f) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = cr(v);
          _ ? i += _ : i += Se();
          var m;
          e === null ? m = "null" : Z(e) ? m = "array" : e !== void 0 && e.$$typeof === s ? (m = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var j = ir(e, t, n, v, h);
        if (j == null)
          return j;
        if (f) {
          var w = t.children;
          if (w !== void 0)
            if (o)
              if (Z(w)) {
                for (var F = 0; F < w.length; F++)
                  Pe(w[F], e);
                Object.freeze && Object.freeze(w);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(w, e);
        }
        return e === l ? fr(j) : ur(j), j;
      }
    }
    function dr(e, t, n) {
      return ke(e, t, n, !0);
    }
    function vr(e, t, n) {
      return ke(e, t, n, !1);
    }
    var hr = vr, pr = dr;
    L.Fragment = l, L.jsx = hr, L.jsxs = pr;
  }()), L;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = br() : a.exports = Er();
})(yr);
const Br = ({ children: a }) => /* @__PURE__ */ r.jsx("pre", { children: /* @__PURE__ */ r.jsx("code", { children: a }) }), se = ({ label: a, classType: s, children: c }) => /* @__PURE__ */ r.jsxs("div", { className: `alert-container ${s}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "alert-header", children: [
    /* @__PURE__ */ r.jsx("div", { className: "icon-container", children: /* @__PURE__ */ r.jsx("span", { className: "icon", children: "!" }) }),
    /* @__PURE__ */ r.jsx("label", { children: a })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "alert-body", children: c })
] }), zr = ({ children: a }) => /* @__PURE__ */ r.jsx(se, { label: "Note", classType: "info", children: a }), Ur = ({ children: a }) => /* @__PURE__ */ r.jsx(se, { label: "Danger", classType: "danger", children: a }), Hr = ({ children: a }) => /* @__PURE__ */ r.jsx(se, { label: "Warning", classType: "warn", children: a }), Rr = ({ text: a }) => /* @__PURE__ */ r.jsx("td", { children: a }), _r = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Name" }),
  /* @__PURE__ */ r.jsx("th", { children: "Type" }),
  /* @__PURE__ */ r.jsx("th", { children: "Required" }),
  /* @__PURE__ */ r.jsx("th", { children: "Description" }),
  /* @__PURE__ */ r.jsx("th", { children: "Default" })
] }), Tr = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Code" }),
  /* @__PURE__ */ r.jsx("th", { children: "Response" })
] }), wr = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("th", { children: "Endpoint" }),
  /* @__PURE__ */ r.jsx("th", { children: "Method" }),
  /* @__PURE__ */ r.jsx("th", { children: "Headers" }),
  /* @__PURE__ */ r.jsx("th", { children: "Body" }),
  /* @__PURE__ */ r.jsx("th", { children: "Example" }),
  /* @__PURE__ */ r.jsx("th", { children: "Successful" }),
  /* @__PURE__ */ r.jsx("th", { children: "Failed" })
] }), oe = ({ defaultHeaders: a, header: s, body: c }) => /* @__PURE__ */ r.jsx("div", { className: "table", children: /* @__PURE__ */ r.jsxs("table", { children: [
  /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { children: s !== void 0 ? s.map((l, p) => /* @__PURE__ */ r.jsx("th", { children: l }, p)) : a }) }),
  /* @__PURE__ */ r.jsx("tbody", { children: c.map(
    (l, p) => /* @__PURE__ */ r.jsx("tr", { children: l.map((u, g) => /* @__PURE__ */ r.jsx(Rr, { text: u }, g)) }, p)
  ) })
] }) }), qr = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(Tr, {}), header: a, body: s }), Jr = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(_r, {}), header: a, body: s }), Gr = ({ header: a, body: s }) => /* @__PURE__ */ r.jsx(oe, { defaultHeaders: /* @__PURE__ */ r.jsx(wr, {}), header: a, body: s }), I = Me({}), ie = Me({});
const Cr = () => {
  const a = N(I);
  return /* @__PURE__ */ r.jsx("div", { className: "docs-container", children: a.content !== void 0 && Object.values(a.content).map(({ id: s, title: c, data: l }, p) => /* @__PURE__ */ r.jsx(Sr, { id: s, title: c, data: l }, p)) });
};
const Sr = ({ id: a, title: s, data: c }) => /* @__PURE__ */ r.jsx("div", { id: a, className: "docs-section", children: c !== void 0 ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx("h3", { children: s }),
  c.length !== 0 && c.map(
    (l, p) => typeof l == "string" ? /* @__PURE__ */ r.jsx("p", { children: l }, p) : /* @__PURE__ */ r.jsx(xr, { children: l }, p)
  )
] }) : /* @__PURE__ */ r.jsx("h2", { children: s }) });
const Dr = () => {
  const a = M(""), s = N(I), c = (u) => {
    if (typeof u == "string")
      return u;
    if (V.isValidElement(u)) {
      let g = "";
      const y = V.Children.toArray(u.props.children), d = V.Children.toArray(u.props.body);
      return g += y.map(c).join(""), g += d.map(c).join(" "), g;
    }
    return "";
  }, { value: l } = ae(() => {
    let u = [];
    const { content: g } = s;
    return Object.entries(g).forEach(
      ([y, { title: d, data: b, id: E }]) => {
        b && b.forEach((x) => {
          let T;
          typeof x == "string" ? T = x : T = c(x);
          const P = new RegExp(`(.{0,10})(${a.value})(.{0,100})`).exec(T);
          if (P) {
            let [ce, J, O, R, ...le] = P;
            u.push({
              title: d,
              firstMatch: J,
              mainMatch: O,
              secondMatch: R,
              to: E ?? ""
            });
          }
        });
      }
    ), u;
  });
  return {
    result: a,
    queryValue: l,
    handleChange: (u) => a.value = u.target.value
  };
}, Or = () => /* @__PURE__ */ r.jsx(
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
), Pr = () => /* @__PURE__ */ r.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ r.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ r.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] }), kr = () => /* @__PURE__ */ r.jsx(
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
), Nr = () => {
  const {
    result: a,
    queryValue: s,
    handleChange: c
  } = Dr(), l = mr(s);
  return /* @__PURE__ */ r.jsxs("div", { className: "search-bar", children: [
    /* @__PURE__ */ r.jsx(Pr, {}),
    /* @__PURE__ */ r.jsx("input", { onChange: c, value: a.value, type: "text" }),
    a.value && /* @__PURE__ */ r.jsx("div", { className: "search-result", children: /* @__PURE__ */ r.jsx(jr, { fallback: /* @__PURE__ */ r.jsx("h2", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(Ar, { query: l, result: a }) }) })
  ] });
}, Ar = ({ query: a, result: s }) => {
  const { menu: c } = N(ie), l = () => {
    s.value = "", c.value && (c.value = !c.value);
  };
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: a.length > 0 ? a.map(
    ({ title: p, to: u, firstMatch: g, mainMatch: y, secondMatch: d }, b) => /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("h3", { children: p }),
      /* @__PURE__ */ r.jsxs("a", { href: "#" + u, onClick: l, children: [
        "...",
        g,
        /* @__PURE__ */ r.jsx("span", { className: "search-keywoard", children: y }),
        d
      ] })
    ] }, b)
  ) : /* @__PURE__ */ r.jsx("h5", { children: "Sorry, we cant find any match..." }) });
};
const Fr = () => {
  const { theme: a } = N(I), s = () => {
    a.value = !a.value;
  };
  return /* @__PURE__ */ r.jsx("div", { onClick: s, className: "theme-icon-docs", children: a.value ? /* @__PURE__ */ r.jsx(kr, {}) : /* @__PURE__ */ r.jsx(Or, {}) });
}, Mr = () => {
  const a = N(I), s = M(!1), c = ae(() => s.value ? "0" : "100%");
  return ne(() => {
    const l = window.matchMedia("(min-width: 48em)");
    s.value = l.matches;
  }, []), /* @__PURE__ */ r.jsxs(ie.Provider, { value: { position: c.value, menu: s }, children: [
    /* @__PURE__ */ r.jsx("header", { children: /* @__PURE__ */ r.jsxs("nav", { "aria-label": "header-nav", style: { top: a.navTop }, className: "nav-doc-container", children: [
      /* @__PURE__ */ r.jsx("span", { children: a.title }),
      /* @__PURE__ */ r.jsxs("div", { className: "header-nav", children: [
        /* @__PURE__ */ r.jsx(Nr, {}),
        /* @__PURE__ */ r.jsx(Fr, {}),
        /* @__PURE__ */ r.jsxs("div", { onClick: () => s.value = !s.value, className: s.value ? "menu active" : "menu", children: [
          /* @__PURE__ */ r.jsx("span", {}),
          /* @__PURE__ */ r.jsx("span", {}),
          /* @__PURE__ */ r.jsx("span", {})
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx(Ir, {})
  ] });
};
const Ir = () => {
  const a = N(I), s = N(ie);
  return /* @__PURE__ */ r.jsx("nav", { "aria-label": "side-nav", style: { transform: `translateX(${s.position})` }, className: "side-nav-doc-container", children: /* @__PURE__ */ r.jsx("div", { className: "side-nav-elements", children: Object.values(a.navSide).map(
    ({ title: c, to: l, childs: p }, u) => l !== void 0 ? /* @__PURE__ */ r.jsx(Wr, { to: l, menu: s.menu, title: c }, u) : /* @__PURE__ */ r.jsx($r, { menu: s.menu, title: c, childs: p }, u)
  ) }) });
}, Wr = ({ title: a, menu: s, to: c }) => /* @__PURE__ */ r.jsx("a", { href: "#" + c, onClick: () => s.value = !s.value, children: a }), $r = ({ title: a, childs: s, menu: c }) => {
  const l = M({
    initial: 0,
    dinamic: 0
  }), p = M(!1), u = Ie(null);
  ne(() => {
    const y = setInterval(() => {
      u.current && (l.value.initial = u.current.offsetHeight, u.current.style.height = "0", clearInterval(y));
    }, 200);
    return () => clearInterval(y);
  }, []);
  const g = () => {
    u.current !== null && (gr(() => {
      p.value = !p.value, p.value ? l.value.dinamic = l.value.initial : l.value.dinamic = 0;
    }), u.current.style.height = l.value.dinamic.toString() + "px", u.current.classList.toggle("active"));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "collapse-container", children: [
    /* @__PURE__ */ r.jsxs("div", { onClick: g, className: "collapse-target", children: [
      /* @__PURE__ */ r.jsx("a", { children: a }),
      /* @__PURE__ */ r.jsxs("div", { className: p.value ? "collapse-icon" : "collapse-icon active", children: [
        /* @__PURE__ */ r.jsx("span", {}),
        /* @__PURE__ */ r.jsx("span", {})
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("ul", { ref: u, children: s !== void 0 && s.map(([y, d], b) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx("a", { href: "#" + y, onClick: () => c.value = !c.value, children: d }) }, b)) }) })
  ] });
};
const Yr = () => {
  const a = window.matchMedia("(prefers-color-scheme: dark)").matches, s = M(a);
  return ne(() => {
    document.body.style.transition = "all .2s ease-in-out", s.value ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [s.value]), {
    prefersBlackTheme: s
  };
}, Kr = ({ content: a, navSide: s, title: c }) => {
  const { prefersBlackTheme: l } = Yr(), p = Ie(0), u = M("0"), g = ae(() => {
    var E;
    let d = {}, b = ((E = s.exclude) == null ? void 0 : E.exclude) ?? [];
    return Object.keys(a).forEach((x) => {
      if (b.includes(x))
        return;
      let { title: T, id: D } = a[x];
      if (s.hasOwnProperty(x) && s[x].hasOwnProperty("childs")) {
        let { childs: P } = s[x];
        d = {
          ...d,
          [x]: {
            title: T,
            to: D,
            childs: P
          }
        };
      } else
        d = {
          ...d,
          [x]: {
            title: T,
            to: D
          }
        };
    }), d;
  }), y = (d) => {
    const { scrollTop: b } = d.currentTarget;
    b > p.current ? u.value = "-70px" : u.value = "0", p.current = b;
  };
  return /* @__PURE__ */ r.jsx(I.Provider, { value: { title: c, content: a, navTop: u.value, navSide: g.value, theme: l }, children: /* @__PURE__ */ r.jsxs("div", { style: { height: "100vh", overflowY: "auto", width: "100%" }, onScroll: y, children: [
    /* @__PURE__ */ r.jsx(Mr, {}),
    /* @__PURE__ */ r.jsx(Cr, {}),
    /* @__PURE__ */ r.jsx("p", {})
  ] }) });
};
export {
  Kr as Docs,
  Ur as DocsAlertDanger,
  zr as DocsAlertInfo,
  Hr as DocsAlertWarning,
  Br as DocsCode,
  qr as DocsTableStatus,
  Jr as DocsTableTypes,
  Gr as DocsTableView
};
