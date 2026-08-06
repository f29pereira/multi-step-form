import { getFormattedLabelPrice } from "@/app/lib/utils";
import en from "@/app/[lang]/dictionaries/en.json";
import pt from "@/app/[lang]/dictionaries/pt.json";

/**
 * Test for the function: getFormattedLabelPrice
 */
describe("getFormattedLabelPrice function", () => {
  const dictionaries = { en, pt };

  it("returns the formatted dollar price and yearly subscription payment for the English locale", () => {
    expect(getFormattedLabelPrice(true, 90, "en", dictionaries.en)).toBe(
      "90 US dollars per year",
    );
  });

  it("returns the formatted euro price and montlhy subscription payment for the Portuguese locale", () => {
    expect(getFormattedLabelPrice(true, 9, "pt", dictionaries.pt)).toBe(
      "9 Euros anuais",
    );
  });
});
