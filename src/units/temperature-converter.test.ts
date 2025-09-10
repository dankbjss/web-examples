import { describe, expect, test } from 'bun:test';
import { TemperatureConverter } from "./temperatre-converter";

describe('TemperatureConverter', () => {
  describe('celsiusToFahrenheit', () => {
    const testCases = [
      [0, 32],
      [10, 50],
      [15, 59],
      [20, 68],
      [30, 86]
    ];
    testCases.forEach(([c, f]) => {
      test(`should convert ${c} C to ${f} F`, () => {
        // Arrange & Act
        const result = TemperatureConverter.celsiusToFahrenheit(c);

        // Assert
        expect(result).toEqual(f);
      });
    });
  });

  describe('fahrenheitToCelsius', () => {
    const testCases = [
      [32, 0],
      [50, 10],
      [59, 15],
      [68, 20],
      [86, 30]
    ];
    testCases.forEach(([f, c]) => {
      test(`should convert ${f} F to ${c} C`, () => {
        // Arrange & Act
        const result = TemperatureConverter.fahrenheitToCelsius(f);

        // Assert
        expect(result).toEqual(c);
      });
    });
  });

  describe('celsiusFanOvenToFahrenheit', () => {
    const testCases = [
      [0, 32],
      [10, 52],
      [15, 62],
      [20, 72],
      [30, 92]
    ];
    testCases.forEach(([c, f]) => {
      test(`should convert ${c} C (fan oven) to ${f} F`, () => {
        // Arrange & Act
        const result = TemperatureConverter.celsiusFanOvenToFahrenheit(c);

        // Assert
        expect(result).toEqual(f);
      });
    });
  });

  describe('fahrenheitToCelsiusFanOven', () => {
    const testCases = [
      [32, 0],
      [50, 9],
      [59, 13.5],
      [68, 18],
      [86, 27]
    ];
    testCases.forEach(([f, c]) => {
      test(`should convert ${f} F to ${c} C (fan oven)`, () => {
        // Arrange & Act
        const result = TemperatureConverter.fahrenheitToCelsiusFanOven(f);

        // Assert
        expect(result).toEqual(c);
      });
    });
  });

  describe('celsiusToCelsiusFanOven', () => {
    const testCases = [
      [0, 0],
      [10, 9],
      [15, 13.5],
      [20, 18],
      [30, 27]
    ];
    testCases.forEach(([c, cf]) => {
      test(`should convert ${c} C to ${cf} C (fan oven)`, () => {
        // Arrange & Act
        const result = TemperatureConverter.celsiusToCelsiusFanOven(c);

        // Assert
        expect(result).toEqual(cf);
      });
    });
  });

  describe('celsiusFanOvenToCelsius', () => {
    const testCases = [
      [0, 0],
      [9, 10],
      [13.5, 15],
      [18, 20],
      [27, 30]
    ];
    testCases.forEach(([cf, c]) => {
      test(`should convert ${cf} C (fan oven) to ${c} C`, () => {
        // Arrange & Act
        const result = TemperatureConverter.celsiusFanOvenToCelsius(cf);

        // Assert
        expect(result).toEqual(c);
      });
    });
  });
});
