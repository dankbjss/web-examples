export const MASS_UNITS = {
  GRAM: { long: 'gram', short: 'g' },
    KILOGRAM: { long: 'kilogram', short: 'kg' },
    OUNCE: { long: 'ounce', short: 'oz' },
    POUND: { long: 'pound', short: 'lb' },
} as const;

export const TEMPERATURE_UNITS = {
    CELSIUS: { long: 'celsius', short: 'c' },
    CELSIUS_FAN_OVEN: { long: 'celsius (fan oven)', short: 'c (fan)' },
    FAHRENHEIT: { long: 'fahrenheit', short: 'f' }
};

export const VOLUME_UNITS = {
    MILLILITRE: { long: 'millilitre', short: 'ml' },
    FLUID_OUNCE: { long: 'fluid ounce', short: 'fl oz' },
    LITRE: { long: 'litre', short: 'l' },
    GALLON: { long: 'gallon', short: 'gal' },
    PINT: { long: 'pint', short: 'pt' },
} as const;

export const DISTANCE_UNITS = {
  CENTIMETRE: { long: 'centimetre', short: 'cm' },
    METRE: { long: 'metre', short: 'm' },
    KILOMETRE: { long: 'kilometre', short: 'km' },
    INCH: { long: 'inch', short: 'in' },
    FOOT: { long: 'foot', short: 'ft' },
    YARD: { long: 'yard', short: 'yd' },
    MILE: { long: 'mile', short: 'mi' },
}

type MassUnitShort = typeof MASS_UNITS[keyof typeof MASS_UNITS]['short'];
type TemperatureUnitShort = typeof TEMPERATURE_UNITS[keyof typeof TEMPERATURE_UNITS]['short'];
type VolumeUnitShort = typeof VOLUME_UNITS[keyof typeof VOLUME_UNITS]['short'];
type DistanceUnitShort = typeof DISTANCE_UNITS[keyof typeof DISTANCE_UNITS]['short'];

export type UnitShort = MassUnitShort | TemperatureUnitShort | VolumeUnitShort | DistanceUnitShort;

export function isMassUnit(unit: UnitShort): boolean {
  return Object.values(MASS_UNITS).some((u) => u.short === unit);
}

export function isTemperatureUnit(unit: UnitShort): boolean {
  return Object.values(TEMPERATURE_UNITS).some((u) => u.short === unit);
}

export function isVolumeUnit(unit: UnitShort): boolean {
  return Object.values(VOLUME_UNITS).some((u) => u.short === unit);
}

export function isDistanceUnit(unit: UnitShort): boolean {
  return Object.values(DISTANCE_UNITS).some((u) => u.short === unit);
}

export const unitMap = {
    ...MASS_UNITS,
    ...TEMPERATURE_UNITS,
    ...VOLUME_UNITS,
    ...DISTANCE_UNITS
};
