import { describe, expect, test } from 'bun:test';
import { DistanceConverter } from './distance-converter';

describe('DistanceConverter', () => {
  describe('metresToYards', () => {
    const testCases = [
      [1, 1.09361],
      [10, 10.9361],
      [20, 21.8722],
      [30, 32.8083]
    ];
    testCases.forEach(([metres, yards]) => {
      test(`should convert ${metres} metres to ${yards} yards`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToYards(metres);

        // Assert
        expect(result).toEqual(yards);
      });
    });
  });

  describe('metresToFeet', () => {
    const testCases = [
      [1, 3.28084],
      [10, 32.8084],
      [20, 65.6168],
      [30, 98.4252]
    ];
    testCases.forEach(([metres, feet]) => {
      test(`should convert ${metres} metres to ${feet} feet`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToFeet(metres);

        // Assert
        expect(result).toEqual(feet);
      });
    });
  });

  describe('feetToMetres', () => {
    const testCases = [
      [1, 0.3048],
      [10, 3.048],
      [20, 6.096],
      [30, 9.144]
    ];
    testCases.forEach(([feet, metres]) => {
      test(`should convert ${feet} feet to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.feetToMetres(feet);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('yardsToMetres', () => {
    const testCases = [
      [1, 0.9144],
      [10, 9.14403],
      [20, 18.28806],
      [30, 27.43208]
    ];
    testCases.forEach(([yards, metres]) => {
      test(`should convert ${yards} yards to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.yardsToMetres(yards);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('kilometresToMiles', () => {
    const testCases = [
      [1, 0.62137],
      [10, 6.21371],
      [20, 12.42742],
      [30, 18.64113]
    ];
    testCases.forEach(([km, miles]) => {
      test(`should convert ${km} km to ${miles} miles`, () => {
        // Arrange & Act
        const result = DistanceConverter.kilometresToMiles(km);

        // Assert
        expect(result).toEqual(miles);
      });
    });
  });

  describe('milesToKilometres', () => {
    const testCases = [
      [1, 1.60934],
      [10, 16.09344],
      [20, 32.18689],
      [30, 48.28033]
    ];
    testCases.forEach(([miles, km]) => {
      test(`should convert ${miles} miles to ${km} km`, () => {
        // Arrange & Act
        const result = DistanceConverter.milesToKilometres(miles);

        // Assert
        expect(result).toEqual(km);
      });
    });
  });

  describe('centimetresToInches', () => {
    const testCases = [
      [1, 0.3937],
      [10, 3.93701],
      [20, 7.87402],
      [30, 11.81103]
    ];
    testCases.forEach(([cm, inches]) => {
      test(`should convert ${cm} cm to ${inches} inches`, () => {
        // Arrange & Act
        const result = DistanceConverter.centimetresToInches(cm);

        // Assert
        expect(result).toEqual(inches);
      });
    });
  });

  describe('centimetresToFeet', () => {
    const testCases = [
      [1, 0.03281],
      [10, 0.32808],
      [20, 0.65617],
      [30, 0.98425]
    ];
    testCases.forEach(([cm, feet]) => {
      test(`should convert ${cm} cm to ${feet} feet`, () => {
        // Arrange & Act
        const result = DistanceConverter.centimetresToFeet(cm);

        // Assert
        expect(result).toEqual(feet);
      });
    });
  });

  describe('feetToCentimetres', () => {
    const testCases = [
      [1, 30.48],
      [10, 304.79999],
      [20, 609.59998],
      [30, 914.39997]
    ];
    testCases.forEach(([feet, cm]) => {
      test(`should convert ${feet} feet to ${cm} cm`, () => {
        // Arrange & Act
        const result = DistanceConverter.feetToCentimetres(feet);

        // Assert
        expect(result).toEqual(cm);
      });
    });
  });

  describe('inchesToCentimetres', () => {
    const testCases = [
      [1, 2.54],
      [10, 25.39999],
      [20, 50.79997],
      [30, 76.19996]
    ];
    testCases.forEach(([inches, cm]) => {
      test(`should convert ${inches} inches to ${cm} cm`, () => {
        // Arrange & Act
        const result = DistanceConverter.inchesToCentimetres(inches);

        // Assert
        expect(result).toEqual(cm);
      });
    });
  });

  describe('feetToInches', () => {
    const testCases = [
      [1, 12],
      [10, 120],
      [20, 240],
      [30, 360]
    ];
    testCases.forEach(([feet, inches]) => {
      test(`should convert ${feet} feet to ${inches} inches`, () => {
        // Arrange & Act
        const result = DistanceConverter.feetToInches(feet);

        // Assert
        expect(result).toEqual(inches);
      });
    });
  });

  describe('inchesToFeet', () => {
    const testCases = [
      [1, 0.08333],
      [10, 0.83333],
      [20, 1.66667],
      [30, 2.5]
    ];
    testCases.forEach(([inches, feet]) => {
      test(`should convert ${inches} inches to ${feet} feet`, () => {
        // Arrange & Act
        const result = DistanceConverter.inchesToFeet(inches);

        // Assert
        expect(result).toEqual(feet);
      });
    });
  });

  describe('centimetresToMetres', () => {
    const testCases = [
      [1, 0.01],
      [10, 0.1],
      [20, 0.2],
      [30, 0.3]
    ];
    testCases.forEach(([cm, metres]) => {
      test(`should convert ${cm} cm to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.centimetresToMetres(cm);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('metresToCentimetres', () => {
    const testCases = [
      [1, 100],
      [10, 1000],
      [20, 2000],
      [30, 3000]
    ];
    testCases.forEach(([metres, cm]) => {
      test(`should convert ${metres} metres to ${cm} cm`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToCentimetres(metres);

        // Assert
        expect(result).toEqual(cm);
      });
    });
  });

  describe('kilometresToMetres', () => {
    const testCases = [
      [1, 1000],
      [10, 10000],
      [20, 20000],
      [30, 30000]
    ];
    testCases.forEach(([km, metres]) => {
      test(`should convert ${km} km to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.kilometresToMetres(km);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('metresToKilometres', () => {
    const testCases = [
      [1, 0.001],
      [10, 0.01],
      [20, 0.02],
      [30, 0.03]
    ];
    testCases.forEach(([metres, km]) => {
      test(`should convert ${metres} metres to ${km} km`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToKilometres(metres);

        // Assert
        expect(result).toEqual(km);
      });
    });
  });

  describe('kilometresToCentimetres', () => {
    const testCases = [
      [1, 100000],
      [10, 1000000],
      [20, 2000000],
      [30, 3000000]
    ];
    testCases.forEach(([km, cm]) => {
      test(`should convert ${km} km to ${cm} cm`, () => {
        // Arrange & Act
        const result = DistanceConverter.kilometresToCentimetres(km);

        // Assert
        expect(result).toEqual(cm);
      });
    });
  });

  describe('centimetresToKilometres', () => {
    const testCases = [
      [1, 0.00001],
      [10, 0.0001],
      [20, 0.0002],
      [30, 0.0003]
    ];
    testCases.forEach(([cm, km]) => {
      test(`should convert ${cm} cm to ${km} km`, () => {
        // Arrange & Act
        const result = DistanceConverter.centimetresToKilometres(cm);

        // Assert
        expect(result).toEqual(km);
      });
    });
  });

  describe('metresToInches', () => {
    const testCases = [
      [1, 39.3701],
      [10, 393.701],
      [20, 787.402],
      [30, 1181.103]
    ];
    testCases.forEach(([metres, inches]) => {
      test(`should convert ${metres} metres to ${inches} inches`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToInches(metres);

        // Assert
        expect(result).toEqual(inches);
      });
    });
  });

  describe('inchesToMetres', () => {
    const testCases = [
      [1, 0.0254],
      [10, 0.254],
      [20, 0.508],
      [30, 0.762]
    ];
    testCases.forEach(([inches, metres]) => {
      test(`should convert ${inches} inches to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.inchesToMetres(inches);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('kilometresToYards', () => {
    const testCases = [
      [1, 1093.61],
      [10, 10936.1],
      [20, 21872.2],
      [30, 32808.3]
    ];
    testCases.forEach(([km, yards]) => {
      test(`should convert ${km} km to ${yards} yards`, () => {
        // Arrange & Act
        const result = DistanceConverter.kilometresToYards(km);

        // Assert
        expect(result).toEqual(yards);
      });
    });
  });

  describe('yardsToKilometres', () => {
    const testCases = [
      [1, 0.00091],
      [10, 0.00914],
      [20, 0.01829],
      [30, 0.02743]
    ];
    testCases.forEach(([yards, km]) => {
      test(`should convert ${yards} yards to ${km} km`, () => {
        // Arrange & Act
        const result = DistanceConverter.yardsToKilometres(yards);

        // Assert
        expect(result).toEqual(km);
      });
    });
  });

  describe('milesToYards', () => {
    const testCases = [
      [1, 1760],
      [10, 17600],
      [20, 35200],
      [30, 52800]
    ];
    testCases.forEach(([miles, yards]) => {
      test(`should convert ${miles} miles to ${yards} yards`, () => {
        // Arrange & Act
        const result = DistanceConverter.milesToYards(miles);

        // Assert
        expect(result).toEqual(yards);
      });
    });
  });

  describe('yardsToMiles', () => {
    const testCases = [
      [1, 0.00057],
      [10, 0.00568],
      [20, 0.01136],
      [30, 0.01705]
    ];
    testCases.forEach(([yards, miles]) => {
      test(`should convert ${yards} yards to ${miles} miles`, () => {
        // Arrange & Act
        const result = DistanceConverter.yardsToMiles(yards);

        // Assert
        expect(result).toEqual(miles);
      });
    });
  });

  describe('milesToFeet', () => {
    const testCases = [
      [1, 5280],
      [10, 52800],
      [20, 105600],
      [30, 158400]
    ];
    testCases.forEach(([miles, feet]) => {
      test(`should convert ${miles} miles to ${feet} feet`, () => {
        // Arrange & Act
        const result = DistanceConverter.milesToFeet(miles);

        // Assert
        expect(result).toEqual(feet);
      });
    });
  });

  describe('feetToMiles', () => {
    const testCases = [
      [1, 0.00019],
      [10, 0.00189],
      [20, 0.00379],
      [30, 0.00568]
    ];
    testCases.forEach(([feet, miles]) => {
      test(`should convert ${feet} feet to ${miles} miles`, () => {
        // Arrange & Act
        const result = DistanceConverter.feetToMiles(feet);

        // Assert
        expect(result).toEqual(miles);
      });
    });
  });

  describe('milesToInches', () => {
    const testCases = [
      [1, 63360],
      [10, 633600],
      [20, 1267200],
      [30, 1900800]
    ];
    testCases.forEach(([miles, inches]) => {
      test(`should convert ${miles} miles to ${inches} inches`, () => {
        // Arrange & Act
        const result = DistanceConverter.milesToInches(miles);

        // Assert
        expect(result).toEqual(inches);
      });
    });
  });

  describe('inchesToMiles', () => {
    const testCases = [
      [1, 0.00002],
      [10, 0.00016],
      [20, 0.00032],
      [30, 0.00047]
    ];
    testCases.forEach(([inches, miles]) => {
      test(`should convert ${inches} inches to ${miles} miles`, () => {
        // Arrange & Act
        const result = DistanceConverter.inchesToMiles(inches);

        // Assert
        expect(result).toEqual(miles);
      });
    });
  });

  describe('yardsToFeet', () => {
    const testCases = [
      [1, 3],
      [10, 30],
      [20, 60],
      [30, 90]
    ];
    testCases.forEach(([yards, feet]) => {
      test(`should convert ${yards} yards to ${feet} feet`, () => {
        // Arrange & Act
        const result = DistanceConverter.yardsToFeet(yards);

        // Assert
        expect(result).toEqual(feet);
      });
    });
  });

  describe('feetToYards', () => {
    const testCases = [
      [1, 0.33333],
      [10, 3.33333],
      [20, 6.66666],
      [30, 9.99999]
    ];
    testCases.forEach(([feet, yards]) => {
      test(`should convert ${feet} feet to ${yards} yards`, () => {
        // Arrange & Act
        const result = DistanceConverter.feetToYards(feet);

        // Assert
        expect(result).toEqual(yards);
      });
    });
  });

  describe('milesToMetres', () => {
    const testCases = [
      [1, 1609.34],
      [10, 16093.44],
      [20, 32186.89],
      [30, 48280.33]
    ];
    testCases.forEach(([miles, metres]) => {
      test(`should convert ${miles} miles to ${metres} metres`, () => {
        // Arrange & Act
        const result = DistanceConverter.milesToMetres(miles);

        // Assert
        expect(result).toEqual(metres);
      });
    });
  });

  describe('metresToMiles', () => {
    const testCases = [
      [1, 0.00062],
      [10, 0.00621],
      [20, 0.01243],
      [30, 0.01864]
    ];
    testCases.forEach(([metres, miles]) => {
      test(`should convert ${metres} metres to ${miles} miles`, () => {
        // Arrange & Act
        const result = DistanceConverter.metresToMiles(metres);

        // Assert
        expect(result).toEqual(miles);
      });
    });
  });
});
