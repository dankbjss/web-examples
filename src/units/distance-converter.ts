import { Decimal } from 'decimal.js';

export class DistanceConverter {
  private static readonly METRES_TO_YARDS = new Decimal(1.09361);
  private static readonly KILOMETRES_TO_MILES = new Decimal(0.621371);
  private static readonly CENTIMETRES_TO_INCHES = new Decimal(0.393701);
  private static readonly METRES_TO_FEET = new Decimal(3.28084);
  private static readonly CENTIMETRES_TO_FEET = new Decimal(0.0328084);
  private static readonly FEET_TO_INCHES = new Decimal(12);
  private static readonly METRES_TO_INCHES = new Decimal(39.3701);
  private static readonly INCHES_TO_METRES = new Decimal(0.0254);
  private static readonly KILOMETRES_TO_YARDS = new Decimal(1093.61);
  private static readonly YARDS_TO_KILOMETRES = new Decimal(0.0009144);
  private static readonly MILES_TO_YARDS = new Decimal(1760);
  private static readonly YARDS_TO_MILES = new Decimal(0.000568182);
  private static readonly MILES_TO_FEET = new Decimal(5280);
  private static readonly FEET_TO_MILES = new Decimal(0.000189394);
  private static readonly MILES_TO_INCHES = new Decimal(63360);
  private static readonly INCHES_TO_MILES = new Decimal(0.0000157828);
  private static readonly YARDS_TO_FEET = new Decimal(3);
  private static readonly FEET_TO_YARDS = new Decimal(0.333333);

  static metresToYards(metres: number): number {
    const result = new Decimal(metres).mul(this.METRES_TO_YARDS);
    return Number(result.toFixed(5));
  }

  static metresToFeet(metres: number): number {
    const result = new Decimal(metres).mul(this.METRES_TO_FEET);
    return Number(result.toFixed(5));
  }

  static feetToMetres(feet: number): number {
    const result = new Decimal(feet).div(this.METRES_TO_FEET);
    return Number(result.toFixed(5));
  }

  static yardsToMetres(yards: number): number {
    const result = new Decimal(yards).div(this.METRES_TO_YARDS);
    return Number(result.toFixed(5));
  }

  static kilometresToMiles(kilometres: number): number {
    const result = new Decimal(kilometres).mul(this.KILOMETRES_TO_MILES);
    return Number(result.toFixed(5));
  }

  static milesToKilometres(miles: number): number {
    const result = new Decimal(miles).div(this.KILOMETRES_TO_MILES);
    return Number(result.toFixed(5));
  }

  static centimetresToInches(centimetres: number): number {
    const result = new Decimal(centimetres).mul(this.CENTIMETRES_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static centimetresToFeet(centimetres: number): number {
    const result = new Decimal(centimetres).mul(this.CENTIMETRES_TO_FEET);
    return Number(result.toFixed(5));
  }

  static feetToCentimetres(feet: number): number {
    const result = new Decimal(feet).div(this.CENTIMETRES_TO_FEET);
    return Number(result.toFixed(5));
  }

  static inchesToCentimetres(inches: number): number {
    const result = new Decimal(inches).div(this.CENTIMETRES_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static feetToInches(feet: number): number {
    const result = new Decimal(feet).mul(this.FEET_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static inchesToFeet(inches: number): number {
    const result = new Decimal(inches).div(this.FEET_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static centimetresToMetres(centimetres: number): number {
    const result = new Decimal(centimetres).div(100);
    return Number(result.toFixed(5));
  }

  static metresToCentimetres(metres: number): number {
    const result = new Decimal(metres).mul(100);
    return Number(result.toFixed(5));
  }

  static kilometresToMetres(kilometres: number): number {
    const result = new Decimal(kilometres).mul(1000);
    return Number(result.toFixed(5));
  }

  static metresToKilometres(metres: number): number {
    const result = new Decimal(metres).div(1000);
    return Number(result.toFixed(5));
  }

  static kilometresToCentimetres(kilometres: number): number {
    const result = new Decimal(kilometres).mul(100000);
    return Number(result.toFixed(5));
  }

  static centimetresToKilometres(centimetres: number): number {
    const result = new Decimal(centimetres).div(100000);
    return Number(result.toFixed(5));
  }

  static metresToInches(metres: number): number {
    const result = new Decimal(metres).mul(this.METRES_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static inchesToMetres(inches: number): number {
    const result = new Decimal(inches).mul(this.INCHES_TO_METRES);
    return Number(result.toFixed(5));
  }

  static kilometresToYards(kilometres: number): number {
    const result = new Decimal(kilometres).mul(this.KILOMETRES_TO_YARDS);
    return Number(result.toFixed(5));
  }

  static yardsToKilometres(yards: number): number {
    const result = new Decimal(yards).mul(this.YARDS_TO_KILOMETRES);
    return Number(result.toFixed(5));
  }

  static milesToYards(miles: number): number {
    const result = new Decimal(miles).mul(this.MILES_TO_YARDS);
    return Number(result.toFixed(5));
  }

  static yardsToMiles(yards: number): number {
    const result = new Decimal(yards).mul(this.YARDS_TO_MILES);
    return Number(result.toFixed(5));
  }

  static milesToFeet(miles: number): number {
    const result = new Decimal(miles).mul(this.MILES_TO_FEET);
    return Number(result.toFixed(5));
  }

  static feetToMiles(feet: number): number {
    const result = new Decimal(feet).mul(this.FEET_TO_MILES);
    return Number(result.toFixed(5));
  }

  static milesToInches(miles: number): number {
    const result = new Decimal(miles).mul(this.MILES_TO_INCHES);
    return Number(result.toFixed(5));
  }

  static inchesToMiles(inches: number): number {
    const result = new Decimal(inches).mul(this.INCHES_TO_MILES);
    return Number(result.toFixed(5));
  }

  static yardsToFeet(yards: number): number {
    const result = new Decimal(yards).mul(this.YARDS_TO_FEET);
    return Number(result.toFixed(5));
  }

  static feetToYards(feet: number): number {
    const result = new Decimal(feet).mul(this.FEET_TO_YARDS);
    return Number(result.toFixed(5));
  }

  static milesToMetres(miles: number): number {
    const kilometres = this.milesToKilometres(miles);
    return this.kilometresToMetres(kilometres);
  }

  static metresToMiles(metres: number): number {
    const kilometres = this.metresToKilometres(metres);
    return this.kilometresToMiles(kilometres);
  }
}
