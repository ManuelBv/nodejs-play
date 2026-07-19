import {
  buildList,
  listToArray,
  hasCycle,
  middleOfLinkedList,
  isPalindromeLinkedList,
  findDuplicateNumber,
  detectCycleStart,
  reorderList,
  ListNode,
} from "./fast-slow-pointers";

// Helper: build a list from values and wire the last node's `next` back
// to the node at `cycleIndex` (0-based) to simulate a cycle.
function buildCyclicList(values: number[], cycleIndex: number): ListNode {
  const nodes = values.map((value) => ({ value, next: null as ListNode | null }));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  nodes[nodes.length - 1].next = nodes[cycleIndex];
  return nodes[0];
}

// describe("hasCycle", () => {
//   it("returns true for a cyclic list", () => {
//     expect(hasCycle(buildCyclicList([3, 2, 0, -4], 1))).toBe(true);
//   });
//
//   it("returns false for an acyclic list", () => {
//     expect(hasCycle(buildList([1, 2, 3]))).toBe(false);
//   });
//
//   it("returns false for an empty list", () => {
//     expect(hasCycle(null)).toBe(false);
//   });
// });

// describe("middleOfLinkedList", () => {
//   it.each([
//     [[1, 2, 3, 4, 5], 3],
//     [[1, 2, 3, 4, 5, 6], 4],
//     [[1], 1],
//   ])("middleOfLinkedList(%j) === node with value %i", (values, expectedValue) => {
//     expect(middleOfLinkedList(buildList(values))?.value).toBe(expectedValue);
//   });
// });

// describe("isPalindromeLinkedList", () => {
//   it.each([
//     [[1, 2, 2, 1], true],
//     [[1, 2], false],
//     [[1], true],
//   ])("isPalindromeLinkedList(%j) === %s", (values, expected) => {
//     expect(isPalindromeLinkedList(buildList(values))).toBe(expected);
//   });
// });

// describe("findDuplicateNumber", () => {
//   it.each([
//     [[1, 3, 4, 2, 2], 2],
//     [[3, 1, 3, 4, 2], 3],
//   ])("findDuplicateNumber(%j) === %i", (nums, expected) => {
//     expect(findDuplicateNumber(nums)).toBe(expected);
//   });
// });

// describe("detectCycleStart", () => {
//   it("finds the cycle start node", () => {
//     expect(detectCycleStart(buildCyclicList([3, 2, 0, -4], 1))?.value).toBe(2);
//   });
//
//   it("returns null when there is no cycle", () => {
//     expect(detectCycleStart(buildList([1, 2]))).toBeNull();
//   });
// });

// describe("reorderList", () => {
//   it.each([
//     [[1, 2, 3, 4], [1, 4, 2, 3]],
//     [[1, 2, 3, 4, 5], [1, 5, 2, 4, 3]],
//   ])("reorderList(%j) reorders to %j", (input, expected) => {
//     const head = reorderList(buildList(input));
//     expect(listToArray(head)).toEqual(expected);
//   });
// });
