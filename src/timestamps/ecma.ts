type EcmaConversionOption = 'iso' | 'utc' | 'locale' | 'seconds' | 'hours' | 'days';

const getHoursFromMilliseconds = (milliseconds: number): number => {
  return Math.floor(milliseconds / (1000 * 60 * 60));
};

const getDaysFromMilliseconds = (milliseconds: number): number => {
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
};

export const convertEcmaTimestamp = (ecmaTimestamp: number, ecmaConversionOption: EcmaConversionOption): string | number => {
  if (!ecmaTimestamp || isNaN(ecmaTimestamp)) {
    return 'Please enter a valid timestamp';
  }

  const date = new Date(ecmaTimestamp);

  switch (ecmaConversionOption) {
    case 'iso':
      return date.toISOString();
    case 'utc':
      return date.toUTCString();
    case 'locale':
      return date.toLocaleString();
    case 'seconds':
      return Math.floor(ecmaTimestamp / 1000);
    case 'hours':
      return getHoursFromMilliseconds(ecmaTimestamp);
    case 'days':
      return getDaysFromMilliseconds(ecmaTimestamp);
    default:
      return 'Invalid conversion option';
  }
};
