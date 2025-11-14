export interface WcagCompliance {
  aaNormal: boolean;
  aaLarge: boolean;
  aaaNormal: boolean;
  aaaLarge: boolean;
}

export const checkWcagCompliance = (ratio: string): WcagCompliance => {
  const numericRatio = parseFloat(ratio);

  return {
    aaNormal: numericRatio >= 4.5,
    aaLarge: numericRatio >= 3,
    aaaNormal: numericRatio >= 7,
    aaaLarge: numericRatio >= 4.5,
  };
};
