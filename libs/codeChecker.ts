/**
 * Validates whether a given string is a valid UK postcode.
 *
 * Format: <outward code> <inward code>
 *   - Outward code (2–4 chars): one of A9 | A99 | AA9 | A9A | AA99 | AA9A
 *   - Inward code (3 chars):    always 9AA (digit + 2 letters)
 *
 * Leading, trailing, and internal spaces are allowed and ignored.
 * Regular expressions are not used.
 *
 * @see https://ideal-postcodes.co.uk/guides/uk-postcode-format
 *
 * @example
 * validatePostcode("SW1A 1AA")   // true
 * validatePostcode("E1 3DQ")     // true
 * validatePostcode(" SW1A1AA ")  // true  (spaces ignored)
 * validatePostcode("INVALID")    // false
 */
export function validatePostcode(postcode: string): boolean {
  const cleaned = postcode.trim().toUpperCase().replace(/\s+/g, '');

  if (cleaned.length < 5 || cleaned.length > 7) return false;

  const inward = cleaned.slice(-3);
  const outward = cleaned.slice(0, -3);

  return isValidInward(inward) && isValidOutward(outward);
}

// Inward code is always: 1 digit + 2 letters
function isValidInward(code: string): boolean {
  return isDigit(code[0]) && isLetter(code[1]) && isLetter(code[2]);
}

// The 6 valid outward patterns from the spec: A9 | A99 | AA9 | A9A | AA99 | AA9A
function isValidOutward(code: string): boolean {
  const [a, b, c, d] = code;

  switch (code.length) {
    case 2:
      return isLetter(a) && isDigit(b);                                           // A9
    case 3:
      return (isLetter(a) && isDigit(b) && isDigit(c))                            // A99
          || (isLetter(a) && isLetter(b) && isDigit(c))                           // AA9
          || (isLetter(a) && isDigit(b) && isLetter(c));                          // A9A
    case 4:
      return (isLetter(a) && isLetter(b) && isDigit(c) && isDigit(d))             // AA99
          || (isLetter(a) && isLetter(b) && isDigit(c) && isLetter(d));           // AA9A
    default:
      return false;
  }
}

function isLetter(char: string): boolean {
  return char >= 'A' && char <= 'Z';
}

function isDigit(char: string): boolean {
  return char >= '0' && char <= '9';
}
