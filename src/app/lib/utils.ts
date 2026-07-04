/**
 * Returns a formatted price for yearly (/yr) or monthly (/mo) payment
 * @param isYearly is the price for yearly format
 * @param price price value
 */
export const formatYearlyOrMonthlyPrice = (
  isYearly: boolean,
  price: number,
) => {
  const priceValue = `$${price}/`;

  return isYearly ? `${priceValue}yr` : `${priceValue}mo`;
};
