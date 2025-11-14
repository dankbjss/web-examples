import { describe, expect, it } from 'bun:test';
import { contrastRatio } from './contrast-ratio';

describe('contrastRatio', () => {
 const testCases = [
    { hex1: '#FFFFFF', hex2: '#000000', expected: '21.00' }, // Maximum contrast
    { hex1: '#FFFFFF', hex2: '#FFFFFF', expected: '1.00' }, // Minimum contrast
    { hex1: '#000000', hex2: '#000000', expected: '1.00' }, // Minimum contrast
    { hex1: '#FFFFFF', hex2: '#777777', expected: '4.48' }, // AA compliant
    { hex1: '#000000', hex2: '#777777', expected: '4.69' }, // AA compliant
    { hex1: '#0000FF', hex2: '#FFFF00', expected: '8.00' }, // AAA compliant
    { hex1: '#FF0000', hex2: '#00FF00', expected: '2.91' }, // Not AA compliant
  ];

  testCases.forEach(({ hex1, hex2, expected }) => {
    it(`should calculate contrast ratio between ${hex1} and ${hex2}`, () => {
      expect(contrastRatio(hex1, hex2)).toBe(expected);
    });
  });

  it('should return the same ratio regardless of order', () => {
    const ratio1 = contrastRatio('#FFFFFF', '#000000');
    const ratio2 = contrastRatio('#000000', '#FFFFFF');
    expect(ratio1).toBe(ratio2);
  });

  it('should handle lowercase hex values', () => {
    const result = contrastRatio('#ffffff', '#000000');
    expect(result).toBe('21.00');
  }); 
});
