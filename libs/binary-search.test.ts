import {
  binarySearch,
  searchInsertPosition,
  findFirstAndLastPosition,
  searchInRotatedSortedArray,
  findMinInRotatedSortedArray,
  searchA2DMatrix,
  minEatingSpeedKoko,
} from "./binary-search";

// describe("binarySearch", () => {
//   it.each([
//     [[-1, 0, 3, 5, 9, 12], 9, 4],
//     [[-1, 0, 3, 5, 9, 12], 2, -1],
//     [[5], 5, 0],
//   ])("binarySearch(%j, %i) === %i", (nums, target, expected) => {
//     expect(binarySearch(nums, target)).toBe(expected);
//   });
// });

// describe("searchInsertPosition", () => {
//   it.each([
//     [[1, 3, 5, 6], 5, 2],
//     [[1, 3, 5, 6], 2, 1],
//     [[1, 3, 5, 6], 7, 4],
//   ])("searchInsertPosition(%j, %i) === %i", (nums, target, expected) => {
//     expect(searchInsertPosition(nums, target)).toBe(expected);
//   });
// });

// describe("findFirstAndLastPosition", () => {
//   it.each([
//     [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
//     [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
//   ])("findFirstAndLastPosition(%j, %i) === %j", (nums, target, expected) => {
//     expect(findFirstAndLastPosition(nums, target)).toEqual(expected);
//   });
// });

// describe("searchInRotatedSortedArray", () => {
//   it.each([
//     [[4, 5, 6, 7, 0, 1, 2], 0, 4],
//     [[4, 5, 6, 7, 0, 1, 2], 3, -1],
//     [[1], 0, -1],
//   ])("searchInRotatedSortedArray(%j, %i) === %i", (nums, target, expected) => {
//     expect(searchInRotatedSortedArray(nums, target)).toBe(expected);
//   });
// });

// describe("findMinInRotatedSortedArray", () => {
//   it.each([
//     [[3, 4, 5, 1, 2], 1],
//     [[4, 5, 6, 7, 0, 1, 2], 0],
//     [[11, 13, 15, 17], 11],
//   ])("findMinInRotatedSortedArray(%j) === %i", (nums, expected) => {
//     expect(findMinInRotatedSortedArray(nums)).toBe(expected);
//   });
// });

// describe("searchA2DMatrix", () => {
//   it.each([
//     [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3, true],
//     [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13, false],
//   ])("searchA2DMatrix(%j, %i) === %s", (matrix, target, expected) => {
//     expect(searchA2DMatrix(matrix, target)).toBe(expected);
//   });
// });

// describe("minEatingSpeedKoko", () => {
//   it.each([
//     [[3, 6, 7, 11], 8, 4],
//     [[30, 11, 23, 4, 20], 5, 30],
//     [[30, 11, 23, 4, 20], 6, 23],
//   ])("minEatingSpeedKoko(%j, %i) === %i", (piles, h, expected) => {
//     expect(minEatingSpeedKoko(piles, h)).toBe(expected);
//   });
// });
