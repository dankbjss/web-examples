import { describe, expect, test } from 'bun:test';
import { convertUnit } from './convert-unit';
import type { UnitShort } from './model';

describe('convertUnit', () => {
  test('should return an error string if the from and to units are the same', () => {
    const testCases = [
      'm',
      'km',
      'ft',
      'yd',
      'mi',
      'cm',
      'mm',
      'in',
      'f',
      'c',
      'c (fan)',
      'k',
      'kg',
      'g',
      'lb',
      'oz',
      'l',
      'ml',
      'gal',
      'pt',
    ];

    testCases.forEach((unit) => {
      // Arrange
      const value = 100;
      const expectedErrorString = `Cannot convert from ${unit} to ${unit}`;

      // Act
      const result = convertUnit(value, unit, unit);

      // Assert
      expect(result).toBe(expectedErrorString);
    });
  });

  test('should return an error string if the from or to unit is not supported', () => {
    const testCases = [
      { value: 100, fromUnit: 'm', toUnit: 'xyz' },
      { value: 50, fromUnit: 'abc', toUnit: 'km' },
      { value: 75, fromUnit: 'foo', toUnit: 'bar' },
    ];

    testCases.forEach(({ value, fromUnit, toUnit }) => {
      // Arrange
      const expectedErrorString = `Cannot convert from ${fromUnit} to ${toUnit}`;

      // Act
      const result = convertUnit(value, fromUnit as UnitShort, toUnit as UnitShort);

      // Assert
      expect(result).toBe(expectedErrorString);
    });
  });

  test('should return an error string if the units an incompatible', () => {
    const testCases = [
      { value: 100, fromUnit: 'm', toUnit: 'kg' },
      { value: 50, fromUnit: 'c', toUnit: 'l' },
      { value: 75, fromUnit: 'g', toUnit: 'ft' },
    ];

    testCases.forEach(({ value, fromUnit, toUnit }) => {
      // Arrange
      const expectedErrorString = `Cannot convert from ${fromUnit} to ${toUnit}`;

      // Act
      const result = convertUnit(value, fromUnit as UnitShort, toUnit as UnitShort);

      // Assert
      expect(result).toBe(expectedErrorString);
    });
  });

  test('should correctly convert between supported units', () => {
    const testCases = [
      { value: 1000, fromUnit: 'g', toUnit: 'kg', expected: 1 },
      { value: 5, fromUnit: 'kg', toUnit: 'g', expected: 5000 },
      { value: 16, fromUnit: 'oz', toUnit: 'lb', expected: 1 },
      { value: 2.20462, fromUnit: 'lb', toUnit: 'kg', expected: 1 },
      { value: 100, fromUnit: 'cm', toUnit: 'm', expected: 1 },
      { value: 1, fromUnit: 'km', toUnit: 'm', expected: 1000 },
      { value: 39.3701, fromUnit: 'in', toUnit: 'm', expected: 1 },
      { value: 3.28084, fromUnit: 'ft', toUnit: 'm', expected: 1 },
      { value: 1.09361, fromUnit: 'yd', toUnit: 'm', expected: 1 },
      { value: 0.000621371, fromUnit: 'mi', toUnit: 'm', expected: 1 },
      { value: 1000, fromUnit: 'ml', toUnit: 'l', expected: 1 },
      { value: 3.78541, fromUnit: 'l', toUnit: 'gal', expected: 1 },
      { value: 8, fromUnit: 'pt', toUnit: 'l', expected: 4.54609 },
      { value: 32, fromUnit: 'f', toUnit: 'c', expected: 0 },
      { value: 100, fromUnit: 'c', toUnit: 'f', expected: 212 },
      { value: 180, fromUnit: 'c (fan)', toUnit: 'f', expected: 392 },
    ];

    testCases.forEach(({ value, fromUnit, toUnit, expected }) => {
      // Act
      const result = convertUnit(value, fromUnit as UnitShort, toUnit as UnitShort);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
