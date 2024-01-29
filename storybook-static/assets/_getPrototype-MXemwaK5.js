import { g as hu } from './_commonjsHelpers-4gQjN7DL.js';
import {
  j as Gu,
  k as mu,
  l as Wu,
  m as du,
  i as Vu,
  e as qu,
  f as Ju,
  g as eu,
  n as Qu,
  o as zu,
  p as Hu,
  q as Yu,
  r as ju,
  s as Xu,
} from './_baseIsEqual-CFr8iVHd.js';
var Zu = Gu,
  ue = (function () {
    try {
      var u = Zu(Object, 'defineProperty');
      return u({}, '', {}), u;
    } catch {}
  })(),
  ee = ue,
  cu = ee;
function re(u, e, r) {
  e == '__proto__' && cu
    ? cu(u, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (u[e] = r);
}
var te = re;
function ne(u) {
  return function (e, r, a) {
    for (var t = -1, F = Object(e), D = a(e), o = D.length; o--; ) {
      var d = D[u ? o : ++t];
      if (r(F[d], d, F) === !1) break;
    }
    return e;
  };
}
var De = ne,
  ae = De,
  ie = ae(),
  se = ie,
  Ae = se,
  Fe = mu;
function Ce(u, e) {
  return u && Ae(u, e, Fe);
}
var Ee = Ce,
  oe = Wu,
  le = du,
  ce = 1,
  Be = 2;
function pe(u, e, r, a) {
  var t = r.length,
    F = t,
    D = !a;
  if (u == null) return !F;
  for (u = Object(u); t--; ) {
    var o = r[t];
    if (D && o[2] ? o[1] !== u[o[0]] : !(o[0] in u)) return !1;
  }
  for (; ++t < F; ) {
    o = r[t];
    var d = o[0],
      x = u[d],
      R = o[1];
    if (D && o[2]) {
      if (x === void 0 && !(d in u)) return !1;
    } else {
      var N = new oe();
      if (a) var E = a(x, R, d, u, e, N);
      if (!(E === void 0 ? le(R, x, ce | Be, a, N) : E)) return !1;
    }
  }
  return !0;
}
var fe = pe,
  he = Vu;
function me(u) {
  return u === u && !he(u);
}
var yu = me,
  de = yu,
  ye = mu;
function xe(u) {
  for (var e = ye(u), r = e.length; r--; ) {
    var a = e[r],
      t = u[a];
    e[r] = [a, t, de(t)];
  }
  return e;
}
var ge = xe;
function ve(u, e) {
  return function (r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r));
  };
}
var xu = ve,
  Te = fe,
  Se = ge,
  be = xu;
function Ne(u) {
  var e = Se(u);
  return e.length == 1 && e[0][2]
    ? be(e[0][0], e[0][1])
    : function (r) {
        return r === u || Te(r, u, e);
      };
}
var _e = Ne,
  we = qu,
  Pe = Ju,
  Oe = '[object Symbol]';
function Re(u) {
  return typeof u == 'symbol' || (Pe(u) && we(u) == Oe);
}
var Fu = Re,
  Ie = eu,
  Le = Fu,
  ke = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Me = /^\w*$/;
function $e(u, e) {
  if (Ie(u)) return !1;
  var r = typeof u;
  return r == 'number' || r == 'symbol' || r == 'boolean' || u == null || Le(u)
    ? !0
    : Me.test(u) || !ke.test(u) || (e != null && u in Object(e));
}
var Cu = $e,
  gu = Qu,
  Ue = 'Expected a function';
function Eu(u, e) {
  if (typeof u != 'function' || (e != null && typeof e != 'function')) throw new TypeError(Ue);
  var r = function () {
    var a = arguments,
      t = e ? e.apply(this, a) : a[0],
      F = r.cache;
    if (F.has(t)) return F.get(t);
    var D = u.apply(this, a);
    return (r.cache = F.set(t, D) || F), D;
  };
  return (r.cache = new (Eu.Cache || gu)()), r;
}
Eu.Cache = gu;
var Ke = Eu,
  Ge = Ke,
  We = 500;
function Ve(u) {
  var e = Ge(u, function (a) {
      return r.size === We && r.clear(), a;
    }),
    r = e.cache;
  return e;
}
var qe = Ve,
  Je = qe,
  Qe =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  ze = /\\(\\)?/g,
  He = Je(function (u) {
    var e = [];
    return (
      u.charCodeAt(0) === 46 && e.push(''),
      u.replace(Qe, function (r, a, t, F) {
        e.push(t ? F.replace(ze, '$1') : a || r);
      }),
      e
    );
  }),
  Ye = He;
function je(u, e) {
  for (var r = -1, a = u == null ? 0 : u.length, t = Array(a); ++r < a; ) t[r] = e(u[r], r, u);
  return t;
}
var Xe = je,
  Bu = zu,
  Ze = Xe,
  u0 = eu,
  e0 = Fu,
  r0 = 1 / 0,
  pu = Bu ? Bu.prototype : void 0,
  fu = pu ? pu.toString : void 0;
function vu(u) {
  if (typeof u == 'string') return u;
  if (u0(u)) return Ze(u, vu) + '';
  if (e0(u)) return fu ? fu.call(u) : '';
  var e = u + '';
  return e == '0' && 1 / u == -r0 ? '-0' : e;
}
var t0 = vu,
  n0 = t0;
function D0(u) {
  return u == null ? '' : n0(u);
}
var a0 = D0,
  i0 = eu,
  s0 = Cu,
  A0 = Ye,
  F0 = a0;
function C0(u, e) {
  return i0(u) ? u : s0(u, e) ? [u] : A0(F0(u));
}
var Tu = C0,
  E0 = Fu,
  o0 = 1 / 0;
function l0(u) {
  if (typeof u == 'string' || E0(u)) return u;
  var e = u + '';
  return e == '0' && 1 / u == -o0 ? '-0' : e;
}
var au = l0,
  c0 = Tu,
  B0 = au;
function p0(u, e) {
  e = c0(e, u);
  for (var r = 0, a = e.length; u != null && r < a; ) u = u[B0(e[r++])];
  return r && r == a ? u : void 0;
}
var Su = p0,
  f0 = Su;
function h0(u, e, r) {
  var a = u == null ? void 0 : f0(u, e);
  return a === void 0 ? r : a;
}
var m0 = h0;
function d0(u, e) {
  return u != null && e in Object(u);
}
var y0 = d0,
  x0 = Tu,
  g0 = Hu,
  v0 = eu,
  T0 = Yu,
  S0 = ju,
  b0 = au;
function N0(u, e, r) {
  e = x0(e, u);
  for (var a = -1, t = e.length, F = !1; ++a < t; ) {
    var D = b0(e[a]);
    if (!(F = u != null && r(u, D))) break;
    u = u[D];
  }
  return F || ++a != t
    ? F
    : ((t = u == null ? 0 : u.length), !!t && S0(t) && T0(D, t) && (v0(u) || g0(u)));
}
var _0 = N0,
  w0 = y0,
  P0 = _0;
function O0(u, e) {
  return u != null && P0(u, e, w0);
}
var R0 = O0,
  I0 = du,
  L0 = m0,
  k0 = R0,
  M0 = Cu,
  $0 = yu,
  U0 = xu,
  K0 = au,
  G0 = 1,
  W0 = 2;
function V0(u, e) {
  return M0(u) && $0(e)
    ? U0(K0(u), e)
    : function (r) {
        var a = L0(r, u);
        return a === void 0 && a === e ? k0(r, u) : I0(e, a, G0 | W0);
      };
}
var q0 = V0;
function J0(u) {
  return u;
}
var Q0 = J0;
function z0(u) {
  return function (e) {
    return e == null ? void 0 : e[u];
  };
}
var H0 = z0,
  Y0 = Su;
function j0(u) {
  return function (e) {
    return Y0(e, u);
  };
}
var X0 = j0,
  Z0 = H0,
  ur = X0,
  er = Cu,
  rr = au;
function tr(u) {
  return er(u) ? Z0(rr(u)) : ur(u);
}
var nr = tr,
  Dr = _e,
  ar = q0,
  ir = Q0,
  sr = eu,
  Ar = nr;
function Fr(u) {
  return typeof u == 'function'
    ? u
    : u == null
      ? ir
      : typeof u == 'object'
        ? sr(u)
          ? ar(u[0], u[1])
          : Dr(u)
        : Ar(u);
}
var Cr = Fr,
  Er = te,
  or = Ee,
  lr = Cr;
function cr(u, e) {
  var r = {};
  return (
    (e = lr(e)),
    or(u, function (a, t, F) {
      Er(r, t, e(a, t, F));
    }),
    r
  );
}
var Br = cr;
const pr = hu(Br);
var bu = {},
  X = {},
  Nu = { exports: {} };
(function () {
  function u(D) {
    if (D == null) return !1;
    switch (D.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0;
    }
    return !1;
  }
  function e(D) {
    if (D == null) return !1;
    switch (D.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0;
    }
    return !1;
  }
  function r(D) {
    if (D == null) return !1;
    switch (D.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0;
    }
    return !1;
  }
  function a(D) {
    return r(D) || (D != null && D.type === 'FunctionDeclaration');
  }
  function t(D) {
    switch (D.type) {
      case 'IfStatement':
        return D.alternate != null ? D.alternate : D.consequent;
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return D.body;
    }
    return null;
  }
  function F(D) {
    var o;
    if (D.type !== 'IfStatement' || D.alternate == null) return !1;
    o = D.consequent;
    do {
      if (o.type === 'IfStatement' && o.alternate == null) return !0;
      o = t(o);
    } while (o);
    return !1;
  }
  Nu.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: a,
    isProblematicIfStatement: F,
    trailingStatement: t,
  };
})();
var fr = Nu.exports,
  _u = { exports: {} };
(function () {
  var u, e, r, a, t, F;
  (e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function D(f) {
    return 48 <= f && f <= 57;
  }
  function o(f) {
    return (48 <= f && f <= 57) || (97 <= f && f <= 102) || (65 <= f && f <= 70);
  }
  function d(f) {
    return f >= 48 && f <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
    65279,
  ];
  function x(f) {
    return (
      f === 32 || f === 9 || f === 11 || f === 12 || f === 160 || (f >= 5760 && r.indexOf(f) >= 0)
    );
  }
  function R(f) {
    return f === 10 || f === 13 || f === 8232 || f === 8233;
  }
  function N(f) {
    if (f <= 65535) return String.fromCharCode(f);
    var U = String.fromCharCode(Math.floor((f - 65536) / 1024) + 55296),
      G = String.fromCharCode(((f - 65536) % 1024) + 56320);
    return U + G;
  }
  for (a = new Array(128), F = 0; F < 128; ++F)
    a[F] = (F >= 97 && F <= 122) || (F >= 65 && F <= 90) || F === 36 || F === 95;
  for (t = new Array(128), F = 0; F < 128; ++F)
    t[F] =
      (F >= 97 && F <= 122) || (F >= 65 && F <= 90) || (F >= 48 && F <= 57) || F === 36 || F === 95;
  function E(f) {
    return f < 128 ? a[f] : e.NonAsciiIdentifierStart.test(N(f));
  }
  function g(f) {
    return f < 128 ? t[f] : e.NonAsciiIdentifierPart.test(N(f));
  }
  function y(f) {
    return f < 128 ? a[f] : u.NonAsciiIdentifierStart.test(N(f));
  }
  function B(f) {
    return f < 128 ? t[f] : u.NonAsciiIdentifierPart.test(N(f));
  }
  _u.exports = {
    isDecimalDigit: D,
    isHexDigit: o,
    isOctalDigit: d,
    isWhiteSpace: x,
    isLineTerminator: R,
    isIdentifierStartES5: E,
    isIdentifierPartES5: g,
    isIdentifierStartES6: y,
    isIdentifierPartES6: B,
  };
})();
var wu = _u.exports,
  Pu = { exports: {} };
(function () {
  var u = wu;
  function e(E) {
    switch (E) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0;
      default:
        return !1;
    }
  }
  function r(E, g) {
    return !g && E === 'yield' ? !1 : a(E, g);
  }
  function a(E, g) {
    if (g && e(E)) return !0;
    switch (E.length) {
      case 2:
        return E === 'if' || E === 'in' || E === 'do';
      case 3:
        return E === 'var' || E === 'for' || E === 'new' || E === 'try';
      case 4:
        return (
          E === 'this' ||
          E === 'else' ||
          E === 'case' ||
          E === 'void' ||
          E === 'with' ||
          E === 'enum'
        );
      case 5:
        return (
          E === 'while' ||
          E === 'break' ||
          E === 'catch' ||
          E === 'throw' ||
          E === 'const' ||
          E === 'yield' ||
          E === 'class' ||
          E === 'super'
        );
      case 6:
        return (
          E === 'return' ||
          E === 'typeof' ||
          E === 'delete' ||
          E === 'switch' ||
          E === 'export' ||
          E === 'import'
        );
      case 7:
        return E === 'default' || E === 'finally' || E === 'extends';
      case 8:
        return E === 'function' || E === 'continue' || E === 'debugger';
      case 10:
        return E === 'instanceof';
      default:
        return !1;
    }
  }
  function t(E, g) {
    return E === 'null' || E === 'true' || E === 'false' || r(E, g);
  }
  function F(E, g) {
    return E === 'null' || E === 'true' || E === 'false' || a(E, g);
  }
  function D(E) {
    return E === 'eval' || E === 'arguments';
  }
  function o(E) {
    var g, y, B;
    if (E.length === 0 || ((B = E.charCodeAt(0)), !u.isIdentifierStartES5(B))) return !1;
    for (g = 1, y = E.length; g < y; ++g)
      if (((B = E.charCodeAt(g)), !u.isIdentifierPartES5(B))) return !1;
    return !0;
  }
  function d(E, g) {
    return (E - 55296) * 1024 + (g - 56320) + 65536;
  }
  function x(E) {
    var g, y, B, f, U;
    if (E.length === 0) return !1;
    for (U = u.isIdentifierStartES6, g = 0, y = E.length; g < y; ++g) {
      if (((B = E.charCodeAt(g)), 55296 <= B && B <= 56319)) {
        if ((++g, g >= y || ((f = E.charCodeAt(g)), !(56320 <= f && f <= 57343)))) return !1;
        B = d(B, f);
      }
      if (!U(B)) return !1;
      U = u.isIdentifierPartES6;
    }
    return !0;
  }
  function R(E, g) {
    return o(E) && !t(E, g);
  }
  function N(E, g) {
    return x(E) && !F(E, g);
  }
  Pu.exports = {
    isKeywordES5: r,
    isKeywordES6: a,
    isReservedWordES5: t,
    isReservedWordES6: F,
    isRestrictedWord: D,
    isIdentifierNameES5: o,
    isIdentifierNameES6: x,
    isIdentifierES5: R,
    isIdentifierES6: N,
  };
})();
var hr = Pu.exports;
(function () {
  (X.ast = fr), (X.code = wu), (X.keyword = hr);
})();
var Y = {},
  J = {};
const mr = 'doctrine',
  dr = 'JSDoc parser',
  yr = 'https://github.com/eslint/doctrine',
  xr = 'lib/doctrine.js',
  gr = '3.0.0',
  vr = { node: '>=6.0.0' },
  Tr = { lib: './lib' },
  Sr = ['lib'],
  br = [
    {
      name: 'Nicholas C. Zakas',
      email: 'nicholas+npm@nczconsulting.com',
      web: 'https://www.nczonline.net',
    },
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'https://github.com/Constellation',
    },
  ],
  Nr = 'eslint/doctrine',
  _r = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1',
  },
  wr = 'Apache-2.0',
  Pr = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release',
  },
  Or = { esutils: '^2.0.2' },
  Rr = {
    name: mr,
    description: dr,
    homepage: yr,
    main: xr,
    version: gr,
    engines: vr,
    directories: Tr,
    files: Sr,
    maintainers: br,
    repository: Nr,
    devDependencies: _r,
    license: wr,
    scripts: Pr,
    dependencies: Or,
  };
function Ir(u, e) {
  if (!u) throw new Error(e || 'unknown assertion error');
}
var Lr = Ir;
(function () {
  var u;
  (u = Rr.version), (J.VERSION = u);
  function e(a) {
    (this.name = 'DoctrineError'), (this.message = a);
  }
  (e.prototype = (function () {
    var a = function () {};
    return (a.prototype = Error.prototype), new a();
  })()),
    (e.prototype.constructor = e),
    (J.DoctrineError = e);
  function r(a) {
    throw new e(a);
  }
  (J.throwError = r), (J.assert = Lr);
})();
(function () {
  var u, e, r, a, t, F, D, o, d, x, R, N;
  (d = X),
    (x = J),
    (u = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType',
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function E(n) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(n)) === -1 &&
      !d.code.isWhiteSpace(n) &&
      !d.code.isLineTerminator(n)
    );
  }
  function g(n, i, p, A) {
    (this._previous = n), (this._index = i), (this._token = p), (this._value = A);
  }
  (g.prototype.restore = function () {
    (F = this._previous), (t = this._index), (D = this._token), (o = this._value);
  }),
    (g.save = function () {
      return new g(F, t, D, o);
    });
  function y(n, i) {
    return N && (n.range = [i[0] + R, i[1] + R]), n;
  }
  function B() {
    var n = r.charAt(t);
    return (t += 1), n;
  }
  function f(n) {
    var i,
      p,
      A,
      s = 0;
    for (p = n === 'u' ? 4 : 2, i = 0; i < p; ++i)
      if (t < a && d.code.isHexDigit(r.charCodeAt(t)))
        (A = B()), (s = s * 16 + '0123456789abcdef'.indexOf(A.toLowerCase()));
      else return '';
    return String.fromCharCode(s);
  }
  function U() {
    var n = '',
      i,
      p,
      A,
      s,
      c;
    for (i = r.charAt(t), ++t; t < a; )
      if (((p = B()), p === i)) {
        i = '';
        break;
      } else if (p === '\\')
        if (((p = B()), d.code.isLineTerminator(p.charCodeAt(0))))
          p === '\r' && r.charCodeAt(t) === 10 && ++t;
        else
          switch (p) {
            case 'n':
              n += `
`;
              break;
            case 'r':
              n += '\r';
              break;
            case 't':
              n += '	';
              break;
            case 'u':
            case 'x':
              (c = t), (s = f(p)), s ? (n += s) : ((t = c), (n += p));
              break;
            case 'b':
              n += '\b';
              break;
            case 'f':
              n += '\f';
              break;
            case 'v':
              n += '\v';
              break;
            default:
              d.code.isOctalDigit(p.charCodeAt(0))
                ? ((A = '01234567'.indexOf(p)),
                  t < a &&
                    d.code.isOctalDigit(r.charCodeAt(t)) &&
                    ((A = A * 8 + '01234567'.indexOf(B())),
                    '0123'.indexOf(p) >= 0 &&
                      t < a &&
                      d.code.isOctalDigit(r.charCodeAt(t)) &&
                      (A = A * 8 + '01234567'.indexOf(B()))),
                  (n += String.fromCharCode(A)))
                : (n += p);
              break;
          }
      else {
        if (d.code.isLineTerminator(p.charCodeAt(0))) break;
        n += p;
      }
    return i !== '' && x.throwError('unexpected quote'), (o = n), e.STRING;
  }
  function G() {
    var n, i;
    if (((n = ''), (i = r.charCodeAt(t)), i !== 46)) {
      if (((n = B()), (i = r.charCodeAt(t)), n === '0')) {
        if (i === 120 || i === 88) {
          for (n += B(); t < a && ((i = r.charCodeAt(t)), !!d.code.isHexDigit(i)); ) n += B();
          return (
            n.length <= 2 && x.throwError('unexpected token'),
            t < a &&
              ((i = r.charCodeAt(t)),
              d.code.isIdentifierStartES5(i) && x.throwError('unexpected token')),
            (o = parseInt(n, 16)),
            e.NUMBER
          );
        }
        if (d.code.isOctalDigit(i)) {
          for (n += B(); t < a && ((i = r.charCodeAt(t)), !!d.code.isOctalDigit(i)); ) n += B();
          return (
            t < a &&
              ((i = r.charCodeAt(t)),
              (d.code.isIdentifierStartES5(i) || d.code.isDecimalDigit(i)) &&
                x.throwError('unexpected token')),
            (o = parseInt(n, 8)),
            e.NUMBER
          );
        }
        d.code.isDecimalDigit(i) && x.throwError('unexpected token');
      }
      for (; t < a && ((i = r.charCodeAt(t)), !!d.code.isDecimalDigit(i)); ) n += B();
    }
    if (i === 46)
      for (n += B(); t < a && ((i = r.charCodeAt(t)), !!d.code.isDecimalDigit(i)); ) n += B();
    if (i === 101 || i === 69)
      if (
        ((n += B()),
        (i = r.charCodeAt(t)),
        (i === 43 || i === 45) && (n += B()),
        (i = r.charCodeAt(t)),
        d.code.isDecimalDigit(i))
      )
        for (n += B(); t < a && ((i = r.charCodeAt(t)), !!d.code.isDecimalDigit(i)); ) n += B();
      else x.throwError('unexpected token');
    return (
      t < a &&
        ((i = r.charCodeAt(t)), d.code.isIdentifierStartES5(i) && x.throwError('unexpected token')),
      (o = parseFloat(n)),
      e.NUMBER
    );
  }
  function ru() {
    var n, i;
    for (o = B(); t < a && E(r.charCodeAt(t)); ) {
      if (((n = r.charCodeAt(t)), n === 46)) {
        if (t + 1 >= a) return e.ILLEGAL;
        if (((i = r.charCodeAt(t + 1)), i === 60)) break;
      }
      o += B();
    }
    return e.NAME;
  }
  function k() {
    var n;
    for (F = t; t < a && d.code.isWhiteSpace(r.charCodeAt(t)); ) B();
    if (t >= a) return (D = e.EOF), D;
    switch (((n = r.charCodeAt(t)), n)) {
      case 39:
      case 34:
        return (D = U()), D;
      case 58:
        return B(), (D = e.COLON), D;
      case 44:
        return B(), (D = e.COMMA), D;
      case 40:
        return B(), (D = e.LPAREN), D;
      case 41:
        return B(), (D = e.RPAREN), D;
      case 91:
        return B(), (D = e.LBRACK), D;
      case 93:
        return B(), (D = e.RBRACK), D;
      case 123:
        return B(), (D = e.LBRACE), D;
      case 125:
        return B(), (D = e.RBRACE), D;
      case 46:
        if (t + 1 < a) {
          if (((n = r.charCodeAt(t + 1)), n === 60)) return B(), B(), (D = e.DOT_LT), D;
          if (n === 46 && t + 2 < a && r.charCodeAt(t + 2) === 46)
            return B(), B(), B(), (D = e.REST), D;
          if (d.code.isDecimalDigit(n)) return (D = G()), D;
        }
        return (D = e.ILLEGAL), D;
      case 60:
        return B(), (D = e.LT), D;
      case 62:
        return B(), (D = e.GT), D;
      case 42:
        return B(), (D = e.STAR), D;
      case 124:
        return B(), (D = e.PIPE), D;
      case 63:
        return B(), (D = e.QUESTION), D;
      case 33:
        return B(), (D = e.BANG), D;
      case 61:
        return B(), (D = e.EQUAL), D;
      case 45:
        return (D = G()), D;
      default:
        return d.code.isDecimalDigit(n) ? ((D = G()), D) : (x.assert(E(n)), (D = ru()), D);
    }
  }
  function v(n, i) {
    x.assert(D === n, i || 'consumed token not matched'), k();
  }
  function C(n, i) {
    D !== n && x.throwError(i || 'unexpected token'), k();
  }
  function I() {
    var n,
      i = t - 1;
    if ((v(e.LPAREN, 'UnionType should start with ('), (n = []), D !== e.RPAREN))
      for (; n.push(L()), D !== e.RPAREN; ) C(e.PIPE);
    return (
      v(e.RPAREN, 'UnionType should end with )'), y({ type: u.UnionType, elements: n }, [i, F])
    );
  }
  function l() {
    var n,
      i = t - 1,
      p;
    for (v(e.LBRACK, 'ArrayType should start with ['), n = []; D !== e.RBRACK; ) {
      if (D === e.REST) {
        (p = t - 3), v(e.REST), n.push(y({ type: u.RestType, expression: L() }, [p, F]));
        break;
      } else n.push(L());
      D !== e.RBRACK && C(e.COMMA);
    }
    return C(e.RBRACK), y({ type: u.ArrayType, elements: n }, [i, F]);
  }
  function M() {
    var n = o;
    if (D === e.NAME || D === e.STRING) return k(), n;
    if (D === e.NUMBER) return v(e.NUMBER), String(n);
    x.throwError('unexpected token');
  }
  function $() {
    var n,
      i = F;
    return (
      (n = M()),
      D === e.COLON
        ? (v(e.COLON), y({ type: u.FieldType, key: n, value: L() }, [i, F]))
        : y({ type: u.FieldType, key: n, value: null }, [i, F])
    );
  }
  function m() {
    var n,
      i = t - 1,
      p;
    if ((v(e.LBRACE, 'RecordType should start with {'), (n = []), D === e.COMMA)) v(e.COMMA);
    else for (; D !== e.RBRACE; ) n.push($()), D !== e.RBRACE && C(e.COMMA);
    return (p = t), C(e.RBRACE), y({ type: u.RecordType, fields: n }, [i, p]);
  }
  function z() {
    var n = o,
      i = t - n.length;
    return (
      C(e.NAME),
      D === e.COLON &&
        (n === 'module' || n === 'external' || n === 'event') &&
        (v(e.COLON), (n += ':' + o), C(e.NAME)),
      y({ type: u.NameExpression, name: n }, [i, F])
    );
  }
  function tu() {
    var n = [];
    for (n.push(K()); D === e.COMMA; ) v(e.COMMA), n.push(K());
    return n;
  }
  function V() {
    var n,
      i,
      p = t - o.length;
    return (
      (n = z()),
      D === e.DOT_LT || D === e.LT
        ? (k(),
          (i = tu()),
          C(e.GT),
          y({ type: u.TypeApplication, expression: n, applications: i }, [p, F]))
        : n
    );
  }
  function nu() {
    return (
      v(e.COLON, 'ResultType should start with :'),
      D === e.NAME && o === 'void' ? (v(e.NAME), { type: u.VoidLiteral }) : L()
    );
  }
  function S() {
    for (var n = [], i = !1, p, A = !1, s, c = t - 3, h; D !== e.RPAREN; )
      D === e.REST && (v(e.REST), (A = !0)),
        (s = F),
        (p = L()),
        p.type === u.NameExpression &&
          D === e.COLON &&
          ((h = F - p.name.length),
          v(e.COLON),
          (p = y({ type: u.ParameterType, name: p.name, expression: L() }, [h, F]))),
        D === e.EQUAL
          ? (v(e.EQUAL), (p = y({ type: u.OptionalType, expression: p }, [s, F])), (i = !0))
          : i && x.throwError('unexpected token'),
        A && (p = y({ type: u.RestType, expression: p }, [c, F])),
        n.push(p),
        D !== e.RPAREN && C(e.COMMA);
    return n;
  }
  function su() {
    var n,
      i,
      p,
      A,
      s,
      c = t - o.length;
    return (
      x.assert(D === e.NAME && o === 'function', "FunctionType should start with 'function'"),
      v(e.NAME),
      C(e.LPAREN),
      (n = !1),
      (p = []),
      (i = null),
      D !== e.RPAREN &&
        (D === e.NAME && (o === 'this' || o === 'new')
          ? ((n = o === 'new'),
            v(e.NAME),
            C(e.COLON),
            (i = V()),
            D === e.COMMA && (v(e.COMMA), (p = S())))
          : (p = S())),
      C(e.RPAREN),
      (A = null),
      D === e.COLON && (A = nu()),
      (s = y({ type: u.FunctionType, params: p, result: A }, [c, F])),
      i && ((s.this = i), n && (s.new = !0)),
      s
    );
  }
  function H() {
    var n, i;
    switch (D) {
      case e.STAR:
        return v(e.STAR), y({ type: u.AllLiteral }, [F - 1, F]);
      case e.LPAREN:
        return I();
      case e.LBRACK:
        return l();
      case e.LBRACE:
        return m();
      case e.NAME:
        if (((i = t - o.length), o === 'null'))
          return v(e.NAME), y({ type: u.NullLiteral }, [i, F]);
        if (o === 'undefined') return v(e.NAME), y({ type: u.UndefinedLiteral }, [i, F]);
        if (o === 'true' || o === 'false')
          return v(e.NAME), y({ type: u.BooleanLiteralType, value: o === 'true' }, [i, F]);
        if (((n = g.save()), o === 'function'))
          try {
            return su();
          } catch {
            n.restore();
          }
        return V();
      case e.STRING:
        return k(), y({ type: u.StringLiteralType, value: o }, [F - o.length - 2, F]);
      case e.NUMBER:
        return k(), y({ type: u.NumericLiteralType, value: o }, [F - String(o).length, F]);
      default:
        x.throwError('unexpected token');
    }
  }
  function L() {
    var n, i;
    return D === e.QUESTION
      ? ((i = t - 1),
        v(e.QUESTION),
        D === e.COMMA ||
        D === e.EQUAL ||
        D === e.RBRACE ||
        D === e.RPAREN ||
        D === e.PIPE ||
        D === e.EOF ||
        D === e.RBRACK ||
        D === e.GT
          ? y({ type: u.NullableLiteral }, [i, F])
          : y({ type: u.NullableType, expression: H(), prefix: !0 }, [i, F]))
      : D === e.BANG
        ? ((i = t - 1),
          v(e.BANG),
          y({ type: u.NonNullableType, expression: H(), prefix: !0 }, [i, F]))
        : ((i = F),
          (n = H()),
          D === e.BANG
            ? (v(e.BANG), y({ type: u.NonNullableType, expression: n, prefix: !1 }, [i, F]))
            : D === e.QUESTION
              ? (v(e.QUESTION), y({ type: u.NullableType, expression: n, prefix: !1 }, [i, F]))
              : D === e.LBRACK
                ? (v(e.LBRACK),
                  C(e.RBRACK, 'expected an array-style type declaration (' + o + '[])'),
                  y(
                    {
                      type: u.TypeApplication,
                      expression: y({ type: u.NameExpression, name: 'Array' }, [i, F]),
                      applications: [n],
                    },
                    [i, F],
                  ))
                : n);
  }
  function K() {
    var n, i;
    if (((n = L()), D !== e.PIPE)) return n;
    for (i = [n], v(e.PIPE); i.push(L()), D === e.PIPE; ) v(e.PIPE);
    return y({ type: u.UnionType, elements: i }, [0, t]);
  }
  function q() {
    var n;
    return D === e.REST
      ? (v(e.REST), y({ type: u.RestType, expression: K() }, [0, t]))
      : ((n = K()),
        D === e.EQUAL ? (v(e.EQUAL), y({ type: u.OptionalType, expression: n }, [0, t])) : n);
  }
  function Du(n, i) {
    var p;
    return (
      (r = n),
      (a = r.length),
      (t = 0),
      (F = 0),
      (N = i && i.range),
      (R = (i && i.startIndex) || 0),
      k(),
      (p = K()),
      i && i.midstream
        ? { expression: p, index: F }
        : (D !== e.EOF && x.throwError('not reach to EOF'), p)
    );
  }
  function Au(n, i) {
    var p;
    return (
      (r = n),
      (a = r.length),
      (t = 0),
      (F = 0),
      (N = i && i.range),
      (R = (i && i.startIndex) || 0),
      k(),
      (p = q()),
      i && i.midstream
        ? { expression: p, index: F }
        : (D !== e.EOF && x.throwError('not reach to EOF'), p)
    );
  }
  function b(n, i, p) {
    var A, s, c;
    switch (n.type) {
      case u.NullableLiteral:
        A = '?';
        break;
      case u.AllLiteral:
        A = '*';
        break;
      case u.NullLiteral:
        A = 'null';
        break;
      case u.UndefinedLiteral:
        A = 'undefined';
        break;
      case u.VoidLiteral:
        A = 'void';
        break;
      case u.UnionType:
        for (p ? (A = '') : (A = '('), s = 0, c = n.elements.length; s < c; ++s)
          (A += b(n.elements[s], i)), s + 1 !== c && (A += i ? '|' : ' | ');
        p || (A += ')');
        break;
      case u.ArrayType:
        for (A = '[', s = 0, c = n.elements.length; s < c; ++s)
          (A += b(n.elements[s], i)), s + 1 !== c && (A += i ? ',' : ', ');
        A += ']';
        break;
      case u.RecordType:
        for (A = '{', s = 0, c = n.fields.length; s < c; ++s)
          (A += b(n.fields[s], i)), s + 1 !== c && (A += i ? ',' : ', ');
        A += '}';
        break;
      case u.FieldType:
        n.value ? (A = n.key + (i ? ':' : ': ') + b(n.value, i)) : (A = n.key);
        break;
      case u.FunctionType:
        for (
          A = i ? 'function(' : 'function (',
            n.this &&
              (n.new ? (A += i ? 'new:' : 'new: ') : (A += i ? 'this:' : 'this: '),
              (A += b(n.this, i)),
              n.params.length !== 0 && (A += i ? ',' : ', ')),
            s = 0,
            c = n.params.length;
          s < c;
          ++s
        )
          (A += b(n.params[s], i)), s + 1 !== c && (A += i ? ',' : ', ');
        (A += ')'), n.result && (A += (i ? ':' : ': ') + b(n.result, i));
        break;
      case u.ParameterType:
        A = n.name + (i ? ':' : ': ') + b(n.expression, i);
        break;
      case u.RestType:
        (A = '...'), n.expression && (A += b(n.expression, i));
        break;
      case u.NonNullableType:
        n.prefix ? (A = '!' + b(n.expression, i)) : (A = b(n.expression, i) + '!');
        break;
      case u.OptionalType:
        A = b(n.expression, i) + '=';
        break;
      case u.NullableType:
        n.prefix ? (A = '?' + b(n.expression, i)) : (A = b(n.expression, i) + '?');
        break;
      case u.NameExpression:
        A = n.name;
        break;
      case u.TypeApplication:
        for (A = b(n.expression, i) + '.<', s = 0, c = n.applications.length; s < c; ++s)
          (A += b(n.applications[s], i)), s + 1 !== c && (A += i ? ',' : ', ');
        A += '>';
        break;
      case u.StringLiteralType:
        A = '"' + n.value + '"';
        break;
      case u.NumericLiteralType:
        A = String(n.value);
        break;
      case u.BooleanLiteralType:
        A = String(n.value);
        break;
      default:
        x.throwError('Unknown type ' + n.type);
    }
    return A;
  }
  function _(n, i) {
    return i == null && (i = {}), b(n, i.compact, i.topLevel);
  }
  (Y.parseType = Du), (Y.parseParamType = Au), (Y.stringify = _), (Y.Syntax = u);
})();
(function (u) {
  (function () {
    var e, r, a, t, F;
    (t = X), (e = Y), (r = J);
    function D(C, I, l) {
      return C.slice(I, l);
    }
    F = (function () {
      var C = Object.prototype.hasOwnProperty;
      return function (l, M) {
        return C.call(l, M);
      };
    })();
    function o(C) {
      var I = {},
        l;
      for (l in C) C.hasOwnProperty(l) && (I[l] = C[l]);
      return I;
    }
    function d(C) {
      return (C >= 97 && C <= 122) || (C >= 65 && C <= 90) || (C >= 48 && C <= 57);
    }
    function x(C) {
      return C === 'param' || C === 'argument' || C === 'arg';
    }
    function R(C) {
      return C === 'return' || C === 'returns';
    }
    function N(C) {
      return C === 'property' || C === 'prop';
    }
    function E(C) {
      return x(C) || N(C) || C === 'alias' || C === 'this' || C === 'mixes' || C === 'requires';
    }
    function g(C) {
      return E(C) || C === 'const' || C === 'constant';
    }
    function y(C) {
      return N(C) || x(C);
    }
    function B(C) {
      return N(C) || x(C);
    }
    function f(C) {
      return (
        x(C) ||
        R(C) ||
        C === 'define' ||
        C === 'enum' ||
        C === 'implements' ||
        C === 'this' ||
        C === 'type' ||
        C === 'typedef' ||
        N(C)
      );
    }
    function U(C) {
      return (
        f(C) ||
        C === 'throws' ||
        C === 'const' ||
        C === 'constant' ||
        C === 'namespace' ||
        C === 'member' ||
        C === 'var' ||
        C === 'module' ||
        C === 'constructor' ||
        C === 'class' ||
        C === 'extends' ||
        C === 'augments' ||
        C === 'public' ||
        C === 'private' ||
        C === 'protected'
      );
    }
    var G = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      ru =
        '(' +
        G +
        '*(?:\\*' +
        G +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function k(C) {
      return C.replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(ru, 'g'), '$2')
        .replace(/\s*$/, '');
    }
    function v(C, I) {
      for (var l = C.replace(/^\/\*\*?/, ''), M = 0, $ = new RegExp(ru, 'g'), m; (m = $.exec(l)); )
        if (((M += m[1].length), m.index + m[0].length > I + M)) return I + M + C.length - l.length;
      return C.replace(/\*\/$/, '').replace(/\s*$/, '').length;
    }
    (function (C) {
      var I, l, M, $, m, z, tu, V, nu;
      function S() {
        var A = m.charCodeAt(l);
        return (
          (l += 1),
          t.code.isLineTerminator(A) && !(A === 13 && m.charCodeAt(l) === 10) && (M += 1),
          String.fromCharCode(A)
        );
      }
      function su() {
        var A = '';
        for (S(); l < $ && d(m.charCodeAt(l)); ) A += S();
        return A;
      }
      function H() {
        var A,
          s,
          c = l;
        for (s = !1; c < $; ) {
          if (
            ((A = m.charCodeAt(c)),
            t.code.isLineTerminator(A) && !(A === 13 && m.charCodeAt(c + 1) === 10))
          )
            s = !0;
          else if (s) {
            if (A === 64) break;
            t.code.isWhiteSpace(A) || (s = !1);
          }
          c += 1;
        }
        return c;
      }
      function L(A, s, c) {
        for (var h, w, T, O, W = !1; l < s; )
          if (((h = m.charCodeAt(l)), t.code.isWhiteSpace(h))) S();
          else if (h === 123) {
            S();
            break;
          } else {
            W = !0;
            break;
          }
        if (W) return null;
        for (w = 1, T = ''; l < s; )
          if (((h = m.charCodeAt(l)), t.code.isLineTerminator(h))) S();
          else {
            if (h === 125) {
              if (((w -= 1), w === 0)) {
                S();
                break;
              }
            } else h === 123 && (w += 1);
            T === '' && (O = l), (T += S());
          }
        return w !== 0
          ? r.throwError('Braces are not balanced')
          : B(A)
            ? e.parseParamType(T, { startIndex: b(O), range: c })
            : e.parseType(T, { startIndex: b(O), range: c });
      }
      function K(A) {
        var s;
        if (!t.code.isIdentifierStartES5(m.charCodeAt(l)) && !m[l].match(/[0-9]/)) return null;
        for (s = S(); l < A && t.code.isIdentifierPartES5(m.charCodeAt(l)); ) s += S();
        return s;
      }
      function q(A) {
        for (
          ;
          l < A &&
          (t.code.isWhiteSpace(m.charCodeAt(l)) || t.code.isLineTerminator(m.charCodeAt(l)));

        )
          S();
      }
      function Du(A, s, c) {
        var h = '',
          w,
          T;
        if ((q(A), l >= A)) return null;
        if (m.charCodeAt(l) === 91)
          if (s) (w = !0), (h = S());
          else return null;
        if (((h += K(A)), c))
          for (
            m.charCodeAt(l) === 58 &&
              (h === 'module' || h === 'external' || h === 'event') &&
              ((h += S()), (h += K(A))),
              m.charCodeAt(l) === 91 && m.charCodeAt(l + 1) === 93 && ((h += S()), (h += S()));
            m.charCodeAt(l) === 46 ||
            m.charCodeAt(l) === 47 ||
            m.charCodeAt(l) === 35 ||
            m.charCodeAt(l) === 45 ||
            m.charCodeAt(l) === 126;

          )
            (h += S()), (h += K(A));
        if (w) {
          if ((q(A), m.charCodeAt(l) === 61)) {
            (h += S()), q(A);
            for (var O, W = 1; l < A; ) {
              if (
                ((O = m.charCodeAt(l)),
                t.code.isWhiteSpace(O) && (T || (q(A), (O = m.charCodeAt(l)))),
                O === 39 && (T ? T === "'" && (T = '') : (T = "'")),
                O === 34 && (T ? T === '"' && (T = '') : (T = '"')),
                O === 91)
              )
                W++;
              else if (O === 93 && --W === 0) break;
              h += S();
            }
          }
          if ((q(A), l >= A || m.charCodeAt(l) !== 93)) return null;
          h += S();
        }
        return h;
      }
      function Au() {
        for (; l < $ && m.charCodeAt(l) !== 64; ) S();
        return l >= $ ? !1 : (r.assert(m.charCodeAt(l) === 64), !0);
      }
      function b(A) {
        return m === z ? A : v(z, A);
      }
      function _(A, s) {
        (this._options = A),
          (this._title = s.toLowerCase()),
          (this._tag = { title: s, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = M),
          (this._first = l - s.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (_.prototype.addError = function (s) {
        var c = Array.prototype.slice.call(arguments, 1),
          h = s.replace(/%(\d)/g, function (w, T) {
            return r.assert(T < c.length, 'Message reference must be in range'), c[T];
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          nu && r.throwError(h),
          this._tag.errors.push(h),
          tu
        );
      }),
        (_.prototype.parseType = function () {
          if (f(this._title))
            try {
              if (
                ((this._tag.type = L(this._title, this._last, this._options.range)),
                !this._tag.type &&
                  !x(this._title) &&
                  !R(this._title) &&
                  !this.addError('Missing or invalid tag type'))
              )
                return !1;
            } catch (A) {
              if (((this._tag.type = null), !this.addError(A.message))) return !1;
            }
          else if (U(this._title))
            try {
              this._tag.type = L(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (_.prototype._parseNamePath = function (A) {
          var s;
          return (
            (s = Du(this._last, V && B(this._title), !0)),
            !s && !A && !this.addError('Missing or invalid tag name')
              ? !1
              : ((this._tag.name = s), !0)
          );
        }),
        (_.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (_.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (_.prototype.parseName = function () {
          var A, s;
          if (g(this._title))
            if (
              ((this._tag.name = Du(this._last, V && B(this._title), y(this._title))),
              this._tag.name)
            )
              (s = this._tag.name),
                s.charAt(0) === '[' &&
                  s.charAt(s.length - 1) === ']' &&
                  ((A = s.substring(1, s.length - 1).split('=')),
                  A.length > 1 && (this._tag.default = A.slice(1).join('=')),
                  (this._tag.name = A[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = { type: 'OptionalType', expression: this._tag.type }));
            else {
              if (!E(this._title)) return !0;
              if (x(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError('Missing or invalid tag name')) return !1;
            }
          return !0;
        }),
        (_.prototype.parseDescription = function () {
          var s = D(m, l, this._last).trim();
          return s && (/^-\s+/.test(s) && (s = s.substring(2)), (this._tag.description = s)), !0;
        }),
        (_.prototype.parseCaption = function () {
          var s = D(m, l, this._last).trim(),
            c = '<caption>',
            h = '</caption>',
            w = s.indexOf(c),
            T = s.indexOf(h);
          return (
            w >= 0 && T >= 0
              ? ((this._tag.caption = s.substring(w + c.length, T).trim()),
                (this._tag.description = s.substring(T + h.length).trim()))
              : (this._tag.description = s),
            !0
          );
        }),
        (_.prototype.parseKind = function () {
          var s, c;
          return (
            (c = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (s = D(m, l, this._last).trim()),
            (this._tag.kind = s),
            !(!F(c, s) && !this.addError("Invalid kind name '%0'", s))
          );
        }),
        (_.prototype.parseAccess = function () {
          var s;
          return (
            (s = D(m, l, this._last).trim()),
            (this._tag.access = s),
            !(
              s !== 'private' &&
              s !== 'protected' &&
              s !== 'public' &&
              !this.addError("Invalid access name '%0'", s)
            )
          );
        }),
        (_.prototype.parseThis = function () {
          var s = D(m, l, this._last).trim();
          if (s && s.charAt(0) === '{') {
            var c = this.parseType();
            return (c && this._tag.type.type === 'NameExpression') ||
              this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this');
          } else return this.parseNamePath();
        }),
        (_.prototype.parseVariation = function () {
          var s, c;
          return (
            (c = D(m, l, this._last).trim()),
            (s = parseFloat(c, 10)),
            (this._tag.variation = s),
            !(isNaN(s) && !this.addError("Invalid variation '%0'", c))
          );
        }),
        (_.prototype.ensureEnd = function () {
          var A = D(m, l, this._last).trim();
          return !(A && !this.addError("Unknown content '%0'", A));
        }),
        (_.prototype.epilogue = function () {
          var s;
          return (
            (s = this._tag.description),
            !(
              B(this._title) &&
              !this._tag.type &&
              s &&
              s.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !V && !this.addError('Missing or invalid tag name'))
            )
          );
        }),
        (I = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription'],
        }),
        (_.prototype.parse = function () {
          var s, c, h, w;
          if (!this._title && !this.addError('Missing or invalid title')) return null;
          for (
            this._last = H(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  m.slice(0, this._last).replace(/\s*$/, '').length,
                ].map(b)),
              F(I, this._title)
                ? (h = I[this._title])
                : (h = ['parseType', 'parseName', 'parseDescription', 'epilogue']),
              s = 0,
              c = h.length;
            s < c;
            ++s
          )
            if (((w = h[s]), !this[w]())) return null;
          return this._tag;
        });
      function n(A) {
        var s, c, h;
        if (!Au()) return null;
        for (s = su(), c = new _(A, s), h = c.parse(); l < c._last; ) S();
        return h;
      }
      function i(A) {
        var s = '',
          c,
          h;
        for (h = !0; l < $ && ((c = m.charCodeAt(l)), !(h && c === 64)); )
          t.code.isLineTerminator(c) ? (h = !0) : h && !t.code.isWhiteSpace(c) && (h = !1),
            (s += S());
        return A ? s : s.trim();
      }
      function p(A, s) {
        var c = [],
          h,
          w,
          T,
          O,
          W;
        if (
          (s === void 0 && (s = {}),
          typeof s.unwrap == 'boolean' && s.unwrap ? (m = k(A)) : (m = A),
          (z = A),
          s.tags)
        )
          if (Array.isArray(s.tags))
            for (T = {}, O = 0, W = s.tags.length; O < W; O++)
              typeof s.tags[O] == 'string'
                ? (T[s.tags[O]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + s.tags);
          else r.throwError('Invalid "tags" parameter: ' + s.tags);
        for (
          $ = m.length,
            l = 0,
            M = 0,
            tu = s.recoverable,
            V = s.sloppy,
            nu = s.strict,
            w = i(s.preserveWhitespace);
          (h = n(s)), !!h;

        )
          (!T || T.hasOwnProperty(h.title)) && c.push(h);
        return { description: w, tags: c };
      }
      C.parse = p;
    })((a = {})),
      (u.version = r.VERSION),
      (u.parse = a.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = k),
      (u.Syntax = o(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = {
        Syntax: u.Syntax,
        parseType: e.parseType,
        parseParamType: e.parseParamType,
        stringify: e.stringify,
      });
  })();
})(bu);
const kr = hu(bu),
  { combineParameters: Mr } = __STORYBOOK_MODULE_PREVIEW_API__;
var Ou = /^['"]|['"]$/g,
  $r = (u) => u.replace(Ou, ''),
  Ur = (u) => Ou.test(u),
  Ru = (u) => {
    let e = $r(u);
    return Ur(u) || Number.isNaN(Number(e)) ? e : Number(e);
  },
  Kr = (u) => {
    switch (u.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Z(r.value);
          }),
          { name: 'object', value: e }
        );
      default:
        throw new Error(`Unknown: ${u}`);
    }
  },
  Z = (u) => {
    let { name: e, raw: r } = u,
      a = {};
    switch ((typeof r < 'u' && (a.raw = r), u.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...a, name: e };
      case 'Array':
        return { ...a, name: 'array', value: u.elements.map(Z) };
      case 'signature':
        return { ...a, ...Kr(u) };
      case 'union':
        let t;
        return (
          u.elements.every((F) => F.name === 'literal')
            ? (t = { ...a, name: 'enum', value: u.elements.map((F) => Ru(F.value)) })
            : (t = { ...a, name: e, value: u.elements.map(Z) }),
          t
        );
      case 'intersection':
        return { ...a, name: e, value: u.elements.map(Z) };
      default:
        return { ...a, name: 'other', value: e };
    }
  },
  Gr = (u) => u.name === 'literal',
  Wr = (u) => u.value.replace(/['|"]/g, ''),
  Vr = (u) => {
    switch (u.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = uu(r.value);
          }),
          { name: 'object', value: e }
        );
      default:
        throw new Error(`Unknown: ${u}`);
    }
  },
  uu = (u) => {
    let { name: e, raw: r } = u,
      a = {};
    switch ((typeof r < 'u' && (a.raw = r), u.name)) {
      case 'literal':
        return { ...a, name: 'other', value: u.value };
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...a, name: e };
      case 'Array':
        return { ...a, name: 'array', value: u.elements.map(uu) };
      case 'signature':
        return { ...a, ...Vr(u) };
      case 'union':
        return u.elements.every(Gr)
          ? { ...a, name: 'enum', value: u.elements.map(Wr) }
          : { ...a, name: e, value: u.elements.map(uu) };
      case 'intersection':
        return { ...a, name: e, value: u.elements.map(uu) };
      default:
        return { ...a, name: 'other', value: e };
    }
  },
  qr = /^\(.*\) => /,
  j = (u) => {
    let { name: e, raw: r, computed: a, value: t } = u,
      F = {};
    switch ((typeof r < 'u' && (F.raw = r), e)) {
      case 'enum': {
        let o = a ? t : t.map((d) => Ru(d.value));
        return { ...F, name: e, value: o };
      }
      case 'string':
      case 'number':
      case 'symbol':
        return { ...F, name: e };
      case 'func':
        return { ...F, name: 'function' };
      case 'bool':
      case 'boolean':
        return { ...F, name: 'boolean' };
      case 'arrayOf':
      case 'array':
        return { ...F, name: 'array', value: t && j(t) };
      case 'object':
        return { ...F, name: e };
      case 'objectOf':
        return { ...F, name: e, value: j(t) };
      case 'shape':
      case 'exact':
        let D = pr(t, (o) => j(o));
        return { ...F, name: 'object', value: D };
      case 'union':
        return { ...F, name: 'union', value: t.map((o) => j(o)) };
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((e == null ? void 0 : e.indexOf('|')) > 0)
          try {
            let x = e.split('|').map((R) => JSON.parse(R));
            return { ...F, name: 'enum', value: x };
          } catch {}
        let o = t ? `${e}(${t})` : e,
          d = qr.test(e) ? 'function' : 'other';
        return { ...F, name: d, value: o };
      }
    }
  },
  ou = (u) => {
    let { type: e, tsType: r, flowType: a } = u;
    return e != null ? j(e) : r != null ? Z(r) : a != null ? uu(a) : null;
  },
  Jr = ((u) => (
    (u.JAVASCRIPT = 'JavaScript'),
    (u.FLOW = 'Flow'),
    (u.TYPESCRIPT = 'TypeScript'),
    (u.UNKNOWN = 'Unknown'),
    u
  ))(Jr || {}),
  Qr = ['null', 'undefined'];
function lu(u) {
  return Qr.some((e) => e === u);
}
var zr = (u) => {
  if (!u) return '';
  if (typeof u == 'string') return u;
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`);
};
function Iu(u) {
  return !!u.__docgenInfo;
}
function Hr(u) {
  return u != null && Object.keys(u).length > 0;
}
function Yr(u, e) {
  return Iu(u) ? u.__docgenInfo[e] : null;
}
function jr(u) {
  return Iu(u) && zr(u.__docgenInfo.description);
}
function Xr(u) {
  return u != null && u.includes('@');
}
function Zr(u, e) {
  let r;
  try {
    r = kr.parse(u, { tags: e, sloppy: !0 });
  } catch (a) {
    throw (console.error(a), new Error('Cannot parse JSDoc tags.'));
  }
  return r;
}
var ut = { tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'] },
  et = (u, e = ut) => {
    if (!Xr(u)) return { includesJsDoc: !1, ignore: !1 };
    let r = Zr(u, e.tags),
      a = rt(r);
    return a.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : { includesJsDoc: !0, ignore: !1, description: r.description, extractedTags: a };
  };
function rt(u) {
  let e = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let r = 0; r < u.tags.length; r += 1) {
    let a = u.tags[r];
    if (a.title === 'ignore') {
      e.ignore = !0;
      break;
    } else
      switch (a.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          let t = tt(a);
          t != null && (e.params == null && (e.params = []), e.params.push(t));
          break;
        }
        case 'deprecated': {
          let t = nt(a);
          t != null && (e.deprecated = t);
          break;
        }
        case 'returns': {
          let t = Dt(a);
          t != null && (e.returns = t);
          break;
        }
      }
  }
  return e;
}
function tt(u) {
  let e = u.name;
  return e != null && e !== 'null-null'
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: () =>
          e.includes('null') ? e.replace('-null', '').replace('.null', '') : u.name,
        getTypeName: () => (u.type != null ? Q(u.type) : null),
      }
    : null;
}
function nt(u) {
  return u.title != null ? u.description : null;
}
function Dt(u) {
  return u.type != null
    ? { type: u.type, description: u.description, getTypeName: () => Q(u.type) }
    : null;
}
function Q(u) {
  return u.type === 'NameExpression'
    ? u.name
    : u.type === 'RecordType'
      ? `({${u.fields
          .map((e) => {
            if (e.value != null) {
              let r = Q(e.value);
              return `${e.key}: ${r}`;
            }
            return e.key;
          })
          .join(', ')}})`
      : u.type === 'UnionType'
        ? `(${u.elements.map(Q).join('|')})`
        : u.type === 'ArrayType'
          ? '[]'
          : u.type === 'TypeApplication' && u.expression != null && u.expression.name === 'Array'
            ? `${Q(u.applications[0])}[]`
            : u.type === 'NullableType' || u.type === 'NonNullableType' || u.type === 'OptionalType'
              ? Q(u.expression)
              : u.type === 'AllLiteral'
                ? 'any'
                : null;
}
function Lu(u) {
  return u.length > 90;
}
function at(u) {
  return u.length > 50;
}
function P(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e };
}
function ku({ name: u, value: e, elements: r, raw: a }) {
  return e ?? (r != null ? r.map(ku).join(' | ') : a ?? u);
}
function it({ name: u, raw: e, elements: r }) {
  return r != null ? P(r.map(ku).join(' | ')) : e != null ? P(e.replace(/^\|\s*/, '')) : P(u);
}
function st({ type: u, raw: e }) {
  return e != null ? P(e) : P(u);
}
function At({ type: u, raw: e }) {
  return e != null ? (Lu(e) ? P(u, e) : P(e)) : P(u);
}
function Ft(u) {
  let { type: e } = u;
  return e === 'object' ? At(u) : st(u);
}
function Ct({ name: u, raw: e }) {
  return e != null ? (Lu(e) ? P(u, e) : P(e)) : P(u);
}
function Et(u) {
  if (u == null) return null;
  switch (u.name) {
    case 'union':
      return it(u);
    case 'signature':
      return Ft(u);
    default:
      return Ct(u);
  }
}
function ot(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!lu(r)) return at(r) ? P(e.name, r) : P(r);
  }
  return null;
}
var lt = (u, e) => {
  let { flowType: r, description: a, required: t, defaultValue: F } = e;
  return { name: u, type: Et(r), required: t, description: a, defaultValue: ot(F, r) };
};
function ct({ tsType: u, required: e }) {
  if (u == null) return null;
  let r = u.name;
  return (
    e || (r = r.replace(' | undefined', '')),
    P(['Array', 'Record', 'signature'].includes(u.name) ? u.raw : r)
  );
}
function Bt({ defaultValue: u }) {
  if (u != null) {
    let { value: e } = u;
    if (!lu(e)) return P(e);
  }
  return null;
}
var pt = (u, e) => {
  let { description: r, required: a } = e;
  return { name: u, type: ct(e), required: a, description: r, defaultValue: Bt(e) };
};
function ft(u) {
  return u != null ? P(u.name) : null;
}
function ht(u) {
  let { computed: e, func: r } = u;
  return typeof e > 'u' && typeof r > 'u';
}
function mt(u) {
  return u
    ? u.name === 'string'
      ? !0
      : u.name === 'enum'
        ? Array.isArray(u.value) &&
          u.value.every(
            ({ value: e }) => typeof e == 'string' && e[0] === '"' && e[e.length - 1] === '"',
          )
        : !1
    : !1;
}
function dt(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!lu(r)) return ht(u) && mt(e) ? P(JSON.stringify(r)) : P(r);
  }
  return null;
}
function Mu(u, e, r) {
  let { description: a, required: t, defaultValue: F } = r;
  return { name: u, type: ft(e), required: t, description: a, defaultValue: dt(F, e) };
}
function iu(u, e) {
  var r;
  if (e.includesJsDoc) {
    let { description: a, extractedTags: t } = e;
    a != null && (u.description = e.description);
    let F = {
      ...t,
      params:
        (r = t == null ? void 0 : t.params) == null
          ? void 0
          : r.map((D) => ({ name: D.getPrettyName(), description: D.description })),
    };
    Object.values(F).filter(Boolean).length > 0 && (u.jsDocTags = F);
  }
  return u;
}
var yt = (u, e, r) => {
    let a = Mu(u, e.type, e);
    return (a.sbType = ou(e)), iu(a, r);
  },
  xt = (u, e, r) => {
    let a = pt(u, e);
    return (a.sbType = ou(e)), iu(a, r);
  },
  gt = (u, e, r) => {
    let a = lt(u, e);
    return (a.sbType = ou(e)), iu(a, r);
  },
  vt = (u, e, r) => {
    let a = Mu(u, { name: 'unknown' }, e);
    return iu(a, r);
  },
  $u = (u) => {
    switch (u) {
      case 'JavaScript':
        return yt;
      case 'TypeScript':
        return xt;
      case 'Flow':
        return gt;
      default:
        return vt;
    }
  },
  Uu = (u) =>
    u.type != null
      ? 'JavaScript'
      : u.flowType != null
        ? 'Flow'
        : u.tsType != null
          ? 'TypeScript'
          : 'Unknown',
  Tt = (u) => {
    let e = Uu(u[0]),
      r = $u(e);
    return u.map((a) => {
      var F;
      let t = a;
      return (
        (F = a.type) != null &&
          F.elements &&
          (t = { ...a, type: { ...a.type, value: a.type.elements } }),
        Ku(t.name, t, e, r)
      );
    });
  },
  St = (u) => {
    let e = Object.keys(u),
      r = Uu(u[e[0]]),
      a = $u(r);
    return e
      .map((t) => {
        let F = u[t];
        return F != null ? Ku(t, F, r, a) : null;
      })
      .filter(Boolean);
  },
  Rt = (u, e) => {
    let r = Yr(u, e);
    return Hr(r) ? (Array.isArray(r) ? Tt(r) : St(r)) : [];
  };
function Ku(u, e, r, a) {
  let t = et(e.description);
  return t.includesJsDoc && t.ignore
    ? null
    : { propDef: a(u, e, t), jsDocTags: t.extractedTags, docgenInfo: e, typeSystem: r };
}
function It(u) {
  return u != null && jr(u);
}
var Lt = (u) => {
    let {
        component: e,
        argTypes: r,
        parameters: { docs: a = {} },
      } = u,
      { extractArgTypes: t } = a,
      F = t && e ? t(e) : {};
    return F ? Mr(F, r) : r;
  },
  bt = 'storybook/docs',
  kt = `${bt}/snippet-rendered`,
  Nt = ((u) => ((u.AUTO = 'auto'), (u.CODE = 'code'), (u.DYNAMIC = 'dynamic'), u))(Nt || {}),
  _t = Xu,
  wt = _t(Object.getPrototypeOf, Object),
  Mt = wt;
export {
  kt as S,
  Jr as T,
  Mt as _,
  Lt as a,
  Nt as b,
  P as c,
  Rt as d,
  It as e,
  at as f,
  Yr as g,
  Iu as h,
  Fu as i,
  Lu as j,
  te as k,
  Tu as l,
  au as m,
  Su as n,
  Xe as o,
  Cr as p,
  zr as s,
  X as u,
};
