import { describe, expect, it } from "bun:test";
import { convertIsoString } from "./iso-string";

describe('convertIsoString', () => {
  const invalidIsoStringPatterns = [
    null,
    undefined,
    '',
    'not-an-iso-string',
    '2021-12-01 23:59:59Z', // Missing 'T'
  ];
  invalidIsoStringPatterns.forEach((invalidIsoString) => {
    it(`should return "Please enter a valid ISO string" for input that doesn't match the regex pattern "${invalidIsoString}"`, () => {
      // Arrange
      const conversionType = 'unix';

      // Act
      const result = convertIsoString(invalidIsoString as string, conversionType);

      // Assert
      expect(result).toBe('Please enter a valid ISO string');
    });
  });

    const invalidIsoStrings = [
    '2021-13-01T00:00:00Z', // Invalid month
    '2021-00-01T00:00:00Z', // Invalid month
    '2021-12-32T00:00:00Z', // Invalid day
    '2021-12-01T24:00:00Z', // Invalid hour
    '2021-12-01T00:60:00Z', // Invalid minute
    '2021-12-01T00:00:60Z', // Invalid second
  ];
  invalidIsoStringPatterns.forEach((invalidIsoString) => {
    it(`should return "Invalid ISO String" for input that has invalid properties "${invalidIsoString}"`, () => {
      // Arrange
      const conversionType = 'unix';

      // Act
      const result = convertIsoString(invalidIsoString as string, conversionType);

      // Assert
      expect(result).toBe('Please enter a valid ISO string');
    });
  });

  it('should convert a valid ISO string to UNIX timestamp', () => {
    // Arrange
    const isoString = '2021-10-01T00:00:00Z';
    const conversionType = 'unix';
    const expectedUnixTimestamp = 1633046400;

    // Act
    const result = convertIsoString(isoString, conversionType);

    // Assert
    expect(result).toBe(expectedUnixTimestamp);
  });

  it('should convert a valid ISO string to ECMA timestamp', () => {
    // Arrange
    const isoString = '2021-10-01T00:00:00Z';
    const conversionType = 'ecma';
    const expectedEcmaTimestamp = 1633046400000;

    // Act
    const result = convertIsoString(isoString, conversionType);

    // Assert
    expect(result).toBe(expectedEcmaTimestamp);
  });

  it('should return "Invalid conversion type" for an unsupported conversion type', () => {
    // Arrange
    const isoString = '2021-10-01T00:00:00Z';
    const conversionType = 'invalid-type' as 'unix';

    // Act
    const result = convertIsoString(isoString, conversionType);

    // Assert
    expect(result).toBe('Invalid conversion type');
  });
});
