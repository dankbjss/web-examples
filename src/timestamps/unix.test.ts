import { describe, expect, it } from "bun:test";

import { convertUnixTimestamp } from "./unix";

describe('convertUnixTimestamp', () => {
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
      const result = convertUnixTimestamp(invalidTimestamp as number, conversionOption);

      // Assert
      expect(result).toBe('Please enter a valid timestamp');
    });
  });

  it('should convert a valid UNIX timestamp to ISO string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400;
    const conversionOption = 'iso';
    const expectedIsoString = '2021-10-01T00:00:00.000Z';

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedIsoString);
  });

  it('should convert a valid UNIX timestamp to UTC string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400;
    const conversionOption = 'utc';
    const expectedUtcString = 'Fri, 01 Oct 2021 00:00:00 GMT';

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedUtcString);
  });

  it('should convert a valid UNIX timestamp to Locale string', () => {
    // Arrange
    const ecmaTimestamp = 1633046400;
    const conversionOption = 'locale';
    const expectedLocaleString = '10/1/2021, 12:00:00 AM'; // Without a browser the default local is en-US

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedLocaleString);
  });

  it('should convert a valid UNIX timestamp to milliseconds', () => {
    // Arrange
    const ecmaTimestamp = 163304640;
    const conversionOption = 'milliseconds';
    const expectedSeconds = 163304640000;

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedSeconds);
  });

  it('should convert a valid UNIX timestamp to hours', () => {
    // Arrange
    const ecmaTimestamp = 7200; // 2 hours in seconds
    const conversionOption = 'hours';
    const expectedHours = 2;

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedHours);
  });

  it('should convert a valid UNIX timestamp to days', () => {
    // Arrange
    const ecmaTimestamp = 172800; // 2 days in seconds
    const conversionOption = 'days';
    const expectedDays = 2;

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe(expectedDays);
  });

  it('should return "Invalid conversion option" for an invalid conversion option', () => {
    // Arrange
    const ecmaTimestamp = 1633046400;
    const conversionOption = 'invalid-option' as any;

    // Act
    const result = convertUnixTimestamp(ecmaTimestamp, conversionOption);

    // Assert
    expect(result).toBe('Invalid conversion option');
  });
});
