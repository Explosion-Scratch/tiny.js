'use strict';
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(e)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.regex = exports.cookies = exports.imageToData = exports.loadScript = exports.requestInterval = exports.saveBlob = exports.preloadImage = exports.getHTML = exports.getJSON = exports.formatHTML = exports.playSection = exports.dispatch = exports.hub = exports.onScrollStop = exports.onOutsideClick = exports.replaceSelection = exports.fullScreen = exports.tilt = exports.observeMutations = exports.attributes = exports.inlineCSS = exports.disableRightClick = exports.elementSiblings = exports.compStyle = exports.createElement = exports.addStyles = exports.sortTableBy = exports.sortTable = exports.addEventListeners = exports.drag = exports.parseHTML = exports.removeComments = exports.querySelector = exports.textNodes = exports.replaceText = exports.serializeForm = exports.inPartialView = exports.inView = exports.context = exports.sortObj = exports.formToObject = exports.mapObjectValues = exports.mapObjectKeys = exports.merge = exports.listen = exports.clone = exports.runAsync = exports.debounce = exports.throttle = exports.isAsync = exports.curryFunction = exports.composeFunction = exports.memoize = exports.spread = exports.each = exports.uniqueArray = exports.averageBy = exports.unionArrays = exports.splice = exports.shuffleArray = exports.contains = exports.nFlatten = exports.flatten = exports.spliceArrayBuffer = exports.remove = exports.diff = exports.arrayDiff = exports.previousPage = exports.unescapeHTML = exports.escapeHTML = exports.replaceBetween = exports.capitalize = exports.syllables = exports.beautifyJS = exports.markdownToHTML = exports.sanitize = exports.urlQuery = exports.replaceMultiple = exports.byteSize = exports.editDistance = exports.hashString = exports.scrambleString = exports.camelCase = exports.syntaxHighlight = exports.unCamelCase = exports.widows = exports.speak = exports.removeTags = exports.mobileOrDesktop = exports.deburr = exports.formatMilliseconds = exports.dayName = exports.ease = exports.formatNumber = exports.seedRandom = exports.random = exports.primesTo = exports.uuid = exports.range = exports.animate = void 0),
  (exports._$ = exports.default = exports.lightOrDark = exports.lightenColor = exports.randomColor = exports.blendColors = exports.hexToRGB = exports.rgbToHex = exports.browser = exports.copy = exports.notify = exports.timeFunction = exports.arrayToCSV = exports.jsonToCsv = void 0);
let isNode = !1;
(isNode =
  'undefined' == typeof window || 'undefined' == typeof document),
  isNode &&
    console.warn(
      'There is no document element in Node, some functions of bijou.js will not work. If you need these functions consider using a package like jsDom to recreate the document element.',
    );
let node = () => {
    if (isNode)
      throw new Error(
        'You are using Node.js, this function does not work in Node.js! Sorry!',
      );
  },
  animate = (e, t, r, n, o = 20, a = (e) => e) => {
    var s = e,
      l = Date.now();
    let i = setInterval(() => {
      (s = a((Date.now() - l) / r) * (t - e) + e),
        n(s, a((Date.now() - l) / r));
    }, o);
    setTimeout(() => {
      clearInterval(i), n(t, 1);
    }, r);
  };
exports.animate = animate;
let range = (e, t) =>
  Array(t - e + 1)
    .fill()
    .map((t, r) => e + r);
exports.range = range;
let uuid = (e = Math.random()) => {
  function t(t) {
    var r = (e.toString(16) + '000000000').substr(2, 8);
    return t ? '-' + r.substr(0, 4) + '-' + r.substr(4, 4) : r;
  }
  return (
    'string' == typeof e && (e = _temp.hashString(e) / 1e16),
    t() + t(!0) + t(!0) + t()
  );
};
exports.uuid = uuid;
let primesTo = (e) => {
  let t = Array.from({ length: e - 1 }).map((e, t) => t + 2),
    r = Math.floor(Math.sqrt(e));
  return (
    Array.from({ length: r - 1 })
      .map((e, t) => t + 2)
      .forEach((e) => (t = t.filter((t) => t % e != 0 || t === e))),
    t
  );
};
exports.primesTo = primesTo;
let random = (e, t, r = !0, n = Math.random()) =>
  r
    ? Math.floor(n * (t - e + 1) + e)
    : Math.random() * (t - e + 1) + e;
exports.random = random;
let seedRandom = (e) => {
  var t = (e += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), 1 | t)),
    (((t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ (t >>> 14)) >>>
      0) /
      4294967296
  );
};
exports.seedRandom = seedRandom;
let formatNumber = (e) =>
  e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
exports.formatNumber = formatNumber;
let ease = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => --e * e * e + 1,
  easeInOutCubic: (e) =>
    e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - --e * e * e * e,
  easeInOutQuart: (e) =>
    e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 + --e * e * e * e * e,
  easeInOutQuint: (e) =>
    e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
};
exports.ease = ease;
let dayName = (e = new Date(), t = 'en-US') =>
  e.toLocaleDateString(t, { weekday: 'long' });
exports.dayName = dayName;
let formatMilliseconds = (e) => {
  (e = 'string' == typeof e ? +e : e) < 0 && (e = -e);
  const t = {
    century: Math.floor(e / 11448e8),
    year: Math.floor(e / 22896e6) % 50,
    day: Math.floor(e / 864e5) % 365,
    hour: Math.floor(e / 36e5) % 24,
    minute: Math.floor(e / 6e4) % 60,
    second: Math.floor(e / 1e3) % 60,
    millisecond: Math.floor(e) % 1e3,
  };
  return Object.entries(t)
    .filter((e) => 0 !== e[1])
    .map(([e, t]) =>
      ''
        .concat(t, ' ')
        .concat(e)
        .concat(1 !== t ? 's' : ''),
    )
    .join(', ');
};
exports.formatMilliseconds = formatMilliseconds;
let deburr = (e) =>
  e.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
exports.deburr = deburr;
let mobileOrDesktop = () => (
  node(),
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'mobile'
    : 'desktop'
);
exports.mobileOrDesktop = mobileOrDesktop;
let removeTags = (e) => e.replace(/<[^>]*>/g, '');
exports.removeTags = removeTags;
let speak = (e, t = 'en', r = 1, n = 1, o = 1, a = 1) => {
  var s = new SpeechSynthesisUtterance(),
    l = window.speechSynthesis.getVoices();
  let i = l.filter((e) => e.default);
  (s.voice = n ? ('number' == typeof n ? l[n] : n) : i),
    (s.volume = r),
    (s.rate = a),
    (s.pitch = o),
    (s.text = e),
    (s.lang = t),
    speechSynthesis.speak(s);
};
exports.speak = speak;
let widows = (e) => {
  for (var t = e.split(' '), r = '', n = 0; n <= t.length - 1; n++)
    (r += t[n]), n == t.length - 2 ? (r += '&nbsp;') : (r += ' ');
  return r;
};
exports.widows = widows;
let unCamelCase = function (e) {
  return e
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    .replace(/^./, function (e) {
      return e.toUpperCase();
    });
};
exports.unCamelCase = unCamelCase;
let syntaxHighlight = (e, t = 'html', r = {}) => {
  node();
  let n = document.createElement('DIV');
  n.innerText = e;
  return (
    ((e, t, r = {}) => {
      var n = t || 'html',
        o = document.getElementById(e) || e,
        a = o.innerHTML,
        s = r.tagColor || 'mediumblue',
        l = r.tagNameColor || 'brown',
        i = r.attributeColor || 'red',
        c = r.attributeValueColor || 'mediumblue',
        u = r.commentColor || 'green',
        p = r.cssSelectorColor || 'brown',
        d = r.cssPropertyColor || 'red',
        f = r.cssPropertyValueColor || 'mediumblue',
        g = r.cssLimiterColor || 'black',
        m = r.cssImportantColor || 'red',
        h = r.jsColor || 'black',
        x = r.jsKeywordColor || 'mediumblue',
        y = r.jsStringColor || 'brown',
        b = r.jsNumberColor || 'red',
        v = r.jsPropertyColor || 'black';
      function w(e, t, r, n, o) {
        for (var a, s, l = '', i = []; e.search(t) > -1; )
          (a = e.search(t)),
            -1 == (s = e.indexOf(r, a)) && (s = e.length),
            o
              ? (i.push(n(e.substring(a, s + r.length))),
                (e = e.substring(0, a) + o + e.substr(s + r.length)))
              : ((l += e.substring(0, a)),
                (l += n(e.substring(a, s + r.length))),
                (e = e.substr(s + r.length)));
        (this.rest = l + e), (this.arr = i);
      }
      function A(e) {
        for (var t, r, n, o = e, a = ''; o.search(/(\s|<br>)/) > -1; )
          (t = o.search(/(\s|<br>)/)),
            -1 == (r = o.indexOf('&gt;')) && (r = o.length),
            (a += o.substring(0, t)),
            (a += T(o.substring(t, r))),
            (o = o.substr(r));
        return (
          '&gt;' ==
            (n =
              '<span style=color:' +
              s +
              '>&lt;</span>' +
              (n = a + o).substring(4)).substr(n.length - 4, 4) &&
            (n =
              n.substring(0, n.length - 4) +
              '<span style=color:' +
              s +
              '>&gt;</span>'),
          '<span style=color:' + l + '>' + n + '</span>'
        );
      }
      function T(e) {
        for (var t, r, n, o, a, s = e, l = ''; s.indexOf('=') > -1; )
          (r = -1),
            (t = s.indexOf('=')),
            (n = s.indexOf("'", t)),
            (o = s.indexOf('"', t)),
            (a = s.indexOf(' ', t + 2)) > -1 &&
            (a < n || -1 == n) &&
            (a < o || -1 == o)
              ? (r = s.indexOf(' ', t))
              : o > -1 && (o < n || -1 == n) && (o < a || -1 == a)
              ? (r = s.indexOf('"', s.indexOf('"', t) + 1))
              : n > -1 &&
                (n < o || -1 == o) &&
                (n < a || -1 == a) &&
                (r = s.indexOf("'", s.indexOf("'", t) + 1)),
            (!r || -1 == r || r < t) && (r = s.length),
            (l += s.substring(0, t)),
            (l += S(s.substring(t, r + 1))),
            (s = s.substr(r + 1));
        return '<span style=color:' + i + '>' + l + s + '</span>';
      }
      function S(e) {
        return '<span style=color:' + c + '>' + e + '</span>';
      }
      function C(e) {
        return '<span style=color:' + u + '>' + e + '</span>';
      }
      function O(e) {
        var t,
          r,
          n,
          o,
          a,
          s,
          l,
          i = e,
          c = '';
        for (
          i = (n = new w(i, /\/\*/, '*/', C, 'W3CSSCOMMENTPOS')).rest;
          i.search('{') > -1;

        ) {
          for (
            t = i.search('{'),
              a = i.substr(t + 1),
              l = 1,
              s = 0,
              o = 0;
            o < a.length &&
            ('{' == a.substr(o, 1) && (l++, s++),
            '}' == a.substr(o, 1) && l--,
            0 != l);
            o++
          );
          for (0 != l && (s = 0), r = t, o = 0; o <= s; o++)
            r = i.indexOf('}', r + 1);
          -1 == r && (r = i.length),
            (c += i.substring(0, t + 1)),
            (c += M(i.substring(t + 1, r))),
            (i = i.substr(r));
        }
        for (
          i = (i = (i = c + i).replace(
            /{/g,
            '<span style=color:' + g + '>{</span>',
          )).replace(/}/g, '<span style=color:' + g + '>}</span>'),
            o = 0;
          o < n.arr.length;
          o++
        )
          i = i.replace('W3CSSCOMMENTPOS', n.arr[o]);
        return '<span style=color:' + p + '>' + i + '</span>';
      }
      function M(e) {
        var t,
          r,
          n,
          o,
          a = e,
          s = '';
        if (a.indexOf('{') > -1) return O(a);
        for (; a.search(':') > -1; ) {
          for (o = !0, n = t = a.search(':'); 1 == o; )
            (o = !1),
              (r = a.indexOf(';', n)),
              '&nbsp;' == a.substring(r - 5, r + 1) &&
                ((o = !0), (n = r + 1));
          -1 == r && (r = a.length),
            (s += a.substring(0, t)),
            (s += L(a.substring(t, r + 1))),
            (a = a.substr(r + 1));
        }
        return '<span style=color:' + d + '>' + s + a + '</span>';
      }
      function L(e) {
        var t,
          r = e,
          n = '';
        for (
          r = '<span style=color:' + g + '>:</span>' + r.substring(1);
          r.search(/!important/i) > -1;

        )
          (t = r.search(/!important/i)),
            (n += r.substring(0, t)),
            (n += E(r.substring(t, t + 10))),
            (r = r.substr(t + 10));
        return (
          (result = n + r),
          ';' == result.substr(result.length - 1, 1) &&
            '&nbsp;' != result.substr(result.length - 6, 6) &&
            '&lt;' != result.substr(result.length - 4, 4) &&
            '&gt;' != result.substr(result.length - 4, 4) &&
            '&amp;' != result.substr(result.length - 5, 5) &&
            (result =
              result.substring(0, result.length - 1) +
              '<span style=color:' +
              g +
              '>;</span>'),
          '<span style=color:' + f + '>' + result + '</span>'
        );
      }
      function E(e) {
        return (
          '<span style=color:' +
          m +
          ';font-weight:bold;>' +
          e +
          '</span>'
        );
      }
      function N(e) {
        var t,
          r,
          n,
          o,
          a,
          s,
          l,
          i,
          c,
          u,
          p = e,
          d = '',
          f = [],
          g = '';
        for (t = 0; t < p.length; t++)
          '\\' == (r = p.substr(t, 1)) &&
            (f.push(p.substr(t, 2)), (r = 'W3JSESCAPE'), t++),
            (g += r);
        for (
          p = g, 1;
          (n = $(p, "'", "'", k)),
            (o = $(p, '"', '"', k)),
            (a = $(p, /\/\*/, '*/', C)),
            (s = $(p, /\/\//, '<br>', C)),
            (i = B(p, F)),
            (l = P('js', p, j)),
            (u = I(p, H)),
            -1 !=
              Math.max(i[0], n[0], o[0], a[0], s[0], l[0], u[0]) &&
              -1 != (c = D(i, n, o, a, s, l, u))[0];

        )
          c[0] > -1 &&
            ((d += p.substring(0, c[0])),
            (d += c[2](p.substring(c[0], c[1]))),
            (p = p.substr(c[1])));
        for (p = d + p, t = 0; t < f.length; t++)
          p = p.replace('W3JSESCAPE', f[t]);
        return '<span style=color:' + h + '>' + p + '</span>';
      }
      function k(e) {
        return '<span style=color:' + y + '>' + e + '</span>';
      }
      function j(e) {
        return '<span style=color:' + x + '>' + e + '</span>';
      }
      function F(e) {
        return '<span style=color:' + b + '>' + e + '</span>';
      }
      function H(e) {
        return '<span style=color:' + v + '>' + e + '</span>';
      }
      function I(e, t) {
        var r,
          n,
          o,
          a,
          s = [
            '.',
            '<',
            ' ',
            ';',
            '(',
            '+',
            ')',
            '[',
            ']',
            ',',
            '&',
            ':',
            '{',
            '}',
            '/',
            '-',
            '*',
            '|',
            '%',
          ];
        if ((a = e.indexOf('.')) > -1)
          for (r = e.substr(a + 1), o = 0; o < r.length; o++)
            for (cc = r[o], n = 0; n < s.length; n++)
              if (cc.indexOf(s[n]) > -1) return [a + 1, o + a + 1, t];
        return [-1, -1, t];
      }
      function D() {
        var e,
          t = [];
        for (e = 0; e < arguments.length; e++)
          arguments[e][0] > -1 &&
            (0 == t.length || arguments[e][0] < t[0]) &&
            (t = arguments[e]);
        return 0 == t.length && (t = arguments[e]), t;
      }
      function P(e, t, r) {
        var n,
          o,
          a,
          s,
          l = -1,
          i = -1;
        for (
          'js' == e &&
            (n = [
              'abstract',
              'arguments',
              'boolean',
              'break',
              'byte',
              'case',
              'catch',
              'char',
              'class',
              'const',
              'continue',
              'debugger',
              'default',
              'delete',
              'do',
              'double',
              'else',
              'enum',
              'eval',
              'export',
              'extends',
              'false',
              'final',
              'finally',
              'float',
              'for',
              'function',
              'goto',
              'if',
              'implements',
              'import',
              'in',
              'instanceof',
              'int',
              'interface',
              'let',
              'long',
              'NaN',
              'native',
              'new',
              'null',
              'package',
              'private',
              'protected',
              'public',
              'return',
              'short',
              'static',
              'super',
              'switch',
              'synchronized',
              'this',
              'throw',
              'throws',
              'transient',
              'true',
              'try',
              'typeof',
              'var',
              'void',
              'volatile',
              'while',
              'with',
              'yield',
            ]),
            o = 0;
          o < n.length;
          o++
        )
          (a = t.indexOf(n[o])) > -1 &&
            ((s = /\W/g),
            t.substr(a + n[o].length, 1).match(s) &&
              t.substr(a - 1, 1).match(s) &&
              a > -1 &&
              (-1 == l || a < l) &&
              (i = (l = a) + n[o].length));
        return [l, i, r];
      }
      function $(e, t, r, n) {
        var o, a;
        return (
          (o = e.search(t)),
          -1 == (a = e.indexOf(r, o + r.length)) && (a = e.length),
          [o, a + r.length, n]
        );
      }
      function B(e, t) {
        var r,
          n,
          o,
          a,
          s,
          l = [
            '<br>',
            ' ',
            ';',
            '(',
            '+',
            ')',
            '[',
            ']',
            ',',
            '&',
            ':',
            '{',
            '}',
            '/',
            '-',
            '*',
            '|',
            '%',
            '=',
          ],
          i = 0;
        for (r = 0; r < e.length; r++)
          for (n = 0; n < l.length; n++)
            if ((o = e.substr(r, l[n].length)) == l[n]) {
              if (
                '-' == o &&
                ('e' == e.substr(r - 1, 1) ||
                  'E' == e.substr(r - 1, 1))
              )
                continue;
              if (i < (a = r) && ((s = e.substring(i, a)), !isNaN(s)))
                return [i, a, t];
              (i = r += l[n].length), (r -= 1);
              break;
            }
        return [-1, -1, t];
      }
      (o.style.fontFamily =
        r.fontFamily || "Consolas,'Courier New', monospace"),
        n || (n = 'html'),
        'html' == n &&
          (a = (function (e) {
            var t,
              r,
              n,
              o,
              a,
              s = e,
              l = '';
            (t = new w(
              s,
              '&lt;!--',
              '--&gt;',
              C,
              'W3HTMLCOMMENTPOS',
            )),
              (s = t.rest);
            for (; s.indexOf('&lt;') > -1; )
              (o = ''),
                (r = s.indexOf('&lt;')),
                '&LT;STYLE' == s.substr(r, 9).toUpperCase() &&
                  (o = 'css'),
                '&LT;SCRIPT' == s.substr(r, 10).toUpperCase() &&
                  (o = 'javascript'),
                -1 == (n = s.indexOf('&gt;', r)) && (n = s.length),
                (l += s.substring(0, r)),
                (l += A(s.substring(r, n + 4))),
                (s = s.substr(n + 4)),
                'css' == o &&
                  (n = s.indexOf('&lt;/style&gt;')) > -1 &&
                  ((l += O(s.substring(0, n))), (s = s.substr(n))),
                'javascript' == o &&
                  (n = s.indexOf('&lt;/script&gt;')) > -1 &&
                  ((l += N(s.substring(0, n))), (s = s.substr(n)));
            for (s = l + s, a = 0; a < t.arr.length; a++)
              s = s.replace('W3HTMLCOMMENTPOS', t.arr[a]);
            return s;
          })(a)),
        'css' == n && (a = O(a)),
        'js' == n && (a = N(a)),
        (o.innerHTML = a);
    })(n, t, r),
    n.innerHTML
  );
};
exports.syntaxHighlight = syntaxHighlight;
let camelCase = (e) =>
  e
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
      return 0 === t ? e.toLowerCase() : e.toUpperCase();
    })
    .replace(/\s+/g, '');
exports.camelCase = camelCase;
let scrambleString = (e) => {
  for (var t = e.split(''), r = t.length - 1; r > 0; r--) {
    var n = Math.floor(Math.random() * (r + 1)),
      o = t[r];
    (t[r] = t[n]), (t[n] = o);
  }
  return t.join('');
};
exports.scrambleString = scrambleString;
let hashString = (e, t = 0) => {
  let r = 3735928559 ^ t,
    n = 1103547991 ^ t;
  for (let t, o = 0; o < e.length; o++)
    (t = e.charCodeAt(o)),
      (r = Math.imul(r ^ t, 2654435761)),
      (n = Math.imul(n ^ t, 1597334677));
  return (
    (r =
      Math.imul(r ^ (r >>> 16), 2246822507) ^
      Math.imul(n ^ (n >>> 13), 3266489909)),
    (n =
      Math.imul(n ^ (n >>> 16), 2246822507) ^
      Math.imul(r ^ (r >>> 13), 3266489909)),
    4294967296 * (2097151 & n) + (r >>> 0)
  );
};
exports.hashString = hashString;
let editDistance = (e, t) => {
  if (0 == e.length) return t.length;
  if (0 == t.length) return e.length;
  var r,
    n,
    o = [];
  for (r = 0; r <= t.length; r++) o[r] = [r];
  for (n = 0; n <= e.length; n++) o[0][n] = n;
  for (r = 1; r <= t.length; r++)
    for (n = 1; n <= e.length; n++)
      t.charAt(r - 1) == e.charAt(n - 1)
        ? (o[r][n] = o[r - 1][n - 1])
        : (o[r][n] = Math.min(
            o[r - 1][n - 1] + 1,
            Math.min(o[r][n - 1] + 1, o[r - 1][n] + 1),
          ));
  return o[t.length][e.length];
};
exports.editDistance = editDistance;
let byteSize = (e) => new Blob([e]).size;
exports.byteSize = byteSize;
let replaceMultiple = (e, t) => {
  var r = new RegExp(Object.keys(t).join('|'), 'gi');
  return (e = e.replace(r, function (e) {
    return mapObj[e];
  }));
};
exports.replaceMultiple = replaceMultiple;
let urlQuery = (e, t = window.location.href) => {
  e = e.replace(/[\[\]]/g, '\\$&');
  var r = new RegExp('[?&]'.concat(e, '(=([^&#]*)|&|#|$)')).exec(t);
  return r
    ? r[2]
      ? decodeURIComponent(r[2].replace(/\+/g, ' '))
      : ''
    : null;
};
exports.urlQuery = urlQuery;
let sanitize = (e, t, r) => {
  node();
  t = t || [
    'I',
    'P',
    'B',
    'BODY',
    'HTML',
    'DEL',
    'INS',
    'STRONG',
    'SMALL',
    'A',
    'IMG',
    'CITE',
    'FIGCAPTION',
    'ASIDE',
    'ARTICLE',
    'SUMMARY',
    'DETAILS',
    'NAV',
    'TD',
    'TH',
    'TABLE',
    'THEAD',
    'TBODY',
    'NAV',
    'SPAN',
    'BR',
    'CODE',
    'PRE',
    'BLOCKQUOTE',
    'EM',
    'HR',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'DIV',
    'MAIN',
    'HEADER',
    'FOOTER',
    'SELECT',
    'COL',
    'AREA',
    'ADDRESS',
    'ABBR',
    'BDI',
    'BDO',
  ];
  r = (r = r || [
    { attribute: 'src', tags: '*', regex: /^(?:https|http|\/\/):/ },
    { attribute: 'href', tags: '*', regex: /^(?!javascript:).+/ },
    { attribute: 'width', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'height', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'id', tags: '*', regex: /^[a-zA-Z]+$/ },
    { attribute: 'class', tags: '*', regex: /^[a-zA-Z ]+$/ },
    {
      attribute: 'value',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'checked',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'placeholder',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'alt',
      tags: ['IMG', 'AREA', 'INPUT'],
      regex: /^[0-9a-zA-Z]+$/,
    },
    {
      attribute: 'autofocus',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'for',
      tags: ['LABEL', 'OUTPUT'],
      regex: /^[a-zA-Z0-9]+$/,
    },
  ]).map((e) => {
    if ('string' == typeof e)
      return { attribute: e, tags: '*', regex: /^.+$/ };
    let t = e;
    return (
      e.hasOwnProperty('tags') || (t.tags = '*'),
      e.hasOwnProperty('regex') || (t.regex = /^.+$/),
      t
    );
  });
  var n = new DOMParser().parseFromString(e, 'text/html'),
    o = n.querySelectorAll('*');
  for (let e = 0; e < o.length; e++) {
    const r = o[e];
    let n = s(r);
    for (let e = 0; e < n.length; e++) {
      a(r, n[e]) || r.removeAttribute(n[e]);
    }
    t.includes(r.tagName) || r.remove();
  }
  return n.documentElement.innerHTML;
  function a(e, t) {
    return (
      r.filter(
        (r) =>
          r.attribute === t &&
          ('*' === r.tags || r.tags.includes(e.tagName)) &&
          r.regex.test(e.getAttribute(t)),
      ).length > 0
    );
  }
  function s(e) {
    for (
      var t = 0, r = e.attributes, n = r.length, o = [];
      t < n;
      t++
    )
      o.push(r[t].nodeName);
    return o;
  }
};
exports.sanitize = sanitize;
let markdownToHTML = (e) => {
  var t = /\\([\\\|`*_{}\[\]()#+\-~])/g,
    r = /\n *&gt; *([^]*?)(?=(\n|$){2})/g,
    n = /\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g,
    o = /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g,
    a = /^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/,
    s = /.*\n/g,
    l = /\||(.*?[^\\])\|/g;
  function i(t, r) {
    e = e.replace(t, r);
  }
  function c(e, t) {
    return '<' + e + '>' + t + '</' + e + '>';
  }
  function u(e) {
    return e.replace(o, function (e, t, r, n, o, a, s, l, i, p) {
      return (
        t +
        c(
          n
            ? i
              ? 'strong'
              : 'em'
            : o
            ? i
              ? 's'
              : 'sub'
            : a
            ? 'sup'
            : s
            ? 'small'
            : l
            ? 'big'
            : 'code',
          u(p),
        )
      );
    });
  }
  function p(e) {
    return e.replace(t, '$1');
  }
  var d = [],
    f = 0;
  return (
    (e = '\n' + e + '\n'),
    i(/</g, '&lt;'),
    i(/>/g, '&gt;'),
    i(/\t|\r|\uf8ff/g, '  '),
    (e = (function e(t) {
      return t.replace(r, function (t, r) {
        return c('blockquote', e(u(r.replace(/^ *&gt; */gm, ''))));
      });
    })(e)),
    i(/^([*\-=_] *){3,}$/gm, '<hr/>'),
    (e = (function e(t) {
      return t.replace(n, function (t, r, n, o, a, s) {
        var l = c(
          'li',
          u(
            s
              .split(
                RegExp(
                  '\n ?' + r + '(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +',
                  'g',
                ),
              )
              .map(e)
              .join('</li><li>'),
          ),
        );
        return (
          '\n' +
          (n
            ? '<ol start="' +
              (o
                ? n + '">'
                : parseInt(n, 36) -
                  9 +
                  '" style="list-style-type:' +
                  (a ? 'low' : 'upp') +
                  'er-alpha">') +
              l +
              '</ol>'
            : c('ul', l))
        );
      });
    })(e)),
    i(/<\/(ol|ul)>\n\n<\1>/g, ''),
    i(
      /\n((```|~~~).*\n?([^]*?)\n?\2|(( {4}.*?\n)+))/g,
      function (e, t, r, n, o) {
        return (
          (d[--f] = c(
            'pre',
            c('code', n || o.replace(/^ {4}/gm, '')),
          )),
          f + ''
        );
      },
    ),
    i(
      /((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g,
      function (e, t, r, n, o, a, s) {
        return (
          (d[--f] =
            s ||
            (r
              ? o
                ? '<img src="' + o + '" alt="' + n + '"/>'
                : t
              : '<a href="' + o + '">' + p(u(n)) + '</a>')),
          f + ''
        );
      },
    ),
    i(/\n(( *\|.*?\| *\n)+)/g, function (e, t) {
      var r = t.match(a)[1];
      return (
        '\n' +
        c(
          'table',
          t.replace(s, function (e, t) {
            return e == r
              ? ''
              : c(
                  'tr',
                  e.replace(l, function (e, n, o) {
                    return o
                      ? c(r && !t ? 'th' : 'td', p(u(n || '')))
                      : '';
                  }),
                );
          }),
        )
      );
    }),
    i(
      /(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g,
      function (e, t, r, n) {
        return t + c('h' + r.length, p(u(n)));
      },
    ),
    i(/(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g, function (e, t) {
      return c('p', p(u(t)));
    }),
    i(/-\d+\uf8ff/g, function (e) {
      return d[parseInt(e)];
    }),
    e.trim()
  );
};
exports.markdownToHTML = markdownToHTML;
let beautifyJS = (e, t) => {
  _$.loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.5/beautify.min.js',
    () => {
      t(js_beautify(e));
    },
  );
};
exports.beautifyJS = beautifyJS;
let syllables = (e) => {
  var t = 0;
  (e = e.toLowerCase()).length > 3 &&
    'some' == e.substring(0, 4) &&
    ((e = e.replace('some', '')), t++);
  var r = (e = (e = e.replace(
    /(?:[^laeiouy]|ed|[^laeiouy]e)$/,
    '',
  )).replace(/^y/, '')).match(/[aeiouy]{1,2}/g);
  if ((console.log(r), r)) return r.length + t;
};
exports.syllables = syllables;
let capitalize = (e) =>
  String.fromCodePoint(e.codePointAt(0)).toUpperCase() +
  e.slice(e.codePointAt(0) > 65535 ? 2 : 1);
exports.capitalize = capitalize;
let replaceBetween = (e, t, r, n) =>
  e.substring(0, t) + n + e.substring(r);
exports.replaceBetween = replaceBetween;
let escapeHTML = (e) =>
  e.replace(
    /[&<>'"]/g,
    (e) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[e] || e),
  );
exports.escapeHTML = escapeHTML;
let unescapeHTML = (e) =>
  e.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (e) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"',
      }[e] || e),
  );
exports.unescapeHTML = unescapeHTML;
let previousPage = () => (
  node(), document.referrer || window.location.href
);
exports.previousPage = previousPage;
let arrayDiff = (e, t) => {
  for (var r = [], n = [], o = 0; o < e.length; o++) r[e[o]] = !0;
  for (o = 0; o < t.length; o++)
    r[t[o]] ? delete r[t[o]] : (r[t[o]] = !0);
  for (var a in r) n.push(a);
  return n;
};
exports.arrayDiff = arrayDiff;
let diff = function (e, t) {
  for (var r = [], n = void 0, o = 0; o < e.length; o++)
    e[o] != t[o] && null == n && (n = [o]),
      null != n &&
        e[o] == t[o] &&
        (n.push(o), r.push(n), (n = void 0));
  return null != n && (n.push(o), r.push(n)), r;
};
exports.diff = diff;
let remove = (e, t) =>
  e.indexOf(t) > -1 ? e.splice(e.indexOf(t), 1) : e;
exports.remove = remove;
let spliceArrayBuffer = (e, t, r, n) => {
  var o = (n = n || !1) ? -1 : 1;
  n && ([t, r] = [r, t]),
    (t = Math.floor(t)),
    (r = Math.floor(r) + o);
  for (var a = t, s = 0; a != r; a += o) s = 256 * s + e[a];
  return s;
};
exports.spliceArrayBuffer = spliceArrayBuffer;
let flatten = (e, t = 1) => {
  var r = e;
  return (
    _$.each(t, () => {
      r = [].concat.apply([], e);
    }),
    r
  );
};
exports.flatten = flatten;
let nFlatten = (e) =>
  e.reduce(function (e, t) {
    return e.concat(Array.isArray(t) ? flatten(t) : t);
  }, []);
exports.nFlatten = nFlatten;
let contains = (e, t) => e.includes(t);
exports.contains = contains;
let shuffleArray = (e) => e.sort(() => Math.random() - 0.5);
exports.shuffleArray = shuffleArray;
let splice = (e, t, r, n = 0) =>
  'string' == typeof e
    ? e.slice(0, t) + r + e.slice(t + Math.abs(n))
    : e.splice(t, n, r);
exports.splice = splice;
let unionArrays = (e, t) => {
  for (var r = {}, n = e.length - 1; n >= 0; --n) r[e[n]] = e[n];
  for (n = t.length - 1; n >= 0; --n) r[t[n]] = t[n];
  var o = [];
  for (var a in r) r.hasOwnProperty(a) && o.push(r[a]);
  return o;
};
exports.unionArrays = unionArrays;
let averageBy = (e, t) =>
  e
    .map('function' == typeof t ? t : (e) => e[t])
    .reduce((e, t) => e + t, 0) / e.length;
exports.averageBy = averageBy;
let uniqueArray = (e) => _toConsumableArray(new Set(e));
exports.uniqueArray = uniqueArray;
let each = (e, t) => {
  e =
    'number' == typeof e
      ? _$.range(1, e)
      : 'string' == typeof e
      ? e.split('')
      : e;
  for (let r = 0; r < e.length; r++) t(e[r], r, e);
};
exports.each = each;
let spread = (e) => (e) => {
  call_me.apply(void 0, e);
};
exports.spread = spread;
let memoize = (e) => {
  let t = {};
  return function () {
    let r = JSON.stringify(Array.from(arguments)),
      n = Array.from(arguments);
    return (
      t[r] || (t[r] = e.apply(void 0, _toConsumableArray(n))), t[r]
    );
  };
};
exports.memoize = memoize;
let composeFunction = (...e) => (t) =>
  e.reduceRight((e, t) => t(e), t);
exports.composeFunction = composeFunction;
let curryFunction = (e, t = e.length, ...r) => {
  var n;
  return t <= r.length
    ? e.apply(void 0, r)
    : (n = curry).bind.apply(n, [null, e, t].concat(r));
};
exports.curryFunction = curryFunction;
let isAsync = (e) =>
  '[object AsyncFunction]' === Object.prototype.toString.call(e);
exports.isAsync = isAsync;
let throttle = (e, t, r) => {
  var n,
    o,
    a,
    s = null,
    l = 0;
  r || (r = {});
  var i = function () {
    (l = !1 === r.leading ? 0 : Date.now()),
      (s = null),
      (a = e.apply(n, o)),
      s || (n = o = null);
  };
  return function () {
    var c = Date.now();
    l || !1 !== r.leading || (l = c);
    var u = t - (c - l);
    return (
      (n = this),
      (o = arguments),
      u <= 0 || u > t
        ? (s && (clearTimeout(s), (s = null)),
          (l = c),
          (a = e.apply(n, o)),
          s || (n = o = null))
        : s || !1 === r.trailing || (s = setTimeout(i, u)),
      a
    );
  };
};
exports.throttle = throttle;
let debounce = (e, t, r = !1) => {
  var n;
  return function () {
    var o = this,
      a = arguments,
      s = r && !n;
    clearTimeout(n),
      (n = setTimeout(function () {
        (n = null), r || e.apply(o, a);
      }, t)),
      s && e.apply(o, a);
  };
};
exports.debounce = debounce;
let runAsync = (e) => {
  const t = new Worker(
    URL.createObjectURL(
      new Blob(['postMessage(('.concat(e, ')());')]),
      { type: 'application/javascript; charset=utf-8' },
    ),
  );
  return new Promise((e, r) => {
    (t.onmessage = ({ data: r }) => {
      e(r), t.terminate();
    }),
      (t.onerror = (e) => {
        r(e), t.terminate();
      });
  });
};
exports.runAsync = runAsync;
let clone = (e) => {
  if (null == e || 'object' != typeof e) return e;
  var t = e.constructor();
  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
};
exports.clone = clone;
let listen = (e, t, r) =>
  new Proxy(e, {
    set: function (e, r, n) {
      return t(r, n), (e[r] = n), e[r];
    },
    get: function (t, n, o) {
      return r(n, o), e[n];
    },
  });
exports.listen = listen;
let merge = function e(t, r) {
  for (var n in r)
    try {
      r[n].constructor == Object
        ? (t[n] = e(t[n], r[n]))
        : (t[n] = r[n]);
    } catch (e) {
      t[n] = r[n];
    }
  return t;
};
exports.merge = merge;
let mapObjectKeys = (e, t) =>
  Array.isArray(e)
    ? e.map((e) => _$.mapObjectKeys(e, t))
    : 'object' == typeof e
    ? Object.keys(e).reduce((r, n) => {
        const o = t(n),
          a = e[n];
        return (
          (r[o] =
            null !== a && 'object' == typeof a
              ? _$.mapObjectKeys(a, t)
              : a),
          r
        );
      }, {})
    : e;
exports.mapObjectKeys = mapObjectKeys;
let mapObjectValues = (e, t) => (
  Object.keys(e).map(function (r, n) {
    e[r] = t(e[r], n);
  }),
  e
);
exports.mapObjectValues = mapObjectValues;
let formToObject = (e) => (
  node(),
  Array.from(new FormData(e)).reduce((e, [t, r]) => ({
    ...e,
    [t]: r,
  }))
);
exports.formToObject = formToObject;
let sortObj = (e) =>
  Object.keys(e)
    .sort()
    .reduce(function (t, r) {
      return (t[r] = e[r]), t;
    }, {});
exports.sortObj = sortObj;
let context = () => {
  var e = document.createElement('UL');
  (e.id = 'contextMenu'), document.body.appendChild(e);
  let t = document.createElement('STYLE');
  (t.innerHTML =
    '#contextMenu {\n       pointer-events: none;\n       padding: 0;\n       opacity: 0;\n       transition: opacity .3s ease;\n       position: fixed;\n       padding-top: 3px;\n       padding-bottom: 3px;\n       max-height: 200px;\n       overflow-y: scroll;\n       overflow-x: hidden;\n       list-style: none;\n       z-index: 10000;\n       background: white;\n       color: #333;\n       font-family: sans-serif;\n       border-radius: 5px;\n       box-shadow: 2px 2px 5px #0004;\n       width: fit-content;\n       min-width: 50px;\n       max-width: 150px;\n     }\n     #contextMenu li {\n       transition: background-color .3s ease;\n       display: block;\n       min-width: 150px;\n       margin: 0;\n       padding: 10px;\n     }\n     #contextMenu li:hover {\n       background-color: #ddd;\n       cursor: pointer;\n     }\n     '),
    document.body.appendChild(t);
  var r = document.querySelectorAll('[contextmenu]');
  for (let t = 0; t < r.length; t++)
    window.addEventListener('contextmenu', (t) => {
      let r;
      e.style.pointerEvents = 'auto';
      try {
        (r = document.querySelectorAll(
          '#'.concat(
            t.target
              .closest('[contextmenu]')
              .getAttribute('contextmenu'),
            ' menuitem',
          ),
        )),
          t.preventDefault();
      } catch (t) {
        return !0;
      }
      e.innerHTML = '';
      for (let t = 0; t < r.length; t++) {
        const n = r[t];
        e.innerHTML += '<li onclick="'
          .concat(n.getAttribute('onclick'), '">')
          .concat(n.getAttribute('label'), '</li>');
      }
      console.log(e.innerHTML),
        (e.style.top = ''.concat(t.clientY, 'px')),
        (e.style.left = ''.concat(t.clientX, 'px')),
        (e.style.opacity = 1);
    });
  var n = 0;
  requestInterval(() => {
    if ((n += 100) > 3e3)
      return (
        (e.style.opacity = 0),
        (e.style.pointerEvents = 'none'),
        void (n = 0)
      );
  }, 100),
    addEventListeners(e, ['mousemove', 'click', 'scroll'], () => {
      n = 0;
    }),
    onOutsideClick(e, () => {
      (e.style.opacity = 0), (e.style.pointerEvents = 'none');
    });
};
exports.context = context;
let inView = (e) => {
  node();
  for (
    var t = e.offsetTop,
      r = e.offsetLeft,
      n = e.offsetWidth,
      o = e.offsetHeight;
    e.offsetParent;

  )
    (t += (e = e.offsetParent).offsetTop), (r += e.offsetLeft);
  return (
    t >= window.pageYOffset &&
    r >= window.pageXOffset &&
    t + o <= window.pageYOffset + window.innerHeight &&
    r + n <= window.pageXOffset + window.innerWidth
  );
};
exports.inView = inView;
let inPartialView = (e) => {
  node();
  for (
    var t = e.offsetTop,
      r = e.offsetLeft,
      n = e.offsetWidth,
      o = e.offsetHeight;
    e.offsetParent;

  )
    (t += (e = e.offsetParent).offsetTop), (r += e.offsetLeft);
  return (
    t < window.pageYOffset + window.innerHeight &&
    r < window.pageXOffset + window.innerWidth &&
    t + o > window.pageYOffset &&
    r + n > window.pageXOffset
  );
};
exports.inPartialView = inPartialView;
let serializeForm = (e) => (
  node(),
  Array.from(new FormData(e), (e) =>
    e.map(encodeURIComponent).join('='),
  ).join('&')
);
exports.serializeForm = serializeForm;
let replaceText = (e, t) => {
  node(),
    _$.each(_$.textNodes(e), (e) => {
      e.textContent = t(e.textContent);
    });
};
exports.replaceText = replaceText;
let textNodes = (e) =>
  _toConsumableArray(e.childNodes).filter(
    (e) => e.nodeType === Node.TEXT_NODE && '' !== e.nodeValue.trim(),
  );
exports.textNodes = textNodes;
let querySelector = (e) => {
  node();
  var t = '';
  return (
    (function e(r) {
      if (
        r.getAttribute('id') &&
        1 ===
          document.querySelectorAll('#'.concat(r.getAttribute('id')))
            .length
      )
        return (t = (t = (t = t.replace(
          /^/,
          ' #' + r.getAttribute('id'),
        )).replace(/\s/, '')).replace(/\s/g, ' > '));
      if (document.body === r)
        return (t = (t = (t = t.replace(/^/, ' body')).replace(
          /\s/,
          '',
        )).replace(/\s/g, ' > '));
      if (r.getAttribute('class')) {
        var n = '.';
        n = (n = (n += r.getAttribute('class')).replace(
          /\s/g,
          '.',
        )).replace(/^/g, ' ');
        var o = '',
          a = r.parentNode.children;
        if (a.length < 2) return;
        for (var s = [], l = 0; l < a.length; l++)
          r.getAttribute('class') == a[l].getAttribute('class') &&
            s.push(a[l]);
        if (s.length > 1)
          for (var i = 0; i < s.length; i++)
            if (r === s[i]) {
              o = ':nth-of-type(' + ++i + ')';
              break;
            }
        t = t.replace(/^/, n + o);
      } else {
        var c = r.nodeName;
        c = c.toLowerCase();
        var u = '';
        if ((a = r.parentNode.children).length > 2) {
          var p = [];
          for (l = 0; l < a.length; l++)
            r.nodeName == a[l].nodeName && p.push(a[l]);
          if (p.length > 1)
            for (i = 0; i < p.length; i++)
              if (r === p[i]) {
                u = ':nth-of-type(' + ++i + ')';
                break;
              }
        }
        t = t.replace(/^/, ' ' + c + u);
      }
      if (!r.parentNode)
        return (t = (t = t.replace(/\s/g, ' > ')).replace(/\s/, ''));
      e(r.parentNode);
    })(e),
    t
  );
};
exports.querySelector = querySelector;
let removeComments = (e) => {
  if ('object' == typeof e) {
    if (isNode)
      throw new Error(
        'No document element! (You are probably using Node.js)',
      );
    return (
      (e.innerHTML = e.innerHTML.replace(
        /<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,
        '',
      )),
      e
    );
  }
  if ('string' == typeof e)
    return e.replace(
      /<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,
      '',
    );
};
exports.removeComments = removeComments;
let parseHTML = (e, t = 'text/html') =>
  new DOMParser().parseFromString(e, t);
exports.parseHTML = parseHTML;
let drag = (e) => {
  var t, r, n, o;
  function a(e) {
    (this.style.left = t + e.clientX - n + 'px'),
      (this.style.top = r + e.clientY - o + 'px');
  }
  return (
    node(),
    e.addEventListener(
      'mousedown',
      function (s) {
        var l = window.getComputedStyle(e);
        (e.style.top = l.getPropertyValue('top')),
          (e.style.left = l.getPropertyValue('left')),
          (e.style.right = l.getPropertyValue('right')),
          (e.style.bottom = l.getPropertyValue('bottom')),
          (this.style.position = 'absolute'),
          (t = this.offsetLeft),
          (r = this.offsetTop),
          (n = s.clientX),
          (o = s.clientY),
          this.addEventListener('mousemove', a, !1),
          window.addEventListener(
            'mouseup',
            function () {
              e.removeEventListener('mousemove', a, !1);
            },
            !1,
          );
      },
      !1,
    ),
    e
  );
};
exports.drag = drag;
let addEventListeners = (e, t, r = {}, n = !1, o = !1) => {
  if (!(t instanceof Array))
    throw 'addMultipleListeners: please supply an array of eventstrings (like ["click","mouseover"])';
  for (
    var a = function (e) {
        r.apply(this, o && o instanceof Array ? o : []);
      },
      s = 0;
    s < t.length;
    s += 1
  )
    e.addEventListener(t[s], a, n);
};
exports.addEventListeners = addEventListeners;
let sortTable = (e) => {
  var t = function (e, t) {
    return e.children[t].innerText || e.children[t].textContent;
  };
  Array.prototype.slice
    .call(e.querySelectorAll('th'))
    .forEach(function (e) {
      e.addEventListener('click', function () {
        for (
          var r, n, o = e.parentNode;
          'TABLE' != o.tagName.toUpperCase();

        )
          o = o.parentNode;
        Array.prototype.slice
          .call(o.querySelectorAll('tr:nth-child(n+2)'))
          .sort(
            ((r = Array.prototype.slice
              .call(e.parentNode.children)
              .indexOf(e)),
            (n = this.asc = !this.asc),
            function (e, o) {
              return (
                (a = t(n ? e : o, r)),
                (s = t(n ? o : e, r)),
                '' === a || '' === s || isNaN(a) || isNaN(s)
                  ? a.toString().localeCompare(s)
                  : a - s
              );
              var a, s;
            }),
          )
          .forEach(function (e) {
            o.appendChild(e);
          });
      });
    });
};
exports.sortTable = sortTable;
let sortTableBy = (e, t) => {
  for (
    var r,
      n,
      o = function (e, t) {
        return e.children[t].innerText || e.children[t].textContent;
      },
      a = e.parentNode;
    'TABLE' != a.tagName.toUpperCase();

  )
    a = a.parentNode;
  Array.prototype.slice
    .call(a.querySelectorAll('tr:nth-child(n+2)'))
    .sort(
      ((r = Array.prototype.slice
        .call(e.parentNode.children)
        .indexOf(e)),
      (n = t),
      function (e, t) {
        return (
          (a = o(n ? e : t, r)),
          (s = o(n ? t : e, r)),
          '' === a || '' === s || isNaN(a) || isNaN(s)
            ? a.toString().localeCompare(s)
            : a - s
        );
        var a, s;
      }),
    )
    .forEach(function (e) {
      a.appendChild(e);
    });
};
exports.sortTableBy = sortTableBy;
let addStyles = (e, t) => (node(), Object.assign(e.style, t));
exports.addStyles = addStyles;
let createElement = (e) => {
  node();
  const t = document.createElement('div');
  return (t.innerHTML = e), t.firstElementChild;
};
exports.createElement = createElement;
let compStyle = (e, t) => (
  node(), window.getComputedStyle(e).getPropertyValue(t)
);
exports.compStyle = compStyle;
let elementSiblings = (e) =>
  _toConsumableArray(e.parentElement.children).filter((t) => t != e);
exports.elementSiblings = elementSiblings;
let disableRightClick = (e) => (node(), (e.oncontextmenu = !1));
exports.disableRightClick = disableRightClick;
let inlineCSS = (e) => {
  var t,
    r = getComputedStyle(e, null);
  for (t = 0; t < r.length; t++) {
    var n = r[t] + '';
    e.style[n] = r[n];
  }
};
exports.inlineCSS = inlineCSS;
let attributes = (e) => {
  node();
  for (
    var t, r = [], n = 0, o = e.attributes, a = o.length;
    n < a;
    n++
  )
    (t = o[n]), r.push({ name: t.nodeName, value: t.nodeValue });
  return r;
};
exports.attributes = attributes;
let observeMutations = (e, t, r) => {
  const n = new MutationObserver((e) => e.forEach((e) => t(e)));
  return (
    n.observe(
      e,
      Object.assign(
        {
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0,
        },
        r,
      ),
    ),
    n
  );
};
exports.observeMutations = observeMutations;
let tilt = (e, t, r, n = 500, o = 30) => {
  e.style.transform = 'perspective('
    .concat(n, 'px) scale(1.1) rotateX(')
    .concat(
      -1 * o * ((r - e.clientHeight / 2) / e.clientHeight),
      'deg) rotateY(',
    )
    .concat(o * ((t - e.clientWidth / 2) / e.clientWidth), 'deg)');
};
exports.tilt = tilt;
let fullScreen = (e) =>
  e.requestFullScreen ||
  e.mozRequestFullScreen ||
  e.webkitRequestFullScreen() ||
  new Error('Fullscreen failed');
exports.fullScreen = fullScreen;
let replaceSelection = (e) => {
  var t, r;
  if (window.getSelection) {
    if ((t = window.getSelection()).rangeCount) {
      (r = t.getRangeAt(0)).deleteContents();
      let n = document.createElement('span');
      n.insertAdjacentHTML('beforeend', e), r.insertNode(n);
    }
  } else
    document.selection &&
      document.selection.createRange &&
      (console.warn(
        'You are using IE < 9, you are evil. Falling back to text not HTML.',
      ),
      ((r = document.selection.createRange()).text = e.replace(
        /<[^>]*>/g,
        '',
      )));
};
exports.replaceSelection = replaceSelection;
let onOutsideClick = (e, t) => (
  node(),
  document.addEventListener('click', (r) => {
    e.contains(r.target) || t();
  }),
  t
);
exports.onOutsideClick = onOutsideClick;
let onScrollStop = (e) => {
  let t;
  node(),
    window.addEventListener(
      'scroll',
      (r) => {
        clearTimeout(t),
          (t = setTimeout(() => {
            e(r);
          }, 150));
      },
      !1,
    );
};
exports.onScrollStop = onScrollStop;
let hub = () => ({
  hub: Object.create(null),
  emit: function (e, t) {
    (this.hub[e] || []).forEach((e) => e(t));
  },
  on: function (e, t) {
    this.hub[e] || (this.hub[e] = []), this.hub[e].push(t);
  },
  off: function (e, t) {
    const r = (this.hub[e] || []).findIndex((e) => e === t);
    r > -1 && this.hub[e].splice(r, 1),
      0 === this.hub[e].length && delete this.hub[e];
  },
});
exports.hub = hub;
let dispatch = (e, t, r = window) => {
  let n = new Event(e);
  for (let e in t) n[e] = t[e];
  r.dispatchEvent(n);
};
exports.dispatch = dispatch;
let playSection = (e, t, r) => {
  let n = e.cloneNode(!0);
  (n.currentTime = t),
    n.play(),
    (n.int = setInterval(function () {
      n.currentTime > r && (n.pause(), clearInterval(n.int));
    }, 10));
};
exports.playSection = playSection;
let formatHTML = (e) => {
  var t = '',
    r = '';
  return (
    e.split(/>\s*</).forEach(function (e) {
      e.match(/^\/\w/) && (r = r.substring('\t'.length)),
        (t += r + '<' + e + '>\r\n'),
        e.match(/^<?\w[^>]*[^\/]$/) &&
          !e.startsWith('input') &&
          (r += '\t');
    }),
    t.substring(1, t.length - 3)
  );
};
exports.formatHTML = formatHTML;
let getJSON = (e, t) => {
  node(),
    fetch(e)
      .then((e) => e.json())
      .then((e) => t(e))
      .catch((e) => {
        throw new Error(e.stack);
      });
};
exports.getJSON = getJSON;
let getHTML = (e, t) => {
  node(),
    fetch(e)
      .then((e) => e.text())
      .then((e) => t(_$.parseHTML(e)))
      .catch((e) => {
        throw new Error(e.stack);
      });
};
exports.getHTML = getHTML;
let preloadImage = () => {
  for (var e = 0; e < arguments.length; e++)
    (images[e] = new Image()), (images[e].src = preload.arguments[e]);
};
exports.preloadImage = preloadImage;
let saveBlob = (e, t = 'output.txt') => {
  node();
  var r = document.createElement('a');
  document.body.appendChild(r), (r.style = 'display: none');
  var n = window.URL.createObjectURL(e);
  (r.href = n),
    (r.download = t),
    r.click(),
    window.URL.revokeObjectURL(n);
};
exports.saveBlob = saveBlob;
let requestInterval = function (e, t) {
  node();
  var r =
      window.requestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      },
    n = new Date().getTime(),
    o = {};
  return (
    (o.value = r(function a() {
      (o.value = r(a)),
        new Date().getTime() - n >= t &&
          (e.call(), (n = new Date().getTime()));
    })),
    o
  );
};
exports.requestInterval = requestInterval;
let loadScript = (e, t) => {
  node();
  var r = document.createElement('script');
  (r.type = 'text/javascript'),
    r.readyState
      ? (r.onreadystatechange = function () {
          ('loaded' !== r.readyState &&
            'complete' !== r.readyState) ||
            ((r.onreadystatechange = null), t());
        })
      : (r.onload = function () {
          t();
        }),
    (r.src = e),
    document.getElementsByTagName('head')[0].appendChild(r);
};
exports.loadScript = loadScript;
let imageToData = async (e, t) => {
  let r = await fetch(e).then((e) => e.blob());
  t(
    await new Promise((e) => {
      let t = new FileReader();
      (t.onload = () => e(t.result)), t.readAsDataURL(r);
    }),
  );
};
exports.imageToData = imageToData;
let cookies = {
  setItem: (e, t, r = 1e3) => {
    node();
    var n = '';
    if (r) {
      var o = new Date();
      o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3),
        (n = '; expires=' + o.toUTCString());
    }
    document.cookie = e + '=' + (t || '') + n + '; path=/';
  },
  getItem: (e) => {
    node();
    for (
      var t = e + '=', r = document.cookie.split(';'), n = 0;
      n < r.length;
      n++
    ) {
      for (var o = r[n]; ' ' == o.charAt(0); )
        o = o.substring(1, o.length);
      if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
    }
    return null;
  },
  removeItem: (e) => {
    node(),
      (document.cookie =
        e + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
  },
};
exports.cookies = cookies;
let regex = {
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  name: /^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  link: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
  strongPassword: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
  moderatePassword: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  ipv4: /^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,
  ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
  ip: / ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,
  socialSecurity: /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,
  hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  zipCode: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
  simplePhone: /^\+?[\d\s]{3,}$/,
  visaCredit: /^4[0–9]{12}(?:[0–9]{3})?$/,
  expressCredit: /^3[47][0–9]{13}$/,
  mastercardCredit: /^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,
  discoverCredit: /^6(?:011|5[0–9]{2})[0–9]{12}$/,
};
exports.regex = regex;
let jsonToCsv = (e, t, r = ',') =>
  [t.join(r)]
    .concat(
      _toConsumableArray(
        e.map((e) =>
          t.reduce(
            (t, n) =>
              ''
                .concat(t)
                .concat(t.length ? r : '', '"')
                .concat(e[n] ? e[n] : '', '"'),
            '',
          ),
        ),
      ),
    )
    .join('\n');
exports.jsonToCsv = jsonToCsv;
let arrayToCSV = (e, t = ',') =>
  e
    .map((e) =>
      e
        .map((e) =>
          isNaN(e) ? '"'.concat(e.replace(/"/g, '""'), '"') : e,
        )
        .join(t),
    )
    .join('\n');
exports.arrayToCSV = arrayToCSV;
let timeFunction = (e, t = '_$ function timer') => {
  console.time(t), e(), console.timeEnd(t);
};
exports.timeFunction = timeFunction;
let notify = (e, t, r) => {
  node(),
    window.Notification
      ? 'granted' === Notification.permission ||
        Notification.requestPermission()
          .then(function (e) {
            'granted' === e ||
              console.log('User blocked notifications.');
          })
          .catch(function (e) {
            console.error(e);
          })
      : console.log('Browser does not support notifications.');
};
exports.notify = notify;
let copy = (e) => {
  node();
  const t = document.createElement('textarea');
  (t.value = e),
    t.setAttribute('readonly', ''),
    (t.style.position = 'absolute'),
    (t.style.left = '-9999px'),
    document.body.appendChild(t);
  const r =
    document.getSelection().rangeCount > 0 &&
    document.getSelection().getRangeAt(0);
  return (
    t.select(),
    document.execCommand('copy'),
    document.body.removeChild(t),
    r &&
      (document.getSelection().removeAllRanges(),
      document.getSelection().addRange(r)),
    e
  );
};
exports.copy = copy;
let browser = () => {
  node();
  var e =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0,
    t = 'undefined' != typeof InstallTrigger,
    r =
      /constructor/i.test(window.HTMLElement) ||
      '[object SafariRemoteNotification]' ===
        (
          !window.safari ||
          ('undefined' != typeof safari &&
            window.safari.pushNotification)
        ).toString(),
    n = !!document.documentMode,
    o = !n && !!window.StyleMedia,
    a = !(
      !window.chrome ||
      (!window.chrome.webstore && !window.chrome.runtime)
    ),
    s = a && -1 != navigator.userAgent.indexOf('Edg'),
    l = (a || e) && !!window.CSS;
  return e
    ? 'Opera'
    : t
    ? 'Firefox'
    : r
    ? 'Safari'
    : o
    ? 'Edge'
    : n
    ? 'Internet Explorer'
    : a
    ? 'Chrome'
    : s
    ? 'Edge Chromium'
    : l
    ? 'Blink'
    : void 0;
};
exports.browser = browser;
let rgbToHex = (e) => {
  let t = e.indexOf(',') > -1 ? ',' : ' ',
    r = (+(e = e.substr(4).split(')')[0].split(t))[0]).toString(16),
    n = (+e[1]).toString(16),
    o = (+e[2]).toString(16);
  return (
    1 == r.length && (r = '0' + r),
    1 == n.length && (n = '0' + n),
    1 == o.length && (o = '0' + o),
    '#' + r + n + o
  );
};
exports.rgbToHex = rgbToHex;
let hexToRGB = (e) => {
  if (
    ((e.length - 1 != 6 &&
      e.length - 1 != 8 &&
      e.length - 1 != 4 &&
      e.length - 1 != 3) ||
      !e.startsWith('#')) &&
    ((6 !== e.length &&
      8 !== e.length &&
      4 !== e.length &&
      3 !== e.length) ||
      e.startsWith('#'))
  )
    throw new Error('Invalid hex');
  let t = !1,
    r = e.slice(e.startsWith('#') ? 1 : 0);
  return (
    3 === r.length
      ? (r = _toConsumableArray(r)
          .map((e) => e + e)
          .join(''))
      : 8 === r.length && (t = !0),
    (r = parseInt(r, 16)),
    'rgb' +
      (t ? 'a' : '') +
      '(' +
      (r >>> (t ? 24 : 16)) +
      ', ' +
      ((r & (t ? 16711680 : 65280)) >>> (t ? 16 : 8)) +
      ', ' +
      ((r & (t ? 65280 : 255)) >>> (t ? 8 : 0)) +
      (t ? ', '.concat(255 & r) : '') +
      ')'
  );
};
exports.hexToRGB = hexToRGB;
let blendColors = (e, t, r = 50) => {
  const n = (e, t, r) => e + (r / 100) * (t - e),
    o = parseInt(''.concat(e[1]).concat(e[2]), 16),
    a = parseInt(''.concat(e[3]).concat(e[4]), 16),
    s = parseInt(''.concat(e[5]).concat(e[6]), 16),
    l = parseInt(''.concat(t[1]).concat(t[2]), 16),
    i = parseInt(''.concat(t[3]).concat(t[4]), 16),
    c = parseInt(''.concat(t[5]).concat(t[6]), 16);
  return ((e, t, r) => {
    let n = e.toString(16),
      o = t.toString(16),
      a = r.toString(16);
    for (; n.length < 2; ) n = '0'.concat(n);
    for (; o.length < 2; ) o = '0'.concat(o);
    for (; a.length < 2; ) a = '0'.concat(a);
    return '#'.concat(n).concat(o).concat(a);
  })(
    Math.round(n(o, l, r)),
    Math.round(n(a, i, r)),
    Math.round(n(s, c, r)),
  );
};
exports.blendColors = blendColors;
let randomColor = () =>
  '#'.concat(Math.floor(16777215 * Math.random()).toString(16));
exports.randomColor = randomColor;
let lightenColor = (e, t) => {
  var r = !1;
  '#' == e[0] && ((e = e.slice(1)), (r = !0));
  var n = parseInt(e, 16),
    o = (n >> 16) + t;
  o > 255 ? (o = 255) : o < 0 && (o = 0);
  var a = ((n >> 8) & 255) + t;
  a > 255 ? (a = 255) : a < 0 && (a = 0);
  var s = (255 & n) + t;
  return (
    s > 255 ? (s = 255) : s < 0 && (s = 0),
    (r ? '#' : '') + (s | (a << 8) | (o << 16)).toString(16)
  );
};
exports.lightenColor = lightenColor;
let lightOrDark = (e) => {
  var t, r, n, o;
  return (
    e.match(/^rgb/)
      ? ((t = (e = e.match(
          /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
        ))[1]),
        (r = e[2]),
        (n = e[3]))
      : ((t =
          (e = +(
            '0x' + e.slice(1).replace(e.length < 5 && /./g, '$&$&')
          )) >> 16),
        (r = (e >> 8) & 255),
        (n = 255 & e)),
    (o = Math.sqrt(t * t * 0.299 + r * r * 0.587 + n * n * 0.114)) >
    127.5
      ? { lightOrDark: 'light', hsp: o }
      : { lightOrDark: 'dark', hsp: o }
  );
};
exports.lightOrDark = lightOrDark;
let _temp = {
  addEventListeners: addEventListeners,
  addStyles: addStyles,
  animate: animate,
  arrayDiff: arrayDiff,
  arrayToCSV: arrayToCSV,
  attributes: attributes,
  averageBy: averageBy,
  beautifyJS: beautifyJS,
  blendColors: blendColors,
  browser: browser,
  byteSize: byteSize,
  camelCase: camelCase,
  capitalize: capitalize,
  clone: clone,
  compStyle: compStyle,
  composeFunction: composeFunction,
  contains: contains,
  context: context,
  cookies: cookies,
  copy: copy,
  createElement: createElement,
  curryFunction: curryFunction,
  dayName: dayName,
  diff: diff,
  disableRightClick: disableRightClick,
  dispatch: dispatch,
  drag: drag,
  each: each,
  ease: ease,
  editDistance: editDistance,
  elementSiblings: elementSiblings,
  escapeHTML: escapeHTML,
  flatten: flatten,
  formToObject: formToObject,
  formatHTML: formatHTML,
  formatMilliseconds: formatMilliseconds,
  formatNumber: formatNumber,
  fullScreen: fullScreen,
  getHTML: getHTML,
  getJSON: getJSON,
  hashString: hashString,
  hexToRGB: hexToRGB,
  hub: hub,
  imageToData: imageToData,
  inPartialView: inPartialView,
  inView: inView,
  inlineCSS: inlineCSS,
  isAsync: isAsync,
  jsonToCsv: jsonToCsv,
  lightOrDark: lightOrDark,
  lightenColor: lightenColor,
  listen: listen,
  loadScript: loadScript,
  mapObjectKeys: mapObjectKeys,
  mapObjectValues: mapObjectValues,
  markdownToHTML: markdownToHTML,
  memoize: memoize,
  merge: merge,
  mobileOrDesktop: mobileOrDesktop,
  nFlatten: nFlatten,
  notify: notify,
  observeMutations: observeMutations,
  onOutsideClick: onOutsideClick,
  onScrollStop: onScrollStop,
  parseHTML: parseHTML,
  preloadImage: preloadImage,
  previousPage: previousPage,
  primesTo: primesTo,
  querySelector: querySelector,
  random: random,
  randomColor: randomColor,
  range: range,
  regex: regex,
  remove: remove,
  removeComments: removeComments,
  removeTags: removeTags,
  replaceBetween: replaceBetween,
  replaceMultiple: replaceMultiple,
  replaceSelection: replaceSelection,
  replaceText: replaceText,
  requestInterval: requestInterval,
  rgbToHex: rgbToHex,
  runAsync: runAsync,
  sanitize: sanitize,
  saveBlob: saveBlob,
  scrambleString: scrambleString,
  seedRandom: seedRandom,
  serializeForm: serializeForm,
  shuffleArray: shuffleArray,
  sortObj: sortObj,
  sortTable: sortTable,
  sortTableBy: sortTableBy,
  speak: speak,
  splice: splice,
  spliceArrayBuffer: spliceArrayBuffer,
  syllables: syllables,
  syntaxHighlight: syntaxHighlight,
  textNodes: textNodes,
  throttle: throttle,
  tilt: tilt,
  timeFunction: timeFunction,
  unCamelCase: unCamelCase,
  unescapeHTML: unescapeHTML,
  unionArrays: unionArrays,
  uniqueArray: uniqueArray,
  urlQuery: urlQuery,
  uuid: uuid,
  widows: widows,
};
var _default = _temp;
(exports.default = _default), isNode || (window._$ = _temp);
const _$ = _temp;
if (((exports._$ = _$), isNode))
  try {
    module.exports = _temp;
  } catch (e) {
    console.error(e);
  }