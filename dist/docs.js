import Se, { createContext as De, useContext as U, Fragment as mr, useEffect as Pe, useRef as ke } from "react";
import { useSignal as B, useComputed as Ne, batch as xr } from "@preact/signals-react";
var t = {}, jr = {
  get exports() {
    return t;
  },
  set exports(a) {
    t = a;
  }
}, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function gr() {
  if (we)
    return I;
  we = 1;
  var a = Se, i = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(x, h, T) {
    var p, E = {}, C = null, D = null;
    T !== void 0 && (C = "" + T), h.key !== void 0 && (C = "" + h.key), h.ref !== void 0 && (D = h.ref);
    for (p in h)
      u.call(h, p) && !g.hasOwnProperty(p) && (E[p] = h[p]);
    if (x && x.defaultProps)
      for (p in h = x.defaultProps, h)
        E[p] === void 0 && (E[p] = h[p]);
    return { $$typeof: i, type: x, key: C, ref: D, props: E, _owner: v.current };
  }
  return I.Fragment = d, I.jsx = _, I.jsxs = _, I;
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
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Se, i = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), x = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), te = Symbol.iterator, Ae = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        We("error", e, n);
      }
    }
    function We(e, r, n) {
      {
        var s = P.ReactDebugCurrentFrame, c = s.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var f = n.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var $e = !1, Ye = !1, Le = !1, Ve = !1, Me = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === g || Me || e === v || e === T || e === p || Ve || e === D || $e || Ye || Le || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === E || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Be(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case g:
          return "Profiler";
        case v:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ae(r) + ".Consumer";
          case _:
            var n = e;
            return ae(n._context) + ".Provider";
          case h:
            return Be(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : w(e.type) || "Memo";
          case C: {
            var c = e, f = c._payload, l = c._init;
            try {
              return w(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, se, ie, oe, le, ce, ue, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function He() {
      {
        if (F === 0) {
          se = console.log, ie = console.info, oe = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        F++;
      }
    }
    function qe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: se
            }),
            info: S({}, e, {
              value: ie
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: le
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: fe
            })
          });
        }
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, J;
    function $(e, r, n) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (c) {
            var s = c.stack.trim().match(/\n( *(at )?)/);
            J = s && s[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, Y;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Je();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var n = Y.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      G = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, He();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (O) {
              s = O;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (O) {
              s = O;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            s = O;
          }
          e();
        }
      } catch (O) {
        if (O && s && typeof O.stack == "string") {
          for (var o = O.stack.split(`
`), y = s.stack.split(`
`), m = o.length - 1, j = y.length - 1; m >= 1 && j >= 0 && o[m] !== y[j]; )
            j--;
          for (; m >= 1 && j >= 0; m--, j--)
            if (o[m] !== y[j]) {
              if (m !== 1 || j !== 1)
                do
                  if (m--, j--, j < 0 || o[m] !== y[j]) {
                    var R = `
` + o[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, R), R;
                  }
                while (m >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = f, qe(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", Ce = N ? $(N) : "";
      return typeof e == "function" && Y.set(e, Ce), Ce;
    }
    function Ge(e, r, n) {
      return ve(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, ze(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case T:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ge(e.render);
          case E:
            return L(e.type, r, n);
          case C: {
            var s = e, c = s._payload, f = s._init;
            try {
              return L(f(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, he = {}, pe = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, n = L(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(n);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ke(e, r, n, s, c) {
      {
        var f = Function.call.bind(V);
        for (var l in e)
          if (f(e, l)) {
            var o = void 0;
            try {
              if (typeof e[l] != "function") {
                var y = Error((s || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[l](r, l, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              o = m;
            }
            o && !(o instanceof Error) && (M(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, l, typeof o), M(null)), o instanceof Error && !(o.message in he) && (he[o.message] = !0, M(c), b("Failed %s type: %s", n, o.message), M(null));
          }
      }
    }
    var Xe = Array.isArray;
    function z(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Qe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function xe(e) {
      if (Qe(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), me(e);
    }
    var A = P.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, ge, K;
    K = {};
    function rr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var n = w(A.current.type);
        K[n] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(A.current.type), e.ref), K[n] = !0);
      }
    }
    function ar(e, r) {
      {
        var n = function() {
          je || (je = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          ge || (ge = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, n, s, c, f, l) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function or(e, r, n, s, c) {
      {
        var f, l = {}, o = null, y = null;
        n !== void 0 && (xe(n), o = "" + n), tr(r) && (xe(r.key), o = "" + r.key), rr(r) && (y = r.ref, nr(r, c));
        for (f in r)
          V.call(r, f) && !er.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (f in m)
            l[f] === void 0 && (l[f] = m[f]);
        }
        if (o || y) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ar(l, j), y && sr(l, j);
        }
        return ir(e, o, y, c, s, A.current, l);
      }
    }
    var X = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, n = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(n);
      } else
        be.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ye() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function cr(e) {
      {
        var r = ye();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = cr(r);
        if (Ee[n])
          return;
        Ee[n] = !0;
        var s = "";
        e && e._owner && e._owner !== X.current && (s = " It was passed a child from " + w(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Q(s) && Re(s, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ie(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              Q(l.value) && Re(l.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = w(r);
          Ke(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = w(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Te(e, r, n, s, c, f) {
      {
        var l = Ue(e);
        if (!l) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = lr(c);
          y ? o += y : o += ye();
          var m;
          e === null ? m = "null" : z(e) ? m = "array" : e !== void 0 && e.$$typeof === i ? (m = "<" + (w(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, o);
        }
        var j = or(e, r, n, c, f);
        if (j == null)
          return j;
        if (l) {
          var R = r.children;
          if (R !== void 0)
            if (s)
              if (z(R)) {
                for (var N = 0; N < R.length; N++)
                  _e(R[N], e);
                Object.freeze && Object.freeze(R);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(R, e);
        }
        return e === u ? fr(j) : ur(j), j;
      }
    }
    function dr(e, r, n) {
      return Te(e, r, n, !0);
    }
    function vr(e, r, n) {
      return Te(e, r, n, !1);
    }
    var hr = vr, pr = dr;
    W.Fragment = u, W.jsx = hr, W.jsxs = pr;
  }()), W;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = gr() : a.exports = br();
})(jr);
const Nr = ({ children: a }) => /* @__PURE__ */ t.jsx("pre", { children: /* @__PURE__ */ t.jsx("code", { children: a }) }), ee = ({ label: a, classType: i, children: d }) => /* @__PURE__ */ t.jsxs("div", { className: `alert-container ${i}`, children: [
  /* @__PURE__ */ t.jsxs("div", { className: "alert-header", children: [
    /* @__PURE__ */ t.jsx("div", { className: "icon-container", children: /* @__PURE__ */ t.jsx("span", { className: "icon", children: "!" }) }),
    /* @__PURE__ */ t.jsx("label", { children: a })
  ] }),
  /* @__PURE__ */ t.jsx("div", { className: "alert-body", children: d })
] }), Fr = ({ children: a }) => /* @__PURE__ */ t.jsx(ee, { label: "Note", classType: "info", children: a }), Ar = ({ children: a }) => /* @__PURE__ */ t.jsx(ee, { label: "Danger", classType: "danger", children: a }), Ir = ({ children: a }) => /* @__PURE__ */ t.jsx(ee, { label: "Warning", classType: "warn", children: a }), yr = ({ text: a }) => /* @__PURE__ */ t.jsx("td", { children: a }), Er = () => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsx("th", { children: "Name" }),
  /* @__PURE__ */ t.jsx("th", { children: "Type" }),
  /* @__PURE__ */ t.jsx("th", { children: "Required" }),
  /* @__PURE__ */ t.jsx("th", { children: "Description" }),
  /* @__PURE__ */ t.jsx("th", { children: "Default" })
] }), Rr = () => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsx("th", { children: "Code" }),
  /* @__PURE__ */ t.jsx("th", { children: "Response" })
] }), _r = () => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsx("th", { children: "Endpoint" }),
  /* @__PURE__ */ t.jsx("th", { children: "Method" }),
  /* @__PURE__ */ t.jsx("th", { children: "Headers" }),
  /* @__PURE__ */ t.jsx("th", { children: "Body" }),
  /* @__PURE__ */ t.jsx("th", { children: "Example" }),
  /* @__PURE__ */ t.jsx("th", { children: "Successful" }),
  /* @__PURE__ */ t.jsx("th", { children: "Failed" })
] }), re = ({ defaultHeaders: a, header: i, body: d }) => /* @__PURE__ */ t.jsx("div", { className: "table", children: /* @__PURE__ */ t.jsxs("table", { children: [
  /* @__PURE__ */ t.jsx("thead", { children: /* @__PURE__ */ t.jsx("tr", { children: i !== void 0 ? i.map((u, v) => /* @__PURE__ */ t.jsx("th", { children: u }, v)) : a }) }),
  /* @__PURE__ */ t.jsx("tbody", { children: d.map(
    (u, v) => /* @__PURE__ */ t.jsx("tr", { children: u.map((g, _) => /* @__PURE__ */ t.jsx(yr, { text: g }, _)) }, v)
  ) })
] }) }), Wr = ({ header: a, body: i }) => /* @__PURE__ */ t.jsx(re, { defaultHeaders: /* @__PURE__ */ t.jsx(Rr, {}), header: a, body: i }), $r = ({ header: a, body: i }) => /* @__PURE__ */ t.jsx(re, { defaultHeaders: /* @__PURE__ */ t.jsx(Er, {}), header: a, body: i }), Yr = ({ header: a, body: i }) => /* @__PURE__ */ t.jsx(re, { defaultHeaders: /* @__PURE__ */ t.jsx(_r, {}), header: a, body: i }), H = De({}), Fe = De({});
const Tr = () => {
  const a = U(H);
  return /* @__PURE__ */ t.jsx("div", { className: "docs-container", children: a.content !== void 0 && Object.values(a.content).map(({ id: i, title: d, data: u }, v) => /* @__PURE__ */ t.jsx(Cr, { id: i, title: d, data: u }, v)) });
};
const Cr = ({ id: a, title: i, data: d }) => /* @__PURE__ */ t.jsx("div", { id: a, className: "docs-section", children: d !== void 0 ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsx("h3", { children: i }),
  d.length !== 0 && d.map(
    (u, v) => typeof u == "string" ? /* @__PURE__ */ t.jsx("p", { children: u }, v) : /* @__PURE__ */ t.jsx(mr, { children: u }, v)
  )
] }) : /* @__PURE__ */ t.jsx("h2", { children: i }) });
const wr = () => {
  const a = U(H), i = B(!1), d = Ne(() => i.value ? "0" : "100%");
  return Pe(() => {
    const u = window.matchMedia("(min-width: 48em)");
    i.value = u.matches;
  }, []), /* @__PURE__ */ t.jsxs(Fe.Provider, { value: { position: d.value, menu: i }, children: [
    /* @__PURE__ */ t.jsx("header", { children: /* @__PURE__ */ t.jsxs("nav", { "aria-label": "header-nav", style: { top: a.navTop }, className: "nav-doc-container", children: [
      /* @__PURE__ */ t.jsx("span", { children: a.title }),
      /* @__PURE__ */ t.jsx("div", { className: "circle", children: /* @__PURE__ */ t.jsx("span", { className: "exclamation", children: "!" }) }),
      /* @__PURE__ */ t.jsxs("div", { onClick: () => i.value = !i.value, className: i.value ? "menu active" : "menu", children: [
        /* @__PURE__ */ t.jsx("span", {}),
        /* @__PURE__ */ t.jsx("span", {}),
        /* @__PURE__ */ t.jsx("span", {})
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(Or, {})
  ] });
};
const Or = () => {
  const a = U(H), i = U(Fe);
  return /* @__PURE__ */ t.jsx("nav", { "aria-label": "side-nav", style: { transform: `translateX(${i.position})` }, className: "side-nav-doc-container", children: /* @__PURE__ */ t.jsx("div", { className: "side-nav-elements", children: Object.values(a.navSide).map(
    ({ title: d, to: u, childs: v }, g) => u !== void 0 ? /* @__PURE__ */ t.jsx(Sr, { to: u, menu: i.menu, title: d }, g) : /* @__PURE__ */ t.jsx(Dr, { menu: i.menu, title: d, childs: v }, g)
  ) }) });
}, Sr = ({ title: a, menu: i, to: d }) => /* @__PURE__ */ t.jsx("a", { href: "#" + d, onClick: () => i.value = !i.value, children: a }), Dr = ({ title: a, childs: i, menu: d }) => {
  const u = B({
    initial: 0,
    dinamic: 0
  }), v = B(!1), g = ke(null);
  Pe(() => {
    const x = setInterval(() => {
      g.current && (u.value.initial = g.current.offsetHeight, g.current.style.height = "0", clearInterval(x));
    }, 200);
    return () => clearInterval(x);
  }, []);
  const _ = () => {
    g.current !== null && (xr(() => {
      v.value = !v.value, v.value ? u.value.dinamic = u.value.initial : u.value.dinamic = 0;
    }), g.current.style.height = u.value.dinamic.toString() + "px", g.current.classList.toggle("active"));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "collapse-container", children: [
    /* @__PURE__ */ t.jsxs("div", { onClick: _, className: "collapse-target", children: [
      /* @__PURE__ */ t.jsx("a", { children: a }),
      /* @__PURE__ */ t.jsxs("div", { className: v.value ? "collapse-icon" : "collapse-icon active", children: [
        /* @__PURE__ */ t.jsx("span", {}),
        /* @__PURE__ */ t.jsx("span", {})
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx("ul", { ref: g, children: i !== void 0 && i.map(([x, h], T) => /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx("a", { href: "#" + x, onClick: () => d.value = !d.value, children: h }) }, T)) }) })
  ] });
};
const Lr = ({ content: a, navSide: i, title: d }) => {
  const u = ke(0), v = B("0"), g = Ne(() => {
    var T;
    let x = {}, h = ((T = i.exclude) == null ? void 0 : T.exclude) ?? [];
    return Object.keys(a).forEach((p) => {
      if (h.includes(p))
        return;
      let { title: E, id: C } = a[p];
      if (i.hasOwnProperty(p) && i[p].hasOwnProperty("childs")) {
        let { childs: D } = i[p];
        x = {
          ...x,
          [p]: {
            title: E,
            to: C,
            childs: D
          }
        };
      } else
        x = {
          ...x,
          [p]: {
            title: E,
            to: C
          }
        };
    }), x;
  }), _ = (x) => {
    const { scrollTop: h } = x.currentTarget;
    h > u.current ? v.value = "-70px" : v.value = "0", u.current = h;
  };
  return /* @__PURE__ */ t.jsx(H.Provider, { value: { title: d, content: a, navTop: v.value, navSide: g.value }, children: /* @__PURE__ */ t.jsxs("div", { style: { height: "100vh", overflowY: "auto", width: "100%" }, onScroll: _, children: [
    /* @__PURE__ */ t.jsx(wr, {}),
    /* @__PURE__ */ t.jsx(Tr, {}),
    /* @__PURE__ */ t.jsx("p", {})
  ] }) });
};
export {
  Lr as Docs,
  Ar as DocsAlertDanger,
  Fr as DocsAlertInfo,
  Ir as DocsAlertWarning,
  Nr as DocsCode,
  Wr as DocsTableStatus,
  $r as DocsTableTypes,
  Yr as DocsTableView
};
