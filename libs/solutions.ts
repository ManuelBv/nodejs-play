/**
 * Practice warm-up: 4 standalone problems in the style of CodeSignal's
 * General Coding Assessment (GCA) — independent algorithmic problems,
 * no shared state between them.
 *
 * Implement each function below. Run `npm run test:watch` and solve
 * against the tests in solutions.test.ts.
 */

/**
 * firstDuplicate
 *
 * Given an array a of integers, find the first value that occurs twice.
 * The "first" duplicate is the one whose second occurrence has the
 * smallest index. If there are no duplicates, return -1.
 *
 * @example
 * firstDuplicate([2, 3, 3, 1, 5, 2])  // 3 (its second occurrence is at index 2, before 2's second occurrence at index 5)
 * firstDuplicate([2, 4, 3, 5, 1])     // -1
 */
export function firstDuplicate(a: number[]): number {
  const seen = new Set<number>();
  for (const value of a) {
    if (seen.has(value)) return value;

    seen.add(value);
  }

  return -1;
}

/**
 * allLongestStrings
 *
 * Given an array of strings, return an array of all the longest strings,
 * preserving their original relative order.
 *
 * @example
 * allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])
 * // ["aba", "vcd", "aba"]
 */
export function allLongestStrings(inputArray: string[]): string[] {
  let maxlen = 0;
  for (const item of inputArray) {
    const itemlen = item.length;
    if (itemlen > maxlen) {
      maxlen = itemlen;
    }
  }

  return inputArray.filter((item) => item.length === maxlen);
}

/**
 * commonCharacterCount
 *
 * Given two strings, find the number of common characters between them,
 * treating characters as a multiset (e.g. two "a"s in both strings count twice).
 *
 * @example
 * commonCharacterCount("aabcc", "adcaa")  // 3 ("a", "a", "c")
 */
export function commonCharacterCount(s1: string, s2: string): number {
  throw new Error("Not implemented");
}

/**
 * sortByHeight
 *
 * Some people are standing in a row, mixed with trees (represented by -1).
 * Sort only the people by ascending height; trees must stay in their
 * original positions.
 *
 * @example
 * sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
 * // [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export function sortByHeight(a: number[]): number[] {
  throw new Error("Not implemented");
}
