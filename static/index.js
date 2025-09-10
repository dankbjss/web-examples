// src/timestamps/ecma.ts
var getHoursFromMilliseconds = (milliseconds) => {
  return Math.floor(milliseconds / (1000 * 60 * 60));
};
var getDaysFromMilliseconds = (milliseconds) => {
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
};
var convertEcmaTimestamp = (ecmaTimestamp, ecmaConversionOption) => {
  if (!ecmaTimestamp || isNaN(ecmaTimestamp)) {
    return "Please enter a valid timestamp";
  }
  const date = new Date(ecmaTimestamp);
  switch (ecmaConversionOption) {
    case "iso":
      return date.toISOString();
    case "utc":
      return date.toUTCString();
    case "locale":
      return date.toLocaleString();
    case "seconds":
      return Math.floor(ecmaTimestamp / 1000);
    case "hours":
      return getHoursFromMilliseconds(ecmaTimestamp);
    case "days":
      return getDaysFromMilliseconds(ecmaTimestamp);
    default:
      return "Invalid conversion option";
  }
};
// src/timestamps/unix.ts
var getHoursFromSeconds = (seconds) => {
  return Math.floor(seconds / (60 * 60));
};
var getDaysFromSeconds = (seconds) => {
  return Math.floor(seconds / (60 * 60 * 24));
};
var convertUnixTimestamp = (unixTimestamp, conversionOption) => {
  if (!unixTimestamp || isNaN(unixTimestamp)) {
    return "Please enter a valid timestamp";
  }
  const date = new Date(unixTimestamp * 1000);
  switch (conversionOption) {
    case "iso":
      return date.toISOString();
    case "utc":
      return date.toUTCString();
    case "locale":
      return date.toLocaleString();
    case "milliseconds":
      return date.getTime();
    case "hours":
      return getHoursFromSeconds(date.getTime() / 1000);
    case "days":
      return getDaysFromSeconds(date.getTime() / 1000);
    default:
      return "Invalid conversion option";
  }
};
// src/timestamps/iso-string.ts
var convertIsoString = (isoString, conversionType) => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
  if (!isoString || !isoDateRegex.test(isoString)) {
    return "Please enter a valid ISO string";
  }
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return "Invalid ISO string";
  }
  switch (conversionType) {
    case "unix":
      return Math.floor(date.getTime() / 1000);
    case "ecma":
      return date.getTime();
    default:
      return "Invalid conversion type";
  }
};
// src/colour/hex-to-rgb.ts
var hexToRgb = (hex) => {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);
  return `rgb(${red}, ${green}, ${blue})`;
};
// node_modules/decimal.js/decimal.mjs
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var EXP_LIMIT = 9000000000000000;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min, max) {
  var k, x = this, Ctor = x.constructor;
  min = new Ctor(min);
  max = new Ctor(max);
  if (!min.s || !max.s)
    return new Ctor(NaN);
  if (min.gt(max))
    throw Error(invalidArgument + max);
  k = x.cmp(min);
  return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL;i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (;; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (;w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (;i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (;k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k;i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (;i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== undefined)
      for (i = j;r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0];k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 100000000000000) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k;i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0;i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len;i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length;i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i;j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (;xd[--len] === 0; )
    xd.pop();
  for (;xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (;i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0;i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length;xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== undefined && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (;; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL;i--; )
    r.push(0);
  for (i = ydL;--i >= 0; ) {
    carry = 0;
    for (k = xdL + i;k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (;!r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === undefined)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === undefined)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === undefined) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === undefined) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (;; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === undefined) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 100000000000000) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === undefined) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === undefined) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1;i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (;w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0];k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1000 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (;i < strL; ) {
    for (arrL = arr.length;arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0;j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === undefined)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k;i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice();i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0;i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (;aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (;!a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];
    for (i = 0;yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (;(i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (;remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== undefined) && sd--);
        more = rem[0] !== undefined;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0];k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0];k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (;k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1;k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== undefined || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (;; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0];j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1;j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length;xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE;w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (;w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0];w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (;k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (;; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k, y, x = new Ctor(args[0]), i = 0;
  for (;++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k = x.cmp(y);
    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow, sum, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(1);
  Ctor.precision = wpr;
  for (;; ) {
    pow = finalise(pow.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum = finalise(sum.times(sum), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum;
      }
    }
    sum = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 1500000000000000) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (;; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);
      if (e !== 0)
        sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum = divide(sum, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum;
      }
    }
    sum = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0;str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length;str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE;i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (;i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe;xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (;k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (;; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== undefined) {
      for (j = k;t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== undefined;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (;xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== undefined;
      roundUp = rm < 4 ? (i !== undefined || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (;++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length;!xd[len - 1]; --len)
        ;
      for (i = 0, str = "";i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len;len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length;!xd[len - 1]; --len)
              ;
            for (i = 1, str = "1.";i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (;++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len;e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min, max) {
  return new this(x).clamp(min, max);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0;i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== undefined) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== undefined) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal))
      return new Decimal(v);
    x.constructor = Decimal;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v;i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43)
          v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal.prototype = P;
  Decimal.ROUND_UP = 0;
  Decimal.ROUND_DOWN = 1;
  Decimal.ROUND_CEIL = 2;
  Decimal.ROUND_FLOOR = 3;
  Decimal.ROUND_HALF_UP = 4;
  Decimal.ROUND_HALF_DOWN = 5;
  Decimal.ROUND_HALF_EVEN = 6;
  Decimal.ROUND_HALF_CEIL = 7;
  Decimal.ROUND_HALF_FLOOR = 8;
  Decimal.EUCLID = 9;
  Decimal.config = Decimal.set = config;
  Decimal.clone = clone;
  Decimal.isDecimal = isDecimalInstance;
  Decimal.abs = abs;
  Decimal.acos = acos;
  Decimal.acosh = acosh;
  Decimal.add = add;
  Decimal.asin = asin;
  Decimal.asinh = asinh;
  Decimal.atan = atan;
  Decimal.atanh = atanh;
  Decimal.atan2 = atan2;
  Decimal.cbrt = cbrt;
  Decimal.ceil = ceil;
  Decimal.clamp = clamp;
  Decimal.cos = cos;
  Decimal.cosh = cosh;
  Decimal.div = div;
  Decimal.exp = exp;
  Decimal.floor = floor;
  Decimal.hypot = hypot;
  Decimal.ln = ln;
  Decimal.log = log;
  Decimal.log10 = log10;
  Decimal.log2 = log2;
  Decimal.max = max;
  Decimal.min = min;
  Decimal.mod = mod;
  Decimal.mul = mul;
  Decimal.pow = pow;
  Decimal.random = random;
  Decimal.round = round;
  Decimal.sign = sign;
  Decimal.sin = sin;
  Decimal.sinh = sinh;
  Decimal.sqrt = sqrt;
  Decimal.sub = sub;
  Decimal.sum = sum;
  Decimal.tan = tan;
  Decimal.tanh = tanh;
  Decimal.trunc = trunc;
  if (obj === undefined)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0;i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal.config(obj);
  return Decimal;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0;i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === undefined)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (;i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (;i < k; ) {
      n = d[i];
      if (n >= 4290000000) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (;i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 2140000000) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (;rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (;rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0];n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (;x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;

// src/colour/hex-to-hsl.ts
var hexToHsl = (hex) => {
  const red = new decimal_default(parseInt(hex.slice(1, 3), 16)).div(255);
  const green = new decimal_default(parseInt(hex.slice(3, 5), 16)).div(255);
  const blue = new decimal_default(parseInt(hex.slice(5, 7), 16)).div(255);
  const cmin = decimal_default.min(red, green, blue);
  const cmax = decimal_default.max(red, green, blue);
  const delta = cmax.minus(cmin);
  let h = new decimal_default(0);
  let s = new decimal_default(0);
  let l = cmax.plus(cmin).div(2);
  if (!delta.isZero()) {
    if (cmax.equals(red)) {
      h = green.minus(blue).div(delta).mod(6);
    } else if (cmax.equals(green)) {
      h = blue.minus(red).div(delta).plus(2);
    } else {
      h = red.minus(green).div(delta).plus(4);
    }
    h = h.times(60);
    if (h.isNegative())
      h = h.plus(360);
  }
  if (!delta.isZero()) {
    s = delta.div(new decimal_default(1).minus(l.times(2).minus(1).abs()));
  }
  const hFinal = h.toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber();
  const sFinal = s.times(100).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber();
  const lFinal = l.times(100).toDecimalPlaces(0, decimal_default.ROUND_HALF_UP).toNumber();
  return `hsl(${hFinal}, ${sFinal}%, ${lFinal}%)`;
};
// src/numbers/scientific-notation.ts
var toScientificNotation = (num, precision = 0) => {
  const exponential = precision > 0 ? Number(num).toExponential(precision) : Number(num).toExponential(0);
  const match = exponential.match(/^(-?\d+(?:\.\d+)?)e([+-]?\d+)$/);
  if (!match) {
    return num.toString();
  }
  let coefficient = match[1];
  const exponent = parseInt(match[2], 10).toString();
  if (precision === 0) {
    coefficient = Math.round(Number(coefficient)).toString();
  }
  return `${coefficient} &times; 10<sup>${exponent}</sup>`;
};
// src/units/temperatre-converter.ts
class TemperatureConverter {
  static CELSIUS_TO_FAHRENHEIT = 1.8;
  static FAHRENHEIT_TO_CELSIUS = 0.5555555555555556;
  static celsiusToFahrenheit(celsius) {
    return celsius * this.CELSIUS_TO_FAHRENHEIT + 32;
  }
  static fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * this.FAHRENHEIT_TO_CELSIUS;
  }
  static celsiusFanOvenToFahrenheit(celsiusFanOven) {
    const celsius = new Decimal(celsiusFanOven).div(0.9);
    return this.celsiusToFahrenheit(celsius.toNumber());
  }
  static fahrenheitToCelsiusFanOven(fahrenheit) {
    const celsius = new Decimal(this.fahrenheitToCelsius(fahrenheit));
    return celsius.mul(0.9).toNumber();
  }
  static celsiusToCelsiusFanOven(celsius) {
    const c = new Decimal(celsius);
    return c.mul(0.9).toNumber();
  }
  static celsiusFanOvenToCelsius(celsiusFanOven) {
    const c = new Decimal(celsiusFanOven);
    return c.div(0.9).toNumber();
  }
}

// src/units/mass-converter.ts
class MassConverter {
  static GRAMS_TO_OUNCES = new Decimal(0.035274);
  static KILOGRAMS_TO_POUNDS = new Decimal(2.20462);
  static KILOGRAMS_TO_OUNCES = new Decimal(35.274);
  static kilogramsToPounds(kilos) {
    const result = new Decimal(kilos).mul(this.KILOGRAMS_TO_POUNDS);
    return Number(result.toFixed(5));
  }
  static poundsToKilograms(pounds) {
    const result = new Decimal(pounds).div(this.KILOGRAMS_TO_POUNDS);
    return Number(result.toFixed(5));
  }
  static gramsToKilograms(grams) {
    const result = new Decimal(grams).div(1000);
    return Number(result.toFixed(5));
  }
  static kilogramsToGrams(kilos) {
    const result = new Decimal(kilos).mul(1000);
    return Number(result.toFixed(5));
  }
  static gramsToOunces(grams) {
    const result = new Decimal(grams).mul(this.GRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }
  static ouncesToGrams(ounces) {
    const result = new Decimal(ounces).div(this.GRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }
  static ouncesToPounds(ounces) {
    const result = new Decimal(ounces).div(16);
    return Number(result.toFixed(5));
  }
  static poundsToOunces(pounds) {
    const result = new Decimal(pounds).mul(16);
    return Number(result.toFixed(5));
  }
  static gramsToPounds(grams) {
    const result = new Decimal(grams).mul(this.KILOGRAMS_TO_POUNDS).div(1000);
    return Number(result.toFixed(5));
  }
  static poundsToGrams(pounds) {
    const result = new Decimal(pounds).div(this.KILOGRAMS_TO_POUNDS).mul(1000);
    return Number(result.toFixed(5));
  }
  static kilogramsToOunces(kilos) {
    const result = new Decimal(kilos).mul(this.KILOGRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }
  static ouncesToKilograms(ounces) {
    const result = new Decimal(ounces).div(this.KILOGRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }
}

// src/units/volume-converter.ts
class VolumeConverter {
  static LITRES_TO_PINTS = new Decimal(1.75975);
  static PINTS_TO_LITRES = new Decimal(0.568261);
  static LITRES_TO_FLUID_OUNCES = new Decimal(33.814);
  static FLUID_OUNCES_TO_LITRES = new Decimal(0.0295735);
  static GALLONS_TO_PINTS = new Decimal(8);
  static PINTS_TO_GALLONS = new Decimal(0.125);
  static GALLONS_TO_MILLILITRES = new Decimal(3785.41);
  static MILLILITRES_TO_GALLONS = new Decimal(0.000264172);
  static PINTS_TO_FLUID_OUNCES = new Decimal(20);
  static FLUID_OUNCES_TO_PINTS = new Decimal(0.05);
  static MILLILITRE_TO_FLUID_OUNCE = new Decimal(0.033814);
  static LITRE_TO_GALLON = new Decimal(0.264172);
  static MILLILITRE_TO_PINT = new Decimal(0.00176);
  static litresToPints(litres) {
    const result = new Decimal(litres).mul(this.LITRES_TO_PINTS);
    return Number(result.toFixed(5));
  }
  static pintsToLitres(pints) {
    const result = new Decimal(pints).mul(this.PINTS_TO_LITRES);
    return Number(result.toFixed(5));
  }
  static litresToFluidOunces(litres) {
    const result = new Decimal(litres).mul(this.LITRES_TO_FLUID_OUNCES);
    return Number(result.toFixed(5));
  }
  static fluidOuncesToLitres(fluidOunces) {
    const result = new Decimal(fluidOunces).mul(this.FLUID_OUNCES_TO_LITRES);
    return Number(result.toFixed(5));
  }
  static gallonsToPints(gallons) {
    const result = new Decimal(gallons).mul(this.GALLONS_TO_PINTS);
    return Number(result.toFixed(5));
  }
  static pintsToGallons(pints) {
    const result = new Decimal(pints).mul(this.PINTS_TO_GALLONS);
    return Number(result.toFixed(5));
  }
  static gallonsToMillilitres(gallons) {
    const result = new Decimal(gallons).mul(this.GALLONS_TO_MILLILITRES);
    return Number(result.toFixed(5));
  }
  static millilitresToGallons(millilitres) {
    const result = new Decimal(millilitres).mul(this.MILLILITRES_TO_GALLONS);
    return Number(result.toFixed(5));
  }
  static pintsToFluidOunces(pints) {
    const result = new Decimal(pints).mul(this.PINTS_TO_FLUID_OUNCES);
    return Number(result.toFixed(5));
  }
  static fluidOuncesToPints(fluidOunces) {
    const result = new Decimal(fluidOunces).mul(this.FLUID_OUNCES_TO_PINTS);
    return Number(result.toFixed(5));
  }
  static millilitresToFluidOunces(millilitres) {
    const result = new Decimal(millilitres).mul(this.MILLILITRE_TO_FLUID_OUNCE);
    return Number(result.toFixed(5));
  }
  static fluidOuncesToMillilitres(fluidOunces) {
    const result = new Decimal(fluidOunces).div(this.MILLILITRE_TO_FLUID_OUNCE);
    return Number(result.toFixed(5));
  }
  static litresToGallons(litres) {
    const result = new Decimal(litres).mul(this.LITRE_TO_GALLON);
    return Number(result.toFixed(5));
  }
  static litresToMillilitres(litres) {
    const result = new Decimal(litres).mul(1000);
    return Number(result.toFixed(5));
  }
  static millilitresToLitres(millilitres) {
    const result = new Decimal(millilitres).div(1000);
    return Number(result.toFixed(5));
  }
  static gallonsToLitres(gallons) {
    const result = new Decimal(gallons).div(this.LITRE_TO_GALLON);
    return Number(result.toFixed(5));
  }
  static millilitresToPints(millilitres) {
    const result = new Decimal(millilitres).mul(this.MILLILITRE_TO_PINT);
    return Number(result.toFixed(5));
  }
  static pintsToMillilitres(pints) {
    const result = new Decimal(pints).div(this.MILLILITRE_TO_PINT);
    return Number(result.toFixed(5));
  }
  static gallonsToFluidOunces(gallons) {
    const litres = this.gallonsToLitres(gallons);
    const millilitres = this.litresToMillilitres(litres);
    return this.millilitresToFluidOunces(millilitres);
  }
  static fluidOuncesToGallons(fluidOunces) {
    const millilitres = this.fluidOuncesToMillilitres(fluidOunces);
    const litres = this.millilitresToLitres(millilitres);
    return this.litresToGallons(litres);
  }
}

// src/units/model.ts
var MASS_UNITS = {
  GRAM: { long: "gram", short: "g" },
  KILOGRAM: { long: "kilogram", short: "kg" },
  OUNCE: { long: "ounce", short: "oz" },
  POUND: { long: "pound", short: "lb" }
};
var TEMPERATURE_UNITS = {
  CELSIUS: { long: "celsius", short: "c" },
  CELSIUS_FAN_OVEN: { long: "celsius (fan oven)", short: "c (fan)" },
  FAHRENHEIT: { long: "fahrenheit", short: "f" }
};
var VOLUME_UNITS = {
  MILLILITRE: { long: "millilitre", short: "ml" },
  FLUID_OUNCE: { long: "fluid ounce", short: "fl oz" },
  LITRE: { long: "litre", short: "l" },
  GALLON: { long: "gallon", short: "gal" },
  PINT: { long: "pint", short: "pt" }
};
var DISTANCE_UNITS = {
  CENTIMETRE: { long: "centimetre", short: "cm" },
  METRE: { long: "metre", short: "m" },
  KILOMETRE: { long: "kilometre", short: "km" },
  INCH: { long: "inch", short: "in" },
  FOOT: { long: "foot", short: "ft" },
  YARD: { long: "yard", short: "yd" },
  MILE: { long: "mile", short: "mi" }
};
function isMassUnit(unit) {
  return Object.values(MASS_UNITS).some((u) => u.short === unit);
}
function isTemperatureUnit(unit) {
  return Object.values(TEMPERATURE_UNITS).some((u) => u.short === unit);
}
function isVolumeUnit(unit) {
  return Object.values(VOLUME_UNITS).some((u) => u.short === unit);
}
function isDistanceUnit(unit) {
  return Object.values(DISTANCE_UNITS).some((u) => u.short === unit);
}
var unitMap = {
  ...MASS_UNITS,
  ...TEMPERATURE_UNITS,
  ...VOLUME_UNITS,
  ...DISTANCE_UNITS
};

// src/units/distance-converter.ts
class DistanceConverter {
  static METRES_TO_YARDS = new Decimal(1.09361);
  static KILOMETRES_TO_MILES = new Decimal(0.621371);
  static CENTIMETRES_TO_INCHES = new Decimal(0.393701);
  static METRES_TO_FEET = new Decimal(3.28084);
  static CENTIMETRES_TO_FEET = new Decimal(0.0328084);
  static FEET_TO_INCHES = new Decimal(12);
  static METRES_TO_INCHES = new Decimal(39.3701);
  static INCHES_TO_METRES = new Decimal(0.0254);
  static KILOMETRES_TO_YARDS = new Decimal(1093.61);
  static YARDS_TO_KILOMETRES = new Decimal(0.0009144);
  static MILES_TO_YARDS = new Decimal(1760);
  static YARDS_TO_MILES = new Decimal(0.000568182);
  static MILES_TO_FEET = new Decimal(5280);
  static FEET_TO_MILES = new Decimal(0.000189394);
  static MILES_TO_INCHES = new Decimal(63360);
  static INCHES_TO_MILES = new Decimal(0.0000157828);
  static YARDS_TO_FEET = new Decimal(3);
  static FEET_TO_YARDS = new Decimal(0.333333);
  static metresToYards(metres) {
    const result = new Decimal(metres).mul(this.METRES_TO_YARDS);
    return Number(result.toFixed(5));
  }
  static metresToFeet(metres) {
    const result = new Decimal(metres).mul(this.METRES_TO_FEET);
    return Number(result.toFixed(5));
  }
  static feetToMetres(feet) {
    const result = new Decimal(feet).div(this.METRES_TO_FEET);
    return Number(result.toFixed(5));
  }
  static yardsToMetres(yards) {
    const result = new Decimal(yards).div(this.METRES_TO_YARDS);
    return Number(result.toFixed(5));
  }
  static kilometresToMiles(kilometres) {
    const result = new Decimal(kilometres).mul(this.KILOMETRES_TO_MILES);
    return Number(result.toFixed(5));
  }
  static milesToKilometres(miles) {
    const result = new Decimal(miles).div(this.KILOMETRES_TO_MILES);
    return Number(result.toFixed(5));
  }
  static centimetresToInches(centimetres) {
    const result = new Decimal(centimetres).mul(this.CENTIMETRES_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static centimetresToFeet(centimetres) {
    const result = new Decimal(centimetres).mul(this.CENTIMETRES_TO_FEET);
    return Number(result.toFixed(5));
  }
  static feetToCentimetres(feet) {
    const result = new Decimal(feet).div(this.CENTIMETRES_TO_FEET);
    return Number(result.toFixed(5));
  }
  static inchesToCentimetres(inches) {
    const result = new Decimal(inches).div(this.CENTIMETRES_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static feetToInches(feet) {
    const result = new Decimal(feet).mul(this.FEET_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static inchesToFeet(inches) {
    const result = new Decimal(inches).div(this.FEET_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static centimetresToMetres(centimetres) {
    const result = new Decimal(centimetres).div(100);
    return Number(result.toFixed(5));
  }
  static metresToCentimetres(metres) {
    const result = new Decimal(metres).mul(100);
    return Number(result.toFixed(5));
  }
  static kilometresToMetres(kilometres) {
    const result = new Decimal(kilometres).mul(1000);
    return Number(result.toFixed(5));
  }
  static metresToKilometres(metres) {
    const result = new Decimal(metres).div(1000);
    return Number(result.toFixed(5));
  }
  static kilometresToCentimetres(kilometres) {
    const result = new Decimal(kilometres).mul(1e5);
    return Number(result.toFixed(5));
  }
  static centimetresToKilometres(centimetres) {
    const result = new Decimal(centimetres).div(1e5);
    return Number(result.toFixed(5));
  }
  static metresToInches(metres) {
    const result = new Decimal(metres).mul(this.METRES_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static inchesToMetres(inches) {
    const result = new Decimal(inches).mul(this.INCHES_TO_METRES);
    return Number(result.toFixed(5));
  }
  static kilometresToYards(kilometres) {
    const result = new Decimal(kilometres).mul(this.KILOMETRES_TO_YARDS);
    return Number(result.toFixed(5));
  }
  static yardsToKilometres(yards) {
    const result = new Decimal(yards).mul(this.YARDS_TO_KILOMETRES);
    return Number(result.toFixed(5));
  }
  static milesToYards(miles) {
    const result = new Decimal(miles).mul(this.MILES_TO_YARDS);
    return Number(result.toFixed(5));
  }
  static yardsToMiles(yards) {
    const result = new Decimal(yards).mul(this.YARDS_TO_MILES);
    return Number(result.toFixed(5));
  }
  static milesToFeet(miles) {
    const result = new Decimal(miles).mul(this.MILES_TO_FEET);
    return Number(result.toFixed(5));
  }
  static feetToMiles(feet) {
    const result = new Decimal(feet).mul(this.FEET_TO_MILES);
    return Number(result.toFixed(5));
  }
  static milesToInches(miles) {
    const result = new Decimal(miles).mul(this.MILES_TO_INCHES);
    return Number(result.toFixed(5));
  }
  static inchesToMiles(inches) {
    const result = new Decimal(inches).mul(this.INCHES_TO_MILES);
    return Number(result.toFixed(5));
  }
  static yardsToFeet(yards) {
    const result = new Decimal(yards).mul(this.YARDS_TO_FEET);
    return Number(result.toFixed(5));
  }
  static feetToYards(feet) {
    const result = new Decimal(feet).mul(this.FEET_TO_YARDS);
    return Number(result.toFixed(5));
  }
  static milesToMetres(miles) {
    const kilometres = this.milesToKilometres(miles);
    return this.kilometresToMetres(kilometres);
  }
  static metresToMiles(metres) {
    const kilometres = this.metresToKilometres(metres);
    return this.kilometresToMiles(kilometres);
  }
}

// src/units/convert-unit.ts
var conversionErrorString = (fromUnit, toUnit) => {
  return `Cannot convert from ${fromUnit} to ${toUnit}`;
};
var convertMass = (value, fromUnit, toUnit) => {
  if (!isMassUnit(toUnit) || !isMassUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.kilogramsToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.poundsToKilograms(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.gramsToKilograms(value);
  } else if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.kilogramsToGrams(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.gramsToOunces(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.ouncesToGrams(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.ouncesToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.poundsToOunces(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.gramsToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.poundsToGrams(value);
  } else if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.kilogramsToOunces(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.ouncesToKilograms(value);
  }
  return conversionErrorString(fromUnit, toUnit);
};
var convertTemperature = (value, fromUnit, toUnit) => {
  if (!isTemperatureUnit(toUnit) || !isTemperatureUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (fromUnit === TEMPERATURE_UNITS.CELSIUS.short && toUnit === TEMPERATURE_UNITS.FAHRENHEIT.short) {
    return TemperatureConverter.celsiusToFahrenheit(value);
  } else if (fromUnit === TEMPERATURE_UNITS.FAHRENHEIT.short && toUnit === TEMPERATURE_UNITS.CELSIUS.short) {
    return TemperatureConverter.fahrenheitToCelsius(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short && toUnit === TEMPERATURE_UNITS.FAHRENHEIT.short) {
    return TemperatureConverter.celsiusFanOvenToFahrenheit(value);
  } else if (fromUnit === TEMPERATURE_UNITS.FAHRENHEIT.short && toUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short) {
    return TemperatureConverter.fahrenheitToCelsiusFanOven(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS.short && toUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short) {
    return TemperatureConverter.celsiusToCelsiusFanOven(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short && toUnit === TEMPERATURE_UNITS.CELSIUS.short) {
    return TemperatureConverter.celsiusFanOvenToCelsius(value);
  }
  return conversionErrorString(fromUnit, toUnit);
};
var convertVolume = (value, fromUnit, toUnit) => {
  if (!isVolumeUnit(toUnit) || !isVolumeUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.litresToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.pintsToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.litresToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.fluidOuncesToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.gallonsToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.pintsToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.gallonsToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.millilitresToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.pintsToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.fluidOuncesToPints(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.millilitresToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.fluidOuncesToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.litresToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.litresToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.millilitresToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.gallonsToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.millilitresToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.pintsToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.gallonsToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.fluidOuncesToGallons(value);
  }
  return conversionErrorString(fromUnit, toUnit);
};
var convertDistance = (value, fromUnit, toUnit) => {
  if (!isDistanceUnit(toUnit) || !isDistanceUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.metresToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.metresToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.feetToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.yardsToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.kilometresToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.milesToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.centimetresToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.centimetresToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.feetToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.inchesToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.feetToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.inchesToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit == DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.centimetresToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.metresToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.kilometresToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.metresToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.kilometresToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.centimetresToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.metresToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.inchesToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.kilometresToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.yardsToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.milesToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.yardsToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.milesToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.feetToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.milesToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.inchesToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.yardsToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.feetToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.milesToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.metresToMiles(value);
  }
  return conversionErrorString(fromUnit, toUnit);
};
var convertUnit = (value, fromUnit, toUnit) => {
  let result;
  if (fromUnit === toUnit) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (isMassUnit(fromUnit) && isMassUnit(toUnit)) {
    result = convertMass(value, fromUnit, toUnit);
  } else if (isTemperatureUnit(fromUnit) && isTemperatureUnit(toUnit)) {
    result = convertTemperature(value, fromUnit, toUnit);
  } else if (isVolumeUnit(fromUnit) && isVolumeUnit(toUnit)) {
    result = convertVolume(value, fromUnit, toUnit);
  } else if (isDistanceUnit(fromUnit) && isDistanceUnit(toUnit)) {
    result = convertDistance(value, fromUnit, toUnit);
  } else {
    return conversionErrorString(fromUnit, toUnit);
  }
  const rounded = new decimal_default(result).toDecimalPlaces(5);
  return rounded.isInteger() ? rounded.toNumber() : Number(rounded);
};
export {
  toScientificNotation,
  hexToRgb,
  hexToHsl,
  convertUnixTimestamp,
  convertUnit,
  convertIsoString,
  convertEcmaTimestamp
};
