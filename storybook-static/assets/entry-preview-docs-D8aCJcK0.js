import {
  u as $n,
  b as bi,
  c as Jn,
  d as Si,
  e as Xn,
  f as Hn,
  g as Qn,
  S as Yn,
  h as te,
  j as Kn,
  k as Ur,
  l as Gr,
  m as Zn,
  n as es,
  T as Wr,
  o as ft,
  p as ts,
} from './_getPrototype-KztV_HEV.js';
import { g as pt, c as lt, a as rs, R as at, r as We } from './index-DogsOklH.js';
import { d as is } from './index-PPLHz8o0.js';
var _i = { exports: {} },
  ns = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ss = ns,
  as = ss;
function Ei() {}
function Ci() {}
Ci.resetWarningCache = Ei;
var os = function () {
  function e(i, s, a, c, f, p) {
    if (p !== as) {
      var y = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((y.name = 'Invariant Violation'), y);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ci,
    resetWarningCache: Ei,
  };
  return (r.PropTypes = r), r;
};
_i.exports = os();
var us = _i.exports;
const zr = pt(us),
  ls = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'math',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'script',
    'search',
    'section',
    'select',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
  ];
var cs = ls;
const hs = pt(cs);
var Ai = {},
  wi = {};
(function (e) {
  (function t(r) {
    var i, s, a, c, f, p;
    function y(m) {
      var x = {},
        _,
        k;
      for (_ in m)
        m.hasOwnProperty(_) &&
          ((k = m[_]), typeof k == 'object' && k !== null ? (x[_] = y(k)) : (x[_] = k));
      return x;
    }
    function g(m, x) {
      var _, k, B, R;
      for (k = m.length, B = 0; k; )
        (_ = k >>> 1), (R = B + _), x(m[R]) ? (k = _) : ((B = R + 1), (k -= _ + 1));
      return B;
    }
    (i = {
      AssignmentExpression: 'AssignmentExpression',
      AssignmentPattern: 'AssignmentPattern',
      ArrayExpression: 'ArrayExpression',
      ArrayPattern: 'ArrayPattern',
      ArrowFunctionExpression: 'ArrowFunctionExpression',
      AwaitExpression: 'AwaitExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ChainExpression: 'ChainExpression',
      ClassBody: 'ClassBody',
      ClassDeclaration: 'ClassDeclaration',
      ClassExpression: 'ClassExpression',
      ComprehensionBlock: 'ComprehensionBlock',
      ComprehensionExpression: 'ComprehensionExpression',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DebuggerStatement: 'DebuggerStatement',
      DirectiveStatement: 'DirectiveStatement',
      DoWhileStatement: 'DoWhileStatement',
      EmptyStatement: 'EmptyStatement',
      ExportAllDeclaration: 'ExportAllDeclaration',
      ExportDefaultDeclaration: 'ExportDefaultDeclaration',
      ExportNamedDeclaration: 'ExportNamedDeclaration',
      ExportSpecifier: 'ExportSpecifier',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForInStatement: 'ForInStatement',
      ForOfStatement: 'ForOfStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      GeneratorExpression: 'GeneratorExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      ImportExpression: 'ImportExpression',
      ImportDeclaration: 'ImportDeclaration',
      ImportDefaultSpecifier: 'ImportDefaultSpecifier',
      ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
      ImportSpecifier: 'ImportSpecifier',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      MetaProperty: 'MetaProperty',
      MethodDefinition: 'MethodDefinition',
      ModuleSpecifier: 'ModuleSpecifier',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      ObjectPattern: 'ObjectPattern',
      PrivateIdentifier: 'PrivateIdentifier',
      Program: 'Program',
      Property: 'Property',
      PropertyDefinition: 'PropertyDefinition',
      RestElement: 'RestElement',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SpreadElement: 'SpreadElement',
      Super: 'Super',
      SwitchStatement: 'SwitchStatement',
      SwitchCase: 'SwitchCase',
      TaggedTemplateExpression: 'TaggedTemplateExpression',
      TemplateElement: 'TemplateElement',
      TemplateLiteral: 'TemplateLiteral',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement',
      YieldExpression: 'YieldExpression',
    }),
      (a = {
        AssignmentExpression: ['left', 'right'],
        AssignmentPattern: ['left', 'right'],
        ArrayExpression: ['elements'],
        ArrayPattern: ['elements'],
        ArrowFunctionExpression: ['params', 'body'],
        AwaitExpression: ['argument'],
        BlockStatement: ['body'],
        BinaryExpression: ['left', 'right'],
        BreakStatement: ['label'],
        CallExpression: ['callee', 'arguments'],
        CatchClause: ['param', 'body'],
        ChainExpression: ['expression'],
        ClassBody: ['body'],
        ClassDeclaration: ['id', 'superClass', 'body'],
        ClassExpression: ['id', 'superClass', 'body'],
        ComprehensionBlock: ['left', 'right'],
        ComprehensionExpression: ['blocks', 'filter', 'body'],
        ConditionalExpression: ['test', 'consequent', 'alternate'],
        ContinueStatement: ['label'],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ['body', 'test'],
        EmptyStatement: [],
        ExportAllDeclaration: ['source'],
        ExportDefaultDeclaration: ['declaration'],
        ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
        ExportSpecifier: ['exported', 'local'],
        ExpressionStatement: ['expression'],
        ForStatement: ['init', 'test', 'update', 'body'],
        ForInStatement: ['left', 'right', 'body'],
        ForOfStatement: ['left', 'right', 'body'],
        FunctionDeclaration: ['id', 'params', 'body'],
        FunctionExpression: ['id', 'params', 'body'],
        GeneratorExpression: ['blocks', 'filter', 'body'],
        Identifier: [],
        IfStatement: ['test', 'consequent', 'alternate'],
        ImportExpression: ['source'],
        ImportDeclaration: ['specifiers', 'source'],
        ImportDefaultSpecifier: ['local'],
        ImportNamespaceSpecifier: ['local'],
        ImportSpecifier: ['imported', 'local'],
        Literal: [],
        LabeledStatement: ['label', 'body'],
        LogicalExpression: ['left', 'right'],
        MemberExpression: ['object', 'property'],
        MetaProperty: ['meta', 'property'],
        MethodDefinition: ['key', 'value'],
        ModuleSpecifier: [],
        NewExpression: ['callee', 'arguments'],
        ObjectExpression: ['properties'],
        ObjectPattern: ['properties'],
        PrivateIdentifier: [],
        Program: ['body'],
        Property: ['key', 'value'],
        PropertyDefinition: ['key', 'value'],
        RestElement: ['argument'],
        ReturnStatement: ['argument'],
        SequenceExpression: ['expressions'],
        SpreadElement: ['argument'],
        Super: [],
        SwitchStatement: ['discriminant', 'cases'],
        SwitchCase: ['test', 'consequent'],
        TaggedTemplateExpression: ['tag', 'quasi'],
        TemplateElement: [],
        TemplateLiteral: ['quasis', 'expressions'],
        ThisExpression: [],
        ThrowStatement: ['argument'],
        TryStatement: ['block', 'handler', 'finalizer'],
        UnaryExpression: ['argument'],
        UpdateExpression: ['argument'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id', 'init'],
        WhileStatement: ['test', 'body'],
        WithStatement: ['object', 'body'],
        YieldExpression: ['argument'],
      }),
      (c = {}),
      (f = {}),
      (p = {}),
      (s = { Break: c, Skip: f, Remove: p });
    function b(m, x) {
      (this.parent = m), (this.key = x);
    }
    (b.prototype.replace = function (x) {
      this.parent[this.key] = x;
    }),
      (b.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function E(m, x, _, k) {
      (this.node = m), (this.path = x), (this.wrap = _), (this.ref = k);
    }
    function S() {}
    (S.prototype.path = function () {
      var x, _, k, B, R, G;
      function q(D, H) {
        if (Array.isArray(H)) for (k = 0, B = H.length; k < B; ++k) D.push(H[k]);
        else D.push(H);
      }
      if (!this.__current.path) return null;
      for (R = [], x = 2, _ = this.__leavelist.length; x < _; ++x)
        (G = this.__leavelist[x]), q(R, G.path);
      return q(R, this.__current.path), R;
    }),
      (S.prototype.type = function () {
        var m = this.current();
        return m.type || this.__current.wrap;
      }),
      (S.prototype.parents = function () {
        var x, _, k;
        for (k = [], x = 1, _ = this.__leavelist.length; x < _; ++x)
          k.push(this.__leavelist[x].node);
        return k;
      }),
      (S.prototype.current = function () {
        return this.__current.node;
      }),
      (S.prototype.__execute = function (x, _) {
        var k, B;
        return (
          (B = void 0),
          (k = this.__current),
          (this.__current = _),
          (this.__state = null),
          x && (B = x.call(this, _.node, this.__leavelist[this.__leavelist.length - 1].node)),
          (this.__current = k),
          B
        );
      }),
      (S.prototype.notify = function (x) {
        this.__state = x;
      }),
      (S.prototype.skip = function () {
        this.notify(f);
      }),
      (S.prototype.break = function () {
        this.notify(c);
      }),
      (S.prototype.remove = function () {
        this.notify(p);
      }),
      (S.prototype.__initialize = function (m, x) {
        (this.visitor = x),
          (this.root = m),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          x.fallback === 'iteration'
            ? (this.__fallback = Object.keys)
            : typeof x.fallback == 'function' && (this.__fallback = x.fallback),
          (this.__keys = a),
          x.keys && (this.__keys = Object.assign(Object.create(this.__keys), x.keys));
      });
    function C(m) {
      return m == null ? !1 : typeof m == 'object' && typeof m.type == 'string';
    }
    function v(m, x) {
      return (m === i.ObjectExpression || m === i.ObjectPattern) && x === 'properties';
    }
    function P(m, x) {
      for (var _ = m.length - 1; _ >= 0; --_) if (m[_].node === x) return !0;
      return !1;
    }
    (S.prototype.traverse = function (x, _) {
      var k, B, R, G, q, D, H, ne, ue, ie, Q, xe;
      for (
        this.__initialize(x, _),
          xe = {},
          k = this.__worklist,
          B = this.__leavelist,
          k.push(new E(x, null, null, null)),
          B.push(new E(null, null, null, null));
        k.length;

      ) {
        if (((R = k.pop()), R === xe)) {
          if (((R = B.pop()), (D = this.__execute(_.leave, R)), this.__state === c || D === c))
            return;
          continue;
        }
        if (R.node) {
          if (((D = this.__execute(_.enter, R)), this.__state === c || D === c)) return;
          if ((k.push(xe), B.push(R), this.__state === f || D === f)) continue;
          if (((G = R.node), (q = G.type || R.wrap), (ie = this.__keys[q]), !ie))
            if (this.__fallback) ie = this.__fallback(G);
            else throw new Error('Unknown node type ' + q + '.');
          for (ne = ie.length; (ne -= 1) >= 0; )
            if (((H = ie[ne]), (Q = G[H]), !!Q)) {
              if (Array.isArray(Q)) {
                for (ue = Q.length; (ue -= 1) >= 0; )
                  if (Q[ue] && !P(B, Q[ue])) {
                    if (v(q, ie[ne])) R = new E(Q[ue], [H, ue], 'Property', null);
                    else if (C(Q[ue])) R = new E(Q[ue], [H, ue], null, null);
                    else continue;
                    k.push(R);
                  }
              } else if (C(Q)) {
                if (P(B, Q)) continue;
                k.push(new E(Q, H, null, null));
              }
            }
        }
      }
    }),
      (S.prototype.replace = function (x, _) {
        var k, B, R, G, q, D, H, ne, ue, ie, Q, xe, Te;
        function Je(M) {
          var Ve, xt, Fe, ee;
          if (M.ref.remove()) {
            for (xt = M.ref.key, ee = M.ref.parent, Ve = k.length; Ve--; )
              if (((Fe = k[Ve]), Fe.ref && Fe.ref.parent === ee)) {
                if (Fe.ref.key < xt) break;
                --Fe.ref.key;
              }
          }
        }
        for (
          this.__initialize(x, _),
            Q = {},
            k = this.__worklist,
            B = this.__leavelist,
            xe = { root: x },
            D = new E(x, null, null, new b(xe, 'root')),
            k.push(D),
            B.push(D);
          k.length;

        ) {
          if (((D = k.pop()), D === Q)) {
            if (
              ((D = B.pop()),
              (q = this.__execute(_.leave, D)),
              q !== void 0 && q !== c && q !== f && q !== p && D.ref.replace(q),
              (this.__state === p || q === p) && Je(D),
              this.__state === c || q === c)
            )
              return xe.root;
            continue;
          }
          if (
            ((q = this.__execute(_.enter, D)),
            q !== void 0 && q !== c && q !== f && q !== p && (D.ref.replace(q), (D.node = q)),
            (this.__state === p || q === p) && (Je(D), (D.node = null)),
            this.__state === c || q === c)
          )
            return xe.root;
          if (((R = D.node), !!R && (k.push(Q), B.push(D), !(this.__state === f || q === f)))) {
            if (((G = R.type || D.wrap), (ue = this.__keys[G]), !ue))
              if (this.__fallback) ue = this.__fallback(R);
              else throw new Error('Unknown node type ' + G + '.');
            for (H = ue.length; (H -= 1) >= 0; )
              if (((Te = ue[H]), (ie = R[Te]), !!ie))
                if (Array.isArray(ie)) {
                  for (ne = ie.length; (ne -= 1) >= 0; )
                    if (ie[ne]) {
                      if (v(G, ue[H])) D = new E(ie[ne], [Te, ne], 'Property', new b(ie, ne));
                      else if (C(ie[ne])) D = new E(ie[ne], [Te, ne], null, new b(ie, ne));
                      else continue;
                      k.push(D);
                    }
                } else C(ie) && k.push(new E(ie, Te, null, new b(R, Te)));
          }
        }
        return xe.root;
      });
    function O(m, x) {
      var _ = new S();
      return _.traverse(m, x);
    }
    function L(m, x) {
      var _ = new S();
      return _.replace(m, x);
    }
    function V(m, x) {
      var _;
      return (
        (_ = g(x, function (B) {
          return B.range[0] > m.range[0];
        })),
        (m.extendedRange = [m.range[0], m.range[1]]),
        _ !== x.length && (m.extendedRange[1] = x[_].range[0]),
        (_ -= 1),
        _ >= 0 && (m.extendedRange[0] = x[_].range[1]),
        m
      );
    }
    function A(m, x, _) {
      var k = [],
        B,
        R,
        G,
        q;
      if (!m.range) throw new Error('attachComments needs range information');
      if (!_.length) {
        if (x.length) {
          for (G = 0, R = x.length; G < R; G += 1)
            (B = y(x[G])), (B.extendedRange = [0, m.range[0]]), k.push(B);
          m.leadingComments = k;
        }
        return m;
      }
      for (G = 0, R = x.length; G < R; G += 1) k.push(V(y(x[G]), _));
      return (
        (q = 0),
        O(m, {
          enter: function (D) {
            for (var H; q < k.length && ((H = k[q]), !(H.extendedRange[1] > D.range[0])); )
              H.extendedRange[1] === D.range[0]
                ? (D.leadingComments || (D.leadingComments = []),
                  D.leadingComments.push(H),
                  k.splice(q, 1))
                : (q += 1);
            if (q === k.length) return s.Break;
            if (k[q].extendedRange[0] > D.range[1]) return s.Skip;
          },
        }),
        (q = 0),
        O(m, {
          leave: function (D) {
            for (var H; q < k.length && ((H = k[q]), !(D.range[1] < H.extendedRange[0])); )
              D.range[1] === H.extendedRange[0]
                ? (D.trailingComments || (D.trailingComments = []),
                  D.trailingComments.push(H),
                  k.splice(q, 1))
                : (q += 1);
            if (q === k.length) return s.Break;
            if (k[q].extendedRange[0] > D.range[1]) return s.Skip;
          },
        }),
        m
      );
    }
    return (
      (r.Syntax = i),
      (r.traverse = O),
      (r.replace = L),
      (r.attachComments = A),
      (r.VisitorKeys = a),
      (r.VisitorOption = s),
      (r.Controller = S),
      (r.cloneEnvironment = function () {
        return t({});
      }),
      r
    );
  })(e);
})(wi);
var it = {},
  Kt = {},
  Et = {},
  Ct = {},
  $r;
function fs() {
  if ($r) return Ct;
  $r = 1;
  var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  return (
    (Ct.encode = function (t) {
      if (0 <= t && t < e.length) return e[t];
      throw new TypeError('Must be between 0 and 63: ' + t);
    }),
    (Ct.decode = function (t) {
      var r = 65,
        i = 90,
        s = 97,
        a = 122,
        c = 48,
        f = 57,
        p = 43,
        y = 47,
        g = 26,
        b = 52;
      return r <= t && t <= i
        ? t - r
        : s <= t && t <= a
          ? t - s + g
          : c <= t && t <= f
            ? t - c + b
            : t == p
              ? 62
              : t == y
                ? 63
                : -1;
    }),
    Ct
  );
}
var Jr;
function ki() {
  if (Jr) return Et;
  Jr = 1;
  var e = fs(),
    t = 5,
    r = 1 << t,
    i = r - 1,
    s = r;
  function a(f) {
    return f < 0 ? (-f << 1) + 1 : (f << 1) + 0;
  }
  function c(f) {
    var p = (f & 1) === 1,
      y = f >> 1;
    return p ? -y : y;
  }
  return (
    (Et.encode = function (p) {
      var y = '',
        g,
        b = a(p);
      do (g = b & i), (b >>>= t), b > 0 && (g |= s), (y += e.encode(g));
      while (b > 0);
      return y;
    }),
    (Et.decode = function (p, y, g) {
      var b = p.length,
        E = 0,
        S = 0,
        C,
        v;
      do {
        if (y >= b) throw new Error('Expected more digits in base 64 VLQ value.');
        if (((v = e.decode(p.charCodeAt(y++))), v === -1))
          throw new Error('Invalid base64 digit: ' + p.charAt(y - 1));
        (C = !!(v & s)), (v &= i), (E = E + (v << S)), (S += t);
      } while (C);
      (g.value = c(E)), (g.rest = y);
    }),
    Et
  );
}
var Zt = {},
  Xr;
function dt() {
  return (
    Xr ||
      ((Xr = 1),
      (function (e) {
        function t(A, m, x) {
          if (m in A) return A[m];
          if (arguments.length === 3) return x;
          throw new Error('"' + m + '" is a required argument.');
        }
        e.getArg = t;
        var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          i = /^data:.+\,.+$/;
        function s(A) {
          var m = A.match(r);
          return m ? { scheme: m[1], auth: m[2], host: m[3], port: m[4], path: m[5] } : null;
        }
        e.urlParse = s;
        function a(A) {
          var m = '';
          return (
            A.scheme && (m += A.scheme + ':'),
            (m += '//'),
            A.auth && (m += A.auth + '@'),
            A.host && (m += A.host),
            A.port && (m += ':' + A.port),
            A.path && (m += A.path),
            m
          );
        }
        e.urlGenerate = a;
        function c(A) {
          var m = A,
            x = s(A);
          if (x) {
            if (!x.path) return A;
            m = x.path;
          }
          for (var _ = e.isAbsolute(m), k = m.split(/\/+/), B, R = 0, G = k.length - 1; G >= 0; G--)
            (B = k[G]),
              B === '.'
                ? k.splice(G, 1)
                : B === '..'
                  ? R++
                  : R > 0 && (B === '' ? (k.splice(G + 1, R), (R = 0)) : (k.splice(G, 2), R--));
          return (m = k.join('/')), m === '' && (m = _ ? '/' : '.'), x ? ((x.path = m), a(x)) : m;
        }
        e.normalize = c;
        function f(A, m) {
          A === '' && (A = '.'), m === '' && (m = '.');
          var x = s(m),
            _ = s(A);
          if ((_ && (A = _.path || '/'), x && !x.scheme)) return _ && (x.scheme = _.scheme), a(x);
          if (x || m.match(i)) return m;
          if (_ && !_.host && !_.path) return (_.host = m), a(_);
          var k = m.charAt(0) === '/' ? m : c(A.replace(/\/+$/, '') + '/' + m);
          return _ ? ((_.path = k), a(_)) : k;
        }
        (e.join = f),
          (e.isAbsolute = function (A) {
            return A.charAt(0) === '/' || r.test(A);
          });
        function p(A, m) {
          A === '' && (A = '.'), (A = A.replace(/\/$/, ''));
          for (var x = 0; m.indexOf(A + '/') !== 0; ) {
            var _ = A.lastIndexOf('/');
            if (_ < 0 || ((A = A.slice(0, _)), A.match(/^([^\/]+:\/)?\/*$/))) return m;
            ++x;
          }
          return Array(x + 1).join('../') + m.substr(A.length + 1);
        }
        e.relative = p;
        var y = (function () {
          var A = Object.create(null);
          return !('__proto__' in A);
        })();
        function g(A) {
          return A;
        }
        function b(A) {
          return S(A) ? '$' + A : A;
        }
        e.toSetString = y ? g : b;
        function E(A) {
          return S(A) ? A.slice(1) : A;
        }
        e.fromSetString = y ? g : E;
        function S(A) {
          if (!A) return !1;
          var m = A.length;
          if (
            m < 9 ||
            A.charCodeAt(m - 1) !== 95 ||
            A.charCodeAt(m - 2) !== 95 ||
            A.charCodeAt(m - 3) !== 111 ||
            A.charCodeAt(m - 4) !== 116 ||
            A.charCodeAt(m - 5) !== 111 ||
            A.charCodeAt(m - 6) !== 114 ||
            A.charCodeAt(m - 7) !== 112 ||
            A.charCodeAt(m - 8) !== 95 ||
            A.charCodeAt(m - 9) !== 95
          )
            return !1;
          for (var x = m - 10; x >= 0; x--) if (A.charCodeAt(x) !== 36) return !1;
          return !0;
        }
        function C(A, m, x) {
          var _ = P(A.source, m.source);
          return _ !== 0 ||
            ((_ = A.originalLine - m.originalLine), _ !== 0) ||
            ((_ = A.originalColumn - m.originalColumn), _ !== 0 || x) ||
            ((_ = A.generatedColumn - m.generatedColumn), _ !== 0) ||
            ((_ = A.generatedLine - m.generatedLine), _ !== 0)
            ? _
            : P(A.name, m.name);
        }
        e.compareByOriginalPositions = C;
        function v(A, m, x) {
          var _ = A.generatedLine - m.generatedLine;
          return _ !== 0 ||
            ((_ = A.generatedColumn - m.generatedColumn), _ !== 0 || x) ||
            ((_ = P(A.source, m.source)), _ !== 0) ||
            ((_ = A.originalLine - m.originalLine), _ !== 0) ||
            ((_ = A.originalColumn - m.originalColumn), _ !== 0)
            ? _
            : P(A.name, m.name);
        }
        e.compareByGeneratedPositionsDeflated = v;
        function P(A, m) {
          return A === m ? 0 : A === null ? 1 : m === null ? -1 : A > m ? 1 : -1;
        }
        function O(A, m) {
          var x = A.generatedLine - m.generatedLine;
          return x !== 0 ||
            ((x = A.generatedColumn - m.generatedColumn), x !== 0) ||
            ((x = P(A.source, m.source)), x !== 0) ||
            ((x = A.originalLine - m.originalLine), x !== 0) ||
            ((x = A.originalColumn - m.originalColumn), x !== 0)
            ? x
            : P(A.name, m.name);
        }
        e.compareByGeneratedPositionsInflated = O;
        function L(A) {
          return JSON.parse(A.replace(/^\)]}'[^\n]*\n/, ''));
        }
        e.parseSourceMapInput = L;
        function V(A, m, x) {
          if (
            ((m = m || ''),
            A && (A[A.length - 1] !== '/' && m[0] !== '/' && (A += '/'), (m = A + m)),
            x)
          ) {
            var _ = s(x);
            if (!_) throw new Error('sourceMapURL could not be parsed');
            if (_.path) {
              var k = _.path.lastIndexOf('/');
              k >= 0 && (_.path = _.path.substring(0, k + 1));
            }
            m = f(a(_), m);
          }
          return c(m);
        }
        e.computeSourceURL = V;
      })(Zt)),
    Zt
  );
}
var er = {},
  Hr;
function Ti() {
  if (Hr) return er;
  Hr = 1;
  var e = dt(),
    t = Object.prototype.hasOwnProperty,
    r = typeof Map < 'u';
  function i() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (i.fromArray = function (a, c) {
      for (var f = new i(), p = 0, y = a.length; p < y; p++) f.add(a[p], c);
      return f;
    }),
    (i.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (i.prototype.add = function (a, c) {
      var f = r ? a : e.toSetString(a),
        p = r ? this.has(a) : t.call(this._set, f),
        y = this._array.length;
      (!p || c) && this._array.push(a), p || (r ? this._set.set(a, y) : (this._set[f] = y));
    }),
    (i.prototype.has = function (a) {
      if (r) return this._set.has(a);
      var c = e.toSetString(a);
      return t.call(this._set, c);
    }),
    (i.prototype.indexOf = function (a) {
      if (r) {
        var c = this._set.get(a);
        if (c >= 0) return c;
      } else {
        var f = e.toSetString(a);
        if (t.call(this._set, f)) return this._set[f];
      }
      throw new Error('"' + a + '" is not in the set.');
    }),
    (i.prototype.at = function (a) {
      if (a >= 0 && a < this._array.length) return this._array[a];
      throw new Error('No element indexed by ' + a);
    }),
    (i.prototype.toArray = function () {
      return this._array.slice();
    }),
    (er.ArraySet = i),
    er
  );
}
var tr = {},
  Qr;
function ps() {
  if (Qr) return tr;
  Qr = 1;
  var e = dt();
  function t(i, s) {
    var a = i.generatedLine,
      c = s.generatedLine,
      f = i.generatedColumn,
      p = s.generatedColumn;
    return c > a || (c == a && p >= f) || e.compareByGeneratedPositionsInflated(i, s) <= 0;
  }
  function r() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (s, a) {
      this._array.forEach(s, a);
    }),
    (r.prototype.add = function (s) {
      t(this._last, s)
        ? ((this._last = s), this._array.push(s))
        : ((this._sorted = !1), this._array.push(s));
    }),
    (r.prototype.toArray = function () {
      return (
        this._sorted ||
          (this._array.sort(e.compareByGeneratedPositionsInflated), (this._sorted = !0)),
        this._array
      );
    }),
    (tr.MappingList = r),
    tr
  );
}
var Yr;
function Pi() {
  if (Yr) return Kt;
  Yr = 1;
  var e = ki(),
    t = dt(),
    r = Ti().ArraySet,
    i = ps().MappingList;
  function s(a) {
    a || (a = {}),
      (this._file = t.getArg(a, 'file', null)),
      (this._sourceRoot = t.getArg(a, 'sourceRoot', null)),
      (this._skipValidation = t.getArg(a, 'skipValidation', !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new i()),
      (this._sourcesContents = null);
  }
  return (
    (s.prototype._version = 3),
    (s.fromSourceMap = function (c) {
      var f = c.sourceRoot,
        p = new s({ file: c.file, sourceRoot: f });
      return (
        c.eachMapping(function (y) {
          var g = { generated: { line: y.generatedLine, column: y.generatedColumn } };
          y.source != null &&
            ((g.source = y.source),
            f != null && (g.source = t.relative(f, g.source)),
            (g.original = { line: y.originalLine, column: y.originalColumn }),
            y.name != null && (g.name = y.name)),
            p.addMapping(g);
        }),
        c.sources.forEach(function (y) {
          var g = y;
          f !== null && (g = t.relative(f, y)), p._sources.has(g) || p._sources.add(g);
          var b = c.sourceContentFor(y);
          b != null && p.setSourceContent(y, b);
        }),
        p
      );
    }),
    (s.prototype.addMapping = function (c) {
      var f = t.getArg(c, 'generated'),
        p = t.getArg(c, 'original', null),
        y = t.getArg(c, 'source', null),
        g = t.getArg(c, 'name', null);
      this._skipValidation || this._validateMapping(f, p, y, g),
        y != null && ((y = String(y)), this._sources.has(y) || this._sources.add(y)),
        g != null && ((g = String(g)), this._names.has(g) || this._names.add(g)),
        this._mappings.add({
          generatedLine: f.line,
          generatedColumn: f.column,
          originalLine: p != null && p.line,
          originalColumn: p != null && p.column,
          source: y,
          name: g,
        });
    }),
    (s.prototype.setSourceContent = function (c, f) {
      var p = c;
      this._sourceRoot != null && (p = t.relative(this._sourceRoot, p)),
        f != null
          ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
            (this._sourcesContents[t.toSetString(p)] = f))
          : this._sourcesContents &&
            (delete this._sourcesContents[t.toSetString(p)],
            Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
    }),
    (s.prototype.applySourceMap = function (c, f, p) {
      var y = f;
      if (f == null) {
        if (c.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
          );
        y = c.file;
      }
      var g = this._sourceRoot;
      g != null && (y = t.relative(g, y));
      var b = new r(),
        E = new r();
      this._mappings.unsortedForEach(function (S) {
        if (S.source === y && S.originalLine != null) {
          var C = c.originalPositionFor({ line: S.originalLine, column: S.originalColumn });
          C.source != null &&
            ((S.source = C.source),
            p != null && (S.source = t.join(p, S.source)),
            g != null && (S.source = t.relative(g, S.source)),
            (S.originalLine = C.line),
            (S.originalColumn = C.column),
            C.name != null && (S.name = C.name));
        }
        var v = S.source;
        v != null && !b.has(v) && b.add(v);
        var P = S.name;
        P != null && !E.has(P) && E.add(P);
      }, this),
        (this._sources = b),
        (this._names = E),
        c.sources.forEach(function (S) {
          var C = c.sourceContentFor(S);
          C != null &&
            (p != null && (S = t.join(p, S)),
            g != null && (S = t.relative(g, S)),
            this.setSourceContent(S, C));
        }, this);
    }),
    (s.prototype._validateMapping = function (c, f, p, y) {
      if (f && typeof f.line != 'number' && typeof f.column != 'number')
        throw new Error(
          'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.',
        );
      if (!(c && 'line' in c && 'column' in c && c.line > 0 && c.column >= 0 && !f && !p && !y)) {
        if (
          c &&
          'line' in c &&
          'column' in c &&
          f &&
          'line' in f &&
          'column' in f &&
          c.line > 0 &&
          c.column >= 0 &&
          f.line > 0 &&
          f.column >= 0 &&
          p
        )
          return;
        throw new Error(
          'Invalid mapping: ' + JSON.stringify({ generated: c, source: p, original: f, name: y }),
        );
      }
    }),
    (s.prototype._serializeMappings = function () {
      for (
        var c = 0,
          f = 1,
          p = 0,
          y = 0,
          g = 0,
          b = 0,
          E = '',
          S,
          C,
          v,
          P,
          O = this._mappings.toArray(),
          L = 0,
          V = O.length;
        L < V;
        L++
      ) {
        if (((C = O[L]), (S = ''), C.generatedLine !== f))
          for (c = 0; C.generatedLine !== f; ) (S += ';'), f++;
        else if (L > 0) {
          if (!t.compareByGeneratedPositionsInflated(C, O[L - 1])) continue;
          S += ',';
        }
        (S += e.encode(C.generatedColumn - c)),
          (c = C.generatedColumn),
          C.source != null &&
            ((P = this._sources.indexOf(C.source)),
            (S += e.encode(P - b)),
            (b = P),
            (S += e.encode(C.originalLine - 1 - y)),
            (y = C.originalLine - 1),
            (S += e.encode(C.originalColumn - p)),
            (p = C.originalColumn),
            C.name != null && ((v = this._names.indexOf(C.name)), (S += e.encode(v - g)), (g = v))),
          (E += S);
      }
      return E;
    }),
    (s.prototype._generateSourcesContent = function (c, f) {
      return c.map(function (p) {
        if (!this._sourcesContents) return null;
        f != null && (p = t.relative(f, p));
        var y = t.toSetString(p);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, y)
          ? this._sourcesContents[y]
          : null;
      }, this);
    }),
    (s.prototype.toJSON = function () {
      var c = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (c.file = this._file),
        this._sourceRoot != null && (c.sourceRoot = this._sourceRoot),
        this._sourcesContents &&
          (c.sourcesContent = this._generateSourcesContent(c.sources, c.sourceRoot)),
        c
      );
    }),
    (s.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Kt.SourceMapGenerator = s),
    Kt
  );
}
var nt = {},
  rr = {},
  Kr;
function ds() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function t(r, i, s, a, c, f) {
          var p = Math.floor((i - r) / 2) + r,
            y = c(s, a[p], !0);
          return y === 0
            ? p
            : y > 0
              ? i - p > 1
                ? t(p, i, s, a, c, f)
                : f == e.LEAST_UPPER_BOUND
                  ? i < a.length
                    ? i
                    : -1
                  : p
              : p - r > 1
                ? t(r, p, s, a, c, f)
                : f == e.LEAST_UPPER_BOUND
                  ? p
                  : r < 0
                    ? -1
                    : r;
        }
        e.search = function (i, s, a, c) {
          if (s.length === 0) return -1;
          var f = t(-1, s.length, i, s, a, c || e.GREATEST_LOWER_BOUND);
          if (f < 0) return -1;
          for (; f - 1 >= 0 && a(s[f], s[f - 1], !0) === 0; ) --f;
          return f;
        };
      })(rr)),
    rr
  );
}
var ir = {},
  Zr;
function ms() {
  if (Zr) return ir;
  Zr = 1;
  function e(i, s, a) {
    var c = i[s];
    (i[s] = i[a]), (i[a] = c);
  }
  function t(i, s) {
    return Math.round(i + Math.random() * (s - i));
  }
  function r(i, s, a, c) {
    if (a < c) {
      var f = t(a, c),
        p = a - 1;
      e(i, f, c);
      for (var y = i[c], g = a; g < c; g++) s(i[g], y) <= 0 && ((p += 1), e(i, p, g));
      e(i, p + 1, g);
      var b = p + 1;
      r(i, s, a, b - 1), r(i, s, b + 1, c);
    }
  }
  return (
    (ir.quickSort = function (i, s) {
      r(i, s, 0, i.length - 1);
    }),
    ir
  );
}
var ei;
function gs() {
  if (ei) return nt;
  ei = 1;
  var e = dt(),
    t = ds(),
    r = Ti().ArraySet,
    i = ki(),
    s = ms().quickSort;
  function a(y, g) {
    var b = y;
    return (
      typeof y == 'string' && (b = e.parseSourceMapInput(y)),
      b.sections != null ? new p(b, g) : new c(b, g)
    );
  }
  (a.fromSourceMap = function (y, g) {
    return c.fromSourceMap(y, g);
  }),
    (a.prototype._version = 3),
    (a.prototype.__generatedMappings = null),
    Object.defineProperty(a.prototype, '_generatedMappings', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
          this.__generatedMappings
        );
      },
    }),
    (a.prototype.__originalMappings = null),
    Object.defineProperty(a.prototype, '_originalMappings', {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
          this.__originalMappings
        );
      },
    }),
    (a.prototype._charIsMappingSeparator = function (g, b) {
      var E = g.charAt(b);
      return E === ';' || E === ',';
    }),
    (a.prototype._parseMappings = function (g, b) {
      throw new Error('Subclasses must implement _parseMappings');
    }),
    (a.GENERATED_ORDER = 1),
    (a.ORIGINAL_ORDER = 2),
    (a.GREATEST_LOWER_BOUND = 1),
    (a.LEAST_UPPER_BOUND = 2),
    (a.prototype.eachMapping = function (g, b, E) {
      var S = b || null,
        C = E || a.GENERATED_ORDER,
        v;
      switch (C) {
        case a.GENERATED_ORDER:
          v = this._generatedMappings;
          break;
        case a.ORIGINAL_ORDER:
          v = this._originalMappings;
          break;
        default:
          throw new Error('Unknown order of iteration.');
      }
      var P = this.sourceRoot;
      v.map(function (O) {
        var L = O.source === null ? null : this._sources.at(O.source);
        return (
          (L = e.computeSourceURL(P, L, this._sourceMapURL)),
          {
            source: L,
            generatedLine: O.generatedLine,
            generatedColumn: O.generatedColumn,
            originalLine: O.originalLine,
            originalColumn: O.originalColumn,
            name: O.name === null ? null : this._names.at(O.name),
          }
        );
      }, this).forEach(g, S);
    }),
    (a.prototype.allGeneratedPositionsFor = function (g) {
      var b = e.getArg(g, 'line'),
        E = {
          source: e.getArg(g, 'source'),
          originalLine: b,
          originalColumn: e.getArg(g, 'column', 0),
        };
      if (((E.source = this._findSourceIndex(E.source)), E.source < 0)) return [];
      var S = [],
        C = this._findMapping(
          E,
          this._originalMappings,
          'originalLine',
          'originalColumn',
          e.compareByOriginalPositions,
          t.LEAST_UPPER_BOUND,
        );
      if (C >= 0) {
        var v = this._originalMappings[C];
        if (g.column === void 0)
          for (var P = v.originalLine; v && v.originalLine === P; )
            S.push({
              line: e.getArg(v, 'generatedLine', null),
              column: e.getArg(v, 'generatedColumn', null),
              lastColumn: e.getArg(v, 'lastGeneratedColumn', null),
            }),
              (v = this._originalMappings[++C]);
        else
          for (var O = v.originalColumn; v && v.originalLine === b && v.originalColumn == O; )
            S.push({
              line: e.getArg(v, 'generatedLine', null),
              column: e.getArg(v, 'generatedColumn', null),
              lastColumn: e.getArg(v, 'lastGeneratedColumn', null),
            }),
              (v = this._originalMappings[++C]);
      }
      return S;
    }),
    (nt.SourceMapConsumer = a);
  function c(y, g) {
    var b = y;
    typeof y == 'string' && (b = e.parseSourceMapInput(y));
    var E = e.getArg(b, 'version'),
      S = e.getArg(b, 'sources'),
      C = e.getArg(b, 'names', []),
      v = e.getArg(b, 'sourceRoot', null),
      P = e.getArg(b, 'sourcesContent', null),
      O = e.getArg(b, 'mappings'),
      L = e.getArg(b, 'file', null);
    if (E != this._version) throw new Error('Unsupported version: ' + E);
    v && (v = e.normalize(v)),
      (S = S.map(String)
        .map(e.normalize)
        .map(function (V) {
          return v && e.isAbsolute(v) && e.isAbsolute(V) ? e.relative(v, V) : V;
        })),
      (this._names = r.fromArray(C.map(String), !0)),
      (this._sources = r.fromArray(S, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (V) {
        return e.computeSourceURL(v, V, g);
      })),
      (this.sourceRoot = v),
      (this.sourcesContent = P),
      (this._mappings = O),
      (this._sourceMapURL = g),
      (this.file = L);
  }
  (c.prototype = Object.create(a.prototype)),
    (c.prototype.consumer = a),
    (c.prototype._findSourceIndex = function (y) {
      var g = y;
      if ((this.sourceRoot != null && (g = e.relative(this.sourceRoot, g)), this._sources.has(g)))
        return this._sources.indexOf(g);
      var b;
      for (b = 0; b < this._absoluteSources.length; ++b)
        if (this._absoluteSources[b] == y) return b;
      return -1;
    }),
    (c.fromSourceMap = function (g, b) {
      var E = Object.create(c.prototype),
        S = (E._names = r.fromArray(g._names.toArray(), !0)),
        C = (E._sources = r.fromArray(g._sources.toArray(), !0));
      (E.sourceRoot = g._sourceRoot),
        (E.sourcesContent = g._generateSourcesContent(E._sources.toArray(), E.sourceRoot)),
        (E.file = g._file),
        (E._sourceMapURL = b),
        (E._absoluteSources = E._sources.toArray().map(function (x) {
          return e.computeSourceURL(E.sourceRoot, x, b);
        }));
      for (
        var v = g._mappings.toArray().slice(),
          P = (E.__generatedMappings = []),
          O = (E.__originalMappings = []),
          L = 0,
          V = v.length;
        L < V;
        L++
      ) {
        var A = v[L],
          m = new f();
        (m.generatedLine = A.generatedLine),
          (m.generatedColumn = A.generatedColumn),
          A.source &&
            ((m.source = C.indexOf(A.source)),
            (m.originalLine = A.originalLine),
            (m.originalColumn = A.originalColumn),
            A.name && (m.name = S.indexOf(A.name)),
            O.push(m)),
          P.push(m);
      }
      return s(E.__originalMappings, e.compareByOriginalPositions), E;
    }),
    (c.prototype._version = 3),
    Object.defineProperty(c.prototype, 'sources', {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function f() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (c.prototype._parseMappings = function (g, b) {
    for (
      var E = 1,
        S = 0,
        C = 0,
        v = 0,
        P = 0,
        O = 0,
        L = g.length,
        V = 0,
        A = {},
        m = {},
        x = [],
        _ = [],
        k,
        B,
        R,
        G,
        q;
      V < L;

    )
      if (g.charAt(V) === ';') E++, V++, (S = 0);
      else if (g.charAt(V) === ',') V++;
      else {
        for (
          k = new f(), k.generatedLine = E, G = V;
          G < L && !this._charIsMappingSeparator(g, G);
          G++
        );
        if (((B = g.slice(V, G)), (R = A[B]), R)) V += B.length;
        else {
          for (R = []; V < G; ) i.decode(g, V, m), (q = m.value), (V = m.rest), R.push(q);
          if (R.length === 2) throw new Error('Found a source, but no line and column');
          if (R.length === 3) throw new Error('Found a source and line, but no column');
          A[B] = R;
        }
        (k.generatedColumn = S + R[0]),
          (S = k.generatedColumn),
          R.length > 1 &&
            ((k.source = P + R[1]),
            (P += R[1]),
            (k.originalLine = C + R[2]),
            (C = k.originalLine),
            (k.originalLine += 1),
            (k.originalColumn = v + R[3]),
            (v = k.originalColumn),
            R.length > 4 && ((k.name = O + R[4]), (O += R[4]))),
          _.push(k),
          typeof k.originalLine == 'number' && x.push(k);
      }
    s(_, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = _),
      s(x, e.compareByOriginalPositions),
      (this.__originalMappings = x);
  }),
    (c.prototype._findMapping = function (g, b, E, S, C, v) {
      if (g[E] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + g[E]);
      if (g[S] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + g[S]);
      return t.search(g, b, C, v);
    }),
    (c.prototype.computeColumnSpans = function () {
      for (var g = 0; g < this._generatedMappings.length; ++g) {
        var b = this._generatedMappings[g];
        if (g + 1 < this._generatedMappings.length) {
          var E = this._generatedMappings[g + 1];
          if (b.generatedLine === E.generatedLine) {
            b.lastGeneratedColumn = E.generatedColumn - 1;
            continue;
          }
        }
        b.lastGeneratedColumn = 1 / 0;
      }
    }),
    (c.prototype.originalPositionFor = function (g) {
      var b = { generatedLine: e.getArg(g, 'line'), generatedColumn: e.getArg(g, 'column') },
        E = this._findMapping(
          b,
          this._generatedMappings,
          'generatedLine',
          'generatedColumn',
          e.compareByGeneratedPositionsDeflated,
          e.getArg(g, 'bias', a.GREATEST_LOWER_BOUND),
        );
      if (E >= 0) {
        var S = this._generatedMappings[E];
        if (S.generatedLine === b.generatedLine) {
          var C = e.getArg(S, 'source', null);
          C !== null &&
            ((C = this._sources.at(C)),
            (C = e.computeSourceURL(this.sourceRoot, C, this._sourceMapURL)));
          var v = e.getArg(S, 'name', null);
          return (
            v !== null && (v = this._names.at(v)),
            {
              source: C,
              line: e.getArg(S, 'originalLine', null),
              column: e.getArg(S, 'originalColumn', null),
              name: v,
            }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (c.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (g) {
              return g == null;
            })
        : !1;
    }),
    (c.prototype.sourceContentFor = function (g, b) {
      if (!this.sourcesContent) return null;
      var E = this._findSourceIndex(g);
      if (E >= 0) return this.sourcesContent[E];
      var S = g;
      this.sourceRoot != null && (S = e.relative(this.sourceRoot, S));
      var C;
      if (this.sourceRoot != null && (C = e.urlParse(this.sourceRoot))) {
        var v = S.replace(/^file:\/\//, '');
        if (C.scheme == 'file' && this._sources.has(v))
          return this.sourcesContent[this._sources.indexOf(v)];
        if ((!C.path || C.path == '/') && this._sources.has('/' + S))
          return this.sourcesContent[this._sources.indexOf('/' + S)];
      }
      if (b) return null;
      throw new Error('"' + S + '" is not in the SourceMap.');
    }),
    (c.prototype.generatedPositionFor = function (g) {
      var b = e.getArg(g, 'source');
      if (((b = this._findSourceIndex(b)), b < 0))
        return { line: null, column: null, lastColumn: null };
      var E = {
          source: b,
          originalLine: e.getArg(g, 'line'),
          originalColumn: e.getArg(g, 'column'),
        },
        S = this._findMapping(
          E,
          this._originalMappings,
          'originalLine',
          'originalColumn',
          e.compareByOriginalPositions,
          e.getArg(g, 'bias', a.GREATEST_LOWER_BOUND),
        );
      if (S >= 0) {
        var C = this._originalMappings[S];
        if (C.source === E.source)
          return {
            line: e.getArg(C, 'generatedLine', null),
            column: e.getArg(C, 'generatedColumn', null),
            lastColumn: e.getArg(C, 'lastGeneratedColumn', null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (nt.BasicSourceMapConsumer = c);
  function p(y, g) {
    var b = y;
    typeof y == 'string' && (b = e.parseSourceMapInput(y));
    var E = e.getArg(b, 'version'),
      S = e.getArg(b, 'sections');
    if (E != this._version) throw new Error('Unsupported version: ' + E);
    (this._sources = new r()), (this._names = new r());
    var C = { line: -1, column: 0 };
    this._sections = S.map(function (v) {
      if (v.url) throw new Error('Support for url field in sections not implemented.');
      var P = e.getArg(v, 'offset'),
        O = e.getArg(P, 'line'),
        L = e.getArg(P, 'column');
      if (O < C.line || (O === C.line && L < C.column))
        throw new Error('Section offsets must be ordered and non-overlapping.');
      return (
        (C = P),
        {
          generatedOffset: { generatedLine: O + 1, generatedColumn: L + 1 },
          consumer: new a(e.getArg(v, 'map'), g),
        }
      );
    });
  }
  return (
    (p.prototype = Object.create(a.prototype)),
    (p.prototype.constructor = a),
    (p.prototype._version = 3),
    Object.defineProperty(p.prototype, 'sources', {
      get: function () {
        for (var y = [], g = 0; g < this._sections.length; g++)
          for (var b = 0; b < this._sections[g].consumer.sources.length; b++)
            y.push(this._sections[g].consumer.sources[b]);
        return y;
      },
    }),
    (p.prototype.originalPositionFor = function (g) {
      var b = { generatedLine: e.getArg(g, 'line'), generatedColumn: e.getArg(g, 'column') },
        E = t.search(b, this._sections, function (C, v) {
          var P = C.generatedLine - v.generatedOffset.generatedLine;
          return P || C.generatedColumn - v.generatedOffset.generatedColumn;
        }),
        S = this._sections[E];
      return S
        ? S.consumer.originalPositionFor({
            line: b.generatedLine - (S.generatedOffset.generatedLine - 1),
            column:
              b.generatedColumn -
              (S.generatedOffset.generatedLine === b.generatedLine
                ? S.generatedOffset.generatedColumn - 1
                : 0),
            bias: g.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (p.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (g) {
        return g.consumer.hasContentsOfAllSources();
      });
    }),
    (p.prototype.sourceContentFor = function (g, b) {
      for (var E = 0; E < this._sections.length; E++) {
        var S = this._sections[E],
          C = S.consumer.sourceContentFor(g, !0);
        if (C) return C;
      }
      if (b) return null;
      throw new Error('"' + g + '" is not in the SourceMap.');
    }),
    (p.prototype.generatedPositionFor = function (g) {
      for (var b = 0; b < this._sections.length; b++) {
        var E = this._sections[b];
        if (E.consumer._findSourceIndex(e.getArg(g, 'source')) !== -1) {
          var S = E.consumer.generatedPositionFor(g);
          if (S) {
            var C = {
              line: S.line + (E.generatedOffset.generatedLine - 1),
              column:
                S.column +
                (E.generatedOffset.generatedLine === S.line
                  ? E.generatedOffset.generatedColumn - 1
                  : 0),
            };
            return C;
          }
        }
      }
      return { line: null, column: null };
    }),
    (p.prototype._parseMappings = function (g, b) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var E = 0; E < this._sections.length; E++)
        for (
          var S = this._sections[E], C = S.consumer._generatedMappings, v = 0;
          v < C.length;
          v++
        ) {
          var P = C[v],
            O = S.consumer._sources.at(P.source);
          (O = e.computeSourceURL(S.consumer.sourceRoot, O, this._sourceMapURL)),
            this._sources.add(O),
            (O = this._sources.indexOf(O));
          var L = null;
          P.name &&
            ((L = S.consumer._names.at(P.name)), this._names.add(L), (L = this._names.indexOf(L)));
          var V = {
            source: O,
            generatedLine: P.generatedLine + (S.generatedOffset.generatedLine - 1),
            generatedColumn:
              P.generatedColumn +
              (S.generatedOffset.generatedLine === P.generatedLine
                ? S.generatedOffset.generatedColumn - 1
                : 0),
            originalLine: P.originalLine,
            originalColumn: P.originalColumn,
            name: L,
          };
          this.__generatedMappings.push(V),
            typeof V.originalLine == 'number' && this.__originalMappings.push(V);
        }
      s(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
        s(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (nt.IndexedSourceMapConsumer = p),
    nt
  );
}
var nr = {},
  ti;
function ys() {
  if (ti) return nr;
  ti = 1;
  var e = Pi().SourceMapGenerator,
    t = dt(),
    r = /(\r?\n)/,
    i = 10,
    s = '$$$isSourceNode$$$';
  function a(c, f, p, y, g) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = c ?? null),
      (this.column = f ?? null),
      (this.source = p ?? null),
      (this.name = g ?? null),
      (this[s] = !0),
      y != null && this.add(y);
  }
  return (
    (a.fromStringWithSourceMap = function (f, p, y) {
      var g = new a(),
        b = f.split(r),
        E = 0,
        S = function () {
          var L = A(),
            V = A() || '';
          return L + V;
          function A() {
            return E < b.length ? b[E++] : void 0;
          }
        },
        C = 1,
        v = 0,
        P = null;
      return (
        p.eachMapping(function (L) {
          if (P !== null)
            if (C < L.generatedLine) O(P, S()), C++, (v = 0);
            else {
              var V = b[E] || '',
                A = V.substr(0, L.generatedColumn - v);
              (b[E] = V.substr(L.generatedColumn - v)), (v = L.generatedColumn), O(P, A), (P = L);
              return;
            }
          for (; C < L.generatedLine; ) g.add(S()), C++;
          if (v < L.generatedColumn) {
            var V = b[E] || '';
            g.add(V.substr(0, L.generatedColumn)),
              (b[E] = V.substr(L.generatedColumn)),
              (v = L.generatedColumn);
          }
          P = L;
        }, this),
        E < b.length && (P && O(P, S()), g.add(b.splice(E).join(''))),
        p.sources.forEach(function (L) {
          var V = p.sourceContentFor(L);
          V != null && (y != null && (L = t.join(y, L)), g.setSourceContent(L, V));
        }),
        g
      );
      function O(L, V) {
        if (L === null || L.source === void 0) g.add(V);
        else {
          var A = y ? t.join(y, L.source) : L.source;
          g.add(new a(L.originalLine, L.originalColumn, A, V, L.name));
        }
      }
    }),
    (a.prototype.add = function (f) {
      if (Array.isArray(f))
        f.forEach(function (p) {
          this.add(p);
        }, this);
      else if (f[s] || typeof f == 'string') f && this.children.push(f);
      else
        throw new TypeError(
          'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + f,
        );
      return this;
    }),
    (a.prototype.prepend = function (f) {
      if (Array.isArray(f)) for (var p = f.length - 1; p >= 0; p--) this.prepend(f[p]);
      else if (f[s] || typeof f == 'string') this.children.unshift(f);
      else
        throw new TypeError(
          'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + f,
        );
      return this;
    }),
    (a.prototype.walk = function (f) {
      for (var p, y = 0, g = this.children.length; y < g; y++)
        (p = this.children[y]),
          p[s]
            ? p.walk(f)
            : p !== '' &&
              f(p, { source: this.source, line: this.line, column: this.column, name: this.name });
    }),
    (a.prototype.join = function (f) {
      var p,
        y,
        g = this.children.length;
      if (g > 0) {
        for (p = [], y = 0; y < g - 1; y++) p.push(this.children[y]), p.push(f);
        p.push(this.children[y]), (this.children = p);
      }
      return this;
    }),
    (a.prototype.replaceRight = function (f, p) {
      var y = this.children[this.children.length - 1];
      return (
        y[s]
          ? y.replaceRight(f, p)
          : typeof y == 'string'
            ? (this.children[this.children.length - 1] = y.replace(f, p))
            : this.children.push(''.replace(f, p)),
        this
      );
    }),
    (a.prototype.setSourceContent = function (f, p) {
      this.sourceContents[t.toSetString(f)] = p;
    }),
    (a.prototype.walkSourceContents = function (f) {
      for (var p = 0, y = this.children.length; p < y; p++)
        this.children[p][s] && this.children[p].walkSourceContents(f);
      for (var g = Object.keys(this.sourceContents), p = 0, y = g.length; p < y; p++)
        f(t.fromSetString(g[p]), this.sourceContents[g[p]]);
    }),
    (a.prototype.toString = function () {
      var f = '';
      return (
        this.walk(function (p) {
          f += p;
        }),
        f
      );
    }),
    (a.prototype.toStringWithSourceMap = function (f) {
      var p = { code: '', line: 1, column: 0 },
        y = new e(f),
        g = !1,
        b = null,
        E = null,
        S = null,
        C = null;
      return (
        this.walk(function (v, P) {
          (p.code += v),
            P.source !== null && P.line !== null && P.column !== null
              ? ((b !== P.source || E !== P.line || S !== P.column || C !== P.name) &&
                  y.addMapping({
                    source: P.source,
                    original: { line: P.line, column: P.column },
                    generated: { line: p.line, column: p.column },
                    name: P.name,
                  }),
                (b = P.source),
                (E = P.line),
                (S = P.column),
                (C = P.name),
                (g = !0))
              : g &&
                (y.addMapping({ generated: { line: p.line, column: p.column } }),
                (b = null),
                (g = !1));
          for (var O = 0, L = v.length; O < L; O++)
            v.charCodeAt(O) === i
              ? (p.line++,
                (p.column = 0),
                O + 1 === L
                  ? ((b = null), (g = !1))
                  : g &&
                    y.addMapping({
                      source: P.source,
                      original: { line: P.line, column: P.column },
                      generated: { line: p.line, column: p.column },
                      name: P.name,
                    }))
              : p.column++;
        }),
        this.walkSourceContents(function (v, P) {
          y.setSourceContent(v, P);
        }),
        { code: p.code, map: y }
      );
    }),
    (nr.SourceNode = a),
    nr
  );
}
var ri;
function vs() {
  return (
    ri ||
      ((ri = 1),
      (it.SourceMapGenerator = Pi().SourceMapGenerator),
      (it.SourceMapConsumer = gs().SourceMapConsumer),
      (it.SourceNode = ys().SourceNode)),
    it
  );
}
const xs = 'escodegen',
  bs = 'ECMAScript code generator',
  Ss = 'http://github.com/estools/escodegen',
  _s = 'escodegen.js',
  Es = { esgenerate: './bin/esgenerate.js', escodegen: './bin/escodegen.js' },
  Cs = ['LICENSE.BSD', 'README.md', 'bin', 'escodegen.js', 'package.json'],
  As = '2.1.0',
  ws = { node: '>=6.0' },
  ks = [
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'http://github.com/Constellation',
    },
  ],
  Ts = { type: 'git', url: 'http://github.com/estools/escodegen.git' },
  Ps = { estraverse: '^5.2.0', esutils: '^2.0.2', esprima: '^4.0.1' },
  Is = { 'source-map': '~0.6.1' },
  Ns = {
    acorn: '^8.0.4',
    bluebird: '^3.4.7',
    'bower-registry-client': '^1.0.0',
    chai: '^4.2.0',
    'chai-exclude': '^2.0.2',
    'commonjs-everywhere': '^0.9.7',
    gulp: '^4.0.2',
    'gulp-eslint': '^6.0.0',
    'gulp-mocha': '^7.0.2',
    minimist: '^1.2.5',
    optionator: '^0.9.1',
    semver: '^7.3.4',
  },
  Ls = 'BSD-2-Clause',
  Os = {
    test: 'gulp travis',
    'unit-test': 'gulp test',
    lint: 'gulp lint',
    release: 'node tools/release.js',
    'build-min':
      './node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
    build: './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js',
  },
  Rs = {
    name: xs,
    description: bs,
    homepage: Ss,
    main: _s,
    bin: Es,
    files: Cs,
    version: As,
    engines: ws,
    maintainers: ks,
    repository: Ts,
    dependencies: Ps,
    optionalDependencies: Is,
    devDependencies: Ns,
    license: Ls,
    scripts: Os,
  };
(function (e) {
  (function () {
    var t, r, i, s, a, c, f, p, y, g, b, E, S, C, v, P, O, L, V, A, m, x, _, k, B, R;
    (a = wi), (c = $n), (t = a.Syntax);
    function G(n) {
      return oe.Expression.hasOwnProperty(n.type);
    }
    function q(n) {
      return oe.Statement.hasOwnProperty(n.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22,
    }),
      (i = {
        '??': r.Coalesce,
        '||': r.LogicalOR,
        '&&': r.LogicalAND,
        '|': r.BitwiseOR,
        '^': r.BitwiseXOR,
        '&': r.BitwiseAND,
        '==': r.Equality,
        '!=': r.Equality,
        '===': r.Equality,
        '!==': r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        '<': r.Relational,
        '>': r.Relational,
        '<=': r.Relational,
        '>=': r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        '<<': r.BitwiseSHIFT,
        '>>': r.BitwiseSHIFT,
        '>>>': r.BitwiseSHIFT,
        '+': r.Additive,
        '-': r.Additive,
        '*': r.Multiplicative,
        '%': r.Multiplicative,
        '/': r.Multiplicative,
        '**': r.Exponentiation,
      });
    var D = 1,
      H = 2,
      ne = 4,
      ue = 8,
      ie = 16,
      Q = 32,
      xe = 64,
      Te = H | ne,
      Je = D | H,
      M = D | H | ne,
      Ve = D,
      xt = ne,
      Fe = D | ne,
      ee = D,
      Ae = D | Q,
      bt = 0,
      Ln = D | ie,
      On = D | ue;
    function Or() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: '    ', base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: ' ',
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: 'single',
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: { comprehensionExpressionStartsWithAssignment: !1, starlessGenerator: !1 },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function je(n, u) {
      var o = '';
      for (u |= 0; u > 0; u >>>= 1, n += n) u & 1 && (o += n);
      return o;
    }
    function Rn(n) {
      return /[\r\n]/g.test(n);
    }
    function he(n) {
      var u = n.length;
      return u && c.code.isLineTerminator(n.charCodeAt(u - 1));
    }
    function Rr(n, u) {
      var o;
      for (o in u) u.hasOwnProperty(o) && (n[o] = u[o]);
      return n;
    }
    function St(n, u) {
      var o, l;
      function d(w) {
        return typeof w == 'object' && w instanceof Object && !(w instanceof RegExp);
      }
      for (o in u)
        u.hasOwnProperty(o) &&
          ((l = u[o]), d(l) ? (d(n[o]) ? St(n[o], l) : (n[o] = St({}, l))) : (n[o] = l));
      return n;
    }
    function Fn(n) {
      var u, o, l, d, w;
      if (n !== n) throw new Error('Numeric literal whose value is NaN');
      if (n < 0 || (n === 0 && 1 / n < 0))
        throw new Error('Numeric literal whose value is negative');
      if (n === 1 / 0) return y ? 'null' : g ? '1e400' : '1e+400';
      if (((u = '' + n), !g || u.length < 3)) return u;
      for (
        o = u.indexOf('.'),
          !y && u.charCodeAt(0) === 48 && o === 1 && ((o = 0), (u = u.slice(1))),
          l = u,
          u = u.replace('e+', 'e'),
          d = 0,
          (w = l.indexOf('e')) > 0 && ((d = +l.slice(w + 1)), (l = l.slice(0, w))),
          o >= 0 && ((d -= l.length - o - 1), (l = +(l.slice(0, o) + l.slice(o + 1)) + '')),
          w = 0;
        l.charCodeAt(l.length + w - 1) === 48;

      )
        --w;
      return (
        w !== 0 && ((d -= w), (l = l.slice(0, w))),
        d !== 0 && (l += 'e' + d),
        (l.length < u.length ||
          (b &&
            n > 1e12 &&
            Math.floor(n) === n &&
            (l = '0x' + n.toString(16)).length < u.length)) &&
          +l === n &&
          (u = l),
        u
      );
    }
    function Fr(n, u) {
      return (n & -2) === 8232
        ? (u ? 'u' : '\\u') + (n === 8232 ? '2028' : '2029')
        : n === 10 || n === 13
          ? (u ? '' : '\\') + (n === 10 ? 'n' : 'r')
          : String.fromCharCode(n);
    }
    function Mn(n) {
      var u, o, l, d, w, T, I, F;
      if (((o = n.toString()), n.source)) {
        if (((u = o.match(/\/([^/]*)$/)), !u)) return o;
        for (l = u[1], o = '', I = !1, F = !1, d = 0, w = n.source.length; d < w; ++d)
          (T = n.source.charCodeAt(d)),
            F
              ? ((o += Fr(T, F)), (F = !1))
              : (I ? T === 93 && (I = !1) : T === 47 ? (o += '\\') : T === 91 && (I = !0),
                (o += Fr(T, F)),
                (F = T === 92));
        return '/' + o + '/' + l;
      }
      return o;
    }
    function Bn(n, u) {
      var o;
      return n === 8
        ? '\\b'
        : n === 12
          ? '\\f'
          : n === 9
            ? '\\t'
            : ((o = n.toString(16).toUpperCase()),
              y || n > 255
                ? '\\u' + '0000'.slice(o.length) + o
                : n === 0 && !c.code.isDecimalDigit(u)
                  ? '\\0'
                  : n === 11
                    ? '\\x0B'
                    : '\\x' + '00'.slice(o.length) + o);
    }
    function Dn(n) {
      if (n === 92) return '\\\\';
      if (n === 10) return '\\n';
      if (n === 13) return '\\r';
      if (n === 8232) return '\\u2028';
      if (n === 8233) return '\\u2029';
      throw new Error('Incorrectly classified character');
    }
    function Vn(n) {
      var u, o, l, d;
      for (d = E === 'double' ? '"' : "'", u = 0, o = n.length; u < o; ++u)
        if (((l = n.charCodeAt(u)), l === 39)) {
          d = '"';
          break;
        } else if (l === 34) {
          d = "'";
          break;
        } else l === 92 && ++u;
      return d + n + d;
    }
    function jn(n) {
      var u = '',
        o,
        l,
        d,
        w = 0,
        T = 0,
        I,
        F;
      for (o = 0, l = n.length; o < l; ++o) {
        if (((d = n.charCodeAt(o)), d === 39)) ++w;
        else if (d === 34) ++T;
        else if (d === 47 && y) u += '\\';
        else if (c.code.isLineTerminator(d) || d === 92) {
          u += Dn(d);
          continue;
        } else if (
          !c.code.isIdentifierPartES5(d) &&
          ((y && d < 32) || (!y && !S && (d < 32 || d > 126)))
        ) {
          u += Bn(d, n.charCodeAt(o + 1));
          continue;
        }
        u += String.fromCharCode(d);
      }
      if (((I = !(E === 'double' || (E === 'auto' && T < w))), (F = I ? "'" : '"'), !(I ? w : T)))
        return F + u + F;
      for (n = u, u = F, o = 0, l = n.length; o < l; ++o)
        (d = n.charCodeAt(o)),
          ((d === 39 && I) || (d === 34 && !I)) && (u += '\\'),
          (u += String.fromCharCode(d));
      return u + F;
    }
    function Mr(n) {
      var u,
        o,
        l,
        d = '';
      for (u = 0, o = n.length; u < o; ++u) (l = n[u]), (d += Array.isArray(l) ? Mr(l) : l);
      return d;
    }
    function K(n, u) {
      if (!x) return Array.isArray(n) ? Mr(n) : n;
      if (u == null) {
        if (n instanceof s) return n;
        u = {};
      }
      return u.loc == null
        ? new s(null, null, x, n, u.name || null)
        : new s(
            u.loc.start.line,
            u.loc.start.column,
            x === !0 ? u.loc.source || null : x,
            n,
            u.name || null,
          );
    }
    function fe() {
      return v || ' ';
    }
    function U(n, u) {
      var o, l, d, w;
      return (
        (o = K(n).toString()),
        o.length === 0
          ? [u]
          : ((l = K(u).toString()),
            l.length === 0
              ? [n]
              : ((d = o.charCodeAt(o.length - 1)),
                (w = l.charCodeAt(0)),
                ((d === 43 || d === 45) && d === w) ||
                (c.code.isIdentifierPartES5(d) && c.code.isIdentifierPartES5(w)) ||
                (d === 47 && w === 105)
                  ? [n, fe(), u]
                  : c.code.isWhiteSpace(d) ||
                      c.code.isLineTerminator(d) ||
                      c.code.isWhiteSpace(w) ||
                      c.code.isLineTerminator(w)
                    ? [n, u]
                    : [n, v, u]))
      );
    }
    function pe(n) {
      return [f, n];
    }
    function ae(n) {
      var u;
      (u = f), (f += p), n(f), (f = u);
    }
    function qn(n) {
      var u;
      for (u = n.length - 1; u >= 0 && !c.code.isLineTerminator(n.charCodeAt(u)); --u);
      return n.length - 1 - u;
    }
    function Un(n, u) {
      var o, l, d, w, T, I, F, J;
      for (o = n.split(/\r\n|[\r\n]/), I = Number.MAX_VALUE, l = 1, d = o.length; l < d; ++l) {
        for (w = o[l], T = 0; T < w.length && c.code.isWhiteSpace(w.charCodeAt(T)); ) ++T;
        I > T && (I = T);
      }
      for (
        typeof u < 'u'
          ? ((F = f), o[1][I] === '*' && (u += ' '), (f = u))
          : (I & 1 && --I, (F = f)),
          l = 1,
          d = o.length;
        l < d;
        ++l
      )
        (J = K(pe(o[l].slice(I)))), (o[l] = x ? J.join('') : J);
      return (
        (f = F),
        o.join(`
`)
      );
    }
    function Pe(n, u) {
      if (n.type === 'Line') {
        if (he(n.value)) return '//' + n.value;
        var o = '//' + n.value;
        return (
          k ||
            (o += `
`),
          o
        );
      }
      return A.format.indent.adjustMultilineComment && /[\n\r]/.test(n.value)
        ? Un('/*' + n.value + '*/', u)
        : '/*' + n.value + '*/';
    }
    function Br(n, u) {
      var o, l, d, w, T, I, F, J, ce, qe, He, jr, qr, we;
      if (n.leadingComments && n.leadingComments.length > 0) {
        if (((w = u), k)) {
          for (
            d = n.leadingComments[0],
              u = [],
              J = d.extendedRange,
              ce = d.range,
              He = _.substring(J[0], ce[0]),
              we = (He.match(/\n/g) || []).length,
              we > 0
                ? (u.push(
                    je(
                      `
`,
                      we,
                    ),
                  ),
                  u.push(pe(Pe(d))))
                : (u.push(He), u.push(Pe(d))),
              qe = ce,
              o = 1,
              l = n.leadingComments.length;
            o < l;
            o++
          )
            (d = n.leadingComments[o]),
              (ce = d.range),
              (jr = _.substring(qe[1], ce[0])),
              (we = (jr.match(/\n/g) || []).length),
              u.push(
                je(
                  `
`,
                  we,
                ),
              ),
              u.push(pe(Pe(d))),
              (qe = ce);
          (qr = _.substring(ce[1], J[1])),
            (we = (qr.match(/\n/g) || []).length),
            u.push(
              je(
                `
`,
                we,
              ),
            );
        } else
          for (
            d = n.leadingComments[0],
              u = [],
              L &&
                n.type === t.Program &&
                n.body.length === 0 &&
                u.push(`
`),
              u.push(Pe(d)),
              he(K(u).toString()) ||
                u.push(`
`),
              o = 1,
              l = n.leadingComments.length;
            o < l;
            ++o
          )
            (d = n.leadingComments[o]),
              (F = [Pe(d)]),
              he(K(F).toString()) ||
                F.push(`
`),
              u.push(pe(F));
        u.push(pe(w));
      }
      if (n.trailingComments)
        if (k)
          (d = n.trailingComments[0]),
            (J = d.extendedRange),
            (ce = d.range),
            (He = _.substring(J[0], ce[0])),
            (we = (He.match(/\n/g) || []).length),
            we > 0
              ? (u.push(
                  je(
                    `
`,
                    we,
                  ),
                ),
                u.push(pe(Pe(d))))
              : (u.push(He), u.push(Pe(d)));
        else
          for (
            T = !he(K(u).toString()),
              I = je(' ', qn(K([f, u, p]).toString())),
              o = 0,
              l = n.trailingComments.length;
            o < l;
            ++o
          )
            (d = n.trailingComments[o]),
              T ? (o === 0 ? (u = [u, p]) : (u = [u, I]), u.push(Pe(d, I))) : (u = [u, pe(Pe(d))]),
              o !== l - 1 &&
                !he(K(u).toString()) &&
                (u = [
                  u,
                  `
`,
                ]);
      return u;
    }
    function Xe(n, u, o) {
      var l,
        d = 0;
      for (l = n; l < u; l++)
        _[l] ===
          `
` && d++;
      for (l = 1; l < d; l++) o.push(C);
    }
    function le(n, u, o) {
      return u < o ? ['(', n, ')'] : n;
    }
    function Dr(n) {
      var u, o, l;
      for (l = n.split(/\r\n|\n/), u = 1, o = l.length; u < o; u++) l[u] = C + f + l[u];
      return l;
    }
    function Gn(n, u) {
      var o, l, d;
      return (
        (o = n[A.verbatim]),
        typeof o == 'string'
          ? (l = le(Dr(o), r.Sequence, u))
          : ((l = Dr(o.content)),
            (d = o.precedence != null ? o.precedence : r.Sequence),
            (l = le(l, d, u))),
        K(l, n)
      );
    }
    function oe() {}
    (oe.prototype.maybeBlock = function (n, u) {
      var o,
        l,
        d = this;
      return (
        (l = !A.comment || !n.leadingComments),
        n.type === t.BlockStatement && l
          ? [v, this.generateStatement(n, u)]
          : n.type === t.EmptyStatement && l
            ? ';'
            : (ae(function () {
                o = [C, pe(d.generateStatement(n, u))];
              }),
              o)
      );
    }),
      (oe.prototype.maybeBlockSuffix = function (n, u) {
        var o = he(K(u).toString());
        return n.type === t.BlockStatement && (!A.comment || !n.leadingComments) && !o
          ? [u, v]
          : o
            ? [u, f]
            : [u, C, f];
      });
    function ge(n) {
      return K(n.name, n);
    }
    function rt(n, u) {
      return n.async ? 'async' + (u ? fe() : v) : '';
    }
    function _t(n) {
      var u = n.generator && !A.moz.starlessGenerator;
      return u ? '*' + v : '';
    }
    function Vr(n) {
      var u = n.value,
        o = '';
      return u.async && (o += rt(u, !n.computed)), u.generator && (o += _t(u) ? '*' : ''), o;
    }
    (oe.prototype.generatePattern = function (n, u, o) {
      return n.type === t.Identifier ? ge(n) : this.generateExpression(n, u, o);
    }),
      (oe.prototype.generateFunctionParams = function (n) {
        var u, o, l, d;
        if (
          ((d = !1),
          n.type === t.ArrowFunctionExpression &&
            !n.rest &&
            (!n.defaults || n.defaults.length === 0) &&
            n.params.length === 1 &&
            n.params[0].type === t.Identifier)
        )
          l = [rt(n, !0), ge(n.params[0])];
        else {
          for (
            l = n.type === t.ArrowFunctionExpression ? [rt(n, !1)] : [],
              l.push('('),
              n.defaults && (d = !0),
              u = 0,
              o = n.params.length;
            u < o;
            ++u
          )
            d && n.defaults[u]
              ? l.push(this.generateAssignment(n.params[u], n.defaults[u], '=', r.Assignment, M))
              : l.push(this.generatePattern(n.params[u], r.Assignment, M)),
              u + 1 < o && l.push(',' + v);
          n.rest && (n.params.length && l.push(',' + v), l.push('...'), l.push(ge(n.rest))),
            l.push(')');
        }
        return l;
      }),
      (oe.prototype.generateFunctionBody = function (n) {
        var u, o;
        return (
          (u = this.generateFunctionParams(n)),
          n.type === t.ArrowFunctionExpression && (u.push(v), u.push('=>')),
          n.expression
            ? (u.push(v),
              (o = this.generateExpression(n.body, r.Assignment, M)),
              o.toString().charAt(0) === '{' && (o = ['(', o, ')']),
              u.push(o))
            : u.push(this.maybeBlock(n.body, On)),
          u
        );
      }),
      (oe.prototype.generateIterationForStatement = function (n, u, o) {
        var l = ['for' + (u.await ? fe() + 'await' : '') + v + '('],
          d = this;
        return (
          ae(function () {
            u.left.type === t.VariableDeclaration
              ? ae(function () {
                  l.push(u.left.kind + fe()),
                    l.push(d.generateStatement(u.left.declarations[0], bt));
                })
              : l.push(d.generateExpression(u.left, r.Call, M)),
              (l = U(l, n)),
              (l = [U(l, d.generateExpression(u.right, r.Assignment, M)), ')']);
          }),
          l.push(this.maybeBlock(u.body, o)),
          l
        );
      }),
      (oe.prototype.generatePropertyKey = function (n, u) {
        var o = [];
        return (
          u && o.push('['), o.push(this.generateExpression(n, r.Assignment, M)), u && o.push(']'), o
        );
      }),
      (oe.prototype.generateAssignment = function (n, u, o, l, d) {
        return (
          r.Assignment < l && (d |= D),
          le(
            [
              this.generateExpression(n, r.Call, d),
              v + o + v,
              this.generateExpression(u, r.Assignment, d),
            ],
            r.Assignment,
            l,
          )
        );
      }),
      (oe.prototype.semicolon = function (n) {
        return !O && n & Q ? '' : ';';
      }),
      (oe.Statement = {
        BlockStatement: function (n, u) {
          var o,
            l,
            d = ['{', C],
            w = this;
          return (
            ae(function () {
              n.body.length === 0 &&
                k &&
                ((o = n.range),
                o[1] - o[0] > 2 &&
                  ((l = _.substring(o[0] + 1, o[1] - 1)),
                  l[0] ===
                    `
` && (d = ['{']),
                  d.push(l)));
              var T, I, F, J;
              for (J = ee, u & ue && (J |= ie), T = 0, I = n.body.length; T < I; ++T)
                k &&
                  (T === 0 &&
                    (n.body[0].leadingComments &&
                      ((o = n.body[0].leadingComments[0].extendedRange),
                      (l = _.substring(o[0], o[1])),
                      l[0] ===
                        `
` && (d = ['{'])),
                    n.body[0].leadingComments || Xe(n.range[0], n.body[0].range[0], d)),
                  T > 0 &&
                    !n.body[T - 1].trailingComments &&
                    !n.body[T].leadingComments &&
                    Xe(n.body[T - 1].range[1], n.body[T].range[0], d)),
                  T === I - 1 && (J |= Q),
                  n.body[T].leadingComments && k
                    ? (F = w.generateStatement(n.body[T], J))
                    : (F = pe(w.generateStatement(n.body[T], J))),
                  d.push(F),
                  he(K(F).toString()) ||
                    (k && T < I - 1 && n.body[T + 1].leadingComments) ||
                    d.push(C),
                  k &&
                    T === I - 1 &&
                    (n.body[T].trailingComments || Xe(n.body[T].range[1], n.range[1], d));
            }),
            d.push(pe('}')),
            d
          );
        },
        BreakStatement: function (n, u) {
          return n.label
            ? 'break ' + n.label.name + this.semicolon(u)
            : 'break' + this.semicolon(u);
        },
        ContinueStatement: function (n, u) {
          return n.label
            ? 'continue ' + n.label.name + this.semicolon(u)
            : 'continue' + this.semicolon(u);
        },
        ClassBody: function (n, u) {
          var o = ['{', C],
            l = this;
          return (
            ae(function (d) {
              var w, T;
              for (w = 0, T = n.body.length; w < T; ++w)
                o.push(d),
                  o.push(l.generateExpression(n.body[w], r.Sequence, M)),
                  w + 1 < T && o.push(C);
            }),
            he(K(o).toString()) || o.push(C),
            o.push(f),
            o.push('}'),
            o
          );
        },
        ClassDeclaration: function (n, u) {
          var o, l;
          return (
            (o = ['class']),
            n.id && (o = U(o, this.generateExpression(n.id, r.Sequence, M))),
            n.superClass &&
              ((l = U('extends', this.generateExpression(n.superClass, r.Unary, M))),
              (o = U(o, l))),
            o.push(v),
            o.push(this.generateStatement(n.body, Ae)),
            o
          );
        },
        DirectiveStatement: function (n, u) {
          return A.raw && n.raw ? n.raw + this.semicolon(u) : Vn(n.directive) + this.semicolon(u);
        },
        DoWhileStatement: function (n, u) {
          var o = U('do', this.maybeBlock(n.body, ee));
          return (
            (o = this.maybeBlockSuffix(n.body, o)),
            U(o, [
              'while' + v + '(',
              this.generateExpression(n.test, r.Sequence, M),
              ')' + this.semicolon(u),
            ])
          );
        },
        CatchClause: function (n, u) {
          var o,
            l = this;
          return (
            ae(function () {
              var d;
              n.param
                ? ((o = ['catch' + v + '(', l.generateExpression(n.param, r.Sequence, M), ')']),
                  n.guard &&
                    ((d = l.generateExpression(n.guard, r.Sequence, M)), o.splice(2, 0, ' if ', d)))
                : (o = ['catch']);
            }),
            o.push(this.maybeBlock(n.body, ee)),
            o
          );
        },
        DebuggerStatement: function (n, u) {
          return 'debugger' + this.semicolon(u);
        },
        EmptyStatement: function (n, u) {
          return ';';
        },
        ExportDefaultDeclaration: function (n, u) {
          var o = ['export'],
            l;
          return (
            (l = u & Q ? Ae : ee),
            (o = U(o, 'default')),
            q(n.declaration)
              ? (o = U(o, this.generateStatement(n.declaration, l)))
              : (o = U(
                  o,
                  this.generateExpression(n.declaration, r.Assignment, M) + this.semicolon(u),
                )),
            o
          );
        },
        ExportNamedDeclaration: function (n, u) {
          var o = ['export'],
            l,
            d = this;
          return (
            (l = u & Q ? Ae : ee),
            n.declaration
              ? U(o, this.generateStatement(n.declaration, l))
              : (n.specifiers &&
                  (n.specifiers.length === 0
                    ? (o = U(o, '{' + v + '}'))
                    : n.specifiers[0].type === t.ExportBatchSpecifier
                      ? (o = U(o, this.generateExpression(n.specifiers[0], r.Sequence, M)))
                      : ((o = U(o, '{')),
                        ae(function (w) {
                          var T, I;
                          for (o.push(C), T = 0, I = n.specifiers.length; T < I; ++T)
                            o.push(w),
                              o.push(d.generateExpression(n.specifiers[T], r.Sequence, M)),
                              T + 1 < I && o.push(',' + C);
                        }),
                        he(K(o).toString()) || o.push(C),
                        o.push(f + '}')),
                  n.source
                    ? (o = U(o, [
                        'from' + v,
                        this.generateExpression(n.source, r.Sequence, M),
                        this.semicolon(u),
                      ]))
                    : o.push(this.semicolon(u))),
                o)
          );
        },
        ExportAllDeclaration: function (n, u) {
          return [
            'export' + v,
            '*' + v,
            'from' + v,
            this.generateExpression(n.source, r.Sequence, M),
            this.semicolon(u),
          ];
        },
        ExpressionStatement: function (n, u) {
          var o, l;
          function d(I) {
            var F;
            return I.slice(0, 5) !== 'class'
              ? !1
              : ((F = I.charCodeAt(5)),
                F === 123 || c.code.isWhiteSpace(F) || c.code.isLineTerminator(F));
          }
          function w(I) {
            var F;
            return I.slice(0, 8) !== 'function'
              ? !1
              : ((F = I.charCodeAt(8)),
                F === 40 || c.code.isWhiteSpace(F) || F === 42 || c.code.isLineTerminator(F));
          }
          function T(I) {
            var F, J, ce;
            if (I.slice(0, 5) !== 'async' || !c.code.isWhiteSpace(I.charCodeAt(5))) return !1;
            for (J = 6, ce = I.length; J < ce && c.code.isWhiteSpace(I.charCodeAt(J)); ++J);
            return J === ce || I.slice(J, J + 8) !== 'function'
              ? !1
              : ((F = I.charCodeAt(J + 8)),
                F === 40 || c.code.isWhiteSpace(F) || F === 42 || c.code.isLineTerminator(F));
          }
          return (
            (o = [this.generateExpression(n.expression, r.Sequence, M)]),
            (l = K(o).toString()),
            l.charCodeAt(0) === 123 ||
            d(l) ||
            w(l) ||
            T(l) ||
            (V &&
              u & ie &&
              n.expression.type === t.Literal &&
              typeof n.expression.value == 'string')
              ? (o = ['(', o, ')' + this.semicolon(u)])
              : o.push(this.semicolon(u)),
            o
          );
        },
        ImportDeclaration: function (n, u) {
          var o,
            l,
            d = this;
          return n.specifiers.length === 0
            ? ['import', v, this.generateExpression(n.source, r.Sequence, M), this.semicolon(u)]
            : ((o = ['import']),
              (l = 0),
              n.specifiers[l].type === t.ImportDefaultSpecifier &&
                ((o = U(o, [this.generateExpression(n.specifiers[l], r.Sequence, M)])), ++l),
              n.specifiers[l] &&
                (l !== 0 && o.push(','),
                n.specifiers[l].type === t.ImportNamespaceSpecifier
                  ? (o = U(o, [v, this.generateExpression(n.specifiers[l], r.Sequence, M)]))
                  : (o.push(v + '{'),
                    n.specifiers.length - l === 1
                      ? (o.push(v),
                        o.push(this.generateExpression(n.specifiers[l], r.Sequence, M)),
                        o.push(v + '}' + v))
                      : (ae(function (w) {
                          var T, I;
                          for (o.push(C), T = l, I = n.specifiers.length; T < I; ++T)
                            o.push(w),
                              o.push(d.generateExpression(n.specifiers[T], r.Sequence, M)),
                              T + 1 < I && o.push(',' + C);
                        }),
                        he(K(o).toString()) || o.push(C),
                        o.push(f + '}' + v)))),
              (o = U(o, [
                'from' + v,
                this.generateExpression(n.source, r.Sequence, M),
                this.semicolon(u),
              ])),
              o);
        },
        VariableDeclarator: function (n, u) {
          var o = u & D ? M : Te;
          return n.init
            ? [
                this.generateExpression(n.id, r.Assignment, o),
                v,
                '=',
                v,
                this.generateExpression(n.init, r.Assignment, o),
              ]
            : this.generatePattern(n.id, r.Assignment, o);
        },
        VariableDeclaration: function (n, u) {
          var o,
            l,
            d,
            w,
            T,
            I = this;
          (o = [n.kind]), (T = u & D ? ee : bt);
          function F() {
            for (
              w = n.declarations[0],
                A.comment && w.leadingComments
                  ? (o.push(`
`),
                    o.push(pe(I.generateStatement(w, T))))
                  : (o.push(fe()), o.push(I.generateStatement(w, T))),
                l = 1,
                d = n.declarations.length;
              l < d;
              ++l
            )
              (w = n.declarations[l]),
                A.comment && w.leadingComments
                  ? (o.push(',' + C), o.push(pe(I.generateStatement(w, T))))
                  : (o.push(',' + v), o.push(I.generateStatement(w, T)));
          }
          return n.declarations.length > 1 ? ae(F) : F(), o.push(this.semicolon(u)), o;
        },
        ThrowStatement: function (n, u) {
          return [
            U('throw', this.generateExpression(n.argument, r.Sequence, M)),
            this.semicolon(u),
          ];
        },
        TryStatement: function (n, u) {
          var o, l, d, w;
          if (
            ((o = ['try', this.maybeBlock(n.block, ee)]),
            (o = this.maybeBlockSuffix(n.block, o)),
            n.handlers)
          )
            for (l = 0, d = n.handlers.length; l < d; ++l)
              (o = U(o, this.generateStatement(n.handlers[l], ee))),
                (n.finalizer || l + 1 !== d) && (o = this.maybeBlockSuffix(n.handlers[l].body, o));
          else {
            for (w = n.guardedHandlers || [], l = 0, d = w.length; l < d; ++l)
              (o = U(o, this.generateStatement(w[l], ee))),
                (n.finalizer || l + 1 !== d) && (o = this.maybeBlockSuffix(w[l].body, o));
            if (n.handler)
              if (Array.isArray(n.handler))
                for (l = 0, d = n.handler.length; l < d; ++l)
                  (o = U(o, this.generateStatement(n.handler[l], ee))),
                    (n.finalizer || l + 1 !== d) &&
                      (o = this.maybeBlockSuffix(n.handler[l].body, o));
              else
                (o = U(o, this.generateStatement(n.handler, ee))),
                  n.finalizer && (o = this.maybeBlockSuffix(n.handler.body, o));
          }
          return n.finalizer && (o = U(o, ['finally', this.maybeBlock(n.finalizer, ee)])), o;
        },
        SwitchStatement: function (n, u) {
          var o,
            l,
            d,
            w,
            T,
            I = this;
          if (
            (ae(function () {
              o = [
                'switch' + v + '(',
                I.generateExpression(n.discriminant, r.Sequence, M),
                ')' + v + '{' + C,
              ];
            }),
            n.cases)
          )
            for (T = ee, d = 0, w = n.cases.length; d < w; ++d)
              d === w - 1 && (T |= Q),
                (l = pe(this.generateStatement(n.cases[d], T))),
                o.push(l),
                he(K(l).toString()) || o.push(C);
          return o.push(pe('}')), o;
        },
        SwitchCase: function (n, u) {
          var o,
            l,
            d,
            w,
            T,
            I = this;
          return (
            ae(function () {
              for (
                n.test
                  ? (o = [U('case', I.generateExpression(n.test, r.Sequence, M)), ':'])
                  : (o = ['default:']),
                  d = 0,
                  w = n.consequent.length,
                  w &&
                    n.consequent[0].type === t.BlockStatement &&
                    ((l = I.maybeBlock(n.consequent[0], ee)), o.push(l), (d = 1)),
                  d !== w && !he(K(o).toString()) && o.push(C),
                  T = ee;
                d < w;
                ++d
              )
                d === w - 1 && u & Q && (T |= Q),
                  (l = pe(I.generateStatement(n.consequent[d], T))),
                  o.push(l),
                  d + 1 !== w && !he(K(l).toString()) && o.push(C);
            }),
            o
          );
        },
        IfStatement: function (n, u) {
          var o,
            l,
            d,
            w = this;
          return (
            ae(function () {
              o = ['if' + v + '(', w.generateExpression(n.test, r.Sequence, M), ')'];
            }),
            (d = u & Q),
            (l = ee),
            d && (l |= Q),
            n.alternate
              ? (o.push(this.maybeBlock(n.consequent, ee)),
                (o = this.maybeBlockSuffix(n.consequent, o)),
                n.alternate.type === t.IfStatement
                  ? (o = U(o, ['else ', this.generateStatement(n.alternate, l)]))
                  : (o = U(o, U('else', this.maybeBlock(n.alternate, l)))))
              : o.push(this.maybeBlock(n.consequent, l)),
            o
          );
        },
        ForStatement: function (n, u) {
          var o,
            l = this;
          return (
            ae(function () {
              (o = ['for' + v + '(']),
                n.init
                  ? n.init.type === t.VariableDeclaration
                    ? o.push(l.generateStatement(n.init, bt))
                    : (o.push(l.generateExpression(n.init, r.Sequence, Te)), o.push(';'))
                  : o.push(';'),
                n.test && (o.push(v), o.push(l.generateExpression(n.test, r.Sequence, M))),
                o.push(';'),
                n.update && (o.push(v), o.push(l.generateExpression(n.update, r.Sequence, M))),
                o.push(')');
            }),
            o.push(this.maybeBlock(n.body, u & Q ? Ae : ee)),
            o
          );
        },
        ForInStatement: function (n, u) {
          return this.generateIterationForStatement('in', n, u & Q ? Ae : ee);
        },
        ForOfStatement: function (n, u) {
          return this.generateIterationForStatement('of', n, u & Q ? Ae : ee);
        },
        LabeledStatement: function (n, u) {
          return [n.label.name + ':', this.maybeBlock(n.body, u & Q ? Ae : ee)];
        },
        Program: function (n, u) {
          var o, l, d, w, T;
          for (
            w = n.body.length,
              o = [
                L && w > 0
                  ? `
`
                  : '',
              ],
              T = Ln,
              d = 0;
            d < w;
            ++d
          )
            !L && d === w - 1 && (T |= Q),
              k &&
                (d === 0 && (n.body[0].leadingComments || Xe(n.range[0], n.body[d].range[0], o)),
                d > 0 &&
                  !n.body[d - 1].trailingComments &&
                  !n.body[d].leadingComments &&
                  Xe(n.body[d - 1].range[1], n.body[d].range[0], o)),
              (l = pe(this.generateStatement(n.body[d], T))),
              o.push(l),
              d + 1 < w &&
                !he(K(l).toString()) &&
                ((k && n.body[d + 1].leadingComments) || o.push(C)),
              k &&
                d === w - 1 &&
                (n.body[d].trailingComments || Xe(n.body[d].range[1], n.range[1], o));
          return o;
        },
        FunctionDeclaration: function (n, u) {
          return [
            rt(n, !0),
            'function',
            _t(n) || fe(),
            n.id ? ge(n.id) : '',
            this.generateFunctionBody(n),
          ];
        },
        ReturnStatement: function (n, u) {
          return n.argument
            ? [U('return', this.generateExpression(n.argument, r.Sequence, M)), this.semicolon(u)]
            : ['return' + this.semicolon(u)];
        },
        WhileStatement: function (n, u) {
          var o,
            l = this;
          return (
            ae(function () {
              o = ['while' + v + '(', l.generateExpression(n.test, r.Sequence, M), ')'];
            }),
            o.push(this.maybeBlock(n.body, u & Q ? Ae : ee)),
            o
          );
        },
        WithStatement: function (n, u) {
          var o,
            l = this;
          return (
            ae(function () {
              o = ['with' + v + '(', l.generateExpression(n.object, r.Sequence, M), ')'];
            }),
            o.push(this.maybeBlock(n.body, u & Q ? Ae : ee)),
            o
          );
        },
      }),
      Rr(oe.prototype, oe.Statement),
      (oe.Expression = {
        SequenceExpression: function (n, u, o) {
          var l, d, w;
          for (r.Sequence < u && (o |= D), l = [], d = 0, w = n.expressions.length; d < w; ++d)
            l.push(this.generateExpression(n.expressions[d], r.Assignment, o)),
              d + 1 < w && l.push(',' + v);
          return le(l, r.Sequence, u);
        },
        AssignmentExpression: function (n, u, o) {
          return this.generateAssignment(n.left, n.right, n.operator, u, o);
        },
        ArrowFunctionExpression: function (n, u, o) {
          return le(this.generateFunctionBody(n), r.ArrowFunction, u);
        },
        ConditionalExpression: function (n, u, o) {
          return (
            r.Conditional < u && (o |= D),
            le(
              [
                this.generateExpression(n.test, r.Coalesce, o),
                v + '?' + v,
                this.generateExpression(n.consequent, r.Assignment, o),
                v + ':' + v,
                this.generateExpression(n.alternate, r.Assignment, o),
              ],
              r.Conditional,
              u,
            )
          );
        },
        LogicalExpression: function (n, u, o) {
          return n.operator === '??' && (o |= xe), this.BinaryExpression(n, u, o);
        },
        BinaryExpression: function (n, u, o) {
          var l, d, w, T, I, F;
          return (
            (T = i[n.operator]),
            (d = n.operator === '**' ? r.Postfix : T),
            (w = n.operator === '**' ? T : T + 1),
            T < u && (o |= D),
            (I = this.generateExpression(n.left, d, o)),
            (F = I.toString()),
            F.charCodeAt(F.length - 1) === 47 &&
            c.code.isIdentifierPartES5(n.operator.charCodeAt(0))
              ? (l = [I, fe(), n.operator])
              : (l = U(I, n.operator)),
            (I = this.generateExpression(n.right, w, o)),
            (n.operator === '/' && I.toString().charAt(0) === '/') ||
            (n.operator.slice(-1) === '<' && I.toString().slice(0, 3) === '!--')
              ? (l.push(fe()), l.push(I))
              : (l = U(l, I)),
            n.operator === 'in' && !(o & D)
              ? ['(', l, ')']
              : (n.operator === '||' || n.operator === '&&') && o & xe
                ? ['(', l, ')']
                : le(l, T, u)
          );
        },
        CallExpression: function (n, u, o) {
          var l, d, w;
          for (
            l = [this.generateExpression(n.callee, r.Call, Je)],
              n.optional && l.push('?.'),
              l.push('('),
              d = 0,
              w = n.arguments.length;
            d < w;
            ++d
          )
            l.push(this.generateExpression(n.arguments[d], r.Assignment, M)),
              d + 1 < w && l.push(',' + v);
          return l.push(')'), o & H ? le(l, r.Call, u) : ['(', l, ')'];
        },
        ChainExpression: function (n, u, o) {
          r.OptionalChaining < u && (o |= H);
          var l = this.generateExpression(n.expression, r.OptionalChaining, o);
          return le(l, r.OptionalChaining, u);
        },
        NewExpression: function (n, u, o) {
          var l, d, w, T, I;
          if (
            ((d = n.arguments.length),
            (I = o & ne && !P && d === 0 ? Fe : Ve),
            (l = U('new', this.generateExpression(n.callee, r.New, I))),
            !(o & ne) || P || d > 0)
          ) {
            for (l.push('('), w = 0, T = d; w < T; ++w)
              l.push(this.generateExpression(n.arguments[w], r.Assignment, M)),
                w + 1 < T && l.push(',' + v);
            l.push(')');
          }
          return le(l, r.New, u);
        },
        MemberExpression: function (n, u, o) {
          var l, d;
          return (
            (l = [this.generateExpression(n.object, r.Call, o & H ? Je : Ve)]),
            n.computed
              ? (n.optional && l.push('?.'),
                l.push('['),
                l.push(this.generateExpression(n.property, r.Sequence, o & H ? M : Fe)),
                l.push(']'))
              : (!n.optional &&
                  n.object.type === t.Literal &&
                  typeof n.object.value == 'number' &&
                  ((d = K(l).toString()),
                  d.indexOf('.') < 0 &&
                    !/[eExX]/.test(d) &&
                    c.code.isDecimalDigit(d.charCodeAt(d.length - 1)) &&
                    !(d.length >= 2 && d.charCodeAt(0) === 48) &&
                    l.push(' ')),
                l.push(n.optional ? '?.' : '.'),
                l.push(ge(n.property))),
            le(l, r.Member, u)
          );
        },
        MetaProperty: function (n, u, o) {
          var l;
          return (
            (l = []),
            l.push(typeof n.meta == 'string' ? n.meta : ge(n.meta)),
            l.push('.'),
            l.push(typeof n.property == 'string' ? n.property : ge(n.property)),
            le(l, r.Member, u)
          );
        },
        UnaryExpression: function (n, u, o) {
          var l, d, w, T, I;
          return (
            (d = this.generateExpression(n.argument, r.Unary, M)),
            v === ''
              ? (l = U(n.operator, d))
              : ((l = [n.operator]),
                n.operator.length > 2
                  ? (l = U(l, d))
                  : ((T = K(l).toString()),
                    (I = T.charCodeAt(T.length - 1)),
                    (w = d.toString().charCodeAt(0)),
                    (((I === 43 || I === 45) && I === w) ||
                      (c.code.isIdentifierPartES5(I) && c.code.isIdentifierPartES5(w))) &&
                      l.push(fe()),
                    l.push(d))),
            le(l, r.Unary, u)
          );
        },
        YieldExpression: function (n, u, o) {
          var l;
          return (
            n.delegate ? (l = 'yield*') : (l = 'yield'),
            n.argument && (l = U(l, this.generateExpression(n.argument, r.Yield, M))),
            le(l, r.Yield, u)
          );
        },
        AwaitExpression: function (n, u, o) {
          var l = U(n.all ? 'await*' : 'await', this.generateExpression(n.argument, r.Await, M));
          return le(l, r.Await, u);
        },
        UpdateExpression: function (n, u, o) {
          return n.prefix
            ? le([n.operator, this.generateExpression(n.argument, r.Unary, M)], r.Unary, u)
            : le([this.generateExpression(n.argument, r.Postfix, M), n.operator], r.Postfix, u);
        },
        FunctionExpression: function (n, u, o) {
          var l = [rt(n, !0), 'function'];
          return (
            n.id ? (l.push(_t(n) || fe()), l.push(ge(n.id))) : l.push(_t(n) || v),
            l.push(this.generateFunctionBody(n)),
            l
          );
        },
        ArrayPattern: function (n, u, o) {
          return this.ArrayExpression(n, u, o, !0);
        },
        ArrayExpression: function (n, u, o, l) {
          var d,
            w,
            T = this;
          return n.elements.length
            ? ((w = l ? !1 : n.elements.length > 1),
              (d = ['[', w ? C : '']),
              ae(function (I) {
                var F, J;
                for (F = 0, J = n.elements.length; F < J; ++F)
                  n.elements[F]
                    ? (d.push(w ? I : ''),
                      d.push(T.generateExpression(n.elements[F], r.Assignment, M)))
                    : (w && d.push(I), F + 1 === J && d.push(',')),
                    F + 1 < J && d.push(',' + (w ? C : v));
              }),
              w && !he(K(d).toString()) && d.push(C),
              d.push(w ? f : ''),
              d.push(']'),
              d)
            : '[]';
        },
        RestElement: function (n, u, o) {
          return '...' + this.generatePattern(n.argument);
        },
        ClassExpression: function (n, u, o) {
          var l, d;
          return (
            (l = ['class']),
            n.id && (l = U(l, this.generateExpression(n.id, r.Sequence, M))),
            n.superClass &&
              ((d = U('extends', this.generateExpression(n.superClass, r.Unary, M))),
              (l = U(l, d))),
            l.push(v),
            l.push(this.generateStatement(n.body, Ae)),
            l
          );
        },
        MethodDefinition: function (n, u, o) {
          var l, d;
          return (
            n.static ? (l = ['static' + v]) : (l = []),
            n.kind === 'get' || n.kind === 'set'
              ? (d = [
                  U(n.kind, this.generatePropertyKey(n.key, n.computed)),
                  this.generateFunctionBody(n.value),
                ])
              : (d = [
                  Vr(n),
                  this.generatePropertyKey(n.key, n.computed),
                  this.generateFunctionBody(n.value),
                ]),
            U(l, d)
          );
        },
        Property: function (n, u, o) {
          return n.kind === 'get' || n.kind === 'set'
            ? [
                n.kind,
                fe(),
                this.generatePropertyKey(n.key, n.computed),
                this.generateFunctionBody(n.value),
              ]
            : n.shorthand
              ? n.value.type === 'AssignmentPattern'
                ? this.AssignmentPattern(n.value, r.Sequence, M)
                : this.generatePropertyKey(n.key, n.computed)
              : n.method
                ? [
                    Vr(n),
                    this.generatePropertyKey(n.key, n.computed),
                    this.generateFunctionBody(n.value),
                  ]
                : [
                    this.generatePropertyKey(n.key, n.computed),
                    ':' + v,
                    this.generateExpression(n.value, r.Assignment, M),
                  ];
        },
        ObjectExpression: function (n, u, o) {
          var l,
            d,
            w,
            T = this;
          return n.properties.length
            ? ((l = n.properties.length > 1),
              ae(function () {
                w = T.generateExpression(n.properties[0], r.Sequence, M);
              }),
              !l && !Rn(K(w).toString())
                ? ['{', v, w, v, '}']
                : (ae(function (I) {
                    var F, J;
                    if (((d = ['{', C, I, w]), l))
                      for (d.push(',' + C), F = 1, J = n.properties.length; F < J; ++F)
                        d.push(I),
                          d.push(T.generateExpression(n.properties[F], r.Sequence, M)),
                          F + 1 < J && d.push(',' + C);
                  }),
                  he(K(d).toString()) || d.push(C),
                  d.push(f),
                  d.push('}'),
                  d))
            : '{}';
        },
        AssignmentPattern: function (n, u, o) {
          return this.generateAssignment(n.left, n.right, '=', u, o);
        },
        ObjectPattern: function (n, u, o) {
          var l,
            d,
            w,
            T,
            I,
            F = this;
          if (!n.properties.length) return '{}';
          if (((T = !1), n.properties.length === 1))
            (I = n.properties[0]),
              I.type === t.Property && I.value.type !== t.Identifier && (T = !0);
          else
            for (d = 0, w = n.properties.length; d < w; ++d)
              if (((I = n.properties[d]), I.type === t.Property && !I.shorthand)) {
                T = !0;
                break;
              }
          return (
            (l = ['{', T ? C : '']),
            ae(function (J) {
              var ce, qe;
              for (ce = 0, qe = n.properties.length; ce < qe; ++ce)
                l.push(T ? J : ''),
                  l.push(F.generateExpression(n.properties[ce], r.Sequence, M)),
                  ce + 1 < qe && l.push(',' + (T ? C : v));
            }),
            T && !he(K(l).toString()) && l.push(C),
            l.push(T ? f : ''),
            l.push('}'),
            l
          );
        },
        ThisExpression: function (n, u, o) {
          return 'this';
        },
        Super: function (n, u, o) {
          return 'super';
        },
        Identifier: function (n, u, o) {
          return ge(n);
        },
        ImportDefaultSpecifier: function (n, u, o) {
          return ge(n.id || n.local);
        },
        ImportNamespaceSpecifier: function (n, u, o) {
          var l = ['*'],
            d = n.id || n.local;
          return d && l.push(v + 'as' + fe() + ge(d)), l;
        },
        ImportSpecifier: function (n, u, o) {
          var l = n.imported,
            d = [l.name],
            w = n.local;
          return w && w.name !== l.name && d.push(fe() + 'as' + fe() + ge(w)), d;
        },
        ExportSpecifier: function (n, u, o) {
          var l = n.local,
            d = [l.name],
            w = n.exported;
          return w && w.name !== l.name && d.push(fe() + 'as' + fe() + ge(w)), d;
        },
        Literal: function (n, u, o) {
          var l;
          if (n.hasOwnProperty('raw') && m && A.raw)
            try {
              if (((l = m(n.raw).body[0].expression), l.type === t.Literal && l.value === n.value))
                return n.raw;
            } catch {}
          return n.regex
            ? '/' + n.regex.pattern + '/' + n.regex.flags
            : typeof n.value == 'bigint'
              ? n.value.toString() + 'n'
              : n.bigint
                ? n.bigint + 'n'
                : n.value === null
                  ? 'null'
                  : typeof n.value == 'string'
                    ? jn(n.value)
                    : typeof n.value == 'number'
                      ? Fn(n.value)
                      : typeof n.value == 'boolean'
                        ? n.value
                          ? 'true'
                          : 'false'
                        : Mn(n.value);
        },
        GeneratorExpression: function (n, u, o) {
          return this.ComprehensionExpression(n, u, o);
        },
        ComprehensionExpression: function (n, u, o) {
          var l,
            d,
            w,
            T,
            I = this;
          return (
            (l = n.type === t.GeneratorExpression ? ['('] : ['[']),
            A.moz.comprehensionExpressionStartsWithAssignment &&
              ((T = this.generateExpression(n.body, r.Assignment, M)), l.push(T)),
            n.blocks &&
              ae(function () {
                for (d = 0, w = n.blocks.length; d < w; ++d)
                  (T = I.generateExpression(n.blocks[d], r.Sequence, M)),
                    d > 0 || A.moz.comprehensionExpressionStartsWithAssignment
                      ? (l = U(l, T))
                      : l.push(T);
              }),
            n.filter &&
              ((l = U(l, 'if' + v)),
              (T = this.generateExpression(n.filter, r.Sequence, M)),
              (l = U(l, ['(', T, ')']))),
            A.moz.comprehensionExpressionStartsWithAssignment ||
              ((T = this.generateExpression(n.body, r.Assignment, M)), (l = U(l, T))),
            l.push(n.type === t.GeneratorExpression ? ')' : ']'),
            l
          );
        },
        ComprehensionBlock: function (n, u, o) {
          var l;
          return (
            n.left.type === t.VariableDeclaration
              ? (l = [n.left.kind, fe(), this.generateStatement(n.left.declarations[0], bt)])
              : (l = this.generateExpression(n.left, r.Call, M)),
            (l = U(l, n.of ? 'of' : 'in')),
            (l = U(l, this.generateExpression(n.right, r.Sequence, M))),
            ['for' + v + '(', l, ')']
          );
        },
        SpreadElement: function (n, u, o) {
          return ['...', this.generateExpression(n.argument, r.Assignment, M)];
        },
        TaggedTemplateExpression: function (n, u, o) {
          var l = Je;
          o & H || (l = Ve);
          var d = [
            this.generateExpression(n.tag, r.Call, l),
            this.generateExpression(n.quasi, r.Primary, xt),
          ];
          return le(d, r.TaggedTemplate, u);
        },
        TemplateElement: function (n, u, o) {
          return n.value.raw;
        },
        TemplateLiteral: function (n, u, o) {
          var l, d, w;
          for (l = ['`'], d = 0, w = n.quasis.length; d < w; ++d)
            l.push(this.generateExpression(n.quasis[d], r.Primary, M)),
              d + 1 < w &&
                (l.push('${' + v),
                l.push(this.generateExpression(n.expressions[d], r.Sequence, M)),
                l.push(v + '}'));
          return l.push('`'), l;
        },
        ModuleSpecifier: function (n, u, o) {
          return this.Literal(n, u, o);
        },
        ImportExpression: function (n, u, o) {
          return le(
            ['import(', this.generateExpression(n.source, r.Assignment, M), ')'],
            r.Call,
            u,
          );
        },
      }),
      Rr(oe.prototype, oe.Expression),
      (oe.prototype.generateExpression = function (n, u, o) {
        var l, d;
        return (
          (d = n.type || t.Property),
          A.verbatim && n.hasOwnProperty(A.verbatim)
            ? Gn(n, u)
            : ((l = this[d](n, u, o)), A.comment && (l = Br(n, l)), K(l, n))
        );
      }),
      (oe.prototype.generateStatement = function (n, u) {
        var o, l;
        return (
          (o = this[n.type](n, u)),
          A.comment && (o = Br(n, o)),
          (l = K(o).toString()),
          n.type === t.Program &&
            !L &&
            C === '' &&
            l.charAt(l.length - 1) ===
              `
` &&
            (o = x ? K(o).replaceRight(/\s+$/, '') : l.replace(/\s+$/, '')),
          K(o, n)
        );
      });
    function Wn(n) {
      var u;
      if (((u = new oe()), q(n))) return u.generateStatement(n, ee);
      if (G(n)) return u.generateExpression(n, r.Sequence, M);
      throw new Error('Unknown node type: ' + n.type);
    }
    function zn(n, u) {
      var o = Or(),
        l,
        d;
      return (
        u != null
          ? (typeof u.indent == 'string' && (o.format.indent.style = u.indent),
            typeof u.base == 'number' && (o.format.indent.base = u.base),
            (u = St(o, u)),
            (p = u.format.indent.style),
            typeof u.base == 'string' ? (f = u.base) : (f = je(p, u.format.indent.base)))
          : ((u = o), (p = u.format.indent.style), (f = je(p, u.format.indent.base))),
        (y = u.format.json),
        (g = u.format.renumber),
        (b = y ? !1 : u.format.hexadecimal),
        (E = y ? 'double' : u.format.quotes),
        (S = u.format.escapeless),
        (C = u.format.newline),
        (v = u.format.space),
        u.format.compact && (C = v = p = f = ''),
        (P = u.format.parentheses),
        (O = u.format.semicolons),
        (L = u.format.safeConcatenation),
        (V = u.directive),
        (m = y ? null : u.parse),
        (x = u.sourceMap),
        (_ = u.sourceCode),
        (k = u.format.preserveBlankLines && _ !== null),
        (A = u),
        x && (e.browser ? (s = lt.sourceMap.SourceNode) : (s = vs().SourceNode)),
        (l = Wn(n)),
        x
          ? ((d = l.toStringWithSourceMap({ file: u.file, sourceRoot: u.sourceMapRoot })),
            u.sourceContent && d.map.setSourceContent(u.sourceMap, u.sourceContent),
            u.sourceMapWithCode ? d : d.map.toString())
          : ((d = { code: l.toString(), map: null }), u.sourceMapWithCode ? d : d.code)
      );
    }
    (B = {
      indent: { style: '', base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: 'auto',
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (R = Or().format),
      (e.version = Rs.version),
      (e.generate = zn),
      (e.attachComments = a.attachComments),
      (e.Precedence = St({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = B),
      (e.FORMAT_DEFAULTS = R);
  })();
})(Ai);
var sr = {
    3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
    5: 'class enum extends super const export import',
    6: 'enum',
    strict: 'implements interface let package private protected public static yield',
    strictBind: 'eval arguments',
  },
  ar =
    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
  Fs = {
    5: ar,
    '5module': ar + ' export import',
    6: ar + ' const class extends export import super',
  },
  Ms = /^in(stanceof)?$/,
  gr =
    'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
  Ii =
    '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
  Bs = new RegExp('[' + gr + ']'),
  Ds = new RegExp('[' + gr + Ii + ']');
gr = Ii = null;
var Ni = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37,
    11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153,
    5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1,
    65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72,
    56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44,
    33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2,
    0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52,
    19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230,
    43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11,
    39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22,
    0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12,
    65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8,
    8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2,
    27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1,
    2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0,
    2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421,
    42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  Vs = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1,
    154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2,
    49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1,
    3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9,
    9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29,
    9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2,
    6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54,
    8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5,
    49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495,
    6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function ur(e, t) {
  for (var r = 65536, i = 0; i < t.length; i += 2) {
    if (((r += t[i]), r > e)) return !1;
    if (((r += t[i + 1]), r >= e)) return !0;
  }
}
function Le(e, t) {
  return e < 65
    ? e === 36
    : e < 91
      ? !0
      : e < 97
        ? e === 95
        : e < 123
          ? !0
          : e <= 65535
            ? e >= 170 && Bs.test(String.fromCharCode(e))
            : t === !1
              ? !1
              : ur(e, Ni);
}
function Ge(e, t) {
  return e < 48
    ? e === 36
    : e < 58
      ? !0
      : e < 65
        ? !1
        : e < 91
          ? !0
          : e < 97
            ? e === 95
            : e < 123
              ? !0
              : e <= 65535
                ? e >= 170 && Ds.test(String.fromCharCode(e))
                : t === !1
                  ? !1
                  : ur(e, Ni) || ur(e, Vs);
}
var Y = function (t, r) {
  r === void 0 && (r = {}),
    (this.label = t),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function be(e, t) {
  return new Y(e, { beforeExpr: !0, binop: t });
}
var Se = { beforeExpr: !0 },
  ye = { startsExpr: !0 },
  Lt = {};
function X(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (Lt[e] = new Y(e, t));
}
var h = {
    num: new Y('num', ye),
    regexp: new Y('regexp', ye),
    string: new Y('string', ye),
    name: new Y('name', ye),
    eof: new Y('eof'),
    bracketL: new Y('[', { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new Y(']'),
    braceL: new Y('{', { beforeExpr: !0, startsExpr: !0 }),
    braceR: new Y('}'),
    parenL: new Y('(', { beforeExpr: !0, startsExpr: !0 }),
    parenR: new Y(')'),
    comma: new Y(',', Se),
    semi: new Y(';', Se),
    colon: new Y(':', Se),
    dot: new Y('.'),
    question: new Y('?', Se),
    questionDot: new Y('?.'),
    arrow: new Y('=>', Se),
    template: new Y('template'),
    invalidTemplate: new Y('invalidTemplate'),
    ellipsis: new Y('...', Se),
    backQuote: new Y('`', ye),
    dollarBraceL: new Y('${', { beforeExpr: !0, startsExpr: !0 }),
    eq: new Y('=', { beforeExpr: !0, isAssign: !0 }),
    assign: new Y('_=', { beforeExpr: !0, isAssign: !0 }),
    incDec: new Y('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new Y('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: be('||', 1),
    logicalAND: be('&&', 2),
    bitwiseOR: be('|', 3),
    bitwiseXOR: be('^', 4),
    bitwiseAND: be('&', 5),
    equality: be('==/!=/===/!==', 6),
    relational: be('</>/<=/>=', 7),
    bitShift: be('<</>>/>>>', 8),
    plusMin: new Y('+/-', { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
    modulo: be('%', 10),
    star: be('*', 10),
    slash: be('/', 10),
    starstar: new Y('**', { beforeExpr: !0 }),
    coalesce: be('??', 1),
    _break: X('break'),
    _case: X('case', Se),
    _catch: X('catch'),
    _continue: X('continue'),
    _debugger: X('debugger'),
    _default: X('default', Se),
    _do: X('do', { isLoop: !0, beforeExpr: !0 }),
    _else: X('else', Se),
    _finally: X('finally'),
    _for: X('for', { isLoop: !0 }),
    _function: X('function', ye),
    _if: X('if'),
    _return: X('return', Se),
    _switch: X('switch'),
    _throw: X('throw', Se),
    _try: X('try'),
    _var: X('var'),
    _const: X('const'),
    _while: X('while', { isLoop: !0 }),
    _with: X('with'),
    _new: X('new', { beforeExpr: !0, startsExpr: !0 }),
    _this: X('this', ye),
    _super: X('super', ye),
    _class: X('class', ye),
    _extends: X('extends', Se),
    _export: X('export'),
    _import: X('import', ye),
    _null: X('null', ye),
    _true: X('true', ye),
    _false: X('false', ye),
    _in: X('in', { beforeExpr: !0, binop: 7 }),
    _instanceof: X('instanceof', { beforeExpr: !0, binop: 7 }),
    _typeof: X('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: X('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: X('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  ve = /\r\n?|\n|\u2028|\u2029/,
  Qe = new RegExp(ve.source, 'g');
function et(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
var yr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Ee = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Li = Object.prototype,
  js = Li.hasOwnProperty,
  qs = Li.toString;
function Ot(e, t) {
  return js.call(e, t);
}
var ii =
  Array.isArray ||
  function (e) {
    return qs.call(e) === '[object Array]';
  };
function Ue(e) {
  return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$');
}
var Ye = function (t, r) {
  (this.line = t), (this.column = r);
};
Ye.prototype.offset = function (t) {
  return new Ye(this.line, this.column + t);
};
var mt = function (t, r, i) {
  (this.start = r), (this.end = i), t.sourceFile !== null && (this.source = t.sourceFile);
};
function vr(e, t) {
  for (var r = 1, i = 0; ; ) {
    Qe.lastIndex = i;
    var s = Qe.exec(e);
    if (s && s.index < t) ++r, (i = s.index + s[0].length);
    else return new Ye(r, t - i);
  }
}
var kt = {
  ecmaVersion: 10,
  sourceType: 'script',
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function Us(e) {
  var t = {};
  for (var r in kt) t[r] = e && Ot(e, r) ? e[r] : kt[r];
  if (
    (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
    t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
    ii(t.onToken))
  ) {
    var i = t.onToken;
    t.onToken = function (s) {
      return i.push(s);
    };
  }
  return ii(t.onComment) && (t.onComment = Gs(t, t.onComment)), t;
}
function Gs(e, t) {
  return function (r, i, s, a, c, f) {
    var p = { type: r ? 'Block' : 'Line', value: i, start: s, end: a };
    e.locations && (p.loc = new mt(this, c, f)), e.ranges && (p.range = [s, a]), t.push(p);
  };
}
var ct = 1,
  gt = 2,
  xr = ct | gt,
  Oi = 4,
  Ri = 8,
  Fi = 16,
  Mi = 32,
  Bi = 64,
  Di = 128;
function br(e, t) {
  return gt | (e ? Oi : 0) | (t ? Ri : 0);
}
var ni = 0,
  Sr = 1,
  Ne = 2,
  Vi = 3,
  ji = 4,
  qi = 5,
  re = function (t, r, i) {
    (this.options = t = Us(t)),
      (this.sourceFile = t.sourceFile),
      (this.keywords = Ue(Fs[t.ecmaVersion >= 6 ? 6 : t.sourceType === 'module' ? '5module' : 5]));
    var s = '';
    if (t.allowReserved !== !0) {
      for (var a = t.ecmaVersion; !(s = sr[a]); a--);
      t.sourceType === 'module' && (s += ' await');
    }
    this.reservedWords = Ue(s);
    var c = (s ? s + ' ' : '') + sr.strict;
    (this.reservedWordsStrict = Ue(c)),
      (this.reservedWordsStrictBind = Ue(c + ' ' + sr.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      i
        ? ((this.pos = i),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              i - 1,
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(ve).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = h.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = t.sourceType === 'module'),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        t.allowHashBang &&
        this.input.slice(0, 2) === '#!' &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(ct),
      (this.regexpState = null);
  },
  ze = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
re.prototype.parse = function () {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
ze.inFunction.get = function () {
  return (this.currentVarScope().flags & gt) > 0;
};
ze.inGenerator.get = function () {
  return (this.currentVarScope().flags & Ri) > 0;
};
ze.inAsync.get = function () {
  return (this.currentVarScope().flags & Oi) > 0;
};
ze.allowSuper.get = function () {
  return (this.currentThisScope().flags & Bi) > 0;
};
ze.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Di) > 0;
};
ze.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
re.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & gt) > 0;
};
re.extend = function () {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
  return i;
};
re.parse = function (t, r) {
  return new this(r, t).parse();
};
re.parseExpressionAt = function (t, r, i) {
  var s = new this(i, t, r);
  return s.nextToken(), s.parseExpression();
};
re.tokenizer = function (t, r) {
  return new this(r, t);
};
Object.defineProperties(re.prototype, ze);
var me = re.prototype,
  Ws = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
me.strictDirective = function (e) {
  for (;;) {
    (Ee.lastIndex = e), (e += Ee.exec(this.input)[0].length);
    var t = Ws.exec(this.input.slice(e));
    if (!t) return !1;
    if ((t[1] || t[2]) === 'use strict') {
      Ee.lastIndex = e + t[0].length;
      var r = Ee.exec(this.input),
        i = r.index + r[0].length,
        s = this.input.charAt(i);
      return (
        s === ';' ||
        s === '}' ||
        (ve.test(r[0]) &&
          !(/[(`.[+\-/*%<>=,?^&]/.test(s) || (s === '!' && this.input.charAt(i + 1) === '=')))
      );
    }
    (e += t[0].length),
      (Ee.lastIndex = e),
      (e += Ee.exec(this.input)[0].length),
      this.input[e] === ';' && e++;
  }
};
me.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
me.isContextual = function (e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
me.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
me.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
me.canInsertSemicolon = function () {
  return (
    this.type === h.eof ||
    this.type === h.braceR ||
    ve.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
me.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
me.semicolon = function () {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
me.afterTrailingComma = function (e, t) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      t || this.next(),
      !0
    );
};
me.expect = function (e) {
  this.eat(e) || this.unexpected();
};
me.unexpected = function (e) {
  this.raise(e ?? this.start, 'Unexpected token');
};
function Rt() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
me.checkPatternErrors = function (e, t) {
  if (e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(e.trailingComma, 'Comma is not permitted after the rest element');
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, 'Parenthesized pattern');
  }
};
me.checkExpressionErrors = function (e, t) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    i = e.doubleProto;
  if (!t) return r >= 0 || i >= 0;
  r >= 0 &&
    this.raise(r, 'Shorthand property assignments are valid only in destructuring patterns'),
    i >= 0 && this.raiseRecoverable(i, 'Redefinition of __proto__ property');
};
me.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, 'Yield expression cannot be a default value'),
    this.awaitPos && this.raise(this.awaitPos, 'Await expression cannot be a default value');
};
me.isSimpleAssignTarget = function (e) {
  return e.type === 'ParenthesizedExpression'
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === 'Identifier' || e.type === 'MemberExpression';
};
var W = re.prototype;
W.parseTopLevel = function (e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var i = 0, s = Object.keys(this.undefinedExports); i < s.length; i += 1) {
      var a = s[i];
      this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, 'Program')
  );
};
var _r = { kind: 'loop' },
  zs = { kind: 'switch' };
W.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1;
  Ee.lastIndex = this.pos;
  var t = Ee.exec(this.input),
    r = this.pos + t[0].length,
    i = this.input.charCodeAt(r);
  if (i === 91) return !0;
  if (e) return !1;
  if (i === 123) return !0;
  if (Le(i, !0)) {
    for (var s = r + 1; Ge(this.input.charCodeAt(s), !0); ) ++s;
    var a = this.input.slice(r, s);
    if (!Ms.test(a)) return !0;
  }
  return !1;
};
W.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual('async')) return !1;
  Ee.lastIndex = this.pos;
  var e = Ee.exec(this.input),
    t = this.pos + e[0].length;
  return (
    !ve.test(this.input.slice(this.pos, t)) &&
    this.input.slice(t, t + 8) === 'function' &&
    (t + 8 === this.input.length || !Ge(this.input.charAt(t + 8)))
  );
};
W.parseStatement = function (e, t, r) {
  var i = this.type,
    s = this.startNode(),
    a;
  switch ((this.isLet(e) && ((i = h._var), (a = 'let')), i)) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(s, i.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(s);
    case h._do:
      return this.parseDoStatement(s);
    case h._for:
      return this.parseForStatement(s);
    case h._function:
      return (
        e &&
          (this.strict || (e !== 'if' && e !== 'label')) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(s, !1, !e)
      );
    case h._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case h._if:
      return this.parseIfStatement(s);
    case h._return:
      return this.parseReturnStatement(s);
    case h._switch:
      return this.parseSwitchStatement(s);
    case h._throw:
      return this.parseThrowStatement(s);
    case h._try:
      return this.parseTryStatement(s);
    case h._const:
    case h._var:
      return (
        (a = a || this.value), e && a !== 'var' && this.unexpected(), this.parseVarStatement(s, a)
      );
    case h._while:
      return this.parseWhileStatement(s);
    case h._with:
      return this.parseWithStatement(s);
    case h.braceL:
      return this.parseBlock(!0, s);
    case h.semi:
      return this.parseEmptyStatement(s);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && i === h._import) {
        Ee.lastIndex = this.pos;
        var c = Ee.exec(this.input),
          f = this.pos + c[0].length,
          p = this.input.charCodeAt(f);
        if (p === 40 || p === 46) return this.parseExpressionStatement(s, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'",
            )),
        i === h._import ? this.parseImport(s) : this.parseExport(s, r)
      );
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var y = this.value,
        g = this.parseExpression();
      return i === h.name && g.type === 'Identifier' && this.eat(h.colon)
        ? this.parseLabeledStatement(s, y, g, e)
        : this.parseExpressionStatement(s, g);
  }
};
W.parseBreakContinueStatement = function (e, t) {
  var r = t === 'break';
  this.next(),
    this.eat(h.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== h.name
        ? this.unexpected()
        : ((e.label = this.parseIdent()), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var s = this.labels[i];
    if (
      (e.label == null || s.name === e.label.name) &&
      ((s.kind != null && (r || s.kind === 'loop')) || (e.label && r))
    )
      break;
  }
  return (
    i === this.labels.length && this.raise(e.start, 'Unsyntactic ' + t),
    this.finishNode(e, r ? 'BreakStatement' : 'ContinueStatement')
  );
};
W.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement');
};
W.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(_r),
    (e.body = this.parseStatement('do')),
    this.labels.pop(),
    this.expect(h._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(),
    this.finishNode(e, 'DoWhileStatement')
  );
};
W.parseForStatement = function (e) {
  this.next();
  var t =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual('await')
      ? this.lastTokStart
      : -1;
  if ((this.labels.push(_r), this.enterScope(0), this.expect(h.parenL), this.type === h.semi))
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var i = this.startNode(),
      s = r ? 'let' : this.value;
    return (
      this.next(),
      this.parseVar(i, !0, s),
      this.finishNode(i, 'VariableDeclaration'),
      (this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
      i.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === h._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
          this.parseForIn(e, i))
        : (t > -1 && this.unexpected(t), this.parseFor(e, i))
    );
  }
  var a = new Rt(),
    c = this.parseExpression(!0, a);
  return this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual('of'))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === h._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
      this.toAssignable(c, !1, a),
      this.checkLVal(c),
      this.parseForIn(e, c))
    : (this.checkExpressionErrors(a, !0), t > -1 && this.unexpected(t), this.parseFor(e, c));
};
W.parseFunctionStatement = function (e, t, r) {
  return this.next(), this.parseFunction(e, ot | (r ? 0 : lr), !1, t);
};
W.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement('if')),
    (e.alternate = this.eat(h._else) ? this.parseStatement('if') : null),
    this.finishNode(e, 'IfStatement')
  );
};
W.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(h.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, 'ReturnStatement')
  );
};
W.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(h.braceL),
    this.labels.push(zs),
    this.enterScope(0);
  for (var t, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var i = this.type === h._case;
      t && this.finishNode(t, 'SwitchCase'),
        e.cases.push((t = this.startNode())),
        (t.consequent = []),
        this.next(),
        i
          ? (t.test = this.parseExpression())
          : (r && this.raiseRecoverable(this.lastTokStart, 'Multiple default clauses'),
            (r = !0),
            (t.test = null)),
        this.expect(h.colon);
    } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    t && this.finishNode(t, 'SwitchCase'),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, 'SwitchStatement')
  );
};
W.parseThrowStatement = function (e) {
  return (
    this.next(),
    ve.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, 'Illegal newline after throw'),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, 'ThrowStatement')
  );
};
var $s = [];
W.parseTryStatement = function (e) {
  if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === h._catch)) {
    var t = this.startNode();
    if ((this.next(), this.eat(h.parenL))) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === 'Identifier';
      this.enterScope(r ? Mi : 0), this.checkLVal(t.param, r ? ji : Ne), this.expect(h.parenR);
    } else this.options.ecmaVersion < 10 && this.unexpected(), (t.param = null), this.enterScope(0);
    (t.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(t, 'CatchClause'));
  }
  return (
    (e.finalizer = this.eat(h._finally) ? this.parseBlock() : null),
    !e.handler && !e.finalizer && this.raise(e.start, 'Missing catch or finally clause'),
    this.finishNode(e, 'TryStatement')
  );
};
W.parseVarStatement = function (e, t) {
  return (
    this.next(),
    this.parseVar(e, !1, t),
    this.semicolon(),
    this.finishNode(e, 'VariableDeclaration')
  );
};
W.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(_r),
    (e.body = this.parseStatement('while')),
    this.labels.pop(),
    this.finishNode(e, 'WhileStatement')
  );
};
W.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement('with')),
    this.finishNode(e, 'WithStatement')
  );
};
W.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, 'EmptyStatement');
};
W.parseLabeledStatement = function (e, t, r, i) {
  for (var s = 0, a = this.labels; s < a.length; s += 1) {
    var c = a[s];
    c.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (
    var f = this.type.isLoop ? 'loop' : this.type === h._switch ? 'switch' : null,
      p = this.labels.length - 1;
    p >= 0;
    p--
  ) {
    var y = this.labels[p];
    if (y.statementStart === e.start) (y.statementStart = this.start), (y.kind = f);
    else break;
  }
  return (
    this.labels.push({ name: t, kind: f, statementStart: this.start }),
    (e.body = this.parseStatement(i ? (i.indexOf('label') === -1 ? i + 'label' : i) : 'label')),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, 'LabeledStatement')
  );
};
W.parseExpressionStatement = function (e, t) {
  return (e.expression = t), this.semicolon(), this.finishNode(e, 'ExpressionStatement');
};
W.parseBlock = function (e, t, r) {
  for (
    e === void 0 && (e = !0),
      t === void 0 && (t = this.startNode()),
      t.body = [],
      this.expect(h.braceL),
      e && this.enterScope(0);
    this.type !== h.braceR;

  ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(t, 'BlockStatement')
  );
};
W.parseFor = function (e, t) {
  return (
    (e.init = t),
    this.expect(h.semi),
    (e.test = this.type === h.semi ? null : this.parseExpression()),
    this.expect(h.semi),
    (e.update = this.type === h.parenR ? null : this.parseExpression()),
    this.expect(h.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, 'ForStatement')
  );
};
W.parseForIn = function (e, t) {
  var r = this.type === h._in;
  return (
    this.next(),
    t.type === 'VariableDeclaration' &&
    t.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      t.kind !== 'var' ||
      t.declarations[0].id.type !== 'Identifier')
      ? this.raise(
          t.start,
          (r ? 'for-in' : 'for-of') + ' loop variable declaration may not have an initializer',
        )
      : t.type === 'AssignmentPattern' && this.raise(t.start, 'Invalid left-hand side in for-loop'),
    (e.left = t),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(h.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? 'ForInStatement' : 'ForOfStatement')
  );
};
W.parseVar = function (e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (
      (this.parseVarId(i, r),
      this.eat(h.eq)
        ? (i.init = this.parseMaybeAssign(t))
        : r === 'const' &&
            !(this.type === h._in || (this.options.ecmaVersion >= 6 && this.isContextual('of')))
          ? this.unexpected()
          : i.id.type !== 'Identifier' && !(t && (this.type === h._in || this.isContextual('of')))
            ? this.raise(
                this.lastTokEnd,
                'Complex binding patterns require an initialization value',
              )
            : (i.init = null),
      e.declarations.push(this.finishNode(i, 'VariableDeclarator')),
      !this.eat(h.comma))
    )
      break;
  }
  return e;
};
W.parseVarId = function (e, t) {
  (e.id = this.parseBindingAtom()), this.checkLVal(e.id, t === 'var' ? Sr : Ne, !1);
};
var ot = 1,
  lr = 2,
  Ui = 4;
W.parseFunction = function (e, t, r, i) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
      (this.type === h.star && t & lr && this.unexpected(), (e.generator = this.eat(h.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!i),
    t & ot &&
      ((e.id = t & Ui && this.type !== h.name ? null : this.parseIdent()),
      e.id &&
        !(t & lr) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? Sr : Ne) : Vi,
        ));
  var s = this.yieldPos,
    a = this.awaitPos,
    c = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(br(e.async, e.generator)),
    t & ot || (e.id = this.type === h.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = s),
    (this.awaitPos = a),
    (this.awaitIdentPos = c),
    this.finishNode(e, t & ot ? 'FunctionDeclaration' : 'FunctionExpression')
  );
};
W.parseFunctionParams = function (e) {
  this.expect(h.parenL),
    (e.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8)),
    this.checkYieldAwaitInDefaultParams();
};
W.parseClass = function (e, t) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.startNode(),
    s = !1;
  for (i.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a &&
      (i.body.push(a),
      a.type === 'MethodDefinition' &&
        a.kind === 'constructor' &&
        (s && this.raise(a.start, 'Duplicate constructor in the same class'), (s = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(i, 'ClassBody')),
    this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
  );
};
W.parseClassElement = function (e) {
  var t = this;
  if (this.eat(h.semi)) return null;
  var r = this.startNode(),
    i = function (p, y) {
      y === void 0 && (y = !1);
      var g = t.start,
        b = t.startLoc;
      return t.eatContextual(p)
        ? t.type !== h.parenL && (!y || !t.canInsertSemicolon())
          ? !0
          : (r.key && t.unexpected(),
            (r.computed = !1),
            (r.key = t.startNodeAt(g, b)),
            (r.key.name = p),
            t.finishNode(r.key, 'Identifier'),
            !1)
        : !1;
    };
  (r.kind = 'method'), (r.static = i('static'));
  var s = this.eat(h.star),
    a = !1;
  s ||
    (this.options.ecmaVersion >= 8 && i('async', !0)
      ? ((a = !0), (s = this.options.ecmaVersion >= 9 && this.eat(h.star)))
      : i('get')
        ? (r.kind = 'get')
        : i('set') && (r.kind = 'set')),
    r.key || this.parsePropertyName(r);
  var c = r.key,
    f = !1;
  return (
    !r.computed &&
    !r.static &&
    ((c.type === 'Identifier' && c.name === 'constructor') ||
      (c.type === 'Literal' && c.value === 'constructor'))
      ? (r.kind !== 'method' && this.raise(c.start, "Constructor can't have get/set modifier"),
        s && this.raise(c.start, "Constructor can't be a generator"),
        a && this.raise(c.start, "Constructor can't be an async method"),
        (r.kind = 'constructor'),
        (f = e))
      : r.static &&
        c.type === 'Identifier' &&
        c.name === 'prototype' &&
        this.raise(c.start, 'Classes may not have a static property named prototype'),
    this.parseClassMethod(r, s, a, f),
    r.kind === 'get' &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, 'getter should have no params'),
    r.kind === 'set' &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(r.value.start, 'setter should have exactly one param'),
    r.kind === 'set' &&
      r.value.params[0].type === 'RestElement' &&
      this.raiseRecoverable(r.value.params[0].start, 'Setter cannot use rest params'),
    r
  );
};
W.parseClassMethod = function (e, t, r, i) {
  return (e.value = this.parseMethod(t, r, i)), this.finishNode(e, 'MethodDefinition');
};
W.parseClassId = function (e, t) {
  this.type === h.name
    ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, Ne, !1))
    : (t === !0 && this.unexpected(), (e.id = null));
};
W.parseClassSuper = function (e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts() : null;
};
W.parseExport = function (e, t) {
  if ((this.next(), this.eat(h.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual('as')
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(t, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual('from'),
      this.type !== h.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, 'ExportAllDeclaration')
    );
  if (this.eat(h._default)) {
    this.checkExport(t, 'default', this.lastTokStart);
    var r;
    if (this.type === h._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(), r && this.next(), (e.declaration = this.parseFunction(i, ot | Ui, !1, r));
    } else if (this.type === h._class) {
      var s = this.startNode();
      e.declaration = this.parseClass(s, 'nullableID');
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, 'ExportDefaultDeclaration');
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === 'VariableDeclaration'
        ? this.checkVariableExport(t, e.declaration.declarations)
        : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(t)),
      this.eatContextual('from'))
    )
      this.type !== h.string && this.unexpected(), (e.source = this.parseExprAtom());
    else {
      for (var a = 0, c = e.specifiers; a < c.length; a += 1) {
        var f = c[a];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, 'ExportNamedDeclaration');
};
W.checkExport = function (e, t, r) {
  e && (Ot(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), (e[t] = !0));
};
W.checkPatternExport = function (e, t) {
  var r = t.type;
  if (r === 'Identifier') this.checkExport(e, t.name, t.start);
  else if (r === 'ObjectPattern')
    for (var i = 0, s = t.properties; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(e, a);
    }
  else if (r === 'ArrayPattern')
    for (var c = 0, f = t.elements; c < f.length; c += 1) {
      var p = f[c];
      p && this.checkPatternExport(e, p);
    }
  else
    r === 'Property'
      ? this.checkPatternExport(e, t.value)
      : r === 'AssignmentPattern'
        ? this.checkPatternExport(e, t.left)
        : r === 'RestElement'
          ? this.checkPatternExport(e, t.argument)
          : r === 'ParenthesizedExpression' && this.checkPatternExport(e, t.expression);
};
W.checkVariableExport = function (e, t) {
  if (e)
    for (var r = 0, i = t; r < i.length; r += 1) {
      var s = i[r];
      this.checkPatternExport(e, s.id);
    }
};
W.shouldParseExportStatement = function () {
  return (
    this.type.keyword === 'var' ||
    this.type.keyword === 'const' ||
    this.type.keyword === 'class' ||
    this.type.keyword === 'function' ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
W.parseExportSpecifiers = function (e) {
  var t = [],
    r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var i = this.startNode();
    (i.local = this.parseIdent(!0)),
      (i.exported = this.eatContextual('as') ? this.parseIdent(!0) : i.local),
      this.checkExport(e, i.exported.name, i.exported.start),
      t.push(this.finishNode(i, 'ExportSpecifier'));
  }
  return t;
};
W.parseImport = function (e) {
  return (
    this.next(),
    this.type === h.string
      ? ((e.specifiers = $s), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual('from'),
        (e.source = this.type === h.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, 'ImportDeclaration')
  );
};
W.parseImportSpecifiers = function () {
  var e = [],
    t = !0;
  if (this.type === h.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, Ne),
      e.push(this.finishNode(r, 'ImportDefaultSpecifier')),
      !this.eat(h.comma))
    )
      return e;
  }
  if (this.type === h.star) {
    var i = this.startNode();
    return (
      this.next(),
      this.expectContextual('as'),
      (i.local = this.parseIdent()),
      this.checkLVal(i.local, Ne),
      e.push(this.finishNode(i, 'ImportNamespaceSpecifier')),
      e
    );
  }
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t) t = !1;
    else if ((this.expect(h.comma), this.afterTrailingComma(h.braceR))) break;
    var s = this.startNode();
    (s.imported = this.parseIdent(!0)),
      this.eatContextual('as')
        ? (s.local = this.parseIdent())
        : (this.checkUnreserved(s.imported), (s.local = s.imported)),
      this.checkLVal(s.local, Ne),
      e.push(this.finishNode(s, 'ImportSpecifier'));
  }
  return e;
};
W.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
W.isDirectiveCandidate = function (e) {
  return (
    e.type === 'ExpressionStatement' &&
    e.expression.type === 'Literal' &&
    typeof e.expression.value == 'string' &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var Oe = re.prototype;
Oe.toAssignable = function (e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case 'Identifier':
        this.inAsync &&
          e.name === 'await' &&
          this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case 'ObjectPattern':
      case 'ArrayPattern':
      case 'RestElement':
        break;
      case 'ObjectExpression':
        (e.type = 'ObjectPattern'), r && this.checkPatternErrors(r, !0);
        for (var i = 0, s = e.properties; i < s.length; i += 1) {
          var a = s[i];
          this.toAssignable(a, t),
            a.type === 'RestElement' &&
              (a.argument.type === 'ArrayPattern' || a.argument.type === 'ObjectPattern') &&
              this.raise(a.argument.start, 'Unexpected token');
        }
        break;
      case 'Property':
        e.kind !== 'init' &&
          this.raise(e.key.start, "Object pattern can't contain getter or setter"),
          this.toAssignable(e.value, t);
        break;
      case 'ArrayExpression':
        (e.type = 'ArrayPattern'),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, t);
        break;
      case 'SpreadElement':
        (e.type = 'RestElement'),
          this.toAssignable(e.argument, t),
          e.argument.type === 'AssignmentPattern' &&
            this.raise(e.argument.start, 'Rest elements cannot have a default value');
        break;
      case 'AssignmentExpression':
        e.operator !== '=' &&
          this.raise(e.left.end, "Only '=' operator can be used for specifying default value."),
          (e.type = 'AssignmentPattern'),
          delete e.operator,
          this.toAssignable(e.left, t);
      case 'AssignmentPattern':
        break;
      case 'ParenthesizedExpression':
        this.toAssignable(e.expression, t, r);
        break;
      case 'ChainExpression':
        this.raiseRecoverable(e.start, 'Optional chaining cannot appear in left-hand side');
        break;
      case 'MemberExpression':
        if (!t) break;
      default:
        this.raise(e.start, 'Assigning to rvalue');
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
Oe.toAssignableList = function (e, t) {
  for (var r = e.length, i = 0; i < r; i++) {
    var s = e[i];
    s && this.toAssignable(s, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 &&
      t &&
      a &&
      a.type === 'RestElement' &&
      a.argument.type !== 'Identifier' &&
      this.unexpected(a.argument.start);
  }
  return e;
};
Oe.parseSpread = function (e) {
  var t = this.startNode();
  return (
    this.next(), (t.argument = this.parseMaybeAssign(!1, e)), this.finishNode(t, 'SpreadElement')
  );
};
Oe.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, 'RestElement')
  );
};
Oe.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(h.bracketR, !0, !0)),
          this.finishNode(e, 'ArrayPattern')
        );
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Oe.parseBindingList = function (e, t, r) {
  for (var i = [], s = !0; !this.eat(e); )
    if ((s ? (s = !1) : this.expect(h.comma), t && this.type === h.comma)) i.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === h.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a),
          i.push(a),
          this.type === h.comma &&
            this.raise(this.start, 'Comma is not permitted after the rest element'),
          this.expect(e);
        break;
      } else {
        var c = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(c), i.push(c);
      }
    }
  return i;
};
Oe.parseBindingListItem = function (e) {
  return e;
};
Oe.parseMaybeDefault = function (e, t, r) {
  if (((r = r || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(h.eq)))
    return r;
  var i = this.startNodeAt(e, t);
  return (i.left = r), (i.right = this.parseMaybeAssign()), this.finishNode(i, 'AssignmentPattern');
};
Oe.checkLVal = function (e, t, r) {
  switch ((t === void 0 && (t = ni), e.type)) {
    case 'Identifier':
      t === Ne &&
        e.name === 'let' &&
        this.raiseRecoverable(e.start, 'let is disallowed as a lexically bound name'),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (t ? 'Binding ' : 'Assigning to ') + e.name + ' in strict mode',
          ),
        r &&
          (Ot(r, e.name) && this.raiseRecoverable(e.start, 'Argument name clash'),
          (r[e.name] = !0)),
        t !== ni && t !== qi && this.declareName(e.name, t, e.start);
      break;
    case 'ChainExpression':
      this.raiseRecoverable(e.start, 'Optional chaining cannot appear in left-hand side');
      break;
    case 'MemberExpression':
      t && this.raiseRecoverable(e.start, 'Binding member expression');
      break;
    case 'ObjectPattern':
      for (var i = 0, s = e.properties; i < s.length; i += 1) {
        var a = s[i];
        this.checkLVal(a, t, r);
      }
      break;
    case 'Property':
      this.checkLVal(e.value, t, r);
      break;
    case 'ArrayPattern':
      for (var c = 0, f = e.elements; c < f.length; c += 1) {
        var p = f[c];
        p && this.checkLVal(p, t, r);
      }
      break;
    case 'AssignmentPattern':
      this.checkLVal(e.left, t, r);
      break;
    case 'RestElement':
      this.checkLVal(e.argument, t, r);
      break;
    case 'ParenthesizedExpression':
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? 'Binding' : 'Assigning to') + ' rvalue');
  }
};
var z = re.prototype;
z.checkPropClash = function (e, t, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === 'SpreadElement') &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var i = e.key,
      s;
    switch (i.type) {
      case 'Identifier':
        s = i.name;
        break;
      case 'Literal':
        s = String(i.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      s === '__proto__' &&
        a === 'init' &&
        (t.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = i.start)
            : this.raiseRecoverable(i.start, 'Redefinition of __proto__ property')),
        (t.proto = !0));
      return;
    }
    s = '$' + s;
    var c = t[s];
    if (c) {
      var f;
      a === 'init' ? (f = (this.strict && c.init) || c.get || c.set) : (f = c.init || c[a]),
        f && this.raiseRecoverable(i.start, 'Redefinition of property');
    } else c = t[s] = { init: !1, get: !1, set: !1 };
    c[a] = !0;
  }
};
z.parseExpression = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var a = this.startNodeAt(r, i);
    for (a.expressions = [s]; this.eat(h.comma); ) a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, 'SequenceExpression');
  }
  return s;
};
z.parseMaybeAssign = function (e, t, r) {
  if (this.isContextual('yield')) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var i = !1,
    s = -1,
    a = -1;
  t
    ? ((s = t.parenthesizedAssign),
      (a = t.trailingComma),
      (t.parenthesizedAssign = t.trailingComma = -1))
    : ((t = new Rt()), (i = !0));
  var c = this.start,
    f = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start);
  var p = this.parseMaybeConditional(e, t);
  if ((r && (p = r.call(this, p, c, f)), this.type.isAssign)) {
    var y = this.startNodeAt(c, f);
    return (
      (y.operator = this.value),
      (y.left = this.type === h.eq ? this.toAssignable(p, !1, t) : p),
      i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
      t.shorthandAssign >= y.left.start && (t.shorthandAssign = -1),
      this.checkLVal(p),
      this.next(),
      (y.right = this.parseMaybeAssign(e)),
      this.finishNode(y, 'AssignmentExpression')
    );
  } else i && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), a > -1 && (t.trailingComma = a), p;
};
z.parseMaybeConditional = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) return s;
  if (this.eat(h.question)) {
    var a = this.startNodeAt(r, i);
    return (
      (a.test = s),
      (a.consequent = this.parseMaybeAssign()),
      this.expect(h.colon),
      (a.alternate = this.parseMaybeAssign(e)),
      this.finishNode(a, 'ConditionalExpression')
    );
  }
  return s;
};
z.parseExprOps = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || (s.start === r && s.type === 'ArrowFunctionExpression')
    ? s
    : this.parseExprOp(s, r, i, -1, e);
};
z.parseExprOp = function (e, t, r, i, s) {
  var a = this.type.binop;
  if (a != null && (!s || this.type !== h._in) && a > i) {
    var c = this.type === h.logicalOR || this.type === h.logicalAND,
      f = this.type === h.coalesce;
    f && (a = h.logicalAND.binop);
    var p = this.value;
    this.next();
    var y = this.start,
      g = this.startLoc,
      b = this.parseExprOp(this.parseMaybeUnary(null, !1), y, g, a, s),
      E = this.buildBinary(t, r, e, b, p, c || f);
    return (
      ((c && this.type === h.coalesce) ||
        (f && (this.type === h.logicalOR || this.type === h.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses',
        ),
      this.parseExprOp(E, t, r, i, s)
    );
  }
  return e;
};
z.buildBinary = function (e, t, r, i, s, a) {
  var c = this.startNodeAt(e, t);
  return (
    (c.left = r),
    (c.operator = s),
    (c.right = i),
    this.finishNode(c, a ? 'LogicalExpression' : 'BinaryExpression')
  );
};
z.parseMaybeUnary = function (e, t) {
  var r = this.start,
    i = this.startLoc,
    s;
  if (
    this.isContextual('await') &&
    (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (s = this.parseAwait()), (t = !0);
  else if (this.type.prefix) {
    var a = this.startNode(),
      c = this.type === h.incDec;
    (a.operator = this.value),
      (a.prefix = !0),
      this.next(),
      (a.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      c
        ? this.checkLVal(a.argument)
        : this.strict && a.operator === 'delete' && a.argument.type === 'Identifier'
          ? this.raiseRecoverable(a.start, 'Deleting local variable in strict mode')
          : (t = !0),
      (s = this.finishNode(a, c ? 'UpdateExpression' : 'UnaryExpression'));
  } else {
    if (((s = this.parseExprSubscripts(e)), this.checkExpressionErrors(e))) return s;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, i);
      (f.operator = this.value),
        (f.prefix = !1),
        (f.argument = s),
        this.checkLVal(s),
        this.next(),
        (s = this.finishNode(f, 'UpdateExpression'));
    }
  }
  return !t && this.eat(h.starstar)
    ? this.buildBinary(r, i, s, this.parseMaybeUnary(null, !1), '**', !1)
    : s;
};
z.parseExprSubscripts = function (e) {
  var t = this.start,
    r = this.startLoc,
    i = this.parseExprAtom(e);
  if (
    i.type === 'ArrowFunctionExpression' &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
  )
    return i;
  var s = this.parseSubscripts(i, t, r);
  return (
    e &&
      s.type === 'MemberExpression' &&
      (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)),
    s
  );
};
z.parseSubscripts = function (e, t, r, i) {
  for (
    var s =
        this.options.ecmaVersion >= 8 &&
        e.type === 'Identifier' &&
        e.name === 'async' &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      a = !1;
    ;

  ) {
    var c = this.parseSubscript(e, t, r, i, s, a);
    if ((c.optional && (a = !0), c === e || c.type === 'ArrowFunctionExpression')) {
      if (a) {
        var f = this.startNodeAt(t, r);
        (f.expression = c), (c = this.finishNode(f, 'ChainExpression'));
      }
      return c;
    }
    e = c;
  }
};
z.parseSubscript = function (e, t, r, i, s, a) {
  var c = this.options.ecmaVersion >= 11,
    f = c && this.eat(h.questionDot);
  i &&
    f &&
    this.raise(
      this.lastTokStart,
      'Optional chaining cannot appear in the callee of new expressions',
    );
  var p = this.eat(h.bracketL);
  if (p || (f && this.type !== h.parenL && this.type !== h.backQuote) || this.eat(h.dot)) {
    var y = this.startNodeAt(t, r);
    (y.object = e),
      (y.property = p
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== 'never')),
      (y.computed = !!p),
      p && this.expect(h.bracketR),
      c && (y.optional = f),
      (e = this.finishNode(y, 'MemberExpression'));
  } else if (!i && this.eat(h.parenL)) {
    var g = new Rt(),
      b = this.yieldPos,
      E = this.awaitPos,
      S = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var C = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, g);
    if (s && !f && !this.canInsertSemicolon() && this.eat(h.arrow))
      return (
        this.checkPatternErrors(g, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function",
          ),
        (this.yieldPos = b),
        (this.awaitPos = E),
        (this.awaitIdentPos = S),
        this.parseArrowExpression(this.startNodeAt(t, r), C, !0)
      );
    this.checkExpressionErrors(g, !0),
      (this.yieldPos = b || this.yieldPos),
      (this.awaitPos = E || this.awaitPos),
      (this.awaitIdentPos = S || this.awaitIdentPos);
    var v = this.startNodeAt(t, r);
    (v.callee = e),
      (v.arguments = C),
      c && (v.optional = f),
      (e = this.finishNode(v, 'CallExpression'));
  } else if (this.type === h.backQuote) {
    (f || a) &&
      this.raise(
        this.start,
        'Optional chaining cannot appear in the tag of tagged template expressions',
      );
    var P = this.startNodeAt(t, r);
    (P.tag = e),
      (P.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(P, 'TaggedTemplateExpression'));
  }
  return e;
};
z.parseExprAtom = function (e) {
  this.type === h.slash && this.readRegexp();
  var t,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return (
        this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
        (t = this.startNode()),
        this.next(),
        this.type === h.parenL &&
          !this.allowDirectSuper &&
          this.raise(t.start, 'super() call outside constructor of a subclass'),
        this.type !== h.dot &&
          this.type !== h.bracketL &&
          this.type !== h.parenL &&
          this.unexpected(),
        this.finishNode(t, 'Super')
      );
    case h._this:
      return (t = this.startNode()), this.next(), this.finishNode(t, 'ThisExpression');
    case h.name:
      var i = this.start,
        s = this.startLoc,
        a = this.containsEsc,
        c = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !a &&
        c.name === 'async' &&
        !this.canInsertSemicolon() &&
        this.eat(h._function)
      )
        return this.parseFunction(this.startNodeAt(i, s), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow)) return this.parseArrowExpression(this.startNodeAt(i, s), [c], !1);
        if (this.options.ecmaVersion >= 8 && c.name === 'async' && this.type === h.name && !a)
          return (
            (c = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(i, s), [c], !0)
          );
      }
      return c;
    case h.regexp:
      var f = this.value;
      return (
        (t = this.parseLiteral(f.value)), (t.regex = { pattern: f.pattern, flags: f.flags }), t
      );
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return (
        (t = this.startNode()),
        (t.value = this.type === h._null ? null : this.type === h._true),
        (t.raw = this.type.keyword),
        this.next(),
        this.finishNode(t, 'Literal')
      );
    case h.parenL:
      var p = this.start,
        y = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(y) &&
            (e.parenthesizedAssign = p),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = p)),
        y
      );
    case h.bracketL:
      return (
        (t = this.startNode()),
        this.next(),
        (t.elements = this.parseExprList(h.bracketR, !0, !0, e)),
        this.finishNode(t, 'ArrayExpression')
      );
    case h.braceL:
      return this.parseObj(!1, e);
    case h._function:
      return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
z.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, 'Escape sequence in keyword import');
  var t = this.parseIdent(!0);
  switch (this.type) {
    case h.parenL:
      return this.parseDynamicImport(e);
    case h.dot:
      return (e.meta = t), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
z.parseDynamicImport = function (e) {
  if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(h.parenR))) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR)
      ? this.raiseRecoverable(t, 'Trailing comma is not allowed in import()')
      : this.unexpected(t);
  }
  return this.finishNode(e, 'ImportExpression');
};
z.parseImportMeta = function (e) {
  this.next();
  var t = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== 'meta' &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'",
      ),
    t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
    this.options.sourceType !== 'module' &&
      this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
    this.finishNode(e, 'MetaProperty')
  );
};
z.parseLiteral = function (e) {
  var t = this.startNode();
  return (
    (t.value = e),
    (t.raw = this.input.slice(this.start, this.end)),
    t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, '')),
    this.next(),
    this.finishNode(t, 'Literal')
  );
};
z.parseParenExpression = function () {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
z.parseParenAndDistinguishExpression = function (e) {
  var t = this.start,
    r = this.startLoc,
    i,
    s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start,
      c = this.startLoc,
      f = [],
      p = !0,
      y = !1,
      g = new Rt(),
      b = this.yieldPos,
      E = this.awaitPos,
      S;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if ((p ? (p = !1) : this.expect(h.comma), s && this.afterTrailingComma(h.parenR, !0))) {
        y = !0;
        break;
      } else if (this.type === h.ellipsis) {
        (S = this.start),
          f.push(this.parseParenItem(this.parseRestBinding())),
          this.type === h.comma &&
            this.raise(this.start, 'Comma is not permitted after the rest element');
        break;
      } else f.push(this.parseMaybeAssign(!1, g, this.parseParenItem));
    var C = this.start,
      v = this.startLoc;
    if ((this.expect(h.parenR), e && !this.canInsertSemicolon() && this.eat(h.arrow)))
      return (
        this.checkPatternErrors(g, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = b),
        (this.awaitPos = E),
        this.parseParenArrowList(t, r, f)
      );
    (!f.length || y) && this.unexpected(this.lastTokStart),
      S && this.unexpected(S),
      this.checkExpressionErrors(g, !0),
      (this.yieldPos = b || this.yieldPos),
      (this.awaitPos = E || this.awaitPos),
      f.length > 1
        ? ((i = this.startNodeAt(a, c)),
          (i.expressions = f),
          this.finishNodeAt(i, 'SequenceExpression', C, v))
        : (i = f[0]);
  } else i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var P = this.startNodeAt(t, r);
    return (P.expression = i), this.finishNode(P, 'ParenthesizedExpression');
  } else return i;
};
z.parseParenItem = function (e) {
  return e;
};
z.parseParenArrowList = function (e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var Js = [];
z.parseNew = function () {
  this.containsEsc && this.raiseRecoverable(this.start, 'Escape sequence in keyword new');
  var e = this.startNode(),
    t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== 'target' &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'",
        ),
      r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(e.start, "'new.target' can only be used in functions"),
      this.finishNode(e, 'MetaProperty')
    );
  }
  var i = this.start,
    s = this.startLoc,
    a = this.type === h._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), i, s, !0)),
    a && e.callee.type === 'ImportExpression' && this.raise(i, 'Cannot use new with import()'),
    this.eat(h.parenL)
      ? (e.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1))
      : (e.arguments = Js),
    this.finishNode(e, 'NewExpression')
  );
};
z.parseTemplateElement = function (e) {
  var t = e.isTagged,
    r = this.startNode();
  return (
    this.type === h.invalidTemplate
      ? (t || this.raiseRecoverable(this.start, 'Bad escape sequence in untagged template literal'),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`,
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === h.backQuote),
    this.finishNode(r, 'TemplateElement')
  );
};
z.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var i = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [i]; !i.tail; )
    this.type === h.eof && this.raise(this.pos, 'Unterminated template literal'),
      this.expect(h.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(h.braceR),
      r.quasis.push((i = this.parseTemplateElement({ isTagged: t })));
  return this.next(), this.finishNode(r, 'TemplateLiteral');
};
z.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === 'Identifier' &&
    e.key.name === 'async' &&
    (this.type === h.name ||
      this.type === h.num ||
      this.type === h.string ||
      this.type === h.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === h.star)) &&
    !ve.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
z.parseObj = function (e, t) {
  var r = this.startNode(),
    i = !0,
    s = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (i) i = !1;
    else if (
      (this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
    )
      break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, s, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? 'ObjectPattern' : 'ObjectExpression');
};
z.parseProperty = function (e, t) {
  var r = this.startNode(),
    i,
    s,
    a,
    c;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === h.comma &&
          this.raise(this.start, 'Comma is not permitted after the rest element'),
        this.finishNode(r, 'RestElement'))
      : (this.type === h.parenL &&
          t &&
          (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
          t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, t)),
        this.type === h.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
        this.finishNode(r, 'SpreadElement'));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || t) && ((a = this.start), (c = this.startLoc)),
    e || (i = this.eat(h.star)));
  var f = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !f && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r)
      ? ((s = !0),
        (i = this.options.ecmaVersion >= 9 && this.eat(h.star)),
        this.parsePropertyName(r, t))
      : (s = !1),
    this.parsePropertyValue(r, e, i, s, a, c, t, f),
    this.finishNode(r, 'Property')
  );
};
z.parsePropertyValue = function (e, t, r, i, s, a, c, f) {
  if (((r || i) && this.type === h.colon && this.unexpected(), this.eat(h.colon)))
    (e.value = t
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, c)),
      (e.kind = 'init');
  else if (this.options.ecmaVersion >= 6 && this.type === h.parenL)
    t && this.unexpected(), (e.kind = 'init'), (e.method = !0), (e.value = this.parseMethod(r, i));
  else if (
    !t &&
    !f &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === 'Identifier' &&
    (e.key.name === 'get' || e.key.name === 'set') &&
    this.type !== h.comma &&
    this.type !== h.braceR &&
    this.type !== h.eq
  ) {
    (r || i) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var p = e.kind === 'get' ? 0 : 1;
    if (e.value.params.length !== p) {
      var y = e.value.start;
      e.kind === 'get'
        ? this.raiseRecoverable(y, 'getter should have no params')
        : this.raiseRecoverable(y, 'setter should have exactly one param');
    } else
      e.kind === 'set' &&
        e.value.params[0].type === 'RestElement' &&
        this.raiseRecoverable(e.value.params[0].start, 'Setter cannot use rest params');
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === 'Identifier'
      ? ((r || i) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === 'await' && !this.awaitIdentPos && (this.awaitIdentPos = s),
        (e.kind = 'init'),
        t
          ? (e.value = this.parseMaybeDefault(s, a, e.key))
          : this.type === h.eq && c
            ? (c.shorthandAssign < 0 && (c.shorthandAssign = this.start),
              (e.value = this.parseMaybeDefault(s, a, e.key)))
            : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
z.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(h.bracketR), e.key;
    e.computed = !1;
  }
  return (e.key =
    this.type === h.num || this.type === h.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== 'never'));
};
z.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
z.parseMethod = function (e, t, r) {
  var i = this.startNode(),
    s = this.yieldPos,
    a = this.awaitPos,
    c = this.awaitIdentPos;
  return (
    this.initFunction(i),
    this.options.ecmaVersion >= 6 && (i.generator = e),
    this.options.ecmaVersion >= 8 && (i.async = !!t),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(br(t, i.generator) | Bi | (r ? Di : 0)),
    this.expect(h.parenL),
    (i.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8)),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(i, !1, !0),
    (this.yieldPos = s),
    (this.awaitPos = a),
    (this.awaitIdentPos = c),
    this.finishNode(i, 'FunctionExpression')
  );
};
z.parseArrowExpression = function (e, t, r) {
  var i = this.yieldPos,
    s = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.enterScope(br(r, !1) | Fi),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(t, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = i),
    (this.awaitPos = s),
    (this.awaitIdentPos = a),
    this.finishNode(e, 'ArrowFunctionExpression')
  );
};
z.parseFunctionBody = function (e, t, r) {
  var i = t && this.type !== h.braceL,
    s = this.strict,
    a = !1;
  if (i) (e.body = this.parseMaybeAssign()), (e.expression = !0), this.checkParams(e, !1);
  else {
    var c = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!s || c) &&
      ((a = this.strictDirective(this.end)),
      a &&
        c &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list",
        ));
    var f = this.labels;
    (this.labels = []),
      a && (this.strict = !0),
      this.checkParams(e, !s && !a && !t && !r && this.isSimpleParamList(e.params)),
      this.strict && e.id && this.checkLVal(e.id, qi),
      (e.body = this.parseBlock(!1, void 0, a && !s)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = f);
  }
  this.exitScope();
};
z.isSimpleParamList = function (e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var i = r[t];
    if (i.type !== 'Identifier') return !1;
  }
  return !0;
};
z.checkParams = function (e, t) {
  for (var r = {}, i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    this.checkLVal(a, Sr, t ? null : r);
  }
};
z.parseExprList = function (e, t, r, i) {
  for (var s = [], a = !0; !this.eat(e); ) {
    if (a) a = !1;
    else if ((this.expect(h.comma), t && this.afterTrailingComma(e))) break;
    var c = void 0;
    r && this.type === h.comma
      ? (c = null)
      : this.type === h.ellipsis
        ? ((c = this.parseSpread(i)),
          i && this.type === h.comma && i.trailingComma < 0 && (i.trailingComma = this.start))
        : (c = this.parseMaybeAssign(!1, i)),
      s.push(c);
  }
  return s;
};
z.checkUnreserved = function (e) {
  var t = e.start,
    r = e.end,
    i = e.name;
  if (
    (this.inGenerator &&
      i === 'yield' &&
      this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
    this.inAsync &&
      i === 'await' &&
      this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
    this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"),
    !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf('\\') !== -1))
  ) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(i) &&
      (!this.inAsync &&
        i === 'await' &&
        this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
      this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
  }
};
z.parseIdent = function (e, t) {
  var r = this.startNode();
  return (
    this.type === h.name
      ? (r.name = this.value)
      : this.type.keyword
        ? ((r.name = this.type.keyword),
          (r.name === 'class' || r.name === 'function') &&
            (this.lastTokEnd !== this.lastTokStart + 1 ||
              this.input.charCodeAt(this.lastTokStart) !== 46) &&
            this.context.pop())
        : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, 'Identifier'),
    e ||
      (this.checkUnreserved(r),
      r.name === 'await' && !this.awaitIdentPos && (this.awaitIdentPos = r.start)),
    r
  );
};
z.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return (
    this.next(),
    this.type === h.semi ||
    this.canInsertSemicolon() ||
    (this.type !== h.star && !this.type.startsExpr)
      ? ((t.delegate = !1), (t.argument = null))
      : ((t.delegate = this.eat(h.star)), (t.argument = this.parseMaybeAssign(e))),
    this.finishNode(t, 'YieldExpression')
  );
};
z.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, 'AwaitExpression')
  );
};
var Tt = re.prototype;
Tt.raise = function (e, t) {
  var r = vr(this.input, e);
  t += ' (' + r.line + ':' + r.column + ')';
  var i = new SyntaxError(t);
  throw ((i.pos = e), (i.loc = r), (i.raisedAt = this.pos), i);
};
Tt.raiseRecoverable = Tt.raise;
Tt.curPosition = function () {
  if (this.options.locations) return new Ye(this.curLine, this.pos - this.lineStart);
};
var De = re.prototype,
  Xs = function (t) {
    (this.flags = t), (this.var = []), (this.lexical = []), (this.functions = []);
  };
De.enterScope = function (e) {
  this.scopeStack.push(new Xs(e));
};
De.exitScope = function () {
  this.scopeStack.pop();
};
De.treatFunctionsAsVarInScope = function (e) {
  return e.flags & gt || (!this.inModule && e.flags & ct);
};
De.declareName = function (e, t, r) {
  var i = !1;
  if (t === Ne) {
    var s = this.currentScope();
    (i = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1),
      s.lexical.push(e),
      this.inModule && s.flags & ct && delete this.undefinedExports[e];
  } else if (t === ji) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === Vi) {
    var c = this.currentScope();
    this.treatFunctionsAsVar
      ? (i = c.lexical.indexOf(e) > -1)
      : (i = c.lexical.indexOf(e) > -1 || c.var.indexOf(e) > -1),
      c.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var p = this.scopeStack[f];
      if (
        (p.lexical.indexOf(e) > -1 && !(p.flags & Mi && p.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1)
      ) {
        i = !0;
        break;
      }
      if (
        (p.var.push(e),
        this.inModule && p.flags & ct && delete this.undefinedExports[e],
        p.flags & xr)
      )
        break;
    }
  i && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
De.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
De.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
De.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & xr) return t;
  }
};
De.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & xr && !(t.flags & Fi)) return t;
  }
};
var Ft = function (t, r, i) {
    (this.type = ''),
      (this.start = r),
      (this.end = 0),
      t.options.locations && (this.loc = new mt(t, i)),
      t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
      t.options.ranges && (this.range = [r, 0]);
  },
  Mt = re.prototype;
Mt.startNode = function () {
  return new Ft(this, this.start, this.startLoc);
};
Mt.startNodeAt = function (e, t) {
  return new Ft(this, e, t);
};
function Gi(e, t, r, i) {
  return (
    (e.type = t),
    (e.end = r),
    this.options.locations && (e.loc.end = i),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
Mt.finishNode = function (e, t) {
  return Gi.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Mt.finishNodeAt = function (e, t, r, i) {
  return Gi.call(this, e, t, r, i);
};
var _e = function (t, r, i, s, a) {
    (this.token = t),
      (this.isExpr = !!r),
      (this.preserveSpace = !!i),
      (this.override = s),
      (this.generator = !!a);
  },
  se = {
    b_stat: new _e('{', !1),
    b_expr: new _e('{', !0),
    b_tmpl: new _e('${', !1),
    p_stat: new _e('(', !1),
    p_expr: new _e('(', !0),
    q_tmpl: new _e('`', !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new _e('function', !1),
    f_expr: new _e('function', !0),
    f_expr_gen: new _e('function', !0, !1, null, !0),
    f_gen: new _e('function', !1, !1, null, !0),
  },
  Bt = re.prototype;
Bt.initialContext = function () {
  return [se.b_stat];
};
Bt.braceIsBlock = function (e) {
  var t = this.curContext();
  return t === se.f_expr || t === se.f_stat
    ? !0
    : e === h.colon && (t === se.b_stat || t === se.b_expr)
      ? !t.isExpr
      : e === h._return || (e === h.name && this.exprAllowed)
        ? ve.test(this.input.slice(this.lastTokEnd, this.start))
        : e === h._else || e === h.semi || e === h.eof || e === h.parenR || e === h.arrow
          ? !0
          : e === h.braceL
            ? t === se.b_stat
            : e === h._var || e === h._const || e === h.name
              ? !1
              : !this.exprAllowed;
};
Bt.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === 'function') return t.generator;
  }
  return !1;
};
Bt.updateContext = function (e) {
  var t,
    r = this.type;
  r.keyword && e === h.dot
    ? (this.exprAllowed = !1)
    : (t = r.updateContext)
      ? t.call(this, e)
      : (this.exprAllowed = r.beforeExpr);
};
h.parenR.updateContext = h.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === se.b_stat && this.curContext().token === 'function' && (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
h.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? se.b_stat : se.b_expr), (this.exprAllowed = !0);
};
h.dollarBraceL.updateContext = function () {
  this.context.push(se.b_tmpl), (this.exprAllowed = !0);
};
h.parenL.updateContext = function (e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? se.p_stat : se.p_expr), (this.exprAllowed = !0);
};
h.incDec.updateContext = function () {};
h._function.updateContext = h._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== h.semi &&
  e !== h._else &&
  !(e === h._return && ve.test(this.input.slice(this.lastTokEnd, this.start))) &&
  !((e === h.colon || e === h.braceL) && this.curContext() === se.b_stat)
    ? this.context.push(se.f_expr)
    : this.context.push(se.f_stat),
    (this.exprAllowed = !1);
};
h.backQuote.updateContext = function () {
  this.curContext() === se.q_tmpl ? this.context.pop() : this.context.push(se.q_tmpl),
    (this.exprAllowed = !1);
};
h.star.updateContext = function (e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === se.f_expr
      ? (this.context[t] = se.f_expr_gen)
      : (this.context[t] = se.f_gen);
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function (e) {
  var t = !1;
  this.options.ecmaVersion >= 6 &&
    e !== h.dot &&
    ((this.value === 'of' && !this.exprAllowed) ||
      (this.value === 'yield' && this.inGeneratorContext())) &&
    (t = !0),
    (this.exprAllowed = t);
};
var Wi =
    'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
  zi = Wi + ' Extended_Pictographic',
  Hs = zi,
  Qs = { 9: Wi, 10: zi, 11: Hs },
  si =
    'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
  $i =
    'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
  Ji =
    $i +
    ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
  Ys = Ji + ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
  Ks = { 9: $i, 10: Ji, 11: Ys },
  Xi = {};
function Er(e) {
  var t = (Xi[e] = {
    binary: Ue(Qs[e] + ' ' + si),
    nonBinary: { General_Category: Ue(si), Script: Ue(Ks[e]) },
  });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
Er(9);
Er(10);
Er(11);
var j = re.prototype,
  Re = function (t) {
    (this.parser = t),
      (this.validFlags =
        'gim' + (t.options.ecmaVersion >= 6 ? 'uy' : '') + (t.options.ecmaVersion >= 9 ? 's' : '')),
      (this.unicodeProperties = Xi[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
      (this.source = ''),
      (this.flags = ''),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ''),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
Re.prototype.reset = function (t, r, i) {
  var s = i.indexOf('u') !== -1;
  (this.start = t | 0),
    (this.source = r + ''),
    (this.flags = i),
    (this.switchU = s && this.parser.options.ecmaVersion >= 6),
    (this.switchN = s && this.parser.options.ecmaVersion >= 9);
};
Re.prototype.raise = function (t) {
  this.parser.raiseRecoverable(
    this.start,
    'Invalid regular expression: /' + this.source + '/: ' + t,
  );
};
Re.prototype.at = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    s = i.length;
  if (t >= s) return -1;
  var a = i.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s) return a;
  var c = i.charCodeAt(t + 1);
  return c >= 56320 && c <= 57343 ? (a << 10) + c - 56613888 : a;
};
Re.prototype.nextIndex = function (t, r) {
  r === void 0 && (r = !1);
  var i = this.source,
    s = i.length;
  if (t >= s) return s;
  var a = i.charCodeAt(t),
    c;
  return !(r || this.switchU) ||
    a <= 55295 ||
    a >= 57344 ||
    t + 1 >= s ||
    (c = i.charCodeAt(t + 1)) < 56320 ||
    c > 57343
    ? t + 1
    : t + 2;
};
Re.prototype.current = function (t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
Re.prototype.lookahead = function (t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
Re.prototype.advance = function (t) {
  t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t));
};
Re.prototype.eat = function (t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
function Pt(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
j.validateRegExpFlags = function (e) {
  for (var t = e.validFlags, r = e.flags, i = 0; i < r.length; i++) {
    var s = r.charAt(i);
    t.indexOf(s) === -1 && this.raise(e.start, 'Invalid regular expression flag'),
      r.indexOf(s, i + 1) > -1 && this.raise(e.start, 'Duplicate regular expression flag');
  }
};
j.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
j.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ''),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise('Lone quantifier brackets')),
    e.maxBackReference > e.numCapturingParens && e.raise('Invalid escape');
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var i = r[t];
    e.groupNames.indexOf(i) === -1 && e.raise('Invalid named capture referenced');
  }
};
j.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise('Nothing to repeat'),
    e.eat(123) && e.raise('Lone quantifier brackets');
};
j.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
j.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise('Invalid quantifier'),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
      ? (this.regexp_eatQuantifier(e), !0)
      : !1;
};
j.regexp_eatAssertion = function (e) {
  var t = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if ((this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33)))
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise('Unterminated group'),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = t), !1;
};
j.regexp_eatQuantifier = function (e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1;
};
j.regexp_eatQuantifierPrefix = function (e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
};
j.regexp_eatBracedQuantifier = function (e, t) {
  var r = e.pos;
  if (e.eat(123)) {
    var i = 0,
      s = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((i = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue),
      e.eat(125))
    )
      return s !== -1 && s < i && !t && e.raise('numbers out of order in {} quantifier'), !0;
    e.switchU && !t && e.raise('Incomplete quantifier'), (e.pos = r);
  }
  return !1;
};
j.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
j.regexp_eatReverseSolidusAtomEscape = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatUncapturingGroup = function (e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise('Unterminated group');
    }
    e.pos = t;
  }
  return !1;
};
j.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise('Invalid group'),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise('Unterminated group');
  }
  return !1;
};
j.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
j.regexp_eatInvalidBracedQuantifier = function (e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise('Nothing to repeat'), !1;
};
j.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current();
  return Hi(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
function Hi(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
j.regexp_eatPatternCharacters = function (e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !Hi(r); ) e.advance();
  return e.pos !== t;
};
j.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current();
  return t !== -1 &&
    t !== 36 &&
    !(t >= 40 && t <= 43) &&
    t !== 46 &&
    t !== 63 &&
    t !== 91 &&
    t !== 94 &&
    t !== 124
    ? (e.advance(), !0)
    : !1;
};
j.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise('Duplicate capture group name'),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise('Invalid group');
  }
};
j.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ''), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise('Invalid capture group name');
  }
  return !1;
};
j.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(e))) {
    for (e.lastStringValue += Pt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Pt(e.lastIntValue);
    return !0;
  }
  return !1;
};
j.regexp_eatRegExpIdentifierStart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue),
    Zs(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function Zs(e) {
  return Le(e, !0) || e === 36 || e === 95;
}
j.regexp_eatRegExpIdentifierPart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    i = e.current(r);
  return (
    e.advance(r),
    i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue),
    ea(i) ? ((e.lastIntValue = i), !0) : ((e.pos = t), !1)
  );
};
function ea(e) {
  return Ge(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
j.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise('Invalid unicode escape'), e.raise('Invalid escape')),
      !1);
};
j.regexp_eatBackReference = function (e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU) return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise('Invalid named reference');
  }
  return !1;
};
j.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
j.regexp_eatCControlLetter = function (e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = t;
  }
  return !1;
};
j.regexp_eatZero = function (e) {
  return e.current() === 48 && !Dt(e.lookahead()) ? ((e.lastIntValue = 0), e.advance(), !0) : !1;
};
j.regexp_eatControlEscape = function (e) {
  var t = e.current();
  return t === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : t === 110
      ? ((e.lastIntValue = 10), e.advance(), !0)
      : t === 118
        ? ((e.lastIntValue = 11), e.advance(), !0)
        : t === 102
          ? ((e.lastIntValue = 12), e.advance(), !0)
          : t === 114
            ? ((e.lastIntValue = 13), e.advance(), !0)
            : !1;
};
j.regexp_eatControlLetter = function (e) {
  var t = e.current();
  return Qi(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
function Qi(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
j.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  t === void 0 && (t = !1);
  var r = e.pos,
    i = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var s = e.lastIntValue;
      if (i && s >= 55296 && s <= 56319) {
        var a = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var c = e.lastIntValue;
          if (c >= 56320 && c <= 57343)
            return (e.lastIntValue = (s - 55296) * 1024 + (c - 56320) + 65536), !0;
        }
        (e.pos = a), (e.lastIntValue = s);
      }
      return !0;
    }
    if (i && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && ta(e.lastIntValue))
      return !0;
    i && e.raise('Invalid unicode escape'), (e.pos = r);
  }
  return !1;
};
function ta(e) {
  return e >= 0 && e <= 1114111;
}
j.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? ((e.lastIntValue = 47), !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
j.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
j.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current();
  if (ra(t)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
    )
      return !0;
    e.raise('Invalid property name');
  }
  return !1;
};
function ra(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
j.regexp_eatUnicodePropertyValueExpression = function (e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, i), !0;
    }
  }
  if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s), !0;
  }
  return !1;
};
j.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
  Ot(e.unicodeProperties.nonBinary, t) || e.raise('Invalid property name'),
    e.unicodeProperties.nonBinary[t].test(r) || e.raise('Invalid property value');
};
j.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  e.unicodeProperties.binary.test(t) || e.raise('Invalid property name');
};
j.regexp_eatUnicodePropertyName = function (e) {
  var t = 0;
  for (e.lastStringValue = ''; Yi((t = e.current())); ) (e.lastStringValue += Pt(t)), e.advance();
  return e.lastStringValue !== '';
};
function Yi(e) {
  return Qi(e) || e === 95;
}
j.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0;
  for (e.lastStringValue = ''; ia((t = e.current())); ) (e.lastStringValue += Pt(t)), e.advance();
  return e.lastStringValue !== '';
};
function ia(e) {
  return Yi(e) || Dt(e);
}
j.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
j.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise('Unterminated character class');
  }
  return !1;
};
j.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise('Invalid character class'),
        t !== -1 && r !== -1 && t > r && e.raise('Range out of order in character class');
    }
  }
};
j.regexp_eatClassAtom = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || en(r)) && e.raise('Invalid class escape'), e.raise('Invalid escape');
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
j.regexp_eatClassEscape = function (e) {
  var t = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
j.regexp_eatClassControlLetter = function (e) {
  var t = e.current();
  return Dt(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
j.regexp_eatHexEscapeSequence = function (e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise('Invalid escape'), (e.pos = t);
  }
  return !1;
};
j.regexp_eatDecimalDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Dt((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== t;
};
function Dt(e) {
  return e >= 48 && e <= 57;
}
j.regexp_eatHexDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Ki((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + Zi(r)), e.advance();
  return e.pos !== t;
};
function Ki(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function Zi(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
j.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = t * 8 + r);
    } else e.lastIntValue = t;
    return !0;
  }
  return !1;
};
j.regexp_eatOctalDigit = function (e) {
  var t = e.current();
  return en(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1);
};
function en(e) {
  return e >= 48 && e <= 55;
}
j.regexp_eatFixedHexDigits = function (e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var s = e.current();
    if (!Ki(s)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + Zi(s)), e.advance();
  }
  return !0;
};
var Vt = function (t) {
    (this.type = t.type),
      (this.value = t.value),
      (this.start = t.start),
      (this.end = t.end),
      t.options.locations && (this.loc = new mt(t, t.startLoc, t.endLoc)),
      t.options.ranges && (this.range = [t.start, t.end]);
  },
  $ = re.prototype;
$.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(this.start, 'Escape sequence in keyword ' + this.type.keyword),
    this.options.onToken && this.options.onToken(new Vt(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
$.getToken = function () {
  return this.next(), new Vt(this);
};
typeof Symbol < 'u' &&
  ($[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var t = e.getToken();
        return { done: t.type === h.eof, value: t };
      },
    };
  });
$.curContext = function () {
  return this.context[this.context.length - 1];
};
$.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(h.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
$.readToken = function (e) {
  return Le(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
$.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
$.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    t = this.pos,
    r = this.input.indexOf('*/', (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, 'Unterminated comment'),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Qe.lastIndex = t;
    for (var i; (i = Qe.exec(this.input)) && i.index < this.pos; )
      ++this.curLine, (this.lineStart = i.index + i[0].length);
  }
  this.options.onComment &&
    this.options.onComment(!0, this.input.slice(t + 2, r), t, this.pos, e, this.curPosition());
};
$.skipLineComment = function (e) {
  for (
    var t = this.pos,
      r = this.options.onComment && this.curPosition(),
      i = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !et(i);

  )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(t + e, this.pos),
      t,
      this.pos,
      r,
      this.curPosition(),
    );
};
$.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && yr.test(String.fromCharCode(e)))) ++this.pos;
        else break e;
    }
  }
};
$.finishToken = function (e, t) {
  (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = t), this.updateContext(r);
};
$.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46
    ? ((this.pos += 3), this.finishToken(h.ellipsis))
    : (++this.pos, this.finishToken(h.dot));
};
$.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
      ? this.finishOp(h.assign, 2)
      : this.finishOp(h.slash, 1);
};
$.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1,
    i = e === 42 ? h.star : h.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      t === 42 &&
      (++r, (i = h.starstar), (t = this.input.charCodeAt(this.pos + 2))),
    t === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(i, r)
  );
};
$.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61
    ? this.finishOp(h.assign, 2)
    : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
$.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
$.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e
    ? t === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 || ve.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(h.incDec, 2)
    : t === 61
      ? this.finishOp(h.assign, 2)
      : this.finishOp(h.plusMin, 1);
};
$.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return t === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(h.assign, r + 1)
        : this.finishOp(h.bitShift, r))
    : t === 33 &&
        e === 60 &&
        !this.inModule &&
        this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45
      ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
      : (t === 61 && (r = 2), this.finishOp(h.relational, r));
};
$.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61
    ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
    : e === 61 && t === 62 && this.options.ecmaVersion >= 6
      ? ((this.pos += 2), this.finishToken(h.arrow))
      : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
$.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61) return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
$.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(h.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(h.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + Cr(e) + "'");
};
$.finishOp = function (e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return (this.pos += t), this.finishToken(e, r);
};
$.readRegexp = function () {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, 'Unterminated regular expression');
    var i = this.input.charAt(this.pos);
    if ((ve.test(i) && this.raise(r, 'Unterminated regular expression'), e)) e = !1;
    else {
      if (i === '[') t = !0;
      else if (i === ']' && t) t = !1;
      else if (i === '/' && !t) break;
      e = i === '\\';
    }
    ++this.pos;
  }
  var s = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos,
    c = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var f = this.regexpState || (this.regexpState = new Re(this));
  f.reset(r, s, c), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var p = null;
  try {
    p = new RegExp(s, c);
  } catch {}
  return this.finishToken(h.regexp, { pattern: s, flags: c, value: p });
};
$.readInt = function (e, t, r) {
  for (
    var i = this.options.ecmaVersion >= 12 && t === void 0,
      s = r && this.input.charCodeAt(this.pos) === 48,
      a = this.pos,
      c = 0,
      f = 0,
      p = 0,
      y = t ?? 1 / 0;
    p < y;
    ++p, ++this.pos
  ) {
    var g = this.input.charCodeAt(this.pos),
      b = void 0;
    if (i && g === 95) {
      s &&
        this.raiseRecoverable(
          this.pos,
          'Numeric separator is not allowed in legacy octal numeric literals',
        ),
        f === 95 &&
          this.raiseRecoverable(this.pos, 'Numeric separator must be exactly one underscore'),
        p === 0 &&
          this.raiseRecoverable(
            this.pos,
            'Numeric separator is not allowed at the first of digits',
          ),
        (f = g);
      continue;
    }
    if (
      (g >= 97
        ? (b = g - 97 + 10)
        : g >= 65
          ? (b = g - 65 + 10)
          : g >= 48 && g <= 57
            ? (b = g - 48)
            : (b = 1 / 0),
      b >= e)
    )
      break;
    (f = g), (c = c * e + b);
  }
  return (
    i &&
      f === 95 &&
      this.raiseRecoverable(this.pos - 1, 'Numeric separator is not allowed at the last of digits'),
    this.pos === a || (t != null && this.pos - a !== t) ? null : c
  );
};
function na(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ''));
}
function tn(e) {
  return typeof BigInt != 'function' ? null : BigInt(e.replace(/_/g, ''));
}
$.readRadixNumber = function (e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, 'Expected number in radix ' + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = tn(this.input.slice(t, this.pos))), ++this.pos)
      : Le(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number'),
    this.finishToken(h.num, r)
  );
};
$.readNumber = function (e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, 'Invalid number');
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, 'Invalid number');
  var i = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var s = tn(this.input.slice(t, this.pos));
    return (
      ++this.pos,
      Le(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number'),
      this.finishToken(h.num, s)
    );
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
    i === 46 && !r && (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
    (i === 69 || i === 101) &&
      !r &&
      ((i = this.input.charCodeAt(++this.pos)),
      (i === 43 || i === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(t, 'Invalid number')),
    Le(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number');
  var a = na(this.input.slice(t, this.pos), r);
  return this.finishToken(h.num, a);
};
$.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (t = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
      ++this.pos,
      t > 1114111 && this.invalidStringToken(r, 'Code point out of bounds');
  } else t = this.readHexChar(4);
  return t;
};
function Cr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
$.readString = function (e) {
  for (var t = '', r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, 'Unterminated string constant');
    var i = this.input.charCodeAt(this.pos);
    if (i === e) break;
    i === 92
      ? ((t += this.input.slice(r, this.pos)), (t += this.readEscapedChar(!1)), (r = this.pos))
      : (et(i, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, 'Unterminated string constant'),
        ++this.pos);
  }
  return (t += this.input.slice(r, this.pos++)), this.finishToken(h.string, t);
};
var rn = {};
$.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === rn) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
$.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw rn;
  this.raise(e, t);
};
$.readTmplToken = function () {
  for (var e = '', t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, 'Unterminated template');
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === h.template || this.type === h.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(h.dollarBraceL))
          : (++this.pos, this.finishToken(h.backQuote))
        : ((e += this.input.slice(t, this.pos)), this.finishToken(h.template, e));
    if (r === 92)
      (e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos);
    else if (et(r)) {
      switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (t = this.pos);
    } else ++this.pos;
  }
};
$.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case '\\':
        ++this.pos;
        break;
      case '$':
        if (this.input[this.pos + 1] !== '{') break;
      case '`':
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, 'Unterminated template');
};
$.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, t)) {
    case 110:
      return `
`;
    case 114:
      return '\r';
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Cr(this.readCodePoint());
    case 116:
      return '	';
    case 98:
      return '\b';
    case 118:
      return '\v';
    case 102:
      return '\f';
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && ((this.lineStart = this.pos), ++this.curLine), '';
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(r, 'Invalid escape sequence in template string'), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          s = parseInt(i, 8);
        return (
          s > 255 && ((i = i.slice(0, -1)), (s = parseInt(i, 8))),
          (this.pos += i.length - 1),
          (t = this.input.charCodeAt(this.pos)),
          (i !== '0' || t === 56 || t === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - i.length,
              e ? 'Octal literal in template string' : 'Octal literal in strict mode',
            ),
          String.fromCharCode(s)
        );
      }
      return et(t) ? '' : String.fromCharCode(t);
  }
};
$.readHexChar = function (e) {
  var t = this.pos,
    r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, 'Bad character escape sequence'), r;
};
$.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = '', t = !0, r = this.pos, i = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var s = this.fullCharCodeAtPos();
    if (Ge(s, i)) this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(this.pos, 'Expecting Unicode escape sequence \\uXXXX'),
        ++this.pos;
      var c = this.readCodePoint();
      (t ? Le : Ge)(c, i) || this.invalidStringToken(a, 'Invalid Unicode escape'),
        (e += Cr(c)),
        (r = this.pos);
    } else break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
$.readWord = function () {
  var e = this.readWord1(),
    t = h.name;
  return this.keywords.test(e) && (t = Lt[e]), this.finishToken(t, e);
};
var nn = '7.4.1';
re.acorn = {
  Parser: re,
  version: nn,
  defaultOptions: kt,
  Position: Ye,
  SourceLocation: mt,
  getLineInfo: vr,
  Node: Ft,
  TokenType: Y,
  tokTypes: h,
  keywordTypes: Lt,
  TokContext: _e,
  tokContexts: se,
  isIdentifierChar: Ge,
  isIdentifierStart: Le,
  Token: Vt,
  isNewLine: et,
  lineBreak: ve,
  lineBreakG: Qe,
  nonASCIIwhitespace: yr,
};
function sa(e, t) {
  return re.parse(e, t);
}
function aa(e, t, r) {
  return re.parseExpressionAt(e, t, r);
}
function oa(e, t) {
  return re.tokenizer(e, t);
}
const ua = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Node: Ft,
      Parser: re,
      Position: Ye,
      SourceLocation: mt,
      TokContext: _e,
      Token: Vt,
      TokenType: Y,
      defaultOptions: kt,
      getLineInfo: vr,
      isIdentifierChar: Ge,
      isIdentifierStart: Le,
      isNewLine: et,
      keywordTypes: Lt,
      lineBreak: ve,
      lineBreakG: Qe,
      nonASCIIwhitespace: yr,
      parse: sa,
      parseExpressionAt: aa,
      tokContexts: se,
      tokTypes: h,
      tokenizer: oa,
      version: nn,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var sn = { exports: {} },
  la = {
    quot: '"',
    amp: '&',
    apos: "'",
    lt: '<',
    gt: '>',
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    fnof: 'ƒ',
    circ: 'ˆ',
    tilde: '˜',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    bull: '•',
    hellip: '…',
    permil: '‰',
    prime: '′',
    Prime: '″',
    lsaquo: '‹',
    rsaquo: '›',
    oline: '‾',
    frasl: '⁄',
    euro: '€',
    image: 'ℑ',
    weierp: '℘',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
  };
const ai = rs(ua);
(function (e) {
  const t = la,
    r = /^[\da-fA-F]+$/,
    i = /^\d+$/,
    s = new WeakMap();
  function a(p) {
    p = p.Parser.acorn || p;
    let y = s.get(p);
    if (!y) {
      const g = p.tokTypes,
        b = p.TokContext,
        E = p.TokenType,
        S = new b('<tag', !1),
        C = new b('</tag', !1),
        v = new b('<tag>...</tag>', !0, !0),
        P = { tc_oTag: S, tc_cTag: C, tc_expr: v },
        O = {
          jsxName: new E('jsxName'),
          jsxText: new E('jsxText', { beforeExpr: !0 }),
          jsxTagStart: new E('jsxTagStart', { startsExpr: !0 }),
          jsxTagEnd: new E('jsxTagEnd'),
        };
      (O.jsxTagStart.updateContext = function () {
        this.context.push(v), this.context.push(S), (this.exprAllowed = !1);
      }),
        (O.jsxTagEnd.updateContext = function (L) {
          let V = this.context.pop();
          (V === S && L === g.slash) || V === C
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === v))
            : (this.exprAllowed = !0);
        }),
        (y = { tokContexts: P, tokTypes: O }),
        s.set(p, y);
    }
    return y;
  }
  function c(p) {
    if (!p) return p;
    if (p.type === 'JSXIdentifier') return p.name;
    if (p.type === 'JSXNamespacedName') return p.namespace.name + ':' + p.name.name;
    if (p.type === 'JSXMemberExpression') return c(p.object) + '.' + c(p.property);
  }
  (e.exports = function (p) {
    return (
      (p = p || {}),
      function (y) {
        return f(
          {
            allowNamespaces: p.allowNamespaces !== !1,
            allowNamespacedObjects: !!p.allowNamespacedObjects,
          },
          y,
        );
      }
    );
  }),
    Object.defineProperty(e.exports, 'tokTypes', {
      get: function () {
        return a(ai).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function f(p, y) {
    const g = y.acorn || ai,
      b = a(g),
      E = g.tokTypes,
      S = b.tokTypes,
      C = g.tokContexts,
      v = b.tokContexts.tc_oTag,
      P = b.tokContexts.tc_cTag,
      O = b.tokContexts.tc_expr,
      L = g.isNewLine,
      V = g.isIdentifierStart,
      A = g.isIdentifierChar;
    return class extends y {
      static get acornJsx() {
        return b;
      }
      jsx_readToken() {
        let m = '',
          x = this.pos;
        for (;;) {
          this.pos >= this.input.length && this.raise(this.start, 'Unterminated JSX contents');
          let _ = this.input.charCodeAt(this.pos);
          switch (_) {
            case 60:
            case 123:
              return this.pos === this.start
                ? _ === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(S.jsxTagStart))
                  : this.getTokenFromCode(_)
                : ((m += this.input.slice(x, this.pos)), this.finishToken(S.jsxText, m));
            case 38:
              (m += this.input.slice(x, this.pos)), (m += this.jsx_readEntity()), (x = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                'Unexpected token `' +
                  this.input[this.pos] +
                  '`. Did you mean `' +
                  (_ === 62 ? '&gt;' : '&rbrace;') +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?',
              );
            default:
              L(_)
                ? ((m += this.input.slice(x, this.pos)),
                  (m += this.jsx_readNewLine(!0)),
                  (x = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(m) {
        let x = this.input.charCodeAt(this.pos),
          _;
        return (
          ++this.pos,
          x === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (_ = m
                ? `
`
                : `\r
`))
            : (_ = String.fromCharCode(x)),
          this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
          _
        );
      }
      jsx_readString(m) {
        let x = '',
          _ = ++this.pos;
        for (;;) {
          this.pos >= this.input.length && this.raise(this.start, 'Unterminated string constant');
          let k = this.input.charCodeAt(this.pos);
          if (k === m) break;
          k === 38
            ? ((x += this.input.slice(_, this.pos)), (x += this.jsx_readEntity()), (_ = this.pos))
            : L(k)
              ? ((x += this.input.slice(_, this.pos)),
                (x += this.jsx_readNewLine(!1)),
                (_ = this.pos))
              : ++this.pos;
        }
        return (x += this.input.slice(_, this.pos++)), this.finishToken(E.string, x);
      }
      jsx_readEntity() {
        let m = '',
          x = 0,
          _,
          k = this.input[this.pos];
        k !== '&' && this.raise(this.pos, 'Entity must start with an ampersand');
        let B = ++this.pos;
        for (; this.pos < this.input.length && x++ < 10; ) {
          if (((k = this.input[this.pos++]), k === ';')) {
            m[0] === '#'
              ? m[1] === 'x'
                ? ((m = m.substr(2)), r.test(m) && (_ = String.fromCharCode(parseInt(m, 16))))
                : ((m = m.substr(1)), i.test(m) && (_ = String.fromCharCode(parseInt(m, 10))))
              : (_ = t[m]);
            break;
          }
          m += k;
        }
        return _ || ((this.pos = B), '&');
      }
      jsx_readWord() {
        let m,
          x = this.pos;
        do m = this.input.charCodeAt(++this.pos);
        while (A(m) || m === 45);
        return this.finishToken(S.jsxName, this.input.slice(x, this.pos));
      }
      jsx_parseIdentifier() {
        let m = this.startNode();
        return (
          this.type === S.jsxName
            ? (m.name = this.value)
            : this.type.keyword
              ? (m.name = this.type.keyword)
              : this.unexpected(),
          this.next(),
          this.finishNode(m, 'JSXIdentifier')
        );
      }
      jsx_parseNamespacedName() {
        let m = this.start,
          x = this.startLoc,
          _ = this.jsx_parseIdentifier();
        if (!p.allowNamespaces || !this.eat(E.colon)) return _;
        var k = this.startNodeAt(m, x);
        return (
          (k.namespace = _),
          (k.name = this.jsx_parseIdentifier()),
          this.finishNode(k, 'JSXNamespacedName')
        );
      }
      jsx_parseElementName() {
        if (this.type === S.jsxTagEnd) return '';
        let m = this.start,
          x = this.startLoc,
          _ = this.jsx_parseNamespacedName();
        for (
          this.type === E.dot &&
          _.type === 'JSXNamespacedName' &&
          !p.allowNamespacedObjects &&
          this.unexpected();
          this.eat(E.dot);

        ) {
          let k = this.startNodeAt(m, x);
          (k.object = _),
            (k.property = this.jsx_parseIdentifier()),
            (_ = this.finishNode(k, 'JSXMemberExpression'));
        }
        return _;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case E.braceL:
            let m = this.jsx_parseExpressionContainer();
            return (
              m.expression.type === 'JSXEmptyExpression' &&
                this.raise(m.start, 'JSX attributes must only be assigned a non-empty expression'),
              m
            );
          case S.jsxTagStart:
          case E.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
        }
      }
      jsx_parseEmptyExpression() {
        let m = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(m, 'JSXEmptyExpression', this.start, this.startLoc);
      }
      jsx_parseExpressionContainer() {
        let m = this.startNode();
        return (
          this.next(),
          (m.expression =
            this.type === E.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()),
          this.expect(E.braceR),
          this.finishNode(m, 'JSXExpressionContainer')
        );
      }
      jsx_parseAttribute() {
        let m = this.startNode();
        return this.eat(E.braceL)
          ? (this.expect(E.ellipsis),
            (m.argument = this.parseMaybeAssign()),
            this.expect(E.braceR),
            this.finishNode(m, 'JSXSpreadAttribute'))
          : ((m.name = this.jsx_parseNamespacedName()),
            (m.value = this.eat(E.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(m, 'JSXAttribute'));
      }
      jsx_parseOpeningElementAt(m, x) {
        let _ = this.startNodeAt(m, x);
        _.attributes = [];
        let k = this.jsx_parseElementName();
        for (k && (_.name = k); this.type !== E.slash && this.type !== S.jsxTagEnd; )
          _.attributes.push(this.jsx_parseAttribute());
        return (
          (_.selfClosing = this.eat(E.slash)),
          this.expect(S.jsxTagEnd),
          this.finishNode(_, k ? 'JSXOpeningElement' : 'JSXOpeningFragment')
        );
      }
      jsx_parseClosingElementAt(m, x) {
        let _ = this.startNodeAt(m, x),
          k = this.jsx_parseElementName();
        return (
          k && (_.name = k),
          this.expect(S.jsxTagEnd),
          this.finishNode(_, k ? 'JSXClosingElement' : 'JSXClosingFragment')
        );
      }
      jsx_parseElementAt(m, x) {
        let _ = this.startNodeAt(m, x),
          k = [],
          B = this.jsx_parseOpeningElementAt(m, x),
          R = null;
        if (!B.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case S.jsxTagStart:
                if (((m = this.start), (x = this.startLoc), this.next(), this.eat(E.slash))) {
                  R = this.jsx_parseClosingElementAt(m, x);
                  break e;
                }
                k.push(this.jsx_parseElementAt(m, x));
                break;
              case S.jsxText:
                k.push(this.parseExprAtom());
                break;
              case E.braceL:
                k.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          c(R.name) !== c(B.name) &&
            this.raise(R.start, 'Expected corresponding JSX closing tag for <' + c(B.name) + '>');
        }
        let G = B.name ? 'Element' : 'Fragment';
        return (
          (_['opening' + G] = B),
          (_['closing' + G] = R),
          (_.children = k),
          this.type === E.relational &&
            this.value === '<' &&
            this.raise(this.start, 'Adjacent JSX elements must be wrapped in an enclosing tag'),
          this.finishNode(_, 'JSX' + G)
        );
      }
      jsx_parseText() {
        let m = this.parseLiteral(this.value);
        return (m.type = 'JSXText'), m;
      }
      jsx_parseElement() {
        let m = this.start,
          x = this.startLoc;
        return this.next(), this.jsx_parseElementAt(m, x);
      }
      parseExprAtom(m) {
        return this.type === S.jsxText
          ? this.jsx_parseText()
          : this.type === S.jsxTagStart
            ? this.jsx_parseElement()
            : super.parseExprAtom(m);
      }
      readToken(m) {
        let x = this.curContext();
        if (x === O) return this.jsx_readToken();
        if (x === v || x === P) {
          if (V(m)) return this.jsx_readWord();
          if (m == 62) return ++this.pos, this.finishToken(S.jsxTagEnd);
          if ((m === 34 || m === 39) && x == v) return this.jsx_readString(m);
        }
        return m === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(S.jsxTagStart))
          : super.readToken(m);
      }
      updateContext(m) {
        if (this.type == E.braceL) {
          var x = this.curContext();
          x == v
            ? this.context.push(C.b_expr)
            : x == O
              ? this.context.push(C.b_tmpl)
              : super.updateContext(m),
            (this.exprAllowed = !0);
        } else if (this.type === E.slash && m === S.jsxTagStart)
          (this.context.length -= 2), this.context.push(P), (this.exprAllowed = !1);
        else return super.updateContext(m);
      }
    };
  }
})(sn);
var ca = sn.exports;
const ha = pt(ca);
function an(e, t, r, i, s) {
  r || (r = N),
    (function a(c, f, p) {
      var y = p || c.type,
        g = t[y];
      r[y](c, f, a), g && g(c, f);
    })(e, i, s);
}
function fa(e, t, r, i, s) {
  var a = [];
  r || (r = N),
    (function c(f, p, y) {
      var g = y || f.type,
        b = t[g],
        E = f !== a[a.length - 1];
      E && a.push(f), r[g](f, p, c), b && b(f, p || a, a), E && a.pop();
    })(e, i, s);
}
function Ar(e, t, r) {
  r(e, t);
}
function $e(e, t, r) {}
var N = {};
N.Program = N.BlockStatement = function (e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, 'Statement');
  }
};
N.Statement = Ar;
N.EmptyStatement = $e;
N.ExpressionStatement =
  N.ParenthesizedExpression =
  N.ChainExpression =
    function (e, t, r) {
      return r(e.expression, t, 'Expression');
    };
N.IfStatement = function (e, t, r) {
  r(e.test, t, 'Expression'),
    r(e.consequent, t, 'Statement'),
    e.alternate && r(e.alternate, t, 'Statement');
};
N.LabeledStatement = function (e, t, r) {
  return r(e.body, t, 'Statement');
};
N.BreakStatement = N.ContinueStatement = $e;
N.WithStatement = function (e, t, r) {
  r(e.object, t, 'Expression'), r(e.body, t, 'Statement');
};
N.SwitchStatement = function (e, t, r) {
  r(e.discriminant, t, 'Expression');
  for (var i = 0, s = e.cases; i < s.length; i += 1) {
    var a = s[i];
    a.test && r(a.test, t, 'Expression');
    for (var c = 0, f = a.consequent; c < f.length; c += 1) {
      var p = f[c];
      r(p, t, 'Statement');
    }
  }
};
N.SwitchCase = function (e, t, r) {
  e.test && r(e.test, t, 'Expression');
  for (var i = 0, s = e.consequent; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, 'Statement');
  }
};
N.ReturnStatement =
  N.YieldExpression =
  N.AwaitExpression =
    function (e, t, r) {
      e.argument && r(e.argument, t, 'Expression');
    };
N.ThrowStatement = N.SpreadElement = function (e, t, r) {
  return r(e.argument, t, 'Expression');
};
N.TryStatement = function (e, t, r) {
  r(e.block, t, 'Statement'),
    e.handler && r(e.handler, t),
    e.finalizer && r(e.finalizer, t, 'Statement');
};
N.CatchClause = function (e, t, r) {
  e.param && r(e.param, t, 'Pattern'), r(e.body, t, 'Statement');
};
N.WhileStatement = N.DoWhileStatement = function (e, t, r) {
  r(e.test, t, 'Expression'), r(e.body, t, 'Statement');
};
N.ForStatement = function (e, t, r) {
  e.init && r(e.init, t, 'ForInit'),
    e.test && r(e.test, t, 'Expression'),
    e.update && r(e.update, t, 'Expression'),
    r(e.body, t, 'Statement');
};
N.ForInStatement = N.ForOfStatement = function (e, t, r) {
  r(e.left, t, 'ForInit'), r(e.right, t, 'Expression'), r(e.body, t, 'Statement');
};
N.ForInit = function (e, t, r) {
  e.type === 'VariableDeclaration' ? r(e, t) : r(e, t, 'Expression');
};
N.DebuggerStatement = $e;
N.FunctionDeclaration = function (e, t, r) {
  return r(e, t, 'Function');
};
N.VariableDeclaration = function (e, t, r) {
  for (var i = 0, s = e.declarations; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
N.VariableDeclarator = function (e, t, r) {
  r(e.id, t, 'Pattern'), e.init && r(e.init, t, 'Expression');
};
N.Function = function (e, t, r) {
  e.id && r(e.id, t, 'Pattern');
  for (var i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, 'Pattern');
  }
  r(e.body, t, e.expression ? 'Expression' : 'Statement');
};
N.Pattern = function (e, t, r) {
  e.type === 'Identifier'
    ? r(e, t, 'VariablePattern')
    : e.type === 'MemberExpression'
      ? r(e, t, 'MemberPattern')
      : r(e, t);
};
N.VariablePattern = $e;
N.MemberPattern = Ar;
N.RestElement = function (e, t, r) {
  return r(e.argument, t, 'Pattern');
};
N.ArrayPattern = function (e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, 'Pattern');
  }
};
N.ObjectPattern = function (e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    a.type === 'Property'
      ? (a.computed && r(a.key, t, 'Expression'), r(a.value, t, 'Pattern'))
      : a.type === 'RestElement' && r(a.argument, t, 'Pattern');
  }
};
N.Expression = Ar;
N.ThisExpression = N.Super = N.MetaProperty = $e;
N.ArrayExpression = function (e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, 'Expression');
  }
};
N.ObjectExpression = function (e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
N.FunctionExpression = N.ArrowFunctionExpression = N.FunctionDeclaration;
N.SequenceExpression = function (e, t, r) {
  for (var i = 0, s = e.expressions; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, 'Expression');
  }
};
N.TemplateLiteral = function (e, t, r) {
  for (var i = 0, s = e.quasis; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  for (var c = 0, f = e.expressions; c < f.length; c += 1) {
    var p = f[c];
    r(p, t, 'Expression');
  }
};
N.TemplateElement = $e;
N.UnaryExpression = N.UpdateExpression = function (e, t, r) {
  r(e.argument, t, 'Expression');
};
N.BinaryExpression = N.LogicalExpression = function (e, t, r) {
  r(e.left, t, 'Expression'), r(e.right, t, 'Expression');
};
N.AssignmentExpression = N.AssignmentPattern = function (e, t, r) {
  r(e.left, t, 'Pattern'), r(e.right, t, 'Expression');
};
N.ConditionalExpression = function (e, t, r) {
  r(e.test, t, 'Expression'), r(e.consequent, t, 'Expression'), r(e.alternate, t, 'Expression');
};
N.NewExpression = N.CallExpression = function (e, t, r) {
  if ((r(e.callee, t, 'Expression'), e.arguments))
    for (var i = 0, s = e.arguments; i < s.length; i += 1) {
      var a = s[i];
      r(a, t, 'Expression');
    }
};
N.MemberExpression = function (e, t, r) {
  r(e.object, t, 'Expression'), e.computed && r(e.property, t, 'Expression');
};
N.ExportNamedDeclaration = N.ExportDefaultDeclaration = function (e, t, r) {
  e.declaration &&
    r(
      e.declaration,
      t,
      e.type === 'ExportNamedDeclaration' || e.declaration.id ? 'Statement' : 'Expression',
    ),
    e.source && r(e.source, t, 'Expression');
};
N.ExportAllDeclaration = function (e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, 'Expression');
};
N.ImportDeclaration = function (e, t, r) {
  for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  r(e.source, t, 'Expression');
};
N.ImportExpression = function (e, t, r) {
  r(e.source, t, 'Expression');
};
N.ImportSpecifier =
  N.ImportDefaultSpecifier =
  N.ImportNamespaceSpecifier =
  N.Identifier =
  N.Literal =
    $e;
N.TaggedTemplateExpression = function (e, t, r) {
  r(e.tag, t, 'Expression'), r(e.quasi, t, 'Expression');
};
N.ClassDeclaration = N.ClassExpression = function (e, t, r) {
  return r(e, t, 'Class');
};
N.Class = function (e, t, r) {
  e.id && r(e.id, t, 'Pattern'), e.superClass && r(e.superClass, t, 'Expression'), r(e.body, t);
};
N.ClassBody = function (e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
N.MethodDefinition = N.Property = function (e, t, r) {
  e.computed && r(e.key, t, 'Expression'), r(e.value, t, 'Expression');
};
var pa = bi,
  da = Jn,
  ma = Si,
  ga = '[object Object]',
  ya = Function.prototype,
  va = Object.prototype,
  on = ya.toString,
  xa = va.hasOwnProperty,
  ba = on.call(Object);
function Sa(e) {
  if (!ma(e) || pa(e) != ga) return !1;
  var t = da(e);
  if (t === null) return !0;
  var r = xa.call(t, 'constructor') && t.constructor;
  return typeof r == 'function' && r instanceof r && on.call(r) == ba;
}
var _a = Sa;
const Ea = pt(_a);
var Ca = bi,
  Aa = Xn,
  wa = Si,
  ka = '[object String]';
function Ta(e) {
  return typeof e == 'string' || (!Aa(e) && wa(e) && Ca(e) == ka);
}
var Pa = Ta;
const Ia = pt(Pa);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function oi(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Na(e) {
  var t, r;
  return oi(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((r = t.prototype), !(oi(r) === !1 || r.hasOwnProperty('isPrototypeOf') === !1)));
}
var un = {},
  It =
    (lt && lt.__assign) ||
    function () {
      return (
        (It =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) {
              t = arguments[r];
              for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        It.apply(this, arguments)
      );
    },
  La =
    (lt && lt.__spreadArrays) ||
    function () {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      for (var i = Array(e), s = 0, t = 0; t < r; t++)
        for (var a = arguments[t], c = 0, f = a.length; c < f; c++, s++) i[s] = a[c];
      return i;
    };
Object.defineProperty(un, '__esModule', { value: !0 });
var st = [];
function Oa(e) {
  var t = typeof e;
  return e !== null && (t === 'object' || t === 'function');
}
function Ra(e) {
  return Object.prototype.toString.call(e) === '[object RegExp]';
}
function Fa(e) {
  return Object.getOwnPropertySymbols(e).filter(function (t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function wt(e, t, r) {
  r === void 0 && (r = '');
  var i = { indent: '	', singleQuotes: !0 },
    s = It(It({}, i), t),
    a;
  s.inlineCharacterLimit === void 0
    ? (a = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + s.indent,
      })
    : (a = {
        newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
        newLineOrSpace: '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
        pad: '@@__PRETTY_PRINT_PAD__@@',
        indent: '@@__PRETTY_PRINT_INDENT__@@',
      });
  var c = function (y) {
    if (s.inlineCharacterLimit === void 0) return y;
    var g = y
      .replace(new RegExp(a.newLine, 'g'), '')
      .replace(new RegExp(a.newLineOrSpace, 'g'), ' ')
      .replace(new RegExp(a.pad + '|' + a.indent, 'g'), '');
    return g.length <= s.inlineCharacterLimit
      ? g
      : y
          .replace(
            new RegExp(a.newLine + '|' + a.newLineOrSpace, 'g'),
            `
`,
          )
          .replace(new RegExp(a.pad, 'g'), r)
          .replace(new RegExp(a.indent, 'g'), r + s.indent);
  };
  if (st.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == 'number' ||
    typeof e == 'boolean' ||
    typeof e == 'function' ||
    typeof e == 'symbol' ||
    Ra(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return '[]';
    st.push(e);
    var f =
      '[' +
      a.newLine +
      e
        .map(function (y, g) {
          var b = e.length - 1 === g ? a.newLine : ',' + a.newLineOrSpace,
            E = wt(y, s, r + s.indent);
          return s.transform && (E = s.transform(e, g, E)), a.indent + E + b;
        })
        .join('') +
      a.pad +
      ']';
    return st.pop(), c(f);
  }
  if (Oa(e)) {
    var p = La(Object.keys(e), Fa(e));
    if (
      (s.filter &&
        (p = p.filter(function (g) {
          return s.filter && s.filter(e, g);
        })),
      p.length === 0)
    )
      return '{}';
    st.push(e);
    var f =
      '{' +
      a.newLine +
      p
        .map(function (g, b) {
          var E = p.length - 1 === b ? a.newLine : ',' + a.newLineOrSpace,
            S = typeof g == 'symbol',
            C = !S && /^[a-z$_][a-z$_0-9]*$/i.test(g.toString()),
            v = S || C ? g : wt(g, s),
            P = wt(e[g], s, r + s.indent);
          return s.transform && (P = s.transform(e, g, P)), a.indent + String(v) + ': ' + P + E;
        })
        .join('') +
      a.pad +
      '}';
    return st.pop(), c(f);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (y) {
      return y ===
        `
`
        ? '\\n'
        : '\\r';
    })),
    s.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var Ma = (un.prettyPrint = wt),
  ln = { exports: {} },
  Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wr = Symbol.for('react.element'),
  kr = Symbol.for('react.portal'),
  jt = Symbol.for('react.fragment'),
  qt = Symbol.for('react.strict_mode'),
  Ut = Symbol.for('react.profiler'),
  Gt = Symbol.for('react.provider'),
  Wt = Symbol.for('react.context'),
  Ba = Symbol.for('react.server_context'),
  zt = Symbol.for('react.forward_ref'),
  $t = Symbol.for('react.suspense'),
  Jt = Symbol.for('react.suspense_list'),
  Xt = Symbol.for('react.memo'),
  Ht = Symbol.for('react.lazy'),
  Da = Symbol.for('react.offscreen'),
  cn;
cn = Symbol.for('react.module.reference');
function Ce(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wr:
        switch (((e = e.type), e)) {
          case jt:
          case Ut:
          case qt:
          case $t:
          case Jt:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ba:
              case Wt:
              case zt:
              case Ht:
              case Xt:
              case Gt:
                return e;
              default:
                return t;
            }
        }
      case kr:
        return t;
    }
  }
}
Z.ContextConsumer = Wt;
Z.ContextProvider = Gt;
Z.Element = wr;
Z.ForwardRef = zt;
Z.Fragment = jt;
Z.Lazy = Ht;
Z.Memo = Xt;
Z.Portal = kr;
Z.Profiler = Ut;
Z.StrictMode = qt;
Z.Suspense = $t;
Z.SuspenseList = Jt;
Z.isAsyncMode = function () {
  return !1;
};
Z.isConcurrentMode = function () {
  return !1;
};
Z.isContextConsumer = function (e) {
  return Ce(e) === Wt;
};
Z.isContextProvider = function (e) {
  return Ce(e) === Gt;
};
Z.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === wr;
};
Z.isForwardRef = function (e) {
  return Ce(e) === zt;
};
Z.isFragment = function (e) {
  return Ce(e) === jt;
};
Z.isLazy = function (e) {
  return Ce(e) === Ht;
};
Z.isMemo = function (e) {
  return Ce(e) === Xt;
};
Z.isPortal = function (e) {
  return Ce(e) === kr;
};
Z.isProfiler = function (e) {
  return Ce(e) === Ut;
};
Z.isStrictMode = function (e) {
  return Ce(e) === qt;
};
Z.isSuspense = function (e) {
  return Ce(e) === $t;
};
Z.isSuspenseList = function (e) {
  return Ce(e) === Jt;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === jt ||
    e === Ut ||
    e === qt ||
    e === $t ||
    e === Jt ||
    e === Da ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ht ||
        e.$$typeof === Xt ||
        e.$$typeof === Gt ||
        e.$$typeof === Wt ||
        e.$$typeof === zt ||
        e.$$typeof === cn ||
        e.getModuleId !== void 0))
  );
};
Z.typeOf = Ce;
ln.exports = Z;
var ke = ln.exports,
  Ie = function (e, t) {
    return e === 0 ? '' : new Array(e * t).fill(' ').join('');
  };
function ht(e) {
  '@babel/helpers - typeof';
  return (
    (ht =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ht(e)
  );
}
function ui(e) {
  return Va(e) || ja(e) || qa(e) || Ua();
}
function Va(e) {
  if (Array.isArray(e)) return cr(e);
}
function ja(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function qa(e, t) {
  if (e) {
    if (typeof e == 'string') return cr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cr(e, t);
  }
}
function cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function Ua() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hr(e, t) {
  return e === null ||
    ht(e) !== 'object' ||
    e instanceof Date ||
    e instanceof RegExp ||
    We.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return hr(r, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, i) {
              return (
                i === '_owner' ||
                  (i === 'current' || t.has(e[i]) ? (r[i] = '[Circular]') : (r[i] = hr(e[i], t))),
                r
              );
            }, {}));
}
function Ga(e) {
  return hr(e, new WeakSet());
}
var hn = function (t) {
    return { type: 'string', value: t };
  },
  Wa = function (t) {
    return { type: 'number', value: t };
  },
  za = function (t, r, i, s) {
    return { type: 'ReactElement', displayName: t, props: r, defaultProps: i, childrens: s };
  },
  $a = function (t, r) {
    return { type: 'ReactFragment', key: t, childrens: r };
  },
  Ja = !!We.Fragment,
  fn = function (t) {
    return !t.name || t.name === '_default' ? 'No Display Name' : t.name;
  },
  Xa = function e(t) {
    switch (!0) {
      case !!t.displayName:
        return t.displayName;
      case t.$$typeof === ke.Memo:
        return e(t.type);
      case t.$$typeof === ke.ForwardRef:
        return e(t.render);
      default:
        return fn(t);
    }
  },
  Ha = function (t) {
    switch (!0) {
      case typeof t.type == 'string':
        return t.type;
      case typeof t.type == 'function':
        return t.type.displayName ? t.type.displayName : fn(t.type);
      case ke.isForwardRef(t):
      case ke.isMemo(t):
        return Xa(t.type);
      case ke.isContextConsumer(t):
        return ''.concat(t.type._context.displayName || 'Context', '.Consumer');
      case ke.isContextProvider(t):
        return ''.concat(t.type._context.displayName || 'Context', '.Provider');
      case ke.isLazy(t):
        return 'Lazy';
      case ke.isProfiler(t):
        return 'Profiler';
      case ke.isStrictMode(t):
        return 'StrictMode';
      case ke.isSuspense(t):
        return 'Suspense';
      default:
        return 'UnknownElementType';
    }
  },
  li = function (t, r) {
    return r !== 'children';
  },
  Qa = function (t) {
    return t !== !0 && t !== !1 && t !== null && t !== '';
  },
  ci = function (t, r) {
    var i = {};
    return (
      Object.keys(t)
        .filter(function (s) {
          return r(t[s], s);
        })
        .forEach(function (s) {
          return (i[s] = t[s]);
        }),
      i
    );
  },
  Tr = function e(t, r) {
    var i = r.displayName,
      s = i === void 0 ? Ha : i;
    if (typeof t == 'string') return hn(t);
    if (typeof t == 'number') return Wa(t);
    if (!at.isValidElement(t))
      throw new Error(
        'react-element-to-jsx-string: Expected a React.Element, got `'.concat(ht(t), '`'),
      );
    var a = s(t),
      c = ci(t.props, li);
    t.ref !== null && (c.ref = t.ref);
    var f = t.key;
    typeof f == 'string' && f.search(/^\./) && (c.key = f);
    var p = ci(t.type.defaultProps || {}, li),
      y = at.Children.toArray(t.props.children)
        .filter(Qa)
        .map(function (g) {
          return e(g, r);
        });
    return Ja && t.type === We.Fragment ? $a(f, y) : za(a, c, p, y);
  };
function Ya() {}
var Ka = function (t) {
    return t
      .toString()
      .split(
        `
`,
      )
      .map(function (r) {
        return r.trim();
      })
      .join('');
  },
  hi = Ka,
  pn = function (e, t) {
    var r = t.functionValue,
      i = r === void 0 ? hi : r,
      s = t.showFunctions;
    return i(!s && i === hi ? Ya : e);
  },
  Za = function (e, t, r, i) {
    var s = Ga(e),
      a = Ma(s, {
        transform: function (f, p, y) {
          var g = f[p];
          return g && We.isValidElement(g)
            ? Qt(Tr(g, i), !0, r, i)
            : typeof g == 'function'
              ? pn(g, i)
              : y;
        },
      });
    return t
      ? a
          .replace(/\s+/g, ' ')
          .replace(/{ /g, '{')
          .replace(/ }/g, '}')
          .replace(/\[ /g, '[')
          .replace(/ ]/g, ']')
      : a.replace(/\t/g, Ie(1, i.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(Ie(r + 1, i.tabStop), '$1'),
        );
  },
  eo = function (t) {
    return t.replace(/"/g, '&quot;');
  },
  to = function (t, r, i, s) {
    if (typeof t == 'number') return '{'.concat(String(t), '}');
    if (typeof t == 'string') return '"'.concat(eo(t), '"');
    if (ht(t) === 'symbol') {
      var a = t
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, '$1');
      return a ? "{Symbol('".concat(a, "')}") : '{Symbol()}';
    }
    return typeof t == 'function'
      ? '{'.concat(pn(t, s), '}')
      : We.isValidElement(t)
        ? '{'.concat(Qt(Tr(t, s), !0, i, s), '}')
        : t instanceof Date
          ? isNaN(t.valueOf())
            ? '{new Date(NaN)}'
            : '{new Date("'.concat(t.toISOString(), '")}')
          : Na(t) || Array.isArray(t)
            ? '{'.concat(Za(t, r, i, s), '}')
            : '{'.concat(String(t), '}');
  },
  ro = function (e, t, r, i, s, a, c, f) {
    if (!t && !i)
      throw new Error(
        'The prop "'.concat(e, '" has no value and no default: could not be formatted'),
      );
    var p = t ? r : s,
      y = f.useBooleanShorthandSyntax,
      g = f.tabStop,
      b = to(p, a, c, f),
      E = ' ',
      S = `
`.concat(Ie(c + 1, g)),
      C = b.includes(`
`);
    return (
      y && b === '{false}' && !i
        ? ((E = ''), (S = ''))
        : y && b === '{true}'
          ? ((E += ''.concat(e)), (S += ''.concat(e)))
          : ((E += ''.concat(e, '=').concat(b)), (S += ''.concat(e, '=').concat(b))),
      { attributeFormattedInline: E, attributeFormattedMultiline: S, isMultilineAttribute: C }
    );
  },
  io = function (e, t) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      i = e[e.length - 1];
    return (
      i &&
      (t.type === 'string' || t.type === 'number') &&
      (i.type === 'string' || i.type === 'number')
        ? r.push(hn(String(i.value) + String(t.value)))
        : (i && r.push(i), r.push(t)),
      r
    );
  },
  no = function (t) {
    return ['key', 'ref'].includes(t);
  },
  so = function (e) {
    return function (t) {
      var r = t.includes('key'),
        i = t.includes('ref'),
        s = t.filter(function (c) {
          return !no(c);
        }),
        a = ui(e ? s.sort() : s);
      return i && a.unshift('ref'), r && a.unshift('key'), a;
    };
  };
function ao(e, t) {
  return Array.isArray(t)
    ? function (r) {
        return t.indexOf(r) === -1;
      }
    : function (r) {
        return t(e[r], r);
      };
}
var oo = function (t, r, i, s, a) {
    var c = a.tabStop;
    return t.type === 'string'
      ? r
          .split(
            `
`,
          )
          .map(function (f, p) {
            return p === 0 ? f : ''.concat(Ie(s, c)).concat(f);
          }).join(`
`)
      : r;
  },
  uo = function (t, r, i) {
    return function (s) {
      return oo(s, Qt(s, t, r, i), t, r, i);
    };
  },
  lo = function (t, r) {
    return function (i) {
      var s = Object.keys(t).includes(i);
      return !s || (s && t[i] !== r[i]);
    };
  },
  dn = function (t, r, i, s, a) {
    return a ? Ie(i, s).length + r.length > a : t.length > 1;
  },
  co = function (t, r, i, s, a, c, f) {
    return (dn(t, r, a, c, f) || i) && !s;
  },
  mn = function (e, t, r, i) {
    var s = e.type,
      a = e.displayName,
      c = a === void 0 ? '' : a,
      f = e.childrens,
      p = e.props,
      y = p === void 0 ? {} : p,
      g = e.defaultProps,
      b = g === void 0 ? {} : g;
    if (s !== 'ReactElement')
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          s,
        ),
      );
    var E = i.filterProps,
      S = i.maxInlineAttributesLineLength,
      C = i.showDefaultProps,
      v = i.sortProps,
      P = i.tabStop,
      O = '<'.concat(c),
      L = O,
      V = O,
      A = !1,
      m = [],
      x = ao(y, E);
    Object.keys(y)
      .filter(x)
      .filter(lo(b, y))
      .forEach(function (B) {
        return m.push(B);
      }),
      Object.keys(b)
        .filter(x)
        .filter(function () {
          return C;
        })
        .filter(function (B) {
          return !m.includes(B);
        })
        .forEach(function (B) {
          return m.push(B);
        });
    var _ = so(v)(m);
    if (
      (_.forEach(function (B) {
        var R = ro(B, Object.keys(y).includes(B), y[B], Object.keys(b).includes(B), b[B], t, r, i),
          G = R.attributeFormattedInline,
          q = R.attributeFormattedMultiline,
          D = R.isMultilineAttribute;
        D && (A = !0), (L += G), (V += q);
      }),
      (V += `
`.concat(Ie(r, P))),
      co(_, L, A, t, r, P, S) ? (O = V) : (O = L),
      f && f.length > 0)
    ) {
      var k = r + 1;
      (O += '>'),
        t ||
          ((O += `
`),
          (O += Ie(k, P))),
        (O += f
          .reduce(io, [])
          .map(uo(t, k, i))
          .join(
            t
              ? ''
              : `
`.concat(Ie(k, P)),
          )),
        t ||
          ((O += `
`),
          (O += Ie(k - 1, P))),
        (O += '</'.concat(c, '>'));
    } else dn(_, L, r, P, S) || (O += ' '), (O += '/>');
    return O;
  },
  ho = '',
  fi = 'React.Fragment',
  fo = function (t, r, i) {
    var s = {};
    return (
      r && (s = { key: r }),
      { type: 'ReactElement', displayName: t, props: s, defaultProps: {}, childrens: i }
    );
  },
  po = function (t) {
    var r = t.key;
    return !!r;
  },
  mo = function (t) {
    var r = t.childrens;
    return r.length === 0;
  },
  go = function (e, t, r, i) {
    var s = e.type,
      a = e.key,
      c = e.childrens;
    if (s !== 'ReactFragment')
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          s,
        ),
      );
    var f = i.useFragmentShortSyntax,
      p;
    return f ? (mo(e) || po(e) ? (p = fi) : (p = ho)) : (p = fi), mn(fo(p, a, c), t, r, i);
  },
  yo = ['<', '>', '{', '}'],
  vo = function (t) {
    return yo.some(function (r) {
      return t.includes(r);
    });
  },
  xo = function (t) {
    return vo(t) ? '{`'.concat(t, '`}') : t;
  },
  bo = function (t) {
    var r = t;
    return (
      r.endsWith(' ') && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(' ') && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  Qt = function (e, t, r, i) {
    if (e.type === 'number') return String(e.value);
    if (e.type === 'string') return e.value ? ''.concat(bo(xo(String(e.value)))) : '';
    if (e.type === 'ReactElement') return mn(e, t, r, i);
    if (e.type === 'ReactFragment') return go(e, t, r, i);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  So = function (e, t) {
    return Qt(e, !1, 0, t);
  },
  ut = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = r.filterProps,
      s = i === void 0 ? [] : i,
      a = r.showDefaultProps,
      c = a === void 0 ? !0 : a,
      f = r.showFunctions,
      p = f === void 0 ? !1 : f,
      y = r.functionValue,
      g = r.tabStop,
      b = g === void 0 ? 2 : g,
      E = r.useBooleanShorthandSyntax,
      S = E === void 0 ? !0 : E,
      C = r.useFragmentShortSyntax,
      v = C === void 0 ? !0 : C,
      P = r.sortProps,
      O = P === void 0 ? !0 : P,
      L = r.maxInlineAttributesLineLength,
      V = r.displayName;
    if (!t) throw new Error('react-element-to-jsx-string: Expected a ReactElement');
    var A = {
      filterProps: s,
      showDefaultProps: c,
      showFunctions: p,
      functionValue: y,
      tabStop: b,
      useBooleanShorthandSyntax: S,
      useFragmentShortSyntax: v,
      sortProps: O,
      maxInlineAttributesLineLength: L,
      displayName: V,
    };
    return So(Tr(t, A), A);
  };
const { defaultDecorateStory: _o, addons: Eo, useEffect: Co } = __STORYBOOK_MODULE_PREVIEW_API__,
  { logger: At } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function Ao(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return '';
  let s = [];
  if (r) {
    let a = e.map((c) => {
      let f = c.getPrettyName(),
        p = c.getTypeName();
      return p != null ? `${f}: ${p}` : f;
    });
    s.push(`(${a.join(', ')})`);
  } else s.push('()');
  return i && s.push(`=> ${t.getTypeName()}`), s.join(' ');
}
function wo(e, t) {
  let r = e != null,
    i = t != null;
  if (!r && !i) return '';
  let s = [];
  return r ? s.push('( ... )') : s.push('()'), i && s.push(`=> ${t.getTypeName()}`), s.join(' ');
}
function ko(e) {
  return e.replace(
    /,/g,
    `,\r
`,
  );
}
var fr = 'custom',
  yt = 'object',
  Pr = 'array',
  To = 'class',
  Ke = 'func',
  tt = 'element';
function Ir(e) {
  return hs.includes(e.toLowerCase());
}
var gn = { format: { indent: { style: '  ' }, semicolons: !1 } },
  Po = { ...gn, format: { newline: '' } },
  Io = { ...gn };
function Me(e, t = !1) {
  return Ai.generate(e, t ? Po : Io);
}
function pr(e, t = !1) {
  return t ? No(e) : Me(e);
}
function No(e) {
  let t = Me(e, !0);
  return t.endsWith(' }') || (t = `${t.slice(0, -1)} }`), t;
}
function pi(e, t = !1) {
  return t ? Oo(e) : Lo(e);
}
function Lo(e) {
  let t = Me(e);
  return t.endsWith('  }]') && (t = is(t)), t;
}
function Oo(e) {
  let t = Me(e, !0);
  return t.startsWith('[    ') && (t = t.replace('[    ', '[')), t;
}
var yn = (e) => e.$$typeof === Symbol.for('react.memo'),
  Ro = (e) => e.$$typeof === Symbol.for('react.forward_ref'),
  Nr = { ...N, JSXElement: () => {} },
  Fo = re.extend(ha());
function vt(e) {
  return e != null ? e.name : null;
}
function di(e) {
  return e.filter((t) => t.type === 'ObjectExpression' || t.type === 'ArrayExpression');
}
function vn(e) {
  let t = [];
  return (
    fa(
      e,
      {
        ObjectExpression(r, i) {
          t.push(di(i).length);
        },
        ArrayExpression(r, i) {
          t.push(di(i).length);
        },
      },
      Nr,
    ),
    Math.max(...t)
  );
}
function Mo(e) {
  return { inferredType: { type: 'Identifier', identifier: vt(e) }, ast: e };
}
function Bo(e) {
  return { inferredType: { type: 'Literal' }, ast: e };
}
function Do(e) {
  let t;
  an(
    e.body,
    {
      JSXElement(s) {
        t = s;
      },
    },
    Nr,
  );
  let r = {
      type: t != null ? 'Element' : 'Function',
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    i = vt(e.id);
  return i != null && (r.identifier = i), { inferredType: r, ast: e };
}
function Vo(e) {
  let t;
  return (
    an(
      e.body,
      {
        JSXElement(r) {
          t = r;
        },
      },
      Nr,
    ),
    { inferredType: { type: t != null ? 'Element' : 'Class', identifier: vt(e.id) }, ast: e }
  );
}
function jo(e) {
  let t = { type: 'Element' },
    r = vt(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function qo(e) {
  let t = e.callee.type === 'MemberExpression' ? e.callee.property : e.callee;
  return vt(t) === 'shape' ? xn(e.arguments[0]) : null;
}
function xn(e) {
  return { inferredType: { type: 'Object', depth: vn(e) }, ast: e };
}
function Uo(e) {
  return { inferredType: { type: 'Array', depth: vn(e) }, ast: e };
}
function Go(e) {
  switch (e.type) {
    case 'Identifier':
      return Mo(e);
    case 'Literal':
      return Bo(e);
    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
      return Do(e);
    case 'ClassExpression':
      return Vo(e);
    case 'JSXElement':
      return jo(e);
    case 'CallExpression':
      return qo(e);
    case 'ObjectExpression':
      return xn(e);
    case 'ArrayExpression':
      return Uo(e);
    default:
      return null;
  }
}
function Wo(e) {
  let t = Fo.parse(`(${e})`),
    r = { inferredType: { type: 'Unknown' }, ast: t };
  if (t.body[0] != null) {
    let i = t.body[0];
    switch (i.type) {
      case 'ExpressionStatement': {
        let s = Go(i.expression);
        s != null && (r = s);
        break;
      }
    }
  }
  return r;
}
function Be(e) {
  try {
    return { ...Wo(e) };
  } catch {}
  return { inferredType: { type: 'Unknown' } };
}
var zo = 150;
function de({ name: e, short: t, compact: r, full: i, inferredType: s }) {
  return { name: e, short: t, compact: r, full: i ?? t, inferredType: s };
}
function bn(e) {
  return e.replace(/PropTypes./g, '').replace(/.isRequired/g, '');
}
function mi(e) {
  return e.split(/\r?\n/);
}
function Nt(e, t = !1) {
  return bn(pr(e, t));
}
function gi(e, t = !1) {
  return bn(Me(e, t));
}
function $o(e) {
  switch (e) {
    case 'Object':
      return yt;
    case 'Array':
      return Pr;
    case 'Class':
      return To;
    case 'Function':
      return Ke;
    case 'Element':
      return tt;
    default:
      return fr;
  }
}
function Sn(e, t) {
  let { inferredType: r, ast: i } = Be(e),
    { type: s } = r,
    a,
    c,
    f;
  switch (s) {
    case 'Identifier':
    case 'Literal':
      (a = e), (c = e);
      break;
    case 'Object': {
      let { depth: p } = r;
      (a = yt), (c = p === 1 ? Nt(i, !0) : null), (f = Nt(i));
      break;
    }
    case 'Element': {
      let { identifier: p } = r;
      (a = p != null && !Ir(p) ? p : tt), (c = mi(e).length === 1 ? e : null), (f = e);
      break;
    }
    case 'Array': {
      let { depth: p } = r;
      (a = Pr), (c = p <= 2 ? gi(i, !0) : null), (f = gi(i));
      break;
    }
    default:
      (a = $o(s)), (c = mi(e).length === 1 ? e : null), (f = e);
      break;
  }
  return de({ name: t, short: a, compact: c, full: f, inferredType: s });
}
function Jo({ raw: e }) {
  return e != null ? Sn(e, 'custom') : de({ name: 'custom', short: fr, compact: fr });
}
function Xo(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null)
    ? de({
        name: 'func',
        short: wo(t.params, t.returns),
        compact: null,
        full: Ao(t.params, t.returns),
      })
    : de({ name: 'func', short: Ke, compact: Ke });
}
function Ho(e, t) {
  let r = Object.keys(e.value)
      .map((c) => `${c}: ${Ze(e.value[c], t).full}`)
      .join(', '),
    { inferredType: i, ast: s } = Be(`{ ${r} }`),
    { depth: a } = i;
  return de({
    name: 'shape',
    short: yt,
    compact: a === 1 && s ? Nt(s, !0) : null,
    full: s ? Nt(s) : null,
  });
}
function or(e) {
  return `objectOf(${e})`;
}
function Qo(e, t) {
  let { short: r, compact: i, full: s } = Ze(e.value, t);
  return de({
    name: 'objectOf',
    short: or(r),
    compact: i != null ? or(i) : null,
    full: s && or(s),
  });
}
function Yo(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (i, s) => {
        let { short: a, compact: c, full: f } = Ze(s, t);
        return i.short.push(a), i.compact.push(c), i.full.push(f), i;
      },
      { short: [], compact: [], full: [] },
    );
    return de({
      name: 'union',
      short: r.short.join(' | '),
      compact: r.compact.every((i) => i != null) ? r.compact.join(' | ') : null,
      full: r.full.join(' | '),
    });
  }
  return de({ name: 'union', short: e.value, compact: null });
}
function Ko({ value: e, computed: t }) {
  return t ? Sn(e, 'enumvalue') : de({ name: 'enumvalue', short: e, compact: e });
}
function Zo(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce(
      (r, i) => {
        let { short: s, compact: a, full: c } = Ko(i);
        return r.short.push(s), r.compact.push(a), r.full.push(c), r;
      },
      { short: [], compact: [], full: [] },
    );
    return de({
      name: 'enum',
      short: t.short.join(' | '),
      compact: t.compact.every((r) => r != null) ? t.compact.join(' | ') : null,
      full: t.full.join(' | '),
    });
  }
  return de({ name: 'enum', short: e.value, compact: e.value });
}
function dr(e) {
  return `${e}[]`;
}
function yi(e) {
  return `[${e}]`;
}
function vi(e, t, r) {
  return de({ name: 'arrayOf', short: dr(e), compact: t != null ? yi(t) : null, full: r && yi(r) });
}
function eu(e, t) {
  let { name: r, short: i, compact: s, full: a, inferredType: c } = Ze(e.value, t);
  if (r === 'custom') {
    if (c === 'Object') return vi(i, s, a);
  } else if (r === 'shape') return vi(i, s, a);
  return de({ name: 'arrayOf', short: dr(i), compact: dr(i) });
}
function Ze(e, t) {
  try {
    switch (e.name) {
      case 'custom':
        return Jo(e);
      case 'func':
        return Xo(t);
      case 'shape':
        return Ho(e, t);
      case 'instanceOf':
        return de({ name: 'instanceOf', short: e.value, compact: e.value });
      case 'objectOf':
        return Qo(e, t);
      case 'union':
        return Yo(e, t);
      case 'enum':
        return Zo(e);
      case 'arrayOf':
        return eu(e, t);
      default:
        return de({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return de({ name: 'unknown', short: 'unknown', compact: 'unknown' });
}
function tu(e) {
  let { type: t } = e.docgenInfo;
  if (t == null) return null;
  try {
    switch (t.name) {
      case 'custom':
      case 'shape':
      case 'instanceOf':
      case 'objectOf':
      case 'union':
      case 'enum':
      case 'arrayOf': {
        let { short: r, compact: i, full: s } = Ze(t, e);
        return i != null && !ts(i) ? te(i) : s ? te(r, s) : te(r);
      }
      case 'func': {
        let { short: r, full: i } = Ze(t, e),
          s = r,
          a;
        return i && i.length < zo ? (s = i) : i && (a = ko(i)), te(s, a);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function _n({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let i = pr(t, !0);
    if (!ft(i)) return te(i);
  }
  return te(yt, pr(t));
}
function En({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let i = pi(t, !0);
    if (!ft(i)) return te(i);
  }
  return te(Pr, pi(t));
}
function Lr(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function Yt(e) {
  return `<${e} />`;
}
function Cn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case 'Function':
      return Lr(r, e.hasParams);
    case 'Element':
      return Yt(r);
    default:
      return r;
  }
}
function ru({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null) return te(Cn(e), Me(t));
  let i = Me(t, !0);
  return ft(i) ? te(Ke, Me(t)) : te(i);
}
function iu(e, t) {
  let { inferredType: r } = t,
    { identifier: i } = r;
  if (i != null && !Ir(i)) {
    let s = Cn(r);
    return te(s, e);
  }
  return ft(e) ? te(tt, e) : te(e);
}
function An(e) {
  try {
    let t = Be(e);
    switch (t.inferredType.type) {
      case 'Object':
        return _n(t);
      case 'Function':
        return ru(t);
      case 'Element':
        return iu(e, t);
      case 'Array':
        return En(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function wn(e) {
  return e.$$typeof != null;
}
function kn(e, t) {
  let { name: r } = e;
  return r !== '' && r !== 'anonymous' && r !== t ? r : null;
}
var nu = (e) => te(JSON.stringify(e));
function su(e) {
  let { type: t } = e,
    { displayName: r } = t,
    i = ut(e, {});
  if (r != null) {
    let s = Yt(r);
    return te(s, i);
  }
  if (Ia(t) && Ir(t)) {
    let s = ut(e, { tabStop: 0 }).replace(/\r?\n|\r/g, '');
    if (!ft(s)) return te(s);
  }
  return te(tt, i);
}
var au = (e) => {
    if (wn(e) && e.type != null) return su(e);
    if (Ea(e)) {
      let t = Be(JSON.stringify(e));
      return _n(t);
    }
    if (Array.isArray(e)) {
      let t = Be(JSON.stringify(e));
      return En(t);
    }
    return te(yt);
  },
  ou = (e, t) => {
    let r = !1,
      i;
    if (Gr(e.render)) r = !0;
    else if (e.prototype != null && Gr(e.prototype.render)) r = !0;
    else {
      let a;
      try {
        i = Be(e.toString());
        let { hasParams: c, params: f } = i.inferredType;
        c ? f.length === 1 && f[0].type === 'ObjectPattern' && (a = e({})) : (a = e()),
          a != null && wn(a) && (r = !0);
      } catch {}
    }
    let s = kn(e, t.name);
    if (s != null) {
      if (r) return te(Yt(s));
      i != null && (i = Be(e.toString()));
      let { hasParams: a } = i.inferredType;
      return te(Lr(s, a));
    }
    return te(r ? tt : Ke);
  },
  uu = (e) => te(e.toString()),
  Tn = { string: nu, object: au, function: ou, default: uu };
function lu(e = {}) {
  return { ...Tn, ...e };
}
function Pn(e, t, r = Tn) {
  try {
    switch (typeof e) {
      case 'string':
        return r.string(e, t);
      case 'object':
        return r.object(e, t);
      case 'function':
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function cu(e, t) {
  let { propTypes: r } = t;
  return r != null
    ? Object.keys(r)
        .map((i) => e.find((s) => s.name === i))
        .filter(Boolean)
    : e;
}
var hu = (e, { name: t, type: r }) => {
    let i = r.summary === 'element' || r.summary === 'elementType',
      s = kn(e, t);
    if (s != null) {
      if (i) return te(Yt(s));
      let { hasParams: a } = Be(e.toString()).inferredType;
      return te(Lr(s, a));
    }
    return te(i ? tt : Ke);
  },
  fu = lu({ function: hu });
function pu(e, t) {
  let { propDef: r } = e,
    i = tu(e);
  i != null && (r.type = i);
  let { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let a = An(s.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    let a = Pn(t, r, fu);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function du(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {},
    i = e.map((s) => pu(s, r[s.propDef.name]));
  return cu(i, t);
}
function mu(e, t) {
  let { propDef: r } = e,
    { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let s = An(i.value);
    s != null && (r.defaultValue = s);
  } else if (t != null) {
    let s = Pn(t, r);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function gu(e) {
  return e.map((t) => mu(t));
}
var xi = new Map();
Object.keys(zr).forEach((e) => {
  let t = zr[e];
  xi.set(t, e), xi.set(t.isRequired, e);
});
function yu(e, t) {
  let r = e;
  !Zn(e) && !e.propTypes && yn(e) && (r = e.type);
  let i = es(r, t);
  if (i.length === 0) return [];
  switch (i[0].typeSystem) {
    case Wr.JAVASCRIPT:
      return du(i, e);
    case Wr.TYPESCRIPT:
      return gu(i);
    default:
      return i.map((s) => s.propDef);
  }
}
var vu = (e) => ({ rows: yu(e, 'props') }),
  xu = (e) => {
    if (e) {
      let { rows: t } = vu(e);
      if (t)
        return t.reduce((r, i) => {
          let {
            name: s,
            description: a,
            type: c,
            sbType: f,
            defaultValue: p,
            jsDocTags: y,
            required: g,
          } = i;
          return (
            (r[s] = {
              name: s,
              description: a,
              type: { required: g, ...f },
              table: { type: c, jsDocTags: y, defaultValue: p },
            }),
            r
          );
        }, {});
    }
    return null;
  };
function mr(e) {
  if (We.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((r, i) => ((r[i] = mr(e.props[i])), r), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(mr) : e;
}
var bu = (e, t) => {
    if (typeof e > 'u') return At.warn('Too many skip or undefined component'), null;
    let r = e,
      i = r.type;
    for (let a = 0; a < t.skip; a += 1) {
      if (typeof r > 'u') return At.warn('Cannot skip undefined element'), null;
      if (at.Children.count(r) > 1) return At.warn('Trying to skip an array of elements'), null;
      typeof r.props.children > 'u'
        ? (At.warn('Not enough children to skip elements.'),
          typeof r.type == 'function' &&
            r.type.name === '' &&
            (r = at.createElement(i, { ...r.props })))
        : typeof r.props.children == 'function'
          ? (r = r.props.children())
          : (r = r.props.children);
    }
    let s = {
      ...(typeof t.displayName == 'string'
        ? { showFunctions: !0, displayName: () => t.displayName }
        : {
            displayName: (a) =>
              a.type.displayName ||
              (a.type === Symbol.for('react.profiler') ? 'Profiler' : null) ||
              Kn(a.type, 'displayName') ||
              (a.type.name !== '_default' ? a.type.name : null) ||
              (typeof a.type == 'function' ? 'No Display Name' : null) ||
              (Ro(a.type) ? a.type.render.name : null) ||
              (yn(a.type) ? a.type.type.name : null) ||
              a.type,
          }),
      filterProps: (a, c) => a !== void 0,
      ...t,
    };
    return at.Children.map(e, (a) => {
      let c = typeof a == 'number' ? a.toString() : a,
        f = (typeof ut == 'function' ? ut : ut.default)(mr(c), s);
      if (f.indexOf('&quot;') > -1) {
        let p = f.match(/\S+=\\"([^"]*)\\"/g);
        p &&
          p.forEach((y) => {
            f = f.replace(y, y.replace(/&quot;/g, "'"));
          });
      }
      return f;
    })
      .join(
        `
`,
      )
      .replace(/function\s+noRefCheck\(\)\s+\{\}/g, '() => {}');
  },
  Su = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  _u = (e) => {
    var i;
    let t = (i = e == null ? void 0 : e.parameters.docs) == null ? void 0 : i.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (t == null ? void 0 : t.type) === Ur.DYNAMIC
      ? !1
      : !r || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === Ur.CODE;
  },
  Eu = (e) => {
    var t, r;
    return (
      ((t = e.type) == null ? void 0 : t.displayName) === 'MDXCreateElement' &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  In = (e) => {
    if (!Eu(e)) return e;
    let { mdxType: t, originalType: r, children: i, ...s } = e.props,
      a = [];
    return i && (a = (Array.isArray(i) ? i : [i]).map(In)), We.createElement(r, s, ...a);
  },
  Nn = (e, t) => {
    var g, b;
    let r = Eo.getChannel(),
      i = _u(t),
      s = '';
    Co(() => {
      if (!i) {
        let { id: E, unmappedArgs: S } = t;
        r.emit(Yn, { id: E, source: s, args: S });
      }
    });
    let a = e();
    if (i) return a;
    let c = { ...Su, ...((t == null ? void 0 : t.parameters.jsx) || {}) },
      f =
        (b = (g = t == null ? void 0 : t.parameters.docs) == null ? void 0 : g.source) != null &&
        b.excludeDecorators
          ? t.originalStoryFn(t.args, t)
          : a,
      p = In(f),
      y = bu(p, c);
    return y && (s = y), a;
  },
  ku = (e, t) => {
    let r = t.findIndex((s) => s.originalFn === Nn),
      i = r === -1 ? t : [...t.splice(r, 1), ...t];
    return _o(e, i);
  },
  Tu = { docs: { story: { inline: !0 }, extractArgTypes: xu, extractComponentDescription: Hn } },
  Pu = [Nn],
  Iu = [Qn];
export { ku as applyDecorators, Iu as argTypesEnhancers, Pu as decorators, Tu as parameters };
