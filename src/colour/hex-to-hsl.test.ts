import { describe, expect, it } from 'bun:test';
import { hexToHsl } from './hex-to-hsl';

describe('hexToHsl', () => {
  const testCases = [
    { hex: '#FFFFFF', expected: 'hsl(0, 0%, 100%)' },
    { hex: '#000000', expected: 'hsl(0, 0%, 0%)' },
    { hex: '#FF5733', expected: 'hsl(11, 100%, 60%)' },
    { hex: '#33FF57', expected: 'hsl(131, 100%, 60%)' },
    { hex: '#3357FF', expected: 'hsl(229, 100%, 60%)' },
    { hex: '#123456', expected: 'hsl(210, 65%, 20%)' },
    { hex: '#ABCDEF', expected: 'hsl(210, 68%, 80%)' },
  ];

  testCases.forEach(({ hex, expected }) => {
    it(`should convert ${hex} to ${expected}`, () => {
      expect(hexToHsl(hex)).toBe(expected);
    });
  });
});
