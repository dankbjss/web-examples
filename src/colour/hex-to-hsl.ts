import Decimal from 'decimal.js';

export const hexToHsl = (hex: string): string => {
  const red = new Decimal(parseInt(hex.slice(1, 3), 16)).div(255);
  const green = new Decimal(parseInt(hex.slice(3, 5), 16)).div(255);
  const blue = new Decimal(parseInt(hex.slice(5, 7), 16)).div(255);

  const cmin = Decimal.min(red, green, blue);
  const cmax = Decimal.max(red, green, blue);
  const delta = cmax.minus(cmin);

  let h = new Decimal(0);
  let s = new Decimal(0);
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
    if (h.isNegative()) h = h.plus(360);
  }

  if (!delta.isZero()) {
    s = delta.div(new Decimal(1).minus((l.times(2).minus(1)).abs()));
  }

  // Use rounding after all calculations
  const hFinal = h.toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber();
  const sFinal = s.times(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber();
  const lFinal = l.times(100).toDecimalPlaces(0, Decimal.ROUND_HALF_UP).toNumber();

  return `hsl(${hFinal}, ${sFinal}%, ${lFinal}%)`;
};
