type UnixConversionOption = 'iso' | 'utc' | 'locale' | 'milliseconds' | 'hours' | 'days';

const getHoursFromSeconds = (seconds: number): number => {
  return Math.floor(seconds / (60 * 60));
};

const getDaysFromSeconds = (seconds: number): number => {
  return Math.floor(seconds / (60 * 60 * 24));
};

export const convertUnixTimestamp = (unixTimestamp: number, conversionOption: UnixConversionOption): string | number => {
  if (!unixTimestamp || isNaN(unixTimestamp)) {
    return 'Please enter a valid timestamp';
  }

  const date = new Date(unixTimestamp * 1000);

  switch (conversionOption) {
    case 'iso':
      return date.toISOString();
    case 'utc':
      return date.toUTCString();
    case 'locale':
      return date.toLocaleString();
    case 'milliseconds':
      return date.getTime();
    case 'hours':
      return getHoursFromSeconds(date.getTime() / 1000);
    case 'days':
      return getDaysFromSeconds(date.getTime() / 1000);
    default:
      return 'Invalid conversion option';
  }
};
