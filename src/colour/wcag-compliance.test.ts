import { describe, expect, it } from 'bun:test';
import { checkWcagCompliance } from './wcag-compliance';

describe('checkWcagCompliance', () => {
  const testCases = [
    {
      ratio: '21.00',
      expected: { aaNormal: true, aaLarge: true, aaaNormal: true, aaaLarge: true },
      description: 'Maximum contrast (white on black)',
    },
    {
      ratio: '1.00',
      expected: { aaNormal: false, aaLarge: false, aaaNormal: false, aaaLarge: false },
      description: 'Minimum contrast (same color)',
    },
    {
      ratio: '7.00',
      expected: { aaNormal: true, aaLarge: true, aaaNormal: true, aaaLarge: true },
      description: 'Exactly AAA normal threshold',
    },
    {
      ratio: '4.50',
      expected: { aaNormal: true, aaLarge: true, aaaNormal: false, aaaLarge: true },
      description: 'Exactly AA normal and AAA large threshold',
    },
    {
      ratio: '4.49',
      expected: { aaNormal: false, aaLarge: true, aaaNormal: false, aaaLarge: false },
      description: 'Just below AA normal threshold',
    },
    {
      ratio: '3.00',
      expected: { aaNormal: false, aaLarge: true, aaaNormal: false, aaaLarge: false },
      description: 'Exactly AA large threshold',
    },
    {
      ratio: '2.99',
      expected: { aaNormal: false, aaLarge: false, aaaNormal: false, aaaLarge: false },
      description: 'Just below AA large threshold',
    },
  ];

  testCases.forEach(({ ratio, expected, description }) => {
    it(`should correctly evaluate ${description}`, () => {
      const result = checkWcagCompliance(ratio);
      expect(result).toEqual(expected);
    });
  });
});
