import {describe, expect, test} from 'bun:test'
import { toScientificNotation } from './scientific-notation';

describe("toScientificNotation", () => {
  test("should convert numbers to exponential HTML format without decimals", () => {
    // Arrange
    const input = 345600000000;

    // Act
    const result = toScientificNotation(input);

    // Assert
    expect(result).toBe("3 &times; 10<sup>11</sup>");
  });

  test("should convert numbers to exponential HTML format to specified precision", () => {
    // Arrange
    const input = 345600000000;
    const precision = 4;

    // Act
    const result = toScientificNotation(input, precision);

    // Assert
    expect(result).toBe("3.4560 &times; 10<sup>11</sup>");
  });

  test("should handle negative exponents", () => {
    // Arrange
    const input = 0.00003456;

    // Act
    const result = toScientificNotation(input);

    // Assert
    expect(result).toBe("3 &times; 10<sup>-5</sup>");
  });

  test("should fallback to the original string if parsing fails", () => {
    // Arrange
    const input = "not a number";

    // Act
    const result = toScientificNotation(input as unknown as number);

    // Assert
    expect(result).toBe("not a number");
  });
});
