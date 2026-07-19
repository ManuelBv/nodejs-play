import {
  isValidPalindrome,
  twoSumSortedInput,
  removeDuplicatesFromSorted,
  threeSum,
  fourSum,
  maxWaterContainer,
  sortColors,
  trapRainWater,
} from "./two-pointers";

// describe("isValidPalindrome", () => {
//   it.each([
//     ["A man, a plan, a canal: Panama", true],
//     ["race a car", false],
//     [" ", true],
//   ])("isValidPalindrome(%s) === %s", (input, expected) => {
//     expect(isValidPalindrome(input)).toBe(expected);
//   });
// });

// describe("twoSumSortedInput", () => {
//   it.each([
//     [[2, 7, 11, 15], 9, [1, 2]],
//     [[2, 3, 4], 6, [1, 3]],
//     [[-1, 0], -1, [1, 2]],
//   ])("twoSumSortedInput(%j, %i) === %j", (numbers, target, expected) => {
//     expect(twoSumSortedInput(numbers, target)).toEqual(expected);
//   });
// });

// describe("removeDuplicatesFromSorted", () => {
//   it.each([
//     [[1, 1, 2], 2],
//     [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5],
//   ])("removeDuplicatesFromSorted(%j) === %i", (nums, expected) => {
//     expect(removeDuplicatesFromSorted(nums)).toBe(expected);
//   });
// });

// describe("threeSum", () => {
//   it.each([
//     [
//       [-1, 0, 1, 2, -1, -4],
//       [
//         [-1, -1, 2],
//         [-1, 0, 1],
//       ],
//     ],
//     [[0, 1, 1], []],
//     [[0, 0, 0], [[0, 0, 0]]],
//   ])("threeSum(%j)", (nums, expected) => {
//     const result = threeSum(nums).map((t) => [...t].sort((a, b) => a - b)).sort();
//     const expectedSorted = expected.map((t) => [...t].sort((a, b) => a - b)).sort();
//     expect(result).toEqual(expectedSorted);
//   });
// });

// describe("fourSum", () => {
//   it.each([
//     [
//       [1, 0, -1, 0, -2, 2],
//       0,
//       [
//         [-2, -1, 1, 2],
//         [-2, 0, 0, 2],
//         [-1, 0, 0, 1],
//       ],
//     ],
//   ])("fourSum(%j, %i)", (nums, target, expected) => {
//     const result = fourSum(nums, target).map((q) => [...q].sort((a, b) => a - b)).sort();
//     const expectedSorted = expected.map((q) => [...q].sort((a, b) => a - b)).sort();
//     expect(result).toEqual(expectedSorted);
//   });
// });

// describe("maxWaterContainer", () => {
//   it.each([
//     [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
//     [[1, 1], 1],
//   ])("maxWaterContainer(%j) === %i", (height, expected) => {
//     expect(maxWaterContainer(height)).toBe(expected);
//   });
// });

// describe("sortColors", () => {
//   it.each([
//     [
//       [2, 0, 2, 1, 1, 0],
//       [0, 0, 1, 1, 2, 2],
//     ],
//     [
//       [2, 0, 1],
//       [0, 1, 2],
//     ],
//   ])("sortColors(%j) === %j", (input, expected) => {
//     expect(sortColors(input)).toEqual(expected);
//   });
// });

// describe("trapRainWater", () => {
//   it.each([
//     [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
//     [[4, 2, 0, 3, 2, 5], 9],
//   ])("trapRainWater(%j) === %i", (height, expected) => {
//     expect(trapRainWater(height)).toBe(expected);
//   });
// });
