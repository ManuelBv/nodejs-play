/**
 * Fast & Slow Pointers drills — DSA-Interview-Playbook Step 2, pattern 3/10.
 *
 * The pattern: walk two pointers through a linked list at different
 * speeds (typically slow +1, fast +2 per step) to detect cycles, find
 * midpoints, or check structural properties in O(n) time and O(1) space
 * — without needing a second pass, a hash set, or an array copy.
 *
 * No hints on which exact variant applies — that's the point. Time
 * yourself against a 5-10 min budget per problem. Implement each
 * function, run `npm run test:watch`, and uncomment its test block in
 * fast-slow-pointers.test.ts as you go.
 */

export type ListNode = {
  value: number;
  next: ListNode | null;
};

/**
 * buildList / listToArray are test helpers, not drills — used by the
 * test file to construct/inspect linked lists without hand-writing
 * `{ value, next: { value, next: ... } }` chains everywhere.
 */
export function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node: ListNode = { value, next: null };
    if (!head) {
      head = node;
    } else {
      tail!.next = node;
    }
    tail = node;
  }

  return head;
}

export function listToArray(head: ListNode | null): number[] {
  const out: number[] = [];
  let node = head;
  while (node) {
    out.push(node.value);
    node = node.next;
  }
  return out;
}

/**
 * hasCycle
 *
 * Given the head of a linked list, return true if the list has a cycle
 * (some node's `next` eventually points back to a node already visited).
 *
 * @example
 * // 3 -> 2 -> 0 -> -4 -> (back to node "2")
 * hasCycle(cyclicList)   // true
 * hasCycle(buildList([1, 2, 3]))   // false
 */
export function hasCycle(head: ListNode | null): boolean {
  throw new Error("Not implemented");
}

/**
 * middleOfLinkedList
 *
 * Given the head of a singly linked list, return the middle node. If
 * there are two middle nodes (even length), return the second one.
 *
 * @example
 * middleOfLinkedList(buildList([1,2,3,4,5]))    // node with value 3
 * middleOfLinkedList(buildList([1,2,3,4,5,6]))  // node with value 4
 */
export function middleOfLinkedList(head: ListNode | null): ListNode | null {
  throw new Error("Not implemented");
}

/**
 * isPalindromeLinkedList
 *
 * Given the head of a singly linked list, return true if it reads the
 * same forwards and backwards.
 *
 * @example
 * isPalindromeLinkedList(buildList([1,2,2,1]))   // true
 * isPalindromeLinkedList(buildList([1,2]))       // false
 */
export function isPalindromeLinkedList(head: ListNode | null): boolean {
  throw new Error("Not implemented");
}

/**
 * findDuplicateNumber
 *
 * Given an array of n+1 integers where each value is in [1, n], there is
 * exactly one repeated number (possibly repeated more than once). Find
 * it without modifying the array and using O(1) extra space (treat the
 * array as an implicit linked list via value -> index, then apply
 * Floyd's cycle detection).
 *
 * @example
 * findDuplicateNumber([1,3,4,2,2])   // 2
 * findDuplicateNumber([3,1,3,4,2])   // 3
 */
export function findDuplicateNumber(nums: number[]): number {
  throw new Error("Not implemented");
}

/**
 * detectCycleStart
 *
 * Given the head of a linked list that may contain a cycle, return the
 * node where the cycle begins, or null if there is no cycle.
 *
 * @example
 * // 3 -> 2 -> 0 -> -4 -> (back to node "2")
 * detectCycleStart(cyclicList)   // the node with value 2
 * detectCycleStart(buildList([1,2]))   // null
 */
export function detectCycleStart(head: ListNode | null): ListNode | null {
  throw new Error("Not implemented");
}

/**
 * reorderList
 *
 * Given the head of a singly linked list L0 -> L1 -> ... -> Ln-1 -> Ln,
 * reorder it in place to: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...
 * Mutate the list in place and return the (unchanged) head.
 *
 * @example
 * reorderList(buildList([1,2,3,4]))     // 1 -> 4 -> 2 -> 3
 * reorderList(buildList([1,2,3,4,5]))   // 1 -> 5 -> 2 -> 4 -> 3
 */
export function reorderList(head: ListNode | null): ListNode | null {
  throw new Error("Not implemented");
}
