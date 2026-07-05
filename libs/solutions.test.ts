import {
  firstDuplicate,
  allLongestStrings,
  commonCharacterCount,
  sortByHeight,
} from "./solutions";

// describe("firstDuplicate", () => {
//   it.each([
//     [[2, 3, 3, 1, 5, 2], 3],
//     [[2, 4, 3, 5, 1], -1],
//     [[1, 1], 1],
//     [[1, 2, 3, 4, 5], -1],
//     // Counterexample: value 100's 2nd occurrence (index 8) comes before
//     // value 200's 2nd occurrence (index 11), even though 200's occurrences
//     // are closer together (distance 1 vs 100's distance 8). Guards against
//     // implementations that rank by occurrence-distance instead of by the
//     // index of the 2nd occurrence.
//     [[100, 1, 2, 3, 4, 5, 6, 7, 100, 9, 200, 200], 100],
//   ])("firstDuplicate(%j) === %i", (input, expected) => {
//     expect(firstDuplicate(input)).toBe(expected);
//   });
// });

describe("allLongestStrings", () => {
  it.each([
    [
      ["aba", "aa", "ad", "vcd", "aba"],
      ["aba", "vcd", "aba"],
    ],
    [["a", "ab", "abc"], ["abc"]],
    [
      ["x", "y", "z"],
      ["x", "y", "z"],
    ],
  ])("allLongestStrings(%j) === %j", (input, expected) => {
    expect(allLongestStrings(input)).toEqual(expected);
  });
});

// describe("commonCharacterCount", () => {
//   it.each([
//     ["aabcc", "adcaa", 3],
//     ["zzzz", "zzzzzzz", 4],
//     ["abc", "xyz", 0],
//   ])("commonCharacterCount(%s, %s) === %i", (s1, s2, expected) => {
//     expect(commonCharacterCount(s1, s2)).toBe(expected);
//   });
// });

// describe("sortByHeight", () => {
//   it.each([
//     [
//       [-1, 150, 190, 170, -1, -1, 160, 180],
//       [-1, 150, 160, 170, -1, -1, 180, 190],
//     ],
//     [
//       [-1, -1, -1],
//       [-1, -1, -1],
//     ],
//     [
//       [10, 6, 8],
//       [6, 8, 10],
//     ],
//   ])("sortByHeight(%j) === %j", (input, expected) => {
//     expect(sortByHeight(input)).toEqual(expected);
//   });
// });
