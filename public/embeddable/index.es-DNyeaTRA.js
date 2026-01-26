import { e as it, N as Io } from "./events-DW_sDeXG.js";
import { ah as Td, g as Nd, ai as ta } from "./embeddable-entry-DYHIgI6c.js";
function di(t) {
  return new Promise((e, i) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => i(t.error);
  });
}
function Qh(t, e) {
  let i;
  const r = () => {
    if (i)
      return i;
    const s = indexedDB.open(t);
    return s.onupgradeneeded = () => s.result.createObjectStore(e), i = di(s), i.then((n) => {
      n.onclose = () => i = void 0;
    }, () => {
    }), i;
  };
  return (s, n) => r().then((o) => n(o.transaction(e, s).objectStore(e)));
}
let Ys;
function Rr() {
  return Ys || (Ys = Qh("keyval-store", "keyval")), Ys;
}
function ia(t, e = Rr()) {
  return e("readonly", (i) => di(i.get(t)));
}
function Rd(t, e, i = Rr()) {
  return i("readwrite", (r) => (r.put(e, t), di(r.transaction)));
}
function jd(t, e = Rr()) {
  return e("readwrite", (i) => (i.delete(t), di(i.transaction)));
}
function Bd(t = Rr()) {
  return t("readwrite", (e) => (e.clear(), di(e.transaction)));
}
function Ud(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, di(t.transaction);
}
function kd(t = Rr()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return di(e.getAllKeys());
    const i = [];
    return Ud(e, (r) => i.push(r.key)).then(() => i);
  });
}
var ra = function(t, e, i) {
  if (i || arguments.length === 2) for (var r = 0, s = e.length, n; r < s; r++)
    (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return t.concat(n || Array.prototype.slice.call(e));
}, Ld = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, i, r) {
      this.name = e, this.version = i, this.os = r, this.type = "browser";
    }
    return t;
  }()
), qd = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Md = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, i, r, s) {
      this.name = e, this.version = i, this.os = r, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), zd = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Fd = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Hd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Vd = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, sa = 3, Kd = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", Hd]
], na = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Wd(t) {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Fd() : typeof navigator < "u" ? Yd(navigator.userAgent) : Zd();
}
function Gd(t) {
  return t !== "" && Kd.reduce(function(e, i) {
    var r = i[0], s = i[1];
    if (e)
      return e;
    var n = s.exec(t);
    return !!n && [r, n];
  }, !1);
}
function Yd(t) {
  var e = Gd(t);
  if (!e)
    return null;
  var i = e[0], r = e[1];
  if (i === "searchbot")
    return new zd();
  var s = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < sa && (s = ra(ra([], s, !0), Qd(sa - s.length), !0)) : s = [];
  var n = s.join("."), o = Jd(t), a = Vd.exec(t);
  return a && a[1] ? new Md(i, n, o, a[1]) : new Ld(i, n, o);
}
function Jd(t) {
  for (var e = 0, i = na.length; e < i; e++) {
    var r = na[e], s = r[0], n = r[1], o = n.exec(t);
    if (o)
      return s;
  }
  return null;
}
function Zd() {
  var t = typeof process < "u" && process.version;
  return t ? new qd(process.version.slice(1)) : null;
}
function Qd(t) {
  for (var e = [], i = 0; i < t; i++)
    e.push("0");
  return e;
}
var N = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var jn = function(t, e) {
  return jn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s]);
  }, jn(t, e);
};
function Xd(t, e) {
  jn(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Bn = function() {
  return Bn = Object.assign || function(e) {
    for (var i, r = 1, s = arguments.length; r < s; r++) {
      i = arguments[r];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, Bn.apply(this, arguments);
};
function ep(t, e) {
  var i = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (i[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (i[r[s]] = t[r[s]]);
  return i;
}
function tp(t, e, i, r) {
  var s = arguments.length, n = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(t, e, i, r);
  else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (n = (s < 3 ? o(n) : s > 3 ? o(e, i, n) : o(e, i)) || n);
  return s > 3 && n && Object.defineProperty(e, i, n), n;
}
function ip(t, e) {
  return function(i, r) {
    e(i, r, t);
  };
}
function rp(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e);
}
function sp(t, e, i, r) {
  function s(n) {
    return n instanceof i ? n : new i(function(o) {
      o(n);
    });
  }
  return new (i || (i = Promise))(function(n, o) {
    function a(l) {
      try {
        h(r.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(r.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? n(l.value) : s(l.value).then(a, c);
    }
    h((r = r.apply(t, e || [])).next());
  });
}
function np(t, e) {
  var i = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, s, n, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(h) {
    return function(l) {
      return c([h, l]);
    };
  }
  function c(h) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; i; ) try {
      if (r = 1, s && (n = h[0] & 2 ? s.return : h[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, h[1])).done) return n;
      switch (s = 0, n && (h = [h[0] & 2, n.value]), h[0]) {
        case 0:
        case 1:
          n = h;
          break;
        case 4:
          return i.label++, { value: h[1], done: !1 };
        case 5:
          i.label++, s = h[1], h = [0];
          continue;
        case 7:
          h = i.ops.pop(), i.trys.pop();
          continue;
        default:
          if (n = i.trys, !(n = n.length > 0 && n[n.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            i = 0;
            continue;
          }
          if (h[0] === 3 && (!n || h[1] > n[0] && h[1] < n[3])) {
            i.label = h[1];
            break;
          }
          if (h[0] === 6 && i.label < n[1]) {
            i.label = n[1], n = h;
            break;
          }
          if (n && i.label < n[2]) {
            i.label = n[2], i.ops.push(h);
            break;
          }
          n[2] && i.ops.pop(), i.trys.pop();
          continue;
      }
      h = e.call(t, i);
    } catch (l) {
      h = [6, l], s = 0;
    } finally {
      r = n = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function op(t, e, i, r) {
  r === void 0 && (r = i), t[r] = e[i];
}
function ap(t, e) {
  for (var i in t) i !== "default" && !e.hasOwnProperty(i) && (e[i] = t[i]);
}
function Un(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], r = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Xh(t, e) {
  var i = typeof Symbol == "function" && t[Symbol.iterator];
  if (!i) return t;
  var r = i.call(t), s, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = r.next()).done; ) n.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (i = r.return) && i.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}
function cp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Xh(arguments[e]));
  return t;
}
function hp() {
  for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
  for (var r = Array(t), s = 0, e = 0; e < i; e++)
    for (var n = arguments[e], o = 0, a = n.length; o < a; o++, s++)
      r[s] = n[o];
  return r;
}
function Dr(t) {
  return this instanceof Dr ? (this.v = t, this) : new Dr(t);
}
function lp(t, e, i) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = i.apply(t, e || []), s, n = [];
  return s = {}, o("next"), o("throw"), o("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(d) {
    r[d] && (s[d] = function(f) {
      return new Promise(function(p, g) {
        n.push([d, f, p, g]) > 1 || a(d, f);
      });
    });
  }
  function a(d, f) {
    try {
      c(r[d](f));
    } catch (p) {
      u(n[0][3], p);
    }
  }
  function c(d) {
    d.value instanceof Dr ? Promise.resolve(d.value.v).then(h, l) : u(n[0][2], d);
  }
  function h(d) {
    a("next", d);
  }
  function l(d) {
    a("throw", d);
  }
  function u(d, f) {
    d(f), n.shift(), n.length && a(n[0][0], n[0][1]);
  }
}
function up(t) {
  var e, i;
  return e = {}, r("next"), r("throw", function(s) {
    throw s;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(s, n) {
    e[s] = t[s] ? function(o) {
      return (i = !i) ? { value: Dr(t[s](o)), done: s === "return" } : n ? n(o) : o;
    } : n;
  }
}
function dp(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], i;
  return e ? e.call(t) : (t = typeof Un == "function" ? Un(t) : t[Symbol.iterator](), i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function r(n) {
    i[n] = t[n] && function(o) {
      return new Promise(function(a, c) {
        o = t[n](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(n, o, a, c) {
    Promise.resolve(c).then(function(h) {
      n({ value: h, done: a });
    }, o);
  }
}
function pp(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function fp(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null)
    for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
  return e.default = t, e;
}
function gp(t) {
  return t && t.__esModule ? t : { default: t };
}
function yp(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function mp(t, e, i) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, i), i;
}
const wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Bn;
  },
  __asyncDelegator: up,
  __asyncGenerator: lp,
  __asyncValues: dp,
  __await: Dr,
  __awaiter: sp,
  __classPrivateFieldGet: yp,
  __classPrivateFieldSet: mp,
  __createBinding: op,
  __decorate: tp,
  __exportStar: ap,
  __extends: Xd,
  __generator: np,
  __importDefault: gp,
  __importStar: fp,
  __makeTemplateObject: pp,
  __metadata: rp,
  __param: ip,
  __read: Xh,
  __rest: ep,
  __spread: cp,
  __spreadArrays: hp,
  __values: Un
}, Symbol.toStringTag, { value: "Module" })), jr = /* @__PURE__ */ Td(wp);
var Js = {}, or = {}, oa;
function bp() {
  if (oa) return or;
  oa = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.delay = void 0;
  function t(e) {
    return new Promise((i) => {
      setTimeout(() => {
        i(!0);
      }, e);
    });
  }
  return or.delay = t, or;
}
var Wt = {}, Zs = {}, Gt = {}, aa;
function vp() {
  return aa || (aa = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.ONE_THOUSAND = Gt.ONE_HUNDRED = void 0, Gt.ONE_HUNDRED = 100, Gt.ONE_THOUSAND = 1e3), Gt;
}
var Qs = {}, ca;
function Ep() {
  return ca || (ca = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Qs)), Qs;
}
var ha;
function el() {
  return ha || (ha = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(vp(), t), e.__exportStar(Ep(), t);
  }(Zs)), Zs;
}
var la;
function _p() {
  if (la) return Wt;
  la = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.fromMiliseconds = Wt.toMiliseconds = void 0;
  const t = el();
  function e(r) {
    return r * t.ONE_THOUSAND;
  }
  Wt.toMiliseconds = e;
  function i(r) {
    return Math.floor(r / t.ONE_THOUSAND);
  }
  return Wt.fromMiliseconds = i, Wt;
}
var ua;
function Ip() {
  return ua || (ua = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(bp(), t), e.__exportStar(_p(), t);
  }(Js)), Js;
}
var bi = {}, da;
function Sp() {
  if (da) return bi;
  da = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(i) {
      if (this.timestamps.has(i))
        throw new Error(`Watch already started for label: ${i}`);
      this.timestamps.set(i, { started: Date.now() });
    }
    stop(i) {
      const r = this.get(i);
      if (typeof r.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${i}`);
      const s = Date.now() - r.started;
      this.timestamps.set(i, { started: r.started, elapsed: s });
    }
    get(i) {
      const r = this.timestamps.get(i);
      if (typeof r > "u")
        throw new Error(`No timestamp found for label: ${i}`);
      return r;
    }
    elapsed(i) {
      const r = this.get(i);
      return r.elapsed || Date.now() - r.started;
    }
  }
  return bi.Watch = t, bi.default = t, bi;
}
var Xs = {}, ar = {}, pa;
function Dp() {
  if (pa) return ar;
  pa = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.IWatch = void 0;
  class t {
  }
  return ar.IWatch = t, ar;
}
var fa;
function $p() {
  return fa || (fa = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(Dp(), t);
  }(Xs)), Xs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(Ip(), t), e.__exportStar(Sp(), t), e.__exportStar($p(), t), e.__exportStar(el(), t);
})(N);
var oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.getLocalStorage = oe.getLocalStorageOrThrow = oe.getCrypto = oe.getCryptoOrThrow = tl = oe.getLocation = oe.getLocationOrThrow = So = oe.getNavigator = oe.getNavigatorOrThrow = oi = oe.getDocument = oe.getDocumentOrThrow = oe.getFromWindowOrThrow = oe.getFromWindow = void 0;
function pi(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
oe.getFromWindow = pi;
function Qi(t) {
  const e = pi(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
oe.getFromWindowOrThrow = Qi;
function Op() {
  return Qi("document");
}
oe.getDocumentOrThrow = Op;
function Pp() {
  return pi("document");
}
var oi = oe.getDocument = Pp;
function xp() {
  return Qi("navigator");
}
oe.getNavigatorOrThrow = xp;
function Ap() {
  return pi("navigator");
}
var So = oe.getNavigator = Ap;
function Cp() {
  return Qi("location");
}
oe.getLocationOrThrow = Cp;
function Tp() {
  return pi("location");
}
var tl = oe.getLocation = Tp;
function Np() {
  return Qi("crypto");
}
oe.getCryptoOrThrow = Np;
function Rp() {
  return pi("crypto");
}
oe.getCrypto = Rp;
function jp() {
  return Qi("localStorage");
}
oe.getLocalStorageOrThrow = jp;
function Bp() {
  return pi("localStorage");
}
oe.getLocalStorage = Bp;
var Do = {};
Object.defineProperty(Do, "__esModule", { value: !0 });
var il = Do.getWindowMetadata = void 0;
const ga = oe;
function Up() {
  let t, e;
  try {
    t = ga.getDocumentOrThrow(), e = ga.getLocationOrThrow();
  } catch {
    return null;
  }
  function i() {
    const u = t.getElementsByTagName("link"), d = [];
    for (let f = 0; f < u.length; f++) {
      const p = u[f], g = p.getAttribute("rel");
      if (g && g.toLowerCase().indexOf("icon") > -1) {
        const y = p.getAttribute("href");
        if (y)
          if (y.toLowerCase().indexOf("https:") === -1 && y.toLowerCase().indexOf("http:") === -1 && y.indexOf("//") !== 0) {
            let w = e.protocol + "//" + e.host;
            if (y.indexOf("/") === 0)
              w += y;
            else {
              const m = e.pathname.split("/");
              m.pop();
              const b = m.join("/");
              w += b + "/" + y;
            }
            d.push(w);
          } else if (y.indexOf("//") === 0) {
            const w = e.protocol + y;
            d.push(w);
          } else
            d.push(y);
      }
    }
    return d;
  }
  function r(...u) {
    const d = t.getElementsByTagName("meta");
    for (let f = 0; f < d.length; f++) {
      const p = d[f], g = ["itemprop", "property", "name"].map((y) => p.getAttribute(y)).filter((y) => y ? u.includes(y) : !1);
      if (g.length && g) {
        const y = p.getAttribute("content");
        if (y)
          return y;
      }
    }
    return "";
  }
  function s() {
    let u = r("name", "og:site_name", "og:title", "twitter:title");
    return u || (u = t.title), u;
  }
  function n() {
    return r("description", "og:description", "twitter:description", "keywords");
  }
  const o = s(), a = n(), c = e.origin, h = i();
  return {
    description: a,
    url: c,
    icons: h,
    name: o
  };
}
il = Do.getWindowMetadata = Up;
function $r(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function ya(t) {
  return $r(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
const rl = "2.23.2";
let cr = {
  getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: i }) => e ? `${t ?? "https://viem.sh"}${e}${i ? `#${i}` : ""}` : void 0,
  version: `viem@${rl}`
};
class ai extends Error {
  constructor(e, i = {}) {
    var a;
    const r = (() => {
      var c;
      return i.cause instanceof ai ? i.cause.details : (c = i.cause) != null && c.message ? i.cause.message : i.details;
    })(), s = i.cause instanceof ai && i.cause.docsPath || i.docsPath, n = (a = cr.getDocsUrl) == null ? void 0 : a.call(cr, { ...i, docsPath: s }), o = [
      e || "An error occurred.",
      "",
      ...i.metaMessages ? [...i.metaMessages, ""] : [],
      ...n ? [`Docs: ${n}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...cr.version ? [`Version: ${cr.version}`] : []
    ].join(`
`);
    super(o, i.cause ? { cause: i.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = s, this.metaMessages = i.metaMessages, this.name = i.name ?? this.name, this.shortMessage = e, this.version = rl;
  }
  walk(e) {
    return sl(this, e);
  }
}
function sl(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t && t.cause !== void 0 ? sl(t.cause, e) : e ? null : t;
}
class nl extends ai {
  constructor({ size: e, targetSize: i, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${i}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
function Xi(t, { dir: e, size: i = 32 } = {}) {
  return typeof t == "string" ? kp(t, { dir: e, size: i }) : Lp(t, { dir: e, size: i });
}
function kp(t, { dir: e, size: i = 32 } = {}) {
  if (i === null)
    return t;
  const r = t.replace("0x", "");
  if (r.length > i * 2)
    throw new nl({
      size: Math.ceil(r.length / 2),
      targetSize: i,
      type: "hex"
    });
  return `0x${r[e === "right" ? "padEnd" : "padStart"](i * 2, "0")}`;
}
function Lp(t, { dir: e, size: i = 32 } = {}) {
  if (i === null)
    return t;
  if (t.length > i)
    throw new nl({
      size: t.length,
      targetSize: i,
      type: "bytes"
    });
  const r = new Uint8Array(i);
  for (let s = 0; s < i; s++) {
    const n = e === "right";
    r[n ? s : i - s - 1] = t[n ? s : t.length - s - 1];
  }
  return r;
}
class qp extends ai {
  constructor({ max: e, min: i, signed: r, size: s, value: n }) {
    super(`Number "${n}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${i} to ${e})` : `(above ${i})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class Mp extends ai {
  constructor({ givenSize: e, maxSize: i }) {
    super(`Size cannot exceed ${i} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
}
function er(t, { size: e }) {
  if (ya(t) > e)
    throw new Mp({
      givenSize: ya(t),
      maxSize: e
    });
}
function kn(t, e = {}) {
  const { signed: i } = e;
  e.size && er(t, { size: e.size });
  const r = BigInt(t);
  if (!i)
    return r;
  const s = (t.length - 2) / 2, n = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= n ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function zp(t, e = {}) {
  return Number(kn(t, e));
}
const Fp = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ln(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? al(t, e) : typeof t == "string" ? Kp(t, e) : typeof t == "boolean" ? Hp(t, e) : ol(t, e);
}
function Hp(t, e = {}) {
  const i = `0x${Number(t)}`;
  return typeof e.size == "number" ? (er(i, { size: e.size }), Xi(i, { size: e.size })) : i;
}
function ol(t, e = {}) {
  let i = "";
  for (let s = 0; s < t.length; s++)
    i += Fp[t[s]];
  const r = `0x${i}`;
  return typeof e.size == "number" ? (er(r, { size: e.size }), Xi(r, { dir: "right", size: e.size })) : r;
}
function al(t, e = {}) {
  const { signed: i, size: r } = e, s = BigInt(t);
  let n;
  r ? i ? n = (1n << BigInt(r) * 8n - 1n) - 1n : n = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (n = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof n == "bigint" && i ? -n - 1n : 0;
  if (n && s > n || s < o) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new qp({
      max: n ? `${n}${c}` : void 0,
      min: `${o}${c}`,
      signed: i,
      size: r,
      value: `${t}${c}`
    });
  }
  const a = `0x${(i && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? Xi(a, { size: r }) : a;
}
const Vp = /* @__PURE__ */ new TextEncoder();
function Kp(t, e = {}) {
  const i = Vp.encode(t);
  return ol(i, e);
}
const Wp = /* @__PURE__ */ new TextEncoder();
function Gp(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? Jp(t, e) : typeof t == "boolean" ? Yp(t, e) : $r(t) ? cl(t, e) : hl(t, e);
}
function Yp(t, e = {}) {
  const i = new Uint8Array(1);
  return i[0] = Number(t), typeof e.size == "number" ? (er(i, { size: e.size }), Xi(i, { size: e.size })) : i;
}
const St = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function ma(t) {
  if (t >= St.zero && t <= St.nine)
    return t - St.zero;
  if (t >= St.A && t <= St.F)
    return t - (St.A - 10);
  if (t >= St.a && t <= St.f)
    return t - (St.a - 10);
}
function cl(t, e = {}) {
  let i = t;
  e.size && (er(i, { size: e.size }), i = Xi(i, { dir: "right", size: e.size }));
  let r = i.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, n = new Uint8Array(s);
  for (let o = 0, a = 0; o < s; o++) {
    const c = ma(r.charCodeAt(a++)), h = ma(r.charCodeAt(a++));
    if (c === void 0 || h === void 0)
      throw new ai(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    n[o] = c * 16 + h;
  }
  return n;
}
function Jp(t, e) {
  const i = al(t, e);
  return cl(i);
}
function hl(t, e = {}) {
  const i = Wp.encode(t);
  return typeof e.size == "number" ? (er(i, { size: e.size }), Xi(i, { dir: "right", size: e.size })) : i;
}
function ms(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error("positive integer expected, got " + t);
}
function Zp(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function xs(t, ...e) {
  if (!Zp(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function uO(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  ms(t.outputLen), ms(t.blockLen);
}
function wa(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Qp(t, e) {
  xs(t);
  const i = e.outputLen;
  if (t.length < i)
    throw new Error("digestInto() expects output buffer of length at least " + i);
}
const Wr = /* @__PURE__ */ BigInt(2 ** 32 - 1), ba = /* @__PURE__ */ BigInt(32);
function Xp(t, e = !1) {
  return e ? { h: Number(t & Wr), l: Number(t >> ba & Wr) } : { h: Number(t >> ba & Wr) | 0, l: Number(t & Wr) | 0 };
}
function ef(t, e = !1) {
  let i = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: n, l: o } = Xp(t[s], e);
    [i[s], r[s]] = [n, o];
  }
  return [i, r];
}
const tf = (t, e, i) => t << i | e >>> 32 - i, rf = (t, e, i) => e << i | t >>> 32 - i, sf = (t, e, i) => e << i - 32 | t >>> 64 - i, nf = (t, e, i) => t << i - 32 | e >>> 64 - i, vi = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function of(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function dO(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function pO(t, e) {
  return t << 32 - e | t >>> e;
}
const va = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function af(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Ea(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = af(t[e]);
}
function cf(t) {
  if (typeof t != "string")
    throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function ll(t) {
  return typeof t == "string" && (t = cf(t)), xs(t), t;
}
function fO(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    xs(s), e += s.length;
  }
  const i = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const n = t[r];
    i.set(n, s), s += n.length;
  }
  return i;
}
class hf {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function lf(t) {
  const e = (r) => t().update(ll(r)).digest(), i = t();
  return e.outputLen = i.outputLen, e.blockLen = i.blockLen, e.create = () => t(), e;
}
function gO(t = 32) {
  if (vi && typeof vi.getRandomValues == "function")
    return vi.getRandomValues(new Uint8Array(t));
  if (vi && typeof vi.randomBytes == "function")
    return vi.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const ul = [], dl = [], pl = [], uf = /* @__PURE__ */ BigInt(0), hr = /* @__PURE__ */ BigInt(1), df = /* @__PURE__ */ BigInt(2), pf = /* @__PURE__ */ BigInt(7), ff = /* @__PURE__ */ BigInt(256), gf = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = hr, i = 1, r = 0; t < 24; t++) {
  [i, r] = [r, (2 * i + 3 * r) % 5], ul.push(2 * (5 * r + i)), dl.push((t + 1) * (t + 2) / 2 % 64);
  let s = uf;
  for (let n = 0; n < 7; n++)
    e = (e << hr ^ (e >> pf) * gf) % ff, e & df && (s ^= hr << (hr << /* @__PURE__ */ BigInt(n)) - hr);
  pl.push(s);
}
const [yf, mf] = /* @__PURE__ */ ef(pl, !0), _a = (t, e, i) => i > 32 ? sf(t, e, i) : tf(t, e, i), Ia = (t, e, i) => i > 32 ? nf(t, e, i) : rf(t, e, i);
function wf(t, e = 24) {
  const i = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      i[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, h = i[c], l = i[c + 1], u = _a(h, l, 1) ^ i[a], d = Ia(h, l, 1) ^ i[a + 1];
      for (let f = 0; f < 50; f += 10)
        t[o + f] ^= u, t[o + f + 1] ^= d;
    }
    let s = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = dl[o], c = _a(s, n, a), h = Ia(s, n, a), l = ul[o];
      s = t[l], n = t[l + 1], t[l] = c, t[l + 1] = h;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        i[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~i[(a + 2) % 10] & i[(a + 4) % 10];
    }
    t[0] ^= yf[r], t[1] ^= mf[r];
  }
  i.fill(0);
}
class $o extends hf {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, i, r, s = !1, n = 24) {
    if (super(), this.blockLen = e, this.suffix = i, this.outputLen = r, this.enableXOF = s, this.rounds = n, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, ms(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = of(this.state);
  }
  keccak() {
    va || Ea(this.state32), wf(this.state32, this.rounds), va || Ea(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    wa(this);
    const { blockLen: i, state: r } = this;
    e = ll(e);
    const s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(i - this.pos, s - n);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[n++];
      this.pos === i && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: i, pos: r, blockLen: s } = this;
    e[r] ^= i, i & 128 && r === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    wa(this, !1), xs(e), this.finish();
    const i = this.state, { blockLen: r } = this;
    for (let s = 0, n = e.length; s < n; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, n - s);
      e.set(i.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return ms(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Qp(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: i, suffix: r, outputLen: s, rounds: n, enableXOF: o } = this;
    return e || (e = new $o(i, r, s, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = r, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const bf = (t, e, i) => lf(() => new $o(e, t, i)), vf = /* @__PURE__ */ bf(1, 136, 256 / 8);
function fl(t, e) {
  const i = e || "hex", r = vf($r(t, { strict: !1 }) ? Gp(t) : t);
  return i === "bytes" ? r : Ln(r);
}
class Ef extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const i = super.get(e);
    return super.has(e) && i !== void 0 && (this.delete(e), super.set(e, i)), i;
  }
  set(e, i) {
    if (super.set(e, i), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const en = /* @__PURE__ */ new Ef(8192);
function _f(t, e) {
  if (en.has(`${t}.${e}`))
    return en.get(`${t}.${e}`);
  const i = t.substring(2).toLowerCase(), r = fl(hl(i), "bytes"), s = i.split("");
  for (let o = 0; o < 40; o += 2)
    r[o >> 1] >> 4 >= 8 && s[o] && (s[o] = s[o].toUpperCase()), (r[o >> 1] & 15) >= 8 && s[o + 1] && (s[o + 1] = s[o + 1].toUpperCase());
  const n = `0x${s.join("")}`;
  return en.set(`${t}.${e}`, n), n;
}
function If(t) {
  const e = fl(`0x${t.substring(4)}`).substring(26);
  return _f(`0x${e}`);
}
async function Sf({ hash: t, signature: e }) {
  const i = $r(t) ? t : Ln(t), { secp256k1: r } = await import("./secp256k1-Cgh4GKRj.js");
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: h, s: l, v: u, yParity: d } = e, f = Number(d ?? u), p = Sa(f);
      return new r.Signature(kn(h), kn(l)).addRecoveryBit(p);
    }
    const o = $r(e) ? e : Ln(e), a = zp(`0x${o.slice(130)}`), c = Sa(a);
    return r.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(i.substring(2)).toHex(!1)}`;
}
function Sa(t) {
  if (t === 0 || t === 1)
    return t;
  if (t === 27)
    return 0;
  if (t === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function Df({ hash: t, signature: e }) {
  return If(await Sf({ hash: t, signature: e }));
}
function $f(t) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  const e = new Uint8Array(256);
  for (let h = 0; h < e.length; h++)
    e[h] = 255;
  for (let h = 0; h < t.length; h++) {
    const l = t.charAt(h), u = l.charCodeAt(0);
    if (e[u] !== 255)
      throw new TypeError(l + " is ambiguous");
    e[u] = h;
  }
  const i = t.length, r = t.charAt(0), s = Math.log(i) / Math.log(256), n = Math.log(256) / Math.log(i);
  function o(h) {
    if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (h.length === 0)
      return "";
    let l = 0, u = 0, d = 0;
    const f = h.length;
    for (; d !== f && h[d] === 0; )
      d++, l++;
    const p = (f - d) * n + 1 >>> 0, g = new Uint8Array(p);
    for (; d !== f; ) {
      let m = h[d], b = 0;
      for (let E = p - 1; (m !== 0 || b < u) && E !== -1; E--, b++)
        m += 256 * g[E] >>> 0, g[E] = m % i >>> 0, m = m / i >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      u = b, d++;
    }
    let y = p - u;
    for (; y !== p && g[y] === 0; )
      y++;
    let w = r.repeat(l);
    for (; y < p; ++y)
      w += t.charAt(g[y]);
    return w;
  }
  function a(h) {
    if (typeof h != "string")
      throw new TypeError("Expected String");
    if (h.length === 0)
      return new Uint8Array();
    let l = 0, u = 0, d = 0;
    for (; h[l] === r; )
      u++, l++;
    const f = (h.length - l) * s + 1 >>> 0, p = new Uint8Array(f);
    for (; l < h.length; ) {
      const m = h.charCodeAt(l);
      if (m > 255)
        return;
      let b = e[m];
      if (b === 255)
        return;
      let E = 0;
      for (let $ = f - 1; (b !== 0 || E < d) && $ !== -1; $--, E++)
        b += i * p[$] >>> 0, p[$] = b % 256 >>> 0, b = b / 256 >>> 0;
      if (b !== 0)
        throw new Error("Non-zero carry");
      d = E, l++;
    }
    let g = f - d;
    for (; g !== f && p[g] === 0; )
      g++;
    const y = new Uint8Array(u + (f - g));
    let w = u;
    for (; g !== f; )
      y[w++] = p[g++];
    return y;
  }
  function c(h) {
    const l = a(h);
    if (l)
      return l;
    throw new Error("Non-base" + i + " character");
  }
  return {
    encode: o,
    decodeUnsafe: a,
    decode: c
  };
}
var Of = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const Pf = $f(Of), xf = (t) => JSON.stringify(t, (e, i) => typeof i == "bigint" ? i.toString() + "n" : i), Af = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, i = t.replace(e, '$1"$2n"$3');
  return JSON.parse(i, (r, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function ci(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Af(t);
  } catch {
    return t;
  }
}
function jt(t) {
  return typeof t == "string" ? t : xf(t) || "";
}
function Cf(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function gl(t, ...e) {
  if (!Cf(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Da(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Tf(t, e) {
  gl(t);
  const i = e.outputLen;
  if (t.length < i) throw new Error("digestInto() expects output buffer of length at least " + i);
}
const Ei = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const tn = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function Nf(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function yl(t) {
  return typeof t == "string" && (t = Nf(t)), gl(t), t;
}
let Rf = class {
  clone() {
    return this._cloneInto();
  }
};
function jf(t) {
  const e = (r) => t().update(yl(r)).digest(), i = t();
  return e.outputLen = i.outputLen, e.blockLen = i.blockLen, e.create = () => t(), e;
}
function ml(t = 32) {
  if (Ei && typeof Ei.getRandomValues == "function") return Ei.getRandomValues(new Uint8Array(t));
  if (Ei && typeof Ei.randomBytes == "function") return Ei.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Bf(t, e, i, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, i, r);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(i >> s & n), a = Number(i & n), c = r ? 4 : 0, h = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + h, a, r);
}
let Uf = class extends Rf {
  constructor(e, i, r, s) {
    super(), this.blockLen = e, this.outputLen = i, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = tn(this.buffer);
  }
  update(e) {
    Da(this);
    const { view: i, buffer: r, blockLen: s } = this;
    e = yl(e);
    const n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(s - this.pos, n - o);
      if (a === s) {
        const c = tn(e);
        for (; s <= n - o; o += s) this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(i, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Da(this), Tf(e, this), this.finished = !0;
    const { buffer: i, view: r, blockLen: s, isLE: n } = this;
    let { pos: o } = this;
    i[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(r, 0), o = 0);
    for (let u = o; u < s; u++) i[u] = 0;
    Bf(r, s - 8, BigInt(this.length * 8), n), this.process(r, 0);
    const a = tn(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, l = this.get();
    if (h > l.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u = 0; u < h; u++) a.setUint32(4 * u, l[u], n);
  }
  digest() {
    const { buffer: e, outputLen: i } = this;
    this.digestInto(e);
    const r = e.slice(0, i);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: i, buffer: r, length: s, finished: n, destroyed: o, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = n, e.destroyed = o, s % i && e.buffer.set(r), e;
  }
};
const Gr = BigInt(2 ** 32 - 1), qn = BigInt(32);
function wl(t, e = !1) {
  return e ? { h: Number(t & Gr), l: Number(t >> qn & Gr) } : { h: Number(t >> qn & Gr) | 0, l: Number(t & Gr) | 0 };
}
function kf(t, e = !1) {
  let i = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: n, l: o } = wl(t[s], e);
    [i[s], r[s]] = [n, o];
  }
  return [i, r];
}
const Lf = (t, e) => BigInt(t >>> 0) << qn | BigInt(e >>> 0), qf = (t, e, i) => t >>> i, Mf = (t, e, i) => t << 32 - i | e >>> i, zf = (t, e, i) => t >>> i | e << 32 - i, Ff = (t, e, i) => t << 32 - i | e >>> i, Hf = (t, e, i) => t << 64 - i | e >>> i - 32, Vf = (t, e, i) => t >>> i - 32 | e << 64 - i, Kf = (t, e) => e, Wf = (t, e) => t, Gf = (t, e, i) => t << i | e >>> 32 - i, Yf = (t, e, i) => e << i | t >>> 32 - i, Jf = (t, e, i) => e << i - 32 | t >>> 64 - i, Zf = (t, e, i) => t << i - 32 | e >>> 64 - i;
function Qf(t, e, i, r) {
  const s = (e >>> 0) + (r >>> 0);
  return { h: t + i + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const Xf = (t, e, i) => (t >>> 0) + (e >>> 0) + (i >>> 0), eg = (t, e, i, r) => e + i + r + (t / 2 ** 32 | 0) | 0, tg = (t, e, i, r) => (t >>> 0) + (e >>> 0) + (i >>> 0) + (r >>> 0), ig = (t, e, i, r, s) => e + i + r + s + (t / 2 ** 32 | 0) | 0, rg = (t, e, i, r, s) => (t >>> 0) + (e >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0), sg = (t, e, i, r, s, n) => e + i + r + s + n + (t / 2 ** 32 | 0) | 0, H = { fromBig: wl, split: kf, toBig: Lf, shrSH: qf, shrSL: Mf, rotrSH: zf, rotrSL: Ff, rotrBH: Hf, rotrBL: Vf, rotr32H: Kf, rotr32L: Wf, rotlSH: Gf, rotlSL: Yf, rotlBH: Jf, rotlBL: Zf, add: Qf, add3L: Xf, add3H: eg, add4L: tg, add4H: ig, add5H: sg, add5L: rg }, [ng, og] = H.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))), Bt = new Uint32Array(80), Ut = new Uint32Array(80);
let ag = class extends Uf {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e, Al: i, Bh: r, Bl: s, Ch: n, Cl: o, Dh: a, Dl: c, Eh: h, El: l, Fh: u, Fl: d, Gh: f, Gl: p, Hh: g, Hl: y } = this;
    return [e, i, r, s, n, o, a, c, h, l, u, d, f, p, g, y];
  }
  set(e, i, r, s, n, o, a, c, h, l, u, d, f, p, g, y) {
    this.Ah = e | 0, this.Al = i | 0, this.Bh = r | 0, this.Bl = s | 0, this.Ch = n | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = h | 0, this.El = l | 0, this.Fh = u | 0, this.Fl = d | 0, this.Gh = f | 0, this.Gl = p | 0, this.Hh = g | 0, this.Hl = y | 0;
  }
  process(e, i) {
    for (let b = 0; b < 16; b++, i += 4) Bt[b] = e.getUint32(i), Ut[b] = e.getUint32(i += 4);
    for (let b = 16; b < 80; b++) {
      const E = Bt[b - 15] | 0, $ = Ut[b - 15] | 0, O = H.rotrSH(E, $, 1) ^ H.rotrSH(E, $, 8) ^ H.shrSH(E, $, 7), D = H.rotrSL(E, $, 1) ^ H.rotrSL(E, $, 8) ^ H.shrSL(E, $, 7), x = Bt[b - 2] | 0, I = Ut[b - 2] | 0, q = H.rotrSH(x, I, 19) ^ H.rotrBH(x, I, 61) ^ H.shrSH(x, I, 6), B = H.rotrSL(x, I, 19) ^ H.rotrBL(x, I, 61) ^ H.shrSL(x, I, 6), k = H.add4L(D, B, Ut[b - 7], Ut[b - 16]), M = H.add4H(k, O, q, Bt[b - 7], Bt[b - 16]);
      Bt[b] = M | 0, Ut[b] = k | 0;
    }
    let { Ah: r, Al: s, Bh: n, Bl: o, Ch: a, Cl: c, Dh: h, Dl: l, Eh: u, El: d, Fh: f, Fl: p, Gh: g, Gl: y, Hh: w, Hl: m } = this;
    for (let b = 0; b < 80; b++) {
      const E = H.rotrSH(u, d, 14) ^ H.rotrSH(u, d, 18) ^ H.rotrBH(u, d, 41), $ = H.rotrSL(u, d, 14) ^ H.rotrSL(u, d, 18) ^ H.rotrBL(u, d, 41), O = u & f ^ ~u & g, D = d & p ^ ~d & y, x = H.add5L(m, $, D, og[b], Ut[b]), I = H.add5H(x, w, E, O, ng[b], Bt[b]), q = x | 0, B = H.rotrSH(r, s, 28) ^ H.rotrBH(r, s, 34) ^ H.rotrBH(r, s, 39), k = H.rotrSL(r, s, 28) ^ H.rotrBL(r, s, 34) ^ H.rotrBL(r, s, 39), M = r & n ^ r & a ^ n & a, C = s & o ^ s & c ^ o & c;
      w = g | 0, m = y | 0, g = f | 0, y = p | 0, f = u | 0, p = d | 0, { h: u, l: d } = H.add(h | 0, l | 0, I | 0, q | 0), h = a | 0, l = c | 0, a = n | 0, c = o | 0, n = r | 0, o = s | 0;
      const _ = H.add3L(q, k, C);
      r = H.add3H(_, I, B, M), s = _ | 0;
    }
    ({ h: r, l: s } = H.add(this.Ah | 0, this.Al | 0, r | 0, s | 0)), { h: n, l: o } = H.add(this.Bh | 0, this.Bl | 0, n | 0, o | 0), { h: a, l: c } = H.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h, l } = H.add(this.Dh | 0, this.Dl | 0, h | 0, l | 0), { h: u, l: d } = H.add(this.Eh | 0, this.El | 0, u | 0, d | 0), { h: f, l: p } = H.add(this.Fh | 0, this.Fl | 0, f | 0, p | 0), { h: g, l: y } = H.add(this.Gh | 0, this.Gl | 0, g | 0, y | 0), { h: w, l: m } = H.add(this.Hh | 0, this.Hl | 0, w | 0, m | 0), this.set(r, s, n, o, a, c, h, l, u, d, f, p, g, y, w, m);
  }
  roundClean() {
    Bt.fill(0), Ut.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const cg = jf(() => new ag());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Oo = BigInt(0), bl = BigInt(1), hg = BigInt(2);
function Po(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function xo(t) {
  if (!Po(t)) throw new Error("Uint8Array expected");
}
function rn(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const lg = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Ao(t) {
  xo(t);
  let e = "";
  for (let i = 0; i < t.length; i++) e += lg[t[i]];
  return e;
}
function vl(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? Oo : BigInt("0x" + t);
}
const Dt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function $a(t) {
  if (t >= Dt._0 && t <= Dt._9) return t - Dt._0;
  if (t >= Dt.A && t <= Dt.F) return t - (Dt.A - 10);
  if (t >= Dt.a && t <= Dt.f) return t - (Dt.a - 10);
}
function El(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, i = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(i);
  for (let s = 0, n = 0; s < i; s++, n += 2) {
    const o = $a(t.charCodeAt(n)), a = $a(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    r[s] = o * 16 + a;
  }
  return r;
}
function ug(t) {
  return vl(Ao(t));
}
function ls(t) {
  return xo(t), vl(Ao(Uint8Array.from(t).reverse()));
}
function _l(t, e) {
  return El(t.toString(16).padStart(e * 2, "0"));
}
function Mn(t, e) {
  return _l(t, e).reverse();
}
function $t(t, e, i) {
  let r;
  if (typeof e == "string") try {
    r = El(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (Po(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const s = r.length;
  if (typeof i == "number" && s !== i) throw new Error(t + " of length " + i + " expected, got " + s);
  return r;
}
function Oa(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    xo(s), e += s.length;
  }
  const i = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const n = t[r];
    i.set(n, s), s += n.length;
  }
  return i;
}
const sn = (t) => typeof t == "bigint" && Oo <= t;
function dg(t, e, i) {
  return sn(t) && sn(e) && sn(i) && e <= t && t < i;
}
function lr(t, e, i, r) {
  if (!dg(e, i, r)) throw new Error("expected valid " + t + ": " + i + " <= n < " + r + ", got " + e);
}
function pg(t) {
  let e;
  for (e = 0; t > Oo; t >>= bl, e += 1) ;
  return e;
}
const fg = (t) => (hg << BigInt(t - 1)) - bl, gg = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || Po(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Co(t, e, i = {}) {
  const r = (s, n, o) => {
    const a = gg[n];
    if (typeof a != "function") throw new Error("invalid validator function");
    const c = t[s];
    if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(s) + " is invalid. Expected " + n + ", got " + c);
  };
  for (const [s, n] of Object.entries(e)) r(s, n, !1);
  for (const [s, n] of Object.entries(i)) r(s, n, !0);
  return t;
}
function Pa(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (i, ...r) => {
    const s = e.get(i);
    if (s !== void 0) return s;
    const n = t(i, ...r);
    return e.set(i, n), n;
  };
}
const be = BigInt(0), ce = BigInt(1), Xt = BigInt(2), yg = BigInt(3), zn = BigInt(4), xa = BigInt(5), Aa = BigInt(8);
function pe(t, e) {
  const i = t % e;
  return i >= be ? i : e + i;
}
function mg(t, e, i) {
  if (e < be) throw new Error("invalid exponent, negatives unsupported");
  if (i <= be) throw new Error("invalid modulus");
  if (i === ce) return be;
  let r = ce;
  for (; e > be; ) e & ce && (r = r * t % i), t = t * t % i, e >>= ce;
  return r;
}
function pt(t, e, i) {
  let r = t;
  for (; e-- > be; ) r *= r, r %= i;
  return r;
}
function Ca(t, e) {
  if (t === be) throw new Error("invert: expected non-zero number");
  if (e <= be) throw new Error("invert: expected positive modulus, got " + e);
  let i = pe(t, e), r = e, s = be, n = ce;
  for (; i !== be; ) {
    const o = r / i, a = r % i, c = s - n * o;
    r = i, i = a, s = n, n = c;
  }
  if (r !== ce) throw new Error("invert: does not exist");
  return pe(s, e);
}
function wg(t) {
  const e = (t - ce) / Xt;
  let i, r, s;
  for (i = t - ce, r = 0; i % Xt === be; i /= Xt, r++) ;
  for (s = Xt; s < t && mg(s, e, t) !== t - ce; s++) if (s > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r === 1) {
    const o = (t + ce) / zn;
    return function(a, c) {
      const h = a.pow(c, o);
      if (!a.eql(a.sqr(h), c)) throw new Error("Cannot find square root");
      return h;
    };
  }
  const n = (i + ce) / Xt;
  return function(o, a) {
    if (o.pow(a, e) === o.neg(o.ONE)) throw new Error("Cannot find square root");
    let c = r, h = o.pow(o.mul(o.ONE, s), i), l = o.pow(a, n), u = o.pow(a, i);
    for (; !o.eql(u, o.ONE); ) {
      if (o.eql(u, o.ZERO)) return o.ZERO;
      let d = 1;
      for (let p = o.sqr(u); d < c && !o.eql(p, o.ONE); d++) p = o.sqr(p);
      const f = o.pow(h, ce << BigInt(c - d - 1));
      h = o.sqr(f), l = o.mul(l, f), u = o.mul(u, h), c = d;
    }
    return l;
  };
}
function bg(t) {
  if (t % zn === yg) {
    const e = (t + ce) / zn;
    return function(i, r) {
      const s = i.pow(r, e);
      if (!i.eql(i.sqr(s), r)) throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Aa === xa) {
    const e = (t - xa) / Aa;
    return function(i, r) {
      const s = i.mul(r, Xt), n = i.pow(s, e), o = i.mul(r, n), a = i.mul(i.mul(o, Xt), n), c = i.mul(o, i.sub(a, i.ONE));
      if (!i.eql(i.sqr(c), r)) throw new Error("Cannot find square root");
      return c;
    };
  }
  return wg(t);
}
const vg = (t, e) => (pe(t, e) & ce) === ce, Eg = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function _g(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, i = Eg.reduce((r, s) => (r[s] = "function", r), e);
  return Co(t, i);
}
function Ig(t, e, i) {
  if (i < be) throw new Error("invalid exponent, negatives unsupported");
  if (i === be) return t.ONE;
  if (i === ce) return e;
  let r = t.ONE, s = e;
  for (; i > be; ) i & ce && (r = t.mul(r, s)), s = t.sqr(s), i >>= ce;
  return r;
}
function Sg(t, e) {
  const i = new Array(e.length), r = e.reduce((n, o, a) => t.is0(o) ? n : (i[a] = n, t.mul(n, o)), t.ONE), s = t.inv(r);
  return e.reduceRight((n, o, a) => t.is0(o) ? n : (i[a] = t.mul(n, i[a]), t.mul(n, o)), s), i;
}
function Il(t, e) {
  const i = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(i / 8);
  return { nBitLength: i, nByteLength: r };
}
function Sl(t, e, i = !1, r = {}) {
  if (t <= be) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: s, nByteLength: n } = Il(t, e);
  if (n > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const a = Object.freeze({ ORDER: t, isLE: i, BITS: s, BYTES: n, MASK: fg(s), ZERO: be, ONE: ce, create: (c) => pe(c, t), isValid: (c) => {
    if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
    return be <= c && c < t;
  }, is0: (c) => c === be, isOdd: (c) => (c & ce) === ce, neg: (c) => pe(-c, t), eql: (c, h) => c === h, sqr: (c) => pe(c * c, t), add: (c, h) => pe(c + h, t), sub: (c, h) => pe(c - h, t), mul: (c, h) => pe(c * h, t), pow: (c, h) => Ig(a, c, h), div: (c, h) => pe(c * Ca(h, t), t), sqrN: (c) => c * c, addN: (c, h) => c + h, subN: (c, h) => c - h, mulN: (c, h) => c * h, inv: (c) => Ca(c, t), sqrt: r.sqrt || ((c) => (o || (o = bg(t)), o(a, c))), invertBatch: (c) => Sg(a, c), cmov: (c, h, l) => l ? h : c, toBytes: (c) => i ? Mn(c, n) : _l(c, n), fromBytes: (c) => {
    if (c.length !== n) throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
    return i ? ls(c) : ug(c);
  } });
  return Object.freeze(a);
}
const Ta = BigInt(0), Yr = BigInt(1);
function nn(t, e) {
  const i = e.negate();
  return t ? i : e;
}
function Dl(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function on(t, e) {
  Dl(t, e);
  const i = Math.ceil(e / t) + 1, r = 2 ** (t - 1);
  return { windows: i, windowSize: r };
}
function Dg(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((i, r) => {
    if (!(i instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function $g(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((i, r) => {
    if (!e.isValid(i)) throw new Error("invalid scalar at index " + r);
  });
}
const an = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap();
function cn(t) {
  return $l.get(t) || 1;
}
function Og(t, e) {
  return { constTimeNegate: nn, hasPrecomputes(i) {
    return cn(i) !== 1;
  }, unsafeLadder(i, r, s = t.ZERO) {
    let n = i;
    for (; r > Ta; ) r & Yr && (s = s.add(n)), n = n.double(), r >>= Yr;
    return s;
  }, precomputeWindow(i, r) {
    const { windows: s, windowSize: n } = on(r, e), o = [];
    let a = i, c = a;
    for (let h = 0; h < s; h++) {
      c = a, o.push(c);
      for (let l = 1; l < n; l++) c = c.add(a), o.push(c);
      a = c.double();
    }
    return o;
  }, wNAF(i, r, s) {
    const { windows: n, windowSize: o } = on(i, e);
    let a = t.ZERO, c = t.BASE;
    const h = BigInt(2 ** i - 1), l = 2 ** i, u = BigInt(i);
    for (let d = 0; d < n; d++) {
      const f = d * o;
      let p = Number(s & h);
      s >>= u, p > o && (p -= l, s += Yr);
      const g = f, y = f + Math.abs(p) - 1, w = d % 2 !== 0, m = p < 0;
      p === 0 ? c = c.add(nn(w, r[g])) : a = a.add(nn(m, r[y]));
    }
    return { p: a, f: c };
  }, wNAFUnsafe(i, r, s, n = t.ZERO) {
    const { windows: o, windowSize: a } = on(i, e), c = BigInt(2 ** i - 1), h = 2 ** i, l = BigInt(i);
    for (let u = 0; u < o; u++) {
      const d = u * a;
      if (s === Ta) break;
      let f = Number(s & c);
      if (s >>= l, f > a && (f -= h, s += Yr), f === 0) continue;
      let p = r[d + Math.abs(f) - 1];
      f < 0 && (p = p.negate()), n = n.add(p);
    }
    return n;
  }, getPrecomputes(i, r, s) {
    let n = an.get(r);
    return n || (n = this.precomputeWindow(r, i), i !== 1 && an.set(r, s(n))), n;
  }, wNAFCached(i, r, s) {
    const n = cn(i);
    return this.wNAF(n, this.getPrecomputes(n, i, s), r);
  }, wNAFCachedUnsafe(i, r, s, n) {
    const o = cn(i);
    return o === 1 ? this.unsafeLadder(i, r, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, i, s), r, n);
  }, setWindowSize(i, r) {
    Dl(r, e), $l.set(i, r), an.delete(i);
  } };
}
function Pg(t, e, i, r) {
  if (Dg(i, t), $g(r, e), i.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
  const s = t.ZERO, n = pg(BigInt(i.length)), o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1, a = (1 << o) - 1, c = new Array(a + 1).fill(s), h = Math.floor((e.BITS - 1) / o) * o;
  let l = s;
  for (let u = h; u >= 0; u -= o) {
    c.fill(s);
    for (let f = 0; f < r.length; f++) {
      const p = r[f], g = Number(p >> BigInt(u) & BigInt(a));
      c[g] = c[g].add(i[f]);
    }
    let d = s;
    for (let f = c.length - 1, p = s; f > 0; f--) p = p.add(c[f]), d = d.add(p);
    if (l = l.add(d), u !== 0) for (let f = 0; f < o; f++) l = l.double();
  }
  return l;
}
function xg(t) {
  return _g(t.Fp), Co(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...Il(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
const nt = BigInt(0), je = BigInt(1), Jr = BigInt(2), Ag = BigInt(8), Cg = { zip215: !0 };
function Tg(t) {
  const e = xg(t);
  return Co(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e });
}
function Ng(t) {
  const e = Tg(t), { Fp: i, n: r, prehash: s, hash: n, randomBytes: o, nByteLength: a, h: c } = e, h = Jr << BigInt(a * 8) - je, l = i.create, u = Sl(e.n, e.nBitLength), d = e.uvRatio || ((_, v) => {
    try {
      return { isValid: !0, value: i.sqrt(_ * i.inv(v)) };
    } catch {
      return { isValid: !1, value: nt };
    }
  }), f = e.adjustScalarBytes || ((_) => _), p = e.domain || ((_, v, P) => {
    if (rn("phflag", P), v.length || P) throw new Error("Contexts/pre-hash are not supported");
    return _;
  });
  function g(_, v) {
    lr("coordinate " + _, v, nt, h);
  }
  function y(_) {
    if (!(_ instanceof b)) throw new Error("ExtendedPoint expected");
  }
  const w = Pa((_, v) => {
    const { ex: P, ey: A, ez: S } = _, R = _.is0();
    v == null && (v = R ? Ag : i.inv(S));
    const U = l(P * v), L = l(A * v), z = l(S * v);
    if (R) return { x: nt, y: je };
    if (z !== je) throw new Error("invZ was invalid");
    return { x: U, y: L };
  }), m = Pa((_) => {
    const { a: v, d: P } = e;
    if (_.is0()) throw new Error("bad point: ZERO");
    const { ex: A, ey: S, ez: R, et: U } = _, L = l(A * A), z = l(S * S), F = l(R * R), V = l(F * F), G = l(L * v), se = l(F * l(G + z)), ee = l(V + l(P * l(L * z)));
    if (se !== ee) throw new Error("bad point: equation left != right (1)");
    const Y = l(A * S), xe = l(R * U);
    if (Y !== xe) throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class b {
    constructor(v, P, A, S) {
      this.ex = v, this.ey = P, this.ez = A, this.et = S, g("x", v), g("y", P), g("z", A), g("t", S), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(v) {
      if (v instanceof b) throw new Error("extended point not allowed");
      const { x: P, y: A } = v || {};
      return g("x", P), g("y", A), new b(P, A, je, l(P * A));
    }
    static normalizeZ(v) {
      const P = i.invertBatch(v.map((A) => A.ez));
      return v.map((A, S) => A.toAffine(P[S])).map(b.fromAffine);
    }
    static msm(v, P) {
      return Pg(b, u, v, P);
    }
    _setWindowSize(v) {
      O.setWindowSize(this, v);
    }
    assertValidity() {
      m(this);
    }
    equals(v) {
      y(v);
      const { ex: P, ey: A, ez: S } = this, { ex: R, ey: U, ez: L } = v, z = l(P * L), F = l(R * S), V = l(A * L), G = l(U * S);
      return z === F && V === G;
    }
    is0() {
      return this.equals(b.ZERO);
    }
    negate() {
      return new b(l(-this.ex), this.ey, this.ez, l(-this.et));
    }
    double() {
      const { a: v } = e, { ex: P, ey: A, ez: S } = this, R = l(P * P), U = l(A * A), L = l(Jr * l(S * S)), z = l(v * R), F = P + A, V = l(l(F * F) - R - U), G = z + U, se = G - L, ee = z - U, Y = l(V * se), xe = l(G * ee), Ee = l(V * ee), Ce = l(se * G);
      return new b(Y, xe, Ce, Ee);
    }
    add(v) {
      y(v);
      const { a: P, d: A } = e, { ex: S, ey: R, ez: U, et: L } = this, { ex: z, ey: F, ez: V, et: G } = v;
      if (P === BigInt(-1)) {
        const Go = l((R - S) * (F + z)), Yo = l((R + S) * (F - z)), Gs = l(Yo - Go);
        if (Gs === nt) return this.double();
        const Jo = l(U * Jr * G), Zo = l(L * Jr * V), Qo = Zo + Jo, Xo = Yo + Go, ea = Zo - Jo, Pd = l(Qo * Gs), xd = l(Xo * ea), Ad = l(Qo * ea), Cd = l(Gs * Xo);
        return new b(Pd, xd, Cd, Ad);
      }
      const se = l(S * z), ee = l(R * F), Y = l(L * A * G), xe = l(U * V), Ee = l((S + R) * (z + F) - se - ee), Ce = xe - Y, Ye = xe + Y, Je = l(ee - P * se), wi = l(Ee * Ce), Dd = l(Ye * Je), $d = l(Ee * Je), Od = l(Ce * Ye);
      return new b(wi, Dd, Od, $d);
    }
    subtract(v) {
      return this.add(v.negate());
    }
    wNAF(v) {
      return O.wNAFCached(this, v, b.normalizeZ);
    }
    multiply(v) {
      const P = v;
      lr("scalar", P, je, r);
      const { p: A, f: S } = this.wNAF(P);
      return b.normalizeZ([A, S])[0];
    }
    multiplyUnsafe(v, P = b.ZERO) {
      const A = v;
      return lr("scalar", A, nt, r), A === nt ? $ : this.is0() || A === je ? this : O.wNAFCachedUnsafe(this, A, b.normalizeZ, P);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(c).is0();
    }
    isTorsionFree() {
      return O.unsafeLadder(this, r).is0();
    }
    toAffine(v) {
      return w(this, v);
    }
    clearCofactor() {
      const { h: v } = e;
      return v === je ? this : this.multiplyUnsafe(v);
    }
    static fromHex(v, P = !1) {
      const { d: A, a: S } = e, R = i.BYTES;
      v = $t("pointHex", v, R), rn("zip215", P);
      const U = v.slice(), L = v[R - 1];
      U[R - 1] = L & -129;
      const z = ls(U), F = P ? h : i.ORDER;
      lr("pointHex.y", z, nt, F);
      const V = l(z * z), G = l(V - je), se = l(A * V - S);
      let { isValid: ee, value: Y } = d(G, se);
      if (!ee) throw new Error("Point.fromHex: invalid y coordinate");
      const xe = (Y & je) === je, Ee = (L & 128) !== 0;
      if (!P && Y === nt && Ee) throw new Error("Point.fromHex: x=0 and x_0=1");
      return Ee !== xe && (Y = l(-Y)), b.fromAffine({ x: Y, y: z });
    }
    static fromPrivateKey(v) {
      return I(v).point;
    }
    toRawBytes() {
      const { x: v, y: P } = this.toAffine(), A = Mn(P, i.BYTES);
      return A[A.length - 1] |= v & je ? 128 : 0, A;
    }
    toHex() {
      return Ao(this.toRawBytes());
    }
  }
  b.BASE = new b(e.Gx, e.Gy, je, l(e.Gx * e.Gy)), b.ZERO = new b(nt, je, je, nt);
  const { BASE: E, ZERO: $ } = b, O = Og(b, a * 8);
  function D(_) {
    return pe(_, r);
  }
  function x(_) {
    return D(ls(_));
  }
  function I(_) {
    const v = i.BYTES;
    _ = $t("private key", _, v);
    const P = $t("hashed private key", n(_), 2 * v), A = f(P.slice(0, v)), S = P.slice(v, 2 * v), R = x(A), U = E.multiply(R), L = U.toRawBytes();
    return { head: A, prefix: S, scalar: R, point: U, pointBytes: L };
  }
  function q(_) {
    return I(_).pointBytes;
  }
  function B(_ = new Uint8Array(), ...v) {
    const P = Oa(...v);
    return x(n(p(P, $t("context", _), !!s)));
  }
  function k(_, v, P = {}) {
    _ = $t("message", _), s && (_ = s(_));
    const { prefix: A, scalar: S, pointBytes: R } = I(v), U = B(P.context, A, _), L = E.multiply(U).toRawBytes(), z = B(P.context, L, R, _), F = D(U + z * S);
    lr("signature.s", F, nt, r);
    const V = Oa(L, Mn(F, i.BYTES));
    return $t("result", V, i.BYTES * 2);
  }
  const M = Cg;
  function C(_, v, P, A = M) {
    const { context: S, zip215: R } = A, U = i.BYTES;
    _ = $t("signature", _, 2 * U), v = $t("message", v), P = $t("publicKey", P, U), R !== void 0 && rn("zip215", R), s && (v = s(v));
    const L = ls(_.slice(U, 2 * U));
    let z, F, V;
    try {
      z = b.fromHex(P, R), F = b.fromHex(_.slice(0, U), R), V = E.multiplyUnsafe(L);
    } catch {
      return !1;
    }
    if (!R && z.isSmallOrder()) return !1;
    const G = B(S, F.toRawBytes(), z.toRawBytes(), v);
    return F.add(z.multiplyUnsafe(G)).subtract(V).clearCofactor().equals(b.ZERO);
  }
  return E._setWindowSize(8), { CURVE: e, getPublicKey: q, sign: k, verify: C, ExtendedPoint: b, utils: { getExtendedPublicKey: I, randomPrivateKey: () => o(i.BYTES), precompute(_ = 8, v = b.BASE) {
    return v._setWindowSize(_), v.multiply(BigInt(3)), v;
  } } };
}
BigInt(0), BigInt(1);
const To = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Na = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const Rg = BigInt(1), Ra = BigInt(2);
BigInt(3);
const jg = BigInt(5), Bg = BigInt(8);
function Ug(t) {
  const e = BigInt(10), i = BigInt(20), r = BigInt(40), s = BigInt(80), n = To, o = t * t % n * t % n, a = pt(o, Ra, n) * o % n, c = pt(a, Rg, n) * t % n, h = pt(c, jg, n) * c % n, l = pt(h, e, n) * h % n, u = pt(l, i, n) * l % n, d = pt(u, r, n) * u % n, f = pt(d, s, n) * d % n, p = pt(f, s, n) * d % n, g = pt(p, e, n) * h % n;
  return { pow_p_5_8: pt(g, Ra, n) * t % n, b2: o };
}
function kg(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function Lg(t, e) {
  const i = To, r = pe(e * e * e, i), s = pe(r * r * e, i), n = Ug(t * s).pow_p_5_8;
  let o = pe(t * r * n, i);
  const a = pe(e * o * o, i), c = o, h = pe(o * Na, i), l = a === t, u = a === pe(-t, i), d = a === pe(-t * Na, i);
  return l && (o = c), (u || d) && (o = h), vg(o, i) && (o = pe(-o, i)), { isValid: l || u, value: o };
}
const qg = Sl(To, void 0, !0), Mg = { a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: qg, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Bg, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: cg, randomBytes: ml, adjustScalarBytes: kg, uvRatio: Lg }, Ol = Ng(Mg), zg = "EdDSA", Fg = "JWT", ws = ".", As = "base64url", Pl = "utf8", xl = "utf8", Hg = ":", Vg = "did", Kg = "key", ja = "base58btc", Wg = "z", Gg = "K36", Yg = 32;
function No(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Al(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? No(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Cl(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const i = Al(e);
  let r = 0;
  for (const s of t) i.set(s, r), r += s.length;
  return No(i);
}
function Jg(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (i[o] !== 255) throw new TypeError(n + " is ambiguous");
    i[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
  function u(p) {
    if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (p.length === 0) return "";
    for (var g = 0, y = 0, w = 0, m = p.length; w !== m && p[w] === 0; ) w++, g++;
    for (var b = (m - w) * l + 1 >>> 0, E = new Uint8Array(b); w !== m; ) {
      for (var $ = p[w], O = 0, D = b - 1; ($ !== 0 || O < y) && D !== -1; D--, O++) $ += 256 * E[D] >>> 0, E[D] = $ % a >>> 0, $ = $ / a >>> 0;
      if ($ !== 0) throw new Error("Non-zero carry");
      y = O, w++;
    }
    for (var x = b - y; x !== b && E[x] === 0; ) x++;
    for (var I = c.repeat(g); x < b; ++x) I += t.charAt(E[x]);
    return I;
  }
  function d(p) {
    if (typeof p != "string") throw new TypeError("Expected String");
    if (p.length === 0) return new Uint8Array();
    var g = 0;
    if (p[g] !== " ") {
      for (var y = 0, w = 0; p[g] === c; ) y++, g++;
      for (var m = (p.length - g) * h + 1 >>> 0, b = new Uint8Array(m); p[g]; ) {
        var E = i[p.charCodeAt(g)];
        if (E === 255) return;
        for (var $ = 0, O = m - 1; (E !== 0 || $ < w) && O !== -1; O--, $++) E += a * b[O] >>> 0, b[O] = E % 256 >>> 0, E = E / 256 >>> 0;
        if (E !== 0) throw new Error("Non-zero carry");
        w = $, g++;
      }
      if (p[g] !== " ") {
        for (var D = m - w; D !== m && b[D] === 0; ) D++;
        for (var x = new Uint8Array(y + (m - D)), I = y; D !== m; ) x[I++] = b[D++];
        return x;
      }
    }
  }
  function f(p) {
    var g = d(p);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: u, decodeUnsafe: d, decode: f };
}
var Zg = Jg, Qg = Zg;
const Tl = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Xg = (t) => new TextEncoder().encode(t), ey = (t) => new TextDecoder().decode(t);
let ty = class {
  constructor(e, i, r) {
    this.name = e, this.prefix = i, this.baseEncode = r;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}, iy = class {
  constructor(e, i, r) {
    if (this.name = e, this.prefix = i, i.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = i.codePointAt(0), this.baseDecode = r;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Nl(this, e);
  }
}, ry = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Nl(this, e);
  }
  decode(e) {
    const i = e[0], r = this.decoders[i];
    if (r) return r.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const Nl = (t, e) => new ry({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
let sy = class {
  constructor(e, i, r, s) {
    this.name = e, this.prefix = i, this.baseEncode = r, this.baseDecode = s, this.encoder = new ty(e, i, r), this.decoder = new iy(e, i, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
const Cs = ({ name: t, prefix: e, encode: i, decode: r }) => new sy(t, e, i, r), Br = ({ prefix: t, name: e, alphabet: i }) => {
  const { encode: r, decode: s } = Qg(i, e);
  return Cs({ prefix: t, name: e, encode: r, decode: (n) => Tl(s(n)) });
}, ny = (t, e, i, r) => {
  const s = {};
  for (let l = 0; l < e.length; ++l) s[e[l]] = l;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * i / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let l = 0; l < n; ++l) {
    const u = s[t[l]];
    if (u === void 0) throw new SyntaxError(`Non-${r} character`);
    c = c << i | u, a += i, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= i || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, oy = (t, e, i) => {
  const r = e[e.length - 1] === "=", s = (1 << i) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > i; ) o -= i, n += e[s & a >> o];
  if (o && (n += e[s & a << i - o]), r) for (; n.length * i & 7; ) n += "=";
  return n;
}, $e = ({ name: t, prefix: e, bitsPerChar: i, alphabet: r }) => Cs({ prefix: e, name: t, encode(s) {
  return oy(s, r, i);
}, decode(s) {
  return ny(s, r, i, t);
} }), ay = Cs({ prefix: "\0", name: "identity", encode: (t) => ey(t), decode: (t) => Xg(t) });
var cy = Object.freeze({ __proto__: null, identity: ay });
const hy = $e({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var ly = Object.freeze({ __proto__: null, base2: hy });
const uy = $e({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var dy = Object.freeze({ __proto__: null, base8: uy });
const py = Br({ prefix: "9", name: "base10", alphabet: "0123456789" });
var fy = Object.freeze({ __proto__: null, base10: py });
const gy = $e({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yy = $e({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var my = Object.freeze({ __proto__: null, base16: gy, base16upper: yy });
const wy = $e({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), by = $e({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), vy = $e({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Ey = $e({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), _y = $e({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Iy = $e({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Sy = $e({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Dy = $e({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), $y = $e({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Oy = Object.freeze({ __proto__: null, base32: wy, base32upper: by, base32pad: vy, base32padupper: Ey, base32hex: _y, base32hexupper: Iy, base32hexpad: Sy, base32hexpadupper: Dy, base32z: $y });
const Py = Br({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), xy = Br({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ay = Object.freeze({ __proto__: null, base36: Py, base36upper: xy });
const Cy = Br({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Ty = Br({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Ny = Object.freeze({ __proto__: null, base58btc: Cy, base58flickr: Ty });
const Ry = $e({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), jy = $e({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), By = $e({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Uy = $e({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var ky = Object.freeze({ __proto__: null, base64: Ry, base64pad: jy, base64url: By, base64urlpad: Uy });
const Rl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ly = Rl.reduce((t, e, i) => (t[i] = e, t), []), qy = Rl.reduce((t, e, i) => (t[e.codePointAt(0)] = i, t), []);
function My(t) {
  return t.reduce((e, i) => (e += Ly[i], e), "");
}
function zy(t) {
  const e = [];
  for (const i of t) {
    const r = qy[i.codePointAt(0)];
    if (r === void 0) throw new Error(`Non-base256emoji character: ${i}`);
    e.push(r);
  }
  return new Uint8Array(e);
}
const Fy = Cs({ prefix: "🚀", name: "base256emoji", encode: My, decode: zy });
var Hy = Object.freeze({ __proto__: null, base256emoji: Fy }), Vy = jl, Ba = 128, Ky = -128, Wy = Math.pow(2, 31);
function jl(t, e, i) {
  e = e || [], i = i || 0;
  for (var r = i; t >= Wy; ) e[i++] = t & 255 | Ba, t /= 128;
  for (; t & Ky; ) e[i++] = t & 255 | Ba, t >>>= 7;
  return e[i] = t | 0, jl.bytes = i - r + 1, e;
}
var Gy = Fn, Yy = 128, Ua = 127;
function Fn(t, r) {
  var i = 0, r = r || 0, s = 0, n = r, o, a = t.length;
  do {
    if (n >= a) throw Fn.bytes = 0, new RangeError("Could not decode varint");
    o = t[n++], i += s < 28 ? (o & Ua) << s : (o & Ua) * Math.pow(2, s), s += 7;
  } while (o >= Yy);
  return Fn.bytes = n - r, i;
}
var Jy = Math.pow(2, 7), Zy = Math.pow(2, 14), Qy = Math.pow(2, 21), Xy = Math.pow(2, 28), em = Math.pow(2, 35), tm = Math.pow(2, 42), im = Math.pow(2, 49), rm = Math.pow(2, 56), sm = Math.pow(2, 63), nm = function(t) {
  return t < Jy ? 1 : t < Zy ? 2 : t < Qy ? 3 : t < Xy ? 4 : t < em ? 5 : t < tm ? 6 : t < im ? 7 : t < rm ? 8 : t < sm ? 9 : 10;
}, om = { encode: Vy, decode: Gy, encodingLength: nm }, Bl = om;
const ka = (t, e, i = 0) => (Bl.encode(t, e, i), e), La = (t) => Bl.encodingLength(t), Hn = (t, e) => {
  const i = e.byteLength, r = La(t), s = r + La(i), n = new Uint8Array(s + i);
  return ka(t, n, 0), ka(i, n, r), n.set(e, s), new am(t, i, e, n);
};
let am = class {
  constructor(e, i, r, s) {
    this.code = e, this.size = i, this.digest = r, this.bytes = s;
  }
};
const Ul = ({ name: t, code: e, encode: i }) => new cm(t, e, i);
let cm = class {
  constructor(e, i, r) {
    this.name = e, this.code = i, this.encode = r;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const i = this.encode(e);
      return i instanceof Uint8Array ? Hn(this.code, i) : i.then((r) => Hn(this.code, r));
    } else throw Error("Unknown type, must be binary type");
  }
};
const kl = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), hm = Ul({ name: "sha2-256", code: 18, encode: kl("SHA-256") }), lm = Ul({ name: "sha2-512", code: 19, encode: kl("SHA-512") });
var um = Object.freeze({ __proto__: null, sha256: hm, sha512: lm });
const Ll = 0, dm = "identity", ql = Tl, pm = (t) => Hn(Ll, ql(t)), fm = { code: Ll, name: dm, encode: ql, digest: pm };
var gm = Object.freeze({ __proto__: null, identity: fm });
new TextEncoder(), new TextDecoder();
const qa = { ...cy, ...ly, ...dy, ...fy, ...my, ...Oy, ...Ay, ...Ny, ...ky, ...Hy };
({ ...um, ...gm });
function Ml(t, e, i, r) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: i }, decoder: { decode: r } };
}
const Ma = Ml("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), hn = Ml("ascii", "a", (t) => {
  let e = "a";
  for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Al(t.length);
  for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
  return e;
}), zl = { utf8: Ma, "utf-8": Ma, hex: qa.base16, latin1: hn, ascii: hn, binary: hn, ...qa };
function Ts(t, e = "utf8") {
  const i = zl[e];
  if (!i) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : i.encoder.encode(t).substring(1);
}
function tr(t, e = "utf8") {
  const i = zl[e];
  if (!i) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? No(globalThis.Buffer.from(t, "utf-8")) : i.decoder.decode(`${i.prefix}${t}`);
}
function za(t) {
  return ci(Ts(tr(t, As), Pl));
}
function bs(t) {
  return Ts(tr(jt(t), Pl), As);
}
function Fl(t) {
  const e = tr(Gg, ja), i = Wg + Ts(Cl([e, t]), ja);
  return [Vg, Kg, i].join(Hg);
}
function ym(t) {
  return Ts(t, As);
}
function mm(t) {
  return tr(t, As);
}
function wm(t) {
  return tr([bs(t.header), bs(t.payload)].join(ws), xl);
}
function bm(t) {
  return [bs(t.header), bs(t.payload), ym(t.signature)].join(ws);
}
function Vn(t) {
  const e = t.split(ws), i = za(e[0]), r = za(e[1]), s = mm(e[2]), n = tr(e.slice(0, 2).join(ws), xl);
  return { header: i, payload: r, signature: s, data: n };
}
function Fa(t = ml(Yg)) {
  const e = Ol.getPublicKey(t);
  return { secretKey: Cl([t, e]), publicKey: e };
}
async function vm(t, e, i, r, s = N.fromMiliseconds(Date.now())) {
  const n = { alg: zg, typ: Fg }, o = Fl(r.publicKey), a = s + i, c = { iss: o, sub: t, aud: e, iat: s, exp: a }, h = wm({ header: n, payload: c }), l = Ol.sign(h, r.secretKey.slice(0, 32));
  return bm({ header: n, payload: c, signature: l });
}
function Hl(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t);
}
function vr(t, e) {
  e || (e = t.reduce((s, n) => s + n.length, 0));
  const i = Hl(e);
  let r = 0;
  for (const s of t)
    i.set(s, r), r += s.length;
  return i;
}
function Em(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
    i[r] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (i[o] !== 255)
      throw new TypeError(n + " is ambiguous");
    i[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
  function u(p) {
    if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (p.length === 0)
      return "";
    for (var g = 0, y = 0, w = 0, m = p.length; w !== m && p[w] === 0; )
      w++, g++;
    for (var b = (m - w) * l + 1 >>> 0, E = new Uint8Array(b); w !== m; ) {
      for (var $ = p[w], O = 0, D = b - 1; ($ !== 0 || O < y) && D !== -1; D--, O++)
        $ += 256 * E[D] >>> 0, E[D] = $ % a >>> 0, $ = $ / a >>> 0;
      if ($ !== 0)
        throw new Error("Non-zero carry");
      y = O, w++;
    }
    for (var x = b - y; x !== b && E[x] === 0; )
      x++;
    for (var I = c.repeat(g); x < b; ++x)
      I += t.charAt(E[x]);
    return I;
  }
  function d(p) {
    if (typeof p != "string")
      throw new TypeError("Expected String");
    if (p.length === 0)
      return new Uint8Array();
    var g = 0;
    if (p[g] !== " ") {
      for (var y = 0, w = 0; p[g] === c; )
        y++, g++;
      for (var m = (p.length - g) * h + 1 >>> 0, b = new Uint8Array(m); p[g]; ) {
        var E = i[p.charCodeAt(g)];
        if (E === 255)
          return;
        for (var $ = 0, O = m - 1; (E !== 0 || $ < w) && O !== -1; O--, $++)
          E += a * b[O] >>> 0, b[O] = E % 256 >>> 0, E = E / 256 >>> 0;
        if (E !== 0)
          throw new Error("Non-zero carry");
        w = $, g++;
      }
      if (p[g] !== " ") {
        for (var D = m - w; D !== m && b[D] === 0; )
          D++;
        for (var x = new Uint8Array(y + (m - D)), I = y; D !== m; )
          x[I++] = b[D++];
        return x;
      }
    }
  }
  function f(p) {
    var g = d(p);
    if (g)
      return g;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: u,
    decodeUnsafe: d,
    decode: f
  };
}
var _m = Em, Im = _m;
const Sm = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Dm = (t) => new TextEncoder().encode(t), $m = (t) => new TextDecoder().decode(t);
class Om {
  constructor(e, i, r) {
    this.name = e, this.prefix = i, this.baseEncode = r;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Pm {
  constructor(e, i, r) {
    if (this.name = e, this.prefix = i, i.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = i.codePointAt(0), this.baseDecode = r;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Vl(this, e);
  }
}
class xm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Vl(this, e);
  }
  decode(e) {
    const i = e[0], r = this.decoders[i];
    if (r)
      return r.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Vl = (t, e) => new xm({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Am {
  constructor(e, i, r, s) {
    this.name = e, this.prefix = i, this.baseEncode = r, this.baseDecode = s, this.encoder = new Om(e, i, r), this.decoder = new Pm(e, i, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ns = ({ name: t, prefix: e, encode: i, decode: r }) => new Am(t, e, i, r), Ur = ({ prefix: t, name: e, alphabet: i }) => {
  const { encode: r, decode: s } = Im(i, e);
  return Ns({
    prefix: t,
    name: e,
    encode: r,
    decode: (n) => Sm(s(n))
  });
}, Cm = (t, e, i, r) => {
  const s = {};
  for (let l = 0; l < e.length; ++l)
    s[e[l]] = l;
  let n = t.length;
  for (; t[n - 1] === "="; )
    --n;
  const o = new Uint8Array(n * i / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let l = 0; l < n; ++l) {
    const u = s[t[l]];
    if (u === void 0)
      throw new SyntaxError(`Non-${r} character`);
    c = c << i | u, a += i, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= i || 255 & c << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Tm = (t, e, i) => {
  const r = e[e.length - 1] === "=", s = (1 << i) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c)
    for (a = a << 8 | t[c], o += 8; o > i; )
      o -= i, n += e[s & a >> o];
  if (o && (n += e[s & a << i - o]), r)
    for (; n.length * i & 7; )
      n += "=";
  return n;
}, Oe = ({ name: t, prefix: e, bitsPerChar: i, alphabet: r }) => Ns({
  prefix: e,
  name: t,
  encode(s) {
    return Tm(s, r, i);
  },
  decode(s) {
    return Cm(s, r, i, t);
  }
}), Nm = Ns({
  prefix: "\0",
  name: "identity",
  encode: (t) => $m(t),
  decode: (t) => Dm(t)
}), Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Nm
}, Symbol.toStringTag, { value: "Module" })), jm = Oe({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: jm
}, Symbol.toStringTag, { value: "Module" })), Um = Oe({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Um
}, Symbol.toStringTag, { value: "Module" })), Lm = Ur({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Lm
}, Symbol.toStringTag, { value: "Module" })), Mm = Oe({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), zm = Oe({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Mm,
  base16upper: zm
}, Symbol.toStringTag, { value: "Module" })), Hm = Oe({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Vm = Oe({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Km = Oe({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Wm = Oe({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Gm = Oe({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Ym = Oe({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Jm = Oe({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Zm = Oe({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Qm = Oe({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Hm,
  base32hex: Gm,
  base32hexpad: Jm,
  base32hexpadupper: Zm,
  base32hexupper: Ym,
  base32pad: Km,
  base32padupper: Wm,
  base32upper: Vm,
  base32z: Qm
}, Symbol.toStringTag, { value: "Module" })), ew = Ur({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), tw = Ur({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: ew,
  base36upper: tw
}, Symbol.toStringTag, { value: "Module" })), rw = Ur({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), sw = Ur({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), nw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: rw,
  base58flickr: sw
}, Symbol.toStringTag, { value: "Module" })), ow = Oe({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), aw = Oe({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), cw = Oe({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), hw = Oe({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), lw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: ow,
  base64pad: aw,
  base64url: cw,
  base64urlpad: hw
}, Symbol.toStringTag, { value: "Module" })), Kl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), uw = Kl.reduce((t, e, i) => (t[i] = e, t), []), dw = Kl.reduce((t, e, i) => (t[e.codePointAt(0)] = i, t), []);
function pw(t) {
  return t.reduce((e, i) => (e += uw[i], e), "");
}
function fw(t) {
  const e = [];
  for (const i of t) {
    const r = dw[i.codePointAt(0)];
    if (r === void 0)
      throw new Error(`Non-base256emoji character: ${i}`);
    e.push(r);
  }
  return new Uint8Array(e);
}
const gw = Ns({
  prefix: "🚀",
  name: "base256emoji",
  encode: pw,
  decode: fw
}), yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: gw
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Ha = {
  ...Rm,
  ...Bm,
  ...km,
  ...qm,
  ...Fm,
  ...Xm,
  ...iw,
  ...nw,
  ...lw,
  ...yw
};
function Wl(t, e, i, r) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: i
    },
    decoder: { decode: r }
  };
}
const Va = Wl("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), ln = Wl("ascii", "a", (t) => {
  let e = "a";
  for (let i = 0; i < t.length; i++)
    e += String.fromCharCode(t[i]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Hl(t.length);
  for (let i = 0; i < t.length; i++)
    e[i] = t.charCodeAt(i);
  return e;
}), Gl = {
  utf8: Va,
  "utf-8": Va,
  hex: Ha.base16,
  latin1: ln,
  ascii: ln,
  binary: ln,
  ...Ha
};
function tt(t, e = "utf8") {
  const i = Gl[e];
  if (!i)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : i.decoder.decode(`${i.prefix}${t}`);
}
function qe(t, e = "utf8") {
  const i = Gl[e];
  if (!i)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : i.encoder.encode(t).substring(1);
}
const mw = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } }, ww = ":";
function Hi(t) {
  const [e, i] = t.split(ww);
  return { namespace: e, reference: i };
}
function Ka(t, e = []) {
  const i = [];
  return Object.keys(t).forEach((r) => {
    if (e.length && !e.includes(r)) return;
    const s = t[r];
    i.push(...s.accounts);
  }), i;
}
function Yl(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
var bw = Object.defineProperty, vw = Object.defineProperties, Ew = Object.getOwnPropertyDescriptors, Wa = Object.getOwnPropertySymbols, _w = Object.prototype.hasOwnProperty, Iw = Object.prototype.propertyIsEnumerable, Ga = (t, e, i) => e in t ? bw(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ya = (t, e) => {
  for (var i in e || (e = {})) _w.call(e, i) && Ga(t, i, e[i]);
  if (Wa) for (var i of Wa(e)) Iw.call(e, i) && Ga(t, i, e[i]);
  return t;
}, Sw = (t, e) => vw(t, Ew(e));
const Dw = "ReactNative", We = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, $w = "js";
function vs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Kt() {
  return !oi() && !!So() && navigator.product === Dw;
}
function Ow() {
  return Kt() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
}
function Pw() {
  return Kt() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
}
function ir() {
  return !vs() && !!So() && !!oi();
}
function kr() {
  return Kt() ? We.reactNative : vs() ? We.node : ir() ? We.browser : We.unknown;
}
function Ja() {
  var t;
  try {
    return Kt() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function xw(t, e) {
  const i = new URLSearchParams(t);
  for (const r of Object.keys(e).sort()) if (e.hasOwnProperty(r)) {
    const s = e[r];
    s !== void 0 && i.set(r, s);
  }
  return i.toString();
}
function Aw(t) {
  var e, i;
  const r = Jl();
  try {
    return t != null && t.url && r.url && new URL(t.url).host !== new URL(r.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`), t.url = r.url), (e = t == null ? void 0 : t.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((s) => s !== "")), Sw(Ya(Ya({}, r), t), { url: (t == null ? void 0 : t.url) || r.url, name: (t == null ? void 0 : t.name) || r.name, description: (t == null ? void 0 : t.description) || r.description, icons: (i = t == null ? void 0 : t.icons) != null && i.length && t.icons.length > 0 ? t.icons : r.icons });
  } catch (s) {
    return console.warn("Error populating app metadata", s), t || r;
  }
}
function Jl() {
  return il() || { name: "", description: "", url: "", icons: [""] };
}
function Cw() {
  if (kr() === We.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
    const { OS: i, Version: r } = globalThis.Platform;
    return [i, r].join("-");
  }
  const t = Wd();
  if (t === null) return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function Tw() {
  var t;
  const e = kr();
  return e === We.browser ? [e, ((t = tl()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Zl(t, e, i) {
  const r = Cw(), s = Tw();
  return [[t, e].join("-"), [$w, i].join("-"), r, s].join("/");
}
function Nw({ protocol: t, version: e, relayUrl: i, sdkVersion: r, auth: s, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c }) {
  const h = i.split("?"), l = Zl(t, e, r), u = { auth: s, ua: l, projectId: n, useOnCloseEvent: o, packageName: c || void 0, bundleId: a || void 0 }, d = xw(h[1] || "", u);
  return h[0] + "?" + d;
}
function ri(t, e) {
  return t.filter((i) => e.includes(i)).length === t.length;
}
function Kn(t) {
  return Object.fromEntries(t.entries());
}
function Wn(t) {
  return new Map(Object.entries(t));
}
function Zt(t = N.FIVE_MINUTES, e) {
  const i = N.toMiliseconds(t || N.FIVE_MINUTES);
  let r, s, n, o;
  return { resolve: (a) => {
    n && r && (clearTimeout(n), r(a), o = Promise.resolve(a));
  }, reject: (a) => {
    n && s && (clearTimeout(n), s(a));
  }, done: () => new Promise((a, c) => {
    if (o) return a(o);
    n = setTimeout(() => {
      const h = new Error(e);
      o = Promise.reject(h), c(h);
    }, i), r = a, s = c;
  }) };
}
function zt(t, e, i) {
  return new Promise(async (r, s) => {
    const n = setTimeout(() => s(new Error(i)), e);
    try {
      const o = await t;
      r(o);
    } catch (o) {
      s(o);
    }
    clearTimeout(n);
  });
}
function Ql(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function Rw(t) {
  return Ql("topic", t);
}
function jw(t) {
  return Ql("id", t);
}
function Xl(t) {
  const [e, i] = t.split(":"), r = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof i == "string") r.topic = i;
  else if (e === "id" && Number.isInteger(Number(i))) r.id = Number(i);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${i}`);
  return r;
}
function de(t, e) {
  return N.fromMiliseconds(Date.now() + N.toMiliseconds(t));
}
function qt(t) {
  return Date.now() >= N.toMiliseconds(t);
}
function X(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
function Et(t = [], e = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Bw({ id: t, topic: e, wcDeepLink: i }) {
  var r;
  try {
    if (!i) return;
    const s = typeof i == "string" ? JSON.parse(i) : i, n = s == null ? void 0 : s.href;
    if (typeof n != "string") return;
    const o = Uw(n, t, e), a = kr();
    if (a === We.browser) {
      if (!((r = oi()) != null && r.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      kw(o);
    } else a === We.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(o);
  } catch (s) {
    console.error(s);
  }
}
function Uw(t, e, i) {
  const r = `requestId=${e}&sessionTopic=${i}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let s = `${t}`;
  if (t.startsWith("https://t.me")) {
    const n = t.includes("?") ? "&startapp=" : "?startapp=";
    s = `${s}${n}${zw(r, !0)}`;
  } else s = `${s}/wc?${r}`;
  return s;
}
function kw(t) {
  let e = "_self";
  Mw() ? e = "_top" : (qw() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function Lw(t, e) {
  let i = "";
  try {
    if (ir() && (i = localStorage.getItem(e), i)) return i;
    i = await t.getItem(e);
  } catch (r) {
    console.error(r);
  }
  return i;
}
function Za(t, e) {
  if (!t.includes(e)) return null;
  const i = t.split(/([&,?,=])/), r = i.indexOf(e);
  return i[r + 2];
}
function Qa() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Ro() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function qw() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Mw() {
  try {
    return window.self !== window.top;
  } catch {
    return !1;
  }
}
function zw(t, e = !1) {
  const i = Buffer.from(t).toString("base64");
  return e ? i.replace(/[=]/g, "") : i;
}
function eu(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function Fw(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Or(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Hw(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Lr(t, ...e) {
  if (!Hw(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function jo(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Or(t.outputLen), Or(t.blockLen);
}
function Vi(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function tu(t, e) {
  Lr(t);
  const i = e.outputLen;
  if (t.length < i) throw new Error("digestInto() expects output buffer of length at least " + i);
}
const Zr = BigInt(2 ** 32 - 1), Xa = BigInt(32);
function Vw(t, e = !1) {
  return e ? { h: Number(t & Zr), l: Number(t >> Xa & Zr) } : { h: Number(t >> Xa & Zr) | 0, l: Number(t & Zr) | 0 };
}
function Kw(t, e = !1) {
  let i = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: n, l: o } = Vw(t[s], e);
    [i[s], r[s]] = [n, o];
  }
  return [i, r];
}
const Ww = (t, e, i) => t << i | e >>> 32 - i, Gw = (t, e, i) => e << i | t >>> 32 - i, Yw = (t, e, i) => e << i - 32 | t >>> 64 - i, Jw = (t, e, i) => t << i - 32 | e >>> 64 - i, _i = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function Zw(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function un(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function ft(t, e) {
  return t << 32 - e | t >>> e;
}
const ec = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Qw(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function tc(t) {
  for (let e = 0; e < t.length; e++) t[e] = Qw(t[e]);
}
function Xw(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ki(t) {
  return typeof t == "string" && (t = Xw(t)), Lr(t), t;
}
function eb(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    Lr(s), e += s.length;
  }
  const i = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const n = t[r];
    i.set(n, s), s += n.length;
  }
  return i;
}
let Bo = class {
  clone() {
    return this._cloneInto();
  }
};
function iu(t) {
  const e = (r) => t().update(Ki(r)).digest(), i = t();
  return e.outputLen = i.outputLen, e.blockLen = i.blockLen, e.create = () => t(), e;
}
function rr(t = 32) {
  if (_i && typeof _i.getRandomValues == "function") return _i.getRandomValues(new Uint8Array(t));
  if (_i && typeof _i.randomBytes == "function") return _i.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const ru = [], su = [], nu = [], tb = BigInt(0), ur = BigInt(1), ib = BigInt(2), rb = BigInt(7), sb = BigInt(256), nb = BigInt(113);
for (let t = 0, e = ur, i = 1, r = 0; t < 24; t++) {
  [i, r] = [r, (2 * i + 3 * r) % 5], ru.push(2 * (5 * r + i)), su.push((t + 1) * (t + 2) / 2 % 64);
  let s = tb;
  for (let n = 0; n < 7; n++) e = (e << ur ^ (e >> rb) * nb) % sb, e & ib && (s ^= ur << (ur << BigInt(n)) - ur);
  nu.push(s);
}
const [ob, ab] = Kw(nu, !0), ic = (t, e, i) => i > 32 ? Yw(t, e, i) : Ww(t, e, i), rc = (t, e, i) => i > 32 ? Jw(t, e, i) : Gw(t, e, i);
function cb(t, e = 24) {
  const i = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++) i[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, h = i[c], l = i[c + 1], u = ic(h, l, 1) ^ i[a], d = rc(h, l, 1) ^ i[a + 1];
      for (let f = 0; f < 50; f += 10) t[o + f] ^= u, t[o + f + 1] ^= d;
    }
    let s = t[2], n = t[3];
    for (let o = 0; o < 24; o++) {
      const a = su[o], c = ic(s, n, a), h = rc(s, n, a), l = ru[o];
      s = t[l], n = t[l + 1], t[l] = c, t[l + 1] = h;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) i[a] = t[o + a];
      for (let a = 0; a < 10; a++) t[o + a] ^= ~i[(a + 2) % 10] & i[(a + 4) % 10];
    }
    t[0] ^= ob[r], t[1] ^= ab[r];
  }
  i.fill(0);
}
let hb = class ou extends Bo {
  constructor(e, i, r, s = !1, n = 24) {
    if (super(), this.blockLen = e, this.suffix = i, this.outputLen = r, this.enableXOF = s, this.rounds = n, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Or(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Zw(this.state);
  }
  keccak() {
    ec || tc(this.state32), cb(this.state32, this.rounds), ec || tc(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Vi(this);
    const { blockLen: i, state: r } = this;
    e = Ki(e);
    const s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(i - this.pos, s - n);
      for (let a = 0; a < o; a++) r[this.pos++] ^= e[n++];
      this.pos === i && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: i, pos: r, blockLen: s } = this;
    e[r] ^= i, i & 128 && r === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Vi(this, !1), Lr(e), this.finish();
    const i = this.state, { blockLen: r } = this;
    for (let s = 0, n = e.length; s < n; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, n - s);
      e.set(i.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Or(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (tu(e, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: i, suffix: r, outputLen: s, rounds: n, enableXOF: o } = this;
    return e || (e = new ou(i, r, s, o, n)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = n, e.suffix = r, e.outputLen = s, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const lb = (t, e, i) => iu(() => new hb(e, t, i)), ub = lb(1, 136, 256 / 8), db = "https://rpc.walletconnect.org/v1";
function au(t) {
  const e = `Ethereum Signed Message:
${t.length}`, i = new TextEncoder().encode(e + t);
  return "0x" + Buffer.from(ub(i)).toString("hex");
}
async function pb(t, e, i, r, s, n) {
  switch (i.t) {
    case "eip191":
      return await fb(t, e, i.s);
    case "eip1271":
      return await gb(t, e, i.s, r, s, n);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${i.t}`);
  }
}
async function fb(t, e, i) {
  return (await Df({ hash: au(e), signature: i })).toLowerCase() === t.toLowerCase();
}
async function gb(t, e, i, r, s, n) {
  const o = Hi(r);
  if (!o.namespace || !o.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
  try {
    const a = "0x1626ba7e", c = "0000000000000000000000000000000000000000000000000000000000000040", h = "0000000000000000000000000000000000000000000000000000000000000041", l = i.substring(2), u = au(e).substring(2), d = a + u + c + h + l, f = await fetch(`${n || db}/?chainId=${r}&projectId=${s}`, { method: "POST", body: JSON.stringify({ id: yb(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: d }, "latest"] }) }), { result: p } = await f.json();
    return p ? p.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1;
  } catch (a) {
    return console.error("isValidEip1271Signature: ", a), !1;
  }
}
function yb() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function mb(t) {
  const e = atob(t), i = new Uint8Array(e.length);
  for (let o = 0; o < e.length; o++) i[o] = e.charCodeAt(o);
  const r = i[0];
  if (r === 0) throw new Error("No signatures found");
  const s = 1 + r * 64;
  if (i.length < s) throw new Error("Transaction data too short for claimed signature count");
  if (i.length < 100) throw new Error("Transaction too short");
  const n = Buffer.from(t, "base64").slice(1, 65);
  return Pf.encode(n);
}
var wb = Object.defineProperty, bb = Object.defineProperties, vb = Object.getOwnPropertyDescriptors, sc = Object.getOwnPropertySymbols, Eb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, nc = (t, e, i) => e in t ? wb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ib = (t, e) => {
  for (var i in e || (e = {})) Eb.call(e, i) && nc(t, i, e[i]);
  if (sc) for (var i of sc(e)) _b.call(e, i) && nc(t, i, e[i]);
  return t;
}, Sb = (t, e) => bb(t, vb(e));
const Db = "did:pkh:", Uo = (t) => t == null ? void 0 : t.split(":"), $b = (t) => {
  const e = t && Uo(t);
  if (e) return t.includes(Db) ? e[3] : e[1];
}, Gn = (t) => {
  const e = t && Uo(t);
  if (e) return e[2] + ":" + e[3];
}, Es = (t) => {
  const e = t && Uo(t);
  if (e) return e.pop();
};
async function oc(t) {
  const { cacao: e, projectId: i } = t, { s: r, p: s } = e, n = cu(s, s.iss), o = Es(s.iss);
  return await pb(o, n, r, Gn(s.iss), i);
}
const cu = (t, e) => {
  const i = `${t.domain} wants you to sign in with your Ethereum account:`, r = Es(e);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let s = t.statement || void 0;
  const n = `URI: ${t.aud || t.uri}`, o = `Version: ${t.version}`, a = `Chain ID: ${$b(e)}`, c = `Nonce: ${t.nonce}`, h = `Issued At: ${t.iat}`, l = t.exp ? `Expiration Time: ${t.exp}` : void 0, u = t.nbf ? `Not Before: ${t.nbf}` : void 0, d = t.requestId ? `Request ID: ${t.requestId}` : void 0, f = t.resources ? `Resources:${t.resources.map((g) => `
- ${g}`).join("")}` : void 0, p = us(t.resources);
  if (p) {
    const g = Pr(p);
    s = jb(s, g);
  }
  return [i, r, "", s, "", n, o, a, c, h, l, u, d, f].filter((g) => g != null).join(`
`);
};
function Ob(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function Pb(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function hi(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e = Object.keys(t.att);
  if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
  e.forEach((i) => {
    const r = t.att[i];
    if (Array.isArray(r)) throw new Error(`Resource must be an object: ${i}`);
    if (typeof r != "object") throw new Error(`Resource must be an object: ${i}`);
    if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${i}`);
    Object.keys(r).forEach((s) => {
      const n = r[s];
      if (!Array.isArray(n)) throw new Error(`Ability limits ${s} must be an array of objects, found: ${n}`);
      if (!n.length) throw new Error(`Value of ${s} is empty array, must be an array with objects`);
      n.forEach((o) => {
        if (typeof o != "object") throw new Error(`Ability limits (${s}) must be an array of objects, found: ${o}`);
      });
    });
  });
}
function xb(t, e, i, r = {}) {
  return i == null || i.sort((s, n) => s.localeCompare(n)), { att: { [t]: Ab(e, i, r) } };
}
function Ab(t, e, i = {}) {
  e = e == null ? void 0 : e.sort((s, n) => s.localeCompare(n));
  const r = e.map((s) => ({ [`${t}/${s}`]: [i] }));
  return Object.assign({}, ...r);
}
function hu(t) {
  return hi(t), `urn:recap:${Ob(t).replace(/=/g, "")}`;
}
function Pr(t) {
  const e = Pb(t.replace("urn:recap:", ""));
  return hi(e), e;
}
function Cb(t, e, i) {
  const r = xb(t, e, i);
  return hu(r);
}
function Tb(t) {
  return t && t.includes("urn:recap:");
}
function Nb(t, e) {
  const i = Pr(t), r = Pr(e), s = Rb(i, r);
  return hu(s);
}
function Rb(t, e) {
  hi(t), hi(e);
  const i = Object.keys(t.att).concat(Object.keys(e.att)).sort((s, n) => s.localeCompare(n)), r = { att: {} };
  return i.forEach((s) => {
    var n, o;
    Object.keys(((n = t.att) == null ? void 0 : n[s]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[s]) || {})).sort((a, c) => a.localeCompare(c)).forEach((a) => {
      var c, h;
      r.att[s] = Sb(Ib({}, r.att[s]), { [a]: ((c = t.att[s]) == null ? void 0 : c[a]) || ((h = e.att[s]) == null ? void 0 : h[a]) });
    });
  }), r;
}
function jb(t = "", e) {
  hi(e);
  const i = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(i)) return t;
  const r = [];
  let s = 0;
  Object.keys(e.att).forEach((a) => {
    const c = Object.keys(e.att[a]).map((u) => ({ ability: u.split("/")[0], action: u.split("/")[1] }));
    c.sort((u, d) => u.action.localeCompare(d.action));
    const h = {};
    c.forEach((u) => {
      h[u.ability] || (h[u.ability] = []), h[u.ability].push(u.action);
    });
    const l = Object.keys(h).map((u) => (s++, `(${s}) '${u}': '${h[u].join("', '")}' for '${a}'.`));
    r.push(l.join(", ").replace(".,", "."));
  });
  const n = r.join(" "), o = `${i}${n}`;
  return `${t ? t + " " : ""}${o}`;
}
function ac(t) {
  var e;
  const i = Pr(t);
  hi(i);
  const r = (e = i.att) == null ? void 0 : e.eip155;
  return r ? Object.keys(r).map((s) => s.split("/")[1]) : [];
}
function cc(t) {
  const e = Pr(t);
  hi(e);
  const i = [];
  return Object.values(e.att).forEach((r) => {
    Object.values(r).forEach((s) => {
      var n;
      (n = s == null ? void 0 : s[0]) != null && n.chains && i.push(s[0].chains);
    });
  }), [...new Set(i.flat())];
}
function us(t) {
  if (!t) return;
  const e = t == null ? void 0 : t[t.length - 1];
  return Tb(e) ? e : void 0;
}
function dn(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function lu(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ke(t, ...e) {
  if (!lu(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function hc(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Bb(t, e) {
  Ke(t);
  const i = e.outputLen;
  if (t.length < i) throw new Error("digestInto() expects output buffer of length at least " + i);
}
function lc(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
const Ht = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), Ub = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), kb = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!kb) throw new Error("Non little-endian hardware is not supported");
function Lb(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function Yn(t) {
  if (typeof t == "string") t = Lb(t);
  else if (lu(t)) t = Jn(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function qb(t, e) {
  if (e == null || typeof e != "object") throw new Error("options must be defined");
  return Object.assign(t, e);
}
function Mb(t, e) {
  if (t.length !== e.length) return !1;
  let i = 0;
  for (let r = 0; r < t.length; r++) i |= t[r] ^ e[r];
  return i === 0;
}
const zb = (t, e) => {
  function i(r, ...s) {
    if (Ke(r), t.nonceLength !== void 0) {
      const h = s[0];
      if (!h) throw new Error("nonce / iv required");
      t.varSizeNonce ? Ke(h) : Ke(h, t.nonceLength);
    }
    const n = t.tagLength;
    n && s[1] !== void 0 && Ke(s[1]);
    const o = e(r, ...s), a = (h, l) => {
      if (l !== void 0) {
        if (h !== 2) throw new Error("cipher output not supported");
        Ke(l);
      }
    };
    let c = !1;
    return { encrypt(h, l) {
      if (c) throw new Error("cannot encrypt() twice with same key + nonce");
      return c = !0, Ke(h), a(o.encrypt.length, l), o.encrypt(h, l);
    }, decrypt(h, l) {
      if (Ke(h), n && h.length < n) throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
      return a(o.decrypt.length, l), o.decrypt(h, l);
    } };
  }
  return Object.assign(i, t), i;
};
function uc(t, e, i = !0) {
  if (e === void 0) return new Uint8Array(t);
  if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
  if (i && !Fb(e)) throw new Error("invalid output, must be aligned");
  return e;
}
function dc(t, e, i, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, i, r);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(i >> s & n), a = Number(i & n);
  t.setUint32(e + 4, o, r), t.setUint32(e + 0, a, r);
}
function Fb(t) {
  return t.byteOffset % 4 === 0;
}
function Jn(t) {
  return Uint8Array.from(t);
}
function Wi(...t) {
  for (let e = 0; e < t.length; e++) t[e].fill(0);
}
const uu = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0))), Hb = uu("expand 16-byte k"), Vb = uu("expand 32-byte k"), Kb = Ht(Hb), Wb = Ht(Vb);
function J(t, e) {
  return t << e | t >>> 32 - e;
}
function Zn(t) {
  return t.byteOffset % 4 === 0;
}
const Qr = 64, Gb = 16, du = 2 ** 32 - 1, pc = new Uint32Array();
function Yb(t, e, i, r, s, n, o, a) {
  const c = s.length, h = new Uint8Array(Qr), l = Ht(h), u = Zn(s) && Zn(n), d = u ? Ht(s) : pc, f = u ? Ht(n) : pc;
  for (let p = 0; p < c; o++) {
    if (t(e, i, r, l, o, a), o >= du) throw new Error("arx: counter overflow");
    const g = Math.min(Qr, c - p);
    if (u && g === Qr) {
      const y = p / 4;
      if (p % 4 !== 0) throw new Error("arx: invalid block position");
      for (let w = 0, m; w < Gb; w++) m = y + w, f[m] = d[m] ^ l[w];
      p += Qr;
      continue;
    }
    for (let y = 0, w; y < g; y++) w = p + y, n[w] = s[w] ^ h[y];
    p += g;
  }
}
function Jb(t, e) {
  const { allowShortKeys: i, extendNonceFn: r, counterLength: s, counterRight: n, rounds: o } = qb({ allowShortKeys: !1, counterLength: 8, counterRight: !1, rounds: 20 }, e);
  if (typeof t != "function") throw new Error("core must be a function");
  return dn(s), dn(o), lc(n), lc(i), (a, c, h, l, u = 0) => {
    Ke(a), Ke(c), Ke(h);
    const d = h.length;
    if (l === void 0 && (l = new Uint8Array(d)), Ke(l), dn(u), u < 0 || u >= du) throw new Error("arx: counter overflow");
    if (l.length < d) throw new Error(`arx: output (${l.length}) is shorter than data (${d})`);
    const f = [];
    let p = a.length, g, y;
    if (p === 32) f.push(g = Jn(a)), y = Wb;
    else if (p === 16 && i) g = new Uint8Array(32), g.set(a), g.set(a, 16), y = Kb, f.push(g);
    else throw new Error(`arx: invalid 32-byte key, got length=${p}`);
    Zn(c) || f.push(c = Jn(c));
    const w = Ht(g);
    if (r) {
      if (c.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r(y, w, Ht(c.subarray(0, 16)), w), c = c.subarray(16);
    }
    const m = 16 - s;
    if (m !== c.length) throw new Error(`arx: nonce must be ${m} or 16 bytes`);
    if (m !== 12) {
      const E = new Uint8Array(12);
      E.set(c, n ? 0 : 12 - c.length), c = E, f.push(c);
    }
    const b = Ht(c);
    return Yb(t, y, w, b, h, l, u, o), Wi(...f), l;
  };
}
const _e = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
class Zb {
  constructor(e) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, e = Yn(e), Ke(e, 32);
    const i = _e(e, 0), r = _e(e, 2), s = _e(e, 4), n = _e(e, 6), o = _e(e, 8), a = _e(e, 10), c = _e(e, 12), h = _e(e, 14);
    this.r[0] = i & 8191, this.r[1] = (i >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | s << 6) & 7939, this.r[3] = (s >>> 7 | n << 9) & 8191, this.r[4] = (n >>> 4 | o << 12) & 255, this.r[5] = o >>> 1 & 8190, this.r[6] = (o >>> 14 | a << 2) & 8191, this.r[7] = (a >>> 11 | c << 5) & 8065, this.r[8] = (c >>> 8 | h << 8) & 8191, this.r[9] = h >>> 5 & 127;
    for (let l = 0; l < 8; l++) this.pad[l] = _e(e, 16 + 2 * l);
  }
  process(e, i, r = !1) {
    const s = r ? 0 : 2048, { h: n, r: o } = this, a = o[0], c = o[1], h = o[2], l = o[3], u = o[4], d = o[5], f = o[6], p = o[7], g = o[8], y = o[9], w = _e(e, i + 0), m = _e(e, i + 2), b = _e(e, i + 4), E = _e(e, i + 6), $ = _e(e, i + 8), O = _e(e, i + 10), D = _e(e, i + 12), x = _e(e, i + 14);
    let I = n[0] + (w & 8191), q = n[1] + ((w >>> 13 | m << 3) & 8191), B = n[2] + ((m >>> 10 | b << 6) & 8191), k = n[3] + ((b >>> 7 | E << 9) & 8191), M = n[4] + ((E >>> 4 | $ << 12) & 8191), C = n[5] + ($ >>> 1 & 8191), _ = n[6] + (($ >>> 14 | O << 2) & 8191), v = n[7] + ((O >>> 11 | D << 5) & 8191), P = n[8] + ((D >>> 8 | x << 8) & 8191), A = n[9] + (x >>> 5 | s), S = 0, R = S + I * a + q * (5 * y) + B * (5 * g) + k * (5 * p) + M * (5 * f);
    S = R >>> 13, R &= 8191, R += C * (5 * d) + _ * (5 * u) + v * (5 * l) + P * (5 * h) + A * (5 * c), S += R >>> 13, R &= 8191;
    let U = S + I * c + q * a + B * (5 * y) + k * (5 * g) + M * (5 * p);
    S = U >>> 13, U &= 8191, U += C * (5 * f) + _ * (5 * d) + v * (5 * u) + P * (5 * l) + A * (5 * h), S += U >>> 13, U &= 8191;
    let L = S + I * h + q * c + B * a + k * (5 * y) + M * (5 * g);
    S = L >>> 13, L &= 8191, L += C * (5 * p) + _ * (5 * f) + v * (5 * d) + P * (5 * u) + A * (5 * l), S += L >>> 13, L &= 8191;
    let z = S + I * l + q * h + B * c + k * a + M * (5 * y);
    S = z >>> 13, z &= 8191, z += C * (5 * g) + _ * (5 * p) + v * (5 * f) + P * (5 * d) + A * (5 * u), S += z >>> 13, z &= 8191;
    let F = S + I * u + q * l + B * h + k * c + M * a;
    S = F >>> 13, F &= 8191, F += C * (5 * y) + _ * (5 * g) + v * (5 * p) + P * (5 * f) + A * (5 * d), S += F >>> 13, F &= 8191;
    let V = S + I * d + q * u + B * l + k * h + M * c;
    S = V >>> 13, V &= 8191, V += C * a + _ * (5 * y) + v * (5 * g) + P * (5 * p) + A * (5 * f), S += V >>> 13, V &= 8191;
    let G = S + I * f + q * d + B * u + k * l + M * h;
    S = G >>> 13, G &= 8191, G += C * c + _ * a + v * (5 * y) + P * (5 * g) + A * (5 * p), S += G >>> 13, G &= 8191;
    let se = S + I * p + q * f + B * d + k * u + M * l;
    S = se >>> 13, se &= 8191, se += C * h + _ * c + v * a + P * (5 * y) + A * (5 * g), S += se >>> 13, se &= 8191;
    let ee = S + I * g + q * p + B * f + k * d + M * u;
    S = ee >>> 13, ee &= 8191, ee += C * l + _ * h + v * c + P * a + A * (5 * y), S += ee >>> 13, ee &= 8191;
    let Y = S + I * y + q * g + B * p + k * f + M * d;
    S = Y >>> 13, Y &= 8191, Y += C * u + _ * l + v * h + P * c + A * a, S += Y >>> 13, Y &= 8191, S = (S << 2) + S | 0, S = S + R | 0, R = S & 8191, S = S >>> 13, U += S, n[0] = R, n[1] = U, n[2] = L, n[3] = z, n[4] = F, n[5] = V, n[6] = G, n[7] = se, n[8] = ee, n[9] = Y;
  }
  finalize() {
    const { h: e, pad: i } = this, r = new Uint16Array(10);
    let s = e[1] >>> 13;
    e[1] &= 8191;
    for (let a = 2; a < 10; a++) e[a] += s, s = e[a] >>> 13, e[a] &= 8191;
    e[0] += s * 5, s = e[0] >>> 13, e[0] &= 8191, e[1] += s, s = e[1] >>> 13, e[1] &= 8191, e[2] += s, r[0] = e[0] + 5, s = r[0] >>> 13, r[0] &= 8191;
    for (let a = 1; a < 10; a++) r[a] = e[a] + s, s = r[a] >>> 13, r[a] &= 8191;
    r[9] -= 8192;
    let n = (s ^ 1) - 1;
    for (let a = 0; a < 10; a++) r[a] &= n;
    n = ~n;
    for (let a = 0; a < 10; a++) e[a] = e[a] & n | r[a];
    e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
    let o = e[0] + i[0];
    e[0] = o & 65535;
    for (let a = 1; a < 8; a++) o = (e[a] + i[a] | 0) + (o >>> 16) | 0, e[a] = o & 65535;
    Wi(r);
  }
  update(e) {
    hc(this);
    const { buffer: i, blockLen: r } = this;
    e = Yn(e);
    const s = e.length;
    for (let n = 0; n < s; ) {
      const o = Math.min(r - this.pos, s - n);
      if (o === r) {
        for (; r <= s - n; n += r) this.process(e, n);
        continue;
      }
      i.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === r && (this.process(i, 0, !1), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Wi(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e) {
    hc(this), Bb(e, this), this.finished = !0;
    const { buffer: i, h: r } = this;
    let { pos: s } = this;
    if (s) {
      for (i[s++] = 1; s < 16; s++) i[s] = 0;
      this.process(i, 0, !0);
    }
    this.finalize();
    let n = 0;
    for (let o = 0; o < 8; o++) e[n++] = r[o] >>> 0, e[n++] = r[o] >>> 8;
    return e;
  }
  digest() {
    const { buffer: e, outputLen: i } = this;
    this.digestInto(e);
    const r = e.slice(0, i);
    return this.destroy(), r;
  }
}
function Qb(t) {
  const e = (r, s) => t(s).update(Yn(r)).digest(), i = t(new Uint8Array(32));
  return e.outputLen = i.outputLen, e.blockLen = i.blockLen, e.create = (r) => t(r), e;
}
const Xb = Qb((t) => new Zb(t));
function ev(t, e, i, r, s, n = 20) {
  let o = t[0], a = t[1], c = t[2], h = t[3], l = e[0], u = e[1], d = e[2], f = e[3], p = e[4], g = e[5], y = e[6], w = e[7], m = s, b = i[0], E = i[1], $ = i[2], O = o, D = a, x = c, I = h, q = l, B = u, k = d, M = f, C = p, _ = g, v = y, P = w, A = m, S = b, R = E, U = $;
  for (let z = 0; z < n; z += 2) O = O + q | 0, A = J(A ^ O, 16), C = C + A | 0, q = J(q ^ C, 12), O = O + q | 0, A = J(A ^ O, 8), C = C + A | 0, q = J(q ^ C, 7), D = D + B | 0, S = J(S ^ D, 16), _ = _ + S | 0, B = J(B ^ _, 12), D = D + B | 0, S = J(S ^ D, 8), _ = _ + S | 0, B = J(B ^ _, 7), x = x + k | 0, R = J(R ^ x, 16), v = v + R | 0, k = J(k ^ v, 12), x = x + k | 0, R = J(R ^ x, 8), v = v + R | 0, k = J(k ^ v, 7), I = I + M | 0, U = J(U ^ I, 16), P = P + U | 0, M = J(M ^ P, 12), I = I + M | 0, U = J(U ^ I, 8), P = P + U | 0, M = J(M ^ P, 7), O = O + B | 0, U = J(U ^ O, 16), v = v + U | 0, B = J(B ^ v, 12), O = O + B | 0, U = J(U ^ O, 8), v = v + U | 0, B = J(B ^ v, 7), D = D + k | 0, A = J(A ^ D, 16), P = P + A | 0, k = J(k ^ P, 12), D = D + k | 0, A = J(A ^ D, 8), P = P + A | 0, k = J(k ^ P, 7), x = x + M | 0, S = J(S ^ x, 16), C = C + S | 0, M = J(M ^ C, 12), x = x + M | 0, S = J(S ^ x, 8), C = C + S | 0, M = J(M ^ C, 7), I = I + q | 0, R = J(R ^ I, 16), _ = _ + R | 0, q = J(q ^ _, 12), I = I + q | 0, R = J(R ^ I, 8), _ = _ + R | 0, q = J(q ^ _, 7);
  let L = 0;
  r[L++] = o + O | 0, r[L++] = a + D | 0, r[L++] = c + x | 0, r[L++] = h + I | 0, r[L++] = l + q | 0, r[L++] = u + B | 0, r[L++] = d + k | 0, r[L++] = f + M | 0, r[L++] = p + C | 0, r[L++] = g + _ | 0, r[L++] = y + v | 0, r[L++] = w + P | 0, r[L++] = m + A | 0, r[L++] = b + S | 0, r[L++] = E + R | 0, r[L++] = $ + U | 0;
}
const tv = Jb(ev, { counterRight: !1, counterLength: 4, allowShortKeys: !1 }), iv = new Uint8Array(16), fc = (t, e) => {
  t.update(e);
  const i = e.length % 16;
  i && t.update(iv.subarray(i));
}, rv = new Uint8Array(32);
function gc(t, e, i, r, s) {
  const n = t(e, i, rv), o = Xb.create(n);
  s && fc(o, s), fc(o, r);
  const a = new Uint8Array(16), c = Ub(a);
  dc(c, 0, BigInt(s ? s.length : 0), !0), dc(c, 8, BigInt(r.length), !0), o.update(a);
  const h = o.digest();
  return Wi(n, a), h;
}
const sv = (t) => (e, i, r) => ({ encrypt(s, n) {
  const o = s.length;
  n = uc(o + 16, n, !1), n.set(s);
  const a = n.subarray(0, -16);
  t(e, i, a, a, 1);
  const c = gc(t, e, i, a, r);
  return n.set(c, o), Wi(c), n;
}, decrypt(s, n) {
  n = uc(s.length - 16, n, !1);
  const o = s.subarray(0, -16), a = s.subarray(-16), c = gc(t, e, i, o, r);
  if (!Mb(a, c)) throw new Error("invalid tag");
  return n.set(s.subarray(0, -16)), t(e, i, n, n, 1), Wi(c), n;
} }), pu = zb({ blockSize: 64, nonceLength: 12, tagLength: 16 }, sv(tv));
let fu = class extends Bo {
  constructor(e, i) {
    super(), this.finished = !1, this.destroyed = !1, jo(e);
    const r = Ki(i);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, n = new Uint8Array(s);
    n.set(r.length > s ? e.create().update(r).digest() : r);
    for (let o = 0; o < n.length; o++) n[o] ^= 54;
    this.iHash.update(n), this.oHash = e.create();
    for (let o = 0; o < n.length; o++) n[o] ^= 106;
    this.oHash.update(n), n.fill(0);
  }
  update(e) {
    return Vi(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Vi(this), Lr(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: i, iHash: r, finished: s, destroyed: n, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = s, e.destroyed = n, e.blockLen = o, e.outputLen = a, e.oHash = i._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const Rs = (t, e, i) => new fu(t, e).update(i).digest();
Rs.create = (t, e) => new fu(t, e);
function nv(t, e, i) {
  return jo(t), i === void 0 && (i = new Uint8Array(t.outputLen)), Rs(t, Ki(i), Ki(e));
}
const pn = new Uint8Array([0]), yc = new Uint8Array();
function ov(t, e, i, r = 32) {
  if (jo(t), Or(r), r > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
  const s = Math.ceil(r / t.outputLen);
  i === void 0 && (i = yc);
  const n = new Uint8Array(s * t.outputLen), o = Rs.create(t, e), a = o._cloneInto(), c = new Uint8Array(o.outputLen);
  for (let h = 0; h < s; h++) pn[0] = h + 1, a.update(h === 0 ? yc : c).update(i).update(pn).digestInto(c), n.set(c, t.outputLen * h), o._cloneInto(a);
  return o.destroy(), a.destroy(), c.fill(0), pn.fill(0), n.slice(0, r);
}
const av = (t, e, i, r, s) => ov(t, nv(t, e, i), r, s);
function cv(t, e, i, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, i, r);
  const s = BigInt(32), n = BigInt(4294967295), o = Number(i >> s & n), a = Number(i & n), c = r ? 4 : 0, h = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + h, a, r);
}
function hv(t, e, i) {
  return t & e ^ ~t & i;
}
function lv(t, e, i) {
  return t & e ^ t & i ^ e & i;
}
let uv = class extends Bo {
  constructor(e, i, r, s) {
    super(), this.blockLen = e, this.outputLen = i, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = un(this.buffer);
  }
  update(e) {
    Vi(this);
    const { view: i, buffer: r, blockLen: s } = this;
    e = Ki(e);
    const n = e.length;
    for (let o = 0; o < n; ) {
      const a = Math.min(s - this.pos, n - o);
      if (a === s) {
        const c = un(e);
        for (; s <= n - o; o += s) this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(i, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Vi(this), tu(e, this), this.finished = !0;
    const { buffer: i, view: r, blockLen: s, isLE: n } = this;
    let { pos: o } = this;
    i[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(r, 0), o = 0);
    for (let u = o; u < s; u++) i[u] = 0;
    cv(r, s - 8, BigInt(this.length * 8), n), this.process(r, 0);
    const a = un(e), c = this.outputLen;
    if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = c / 4, l = this.get();
    if (h > l.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u = 0; u < h; u++) a.setUint32(4 * u, l[u], n);
  }
  digest() {
    const { buffer: e, outputLen: i } = this;
    this.digestInto(e);
    const r = e.slice(0, i);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: i, buffer: r, length: s, finished: n, destroyed: o, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = n, e.destroyed = o, s % i && e.buffer.set(r), e;
  }
};
const dv = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), kt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), Lt = new Uint32Array(64);
class pv extends uv {
  constructor() {
    super(64, 32, 8, !1), this.A = kt[0] | 0, this.B = kt[1] | 0, this.C = kt[2] | 0, this.D = kt[3] | 0, this.E = kt[4] | 0, this.F = kt[5] | 0, this.G = kt[6] | 0, this.H = kt[7] | 0;
  }
  get() {
    const { A: e, B: i, C: r, D: s, E: n, F: o, G: a, H: c } = this;
    return [e, i, r, s, n, o, a, c];
  }
  set(e, i, r, s, n, o, a, c) {
    this.A = e | 0, this.B = i | 0, this.C = r | 0, this.D = s | 0, this.E = n | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, i) {
    for (let u = 0; u < 16; u++, i += 4) Lt[u] = e.getUint32(i, !1);
    for (let u = 16; u < 64; u++) {
      const d = Lt[u - 15], f = Lt[u - 2], p = ft(d, 7) ^ ft(d, 18) ^ d >>> 3, g = ft(f, 17) ^ ft(f, 19) ^ f >>> 10;
      Lt[u] = g + Lt[u - 7] + p + Lt[u - 16] | 0;
    }
    let { A: r, B: s, C: n, D: o, E: a, F: c, G: h, H: l } = this;
    for (let u = 0; u < 64; u++) {
      const d = ft(a, 6) ^ ft(a, 11) ^ ft(a, 25), f = l + d + hv(a, c, h) + dv[u] + Lt[u] | 0, p = (ft(r, 2) ^ ft(r, 13) ^ ft(r, 22)) + lv(r, s, n) | 0;
      l = h, h = c, c = a, a = o + f | 0, o = n, n = s, s = r, r = f + p | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, n = n + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, h = h + this.G | 0, l = l + this.H | 0, this.set(r, s, n, o, a, c, h, l);
  }
  roundClean() {
    Lt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const qr = iu(() => new pv());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const js = BigInt(0), Bs = BigInt(1), fv = BigInt(2);
function li(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Mr(t) {
  if (!li(t)) throw new Error("Uint8Array expected");
}
function Gi(t, e) {
  if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
const gv = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Yi(t) {
  Mr(t);
  let e = "";
  for (let i = 0; i < t.length; i++) e += gv[t[i]];
  return e;
}
function Mi(t) {
  const e = t.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function ko(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? js : BigInt("0x" + t);
}
const Ot = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function mc(t) {
  if (t >= Ot._0 && t <= Ot._9) return t - Ot._0;
  if (t >= Ot.A && t <= Ot.F) return t - (Ot.A - 10);
  if (t >= Ot.a && t <= Ot.f) return t - (Ot.a - 10);
}
function Ji(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e = t.length, i = e / 2;
  if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(i);
  for (let s = 0, n = 0; s < i; s++, n += 2) {
    const o = mc(t.charCodeAt(n)), a = mc(t.charCodeAt(n + 1));
    if (o === void 0 || a === void 0) {
      const c = t[n] + t[n + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n);
    }
    r[s] = o * 16 + a;
  }
  return r;
}
function ni(t) {
  return ko(Yi(t));
}
function xr(t) {
  return Mr(t), ko(Yi(Uint8Array.from(t).reverse()));
}
function Zi(t, e) {
  return Ji(t.toString(16).padStart(e * 2, "0"));
}
function Us(t, e) {
  return Zi(t, e).reverse();
}
function yv(t) {
  return Ji(Mi(t));
}
function Ve(t, e, i) {
  let r;
  if (typeof e == "string") try {
    r = Ji(e);
  } catch (n) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + n);
  }
  else if (li(e)) r = Uint8Array.from(e);
  else throw new Error(t + " must be hex string or Uint8Array");
  const s = r.length;
  if (typeof i == "number" && s !== i) throw new Error(t + " of length " + i + " expected, got " + s);
  return r;
}
function Ar(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    Mr(s), e += s.length;
  }
  const i = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const n = t[r];
    i.set(n, s), s += n.length;
  }
  return i;
}
function mv(t, e) {
  if (t.length !== e.length) return !1;
  let i = 0;
  for (let r = 0; r < t.length; r++) i |= t[r] ^ e[r];
  return i === 0;
}
function wv(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
const fn = (t) => typeof t == "bigint" && js <= t;
function ks(t, e, i) {
  return fn(t) && fn(e) && fn(i) && e <= t && t < i;
}
function Nt(t, e, i, r) {
  if (!ks(e, i, r)) throw new Error("expected valid " + t + ": " + i + " <= n < " + r + ", got " + e);
}
function gu(t) {
  let e;
  for (e = 0; t > js; t >>= Bs, e += 1) ;
  return e;
}
function bv(t, e) {
  return t >> BigInt(e) & Bs;
}
function vv(t, e, i) {
  return t | (i ? Bs : js) << BigInt(e);
}
const Lo = (t) => (fv << BigInt(t - 1)) - Bs, gn = (t) => new Uint8Array(t), wc = (t) => Uint8Array.from(t);
function yu(t, e, i) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
  if (typeof i != "function") throw new Error("hmacFn must be a function");
  let r = gn(t), s = gn(t), n = 0;
  const o = () => {
    r.fill(1), s.fill(0), n = 0;
  }, a = (...l) => i(s, r, ...l), c = (l = gn()) => {
    s = a(wc([0]), l), r = a(), l.length !== 0 && (s = a(wc([1]), l), r = a());
  }, h = () => {
    if (n++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let l = 0;
    const u = [];
    for (; l < e; ) {
      r = a();
      const d = r.slice();
      u.push(d), l += r.length;
    }
    return Ar(...u);
  };
  return (l, u) => {
    o(), c(l);
    let d;
    for (; !(d = u(h())); ) c();
    return o(), d;
  };
}
const Ev = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || li(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e) => e.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function sr(t, e, i = {}) {
  const r = (s, n, o) => {
    const a = Ev[n];
    if (typeof a != "function") throw new Error("invalid validator function");
    const c = t[s];
    if (!(o && c === void 0) && !a(c, t)) throw new Error("param " + String(s) + " is invalid. Expected " + n + ", got " + c);
  };
  for (const [s, n] of Object.entries(e)) r(s, n, !1);
  for (const [s, n] of Object.entries(i)) r(s, n, !0);
  return t;
}
const _v = () => {
  throw new Error("not implemented");
};
function Qn(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (i, ...r) => {
    const s = e.get(i);
    if (s !== void 0) return s;
    const n = t(i, ...r);
    return e.set(i, n), n;
  };
}
var Iv = Object.freeze({ __proto__: null, isBytes: li, abytes: Mr, abool: Gi, bytesToHex: Yi, numberToHexUnpadded: Mi, hexToNumber: ko, hexToBytes: Ji, bytesToNumberBE: ni, bytesToNumberLE: xr, numberToBytesBE: Zi, numberToBytesLE: Us, numberToVarBytesBE: yv, ensureBytes: Ve, concatBytes: Ar, equalBytes: mv, utf8ToBytes: wv, inRange: ks, aInRange: Nt, bitLen: gu, bitGet: bv, bitSet: vv, bitMask: Lo, createHmacDrbg: yu, validateObject: sr, notImplemented: _v, memoized: Qn });
const ve = BigInt(0), he = BigInt(1), ei = BigInt(2), Sv = BigInt(3), Xn = BigInt(4), bc = BigInt(5), vc = BigInt(8);
function Le(t, e) {
  const i = t % e;
  return i >= ve ? i : e + i;
}
function mu(t, e, i) {
  if (e < ve) throw new Error("invalid exponent, negatives unsupported");
  if (i <= ve) throw new Error("invalid modulus");
  if (i === he) return ve;
  let r = he;
  for (; e > ve; ) e & he && (r = r * t % i), t = t * t % i, e >>= he;
  return r;
}
function ht(t, e, i) {
  let r = t;
  for (; e-- > ve; ) r *= r, r %= i;
  return r;
}
function eo(t, e) {
  if (t === ve) throw new Error("invert: expected non-zero number");
  if (e <= ve) throw new Error("invert: expected positive modulus, got " + e);
  let i = Le(t, e), r = e, s = ve, n = he;
  for (; i !== ve; ) {
    const o = r / i, a = r % i, c = s - n * o;
    r = i, i = a, s = n, n = c;
  }
  if (r !== he) throw new Error("invert: does not exist");
  return Le(s, e);
}
function Dv(t) {
  const e = (t - he) / ei;
  let i, r, s;
  for (i = t - he, r = 0; i % ei === ve; i /= ei, r++) ;
  for (s = ei; s < t && mu(s, e, t) !== t - he; s++) if (s > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r === 1) {
    const o = (t + he) / Xn;
    return function(a, c) {
      const h = a.pow(c, o);
      if (!a.eql(a.sqr(h), c)) throw new Error("Cannot find square root");
      return h;
    };
  }
  const n = (i + he) / ei;
  return function(o, a) {
    if (o.pow(a, e) === o.neg(o.ONE)) throw new Error("Cannot find square root");
    let c = r, h = o.pow(o.mul(o.ONE, s), i), l = o.pow(a, n), u = o.pow(a, i);
    for (; !o.eql(u, o.ONE); ) {
      if (o.eql(u, o.ZERO)) return o.ZERO;
      let d = 1;
      for (let p = o.sqr(u); d < c && !o.eql(p, o.ONE); d++) p = o.sqr(p);
      const f = o.pow(h, he << BigInt(c - d - 1));
      h = o.sqr(f), l = o.mul(l, f), u = o.mul(u, h), c = d;
    }
    return l;
  };
}
function $v(t) {
  if (t % Xn === Sv) {
    const e = (t + he) / Xn;
    return function(i, r) {
      const s = i.pow(r, e);
      if (!i.eql(i.sqr(s), r)) throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % vc === bc) {
    const e = (t - bc) / vc;
    return function(i, r) {
      const s = i.mul(r, ei), n = i.pow(s, e), o = i.mul(r, n), a = i.mul(i.mul(o, ei), n), c = i.mul(o, i.sub(a, i.ONE));
      if (!i.eql(i.sqr(c), r)) throw new Error("Cannot find square root");
      return c;
    };
  }
  return Dv(t);
}
const Ov = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Pv(t) {
  const e = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, i = Ov.reduce((r, s) => (r[s] = "function", r), e);
  return sr(t, i);
}
function xv(t, e, i) {
  if (i < ve) throw new Error("invalid exponent, negatives unsupported");
  if (i === ve) return t.ONE;
  if (i === he) return e;
  let r = t.ONE, s = e;
  for (; i > ve; ) i & he && (r = t.mul(r, s)), s = t.sqr(s), i >>= he;
  return r;
}
function Av(t, e) {
  const i = new Array(e.length), r = e.reduce((n, o, a) => t.is0(o) ? n : (i[a] = n, t.mul(n, o)), t.ONE), s = t.inv(r);
  return e.reduceRight((n, o, a) => t.is0(o) ? n : (i[a] = t.mul(n, i[a]), t.mul(n, o)), s), i;
}
function wu(t, e) {
  const i = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(i / 8);
  return { nBitLength: i, nByteLength: r };
}
function bu(t, e, i = !1, r = {}) {
  if (t <= ve) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: s, nByteLength: n } = wu(t, e);
  if (n > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const a = Object.freeze({ ORDER: t, isLE: i, BITS: s, BYTES: n, MASK: Lo(s), ZERO: ve, ONE: he, create: (c) => Le(c, t), isValid: (c) => {
    if (typeof c != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c);
    return ve <= c && c < t;
  }, is0: (c) => c === ve, isOdd: (c) => (c & he) === he, neg: (c) => Le(-c, t), eql: (c, h) => c === h, sqr: (c) => Le(c * c, t), add: (c, h) => Le(c + h, t), sub: (c, h) => Le(c - h, t), mul: (c, h) => Le(c * h, t), pow: (c, h) => xv(a, c, h), div: (c, h) => Le(c * eo(h, t), t), sqrN: (c) => c * c, addN: (c, h) => c + h, subN: (c, h) => c - h, mulN: (c, h) => c * h, inv: (c) => eo(c, t), sqrt: r.sqrt || ((c) => (o || (o = $v(t)), o(a, c))), invertBatch: (c) => Av(a, c), cmov: (c, h, l) => l ? h : c, toBytes: (c) => i ? Us(c, n) : Zi(c, n), fromBytes: (c) => {
    if (c.length !== n) throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
    return i ? xr(c) : ni(c);
  } });
  return Object.freeze(a);
}
function vu(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Eu(t) {
  const e = vu(t);
  return e + Math.ceil(e / 2);
}
function Cv(t, e, i = !1) {
  const r = t.length, s = vu(e), n = Eu(e);
  if (r < 16 || r < n || r > 1024) throw new Error("expected " + n + "-1024 bytes of input, got " + r);
  const o = i ? xr(t) : ni(t), a = Le(o, e - he) + he;
  return i ? Us(a, s) : Zi(a, s);
}
const Ec = BigInt(0), Xr = BigInt(1);
function yn(t, e) {
  const i = e.negate();
  return t ? i : e;
}
function _u(t, e) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function mn(t, e) {
  _u(t, e);
  const i = Math.ceil(e / t) + 1, r = 2 ** (t - 1);
  return { windows: i, windowSize: r };
}
function Tv(t, e) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((i, r) => {
    if (!(i instanceof e)) throw new Error("invalid point at index " + r);
  });
}
function Nv(t, e) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((i, r) => {
    if (!e.isValid(i)) throw new Error("invalid scalar at index " + r);
  });
}
const wn = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap();
function bn(t) {
  return Iu.get(t) || 1;
}
function Rv(t, e) {
  return { constTimeNegate: yn, hasPrecomputes(i) {
    return bn(i) !== 1;
  }, unsafeLadder(i, r, s = t.ZERO) {
    let n = i;
    for (; r > Ec; ) r & Xr && (s = s.add(n)), n = n.double(), r >>= Xr;
    return s;
  }, precomputeWindow(i, r) {
    const { windows: s, windowSize: n } = mn(r, e), o = [];
    let a = i, c = a;
    for (let h = 0; h < s; h++) {
      c = a, o.push(c);
      for (let l = 1; l < n; l++) c = c.add(a), o.push(c);
      a = c.double();
    }
    return o;
  }, wNAF(i, r, s) {
    const { windows: n, windowSize: o } = mn(i, e);
    let a = t.ZERO, c = t.BASE;
    const h = BigInt(2 ** i - 1), l = 2 ** i, u = BigInt(i);
    for (let d = 0; d < n; d++) {
      const f = d * o;
      let p = Number(s & h);
      s >>= u, p > o && (p -= l, s += Xr);
      const g = f, y = f + Math.abs(p) - 1, w = d % 2 !== 0, m = p < 0;
      p === 0 ? c = c.add(yn(w, r[g])) : a = a.add(yn(m, r[y]));
    }
    return { p: a, f: c };
  }, wNAFUnsafe(i, r, s, n = t.ZERO) {
    const { windows: o, windowSize: a } = mn(i, e), c = BigInt(2 ** i - 1), h = 2 ** i, l = BigInt(i);
    for (let u = 0; u < o; u++) {
      const d = u * a;
      if (s === Ec) break;
      let f = Number(s & c);
      if (s >>= l, f > a && (f -= h, s += Xr), f === 0) continue;
      let p = r[d + Math.abs(f) - 1];
      f < 0 && (p = p.negate()), n = n.add(p);
    }
    return n;
  }, getPrecomputes(i, r, s) {
    let n = wn.get(r);
    return n || (n = this.precomputeWindow(r, i), i !== 1 && wn.set(r, s(n))), n;
  }, wNAFCached(i, r, s) {
    const n = bn(i);
    return this.wNAF(n, this.getPrecomputes(n, i, s), r);
  }, wNAFCachedUnsafe(i, r, s, n) {
    const o = bn(i);
    return o === 1 ? this.unsafeLadder(i, r, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, i, s), r, n);
  }, setWindowSize(i, r) {
    _u(r, e), Iu.set(i, r), wn.delete(i);
  } };
}
function jv(t, e, i, r) {
  if (Tv(i, t), Nv(r, e), i.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
  const s = t.ZERO, n = gu(BigInt(i.length)), o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1, a = (1 << o) - 1, c = new Array(a + 1).fill(s), h = Math.floor((e.BITS - 1) / o) * o;
  let l = s;
  for (let u = h; u >= 0; u -= o) {
    c.fill(s);
    for (let f = 0; f < r.length; f++) {
      const p = r[f], g = Number(p >> BigInt(u) & BigInt(a));
      c[g] = c[g].add(i[f]);
    }
    let d = s;
    for (let f = c.length - 1, p = s; f > 0; f--) p = p.add(c[f]), d = d.add(p);
    if (l = l.add(d), u !== 0) for (let f = 0; f < o; f++) l = l.double();
  }
  return l;
}
function Su(t) {
  return Pv(t.Fp), sr(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...wu(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const Ii = BigInt(0), vn = BigInt(1);
function Bv(t) {
  return sr(t, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...t });
}
function Uv(t) {
  const e = Bv(t), { P: i } = e, r = (m) => Le(m, i), s = e.montgomeryBits, n = Math.ceil(s / 8), o = e.nByteLength, a = e.adjustScalarBytes || ((m) => m), c = e.powPminus2 || ((m) => mu(m, i - BigInt(2), i));
  function h(m, b, E) {
    const $ = r(m * (b - E));
    return b = r(b - $), E = r(E + $), [b, E];
  }
  const l = (e.a - BigInt(2)) / BigInt(4);
  function u(m, b) {
    Nt("u", m, Ii, i), Nt("scalar", b, Ii, i);
    const E = b, $ = m;
    let O = vn, D = Ii, x = m, I = vn, q = Ii, B;
    for (let M = BigInt(s - 1); M >= Ii; M--) {
      const C = E >> M & vn;
      q ^= C, B = h(q, O, x), O = B[0], x = B[1], B = h(q, D, I), D = B[0], I = B[1], q = C;
      const _ = O + D, v = r(_ * _), P = O - D, A = r(P * P), S = v - A, R = x + I, U = x - I, L = r(U * _), z = r(R * P), F = L + z, V = L - z;
      x = r(F * F), I = r($ * r(V * V)), O = r(v * A), D = r(S * (v + r(l * S)));
    }
    B = h(q, O, x), O = B[0], x = B[1], B = h(q, D, I), D = B[0], I = B[1];
    const k = c(D);
    return r(O * k);
  }
  function d(m) {
    return Us(r(m), n);
  }
  function f(m) {
    const b = Ve("u coordinate", m, n);
    return o === 32 && (b[31] &= 127), xr(b);
  }
  function p(m) {
    const b = Ve("scalar", m), E = b.length;
    if (E !== n && E !== o) {
      let $ = "" + n + " or " + o;
      throw new Error("invalid scalar, expected " + $ + " bytes, got " + E);
    }
    return xr(a(b));
  }
  function g(m, b) {
    const E = f(b), $ = p(m), O = u(E, $);
    if (O === Ii) throw new Error("invalid private or public key received");
    return d(O);
  }
  const y = d(e.Gu);
  function w(m) {
    return g(m, y);
  }
  return { scalarMult: g, scalarMultBase: w, getSharedSecret: (m, b) => g(m, b), getPublicKey: (m) => w(m), utils: { randomPrivateKey: () => e.randomBytes(e.nByteLength) }, GuBytes: y };
}
const to = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const kv = BigInt(1), _c = BigInt(2), Lv = BigInt(3), qv = BigInt(5);
BigInt(8);
function Mv(t) {
  const e = BigInt(10), i = BigInt(20), r = BigInt(40), s = BigInt(80), n = to, o = t * t % n * t % n, a = ht(o, _c, n) * o % n, c = ht(a, kv, n) * t % n, h = ht(c, qv, n) * c % n, l = ht(h, e, n) * h % n, u = ht(l, i, n) * l % n, d = ht(u, r, n) * u % n, f = ht(d, s, n) * d % n, p = ht(f, s, n) * d % n, g = ht(p, e, n) * h % n;
  return { pow_p_5_8: ht(g, _c, n) * t % n, b2: o };
}
function zv(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
const io = Uv({ P: to, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (t) => {
  const e = to, { pow_p_5_8: i, b2: r } = Mv(t);
  return Le(ht(i, Lv, e) * r, e);
}, adjustScalarBytes: zv, randomBytes: rr });
function Ic(t) {
  t.lowS !== void 0 && Gi("lowS", t.lowS), t.prehash !== void 0 && Gi("prehash", t.prehash);
}
function Fv(t) {
  const e = Su(t);
  sr(e, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
  const { endo: i, Fp: r, a: s } = e;
  if (i) {
    if (!r.eql(s, r.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof i != "object" || typeof i.beta != "bigint" || typeof i.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: Hv, hexToBytes: Vv } = Iv;
class Kv extends Error {
  constructor(e = "") {
    super(e);
  }
}
const Ct = { Err: Kv, _tlv: { encode: (t, e) => {
  const { Err: i } = Ct;
  if (t < 0 || t > 256) throw new i("tlv.encode: wrong tag");
  if (e.length & 1) throw new i("tlv.encode: unpadded data");
  const r = e.length / 2, s = Mi(r);
  if (s.length / 2 & 128) throw new i("tlv.encode: long form length too big");
  const n = r > 127 ? Mi(s.length / 2 | 128) : "";
  return Mi(t) + n + s + e;
}, decode(t, e) {
  const { Err: i } = Ct;
  let r = 0;
  if (t < 0 || t > 256) throw new i("tlv.encode: wrong tag");
  if (e.length < 2 || e[r++] !== t) throw new i("tlv.decode: wrong tlv");
  const s = e[r++], n = !!(s & 128);
  let o = 0;
  if (!n) o = s;
  else {
    const c = s & 127;
    if (!c) throw new i("tlv.decode(long): indefinite length not supported");
    if (c > 4) throw new i("tlv.decode(long): byte length is too big");
    const h = e.subarray(r, r + c);
    if (h.length !== c) throw new i("tlv.decode: length bytes not complete");
    if (h[0] === 0) throw new i("tlv.decode(long): zero leftmost byte");
    for (const l of h) o = o << 8 | l;
    if (r += c, o < 128) throw new i("tlv.decode(long): not minimal encoding");
  }
  const a = e.subarray(r, r + o);
  if (a.length !== o) throw new i("tlv.decode: wrong value length");
  return { v: a, l: e.subarray(r + o) };
} }, _int: { encode(t) {
  const { Err: e } = Ct;
  if (t < Tt) throw new e("integer: negative integers are not allowed");
  let i = Mi(t);
  if (Number.parseInt(i[0], 16) & 8 && (i = "00" + i), i.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
  return i;
}, decode(t) {
  const { Err: e } = Ct;
  if (t[0] & 128) throw new e("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
  return Hv(t);
} }, toSig(t) {
  const { Err: e, _int: i, _tlv: r } = Ct, s = typeof t == "string" ? Vv(t) : t;
  Mr(s);
  const { v: n, l: o } = r.decode(48, s);
  if (o.length) throw new e("invalid signature: left bytes after parsing");
  const { v: a, l: c } = r.decode(2, n), { v: h, l } = r.decode(2, c);
  if (l.length) throw new e("invalid signature: left bytes after parsing");
  return { r: i.decode(a), s: i.decode(h) };
}, hexFromSig(t) {
  const { _tlv: e, _int: i } = Ct, r = e.encode(2, i.encode(t.r)), s = e.encode(2, i.encode(t.s)), n = r + s;
  return e.encode(48, n);
} }, Tt = BigInt(0), me = BigInt(1);
BigInt(2);
const Sc = BigInt(3);
BigInt(4);
function Wv(t) {
  const e = Fv(t), { Fp: i } = e, r = bu(e.n, e.nBitLength), s = e.toBytes || ((g, y, w) => {
    const m = y.toAffine();
    return Ar(Uint8Array.from([4]), i.toBytes(m.x), i.toBytes(m.y));
  }), n = e.fromBytes || ((g) => {
    const y = g.subarray(1), w = i.fromBytes(y.subarray(0, i.BYTES)), m = i.fromBytes(y.subarray(i.BYTES, 2 * i.BYTES));
    return { x: w, y: m };
  });
  function o(g) {
    const { a: y, b: w } = e, m = i.sqr(g), b = i.mul(m, g);
    return i.add(i.add(b, i.mul(g, y)), w);
  }
  if (!i.eql(i.sqr(e.Gy), o(e.Gx))) throw new Error("bad generator point: equation left != right");
  function a(g) {
    return ks(g, me, e.n);
  }
  function c(g) {
    const { allowedPrivateKeyLengths: y, nByteLength: w, wrapPrivateKey: m, n: b } = e;
    if (y && typeof g != "bigint") {
      if (li(g) && (g = Yi(g)), typeof g != "string" || !y.includes(g.length)) throw new Error("invalid private key");
      g = g.padStart(w * 2, "0");
    }
    let E;
    try {
      E = typeof g == "bigint" ? g : ni(Ve("private key", g, w));
    } catch {
      throw new Error("invalid private key, expected hex or " + w + " bytes, got " + typeof g);
    }
    return m && (E = Le(E, b)), Nt("private key", E, me, b), E;
  }
  function h(g) {
    if (!(g instanceof d)) throw new Error("ProjectivePoint expected");
  }
  const l = Qn((g, y) => {
    const { px: w, py: m, pz: b } = g;
    if (i.eql(b, i.ONE)) return { x: w, y: m };
    const E = g.is0();
    y == null && (y = E ? i.ONE : i.inv(b));
    const $ = i.mul(w, y), O = i.mul(m, y), D = i.mul(b, y);
    if (E) return { x: i.ZERO, y: i.ZERO };
    if (!i.eql(D, i.ONE)) throw new Error("invZ was invalid");
    return { x: $, y: O };
  }), u = Qn((g) => {
    if (g.is0()) {
      if (e.allowInfinityPoint && !i.is0(g.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: y, y: w } = g.toAffine();
    if (!i.isValid(y) || !i.isValid(w)) throw new Error("bad point: x or y not FE");
    const m = i.sqr(w), b = o(y);
    if (!i.eql(m, b)) throw new Error("bad point: equation left != right");
    if (!g.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class d {
    constructor(y, w, m) {
      if (this.px = y, this.py = w, this.pz = m, y == null || !i.isValid(y)) throw new Error("x required");
      if (w == null || !i.isValid(w)) throw new Error("y required");
      if (m == null || !i.isValid(m)) throw new Error("z required");
      Object.freeze(this);
    }
    static fromAffine(y) {
      const { x: w, y: m } = y || {};
      if (!y || !i.isValid(w) || !i.isValid(m)) throw new Error("invalid affine point");
      if (y instanceof d) throw new Error("projective point not allowed");
      const b = (E) => i.eql(E, i.ZERO);
      return b(w) && b(m) ? d.ZERO : new d(w, m, i.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(y) {
      const w = i.invertBatch(y.map((m) => m.pz));
      return y.map((m, b) => m.toAffine(w[b])).map(d.fromAffine);
    }
    static fromHex(y) {
      const w = d.fromAffine(n(Ve("pointHex", y)));
      return w.assertValidity(), w;
    }
    static fromPrivateKey(y) {
      return d.BASE.multiply(c(y));
    }
    static msm(y, w) {
      return jv(d, r, y, w);
    }
    _setWindowSize(y) {
      p.setWindowSize(this, y);
    }
    assertValidity() {
      u(this);
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (i.isOdd) return !i.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    equals(y) {
      h(y);
      const { px: w, py: m, pz: b } = this, { px: E, py: $, pz: O } = y, D = i.eql(i.mul(w, O), i.mul(E, b)), x = i.eql(i.mul(m, O), i.mul($, b));
      return D && x;
    }
    negate() {
      return new d(this.px, i.neg(this.py), this.pz);
    }
    double() {
      const { a: y, b: w } = e, m = i.mul(w, Sc), { px: b, py: E, pz: $ } = this;
      let O = i.ZERO, D = i.ZERO, x = i.ZERO, I = i.mul(b, b), q = i.mul(E, E), B = i.mul($, $), k = i.mul(b, E);
      return k = i.add(k, k), x = i.mul(b, $), x = i.add(x, x), O = i.mul(y, x), D = i.mul(m, B), D = i.add(O, D), O = i.sub(q, D), D = i.add(q, D), D = i.mul(O, D), O = i.mul(k, O), x = i.mul(m, x), B = i.mul(y, B), k = i.sub(I, B), k = i.mul(y, k), k = i.add(k, x), x = i.add(I, I), I = i.add(x, I), I = i.add(I, B), I = i.mul(I, k), D = i.add(D, I), B = i.mul(E, $), B = i.add(B, B), I = i.mul(B, k), O = i.sub(O, I), x = i.mul(B, q), x = i.add(x, x), x = i.add(x, x), new d(O, D, x);
    }
    add(y) {
      h(y);
      const { px: w, py: m, pz: b } = this, { px: E, py: $, pz: O } = y;
      let D = i.ZERO, x = i.ZERO, I = i.ZERO;
      const q = e.a, B = i.mul(e.b, Sc);
      let k = i.mul(w, E), M = i.mul(m, $), C = i.mul(b, O), _ = i.add(w, m), v = i.add(E, $);
      _ = i.mul(_, v), v = i.add(k, M), _ = i.sub(_, v), v = i.add(w, b);
      let P = i.add(E, O);
      return v = i.mul(v, P), P = i.add(k, C), v = i.sub(v, P), P = i.add(m, b), D = i.add($, O), P = i.mul(P, D), D = i.add(M, C), P = i.sub(P, D), I = i.mul(q, v), D = i.mul(B, C), I = i.add(D, I), D = i.sub(M, I), I = i.add(M, I), x = i.mul(D, I), M = i.add(k, k), M = i.add(M, k), C = i.mul(q, C), v = i.mul(B, v), M = i.add(M, C), C = i.sub(k, C), C = i.mul(q, C), v = i.add(v, C), k = i.mul(M, v), x = i.add(x, k), k = i.mul(P, v), D = i.mul(_, D), D = i.sub(D, k), k = i.mul(_, M), I = i.mul(P, I), I = i.add(I, k), new d(D, x, I);
    }
    subtract(y) {
      return this.add(y.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(y) {
      return p.wNAFCached(this, y, d.normalizeZ);
    }
    multiplyUnsafe(y) {
      const { endo: w, n: m } = e;
      Nt("scalar", y, Tt, m);
      const b = d.ZERO;
      if (y === Tt) return b;
      if (this.is0() || y === me) return this;
      if (!w || p.hasPrecomputes(this)) return p.wNAFCachedUnsafe(this, y, d.normalizeZ);
      let { k1neg: E, k1: $, k2neg: O, k2: D } = w.splitScalar(y), x = b, I = b, q = this;
      for (; $ > Tt || D > Tt; ) $ & me && (x = x.add(q)), D & me && (I = I.add(q)), q = q.double(), $ >>= me, D >>= me;
      return E && (x = x.negate()), O && (I = I.negate()), I = new d(i.mul(I.px, w.beta), I.py, I.pz), x.add(I);
    }
    multiply(y) {
      const { endo: w, n: m } = e;
      Nt("scalar", y, me, m);
      let b, E;
      if (w) {
        const { k1neg: $, k1: O, k2neg: D, k2: x } = w.splitScalar(y);
        let { p: I, f: q } = this.wNAF(O), { p: B, f: k } = this.wNAF(x);
        I = p.constTimeNegate($, I), B = p.constTimeNegate(D, B), B = new d(i.mul(B.px, w.beta), B.py, B.pz), b = I.add(B), E = q.add(k);
      } else {
        const { p: $, f: O } = this.wNAF(y);
        b = $, E = O;
      }
      return d.normalizeZ([b, E])[0];
    }
    multiplyAndAddUnsafe(y, w, m) {
      const b = d.BASE, E = (O, D) => D === Tt || D === me || !O.equals(b) ? O.multiplyUnsafe(D) : O.multiply(D), $ = E(this, w).add(E(y, m));
      return $.is0() ? void 0 : $;
    }
    toAffine(y) {
      return l(this, y);
    }
    isTorsionFree() {
      const { h: y, isTorsionFree: w } = e;
      if (y === me) return !0;
      if (w) return w(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: y, clearCofactor: w } = e;
      return y === me ? this : w ? w(d, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(y = !0) {
      return Gi("isCompressed", y), this.assertValidity(), s(d, this, y);
    }
    toHex(y = !0) {
      return Gi("isCompressed", y), Yi(this.toRawBytes(y));
    }
  }
  d.BASE = new d(e.Gx, e.Gy, i.ONE), d.ZERO = new d(i.ZERO, i.ONE, i.ZERO);
  const f = e.nBitLength, p = Rv(d, e.endo ? Math.ceil(f / 2) : f);
  return { CURVE: e, ProjectivePoint: d, normPrivateKeyToScalar: c, weierstrassEquation: o, isWithinCurveOrder: a };
}
function Gv(t) {
  const e = Su(t);
  return sr(e, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: !0, ...e });
}
function Yv(t) {
  const e = Gv(t), { Fp: i, n: r } = e, s = i.BYTES + 1, n = 2 * i.BYTES + 1;
  function o(C) {
    return Le(C, r);
  }
  function a(C) {
    return eo(C, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: h, weierstrassEquation: l, isWithinCurveOrder: u } = Wv({ ...e, toBytes(C, _, v) {
    const P = _.toAffine(), A = i.toBytes(P.x), S = Ar;
    return Gi("isCompressed", v), v ? S(Uint8Array.from([_.hasEvenY() ? 2 : 3]), A) : S(Uint8Array.from([4]), A, i.toBytes(P.y));
  }, fromBytes(C) {
    const _ = C.length, v = C[0], P = C.subarray(1);
    if (_ === s && (v === 2 || v === 3)) {
      const A = ni(P);
      if (!ks(A, me, i.ORDER)) throw new Error("Point is not on curve");
      const S = l(A);
      let R;
      try {
        R = i.sqrt(S);
      } catch (L) {
        const z = L instanceof Error ? ": " + L.message : "";
        throw new Error("Point is not on curve" + z);
      }
      const U = (R & me) === me;
      return (v & 1) === 1 !== U && (R = i.neg(R)), { x: A, y: R };
    } else if (_ === n && v === 4) {
      const A = i.fromBytes(P.subarray(0, i.BYTES)), S = i.fromBytes(P.subarray(i.BYTES, 2 * i.BYTES));
      return { x: A, y: S };
    } else {
      const A = s, S = n;
      throw new Error("invalid Point, expected length of " + A + ", or uncompressed " + S + ", got " + _);
    }
  } }), d = (C) => Yi(Zi(C, e.nByteLength));
  function f(C) {
    const _ = r >> me;
    return C > _;
  }
  function p(C) {
    return f(C) ? o(-C) : C;
  }
  const g = (C, _, v) => ni(C.slice(_, v));
  class y {
    constructor(_, v, P) {
      this.r = _, this.s = v, this.recovery = P, this.assertValidity();
    }
    static fromCompact(_) {
      const v = e.nByteLength;
      return _ = Ve("compactSignature", _, v * 2), new y(g(_, 0, v), g(_, v, 2 * v));
    }
    static fromDER(_) {
      const { r: v, s: P } = Ct.toSig(Ve("DER", _));
      return new y(v, P);
    }
    assertValidity() {
      Nt("r", this.r, me, r), Nt("s", this.s, me, r);
    }
    addRecoveryBit(_) {
      return new y(this.r, this.s, _);
    }
    recoverPublicKey(_) {
      const { r: v, s: P, recovery: A } = this, S = O(Ve("msgHash", _));
      if (A == null || ![0, 1, 2, 3].includes(A)) throw new Error("recovery id invalid");
      const R = A === 2 || A === 3 ? v + e.n : v;
      if (R >= i.ORDER) throw new Error("recovery id 2 or 3 invalid");
      const U = A & 1 ? "03" : "02", L = c.fromHex(U + d(R)), z = a(R), F = o(-S * z), V = o(P * z), G = c.BASE.multiplyAndAddUnsafe(L, F, V);
      if (!G) throw new Error("point at infinify");
      return G.assertValidity(), G;
    }
    hasHighS() {
      return f(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new y(this.r, o(-this.s), this.recovery) : this;
    }
    toDERRawBytes() {
      return Ji(this.toDERHex());
    }
    toDERHex() {
      return Ct.hexFromSig({ r: this.r, s: this.s });
    }
    toCompactRawBytes() {
      return Ji(this.toCompactHex());
    }
    toCompactHex() {
      return d(this.r) + d(this.s);
    }
  }
  const w = { isValidPrivateKey(C) {
    try {
      return h(C), !0;
    } catch {
      return !1;
    }
  }, normPrivateKeyToScalar: h, randomPrivateKey: () => {
    const C = Eu(e.n);
    return Cv(e.randomBytes(C), e.n);
  }, precompute(C = 8, _ = c.BASE) {
    return _._setWindowSize(C), _.multiply(BigInt(3)), _;
  } };
  function m(C, _ = !0) {
    return c.fromPrivateKey(C).toRawBytes(_);
  }
  function b(C) {
    const _ = li(C), v = typeof C == "string", P = (_ || v) && C.length;
    return _ ? P === s || P === n : v ? P === 2 * s || P === 2 * n : C instanceof c;
  }
  function E(C, _, v = !0) {
    if (b(C)) throw new Error("first arg must be private key");
    if (!b(_)) throw new Error("second arg must be public key");
    return c.fromHex(_).multiply(h(C)).toRawBytes(v);
  }
  const $ = e.bits2int || function(C) {
    if (C.length > 8192) throw new Error("input is too large");
    const _ = ni(C), v = C.length * 8 - e.nBitLength;
    return v > 0 ? _ >> BigInt(v) : _;
  }, O = e.bits2int_modN || function(C) {
    return o($(C));
  }, D = Lo(e.nBitLength);
  function x(C) {
    return Nt("num < 2^" + e.nBitLength, C, Tt, D), Zi(C, e.nByteLength);
  }
  function I(C, _, v = q) {
    if (["recovered", "canonical"].some((ee) => ee in v)) throw new Error("sign() legacy options not supported");
    const { hash: P, randomBytes: A } = e;
    let { lowS: S, prehash: R, extraEntropy: U } = v;
    S == null && (S = !0), C = Ve("msgHash", C), Ic(v), R && (C = Ve("prehashed msgHash", P(C)));
    const L = O(C), z = h(_), F = [x(z), x(L)];
    if (U != null && U !== !1) {
      const ee = U === !0 ? A(i.BYTES) : U;
      F.push(Ve("extraEntropy", ee));
    }
    const V = Ar(...F), G = L;
    function se(ee) {
      const Y = $(ee);
      if (!u(Y)) return;
      const xe = a(Y), Ee = c.BASE.multiply(Y).toAffine(), Ce = o(Ee.x);
      if (Ce === Tt) return;
      const Ye = o(xe * o(G + Ce * z));
      if (Ye === Tt) return;
      let Je = (Ee.x === Ce ? 0 : 2) | Number(Ee.y & me), wi = Ye;
      return S && f(Ye) && (wi = p(Ye), Je ^= 1), new y(Ce, wi, Je);
    }
    return { seed: V, k2sig: se };
  }
  const q = { lowS: e.lowS, prehash: !1 }, B = { lowS: e.lowS, prehash: !1 };
  function k(C, _, v = q) {
    const { seed: P, k2sig: A } = I(C, _, v), S = e;
    return yu(S.hash.outputLen, S.nByteLength, S.hmac)(P, A);
  }
  c.BASE._setWindowSize(8);
  function M(C, _, v, P = B) {
    var Ye;
    const A = C;
    _ = Ve("msgHash", _), v = Ve("publicKey", v);
    const { lowS: S, prehash: R, format: U } = P;
    if (Ic(P), "strict" in P) throw new Error("options.strict was renamed to lowS");
    if (U !== void 0 && U !== "compact" && U !== "der") throw new Error("format must be compact or der");
    const L = typeof A == "string" || li(A), z = !L && !U && typeof A == "object" && A !== null && typeof A.r == "bigint" && typeof A.s == "bigint";
    if (!L && !z) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let F, V;
    try {
      if (z && (F = new y(A.r, A.s)), L) {
        try {
          U !== "compact" && (F = y.fromDER(A));
        } catch (Je) {
          if (!(Je instanceof Ct.Err)) throw Je;
        }
        !F && U !== "der" && (F = y.fromCompact(A));
      }
      V = c.fromHex(v);
    } catch {
      return !1;
    }
    if (!F || S && F.hasHighS()) return !1;
    R && (_ = e.hash(_));
    const { r: G, s: se } = F, ee = O(_), Y = a(se), xe = o(ee * Y), Ee = o(G * Y), Ce = (Ye = c.BASE.multiplyAndAddUnsafe(V, xe, Ee)) == null ? void 0 : Ye.toAffine();
    return Ce ? o(Ce.x) === G : !1;
  }
  return { CURVE: e, getPublicKey: m, getSharedSecret: E, sign: k, verify: M, ProjectivePoint: c, Signature: y, utils: w };
}
function Jv(t) {
  return { hash: t, hmac: (e, ...i) => Rs(t, e, eb(...i)), randomBytes: rr };
}
function Zv(t, e) {
  const i = (r) => Yv({ ...t, ...Jv(r) });
  return { ...i(e), create: i };
}
const Du = bu(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")), Qv = Du.create(BigInt("-3")), Xv = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), e0 = Zv({ a: Qv, b: Xv, Fp: Du, n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"), h: BigInt(1), lowS: !1 }, qr), $u = "base10", Ne = "base16", lt = "base64pad", Mt = "base64url", zr = "utf8", Ou = 0, Rt = 1, Fr = 2, t0 = 0, Dc = 1, Er = 12, qo = 32;
function i0() {
  const t = io.utils.randomPrivateKey(), e = io.getPublicKey(t);
  return { privateKey: qe(t, Ne), publicKey: qe(e, Ne) };
}
function ro() {
  const t = rr(qo);
  return qe(t, Ne);
}
function r0(t, e) {
  const i = io.getSharedSecret(tt(t, Ne), tt(e, Ne)), r = av(qr, i, void 0, void 0, qo);
  return qe(r, Ne);
}
function ds(t) {
  const e = qr(tt(t, Ne));
  return qe(e, Ne);
}
function vt(t) {
  const e = qr(tt(t, zr));
  return qe(e, Ne);
}
function Pu(t) {
  return tt(`${t}`, $u);
}
function ui(t) {
  return Number(qe(t, $u));
}
function xu(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Au(t) {
  const e = t.replace(/-/g, "+").replace(/_/g, "/"), i = (4 - e.length % 4) % 4;
  return e + "=".repeat(i);
}
function s0(t) {
  const e = Pu(typeof t.type < "u" ? t.type : Ou);
  if (ui(e) === Rt && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const i = typeof t.senderPublicKey < "u" ? tt(t.senderPublicKey, Ne) : void 0, r = typeof t.iv < "u" ? tt(t.iv, Ne) : rr(Er), s = tt(t.symKey, Ne), n = pu(s, r).encrypt(tt(t.message, zr)), o = Cu({ type: e, sealed: n, iv: r, senderPublicKey: i });
  return t.encoding === Mt ? xu(o) : o;
}
function n0(t) {
  const e = tt(t.symKey, Ne), { sealed: i, iv: r } = Cr({ encoded: t.encoded, encoding: t.encoding }), s = pu(e, r).decrypt(i);
  if (s === null) throw new Error("Failed to decrypt");
  return qe(s, zr);
}
function o0(t, e) {
  const i = Pu(Fr), r = rr(Er), s = tt(t, zr), n = Cu({ type: i, sealed: s, iv: r });
  return e === Mt ? xu(n) : n;
}
function a0(t, e) {
  const { sealed: i } = Cr({ encoded: t, encoding: e });
  return qe(i, zr);
}
function Cu(t) {
  if (ui(t.type) === Fr) return qe(vr([t.type, t.sealed]), lt);
  if (ui(t.type) === Rt) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return qe(vr([t.type, t.senderPublicKey, t.iv, t.sealed]), lt);
  }
  return qe(vr([t.type, t.iv, t.sealed]), lt);
}
function Cr(t) {
  const e = (t.encoding || lt) === Mt ? Au(t.encoded) : t.encoded, i = tt(e, lt), r = i.slice(t0, Dc), s = Dc;
  if (ui(r) === Rt) {
    const c = s + qo, h = c + Er, l = i.slice(s, c), u = i.slice(c, h), d = i.slice(h);
    return { type: r, sealed: d, iv: u, senderPublicKey: l };
  }
  if (ui(r) === Fr) {
    const c = i.slice(s), h = rr(Er);
    return { type: r, sealed: c, iv: h };
  }
  const n = s + Er, o = i.slice(s, n), a = i.slice(n);
  return { type: r, sealed: a, iv: o };
}
function c0(t, e) {
  const i = Cr({ encoded: t, encoding: e == null ? void 0 : e.encoding });
  return Tu({ type: ui(i.type), senderPublicKey: typeof i.senderPublicKey < "u" ? qe(i.senderPublicKey, Ne) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Tu(t) {
  const e = (t == null ? void 0 : t.type) || Ou;
  if (e === Rt) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function $c(t) {
  return t.type === Rt && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Oc(t) {
  return t.type === Fr;
}
function h0(t) {
  const e = Buffer.from(t.x, "base64"), i = Buffer.from(t.y, "base64");
  return vr([new Uint8Array([4]), e, i]);
}
function l0(t, e) {
  const [i, r, s] = t.split("."), n = Buffer.from(Au(s), "base64");
  if (n.length !== 64) throw new Error("Invalid signature length");
  const o = n.slice(0, 32), a = n.slice(32, 64), c = `${i}.${r}`, h = qr(c), l = h0(e);
  if (!e0.verify(vr([o, a]), h, l)) throw new Error("Invalid signature");
  return Vn(t).payload;
}
const u0 = "irn";
function _s(t) {
  return (t == null ? void 0 : t.relay) || { protocol: u0 };
}
function wr(t) {
  const e = mw[t];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
function d0(t, e = "-") {
  const i = {}, r = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(r)) {
      const n = s.replace(r, ""), o = t[s];
      i[n] = o;
    }
  }), i;
}
function Pc(t) {
  if (!t.includes("wc:")) {
    const h = eu(t);
    h != null && h.includes("wc:") && (t = h);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), i = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), s = t.substring(e + 1, i).split("@"), n = typeof i < "u" ? t.substring(i) : "", o = new URLSearchParams(n), a = {};
  o.forEach((h, l) => {
    a[l] = h;
  });
  const c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return { protocol: r, topic: p0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: d0(a), methods: c, expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function p0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function f0(t, e = "-") {
  const i = "relay", r = {};
  return Object.keys(t).forEach((s) => {
    const n = s, o = i + e + n;
    t[n] && (r[o] = t[n]);
  }), r;
}
function xc(t) {
  const e = new URLSearchParams(), i = f0(t.relay);
  Object.keys(i).sort().forEach((s) => {
    e.set(s, i[s]);
  }), e.set("symKey", t.symKey), t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e.set("methods", t.methods.join(","));
  const r = e.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${r}`;
}
function es(t, e, i) {
  return `${t}?wc_ev=${i}&topic=${e}`;
}
var g0 = Object.defineProperty, y0 = Object.defineProperties, m0 = Object.getOwnPropertyDescriptors, Ac = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, b0 = Object.prototype.propertyIsEnumerable, Cc = (t, e, i) => e in t ? g0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, v0 = (t, e) => {
  for (var i in e || (e = {})) w0.call(e, i) && Cc(t, i, e[i]);
  if (Ac) for (var i of Ac(e)) b0.call(e, i) && Cc(t, i, e[i]);
  return t;
}, E0 = (t, e) => y0(t, m0(e));
function nr(t) {
  const e = [];
  return t.forEach((i) => {
    const [r, s] = i.split(":");
    e.push(`${r}:${s}`);
  }), e;
}
function _0(t) {
  const e = [];
  return Object.values(t).forEach((i) => {
    e.push(...nr(i.accounts));
  }), e;
}
function I0(t, e) {
  const i = [];
  return Object.values(t).forEach((r) => {
    nr(r.accounts).includes(e) && i.push(...r.methods);
  }), i;
}
function S0(t, e) {
  const i = [];
  return Object.values(t).forEach((r) => {
    nr(r.accounts).includes(e) && i.push(...r.events);
  }), i;
}
function Ls(t) {
  return t.includes(":");
}
function zi(t) {
  return Ls(t) ? t.split(":")[0] : t;
}
function Tc(t) {
  var e, i, r;
  const s = {};
  if (!Vt(t)) return s;
  for (const [n, o] of Object.entries(t)) {
    const a = Ls(n) ? [n] : o.chains, c = o.methods || [], h = o.events || [], l = zi(n);
    s[l] = E0(v0({}, s[l]), { chains: Et(a, (e = s[l]) == null ? void 0 : e.chains), methods: Et(c, (i = s[l]) == null ? void 0 : i.methods), events: Et(h, (r = s[l]) == null ? void 0 : r.events) });
  }
  return s;
}
function D0(t) {
  const e = {};
  return t == null || t.forEach((i) => {
    var r;
    const [s, n] = i.split(":");
    e[s] || (e[s] = { accounts: [], chains: [], events: [], methods: [] }), e[s].accounts.push(i), (r = e[s].chains) == null || r.push(`${s}:${n}`);
  }), e;
}
function Nc(t, e) {
  e = e.map((r) => r.replace("did:pkh:", ""));
  const i = D0(e);
  for (const [r, s] of Object.entries(i)) s.methods ? s.methods = Et(s.methods, t) : s.methods = t, s.events = ["chainChanged", "accountsChanged"];
  return i;
}
function $0(t, e) {
  var i, r, s, n, o, a;
  const c = Tc(t), h = Tc(e), l = {}, u = Object.keys(c).concat(Object.keys(h));
  for (const d of u) l[d] = { chains: Et((i = c[d]) == null ? void 0 : i.chains, (r = h[d]) == null ? void 0 : r.chains), methods: Et((s = c[d]) == null ? void 0 : s.methods, (n = h[d]) == null ? void 0 : n.methods), events: Et((o = c[d]) == null ? void 0 : o.events, (a = h[d]) == null ? void 0 : a.events) };
  return l;
}
const O0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, P0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function j(t, e) {
  const { message: i, code: r } = P0[t];
  return { message: e ? `${i} ${e}` : i, code: r };
}
function te(t, e) {
  const { message: i, code: r } = O0[t];
  return { message: e ? `${i} ${e}` : i, code: r };
}
function ut(t, e) {
  return !!Array.isArray(t);
}
function Vt(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function De(t) {
  return typeof t > "u";
}
function ue(t, e) {
  return e && De(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Mo(t, e) {
  return e && De(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function x0(t, e) {
  const { requiredNamespaces: i } = e, r = Object.keys(t.namespaces), s = Object.keys(i);
  let n = !0;
  return ri(s, r) ? (r.forEach((o) => {
    const { accounts: a, methods: c, events: h } = t.namespaces[o], l = nr(a), u = i[o];
    (!ri(Yl(o, u), l) || !ri(u.methods, c) || !ri(u.events, h)) && (n = !1);
  }), n) : !1;
}
function Is(t) {
  return ue(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function A0(t) {
  if (ue(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const i = e[0] + ":" + e[1];
      return !!e[2] && Is(i);
    }
  }
  return !1;
}
function C0(t) {
  function e(i) {
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (ue(t, !1)) {
      if (e(t)) return !0;
      const i = eu(t);
      return e(i);
    }
  } catch {
  }
  return !1;
}
function T0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function N0(t) {
  return t == null ? void 0 : t.topic;
}
function R0(t, e) {
  let i = null;
  return ue(t == null ? void 0 : t.publicKey, !1) || (i = j("MISSING_OR_INVALID", `${e} controller public key should be a string`)), i;
}
function Rc(t) {
  let e = !0;
  return ut(t) ? t.length && (e = t.every((i) => ue(i, !1))) : e = !1, e;
}
function j0(t, e, i) {
  let r = null;
  return ut(e) && e.length ? e.forEach((s) => {
    r || Is(s) || (r = te("UNSUPPORTED_CHAINS", `${i}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Is(t) || (r = te("UNSUPPORTED_CHAINS", `${i}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function B0(t, e, i) {
  let r = null;
  return Object.entries(t).forEach(([s, n]) => {
    if (r) return;
    const o = j0(s, Yl(s, n), `${e} ${i}`);
    o && (r = o);
  }), r;
}
function U0(t, e) {
  let i = null;
  return ut(t) ? t.forEach((r) => {
    i || A0(r) || (i = te("UNSUPPORTED_ACCOUNTS", `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
  }) : i = te("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), i;
}
function k0(t, e) {
  let i = null;
  return Object.values(t).forEach((r) => {
    if (i) return;
    const s = U0(r == null ? void 0 : r.accounts, `${e} namespace`);
    s && (i = s);
  }), i;
}
function L0(t, e) {
  let i = null;
  return Rc(t == null ? void 0 : t.methods) ? Rc(t == null ? void 0 : t.events) || (i = te("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : i = te("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), i;
}
function Nu(t, e) {
  let i = null;
  return Object.values(t).forEach((r) => {
    if (i) return;
    const s = L0(r, `${e}, namespace`);
    s && (i = s);
  }), i;
}
function q0(t, e, i) {
  let r = null;
  if (t && Vt(t)) {
    const s = Nu(t, e);
    s && (r = s);
    const n = B0(t, e, i);
    n && (r = n);
  } else r = j("MISSING_OR_INVALID", `${e}, ${i} should be an object with data`);
  return r;
}
function En(t, e) {
  let i = null;
  if (t && Vt(t)) {
    const r = Nu(t, e);
    r && (i = r);
    const s = k0(t, e);
    s && (i = s);
  } else i = j("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return i;
}
function Ru(t) {
  return ue(t.protocol, !0);
}
function M0(t, e) {
  let i = !1;
  return t ? t && ut(t) && t.length && t.forEach((r) => {
    i = Ru(r);
  }) : i = !0, i;
}
function z0(t) {
  return typeof t == "number";
}
function ke(t) {
  return typeof t < "u" && typeof t !== null;
}
function F0(t) {
  return !(!t || typeof t != "object" || !t.code || !Mo(t.code, !1) || !t.message || !ue(t.message, !1));
}
function H0(t) {
  return !(De(t) || !ue(t.method, !1));
}
function V0(t) {
  return !(De(t) || De(t.result) && De(t.error) || !Mo(t.id, !1) || !ue(t.jsonrpc, !1));
}
function K0(t) {
  return !(De(t) || !ue(t.name, !1));
}
function jc(t, e) {
  return !(!Is(e) || !_0(t).includes(e));
}
function W0(t, e, i) {
  return ue(i, !1) ? I0(t, e).includes(i) : !1;
}
function G0(t, e, i) {
  return ue(i, !1) ? S0(t, e).includes(i) : !1;
}
function Bc(t, e, i) {
  let r = null;
  const s = Y0(t), n = J0(e), o = Object.keys(s), a = Object.keys(n), c = Uc(Object.keys(t)), h = Uc(Object.keys(e)), l = c.filter((u) => !h.includes(u));
  return l.length && (r = j("NON_CONFORMING_NAMESPACES", `${i} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)), ri(o, a) || (r = j("NON_CONFORMING_NAMESPACES", `${i} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((u) => {
    if (!u.includes(":") || r) return;
    const d = nr(e[u].accounts);
    d.includes(u) || (r = j("NON_CONFORMING_NAMESPACES", `${i} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${d.toString()}`));
  }), o.forEach((u) => {
    r || (ri(s[u].methods, n[u].methods) ? ri(s[u].events, n[u].events) || (r = j("NON_CONFORMING_NAMESPACES", `${i} namespaces events don't satisfy namespace events for ${u}`)) : r = j("NON_CONFORMING_NAMESPACES", `${i} namespaces methods don't satisfy namespace methods for ${u}`));
  }), r;
}
function Y0(t) {
  const e = {};
  return Object.keys(t).forEach((i) => {
    var r;
    i.includes(":") ? e[i] = t[i] : (r = t[i].chains) == null || r.forEach((s) => {
      e[s] = { methods: t[i].methods, events: t[i].events };
    });
  }), e;
}
function Uc(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function J0(t) {
  const e = {};
  return Object.keys(t).forEach((i) => {
    if (i.includes(":")) e[i] = t[i];
    else {
      const r = nr(t[i].accounts);
      r == null || r.forEach((s) => {
        e[s] = { accounts: t[i].accounts.filter((n) => n.includes(`${s}:`)), methods: t[i].methods, events: t[i].events };
      });
    }
  }), e;
}
function Z0(t, e) {
  return Mo(t, !1) && t <= e.max && t >= e.min;
}
function kc() {
  const t = kr();
  return new Promise((e) => {
    switch (t) {
      case We.browser:
        e(Q0());
        break;
      case We.reactNative:
        e(X0());
        break;
      case We.node:
        e(eE());
        break;
      default:
        e(!0);
    }
  });
}
function Q0() {
  return ir() && (navigator == null ? void 0 : navigator.onLine);
}
async function X0() {
  if (Kt() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo) {
    const t = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function eE() {
  return !0;
}
function tE(t) {
  switch (kr()) {
    case We.browser:
      iE(t);
      break;
    case We.reactNative:
      rE(t);
      break;
  }
}
function iE(t) {
  !Kt() && ir() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function rE(t) {
  Kt() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && (globalThis == null || globalThis.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
function sE() {
  var t;
  return ir() && oi() ? ((t = oi()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
const _n = {};
class dr {
  static get(e) {
    return _n[e];
  }
  static set(e, i) {
    _n[e] = i;
  }
  static delete(e) {
    delete _n[e];
  }
}
class fi {
}
let nE = class extends fi {
  constructor(e) {
    super();
  }
};
const Lc = N.FIVE_SECONDS, gi = { pulse: "heartbeat_pulse" };
let oE = class ju extends nE {
  constructor(e) {
    super(e), this.events = new it.EventEmitter(), this.interval = Lc, this.interval = (e == null ? void 0 : e.interval) || Lc;
  }
  static async init(e) {
    const i = new ju(e);
    return await i.init(), i;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), N.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(gi.pulse);
  }
};
const aE = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, cE = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, hE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function lE(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    uE(t);
    return;
  }
  return e;
}
function uE(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function ts(t, e = {}) {
  if (typeof t != "string")
    return t;
  if (t[0] === '"' && t[t.length - 1] === '"' && t.indexOf("\\") === -1)
    return t.slice(1, -1);
  const i = t.trim();
  if (i.length <= 9)
    switch (i.toLowerCase()) {
      case "true":
        return !0;
      case "false":
        return !1;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!hE.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (aE.test(t) || cE.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, lE);
    }
    return JSON.parse(t);
  } catch (r) {
    if (e.strict)
      throw r;
    return t;
  }
}
function dE(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function ye(t, ...e) {
  try {
    return dE(t(...e));
  } catch (i) {
    return Promise.reject(i);
  }
}
function pE(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function fE(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function ps(t) {
  if (pE(t))
    return String(t);
  if (fE(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return ps(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
const so = "base64:";
function gE(t) {
  return typeof t == "string" ? t : so + wE(t);
}
function yE(t) {
  return typeof t != "string" || !t.startsWith(so) ? t : mE(t.slice(so.length));
}
function mE(t) {
  return globalThis.Buffer ? Buffer.from(t, "base64") : Uint8Array.from(
    globalThis.atob(t),
    (e) => e.codePointAt(0)
  );
}
function wE(t) {
  return globalThis.Buffer ? Buffer.from(t).toString("base64") : globalThis.btoa(String.fromCodePoint(...t));
}
function Ue(t) {
  var e;
  return t && ((e = t.split("?")[0]) == null ? void 0 : e.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function bE(...t) {
  return Ue(t.join(":"));
}
function is(t) {
  return t = Ue(t), t ? t + ":" : "";
}
function vE(t, e) {
  if (e === void 0)
    return !0;
  let i = 0, r = t.indexOf(":");
  for (; r > -1; )
    i++, r = t.indexOf(":", r + 1);
  return i <= e;
}
function EE(t, e) {
  return e ? t.startsWith(e) && t[t.length - 1] !== "$" : t[t.length - 1] !== "$";
}
const _E = "memory", IE = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: _E,
    getInstance: () => t,
    hasItem(e) {
      return t.has(e);
    },
    getItem(e) {
      return t.get(e) ?? null;
    },
    getItemRaw(e) {
      return t.get(e) ?? null;
    },
    setItem(e, i) {
      t.set(e, i);
    },
    setItemRaw(e, i) {
      t.set(e, i);
    },
    removeItem(e) {
      t.delete(e);
    },
    getKeys() {
      return [...t.keys()];
    },
    clear() {
      t.clear();
    },
    dispose() {
      t.clear();
    }
  };
};
function SE(t = {}) {
  const e = {
    mounts: { "": t.driver || IE() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, i = (h) => {
    for (const l of e.mountpoints)
      if (h.startsWith(l))
        return {
          base: l,
          relativeKey: h.slice(l.length),
          driver: e.mounts[l]
        };
    return {
      base: "",
      relativeKey: h,
      driver: e.mounts[""]
    };
  }, r = (h, l) => e.mountpoints.filter(
    (u) => u.startsWith(h) || l && h.startsWith(u)
  ).map((u) => ({
    relativeBase: h.length > u.length ? h.slice(u.length) : void 0,
    mountpoint: u,
    driver: e.mounts[u]
  })), s = (h, l) => {
    if (e.watching) {
      l = Ue(l);
      for (const u of e.watchListeners)
        u(h, l);
    }
  }, n = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const h in e.mounts)
        e.unwatch[h] = await qc(
          e.mounts[h],
          s,
          h
        );
    }
  }, o = async () => {
    if (e.watching) {
      for (const h in e.unwatch)
        await e.unwatch[h]();
      e.unwatch = {}, e.watching = !1;
    }
  }, a = (h, l, u) => {
    const d = /* @__PURE__ */ new Map(), f = (p) => {
      let g = d.get(p.base);
      return g || (g = {
        driver: p.driver,
        base: p.base,
        items: []
      }, d.set(p.base, g)), g;
    };
    for (const p of h) {
      const g = typeof p == "string", y = Ue(g ? p : p.key), w = g ? void 0 : p.value, m = g || !p.options ? l : { ...l, ...p.options }, b = i(y);
      f(b).items.push({
        key: y,
        value: w,
        relativeKey: b.relativeKey,
        options: m
      });
    }
    return Promise.all([...d.values()].map((p) => u(p))).then(
      (p) => p.flat()
    );
  }, c = {
    // Item
    hasItem(h, l = {}) {
      h = Ue(h);
      const { relativeKey: u, driver: d } = i(h);
      return ye(d.hasItem, u, l);
    },
    getItem(h, l = {}) {
      h = Ue(h);
      const { relativeKey: u, driver: d } = i(h);
      return ye(d.getItem, u, l).then(
        (f) => ts(f)
      );
    },
    getItems(h, l = {}) {
      return a(h, l, (u) => u.driver.getItems ? ye(
        u.driver.getItems,
        u.items.map((d) => ({
          key: d.relativeKey,
          options: d.options
        })),
        l
      ).then(
        (d) => d.map((f) => ({
          key: bE(u.base, f.key),
          value: ts(f.value)
        }))
      ) : Promise.all(
        u.items.map((d) => ye(
          u.driver.getItem,
          d.relativeKey,
          d.options
        ).then((f) => ({
          key: d.key,
          value: ts(f)
        })))
      ));
    },
    getItemRaw(h, l = {}) {
      h = Ue(h);
      const { relativeKey: u, driver: d } = i(h);
      return d.getItemRaw ? ye(d.getItemRaw, u, l) : ye(d.getItem, u, l).then(
        (f) => yE(f)
      );
    },
    async setItem(h, l, u = {}) {
      if (l === void 0)
        return c.removeItem(h);
      h = Ue(h);
      const { relativeKey: d, driver: f } = i(h);
      f.setItem && (await ye(f.setItem, d, ps(l), u), f.watch || s("update", h));
    },
    async setItems(h, l) {
      await a(h, l, async (u) => {
        if (u.driver.setItems)
          return ye(
            u.driver.setItems,
            u.items.map((d) => ({
              key: d.relativeKey,
              value: ps(d.value),
              options: d.options
            })),
            l
          );
        u.driver.setItem && await Promise.all(
          u.items.map((d) => ye(
            u.driver.setItem,
            d.relativeKey,
            ps(d.value),
            d.options
          ))
        );
      });
    },
    async setItemRaw(h, l, u = {}) {
      if (l === void 0)
        return c.removeItem(h, u);
      h = Ue(h);
      const { relativeKey: d, driver: f } = i(h);
      if (f.setItemRaw)
        await ye(f.setItemRaw, d, l, u);
      else if (f.setItem)
        await ye(f.setItem, d, gE(l), u);
      else
        return;
      f.watch || s("update", h);
    },
    async removeItem(h, l = {}) {
      typeof l == "boolean" && (l = { removeMeta: l }), h = Ue(h);
      const { relativeKey: u, driver: d } = i(h);
      d.removeItem && (await ye(d.removeItem, u, l), (l.removeMeta || l.removeMata) && await ye(d.removeItem, u + "$", l), d.watch || s("remove", h));
    },
    // Meta
    async getMeta(h, l = {}) {
      typeof l == "boolean" && (l = { nativeOnly: l }), h = Ue(h);
      const { relativeKey: u, driver: d } = i(h), f = /* @__PURE__ */ Object.create(null);
      if (d.getMeta && Object.assign(f, await ye(d.getMeta, u, l)), !l.nativeOnly) {
        const p = await ye(
          d.getItem,
          u + "$",
          l
        ).then((g) => ts(g));
        p && typeof p == "object" && (typeof p.atime == "string" && (p.atime = new Date(p.atime)), typeof p.mtime == "string" && (p.mtime = new Date(p.mtime)), Object.assign(f, p));
      }
      return f;
    },
    setMeta(h, l, u = {}) {
      return this.setItem(h + "$", l, u);
    },
    removeMeta(h, l = {}) {
      return this.removeItem(h + "$", l);
    },
    // Keys
    async getKeys(h, l = {}) {
      var y;
      h = is(h);
      const u = r(h, !0);
      let d = [];
      const f = [];
      let p = !0;
      for (const w of u) {
        (y = w.driver.flags) != null && y.maxDepth || (p = !1);
        const m = await ye(
          w.driver.getKeys,
          w.relativeBase,
          l
        );
        for (const b of m) {
          const E = w.mountpoint + Ue(b);
          d.some(($) => E.startsWith($)) || f.push(E);
        }
        d = [
          w.mountpoint,
          ...d.filter((b) => !b.startsWith(w.mountpoint))
        ];
      }
      const g = l.maxDepth !== void 0 && !p;
      return f.filter(
        (w) => (!g || vE(w, l.maxDepth)) && EE(w, h)
      );
    },
    // Utils
    async clear(h, l = {}) {
      h = is(h), await Promise.all(
        r(h, !1).map(async (u) => {
          if (u.driver.clear)
            return ye(u.driver.clear, u.relativeBase, l);
          if (u.driver.removeItem) {
            const d = await u.driver.getKeys(u.relativeBase || "", l);
            return Promise.all(
              d.map((f) => u.driver.removeItem(f, l))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((h) => Mc(h))
      );
    },
    async watch(h) {
      return await n(), e.watchListeners.push(h), async () => {
        e.watchListeners = e.watchListeners.filter(
          (l) => l !== h
        ), e.watchListeners.length === 0 && await o();
      };
    },
    async unwatch() {
      e.watchListeners = [], await o();
    },
    // Mount
    mount(h, l) {
      if (h = is(h), h && e.mounts[h])
        throw new Error(`already mounted at ${h}`);
      return h && (e.mountpoints.push(h), e.mountpoints.sort((u, d) => d.length - u.length)), e.mounts[h] = l, e.watching && Promise.resolve(qc(l, s, h)).then((u) => {
        e.unwatch[h] = u;
      }).catch(console.error), c;
    },
    async unmount(h, l = !0) {
      var u, d;
      h = is(h), !(!h || !e.mounts[h]) && (e.watching && h in e.unwatch && ((d = (u = e.unwatch)[h]) == null || d.call(u), delete e.unwatch[h]), l && await Mc(e.mounts[h]), e.mountpoints = e.mountpoints.filter((f) => f !== h), delete e.mounts[h]);
    },
    getMount(h = "") {
      h = Ue(h) + ":";
      const l = i(h);
      return {
        driver: l.driver,
        base: l.base
      };
    },
    getMounts(h = "", l = {}) {
      return h = Ue(h), r(h, l.parents).map((d) => ({
        driver: d.driver,
        base: d.mountpoint
      }));
    },
    // Aliases
    keys: (h, l = {}) => c.getKeys(h, l),
    get: (h, l = {}) => c.getItem(h, l),
    set: (h, l, u = {}) => c.setItem(h, l, u),
    has: (h, l = {}) => c.hasItem(h, l),
    del: (h, l = {}) => c.removeItem(h, l),
    remove: (h, l = {}) => c.removeItem(h, l)
  };
  return c;
}
function qc(t, e, i) {
  return t.watch ? t.watch((r, s) => e(r, i + s)) : () => {
  };
}
async function Mc(t) {
  typeof t.dispose == "function" && await ye(t.dispose);
}
const DE = "idb-keyval";
var $E = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", i = (s) => e + s;
  let r;
  return t.dbName && t.storeName && (r = Qh(t.dbName, t.storeName)), { name: DE, options: t, async hasItem(s) {
    return !(typeof await ia(i(s), r) > "u");
  }, async getItem(s) {
    return await ia(i(s), r) ?? null;
  }, setItem(s, n) {
    return Rd(i(s), n, r);
  }, removeItem(s) {
    return jd(i(s), r);
  }, getKeys() {
    return kd(r);
  }, clear() {
    return Bd(r);
  } };
};
const OE = "WALLET_CONNECT_V2_INDEXED_DB", PE = "keyvaluestorage";
let xE = class {
  constructor() {
    this.indexedDb = SE({ driver: $E({ dbName: OE, storeName: PE }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const i = await this.indexedDb.getItem(e);
    if (i !== null) return i;
  }
  async setItem(e, i) {
    await this.indexedDb.setItem(e, jt(i));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var In = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {}, fs = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(i) {
    return this.hasOwnProperty(i) ? String(this[i]) : null;
  }, t.prototype.setItem = function(i, r) {
    this[i] = String(r);
  }, t.prototype.removeItem = function(i) {
    delete this[i];
  }, t.prototype.clear = function() {
    const i = this;
    Object.keys(i).forEach(function(r) {
      i[r] = void 0, delete i[r];
    });
  }, t.prototype.key = function(i) {
    return i = i || 0, Object.keys(this)[i];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof In < "u" && In.localStorage ? fs.exports = In.localStorage : typeof window < "u" && window.localStorage ? fs.exports = window.localStorage : fs.exports = new e();
})();
function AE(t) {
  var e;
  return [t[0], ci((e = t[1]) != null ? e : "")];
}
let CE = class {
  constructor() {
    this.localStorage = fs.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(AE);
  }
  async getItem(e) {
    const i = this.localStorage.getItem(e);
    if (i !== null) return ci(i);
  }
  async setItem(e, i) {
    this.localStorage.setItem(e, jt(i));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const TE = "wc_storage_version", zc = 1, NE = async (t, e, i) => {
  const r = TE, s = await e.getItem(r);
  if (s && s >= zc) {
    i(e);
    return;
  }
  const n = await t.getKeys();
  if (!n.length) {
    i(e);
    return;
  }
  const o = [];
  for (; n.length; ) {
    const a = n.shift();
    if (!a) continue;
    const c = a.toLowerCase();
    if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
      const h = await t.getItem(a);
      await e.setItem(a, h), o.push(a);
    }
  }
  await e.setItem(r, zc), i(e), RE(t, o);
}, RE = async (t, e) => {
  e.length && e.forEach(async (i) => {
    await t.removeItem(i);
  });
};
let jE = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (i) => {
      this.storage = i, this.initialized = !0;
    };
    const e = new CE();
    this.storage = e;
    try {
      const i = new xE();
      NE(e, i, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, i) {
    return await this.initialize(), this.storage.setItem(e, i);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const i = setInterval(() => {
        this.initialized && (clearInterval(i), e());
      }, 20);
    });
  }
};
function BE(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return '"[Circular]"';
  }
}
var UE = kE;
function kE(t, e, i) {
  var r = i && i.stringify || BE, s = 1;
  if (typeof t == "object" && t !== null) {
    var n = e.length + s;
    if (n === 1) return t;
    var o = new Array(n);
    o[0] = r(t);
    for (var a = 1; a < n; a++)
      o[a] = r(e[a]);
    return o.join(" ");
  }
  if (typeof t != "string")
    return t;
  var c = e.length;
  if (c === 0) return t;
  for (var h = "", l = 1 - s, u = -1, d = t && t.length || 0, f = 0; f < d; ) {
    if (t.charCodeAt(f) === 37 && f + 1 < d) {
      switch (u = u > -1 ? u : 0, t.charCodeAt(f + 1)) {
        case 100:
        case 102:
          if (l >= c || e[l] == null) break;
          u < f && (h += t.slice(u, f)), h += Number(e[l]), u = f + 2, f++;
          break;
        case 105:
          if (l >= c || e[l] == null) break;
          u < f && (h += t.slice(u, f)), h += Math.floor(Number(e[l])), u = f + 2, f++;
          break;
        case 79:
        case 111:
        case 106:
          if (l >= c || e[l] === void 0) break;
          u < f && (h += t.slice(u, f));
          var p = typeof e[l];
          if (p === "string") {
            h += "'" + e[l] + "'", u = f + 2, f++;
            break;
          }
          if (p === "function") {
            h += e[l].name || "<anonymous>", u = f + 2, f++;
            break;
          }
          h += r(e[l]), u = f + 2, f++;
          break;
        case 115:
          if (l >= c)
            break;
          u < f && (h += t.slice(u, f)), h += String(e[l]), u = f + 2, f++;
          break;
        case 37:
          u < f && (h += t.slice(u, f)), h += "%", u = f + 2, f++, l--;
          break;
      }
      ++l;
    }
    ++f;
  }
  return u === -1 ? t : (u < d && (h += t.slice(u)), h);
}
const Fc = UE;
var Li = _t;
const Tr = GE().console || {}, LE = {
  mapHttpRequest: rs,
  mapHttpResponse: rs,
  wrapRequestSerializer: Sn,
  wrapResponseSerializer: Sn,
  wrapErrorSerializer: Sn,
  req: rs,
  res: rs,
  err: HE
};
function qE(t, e) {
  return Array.isArray(t) ? t.filter(function(r) {
    return r !== "!stdSerializers.err";
  }) : t === !0 ? Object.keys(e) : !1;
}
function _t(t) {
  t = t || {}, t.browser = t.browser || {};
  const e = t.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const i = t.browser.write || Tr;
  t.browser.write && (t.browser.asObject = !0);
  const r = t.serializers || {}, s = qE(t.browser.serialize, r);
  let n = t.browser.serialize;
  Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (n = !1);
  const o = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof i == "function" && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), t.enabled === !1 && (t.level = "silent");
  const a = t.level || "info", c = Object.create(i);
  c.log || (c.log = Nr), Object.defineProperty(c, "levelVal", {
    get: l
  }), Object.defineProperty(c, "level", {
    get: u,
    set: d
  });
  const h = {
    transmit: e,
    serialize: s,
    asObject: t.browser.asObject,
    levels: o,
    timestamp: VE(t)
  };
  c.levels = _t.levels, c.level = a, c.setMaxListeners = c.getMaxListeners = c.emit = c.addListener = c.on = c.prependListener = c.once = c.prependOnceListener = c.removeListener = c.removeAllListeners = c.listeners = c.listenerCount = c.eventNames = c.write = c.flush = Nr, c.serializers = r, c._serialize = s, c._stdErrSerialize = n, c.child = f, e && (c._logEvent = no());
  function l() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function u() {
    return this._level;
  }
  function d(p) {
    if (p !== "silent" && !this.levels.values[p])
      throw Error("unknown level " + p);
    this._level = p, Si(h, c, "error", "log"), Si(h, c, "fatal", "error"), Si(h, c, "warn", "error"), Si(h, c, "info", "log"), Si(h, c, "debug", "log"), Si(h, c, "trace", "log");
  }
  function f(p, g) {
    if (!p)
      throw new Error("missing bindings for child Pino");
    g = g || {}, s && p.serializers && (g.serializers = p.serializers);
    const y = g.serializers;
    if (s && y) {
      var w = Object.assign({}, r, y), m = t.browser.serialize === !0 ? Object.keys(w) : s;
      delete p.serializers, qs([p], m, w, this._stdErrSerialize);
    }
    function b(E) {
      this._childLevel = (E._childLevel | 0) + 1, this.error = Di(E, p, "error"), this.fatal = Di(E, p, "fatal"), this.warn = Di(E, p, "warn"), this.info = Di(E, p, "info"), this.debug = Di(E, p, "debug"), this.trace = Di(E, p, "trace"), w && (this.serializers = w, this._serialize = m), e && (this._logEvent = no(
        [].concat(E._logEvent.bindings, p)
      ));
    }
    return b.prototype = this, new b(this);
  }
  return c;
}
_t.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
_t.stdSerializers = LE;
_t.stdTimeFunctions = Object.assign({}, { nullTime: Bu, epochTime: Uu, unixTime: KE, isoTime: WE });
function Si(t, e, i, r) {
  const s = Object.getPrototypeOf(e);
  e[i] = e.levelVal > e.levels.values[i] ? Nr : s[i] ? s[i] : Tr[i] || Tr[r] || Nr, ME(t, e, i);
}
function ME(t, e, i) {
  !t.transmit && e[i] === Nr || (e[i] = /* @__PURE__ */ function(r) {
    return function() {
      const n = t.timestamp(), o = new Array(arguments.length), a = Object.getPrototypeOf && Object.getPrototypeOf(this) === Tr ? Tr : this;
      for (var c = 0; c < o.length; c++) o[c] = arguments[c];
      if (t.serialize && !t.asObject && qs(o, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? r.call(a, zE(this, i, o, n)) : r.apply(a, o), t.transmit) {
        const h = t.transmit.level || e.level, l = _t.levels.values[h], u = _t.levels.values[i];
        if (u < l) return;
        FE(this, {
          ts: n,
          methodLevel: i,
          methodValue: u,
          transmitValue: _t.levels.values[t.transmit.level || e.level],
          send: t.transmit.send,
          val: e.levelVal
        }, o);
      }
    };
  }(e[i]));
}
function zE(t, e, i, r) {
  t._serialize && qs(i, t._serialize, t.serializers, t._stdErrSerialize);
  const s = i.slice();
  let n = s[0];
  const o = {};
  r && (o.time = r), o.level = _t.levels.values[e];
  let a = (t._childLevel | 0) + 1;
  if (a < 1 && (a = 1), n !== null && typeof n == "object") {
    for (; a-- && typeof s[0] == "object"; )
      Object.assign(o, s.shift());
    n = s.length ? Fc(s.shift(), s) : void 0;
  } else typeof n == "string" && (n = Fc(s.shift(), s));
  return n !== void 0 && (o.msg = n), o;
}
function qs(t, e, i, r) {
  for (const s in t)
    if (r && t[s] instanceof Error)
      t[s] = _t.stdSerializers.err(t[s]);
    else if (typeof t[s] == "object" && !Array.isArray(t[s]))
      for (const n in t[s])
        e && e.indexOf(n) > -1 && n in i && (t[s][n] = i[n](t[s][n]));
}
function Di(t, e, i) {
  return function() {
    const r = new Array(1 + arguments.length);
    r[0] = e;
    for (var s = 1; s < r.length; s++)
      r[s] = arguments[s - 1];
    return t[i].apply(this, r);
  };
}
function FE(t, e, i) {
  const r = e.send, s = e.ts, n = e.methodLevel, o = e.methodValue, a = e.val, c = t._logEvent.bindings;
  qs(
    i,
    t._serialize || Object.keys(t.serializers),
    t.serializers,
    t._stdErrSerialize === void 0 ? !0 : t._stdErrSerialize
  ), t._logEvent.ts = s, t._logEvent.messages = i.filter(function(h) {
    return c.indexOf(h) === -1;
  }), t._logEvent.level.label = n, t._logEvent.level.value = o, r(n, t._logEvent, a), t._logEvent = no(c);
}
function no(t) {
  return {
    ts: 0,
    messages: [],
    bindings: t || [],
    level: { label: "", value: 0 }
  };
}
function HE(t) {
  const e = {
    type: t.constructor.name,
    msg: t.message,
    stack: t.stack
  };
  for (const i in t)
    e[i] === void 0 && (e[i] = t[i]);
  return e;
}
function VE(t) {
  return typeof t.timestamp == "function" ? t.timestamp : t.timestamp === !1 ? Bu : Uu;
}
function rs() {
  return {};
}
function Sn(t) {
  return t;
}
function Nr() {
}
function Bu() {
  return !1;
}
function Uu() {
  return Date.now();
}
function KE() {
  return Math.round(Date.now() / 1e3);
}
function WE() {
  return new Date(Date.now()).toISOString();
}
function GE() {
  function t(e) {
    return typeof e < "u" && e;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        return delete Object.prototype.globalThis, this.globalThis = this;
      },
      configurable: !0
    }), globalThis;
  } catch {
    return t(self) || t(window) || t(this) || {};
  }
}
const Hr = /* @__PURE__ */ Nd(Li), YE = { level: "info" }, Vr = "custom_context", zo = 1e3 * 1024;
let JE = class {
  constructor(e) {
    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
}, Hc = class {
  constructor(e) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
  }
  append(e) {
    const i = new JE(e);
    if (i.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${i.size}`);
    for (; this.size + i.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = i), this.tail = i) : (this.head = i, this.tail = i), this.lengthInNodes++, this.sizeInBytes += i.size;
  }
  shift() {
    if (!this.head) return;
    const e = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
  }
  toArray() {
    const e = [];
    let i = this.head;
    for (; i !== null; ) e.push(i.value), i = i.next;
    return e;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e = this.head;
    return { next: () => {
      if (!e) return { done: !0, value: null };
      const i = e.value;
      return e = e.next, { done: !1, value: i };
    } };
  }
}, ku = class {
  constructor(e, i = zo) {
    this.level = e ?? "error", this.levelValue = Li.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = i, this.logs = new Hc(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e, i) {
    i === Li.levels.values.error ? console.error(e) : i === Li.levels.values.warn ? console.warn(e) : i === Li.levels.values.debug ? console.debug(e) : i === Li.levels.values.trace ? console.trace(e) : console.log(e);
  }
  appendToLogs(e) {
    this.logs.append(jt({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e }));
    const i = typeof e == "string" ? JSON.parse(e).level : e.level;
    i >= this.levelValue && this.forwardToConsole(e, i);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new Hc(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e) {
    const i = this.getLogArray();
    return i.push(jt({ extraMetadata: e })), new Blob(i, { type: "application/json" });
  }
}, ZE = class {
  constructor(e, i = zo) {
    this.baseChunkLogger = new ku(e, i);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
  downloadLogsBlobInBrowser(e) {
    const i = URL.createObjectURL(this.logsToBlob(e)), r = document.createElement("a");
    r.href = i, r.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(i);
  }
}, QE = class {
  constructor(e, i = zo) {
    this.baseChunkLogger = new ku(e, i);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
};
var XE = Object.defineProperty, e1 = Object.defineProperties, t1 = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, r1 = Object.prototype.propertyIsEnumerable, Kc = (t, e, i) => e in t ? XE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ss = (t, e) => {
  for (var i in e || (e = {})) i1.call(e, i) && Kc(t, i, e[i]);
  if (Vc) for (var i of Vc(e)) r1.call(e, i) && Kc(t, i, e[i]);
  return t;
}, Ds = (t, e) => e1(t, t1(e));
function Ms(t) {
  return Ds(Ss({}, t), { level: (t == null ? void 0 : t.level) || YE.level });
}
function s1(t, e = Vr) {
  return t[e] || "";
}
function n1(t, e, i = Vr) {
  return t[i] = e, t;
}
function Me(t, e = Vr) {
  let i = "";
  return typeof t.bindings > "u" ? i = s1(t, e) : i = t.bindings().context || "", i;
}
function o1(t, e, i = Vr) {
  const r = Me(t, i);
  return r.trim() ? `${r}/${e}` : e;
}
function Re(t, e, i = Vr) {
  const r = o1(t, e, i), s = t.child({ context: r });
  return n1(s, r, i);
}
function a1(t) {
  var e, i;
  const r = new ZE((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: Hr(Ds(Ss({}, t.opts), { level: "trace", browser: Ds(Ss({}, (i = t.opts) == null ? void 0 : i.browser), { write: (s) => r.write(s) }) })), chunkLoggerController: r };
}
function c1(t) {
  var e;
  const i = new QE((e = t.opts) == null ? void 0 : e.level, t.maxSizeInBytes);
  return { logger: Hr(Ds(Ss({}, t.opts), { level: "trace" }), i), chunkLoggerController: i };
}
function h1(t) {
  return typeof t.loggerOverride < "u" && typeof t.loggerOverride != "string" ? { logger: t.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? a1(t) : c1(t);
}
var l1 = Object.defineProperty, u1 = (t, e, i) => e in t ? l1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Wc = (t, e, i) => u1(t, typeof e != "symbol" ? e + "" : e, i);
let d1 = class extends fi {
  constructor(e) {
    super(), this.opts = e, Wc(this, "protocol", "wc"), Wc(this, "version", 2);
  }
};
var p1 = Object.defineProperty, f1 = (t, e, i) => e in t ? p1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, g1 = (t, e, i) => f1(t, e + "", i);
let y1 = class extends fi {
  constructor(e, i) {
    super(), this.core = e, this.logger = i, g1(this, "records", /* @__PURE__ */ new Map());
  }
}, m1 = class {
  constructor(e, i) {
    this.logger = e, this.core = i;
  }
};
class w1 extends fi {
  constructor(e, i) {
    super(), this.relayer = e, this.logger = i;
  }
}
let b1 = class extends fi {
  constructor(e) {
    super();
  }
}, v1 = class {
  constructor(e, i, r, s) {
    this.core = e, this.logger = i, this.name = r;
  }
}, E1 = class extends fi {
  constructor(e, i) {
    super(), this.relayer = e, this.logger = i;
  }
}, _1 = class extends fi {
  constructor(e, i) {
    super(), this.core = e, this.logger = i;
  }
}, I1 = class {
  constructor(e, i, r) {
    this.core = e, this.logger = i, this.store = r;
  }
}, S1 = class {
  constructor(e, i) {
    this.projectId = e, this.logger = i;
  }
}, D1 = class {
  constructor(e, i, r) {
    this.core = e, this.logger = i, this.telemetryEnabled = r;
  }
};
var $1 = Object.defineProperty, O1 = (t, e, i) => e in t ? $1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Gc = (t, e, i) => O1(t, typeof e != "symbol" ? e + "" : e, i);
let P1 = class {
  constructor(e) {
    this.opts = e, Gc(this, "protocol", "wc"), Gc(this, "version", 2);
  }
}, x1 = class {
  constructor(e) {
    this.client = e;
  }
};
const A1 = "PARSE_ERROR", C1 = "INVALID_REQUEST", T1 = "METHOD_NOT_FOUND", N1 = "INVALID_PARAMS", Lu = "INTERNAL_ERROR", Fo = "SERVER_ERROR", R1 = [-32700, -32600, -32601, -32602, -32603], _r = {
  [A1]: { code: -32700, message: "Parse error" },
  [C1]: { code: -32600, message: "Invalid Request" },
  [T1]: { code: -32601, message: "Method not found" },
  [N1]: { code: -32602, message: "Invalid params" },
  [Lu]: { code: -32603, message: "Internal error" },
  [Fo]: { code: -32e3, message: "Server error" }
}, qu = Fo;
function j1(t) {
  return R1.includes(t);
}
function Yc(t) {
  return Object.keys(_r).includes(t) ? _r[t] : _r[qu];
}
function B1(t) {
  const e = Object.values(_r).find((i) => i.code === t);
  return e || _r[qu];
}
function Mu(t, e, i) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${i} RPC url at ${e}`) : t;
}
var zu = {}, Pt = {}, Jc;
function U1() {
  if (Jc) return Pt;
  Jc = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.isBrowserCryptoAvailable = Pt.getSubtleCrypto = Pt.getBrowerCrypto = void 0;
  function t() {
    return (globalThis == null ? void 0 : globalThis.crypto) || (globalThis == null ? void 0 : globalThis.msCrypto) || {};
  }
  Pt.getBrowerCrypto = t;
  function e() {
    const r = t();
    return r.subtle || r.webkitSubtle;
  }
  Pt.getSubtleCrypto = e;
  function i() {
    return !!t() && !!e();
  }
  return Pt.isBrowserCryptoAvailable = i, Pt;
}
var xt = {}, Zc;
function k1() {
  if (Zc) return xt;
  Zc = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.isBrowser = xt.isNode = xt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  xt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  xt.isNode = e;
  function i() {
    return !t() && !e();
  }
  return xt.isBrowser = i, xt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(U1(), t), e.__exportStar(k1(), t);
})(zu);
function wt(t = 3) {
  const e = Date.now() * Math.pow(10, t), i = Math.floor(Math.random() * Math.pow(10, t));
  return e + i;
}
function si(t = 6) {
  return BigInt(wt(t));
}
function Ft(t, e, i) {
  return {
    id: i || wt(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function zs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Fs(t, e, i) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: L1(e)
  };
}
function L1(t, e) {
  return typeof t > "u" ? Yc(Lu) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Yc(Fo)), { message: t })), j1(t.code) && (t = B1(t.code)), t);
}
class q1 {
}
class M1 extends q1 {
  constructor() {
    super();
  }
}
class z1 extends M1 {
  constructor(e) {
    super();
  }
}
const F1 = "^https?:", H1 = "^wss?:";
function V1(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Fu(t, e) {
  const i = V1(t);
  return typeof i > "u" ? !1 : new RegExp(e).test(i);
}
function Qc(t) {
  return Fu(t, F1);
}
function Xc(t) {
  return Fu(t, H1);
}
function K1(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Hu(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Ho(t) {
  return Hu(t) && "method" in t;
}
function Hs(t) {
  return Hu(t) && (bt(t) || et(t));
}
function bt(t) {
  return "result" in t;
}
function et(t) {
  return "error" in t;
}
class rt extends z1 {
  constructor(e) {
    super(e), this.events = new it.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  async request(e, i) {
    return this.requestStrict(Ft(e.method, e.params || [], e.id || si().toString()), i);
  }
  async requestStrict(e, i) {
    return new Promise(async (r, s) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n) {
        s(n);
      }
      this.events.on(`${e.id}`, (n) => {
        et(n) ? s(n.error) : r(n.result);
      });
      try {
        await this.connection.send(e, i);
      } catch (n) {
        s(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Hs(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const W1 = () => typeof WebSocket < "u" ? WebSocket : typeof globalThis < "u" && typeof globalThis.WebSocket < "u" ? globalThis.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), G1 = () => typeof WebSocket < "u" || typeof globalThis < "u" && typeof globalThis.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", eh = (t) => t.split("?")[0], th = 10, Y1 = W1();
let J1 = class {
  constructor(e) {
    if (this.url = e, this.events = new it.EventEmitter(), this.registering = !1, !Xc(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, i) => {
      if (typeof this.socket > "u") {
        i(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (r) => {
        this.onClose(r), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(jt(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Xc(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const i = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1), new Promise((r, s) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), s(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
          r(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((i, r) => {
      const s = zu.isReactNative() ? void 0 : { rejectUnauthorized: !K1(e) }, n = new Y1(e, [], s);
      G1() ? n.onerror = (o) => {
        const a = o;
        r(this.emitError(a.error));
      } : n.on("error", (o) => {
        r(this.emitError(o));
      }), n.onopen = () => {
        this.onOpen(n), i(n);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (i) => this.onPayload(i), e.onclose = (i) => this.onClose(i), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const i = typeof e.data == "string" ? ci(e.data) : e.data;
    this.events.emit("payload", i);
  }
  onError(e, i) {
    const r = this.parseError(i), s = r.message || r.toString(), n = Fs(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, i = this.url) {
    return Mu(e, eh(i), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > th && this.events.setMaxListeners(th);
  }
  emitError(e) {
    const i = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${eh(this.url)}`));
    return this.events.emit("register_error", i), i;
  }
};
const Vu = "wc", Ku = 2, oo = "core", It = `${Vu}@2:${oo}:`, Z1 = { logger: "error" }, Q1 = { database: ":memory:" }, X1 = "crypto", ih = "client_ed25519_seed", e_ = N.ONE_DAY, t_ = "keychain", i_ = "0.3", r_ = "messages", s_ = "0.3", rh = N.SIX_HOURS, n_ = "publisher", Wu = "irn", o_ = "error", Gu = "wss://relay.walletconnect.org", a_ = "relayer", we = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, c_ = "_subscription", Ze = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, h_ = 0.1, ao = "2.21.1", ae = { link_mode: "link_mode", relay: "relay" }, gs = { inbound: "inbound", outbound: "outbound" }, l_ = "0.3", u_ = "WALLETCONNECT_CLIENT_ID", sh = "WALLETCONNECT_LINK_MODE_APPS", He = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, d_ = "subscription", p_ = "0.3", f_ = "pairing", g_ = "0.3", pr = { wc_pairingDelete: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: N.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: N.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 0 } } }, ti = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, ot = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, y_ = "history", m_ = "0.3", w_ = "expirer", Xe = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, b_ = "0.3", v_ = "verify-api", E_ = "https://verify.walletconnect.com", Yu = "https://verify.walletconnect.org", Ir = Yu, __ = `${Ir}/v3`, I_ = [E_, Yu], S_ = "echo", D_ = "https://echo.walletconnect.com", mt = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, At = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, at = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Yt = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Jt = { authenticated_session_approve_started: "authenticated_session_approve_started", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve" }, fr = { no_internet_connection: "no_internet_connection", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, $_ = 0.1, O_ = "event-client", P_ = 86400, x_ = "https://pulse.walletconnect.org/batch";
function A_(t, e) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var i = new Uint8Array(256), r = 0; r < i.length; r++) i[r] = 255;
  for (var s = 0; s < t.length; s++) {
    var n = t.charAt(s), o = n.charCodeAt(0);
    if (i[o] !== 255) throw new TypeError(n + " is ambiguous");
    i[o] = s;
  }
  var a = t.length, c = t.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
  function u(p) {
    if (p instanceof Uint8Array || (ArrayBuffer.isView(p) ? p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength) : Array.isArray(p) && (p = Uint8Array.from(p))), !(p instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (p.length === 0) return "";
    for (var g = 0, y = 0, w = 0, m = p.length; w !== m && p[w] === 0; ) w++, g++;
    for (var b = (m - w) * l + 1 >>> 0, E = new Uint8Array(b); w !== m; ) {
      for (var $ = p[w], O = 0, D = b - 1; ($ !== 0 || O < y) && D !== -1; D--, O++) $ += 256 * E[D] >>> 0, E[D] = $ % a >>> 0, $ = $ / a >>> 0;
      if ($ !== 0) throw new Error("Non-zero carry");
      y = O, w++;
    }
    for (var x = b - y; x !== b && E[x] === 0; ) x++;
    for (var I = c.repeat(g); x < b; ++x) I += t.charAt(E[x]);
    return I;
  }
  function d(p) {
    if (typeof p != "string") throw new TypeError("Expected String");
    if (p.length === 0) return new Uint8Array();
    var g = 0;
    if (p[g] !== " ") {
      for (var y = 0, w = 0; p[g] === c; ) y++, g++;
      for (var m = (p.length - g) * h + 1 >>> 0, b = new Uint8Array(m); p[g]; ) {
        var E = i[p.charCodeAt(g)];
        if (E === 255) return;
        for (var $ = 0, O = m - 1; (E !== 0 || $ < w) && O !== -1; O--, $++) E += a * b[O] >>> 0, b[O] = E % 256 >>> 0, E = E / 256 >>> 0;
        if (E !== 0) throw new Error("Non-zero carry");
        w = $, g++;
      }
      if (p[g] !== " ") {
        for (var D = m - w; D !== m && b[D] === 0; ) D++;
        for (var x = new Uint8Array(y + (m - D)), I = y; D !== m; ) x[I++] = b[D++];
        return x;
      }
    }
  }
  function f(p) {
    var g = d(p);
    if (g) return g;
    throw new Error(`Non-${e} character`);
  }
  return { encode: u, decodeUnsafe: d, decode: f };
}
var C_ = A_, T_ = C_;
const Ju = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, N_ = (t) => new TextEncoder().encode(t), R_ = (t) => new TextDecoder().decode(t);
class j_ {
  constructor(e, i, r) {
    this.name = e, this.prefix = i, this.baseEncode = r;
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class B_ {
  constructor(e, i, r) {
    if (this.name = e, this.prefix = i, i.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = i.codePointAt(0), this.baseDecode = r;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Zu(this, e);
  }
}
class U_ {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Zu(this, e);
  }
  decode(e) {
    const i = e[0], r = this.decoders[i];
    if (r) return r.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Zu = (t, e) => new U_({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class k_ {
  constructor(e, i, r, s) {
    this.name = e, this.prefix = i, this.baseEncode = r, this.baseDecode = s, this.encoder = new j_(e, i, r), this.decoder = new B_(e, i, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Vs = ({ name: t, prefix: e, encode: i, decode: r }) => new k_(t, e, i, r), Kr = ({ prefix: t, name: e, alphabet: i }) => {
  const { encode: r, decode: s } = T_(i, e);
  return Vs({ prefix: t, name: e, encode: r, decode: (n) => Ju(s(n)) });
}, L_ = (t, e, i, r) => {
  const s = {};
  for (let l = 0; l < e.length; ++l) s[e[l]] = l;
  let n = t.length;
  for (; t[n - 1] === "="; ) --n;
  const o = new Uint8Array(n * i / 8 | 0);
  let a = 0, c = 0, h = 0;
  for (let l = 0; l < n; ++l) {
    const u = s[t[l]];
    if (u === void 0) throw new SyntaxError(`Non-${r} character`);
    c = c << i | u, a += i, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
  }
  if (a >= i || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
  return o;
}, q_ = (t, e, i) => {
  const r = e[e.length - 1] === "=", s = (1 << i) - 1;
  let n = "", o = 0, a = 0;
  for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > i; ) o -= i, n += e[s & a >> o];
  if (o && (n += e[s & a << i - o]), r) for (; n.length * i & 7; ) n += "=";
  return n;
}, Pe = ({ name: t, prefix: e, bitsPerChar: i, alphabet: r }) => Vs({ prefix: e, name: t, encode(s) {
  return q_(s, r, i);
}, decode(s) {
  return L_(s, r, i, t);
} }), M_ = Vs({ prefix: "\0", name: "identity", encode: (t) => R_(t), decode: (t) => N_(t) });
var z_ = Object.freeze({ __proto__: null, identity: M_ });
const F_ = Pe({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var H_ = Object.freeze({ __proto__: null, base2: F_ });
const V_ = Pe({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var K_ = Object.freeze({ __proto__: null, base8: V_ });
const W_ = Kr({ prefix: "9", name: "base10", alphabet: "0123456789" });
var G_ = Object.freeze({ __proto__: null, base10: W_ });
const Y_ = Pe({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), J_ = Pe({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Z_ = Object.freeze({ __proto__: null, base16: Y_, base16upper: J_ });
const Q_ = Pe({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), X_ = Pe({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), eI = Pe({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), tI = Pe({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), iI = Pe({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), rI = Pe({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), sI = Pe({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), nI = Pe({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), oI = Pe({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var aI = Object.freeze({ __proto__: null, base32: Q_, base32upper: X_, base32pad: eI, base32padupper: tI, base32hex: iI, base32hexupper: rI, base32hexpad: sI, base32hexpadupper: nI, base32z: oI });
const cI = Kr({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), hI = Kr({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var lI = Object.freeze({ __proto__: null, base36: cI, base36upper: hI });
const uI = Kr({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), dI = Kr({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var pI = Object.freeze({ __proto__: null, base58btc: uI, base58flickr: dI });
const fI = Pe({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), gI = Pe({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), yI = Pe({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), mI = Pe({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var wI = Object.freeze({ __proto__: null, base64: fI, base64pad: gI, base64url: yI, base64urlpad: mI });
const Qu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), bI = Qu.reduce((t, e, i) => (t[i] = e, t), []), vI = Qu.reduce((t, e, i) => (t[e.codePointAt(0)] = i, t), []);
function EI(t) {
  return t.reduce((e, i) => (e += bI[i], e), "");
}
function _I(t) {
  const e = [];
  for (const i of t) {
    const r = vI[i.codePointAt(0)];
    if (r === void 0) throw new Error(`Non-base256emoji character: ${i}`);
    e.push(r);
  }
  return new Uint8Array(e);
}
const II = Vs({ prefix: "🚀", name: "base256emoji", encode: EI, decode: _I });
var SI = Object.freeze({ __proto__: null, base256emoji: II }), DI = Xu, nh = 128, $I = -128, OI = Math.pow(2, 31);
function Xu(t, e, i) {
  e = e || [], i = i || 0;
  for (var r = i; t >= OI; ) e[i++] = t & 255 | nh, t /= 128;
  for (; t & $I; ) e[i++] = t & 255 | nh, t >>>= 7;
  return e[i] = t | 0, Xu.bytes = i - r + 1, e;
}
var PI = co, xI = 128, oh = 127;
function co(t, r) {
  var i = 0, r = r || 0, s = 0, n = r, o, a = t.length;
  do {
    if (n >= a) throw co.bytes = 0, new RangeError("Could not decode varint");
    o = t[n++], i += s < 28 ? (o & oh) << s : (o & oh) * Math.pow(2, s), s += 7;
  } while (o >= xI);
  return co.bytes = n - r, i;
}
var AI = Math.pow(2, 7), CI = Math.pow(2, 14), TI = Math.pow(2, 21), NI = Math.pow(2, 28), RI = Math.pow(2, 35), jI = Math.pow(2, 42), BI = Math.pow(2, 49), UI = Math.pow(2, 56), kI = Math.pow(2, 63), LI = function(t) {
  return t < AI ? 1 : t < CI ? 2 : t < TI ? 3 : t < NI ? 4 : t < RI ? 5 : t < jI ? 6 : t < BI ? 7 : t < UI ? 8 : t < kI ? 9 : 10;
}, qI = { encode: DI, decode: PI, encodingLength: LI }, ed = qI;
const ah = (t, e, i = 0) => (ed.encode(t, e, i), e), ch = (t) => ed.encodingLength(t), ho = (t, e) => {
  const i = e.byteLength, r = ch(t), s = r + ch(i), n = new Uint8Array(s + i);
  return ah(t, n, 0), ah(i, n, r), n.set(e, s), new MI(t, i, e, n);
};
class MI {
  constructor(e, i, r, s) {
    this.code = e, this.size = i, this.digest = r, this.bytes = s;
  }
}
const td = ({ name: t, code: e, encode: i }) => new zI(t, e, i);
class zI {
  constructor(e, i, r) {
    this.name = e, this.code = i, this.encode = r;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const i = this.encode(e);
      return i instanceof Uint8Array ? ho(this.code, i) : i.then((r) => ho(this.code, r));
    } else throw Error("Unknown type, must be binary type");
  }
}
const id = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), FI = td({ name: "sha2-256", code: 18, encode: id("SHA-256") }), HI = td({ name: "sha2-512", code: 19, encode: id("SHA-512") });
var VI = Object.freeze({ __proto__: null, sha256: FI, sha512: HI });
const rd = 0, KI = "identity", sd = Ju, WI = (t) => ho(rd, sd(t)), GI = { code: rd, name: KI, encode: sd, digest: WI };
var YI = Object.freeze({ __proto__: null, identity: GI });
new TextEncoder(), new TextDecoder();
const hh = { ...z_, ...H_, ...K_, ...G_, ...Z_, ...aI, ...lI, ...pI, ...wI, ...SI };
({ ...VI, ...YI });
function JI(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t);
}
function nd(t, e, i, r) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: i }, decoder: { decode: r } };
}
const lh = nd("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Dn = nd("ascii", "a", (t) => {
  let e = "a";
  for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = JI(t.length);
  for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
  return e;
}), ZI = { utf8: lh, "utf-8": lh, hex: hh.base16, latin1: Dn, ascii: Dn, binary: Dn, ...hh };
function QI(t, e = "utf8") {
  const i = ZI[e];
  if (!i) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t, "utf8") : i.decoder.decode(`${i.prefix}${t}`);
}
var XI = Object.defineProperty, e2 = (t, e, i) => e in t ? XI(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, gt = (t, e, i) => e2(t, typeof e != "symbol" ? e + "" : e, i);
class t2 {
  constructor(e, i) {
    this.core = e, this.logger = i, gt(this, "keychain", /* @__PURE__ */ new Map()), gt(this, "name", t_), gt(this, "version", i_), gt(this, "initialized", !1), gt(this, "storagePrefix", It), gt(this, "init", async () => {
      if (!this.initialized) {
        const r = await this.getKeyChain();
        typeof r < "u" && (this.keychain = r), this.initialized = !0;
      }
    }), gt(this, "has", (r) => (this.isInitialized(), this.keychain.has(r))), gt(this, "set", async (r, s) => {
      this.isInitialized(), this.keychain.set(r, s), await this.persist();
    }), gt(this, "get", (r) => {
      this.isInitialized();
      const s = this.keychain.get(r);
      if (typeof s > "u") {
        const { message: n } = j("NO_MATCHING_KEY", `${this.name}: ${r}`);
        throw new Error(n);
      }
      return s;
    }), gt(this, "del", async (r) => {
      this.isInitialized(), this.keychain.delete(r), await this.persist();
    }), this.core = e, this.logger = Re(i, this.name);
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Kn(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Wn(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var i2 = Object.defineProperty, r2 = (t, e, i) => e in t ? i2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ie = (t, e, i) => r2(t, typeof e != "symbol" ? e + "" : e, i);
class s2 {
  constructor(e, i, r) {
    this.core = e, this.logger = i, Ie(this, "name", X1), Ie(this, "keychain"), Ie(this, "randomSessionIdentifier", ro()), Ie(this, "initialized", !1), Ie(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }), Ie(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), Ie(this, "getClientId", async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n = Fa(s);
      return Fl(n.publicKey);
    }), Ie(this, "generateKeyPair", () => {
      this.isInitialized();
      const s = i0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }), Ie(this, "signJWT", async (s) => {
      this.isInitialized();
      const n = await this.getClientSeed(), o = Fa(n), a = this.randomSessionIdentifier;
      return await vm(a, s, e_, o);
    }), Ie(this, "generateSharedKey", (s, n, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(s), c = r0(a, n);
      return this.setSymKey(c, o);
    }), Ie(this, "setSymKey", async (s, n) => {
      this.isInitialized();
      const o = n || ds(s);
      return await this.keychain.set(o, s), o;
    }), Ie(this, "deleteKeyPair", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), Ie(this, "deleteSymKey", async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }), Ie(this, "encode", async (s, n, o) => {
      this.isInitialized();
      const a = Tu(o), c = jt(n);
      if (Oc(a)) return o0(c, o == null ? void 0 : o.encoding);
      if ($c(a)) {
        const d = a.senderPublicKey, f = a.receiverPublicKey;
        s = await this.generateSharedKey(d, f);
      }
      const h = this.getSymKey(s), { type: l, senderPublicKey: u } = a;
      return s0({ type: l, symKey: h, message: c, senderPublicKey: u, encoding: o == null ? void 0 : o.encoding });
    }), Ie(this, "decode", async (s, n, o) => {
      this.isInitialized();
      const a = c0(n, o);
      if (Oc(a)) {
        const c = a0(n, o == null ? void 0 : o.encoding);
        return ci(c);
      }
      if ($c(a)) {
        const c = a.receiverPublicKey, h = a.senderPublicKey;
        s = await this.generateSharedKey(c, h);
      }
      try {
        const c = this.getSymKey(s), h = n0({ symKey: c, encoded: n, encoding: o == null ? void 0 : o.encoding });
        return ci(h);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }), Ie(this, "getPayloadType", (s, n = lt) => {
      const o = Cr({ encoded: s, encoding: n });
      return ui(o.type);
    }), Ie(this, "getPayloadSenderPublicKey", (s, n = lt) => {
      const o = Cr({ encoded: s, encoding: n });
      return o.senderPublicKey ? qe(o.senderPublicKey, Ne) : void 0;
    }), this.core = e, this.logger = Re(i, this.name), this.keychain = r || new t2(this.core, this.logger);
  }
  get context() {
    return Me(this.logger);
  }
  async setPrivateKey(e, i) {
    return await this.keychain.set(e, i), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ih);
    } catch {
      e = ro(), await this.keychain.set(ih, e);
    }
    return QI(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var n2 = Object.defineProperty, o2 = Object.defineProperties, a2 = Object.getOwnPropertyDescriptors, uh = Object.getOwnPropertySymbols, c2 = Object.prototype.hasOwnProperty, h2 = Object.prototype.propertyIsEnumerable, lo = (t, e, i) => e in t ? n2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, l2 = (t, e) => {
  for (var i in e || (e = {})) c2.call(e, i) && lo(t, i, e[i]);
  if (uh) for (var i of uh(e)) h2.call(e, i) && lo(t, i, e[i]);
  return t;
}, u2 = (t, e) => o2(t, a2(e)), ze = (t, e, i) => lo(t, typeof e != "symbol" ? e + "" : e, i);
class d2 extends m1 {
  constructor(e, i) {
    super(e, i), this.logger = e, this.core = i, ze(this, "messages", /* @__PURE__ */ new Map()), ze(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), ze(this, "name", r_), ze(this, "version", s_), ze(this, "initialized", !1), ze(this, "storagePrefix", It), ze(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const r = await this.getRelayerMessages();
          typeof r < "u" && (this.messages = r);
          const s = await this.getRelayerMessagesWithoutClientAck();
          typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (r) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(r);
        } finally {
          this.initialized = !0;
        }
      }
    }), ze(this, "set", async (r, s, n) => {
      this.isInitialized();
      const o = vt(s);
      let a = this.messages.get(r);
      if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
      if (a[o] = s, this.messages.set(r, a), n === gs.inbound) {
        const c = this.messagesWithoutClientAck.get(r) || {};
        this.messagesWithoutClientAck.set(r, u2(l2({}, c), { [o]: s }));
      }
      return await this.persist(), o;
    }), ze(this, "get", (r) => {
      this.isInitialized();
      let s = this.messages.get(r);
      return typeof s > "u" && (s = {}), s;
    }), ze(this, "getWithoutAck", (r) => {
      this.isInitialized();
      const s = {};
      for (const n of r) {
        const o = this.messagesWithoutClientAck.get(n) || {};
        s[n] = Object.values(o);
      }
      return s;
    }), ze(this, "has", (r, s) => {
      this.isInitialized();
      const n = this.get(r), o = vt(s);
      return typeof n[o] < "u";
    }), ze(this, "ack", async (r, s) => {
      this.isInitialized();
      const n = this.messagesWithoutClientAck.get(r);
      if (typeof n > "u") return;
      const o = vt(s);
      delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(r) : this.messagesWithoutClientAck.set(r, n), await this.persist();
    }), ze(this, "del", async (r) => {
      this.isInitialized(), this.messages.delete(r), this.messagesWithoutClientAck.delete(r), await this.persist();
    }), this.logger = Re(e, this.name), this.core = i;
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Kn(e));
  }
  async setRelayerMessagesWithoutClientAck(e) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, Kn(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Wn(e) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e < "u" ? Wn(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var p2 = Object.defineProperty, f2 = Object.defineProperties, g2 = Object.getOwnPropertyDescriptors, dh = Object.getOwnPropertySymbols, y2 = Object.prototype.hasOwnProperty, m2 = Object.prototype.propertyIsEnumerable, uo = (t, e, i) => e in t ? p2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, ss = (t, e) => {
  for (var i in e || (e = {})) y2.call(e, i) && uo(t, i, e[i]);
  if (dh) for (var i of dh(e)) m2.call(e, i) && uo(t, i, e[i]);
  return t;
}, $n = (t, e) => f2(t, g2(e)), ct = (t, e, i) => uo(t, typeof e != "symbol" ? e + "" : e, i);
class w2 extends w1 {
  constructor(e, i) {
    super(e, i), this.relayer = e, this.logger = i, ct(this, "events", new it.EventEmitter()), ct(this, "name", n_), ct(this, "queue", /* @__PURE__ */ new Map()), ct(this, "publishTimeout", N.toMiliseconds(N.ONE_MINUTE)), ct(this, "initialPublishTimeout", N.toMiliseconds(N.ONE_SECOND * 15)), ct(this, "needsTransportRestart", !1), ct(this, "publish", async (r, s, n) => {
      var o;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: r, message: s, opts: n } });
      const a = (n == null ? void 0 : n.ttl) || rh, c = _s(n), h = (n == null ? void 0 : n.prompt) || !1, l = (n == null ? void 0 : n.tag) || 0, u = (n == null ? void 0 : n.id) || si().toString(), d = { topic: r, message: s, opts: { ttl: a, relay: c, prompt: h, tag: l, id: u, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf } }, f = `Failed to publish payload, please try again. id:${u} tag:${l}`;
      try {
        const p = new Promise(async (g) => {
          const y = ({ id: m }) => {
            d.opts.id === m && (this.removeRequestFromQueue(m), this.relayer.events.removeListener(we.publish, y), g(d));
          };
          this.relayer.events.on(we.publish, y);
          const w = zt(new Promise((m, b) => {
            this.rpcPublish({ topic: r, message: s, ttl: a, prompt: h, tag: l, id: u, attestation: n == null ? void 0 : n.attestation, tvf: n == null ? void 0 : n.tvf }).then(m).catch((E) => {
              this.logger.warn(E, E == null ? void 0 : E.message), b(E);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u} tag:${l}`);
          try {
            await w, this.events.removeListener(we.publish, y);
          } catch (m) {
            this.queue.set(u, $n(ss({}, d), { attempt: 1 })), this.logger.warn(m, m == null ? void 0 : m.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: u, topic: r, message: s, opts: n } }), await zt(p, this.publishTimeout, f);
      } catch (p) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(p), (o = n == null ? void 0 : n.internal) != null && o.throwOnFailedPublish) throw p;
      } finally {
        this.queue.delete(u);
      }
    }), ct(this, "on", (r, s) => {
      this.events.on(r, s);
    }), ct(this, "once", (r, s) => {
      this.events.once(r, s);
    }), ct(this, "off", (r, s) => {
      this.events.off(r, s);
    }), ct(this, "removeListener", (r, s) => {
      this.events.removeListener(r, s);
    }), this.relayer = e, this.logger = Re(i, this.name), this.registerEventListeners();
  }
  get context() {
    return Me(this.logger);
  }
  async rpcPublish(e) {
    var i, r, s, n;
    const { topic: o, message: a, ttl: c = rh, prompt: h, tag: l, id: u, attestation: d, tvf: f } = e, p = { method: wr(_s().protocol).publish, params: ss({ topic: o, message: a, ttl: c, prompt: h, tag: l, attestation: d }, f), id: u };
    De((i = p.params) == null ? void 0 : i.prompt) && ((r = p.params) == null || delete r.prompt), De((s = p.params) == null ? void 0 : s.tag) && ((n = p.params) == null || delete n.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p });
    const g = await this.relayer.request(p);
    return this.relayer.events.emit(we.publish, e), this.logger.debug("Successfully Published Payload"), g;
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e, i) => {
      const r = e.attempt + 1;
      this.queue.set(i, $n(ss({}, e), { attempt: r }));
      const { topic: s, message: n, opts: o, attestation: a } = e;
      this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`), await this.rpcPublish($n(ss({}, e), { topic: s, message: n, ttl: o.ttl, prompt: o.prompt, tag: o.tag, id: o.id, attestation: a, tvf: o.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(gi.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(we.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(we.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
var b2 = Object.defineProperty, v2 = (t, e, i) => e in t ? b2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, $i = (t, e, i) => v2(t, typeof e != "symbol" ? e + "" : e, i);
class E2 {
  constructor() {
    $i(this, "map", /* @__PURE__ */ new Map()), $i(this, "set", (e, i) => {
      const r = this.get(e);
      this.exists(e, i) || this.map.set(e, [...r, i]);
    }), $i(this, "get", (e) => this.map.get(e) || []), $i(this, "exists", (e, i) => this.get(e).includes(i)), $i(this, "delete", (e, i) => {
      if (typeof i > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e)) return;
      const r = this.get(e);
      if (!this.exists(e, i)) return;
      const s = r.filter((n) => n !== i);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }), $i(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var _2 = Object.defineProperty, I2 = Object.defineProperties, S2 = Object.getOwnPropertyDescriptors, ph = Object.getOwnPropertySymbols, D2 = Object.prototype.hasOwnProperty, $2 = Object.prototype.propertyIsEnumerable, po = (t, e, i) => e in t ? _2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, gr = (t, e) => {
  for (var i in e || (e = {})) D2.call(e, i) && po(t, i, e[i]);
  if (ph) for (var i of ph(e)) $2.call(e, i) && po(t, i, e[i]);
  return t;
}, On = (t, e) => I2(t, S2(e)), ie = (t, e, i) => po(t, typeof e != "symbol" ? e + "" : e, i);
class O2 extends E1 {
  constructor(e, i) {
    super(e, i), this.relayer = e, this.logger = i, ie(this, "subscriptions", /* @__PURE__ */ new Map()), ie(this, "topicMap", new E2()), ie(this, "events", new it.EventEmitter()), ie(this, "name", d_), ie(this, "version", p_), ie(this, "pending", /* @__PURE__ */ new Map()), ie(this, "cached", []), ie(this, "initialized", !1), ie(this, "storagePrefix", It), ie(this, "subscribeTimeout", N.toMiliseconds(N.ONE_MINUTE)), ie(this, "initialSubscribeTimeout", N.toMiliseconds(N.ONE_SECOND * 15)), ie(this, "clientId"), ie(this, "batchSubscribeTopicsLimit", 500), ie(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
    }), ie(this, "subscribe", async (r, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: r, opts: s } });
      try {
        const n = _s(s), o = { topic: r, relay: n, transportType: s == null ? void 0 : s.transportType };
        this.pending.set(r, o);
        const a = await this.rpcSubscribe(r, n, s);
        return typeof a == "string" && (this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: r, opts: s } })), a;
      } catch (n) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
      }
    }), ie(this, "unsubscribe", async (r, s) => {
      this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(r, s.id, s) : await this.unsubscribeByTopic(r, s);
    }), ie(this, "isSubscribed", (r) => new Promise((s) => {
      s(this.topicMap.topics.includes(r));
    })), ie(this, "isKnownTopic", (r) => new Promise((s) => {
      s(this.topicMap.topics.includes(r) || this.pending.has(r) || this.cached.some((n) => n.topic === r));
    })), ie(this, "on", (r, s) => {
      this.events.on(r, s);
    }), ie(this, "once", (r, s) => {
      this.events.once(r, s);
    }), ie(this, "off", (r, s) => {
      this.events.off(r, s);
    }), ie(this, "removeListener", (r, s) => {
      this.events.removeListener(r, s);
    }), ie(this, "start", async () => {
      await this.onConnect();
    }), ie(this, "stop", async () => {
      await this.onDisconnect();
    }), ie(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), ie(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const r = [];
      this.pending.forEach((s) => {
        r.push(s);
      }), await this.batchSubscribe(r);
    }), ie(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(gi.pulse, async () => {
        await this.checkPending();
      }), this.events.on(He.created, async (r) => {
        const s = He.created;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: r }), await this.persist();
      }), this.events.on(He.deleted, async (r) => {
        const s = He.deleted;
        this.logger.info(`Emitting ${s}`), this.logger.debug({ type: "event", event: s, data: r }), await this.persist();
      });
    }), this.relayer = e, this.logger = Re(i, this.name), this.clientId = "";
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e, i) {
    let r = !1;
    try {
      r = this.getSubscription(e).topic === i;
    } catch {
    }
    return r;
  }
  reset() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, i) {
    const r = this.topicMap.get(e);
    await Promise.all(r.map(async (s) => await this.unsubscribeById(e, s, i)));
  }
  async unsubscribeById(e, i, r) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: i, opts: r } });
    try {
      const s = _s(r);
      await this.restartToComplete({ topic: e, id: i, relay: s }), await this.rpcUnsubscribe(e, i, s);
      const n = te("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, i, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: i, opts: r } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, i, r) {
    var s;
    (!r || (r == null ? void 0 : r.transportType) === ae.relay) && await this.restartToComplete({ topic: e, id: e, relay: i });
    const n = { method: wr(i.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    const o = (s = r == null ? void 0 : r.internal) == null ? void 0 : s.throwOnFailedPublish;
    try {
      const a = await this.getSubscriptionId(e);
      if ((r == null ? void 0 : r.transportType) === ae.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch((l) => this.logger.warn(l));
      }, N.toMiliseconds(N.ONE_SECOND)), a;
      const c = new Promise(async (l) => {
        const u = (d) => {
          d.topic === e && (this.events.removeListener(He.created, u), l(d.id));
        };
        this.events.on(He.created, u);
        try {
          const d = await zt(new Promise((f, p) => {
            this.relayer.request(n).catch((g) => {
              this.logger.warn(g, g == null ? void 0 : g.message), p(g);
            }).then(f);
          }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
          this.events.removeListener(He.created, u), l(d);
        } catch {
        }
      }), h = await zt(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
      if (!h && o) throw new Error(`Subscribing to ${e} failed, please try again`);
      return h ? a : null;
    } catch (a) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(we.connection_stalled), o) throw a;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const i = e[0].relay, r = { method: wr(i.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r });
    try {
      await await zt(new Promise((s) => {
        this.relayer.request(r).catch((n) => this.logger.warn(n)).then(s);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(we.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const i = e[0].relay, r = { method: wr(i.protocol).batchFetchMessages, params: { topics: e.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r });
    let s;
    try {
      s = await await zt(new Promise((n, o) => {
        this.relayer.request(r).catch((a) => {
          this.logger.warn(a), o(a);
        }).then(n);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(we.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, i, r) {
    const s = { method: wr(r.protocol).unsubscribe, params: { topic: e, id: i } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, i) {
    this.setSubscription(e, On(gr({}, i), { id: e })), this.pending.delete(i.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((i) => {
      this.setSubscription(i.id, gr({}, i)), this.pending.delete(i.topic);
    });
  }
  async onUnsubscribe(e, i, r) {
    this.events.removeAllListeners(i), this.hasSubscription(i, e) && this.deleteSubscription(i, r), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, i) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: i }), this.addSubscription(e, i);
  }
  addSubscription(e, i) {
    this.subscriptions.set(e, gr({}, i)), this.topicMap.set(i.topic, e), this.events.emit(He.created, i);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const i = this.subscriptions.get(e);
    if (!i) {
      const { message: r } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(r);
    }
    return i;
  }
  deleteSubscription(e, i) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: i });
    const r = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(He.deleted, On(gr({}, r), { reason: i }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(He.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e = [...this.cached], i = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < i; r++) {
        const s = e.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(He.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: i } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(i), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(i);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (i) => On(gr({}, i), { id: await this.getSubscriptionId(i.topic) })))));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const i = await this.rpcBatchFetchMessages(e);
    i && i.messages && (await Fw(N.toMiliseconds(N.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(i.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete(e) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e) {
    return vt(e + await this.getClientId());
  }
}
var P2 = Object.defineProperty, fh = Object.getOwnPropertySymbols, x2 = Object.prototype.hasOwnProperty, A2 = Object.prototype.propertyIsEnumerable, fo = (t, e, i) => e in t ? P2(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, gh = (t, e) => {
  for (var i in e || (e = {})) x2.call(e, i) && fo(t, i, e[i]);
  if (fh) for (var i of fh(e)) A2.call(e, i) && fo(t, i, e[i]);
  return t;
}, Z = (t, e, i) => fo(t, typeof e != "symbol" ? e + "" : e, i);
class C2 extends b1 {
  constructor(e) {
    super(e), Z(this, "protocol", "wc"), Z(this, "version", 2), Z(this, "core"), Z(this, "logger"), Z(this, "events", new it.EventEmitter()), Z(this, "provider"), Z(this, "messages"), Z(this, "subscriber"), Z(this, "publisher"), Z(this, "name", a_), Z(this, "transportExplicitlyClosed", !1), Z(this, "initialized", !1), Z(this, "connectionAttemptInProgress", !1), Z(this, "relayUrl"), Z(this, "projectId"), Z(this, "packageName"), Z(this, "bundleId"), Z(this, "hasExperiencedNetworkDisruption", !1), Z(this, "pingTimeout"), Z(this, "heartBeatTimeout", N.toMiliseconds(N.THIRTY_SECONDS + N.FIVE_SECONDS)), Z(this, "reconnectTimeout"), Z(this, "connectPromise"), Z(this, "reconnectInProgress", !1), Z(this, "requestsInFlight", []), Z(this, "connectTimeout", N.toMiliseconds(N.ONE_SECOND * 15)), Z(this, "request", async (i) => {
      var r, s;
      this.logger.debug("Publishing Request Payload");
      const n = i.id || si().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n, method: i.method, topic: (r = i.params) == null ? void 0 : r.topic }, "relayer.request - publishing...");
        const o = `${n}:${((s = i.params) == null ? void 0 : s.tag) || ""}`;
        this.requestsInFlight.push(o);
        const a = await this.provider.request(i);
        return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
      } catch (o) {
        throw this.logger.debug(`Failed to Publish Request: ${n}`), o;
      }
    }), Z(this, "resetPingTimeout", () => {
      vs() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var i, r, s, n;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (s = (r = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : r.socket) == null ? void 0 : s.terminate) == null || n.call(s);
        } catch (o) {
          this.logger.warn(o, o == null ? void 0 : o.message);
        }
      }, this.heartBeatTimeout));
    }), Z(this, "onPayloadHandler", (i) => {
      this.onProviderPayload(i), this.resetPingTimeout();
    }), Z(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(we.connect);
    }), Z(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), Z(this, "onProviderErrorHandler", (i) => {
      this.logger.fatal(`Fatal socket error: ${i.message}`), this.events.emit(we.error, i), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), Z(this, "registerProviderListeners", () => {
      this.provider.on(Ze.payload, this.onPayloadHandler), this.provider.on(Ze.connect, this.onConnectHandler), this.provider.on(Ze.disconnect, this.onDisconnectHandler), this.provider.on(Ze.error, this.onProviderErrorHandler);
    }), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Re(e.logger, this.name) : Hr(Ms({ level: e.logger || o_ })), this.messages = new d2(this.logger, e.core), this.subscriber = new O2(this, this.logger), this.publisher = new w2(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Gu, this.projectId = e.projectId, Ow() ? this.packageName = Ja() : Pw() && (this.bundleId = Ja()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e) {
      this.logger.warn(e, e == null ? void 0 : e.message);
    }
  }
  get context() {
    return Me(this.logger);
  }
  get connected() {
    var e, i, r;
    return ((r = (i = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : i.socket) == null ? void 0 : r.readyState) === 1 || !1;
  }
  get connecting() {
    var e, i, r;
    return ((r = (i = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : i.socket) == null ? void 0 : r.readyState) === 0 || this.connectPromise !== void 0 || !1;
  }
  async publish(e, i, r) {
    this.isInitialized(), await this.publisher.publish(e, i, r), await this.recordMessageEvent({ topic: e, message: i, publishedAt: Date.now(), transportType: ae.relay }, gs.outbound);
  }
  async subscribe(e, i) {
    var r, s, n;
    this.isInitialized(), (!(i != null && i.transportType) || (i == null ? void 0 : i.transportType) === "relay") && await this.toEstablishConnection();
    const o = typeof ((r = i == null ? void 0 : i.internal) == null ? void 0 : r.throwOnFailedPublish) > "u" ? !0 : (s = i == null ? void 0 : i.internal) == null ? void 0 : s.throwOnFailedPublish;
    let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
    const h = (l) => {
      l.topic === e && (this.subscriber.off(He.created, h), c());
    };
    return await Promise.all([new Promise((l) => {
      c = l, this.subscriber.on(He.created, h);
    }), new Promise(async (l, u) => {
      a = await this.subscriber.subscribe(e, gh({ internal: { throwOnFailedPublish: o } }, i)).catch((d) => {
        o && u(d);
      }) || a, l();
    })]), a;
  }
  async unsubscribe(e, i) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, i);
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await zt(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, await this.transportDisconnect();
  }
  async transportOpen(e) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (i, r) => {
      await this.connect(e).then(i).catch(r).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await kc()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const i = e.sort((r, s) => r.publishedAt - s.publishedAt);
    this.logger.debug(`Batch of ${i.length} message events sorted`);
    for (const r of i) try {
      await this.onMessageEvent(r);
    } catch (s) {
      this.logger.warn(s, "Error while processing batch message event: " + (s == null ? void 0 : s.message));
    }
    this.logger.trace(`Batch of ${i.length} message events processed`);
  }
  async onLinkMessageEvent(e, i) {
    const { topic: r } = e;
    if (!i.sessionExists) {
      const s = de(N.FIVE_MINUTES), n = { topic: r, expiry: s, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(r, n);
    }
    this.events.emit(we.message, e), await this.recordMessageEvent(e, gs.inbound);
  }
  async connect(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
    let i = 1;
    for (; i < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${i}...`), await this.createProvider(), await new Promise(async (r, s) => {
          const n = () => {
            s(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(Ze.disconnect, n), await zt(new Promise((o, a) => {
            this.provider.connect().then(o).catch(a);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
            s(o);
          }).finally(() => {
            this.provider.off(Ze.disconnect, n), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o, a) => {
            const c = () => {
              a(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(Ze.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
              this.provider.off(Ze.disconnect, c);
            });
          }), this.hasExperiencedNetworkDisruption = !1, r();
        });
      } catch (r) {
        await this.subscriber.stop();
        const s = r;
        this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = !0;
      } finally {
        this.connectionAttemptInProgress = !1;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${i}`);
        break;
      }
      await new Promise((r) => setTimeout(r, N.toMiliseconds(i * 1))), i++;
    }
  }
  startPingTimeout() {
    var e, i, r, s, n;
    if (vs()) try {
      (i = (e = this.provider) == null ? void 0 : e.connection) != null && i.socket && ((n = (s = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : s.socket) == null || n.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o) {
      this.logger.warn(o, o == null ? void 0 : o.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new rt(new J1(Nw({ sdkVersion: ao, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e, i) {
    const { topic: r, message: s } = e;
    await this.messages.set(r, s, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: i, message: r } = e;
    if (!r || r.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
    if (!await this.subscriber.isKnownTopic(i)) return this.logger.warn(`Ignoring message for unknown topic ${i}`), !0;
    const s = this.messages.has(i, r);
    return s && this.logger.warn(`Ignoring duplicate message: ${r}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Ho(e)) {
      if (!e.method.endsWith(c_)) return;
      const i = e.params, { topic: r, message: s, publishedAt: n, attestation: o } = i.data, a = { topic: r, message: s, publishedAt: n, transportType: ae.relay, attestation: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(gh({ type: "event", event: i.id }, a)), this.events.emit(i.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else Hs(e) && this.events.emit(we.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, gs.inbound), this.events.emit(we.message, e));
  }
  async acknowledgePayload(e) {
    const i = zs(e.id, !0);
    await this.provider.connection.send(i);
  }
  unregisterProviderListeners() {
    this.provider.off(Ze.payload, this.onPayloadHandler), this.provider.off(Ze.connect, this.onConnectHandler), this.provider.off(Ze.disconnect, this.onDisconnectHandler), this.provider.off(Ze.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await kc();
    tE(async (i) => {
      e !== i && (e = i, i ? await this.transportOpen().catch((r) => this.logger.error(r, r == null ? void 0 : r.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
    }), this.core.heartbeat.on(gi.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && sE()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (i) {
        this.logger.warn(i, i == null ? void 0 : i.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(we.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e, e == null ? void 0 : e.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
    }, N.toMiliseconds(h_)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
}
function T2() {
}
function yh(t) {
  if (!t || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function mh(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function wh(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const N2 = "[object RegExp]", R2 = "[object String]", j2 = "[object Number]", B2 = "[object Boolean]", bh = "[object Arguments]", U2 = "[object Symbol]", k2 = "[object Date]", L2 = "[object Map]", q2 = "[object Set]", M2 = "[object Array]", z2 = "[object Function]", F2 = "[object ArrayBuffer]", Pn = "[object Object]", H2 = "[object Error]", V2 = "[object DataView]", K2 = "[object Uint8Array]", W2 = "[object Uint8ClampedArray]", G2 = "[object Uint16Array]", Y2 = "[object Uint32Array]", J2 = "[object BigUint64Array]", Z2 = "[object Int8Array]", Q2 = "[object Int16Array]", X2 = "[object Int32Array]", eS = "[object BigInt64Array]", tS = "[object Float32Array]", iS = "[object Float64Array]";
function rS(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function sS(t, e, i) {
  return br(t, e, void 0, void 0, void 0, void 0, i);
}
function br(t, e, i, r, s, n, o) {
  const a = o(t, e, i, r, s, n);
  if (a !== void 0) return a;
  if (typeof t == typeof e) switch (typeof t) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return t === e;
    case "number":
      return t === e || Object.is(t, e);
    case "function":
      return t === e;
    case "object":
      return Sr(t, e, n, o);
  }
  return Sr(t, e, n, o);
}
function Sr(t, e, i, r) {
  if (Object.is(t, e)) return !0;
  let s = wh(t), n = wh(e);
  if (s === bh && (s = Pn), n === bh && (n = Pn), s !== n) return !1;
  switch (s) {
    case R2:
      return t.toString() === e.toString();
    case j2: {
      const c = t.valueOf(), h = e.valueOf();
      return rS(c, h);
    }
    case B2:
    case k2:
    case U2:
      return Object.is(t.valueOf(), e.valueOf());
    case N2:
      return t.source === e.source && t.flags === e.flags;
    case z2:
      return t === e;
  }
  i = i ?? /* @__PURE__ */ new Map();
  const o = i.get(t), a = i.get(e);
  if (o != null && a != null) return o === e;
  i.set(t, e), i.set(e, t);
  try {
    switch (s) {
      case L2: {
        if (t.size !== e.size) return !1;
        for (const [c, h] of t.entries()) if (!e.has(c) || !br(h, e.get(c), c, t, e, i, r)) return !1;
        return !0;
      }
      case q2: {
        if (t.size !== e.size) return !1;
        const c = Array.from(t.values()), h = Array.from(e.values());
        for (let l = 0; l < c.length; l++) {
          const u = c[l], d = h.findIndex((f) => br(u, f, void 0, t, e, i, r));
          if (d === -1) return !1;
          h.splice(d, 1);
        }
        return !0;
      }
      case M2:
      case K2:
      case W2:
      case G2:
      case Y2:
      case J2:
      case Z2:
      case Q2:
      case X2:
      case eS:
      case tS:
      case iS: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length) return !1;
        for (let c = 0; c < t.length; c++) if (!br(t[c], e[c], c, t, e, i, r)) return !1;
        return !0;
      }
      case F2:
        return t.byteLength !== e.byteLength ? !1 : Sr(new Uint8Array(t), new Uint8Array(e), i, r);
      case V2:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : Sr(new Uint8Array(t), new Uint8Array(e), i, r);
      case H2:
        return t.name === e.name && t.message === e.message;
      case Pn: {
        if (!(Sr(t.constructor, e.constructor, i, r) || yh(t) && yh(e))) return !1;
        const c = [...Object.keys(t), ...mh(t)], h = [...Object.keys(e), ...mh(e)];
        if (c.length !== h.length) return !1;
        for (let l = 0; l < c.length; l++) {
          const u = c[l], d = t[u];
          if (!Object.hasOwn(e, u)) return !1;
          const f = e[u];
          if (!br(d, f, u, t, e, i, r)) return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    i.delete(t), i.delete(e);
  }
}
function nS(t, e) {
  return sS(t, e, T2);
}
var oS = Object.defineProperty, vh = Object.getOwnPropertySymbols, aS = Object.prototype.hasOwnProperty, cS = Object.prototype.propertyIsEnumerable, go = (t, e, i) => e in t ? oS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Eh = (t, e) => {
  for (var i in e || (e = {})) aS.call(e, i) && go(t, i, e[i]);
  if (vh) for (var i of vh(e)) cS.call(e, i) && go(t, i, e[i]);
  return t;
}, Be = (t, e, i) => go(t, typeof e != "symbol" ? e + "" : e, i);
class yi extends v1 {
  constructor(e, i, r, s = It, n = void 0) {
    super(e, i, r, s), this.core = e, this.logger = i, this.name = r, Be(this, "map", /* @__PURE__ */ new Map()), Be(this, "version", l_), Be(this, "cached", []), Be(this, "initialized", !1), Be(this, "getKey"), Be(this, "storagePrefix", It), Be(this, "recentlyDeleted", []), Be(this, "recentlyDeletedLimit", 200), Be(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !De(o) ? this.map.set(this.getKey(o), o) : T0(o) ? this.map.set(o.id, o) : N0(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }), Be(this, "set", async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }), Be(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o))), Be(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => nS(a[c], o[c]))) : this.values)), Be(this, "update", async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const c = Eh(Eh({}, this.getData(o)), a);
      this.map.set(o, c), await this.persist();
    }), Be(this, "delete", async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
    }), this.logger = Re(i, this.name), this.storagePrefix = s, this.getKey = n;
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const i = this.map.get(e);
    if (!i) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = j("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(s), new Error(s);
      }
      const { message: r } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(r), new Error(r);
    }
    return i;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: i } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(i), new Error(i);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var hS = Object.defineProperty, lS = (t, e, i) => e in t ? hS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, K = (t, e, i) => lS(t, typeof e != "symbol" ? e + "" : e, i);
class uS {
  constructor(e, i) {
    this.core = e, this.logger = i, K(this, "name", f_), K(this, "version", g_), K(this, "events", new Io()), K(this, "pairings"), K(this, "initialized", !1), K(this, "storagePrefix", It), K(this, "ignoredPayloadTypes", [Rt]), K(this, "registeredMethods", []), K(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }), K(this, "register", ({ methods: r }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...r])];
    }), K(this, "create", async (r) => {
      this.isInitialized();
      const s = ro(), n = await this.core.crypto.setSymKey(s), o = de(N.FIVE_MINUTES), a = { protocol: Wu }, c = { topic: n, expiry: o, relay: a, active: !1, methods: r == null ? void 0 : r.methods }, h = xc({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: s, relay: a, expiryTimestamp: o, methods: r == null ? void 0 : r.methods });
      return this.events.emit(ti.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: r == null ? void 0 : r.transportType }), { topic: n, uri: h };
    }), K(this, "pair", async (r) => {
      this.isInitialized();
      const s = this.core.eventClient.createEvent({ properties: { topic: r == null ? void 0 : r.uri, trace: [mt.pairing_started] } });
      this.isValidPair(r, s);
      const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h } = Pc(r.uri);
      s.props.properties.topic = n, s.addTrace(mt.pairing_uri_validation_success), s.addTrace(mt.pairing_uri_not_expired);
      let l;
      if (this.pairings.keys.includes(n)) {
        if (l = this.pairings.get(n), s.addTrace(mt.existing_pairing), l.active) throw s.setError(At.active_pairing_already_exists), new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
        s.addTrace(mt.pairing_not_expired);
      }
      const u = c || de(N.FIVE_MINUTES), d = { topic: n, relay: a, expiry: u, active: !1, methods: h };
      this.core.expirer.set(n, u), await this.pairings.set(n, d), s.addTrace(mt.store_new_pairing), r.activatePairing && await this.activate({ topic: n }), this.events.emit(ti.create, d), s.addTrace(mt.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), s.addTrace(mt.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s.setError(At.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n, { relay: a });
      } catch (f) {
        throw s.setError(At.subscribe_pairing_topic_failure), f;
      }
      return s.addTrace(mt.subscribe_pairing_topic_success), d;
    }), K(this, "activate", async ({ topic: r }) => {
      this.isInitialized();
      const s = de(N.FIVE_MINUTES);
      this.core.expirer.set(r, s), await this.pairings.update(r, { active: !0, expiry: s });
    }), K(this, "ping", async (r) => {
      this.isInitialized(), await this.isValidPing(r), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s } = r;
      if (this.pairings.keys.includes(s)) {
        const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = Zt();
        this.events.once(X("pairing_ping", n), ({ error: h }) => {
          h ? c(h) : a();
        }), await o();
      }
    }), K(this, "updateExpiry", async ({ topic: r, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(r, { expiry: s });
    }), K(this, "updateMetadata", async ({ topic: r, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(r, { peerMetadata: s });
    }), K(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), K(this, "disconnect", async (r) => {
      this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: s } = r;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", te("USER_DISCONNECTED")), await this.deletePairing(s));
    }), K(this, "formatUriFromPairing", (r) => {
      this.isInitialized();
      const { topic: s, relay: n, expiry: o, methods: a } = r, c = this.core.crypto.keychain.get(s);
      return xc({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: c, relay: n, expiryTimestamp: o, methods: a });
    }), K(this, "sendRequest", async (r, s, n) => {
      const o = Ft(s, n), a = await this.core.crypto.encode(r, o), c = pr[s].req;
      return this.core.history.set(r, o), this.core.relayer.publish(r, a, c), o.id;
    }), K(this, "sendResult", async (r, s, n) => {
      const o = zs(r, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, r)).request.method, h = pr[c].res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), K(this, "sendError", async (r, s, n) => {
      const o = Fs(r, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, r)).request.method, h = pr[c] ? pr[c].res : pr.unregistered_method.res;
      await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
    }), K(this, "deletePairing", async (r, s) => {
      await this.core.relayer.unsubscribe(r), await Promise.all([this.pairings.delete(r, te("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(r), s ? Promise.resolve() : this.core.expirer.del(r)]);
    }), K(this, "cleanup", async () => {
      const r = this.pairings.getAll().filter((s) => qt(s.expiry));
      await Promise.all(r.map((s) => this.deletePairing(s.topic)));
    }), K(this, "onRelayEventRequest", async (r) => {
      const { topic: s, payload: n } = r;
      switch (n.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s, n);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s, n);
        default:
          return await this.onUnknownRpcMethodRequest(s, n);
      }
    }), K(this, "onRelayEventResponse", async (r) => {
      const { topic: s, payload: n } = r, o = (await this.core.history.get(s, n.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }), K(this, "onPairingPingRequest", async (r, s) => {
      const { id: n } = s;
      try {
        this.isValidPing({ topic: r }), await this.sendResult(n, r, !0), this.events.emit(ti.ping, { id: n, topic: r });
      } catch (o) {
        await this.sendError(n, r, o), this.logger.error(o);
      }
    }), K(this, "onPairingPingResponse", (r, s) => {
      const { id: n } = s;
      setTimeout(() => {
        bt(s) ? this.events.emit(X("pairing_ping", n), {}) : et(s) && this.events.emit(X("pairing_ping", n), { error: s.error });
      }, 500);
    }), K(this, "onPairingDeleteRequest", async (r, s) => {
      const { id: n } = s;
      try {
        this.isValidDisconnect({ topic: r }), await this.deletePairing(r), this.events.emit(ti.delete, { id: n, topic: r });
      } catch (o) {
        await this.sendError(n, r, o), this.logger.error(o);
      }
    }), K(this, "onUnknownRpcMethodRequest", async (r, s) => {
      const { id: n, method: o } = s;
      try {
        if (this.registeredMethods.includes(o)) return;
        const a = te("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(n, r, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(n, r, a), this.logger.error(a);
      }
    }), K(this, "onUnknownRpcMethodResponse", (r) => {
      this.registeredMethods.includes(r) || this.logger.error(te("WC_METHOD_UNSUPPORTED", r));
    }), K(this, "isValidPair", (r, s) => {
      var n;
      if (!ke(r)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() params: ${r}`);
        throw s.setError(At.malformed_pairing_uri), new Error(a);
      }
      if (!C0(r.uri)) {
        const { message: a } = j("MISSING_OR_INVALID", `pair() uri: ${r.uri}`);
        throw s.setError(At.malformed_pairing_uri), new Error(a);
      }
      const o = Pc(r == null ? void 0 : r.uri);
      if (!((n = o == null ? void 0 : o.relay) != null && n.protocol)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s.setError(At.malformed_pairing_uri), new Error(a);
      }
      if (!(o != null && o.symKey)) {
        const { message: a } = j("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s.setError(At.malformed_pairing_uri), new Error(a);
      }
      if (o != null && o.expiryTimestamp && N.toMiliseconds(o == null ? void 0 : o.expiryTimestamp) < Date.now()) {
        s.setError(At.pairing_expired);
        const { message: a } = j("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }), K(this, "isValidPing", async (r) => {
      if (!ke(r)) {
        const { message: n } = j("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: s } = r;
      await this.isValidPairingTopic(s);
    }), K(this, "isValidDisconnect", async (r) => {
      if (!ke(r)) {
        const { message: n } = j("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: s } = r;
      await this.isValidPairingTopic(s);
    }), K(this, "isValidPairingTopic", async (r) => {
      if (!ue(r, !1)) {
        const { message: s } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(r)) {
        const { message: s } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
        throw new Error(s);
      }
      if (qt(this.pairings.get(r).expiry)) {
        await this.deletePairing(r);
        const { message: s } = j("EXPIRED", `pairing topic: ${r}`);
        throw new Error(s);
      }
    }), this.core = e, this.logger = Re(i, this.name), this.pairings = new yi(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Me(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(we.message, async (e) => {
      const { topic: i, message: r, transportType: s } = e;
      if (this.pairings.keys.includes(i) && s !== ae.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) try {
        const n = await this.core.crypto.decode(i, r);
        Ho(n) ? (this.core.history.set(i, n), await this.onRelayEventRequest({ topic: i, payload: n })) : Hs(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: i, payload: n }), this.core.history.delete(i, n.id)), await this.core.relayer.messages.ack(i, r);
      } catch (n) {
        this.logger.error(n);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Xe.expired, async (e) => {
      const { topic: i } = Xl(e.target);
      i && this.pairings.keys.includes(i) && (await this.deletePairing(i, !0), this.events.emit(ti.expire, { topic: i }));
    });
  }
}
var dS = Object.defineProperty, pS = (t, e, i) => e in t ? dS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Se = (t, e, i) => pS(t, typeof e != "symbol" ? e + "" : e, i);
class fS extends y1 {
  constructor(e, i) {
    super(e, i), this.core = e, this.logger = i, Se(this, "records", /* @__PURE__ */ new Map()), Se(this, "events", new it.EventEmitter()), Se(this, "name", y_), Se(this, "version", m_), Se(this, "cached", []), Se(this, "initialized", !1), Se(this, "storagePrefix", It), Se(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((r) => this.records.set(r.id, r)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Se(this, "set", (r, s, n) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: r, request: s, chainId: n }), this.records.has(s.id)) return;
      const o = { id: s.id, topic: r, request: { method: s.method, params: s.params || null }, chainId: n, expiry: de(N.THIRTY_DAYS) };
      this.records.set(o.id, o), this.persist(), this.events.emit(ot.created, o);
    }), Se(this, "resolve", async (r) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: r }), !this.records.has(r.id)) return;
      const s = await this.getRecord(r.id);
      typeof s.response > "u" && (s.response = et(r) ? { error: r.error } : { result: r.result }, this.records.set(s.id, s), this.persist(), this.events.emit(ot.updated, s));
    }), Se(this, "get", async (r, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: r, id: s }), await this.getRecord(s))), Se(this, "delete", (r, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n) => {
        if (n.topic === r) {
          if (typeof s < "u" && n.id !== s) return;
          this.records.delete(n.id), this.events.emit(ot.deleted, n);
        }
      }), this.persist();
    }), Se(this, "exists", async (r, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === r : !1)), Se(this, "on", (r, s) => {
      this.events.on(r, s);
    }), Se(this, "once", (r, s) => {
      this.events.once(r, s);
    }), Se(this, "off", (r, s) => {
      this.events.off(r, s);
    }), Se(this, "removeListener", (r, s) => {
      this.events.removeListener(r, s);
    }), this.logger = Re(i, this.name);
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((i) => {
      if (typeof i.response < "u") return;
      const r = { topic: i.topic, request: Ft(i.request.method, i.request.params, i.id), chainId: i.chainId };
      return e.push(r);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const i = this.records.get(e);
    if (!i) {
      const { message: r } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(r);
    }
    return i;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ot.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: i } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(i), new Error(i);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ot.created, (e) => {
      const i = ot.created;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, record: e });
    }), this.events.on(ot.updated, (e) => {
      const i = ot.updated;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, record: e });
    }), this.events.on(ot.deleted, (e) => {
      const i = ot.deleted;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, record: e });
    }), this.core.heartbeat.on(gi.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((i) => {
        N.toMiliseconds(i.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${i.id}`), this.records.delete(i.id), this.events.emit(ot.deleted, i, !1), e = !0);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var gS = Object.defineProperty, yS = (t, e, i) => e in t ? gS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ae = (t, e, i) => yS(t, typeof e != "symbol" ? e + "" : e, i);
class mS extends _1 {
  constructor(e, i) {
    super(e, i), this.core = e, this.logger = i, Ae(this, "expirations", /* @__PURE__ */ new Map()), Ae(this, "events", new it.EventEmitter()), Ae(this, "name", w_), Ae(this, "version", b_), Ae(this, "cached", []), Ae(this, "initialized", !1), Ae(this, "storagePrefix", It), Ae(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((r) => this.expirations.set(r.target, r)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }), Ae(this, "has", (r) => {
      try {
        const s = this.formatTarget(r);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }), Ae(this, "set", (r, s) => {
      this.isInitialized();
      const n = this.formatTarget(r), o = { target: n, expiry: s };
      this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(Xe.created, { target: n, expiration: o });
    }), Ae(this, "get", (r) => {
      this.isInitialized();
      const s = this.formatTarget(r);
      return this.getExpiration(s);
    }), Ae(this, "del", (r) => {
      if (this.isInitialized(), this.has(r)) {
        const s = this.formatTarget(r), n = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(Xe.deleted, { target: s, expiration: n });
      }
    }), Ae(this, "on", (r, s) => {
      this.events.on(r, s);
    }), Ae(this, "once", (r, s) => {
      this.events.once(r, s);
    }), Ae(this, "off", (r, s) => {
      this.events.off(r, s);
    }), Ae(this, "removeListener", (r, s) => {
      this.events.removeListener(r, s);
    }), this.logger = Re(i, this.name);
  }
  get context() {
    return Me(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return Rw(e);
    if (typeof e == "number") return jw(e);
    const { message: i } = j("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(i);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Xe.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: i } = j("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(i), new Error(i);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const i = this.expirations.get(e);
    if (!i) {
      const { message: r } = j("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(r), new Error(r);
    }
    return i;
  }
  checkExpiry(e, i) {
    const { expiry: r } = i;
    N.toMiliseconds(r) - Date.now() <= 0 && this.expire(e, i);
  }
  expire(e, i) {
    this.expirations.delete(e), this.events.emit(Xe.expired, { target: e, expiration: i });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, i) => this.checkExpiry(i, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(gi.pulse, () => this.checkExpirations()), this.events.on(Xe.created, (e) => {
      const i = Xe.created;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: e }), this.persist();
    }), this.events.on(Xe.expired, (e) => {
      const i = Xe.expired;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: e }), this.persist();
    }), this.events.on(Xe.deleted, (e) => {
      const i = Xe.deleted;
      this.logger.info(`Emitting ${i}`), this.logger.debug({ type: "event", event: i, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var wS = Object.defineProperty, bS = (t, e, i) => e in t ? wS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, le = (t, e, i) => bS(t, typeof e != "symbol" ? e + "" : e, i);
class vS extends I1 {
  constructor(e, i, r) {
    super(e, i, r), this.core = e, this.logger = i, this.store = r, le(this, "name", v_), le(this, "abortController"), le(this, "isDevEnv"), le(this, "verifyUrlV3", __), le(this, "storagePrefix", It), le(this, "version", Ku), le(this, "publicKey"), le(this, "fetchPromise"), le(this, "init", async () => {
      var s;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && N.toMiliseconds((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), le(this, "register", async (s) => {
      if (!ir() || this.isDevEnv) return;
      const n = window.location.origin, { id: o, decryptedId: a } = s, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
      try {
        const h = oi(), l = this.startAbortTimer(N.ONE_SECOND * 5), u = await new Promise((d, f) => {
          const p = () => {
            window.removeEventListener("message", y), h.body.removeChild(g), f("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", p);
          const g = h.createElement("iframe");
          g.src = c, g.style.display = "none", g.addEventListener("error", p, { signal: this.abortController.signal });
          const y = (w) => {
            if (w.data && typeof w.data == "string") try {
              const m = JSON.parse(w.data);
              if (m.type === "verify_attestation") {
                if (Vn(m.attestation).payload.id !== o) return;
                clearInterval(l), h.body.removeChild(g), this.abortController.signal.removeEventListener("abort", p), window.removeEventListener("message", y), d(m.attestation === null ? "" : m.attestation);
              }
            } catch (m) {
              this.logger.warn(m);
            }
          };
          h.body.appendChild(g), window.addEventListener("message", y, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", u), u;
      } catch (h) {
        this.logger.warn(h);
      }
      return "";
    }), le(this, "resolve", async (s) => {
      if (this.isDevEnv) return "";
      const { attestationId: n, hash: o, encryptedId: a } = s;
      if (n === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n) {
        if (Vn(n).payload.id !== a) return;
        const h = await this.isValidJwtAttestation(n);
        if (h) {
          if (!h.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h;
        }
      }
      if (!o) return;
      const c = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      return this.fetchAttestation(o, c);
    }), le(this, "fetchAttestation", async (s, n) => {
      this.logger.debug(`resolving attestation: ${s} from url: ${n}`);
      const o = this.startAbortTimer(N.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
    }), le(this, "getVerifyUrl", (s) => {
      let n = s || Ir;
      return I_.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Ir}`), n = Ir), n;
    }), le(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s = this.startAbortTimer(N.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s), await n.json();
      } catch (s) {
        this.logger.warn(s);
      }
    }), le(this, "persistPublicKey", async (s) => {
      this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
    }), le(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), le(this, "isValidJwtAttestation", async (s) => {
      const n = await this.getPublicKey();
      try {
        if (n) return this.validateAttestation(s, n);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
      const o = await this.fetchAndPersistPublicKey();
      try {
        if (o) return this.validateAttestation(s, o);
      } catch (a) {
        this.logger.error(a), this.logger.warn("error validating attestation");
      }
    }), le(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), le(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n) => {
        const o = await this.fetchPublicKey();
        o && (await this.persistPublicKey(o), n(o));
      });
      const s = await this.fetchPromise;
      return this.fetchPromise = void 0, s;
    }), le(this, "validateAttestation", (s, n) => {
      const o = l0(s, n.publicKey), a = { hasExpired: N.toMiliseconds(o.exp) < Date.now(), payload: o };
      if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a.payload.origin, isScam: a.payload.isScam, isVerified: a.payload.isVerified };
    }), this.logger = Re(i, this.name), this.abortController = new AbortController(), this.isDevEnv = Ro(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return Me(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), N.toMiliseconds(e));
  }
}
var ES = Object.defineProperty, _S = (t, e, i) => e in t ? ES(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, _h = (t, e, i) => _S(t, typeof e != "symbol" ? e + "" : e, i);
class IS extends S1 {
  constructor(e, i) {
    super(e, i), this.projectId = e, this.logger = i, _h(this, "context", S_), _h(this, "registerDeviceToken", async (r) => {
      const { clientId: s, token: n, notificationType: o, enableEncrypted: a = !1 } = r, c = `${D_}/${this.projectId}/clients`;
      await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: o, token: n, always_raw: a }) });
    }), this.logger = Re(i, this.context);
  }
}
var SS = Object.defineProperty, Ih = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, $S = Object.prototype.propertyIsEnumerable, yo = (t, e, i) => e in t ? SS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, yr = (t, e) => {
  for (var i in e || (e = {})) DS.call(e, i) && yo(t, i, e[i]);
  if (Ih) for (var i of Ih(e)) $S.call(e, i) && yo(t, i, e[i]);
  return t;
}, fe = (t, e, i) => yo(t, typeof e != "symbol" ? e + "" : e, i);
class OS extends D1 {
  constructor(e, i, r = !0) {
    super(e, i, r), this.core = e, this.logger = i, fe(this, "context", O_), fe(this, "storagePrefix", It), fe(this, "storageVersion", $_), fe(this, "events", /* @__PURE__ */ new Map()), fe(this, "shouldPersist", !1), fe(this, "init", async () => {
      if (!Ro()) try {
        const s = { eventId: Qa(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Zl(this.core.relayer.protocol, this.core.relayer.version, ao) } } };
        await this.sendEvent([s]);
      } catch (s) {
        this.logger.warn(s);
      }
    }), fe(this, "createEvent", (s) => {
      const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = s, h = Qa(), l = this.core.projectId || "", u = Date.now(), d = yr({ eventId: h, timestamp: u, props: { event: n, type: o, properties: { topic: a, trace: c } }, bundleId: l, domain: this.getAppDomain() }, this.setMethods(h));
      return this.telemetryEnabled && (this.events.set(h, d), this.shouldPersist = !0), d;
    }), fe(this, "getEvent", (s) => {
      const { eventId: n, topic: o } = s;
      if (n) return this.events.get(n);
      const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
      if (a) return yr(yr({}, a), this.setMethods(a.eventId));
    }), fe(this, "deleteEvent", (s) => {
      const { eventId: n } = s;
      this.events.delete(n), this.shouldPersist = !0;
    }), fe(this, "setEventListeners", () => {
      this.core.heartbeat.on(gi.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s) => {
          N.fromMiliseconds(Date.now()) - N.fromMiliseconds(s.timestamp) > P_ && (this.events.delete(s.eventId), this.shouldPersist = !0);
        });
      });
    }), fe(this, "setMethods", (s) => ({ addTrace: (n) => this.addTrace(s, n), setError: (n) => this.setError(s, n) })), fe(this, "addTrace", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.properties.trace.push(n), this.events.set(s, o), this.shouldPersist = !0);
    }), fe(this, "setError", (s, n) => {
      const o = this.events.get(s);
      o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(s, o), this.shouldPersist = !0);
    }), fe(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
    }), fe(this, "restore", async () => {
      try {
        const s = await this.core.storage.getItem(this.storageKey) || [];
        if (!s.length) return;
        s.forEach((n) => {
          this.events.set(n.eventId, yr(yr({}, n), this.setMethods(n.eventId)));
        });
      } catch (s) {
        this.logger.warn(s);
      }
    }), fe(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s = [];
      for (const [n, o] of this.events) o.props.type && s.push(o);
      if (s.length !== 0) try {
        if ((await this.sendEvent(s)).ok) for (const n of s) this.events.delete(n.eventId), this.shouldPersist = !0;
      } catch (n) {
        this.logger.warn(n);
      }
    }), fe(this, "sendEvent", async (s) => {
      const n = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${x_}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${ao}${n}`, { method: "POST", body: JSON.stringify(s) });
    }), fe(this, "getAppDomain", () => Jl().url), this.logger = Re(i, this.context), this.telemetryEnabled = r, r ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
}
var PS = Object.defineProperty, Sh = Object.getOwnPropertySymbols, xS = Object.prototype.hasOwnProperty, AS = Object.prototype.propertyIsEnumerable, mo = (t, e, i) => e in t ? PS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Dh = (t, e) => {
  for (var i in e || (e = {})) xS.call(e, i) && mo(t, i, e[i]);
  if (Sh) for (var i of Sh(e)) AS.call(e, i) && mo(t, i, e[i]);
  return t;
}, ne = (t, e, i) => mo(t, typeof e != "symbol" ? e + "" : e, i);
let CS = class od extends d1 {
  constructor(e) {
    var i;
    super(e), ne(this, "protocol", Vu), ne(this, "version", Ku), ne(this, "name", oo), ne(this, "relayUrl"), ne(this, "projectId"), ne(this, "customStoragePrefix"), ne(this, "events", new it.EventEmitter()), ne(this, "logger"), ne(this, "heartbeat"), ne(this, "relayer"), ne(this, "crypto"), ne(this, "storage"), ne(this, "history"), ne(this, "expirer"), ne(this, "pairing"), ne(this, "verify"), ne(this, "echoClient"), ne(this, "linkModeSupportedApps"), ne(this, "eventClient"), ne(this, "initialized", !1), ne(this, "logChunkController"), ne(this, "on", (a, c) => this.events.on(a, c)), ne(this, "once", (a, c) => this.events.once(a, c)), ne(this, "off", (a, c) => this.events.off(a, c)), ne(this, "removeListener", (a, c) => this.events.removeListener(a, c)), ne(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: h }) => {
      if (!a || !c) return;
      const l = { topic: a, message: c, publishedAt: Date.now(), transportType: ae.link_mode };
      this.relayer.onLinkMessageEvent(l, { sessionExists: h });
    });
    const r = this.getGlobalCore(e == null ? void 0 : e.customStoragePrefix);
    if (r) try {
      return this.customStoragePrefix = r.customStoragePrefix, this.logger = r.logger, this.heartbeat = r.heartbeat, this.crypto = r.crypto, this.history = r.history, this.expirer = r.expirer, this.storage = r.storage, this.relayer = r.relayer, this.pairing = r.pairing, this.verify = r.verify, this.echoClient = r.echoClient, this.linkModeSupportedApps = r.linkModeSupportedApps, this.eventClient = r.eventClient, this.initialized = r.initialized, this.logChunkController = r.logChunkController, r;
    } catch (a) {
      console.warn("Failed to copy global core", a);
    }
    this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Gu, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const s = Ms({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : Z1.logger, name: oo }), { logger: n, chunkLoggerController: o } = h1({ opts: s, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = o, (i = this.logChunkController) != null && i.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a, c;
      (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = Re(n, this.name), this.heartbeat = new oE(), this.crypto = new s2(this, this.logger, e == null ? void 0 : e.keychain), this.history = new fS(this, this.logger), this.expirer = new mS(this, this.logger), this.storage = e != null && e.storage ? e.storage : new jE(Dh(Dh({}, Q1), e == null ? void 0 : e.storageOptions)), this.relayer = new C2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new uS(this, this.logger), this.verify = new vS(this, this.logger, this.storage), this.echoClient = new IS(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new OS(this, this.logger, e == null ? void 0 : e.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e) {
    const i = new od(e);
    await i.initialize();
    const r = await i.crypto.getClientId();
    return await i.storage.setItem(u_, r), i;
  }
  get context() {
    return Me(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(sh, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(sh) || [], this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
  getGlobalCore(e = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i = `_walletConnectCore_${e}`, r = `${i}_count`;
      return globalThis[r] = (globalThis[r] || 0) + 1, globalThis[r] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`), globalThis[i];
    } catch (i) {
      console.warn("Failed to get global WalletConnect core", i);
      return;
    }
  }
  setGlobalCore(e) {
    var i;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const r = `_walletConnectCore_${((i = e.opts) == null ? void 0 : i.customStoragePrefix) || ""}`;
      globalThis[r] = e;
    } catch (r) {
      console.warn("Failed to set global WalletConnect core", r);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return !0;
    }
  }
};
const TS = CS, ad = "wc", cd = 2, hd = "client", Vo = `${ad}@${cd}:${hd}:`, xn = { name: hd, logger: "error" }, $h = "WALLETCONNECT_DEEPLINK_CHOICE", NS = "proposal", Oh = "Proposal expired", RS = "session", Oi = N.SEVEN_DAYS, jS = "engine", ge = { wc_sessionPropose: { req: { ttl: N.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1101 }, reject: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1120 }, autoReject: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1121 } }, wc_sessionSettle: { req: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: N.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: N.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: N.ONE_DAY, prompt: !1, tag: 1114 }, res: { ttl: N.ONE_DAY, prompt: !1, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: N.ONE_HOUR, prompt: !0, tag: 1116 }, res: { ttl: N.ONE_HOUR, prompt: !1, tag: 1117 }, reject: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1118 }, autoReject: { ttl: N.FIVE_MINUTES, prompt: !1, tag: 1119 } } }, An = { min: N.FIVE_MINUTES, max: N.SEVEN_DAYS }, yt = { idle: "IDLE", active: "ACTIVE" }, Ph = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } }, BS = "request", US = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], kS = "wc", LS = "auth", qS = "authKeys", MS = "pairingTopics", zS = "requests", Ks = `${kS}@${1.5}:${LS}:`, ys = `${Ks}:PUB_KEY`;
var FS = Object.defineProperty, HS = Object.defineProperties, VS = Object.getOwnPropertyDescriptors, xh = Object.getOwnPropertySymbols, KS = Object.prototype.hasOwnProperty, WS = Object.prototype.propertyIsEnumerable, wo = (t, e, i) => e in t ? FS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, re = (t, e) => {
  for (var i in e || (e = {})) KS.call(e, i) && wo(t, i, e[i]);
  if (xh) for (var i of xh(e)) WS.call(e, i) && wo(t, i, e[i]);
  return t;
}, Te = (t, e) => HS(t, VS(e)), T = (t, e, i) => wo(t, typeof e != "symbol" ? e + "" : e, i);
class GS extends x1 {
  constructor(e) {
    super(e), T(this, "name", jS), T(this, "events", new Io()), T(this, "initialized", !1), T(this, "requestQueue", { state: yt.idle, queue: [] }), T(this, "sessionRequestQueue", { state: yt.idle, queue: [] }), T(this, "requestQueueDelay", N.ONE_SECOND), T(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), T(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), T(this, "recentlyDeletedLimit", 200), T(this, "relayMessageCache", []), T(this, "pendingSessions", /* @__PURE__ */ new Map()), T(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(ge) }), this.initialized = !0, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, N.toMiliseconds(this.requestQueueDelay)));
    }), T(this, "connect", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const r = Te(re({}, i), { requiredNamespaces: i.requiredNamespaces || {}, optionalNamespaces: i.optionalNamespaces || {} });
      await this.isValidConnect(r), r.optionalNamespaces = $0(r.requiredNamespaces, r.optionalNamespaces), r.requiredNamespaces = {};
      const { pairingTopic: s, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: h } = r;
      let l = s, u, d = !1;
      try {
        if (l) {
          const O = this.client.core.pairing.pairings.get(l);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), d = O.active;
        }
      } catch (O) {
        throw this.client.logger.error(`connect() -> pairing.get(${l}) failed`), O;
      }
      if (!l || !d) {
        const { topic: O, uri: D } = await this.client.core.pairing.create();
        l = O, u = D;
      }
      if (!l) {
        const { message: O } = j("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(O);
      }
      const f = await this.client.core.crypto.generateKeyPair(), p = ge.wc_sessionPropose.req.ttl || N.FIVE_MINUTES, g = de(p), y = Te(re(re({ requiredNamespaces: n, optionalNamespaces: o, relays: h ?? [{ protocol: Wu }], proposer: { publicKey: f, metadata: this.client.metadata }, expiryTimestamp: g, pairingTopic: l }, a && { sessionProperties: a }), c && { scopedProperties: c }), { id: wt() }), w = X("session_connect", y.id), { reject: m, resolve: b, done: E } = Zt(p, Oh), $ = ({ id: O }) => {
        O === y.id && (this.client.events.off("proposal_expire", $), this.pendingSessions.delete(y.id), this.events.emit(w, { error: { message: Oh, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", $), this.events.once(w, ({ error: O, session: D }) => {
        this.client.events.off("proposal_expire", $), O ? m(O) : D && b(D);
      }), await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: y, throwOnFailedPublish: !0, clientRpcId: y.id }), await this.setProposal(y.id, y), { uri: u, approval: E };
    }), T(this, "pair", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(i);
      } catch (r) {
        throw this.client.logger.error("pair() failed"), r;
      }
    }), T(this, "approve", async (i) => {
      var r, s, n;
      const o = this.client.core.eventClient.createEvent({ properties: { topic: (r = i == null ? void 0 : i.id) == null ? void 0 : r.toString(), trace: [at.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (I) {
        throw o.setError(Yt.no_internet_connection), I;
      }
      try {
        await this.isValidProposalId(i == null ? void 0 : i.id);
      } catch (I) {
        throw this.client.logger.error(`approve() -> proposal.get(${i == null ? void 0 : i.id}) failed`), o.setError(Yt.proposal_not_found), I;
      }
      try {
        await this.isValidApprove(i);
      } catch (I) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), o.setError(Yt.session_approve_namespace_validation_failure), I;
      }
      const { id: a, relayProtocol: c, namespaces: h, sessionProperties: l, scopedProperties: u, sessionConfig: d } = i, f = this.client.proposal.get(a);
      this.client.core.eventClient.deleteEvent({ eventId: o.eventId });
      const { pairingTopic: p, proposer: g, requiredNamespaces: y, optionalNamespaces: w } = f;
      let m = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: p });
      m || (m = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({ type: at.session_approve_started, properties: { topic: p, trace: [at.session_approve_started, at.session_namespaces_validation_success] } }));
      const b = await this.client.core.crypto.generateKeyPair(), E = g.publicKey, $ = await this.client.core.crypto.generateSharedKey(b, E), O = re(re(re({ relay: { protocol: c ?? "irn" }, namespaces: h, controller: { publicKey: b, metadata: this.client.metadata }, expiry: de(Oi) }, l && { sessionProperties: l }), u && { scopedProperties: u }), d && { sessionConfig: d }), D = ae.relay;
      m.addTrace(at.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe($, { transportType: D });
      } catch (I) {
        throw m.setError(Yt.subscribe_session_topic_failure), I;
      }
      m.addTrace(at.subscribe_session_topic_success);
      const x = Te(re({}, O), { topic: $, requiredNamespaces: y, optionalNamespaces: w, pairingTopic: p, acknowledged: !1, self: O.controller, peer: { publicKey: g.publicKey, metadata: g.metadata }, controller: b, transportType: ae.relay });
      await this.client.session.set($, x), m.addTrace(at.store_session);
      try {
        m.addTrace(at.publishing_session_settle), await this.sendRequest({ topic: $, method: "wc_sessionSettle", params: O, throwOnFailedPublish: !0 }).catch((I) => {
          throw m == null || m.setError(Yt.session_settle_publish_failure), I;
        }), m.addTrace(at.session_settle_publish_success), m.addTrace(at.publishing_session_approve), await this.sendResult({ id: a, topic: p, result: { relay: { protocol: c ?? "irn" }, responderPublicKey: b }, throwOnFailedPublish: !0 }).catch((I) => {
          throw m == null || m.setError(Yt.session_approve_publish_failure), I;
        }), m.addTrace(at.session_approve_publish_success);
      } catch (I) {
        throw this.client.logger.error(I), this.client.session.delete($, te("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe($), I;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: m.eventId }), await this.client.core.pairing.updateMetadata({ topic: p, metadata: g.metadata }), await this.client.proposal.delete(a, te("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: p }), await this.setExpiry($, de(Oi)), { topic: $, acknowledged: () => Promise.resolve(this.client.session.get($)) };
    }), T(this, "reject", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(i);
      } catch (o) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), o;
      }
      const { id: r, reason: s } = i;
      let n;
      try {
        n = this.client.proposal.get(r).pairingTopic;
      } catch (o) {
        throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), o;
      }
      n && (await this.sendError({ id: r, topic: n, error: s, rpcOpts: ge.wc_sessionPropose.reject }), await this.client.proposal.delete(r, te("USER_DISCONNECTED")));
    }), T(this, "update", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(i);
      } catch (u) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), u;
      }
      const { topic: r, namespaces: s } = i, { done: n, resolve: o, reject: a } = Zt(), c = wt(), h = si().toString(), l = this.client.session.get(r).namespaces;
      return this.events.once(X("session_update", c), ({ error: u }) => {
        u ? a(u) : o();
      }), await this.client.session.update(r, { namespaces: s }), await this.sendRequest({ topic: r, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: !0, clientRpcId: c, relayRpcId: h }).catch((u) => {
        this.client.logger.error(u), this.client.session.update(r, { namespaces: l }), a(u);
      }), { acknowledged: n };
    }), T(this, "extend", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(i);
      } catch (c) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), c;
      }
      const { topic: r } = i, s = wt(), { done: n, resolve: o, reject: a } = Zt();
      return this.events.once(X("session_extend", s), ({ error: c }) => {
        c ? a(c) : o();
      }), await this.setExpiry(r, de(Oi)), this.sendRequest({ topic: r, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: !0 }).catch((c) => {
        a(c);
      }), { acknowledged: n };
    }), T(this, "request", async (i) => {
      this.isInitialized();
      try {
        await this.isValidRequest(i);
      } catch (w) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), w;
      }
      const { chainId: r, request: s, topic: n, expiry: o = ge.wc_sessionRequest.req.ttl } = i, a = this.client.session.get(n);
      (a == null ? void 0 : a.transportType) === ae.relay && await this.confirmOnlineStateOrThrow();
      const c = wt(), h = si().toString(), { done: l, resolve: u, reject: d } = Zt(o, "Request expired. Please try again.");
      this.events.once(X("session_request", c), ({ error: w, result: m }) => {
        w ? d(w) : u(m);
      });
      const f = "wc_sessionRequest", p = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
      if (p) return await this.sendRequest({ clientRpcId: c, relayRpcId: h, topic: n, method: f, params: { request: Te(re({}, s), { expiryTimestamp: de(o) }), chainId: r }, expiry: o, throwOnFailedPublish: !0, appLink: p }).catch((w) => d(w)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: r, id: c }), await l();
      const g = { request: Te(re({}, s), { expiryTimestamp: de(o) }), chainId: r }, y = this.shouldSetTVF(f, g);
      return await Promise.all([new Promise(async (w) => {
        await this.sendRequest(re({ clientRpcId: c, relayRpcId: h, topic: n, method: f, params: g, expiry: o, throwOnFailedPublish: !0 }, y && { tvf: this.getTVFParams(c, g) })).catch((m) => d(m)), this.client.events.emit("session_request_sent", { topic: n, request: s, chainId: r, id: c }), w();
      }), new Promise(async (w) => {
        var m;
        if (!((m = a.sessionConfig) != null && m.disableDeepLink)) {
          const b = await Lw(this.client.core.storage, $h);
          await Bw({ id: c, topic: n, wcDeepLink: b });
        }
        w();
      }), l()]).then((w) => w[2]);
    }), T(this, "respond", async (i) => {
      this.isInitialized(), await this.isValidRespond(i);
      const { topic: r, response: s } = i, { id: n } = s, o = this.client.session.get(r);
      o.transportType === ae.relay && await this.confirmOnlineStateOrThrow();
      const a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
      bt(s) ? await this.sendResult({ id: n, topic: r, result: s.result, throwOnFailedPublish: !0, appLink: a }) : et(s) && await this.sendError({ id: n, topic: r, error: s.error, appLink: a }), this.cleanupAfterResponse(i);
    }), T(this, "ping", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(i);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: r } = i;
      if (this.client.session.keys.includes(r)) {
        const s = wt(), n = si().toString(), { done: o, resolve: a, reject: c } = Zt();
        this.events.once(X("session_ping", s), ({ error: h }) => {
          h ? c(h) : a();
        }), await Promise.all([this.sendRequest({ topic: r, method: "wc_sessionPing", params: {}, throwOnFailedPublish: !0, clientRpcId: s, relayRpcId: n }), o()]);
      } else this.client.core.pairing.pairings.keys.includes(r) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: r }));
    }), T(this, "emit", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(i);
      const { topic: r, event: s, chainId: n } = i, o = si().toString(), a = wt();
      await this.sendRequest({ topic: r, method: "wc_sessionEvent", params: { event: s, chainId: n }, throwOnFailedPublish: !0, relayRpcId: o, clientRpcId: a });
    }), T(this, "disconnect", async (i) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(i);
      const { topic: r } = i;
      if (this.client.session.keys.includes(r)) await this.sendRequest({ topic: r, method: "wc_sessionDelete", params: te("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: r, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(r)) await this.client.core.pairing.disconnect({ topic: r });
      else {
        const { message: s } = j("MISMATCHED_TOPIC", `Session or pairing topic not found: ${r}`);
        throw new Error(s);
      }
    }), T(this, "find", (i) => (this.isInitialized(), this.client.session.getAll().filter((r) => x0(r, i)))), T(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), T(this, "authenticate", async (i, r) => {
      var s;
      this.isInitialized(), this.isValidAuthenticate(i);
      const n = r && this.client.core.linkModeSupportedApps.includes(r) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), o = n ? ae.link_mode : ae.relay;
      o === ae.relay && await this.confirmOnlineStateOrThrow();
      const { chains: a, statement: c = "", uri: h, domain: l, nonce: u, type: d, exp: f, nbf: p, methods: g = [], expiry: y } = i, w = [...i.resources || []], { topic: m, uri: b } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: o });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: m, uri: b } });
      const E = await this.client.core.crypto.generateKeyPair(), $ = ds(E);
      if (await Promise.all([this.client.auth.authKeys.set(ys, { responseTopic: $, publicKey: E }), this.client.auth.pairingTopics.set($, { topic: $, pairingTopic: m })]), await this.client.core.relayer.subscribe($, { transportType: o }), this.client.logger.info(`sending request to new pairing topic: ${m}`), g.length > 0) {
        const { namespace: S } = Hi(a[0]);
        let R = Cb(S, "request", g);
        us(w) && (R = Nb(R, w.pop())), w.push(R);
      }
      const O = y && y > ge.wc_sessionAuthenticate.req.ttl ? y : ge.wc_sessionAuthenticate.req.ttl, D = { authPayload: { type: d ?? "caip122", chains: a, statement: c, aud: h, domain: l, version: "1", nonce: u, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: f, nbf: p, resources: w }, requester: { publicKey: E, metadata: this.client.metadata }, expiryTimestamp: de(O) }, x = { eip155: { chains: a, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...g])], events: ["chainChanged", "accountsChanged"] } }, I = { requiredNamespaces: {}, optionalNamespaces: x, relays: [{ protocol: "irn" }], pairingTopic: m, proposer: { publicKey: E, metadata: this.client.metadata }, expiryTimestamp: de(ge.wc_sessionPropose.req.ttl), id: wt() }, { done: q, resolve: B, reject: k } = Zt(O, "Request expired"), M = wt(), C = X("session_connect", I.id), _ = X("session_request", M), v = async ({ error: S, session: R }) => {
        this.events.off(_, P), S ? k(S) : R && B({ session: R });
      }, P = async (S) => {
        var R, U, L;
        if (await this.deletePendingAuthRequest(M, { message: "fulfilled", code: 0 }), S.error) {
          const Y = te("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return S.error.code === Y.code ? void 0 : (this.events.off(C, v), k(S.error.message));
        }
        await this.deleteProposal(I.id), this.events.off(C, v);
        const { cacaos: z, responder: F } = S.result, V = [], G = [];
        for (const Y of z) {
          await oc({ cacao: Y, projectId: this.client.core.projectId }) || (this.client.logger.error(Y, "Signature verification failed"), k(te("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: xe } = Y, Ee = us(xe.resources), Ce = [Gn(xe.iss)], Ye = Es(xe.iss);
          if (Ee) {
            const Je = ac(Ee), wi = cc(Ee);
            V.push(...Je), Ce.push(...wi);
          }
          for (const Je of Ce) G.push(`${Je}:${Ye}`);
        }
        const se = await this.client.core.crypto.generateSharedKey(E, F.publicKey);
        let ee;
        V.length > 0 && (ee = { topic: se, acknowledged: !0, self: { publicKey: E, metadata: this.client.metadata }, peer: F, controller: F.publicKey, expiry: de(Oi), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: m, namespaces: Nc([...new Set(V)], [...new Set(G)]), transportType: o }, await this.client.core.relayer.subscribe(se, { transportType: o }), await this.client.session.set(se, ee), m && await this.client.core.pairing.updateMetadata({ topic: m, metadata: F.metadata }), ee = this.client.session.get(se)), (R = this.client.metadata.redirect) != null && R.linkMode && (U = F.metadata.redirect) != null && U.linkMode && (L = F.metadata.redirect) != null && L.universal && r && (this.client.core.addLinkModeSupportedApp(F.metadata.redirect.universal), this.client.session.update(se, { transportType: ae.link_mode })), B({ auths: z, session: ee });
      };
      this.events.once(C, v), this.events.once(_, P);
      let A;
      try {
        if (n) {
          const S = Ft("wc_sessionAuthenticate", D, M);
          this.client.core.history.set(m, S);
          const R = await this.client.core.crypto.encode("", S, { type: Fr, encoding: Mt });
          A = es(r, m, R);
        } else await Promise.all([this.sendRequest({ topic: m, method: "wc_sessionAuthenticate", params: D, expiry: i.expiry, throwOnFailedPublish: !0, clientRpcId: M }), this.sendRequest({ topic: m, method: "wc_sessionPropose", params: I, expiry: ge.wc_sessionPropose.req.ttl, throwOnFailedPublish: !0, clientRpcId: I.id })]);
      } catch (S) {
        throw this.events.off(C, v), this.events.off(_, P), S;
      }
      return await this.setProposal(I.id, I), await this.setAuthRequest(M, { request: Te(re({}, D), { verifyContext: {} }), pairingTopic: m, transportType: o }), { uri: A ?? b, response: q };
    }), T(this, "approveSessionAuthenticate", async (i) => {
      const { id: r, auths: s } = i, n = this.client.core.eventClient.createEvent({ properties: { topic: r.toString(), trace: [Jt.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (y) {
        throw n.setError(fr.no_internet_connection), y;
      }
      const o = this.getPendingAuthRequest(r);
      if (!o) throw n.setError(fr.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${r}`);
      const a = o.transportType || ae.relay;
      a === ae.relay && await this.confirmOnlineStateOrThrow();
      const c = o.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), l = ds(c), u = { type: Rt, receiverPublicKey: c, senderPublicKey: h }, d = [], f = [];
      for (const y of s) {
        if (!await oc({ cacao: y, projectId: this.client.core.projectId })) {
          n.setError(fr.invalid_cacao);
          const $ = te("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: r, topic: l, error: $, encodeOpts: u }), new Error($.message);
        }
        n.addTrace(Jt.cacaos_verified);
        const { p: w } = y, m = us(w.resources), b = [Gn(w.iss)], E = Es(w.iss);
        if (m) {
          const $ = ac(m), O = cc(m);
          d.push(...$), b.push(...O);
        }
        for (const $ of b) f.push(`${$}:${E}`);
      }
      const p = await this.client.core.crypto.generateSharedKey(h, c);
      n.addTrace(Jt.create_authenticated_session_topic);
      let g;
      if ((d == null ? void 0 : d.length) > 0) {
        g = { topic: p, acknowledged: !0, self: { publicKey: h, metadata: this.client.metadata }, peer: { publicKey: c, metadata: o.requester.metadata }, controller: c, expiry: de(Oi), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: o.pairingTopic, namespaces: Nc([...new Set(d)], [...new Set(f)]), transportType: a }, n.addTrace(Jt.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(p, { transportType: a });
        } catch (y) {
          throw n.setError(fr.subscribe_authenticated_session_topic_failure), y;
        }
        n.addTrace(Jt.subscribe_authenticated_session_topic_success), await this.client.session.set(p, g), n.addTrace(Jt.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: o.pairingTopic, metadata: o.requester.metadata });
      }
      n.addTrace(Jt.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: l, id: r, result: { cacaos: s, responder: { publicKey: h, metadata: this.client.metadata } }, encodeOpts: u, throwOnFailedPublish: !0, appLink: this.getAppLinkIfEnabled(o.requester.metadata, a) });
      } catch (y) {
        throw n.setError(fr.authenticated_session_approve_publish_failure), y;
      }
      return await this.client.auth.requests.delete(r, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: o.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: n.eventId }), { session: g };
    }), T(this, "rejectSessionAuthenticate", async (i) => {
      this.isInitialized();
      const { id: r, reason: s } = i, n = this.getPendingAuthRequest(r);
      if (!n) throw new Error(`Could not find pending auth request with id ${r}`);
      n.transportType === ae.relay && await this.confirmOnlineStateOrThrow();
      const o = n.requester.publicKey, a = await this.client.core.crypto.generateKeyPair(), c = ds(o), h = { type: Rt, receiverPublicKey: o, senderPublicKey: a };
      await this.sendError({ id: r, topic: c, error: s, encodeOpts: h, rpcOpts: ge.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType) }), await this.client.auth.requests.delete(r, { message: "rejected", code: 0 }), await this.client.proposal.delete(r, te("USER_DISCONNECTED"));
    }), T(this, "formatAuthMessage", (i) => {
      this.isInitialized();
      const { request: r, iss: s } = i;
      return cu(r, s);
    }), T(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const i = this.relayMessageCache.shift();
          i && await this.onRelayMessage(i);
        } catch (i) {
          this.client.logger.error(i);
        }
      }, 50);
    }), T(this, "cleanupDuplicatePairings", async (i) => {
      if (i.pairingTopic) try {
        const r = this.client.core.pairing.pairings.get(i.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((n) => {
          var o, a;
          return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === i.peer.metadata.url && n.topic && n.topic !== r.topic;
        });
        if (s.length === 0) return;
        this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((n) => this.client.core.pairing.disconnect({ topic: n.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (r) {
        this.client.logger.error(r);
      }
    }), T(this, "deleteSession", async (i) => {
      var r;
      const { topic: s, expirerHasDeleted: n = !1, emitEvent: o = !0, id: a = 0 } = i, { self: c } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, te("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(c.publicKey) && await this.client.core.crypto.deleteKeyPair(c.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), n || this.client.core.expirer.del(s), this.client.core.storage.removeItem($h).catch((h) => this.client.logger.warn(h)), this.getPendingSessionRequests().forEach((h) => {
        h.topic === s && this.deletePendingSessionRequest(h.id, te("USER_DISCONNECTED"));
      }), s === ((r = this.sessionRequestQueue.queue[0]) == null ? void 0 : r.topic) && (this.sessionRequestQueue.state = yt.idle), o && this.client.events.emit("session_delete", { id: a, topic: s });
    }), T(this, "deleteProposal", async (i, r) => {
      if (r) try {
        const s = this.client.proposal.get(i), n = this.client.core.eventClient.getEvent({ topic: s.pairingTopic });
        n == null || n.setError(Yt.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(i, te("USER_DISCONNECTED")), r ? Promise.resolve() : this.client.core.expirer.del(i)]), this.addToRecentlyDeleted(i, "proposal");
    }), T(this, "deletePendingSessionRequest", async (i, r, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(i, r), s ? Promise.resolve() : this.client.core.expirer.del(i)]), this.addToRecentlyDeleted(i, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((n) => n.id !== i), s && (this.sessionRequestQueue.state = yt.idle, this.client.events.emit("session_request_expire", { id: i }));
    }), T(this, "deletePendingAuthRequest", async (i, r, s = !1) => {
      await Promise.all([this.client.auth.requests.delete(i, r), s ? Promise.resolve() : this.client.core.expirer.del(i)]);
    }), T(this, "setExpiry", async (i, r) => {
      this.client.session.keys.includes(i) && (this.client.core.expirer.set(i, r), await this.client.session.update(i, { expiry: r }));
    }), T(this, "setProposal", async (i, r) => {
      this.client.core.expirer.set(i, de(ge.wc_sessionPropose.req.ttl)), await this.client.proposal.set(i, r);
    }), T(this, "setAuthRequest", async (i, r) => {
      const { request: s, pairingTopic: n, transportType: o = ae.relay } = r;
      this.client.core.expirer.set(i, s.expiryTimestamp), await this.client.auth.requests.set(i, { authPayload: s.authPayload, requester: s.requester, expiryTimestamp: s.expiryTimestamp, id: i, pairingTopic: n, verifyContext: s.verifyContext, transportType: o });
    }), T(this, "setPendingSessionRequest", async (i) => {
      const { id: r, topic: s, params: n, verifyContext: o } = i, a = n.request.expiryTimestamp || de(ge.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(r, a), await this.client.pendingRequest.set(r, { id: r, topic: s, params: n, verifyContext: o });
    }), T(this, "sendRequest", async (i) => {
      const { topic: r, method: s, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: h, appLink: l, tvf: u } = i, d = Ft(s, n, c);
      let f;
      const p = !!l;
      try {
        const w = p ? Mt : lt;
        f = await this.client.core.crypto.encode(r, d, { encoding: w });
      } catch (w) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${r} failed`), w;
      }
      let g;
      if (US.includes(s)) {
        const w = vt(JSON.stringify(d)), m = vt(f);
        g = await this.client.core.verify.register({ id: m, decryptedId: w });
      }
      const y = ge[s].req;
      if (y.attestation = g, o && (y.ttl = o), a && (y.id = a), this.client.core.history.set(r, d), p) {
        const w = es(l, r, f);
        await globalThis.Linking.openURL(w, this.client.name);
      } else {
        const w = ge[s].req;
        o && (w.ttl = o), a && (w.id = a), w.tvf = Te(re({}, u), { correlationId: d.id }), h ? (w.internal = Te(re({}, w.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(r, f, w)) : this.client.core.relayer.publish(r, f, w).catch((m) => this.client.logger.error(m));
      }
      return d.id;
    }), T(this, "sendResult", async (i) => {
      const { id: r, topic: s, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c } = i, h = zs(r, n);
      let l;
      const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      try {
        const p = u ? Mt : lt;
        l = await this.client.core.crypto.encode(s, h, Te(re({}, a || {}), { encoding: p }));
      } catch (p) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), p;
      }
      let d, f;
      try {
        d = await this.client.core.history.get(s, r);
        const p = d.request;
        try {
          this.shouldSetTVF(p.method, p.params) && (f = this.getTVFParams(r, p.params, n));
        } catch (g) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", g);
        }
      } catch (p) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${r}) failed`), p;
      }
      if (u) {
        const p = es(c, s, l);
        await globalThis.Linking.openURL(p, this.client.name);
      } else {
        const p = d.request.method, g = ge[p].res;
        g.tvf = Te(re({}, f), { correlationId: r }), o ? (g.internal = Te(re({}, g.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, l, g)) : this.client.core.relayer.publish(s, l, g).catch((y) => this.client.logger.error(y));
      }
      await this.client.core.history.resolve(h);
    }), T(this, "sendError", async (i) => {
      const { id: r, topic: s, error: n, encodeOpts: o, rpcOpts: a, appLink: c } = i, h = Fs(r, n);
      let l;
      const u = c && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      try {
        const f = u ? Mt : lt;
        l = await this.client.core.crypto.encode(s, h, Te(re({}, o || {}), { encoding: f }));
      } catch (f) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), f;
      }
      let d;
      try {
        d = await this.client.core.history.get(s, r);
      } catch (f) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${r}) failed`), f;
      }
      if (u) {
        const f = es(c, s, l);
        await globalThis.Linking.openURL(f, this.client.name);
      } else {
        const f = d.request.method, p = a || ge[f].res;
        this.client.core.relayer.publish(s, l, p);
      }
      await this.client.core.history.resolve(h);
    }), T(this, "cleanup", async () => {
      const i = [], r = [];
      this.client.session.getAll().forEach((s) => {
        let n = !1;
        qt(s.expiry) && (n = !0), this.client.core.crypto.keychain.has(s.topic) || (n = !0), n && i.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        qt(s.expiryTimestamp) && r.push(s.id);
      }), await Promise.all([...i.map((s) => this.deleteSession({ topic: s })), ...r.map((s) => this.deleteProposal(s))]);
    }), T(this, "onProviderMessageEvent", async (i) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(i) : await this.onRelayMessage(i);
    }), T(this, "onRelayEventRequest", async (i) => {
      this.requestQueue.queue.push(i), await this.processRequestsQueue();
    }), T(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === yt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = yt.active;
        const i = this.requestQueue.queue.shift();
        if (i) try {
          await this.processRequest(i);
        } catch (r) {
          this.client.logger.warn(r);
        }
      }
      this.requestQueue.state = yt.idle;
    }), T(this, "processRequest", async (i) => {
      const { topic: r, payload: s, attestation: n, transportType: o, encryptedId: a } = i, c = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: r, requestMethod: c })) switch (c) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: r, payload: s, attestation: n, encryptedId: a });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(r, s);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(r, s);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(r, s);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(r, s);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(r, s);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: r, payload: s, attestation: n, encryptedId: a, transportType: o });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(r, s);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: r, payload: s, attestation: n, encryptedId: a, transportType: o });
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }), T(this, "onRelayEventResponse", async (i) => {
      const { topic: r, payload: s, transportType: n } = i, o = (await this.client.core.history.get(r, s.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(r, s, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(r, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(r, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(r, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(r, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(r, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(r, s);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }), T(this, "onRelayEventUnknownPayload", (i) => {
      const { topic: r } = i, { message: s } = j("MISSING_OR_INVALID", `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }), T(this, "shouldIgnorePairingRequest", (i) => {
      const { topic: r, requestMethod: s } = i, n = this.expectedPairingMethodMap.get(r);
      return !n || n.includes(s) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), T(this, "onSessionProposeRequest", async (i) => {
      const { topic: r, payload: s, attestation: n, encryptedId: o } = i, { params: a, id: c } = s;
      try {
        const h = this.client.core.eventClient.getEvent({ topic: r });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), h == null || h.setError(At.proposal_listener_not_found)), this.isValidConnect(re({}, s.params));
        const l = a.expiryTimestamp || de(ge.wc_sessionPropose.req.ttl), u = re({ id: c, pairingTopic: r, expiryTimestamp: l }, a);
        await this.setProposal(c, u);
        const d = await this.getVerifyContext({ attestationId: n, hash: vt(JSON.stringify(s)), encryptedId: o, metadata: u.proposer.metadata });
        h == null || h.addTrace(mt.emit_session_proposal), this.client.events.emit("session_proposal", { id: c, params: u, verifyContext: d });
      } catch (h) {
        await this.sendError({ id: c, topic: r, error: h, rpcOpts: ge.wc_sessionPropose.autoReject }), this.client.logger.error(h);
      }
    }), T(this, "onSessionProposeResponse", async (i, r, s) => {
      const { id: n } = r;
      if (bt(r)) {
        const { result: o } = r;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const a = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const c = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: c });
        const h = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: h });
        const l = await this.client.core.crypto.generateSharedKey(c, h);
        this.pendingSessions.set(n, { sessionTopic: l, pairingTopic: i, proposalId: n, publicKey: c });
        const u = await this.client.core.relayer.subscribe(l, { transportType: s });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: u }), await this.client.core.pairing.activate({ topic: i });
      } else if (et(r)) {
        await this.client.proposal.delete(n, te("USER_DISCONNECTED"));
        const o = X("session_connect", n);
        if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners, 954`);
        this.events.emit(o, { error: r.error });
      }
    }), T(this, "onSessionSettleRequest", async (i, r) => {
      const { id: s, params: n } = r;
      try {
        this.isValidSessionSettleRequest(n);
        const { relay: o, controller: a, expiry: c, namespaces: h, sessionProperties: l, scopedProperties: u, sessionConfig: d } = r.params, f = [...this.pendingSessions.values()].find((y) => y.sessionTopic === i);
        if (!f) return this.client.logger.error(`Pending session not found for topic ${i}`);
        const p = this.client.proposal.get(f.proposalId), g = Te(re(re(re({ topic: i, relay: o, expiry: c, namespaces: h, acknowledged: !0, pairingTopic: f.pairingTopic, requiredNamespaces: p.requiredNamespaces, optionalNamespaces: p.optionalNamespaces, controller: a.publicKey, self: { publicKey: f.publicKey, metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, l && { sessionProperties: l }), u && { scopedProperties: u }), d && { sessionConfig: d }), { transportType: ae.relay });
        await this.client.session.set(g.topic, g), await this.setExpiry(g.topic, g.expiry), await this.client.core.pairing.updateMetadata({ topic: f.pairingTopic, metadata: g.peer.metadata }), this.client.events.emit("session_connect", { session: g }), this.events.emit(X("session_connect", f.proposalId), { session: g }), this.pendingSessions.delete(f.proposalId), this.deleteProposal(f.proposalId, !1), this.cleanupDuplicatePairings(g), await this.sendResult({ id: r.id, topic: i, result: !0, throwOnFailedPublish: !0 });
      } catch (o) {
        await this.sendError({ id: s, topic: i, error: o }), this.client.logger.error(o);
      }
    }), T(this, "onSessionSettleResponse", async (i, r) => {
      const { id: s } = r;
      bt(r) ? (await this.client.session.update(i, { acknowledged: !0 }), this.events.emit(X("session_approve", s), {})) : et(r) && (await this.client.session.delete(i, te("USER_DISCONNECTED")), this.events.emit(X("session_approve", s), { error: r.error }));
    }), T(this, "onSessionUpdateRequest", async (i, r) => {
      const { params: s, id: n } = r;
      try {
        const o = `${i}_session_update`, a = dr.get(o);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.warn(`Discarding out of sync request - ${n}`), this.sendError({ id: n, topic: i, error: te("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(re({ topic: i }, s));
        try {
          dr.set(o, n), await this.client.session.update(i, { namespaces: s.namespaces }), await this.sendResult({ id: n, topic: i, result: !0, throwOnFailedPublish: !0 });
        } catch (c) {
          throw dr.delete(o), c;
        }
        this.client.events.emit("session_update", { id: n, topic: i, params: s });
      } catch (o) {
        await this.sendError({ id: n, topic: i, error: o }), this.client.logger.error(o);
      }
    }), T(this, "isRequestOutOfSync", (i, r) => r.toString().slice(0, -3) < i.toString().slice(0, -3)), T(this, "onSessionUpdateResponse", (i, r) => {
      const { id: s } = r, n = X("session_update", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      bt(r) ? this.events.emit(X("session_update", s), {}) : et(r) && this.events.emit(X("session_update", s), { error: r.error });
    }), T(this, "onSessionExtendRequest", async (i, r) => {
      const { id: s } = r;
      try {
        this.isValidExtend({ topic: i }), await this.setExpiry(i, de(Oi)), await this.sendResult({ id: s, topic: i, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_extend", { id: s, topic: i });
      } catch (n) {
        await this.sendError({ id: s, topic: i, error: n }), this.client.logger.error(n);
      }
    }), T(this, "onSessionExtendResponse", (i, r) => {
      const { id: s } = r, n = X("session_extend", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      bt(r) ? this.events.emit(X("session_extend", s), {}) : et(r) && this.events.emit(X("session_extend", s), { error: r.error });
    }), T(this, "onSessionPingRequest", async (i, r) => {
      const { id: s } = r;
      try {
        this.isValidPing({ topic: i }), await this.sendResult({ id: s, topic: i, result: !0, throwOnFailedPublish: !0 }), this.client.events.emit("session_ping", { id: s, topic: i });
      } catch (n) {
        await this.sendError({ id: s, topic: i, error: n }), this.client.logger.error(n);
      }
    }), T(this, "onSessionPingResponse", (i, r) => {
      const { id: s } = r, n = X("session_ping", s);
      setTimeout(() => {
        if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners 2176`);
        bt(r) ? this.events.emit(X("session_ping", s), {}) : et(r) && this.events.emit(X("session_ping", s), { error: r.error });
      }, 500);
    }), T(this, "onSessionDeleteRequest", async (i, r) => {
      const { id: s } = r;
      try {
        this.isValidDisconnect({ topic: i, reason: r.params }), Promise.all([new Promise((n) => {
          this.client.core.relayer.once(we.publish, async () => {
            n(await this.deleteSession({ topic: i, id: s }));
          });
        }), this.sendResult({ id: s, topic: i, result: !0, throwOnFailedPublish: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: i, error: te("USER_DISCONNECTED") })]).catch((n) => this.client.logger.error(n));
      } catch (n) {
        this.client.logger.error(n);
      }
    }), T(this, "onSessionRequest", async (i) => {
      var r, s, n;
      const { topic: o, payload: a, attestation: c, encryptedId: h, transportType: l } = i, { id: u, params: d } = a;
      try {
        await this.isValidRequest(re({ topic: o }, d));
        const f = this.client.session.get(o), p = await this.getVerifyContext({ attestationId: c, hash: vt(JSON.stringify(Ft("wc_sessionRequest", d, u))), encryptedId: h, metadata: f.peer.metadata, transportType: l }), g = { id: u, topic: o, params: d, verifyContext: p };
        await this.setPendingSessionRequest(g), l === ae.link_mode && (r = f.peer.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp((s = f.peer.metadata.redirect) == null ? void 0 : s.universal), (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(g) : (this.addSessionRequestToSessionRequestQueue(g), this.processSessionRequestQueue());
      } catch (f) {
        await this.sendError({ id: u, topic: o, error: f }), this.client.logger.error(f);
      }
    }), T(this, "onSessionRequestResponse", (i, r) => {
      const { id: s } = r, n = X("session_request", s);
      if (this.events.listenerCount(n) === 0) throw new Error(`emitting ${n} without any listeners`);
      bt(r) ? this.events.emit(X("session_request", s), { result: r.result }) : et(r) && this.events.emit(X("session_request", s), { error: r.error });
    }), T(this, "onSessionEventRequest", async (i, r) => {
      const { id: s, params: n } = r;
      try {
        const o = `${i}_session_event_${n.event.name}`, a = dr.get(o);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(re({ topic: i }, n)), this.client.events.emit("session_event", { id: s, topic: i, params: n }), dr.set(o, s);
      } catch (o) {
        await this.sendError({ id: s, topic: i, error: o }), this.client.logger.error(o);
      }
    }), T(this, "onSessionAuthenticateResponse", (i, r) => {
      const { id: s } = r;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: i, payload: r }), bt(r) ? this.events.emit(X("session_request", s), { result: r.result }) : et(r) && this.events.emit(X("session_request", s), { error: r.error });
    }), T(this, "onSessionAuthenticateRequest", async (i) => {
      var r;
      const { topic: s, payload: n, attestation: o, encryptedId: a, transportType: c } = i;
      try {
        const { requester: h, authPayload: l, expiryTimestamp: u } = n.params, d = await this.getVerifyContext({ attestationId: o, hash: vt(JSON.stringify(n)), encryptedId: a, metadata: h.metadata, transportType: c }), f = { requester: h, pairingTopic: s, id: n.id, authPayload: l, verifyContext: d, expiryTimestamp: u };
        await this.setAuthRequest(n.id, { request: f, pairingTopic: s, transportType: c }), c === ae.link_mode && (r = h.metadata.redirect) != null && r.universal && this.client.core.addLinkModeSupportedApp(h.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s, params: n.params, id: n.id, verifyContext: d });
      } catch (h) {
        this.client.logger.error(h);
        const l = n.params.requester.publicKey, u = await this.client.core.crypto.generateKeyPair(), d = this.getAppLinkIfEnabled(n.params.requester.metadata, c), f = { type: Rt, receiverPublicKey: l, senderPublicKey: u };
        await this.sendError({ id: n.id, topic: s, error: h, encodeOpts: f, rpcOpts: ge.wc_sessionAuthenticate.autoReject, appLink: d });
      }
    }), T(this, "addSessionRequestToSessionRequestQueue", (i) => {
      this.sessionRequestQueue.queue.push(i);
    }), T(this, "cleanupAfterResponse", (i) => {
      this.deletePendingSessionRequest(i.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = yt.idle, this.processSessionRequestQueue();
      }, N.toMiliseconds(this.requestQueueDelay));
    }), T(this, "cleanupPendingSentRequestsForTopic", ({ topic: i, error: r }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((n) => n.topic === i && n.request.method === "wc_sessionRequest").forEach((n) => {
        const o = n.request.id, a = X("session_request", o);
        if (this.events.listenerCount(a) === 0) throw new Error(`emitting ${a} without any listeners`);
        this.events.emit(X("session_request", n.request.id), { error: r });
      });
    }), T(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === yt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const i = this.sessionRequestQueue.queue[0];
      if (!i) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = yt.active, this.emitSessionRequest(i);
      } catch (r) {
        this.client.logger.error(r);
      }
    }), T(this, "emitSessionRequest", (i) => {
      this.client.events.emit("session_request", i);
    }), T(this, "onPairingCreated", (i) => {
      if (i.methods && this.expectedPairingMethodMap.set(i.topic, i.methods), i.active) return;
      const r = this.client.proposal.getAll().find((s) => s.pairingTopic === i.topic);
      r && this.onSessionProposeRequest({ topic: i.topic, payload: Ft("wc_sessionPropose", Te(re({}, r), { requiredNamespaces: r.requiredNamespaces, optionalNamespaces: r.optionalNamespaces, relays: r.relays, proposer: r.proposer, sessionProperties: r.sessionProperties, scopedProperties: r.scopedProperties }), r.id) });
    }), T(this, "isValidConnect", async (i) => {
      if (!ke(i)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(i)}`);
        throw new Error(h);
      }
      const { pairingTopic: r, requiredNamespaces: s, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c } = i;
      if (De(r) || await this.isValidPairingTopic(r), !M0(c)) {
        const { message: h } = j("MISSING_OR_INVALID", `connect() relays: ${c}`);
        throw new Error(h);
      }
      if (!De(s) && Vt(s) !== 0) {
        const h = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(h) : this.client.logger.warn(h), this.validateNamespaces(s, "requiredNamespaces");
      }
      if (!De(n) && Vt(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"), De(o) || this.validateSessionProps(o, "sessionProperties"), !De(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const h = Object.keys(s || {}).concat(Object.keys(n || {}));
        if (!Object.keys(a).every((l) => h.includes(l))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(h)}`);
      }
    }), T(this, "validateNamespaces", (i, r) => {
      const s = q0(i, "connect()", r);
      if (s) throw new Error(s.message);
    }), T(this, "isValidApprove", async (i) => {
      if (!ke(i)) throw new Error(j("MISSING_OR_INVALID", `approve() params: ${i}`).message);
      const { id: r, namespaces: s, relayProtocol: n, sessionProperties: o, scopedProperties: a } = i;
      this.checkRecentlyDeleted(r), await this.isValidProposalId(r);
      const c = this.client.proposal.get(r), h = En(s, "approve()");
      if (h) throw new Error(h.message);
      const l = Bc(c.requiredNamespaces, s, "approve()");
      if (l) throw new Error(l.message);
      if (!ue(n, !0)) {
        const { message: u } = j("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
        throw new Error(u);
      }
      if (De(o) || this.validateSessionProps(o, "sessionProperties"), !De(a)) {
        this.validateSessionProps(a, "scopedProperties");
        const u = new Set(Object.keys(s));
        if (!Object.keys(a).every((d) => u.has(d))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`);
      }
    }), T(this, "isValidReject", async (i) => {
      if (!ke(i)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() params: ${i}`);
        throw new Error(n);
      }
      const { id: r, reason: s } = i;
      if (this.checkRecentlyDeleted(r), await this.isValidProposalId(r), !F0(s)) {
        const { message: n } = j("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(n);
      }
    }), T(this, "isValidSessionSettleRequest", (i) => {
      if (!ke(i)) {
        const { message: h } = j("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${i}`);
        throw new Error(h);
      }
      const { relay: r, controller: s, namespaces: n, expiry: o } = i;
      if (!Ru(r)) {
        const { message: h } = j("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = R0(s, "onSessionSettleRequest()");
      if (a) throw new Error(a.message);
      const c = En(n, "onSessionSettleRequest()");
      if (c) throw new Error(c.message);
      if (qt(o)) {
        const { message: h } = j("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }), T(this, "isValidUpdate", async (i) => {
      if (!ke(i)) {
        const { message: c } = j("MISSING_OR_INVALID", `update() params: ${i}`);
        throw new Error(c);
      }
      const { topic: r, namespaces: s } = i;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
      const n = this.client.session.get(r), o = En(s, "update()");
      if (o) throw new Error(o.message);
      const a = Bc(n.requiredNamespaces, s, "update()");
      if (a) throw new Error(a.message);
    }), T(this, "isValidExtend", async (i) => {
      if (!ke(i)) {
        const { message: s } = j("MISSING_OR_INVALID", `extend() params: ${i}`);
        throw new Error(s);
      }
      const { topic: r } = i;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
    }), T(this, "isValidRequest", async (i) => {
      if (!ke(i)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() params: ${i}`);
        throw new Error(c);
      }
      const { topic: r, request: s, chainId: n, expiry: o } = i;
      this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
      const { namespaces: a } = this.client.session.get(r);
      if (!jc(a, n)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() chainId: ${n}`);
        throw new Error(c);
      }
      if (!H0(s)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!W0(a, n, s.method)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (o && !Z0(o, An)) {
        const { message: c } = j("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${An.min} and ${An.max}`);
        throw new Error(c);
      }
    }), T(this, "isValidRespond", async (i) => {
      var r;
      if (!ke(i)) {
        const { message: o } = j("MISSING_OR_INVALID", `respond() params: ${i}`);
        throw new Error(o);
      }
      const { topic: s, response: n } = i;
      try {
        await this.isValidSessionTopic(s);
      } catch (o) {
        throw (r = i == null ? void 0 : i.response) != null && r.id && this.cleanupAfterResponse(i), o;
      }
      if (!V0(n)) {
        const { message: o } = j("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(o);
      }
    }), T(this, "isValidPing", async (i) => {
      if (!ke(i)) {
        const { message: s } = j("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: r } = i;
      await this.isValidSessionOrPairingTopic(r);
    }), T(this, "isValidEmit", async (i) => {
      if (!ke(i)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() params: ${i}`);
        throw new Error(a);
      }
      const { topic: r, event: s, chainId: n } = i;
      await this.isValidSessionTopic(r);
      const { namespaces: o } = this.client.session.get(r);
      if (!jc(o, n)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() chainId: ${n}`);
        throw new Error(a);
      }
      if (!K0(s)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
      if (!G0(o, n, s.name)) {
        const { message: a } = j("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(a);
      }
    }), T(this, "isValidDisconnect", async (i) => {
      if (!ke(i)) {
        const { message: s } = j("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: r } = i;
      await this.isValidSessionOrPairingTopic(r);
    }), T(this, "isValidAuthenticate", (i) => {
      const { chains: r, uri: s, domain: n, nonce: o } = i;
      if (!Array.isArray(r) || r.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!ue(s, !1)) throw new Error("uri is required parameter");
      if (!ue(n, !1)) throw new Error("domain is required parameter");
      if (!ue(o, !1)) throw new Error("nonce is required parameter");
      if ([...new Set(r.map((c) => Hi(c).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: a } = Hi(r[0]);
      if (a !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), T(this, "getVerifyContext", async (i) => {
      const { attestationId: r, hash: s, encryptedId: n, metadata: o, transportType: a } = i, c = { verified: { verifyUrl: o.verifyUrl || Ir, validation: "UNKNOWN", origin: o.url || "" } };
      try {
        if (a === ae.link_mode) {
          const l = this.getAppLinkIfEnabled(o, a);
          return c.verified.validation = l && new URL(l).origin === new URL(o.url).origin ? "VALID" : "INVALID", c;
        }
        const h = await this.client.core.verify.resolve({ attestationId: r, hash: s, encryptedId: n, verifyUrl: o.verifyUrl });
        h && (c.verified.origin = h.origin, c.verified.isScam = h.isScam, c.verified.validation = h.origin === new URL(o.url).origin ? "VALID" : "INVALID");
      } catch (h) {
        this.client.logger.warn(h);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`), c;
    }), T(this, "validateSessionProps", (i, r) => {
      Object.values(i).forEach((s, n) => {
        if (s == null) {
          const { message: o } = j("MISSING_OR_INVALID", `${r} must contain an existing value for each key. Received: ${s} for key ${Object.keys(i)[n]}`);
          throw new Error(o);
        }
      });
    }), T(this, "getPendingAuthRequest", (i) => {
      const r = this.client.auth.requests.get(i);
      return typeof r == "object" ? r : void 0;
    }), T(this, "addToRecentlyDeleted", (i, r) => {
      if (this.recentlyDeletedMap.set(i, r), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const n = this.recentlyDeletedLimit / 2;
        for (const o of this.recentlyDeletedMap.keys()) {
          if (s++ >= n) break;
          this.recentlyDeletedMap.delete(o);
        }
      }
    }), T(this, "checkRecentlyDeleted", (i) => {
      const r = this.recentlyDeletedMap.get(i);
      if (r) {
        const { message: s } = j("MISSING_OR_INVALID", `Record was recently deleted - ${r}: ${i}`);
        throw new Error(s);
      }
    }), T(this, "isLinkModeEnabled", (i, r) => {
      var s, n, o, a, c, h, l, u, d;
      return !i || r !== ae.link_mode ? !1 : ((n = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((h = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : h.universal) !== "" && ((l = i == null ? void 0 : i.redirect) == null ? void 0 : l.universal) !== void 0 && ((u = i == null ? void 0 : i.redirect) == null ? void 0 : u.universal) !== "" && ((d = i == null ? void 0 : i.redirect) == null ? void 0 : d.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(i.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
    }), T(this, "getAppLinkIfEnabled", (i, r) => {
      var s;
      return this.isLinkModeEnabled(i, r) ? (s = i == null ? void 0 : i.redirect) == null ? void 0 : s.universal : void 0;
    }), T(this, "handleLinkModeMessage", ({ url: i }) => {
      if (!i || !i.includes("wc_ev") || !i.includes("topic")) return;
      const r = Za(i, "topic") || "", s = decodeURIComponent(Za(i, "wc_ev") || ""), n = this.client.session.keys.includes(r);
      n && this.client.session.update(r, { transportType: ae.link_mode }), this.client.core.dispatchEnvelope({ topic: r, message: s, sessionExists: n });
    }), T(this, "registerLinkModeListeners", async () => {
      var i;
      if (Ro() || Kt() && (i = this.client.metadata.redirect) != null && i.linkMode) {
        const r = globalThis == null ? void 0 : globalThis.Linking;
        if (typeof r < "u") {
          r.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s = await r.getInitialURL();
          s && setTimeout(() => {
            this.handleLinkModeMessage({ url: s });
          }, 50);
        }
      }
    }), T(this, "shouldSetTVF", (i, r) => {
      if (!r || i !== "wc_sessionRequest") return !1;
      const { request: s } = r;
      return Object.keys(Ph).includes(s.method);
    }), T(this, "getTVFParams", (i, r, s) => {
      var n, o;
      try {
        const a = r.request.method, c = this.extractTxHashesFromResult(a, s);
        return Te(re({ correlationId: i, rpcMethods: [a], chainId: r.chainId }, this.isValidContractData(r.request.params) && { contractAddresses: [(o = (n = r.request.params) == null ? void 0 : n[0]) == null ? void 0 : o.to] }), { txHashes: c });
      } catch (a) {
        this.client.logger.warn("Error getting TVF params", a);
      }
      return {};
    }), T(this, "isValidContractData", (i) => {
      var r;
      if (!i) return !1;
      try {
        const s = (i == null ? void 0 : i.data) || ((r = i == null ? void 0 : i[0]) == null ? void 0 : r.data);
        if (!s.startsWith("0x")) return !1;
        const n = s.slice(2);
        return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1;
      } catch {
      }
      return !1;
    }), T(this, "extractTxHashesFromResult", (i, r) => {
      try {
        const s = Ph[i];
        if (typeof r == "string") return [r];
        const n = r[s.key];
        if (ut(n)) return i === "solana_signAllTransactions" ? n.map((o) => mb(o)) : n;
        if (typeof n == "string") return [n];
      } catch (s) {
        this.client.logger.warn("Error extracting tx hashes from result", s);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const e = this.client.session.keys, i = this.client.core.relayer.messages.getWithoutAck(e);
      for (const [r, s] of Object.entries(i)) for (const n of s) try {
        await this.onProviderMessageEvent({ topic: r, message: n, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${r}, message: ${n}`);
      }
    } catch (e) {
      this.client.logger.warn("processPendingMessageEvents failed", e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = j("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(we.message, (e) => {
      this.onProviderMessageEvent(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: i, message: r, attestation: s, transportType: n } = e, { publicKey: o } = this.client.auth.authKeys.keys.includes(ys) ? this.client.auth.authKeys.get(ys) : { publicKey: void 0 };
    try {
      const a = await this.client.core.crypto.decode(i, r, { receiverPublicKey: o, encoding: n === ae.link_mode ? Mt : lt });
      Ho(a) ? (this.client.core.history.set(i, a), await this.onRelayEventRequest({ topic: i, payload: a, attestation: s, transportType: n, encryptedId: vt(r) })) : Hs(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: i, payload: a, transportType: n }), this.client.core.history.delete(i, a.id)) : await this.onRelayEventUnknownPayload({ topic: i, payload: a, transportType: n }), await this.client.core.relayer.messages.ack(i, r);
    } catch (a) {
      this.client.logger.error(a);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Xe.expired, async (e) => {
      const { topic: i, id: r } = Xl(e.target);
      if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, j("EXPIRED"), !0);
      if (r && this.client.auth.requests.keys.includes(r)) return await this.deletePendingAuthRequest(r, j("EXPIRED"), !0);
      i ? this.client.session.keys.includes(i) && (await this.deleteSession({ topic: i, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: i })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", { id: r }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ti.create, (e) => this.onPairingCreated(e)), this.client.core.pairing.events.on(ti.delete, (e) => {
      this.addToRecentlyDeleted(e.topic, "pairing");
    });
  }
  isValidPairingTopic(e) {
    if (!ue(e, !1)) {
      const { message: i } = j("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(i);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: i } = j("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(i);
    }
    if (qt(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: i } = j("EXPIRED", `pairing topic: ${e}`);
      throw new Error(i);
    }
  }
  async isValidSessionTopic(e) {
    if (!ue(e, !1)) {
      const { message: i } = j("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(i);
    }
    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
      const { message: i } = j("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(i);
    }
    if (qt(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: i } = j("EXPIRED", `session topic: ${e}`);
      throw new Error(i);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: i } = j("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(i);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
    else if (ue(e, !1)) {
      const { message: i } = j("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(i);
    } else {
      const { message: i } = j("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(i);
    }
  }
  async isValidProposalId(e) {
    if (!z0(e)) {
      const { message: i } = j("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(i);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: i } = j("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(i);
    }
    if (qt(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: i } = j("EXPIRED", `proposal id: ${e}`);
      throw new Error(i);
    }
  }
}
class YS extends yi {
  constructor(e, i) {
    super(e, i, NS, Vo), this.core = e, this.logger = i;
  }
}
let JS = class extends yi {
  constructor(e, i) {
    super(e, i, RS, Vo), this.core = e, this.logger = i;
  }
};
class ZS extends yi {
  constructor(e, i) {
    super(e, i, BS, Vo, (r) => r.id), this.core = e, this.logger = i;
  }
}
class QS extends yi {
  constructor(e, i) {
    super(e, i, qS, Ks, () => ys), this.core = e, this.logger = i;
  }
}
class XS extends yi {
  constructor(e, i) {
    super(e, i, MS, Ks), this.core = e, this.logger = i;
  }
}
class eD extends yi {
  constructor(e, i) {
    super(e, i, zS, Ks, (r) => r.id), this.core = e, this.logger = i;
  }
}
var tD = Object.defineProperty, iD = (t, e, i) => e in t ? tD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Cn = (t, e, i) => iD(t, typeof e != "symbol" ? e + "" : e, i);
class rD {
  constructor(e, i) {
    this.core = e, this.logger = i, Cn(this, "authKeys"), Cn(this, "pairingTopics"), Cn(this, "requests"), this.authKeys = new QS(this.core, this.logger), this.pairingTopics = new XS(this.core, this.logger), this.requests = new eD(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
}
var sD = Object.defineProperty, nD = (t, e, i) => e in t ? sD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, W = (t, e, i) => nD(t, typeof e != "symbol" ? e + "" : e, i);
let oD = class ld extends P1 {
  constructor(e) {
    super(e), W(this, "protocol", ad), W(this, "version", cd), W(this, "name", xn.name), W(this, "metadata"), W(this, "core"), W(this, "logger"), W(this, "events", new it.EventEmitter()), W(this, "engine"), W(this, "session"), W(this, "proposal"), W(this, "pendingRequest"), W(this, "auth"), W(this, "signConfig"), W(this, "on", (r, s) => this.events.on(r, s)), W(this, "once", (r, s) => this.events.once(r, s)), W(this, "off", (r, s) => this.events.off(r, s)), W(this, "removeListener", (r, s) => this.events.removeListener(r, s)), W(this, "removeAllListeners", (r) => this.events.removeAllListeners(r)), W(this, "connect", async (r) => {
      try {
        return await this.engine.connect(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "pair", async (r) => {
      try {
        return await this.engine.pair(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "approve", async (r) => {
      try {
        return await this.engine.approve(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "reject", async (r) => {
      try {
        return await this.engine.reject(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "update", async (r) => {
      try {
        return await this.engine.update(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "extend", async (r) => {
      try {
        return await this.engine.extend(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "request", async (r) => {
      try {
        return await this.engine.request(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "respond", async (r) => {
      try {
        return await this.engine.respond(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "ping", async (r) => {
      try {
        return await this.engine.ping(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "emit", async (r) => {
      try {
        return await this.engine.emit(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "disconnect", async (r) => {
      try {
        return await this.engine.disconnect(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "find", (r) => {
      try {
        return this.engine.find(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (r) {
        throw this.logger.error(r.message), r;
      }
    }), W(this, "authenticate", async (r, s) => {
      try {
        return await this.engine.authenticate(r, s);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }), W(this, "formatAuthMessage", (r) => {
      try {
        return this.engine.formatAuthMessage(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "approveSessionAuthenticate", async (r) => {
      try {
        return await this.engine.approveSessionAuthenticate(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), W(this, "rejectSessionAuthenticate", async (r) => {
      try {
        return await this.engine.rejectSessionAuthenticate(r);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }), this.name = (e == null ? void 0 : e.name) || xn.name, this.metadata = Aw(e == null ? void 0 : e.metadata), this.signConfig = e == null ? void 0 : e.signConfig;
    const i = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Hr(Ms({ level: (e == null ? void 0 : e.logger) || xn.logger }));
    this.core = (e == null ? void 0 : e.core) || new TS(e), this.logger = Re(i, this.name), this.session = new JS(this.core, this.logger), this.proposal = new YS(this.core, this.logger), this.pendingRequest = new ZS(this.core, this.logger), this.engine = new GS(this), this.auth = new rD(this.core, this.logger);
  }
  static async init(e) {
    const i = new ld(e);
    return await i.initialize(), i;
  }
  get context() {
    return Me(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, N.toMiliseconds(N.ONE_SECOND));
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var aD = Object.defineProperty, cD = Object.defineProperties, hD = Object.getOwnPropertyDescriptors, Ah = Object.getOwnPropertySymbols, lD = Object.prototype.hasOwnProperty, uD = Object.prototype.propertyIsEnumerable, Ch = (t, e, i) => e in t ? aD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Th = (t, e) => {
  for (var i in e || (e = {})) lD.call(e, i) && Ch(t, i, e[i]);
  if (Ah) for (var i of Ah(e)) uD.call(e, i) && Ch(t, i, e[i]);
  return t;
}, Nh = (t, e) => cD(t, hD(e));
const dD = { Accept: "application/json", "Content-Type": "application/json" }, pD = "POST", Rh = { headers: dD, method: pD }, jh = 10;
let dt = class {
  constructor(e, i = !1) {
    if (this.url = e, this.disableProviderPing = i, this.events = new it.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Qc(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    this.url = e, this.disableProviderPing = i;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e) {
    this.isAvailable || await this.register();
    try {
      const i = jt(e), r = await (await ta(this.url, Nh(Th({}, Rh), { body: i }))).json();
      this.onPayload({ data: r });
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  async register(e = this.url) {
    if (!Qc(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    if (this.registering) {
      const i = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1), new Promise((r, s) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), s(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return s(new Error("HTTP connection is missing or invalid"));
          r();
        });
      });
    }
    this.url = e, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const i = jt({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await ta(e, Nh(Th({}, Rh), { body: i }));
      }
      this.onOpen();
    } catch (i) {
      const r = this.parseError(i);
      throw this.events.emit("register_error", r), this.onClose(), r;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const i = typeof e.data == "string" ? ci(e.data) : e.data;
    this.events.emit("payload", i);
  }
  onError(e, i) {
    const r = this.parseError(i), s = r.message || r.toString(), n = Fs(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, i = this.url) {
    return Mu(e, i, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > jh && this.events.setMaxListeners(jh);
  }
};
const Bh = "error", fD = "wss://relay.walletconnect.org", gD = "wc", yD = "universal_provider", ns = `${gD}@2:${yD}:`, ud = "https://rpc.walletconnect.org/v1/", qi = "generic", mD = `${ud}bundler`, st = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function wD() {
}
function Ko(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function Wo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function bD(t) {
  if (Ko(t)) return t;
  if (Array.isArray(t) || Wo(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  const e = Object.getPrototypeOf(t), i = e.constructor;
  if (t instanceof Date || t instanceof Map || t instanceof Set) return new i(t);
  if (t instanceof RegExp) {
    const r = new i(t);
    return r.lastIndex = t.lastIndex, r;
  }
  if (t instanceof DataView) return new i(t.buffer.slice(0));
  if (t instanceof Error) {
    const r = new i(t.message);
    return r.stack = t.stack, r.name = t.name, r.cause = t.cause, r;
  }
  if (typeof File < "u" && t instanceof File) return new i([t], t.name, { type: t.type, lastModified: t.lastModified });
  if (typeof t == "object") {
    const r = Object.create(e);
    return Object.assign(r, t);
  }
  return t;
}
function Uh(t) {
  return typeof t == "object" && t !== null;
}
function dd(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function pd(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const vD = "[object RegExp]", fd = "[object String]", gd = "[object Number]", yd = "[object Boolean]", md = "[object Arguments]", ED = "[object Symbol]", _D = "[object Date]", ID = "[object Map]", SD = "[object Set]", DD = "[object Array]", $D = "[object ArrayBuffer]", OD = "[object Object]", PD = "[object DataView]", xD = "[object Uint8Array]", AD = "[object Uint8ClampedArray]", CD = "[object Uint16Array]", TD = "[object Uint32Array]", ND = "[object Int8Array]", RD = "[object Int16Array]", jD = "[object Int32Array]", BD = "[object Float32Array]", UD = "[object Float64Array]";
function kD(t, e) {
  return Fi(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function Fi(t, e, i, r = /* @__PURE__ */ new Map(), s = void 0) {
  const n = s == null ? void 0 : s(t, e, i, r);
  if (n != null) return n;
  if (Ko(t)) return t;
  if (r.has(t)) return r.get(t);
  if (Array.isArray(t)) {
    const o = new Array(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Fi(t[a], a, i, r, s);
    return Object.hasOwn(t, "index") && (o.index = t.index), Object.hasOwn(t, "input") && (o.input = t.input), o;
  }
  if (t instanceof Date) return new Date(t.getTime());
  if (t instanceof RegExp) {
    const o = new RegExp(t.source, t.flags);
    return o.lastIndex = t.lastIndex, o;
  }
  if (t instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    r.set(t, o);
    for (const [a, c] of t) o.set(a, Fi(c, a, i, r, s));
    return o;
  }
  if (t instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    r.set(t, o);
    for (const a of t) o.add(Fi(a, void 0, i, r, s));
    return o;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
  if (Wo(t)) {
    const o = new (Object.getPrototypeOf(t)).constructor(t.length);
    r.set(t, o);
    for (let a = 0; a < t.length; a++) o[a] = Fi(t[a], a, i, r, s);
    return o;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
  if (t instanceof DataView) {
    const o = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return r.set(t, o), ii(o, t, i, r, s), o;
  }
  if (typeof File < "u" && t instanceof File) {
    const o = new File([t], t.name, { type: t.type });
    return r.set(t, o), ii(o, t, i, r, s), o;
  }
  if (t instanceof Blob) {
    const o = new Blob([t], { type: t.type });
    return r.set(t, o), ii(o, t, i, r, s), o;
  }
  if (t instanceof Error) {
    const o = new t.constructor();
    return r.set(t, o), o.message = t.message, o.name = t.name, o.stack = t.stack, o.cause = t.cause, ii(o, t, i, r, s), o;
  }
  if (typeof t == "object" && LD(t)) {
    const o = Object.create(Object.getPrototypeOf(t));
    return r.set(t, o), ii(o, t, i, r, s), o;
  }
  return t;
}
function ii(t, e, i = t, r, s) {
  const n = [...Object.keys(e), ...dd(e)];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], c = Object.getOwnPropertyDescriptor(t, a);
    (c == null || c.writable) && (t[a] = Fi(e[a], a, i, r, s));
  }
}
function LD(t) {
  switch (pd(t)) {
    case md:
    case DD:
    case $D:
    case PD:
    case yd:
    case _D:
    case BD:
    case UD:
    case ND:
    case RD:
    case jD:
    case ID:
    case gd:
    case OD:
    case vD:
    case SD:
    case fd:
    case ED:
    case xD:
    case AD:
    case CD:
    case TD:
      return !0;
    default:
      return !1;
  }
}
function qD(t, e) {
  return kD(t, (i, r, s, n) => {
    if (typeof t == "object") switch (Object.prototype.toString.call(t)) {
      case gd:
      case fd:
      case yd: {
        const o = new t.constructor(t == null ? void 0 : t.valueOf());
        return ii(o, t), o;
      }
      case md: {
        const o = {};
        return ii(o, t), o.length = t.length, o[Symbol.iterator] = t[Symbol.iterator], o;
      }
      default:
        return;
    }
  });
}
function kh(t) {
  return qD(t);
}
function Lh(t) {
  return t !== null && typeof t == "object" && pd(t) === "[object Arguments]";
}
function MD(t) {
  return Wo(t);
}
function zD(t) {
  var i;
  if (typeof t != "object" || t == null) return !1;
  if (Object.getPrototypeOf(t) === null) return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const r = t[Symbol.toStringTag];
    return r == null || !((i = Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)) != null && i.writable) ? !1 : t.toString() === `[object ${r}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function FD(t, ...e) {
  const i = e.slice(0, -1), r = e[e.length - 1];
  let s = t;
  for (let n = 0; n < i.length; n++) {
    const o = i[n];
    s = bo(s, o, r, /* @__PURE__ */ new Map());
  }
  return s;
}
function bo(t, e, i, r) {
  if (Ko(t) && (t = Object(t)), e == null || typeof e != "object") return t;
  if (r.has(e)) return bD(r.get(e));
  if (r.set(e, t), Array.isArray(e)) {
    e = e.slice();
    for (let n = 0; n < e.length; n++) e[n] = e[n] ?? void 0;
  }
  const s = [...Object.keys(e), ...dd(e)];
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    let a = e[o], c = t[o];
    if (Lh(a) && (a = { ...a }), Lh(c) && (c = { ...c }), typeof Buffer < "u" && Buffer.isBuffer(a) && (a = kh(a)), Array.isArray(a)) if (typeof c == "object" && c != null) {
      const l = [], u = Reflect.ownKeys(c);
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        l[f] = c[f];
      }
      c = l;
    } else c = [];
    const h = i(c, a, o, t, e, r);
    h != null ? t[o] = h : Array.isArray(a) || Uh(c) && Uh(a) ? t[o] = bo(c, a, i, r) : c == null && zD(a) ? t[o] = bo({}, a, i, r) : c == null && MD(a) ? t[o] = kh(a) : (c === void 0 || a !== void 0) && (t[o] = a);
  }
  return t;
}
function HD(t, ...e) {
  return FD(t, ...e, wD);
}
var VD = Object.defineProperty, KD = Object.defineProperties, WD = Object.getOwnPropertyDescriptors, qh = Object.getOwnPropertySymbols, GD = Object.prototype.hasOwnProperty, YD = Object.prototype.propertyIsEnumerable, Mh = (t, e, i) => e in t ? VD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, os = (t, e) => {
  for (var i in e || (e = {})) GD.call(e, i) && Mh(t, i, e[i]);
  if (qh) for (var i of qh(e)) YD.call(e, i) && Mh(t, i, e[i]);
  return t;
}, JD = (t, e) => KD(t, WD(e));
function Ge(t, e, i) {
  var r;
  const s = Hi(t);
  return ((r = e.rpcMap) == null ? void 0 : r[s.reference]) || `${ud}?chainId=${s.namespace}:${s.reference}&projectId=${i}`;
}
function mi(t) {
  return t.includes(":") ? t.split(":")[1] : t;
}
function wd(t) {
  return t.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function ZD(t, e) {
  const i = Object.keys(e.namespaces).filter((s) => s.includes(t));
  if (!i.length) return [];
  const r = [];
  return i.forEach((s) => {
    const n = e.namespaces[s].accounts;
    r.push(...n);
  }), r;
}
function as(t = {}, e = {}) {
  const i = zh(t), r = zh(e);
  return HD(i, r);
}
function zh(t) {
  var e, i, r, s, n;
  const o = {};
  if (!Vt(t)) return o;
  for (const [a, c] of Object.entries(t)) {
    const h = Ls(a) ? [a] : c.chains, l = c.methods || [], u = c.events || [], d = c.rpcMap || {}, f = zi(a);
    o[f] = JD(os(os({}, o[f]), c), { chains: Et(h, (e = o[f]) == null ? void 0 : e.chains), methods: Et(l, (i = o[f]) == null ? void 0 : i.methods), events: Et(u, (r = o[f]) == null ? void 0 : r.events) }), (Vt(d) || Vt(((s = o[f]) == null ? void 0 : s.rpcMap) || {})) && (o[f].rpcMap = os(os({}, d), (n = o[f]) == null ? void 0 : n.rpcMap));
  }
  return o;
}
function Fh(t) {
  return t.includes(":") ? t.split(":")[2] : t;
}
function Hh(t) {
  const e = {};
  for (const [i, r] of Object.entries(t)) {
    const s = r.methods || [], n = r.events || [], o = r.accounts || [], a = Ls(i) ? [i] : r.chains ? r.chains : wd(r.accounts);
    e[i] = { chains: a, methods: s, events: n, accounts: o };
  }
  return e;
}
function Tn(t) {
  return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
const bd = {}, Q = (t) => bd[t], Nn = (t, e) => {
  bd[t] = e;
};
var QD = Object.defineProperty, XD = (t, e, i) => e in t ? QD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Pi = (t, e, i) => XD(t, typeof e != "symbol" ? e + "" : e, i);
class e$ {
  constructor(e) {
    Pi(this, "name", "polkadot"), Pi(this, "client"), Pi(this, "httpProviders"), Pi(this, "events"), Pi(this, "namespace"), Pi(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = mi(i);
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var t$ = Object.defineProperty, i$ = Object.defineProperties, r$ = Object.getOwnPropertyDescriptors, Vh = Object.getOwnPropertySymbols, s$ = Object.prototype.hasOwnProperty, n$ = Object.prototype.propertyIsEnumerable, vo = (t, e, i) => e in t ? t$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Kh = (t, e) => {
  for (var i in e || (e = {})) s$.call(e, i) && vo(t, i, e[i]);
  if (Vh) for (var i of Vh(e)) n$.call(e, i) && vo(t, i, e[i]);
  return t;
}, Wh = (t, e) => i$(t, r$(e)), xi = (t, e, i) => vo(t, typeof e != "symbol" ? e + "" : e, i);
class o$ {
  constructor(e) {
    xi(this, "name", "eip155"), xi(this, "client"), xi(this, "chainId"), xi(this, "namespace"), xi(this, "httpProviders"), xi(this, "events"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e);
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), i), this.chainId = parseInt(e), this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, i) {
    const r = i || Ge(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = parseInt(mi(i));
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  async handleSwitchChain(e) {
    var i, r;
    let s = e.request.params ? (i = e.request.params[0]) == null ? void 0 : i.chainId : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const n = parseInt(s, 16);
    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: s }] }, chainId: (r = this.namespace.chains) == null ? void 0 : r[0] }), this.setDefaultChain(`${n}`);
    else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var i, r, s, n, o;
    const a = (r = (i = e.request) == null ? void 0 : i.params) == null ? void 0 : r[0], c = ((n = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : n[1]) || [], h = `${a}${c.join(",")}`;
    if (!a) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const l = this.client.session.get(e.topic), u = ((o = l == null ? void 0 : l.sessionProperties) == null ? void 0 : o.capabilities) || {};
    if (u != null && u[h]) return u == null ? void 0 : u[h];
    const d = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, { sessionProperties: Wh(Kh({}, l.sessionProperties || {}), { capabilities: Wh(Kh({}, u || {}), { [h]: d }) }) });
    } catch (f) {
      console.warn("Failed to update session with capabilities", f);
    }
    return d;
  }
  async getCallStatus(e) {
    var i, r;
    const s = this.client.session.get(e.topic), n = (i = s.sessionProperties) == null ? void 0 : i.bundler_name;
    if (n) {
      const a = this.getBundlerUrl(e.chainId, n);
      try {
        return await this.getUserOperationReceipt(a, e);
      } catch (c) {
        console.warn("Failed to fetch call status from bundler", c, a);
      }
    }
    const o = (r = s.sessionProperties) == null ? void 0 : r.bundler_url;
    if (o) try {
      return await this.getUserOperationReceipt(o, e);
    } catch (a) {
      console.warn("Failed to fetch call status from custom bundler", a, o);
    }
    if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, i) {
    var r;
    const s = new URL(e), n = await fetch(s, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Ft("eth_getUserOperationReceipt", [(r = i.request.params) == null ? void 0 : r[0]])) });
    if (!n.ok) throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
    return await n.json();
  }
  getBundlerUrl(e, i) {
    return `${mD}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${i}`;
  }
}
var a$ = Object.defineProperty, c$ = (t, e, i) => e in t ? a$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ai = (t, e, i) => c$(t, typeof e != "symbol" ? e + "" : e, i);
class h$ {
  constructor(e) {
    Ai(this, "name", "solana"), Ai(this, "client"), Ai(this, "httpProviders"), Ai(this, "events"), Ai(this, "namespace"), Ai(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = mi(i);
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var l$ = Object.defineProperty, u$ = (t, e, i) => e in t ? l$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ci = (t, e, i) => u$(t, typeof e != "symbol" ? e + "" : e, i);
class d$ {
  constructor(e) {
    Ci(this, "name", "cosmos"), Ci(this, "client"), Ci(this, "httpProviders"), Ci(this, "events"), Ci(this, "namespace"), Ci(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = mi(i);
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var p$ = Object.defineProperty, f$ = (t, e, i) => e in t ? p$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ti = (t, e, i) => f$(t, typeof e != "symbol" ? e + "" : e, i);
class g$ {
  constructor(e) {
    Ti(this, "name", "algorand"), Ti(this, "client"), Ti(this, "httpProviders"), Ti(this, "events"), Ti(this, "namespace"), Ti(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    if (!this.httpProviders[e]) {
      const r = i || Ge(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    return typeof r > "u" ? void 0 : new rt(new dt(r, Q("disableProviderPing")));
  }
}
var y$ = Object.defineProperty, m$ = (t, e, i) => e in t ? y$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ni = (t, e, i) => m$(t, typeof e != "symbol" ? e + "" : e, i);
class w$ {
  constructor(e) {
    Ni(this, "name", "cip34"), Ni(this, "client"), Ni(this, "httpProviders"), Ni(this, "events"), Ni(this, "namespace"), Ni(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      const r = this.getCardanoRPCUrl(i), s = mi(i);
      e[s] = this.createHttpProvider(s, r);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  getCardanoRPCUrl(e) {
    const i = this.namespace.rpcMap;
    if (i) return i[e];
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || this.getCardanoRPCUrl(e);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var b$ = Object.defineProperty, v$ = (t, e, i) => e in t ? b$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ri = (t, e, i) => v$(t, typeof e != "symbol" ? e + "" : e, i);
class E$ {
  constructor(e) {
    Ri(this, "name", "elrond"), Ri(this, "client"), Ri(this, "httpProviders"), Ri(this, "events"), Ri(this, "namespace"), Ri(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = mi(i);
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var _$ = Object.defineProperty, I$ = (t, e, i) => e in t ? _$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, ji = (t, e, i) => I$(t, typeof e != "symbol" ? e + "" : e, i);
class S$ {
  constructor(e) {
    ji(this, "name", "multiversx"), ji(this, "client"), ji(this, "httpProviders"), ji(this, "events"), ji(this, "namespace"), ji(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      const s = mi(i);
      e[s] = this.createHttpProvider(s, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var D$ = Object.defineProperty, $$ = (t, e, i) => e in t ? D$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Bi = (t, e, i) => $$(t, typeof e != "symbol" ? e + "" : e, i);
class O$ {
  constructor(e) {
    Bi(this, "name", "near"), Bi(this, "client"), Bi(this, "httpProviders"), Bi(this, "events"), Bi(this, "namespace"), Bi(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const r = i || Ge(`${this.name}:${e}`, this.namespace);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      var r;
      e[i] = this.createHttpProvider(i, (r = this.namespace.rpcMap) == null ? void 0 : r[i]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace);
    return typeof r > "u" ? void 0 : new rt(new dt(r, Q("disableProviderPing")));
  }
}
var P$ = Object.defineProperty, x$ = (t, e, i) => e in t ? P$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Ui = (t, e, i) => x$(t, typeof e != "symbol" ? e + "" : e, i);
class A$ {
  constructor(e) {
    Ui(this, "name", "tezos"), Ui(this, "client"), Ui(this, "httpProviders"), Ui(this, "events"), Ui(this, "namespace"), Ui(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, i) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const r = i || Ge(`${this.name}:${e}`, this.namespace);
      if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, r);
    }
    this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((i) => {
      e[i] = this.createHttpProvider(i);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace);
    return typeof r > "u" ? void 0 : new rt(new dt(r));
  }
}
var C$ = Object.defineProperty, T$ = (t, e, i) => e in t ? C$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, ki = (t, e, i) => T$(t, typeof e != "symbol" ? e + "" : e, i);
class N$ {
  constructor(e) {
    ki(this, "name", qi), ki(this, "client"), ki(this, "httpProviders"), ki(this, "events"), ki(this, "namespace"), ki(this, "chainId"), this.namespace = e.namespace, this.events = Q("events"), this.client = Q("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, i) {
    this.httpProviders[e] || this.setHttpProvider(e, i), this.chainId = e, this.events.emit(st.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e, i;
    const r = {};
    return (i = (e = this.namespace) == null ? void 0 : e.accounts) == null || i.forEach((s) => {
      const n = Hi(s);
      r[`${n.namespace}:${n.reference}`] = this.createHttpProvider(s);
    }), r;
  }
  getHttpProvider(e) {
    const i = this.httpProviders[e];
    if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return i;
  }
  setHttpProvider(e, i) {
    const r = this.createHttpProvider(e, i);
    r && (this.httpProviders[e] = r);
  }
  createHttpProvider(e, i) {
    const r = i || Ge(e, this.namespace, this.client.core.projectId);
    if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new rt(new dt(r, Q("disableProviderPing")));
  }
}
var R$ = Object.defineProperty, j$ = Object.defineProperties, B$ = Object.getOwnPropertyDescriptors, Gh = Object.getOwnPropertySymbols, U$ = Object.prototype.hasOwnProperty, k$ = Object.prototype.propertyIsEnumerable, Eo = (t, e, i) => e in t ? R$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, cs = (t, e) => {
  for (var i in e || (e = {})) U$.call(e, i) && Eo(t, i, e[i]);
  if (Gh) for (var i of Gh(e)) k$.call(e, i) && Eo(t, i, e[i]);
  return t;
}, Rn = (t, e) => j$(t, B$(e)), Qe = (t, e, i) => Eo(t, typeof e != "symbol" ? e + "" : e, i);
let L$ = class vd {
  constructor(e) {
    Qe(this, "client"), Qe(this, "namespaces"), Qe(this, "optionalNamespaces"), Qe(this, "sessionProperties"), Qe(this, "scopedProperties"), Qe(this, "events", new Io()), Qe(this, "rpcProviders", {}), Qe(this, "session"), Qe(this, "providerOpts"), Qe(this, "logger"), Qe(this, "uri"), Qe(this, "disableProviderPing", !1), this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Hr(Ms({ level: (e == null ? void 0 : e.logger) || Bh })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const i = new vd(e);
    return await i.initialize(), i;
  }
  async request(e, i, r) {
    const [s, n] = this.validateChain(i);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: cs({}, e), chainId: `${s}:${n}`, topic: this.session.topic, expiry: r });
  }
  sendAsync(e, i, r, s) {
    const n = (/* @__PURE__ */ new Date()).getTime();
    this.request(e, r, s).then((o) => i(null, zs(n, o))).catch((o) => i(o, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: te("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
  }
  async authenticate(e, i) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: r, response: s } = await this.client.authenticate(e, i);
    r && (this.uri = r, this.events.emit("display_uri", r));
    const n = await s();
    if (this.session = n.session, this.session) {
      const o = Hh(this.session.namespaces);
      this.namespaces = as(this.namespaces, o), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n;
  }
  on(e, i) {
    this.events.on(e, i);
  }
  once(e, i) {
    this.events.once(e, i);
  }
  removeListener(e, i) {
    this.events.removeListener(e, i);
  }
  off(e, i) {
    this.events.off(e, i);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    const { uri: i, approval: r } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    i && (this.uri = i, this.events.emit("display_uri", i));
    const s = await r();
    this.session = s;
    const n = Hh(s.namespaces);
    return this.namespaces = as(this.namespaces, n), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e, i) {
    try {
      if (!this.session) return;
      const [r, s] = this.validateChain(e), n = this.getProvider(r);
      n.name === qi ? n.setDefaultChain(`${r}:${s}`, i) : n.setDefaultChain(s, i);
    } catch (r) {
      if (!/Please call connect/.test(r.message)) throw r;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i = this.client.pairing.getAll();
    if (ut(i)) {
      for (const r of i) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
      this.logger.info(`Inactive pairings cleared: ${i.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var e, i;
    if (this.client = this.providerOpts.client || await oD.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || Bh, relayUrl: this.providerOpts.relayUrl || fD, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (r) {
      throw this.logger.error("Failed to get session", r), new Error(`The provided session: ${(i = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : i.topic} doesn't exist in the Sign client`);
    }
    else {
      const r = this.client.session.getAll();
      this.session = r[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((i) => zi(i)))];
    Nn("client", this.client), Nn("events", this.events), Nn("disableProviderPing", this.disableProviderPing), e.forEach((i) => {
      if (!this.session) return;
      const r = ZD(i, this.session), s = wd(r), n = as(this.namespaces, this.optionalNamespaces), o = Rn(cs({}, n[i]), { accounts: r, chains: s });
      switch (i) {
        case "eip155":
          this.rpcProviders[i] = new o$({ namespace: o });
          break;
        case "algorand":
          this.rpcProviders[i] = new g$({ namespace: o });
          break;
        case "solana":
          this.rpcProviders[i] = new h$({ namespace: o });
          break;
        case "cosmos":
          this.rpcProviders[i] = new d$({ namespace: o });
          break;
        case "polkadot":
          this.rpcProviders[i] = new e$({ namespace: o });
          break;
        case "cip34":
          this.rpcProviders[i] = new w$({ namespace: o });
          break;
        case "elrond":
          this.rpcProviders[i] = new E$({ namespace: o });
          break;
        case "multiversx":
          this.rpcProviders[i] = new S$({ namespace: o });
          break;
        case "near":
          this.rpcProviders[i] = new O$({ namespace: o });
          break;
        case "tezos":
          this.rpcProviders[i] = new A$({ namespace: o });
          break;
        default:
          this.rpcProviders[qi] ? this.rpcProviders[qi].updateNamespace(o) : this.rpcProviders[qi] = new N$({ namespace: o });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      var i;
      const { topic: r } = e;
      r === ((i = this.session) == null ? void 0 : i.topic) && this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      var i;
      const { params: r, topic: s } = e;
      if (s !== ((i = this.session) == null ? void 0 : i.topic)) return;
      const { event: n } = r;
      if (n.name === "accountsChanged") {
        const o = n.data;
        o && ut(o) && this.events.emit("accountsChanged", o.map(Fh));
      } else if (n.name === "chainChanged") {
        const o = r.chainId, a = r.event.data, c = zi(o), h = Tn(o) !== Tn(a) ? `${c}:${Tn(a)}` : o;
        this.onChainChanged(h);
      } else this.events.emit(n.name, n.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: i }) => {
      var r, s;
      if (e !== ((r = this.session) == null ? void 0 : r.topic)) return;
      const { namespaces: n } = i, o = (s = this.client) == null ? void 0 : s.session.get(e);
      this.session = Rn(cs({}, o), { namespaces: n }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: i });
    }), this.client.on("session_delete", async (e) => {
      var i;
      e.topic === ((i = this.session) == null ? void 0 : i.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Rn(cs({}, te("USER_DISCONNECTED")), { data: e.topic })));
    }), this.on(st.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[qi];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var i;
      this.getProvider(e).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: i = {}, optionalNamespaces: r = {}, sessionProperties: s, scopedProperties: n } = e;
    this.optionalNamespaces = as(i, r), this.sessionProperties = s, this.scopedProperties = n;
  }
  validateChain(e) {
    const [i, r] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [i, r];
    if (i && !Object.keys(this.namespaces || {}).map((o) => zi(o)).includes(i)) throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
    if (i && r) return [i, r];
    const s = zi(Object.keys(this.namespaces)[0]), n = this.rpcProviders[s].getDefaultChain();
    return [s, n];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  async onChainChanged(e, i = !1) {
    if (!this.namespaces) return;
    const [r, s] = this.validateChain(e);
    if (!s) return;
    this.updateNamespaceChain(r, s), this.events.emit("chainChanged", s);
    const n = this.getProvider(r).getDefaultChain();
    i || this.getProvider(r).setDefaultChain(s), this.emitAccountsChangedOnChainChange({ namespace: r, previousChainId: n, newChainId: e }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: e, previousChainId: i, newChainId: r }) {
    var s, n;
    try {
      if (i === r) return;
      const o = (n = (s = this.session) == null ? void 0 : s.namespaces[e]) == null ? void 0 : n.accounts;
      if (!o) return;
      const a = o.filter((c) => c.includes(`${r}:`)).map(Fh);
      if (!ut(a)) return;
      this.events.emit("accountsChanged", a);
    } catch (o) {
      this.logger.warn("Failed to emit accountsChanged on chain change", o);
    }
  }
  updateNamespaceChain(e, i) {
    if (!this.namespaces) return;
    const r = this.namespaces[e] ? e : `${e}:${i}`, s = { chains: [], methods: [], events: [], defaultChain: i };
    this.namespaces[r] ? this.namespaces[r] && (this.namespaces[r].defaultChain = i) : this.namespaces[r] = s;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
  }
  async persist(e, i) {
    var r;
    const s = ((r = this.session) == null ? void 0 : r.topic) || "";
    await this.client.core.storage.setItem(`${ns}/${e}${s}`, i);
  }
  async getFromStore(e) {
    var i;
    const r = ((i = this.session) == null ? void 0 : i.topic) || "";
    return await this.client.core.storage.getItem(`${ns}/${e}${r}`);
  }
  async deleteFromStore(e) {
    var i;
    const r = ((i = this.session) == null ? void 0 : i.topic) || "";
    await this.client.core.storage.removeItem(`${ns}/${e}${r}`);
  }
  async cleanupStorage() {
    var e;
    try {
      if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
      const i = await this.client.core.storage.getKeys();
      for (const r of i) r.startsWith(ns) && await this.client.core.storage.removeItem(r);
    } catch (i) {
      this.logger.warn("Failed to cleanup storage", i);
    }
  }
};
const q$ = L$, M$ = "wc", z$ = "ethereum_provider", F$ = `${M$}@2:${z$}:`, H$ = "https://rpc.walletconnect.org/v1/", $s = ["eth_sendTransaction", "personal_sign"], Ed = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], Os = ["chainChanged", "accountsChanged"], _d = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"], V$ = async () => {
  const { createAppKit: t } = await import("./core-De0D7Wpr.js").then((e) => e.G);
  return t;
};
var K$ = Object.defineProperty, W$ = Object.defineProperties, G$ = Object.getOwnPropertyDescriptors, Yh = Object.getOwnPropertySymbols, Y$ = Object.prototype.hasOwnProperty, J$ = Object.prototype.propertyIsEnumerable, _o = (t, e, i) => e in t ? K$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Qt = (t, e) => {
  for (var i in e || (e = {})) Y$.call(e, i) && _o(t, i, e[i]);
  if (Yh) for (var i of Yh(e)) J$.call(e, i) && _o(t, i, e[i]);
  return t;
}, mr = (t, e) => W$(t, G$(e)), Fe = (t, e, i) => _o(t, typeof e != "symbol" ? e + "" : e, i);
function Ps(t) {
  return Number(t[0].split(":")[1]);
}
function hs(t) {
  return `0x${t.toString(16)}`;
}
function Z$(t) {
  const { chains: e, optionalChains: i, methods: r, optionalMethods: s, events: n, optionalEvents: o, rpcMap: a } = t;
  if (!ut(e)) throw new Error("Invalid chains");
  const c = { chains: e, methods: r || $s, events: n || Os, rpcMap: Qt({}, e.length ? { [Ps(e)]: a[Ps(e)] } : {}) }, h = n == null ? void 0 : n.filter((f) => !Os.includes(f)), l = r == null ? void 0 : r.filter((f) => !$s.includes(f));
  if (!i && !o && !s && !(h != null && h.length) && !(l != null && l.length)) return { required: e.length ? c : void 0 };
  const u = (h == null ? void 0 : h.length) && (l == null ? void 0 : l.length) || !i, d = { chains: [...new Set(u ? c.chains.concat(i || []) : i)], methods: [...new Set(c.methods.concat(s != null && s.length ? s : Ed))], events: [...new Set(c.events.concat(o != null && o.length ? o : _d))], rpcMap: a };
  return { required: e.length ? c : void 0, optional: i.length ? d : void 0 };
}
class Ws {
  constructor() {
    Fe(this, "events", new it.EventEmitter()), Fe(this, "namespace", "eip155"), Fe(this, "accounts", []), Fe(this, "signer"), Fe(this, "chainId", 1), Fe(this, "modal"), Fe(this, "rpc"), Fe(this, "STORAGE_KEY", F$), Fe(this, "on", (e, i) => (this.events.on(e, i), this)), Fe(this, "once", (e, i) => (this.events.once(e, i), this)), Fe(this, "removeListener", (e, i) => (this.events.removeListener(e, i), this)), Fe(this, "off", (e, i) => (this.events.off(e, i), this)), Fe(this, "parseAccount", (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e), this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const i = new Ws();
    return await i.initialize(e), i;
  }
  async request(e, i) {
    return await this.signer.request(e, this.formatChainId(this.chainId), i);
  }
  sendAsync(e, i, r) {
    this.signer.sendAsync(e, i, this.formatChainId(this.chainId), r);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    var i;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: r, optional: s } = Z$(this.rpc);
    try {
      const n = await new Promise(async (a, c) => {
        var h, l;
        this.rpc.showQrModal && ((h = this.modal) == null || h.open(), (l = this.modal) == null || l.subscribeState((d) => {
          !d.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(new Error("Connection request reset. Please try again.")));
        }));
        const u = e != null && e.scopedProperties ? { [this.namespace]: e.scopedProperties } : void 0;
        await this.signer.connect(mr(Qt({ namespaces: Qt({}, r && { [this.namespace]: r }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: e == null ? void 0 : e.pairingTopic, scopedProperties: u })).then((d) => {
          a(d);
        }).catch((d) => {
          var f;
          (f = this.modal) == null || f.showErrorMessage("Unable to connect"), c(new Error(d.message));
        });
      });
      if (!n) return;
      const o = Ka(n.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: hs(this.chainId) });
    } catch (n) {
      throw this.signer.logger.error(n), n;
    } finally {
      (i = this.modal) == null || i.close();
    }
  }
  async authenticate(e, i) {
    var r;
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const s = await new Promise(async (o, a) => {
        var c, h;
        this.rpc.showQrModal && ((c = this.modal) == null || c.open(), (h = this.modal) == null || h.subscribeState((l) => {
          !l.open && !this.signer.session && (this.signer.abortPairingAttempt(), a(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(mr(Qt({}, e), { chains: this.rpc.chains }), i).then((l) => {
          o(l);
        }).catch((l) => {
          var u;
          (u = this.modal) == null || u.showErrorMessage("Unable to connect"), a(new Error(l.message));
        });
      }), n = s.session;
      if (n) {
        const o = Ka(n.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: hs(this.chainId) });
      }
      return s;
    } catch (s) {
      throw this.signer.logger.error(s), s;
    } finally {
      (r = this.modal) == null || r.close();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: i } = e, { event: r } = i;
      r.name === "accountsChanged" ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : r.name === "chainChanged" ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e);
    }), this.signer.on("accountsChanged", (e) => {
      this.accounts = this.parseAccounts(e), this.events.emit("accountsChanged", this.accounts);
    }), this.signer.on("chainChanged", (e) => {
      const i = parseInt(e);
      this.chainId = i, this.events.emit("chainChanged", hs(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", mr(Qt({}, te("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const i = e.filter((r) => this.isCompatibleChainId(r)).map((r) => this.parseChainId(r));
    i.length && (this.chainId = i[0], this.events.emit("chainChanged", hs(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const i = this.parseChainId(e);
      this.chainId = i, this.switchEthereumChain(i);
    }
  }
  parseAccountId(e) {
    const [i, r, s] = e.split(":");
    return { chainId: `${i}:${r}`, address: s };
  }
  setAccounts(e) {
    this.accounts = e.filter((i) => this.parseChainId(this.parseAccountId(i).chainId) === this.chainId).map((i) => this.parseAccountId(i).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var i, r;
    const s = (i = e == null ? void 0 : e.chains) != null ? i : [], n = (r = e == null ? void 0 : e.optionalChains) != null ? r : [], o = s.concat(n);
    if (!o.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const a = s.length ? (e == null ? void 0 : e.methods) || $s : [], c = s.length ? (e == null ? void 0 : e.events) || Os : [], h = (e == null ? void 0 : e.optionalMethods) || [], l = (e == null ? void 0 : e.optionalEvents) || [], u = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(o, e.projectId), d = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: s == null ? void 0 : s.map((f) => this.formatChainId(f)), optionalChains: n.map((f) => this.formatChainId(f)), methods: a, events: c, optionalMethods: h, optionalEvents: l, rpcMap: u, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: d, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, i) {
    const r = {};
    return e.forEach((s) => {
      r[s] = this.getRpcUrl(s, i);
    }), r;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? Ps(this.rpc.chains) : Ps(this.rpc.optionalChains), this.signer = await q$.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storage: e.storage, storageOptions: e.storageOptions, customStoragePrefix: e.customStoragePrefix, telemetryEnabled: e.telemetryEnabled, logger: e.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let i;
      try {
        const r = await V$(), { convertWCMToAppKitOptions: s } = await Promise.resolve().then(function() {
          return cO;
        }), n = s(mr(Qt({}, this.rpc.qrModalOptions), { chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])], metadata: this.rpc.metadata, projectId: this.rpc.projectId }));
        if (!n.networks.length) throw new Error("No networks found for WalletConnect·");
        i = r(mr(Qt({}, n), { universalProvider: this.signer, manualWCControl: !0 }));
      } catch (r) {
        throw console.warn(r), new Error("To use QR modal, please install @reown/appkit package");
      }
      if (i) try {
        this.modal = i;
      } catch (r) {
        throw this.signer.logger.error(r), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: i, optionalChains: r, rpcMap: s } = e;
    i && ut(i) && (this.rpc.chains = i.map((n) => this.formatChainId(n)), i.forEach((n) => {
      this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
    })), r && ut(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r == null ? void 0 : r.map((n) => this.formatChainId(n)), r.forEach((n) => {
      this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
    }));
  }
  getRpcUrl(e, i) {
    var r;
    return ((r = this.rpc.rpcMap) == null ? void 0 : r[e]) || `${H$}?chainId=eip155:${e}&projectId=${i || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), i = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
      this.setChainIds(e ? [this.formatChainId(e)] : i == null ? void 0 : i.accounts), this.setAccounts(i == null ? void 0 : i.accounts);
    } catch (e) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch((i) => this.signer.logger.warn(i));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((i) => this.parseAccount(i));
  }
}
const Q$ = Ws;
var X$ = Object.defineProperty, eO = Object.defineProperties, tO = Object.getOwnPropertyDescriptors, Jh = Object.getOwnPropertySymbols, iO = Object.prototype.hasOwnProperty, rO = Object.prototype.propertyIsEnumerable, Zh = (t, e, i) => e in t ? X$(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Id = (t, e) => {
  for (var i in e || (e = {})) iO.call(e, i) && Zh(t, i, e[i]);
  if (Jh) for (var i of Jh(e)) rO.call(e, i) && Zh(t, i, e[i]);
  return t;
}, sO = (t, e) => eO(t, tO(e));
function nO(t) {
  if (t) return { "--w3m-font-family": t["--wcm-font-family"], "--w3m-accent": t["--wcm-accent-color"], "--w3m-color-mix": t["--wcm-background-color"], "--w3m-z-index": t["--wcm-z-index"] ? Number(t["--wcm-z-index"]) : void 0, "--w3m-qr-color": t["--wcm-accent-color"], "--w3m-font-size-master": t["--wcm-text-medium-regular-size"], "--w3m-border-radius-master": t["--wcm-container-border-radius"], "--w3m-color-mix-strength": 0 };
}
const oO = (t) => {
  const [e, i] = t.split(":");
  return Sd({ id: i, caipNetworkId: t, chainNamespace: e, name: "", nativeCurrency: { name: "", symbol: "", decimals: 8 }, rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } } });
};
function aO(t) {
  var e, i, r, s, n, o, a;
  const c = (e = t.chains) == null ? void 0 : e.map(oO).filter(Boolean);
  if (c.length === 0) throw new Error("At least one chain must be specified");
  const h = c.find((u) => {
    var d;
    return u.id === ((d = t.defaultChain) == null ? void 0 : d.id);
  }), l = { projectId: t.projectId, networks: c, themeMode: t.themeMode, themeVariables: nO(t.themeVariables), chainImages: t.chainImages, connectorImages: t.walletImages, defaultNetwork: h, metadata: sO(Id({}, t.metadata), { name: ((i = t.metadata) == null ? void 0 : i.name) || "WalletConnect", description: ((r = t.metadata) == null ? void 0 : r.description) || "Connect to WalletConnect-compatible wallets", url: ((s = t.metadata) == null ? void 0 : s.url) || "https://walletconnect.org", icons: ((n = t.metadata) == null ? void 0 : n.icons) || ["https://walletconnect.org/walletconnect-logo.png"] }), showWallets: !0, featuredWalletIds: t.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(t.explorerRecommendedWalletIds) ? t.explorerRecommendedWalletIds : [], excludeWalletIds: t.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(t.explorerExcludedWalletIds) ? t.explorerExcludedWalletIds : [], enableEIP6963: !1, enableInjected: !1, enableCoinbase: !0, enableWalletConnect: !0, features: { email: !1, socials: !1 } };
  if ((o = t.mobileWallets) != null && o.length || (a = t.desktopWallets) != null && a.length) {
    const u = [...(t.mobileWallets || []).map((p) => ({ id: p.id, name: p.name, links: p.links })), ...(t.desktopWallets || []).map((p) => ({ id: p.id, name: p.name, links: { native: p.links.native, universal: p.links.universal } }))], d = [...l.featuredWalletIds || [], ...l.excludeWalletIds || []], f = u.filter((p) => !d.includes(p.id));
    f.length && (l.customWallets = f);
  }
  return l;
}
function Sd(t) {
  return Id({ formatters: void 0, fees: void 0, serializers: void 0 }, t);
}
var cO = Object.freeze({ __proto__: null, convertWCMToAppKitOptions: aO, defineChain: Sd });
const QO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EthereumProvider: Q$,
  OPTIONAL_EVENTS: _d,
  OPTIONAL_METHODS: Ed,
  REQUIRED_EVENTS: Os,
  REQUIRED_METHODS: $s,
  default: Ws
}, Symbol.toStringTag, { value: "Module" }));
export {
  h1 as A,
  Ft as B,
  mw as C,
  gi as D,
  Re as E,
  rt as F,
  J1 as G,
  hf as H,
  fi as I,
  Ho as J,
  Hs as K,
  zs as L,
  vm as M,
  jt as N,
  Hr as O,
  Fa as P,
  Fl as Q,
  ci as R,
  si as S,
  Fs as T,
  bt as U,
  et as V,
  wt as W,
  dt as X,
  QO as Y,
  wa as a,
  Qp as b,
  dO as c,
  uO as d,
  xs as e,
  gO as f,
  fO as g,
  il as h,
  tt as i,
  qe as j,
  N as k,
  oi as l,
  So as m,
  Wd as n,
  tl as o,
  vr as p,
  Pf as q,
  pO as r,
  Vn as s,
  ll as t,
  Df as u,
  Ms as v,
  lf as w,
  oE as x,
  jE as y,
  Me as z
};
