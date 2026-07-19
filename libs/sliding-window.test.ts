import {
  maxAverageSubarray,
  longestUniqueSubstring,
  longestRepeatingCharReplacement,
  maxConsecutiveOnesIII,
  fruitIntoBaskets,
  minWindowSubstring,
  slidingWindowMaximum,
} from "./sliding-window";

describe("maxAverageSubarray", () => {
  it.each([
    [[1, 12, -5, -6, 50, 3], 4, 12.75],
    [[5], 1, 5],
    [[0, 4, 0, 3, 2], 1, 4],
  ])("maxAverageSubarray(%j, %i) === %f", (nums, k, expected) => {
    expect(maxAverageSubarray(nums, k)).toBeCloseTo(expected);
  });
});

describe("longestUniqueSubstring", () => {
  it.each([
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["", 0],
  ])("longestUniqueSubstring(%s) === %i", (input, expected) => {
    expect(longestUniqueSubstring(input)).toBe(expected);
  });
});

// describe("longestRepeatingCharReplacement", () => {
//   it.each([
//     ["ABAB", 2, 4],
//     ["AABABBA", 1, 4],
//     ["AAAA", 2, 4],
//   ])("longestRepeatingCharReplacement(%s, %i) === %i", (s, k, expected) => {
//     expect(longestRepeatingCharReplacement(s, k)).toBe(expected);
//   });
// });

// describe("maxConsecutiveOnesIII", () => {
//   it.each([
//     [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2, 6],
//     [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3, 10],
//   ])("maxConsecutiveOnesIII(%j, %i) === %i", (nums, k, expected) => {
//     expect(maxConsecutiveOnesIII(nums, k)).toBe(expected);
//   });
// });

// describe("fruitIntoBaskets", () => {
//   it.each([
//     [[1, 2, 1], 3],
//     [[0, 1, 2, 2], 3],
//     [[1, 2, 3, 2, 2], 4],
//   ])("fruitIntoBaskets(%j) === %i", (fruits, expected) => {
//     expect(fruitIntoBaskets(fruits)).toBe(expected);
//   });
// });

// describe("minWindowSubstring", () => {
//   it.each([
//     ["ADOBECODEBANC", "ABC", "BANC"],
//     ["a", "a", "a"],
//     ["a", "aa", ""],
//   ])("minWindowSubstring(%s, %s) === %s", (s, t, expected) => {
//     expect(minWindowSubstring(s, t)).toBe(expected);
//   });
// });

// describe("slidingWindowMaximum", () => {
//   it.each([
//     [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
//     [[1], 1, [1]],
//   ])("slidingWindowMaximum(%j, %i) === %j", (nums, k, expected) => {
//     expect(slidingWindowMaximum(nums, k)).toEqual(expected);
//   });
// });
