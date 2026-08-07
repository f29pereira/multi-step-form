import { formatCurrencyAsSymbol } from "@/app/lib/utils";

/**
 * Test for the function: formatCurrencyAsSymbol
 */
describe("formatCurrencyAsSymbol function", () => {
  it("returns the formatted price with the dollar sign", () => {
    expect(formatCurrencyAsSymbol("en", 90)).toBe("$90");
  });

  it("returns the formatted price with the euro sign", () => {
    expect(formatCurrencyAsSymbol("pt", 90)).toBe("90\u00A0€"); // u00A0 = non-breaking space
  });
});
