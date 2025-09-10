import { describe, expect, it } from 'bun:test';
import { hexToRgb } from './hex-to-rgb';

describe('hexToRgb', () => {
  const testCases = [
    { hex: '#FFFFFF', expected: 'rgb(255, 255, 255)' },
    { hex: '#000000', expected: 'rgb(0, 0, 0)' },
    { hex: '#FF5733', expected: 'rgb(255, 87, 51)' },
    { hex: '#33FF57', expected: 'rgb(51, 255, 87)' },
    { hex: '#3357FF', expected: 'rgb(51, 87, 255)' },
    { hex: '#123456', expected: 'rgb(18, 52, 86)' },
    { hex: '#ABCDEF', expected: 'rgb(171, 205, 239)' },
  ];

  testCases.forEach(({ hex, expected }) => {
    it(`should convert ${hex} to ${expected}`, () => {
      expect(hexToRgb(hex)).toBe(expected);
    });
  });
});
