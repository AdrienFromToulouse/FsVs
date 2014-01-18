(function (e, undefined) {
  var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = '2.0.3', f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function (e, n) {
      return new x.fn.init(e, n, t);
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function (e, t) {
      return t.toUpperCase();
    }, S = function () {
      o.removeEventListener('DOMContentLoaded', S, !1), e.removeEventListener('load', S, !1), x.ready();
    };
  x.fn = x.prototype = {
    jquery: p,
    constructor: x,
    init: function (e, t, n) {
      var r, i;
      if (!e)
        return this;
      if ('string' == typeof e) {
        if (r = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [
            null,
            e,
            null
          ] : T.exec(e), !r || !r[1] && t)
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
            for (r in t)
              x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function (e, t) {
      return x.each(this, e, t);
    },
    ready: function (e) {
      return x.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ('boolean' == typeof s && (l = s, s = arguments[1] || {}, a = 2), 'object' == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e)
          n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
    return s;
  }, x.extend({
    expando: 'jQuery' + (p + Math.random()).replace(/\D/g, ''),
    noConflict: function (t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function (e) {
      (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger('ready').off('ready')));
    },
    isFunction: function (e) {
      return 'function' === x.type(e);
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? l[m.call(e)] || 'object' : typeof e;
    },
    isPlainObject: function (e) {
      if ('object' !== x.type(e) || e.nodeType || x.isWindow(e))
        return !1;
      try {
        if (e.constructor && !y.call(e.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (t) {
        return !1;
      }
      return !0;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || 'string' != typeof e)
        return null;
      'boolean' == typeof t && (n = t, t = !1), t = t || o;
      var r = C.exec(e), i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: JSON.parse,
    parseXML: function (e) {
      var t, n;
      if (!e || 'string' != typeof e)
        return null;
      try {
        n = new DOMParser(), t = n.parseFromString(e, 'text/xml');
      } catch (r) {
        t = undefined;
      }
      return (!t || t.getElementsByTagName('parsererror').length) && x.error('Invalid XML: ' + e), t;
    },
    noop: function () {
    },
    globalEval: function (e) {
      var t, n = eval;
      e = x.trim(e), e && (1 === e.indexOf('use strict') ? (t = o.createElement('script'), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    },
    camelCase: function (e) {
      return e.replace(k, 'ms-').replace(N, E);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e);
      if (n) {
        if (s) {
          for (; o > i; i++)
            if (r = t.apply(e[i], n), r === !1)
              break;
        } else
          for (i in e)
            if (r = t.apply(e[i], n), r === !1)
              break;
      } else if (s) {
        for (; o > i; i++)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      } else
        for (i in e)
          if (r = t.call(e[i], i, e[i]), r === !1)
            break;
      return e;
    },
    trim: function (e) {
      return null == e ? '' : v.call(e);
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (j(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : g.call(t, e, n);
    },
    merge: function (e, t) {
      var n = t.length, r = e.length, i = 0;
      if ('number' == typeof n)
        for (; n > i; i++)
          e[r++] = t[i];
      else
        while (t[i] !== undefined)
          e[r++] = t[i++];
      return e.length = r, e;
    },
    grep: function (e, t, n) {
      var r, i = [], o = 0, s = e.length;
      for (n = !!n; s > o; o++)
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var r, i = 0, o = e.length, s = j(e), a = [];
      if (s)
        for (; o > i; i++)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      else
        for (i in e)
          r = t(e[i], i, n), null != r && (a[a.length] = r);
      return f.apply([], a);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i;
      return 'string' == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
        return e.apply(t || this, r.concat(d.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
    },
    access: function (e, t, n, r, i, o, s) {
      var a = 0, u = e.length, l = null == n;
      if ('object' === x.type(n)) {
        i = !0;
        for (a in n)
          x.access(e, t, a, n[a], !0, o, s);
      } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(x(e), n);
        })), t))
        for (; u > a; a++)
          t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    now: Date.now,
    swap: function (e, t, n, r) {
      var i, o, s = {};
      for (o in t)
        s[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = s[o];
      return i;
    }
  }), x.ready.promise = function (t) {
    return n || (n = x.Deferred(), 'complete' === o.readyState ? setTimeout(x.ready) : (o.addEventListener('DOMContentLoaded', S, !1), e.addEventListener('load', S, !1))), n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    l['[object ' + t + ']'] = t.toLowerCase();
  });
  function j(e) {
    var t = e.length, n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  t = x(o), function (e, undefined) {
    var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = 'sizzle' + -new Date(), b = e.document, w = 0, T = 0, C = st(), k = st(), N = st(), E = !1, S = function (e, t) {
        return e === t ? (E = !0, 0) : 0;
      }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, F = L.slice, P = L.indexOf || function (e) {
        var t = 0, n = this.length;
        for (; n > t; t++)
          if (this[t] === e)
            return t;
        return -1;
      }, R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', W = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', $ = W.replace('w', 'w#'), B = '\\[' + M + '*(' + W + ')' + M + '*(?:([*^$|!~]?=)' + M + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + $ + ')|)|)' + M + '*\\]', I = ':(' + W + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + B.replace(3, 8) + ')*)|.*)\\)|)', z = RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), _ = RegExp('^' + M + '*,' + M + '*'), X = RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = RegExp(M + '*[+~]'), Y = RegExp('=' + M + '*([^\\]\'"]*)' + M + '*\\]', 'g'), V = RegExp(I), G = RegExp('^' + $ + '$'), J = {
        ID: RegExp('^#(' + W + ')'),
        CLASS: RegExp('^\\.(' + W + ')'),
        TAG: RegExp('^(' + W.replace('w', 'w*') + ')'),
        ATTR: RegExp('^' + B),
        PSEUDO: RegExp('^' + I),
        CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: RegExp('^(?:' + R + ')$', 'i'),
        needsContext: RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
      }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), rt = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
    } catch (it) {
      O = {
        apply: L.length ? function (e, t) {
          H.apply(e, F.call(t));
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    function ot(e, t, r, i) {
      var o, s, a, u, l, f, g, m, x, w;
      if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || 'string' != typeof e)
        return r;
      if (1 !== (u = t.nodeType) && 9 !== u)
        return [];
      if (h && !i) {
        if (o = K.exec(e))
          if (a = o[1]) {
            if (9 === u) {
              if (s = t.getElementById(a), !s || !s.parentNode)
                return r;
              if (s.id === a)
                return r.push(s), r;
            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
              return r.push(s), r;
          } else {
            if (o[2])
              return O.apply(r, t.getElementsByTagName(e)), r;
            if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
              return O.apply(r, t.getElementsByClassName(a)), r;
          }
        if (n.qsa && (!d || !d.test(e))) {
          if (m = g = v, x = t, w = 9 === u && e, 1 === u && 'object' !== t.nodeName.toLowerCase()) {
            f = gt(e), (g = t.getAttribute('id')) ? m = g.replace(tt, '\\$&') : t.setAttribute('id', m), m = '[id=\'' + m + '\'] ', l = f.length;
            while (l--)
              f[l] = m + mt(f[l]);
            x = U.test(e) && t.parentNode || t, w = f.join(',');
          }
          if (w)
            try {
              return O.apply(r, x.querySelectorAll(w)), r;
            } catch (T) {
            } finally {
              g || t.removeAttribute('id');
            }
        }
      }
      return kt(e.replace(z, '$1'), t, r, i);
    }
    function st() {
      var e = [];
      function t(n, r) {
        return e.push(n += ' ') > i.cacheLength && delete t[e.shift()], t[n] = r;
      }
      return t;
    }
    function at(e) {
      return e[v] = !0, e;
    }
    function ut(e) {
      var t = p.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function lt(e, t) {
      var n = e.split('|'), r = e.length;
      while (r--)
        i.attrHandle[n[r]] = t;
    }
    function ct(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r)
        return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function pt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ht(e) {
      return at(function (t) {
        return t = +t, at(function (n, r) {
          var i, o = e([], n.length, t), s = o.length;
          while (s--)
            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    s = ot.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? 'HTML' !== t.nodeName : !1;
    }, n = ot.support = {}, c = ot.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : b, r = t.defaultView;
      return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent('onbeforeunload', function () {
        c();
      }), n.attributes = ut(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), n.getElementsByTagName = ut(function (e) {
        return e.appendChild(t.createComment('')), !e.getElementsByTagName('*').length;
      }), n.getElementsByClassName = ut(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), n.getById = ut(function (e) {
        return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
      }), n.getById ? (i.find.ID = function (e, t) {
        if (typeof t.getElementById !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete i.find.ID, i.filter.ID = function (e) {
        var t = e.replace(nt, rt);
        return function (e) {
          var n = typeof e.getAttributeNode !== j && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          while (n = o[i++])
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined;
      }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || d.push('\\[' + M + '*(?:value|' + R + ')'), e.querySelectorAll(':checked').length || d.push(':checked');
      }), ut(function (e) {
        var n = t.createElement('input');
        n.setAttribute('type', 'hidden'), e.appendChild(n).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && d.push('[*^$]=' + M + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || d.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), d.push(',.*:');
      })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
        n.disconnectedMatch = m.call(e, 'div'), m.call(e, '[s!=\'\']:x'), g.push('!=', I);
      }), d = d.length && RegExp(d.join('|')), g = g.length && RegExp(g.join('|')), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          while (t = t.parentNode)
            if (t === e)
              return !0;
        return !1;
      }, S = f.compareDocumentPosition ? function (e, r) {
        if (e === r)
          return E = !0, 0;
        var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
        return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, n) {
        var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
        if (e === n)
          return E = !0, 0;
        if (!o || !s)
          return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
        if (o === s)
          return ct(e, n);
        r = e;
        while (r = r.parentNode)
          a.unshift(r);
        r = n;
        while (r = r.parentNode)
          u.unshift(r);
        while (a[i] === u[i])
          i++;
        return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
      }, t) : p;
    }, ot.matches = function (e, t) {
      return ot(e, null, null, t);
    }, ot.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, '=\'$1\']'), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
        try {
          var r = m.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return r;
        } catch (i) {
        }
      return ot(t, p, null, [e]).length > 0;
    }, ot.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && c(e), y(e, t);
    }, ot.attr = function (e, t) {
      (e.ownerDocument || e) !== p && c(e);
      var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
      return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
    }, ot.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e);
    }, ot.uniqueSort = function (e) {
      var t, r = [], i = 0, o = 0;
      if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
        while (t = e[o++])
          t === e[o] && (i = r.push(o));
        while (i--)
          e.splice(r[i], 1);
      }
      return e;
    }, o = ot.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += o(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r]; r++)
          n += o(t);
      return n;
    }, i = ot.selectors = {
      cacheLength: 50,
      createPseudo: at,
      match: J,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || '').replace(nt, rt), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && ot.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t, n = !e[5] && e[2];
          return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(nt, rt).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = C[e + ' '];
          return t || (t = RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && C(e, function (e) {
            return t.test('string' == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = ot.attr(r, e);
            return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n) : '*=' === t ? n && i.indexOf(n) > -1 : '$=' === t ? n && i.slice(-n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > -1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), s = 'last' !== e.slice(-4), a = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l, c, p, f, h, d, g = o !== s ? 'nextSibling' : 'previousSibling', m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
            if (m) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g])
                    if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                      return !1;
                  d = g = 'only' === e && !d && 'nextSibling';
                }
                return !0;
              }
              if (d = [s ? m.firstChild : m.lastChild], s && x) {
                c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [
                      w,
                      h,
                      f
                    ];
                    break;
                  }
              } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w)
                f = l[1];
              else
                while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
                  if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [
                      w,
                      f
                    ]), p === t))
                    break;
              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error('unsupported pseudo: ' + e);
          return r[v] ? r(t) : r.length > 1 ? (n = [
            e,
            e,
            '',
            t
          ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
            var i, o = r(e, t), s = o.length;
            while (s--)
              i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: at(function (e) {
          var t = [], n = [], r = a(e.replace(z, '$1'));
          return r[v] ? at(function (e, t, n, i) {
            var o, s = r(e, null, i, []), a = e.length;
            while (a--)
              (o = s[a]) && (e[a] = !(t[a] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: at(function (e) {
          return function (t) {
            return ot(e, t).length > 0;
          };
        }),
        contains: at(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }),
        lang: at(function (e) {
          return G.test(e || '') || ot.error('unsupported lang: ' + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
            var n;
            do
              if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === f;
        },
        focus: function (e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !i.pseudos.empty(e);
        },
        header: function (e) {
          return et.test(e.nodeName);
        },
        input: function (e) {
          return Z.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;
          for (; t > n; n += 2)
            e.push(n);
          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;
          for (; t > ++r;)
            e.push(r);
          return e;
        })
      }
    }, i.pseudos.nth = i.pseudos.eq;
    for (t in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      i.pseudos[t] = pt(t);
    for (t in {
        submit: !0,
        reset: !0
      })
      i.pseudos[t] = ft(t);
    function dt() {
    }
    dt.prototype = i.filters = i.pseudos, i.setFilters = new dt();
    function gt(e, t) {
      var n, r, o, s, a, u, l, c = k[e + ' '];
      if (c)
        return t ? 0 : c.slice(0);
      a = e, u = [], l = i.preFilter;
      while (a) {
        (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), a = a.slice(n.length));
        for (s in i.filter)
          !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
            value: n,
            type: s,
            matches: r
          }), a = a.slice(n.length));
        if (!n)
          break;
      }
      return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
    }
    function mt(e) {
      var t = 0, n = e.length, r = '';
      for (; n > t; t++)
        r += e[t].value;
      return r;
    }
    function yt(e, t, n) {
      var i = t.dir, o = n && 'parentNode' === i, s = T++;
      return t.first ? function (t, n, r) {
        while (t = t[i])
          if (1 === t.nodeType || o)
            return e(t, n, r);
      } : function (t, n, a) {
        var u, l, c, p = w + ' ' + s;
        if (a) {
          while (t = t[i])
            if ((1 === t.nodeType || o) && e(t, n, a))
              return !0;
        } else
          while (t = t[i])
            if (1 === t.nodeType || o)
              if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
                if ((u = l[1]) === !0 || u === r)
                  return u === !0;
              } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0)
                return !0;
      };
    }
    function vt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function xt(e, t, n, r, i) {
      var o, s = [], a = 0, u = e.length, l = null != t;
      for (; u > a; a++)
        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s;
    }
    function bt(e, t, n, r, i, o) {
      return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function (o, s, a, u) {
        var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || '*', a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
        if (n && n(m, y, a, u), r) {
          l = xt(y, h), r(l, [], a, u), c = l.length;
          while (c--)
            (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;
              while (c--)
                (p = y[c]) && l.push(m[c] = p);
              i(null, y = [], l, u);
            }
            c = y.length;
            while (c--)
              (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
          }
        } else
          y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
      });
    }
    function wt(e) {
      var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[' '], l = s ? 1 : 0, c = yt(function (e) {
          return e === t;
        }, a, !0), p = yt(function (e) {
          return P.call(t, e) > -1;
        }, a, !0), f = [function (e, n, r) {
            return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          }];
      for (; o > l; l++)
        if (n = i.relative[e[l].type])
          f = [yt(vt(f), n)];
        else {
          if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
            for (r = ++l; o > r; r++)
              if (i.relative[e[r].type])
                break;
            return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e));
          }
          f.push(n);
        }
      return vt(f);
    }
    function Tt(e, t) {
      var n = 0, o = t.length > 0, s = e.length > 0, a = function (a, l, c, f, h) {
          var d, g, m, y = [], v = 0, x = '0', b = a && [], T = null != h, C = u, k = a || s && i.find.TAG('*', h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || 0.1;
          for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
            if (s && d) {
              g = 0;
              while (m = e[g++])
                if (m(d, l, c)) {
                  f.push(d);
                  break;
                }
              T && (w = N, r = ++n);
            }
            o && ((d = !m && d) && v--, a && b.push(d));
          }
          if (v += x, o && x !== v) {
            g = 0;
            while (m = t[g++])
              m(b, y, l, c);
            if (a) {
              if (v > 0)
                while (x--)
                  b[x] || y[x] || (y[x] = q.call(f));
              y = xt(y);
            }
            O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
          }
          return T && (w = N, u = C), b;
        };
      return o ? at(a) : a;
    }
    a = ot.compile = function (e, t) {
      var n, r = [], i = [], o = N[e + ' '];
      if (!o) {
        t || (t = gt(e)), n = t.length;
        while (n--)
          o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
        o = N(e, Tt(i, r));
      }
      return o;
    };
    function Ct(e, t, n) {
      var r = 0, i = t.length;
      for (; i > r; r++)
        ot(e, t[r], n);
      return n;
    }
    function kt(e, t, r, o) {
      var s, u, l, c, p, f = gt(e);
      if (!o && 1 === f.length) {
        if (u = f[0] = f[0].slice(0), u.length > 2 && 'ID' === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
          if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t)
            return r;
          e = e.slice(u.shift().value.length);
        }
        s = J.needsContext.test(e) ? 0 : u.length;
        while (s--) {
          if (l = u[s], i.relative[c = l.type])
            break;
          if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
            if (u.splice(s, 1), e = o.length && mt(u), !e)
              return O.apply(r, o), r;
            break;
          }
        }
      }
      return a(e, f)(o, t, !h, r, U.test(e)), r;
    }
    n.sortStable = v.split('').sort(S).join('') === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement('div'));
    }), ut(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || lt('type|href|height|width', function (e, t, n) {
      return n ? undefined : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ut(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || lt('value', function (e, t, n) {
      return n || 'input' !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute('disabled');
    }) || lt(R, function (e, t, n) {
      var r;
      return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
    }), x.find = ot, x.expr = ot.selectors, x.expr[':'] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
  }(e);
  var D = {};
  function A(e) {
    var t = D[e] = {};
    return x.each(e.match(w) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  x.Callbacks = function (e) {
    e = 'string' == typeof e ? D[e] || A(e) : x.extend({}, e);
    var t, n, r, i, o, s, a = [], u = !e.once && [], l = function (p) {
        for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
          if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
      }, c = {
        add: function () {
          if (a) {
            var n = a.length;
            (function s(t) {
              x.each(t, function (t, n) {
                var r = x.type(n);
                'function' === r ? e.unique && c.has(n) || a.push(n) : n && n.length && 'string' !== r && s(n);
              });
            }(arguments), r ? o = a.length : t && (i = n, l(t)));
          }
          return this;
        },
        remove: function () {
          return a && x.each(arguments, function (e, t) {
            var n;
            while ((n = x.inArray(t, a, n)) > -1)
              a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
          }), this;
        },
        has: function (e) {
          return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
        },
        empty: function () {
          return a = [], o = 0, this;
        },
        disable: function () {
          return a = u = t = undefined, this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return u = undefined, t || c.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return !a || n && !u || (t = t || [], t = [
            e,
            t.slice ? t.slice() : t
          ], r ? u.push(t) : l(t)), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        }
      };
    return c;
  }, x.extend({
    Deferred: function (e) {
      var t = [
          [
            'resolve',
            'done',
            x.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            x.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            x.Callbacks('memory')
          ]
        ], n = 'pending', r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
              x.each(t, function (t, o) {
                var s = o[0], a = x.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + 'With'](this === r ? n.promise() : this, a ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          promise: function (e) {
            return null != e ? x.extend(e, r) : r;
          }
        }, i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var s = o[2], a = o[3];
        r[o[1]] = s.add, a && s.add(function () {
          n = a;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + 'With'](this === i ? r : this, arguments), this;
        }, i[o[0] + 'With'] = s.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
          };
        }, a, u, l;
      if (r > 1)
        for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)
          n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
      return i || o.resolveWith(l, n), o.promise();
    }
  }), x.support = function (t) {
    var n = o.createElement('input'), r = o.createDocumentFragment(), i = o.createElement('div'), s = o.createElement('select'), a = s.appendChild(o.createElement('option'));
    return n.type ? (n.type = 'checkbox', t.checkOn = '' !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement('input'), n.value = 't', n.type = 'radio', t.radioValue = 't' === n.value, n.setAttribute('checked', 't'), n.setAttribute('name', 't'), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = 'onfocusin' in e, i.style.backgroundClip = 'content-box', i.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === i.style.backgroundClip, x(function () {
      var n, r, s = 'padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box', a = o.getElementsByTagName('body')[0];
      a && (n = o.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', a.appendChild(n).appendChild(i), i.innerHTML = '', i.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%', x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === i.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(i, null) || { width: '4px' }).width, r = i.appendChild(o.createElement('div')), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = '0', i.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
    }), t) : t;
  }({});
  var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
  function F() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {};
      }
    }), this.expando = x.expando + Math.random();
  }
  F.uid = 1, F.accepts = function (e) {
    return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
  }, F.prototype = {
    key: function (e) {
      if (!F.accepts(e))
        return 0;
      var t = {}, n = e[this.expando];
      if (!n) {
        n = F.uid++;
        try {
          t[this.expando] = { value: n }, Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = n, x.extend(e, t);
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n;
    },
    set: function (e, t, n) {
      var r, i = this.key(e), o = this.cache[i];
      if ('string' == typeof t)
        o[t] = n;
      else if (x.isEmptyObject(o))
        x.extend(this.cache[i], t);
      else
        for (r in t)
          o[r] = t[r];
      return o;
    },
    get: function (e, t) {
      var n = this.cache[this.key(e)];
      return t === undefined ? n : n[t];
    },
    access: function (e, t, n) {
      var r;
      return t === undefined || t && 'string' == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
    },
    remove: function (e, t) {
      var n, r, i, o = this.key(e), s = this.cache[o];
      if (t === undefined)
        this.cache[o] = {};
      else {
        x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [
          t,
          i
        ] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
        while (n--)
          delete s[r[n]];
      }
    },
    hasData: function (e) {
      return !x.isEmptyObject(this.cache[e[this.expando]] || {});
    },
    discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    }
  }, L = new F(), q = new F(), x.extend({
    acceptData: F.accepts,
    hasData: function (e) {
      return L.hasData(e) || q.hasData(e);
    },
    data: function (e, t, n) {
      return L.access(e, t, n);
    },
    removeData: function (e, t) {
      L.remove(e, t);
    },
    _data: function (e, t, n) {
      return q.access(e, t, n);
    },
    _removeData: function (e, t) {
      q.remove(e, t);
    }
  }), x.fn.extend({
    data: function (e, t) {
      var n, r, i = this[0], o = 0, s = null;
      if (e === undefined) {
        if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, 'hasDataAttrs'))) {
          for (n = i.attributes; n.length > o; o++)
            r = n[o].name, 0 === r.indexOf('data-') && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
          q.set(i, 'hasDataAttrs', !0);
        }
        return s;
      }
      return 'object' == typeof e ? this.each(function () {
        L.set(this, e);
      }) : x.access(this, function (t) {
        var n, r = x.camelCase(e);
        if (i && t === undefined) {
          if (n = L.get(i, e), n !== undefined)
            return n;
          if (n = L.get(i, r), n !== undefined)
            return n;
          if (n = P(i, r, undefined), n !== undefined)
            return n;
        } else
          this.each(function () {
            var n = L.get(this, r);
            L.set(this, r, t), -1 !== e.indexOf('-') && n !== undefined && L.set(this, e, t);
          });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        L.remove(this, e);
      });
    }
  });
  function P(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType)
      if (r = 'data-' + t.replace(O, '-$1').toLowerCase(), n = e.getAttribute(r), 'string' == typeof n) {
        try {
          n = 'true' === n ? !0 : 'false' === n ? !1 : 'null' === n ? null : +n + '' === n ? +n : H.test(n) ? JSON.parse(n) : n;
        } catch (i) {
        }
        L.set(e, t, n);
      } else
        n = undefined;
    return n;
  }
  x.extend({
    queue: function (e, t, n) {
      var r;
      return e ? (t = (t || 'fx') + 'queue', r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function () {
          x.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return q.get(e, n) || q.access(e, n, {
        empty: x.Callbacks('once memory').add(function () {
          q.remove(e, [
            t + 'queue',
            n
          ]);
        })
      });
    }
  }), x.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
        var n = x.queue(this, e, t);
        x._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && x.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, t) {
      var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function () {
          --r || i.resolveWith(o, [o]);
        };
      'string' != typeof e && (t = e, e = undefined), e = e || 'fx';
      while (s--)
        n = q.get(o[s], e + 'queueHooks'), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t);
    }
  });
  var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
  x.fn.extend({
    attr: function (e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[x.propFix[e] || e];
      });
    },
    addClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : ' ')) {
            o = 0;
            while (i = t[o++])
              0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
            n.className = x.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || 'string' == typeof e && e;
      if (x.isFunction(e))
        return this.each(function (t) {
          x(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || '').match(w) || []; a > s; s++)
          if (n = this[s], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(W, ' ') : '')) {
            o = 0;
            while (i = t[o++])
              while (r.indexOf(' ' + i + ' ') >= 0)
                r = r.replace(' ' + i + ' ', ' ');
            n.className = e ? x.trim(r) : '';
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ('string' === n) {
          var t, i = 0, o = x(this), s = e.match(w) || [];
          while (t = s[i++])
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else
          (n === r || 'boolean' === n) && (this.className && q.set(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : q.get(this, '__className__') || '');
      });
    },
    hasClass: function (e) {
      var t = ' ' + e + ' ', n = 0, r = this.length;
      for (; r > n; n++)
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(W, ' ').indexOf(t) >= 0)
          return !0;
      return !1;
    },
    val: function (e) {
      var t, n, r, i = this[0];
      {
        if (arguments.length)
          return r = x.isFunction(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : x.isArray(i) && (i = x.map(i, function (e) {
              return null == e ? '' : e + '';
            })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && 'set' in t && t.set(this, i, 'value') !== undefined || (this.value = i));
          });
        if (i)
          return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && 'get' in t && (n = t.get(i, 'value')) !== undefined ? n : (n = i.value, 'string' == typeof n ? n.replace($, '') : null == n ? '' : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text;
        }
      },
      select: {
        get: function (e) {
          var t, n, r = e.options, i = e.selectedIndex, o = 'select-one' === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
          for (; a > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o)
                return t;
              s.push(t);
            }
          return s;
        },
        set: function (e, t) {
          var n, r, i = e.options, o = x.makeArray(t), s = i.length;
          while (s--)
            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function (e, t, n) {
      var i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && 'get' in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && 'set' in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ''), n) : (x.removeAttr(e, t), undefined));
    },
    removeAttr: function (e, t) {
      var n, r, i = 0, o = t && t.match(w);
      if (o && 1 === e.nodeType)
        while (n = o[i++])
          r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (e, t, n) {
      var r, i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s)
        return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && 'set' in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute('tabindex') || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
        }
      }
    }
  }), M = {
    set: function (e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = x.expr.attrHandle[t] || x.find.attr;
    x.expr.attrHandle[t] = function (e, t, r) {
      var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
      return x.expr.attrHandle[t] = i, o;
    };
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    }
  }), x.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.each([
    'radio',
    'checkbox'
  ], function () {
    x.valHooks[this] = {
      set: function (e, t) {
        return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;
  function U() {
    return !0;
  }
  function Y() {
    return !1;
  }
  function V() {
    try {
      return o.activeElement;
    } catch (e) {
    }
  }
  x.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
      if (y) {
        n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
          return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
        }, a.elem = e), t = (t || '').match(w) || [''], c = t.length;
        while (c--)
          u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || '').split('.').sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
            type: d,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && x.expr.match.needsContext.test(o),
            namespace: g.join('.')
          }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
      if (m && (u = m.events)) {
        t = (t || '').match(w) || [''], l = t.length;
        while (l--)
          if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || '').split('.').sort(), h) {
            p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = f.length;
            while (o--)
              c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
            s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
          } else
            for (h in u)
              x.event.remove(e, h + t[l], n, r, !0);
        x.isEmptyObject(u) && (delete m.handle, q.remove(e, 'events'));
      }
    },
    trigger: function (t, n, r, i) {
      var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, 'type') ? t.type : t, g = y.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf('.') >= 0 && (g = d.split('.'), d = g.shift(), g.sort()), c = 0 > d.indexOf(':') && 'on' + d, t = t[x.expando] ? t : new x.Event(d, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join('.'), t.namespace_re = t.namespace ? RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !x.isWindow(r)) {
          for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
            h.push(a), u = a;
          u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
        }
        s = 0;
        while ((a = h[s++]) && !t.isPropagationStopped())
          t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, 'events') || {})[t.type] && q.get(a, 'handle'), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
      }
    },
    dispatch: function (e) {
      e = x.event.fix(e);
      var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, 'events') || {})[e.type] || [], l = x.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), t = 0;
        while ((i = s[t++]) && !e.isPropagationStopped()) {
          e.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        }
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
      if (a && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (u.disabled !== !0 || 'click' !== e.type) {
            for (r = [], n = 0; a > n; n++)
              o = t[n], i = o.selector + ' ', r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            });
          }
      return t.length > a && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, t) {
        var n, r, i, s = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    fix: function (e) {
      if (e[x.expando])
        return e;
      var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
      a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
      while (t--)
        n = r[t], e[n] = s[n];
      return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== V() && this.focus ? (this.focus(), !1) : undefined;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === V() && this.blur ? (this.blur(), !1) : undefined;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && x.nodeName(this, 'input') ? (this.click(), !1) : undefined;
        },
        _default: function (e) {
          return x.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {}
        });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, x.Event = function (e, t) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
  }, x.Event.prototype = {
    isDefaultPrevented: Y,
    isPropagationStopped: Y,
    isImmediatePropagationStopped: Y,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = U, this.stopPropagation();
    }
  }, x.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.focusinBubbles || x.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0, r = function (e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0);
      };
    x.event.special[t] = {
      setup: function () {
        0 === n++ && o.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && o.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function (e, t, n, r, i) {
      var o, s;
      if ('object' == typeof e) {
        'string' != typeof t && (n = n || t, t = undefined);
        for (s in e)
          this.on(s, t, n, e[s], i);
        return this;
      }
      if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ('string' == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1)
        r = Y;
      else if (!r)
        return this;
      return 1 === i && (o = r, r = function (e) {
        return x().off(e), o.apply(this, arguments);
      }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, r, n, t);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return (t === !1 || 'function' == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
        x.event.remove(this, e, n, t);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      return n ? x.event.trigger(e, t, n, !0) : undefined;
    }
  });
  var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  x.fn.extend({
    find: function (e) {
      var t, n = [], r = this, i = r.length;
      if ('string' != typeof e)
        return this.pushStack(x(e).filter(function () {
          for (t = 0; i > t; t++)
            if (x.contains(r[t], this))
              return !0;
        }));
      for (t = 0; i > t; t++)
        x.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n;
    },
    has: function (e) {
      var t = x(e, this), n = t.length;
      return this.filter(function () {
        var e = 0;
        for (; n > e; e++)
          if (x.contains(this, t[e]))
            return !0;
      });
    },
    not: function (e) {
      return this.pushStack(et(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(et(this, e || [], !1));
    },
    is: function (e) {
      return !!et(this, 'string' == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], s = Q.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function Z(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  x.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return x.dir(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return x.dir(e, 'parentNode', n);
    },
    next: function (e) {
      return Z(e, 'nextSibling');
    },
    prev: function (e) {
      return Z(e, 'previousSibling');
    },
    nextAll: function (e) {
      return x.dir(e, 'nextSibling');
    },
    prevAll: function (e) {
      return x.dir(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return x.dir(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return x.dir(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return x.sibling(e.firstChild);
    },
    contents: function (e) {
      return e.contentDocument || x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
    };
  }), x.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, t, n) {
      var r = [], i = n !== undefined;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && x(e).is(n))
            break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      var n = [];
      for (; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  function et(e, t, n) {
    if (x.isFunction(t))
      return x.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return x.grep(e, function (e) {
        return e === t !== n;
      });
    if ('string' == typeof t) {
      if (G.test(t))
        return x.filter(t, e, n);
      t = x.filter(t, e);
    }
    return x.grep(e, function (e) {
      return g.call(t, e) >= 0 !== n;
    });
  }
  var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({
    text: function (e) {
      return x.access(this, function (e) {
        return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = pt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      var n, r = e ? x.filter(e, this) : this, i = 0;
      for (; null != (n = r[i]); i++)
        t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, 'script')), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      var e, t = 0;
      for (; null != (e = this[t]); t++)
        1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = '');
      return this;
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function (e) {
      return x.access(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (e === undefined && 1 === t.nodeType)
          return t.innerHTML;
        if ('string' == typeof e && !it.test(e) && !ct[(nt.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          e = e.replace(tt, '<$1></$2>');
          try {
            for (; r > n; n++)
              t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (i) {
          }
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = x.map(this, function (e) {
          return [
            e.nextSibling,
            e.parentNode
          ];
        }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = f.apply([], e);
      var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
      if (g || !(1 >= c || 'string' != typeof d || x.support.checkClone) && st.test(d))
        return this.each(function (r) {
          var i = p.eq(r);
          g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
        });
      if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
        for (o = x.map(mt(r, 'script'), ft), s = o.length; c > l; l++)
          a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, 'script'))), t.call(this[l], a, l);
        if (s)
          for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)
            a = o[l], at.test(a.type || '') && !q.access(a, 'globalEval') && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, '')));
      }
      return this;
    }
  }), x.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n, r = [], i = x(e), o = i.length - 1, s = 0;
      for (; o >= s; s++)
        n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
      return this.pushStack(r);
    };
  }), x.extend({
    clone: function (e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
      if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
        for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)
          yt(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)
            gt(o[r], s[r]);
        else
          gt(e, a);
      return s = mt(a, 'script'), s.length > 0 && dt(s, !u && mt(e, 'script')), a;
    },
    buildFragment: function (e, t, n, r) {
      var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
      for (; p > c; c++)
        if (i = e[c], i || 0 === i)
          if ('object' === x.type(i))
            x.merge(h, i.nodeType ? [i] : i);
          else if (rt.test(i)) {
            o = o || f.appendChild(t.createElement('div')), s = (nt.exec(i) || [
              '',
              ''
            ])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, '<$1></$2>') + a[2], l = a[0];
            while (l--)
              o = o.lastChild;
            x.merge(h, o.childNodes), o = f.firstChild, o.textContent = '';
          } else
            h.push(t.createTextNode(i));
      f.textContent = '', c = 0;
      while (i = h[c++])
        if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), 'script'), u && dt(o), n)) {
          l = 0;
          while (i = o[l++])
            at.test(i.type || '') && n.push(i);
        }
      return f;
    },
    cleanData: function (e) {
      var t, n, r, i, o, s, a = x.event.special, u = 0;
      for (; (n = e[u]) !== undefined; u++) {
        if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
          if (r = Object.keys(t.events || {}), r.length)
            for (s = 0; (i = r[s]) !== undefined; s++)
              a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
          q.cache[o] && delete q.cache[o];
        }
        delete L.cache[n[L.expando]];
      }
    },
    _evalUrl: function (e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        'throws': !0
      });
    }
  });
  function pt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }
  function ft(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }
  function ht(e) {
    var t = ut.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function dt(e, t) {
    var n = e.length, r = 0;
    for (; n > r; r++)
      q.set(e[r], 'globalEval', !t || q.get(t[r], 'globalEval'));
  }
  function gt(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++)
            x.event.add(t, i, l[i][n]);
      }
      L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
    }
  }
  function mt(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : [];
    return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
  }
  function yt(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && ot.test(e.type) ? t.checked = e.checked : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
  }
  x.fn.extend({
    wrapAll: function (e) {
      var t;
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild)
          e = e.firstElementChild;
        return e;
      }).append(this)), this);
    },
    wrapInner: function (e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp('^(' + b + ')(.*)$', 'i'), Ct = RegExp('^(' + b + ')(?!px)[a-z%]+$', 'i'), kt = RegExp('^([+-])=(' + b + ')', 'i'), Nt = { BODY: 'block' }, Et = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, St = {
      letterSpacing: 0,
      fontWeight: 400
    }, jt = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], Dt = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function At(e, t) {
    if (t in e)
      return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length;
    while (i--)
      if (t = Dt[i] + n, t in e)
        return t;
    return r;
  }
  function Lt(e, t) {
    return e = t || e, 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
  }
  function qt(t) {
    return e.getComputedStyle(t, null);
  }
  function Ht(e, t) {
    var n, r, i, o = [], s = 0, a = e.length;
    for (; a > s; s++)
      r = e[s], r.style && (o[s] = q.get(r, 'olddisplay'), n = r.style.display, t ? (o[s] || 'none' !== n || (r.style.display = ''), '' === r.style.display && Lt(r) && (o[s] = q.access(r, 'olddisplay', Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && 'none' !== n || !i) && q.set(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    for (s = 0; a > s; s++)
      r = e[s], r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? o[s] || '' : 'none'));
    return e;
  }
  x.fn.extend({
    css: function (e, t) {
      return x.access(this, function (e, t, n) {
        var r, i, o = {}, s = 0;
        if (x.isArray(t)) {
          for (r = qt(e), i = t.length; i > s; s++)
            o[t[s]] = x.css(e, t[s], !1, r);
          return o;
        }
        return n !== undefined ? x.style(e, t, n) : x.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function () {
      return Ht(this, !0);
    },
    hide: function () {
      return Ht(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Lt(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = vt(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = x.camelCase(t), u = e.style;
        return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && 'get' in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, 'string' === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = 'number'), null == n || 'number' === o && isNaN(n) || ('number' !== o || x.cssNumber[a] || (n += 'px'), x.support.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'), s && 'set' in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
      }
    },
    css: function (e, t, n, r) {
      var i, o, s, a = x.camelCase(t);
      return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && 'get' in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), 'normal' === i && t in St && (i = St[t]), '' === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
    }
  }), vt = function (e, t, n) {
    var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
    return s && ('' !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
  };
  function Ot(e, t, n) {
    var r = Tt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function Ft(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, s = 0;
    for (; 4 > o; o += 2)
      'margin' === n && (s += x.css(e, n + jt[o], !0, i)), r ? ('content' === n && (s -= x.css(e, 'padding' + jt[o], !0, i)), 'margin' !== n && (s -= x.css(e, 'border' + jt[o] + 'Width', !0, i))) : (s += x.css(e, 'padding' + jt[o], !0, i), 'padding' !== n && (s += x.css(e, 'border' + jt[o] + 'Width', !0, i)));
    return s;
  }
  function Pt(e, t, n) {
    var r = !0, i = 'width' === t ? e.offsetWidth : e.offsetHeight, o = qt(e), s = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);
    if (0 >= i || null == i) {
      if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i))
        return i;
      r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }
    return i + Ft(e, t, n || (s ? 'border' : 'content'), r, o) + 'px';
  }
  function Rt(e) {
    var t = o, n = Nt[e];
    return n || (n = Mt(e, t), 'none' !== n && n || (xt = (xt || x('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
  }
  function Mt(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], 'display');
    return n.remove(), r;
  }
  x.each([
    'height',
    'width'
  ], function (e, t) {
    x.cssHooks[t] = {
      get: function (e, n, r) {
        return n ? 0 === e.offsetWidth && bt.test(x.css(e, 'display')) ? x.swap(e, Et, function () {
          return Pt(e, t, r);
        }) : Pt(e, t, r) : undefined;
      },
      set: function (e, n, r) {
        var i = r && qt(e);
        return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
      }
    };
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function (e, t) {
        return t ? x.swap(e, { display: 'inline-block' }, vt, [
          e,
          'marginRight'
        ]) : undefined;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each([
      'top',
      'left'
    ], function (e, t) {
      x.cssHooks[t] = {
        get: function (e, n) {
          return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + 'px' : n) : undefined;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function (n) {
        var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
        for (; 4 > r; r++)
          i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
  });
  var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = x.prop(this, 'elements');
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(':disabled') && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Bt, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(Bt, '\r\n')
        };
      }).get();
    }
  }), x.param = function (e, t) {
    var n, r = [], i = function (e, t) {
        t = x.isFunction(t) ? t() : null == t ? '' : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      };
    if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
      x.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        _t(n, e[n], t, i);
    return r.join('&').replace(Wt, '+');
  };
  function _t(e, t, n, r) {
    var i;
    if (x.isArray(t))
      x.each(t, function (t, i) {
        n || $t.test(e) ? r(e, i) : _t(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== x.type(t))
      r(e, t);
    else
      for (i in t)
        _t(e + '[' + i + ']', t[i], n, r);
  }
  x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  });
  var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = '*/'.concat('*');
  try {
    Ut = i.href;
  } catch (an) {
    Ut = o.createElement('a'), Ut.href = '', Ut = Ut.href;
  }
  Xt = tn.exec(Ut.toLowerCase()) || [];
  function un(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(w) || [];
      if (x.isFunction(n))
        while (r = o[i++])
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function ln(e, t, n, r) {
    var i = {}, o = e === on;
    function s(a) {
      var u;
      return i[a] = !0, x.each(e[a] || [], function (e, a) {
        var l = a(t, n, r);
        return 'string' != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
      }), u;
    }
    return s(t.dataTypes[0]) || !i['*'] && s('*');
  }
  function cn(e, t) {
    var n, r, i = x.ajaxSettings.flatOptions || {};
    for (n in t)
      t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && x.extend(!0, e, r), e;
  }
  x.fn.load = function (e, t, n) {
    if ('string' != typeof e && nn)
      return nn.apply(this, arguments);
    var r, i, o, s = this, a = e.indexOf(' ');
    return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && 'object' == typeof t && (i = 'POST'), s.length > 0 && x.ajax({
      url: e,
      type: i,
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, s.html(r ? x('<div>').append(x.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      s.each(n, o || [
        e.responseText,
        t,
        e
      ]);
    }), this;
  }, x.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ut,
      type: 'GET',
      isLocal: Kt.test(Xt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': sn,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': x.parseJSON,
        'text xml': x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
    },
    ajaxPrefilter: un(rn),
    ajaxTransport: un(on),
    ajax: function (e, t) {
      'object' == typeof e && (t = e, e = undefined), t = t || {};
      var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks('once memory'), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = 'canceled', T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === v) {
              if (!o) {
                o = {};
                while (t = Qt.exec(i))
                  o[t[1].toLowerCase()] = t[2];
              }
              t = o[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? i : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return v || (e = y[n] = y[n] || e, m[e] = t), this;
          },
          overrideMimeType: function (e) {
            return v || (c.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > v)
                for (t in e)
                  g[t] = [
                    g[t],
                    e[t]
                  ];
              else
                T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || b;
            return n && n.abort(t), k(0, t), this;
          }
        };
      if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + '').replace(Gt, '').replace(en, Xt[1] + '//'), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || '*').toLowerCase().match(w) || [''], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ('http:' === a[1] ? '80' : '443')) === (Xt[3] || ('http:' === Xt[1] ? '80' : '443')))), c.data && c.processData && 'string' != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v)
        return T;
      u = c.global, u && 0 === x.active++ && x.event.trigger('ajaxStart'), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? '&' : '?') + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, '$1_=' + Yt++) : r + (Vt.test(r) ? '&' : '?') + '_=' + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader('If-Modified-Since', x.lastModified[r]), x.etag[r] && T.setRequestHeader('If-None-Match', x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader('Content-Type', c.contentType), T.setRequestHeader('Accept', c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ('*' !== c.dataTypes[0] ? ', ' + sn + '; q=0.01' : '') : c.accepts['*']);
      for (l in c.headers)
        T.setRequestHeader(l, c.headers[l]);
      if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
        return T.abort();
      b = 'abort';
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        })
        T[l](c[l]);
      if (n = ln(on, c, t, T)) {
        T.readyState = 1, u && f.trigger('ajaxSend', [
          T,
          c
        ]), c.async && c.timeout > 0 && (s = setTimeout(function () {
          T.abort('timeout');
        }, c.timeout));
        try {
          v = 1, n.send(m, k);
        } catch (C) {
          if (!(2 > v))
            throw C;
          k(-1, C);
        }
      } else
        k(-1, 'No Transport');
      function k(e, t, o, a) {
        var l, m, y, b, w, C = t;
        2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || '', T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader('Last-Modified'), w && (x.lastModified[r] = w), w = T.getResponseHeader('etag'), w && (x.etag[r] = w)), 204 === e || 'HEAD' === c.type ? C = 'nocontent' : 304 === e ? C = 'notmodified' : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = 'error', 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + '', l ? h.resolveWith(p, [
          m,
          C,
          T
        ]) : h.rejectWith(p, [
          T,
          C,
          y
        ]), T.statusCode(g), g = undefined, u && f.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          T,
          c,
          l ? m : y
        ]), d.fireWith(p, [
          T,
          C
        ]), u && (f.trigger('ajaxComplete', [
          T,
          c
        ]), --x.active || x.event.trigger('ajaxStop')));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return x.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return x.get(e, undefined, t, 'script');
    }
  }), x.each([
    'get',
    'post'
  ], function (e, t) {
    x[t] = function (e, n, r, i) {
      return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      });
    };
  });
  function pn(e, t, n) {
    var r, i, o, s, a = e.contents, u = e.dataTypes;
    while ('*' === u[0])
      u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n)
      o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        s || (s = i);
      }
      o = o || s;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
  }
  function fn(e, t, n, r) {
    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
    if (c[1])
      for (s in e.converters)
        l[s.toLowerCase()] = e.converters[s];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ('*' === o)
          o = u;
        else if ('*' !== u && u !== o) {
          if (s = l[u + ' ' + o] || l['* ' + o], !s)
            for (i in l)
              if (a = i.split(' '), a[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e['throws'])
              t = s(t);
            else
              try {
                t = s(t);
              } catch (p) {
                return {
                  state: 'parsererror',
                  error: s ? p : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  x.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter('script', function (e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = x('<script>').prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
          }), o.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = hn.pop() || x.expando + '_' + Yt++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? 'url' : 'string' == typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && dn.test(t.data) && 'data');
    return a || 'jsonp' === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, '$1' + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
      return s || x.error(i + ' was not called'), s[0];
    }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
      s = arguments;
    }, r.always(function () {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
    }), 'script') : undefined;
  }), x.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {
    }
  };
  var gn = x.ajaxSettings.xhr(), mn = {
      0: 200,
      1223: 204
    }, yn = 0, vn = {};
  e.ActiveXObject && x(e).on('unload', function () {
    for (var e in vn)
      vn[e]();
    vn = undefined;
  }), x.support.cors = !!gn && 'withCredentials' in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
    var t;
    return x.support.cors || gn && !e.crossDomain ? {
      send: function (n, r) {
        var i, o, s = e.xhr();
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (i in e.xhrFields)
            s[i] = e.xhrFields[i];
        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n['X-Requested-With'] || (n['X-Requested-With'] = 'XMLHttpRequest');
        for (i in n)
          s.setRequestHeader(i, n[i]);
        t = function (e) {
          return function () {
            t && (delete vn[o], t = s.onload = s.onerror = null, 'abort' === e ? s.abort() : 'error' === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, 'string' == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
          };
        }, s.onload = t(), s.onerror = t('error'), t = vn[o = yn++] = t('abort'), s.send(e.hasContent && e.data || null);
      },
      abort: function () {
        t && t();
      }
    } : undefined;
  });
  var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp('^(?:([+-])=|)(' + b + ')([a-z%]*)$', 'i'), Cn = /queueHooks$/, kn = [An], Nn = {
      '*': [function (e, t) {
          var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? '' : 'px'), s = (x.cssNumber[e] || 'px' !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
          if (s && s[3] !== o) {
            o = o || s[3], i = i || [], s = +r || 1;
            do
              a = a || '.5', s /= a, x.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && 1 !== a && --u);
          }
          return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n;
        }]
    };
  function En() {
    return setTimeout(function () {
      xn = undefined;
    }), xn = x.now();
  }
  function Sn(e, t, n) {
    var r, i = (Nn[t] || []).concat(Nn['*']), o = 0, s = i.length;
    for (; s > o; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function jn(e, t, n) {
    var r, i, o = 0, s = kn.length, a = x.Deferred().always(function () {
        delete u.elem;
      }), u = function () {
        if (i)
          return !1;
        var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length;
        for (; u > s; s++)
          l.tweens[s].run(o);
        return a.notifyWith(e, [
          l,
          o,
          n
        ]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
      }, l = a.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: xn || En(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? l.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; r > n; n++)
            l.tweens[n].run(1);
          return t ? a.resolveWith(e, [
            l,
            t
          ]) : a.rejectWith(e, [
            l,
            t
          ]), this;
        }
      }), c = l.props;
    for (Dn(c, l.opts.specialEasing); s > o; o++)
      if (r = kn[o].call(l, e, c, l.opts))
        return r;
    return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function Dn(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && 'expand' in s) {
        o = s.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  x.Animation = x.extend(jn, {
    tweener: function (e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');
      var n, r = 0, i = e.length;
      for (; i > r; r++)
        n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? kn.unshift(e) : kn.push(e);
    }
  });
  function An(e, t, n) {
    var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, 'fxshow');
    n.queue || (a = x._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u();
    }), a.unqueued++, l.always(function () {
      l.always(function () {
        a.unqueued--, x.queue(e, 'fx').length || a.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], 'inline' === x.css(e, 'display') && 'none' === x.css(e, 'float') && (p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', l.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));
    for (r in t)
      if (i = t[r], wn.exec(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (f ? 'hide' : 'show')) {
          if ('show' !== i || !h || h[r] === undefined)
            continue;
          f = !0;
        }
        c[r] = h && h[r] || x.style(e, r);
      }
    if (!x.isEmptyObject(c)) {
      h ? 'hidden' in h && (f = h.hidden) : h = q.access(e, 'fxshow', {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
        x(e).hide();
      }), l.done(function () {
        var t;
        q.remove(e, 'fxshow');
        for (t in c)
          x.style(e, t, c[t]);
      });
      for (r in c)
        s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = 'width' === r || 'height' === r ? 1 : 0));
    }
  }
  function Ln(e, t, n, r, i) {
    return new Ln.prototype.init(e, t, n, r, i);
  }
  x.Tween = Ln, Ln.prototype = {
    constructor: Ln,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = Ln.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = Ln.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
    }
  }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = x.fn[t];
    x.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Lt).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function () {
          var t = jn(this, x.extend({}, e), o);
          (i || q.get(this, 'finish')) && t.stop(!0);
        };
      return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return 'string' != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = x.timers, s = q.get(this);
        if (i)
          s[i] && s[i].stop && r(s[i]);
        else
          for (i in s)
            s[i] && s[i].stop && Cn.test(i) && r(s[i]);
        for (i = o.length; i--;)
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        (t || !n) && x.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t, n = q.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = x.timers, s = r ? r.length : 0;
        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; s > t; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  });
  function qn(e, t) {
    var n, r = { height: e }, i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      n = jt[i], r['margin' + n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  x.each({
    slideDown: qn('show'),
    slideUp: qn('hide'),
    slideToggle: qn('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? x.extend({}, e) : {
        complete: n || !n && t || x.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !x.isFunction(t) && t
      };
    return r.duration = x.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
    var e, t = x.timers, n = 0;
    for (xn = x.now(); t.length > n; n++)
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    t.length || x.fx.stop(), xn = undefined;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    bn || (bn = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(bn), bn = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length)
      return e === undefined ? this : this.each(function (t) {
        x.offset.setOffset(this, e, t);
      });
    var t, n, i = this[0], o = {
        top: 0,
        left: 0
      }, s = i && i.ownerDocument;
    if (s)
      return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
        top: o.top + n.pageYOffset - t.clientTop,
        left: o.left + n.pageXOffset - t.clientLeft
      }) : o;
  }, x.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, s, a, u, l, c = x.css(e, 'position'), p = x(e), f = {};
      'static' === c && (e.style.position = 'relative'), a = p.offset(), o = x.css(e, 'top'), u = x.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), 'using' in t ? t.using.call(e, f) : p.css(f);
    }
  }, x.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {
            top: 0,
            left: 0
          };
        return 'fixed' === x.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], 'html') || (r = e.offset()), r.top += x.css(e[0], 'borderTopWidth', !0), r.left += x.css(e[0], 'borderLeftWidth', !0)), {
          top: t.top - r.top - x.css(n, 'marginTop', !0),
          left: t.left - r.left - x.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent || s;
        while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position'))
          e = e.offsetParent;
        return e || s;
      });
    }
  }), x.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (t, n) {
    var r = 'pageYOffset' === n;
    x.fn[t] = function (i) {
      return x.access(this, function (t, i, o) {
        var s = Hn(t);
        return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
      }, t, i, arguments.length, null);
    };
  });
  function Hn(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  x.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    x.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      x.fn[r] = function (r, i) {
        var o = arguments.length && (n || 'boolean' != typeof r), s = n || (r === !0 || i === !0 ? 'margin' : 'border');
        return x.access(this, function (t, n, r) {
          var i;
          return x.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
        }, t, o ? r : undefined, o, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, 'object' == typeof module && module && 'object' == typeof module.exports ? module.exports = x : 'function' == typeof define && define.amd && define('jquery', [], function () {
    return x;
  }), 'object' == typeof e && 'object' == typeof e.document && (e.jQuery = e.$ = x);
}(window));
(function (Z, Q, r) {
  'use strict';
  function F(b) {
    return function () {
      var a = arguments[0], c, a = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.2.9-build.2130+sha.02a4582/' + (b ? b + '/' : '') + a;
      for (c = 1; c < arguments.length; c++)
        a = a + (1 == c ? '?' : '&') + 'p' + (c - 1) + '=' + encodeURIComponent('function' == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof arguments[c] ? 'undefined' : 'string' != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a);
    };
  }
  function rb(b) {
    if (null == b || Aa(b))
      return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : D(b) || K(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function q(b, a, c) {
    var d;
    if (b)
      if (L(b))
        for (d in b)
          'prototype' == d || ('length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
      else if (b.forEach && b.forEach !== q)
        b.forEach(a, c);
      else if (rb(b))
        for (d = 0; d < b.length; d++)
          a.call(c, b[d], d);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b;
  }
  function Pb(b) {
    var a = [], c;
    for (c in b)
      b.hasOwnProperty(c) && a.push(c);
    return a.sort();
  }
  function Pc(b, a, c) {
    for (var d = Pb(b), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function Qb(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function Za() {
    for (var b = ka.length, a; b;) {
      b--;
      a = ka[b].charCodeAt(0);
      if (57 == a)
        return ka[b] = 'A', ka.join('');
      if (90 == a)
        ka[b] = '0';
      else
        return ka[b] = String.fromCharCode(a + 1), ka.join('');
    }
    ka.unshift('0');
    return ka.join('');
  }
  function Rb(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function t(b) {
    var a = b.$$hashKey;
    q(arguments, function (a) {
      a !== b && q(a, function (a, c) {
        b[c] = a;
      });
    });
    Rb(b, a);
    return b;
  }
  function S(b) {
    return parseInt(b, 10);
  }
  function Sb(b, a) {
    return t(new (t(function () {
    }, { prototype: b }))(), a);
  }
  function w() {
  }
  function Ba(b) {
    return b;
  }
  function $(b) {
    return function () {
      return b;
    };
  }
  function z(b) {
    return 'undefined' === typeof b;
  }
  function B(b) {
    return 'undefined' !== typeof b;
  }
  function X(b) {
    return null != b && 'object' === typeof b;
  }
  function D(b) {
    return 'string' === typeof b;
  }
  function sb(b) {
    return 'number' === typeof b;
  }
  function La(b) {
    return '[object Date]' === $a.call(b);
  }
  function K(b) {
    return '[object Array]' === $a.call(b);
  }
  function L(b) {
    return 'function' === typeof b;
  }
  function ab(b) {
    return '[object RegExp]' === $a.call(b);
  }
  function Aa(b) {
    return b && b.document && b.location && b.alert && b.setInterval;
  }
  function Qc(b) {
    return !(!b || !(b.nodeName || b.on && b.find));
  }
  function Rc(b, a, c) {
    var d = [];
    q(b, function (b, g, f) {
      d.push(a.call(c, b, g, f));
    });
    return d;
  }
  function bb(b, a) {
    if (b.indexOf)
      return b.indexOf(a);
    for (var c = 0; c < b.length; c++)
      if (a === b[c])
        return c;
    return -1;
  }
  function Ma(b, a) {
    var c = bb(b, a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function aa(b, a) {
    if (Aa(b) || b && b.$evalAsync && b.$watch)
      throw Na('cpws');
    if (a) {
      if (b === a)
        throw Na('cpi');
      if (K(b))
        for (var c = a.length = 0; c < b.length; c++)
          a.push(aa(b[c]));
      else {
        c = a.$$hashKey;
        q(a, function (b, c) {
          delete a[c];
        });
        for (var d in b)
          a[d] = aa(b[d]);
        Rb(a, c);
      }
    } else
      (a = b) && (K(b) ? a = aa(b, []) : La(b) ? a = new Date(b.getTime()) : ab(b) ? a = RegExp(b.source) : X(b) && (a = aa(b, {})));
    return a;
  }
  function Tb(b, a) {
    a = a || {};
    for (var c in b)
      b.hasOwnProperty(c) && ('$' !== c.charAt(0) && '$' !== c.charAt(1)) && (a[c] = b[c]);
    return a;
  }
  function ua(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (K(b)) {
        if (!K(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!ua(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (La(b))
          return La(a) && b.getTime() == a.getTime();
        if (ab(b) && ab(a))
          return b.toString() == a.toString();
        if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Aa(b) || Aa(a) || K(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !L(b[d])) {
            if (!ua(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== r && !L(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Ub() {
    return Q.securityPolicy && Q.securityPolicy.isActive || Q.querySelector && !(!Q.querySelector('[ng-csp]') && !Q.querySelector('[data-ng-csp]'));
  }
  function cb(b, a) {
    var c = 2 < arguments.length ? va.call(arguments, 2) : [];
    return !L(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(va.call(arguments, 0))) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Sc(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) ? c = r : Aa(a) ? c = '$WINDOW' : a && Q === a ? c = '$DOCUMENT' : a && (a.$evalAsync && a.$watch) && (c = '$SCOPE');
    return c;
  }
  function qa(b, a) {
    return 'undefined' === typeof b ? r : JSON.stringify(b, Sc, a ? '  ' : null);
  }
  function Vb(b) {
    return D(b) ? JSON.parse(b) : b;
  }
  function Oa(b) {
    'function' === typeof b ? b = !0 : b && 0 !== b.length ? (b = x('' + b), b = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b)) : b = !1;
    return b;
  }
  function ga(b) {
    b = A(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = A('<div>').append(b).html();
    try {
      return 3 === b[0].nodeType ? x(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + x(b);
      });
    } catch (d) {
      return x(c);
    }
  }
  function Wb(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function Xb(b) {
    var a = {}, c, d;
    q((b || '').split('&'), function (b) {
      b && (c = b.split('='), d = Wb(c[0]), B(d) && (b = B(c[1]) ? Wb(c[1]) : !0, a[d] ? K(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Yb(b) {
    var a = [];
    q(b, function (b, d) {
      K(b) ? q(b, function (b) {
        a.push(wa(d, !0) + (!0 === b ? '' : '=' + wa(b, !0)));
      }) : a.push(wa(d, !0) + (!0 === b ? '' : '=' + wa(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function tb(b) {
    return wa(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function wa(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, a ? '%20' : '+');
  }
  function Tc(b, a) {
    function c(a) {
      a && d.push(a);
    }
    var d = [b], e, g, f = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    q(f, function (a) {
      f[a] = !0;
      c(Q.getElementById(a));
      a = a.replace(':', '\\:');
      b.querySelectorAll && (q(b.querySelectorAll('.' + a), c), q(b.querySelectorAll('.' + a + '\\:'), c), q(b.querySelectorAll('[' + a + ']'), c));
    });
    q(d, function (a) {
      if (!e) {
        var b = h.exec(' ' + a.className + ' ');
        b ? (e = a, g = (b[2] || '').replace(/\s+/g, ',')) : q(a.attributes, function (b) {
          !e && f[b.name] && (e = a, g = b.value);
        });
      }
    });
    e && a(e, g ? [g] : []);
  }
  function Zb(b, a) {
    var c = function () {
        b = A(b);
        if (b.injector()) {
          var c = b[0] === Q ? 'document' : ga(b);
          throw Na('btstrpd', c);
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        a.unshift('ng');
        c = $b(a);
        c.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          '$animate',
          function (a, b, c, d, e) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return c;
      }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (Z && !d.test(Z.name))
      return c();
    Z.name = Z.name.replace(d, '');
    Ca.resumeBootstrap = function (b) {
      q(b, function (b) {
        a.push(b);
      });
      c();
    };
  }
  function db(b, a) {
    a = a || '_';
    return b.replace(Uc, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function ub(b, a, c) {
    if (!b)
      throw Na('areq', a || '?', c || 'required');
    return b;
  }
  function Pa(b, a, c) {
    c && K(b) && (b = b[b.length - 1]);
    ub(L(b), a, 'not a function, got ' + (b && 'object' == typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function xa(b, a) {
    if ('hasOwnProperty' === b)
      throw Na('badname', a);
  }
  function vb(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, g = a.length, f = 0; f < g; f++)
      d = a[f], b && (b = (e = b)[d]);
    return !c && L(b) ? cb(e, b) : b;
  }
  function wb(b) {
    var a = b[0];
    b = b[b.length - 1];
    if (a === b)
      return A(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return A(c);
  }
  function Vc(b) {
    var a = F('$injector'), c = F('ng');
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || F;
    return b.module || (b.module = function () {
      var b = {};
      return function (e, g, f) {
        if ('hasOwnProperty' === e)
          throw c('badname', 'module');
        g && b.hasOwnProperty(e) && (b[e] = null);
        return b[e] || (b[e] = function () {
          function b(a, d, e) {
            return function () {
              c[e || 'push']([
                a,
                d,
                arguments
              ]);
              return n;
            };
          }
          if (!g)
            throw a('nomod', e);
          var c = [], d = [], l = b('$injector', 'invoke'), n = {
              _invokeQueue: c,
              _runBlocks: d,
              requires: g,
              name: e,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: b('$provide', 'value'),
              constant: b('$provide', 'constant', 'unshift'),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              config: l,
              run: function (a) {
                d.push(a);
                return this;
              }
            };
          f && l(f);
          return n;
        }());
      };
    }());
  }
  function Qa(b) {
    return b.replace(Wc, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(Xc, 'Moz$1');
  }
  function xb(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] : [this], m = a, k, l, n, p, s, C;
      if (!d || null != b)
        for (; e.length;)
          for (k = e.shift(), l = 0, n = k.length; l < n; l++)
            for (p = A(k[l]), m ? p.triggerHandler('$destroy') : m = !m, s = 0, p = (C = p.children()).length; s < p; s++)
              e.push(Da(C[s]));
      return g.apply(this, arguments);
    }
    var g = Da.fn[b], g = g.$original || g;
    e.$original = g;
    Da.fn[b] = e;
  }
  function O(b) {
    if (b instanceof O)
      return b;
    if (!(this instanceof O)) {
      if (D(b) && '<' != b.charAt(0))
        throw yb('nosel');
      return new O(b);
    }
    if (D(b)) {
      var a = Q.createElement('div');
      a.innerHTML = '<div>&#160;</div>' + b;
      a.removeChild(a.firstChild);
      zb(this, a.childNodes);
      A(Q.createDocumentFragment()).append(this);
    } else
      zb(this, b);
  }
  function Ab(b) {
    return b.cloneNode(!0);
  }
  function Ea(b) {
    ac(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)
      Ea(b[a]);
  }
  function bc(b, a, c, d) {
    if (B(d))
      throw yb('offargs');
    var e = la(b, 'events');
    la(b, 'handle') && (z(a) ? q(e, function (a, c) {
      Bb(b, c, a);
      delete e[c];
    }) : q(a.split(' '), function (a) {
      z(c) ? (Bb(b, a, e[a]), delete e[a]) : Ma(e[a] || [], c);
    }));
  }
  function ac(b, a) {
    var c = b[eb], d = Ra[c];
    d && (a ? delete Ra[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), bc(b)), delete Ra[c], b[eb] = r));
  }
  function la(b, a, c) {
    var d = b[eb], d = Ra[d || -1];
    if (B(c))
      d || (b[eb] = d = ++Yc, d = Ra[d] = {}), d[a] = c;
    else
      return d && d[a];
  }
  function cc(b, a, c) {
    var d = la(b, 'data'), e = B(c), g = !e && B(a), f = g && !X(a);
    d || f || la(b, 'data', d = {});
    if (e)
      d[a] = c;
    else if (g) {
      if (f)
        return d && d[a];
      t(d, a);
    } else
      return d;
  }
  function Cb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function Db(b, a) {
    a && b.setAttribute && q(a.split(' '), function (a) {
      b.setAttribute('class', ba((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + ba(a) + ' ', ' ')));
    });
  }
  function Eb(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      q(a.split(' '), function (a) {
        a = ba(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', ba(c));
    }
  }
  function zb(b, a) {
    if (a) {
      a = a.nodeName || !B(a.length) || Aa(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)
        b.push(a[c]);
    }
  }
  function dc(b, a) {
    return fb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function fb(b, a, c) {
    b = A(b);
    9 == b[0].nodeType && (b = b.find('html'));
    for (a = K(a) ? a : [a]; b.length;) {
      for (var d = 0, e = a.length; d < e; d++)
        if ((c = b.data(a[d])) !== r)
          return c;
      b = b.parent();
    }
  }
  function ec(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)
      Ea(c[a]);
    for (; b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function fc(b, a) {
    var c = gb[a.toLowerCase()];
    return c && gc[b.nodeName] && c;
  }
  function Zc(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1;
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0;
      });
      c.target || (c.target = c.srcElement || Q);
      if (z(c.defaultPrevented)) {
        var g = c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          g.call(c);
        };
        c.defaultPrevented = !1;
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue;
      };
      var f = Tb(a[e || c.type] || []);
      q(f, function (a) {
        a.call(b, c);
      });
      8 >= M ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented);
    };
    c.elem = b;
    return c;
  }
  function Fa(b) {
    var a = typeof b, c;
    'object' == a && null !== b ? 'function' == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c === r && (c = b.$$hashKey = Za()) : c = b;
    return a + ':' + c;
  }
  function Sa(b) {
    q(b, this.put, this);
  }
  function hc(b) {
    var a, c;
    'function' == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace($c, ''), c = c.match(ad), q(c[1].split(bd), function (b) {
      b.replace(cd, function (b, c, d) {
        a.push(d);
      });
    })), b.$inject = a) : K(b) ? (c = b.length - 1, Pa(b[c], 'fn'), a = b.slice(0, c)) : Pa(b, 'fn', !0);
    return a;
  }
  function $b(b) {
    function a(a) {
      return function (b, c) {
        if (X(b))
          q(b, Qb(a));
        else
          return a(b, c);
      };
    }
    function c(a, b) {
      xa(a, 'service');
      if (L(b) || K(b))
        b = n.instantiate(b);
      if (!b.$get)
        throw Ta('pget', a);
      return l[a + h] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function e(a) {
      var b = [], c, d, g, h;
      q(a, function (a) {
        if (!k.get(a)) {
          k.put(a, !0);
          try {
            if (D(a))
              for (c = Ua(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, g = 0, h = d.length; g < h; g++) {
                var f = d[g], m = n.get(f[0]);
                m[f[1]].apply(m, f[2]);
              }
            else
              L(a) ? b.push(n.invoke(a)) : K(a) ? b.push(n.invoke(a)) : Pa(a, 'module');
          } catch (s) {
            throw K(a) && (a = a[a.length - 1]), s.message && (s.stack && -1 == s.stack.indexOf(s.message)) && (s = s.message + '\n' + s.stack), Ta('modulerr', a, s.stack || s.message || s);
          }
        }
      });
      return b;
    }
    function g(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === f)
            throw Ta('cdep', m.join(' <- '));
          return a[d];
        }
        try {
          return m.unshift(d), a[d] = f, a[d] = b(d);
        } catch (e) {
          throw a[d] === f && delete a[d], e;
        } finally {
          m.shift();
        }
      }
      function d(a, b, e) {
        var g = [], h = hc(a), f, k, m;
        k = 0;
        for (f = h.length; k < f; k++) {
          m = h[k];
          if ('string' !== typeof m)
            throw Ta('itkn', m);
          g.push(e && e.hasOwnProperty(m) ? e[m] : c(m));
        }
        a.$inject || (a = a[f]);
        return a.apply(b, g);
      }
      return {
        invoke: d,
        instantiate: function (a, b) {
          var c = function () {
            }, e;
          c.prototype = (K(a) ? a[a.length - 1] : a).prototype;
          c = new c();
          e = d(a, c, b);
          return X(e) || L(e) ? e : c;
        },
        get: c,
        annotate: hc,
        has: function (b) {
          return l.hasOwnProperty(b + h) || a.hasOwnProperty(b);
        }
      };
    }
    var f = {}, h = 'Provider', m = [], k = new Sa(), l = {
        $provide: {
          provider: a(c),
          factory: a(d),
          service: a(function (a, b) {
            return d(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: a(function (a, b) {
            return d(a, $(b));
          }),
          constant: a(function (a, b) {
            xa(a, 'constant');
            l[a] = b;
            p[a] = b;
          }),
          decorator: function (a, b) {
            var c = n.get(a + h), d = c.$get;
            c.$get = function () {
              var a = s.invoke(d, c);
              return s.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, n = l.$injector = g(l, function () {
        throw Ta('unpr', m.join(' <- '));
      }), p = {}, s = p.$injector = g(p, function (a) {
        a = n.get(a + h);
        return s.invoke(a.$get, a);
      });
    q(e(b), function (a) {
      s.invoke(a || w);
    });
    return s;
  }
  function dd() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          q(a, function (a) {
            b || 'a' !== x(a.nodeName) || (b = a);
          });
          return b;
        }
        function g() {
          var b = c.hash(), d;
          b ? (d = f.getElementById(b)) ? d.scrollIntoView() : (d = e(f.getElementsByName(b))) ? d.scrollIntoView() : 'top' === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
        }
        var f = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(g);
        });
        return g;
      }
    ];
  }
  function ed(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, va.call(arguments, 1));
      } finally {
        if (C--, 0 === C)
          for (; y.length;)
            try {
              y.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function g(a, b) {
      (function T() {
        q(E, function (a) {
          a();
        });
        u = b(T, a);
      }());
    }
    function f() {
      v = null;
      R != h.url() && (R = h.url(), q(ha, function (a) {
        a(h.url());
      }));
    }
    var h = this, m = a[0], k = b.location, l = b.history, n = b.setTimeout, p = b.clearTimeout, s = {};
    h.isMock = !1;
    var C = 0, y = [];
    h.$$completeOutstandingRequest = e;
    h.$$incOutstandingRequestCount = function () {
      C++;
    };
    h.notifyWhenNoOutstandingRequests = function (a) {
      q(E, function (a) {
        a();
      });
      0 === C ? a() : y.push(a);
    };
    var E = [], u;
    h.addPollFn = function (a) {
      z(u) && g(100, n);
      E.push(a);
      return a;
    };
    var R = k.href, H = a.find('base'), v = null;
    h.url = function (a, c) {
      k !== b.location && (k = b.location);
      l !== b.history && (l = b.history);
      if (a) {
        if (R != a)
          return R = a, d.history ? c ? l.replaceState(null, '', a) : (l.pushState(null, '', a), H.attr('href', H.attr('href'))) : (v = a, c ? k.replace(a) : k.href = a), h;
      } else
        return v || k.href.replace(/%27/g, '\'');
    };
    var ha = [], N = !1;
    h.onUrlChange = function (a) {
      if (!N) {
        if (d.history)
          A(b).on('popstate', f);
        if (d.hashchange)
          A(b).on('hashchange', f);
        else
          h.addPollFn(f);
        N = !0;
      }
      ha.push(a);
      return a;
    };
    h.baseHref = function () {
      var a = H.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var V = {}, J = '', ca = h.baseHref();
    h.cookies = function (a, b) {
      var d, e, g, h;
      if (a)
        b === r ? m.cookie = escape(a) + '=;path=' + ca + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : D(b) && (d = (m.cookie = escape(a) + '=' + escape(b) + ';path=' + ca).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (m.cookie !== J)
          for (J = m.cookie, d = J.split('; '), V = {}, g = 0; g < d.length; g++)
            e = d[g], h = e.indexOf('='), 0 < h && (a = unescape(e.substring(0, h)), V[a] === r && (V[a] = unescape(e.substring(h + 1))));
        return V;
      }
    };
    h.defer = function (a, b) {
      var c;
      C++;
      c = n(function () {
        delete s[c];
        e(a);
      }, b || 0);
      s[c] = !0;
      return c;
    };
    h.defer.cancel = function (a) {
      return s[a] ? (delete s[a], p(a), e(w), !0) : !1;
    };
  }
  function fd() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new ed(b, d, a, c);
      }
    ];
  }
  function gd() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, g(a.n, a.p), g(a, n), n = a, n.n = null);
        }
        function g(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw F('$cacheFactory')('iid', b);
        var f = 0, h = t({}, d, { id: b }), m = {}, k = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, p = null;
        return a[b] = {
          put: function (a, b) {
            var c = l[a] || (l[a] = { key: a });
            e(c);
            if (!z(b))
              return a in m || f++, m[a] = b, f > k && this.remove(p.key), b;
          },
          get: function (a) {
            var b = l[a];
            if (b)
              return e(b), m[a];
          },
          remove: function (a) {
            var b = l[a];
            b && (b == n && (n = b.p), b == p && (p = b.n), g(b.n, b.p), delete l[a], delete m[a], f--);
          },
          removeAll: function () {
            m = {};
            f = 0;
            l = {};
            n = p = null;
          },
          destroy: function () {
            l = h = m = null;
            delete a[b];
          },
          info: function () {
            return t({}, h, { size: f });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        q(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function hd() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function jc(b, a) {
    var c = {}, d = 'Directive', e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, f = /^(on[a-z]+|formaction)$/;
    this.directive = function m(a, e) {
      xa(a, 'directive');
      D(a) ? (ub(e, 'directiveFactory'), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [
        '$injector',
        '$exceptionHandler',
        function (b, d) {
          var e = [];
          q(c[a], function (c, g) {
            try {
              var f = b.invoke(c);
              L(f) ? f = { compile: $(f) } : !f.compile && f.link && (f.compile = $(f.link));
              f.priority = f.priority || 0;
              f.index = g;
              f.name = f.name || a;
              f.require = f.require || f.controller && f.name;
              f.restrict = f.restrict || 'A';
              e.push(f);
            } catch (m) {
              d(m);
            }
          });
          return e;
        }
      ])), c[a].push(e)) : q(a, Qb(m));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return B(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, l, n, p, s, C, y, E, u, R, H) {
        function v(a, b, c, d, e) {
          a instanceof A || (a = A(a));
          q(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap('<span></span>').parent()[0]);
          });
          var g = N(a, b, a, c, d, e);
          ha(a, 'ng-scope');
          return function (b, c, d) {
            ub(b, 'scope');
            var e = c ? Ga.clone.call(a) : a;
            q(d, function (a, b) {
              e.data('$' + b + 'Controller', a);
            });
            d = 0;
            for (var f = e.length; d < f; d++) {
              var m = e[d].nodeType;
              1 !== m && 9 !== m || e.eq(d).data('$scope', b);
            }
            c && c(e, b);
            g && g(b, e, e);
            return e;
          };
        }
        function ha(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function N(a, b, c, d, e, g) {
          function f(a, c, d, e) {
            var g, k, s, l, n, p, I;
            g = c.length;
            var C = Array(g);
            for (n = 0; n < g; n++)
              C[n] = c[n];
            I = n = 0;
            for (p = m.length; n < p; I++)
              k = C[I], c = m[n++], g = m[n++], s = A(k), c ? (c.scope ? (l = a.$new(), s.data('$scope', l)) : l = a, (s = c.transclude) || !e && b ? c(g, l, k, d, V(a, s || b)) : c(g, l, k, d, e)) : g && g(a, k.childNodes, r, e);
          }
          for (var m = [], k, s, l, n, p = 0; p < a.length; p++)
            k = new Fb(), s = J(a[p], [], k, 0 === p ? d : r, e), (g = s.length ? ia(s, a[p], k, b, c, null, [], [], g) : null) && g.scope && ha(A(a[p]), 'ng-scope'), k = g && g.terminal || !(l = a[p].childNodes) || !l.length ? null : N(l, g ? g.transclude : b), m.push(g, k), n = n || g || k, g = null;
          return n ? f : null;
        }
        function V(a, b) {
          return function (c, d, e) {
            var g = !1;
            c || (c = a.$new(), g = c.$$transcluded = !0);
            d = b(c, d, e);
            if (g)
              d.on('$destroy', cb(c, c.$destroy));
            return d;
          };
        }
        function J(a, b, c, d, f) {
          var k = c.$attr, m;
          switch (a.nodeType) {
          case 1:
            T(b, ma(Ha(a).toLowerCase()), 'E', d, f);
            var s, l, n;
            m = a.attributes;
            for (var p = 0, C = m && m.length; p < C; p++) {
              var y = !1, R = !1;
              s = m[p];
              if (!M || 8 <= M || s.specified) {
                l = s.name;
                n = ma(l);
                W.test(n) && (l = db(n.substr(6), '-'));
                var v = n.replace(/(Start|End)$/, '');
                n === v + 'Start' && (y = l, R = l.substr(0, l.length - 5) + 'end', l = l.substr(0, l.length - 6));
                n = ma(l.toLowerCase());
                k[n] = l;
                c[n] = s = ba(s.value);
                fc(a, n) && (c[n] = !0);
                S(a, b, s, n);
                T(b, n, 'A', d, f, y, R);
              }
            }
            a = a.className;
            if (D(a) && '' !== a)
              for (; m = g.exec(a);)
                n = ma(m[2]), T(b, n, 'C', d, f) && (c[n] = ba(m[3])), a = a.substr(m.index + m[0].length);
            break;
          case 3:
            F(b, a.nodeValue);
            break;
          case 8:
            try {
              if (m = e.exec(a.nodeValue))
                n = ma(m[1]), T(b, n, 'M', d, f) && (c[n] = ba(m[2]));
            } catch (E) {
            }
          }
          b.sort(z);
          return b;
        }
        function ca(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ja('uterdir', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return A(d);
        }
        function P(a, b, c) {
          return function (d, e, g, f, m) {
            e = ca(e[0], b, c);
            return a(d, e, g, f, m);
          };
        }
        function ia(a, c, d, e, g, f, m, n, p) {
          function y(a, b, c, d) {
            if (a) {
              c && (a = P(a, c, d));
              a.require = G.require;
              if (H === G || G.$$isolateScope)
                a = kc(a, { isolateScope: !0 });
              m.push(a);
            }
            if (b) {
              c && (b = P(b, c, d));
              b.require = G.require;
              if (H === G || G.$$isolateScope)
                b = kc(b, { isolateScope: !0 });
              n.push(b);
            }
          }
          function R(a, b, c) {
            var d, e = 'data', g = !1;
            if (D(a)) {
              for (; '^' == (d = a.charAt(0)) || '?' == d;)
                a = a.substr(1), '^' == d && (e = 'inheritedData'), g = g || '?' == d;
              d = null;
              c && 'data' === e && (d = c[a]);
              d = d || b[e]('$' + a + 'Controller');
              if (!d && !g)
                throw ja('ctreq', a, da);
            } else
              K(a) && (d = [], q(a, function (a) {
                d.push(R(a, b, c));
              }));
            return d;
          }
          function E(a, e, g, f, p) {
            function y(a, b) {
              var c;
              2 > arguments.length && (b = a, a = r);
              z && (c = ca);
              return p(a, b, c);
            }
            var I, v, N, u, P, J, ca = {}, hb;
            I = c === g ? d : Tb(d, new Fb(A(g), d.$attr));
            v = I.$$element;
            if (H) {
              var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              f = A(g);
              J = e.$new(!0);
              ia && ia === H.$$originalDirective ? f.data('$isolateScope', J) : f.data('$isolateScopeNoTemplate', J);
              ha(f, 'ng-isolate-scope');
              q(H.scope, function (a, c) {
                var d = a.match(T) || [], g = d[3] || c, f = '?' == d[2], d = d[1], m, l, n, p;
                J.$$isolateBindings[c] = d + g;
                switch (d) {
                case '@':
                  I.$observe(g, function (a) {
                    J[c] = a;
                  });
                  I.$$observers[g].$$scope = e;
                  I[g] && (J[c] = b(I[g])(e));
                  break;
                case '=':
                  if (f && !I[g])
                    break;
                  l = s(I[g]);
                  p = l.literal ? ua : function (a, b) {
                    return a === b;
                  };
                  n = l.assign || function () {
                    m = J[c] = l(e);
                    throw ja('nonassign', I[g], H.name);
                  };
                  m = J[c] = l(e);
                  J.$watch(function () {
                    var a = l(e);
                    p(a, J[c]) || (p(a, m) ? n(e, a = J[c]) : J[c] = a);
                    return m = a;
                  }, null, l.literal);
                  break;
                case '&':
                  l = s(I[g]);
                  J[c] = function (a) {
                    return l(e, a);
                  };
                  break;
                default:
                  throw ja('iscp', H.name, c, a);
                }
              });
            }
            hb = p && y;
            V && q(V, function (a) {
              var b = {
                  $scope: a === H || a.$$isolateScope ? J : e,
                  $element: v,
                  $attrs: I,
                  $transclude: hb
                }, c;
              P = a.controller;
              '@' == P && (P = I[a.name]);
              c = C(P, b);
              ca[a.name] = c;
              z || v.data('$' + a.name + 'Controller', c);
              a.controllerAs && (b.$scope[a.controllerAs] = c);
            });
            f = 0;
            for (N = m.length; f < N; f++)
              try {
                u = m[f], u(u.isolateScope ? J : e, v, I, u.require && R(u.require, v, ca), hb);
              } catch (G) {
                l(G, ga(v));
              }
            f = e;
            H && (H.template || null === H.templateUrl) && (f = J);
            a && a(f, g.childNodes, r, p);
            for (f = n.length - 1; 0 <= f; f--)
              try {
                u = n[f], u(u.isolateScope ? J : e, v, I, u.require && R(u.require, v, ca), hb);
              } catch (B) {
                l(B, ga(v));
              }
          }
          p = p || {};
          var N = -Number.MAX_VALUE, u, V = p.controllerDirectives, H = p.newIsolateScopeDirective, ia = p.templateDirective;
          p = p.nonTlbTranscludeDirective;
          for (var T = !1, z = !1, t = d.$$element = A(c), G, da, U, F = e, O, M = 0, na = a.length; M < na; M++) {
            G = a[M];
            var Va = G.$$start, S = G.$$end;
            Va && (t = ca(c, Va, S));
            U = r;
            if (N > G.priority)
              break;
            if (U = G.scope)
              u = u || G, G.templateUrl || (x('new/isolated scope', H, G, t), X(U) && (H = G));
            da = G.name;
            !G.templateUrl && G.controller && (U = G.controller, V = V || {}, x('\'' + da + '\' controller', V[da], G, t), V[da] = G);
            if (U = G.transclude)
              T = !0, G.$$tlb || (x('transclusion', p, G, t), p = G), 'element' == U ? (z = !0, N = G.priority, U = ca(c, Va, S), t = d.$$element = A(Q.createComment(' ' + da + ': ' + d[da] + ' ')), c = t[0], ib(g, A(va.call(U, 0)), c), F = v(U, e, N, f && f.name, { nonTlbTranscludeDirective: p })) : (U = A(Ab(c)).contents(), t.empty(), F = v(U, e));
            if (G.template)
              if (x('template', ia, G, t), ia = G, U = L(G.template) ? G.template(t, d) : G.template, U = Y(U), G.replace) {
                f = G;
                U = A('<div>' + ba(U) + '</div>').contents();
                c = U[0];
                if (1 != U.length || 1 !== c.nodeType)
                  throw ja('tplrt', da, '');
                ib(g, t, c);
                na = { $attr: {} };
                U = J(c, [], na);
                var W = a.splice(M + 1, a.length - (M + 1));
                H && ic(U);
                a = a.concat(U).concat(W);
                B(d, na);
                na = a.length;
              } else
                t.html(U);
            if (G.templateUrl)
              x('template', ia, G, t), ia = G, G.replace && (f = G), E = w(a.splice(M, a.length - M), t, d, g, F, m, n, {
                controllerDirectives: V,
                newIsolateScopeDirective: H,
                templateDirective: ia,
                nonTlbTranscludeDirective: p
              }), na = a.length;
            else if (G.compile)
              try {
                O = G.compile(t, d, F), L(O) ? y(null, O, Va, S) : O && y(O.pre, O.post, Va, S);
              } catch (Z) {
                l(Z, ga(t));
              }
            G.terminal && (E.terminal = !0, N = Math.max(N, G.priority));
          }
          E.scope = u && !0 === u.scope;
          E.transclude = T && F;
          return E;
        }
        function ic(a) {
          for (var b = 0, c = a.length; b < c; b++)
            a[b] = Sb(a[b], { $$isolateScope: !0 });
        }
        function T(b, e, g, f, k, s, n) {
          if (e === k)
            return null;
          k = null;
          if (c.hasOwnProperty(e)) {
            var p;
            e = a.get(e + d);
            for (var C = 0, y = e.length; C < y; C++)
              try {
                p = e[C], (f === r || f > p.priority) && -1 != p.restrict.indexOf(g) && (s && (p = Sb(p, {
                  $$start: s,
                  $$end: n
                })), b.push(p), k = p);
              } catch (v) {
                l(v);
              }
          }
          return k;
        }
        function B(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          q(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          q(b, function (b, g) {
            'class' == g ? (ha(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == g ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b, d[g] = c[g]);
          });
        }
        function w(a, b, c, d, e, g, f, m) {
          var k = [], s, l, C = b[0], y = a.shift(), v = t({}, y, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: y
            }), R = L(y.templateUrl) ? y.templateUrl(b, c) : y.templateUrl;
          b.empty();
          n.get(u.getTrustedResourceUrl(R), { cache: p }).success(function (n) {
            var p, E;
            n = Y(n);
            if (y.replace) {
              n = A('<div>' + ba(n) + '</div>').contents();
              p = n[0];
              if (1 != n.length || 1 !== p.nodeType)
                throw ja('tplrt', y.name, R);
              n = { $attr: {} };
              ib(d, b, p);
              var u = J(p, [], n);
              X(y.scope) && ic(u);
              a = u.concat(a);
              B(c, n);
            } else
              p = C, b.html(n);
            a.unshift(v);
            s = ia(a, p, c, e, b, y, g, f, m);
            q(d, function (a, c) {
              a == p && (d[c] = b[0]);
            });
            for (l = N(b[0].childNodes, e); k.length;) {
              n = k.shift();
              E = k.shift();
              var H = k.shift(), ha = k.shift(), u = b[0];
              E !== C && (u = Ab(p), ib(H, A(E), u));
              E = s.transclude ? V(n, s.transclude) : ha;
              s(l, n, u, d, E);
            }
            k = null;
          }).error(function (a, b, c, d) {
            throw ja('tpload', d.url);
          });
          return function (a, b, c, d, e) {
            k ? (k.push(b), k.push(c), k.push(d), k.push(e)) : s(l, b, c, d, e);
          };
        }
        function z(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function x(a, b, c, d) {
          if (b)
            throw ja('multidir', b.name, c.name, a, ga(d));
        }
        function F(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: $(function (a, b) {
              var c = b.parent(), e = c.data('$binding') || [];
              e.push(d);
              ha(c.data('$binding', e), 'ng-binding');
              a.$watch(d, function (a) {
                b[0].nodeValue = a;
              });
            })
          });
        }
        function O(a, b) {
          if ('srcdoc' == b)
            return u.HTML;
          var c = Ha(a);
          if ('xlinkHref' == b || 'FORM' == c && 'action' == b || 'IMG' != c && ('src' == b || 'ngSrc' == b))
            return u.RESOURCE_URL;
        }
        function S(a, c, d, e) {
          var g = b(d, !0);
          if (g) {
            if ('multiple' === e && 'SELECT' === Ha(a))
              throw ja('selmulti', ga(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, m) {
                    d = m.$$observers || (m.$$observers = {});
                    if (f.test(e))
                      throw ja('nodomevents');
                    if (g = b(m[e], !0, O(a, e)))
                      m[e] = g(c), (d[e] || (d[e] = [])).$$inter = !0, (m.$$observers && m.$$observers[e].$$scope || c).$watch(g, function (a, b) {
                        'class' === e && a != b ? m.$updateClass(a, b) : m.$set(e, a);
                      });
                  }
                };
              }
            });
          }
        }
        function ib(a, b, c) {
          var d = b[0], e = b.length, g = d.parentNode, f, m;
          if (a)
            for (f = 0, m = a.length; f < m; f++)
              if (a[f] == d) {
                a[f++] = c;
                m = f + e - 1;
                for (var k = a.length; f < k; f++, m++)
                  m < k ? a[f] = a[m] : delete a[f];
                a.length -= e - 1;
                break;
              }
          g && g.replaceChild(c, d);
          a = Q.createDocumentFragment();
          a.appendChild(d);
          c[A.expando] = d[A.expando];
          d = 1;
          for (e = b.length; d < e; d++)
            g = b[d], A(g).remove(), a.appendChild(g), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function kc(a, b) {
          return t(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var Fb = function (a, b) {
          this.$$element = a;
          this.$attr = b || {};
        };
        Fb.prototype = {
          $normalize: ma,
          $addClass: function (a) {
            a && 0 < a.length && R.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && R.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            this.$removeClass(lc(b, a));
            this.$addClass(lc(a, b));
          },
          $set: function (a, b, c, d) {
            var e = fc(this.$$element[0], a);
            e && (this.$$element.prop(a, b), d = e);
            this[a] = b;
            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = db(a, '-'));
            e = Ha(this.$$element);
            if ('A' === e && 'href' === a || 'IMG' === e && 'src' === a)
              this[a] = b = H(b, 'src' === a);
            !1 !== c && (null === b || b === r ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
            (c = this.$$observers) && q(c[a], function (a) {
              try {
                a(b);
              } catch (c) {
                l(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            e.push(b);
            y.$evalAsync(function () {
              e.$$inter || b(c[a]);
            });
            return b;
          }
        };
        var da = b.startSymbol(), na = b.endSymbol(), Y = '{{' == da || '}}' == na ? Ba : function (a) {
            return a.replace(/\{\{/g, da).replace(/}}/g, na);
          }, W = /^ngAttr[A-Z]/;
        return v;
      }
    ];
  }
  function ma(b) {
    return Qa(b.replace(id, ''));
  }
  function lc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), g = 0;
    a:
      for (; g < d.length; g++) {
        for (var f = d[g], h = 0; h < e.length; h++)
          if (f == e[h])
            continue a;
        c += (0 < c.length ? ' ' : '') + f;
      }
    return c;
  }
  function jd() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      xa(a, 'controller');
      X(a) ? t(b, a) : b[a] = d;
    };
    this.$get = [
      '$injector',
      '$window',
      function (c, d) {
        return function (e, g) {
          var f, h, m;
          D(e) && (f = e.match(a), h = f[1], m = f[3], e = b.hasOwnProperty(h) ? b[h] : vb(g.$scope, h, !0) || vb(d, h, !0), Pa(e, h, !0));
          f = c.instantiate(e, g);
          if (m) {
            if (!g || 'object' != typeof g.$scope)
              throw F('$controller')('noscp', h || e.name, m);
            g.$scope[m] = f;
          }
          return f;
        };
      }
    ];
  }
  function kd() {
    this.$get = [
      '$window',
      function (b) {
        return A(b.document);
      }
    ];
  }
  function ld() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function mc(b) {
    var a = {}, c, d, e;
    if (!b)
      return a;
    q(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = x(ba(b.substr(0, e)));
      d = ba(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + (', ' + d) : d);
    });
    return a;
  }
  function nc(b) {
    var a = X(b) ? b : r;
    return function (c) {
      a || (a = mc(b));
      return c ? a[x(c)] || null : a;
    };
  }
  function oc(b, a, c) {
    if (L(c))
      return c(b, a);
    q(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function md() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = { 'Content-Type': 'application/json;charset=utf-8' }, e = this.defaults = {
        transformResponse: [function (d) {
            D(d) && (d = d.replace(c, ''), b.test(d) && a.test(d) && (d = Vb(d)));
            return d;
          }],
        transformRequest: [function (a) {
            return X(a) && '[object File]' !== $a.call(a) ? qa(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: aa(d),
          put: aa(d),
          patch: aa(d)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, g = this.interceptors = [], f = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, c, d, n, p) {
        function s(a) {
          function c(a) {
            var b = t({}, a, { data: oc(a.data, a.headers, d.transformResponse) });
            return 200 <= a.status && 300 > a.status ? b : n.reject(b);
          }
          var d = {
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse
            }, g = function (a) {
              function b(a) {
                var c;
                q(a, function (b, d) {
                  L(b) && (c = b(), null != c ? a[d] = c : delete a[d]);
                });
              }
              var c = e.headers, d = t({}, a.headers), g, f, c = t({}, c.common, c[x(a.method)]);
              b(c);
              b(d);
              a:
                for (g in c) {
                  a = x(g);
                  for (f in d)
                    if (x(f) === a)
                      continue a;
                  d[g] = c[g];
                }
              return d;
            }(a);
          t(d, a);
          d.headers = g;
          d.method = Ia(d.method);
          (a = Gb(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : r) && (g[d.xsrfHeaderName || e.xsrfHeaderName] = a);
          var f = [
              function (a) {
                g = a.headers;
                var b = oc(a.data, nc(g), a.transformRequest);
                z(a.data) && q(g, function (a, b) {
                  'content-type' === x(b) && delete g[b];
                });
                z(a.withCredentials) && !z(e.withCredentials) && (a.withCredentials = e.withCredentials);
                return C(a, b, g).then(c, c);
              },
              r
            ], h = n.when(d);
          for (q(u, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var k = f.shift(), h = h.then(a, k);
          }
          h.success = function (a) {
            h.then(function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          h.error = function (a) {
            h.then(null, function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          return h;
        }
        function C(b, c, g) {
          function f(a, b, c) {
            u && (200 <= a && 300 > a ? u.put(r, [
              a,
              b,
              mc(c)
            ]) : u.remove(r));
            m(b, a, c);
            d.$$phase || d.$apply();
          }
          function m(a, c, d) {
            c = Math.max(c, 0);
            (200 <= c && 300 > c ? p.resolve : p.reject)({
              data: a,
              status: c,
              headers: nc(d),
              config: b
            });
          }
          function k() {
            var a = bb(s.pendingRequests, b);
            -1 !== a && s.pendingRequests.splice(a, 1);
          }
          var p = n.defer(), C = p.promise, u, q, r = y(b.url, b.params);
          s.pendingRequests.push(b);
          C.then(k, k);
          (b.cache || e.cache) && (!1 !== b.cache && 'GET' == b.method) && (u = X(b.cache) ? b.cache : X(e.cache) ? e.cache : E);
          if (u)
            if (q = u.get(r), B(q)) {
              if (q.then)
                return q.then(k, k), q;
              K(q) ? m(q[1], q[0], aa(q[2])) : m(q, 200, {});
            } else
              u.put(r, C);
          z(q) && a(b.method, r, c, f, g, b.timeout, b.withCredentials, b.responseType);
          return C;
        }
        function y(a, b) {
          if (!b)
            return a;
          var c = [];
          Pc(b, function (a, b) {
            null === a || z(a) || (K(a) || (a = [a]), q(a, function (a) {
              X(a) && (a = qa(a));
              c.push(wa(b) + '=' + wa(a));
            }));
          });
          return a + (-1 == a.indexOf('?') ? '?' : '&') + c.join('&');
        }
        var E = c('$http'), u = [];
        q(g, function (a) {
          u.unshift(D(a) ? p.get(a) : p.invoke(a));
        });
        q(f, function (a, b) {
          var c = D(a) ? p.get(a) : p.invoke(a);
          u.splice(b, 0, {
            response: function (a) {
              return c(n.when(a));
            },
            responseError: function (a) {
              return c(n.reject(a));
            }
          });
        });
        s.pendingRequests = [];
        (function (a) {
          q(arguments, function (a) {
            s[a] = function (b, c) {
              return s(t(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          q(arguments, function (a) {
            s[a] = function (b, c, d) {
              return s(t(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put'));
        s.defaults = e;
        return s;
      }
    ];
  }
  function nd(b) {
    return 8 >= M && 'patch' === x(b) ? new ActiveXObject('Microsoft.XMLHTTP') : new Z.XMLHttpRequest();
  }
  function od() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return pd(b, nd, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function pd(b, a, c, d, e) {
    function g(a, b) {
      var c = e.createElement('script'), d = function () {
          c.onreadystatechange = c.onload = c.onerror = null;
          e.body.removeChild(c);
          b && b();
        };
      c.type = 'text/javascript';
      c.src = a;
      M && 8 >= M ? c.onreadystatechange = function () {
        /loaded|complete/.test(c.readyState) && d();
      } : c.onload = c.onerror = function () {
        d();
      };
      e.body.appendChild(c);
      return d;
    }
    var f = -1;
    return function (e, m, k, l, n, p, s, C) {
      function y() {
        u = f;
        H && H();
        v && v.abort();
      }
      function E(a, d, e, g) {
        r && c.cancel(r);
        H = v = null;
        d = 0 === d ? e ? 200 : 404 : d;
        a(1223 == d ? 204 : d, e, g);
        b.$$completeOutstandingRequest(w);
      }
      var u;
      b.$$incOutstandingRequestCount();
      m = m || b.url();
      if ('jsonp' == x(e)) {
        var R = '_' + (d.counter++).toString(36);
        d[R] = function (a) {
          d[R].data = a;
        };
        var H = g(m.replace('JSON_CALLBACK', 'angular.callbacks.' + R), function () {
            d[R].data ? E(l, 200, d[R].data) : E(l, u || -2);
            d[R] = Ca.noop;
          });
      } else {
        var v = a(e);
        v.open(e, m, !0);
        q(n, function (a, b) {
          B(a) && v.setRequestHeader(b, a);
        });
        v.onreadystatechange = function () {
          if (v && 4 == v.readyState) {
            var a = null, b = null;
            u !== f && (a = v.getAllResponseHeaders(), b = 'response' in v ? v.response : v.responseText);
            E(l, u || v.status, b, a);
          }
        };
        s && (v.withCredentials = !0);
        C && (v.responseType = C);
        v.send(k || null);
      }
      if (0 < p)
        var r = c(y, p);
      else
        p && p.then && p.then(y);
    };
  }
  function qd() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function g(g, k, l) {
          for (var n, p, s = 0, C = [], y = g.length, E = !1, u = []; s < y;)
            -1 != (n = g.indexOf(b, s)) && -1 != (p = g.indexOf(a, n + f)) ? (s != n && C.push(g.substring(s, n)), C.push(s = c(E = g.substring(n + f, p))), s.exp = E, s = p + h, E = !0) : (s != y && C.push(g.substring(s)), s = y);
          (y = C.length) || (C.push(''), y = 1);
          if (l && 1 < C.length)
            throw pc('noconcat', g);
          if (!k || E)
            return u.length = y, s = function (a) {
              try {
                for (var b = 0, c = y, f; b < c; b++)
                  'function' == typeof (f = C[b]) && (f = f(a), f = l ? e.getTrusted(l, f) : e.valueOf(f), null === f || z(f) ? f = '' : 'string' != typeof f && (f = qa(f))), u[b] = f;
                return u.join('');
              } catch (h) {
                a = pc('interr', g, h.toString()), d(a);
              }
            }, s.exp = g, s.parts = C, s;
        }
        var f = b.length, h = a.length;
        g.startSymbol = function () {
          return b;
        };
        g.endSymbol = function () {
          return a;
        };
        return g;
      }
    ];
  }
  function rd() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (b, a, c) {
        function d(d, f, h, m) {
          var k = a.setInterval, l = a.clearInterval, n = c.defer(), p = n.promise, s = 0, C = B(m) && !m;
          h = B(h) ? h : 0;
          p.then(null, null, d);
          p.$$intervalId = k(function () {
            n.notify(s++);
            0 < h && s >= h && (n.resolve(s), l(p.$$intervalId), delete e[p.$$intervalId]);
            C || b.$apply();
          }, f);
          e[p.$$intervalId] = n;
          return p;
        }
        var e = {};
        d.cancel = function (a) {
          return a && a.$$intervalId in e ? (e[a.$$intervalId].reject('canceled'), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1;
        };
        return d;
      }
    ];
  }
  function sd() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function qc(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = tb(b[a]);
    return b.join('/');
  }
  function rc(b, a, c) {
    b = ya(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = S(b.port) || td[b.protocol] || null;
  }
  function sc(b, a, c) {
    var d = '/' !== b.charAt(0);
    d && (b = '/' + b);
    b = ya(b, c);
    a.$$path = decodeURIComponent(d && '/' === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = Xb(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function oa(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Wa(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function Hb(b) {
    return b.substr(0, Wa(b).lastIndexOf('/') + 1);
  }
  function tc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = Hb(b);
    rc(b, this, b);
    this.$$parse = function (a) {
      var e = oa(c, a);
      if (!D(e))
        throw Ib('ipthprfx', a, c);
      sc(e, this, b);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Yb(this.$$search), b = this.$$hash ? '#' + tb(this.$$hash) : '';
      this.$$url = qc(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = oa(b, d)) !== r)
        return d = e, (e = oa(a, e)) !== r ? c + (oa('/', e) || e) : b + d;
      if ((e = oa(c, d)) !== r)
        return c + e;
      if (c == d + '/')
        return c;
    };
  }
  function Jb(b, a) {
    var c = Hb(b);
    rc(b, this, b);
    this.$$parse = function (d) {
      var e = oa(b, d) || oa(c, d), e = '#' == e.charAt(0) ? oa(a, e) : this.$$html5 ? e : '';
      if (!D(e))
        throw Ib('ihshprfx', d, a);
      sc(e, this, b);
      d = this.$$path;
      var g = /^\/?.*?:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Yb(this.$$search), e = this.$$hash ? '#' + tb(this.$$hash) : '';
      this.$$url = qc(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$rewrite = function (a) {
      if (Wa(b) == Wa(a))
        return a;
    };
  }
  function uc(b, a) {
    this.$$html5 = !0;
    Jb.apply(this, arguments);
    var c = Hb(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == Wa(d))
        return d;
      if (e = oa(c, d))
        return b + a + e;
      if (c === d + '/')
        return c;
    };
  }
  function jb(b) {
    return function () {
      return this[b];
    };
  }
  function vc(b, a) {
    return function (c) {
      if (z(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function ud() {
    var b = '', a = !1;
    this.hashPrefix = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, g) {
        function f(a) {
          c.$broadcast('$locationChangeSuccess', h.absUrl(), a);
        }
        var h, m = d.baseHref(), k = d.url();
        a ? (m = k.substring(0, k.indexOf('/', k.indexOf('//') + 2)) + (m || '/'), e = e.history ? tc : uc) : (m = Wa(k), e = Jb);
        h = new e(m, '#' + b);
        h.$$parse(h.$$rewrite(k));
        g.on('click', function (a) {
          if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
            for (var b = A(a.target); 'a' !== x(b[0].nodeName);)
              if (b[0] === g[0] || !(b = b.parent())[0])
                return;
            var e = b.prop('href');
            X(e) && '[object SVGAnimatedString]' === e.toString() && (e = ya(e.animVal).href);
            var f = h.$$rewrite(e);
            e && (!b.attr('target') && f && !a.isDefaultPrevented()) && (a.preventDefault(), f != d.url() && (h.$$parse(f), c.$apply(), Z.angular['ff-684208-preventDefault'] = !0));
          }
        });
        h.absUrl() != k && d.url(h.absUrl(), !0);
        d.onUrlChange(function (a) {
          h.absUrl() != a && (c.$evalAsync(function () {
            var b = h.absUrl();
            h.$$parse(a);
            c.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : f(b);
          }), c.$$phase || c.$digest());
        });
        var l = 0;
        c.$watch(function () {
          var a = d.url(), b = h.$$replace;
          l && a == h.absUrl() || (l++, c.$evalAsync(function () {
            c.$broadcast('$locationChangeStart', h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), f(a));
          }));
          h.$$replace = !1;
          return l;
        });
        return h;
      }
    ];
  }
  function vd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || w;
          a = !1;
          try {
            a = !!e.apply;
          } catch (m) {
          }
          return a ? function () {
            var a = [];
            q(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function ea(b, a) {
    if ('constructor' === b)
      throw za('isecfld', a);
    return b;
  }
  function Xa(b, a) {
    if (b) {
      if (b.constructor === b)
        throw za('isecfn', a);
      if (b.document && b.location && b.alert && b.setInterval)
        throw za('isecwindow', a);
      if (b.children && (b.nodeName || b.on && b.find))
        throw za('isecdom', a);
    }
    return b;
  }
  function kb(b, a, c, d, e) {
    e = e || {};
    a = a.split('.');
    for (var g, f = 0; 1 < a.length; f++) {
      g = ea(a.shift(), d);
      var h = b[g];
      h || (h = {}, b[g] = h);
      b = h;
      b.then && e.unwrapPromises && (ra(d), '$$v' in b || function (a) {
        a.then(function (b) {
          a.$$v = b;
        });
      }(b), b.$$v === r && (b.$$v = {}), b = b.$$v);
    }
    g = ea(a.shift(), d);
    return b[g] = c;
  }
  function wc(b, a, c, d, e, g, f) {
    ea(b, g);
    ea(a, g);
    ea(c, g);
    ea(d, g);
    ea(e, g);
    return f.unwrapPromises ? function (f, m) {
      var k = m && m.hasOwnProperty(b) ? m : f, l;
      if (null == k)
        return k;
      (k = k[b]) && k.then && (ra(g), '$$v' in k || (l = k, l.$$v = r, l.then(function (a) {
        l.$$v = a;
      })), k = k.$$v);
      if (!a)
        return k;
      if (null == k)
        return r;
      (k = k[a]) && k.then && (ra(g), '$$v' in k || (l = k, l.$$v = r, l.then(function (a) {
        l.$$v = a;
      })), k = k.$$v);
      if (!c)
        return k;
      if (null == k)
        return r;
      (k = k[c]) && k.then && (ra(g), '$$v' in k || (l = k, l.$$v = r, l.then(function (a) {
        l.$$v = a;
      })), k = k.$$v);
      if (!d)
        return k;
      if (null == k)
        return r;
      (k = k[d]) && k.then && (ra(g), '$$v' in k || (l = k, l.$$v = r, l.then(function (a) {
        l.$$v = a;
      })), k = k.$$v);
      if (!e)
        return k;
      if (null == k)
        return r;
      (k = k[e]) && k.then && (ra(g), '$$v' in k || (l = k, l.$$v = r, l.then(function (a) {
        l.$$v = a;
      })), k = k.$$v);
      return k;
    } : function (g, f) {
      var k = f && f.hasOwnProperty(b) ? f : g;
      if (null == k)
        return k;
      k = k[b];
      if (!a)
        return k;
      if (null == k)
        return r;
      k = k[a];
      if (!c)
        return k;
      if (null == k)
        return r;
      k = k[c];
      if (!d)
        return k;
      if (null == k)
        return r;
      k = k[d];
      return e ? null == k ? r : k = k[e] : k;
    };
  }
  function wd(b, a) {
    ea(b, a);
    return function (a, d) {
      return null == a ? r : (d && d.hasOwnProperty(b) ? d : a)[b];
    };
  }
  function xd(b, a, c) {
    ea(b, c);
    ea(a, c);
    return function (c, e) {
      if (null == c)
        return r;
      c = (e && e.hasOwnProperty(b) ? e : c)[b];
      return null == c ? r : c[a];
    };
  }
  function xc(b, a, c) {
    if (Kb.hasOwnProperty(b))
      return Kb[b];
    var d = b.split('.'), e = d.length, g;
    if (a.unwrapPromises || 1 !== e)
      if (a.unwrapPromises || 2 !== e)
        if (a.csp)
          g = 6 > e ? wc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, g) {
            var f = 0, h;
            do
              h = wc(d[f++], d[f++], d[f++], d[f++], d[f++], c, a)(b, g), g = r, b = h;
            while (f < e);
            return h;
          };
        else {
          var f = 'var p;\n';
          q(d, function (b, d) {
            ea(b, c);
            f += 'if(s == null) return undefined;\ns=' + (d ? 's' : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, '\\$1') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : '');
          });
          var f = f + 'return s;', h = new Function('s', 'k', 'pw', f);
          h.toString = $(f);
          g = a.unwrapPromises ? function (a, b) {
            return h(a, b, ra);
          } : h;
        }
      else
        g = xd(d[0], d[1], c);
    else
      g = wd(d[0], c);
    'hasOwnProperty' !== b && (Kb[b] = g);
    return g;
  }
  function yd() {
    var b = {}, a = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function (b) {
      return B(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises;
    };
    this.logPromiseWarnings = function (b) {
      return B(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings;
    };
    this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (c, d, e) {
        a.csp = d.csp;
        ra = function (b) {
          a.logPromiseWarnings && !yc.hasOwnProperty(b) && (yc[b] = !0, e.warn('[$parse] Promise found in the expression `' + b + '`. Automatic unwrapping of promises in Angular expressions is deprecated.'));
        };
        return function (d) {
          var e;
          switch (typeof d) {
          case 'string':
            if (b.hasOwnProperty(d))
              return b[d];
            e = new Lb(a);
            e = new Ya(e, c, a).parse(d, !1);
            'hasOwnProperty' !== d && (b[d] = e);
            return e;
          case 'function':
            return d;
          default:
            return w;
          }
        };
      }
    ];
  }
  function zd() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return Ad(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function Ad(b, a) {
    function c(a) {
      return a;
    }
    function d(a) {
      return f(a);
    }
    var e = function () {
        var h = [], m, k;
        return k = {
          resolve: function (a) {
            if (h) {
              var c = h;
              h = r;
              m = g(a);
              c.length && b(function () {
                for (var a, b = 0, d = c.length; b < d; b++)
                  a = c[b], m.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            k.resolve(f(a));
          },
          notify: function (a) {
            if (h) {
              var c = h;
              h.length && b(function () {
                for (var b, d = 0, e = c.length; d < e; d++)
                  b = c[d], b[2](a);
              });
            }
          },
          promise: {
            then: function (b, g, f) {
              var k = e(), C = function (d) {
                  try {
                    k.resolve((L(b) ? b : c)(d));
                  } catch (e) {
                    k.reject(e), a(e);
                  }
                }, y = function (b) {
                  try {
                    k.resolve((L(g) ? g : d)(b));
                  } catch (c) {
                    k.reject(c), a(c);
                  }
                }, E = function (b) {
                  try {
                    k.notify((L(f) ? f : c)(b));
                  } catch (d) {
                    a(d);
                  }
                };
              h ? h.push([
                C,
                y,
                E
              ]) : m.then(C, y, E);
              return k.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, c) {
                var d = e();
                c ? d.resolve(a) : d.reject(a);
                return d.promise;
              }
              function d(e, g) {
                var f = null;
                try {
                  f = (a || c)();
                } catch (h) {
                  return b(h, !1);
                }
                return f && L(f.then) ? f.then(function () {
                  return b(e, g);
                }, function (a) {
                  return b(a, !1);
                }) : b(e, g);
              }
              return this.then(function (a) {
                return d(a, !0);
              }, function (a) {
                return d(a, !1);
              });
            }
          }
        };
      }, g = function (a) {
        return a && L(a.then) ? a : {
          then: function (c) {
            var d = e();
            b(function () {
              d.resolve(c(a));
            });
            return d.promise;
          }
        };
      }, f = function (c) {
        return {
          then: function (g, f) {
            var l = e();
            b(function () {
              try {
                l.resolve((L(f) ? f : d)(c));
              } catch (b) {
                l.reject(b), a(b);
              }
            });
            return l.promise;
          }
        };
      };
    return {
      defer: e,
      reject: f,
      when: function (h, m, k, l) {
        var n = e(), p, s = function (b) {
            try {
              return (L(m) ? m : c)(b);
            } catch (d) {
              return a(d), f(d);
            }
          }, C = function (b) {
            try {
              return (L(k) ? k : d)(b);
            } catch (c) {
              return a(c), f(c);
            }
          }, y = function (b) {
            try {
              return (L(l) ? l : c)(b);
            } catch (d) {
              a(d);
            }
          };
        b(function () {
          g(h).then(function (a) {
            p || (p = !0, n.resolve(g(a).then(s, C, y)));
          }, function (a) {
            p || (p = !0, n.resolve(C(a)));
          }, function (a) {
            p || n.notify(y(a));
          });
        });
        return n.promise;
      },
      all: function (a) {
        var b = e(), c = 0, d = K(a) ? [] : {};
        q(a, function (a, e) {
          c++;
          g(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a);
          });
        });
        0 === c && b.resolve(d);
        return b.promise;
      }
    };
  }
  function Bd() {
    var b = 10, a = F('$rootScope'), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, e, g, f) {
        function h() {
          this.$id = Za();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = !1;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        function m(b) {
          if (p.$$phase)
            throw a('inprog', p.$$phase);
          p.$$phase = b;
        }
        function k(a, b) {
          var c = g(a);
          Pa(c, b);
          return c;
        }
        function l(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function n() {
        }
        h.prototype = {
          constructor: h,
          $new: function (a) {
            a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {
            }, a.prototype = this, a = new a(), a.$id = Za());
            a['this'] = a;
            a.$$listeners = {};
            a.$$listenerCount = {};
            a.$parent = this;
            a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
            a.$$prevSibling = this.$$childTail;
            this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
            return a;
          },
          $watch: function (a, b, d) {
            var e = k(a, 'watch'), g = this.$$watchers, f = {
                fn: b,
                last: n,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            if (!L(b)) {
              var h = k(b || w, 'listener');
              f.fn = function (a, b, c) {
                h(c);
              };
            }
            if ('string' == typeof a && e.constant) {
              var m = f.fn;
              f.fn = function (a, b, c) {
                m.call(this, a, b, c);
                Ma(g, f);
              };
            }
            g || (g = this.$$watchers = []);
            g.unshift(f);
            return function () {
              Ma(g, f);
              c = null;
            };
          },
          $watchCollection: function (a, b) {
            var c = this, d, e, f = 0, h = g(a), m = [], k = {}, l = 0;
            return this.$watch(function () {
              e = h(c);
              var a, b;
              if (X(e))
                if (rb(e))
                  for (d !== m && (d = m, l = d.length = 0, f++), a = e.length, l !== a && (f++, d.length = l = a), b = 0; b < a; b++)
                    d[b] !== e[b] && (f++, d[b] = e[b]);
                else {
                  d !== k && (d = k = {}, l = 0, f++);
                  a = 0;
                  for (b in e)
                    e.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? d[b] !== e[b] && (f++, d[b] = e[b]) : (l++, d[b] = e[b], f++));
                  if (l > a)
                    for (b in f++, d)
                      d.hasOwnProperty(b) && !e.hasOwnProperty(b) && (l--, delete d[b]);
                }
              else
                d !== e && (d = e, f++);
              return f;
            }, function () {
              b(e, d, c);
            });
          },
          $digest: function () {
            var d, f, g, h, k = this.$$asyncQueue, l = this.$$postDigestQueue, q, v, r = b, N, V = [], J, A, P;
            m('$digest');
            c = null;
            do {
              v = !1;
              for (N = this; k.length;) {
                try {
                  P = k.shift(), P.scope.$eval(P.expression);
                } catch (B) {
                  p.$$phase = null, e(B);
                }
                c = null;
              }
              a:
                do {
                  if (h = N.$$watchers)
                    for (q = h.length; q--;)
                      try {
                        if (d = h[q])
                          if ((f = d.get(N)) !== (g = d.last) && !(d.eq ? ua(f, g) : 'number' == typeof f && 'number' == typeof g && isNaN(f) && isNaN(g)))
                            v = !0, c = d, d.last = d.eq ? aa(f) : f, d.fn(f, g === n ? f : g, N), 5 > r && (J = 4 - r, V[J] || (V[J] = []), A = L(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, A += '; newVal: ' + qa(f) + '; oldVal: ' + qa(g), V[J].push(A));
                          else if (d === c) {
                            v = !1;
                            break a;
                          }
                      } catch (t) {
                        p.$$phase = null, e(t);
                      }
                  if (!(h = N.$$childHead || N !== this && N.$$nextSibling))
                    for (; N !== this && !(h = N.$$nextSibling);)
                      N = N.$parent;
                } while (N = h);
              if ((v || k.length) && !r--)
                throw p.$$phase = null, a('infdig', b, qa(V));
            } while (v || k.length);
            for (p.$$phase = null; l.length;)
              try {
                l.shift()();
              } catch (z) {
                e(z);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this !== p && (q(this.$$listenerCount, cb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null);
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a) {
            p.$$phase || p.$$asyncQueue.length || f.defer(function () {
              p.$$asyncQueue.length && p.$digest();
            });
            this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return m('$apply'), this.$eval(a);
            } catch (b) {
              e(b);
            } finally {
              p.$$phase = null;
              try {
                p.$digest();
              } catch (c) {
                throw e(c), c;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[bb(c, b)] = null;
              l(e, 1, a);
            };
          },
          $emit: function (a, b) {
            var c = [], d, f = this, g = !1, h = {
                name: a,
                targetScope: f,
                stopPropagation: function () {
                  g = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, m = [h].concat(va.call(arguments, 1)), k, l;
            do {
              d = f.$$listeners[a] || c;
              h.currentScope = f;
              k = 0;
              for (l = d.length; k < l; k++)
                if (d[k])
                  try {
                    d[k].apply(null, m);
                  } catch (p) {
                    e(p);
                  }
                else
                  d.splice(k, 1), k--, l--;
              if (g)
                break;
              f = f.$parent;
            } while (f);
            return h;
          },
          $broadcast: function (a, b) {
            for (var c = this, d = this, f = {
                  name: a,
                  targetScope: this,
                  preventDefault: function () {
                    f.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, g = [f].concat(va.call(arguments, 1)), h, k; c = d;) {
              f.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, g);
                  } catch (m) {
                    e(m);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            return f;
          }
        };
        var p = new h();
        return p;
      }
    ];
  }
  function Cd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, g;
        if (!M || 8 <= M)
          if (g = ya(c).href, '' !== g && !g.match(e))
            return 'unsafe:' + g;
        return c;
      };
    };
  }
  function Dd(b) {
    if ('self' === b)
      return b;
    if (D(b)) {
      if (-1 < b.indexOf('***'))
        throw sa('iwcard', b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return RegExp('^' + b + '$');
    }
    if (ab(b))
      return RegExp('^' + b.source + '$');
    throw sa('imatcher');
  }
  function zc(b) {
    var a = [];
    B(b) && q(b, function (b) {
      a.push(Dd(b));
    });
    return a;
  }
  function Ed() {
    this.SCE_CONTEXTS = fa;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = zc(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = zc(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var e = function (a) {
          throw sa('unsafe');
        };
        c.has('$sanitize') && (e = c.get('$sanitize'));
        var g = d(), f = {};
        f[fa.HTML] = d(g);
        f[fa.CSS] = d(g);
        f[fa.URL] = d(g);
        f[fa.JS] = d(g);
        f[fa.RESOURCE_URL] = d(f[fa.URL]);
        return {
          trustAs: function (a, b) {
            var c = f.hasOwnProperty(a) ? f[a] : null;
            if (!c)
              throw sa('icontext', a, b);
            if (null === b || b === r || '' === b)
              return b;
            if ('string' !== typeof b)
              throw sa('itype', a);
            return new c(b);
          },
          getTrusted: function (c, d) {
            if (null === d || d === r || '' === d)
              return d;
            var g = f.hasOwnProperty(c) ? f[c] : null;
            if (g && d instanceof g)
              return d.$$unwrapTrustedValue();
            if (c === fa.RESOURCE_URL) {
              var g = ya(d.toString()), l, n, p = !1;
              l = 0;
              for (n = b.length; l < n; l++)
                if ('self' === b[l] ? Gb(g) : b[l].exec(g.href)) {
                  p = !0;
                  break;
                }
              if (p)
                for (l = 0, n = a.length; l < n; l++)
                  if ('self' === a[l] ? Gb(g) : a[l].exec(g.href)) {
                    p = !1;
                    break;
                  }
              if (p)
                return d;
              throw sa('insecurl', d.toString());
            }
            if (c === fa.HTML)
              return e(d);
            throw sa('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function Fd() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (a, c, d) {
        if (b && c.msie && 8 > c.msieDocumentMode)
          throw sa('iequirks');
        var e = aa(fa);
        e.isEnabled = function () {
          return b;
        };
        e.trustAs = d.trustAs;
        e.getTrusted = d.getTrusted;
        e.valueOf = d.valueOf;
        b || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = Ba);
        e.parseAs = function (b, c) {
          var d = a(c);
          return d.literal && d.constant ? d : function (a, c) {
            return e.getTrusted(b, d(a, c));
          };
        };
        var g = e.parseAs, f = e.getTrusted, h = e.trustAs;
        q(fa, function (a, b) {
          var c = x(b);
          e[Qa('parse_as_' + c)] = function (b) {
            return g(a, b);
          };
          e[Qa('get_trusted_' + c)] = function (b) {
            return f(a, b);
          };
          e[Qa('trust_as_' + c)] = function (b) {
            return h(a, b);
          };
        });
        return e;
      }
    ];
  }
  function Gd() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = S((/android (\d+)/.exec(x((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), g = a[0] || {}, f = g.documentMode, h, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = g.body && g.body.style, l = !1, n = !1;
        if (k) {
          for (var p in k)
            if (l = m.exec(p)) {
              h = l[0];
              h = h.substr(0, 1).toUpperCase() + h.substr(1);
              break;
            }
          h || (h = 'WebkitOpacity' in k && 'webkit');
          l = !!('transition' in k || h + 'Transition' in k);
          n = !!('animation' in k || h + 'Animation' in k);
          !d || l && n || (l = D(g.body.style.webkitTransition), n = D(g.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hashchange: 'onhashchange' in b && (!f || 7 < f),
          hasEvent: function (a) {
            if ('input' == a && 9 == M)
              return !1;
            if (z(c[a])) {
              var b = g.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: Ub(),
          vendorPrefix: h,
          transitions: l,
          animations: n,
          android: d,
          msie: M,
          msieDocumentMode: f
        };
      }
    ];
  }
  function Hd() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (b, a, c, d) {
        function e(e, h, m) {
          var k = c.defer(), l = k.promise, n = B(m) && !m;
          h = a.defer(function () {
            try {
              k.resolve(e());
            } catch (a) {
              k.reject(a), d(a);
            } finally {
              delete g[l.$$timeoutId];
            }
            n || b.$apply();
          }, h);
          l.$$timeoutId = h;
          g[h] = k;
          return l;
        }
        var g = {};
        e.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return e;
      }
    ];
  }
  function ya(b, a) {
    var c = b;
    M && (Y.setAttribute('href', c), c = Y.href);
    Y.setAttribute('href', c);
    return {
      href: Y.href,
      protocol: Y.protocol ? Y.protocol.replace(/:$/, '') : '',
      host: Y.host,
      search: Y.search ? Y.search.replace(/^\?/, '') : '',
      hash: Y.hash ? Y.hash.replace(/^#/, '') : '',
      hostname: Y.hostname,
      port: Y.port,
      pathname: '/' === Y.pathname.charAt(0) ? Y.pathname : '/' + Y.pathname
    };
  }
  function Gb(b) {
    b = D(b) ? ya(b) : b;
    return b.protocol === Ac.protocol && b.host === Ac.host;
  }
  function Id() {
    this.$get = $(Z);
  }
  function Bc(b) {
    function a(d, e) {
      if (X(d)) {
        var g = {};
        q(d, function (b, c) {
          g[c] = a(c, b);
        });
        return g;
      }
      return b.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ];
    a('currency', Cc);
    a('date', Dc);
    a('filter', Jd);
    a('json', Kd);
    a('limitTo', Ld);
    a('lowercase', Md);
    a('number', Ec);
    a('orderBy', Fc);
    a('uppercase', Nd);
  }
  function Jd() {
    return function (b, a, c) {
      if (!K(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return Ca.equals(a, b);
      } : function (a, b) {
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var g = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !g(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && g(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (g(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var f in a)
          (function (b) {
            'undefined' != typeof a[b] && e.push(function (c) {
              return g('$' == b ? c : vb(c, b), a[b]);
            });
          }(f));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (f = 0; f < b.length; f++) {
        var h = b[f];
        e.check(h) && d.push(h);
      }
      return d;
    };
  }
  function Cc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      z(d) && (d = a.CURRENCY_SYM);
      return Gc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
    };
  }
  function Ec(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Gc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function Gc(b, a, c, d, e) {
    if (isNaN(b) || !isFinite(b))
      return '';
    var g = 0 > b;
    b = Math.abs(b);
    var f = b + '', h = '', m = [], k = !1;
    if (-1 !== f.indexOf('e')) {
      var l = f.match(/([\d\.]+)e(-?)(\d+)/);
      l && '-' == l[2] && l[3] > e + 1 ? f = '0' : (h = f, k = !0);
    }
    if (k)
      0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
    else {
      f = (f.split(Hc)[1] || '').length;
      z(e) && (e = Math.min(Math.max(a.minFrac, f), a.maxFrac));
      f = Math.pow(10, e);
      b = Math.round(b * f) / f;
      b = ('' + b).split(Hc);
      f = b[0];
      b = b[1] || '';
      var l = 0, n = a.lgSize, p = a.gSize;
      if (f.length >= n + p)
        for (l = f.length - n, k = 0; k < l; k++)
          0 === (l - k) % p && 0 !== k && (h += c), h += f.charAt(k);
      for (k = l; k < f.length; k++)
        0 === (f.length - k) % n && 0 !== k && (h += c), h += f.charAt(k);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (h += d + b.substr(0, e));
    }
    m.push(g ? a.negPre : a.posPre);
    m.push(h);
    m.push(g ? a.negSuf : a.posSuf);
    return m.join('');
  }
  function Mb(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function W(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Mb(e, a, d);
    };
  }
  function lb(b, a) {
    return function (c, d) {
      var e = c['get' + b](), g = Ia(a ? 'SHORT' + b : b);
      return d[g][e];
    };
  }
  function Dc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var g = 0, f = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (g = S(b[9] + b[10]), f = S(b[9] + b[11]));
        h.call(a, S(b[1]), S(b[2]) - 1, S(b[3]));
        g = S(b[4] || 0) - g;
        f = S(b[5] || 0) - f;
        h = S(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        m.call(a, g, f, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var g = '', f = [], h, m;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      D(c) && (c = Od.test(c) ? S(c) : a(c));
      sb(c) && (c = new Date(c));
      if (!La(c))
        return c;
      for (; e;)
        (m = Pd.exec(e)) ? (f = f.concat(va.call(m, 1)), e = f.pop()) : (f.push(e), e = null);
      q(f, function (a) {
        h = Qd[a];
        g += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Kd() {
    return function (b) {
      return qa(b, !0);
    };
  }
  function Ld() {
    return function (b, a) {
      if (!K(b) && !D(b))
        return b;
      a = S(a);
      if (D(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function Fc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Oa(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      if (!K(a) || !c)
        return a;
      c = K(c) ? c : [c];
      c = Rc(c, function (a) {
        var c = !1, d = a || Ba;
        if (D(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          d = b(a);
        }
        return e(function (a, b) {
          var c;
          c = d(a);
          var e = d(b), g = typeof c, f = typeof e;
          g == f ? ('string' == g && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = g < f ? -1 : 1;
          return c;
        }, c);
      });
      for (var g = [], f = 0; f < a.length; f++)
        g.push(a[f]);
      return g.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function ta(b) {
    L(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return $(b);
  }
  function Ic(b, a) {
    function c(a, c) {
      c = c ? '-' + db(c, '-') : '';
      b.removeClass((a ? mb : nb) + c).addClass((a ? nb : mb) + c);
    }
    var d = this, e = b.parent().controller('form') || ob, g = 0, f = d.$error = {}, h = [];
    d.$name = a.name || a.ngForm;
    d.$dirty = !1;
    d.$pristine = !0;
    d.$valid = !0;
    d.$invalid = !1;
    e.$addControl(d);
    b.addClass(Ja);
    c(!0);
    d.$addControl = function (a) {
      xa(a.$name, 'input');
      h.push(a);
      a.$name && (d[a.$name] = a);
    };
    d.$removeControl = function (a) {
      a.$name && d[a.$name] === a && delete d[a.$name];
      q(f, function (b, c) {
        d.$setValidity(c, !0, a);
      });
      Ma(h, a);
    };
    d.$setValidity = function (a, b, h) {
      var n = f[a];
      if (b)
        n && (Ma(n, h), n.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), f[a] = !1, c(!0, a), e.$setValidity(a, !0, d)));
      else {
        g || c(b);
        if (n) {
          if (-1 != bb(n, h))
            return;
        } else
          f[a] = n = [], g++, c(!1, a), e.$setValidity(a, !1, d);
        n.push(h);
        d.$valid = !1;
        d.$invalid = !0;
      }
    };
    d.$setDirty = function () {
      b.removeClass(Ja).addClass(pb);
      d.$dirty = !0;
      d.$pristine = !1;
      e.$setDirty();
    };
    d.$setPristine = function () {
      b.removeClass(pb).addClass(Ja);
      d.$dirty = !1;
      d.$pristine = !0;
      q(h, function (a) {
        a.$setPristine();
      });
    };
  }
  function pa(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : r;
  }
  function qb(b, a, c, d, e, g) {
    if (!e.android) {
      var f = !1;
      a.on('compositionstart', function (a) {
        f = !0;
      });
      a.on('compositionend', function () {
        f = !1;
      });
    }
    var h = function () {
      if (!f) {
        var e = a.val();
        Oa(c.ngTrim || 'T') && (e = ba(e));
        d.$viewValue !== e && (b.$$phase ? d.$setViewValue(e) : b.$apply(function () {
          d.$setViewValue(e);
        }));
      }
    };
    if (e.hasEvent('input'))
      a.on('input', h);
    else {
      var m, k = function () {
          m || (m = g.defer(function () {
            h();
            m = null;
          }));
        };
      a.on('keydown', function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || k();
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', k);
    }
    a.on('change', h);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
    var l = c.ngPattern;
    l && ((e = l.match(/^\/(.*)\/([gim]*)$/)) ? (l = RegExp(e[1], e[2]), e = function (a) {
      return pa(d, 'pattern', d.$isEmpty(a) || l.test(a), a);
    }) : e = function (c) {
      var e = b.$eval(l);
      if (!e || !e.test)
        throw F('ngPattern')('noregexp', l, e, ga(a));
      return pa(d, 'pattern', d.$isEmpty(c) || e.test(c), c);
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var n = S(c.ngMinlength);
      e = function (a) {
        return pa(d, 'minlength', d.$isEmpty(a) || a.length >= n, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
    if (c.ngMaxlength) {
      var p = S(c.ngMaxlength);
      e = function (a) {
        return pa(d, 'maxlength', d.$isEmpty(a) || a.length <= p, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
  }
  function Nb(b, a) {
    b = 'ngClass' + b;
    return function () {
      return {
        restrict: 'AC',
        link: function (c, d, e) {
          function g(b) {
            if (!0 === a || c.$index % 2 === a) {
              var d = f(b || '');
              h ? ua(b, h) || e.$updateClass(d, f(h)) : e.$addClass(d);
            }
            h = aa(b);
          }
          function f(a) {
            if (K(a))
              return a.join(' ');
            if (X(a)) {
              var b = [];
              q(a, function (a, c) {
                a && b.push(c);
              });
              return b.join(' ');
            }
            return a;
          }
          var h;
          c.$watch(e[b], g, !0);
          e.$observe('class', function (a) {
            g(c.$eval(e[b]));
          });
          'ngClass' !== b && c.$watch('$index', function (d, g) {
            var h = d & 1;
            if (h !== g & 1) {
              var n = f(c.$eval(e[b]));
              h === a ? e.$addClass(n) : e.$removeClass(n);
            }
          });
        }
      };
    };
  }
  var x = function (b) {
      return D(b) ? b.toLowerCase() : b;
    }, Ia = function (b) {
      return D(b) ? b.toUpperCase() : b;
    }, M, A, Da, va = [].slice, Rd = [].push, $a = Object.prototype.toString, Na = F('ng'), Ca = Z.angular || (Z.angular = {}), Ua, Ha, ka = [
      '0',
      '0',
      '0'
    ];
  M = S((/msie (\d+)/.exec(x(navigator.userAgent)) || [])[1]);
  isNaN(M) && (M = S((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent)) || [])[1]));
  w.$inject = [];
  Ba.$inject = [];
  var ba = function () {
      return String.prototype.trim ? function (b) {
        return D(b) ? b.trim() : b;
      } : function (b) {
        return D(b) ? b.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : b;
      };
    }();
  Ha = 9 > M ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && 'HTML' != b.scopeName ? Ia(b.scopeName + ':' + b.nodeName) : b.nodeName;
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName;
  };
  var Uc = /[A-Z]/g, Sd = {
      full: '1.2.9-build.2130+sha.02a4582',
      major: 1,
      minor: 2,
      dot: 9,
      codeName: 'enchanted-articulacy'
    }, Ra = O.cache = {}, eb = O.expando = 'ng-' + new Date().getTime(), Yc = 1, Jc = Z.document.addEventListener ? function (b, a, c) {
      b.addEventListener(a, c, !1);
    } : function (b, a, c) {
      b.attachEvent('on' + a, c);
    }, Bb = Z.document.removeEventListener ? function (b, a, c) {
      b.removeEventListener(a, c, !1);
    } : function (b, a, c) {
      b.detachEvent('on' + a, c);
    }, Wc = /([\:\-\_]+(.))/g, Xc = /^moz([A-Z])/, yb = F('jqLite'), Ga = O.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === Q.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), O(Z).on('load', a));
      },
      toString: function () {
        var b = [];
        q(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? A(this[b]) : A(this[this.length + b]);
      },
      length: 0,
      push: Rd,
      sort: [].sort,
      splice: [].splice
    }, gb = {};
  q('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    gb[x(b)] = b;
  });
  var gc = {};
  q('input select option textarea button form details'.split(' '), function (b) {
    gc[Ia(b)] = !0;
  });
  q({
    data: cc,
    inheritedData: fb,
    scope: function (b) {
      return A(b).data('$scope') || fb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return A(b).data('$isolateScope') || A(b).data('$isolateScopeNoTemplate');
    },
    controller: dc,
    injector: function (b) {
      return fb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Cb,
    css: function (b, a, c) {
      a = Qa(a);
      if (B(c))
        b.style[a] = c;
      else {
        var d;
        8 >= M && (d = b.currentStyle && b.currentStyle[a], '' === d && (d = 'auto'));
        d = d || b.style[a];
        8 >= M && (d = '' === d ? r : d);
        return d;
      }
    },
    attr: function (b, a, c) {
      var d = x(a);
      if (gb[d])
        if (B(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || w).specified ? d : r;
      else if (B(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? r : b;
    },
    prop: function (b, a, c) {
      if (B(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(b, d) {
        var e = a[b.nodeType];
        if (z(d))
          return e ? b[e] : '';
        b[e] = d;
      }
      var a = [];
      9 > M ? (a[1] = 'innerText', a[3] = 'nodeValue') : a[1] = a[3] = 'textContent';
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (z(a)) {
        if ('SELECT' === Ha(b) && b.multiple) {
          var c = [];
          q(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (z(a))
        return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)
        Ea(d[c]);
      b.innerHTML = a;
    },
    empty: ec
  }, function (b, a) {
    O.prototype[a] = function (a, d) {
      var e, g;
      if (b !== ec && (2 == b.length && b !== Cb && b !== dc ? a : d) === r) {
        if (X(a)) {
          for (e = 0; e < this.length; e++)
            if (b === cc)
              b(this[e], a);
            else
              for (g in a)
                b(this[e], g, a[g]);
          return this;
        }
        e = b.$dv;
        g = e === r ? Math.min(this.length, 1) : this.length;
        for (var f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < this.length; e++)
        b(this[e], a, d);
      return this;
    };
  });
  q({
    removeData: ac,
    dealoc: Ea,
    on: function a(c, d, e, g) {
      if (B(g))
        throw yb('onargs');
      var f = la(c, 'events'), h = la(c, 'handle');
      f || la(c, 'events', f = {});
      h || la(c, 'handle', h = Zc(c, f));
      q(d.split(' '), function (d) {
        var g = f[d];
        if (!g) {
          if ('mouseenter' == d || 'mouseleave' == d) {
            var l = Q.body.contains || Q.body.compareDocumentPosition ? function (a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
              } : function (a, c) {
                if (c)
                  for (; c = c.parentNode;)
                    if (c === a)
                      return !0;
                return !1;
              };
            f[d] = [];
            a(c, {
              mouseleave: 'mouseout',
              mouseenter: 'mouseover'
            }[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || l(this, c)) || h(a, d);
            });
          } else
            Jc(c, d, h), f[d] = [];
          g = f[d];
        }
        g.push(e);
      });
    },
    off: bc,
    one: function (a, c, d) {
      a = A(a);
      a.on(c, function g() {
        a.off(c, d);
        a.off(c, g);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ea(a);
      q(new O(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      q(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.childNodes || [];
    },
    append: function (a, c) {
      q(new O(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
      });
    },
    prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        q(new O(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = A(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: function (a) {
      Ea(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      q(new O(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a;
      });
    },
    addClass: Eb,
    removeClass: Db,
    toggleClass: function (a, c, d) {
      z(d) && (d = !Cb(a, c));
      (d ? Eb : Db)(a, c);
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)
        a = a.nextSibling;
      return a;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Ab,
    triggerHandler: function (a, c, d) {
      c = (la(a, 'events') || {})[c];
      d = d || [];
      var e = [{
            preventDefault: w,
            stopPropagation: w
          }];
      q(c, function (c) {
        c.apply(a, e.concat(d));
      });
    }
  }, function (a, c) {
    O.prototype[c] = function (c, e, g) {
      for (var f, h = 0; h < this.length; h++)
        z(f) ? (f = a(this[h], c, e, g), B(f) && (f = A(f))) : zb(f, a(this[h], c, e, g));
      return B(f) ? f : this;
    };
    O.prototype.bind = O.prototype.on;
    O.prototype.unbind = O.prototype.off;
  });
  Sa.prototype = {
    put: function (a, c) {
      this[Fa(a)] = c;
    },
    get: function (a) {
      return this[Fa(a)];
    },
    remove: function (a) {
      var c = this[a = Fa(a)];
      delete this[a];
      return c;
    }
  };
  var ad = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, bd = /,/, cd = /^\s*(_?)(\S+?)\1\s*$/, $c = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ta = F('$injector'), Td = F('$animate'), Ud = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Td('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          function (a) {
            return {
              enter: function (d, e, g, f) {
                g ? g.after(d) : (e && e[0] || (e = g.parent()), e.append(d));
                f && a(f, 0, !1);
              },
              leave: function (d, e) {
                d.remove();
                e && a(e, 0, !1);
              },
              move: function (a, c, g, f) {
                this.enter(a, c, g, f);
              },
              addClass: function (d, e, g) {
                e = D(e) ? e : K(e) ? e.join(' ') : '';
                q(d, function (a) {
                  Eb(a, e);
                });
                g && a(g, 0, !1);
              },
              removeClass: function (d, e, g) {
                e = D(e) ? e : K(e) ? e.join(' ') : '';
                q(d, function (a) {
                  Db(a, e);
                });
                g && a(g, 0, !1);
              },
              enabled: w
            };
          }
        ];
      }
    ], ja = F('$compile');
  jc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var id = /^(x[\:\-_]|data[\:\-_])/i, pc = F('$interpolate'), Vd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, td = {
      http: 80,
      https: 443,
      ftp: 21
    }, Ib = F('$location');
  uc.prototype = Jb.prototype = tc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: jb('$$absUrl'),
    url: function (a, c) {
      if (z(a))
        return this.$$url;
      var d = Vd.exec(a);
      d[1] && this.path(decodeURIComponent(d[1]));
      (d[2] || d[1]) && this.search(d[3] || '');
      this.hash(d[5] || '', c);
      return this;
    },
    protocol: jb('$$protocol'),
    host: jb('$$host'),
    port: jb('$$port'),
    path: vc('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, c) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (D(a))
          this.$$search = Xb(a);
        else if (X(a))
          this.$$search = a;
        else
          throw Ib('isrcharg');
        break;
      default:
        z(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
      }
      this.$$compose();
      return this;
    },
    hash: vc('$$hash', Ba),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };
  var za = F('$parse'), yc = {}, ra, Ka = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: w,
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return B(d) ? B(e) ? d + e : d : B(e) ? e : r;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (B(d) ? d : 0) - (B(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '^': function (a, c, d, e) {
        return d(a, c) ^ e(a, c);
      },
      '=': w,
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '&': function (a, c, d, e) {
        return d(a, c) & e(a, c);
      },
      '|': function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c));
      },
      '!': function (a, c, d) {
        return !d(a, c);
      }
    }, Wd = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Lb = function (a) {
      this.options = a;
    };
  Lb.prototype = {
    constructor: Lb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = r;
      this.lastCh = ':';
      this.tokens = [];
      var c;
      for (a = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent(), this.was('{,') && ('{' === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf('.'));
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch,
            json: this.was(':[,') && this.is('{[') || this.is('}]:,')
          }), this.is('{[') && a.unshift(this.ch), this.is('}]') && a.shift(), this.index++;
        else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue;
        } else {
          var d = this.ch + this.peek(), e = d + this.peek(2), g = Ka[this.ch], f = Ka[d], h = Ka[e];
          h ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: h
          }), this.index += 3) : f ? (this.tokens.push({
            index: this.index,
            text: d,
            fn: f
          }), this.index += 2) : g ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: g,
            json: this.was('[,:') && this.is('+-')
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = B(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw za('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = x(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      a *= 1;
      this.tokens.push({
        index: c,
        text: a,
        json: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a = this, c = '', d = this.index, e, g, f, h; this.index < this.text.length;) {
        h = this.text.charAt(this.index);
        if ('.' === h || this.isIdent(h) || this.isNumber(h))
          '.' === h && (e = this.index), c += h;
        else
          break;
        this.index++;
      }
      if (e)
        for (g = this.index; g < this.text.length;) {
          h = this.text.charAt(g);
          if ('(' === h) {
            f = c.substr(e - d + 1);
            c = c.substr(0, e - d);
            this.index = g;
            break;
          }
          if (this.isWhitespace(h))
            g++;
          else
            break;
        }
      d = {
        index: d,
        text: c
      };
      if (Ka.hasOwnProperty(c))
        d.fn = Ka[c], d.json = Ka[c];
      else {
        var m = xc(c, this.options, this.text);
        d.fn = t(function (a, c) {
          return m(a, c);
        }, {
          assign: function (d, e) {
            return kb(d, c, e, a.text, a.options);
          }
        });
      }
      this.tokens.push(d);
      f && (this.tokens.push({
        index: e,
        text: '.',
        json: !1
      }), this.tokens.push({
        index: e + 1,
        text: f,
        json: !1
      }));
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, g = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index), e = e + f;
        if (g)
          'u' === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d = (g = Wd[f]) ? d + g : d + f, g = !1;
        else if ('\\' === f)
          g = !0;
        else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              string: d,
              json: !0,
              fn: function () {
                return d;
              }
            });
            return;
          }
          d += f;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var Ya = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  Ya.ZERO = function () {
    return 0;
  };
  Ya.prototype = {
    constructor: Ya,
    parse: function (a, c) {
      this.text = a;
      this.json = c;
      this.tokens = this.lexer.lex(a);
      c && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
        this.throwError('is not valid json', {
          text: a,
          index: 0
        });
      });
      var d = c ? this.primary() : this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      d.literal = !!d.literal;
      d.constant = !!d.constant;
      return d;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var c = this.expect();
        (a = c.fn) || this.throwError('not a primary expression', c);
        c.json && (a.constant = !0, a.literal = !0);
      }
      for (var d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw za('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw za('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var g = this.tokens[0], f = g.text;
        if (f === a || f === c || f === d || f === e || !(a || c || d || e))
          return g;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError('is not valid json', a), this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, c) {
      return t(function (d, e) {
        return a(d, e, c);
      }, { constant: c.constant });
    },
    ternaryFn: function (a, c, d) {
      return t(function (e, g) {
        return a(e, g) ? c(e, g) : d(e, g);
      }, { constant: a.constant && c.constant && d.constant });
    },
    binaryFn: function (a, c, d) {
      return t(function (e, g) {
        return c(e, g, a, d);
      }, { constant: a.constant && d.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, g = 0; g < a.length; g++) {
              var f = a[g];
              f && (e = f(c, d));
            }
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(), c;;)
        if (c = this.expect('|'))
          a = this.binaryFn(a, c.fn, this.filter());
        else
          return a;
    },
    filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
        if (a = this.expect(':'))
          d.push(this.expression());
        else {
          var e = function (a, e, h) {
            h = [h];
            for (var m = 0; m < d.length; m++)
              h.push(d[m](a, e));
            return c.apply(a, h);
          };
          return function () {
            return e;
          };
        }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), function (d, g) {
        return a.assign(d, c(d, g), g);
      }) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect('?')) {
        c = this.ternary();
        if (d = this.expect(':'))
          return this.ternaryFn(a, c, this.ternary());
        this.throwError('expected :', d);
      } else
        return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c;;)
        if (c = this.expect('||'))
          a = this.binaryFn(a, c.fn, this.logicalAND());
        else
          return a;
    },
    logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.fn, this.logicalAND());
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.fn, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.fn, this.relational());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.fn, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.fn, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(Ya.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = xc(d, this.options, this.text);
      return t(function (c, d, h) {
        return e(h || a(c, d), d);
      }, {
        assign: function (e, f, h) {
          return kb(a(e, h), d, f, c.text, c.options);
        }
      });
    },
    objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume(']');
      return t(function (e, g) {
        var f = a(e, g), h = d(e, g), m;
        if (!f)
          return r;
        (f = Xa(f[h], c.text)) && (f.then && c.options.unwrapPromises) && (m = f, '$$v' in f || (m.$$v = r, m.then(function (a) {
          m.$$v = a;
        })), f = f.$$v);
        return f;
      }, {
        assign: function (e, g, f) {
          var h = d(e, f);
          return Xa(a(e, f), c.text)[h] = g;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this;
      return function (g, f) {
        for (var h = [], m = c ? c(g, f) : g, k = 0; k < d.length; k++)
          h.push(d[k](g, f));
        k = a(g, f, m) || w;
        Xa(m, e.text);
        Xa(k, e.text);
        h = k.apply ? k.apply(m, h) : k(h[0], h[1], h[2], h[3], h[4]);
        return Xa(h, e.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], c = !0;
      if (']' !== this.peekToken().text) {
        do {
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume(']');
      return t(function (c, d) {
        for (var f = [], h = 0; h < a.length; h++)
          f.push(a[h](c, d));
        return f;
      }, {
        literal: !0,
        constant: c
      });
    },
    object: function () {
      var a = [], c = !0;
      if ('}' !== this.peekToken().text) {
        do {
          var d = this.expect(), d = d.string || d.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          });
          e.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume('}');
      return t(function (c, d) {
        for (var e = {}, m = 0; m < a.length; m++) {
          var k = a[m];
          e[k.key] = k.value(c, d);
        }
        return e;
      }, {
        literal: !0,
        constant: c
      });
    }
  };
  var Kb = {}, sa = F('$sce'), fa = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, Y = Q.createElement('a'), Ac = ya(Z.location.href, !0);
  Bc.$inject = ['$provide'];
  Cc.$inject = ['$locale'];
  Ec.$inject = ['$locale'];
  var Hc = '.', Qd = {
      yyyy: W('FullYear', 4),
      yy: W('FullYear', 2, 0, !0),
      y: W('FullYear', 1),
      MMMM: lb('Month'),
      MMM: lb('Month', !0),
      MM: W('Month', 2, 1),
      M: W('Month', 1, 1),
      dd: W('Date', 2),
      d: W('Date', 1),
      HH: W('Hours', 2),
      H: W('Hours', 1),
      hh: W('Hours', 2, -12),
      h: W('Hours', 1, -12),
      mm: W('Minutes', 2),
      m: W('Minutes', 1),
      ss: W('Seconds', 2),
      s: W('Seconds', 1),
      sss: W('Milliseconds', 3),
      EEEE: lb('Day'),
      EEE: lb('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Mb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Mb(Math.abs(a % 60), 2));
      }
    }, Pd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Od = /^\-?\d+$/;
  Dc.$inject = ['$locale'];
  var Md = $(x), Nd = $(Ia);
  Fc.$inject = ['$parse'];
  var Xd = $({
      restrict: 'E',
      compile: function (a, c) {
        8 >= M && (c.href || c.name || c.$set('href', ''), a.append(Q.createComment('IE fix')));
        if (!c.href && !c.name)
          return function (a, c) {
            c.on('click', function (a) {
              c.attr('href') || a.preventDefault();
            });
          };
      }
    }), Ob = {};
  q(gb, function (a, c) {
    if ('multiple' != a) {
      var d = ma('ng-' + c);
      Ob[d] = function () {
        return {
          priority: 100,
          link: function (a, g, f) {
            a.$watch(f[d], function (a) {
              f.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  q([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = ma('ng-' + a);
    Ob[c] = function () {
      return {
        priority: 99,
        link: function (d, e, g) {
          g.$observe(c, function (c) {
            c && (g.$set(a, c), M && e.prop(a, g[a]));
          });
        }
      };
    };
  });
  var ob = {
      $addControl: w,
      $removeControl: w,
      $setValidity: w,
      $setDirty: w,
      $setPristine: w
    };
  Ic.$inject = [
    '$element',
    '$attrs',
    '$scope'
  ];
  var Kc = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: Ic,
            compile: function () {
              return {
                pre: function (a, e, g, f) {
                  if (!g.action) {
                    var h = function (a) {
                      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    };
                    Jc(e[0], 'submit', h);
                    e.on('$destroy', function () {
                      c(function () {
                        Bb(e[0], 'submit', h);
                      }, 0, !1);
                    });
                  }
                  var m = e.parent().controller('form'), k = g.name || g.ngForm;
                  k && kb(a, k, f, k);
                  if (m)
                    e.on('$destroy', function () {
                      m.$removeControl(f);
                      k && kb(a, k, r, k);
                      t(f, ob);
                    });
                }
              };
            }
          };
        }
      ];
    }, Yd = Kc(), Zd = Kc(!0), $d = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, ae = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, be = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Lc = {
      text: qb,
      number: function (a, c, d, e, g, f) {
        qb(a, c, d, e, g, f);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || be.test(a))
            return e.$setValidity('number', !0), '' === a ? null : c ? a : parseFloat(a);
          e.$setValidity('number', !1);
          return r;
        });
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? '' : '' + a;
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return pa(e, 'min', e.$isEmpty(a) || a >= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return pa(e, 'max', e.$isEmpty(a) || a <= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return pa(e, 'number', e.$isEmpty(a) || sb(a), a);
        });
      },
      url: function (a, c, d, e, g, f) {
        qb(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'url', e.$isEmpty(a) || $d.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      email: function (a, c, d, e, g, f) {
        qb(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'email', e.$isEmpty(a) || ae.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      radio: function (a, c, d, e) {
        z(d.name) && c.attr('name', Za());
        c.on('click', function () {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value);
          });
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e) {
        var g = d.ngTrueValue, f = d.ngFalseValue;
        D(g) || (g = !0);
        D(f) || (f = !1);
        c.on('click', function () {
          a.$apply(function () {
            e.$setViewValue(c[0].checked);
          });
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return a !== g;
        };
        e.$formatters.push(function (a) {
          return a === g;
        });
        e.$parsers.push(function (a) {
          return a ? g : f;
        });
      },
      hidden: w,
      button: w,
      submit: w,
      reset: w
    }, Mc = [
      '$browser',
      '$sniffer',
      function (a, c) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (d, e, g, f) {
            f && (Lc[x(g.type)] || Lc.text)(d, e, g, f, c, a);
          }
        };
      }
    ], nb = 'ng-valid', mb = 'ng-invalid', Ja = 'ng-pristine', pb = 'ng-dirty', ce = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      function (a, c, d, e, g) {
        function f(a, c) {
          c = c ? '-' + db(c, '-') : '';
          e.removeClass((a ? mb : nb) + c).addClass((a ? nb : mb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var h = g(d.ngModel), m = h.assign;
        if (!m)
          throw F('ngModel')('nonassign', d.ngModel, ga(e));
        this.$render = w;
        this.$isEmpty = function (a) {
          return z(a) || '' === a || null === a || a !== a;
        };
        var k = e.inheritedData('$formController') || ob, l = 0, n = this.$error = {};
        e.addClass(Ja);
        f(!0);
        this.$setValidity = function (a, c) {
          n[a] !== !c && (c ? (n[a] && l--, l || (f(!0), this.$valid = !0, this.$invalid = !1)) : (f(!1), this.$invalid = !0, this.$valid = !1, l++), n[a] = !c, f(c, a), k.$setValidity(a, c, this));
        };
        this.$setPristine = function () {
          this.$dirty = !1;
          this.$pristine = !0;
          e.removeClass(pb).addClass(Ja);
        };
        this.$setViewValue = function (d) {
          this.$viewValue = d;
          this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(Ja).addClass(pb), k.$setDirty());
          q(this.$parsers, function (a) {
            d = a(d);
          });
          this.$modelValue !== d && (this.$modelValue = d, m(a, d), q(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          }));
        };
        var p = this;
        a.$watch(function () {
          var c = h(a);
          if (p.$modelValue !== c) {
            var d = p.$formatters, e = d.length;
            for (p.$modelValue = c; e--;)
              c = d[e](c);
            p.$viewValue !== c && (p.$viewValue = c, p.$render());
          }
          return c;
        });
      }
    ], de = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: ce,
        link: function (a, c, d, e) {
          var g = e[0], f = e[1] || ob;
          f.$addControl(g);
          a.$on('$destroy', function () {
            f.$removeControl(g);
          });
        }
      };
    }, ee = $({
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), Nc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            d.required = !0;
            var g = function (a) {
              if (d.required && e.$isEmpty(a))
                e.$setValidity('required', !1);
              else
                return e.$setValidity('required', !0), a;
            };
            e.$formatters.push(g);
            e.$parsers.unshift(g);
            d.$observe('required', function () {
              g(e.$viewValue);
            });
          }
        }
      };
    }, fe = function () {
      return {
        require: 'ngModel',
        link: function (a, c, d, e) {
          var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ',';
          e.$parsers.push(function (a) {
            if (!z(a)) {
              var c = [];
              a && q(a.split(g), function (a) {
                a && c.push(ba(a));
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return K(a) ? a.join(', ') : r;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, ge = /^(true|false|\d+)$/, he = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return ge.test(c.ngValue) ? function (a, c, g) {
            g.$set('value', a.$eval(g.ngValue));
          } : function (a, c, g) {
            a.$watch(g.ngValue, function (a) {
              g.$set('value', a);
            });
          };
        }
      };
    }, ie = ta(function (a, c, d) {
      c.addClass('ng-binding').data('$binding', d.ngBind);
      a.$watch(d.ngBind, function (a) {
        c.text(a == r ? '' : a);
      });
    }), je = [
      '$interpolate',
      function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass('ng-binding').data('$binding', c);
          e.$observe('ngBindTemplate', function (a) {
            d.text(a);
          });
        };
      }
    ], ke = [
      '$sce',
      '$parse',
      function (a, c) {
        return function (d, e, g) {
          e.addClass('ng-binding').data('$binding', g.ngBindHtml);
          var f = c(g.ngBindHtml);
          d.$watch(function () {
            return (f(d) || '').toString();
          }, function (c) {
            e.html(a.getTrustedHtml(f(d)) || '');
          });
        };
      }
    ], le = Nb('', !0), me = Nb('Odd', 0), ne = Nb('Even', 1), oe = ta({
      compile: function (a, c) {
        c.$set('ngCloak', r);
        a.removeClass('ng-cloak');
      }
    }), pe = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], Oc = {};
  q('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = ma('ng-' + a);
    Oc[c] = [
      '$parse',
      function (d) {
        return {
          compile: function (e, g) {
            var f = d(g[c]);
            return function (c, d, e) {
              d.on(x(a), function (a) {
                c.$apply(function () {
                  f(c, { $event: a });
                });
              });
            };
          }
        };
      }
    ];
  });
  var qe = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, g, f) {
            var h, m;
            c.$watch(e.ngIf, function (g) {
              Oa(g) ? m || (m = c.$new(), f(m, function (c) {
                c[c.length++] = Q.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              })) : (m && (m.$destroy(), m = null), h && (a.leave(wb(h.clone)), h = null));
            });
          }
        };
      }
    ], re = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e, g) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: Ca.noop,
          compile: function (f, h) {
            var m = h.ngInclude || h.src, k = h.onload || '', l = h.autoscroll;
            return function (f, h, q, r, y) {
              var A = 0, u, t, H = function () {
                  u && (u.$destroy(), u = null);
                  t && (e.leave(t), t = null);
                };
              f.$watch(g.parseAsResourceUrl(m), function (g) {
                var m = function () {
                    !B(l) || l && !f.$eval(l) || d();
                  }, q = ++A;
                g ? (a.get(g, { cache: c }).success(function (a) {
                  if (q === A) {
                    var c = f.$new();
                    r.template = a;
                    a = y(c, function (a) {
                      H();
                      e.enter(a, null, h, m);
                    });
                    u = c;
                    t = a;
                    u.$emit('$includeContentLoaded');
                    f.$eval(k);
                  }
                }).error(function () {
                  q === A && H();
                }), f.$emit('$includeContentRequested')) : (H(), r.template = null);
              });
            };
          }
        };
      }
    ], se = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, g) {
            d.html(g.template);
            a(d.contents())(c);
          }
        };
      }
    ], te = ta({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), ue = ta({
      terminal: !0,
      priority: 1000
    }), ve = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g;
        return {
          restrict: 'EA',
          link: function (e, g, f) {
            var h = f.count, m = f.$attr.when && g.attr(f.$attr.when), k = f.offset || 0, l = e.$eval(m) || {}, n = {}, p = c.startSymbol(), s = c.endSymbol(), r = /^when(Minus)?(.+)$/;
            q(f, function (a, c) {
              r.test(c) && (l[x(c.replace('when', '').replace('Minus', '-'))] = g.attr(f.$attr[c]));
            });
            q(l, function (a, e) {
              n[e] = c(a.replace(d, p + h + '-' + k + s));
            });
            e.$watch(function () {
              var c = parseFloat(e.$eval(h));
              if (isNaN(c))
                return '';
              c in l || (c = a.pluralCat(c - k));
              return n[c](e, g, !0);
            }, function (a) {
              g.text(a);
            });
          }
        };
      }
    ], we = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = F('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (e, g, f, h, m) {
            var k = f.ngRepeat, l = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, s, r, y, t, u = { $id: Fa };
            if (!l)
              throw d('iexp', k);
            f = l[1];
            h = l[2];
            (l = l[3]) ? (n = a(l), p = function (a, c, d) {
              t && (u[t] = a);
              u[y] = c;
              u.$index = d;
              return n(e, u);
            }) : (s = function (a, c) {
              return Fa(c);
            }, r = function (a) {
              return a;
            });
            l = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)
              throw d('iidexp', f);
            y = l[3] || l[1];
            t = l[2];
            var B = {};
            e.$watchCollection(h, function (a) {
              var f, h, l = g[0], n, u = {}, z, P, D, x, T, w, F = [];
              if (rb(a))
                T = a, n = p || s;
              else {
                n = p || r;
                T = [];
                for (D in a)
                  a.hasOwnProperty(D) && '$' != D.charAt(0) && T.push(D);
                T.sort();
              }
              z = T.length;
              h = F.length = T.length;
              for (f = 0; f < h; f++)
                if (D = a === T ? f : T[f], x = a[D], x = n(D, x, f), xa(x, '`track by` id'), B.hasOwnProperty(x))
                  w = B[x], delete B[x], u[x] = w, F[f] = w;
                else {
                  if (u.hasOwnProperty(x))
                    throw q(F, function (a) {
                      a && a.scope && (B[a.id] = a);
                    }), d('dupes', k, x);
                  F[f] = { id: x };
                  u[x] = !1;
                }
              for (D in B)
                B.hasOwnProperty(D) && (w = B[D], f = wb(w.clone), c.leave(f), q(f, function (a) {
                  a.$$NG_REMOVED = !0;
                }), w.scope.$destroy());
              f = 0;
              for (h = T.length; f < h; f++) {
                D = a === T ? f : T[f];
                x = a[D];
                w = F[f];
                F[f - 1] && (l = F[f - 1].clone[F[f - 1].clone.length - 1]);
                if (w.scope) {
                  P = w.scope;
                  n = l;
                  do
                    n = n.nextSibling;
                  while (n && n.$$NG_REMOVED);
                  w.clone[0] != n && c.move(wb(w.clone), null, A(l));
                  l = w.clone[w.clone.length - 1];
                } else
                  P = e.$new();
                P[y] = x;
                t && (P[t] = D);
                P.$index = f;
                P.$first = 0 === f;
                P.$last = f === z - 1;
                P.$middle = !(P.$first || P.$last);
                P.$odd = !(P.$even = 0 === (f & 1));
                w.scope || m(P, function (a) {
                  a[a.length++] = Q.createComment(' end ngRepeat: ' + k + ' ');
                  c.enter(a, null, A(l));
                  l = a;
                  w.scope = P;
                  w.clone = a;
                  u[w.id] = w;
                });
              }
              B = u;
            });
          }
        };
      }
    ], xe = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngShow, function (c) {
            a[Oa(c) ? 'removeClass' : 'addClass'](d, 'ng-hide');
          });
        };
      }
    ], ye = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngHide, function (c) {
            a[Oa(c) ? 'addClass' : 'removeClass'](d, 'ng-hide');
          });
        };
      }
    ], ze = ta(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && q(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), Ae = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, g) {
            var f, h, m = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
              for (var l = 0, n = m.length; l < n; l++)
                m[l].$destroy(), a.leave(h[l]);
              h = [];
              m = [];
              if (f = g.cases['!' + d] || g.cases['?'])
                c.$eval(e.change), q(f, function (d) {
                  var e = c.$new();
                  m.push(e);
                  d.transclude(e, function (c) {
                    var e = d.element;
                    h.push(c);
                    a.enter(c, e.parent(), e);
                  });
                });
            });
          }
        };
      }
    ], Be = ta({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: g,
          element: c
        });
      }
    }), Ce = ta({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: g,
          element: c
        });
      }
    }), De = ta({
      controller: [
        '$element',
        '$transclude',
        function (a, c) {
          if (!c)
            throw F('ngTransclude')('orphan', ga(a));
          this.$transclude = c;
        }
      ],
      link: function (a, c, d, e) {
        e.$transclude(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), Ee = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], Fe = F('ngOptions'), Ge = $({ terminal: !0 }), He = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: w };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var m = this, k = {}, l = e, n;
              m.databound = d.ngModel;
              m.init = function (a, c, d) {
                l = a;
                n = d;
              };
              m.addOption = function (c) {
                xa(c, '"option value"');
                k[c] = !0;
                l.$viewValue == c && (a.val(c), n.parent() && n.remove());
              };
              m.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], l.$viewValue == a && this.renderUnknownOption(a));
              };
              m.renderUnknownOption = function (c) {
                c = '? ' + Fa(c) + ' ?';
                n.val(c);
                a.prepend(n);
                a.val(c);
                n.prop('selected', !0);
              };
              m.hasOption = function (a) {
                return k.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                m.renderUnknownOption = w;
              });
            }
          ],
          link: function (e, f, h, m) {
            function k(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), '' === a && w.prop('selected', !0)) : z(a) && w ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  x.parent() && x.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function l(a, c, d) {
              var e;
              d.$render = function () {
                var a = new Sa(d.$viewValue);
                q(c.find('option'), function (c) {
                  c.selected = B(a.get(c.value));
                });
              };
              a.$watch(function () {
                ua(e, d.$viewValue) || (e = aa(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  q(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function n(e, f, g) {
              function h() {
                var a = { '': [] }, c = [''], d, k, r, t, v;
                t = g.$modelValue;
                v = A(e) || [];
                var C = n ? Pb(v) : v, F, I, z;
                I = {};
                r = !1;
                var E, H;
                if (s)
                  if (w && K(t))
                    for (r = new Sa([]), z = 0; z < t.length; z++)
                      I[m] = t[z], r.put(w(e, I), t[z]);
                  else
                    r = new Sa(t);
                for (z = 0; F = C.length, z < F; z++) {
                  k = z;
                  if (n) {
                    k = C[z];
                    if ('$' === k.charAt(0))
                      continue;
                    I[n] = k;
                  }
                  I[m] = v[k];
                  d = p(e, I) || '';
                  (k = a[d]) || (k = a[d] = [], c.push(d));
                  s ? d = B(r.remove(w ? w(e, I) : q(e, I))) : (w ? (d = {}, d[m] = t, d = w(e, d) === w(e, I)) : d = t === q(e, I), r = r || d);
                  E = l(e, I);
                  E = B(E) ? E : '';
                  k.push({
                    id: w ? w(e, I) : n ? C[z] : z,
                    label: E,
                    selected: d
                  });
                }
                s || (y || null === t ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !r
                }) : r || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                I = 0;
                for (C = c.length; I < C; I++) {
                  d = c[I];
                  k = a[d];
                  x.length <= I ? (t = {
                    element: D.clone().attr('label', d),
                    label: k.label
                  }, v = [t], x.push(v), f.append(t.element)) : (v = x[I], t = v[0], t.label != d && t.element.attr('label', t.label = d));
                  E = null;
                  z = 0;
                  for (F = k.length; z < F; z++)
                    r = k[z], (d = v[z + 1]) ? (E = d.element, d.label !== r.label && E.text(d.label = r.label), d.id !== r.id && E.val(d.id = r.id), E[0].selected !== r.selected && E.prop('selected', d.selected = r.selected)) : ('' === r.id && y ? H = y : (H = u.clone()).val(r.id).attr('selected', r.selected).text(r.label), v.push({
                      element: H,
                      label: r.label,
                      id: r.id,
                      selected: r.selected
                    }), E ? E.after(H) : t.element.append(H), E = H);
                  for (z++; v.length > z;)
                    v.pop().element.remove();
                }
                for (; x.length > I;)
                  x.pop()[0].element.remove();
              }
              var k;
              if (!(k = t.match(d)))
                throw Fe('iexp', t, ga(f));
              var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], p = c(k[3] || ''), q = c(k[2] ? k[1] : m), A = c(k[7]), w = k[8] ? c(k[8]) : null, x = [[{
                      element: f,
                      label: ''
                    }]];
              y && (a(y)(e), y.removeClass('ng-scope'), y.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a, c = A(e) || [], d = {}, h, k, l, p, t, u, v;
                  if (s)
                    for (k = [], p = 0, u = x.length; p < u; p++)
                      for (a = x[p], l = 1, t = a.length; l < t; l++) {
                        if ((h = a[l].element)[0].selected) {
                          h = h.val();
                          n && (d[n] = h);
                          if (w)
                            for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != h); v++);
                          else
                            d[m] = c[h];
                          k.push(q(e, d));
                        }
                      }
                  else if (h = f.val(), '?' == h)
                    k = r;
                  else if ('' === h)
                    k = null;
                  else if (w)
                    for (v = 0; v < c.length; v++) {
                      if (d[m] = c[v], w(e, d) == h) {
                        k = q(e, d);
                        break;
                      }
                    }
                  else
                    d[m] = c[h], n && (d[n] = h), k = q(e, d);
                  g.$setViewValue(k);
                });
              });
              g.$render = h;
              e.$watch(h);
            }
            if (m[1]) {
              var p = m[0];
              m = m[1];
              var s = h.multiple, t = h.ngOptions, y = !1, w, u = A(Q.createElement('option')), D = A(Q.createElement('optgroup')), x = u.clone();
              h = 0;
              for (var v = f.children(), F = v.length; h < F; h++)
                if ('' === v[h].value) {
                  w = y = v.eq(h);
                  break;
                }
              p.init(m, y, x);
              s && (m.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              t ? n(e, f, m) : s ? l(e, f, m) : k(e, f, m, p);
            }
          }
        };
      }
    ], Ie = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: w,
            removeOption: w
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (z(e.value)) {
              var g = a(d.text(), !0);
              g || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var k = d.parent(), l = k.data('$selectController') || k.parent().data('$selectController');
              l && l.databound ? d.prop('selected', !1) : l = c;
              g ? a.$watch(g, function (a, c) {
                e.$set('value', a);
                a !== c && l.removeOption(c);
                l.addOption(a);
              }) : l.addOption(e.value);
              d.on('$destroy', function () {
                l.removeOption(e.value);
              });
            };
          }
        };
      }
    ], Je = $({
      restrict: 'E',
      terminal: !0
    });
  (Da = Z.jQuery) ? (A = Da, t(Da.fn, {
    scope: Ga.scope,
    isolateScope: Ga.isolateScope,
    controller: Ga.controller,
    injector: Ga.injector,
    inheritedData: Ga.inheritedData
  }), xb('remove', !0, !0, !1), xb('empty', !1, !1, !1), xb('html', !1, !1, !0)) : A = O;
  Ca.element = A;
  (function (a) {
    t(a, {
      bootstrap: Zb,
      copy: aa,
      extend: t,
      equals: ua,
      element: A,
      forEach: q,
      injector: $b,
      noop: w,
      bind: cb,
      toJson: qa,
      fromJson: Vb,
      identity: Ba,
      isUndefined: z,
      isDefined: B,
      isString: D,
      isFunction: L,
      isObject: X,
      isNumber: sb,
      isElement: Qc,
      isArray: K,
      version: Sd,
      isDate: La,
      lowercase: x,
      uppercase: Ia,
      callbacks: { counter: 0 },
      $$minErr: F,
      $$csp: Ub
    });
    Ua = Vc(Z);
    try {
      Ua('ngLocale');
    } catch (c) {
      Ua('ngLocale', []).provider('$locale', sd);
    }
    Ua('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: Cd });
        a.provider('$compile', jc).directive({
          a: Xd,
          input: Mc,
          textarea: Mc,
          form: Yd,
          script: Ee,
          select: He,
          style: Je,
          option: Ie,
          ngBind: ie,
          ngBindHtml: ke,
          ngBindTemplate: je,
          ngClass: le,
          ngClassEven: ne,
          ngClassOdd: me,
          ngCloak: oe,
          ngController: pe,
          ngForm: Zd,
          ngHide: ye,
          ngIf: qe,
          ngInclude: re,
          ngInit: te,
          ngNonBindable: ue,
          ngPluralize: ve,
          ngRepeat: we,
          ngShow: xe,
          ngStyle: ze,
          ngSwitch: Ae,
          ngSwitchWhen: Be,
          ngSwitchDefault: Ce,
          ngOptions: Ge,
          ngTransclude: De,
          ngModel: de,
          ngList: fe,
          ngChange: ee,
          required: Nc,
          ngRequired: Nc,
          ngValue: he
        }).directive({ ngInclude: se }).directive(Ob).directive(Oc);
        a.provider({
          $anchorScroll: dd,
          $animate: Ud,
          $browser: fd,
          $cacheFactory: gd,
          $controller: jd,
          $document: kd,
          $exceptionHandler: ld,
          $filter: Bc,
          $interpolate: qd,
          $interval: rd,
          $http: md,
          $httpBackend: od,
          $location: ud,
          $log: vd,
          $parse: yd,
          $rootScope: Bd,
          $q: zd,
          $sce: Fd,
          $sceDelegate: Ed,
          $sniffer: Gd,
          $templateCache: hd,
          $timeout: Hd,
          $window: Id
        });
      }
    ]);
  }(Ca));
  A(Q).ready(function () {
    Tc(Q, Zb);
  });
}(window, document));
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
(function (E, p, F) {
  'use strict';
  p.module('ngAnimate', ['ng']).config([
    '$provide',
    '$animateProvider',
    function (R, L) {
      function f(f) {
        for (var l = 0; l < f.length; l++) {
          var h = f[l];
          if (h.nodeType == W)
            return h;
        }
      }
      var q = p.noop, l = p.forEach, aa = L.$$selectors, W = 1, h = '$$ngAnimateState', C = 'ng-animate', k = { running: !0 };
      R.decorator('$animate', [
        '$delegate',
        '$injector',
        '$sniffer',
        '$rootElement',
        '$timeout',
        '$rootScope',
        '$document',
        function (w, E, G, s, M, m, N) {
          function F(a) {
            if (a) {
              var d = [], b = {};
              a = a.substr(1).split('.');
              (G.transitions || G.animations) && a.push('');
              for (var e = 0; e < a.length; e++) {
                var g = a[e], f = aa[g];
                f && !b[g] && (d.push(E.get(f)), b[g] = !0);
              }
              return d;
            }
          }
          function r(a, d, b, e, g, k, m) {
            function p(a) {
              u();
              if (!0 === a)
                v();
              else {
                if (a = b.data(h))
                  a.done = v, b.data(h, a);
                s(t, 'after', v);
              }
            }
            function s(e, f, g) {
              var n = f + 'End';
              l(e, function (l, h) {
                var c = function () {
                  a: {
                    var c = f + 'Complete', a = e[h];
                    a[c] = !0;
                    (a[n] || q)();
                    for (a = 0; a < e.length; a++)
                      if (!e[a][c])
                        break a;
                    g();
                  }
                };
                'before' != f || 'enter' != a && 'move' != a ? l[f] ? l[n] = B ? l[f](b, d, c) : l[f](b, c) : c() : c();
              });
            }
            function w() {
              m && M(m, 0, !1);
            }
            function u() {
              u.hasBeenRun || (u.hasBeenRun = !0, k());
            }
            function v() {
              if (!v.hasBeenRun) {
                v.hasBeenRun = !0;
                var a = b.data(h);
                a && (B ? D(b) : (a.closeAnimationTimeout = M(function () {
                  D(b);
                }, 0, !1), b.data(h, a)));
                w();
              }
            }
            var n, z, r = f(b);
            r && (n = r.className, z = n + ' ' + d);
            if (r && O(z)) {
              z = (' ' + z).replace(/\s+/g, '.');
              e || (e = g ? g.parent() : b.parent());
              z = F(z);
              var B = 'addClass' == a || 'removeClass' == a;
              g = b.data(h) || {};
              if (Q(b, e) || 0 === z.length)
                u(), v();
              else {
                var t = [];
                B && (g.disabled || g.running && g.structural) || l(z, function (e) {
                  if (!e.allowCancel || e.allowCancel(b, a, d)) {
                    var f = e[a];
                    'leave' == a ? (e = f, f = null) : e = e['before' + a.charAt(0).toUpperCase() + a.substr(1)];
                    t.push({
                      before: e,
                      after: f
                    });
                  }
                });
                0 === t.length ? (u(), w()) : (e = ' ' + n + ' ', g.running && (M.cancel(g.closeAnimationTimeout), D(b), I(g.animations), g.beforeComplete ? (g.done || q)(!0) : B && !g.structural && (e = 'removeClass' == g.event ? e.replace(g.className, '') : e + g.className + ' ')), n = ' ' + d + ' ', 'addClass' == a && 0 <= e.indexOf(n) || 'removeClass' == a && -1 == e.indexOf(n) ? (u(), w()) : (b.addClass(C), b.data(h, {
                  running: !0,
                  event: a,
                  className: d,
                  structural: !B,
                  animations: t,
                  done: p
                }), s(t, 'before', p)));
              }
            } else
              u(), v();
          }
          function J(a) {
            a = f(a);
            l(a.querySelectorAll('.' + C), function (a) {
              a = p.element(a);
              var b = a.data(h);
              b && (I(b.animations), D(a));
            });
          }
          function I(a) {
            l(a, function (d) {
              a.beforeComplete || (d.beforeEnd || q)(!0);
              a.afterComplete || (d.afterEnd || q)(!0);
            });
          }
          function D(a) {
            f(a) == f(s) ? k.disabled || (k.running = !1, k.structural = !1) : (a.removeClass(C), a.removeData(h));
          }
          function Q(a, d) {
            if (k.disabled)
              return !0;
            if (f(a) == f(s))
              return k.disabled || k.running;
            do {
              if (0 === d.length)
                break;
              var b = f(d) == f(s), e = b ? k : d.data(h), e = e && (!!e.disabled || !!e.running);
              if (b || e)
                return e;
              if (b)
                break;
            } while (d = d.parent());
            return !0;
          }
          s.data(h, k);
          m.$$postDigest(function () {
            m.$$postDigest(function () {
              k.running = !1;
            });
          });
          var K = L.classNameFilter(), O = K ? function (a) {
              return K.test(a);
            } : function () {
              return !0;
            };
          return {
            enter: function (a, d, b, e) {
              this.enabled(!1, a);
              w.enter(a, d, b);
              m.$$postDigest(function () {
                r('enter', 'ng-enter', a, d, b, q, e);
              });
            },
            leave: function (a, d) {
              J(a);
              this.enabled(!1, a);
              m.$$postDigest(function () {
                r('leave', 'ng-leave', a, null, null, function () {
                  w.leave(a);
                }, d);
              });
            },
            move: function (a, d, b, e) {
              J(a);
              this.enabled(!1, a);
              w.move(a, d, b);
              m.$$postDigest(function () {
                r('move', 'ng-move', a, d, b, q, e);
              });
            },
            addClass: function (a, d, b) {
              r('addClass', d, a, null, null, function () {
                w.addClass(a, d);
              }, b);
            },
            removeClass: function (a, d, b) {
              r('removeClass', d, a, null, null, function () {
                w.removeClass(a, d);
              }, b);
            },
            enabled: function (a, d) {
              switch (arguments.length) {
              case 2:
                if (a)
                  D(d);
                else {
                  var b = d.data(h) || {};
                  b.disabled = !0;
                  d.data(h, b);
                }
                break;
              case 1:
                k.disabled = !a;
                break;
              default:
                a = !k.disabled;
              }
              return !!a;
            }
          };
        }
      ]);
      L.register('', [
        '$window',
        '$sniffer',
        '$timeout',
        function (h, k, G) {
          function s(c, a) {
            G.cancel(V);
            T.push(a);
            var y = f(c);
            c = p.element(y);
            U.push(c);
            y = c.data(n);
            P = Math.max(P, (y.maxDelay + y.maxDuration) * R * B);
            y.animationCount = t;
            V = G(function () {
              l(T, function (c) {
                c();
              });
              var c = [], a = t;
              l(U, function (a) {
                c.push(a);
              });
              G(function () {
                M(c, a);
                c = null;
              }, P, !1);
              T = [];
              U = [];
              V = null;
              H = {};
              P = 0;
              t++;
            }, 10, !1);
          }
          function M(c, a) {
            l(c, function (c) {
              (c = c.data(n)) && c.animationCount == a && (c.closeAnimationFn || q)();
            });
          }
          function m(c, a) {
            var y = a ? H[a] : null;
            if (!y) {
              var b = 0, d = 0, f = 0, g = 0, n, k, m, p;
              l(c, function (c) {
                if (c.nodeType == W) {
                  c = h.getComputedStyle(c) || {};
                  m = c[e + X];
                  b = Math.max(N(m), b);
                  p = c[e + S];
                  n = c[e + Z];
                  d = Math.max(N(n), d);
                  k = c[x + Z];
                  g = Math.max(N(k), g);
                  var a = N(c[x + X]);
                  0 < a && (a *= parseInt(c[x + u], 10) || 1);
                  f = Math.max(a, f);
                }
              });
              y = {
                total: 0,
                transitionPropertyStyle: p,
                transitionDurationStyle: m,
                transitionDelayStyle: n,
                transitionDelay: d,
                transitionDuration: b,
                animationDelayStyle: k,
                animationDelay: g,
                animationDuration: f
              };
              a && (H[a] = y);
            }
            return y;
          }
          function N(c) {
            var a = 0;
            c = p.isString(c) ? c.split(/\s*,\s*/) : [];
            l(c, function (c) {
              a = Math.max(parseFloat(c) || 0, a);
            });
            return a;
          }
          function L(c) {
            var a = c.parent(), b = a.data(v);
            b || (a.data(v, ++Y), b = Y);
            return b + '-' + f(c).className;
          }
          function r(c, a) {
            var b = L(c), d = b + ' ' + a, g = {}, $ = H[d] ? ++H[d].total : 0;
            if (0 < $) {
              var h = a + '-stagger', g = b + ' ' + h;
              (b = !H[g]) && c.addClass(h);
              g = m(c, g);
              b && c.removeClass(h);
            }
            c.addClass(a);
            d = m(c, d);
            h = Math.max(d.transitionDelay, d.animationDelay);
            b = Math.max(d.transitionDuration, d.animationDuration);
            if (0 === b)
              return c.removeClass(a), !1;
            var k = '';
            0 < d.transitionDuration ? f(c).style[e + S] = 'none' : f(c).style[x] = 'none 0s';
            l(a.split(' '), function (c, a) {
              k += (0 < a ? ' ' : '') + c + '-active';
            });
            c.data(n, {
              className: a,
              activeClassName: k,
              maxDuration: b,
              maxDelay: h,
              classes: a + ' ' + k,
              timings: d,
              stagger: g,
              ii: $
            });
            return !0;
          }
          function J(c) {
            var a = e + S;
            c = f(c);
            c.style[a] && 0 < c.style[a].length && (c.style[a] = '');
          }
          function I(c) {
            var a = x;
            c = f(c);
            c.style[a] && 0 < c.style[a].length && (c.style[a] = '');
          }
          function D(c, a, d) {
            function e(b) {
              c.off(u, h);
              c.removeClass(r);
              b = c;
              b.removeClass(a);
              b.removeData(n);
              b = f(c);
              for (var d in q)
                b.style.removeProperty(q[d]);
            }
            function h(a) {
              a.stopPropagation();
              var c = a.originalEvent || a;
              a = c.$manualTimeStamp || c.timeStamp || Date.now();
              c = parseFloat(c.elapsedTime.toFixed(z));
              Math.max(a - w, 0) >= v && c >= s && d();
            }
            var k = c.data(n), l = f(c);
            if (-1 != l.className.indexOf(a) && k) {
              var m = k.timings, p = k.stagger, s = k.maxDuration, r = k.activeClassName, v = Math.max(m.transitionDelay, m.animationDelay) * B, w = Date.now(), u = C + ' ' + g, t = k.ii, A = '', q = [];
              if (0 < m.transitionDuration) {
                var x = m.transitionPropertyStyle;
                -1 == x.indexOf('all') && (A += b + 'transition-property: ' + x + ';', A += b + 'transition-duration: ' + m.transitionDurationStyle + ';', q.push(b + 'transition-property'), q.push(b + 'transition-duration'));
              }
              0 < t && (0 < p.transitionDelay && 0 === p.transitionDuration && (A += b + 'transition-delay: ' + Q(m.transitionDelayStyle, p.transitionDelay, t) + '; ', q.push(b + 'transition-delay')), 0 < p.animationDelay && 0 === p.animationDuration && (A += b + 'animation-delay: ' + Q(m.animationDelayStyle, p.animationDelay, t) + '; ', q.push(b + 'animation-delay')));
              0 < q.length && (m = l.getAttribute('style') || '', l.setAttribute('style', m + ' ' + A));
              c.on(u, h);
              c.addClass(r);
              k.closeAnimationFn = function () {
                e();
                d();
              };
              return e;
            }
            d();
          }
          function Q(a, b, d) {
            var e = '';
            l(a.split(','), function (a, c) {
              e += (0 < c ? ',' : '') + (d * b + parseInt(a, 10)) + 's';
            });
            return e;
          }
          function K(a, b) {
            if (r(a, b))
              return function (d) {
                d && (a.removeClass(b), a.removeData(n));
              };
          }
          function O(a, b, d) {
            if (a.data(n))
              return D(a, b, d);
            a.removeClass(b);
            a.removeData(n);
            d();
          }
          function a(a, b, d) {
            var e = K(a, b);
            if (e) {
              var f = e;
              s(a, function () {
                J(a);
                I(a);
                f = O(a, b, d);
              });
              return function (a) {
                (f || q)(a);
              };
            }
            d();
          }
          function d(a, b) {
            var d = '';
            a = p.isArray(a) ? a : a.split(/\s+/);
            l(a, function (a, c) {
              a && 0 < a.length && (d += (0 < c ? ' ' : '') + a + b);
            });
            return d;
          }
          var b = '', e, g, x, C;
          E.ontransitionend === F && E.onwebkittransitionend !== F ? (b = '-webkit-', e = 'WebkitTransition', g = 'webkitTransitionEnd transitionend') : (e = 'transition', g = 'transitionend');
          E.onanimationend === F && E.onwebkitanimationend !== F ? (b = '-webkit-', x = 'WebkitAnimation', C = 'webkitAnimationEnd animationend') : (x = 'animation', C = 'animationend');
          var X = 'Duration', S = 'Property', Z = 'Delay', u = 'IterationCount', v = '$$ngAnimateKey', n = '$$ngAnimateCSS3Data', z = 3, R = 1.5, B = 1000, t = 0, H = {}, Y = 0, T = [], U = [], V, P = 0;
          return {
            allowCancel: function (a, b, e) {
              var g = (a.data(n) || {}).classes;
              if (!g || 0 <= [
                  'enter',
                  'leave',
                  'move'
                ].indexOf(b))
                return !0;
              var k = a.parent(), h = p.element(f(a).cloneNode());
              h.attr('style', 'position:absolute; top:-9999px; left:-9999px');
              h.removeAttr('id');
              h.empty();
              l(g.split(' '), function (a) {
                h.removeClass(a);
              });
              h.addClass(d(e, 'addClass' == b ? '-add' : '-remove'));
              k.append(h);
              a = m(h);
              h.remove();
              return 0 < Math.max(a.transitionDuration, a.animationDuration);
            },
            enter: function (c, b) {
              return a(c, 'ng-enter', b);
            },
            leave: function (c, b) {
              return a(c, 'ng-leave', b);
            },
            move: function (c, b) {
              return a(c, 'ng-move', b);
            },
            beforeAddClass: function (a, b, e) {
              if (b = K(a, d(b, '-add')))
                return s(a, function () {
                  J(a);
                  I(a);
                  e();
                }), b;
              e();
            },
            addClass: function (a, b, e) {
              return O(a, d(b, '-add'), e);
            },
            beforeRemoveClass: function (a, b, e) {
              if (b = K(a, d(b, '-remove')))
                return s(a, function () {
                  J(a);
                  I(a);
                  e();
                }), b;
              e();
            },
            removeClass: function (a, b, e) {
              return O(a, d(b, '-remove'), e);
            }
          };
        }
      ]);
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  var $resourceMinErr = angular.$$minErr('$resource');
  var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
  function isValidDottedPath(path) {
    return path != null && path !== '' && path !== 'hasOwnProperty' && MEMBER_NAME_REGEX.test('.' + path);
  }
  function lookupDottedPath(obj, path) {
    if (!isValidDottedPath(path)) {
      throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
    }
    var keys = path.split('.');
    for (var i = 0, ii = keys.length; i < ii && obj !== undefined; i++) {
      var key = keys[i];
      obj = obj !== null ? obj[key] : undefined;
    }
    return obj;
  }
  function shallowClearAndCopy(src, dst) {
    dst = dst || {};
    angular.forEach(dst, function (value, key) {
      delete dst[key];
    });
    for (var key in src) {
      if (src.hasOwnProperty(key) && key.charAt(0) !== '$' && key.charAt(1) !== '$') {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  angular.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$q',
    function ($http, $q) {
      var DEFAULT_ACTIONS = {
          'get': { method: 'GET' },
          'save': { method: 'POST' },
          'query': {
            method: 'GET',
            isArray: true
          },
          'remove': { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        };
      var noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy, isFunction = angular.isFunction;
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
      }
      function Route(template, defaults) {
        this.template = template;
        this.defaults = defaults || {};
        this.urlParams = {};
      }
      Route.prototype = {
        setUrlParams: function (config, params, actionUrl) {
          var self = this, url = actionUrl || self.template, val, encodedVal;
          var urlParams = self.urlParams = {};
          forEach(url.split(/\W/), function (param) {
            if (param === 'hasOwnProperty') {
              throw $resourceMinErr('badname', 'hasOwnProperty is not a valid parameter name.');
            }
            if (!new RegExp('^\\d+$').test(param) && param && new RegExp('(^|[^\\\\]):' + param + '(\\W|$)').test(url)) {
              urlParams[param] = true;
            }
          });
          url = url.replace(/\\:/g, ':');
          params = params || {};
          forEach(self.urlParams, function (_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(':' + urlParam + '(\\W|$)', 'g'), encodedVal + '$1');
            } else {
              url = url.replace(new RegExp('(/?):' + urlParam + '(\\W|$)', 'g'), function (match, leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });
          url = url.replace(/\/+$/, '') || '/';
          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
          config.url = url.replace(/\/\\\./, '/.');
          forEach(params, function (value, key) {
            if (!self.urlParams[key]) {
              config.params = config.params || {};
              config.params[key] = value;
            }
          });
        }
      };
      function resourceFactory(url, paramDefaults, actions) {
        var route = new Route(url);
        actions = extend({}, DEFAULT_ACTIONS, actions);
        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function (value, key) {
            if (isFunction(value)) {
              value = value();
            }
            ids[key] = value && value.charAt && value.charAt(0) == '@' ? lookupDottedPath(data, value.substr(1)) : value;
          });
          return ids;
        }
        function defaultResponseInterceptor(response) {
          return response.resource;
        }
        function Resource(value) {
          shallowClearAndCopy(value || {}, this);
        }
        forEach(actions, function (action, name) {
          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);
          Resource[name] = function (a1, a2, a3, a4) {
            var params = {}, data, success, error;
            switch (arguments.length) {
            case 4:
              error = a4;
              success = a3;
            case 3:
            case 2:
              if (isFunction(a2)) {
                if (isFunction(a1)) {
                  success = a1;
                  error = a2;
                  break;
                }
                success = a2;
                error = a3;
              } else {
                params = a1;
                data = a2;
                success = a3;
                break;
              }
            case 1:
              if (isFunction(a1))
                success = a1;
              else if (hasBody)
                data = a1;
              else
                params = a1;
              break;
            case 0:
              break;
            default:
              throw $resourceMinErr('badargs', 'Expected up to 4 arguments [params, data, success, error], got {0} arguments', arguments.length);
            }
            var isInstanceCall = this instanceof Resource;
            var value = isInstanceCall ? data : action.isArray ? [] : new Resource(data);
            var httpConfig = {};
            var responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor;
            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError || undefined;
            forEach(action, function (value, key) {
              if (key != 'params' && key != 'isArray' && key != 'interceptor') {
                httpConfig[key] = copy(value);
              }
            });
            if (hasBody)
              httpConfig.data = data;
            route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);
            var promise = $http(httpConfig).then(function (response) {
                var data = response.data, promise = value.$promise;
                if (data) {
                  if (angular.isArray(data) !== !!action.isArray) {
                    throw $resourceMinErr('badcfg', 'Error in resource configuration. Expected ' + 'response to contain an {0} but got an {1}', action.isArray ? 'array' : 'object', angular.isArray(data) ? 'array' : 'object');
                  }
                  if (action.isArray) {
                    value.length = 0;
                    forEach(data, function (item) {
                      value.push(new Resource(item));
                    });
                  } else {
                    shallowClearAndCopy(data, value);
                    value.$promise = promise;
                  }
                }
                value.$resolved = true;
                response.resource = value;
                return response;
              }, function (response) {
                value.$resolved = true;
                (error || noop)(response);
                return $q.reject(response);
              });
            promise = promise.then(function (response) {
              var value = responseInterceptor(response);
              (success || noop)(value, response.headers);
              return value;
            }, responseErrorInterceptor);
            if (!isInstanceCall) {
              value.$promise = promise;
              value.$resolved = false;
              return value;
            }
            return promise;
          };
          Resource.prototype['$' + name] = function (params, success, error) {
            if (isFunction(params)) {
              error = success;
              success = params;
              params = {};
            }
            var result = Resource[name].call(this, params, this, success, error);
            return result.$promise || result;
          };
        });
        Resource.bind = function (additionalParamDefaults) {
          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };
        return Resource;
      }
      return resourceFactory;
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  angular.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function ($rootScope, $browser) {
      var cookies = {}, lastCookies = {}, lastBrowserCookies, runEval = false, copy = angular.copy, isUndefined = angular.isUndefined;
      $browser.addPollFn(function () {
        var currentCookies = $browser.cookies();
        if (lastBrowserCookies != currentCookies) {
          lastBrowserCookies = currentCookies;
          copy(currentCookies, lastCookies);
          copy(currentCookies, cookies);
          if (runEval)
            $rootScope.$apply();
        }
      })();
      runEval = true;
      $rootScope.$watch(push);
      return cookies;
      function push() {
        var name, value, browserCookies, updated;
        for (name in lastCookies) {
          if (isUndefined(cookies[name])) {
            $browser.cookies(name, undefined);
          }
        }
        for (name in cookies) {
          value = cookies[name];
          if (!angular.isString(value)) {
            if (angular.isDefined(lastCookies[name])) {
              cookies[name] = lastCookies[name];
            } else {
              delete cookies[name];
            }
          } else if (value !== lastCookies[name]) {
            $browser.cookies(name, value);
            updated = true;
          }
        }
        if (updated) {
          updated = false;
          browserCookies = $browser.cookies();
          for (name in cookies) {
            if (cookies[name] !== browserCookies[name]) {
              if (isUndefined(browserCookies[name])) {
                delete cookies[name];
              } else {
                cookies[name] = browserCookies[name];
              }
              updated = true;
            }
          }
        }
      }
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function ($cookies) {
      return {
        get: function (key) {
          var value = $cookies[key];
          return value ? angular.fromJson(value) : value;
        },
        put: function (key, value) {
          $cookies[key] = angular.toJson(value);
        },
        remove: function (key) {
          delete $cookies[key];
        }
      };
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  var $sanitizeMinErr = angular.$$minErr('$sanitize');
  function $SanitizeProvider() {
    this.$get = [
      '$$sanitizeUri',
      function ($$sanitizeUri) {
        return function (html) {
          var buf = [];
          htmlParser(html, htmlSanitizeWriter(buf, function (uri, isImage) {
            return !/^unsafe/.test($$sanitizeUri(uri, isImage));
          }));
          return buf.join('');
        };
      }
    ];
  }
  function sanitizeText(chars) {
    var buf = [];
    var writer = htmlSanitizeWriter(buf, angular.noop);
    writer.chars(chars);
    return buf.join('');
  }
  var START_TAG_REGEXP = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, END_TAG_REGEXP = /^<\s*\/\s*([\w:-]+)[^>]*>/, ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, BEGIN_TAG_REGEXP = /^</, BEGING_END_TAGE_REGEXP = /^<\s*\//, COMMENT_REGEXP = /<!--(.*?)-->/g, DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i, CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g, NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;
  var voidElements = makeMap('area,br,col,hr,img,wbr');
  var optionalEndTagBlockElements = makeMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'), optionalEndTagInlineElements = makeMap('rp,rt'), optionalEndTagElements = angular.extend({}, optionalEndTagInlineElements, optionalEndTagBlockElements);
  var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap('address,article,' + 'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' + 'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul'));
  var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap('a,abbr,acronym,b,' + 'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' + 'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));
  var specialElements = makeMap('script,style');
  var validElements = angular.extend({}, voidElements, blockElements, inlineElements, optionalEndTagElements);
  var uriAttrs = makeMap('background,cite,href,longdesc,src,usemap');
  var validAttrs = angular.extend({}, uriAttrs, makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' + 'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' + 'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' + 'scope,scrolling,shape,size,span,start,summary,target,title,type,' + 'valign,value,vspace,width'));
  function makeMap(str) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++)
      obj[items[i]] = true;
    return obj;
  }
  function htmlParser(html, handler) {
    var index, chars, match, stack = [], last = html;
    stack.last = function () {
      return stack[stack.length - 1];
    };
    while (html) {
      chars = true;
      if (!stack.last() || !specialElements[stack.last()]) {
        if (html.indexOf('<!--') === 0) {
          index = html.indexOf('--', 4);
          if (index >= 0 && html.lastIndexOf('-->', index) === index) {
            if (handler.comment)
              handler.comment(html.substring(4, index));
            html = html.substring(index + 3);
            chars = false;
          }
        } else if (DOCTYPE_REGEXP.test(html)) {
          match = html.match(DOCTYPE_REGEXP);
          if (match) {
            html = html.replace(match[0], '');
            chars = false;
          }
        } else if (BEGING_END_TAGE_REGEXP.test(html)) {
          match = html.match(END_TAG_REGEXP);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(END_TAG_REGEXP, parseEndTag);
            chars = false;
          }
        } else if (BEGIN_TAG_REGEXP.test(html)) {
          match = html.match(START_TAG_REGEXP);
          if (match) {
            html = html.substring(match[0].length);
            match[0].replace(START_TAG_REGEXP, parseStartTag);
            chars = false;
          }
        }
        if (chars) {
          index = html.indexOf('<');
          var text = index < 0 ? html : html.substring(0, index);
          html = index < 0 ? '' : html.substring(index);
          if (handler.chars)
            handler.chars(decodeEntities(text));
        }
      } else {
        html = html.replace(new RegExp('(.*)<\\s*\\/\\s*' + stack.last() + '[^>]*>', 'i'), function (all, text) {
          text = text.replace(COMMENT_REGEXP, '$1').replace(CDATA_REGEXP, '$1');
          if (handler.chars)
            handler.chars(decodeEntities(text));
          return '';
        });
        parseEndTag('', stack.last());
      }
      if (html == last) {
        throw $sanitizeMinErr('badparse', 'The sanitizer was unable to parse the following block ' + 'of html: {0}', html);
      }
      last = html;
    }
    parseEndTag();
    function parseStartTag(tag, tagName, rest, unary) {
      tagName = angular.lowercase(tagName);
      if (blockElements[tagName]) {
        while (stack.last() && inlineElements[stack.last()]) {
          parseEndTag('', stack.last());
        }
      }
      if (optionalEndTagElements[tagName] && stack.last() == tagName) {
        parseEndTag('', tagName);
      }
      unary = voidElements[tagName] || !!unary;
      if (!unary)
        stack.push(tagName);
      var attrs = {};
      rest.replace(ATTR_REGEXP, function (match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
        var value = doubleQuotedValue || singleQuotedValue || unquotedValue || '';
        attrs[name] = decodeEntities(value);
      });
      if (handler.start)
        handler.start(tagName, attrs, unary);
    }
    function parseEndTag(tag, tagName) {
      var pos = 0, i;
      tagName = angular.lowercase(tagName);
      if (tagName)
        for (pos = stack.length - 1; pos >= 0; pos--)
          if (stack[pos] == tagName)
            break;
      if (pos >= 0) {
        for (i = stack.length - 1; i >= pos; i--)
          if (handler.end)
            handler.end(stack[i]);
        stack.length = pos;
      }
    }
  }
  var hiddenPre = document.createElement('pre');
  var spaceRe = /^(\s*)([\s\S]*?)(\s*)$/;
  function decodeEntities(value) {
    if (!value) {
      return '';
    }
    var parts = spaceRe.exec(value);
    var spaceBefore = parts[1];
    var spaceAfter = parts[3];
    var content = parts[2];
    if (content) {
      hiddenPre.innerHTML = content.replace(/</g, '&lt;');
      content = 'textContent' in hiddenPre ? hiddenPre.textContent : hiddenPre.innerText;
    }
    return spaceBefore + content + spaceAfter;
  }
  function encodeEntities(value) {
    return value.replace(/&/g, '&amp;').replace(NON_ALPHANUMERIC_REGEXP, function (value) {
      return '&#' + value.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function htmlSanitizeWriter(buf, uriValidator) {
    var ignore = false;
    var out = angular.bind(buf, buf.push);
    return {
      start: function (tag, attrs, unary) {
        tag = angular.lowercase(tag);
        if (!ignore && specialElements[tag]) {
          ignore = tag;
        }
        if (!ignore && validElements[tag] === true) {
          out('<');
          out(tag);
          angular.forEach(attrs, function (value, key) {
            var lkey = angular.lowercase(key);
            var isImage = tag === 'img' && lkey === 'src' || lkey === 'background';
            if (validAttrs[lkey] === true && (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
              out(' ');
              out(key);
              out('="');
              out(encodeEntities(value));
              out('"');
            }
          });
          out(unary ? '/>' : '>');
        }
      },
      end: function (tag) {
        tag = angular.lowercase(tag);
        if (!ignore && validElements[tag] === true) {
          out('</');
          out(tag);
          out('>');
        }
        if (tag == ignore) {
          ignore = false;
        }
      },
      chars: function (chars) {
        if (!ignore) {
          out(encodeEntities(chars));
        }
      }
    };
  }
  angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);
  angular.module('ngSanitize').filter('linky', [
    '$sanitize',
    function ($sanitize) {
      var LINKY_URL_REGEXP = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/, MAILTO_REGEXP = /^mailto:/;
      return function (text, target) {
        if (!text)
          return text;
        var match;
        var raw = text;
        var html = [];
        var url;
        var i;
        while (match = raw.match(LINKY_URL_REGEXP)) {
          url = match[0];
          if (match[2] == match[3])
            url = 'mailto:' + url;
          i = match.index;
          addText(raw.substr(0, i));
          addLink(url, match[0].replace(MAILTO_REGEXP, ''));
          raw = raw.substring(i + match[0].length);
        }
        addText(raw);
        return $sanitize(html.join(''));
        function addText(text) {
          if (!text) {
            return;
          }
          html.push(sanitizeText(text));
        }
        function addLink(url, text) {
          html.push('<a ');
          if (angular.isDefined(target)) {
            html.push('target="');
            html.push(target);
            html.push('" ');
          }
          html.push('href="');
          html.push(url);
          html.push('">');
          addText(text);
          html.push('</a>');
        }
      };
    }
  ]);
}(window, window.angular));
(function (window, angular, undefined) {
  'use strict';
  var ngRouteModule = angular.module('ngRoute', ['ng']).provider('$route', $RouteProvider);
  function $RouteProvider() {
    function inherit(parent, extra) {
      return angular.extend(new (angular.extend(function () {
      }, { prototype: parent }))(), extra);
    }
    var routes = {};
    this.when = function (path, route) {
      routes[path] = angular.extend({ reloadOnSearch: true }, route, path && pathRegExp(path, route));
      if (path) {
        var redirectPath = path[path.length - 1] == '/' ? path.substr(0, path.length - 1) : path + '/';
        routes[redirectPath] = angular.extend({ redirectTo: path }, pathRegExp(redirectPath, route));
      }
      return this;
    };
    function pathRegExp(path, opts) {
      var insensitive = opts.caseInsensitiveMatch, ret = {
          originalPath: path,
          regexp: path
        }, keys = ret.keys = [];
      path = path.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?|\*])?/g, function (_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({
          name: key,
          optional: !!optional
        });
        slash = slash || '';
        return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (star && '(.+?)' || '([^/]+)') + (optional || '') + ')' + (optional || '');
      }).replace(/([\/$\*])/g, '\\$1');
      ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
      return ret;
    }
    this.otherwise = function (params) {
      this.when(null, params);
      return this;
    };
    this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$http',
      '$templateCache',
      '$sce',
      function ($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {
        var forceReload = false, $route = {
            routes: routes,
            reload: function () {
              forceReload = true;
              $rootScope.$evalAsync(updateRoute);
            }
          };
        $rootScope.$on('$locationChangeSuccess', updateRoute);
        return $route;
        function switchRouteMatcher(on, route) {
          var keys = route.keys, params = {};
          if (!route.regexp)
            return null;
          var m = route.regexp.exec(on);
          if (!m)
            return null;
          for (var i = 1, len = m.length; i < len; ++i) {
            var key = keys[i - 1];
            var val = 'string' == typeof m[i] ? decodeURIComponent(m[i]) : m[i];
            if (key && val) {
              params[key.name] = val;
            }
          }
          return params;
        }
        function updateRoute() {
          var next = parseRoute(), last = $route.current;
          if (next && last && next.$$route === last.$$route && angular.equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
            last.params = next.params;
            angular.copy(last.params, $routeParams);
            $rootScope.$broadcast('$routeUpdate', last);
          } else if (next || last) {
            forceReload = false;
            $rootScope.$broadcast('$routeChangeStart', next, last);
            $route.current = next;
            if (next) {
              if (next.redirectTo) {
                if (angular.isString(next.redirectTo)) {
                  $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace();
                } else {
                  $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace();
                }
              }
            }
            $q.when(next).then(function () {
              if (next) {
                var locals = angular.extend({}, next.resolve), template, templateUrl;
                angular.forEach(locals, function (value, key) {
                  locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value);
                });
                if (angular.isDefined(template = next.template)) {
                  if (angular.isFunction(template)) {
                    template = template(next.params);
                  }
                } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                  if (angular.isFunction(templateUrl)) {
                    templateUrl = templateUrl(next.params);
                  }
                  templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                  if (angular.isDefined(templateUrl)) {
                    next.loadedTemplateUrl = templateUrl;
                    template = $http.get(templateUrl, { cache: $templateCache }).then(function (response) {
                      return response.data;
                    });
                  }
                }
                if (angular.isDefined(template)) {
                  locals['$template'] = template;
                }
                return $q.all(locals);
              }
            }).then(function (locals) {
              if (next == $route.current) {
                if (next) {
                  next.locals = locals;
                  angular.copy(next.params, $routeParams);
                }
                $rootScope.$broadcast('$routeChangeSuccess', next, last);
              }
            }, function (error) {
              if (next == $route.current) {
                $rootScope.$broadcast('$routeChangeError', next, last, error);
              }
            });
          }
        }
        function parseRoute() {
          var params, match;
          angular.forEach(routes, function (route, path) {
            if (!match && (params = switchRouteMatcher($location.path(), route))) {
              match = inherit(route, {
                params: angular.extend({}, $location.search(), params),
                pathParams: params
              });
              match.$$route = route;
            }
          });
          return match || routes[null] && inherit(routes[null], {
            params: {},
            pathParams: {}
          });
        }
        function interpolate(string, params) {
          var result = [];
          angular.forEach((string || '').split(':'), function (segment, i) {
            if (i === 0) {
              result.push(segment);
            } else {
              var segmentMatch = segment.match(/(\w+)(.*)/);
              var key = segmentMatch[1];
              result.push(params[key]);
              result.push(segmentMatch[2] || '');
              delete params[key];
            }
          });
          return result.join('');
        }
      }
    ];
  }
  ngRouteModule.provider('$routeParams', $RouteParamsProvider);
  function $RouteParamsProvider() {
    this.$get = function () {
      return {};
    };
  }
  ngRouteModule.directive('ngView', ngViewFactory);
  ngRouteModule.directive('ngView', ngViewFillContentFactory);
  ngViewFactory.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'
  ];
  function ngViewFactory($route, $anchorScroll, $animate) {
    return {
      restrict: 'ECA',
      terminal: true,
      priority: 400,
      transclude: 'element',
      link: function (scope, $element, attr, ctrl, $transclude) {
        var currentScope, currentElement, autoScrollExp = attr.autoscroll, onloadExp = attr.onload || '';
        scope.$on('$routeChangeSuccess', update);
        update();
        function cleanupLastView() {
          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            $animate.leave(currentElement);
            currentElement = null;
          }
        }
        function update() {
          var locals = $route.current && $route.current.locals, template = locals && locals.$template;
          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;
            var clone = $transclude(newScope, function (clone) {
                $animate.enter(clone, null, currentElement || $element, function onNgViewEnter() {
                  if (angular.isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                    $anchorScroll();
                  }
                });
                cleanupLastView();
              });
            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
      }
    };
  }
  ngViewFillContentFactory.$inject = [
    '$compile',
    '$controller',
    '$route'
  ];
  function ngViewFillContentFactory($compile, $controller, $route) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (scope, $element) {
        var current = $route.current, locals = current.locals;
        $element.html(locals.$template);
        var link = $compile($element.contents());
        if (current.controller) {
          locals.$scope = scope;
          var controller = $controller(current.controller, locals);
          if (current.controllerAs) {
            scope[current.controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }
        link(scope);
      }
    };
  }
}(window, window.angular));