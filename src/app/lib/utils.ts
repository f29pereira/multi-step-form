/**
 * Returns a formatted price for yearly (/yr) or monthly (/mo) payment
 * @param isYearly is the price for yearly format
 * @param price price value
 */
export const formarYearlyOrMonthlyPrice = (
  isYearly: boolean,
  price: number,
) => {
  const priceValue = `$${price}/`;

  return isYearly ? `${priceValue}yr` : `${priceValue}mo`;
};
