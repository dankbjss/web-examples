
import { Decimal } from 'decimal.js';

export class MassConverter {
  private static readonly GRAMS_TO_OUNCES = new Decimal(0.035274);
  private static readonly KILOGRAMS_TO_POUNDS = new Decimal(2.20462);
  private static readonly KILOGRAMS_TO_OUNCES = new Decimal(35.274);

  static kilogramsToPounds(kilos: number): number {
    const result = new Decimal(kilos).mul(this.KILOGRAMS_TO_POUNDS);
    return Number(result.toFixed(5));
  }

  static poundsToKilograms(pounds: number): number {
    const result = new Decimal(pounds).div(this.KILOGRAMS_TO_POUNDS);
    return Number(result.toFixed(5));
  }

  static gramsToKilograms(grams: number): number {
    const result = new Decimal(grams).div(1000);
    return Number(result.toFixed(5));
  }

  static kilogramsToGrams(kilos: number): number {
    const result = new Decimal(kilos).mul(1000);
    return Number(result.toFixed(5));
  }

  static gramsToOunces(grams: number): number {
    const result = new Decimal(grams).mul(this.GRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }

  static ouncesToGrams(ounces: number): number {
    const result = new Decimal(ounces).div(this.GRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }

  static ouncesToPounds(ounces: number): number {
    const result = new Decimal(ounces).div(16);
    return Number(result.toFixed(5));
  }

  static poundsToOunces(pounds: number): number {
    const result = new Decimal(pounds).mul(16);
    return Number(result.toFixed(5));
  }

  static gramsToPounds(grams: number): number {
    const result = new Decimal(grams).mul(this.KILOGRAMS_TO_POUNDS).div(1000);
    return Number(result.toFixed(5));
  }

  static poundsToGrams(pounds: number): number {
    const result = new Decimal(pounds).div(this.KILOGRAMS_TO_POUNDS).mul(1000);
    return Number(result.toFixed(5));
  }

  static kilogramsToOunces(kilos: number): number {
    const result = new Decimal(kilos).mul(this.KILOGRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }

  static ouncesToKilograms(ounces: number): number {
    const result = new Decimal(ounces).div(this.KILOGRAMS_TO_OUNCES);
    return Number(result.toFixed(5));
  }
}
