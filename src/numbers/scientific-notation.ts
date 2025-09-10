export const toScientificNotation = (num: number, precision = 0): string => {
  // Convert to exponential notation
  const exponential = precision > 0 ?  Number(num).toExponential(precision) : Number(num).toExponential(0);

  // Match both integer and decimal coefficients
  const match = exponential.match(/^(-?\d+(?:\.\d+)?)e([+-]?\d+)$/);

  if (!match) {
    return num.toString();
  }

  let coefficient = match[1];
  const exponent = parseInt(match[2], 10).toString();

  if (precision === 0) {
    coefficient = Math.round(Number(coefficient)).toString();
  }

  return `${coefficient} &times; 10<sup>${exponent}</sup>`;
};
