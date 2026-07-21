import { getFormattedPrice } from "@/app/lib/utils";
import en from "@/app/[lang]/dictionaries/en.json";
import pt from "@/app/[lang]/dictionaries/pt.json";

/**
 * Test for the function: getFormattedPrice
 */
describe("getFormattedPrice function", () => {
  const dictionaries = { en, pt };

  it("returns the formatted dollar price for yearly payment", () => {
    expect(getFormattedPrice(true, 90, "en", dictionaries.en)).toBe("$90/yr");
  });

  it("returns the formatted euro price for monthly payment", () => {
    expect(getFormattedPrice(false, 9, "pt", dictionaries.en)).toBe(
      "9\u00A0€/mo",
    ); // u00A0 = non-breaking space
  });
});
