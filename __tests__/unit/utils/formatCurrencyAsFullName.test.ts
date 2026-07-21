import { formatCurrencyAsFullName } from "@/app/lib/utils";

/**
 * Test for the function: formatCurrencyAsFullName
 */
describe("formatCurrencyAsFullName function", () => {
  it("returns the formatted price with dollar text", () => {
    expect(formatCurrencyAsFullName("en", 90)).toBe("90 US dollars");
  });

  it("returns the formatted price with euro text", () => {
    expect(formatCurrencyAsFullName("pt", 90)).toBe("90 Euros");
  });
});
