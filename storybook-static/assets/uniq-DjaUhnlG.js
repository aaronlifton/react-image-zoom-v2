import { g as v } from './_commonjsHelpers-4gQjN7DL.js';
import { a as _, b as d, c as b, d as g } from './_baseIsEqual-CFr8iVHd.js';
function x(n, e, r, t) {
  for (var s = n.length, i = r + (t ? 1 : -1); t ? i-- : ++i < s; ) if (e(n[i], i, n)) return i;
  return -1;
}
var $ = x;
function w(n) {
  return n !== n;
}
var N = w;
function S(n, e, r) {
  for (var t = r - 1, s = n.length; ++t < s; ) if (n[t] === e) return t;
  return -1;
}
var q = S,
  A = $,
  O = N,
  F = q;
function p(n, e, r) {
  return e === e ? F(n, e, r) : A(n, O, r);
}
var C = p,
  T = C;
function E(n, e) {
  var r = n == null ? 0 : n.length;
  return !!r && T(n, e, 0) > -1;
}
var U = E;
function W(n, e, r) {
  for (var t = -1, s = n == null ? 0 : n.length; ++t < s; ) if (r(e, n[t])) return !0;
  return !1;
}
var H = W;
function R() {}
var Y = R,
  c = _,
  j = Y,
  D = d,
  G = 1 / 0,
  L =
    c && 1 / D(new c([, -0]))[1] == G
      ? function (n) {
          return new c(n);
        }
      : j,
  Z = L,
  k = b,
  z = U,
  B = H,
  J = g,
  K = Z,
  M = d,
  P = 200;
function Q(n, e, r) {
  var t = -1,
    s = z,
    i = n.length,
    h = !0,
    f = [],
    a = f;
  if (r) (h = !1), (s = B);
  else if (i >= P) {
    var I = e ? null : K(n);
    if (I) return M(I);
    (h = !1), (s = J), (a = new k());
  } else a = e ? [] : f;
  n: for (; ++t < i; ) {
    var u = n[t],
      l = e ? e(u) : u;
    if (((u = r || u !== 0 ? u : 0), h && l === l)) {
      for (var o = a.length; o--; ) if (a[o] === l) continue n;
      e && a.push(l), f.push(u);
    } else s(a, l, r) || (a !== f && a.push(l), f.push(u));
  }
  return f;
}
var V = Q,
  X = V;
function m(n) {
  return n && n.length ? X(n) : [];
}
var y = m;
const rn = v(y);
export { rn as u };
