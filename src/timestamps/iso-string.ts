type IsoStringConversions = 'unix' | 'ecma';

export const convertIsoString = (isoString: string, conversionType: IsoStringConversions): number | string => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
  if (!isoString || !isoDateRegex.test(isoString)) {
    return 'Please enter a valid ISO string';
  }

  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    return 'Invalid ISO string';
  }

  switch (conversionType) {
    case 'unix':
      return Math.floor(date.getTime() / 1000);
    case 'ecma':
      return date.getTime();
    default:
      return 'Invalid conversion type';
  }
};
