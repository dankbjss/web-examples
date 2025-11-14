import Decimal from 'decimal.js';
import { relativeLuminance } from './relative-luminance';

export const contrastRatio = (hex1: string, hex2: string): string => {
  const lum1 = relativeLuminance(hex1);
  const lum2 = relativeLuminance(hex2);

  const lighter = Decimal.max(lum1, lum2);
  const darker = Decimal.min(lum1, lum2);

  const ratio = lighter.plus(0.05).div(darker.plus(0.05));

  return ratio.toDecimalPlaces(2, Decimal.ROUND_HALF_UP).toFixed(2);
};
