import { describe, expect, test } from 'bun:test';
import { VolumeConverter } from './volume-converter';

describe('VolumeConverter', () => {
  describe('litresToPints', () => {
    const testCases = [
      [1, 1.75975],
      [10, 17.5975],
      [20, 35.195],
      [30, 52.7925]
    ];
    testCases.forEach(([litres, pints]) => {
      test(`should convert ${litres} l to ${pints} pt`, () => {
        // Arrange & Act
        const result = VolumeConverter.litresToPints(litres);

        // Assert
        expect(result).toEqual(pints);
      });
    });
  });

  describe('pintsToLitres', () => {
    const testCases = [
      [1, 0.56826],
      [10, 5.68261],
      [20, 11.36522],
      [30, 17.04783]
    ];
    testCases.forEach(([pints, litres]) => {
      test(`should convert ${pints} pt to ${litres} l`, () => {
        // Arrange & Act
        const result = VolumeConverter.pintsToLitres(pints);

        // Assert
        expect(result).toEqual(litres);
      });
    });
  });

  describe('litresToFluidOunces', () => {
    const testCases = [
      [1, 33.814],
      [10, 338.14],
      [20, 676.28],
      [30, 1014.42]
    ];
    testCases.forEach(([litres, fluidOunces]) => {
      test(`should convert ${litres} l to ${fluidOunces} fl oz`, () => {
        // Arrange & Act
        const result = VolumeConverter.litresToFluidOunces(litres);

        // Assert
        expect(result).toEqual(fluidOunces);
      });
    });
  });

  describe('fluidOuncesToLitres', () => {
    const testCases = [
      [1, 0.02957],
      [10, 0.29574],
      [20, 0.59147],
      [30, 0.88721]
    ];
    testCases.forEach(([fluidOunces, litres]) => {
      test(`should convert ${fluidOunces} fl oz to ${litres} l`, () => {
        // Arrange & Act
        const result = VolumeConverter.fluidOuncesToLitres(fluidOunces);

        // Assert
        expect(result).toEqual(litres);
      });
    });
  });

  describe('gallonsToPints', () => {
    const testCases = [
      [1, 8],
      [2, 16],
      [3, 24],
      [4, 32]
    ];
    testCases.forEach(([gallons, pints]) => {
      test(`should convert ${gallons} gal to ${pints} pt`, () => {
        // Arrange & Act
        const result = VolumeConverter.gallonsToPints(gallons);

        // Assert
        expect(result).toEqual(pints);
      });
    });
  });

  describe('pintsToGallons', () => {
    const testCases = [
      [1, 0.125],
      [2, 0.25],
      [3, 0.375],
      [4, 0.5]
    ];
    testCases.forEach(([pints, gallons]) => {
      test(`should convert ${pints} pt to ${gallons} gal`, () => {
        // Arrange & Act
        const result = VolumeConverter.pintsToGallons(pints);

        // Assert
        expect(result).toEqual(gallons);
      });
    });
  });

  describe('gallonsToMillilitres', () => {
    const testCases = [
      [1, 3785.41],
      [2, 7570.82],
      [3, 11356.23],
      [4, 15141.64]
    ];
    testCases.forEach(([gallons, millilitres]) => {
      test(`should convert ${gallons} gal to ${millilitres} ml`, () => {
        // Arrange & Act
        const result = VolumeConverter.gallonsToMillilitres(gallons);

        // Assert
        expect(result).toEqual(millilitres);
      });
    });
  });

  describe('millilitresToGallons', () => {
    const testCases = [
      [1000, 0.26417],
      [2000, 0.52834],
      [3000, 0.79252],
      [4000, 1.05669]
    ];
    testCases.forEach(([millilitres, gallons]) => {
      test(`should convert ${millilitres} ml to ${gallons} gal`, () => {
        // Arrange & Act
        const result = VolumeConverter.millilitresToGallons(millilitres);

        // Assert
        expect(result).toEqual(gallons);
      });
    });
  });

  describe('pintsToFluidOunces', () => {
    const testCases = [
      [1, 20],
      [2, 40],
      [3, 60],
      [4, 80]
    ];
    testCases.forEach(([pints, fluidOunces]) => {
      test(`should convert ${pints} pt to ${fluidOunces} fl oz`, () => {
        // Arrange & Act
        const result = VolumeConverter.pintsToFluidOunces(pints);

        // Assert
        expect(result).toEqual(fluidOunces);
      });
    });
  });

  describe('fluidOuncesToPints', () => {
    const testCases = [
      [1, 0.05],
      [2, 0.1],
      [3, 0.15],
      [4, 0.2]
    ];
    testCases.forEach(([fluidOunces, pints]) => {
      test(`should convert ${fluidOunces} fl oz to ${pints} pt`, () => {
        // Arrange & Act
        const result = VolumeConverter.fluidOuncesToPints(fluidOunces);

        // Assert
        expect(result).toEqual(pints);
      });
    });
  });

  describe('millilitresToFluidOunces', () => {
    const testCases = [
      [1, .03381],
      [10, .33814],
      [20, .67628],
      [30, 1.01442]
    ];
		testCases.forEach(([millilitres, fluidOunces]) => {
      test(`should convert ${millilitres} ml to ${fluidOunces} fl oz`, () => {
        // Arrange & Act
        const result = VolumeConverter.millilitresToFluidOunces(millilitres);

        // Assert
        expect(result).toEqual(fluidOunces);
      });
    });
  });

  describe('fluidOuncesToMillilitres', () => {
    const testCases = [
      [1, 29.57355],
      [10, 295.73549],
      [20, 591.47099],
      [30, 887.20648]
    ];
    testCases.forEach(([fluidOunces, millilitres]) => {
      test(`should convert ${fluidOunces} fl oz to ${millilitres} ml`, () => {
        // Arrange & Act
        const result = VolumeConverter.fluidOuncesToMillilitres(fluidOunces);

        // Assert
        expect(result).toEqual(millilitres);
      });
    });
  });

  describe('litresToGallons', () => {
    const testCases = [
      [1, .26417],
      [10, 2.64172],
      [20, 5.28344],
      [30, 7.92516]
    ];
    testCases.forEach(([litres, gallons]) => {
      test(`should convert ${litres} l to ${gallons} gal`, () => {
        // Arrange & Act
        const result = VolumeConverter.litresToGallons(litres);

        // Assert
        expect(result).toEqual(gallons);
      });
    });
  });

  describe('gallonsToLitres', () => {
    const testCases = [
      [1, 3.78541],
      [10, 37.85413],
      [20, 75.70825],
      [30, 113.56238]
    ];
    testCases.forEach(([gallons, litres]) => {
      test(`should convert ${gallons} gal to ${litres} l`, () => {
        // Arrange & Act
        const result = VolumeConverter.gallonsToLitres(gallons);

        // Assert
        expect(result).toEqual(litres);
      });
    });
  });

  describe('millilitresToPints', () => {
    const testCases = [
      [10, .0176],
      [20, .0352],
      [30, .0528],
      [100, .176],
      [10000, 17.6],
    ];
    testCases.forEach(([millilitres, pints]) => {
      test(`should convert ${millilitres} ml to ${pints} pt`, () => {
        // Arrange & Act
        const result = VolumeConverter.millilitresToPints(millilitres);

        // Assert
        expect(result).toEqual(pints);
      });
    });
  });

  describe('pintsToMillilitres', () => {
    const testCases = [
      [1, 568.18182],
      [2.5, 1420.45455],
      [10, 5681.81818],
      [20, 11363.63636],
    ];
    testCases.forEach(([pints, millilitres]) => {
      test(`should convert ${pints} pt to ${millilitres} ml`, () => {
        // Arrange & Act
        const result = VolumeConverter.pintsToMillilitres(pints);

        // Assert
        expect(result).toEqual(millilitres);
      });
    });
  });
});
