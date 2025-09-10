import { TemperatureConverter } from "./temperatre-converter";
import { MassConverter } from "./mass-converter";
import { VolumeConverter } from "./volume-converter";
import { MASS_UNITS, VOLUME_UNITS, TEMPERATURE_UNITS, type UnitShort, isMassUnit, isTemperatureUnit, isVolumeUnit, isDistanceUnit, DISTANCE_UNITS } from "./model";
import Decimal from "decimal.js";
import { DistanceConverter } from "./distance-converter";

const conversionErrorString = (fromUnit: UnitShort, toUnit: UnitShort): string => {
  return `Cannot convert from ${fromUnit} to ${toUnit}`;
}

const convertMass = (value: number, fromUnit: UnitShort, toUnit: UnitShort): number | string => {
  if (!isMassUnit(toUnit) || !isMassUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }

  if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.kilogramsToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.poundsToKilograms(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.gramsToKilograms(value);
  } else if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.kilogramsToGrams(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.gramsToOunces(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.ouncesToGrams(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.ouncesToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.poundsToOunces(value);
  } else if (fromUnit === MASS_UNITS.GRAM.short && toUnit === MASS_UNITS.POUND.short) {
    return MassConverter.gramsToPounds(value);
  } else if (fromUnit === MASS_UNITS.POUND.short && toUnit === MASS_UNITS.GRAM.short) {
    return MassConverter.poundsToGrams(value);
  } else if (fromUnit === MASS_UNITS.KILOGRAM.short && toUnit === MASS_UNITS.OUNCE.short) {
    return MassConverter.kilogramsToOunces(value);
  } else if (fromUnit === MASS_UNITS.OUNCE.short && toUnit === MASS_UNITS.KILOGRAM.short) {
    return MassConverter.ouncesToKilograms(value);
  }

  return conversionErrorString(fromUnit, toUnit);
}

const convertTemperature = (value: number, fromUnit: UnitShort, toUnit: UnitShort): number | string => {
  if (!isTemperatureUnit(toUnit) || !isTemperatureUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }

  if (fromUnit === TEMPERATURE_UNITS.CELSIUS.short && toUnit === TEMPERATURE_UNITS.FAHRENHEIT.short) {
    return TemperatureConverter.celsiusToFahrenheit(value);
  } else if (fromUnit === TEMPERATURE_UNITS.FAHRENHEIT.short && toUnit === TEMPERATURE_UNITS.CELSIUS.short) {
    return TemperatureConverter.fahrenheitToCelsius(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short && toUnit === TEMPERATURE_UNITS.FAHRENHEIT.short) {
    return TemperatureConverter.celsiusFanOvenToFahrenheit(value);
  } else if (fromUnit === TEMPERATURE_UNITS.FAHRENHEIT.short && toUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short) {
    return TemperatureConverter.fahrenheitToCelsiusFanOven(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS.short && toUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short) {
    return TemperatureConverter.celsiusToCelsiusFanOven(value);
  } else if (fromUnit === TEMPERATURE_UNITS.CELSIUS_FAN_OVEN.short && toUnit === TEMPERATURE_UNITS.CELSIUS.short) {
    return TemperatureConverter.celsiusFanOvenToCelsius(value);
  }

  return conversionErrorString(fromUnit, toUnit);
}

const convertVolume = (value: number, fromUnit: UnitShort, toUnit: UnitShort): number | string => {
  if (!isVolumeUnit(toUnit) || !isVolumeUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }

  if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.litresToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.pintsToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.litresToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.fluidOuncesToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.gallonsToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.pintsToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.gallonsToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.millilitresToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.pintsToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.fluidOuncesToPints(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.millilitresToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.fluidOuncesToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.litresToGallons(value);
  } else if (fromUnit === VOLUME_UNITS.LITRE.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.litresToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.millilitresToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.LITRE.short) {
    return VolumeConverter.gallonsToLitres(value);
  } else if (fromUnit === VOLUME_UNITS.MILLILITRE.short && toUnit === VOLUME_UNITS.PINT.short) {
    return VolumeConverter.millilitresToPints(value);
  } else if (fromUnit === VOLUME_UNITS.PINT.short && toUnit === VOLUME_UNITS.MILLILITRE.short) {
    return VolumeConverter.pintsToMillilitres(value);
  } else if (fromUnit === VOLUME_UNITS.GALLON.short && toUnit === VOLUME_UNITS.FLUID_OUNCE.short) {
    return VolumeConverter.gallonsToFluidOunces(value);
  } else if (fromUnit === VOLUME_UNITS.FLUID_OUNCE.short && toUnit === VOLUME_UNITS.GALLON.short) {
    return VolumeConverter.fluidOuncesToGallons(value);
  }

  return conversionErrorString(fromUnit, toUnit);
}

const convertDistance = (value: number, fromUnit: UnitShort, toUnit: UnitShort): number | string => {
  if (!isDistanceUnit(toUnit) || !isDistanceUnit(fromUnit)) {
    return conversionErrorString(fromUnit, toUnit);
  }

  if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.metresToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.metresToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.feetToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.yardsToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.kilometresToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.milesToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.centimetresToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.centimetresToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.feetToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.inchesToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.feetToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.inchesToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit == DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.centimetresToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.metresToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.kilometresToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.metresToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.CENTIMETRE.short) {
    return DistanceConverter.kilometresToCentimetres(value);
  } else if (fromUnit === DISTANCE_UNITS.CENTIMETRE.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.centimetresToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.metresToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.inchesToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.KILOMETRE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.kilometresToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.KILOMETRE.short) {
    return DistanceConverter.yardsToKilometres(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.milesToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.yardsToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.milesToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.feetToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.INCH.short) {
    return DistanceConverter.milesToInches(value);
  } else if (fromUnit === DISTANCE_UNITS.INCH.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.inchesToMiles(value);
  } else if (fromUnit === DISTANCE_UNITS.YARD.short && toUnit === DISTANCE_UNITS.FOOT.short) {
    return DistanceConverter.yardsToFeet(value);
  } else if (fromUnit === DISTANCE_UNITS.FOOT.short && toUnit === DISTANCE_UNITS.YARD.short) {
    return DistanceConverter.feetToYards(value);
  } else if (fromUnit === DISTANCE_UNITS.MILE.short && toUnit === DISTANCE_UNITS.METRE.short) {
    return DistanceConverter.milesToMetres(value);
  } else if (fromUnit === DISTANCE_UNITS.METRE.short && toUnit === DISTANCE_UNITS.MILE.short) {
    return DistanceConverter.metresToMiles(value);
  }

  return conversionErrorString(fromUnit, toUnit);
}

export const convertUnit = (value: number, fromUnit: UnitShort, toUnit: UnitShort): number | string => {
  let result: number | string;
  if (fromUnit === toUnit) {
    return conversionErrorString(fromUnit, toUnit);
  }
  if (isMassUnit(fromUnit) && isMassUnit(toUnit)) {
    result = convertMass(value, fromUnit, toUnit);
  } else if (isTemperatureUnit(fromUnit) && isTemperatureUnit(toUnit)) {
    result = convertTemperature(value, fromUnit, toUnit);
  } else if (isVolumeUnit(fromUnit) && isVolumeUnit(toUnit)) {
    result = convertVolume(value, fromUnit, toUnit);
  } else if (isDistanceUnit(fromUnit) && isDistanceUnit(toUnit)) {
    result = convertDistance(value, fromUnit, toUnit);
  } else {
    return conversionErrorString(fromUnit, toUnit);
  }

  const rounded = new Decimal(result).toDecimalPlaces(5);
  return rounded.isInteger() ? rounded.toNumber() : Number(rounded);
}
