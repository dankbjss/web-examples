import Decimal from 'decimal.js';

export const relativeLuminance = (hex: string): Decimal => {
  const red = new Decimal(parseInt(hex.slice(1, 3), 16)).div(255);
  const green = new Decimal(parseInt(hex.slice(3, 5), 16)).div(255);
  const blue = new Decimal(parseInt(hex.slice(5, 7), 16)).div(255);

  const rLinear = red.lte(0.03928)
    ? red.div(12.92)
    : red.plus(0.055).div(1.055).pow(2.4);

  const gLinear = green.lte(0.03928)
    ? green.div(12.92)
    : green.plus(0.055).div(1.055).pow(2.4);

  const bLinear = blue.lte(0.03928)
    ? blue.div(12.92)
    : blue.plus(0.055).div(1.055).pow(2.4);

  return rLinear.times(0.2126).plus(gLinear.times(0.7152)).plus(bLinear.times(0.0722));
};
