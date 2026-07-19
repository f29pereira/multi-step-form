import { Dictionary, LocaleCode } from "../components/types";

/**
 * Returns an object with the formatted label and price for yearly or monthly payment
 * @param isYearly is the price for yearly format
 * @param price price value to be formatted
 * @param localeCode locale code
 * @param dictionary localization dictionary
 *
 * @returns ariaLabel - accessible price text for screen readers; price - displayed formatted price
 *
 * @example getFormattedPriceWithLabel(true, 90, "en", dictionary)
 * // { ariaLabel: "90 dollars per year", price: "$90/yr" }
 */
export const getFormattedPriceWithLabel = (
  isYearly: boolean,
  price: number,
  localeCode: LocaleCode,
  dictionary: Dictionary,
): { ariaLabel: string; price: string } => {
  return {
    ariaLabel: getFormattedLabelPrice(isYearly, price, localeCode, dictionary),
    price: getFormattedPrice(isYearly, price, localeCode, dictionary),
  };
};

/**
 * Returns a formatted label for yearly or monthly payment
 * @param isYearly   is the price for yearly format
 * @param price      price value to be formatted
 * @param localeCode locale code
 * @param dictionary localization dictionary
 *
 * @returns accessible price text for screen readers
 *
 * @example getFormattedLabelPrice(true, 90, "en", dictionary)
 * // "90 dollars per year"
 */
export const getFormattedLabelPrice = (
  isYearly: boolean,
  price: number,
  localeCode: LocaleCode,
  dictionary: Dictionary,
) => {
  const priceText = formatCurrencyAsFullName(localeCode, price);

  const subscriptionText = getSubscriptionText(
    isYearly,
    localeCode,
    dictionary,
  );

  return `${priceText} ${subscriptionText}`;
};

/**
 * Returns the subscription text for yearly or monthly payment
 * @param isYearly   is the price for yearly format
 * @param localeCode locale code
 *
 * @returns accessible subscription text for screen readers
 *
 * @example getTotalText(true, "en")
 * // per Year
 */
export const getSubscriptionText = (
  isYearly: boolean,
  localeCode: LocaleCode,
  dictionary: Dictionary,
) => {
  const subscription = dictionary.subscription;

  return isYearly
    ? `${subscription.yearly.long}`
    : `${subscription.monthly.long}`;
};

/**
 * Returns a formatted price for yearly or monthly payment
 * @param isYearly   is the price for yearly format
 * @param price      price value to be formatted
 * @param localeCode locale code
 * @param dictionary localization dictionary
 *
 * @returns formatted price
 *
 * @example getFormattedPrice(false, 90, "en", dictionary)
 * // "$90/mo"
 */
export const getFormattedPrice = (
  isYearly: boolean,
  price: number,
  localeCode: LocaleCode,
  dictionary: Dictionary,
) => {
  const formattedPrice = formatCurrencyAsSymbol(localeCode, price);
  const subscription = dictionary.subscription;

  return isYearly
    ? `${formattedPrice}/${subscription.yearly.short}`
    : `${formattedPrice}/${subscription.monthly.short}`;
};

/**
 * Returns a formatted full name price by a given localeCode
 * @param localeCode locale code
 * @param price      price to format
 *
 * @example formatCurrencyAsFullName("en", 90)
 * // 90 US dollars
 */
export const formatCurrencyAsFullName = (
  localeCode: LocaleCode,
  price: number,
) => {
  const currency = getCurrency(localeCode);

  return new Intl.NumberFormat(localeCode, {
    style: "currency",
    currency: currency,
    currencyDisplay: "name",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Returns a formatted price with the currency symbol by a given localeCode
 * @param localeCode locale code
 * @param price      price to format
 *
 * @example formatCurrencyAsSymbol("en", 90)
 * // $90
 */
export const formatCurrencyAsSymbol = (
  localeCode: LocaleCode,
  price: number,
) => {
  const language = getLanguageTag(localeCode);
  const currency = getCurrency(localeCode);

  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Returns the ISO currency codes by a given locale code
 * @param localeCode locale code
 */
const getCurrency = (localeCode: LocaleCode) => {
  switch (localeCode) {
    case "en":
      return "USD";
    case "pt":
      return "EUR";
  }
};

/**
 * Returns the BCP 47 language tag by a given locale code
 * @param localeCode locale code
 */
const getLanguageTag = (localeCode: LocaleCode) => {
  switch (localeCode) {
    case "en":
      return "en-US";
    case "pt":
      return "pt-PT";
  }
};

/**
 * Creates a cookie
 * @param cookieName  cookie name
 * @param cookieValue value to be saved
 * @param maxAge      number of seconds until the cookie expires
 *
 * @example setCookie("NEXT_LOCALE", "en", 31536000)
 * // save the cookie NEXT_LOCALE with the value en for a full year
 */
export const setCookie = (
  cookieName: string,
  cookieValue: string,
  maxAge: number,
) => {
  document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=${maxAge}; SameSite=Lax`;
};
