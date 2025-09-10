import { MassConverter } from './mass-converter';
import { describe, expect, test } from 'bun:test';

describe('MassConverter', () => {
  describe('kilogramsToPounds', () => {
    const testCases = [
      [1, 2.20462],
      [10, 22.0462],
      [20, 44.0924],
      [30, 66.1386]
    ];
    testCases.forEach(([kilos, pounds]) => {
      test(`should convert ${kilos} kg to ${pounds} lbs`, () => {
        // Arrange & Act
        const result = MassConverter.kilogramsToPounds(kilos);

        // Assert
        expect(result).toEqual(pounds);
      });
    });
  });

  describe('poundsToKilograms', () => {
    const testCases = [
      [1, 0.45359],
      [10, 4.53593],
      [20, 9.07186],
      [30, 13.60779]
    ];
    testCases.forEach(([lbs, kg]) => {
      test(`should convert ${lbs} lbs to ${kg} kg`, () => {
        // Arrange & Act
        const result = MassConverter.poundsToKilograms(lbs);

        // Assert
        expect(result).toEqual(kg);
      });
    });
  });

  describe('gramsToKilograms', () => {
    const testCases = [
      [1, 0.001],
      [10, 0.01],
      [20, 0.02],
      [30, 0.03]
    ];
    testCases.forEach(([g, kg]) => {
      test(`should convert ${g} g to ${kg} kg`, () => {
        // Arrange & Act
        const result = MassConverter.gramsToKilograms(g);

        // Assert
        expect(result).toEqual(kg);
      });
    });
  });

  describe('kilogramsToGrams', () => {
    const testCases = [
      [1, 1000],
      [10, 10000],
      [20, 20000],
      [30, 30000]
    ];
    testCases.forEach(([kilos, g]) => {
      test(`should convert ${kilos} kg to ${g} g`, () => {
        // Arrange & Act
        const result = MassConverter.kilogramsToGrams(kilos);

        // Assert
        expect(result).toEqual(g);
      });
    });
  });

  describe('gramsToOunces', () => {
    const testCases = [
      [1, 0.03527],
      [10, 0.35274],
      [20, 0.70548],
      [30, 1.05822]
    ];
    testCases.forEach(([g, oz]) => {
      test(`should convert ${g} g to ${oz} oz`, () => {
        // Arrange & Act
        const result = MassConverter.gramsToOunces(g);

        // Assert
        expect(result).toEqual(oz);
      });
    });
  });

  describe('ouncesToGrams', () => {
    const testCases = [
      [1, 28.34949],
      [10, 283.49493],
      [20, 566.98985],
      [30, 850.48478]
    ];
    testCases.forEach(([oz, g]) => {
      test(`should convert ${oz} oz to ${g} g`, () => {
        // Arrange & Act
        const result = MassConverter.ouncesToGrams(oz);

        // Assert
        expect(result).toEqual(g);
      });
    });
  });

  describe('ouncesToPounds', () => {
    const testCases = [
      [1, 0.0625],
      [10, 0.625],
      [20, 1.25],
      [30, 1.875]
    ];
    testCases.forEach(([oz, lbs]) => {
      test(`should convert ${oz} oz to ${lbs} lbs`, () => {
        // Arrange & Act
        const result = MassConverter.ouncesToPounds(oz);

        // Assert
        expect(result).toEqual(lbs);
      });
    });
  });

  describe('poundsToOunces', () => {
    const testCases = [
      [1, 16],
      [10, 160],
      [20, 320],
      [30, 480]
    ];
    testCases.forEach(([lbs, oz]) => {
      test(`should convert ${lbs} lbs to ${oz} oz`, () => {
        // Arrange & Act
        const result = MassConverter.poundsToOunces(lbs);

        // Assert
        expect(result).toEqual(oz);
      });
    });
  });

  describe('gramsToPounds', () => {
    const testCases = [
      [1, 0.0022],
      [10, 0.02205],
      [20, 0.04409],
      [30, 0.06614]
    ];
    testCases.forEach(([g, lbs]) => {
      test(`should convert ${g} g to ${lbs} lbs`, () => {
        // Arrange & Act
        const result = MassConverter.gramsToPounds(g);

        // Assert
        expect(result).toEqual(lbs);
      });
    });
  });

  describe('poundsToGrams', () => {
    const testCases = [
      [1, 453.59291],
      [10, 4535.92909],
      [20, 9071.85819],
      [30, 13607.78728]
    ];
    testCases.forEach(([lbs, g]) => {
      test(`should convert ${lbs} lbs to ${g} g`, () => {
        // Arrange & Act
        const result = MassConverter.poundsToGrams(lbs);

        // Assert
        expect(result).toEqual(g);
      });
    });
  });

  describe('kilogramsToOunces', () => {
    const testCases = [
      [1, 35.274],
      [10, 352.74],
      [20, 705.48],
      [30, 1058.22]
    ];
    testCases.forEach(([kilos, oz]) => {
      test(`should convert ${kilos} kg to ${oz} oz`, () => {
        // Arrange & Act
        const result = MassConverter.kilogramsToOunces(kilos);

        // Assert
        expect(result).toEqual(oz);
      });
    });
  });

  describe('ouncesToKilograms', () => {
    const testCases = [
      [1, 0.02835],
      [10, 0.28349],
      [20, 0.56699],
      [30, 0.85048]
    ];
    testCases.forEach(([oz, kg]) => {
      test(`should convert ${oz} oz to ${kg} kg`, () => {
        // Arrange & Act
        const result = MassConverter.ouncesToKilograms(oz);

        // Assert
        expect(result).toEqual(kg);
      });
    });
  });
});
