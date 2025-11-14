import { describe, expect, it } from 'bun:test';
import { relativeLuminance } from './relative-luminance';
import Decimal from 'decimal.js';

describe('relativeLuminance', () => {
  const testCases = [
    { hex: '#FFFFFF', expected: '1.000' }, // White
    { hex: '#000000', expected: '0.000' }, // Black
    { hex: '#FF0000', expected: '0.213' }, // Red
    { hex: '#00FF00', expected: '0.715' }, // Green
    { hex: '#0000FF', expected: '0.072' }, // Blue
    { hex: '#808080', expected: '0.216' }, // Gray
    { hex: '#FFFF00', expected: '0.928' }, // Yellow
  ];

  testCases.forEach(({ hex, expected }) => {
    it(`should calculate relative luminance for ${hex}`, () => {
      const result = relativeLuminance(hex);
      expect(result.toDecimalPlaces(3, Decimal.ROUND_HALF_UP).toFixed(3)).toBe(expected);
    });
  });

  it('should handle lowercase hex values', () => {
    const result = relativeLuminance('#ffffff');
    expect(result.toDecimalPlaces(3, Decimal.ROUND_HALF_UP).toFixed(3)).toBe('1.000');
  });
});
