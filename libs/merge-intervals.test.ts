import {
  mergeIntervals,
  insertInterval,
  eraseOverlapIntervals,
  canAttendAllMeetings,
  minMeetingRooms,
  minArrowsToBurstBalloons,
} from "./merge-intervals";

// describe("mergeIntervals", () => {
//   it.each([
//     [
//       [[1, 3], [2, 6], [8, 10], [15, 18]],
//       [[1, 6], [8, 10], [15, 18]],
//     ],
//     [
//       [[1, 4], [4, 5]],
//       [[1, 5]],
//     ],
//   ])("mergeIntervals(%j) === %j", (intervals, expected) => {
//     expect(mergeIntervals(intervals)).toEqual(expected);
//   });
// });

// describe("insertInterval", () => {
//   it.each([
//     [[[1, 3], [6, 9]], [2, 5], [[1, 5], [6, 9]]],
//     [
//       [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
//       [4, 8],
//       [[1, 2], [3, 10], [12, 16]],
//     ],
//   ])("insertInterval(%j, %j) === %j", (intervals, newInterval, expected) => {
//     expect(insertInterval(intervals, newInterval)).toEqual(expected);
//   });
// });

// describe("eraseOverlapIntervals", () => {
//   it.each([
//     [[[1, 2], [2, 3], [3, 4], [1, 3]], 1],
//     [[[1, 2], [1, 2], [1, 2]], 2],
//     [[[1, 2], [2, 3]], 0],
//   ])("eraseOverlapIntervals(%j) === %i", (intervals, expected) => {
//     expect(eraseOverlapIntervals(intervals)).toBe(expected);
//   });
// });

// describe("canAttendAllMeetings", () => {
//   it.each([
//     [[[0, 30], [5, 10], [15, 20]], false],
//     [[[7, 10], [2, 4]], true],
//   ])("canAttendAllMeetings(%j) === %s", (intervals, expected) => {
//     expect(canAttendAllMeetings(intervals)).toBe(expected);
//   });
// });

// describe("minMeetingRooms", () => {
//   it.each([
//     [[[0, 30], [5, 10], [15, 20]], 2],
//     [[[7, 10], [2, 4]], 1],
//   ])("minMeetingRooms(%j) === %i", (intervals, expected) => {
//     expect(minMeetingRooms(intervals)).toBe(expected);
//   });
// });

// describe("minArrowsToBurstBalloons", () => {
//   it.each([
//     [[[10, 16], [2, 8], [1, 6], [7, 12]], 2],
//     [[[1, 2], [3, 4], [5, 6], [7, 8]], 4],
//     [[[1, 2], [2, 3], [3, 4], [4, 5]], 2],
//   ])("minArrowsToBurstBalloons(%j) === %i", (points, expected) => {
//     expect(minArrowsToBurstBalloons(points)).toBe(expected);
//   });
// });
