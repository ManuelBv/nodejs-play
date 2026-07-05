import {
  hasPairWithSum,
  firstNonRepeatingChar,
  isAnagram,
  longestUniqueSubstringLength,
  maxSubarraySum,
  groupAnagrams,
  moveZeroesToEnd,
  twoSumSorted,
  subarraySumEquals,
} from "./drills";

// describe("hasPairWithSum", () => {
//   it.each([
//     [[2, 7, 11, 15], 9, true],
//     [[1, 2, 3], 50, false],
//     [[3, 3], 6, true],
//     [[], 0, false],
//   ])("hasPairWithSum(%j, %i) === %s", (nums, target, expected) => {
//     expect(hasPairWithSum(nums, target)).toBe(expected);
//   });
// });

// describe("firstNonRepeatingChar", () => {
//   it.each([
//     ["aabbc", "c"],
//     ["aabb", null],
//     ["x", "x"],
//     ["swiss", "w"],
//   ])("firstNonRepeatingChar(%s) === %s", (input, expected) => {
//     expect(firstNonRepeatingChar(input)).toBe(expected);
//   });
// });

// describe("isAnagram", () => {
//   it.each([
//     ["listen", "silent", true],
//     ["hello", "world", false],
//     ["aacc", "ccac", false],
//     ["", "", true],
//   ])("isAnagram(%s, %s) === %s", (s1, s2, expected) => {
//     expect(isAnagram(s1, s2)).toBe(expected);
//   });
// });

// describe("longestUniqueSubstringLength", () => {
//   it.each([
//     ["abcabcbb", 3],
//     ["bbbbb", 1],
//     ["pwwkew", 3],
//     ["", 0],
//     ["abcdef", 6],
//   ])("longestUniqueSubstringLength(%s) === %i", (input, expected) => {
//     expect(longestUniqueSubstringLength(input)).toBe(expected);
//   });
// });

// describe("maxSubarraySum", () => {
//   it.each([
//     [[2, 1, 5, 1, 3, 2], 3, 9],
//     [[1, 1, 1, 1], 2, 2],
//     [[5, -1, 5, -1, 5], 2, 4],
//   ])("maxSubarraySum(%j, %i) === %i", (nums, k, expected) => {
//     expect(maxSubarraySum(nums, k)).toBe(expected);
//   });
// });

// describe("groupAnagrams", () => {
//   it.each([
//     [
//       ["eat", "tea", "tan", "ate", "nat", "bat"],
//       [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
//     ],
//     [[""], [[""]]],
//     [["a"], [["a"]]],
//   ])("groupAnagrams(%j)", (input, expected) => {
//     const result = groupAnagrams(input)
//       .map((group) => [...group].sort())
//       .sort();
//     const expectedSorted = expected.map((group) => [...group].sort()).sort();
//     expect(result).toEqual(expectedSorted);
//   });
// });

// describe("moveZeroesToEnd", () => {
//   it.each([
//     [
//       [0, 1, 0, 3, 12],
//       [1, 3, 12, 0, 0],
//     ],
//     [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     [
//       [1, 2, 3],
//       [1, 2, 3],
//     ],
//   ])("moveZeroesToEnd(%j) === %j", (input, expected) => {
//     expect(moveZeroesToEnd(input)).toEqual(expected);
//   });
// });

describe("twoSumSorted", () => {
  it.each([
    [[1, 2, 3, 4, 6], 6, [1, 3]],
    [[1, 2, 3], 5, [1, 2]],
    [[-3, -1, 0, 2, 8], 2, [2, 3]],
  ])("twoSumSorted(%j, %i) === %j", (nums, target, expected) => {
    expect(twoSumSorted(nums, target)).toEqual(expected);
  });
});

// describe("subarraySumEquals", () => {
//   it.each([
//     [[1, 1, 1], 2, 2],
//     [[1, 2, 3, -3, 3], 3, 3],
//     [[1, -1, 1, -1], 0, 4],
//   ])("subarraySumEquals(%j, %i) === %i", (nums, target, expected) => {
//     expect(subarraySumEquals(nums, target)).toBe(expected);
//   });
// });
