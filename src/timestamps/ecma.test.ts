import { describe, expect, it } from "bun:test";
import { convertEcmaTimestamp } from "./ecma";

describe('convertEcmaTimestamp', () => {
  const ivalidTimestamps = [
    0,
    null,
    undefined,
    'blorgen',
  ];
  ivalidTimestamps.forEach((invalidTimestamp) => {
    it('should return "Please enter a valid timestamp" for invalid input', () => {
      // Arrange
      const conversionOption = 'iso';

      // Act
      const result = convertEcmaTimestamp(invalidTimestamp as number, conversionOption);

      // Assert
      expect(result).toBe('Please enter a valid timestamp');
    });
  });

  it('should convert a valid ECMA timestamp to ISO string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400000;
    const conversionOption = 'iso';
    const expectedIsoString = '2021-10-01T00:00:00.000Z';

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedIsoString);
  });

  it('should convert a valid ECMA timestamp to UTC string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400000;
    const conversionOption = 'utc';
    const expectedUtcString = 'Fri, 01 Oct 2021 00:00:00 GMT';

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedUtcString);
  });

  it('should convert a valid ECMA timestamp to Locale string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400000;
    const conversionOption = 'locale';
    const expectedLocaleString = '10/1/2021, 12:00:00 AM'; // Without a browser the default local is en-US

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedLocaleString);
  });

  it('should convert a valid ECMA timestamp to seconds', () => {
    // Arrange
    const ecmaTimestamp = 1633046400000;
    const conversionOption = 'seconds';
    const expectedSeconds = 1633046400;

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedSeconds);
  });

  it('should convert a valid ECMA timestamp to hours', () => {
    // Arrange
    const ecmaTimestamp = 7200000; // 2 hours in milliseconds
    const conversionOption = 'hours';
    const expectedHours = 2;

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedHours);
  });

  it('should convert a valid ECMA timestamp to days', () => {
    // Arrange
    const ecmaTimestamp = 172800000; // 2 days in milliseconds
    const conversionOption = 'days';
    const expectedDays = 2;

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedDays);
  });

  it('should return "Invalid conversion option" for an invalid conversion option', () => {
    // Arrange
    const ecmaTimestamp = 1633046400000;
    const conversionOption = 'invalid-option' as any;

    // Act
    const result = convertEcmaTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe('Invalid conversion option');
  });
});
