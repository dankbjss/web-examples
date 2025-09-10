
import { Decimal } from 'decimal.js';

export class VolumeConverter {
  private static readonly LITRES_TO_PINTS = new Decimal(1.75975);
  private static readonly PINTS_TO_LITRES = new Decimal(0.568261);
  private static readonly LITRES_TO_FLUID_OUNCES = new Decimal(33.814);
  private static readonly FLUID_OUNCES_TO_LITRES = new Decimal(0.0295735);
  private static readonly GALLONS_TO_PINTS = new Decimal(8);
  private static readonly PINTS_TO_GALLONS = new Decimal(0.125);
  private static readonly GALLONS_TO_MILLILITRES = new Decimal(3785.41);
  private static readonly MILLILITRES_TO_GALLONS = new Decimal(0.000264172);
  private static readonly PINTS_TO_FLUID_OUNCES = new Decimal(20);
  private static readonly FLUID_OUNCES_TO_PINTS = new Decimal(0.05);
  private static readonly MILLILITRE_TO_FLUID_OUNCE = new Decimal(0.033814);
  private static readonly LITRE_TO_GALLON = new Decimal(0.264172);
  private static readonly MILLILITRE_TO_PINT = new Decimal(0.00176);

  static litresToPints(litres: number): number {
    const result = new Decimal(litres).mul(this.LITRES_TO_PINTS);
    return Number(result.toFixed(5));
  }

  static pintsToLitres(pints: number): number {
    const result = new Decimal(pints).mul(this.PINTS_TO_LITRES);
    return Number(result.toFixed(5));
  }

  static litresToFluidOunces(litres: number): number {
    const result = new Decimal(litres).mul(this.LITRES_TO_FLUID_OUNCES);
    return Number(result.toFixed(5));
  }

  static fluidOuncesToLitres(fluidOunces: number): number {
    const result = new Decimal(fluidOunces).mul(this.FLUID_OUNCES_TO_LITRES);
    return Number(result.toFixed(5));
  }

  static gallonsToPints(gallons: number): number {
    const result = new Decimal(gallons).mul(this.GALLONS_TO_PINTS);
    return Number(result.toFixed(5));
  }

  static pintsToGallons(pints: number): number {
    const result = new Decimal(pints).mul(this.PINTS_TO_GALLONS);
    return Number(result.toFixed(5));
  }

  static gallonsToMillilitres(gallons: number): number {
    const result = new Decimal(gallons).mul(this.GALLONS_TO_MILLILITRES);
    return Number(result.toFixed(5));
  }

  static millilitresToGallons(millilitres: number): number {
    const result = new Decimal(millilitres).mul(this.MILLILITRES_TO_GALLONS);
    return Number(result.toFixed(5));
  }

  static pintsToFluidOunces(pints: number): number {
    const result = new Decimal(pints).mul(this.PINTS_TO_FLUID_OUNCES);
    return Number(result.toFixed(5));
  }

  static fluidOuncesToPints(fluidOunces: number): number {
    const result = new Decimal(fluidOunces).mul(this.FLUID_OUNCES_TO_PINTS);
    return Number(result.toFixed(5));
  }

  static millilitresToFluidOunces(millilitres: number): number {
    const result = new Decimal(millilitres).mul(this.MILLILITRE_TO_FLUID_OUNCE);

    return Number(result.toFixed(5));
  }

  static fluidOuncesToMillilitres(fluidOunces: number): number {
    const result = new Decimal(fluidOunces).div(this.MILLILITRE_TO_FLUID_OUNCE);

    return Number(result.toFixed(5));
  }

  static litresToGallons(litres: number): number {
    const result = new Decimal(litres).mul(this.LITRE_TO_GALLON);

    return Number(result.toFixed(5));
  }

  static litresToMillilitres(litres: number): number {
    const result = new Decimal(litres).mul(1000);

    return Number(result.toFixed(5));
  }

  static millilitresToLitres(millilitres: number): number {
    const result = new Decimal(millilitres).div(1000);

    return Number(result.toFixed(5));
  }

  static gallonsToLitres(gallons: number): number {
    const result = new Decimal(gallons).div(this.LITRE_TO_GALLON);

    return Number(result.toFixed(5));
  }

  static millilitresToPints(millilitres: number): number {
    const result = new Decimal(millilitres).mul(this.MILLILITRE_TO_PINT);

    return Number(result.toFixed(5));
  }

  static pintsToMillilitres(pints: number): number {
    const result = new Decimal(pints).div(this.MILLILITRE_TO_PINT);

    return Number(result.toFixed(5));
  }

  static gallonsToFluidOunces(gallons: number): number {
    const litres = this.gallonsToLitres(gallons);
    const millilitres = this.litresToMillilitres(litres);

    return this.millilitresToFluidOunces(millilitres);
  }

  static fluidOuncesToGallons(fluidOunces: number): number {
    const millilitres = this.fluidOuncesToMillilitres(fluidOunces);
    const litres = this.millilitresToLitres(millilitres);

    return this.litresToGallons(litres);
  }
}
