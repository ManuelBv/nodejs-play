import { validatePostcode } from "./codeChecker";

describe("validatePostcode", () => {
  describe("valid postcodes from README", () => {
    it.each([
      "SW1A 1AA",
      "E1 3DQ",
      "WC2 8HB",
      "GU16 7HF",
      "E14 9GE",
      "N1C 4AX",
      "E14 9WS",
    ])("returns true for %s", (postcode) => {
      expect(validatePostcode(postcode)).toBe(true);
    });
  });

  describe("valid postcodes with surrounding/internal spaces (README)", () => {
    it.each(["SW1A 1AA ", " SW1A 1AA", " SW1A1AA ", " SW1A 1AA "])(
      'returns true for "%s"',
      (postcode) => {
        expect(validatePostcode(postcode)).toBe(true);
      },
    );
  });

  describe("invalid postcodes", () => {
    it.each([
      ["empty string", ""],
      ["all letters", "INVALID"],
      ["all digits", "12345"],
      ["starts with digit", "1L 0NY"],
      ["inward code too short", "SW1A 1"],
      ["inward code too long", "SW1A 1AAA"],
    ])('%s: returns false for "%s"', (_, postcode) => {
      expect(validatePostcode(postcode)).toBe(false);
    });
  });
});
