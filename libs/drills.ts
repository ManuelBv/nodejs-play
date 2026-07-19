/**
 * Pattern-recognition drills: array/string problems that tempt an O(n^2)
 * nested-loop instinct, each solvable in O(n) or O(n log n) with the right
 * data structure (Set, Map, two-pointer, sliding window, prefix sum).
 *
 * No hints on which pattern applies — that's the point. Time yourself
 * against a 5-10 min budget per problem, same as the real test. Implement
 * each function, run `npm run test:watch`, and don't peek at drills.ts
 * for previous problems while solving a new one.
 */

/**
 * hasPairWithSum
 *
 * Given an array of integers and a target sum, return true if any two
 * distinct elements add up to target.
 *
 * @example
 * hasPairWithSum([2, 7, 11, 15], 9)   // true (2 + 7)
 * hasPairWithSum([1, 2, 3], 50)       // false
 */
export function hasPairWithSum(nums: number[], target: number): boolean {
  const seen = new Set<number>();

  for (const current of nums) {
    if (seen.has(target - current)) return true;
    seen.add(current);
  }

  return false;
}

/**
 * firstNonRepeatingChar
 *
 * Given a string, return the first character that appears exactly once.
 * If none exists, return null.
 *
 * @example
 * firstNonRepeatingChar("aabbc")   // "c"
 * firstNonRepeatingChar("aabb")    // null
 */
export function firstNonRepeatingChar(s: string): string | null {
  const chars = new Map<string, number>();

  for (const char of s) {
    chars.set(char, (chars.get(char) ?? 0) + 1);
  }

  for (const c of chars) {
    if (c[1] === 1) {
      return c[0];
    }
  }

  return null;
}

/**
 * isAnagram
 *
 * Given two strings, return true if one is an anagram of the other
 * (same characters, same multiplicity, any order).
 *
 * @example
 * isAnagram("listen", "silent")   // true
 * isAnagram("hello", "world")     // false
 */
export function isAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  const counts = new Map<string, number>();

  for (const c of s1) {
    counts.set(c, (counts.get(c) ?? 0) + 1);
  }

  for (const c of s2) {
    const remaining = counts.get(c) ?? 0;
    if (remaining === 0) {
      return false;
    }
    counts.set(c, remaining - 1);
  }

  return true;
}

/**
 * longestUniqueSubstringLength
 *
 * Given a string, return the length of the longest substring without
 * repeating characters.
 *
 * @example
 * longestUniqueSubstringLength("abcabcbb")   // 3 ("abc")
 * longestUniqueSubstringLength("bbbbb")      // 1 ("b")
 */
export function longestUniqueSubstringLength(s: string): number {
  const lastseen = new Map<string, number>();
  let start = 0;
  let windowlen = 0;

  for (let i = 0; i < s.length; i++) {
    if (lastseen.has(s[i]) && lastseen.get(s[i])! >= start) {
      start = lastseen.get(s[i])! + 1;
    }
    lastseen.set(s[i], i);

    if (windowlen < i - start + 1) {
      windowlen = i - start + 1;
    }
  }

  return windowlen;
}

/**
 * maxSubarraySum
 *
 * Given an array of integers and a window size k, return the maximum
 * sum of any k consecutive elements.
 *
 * @example
 * maxSubarraySum([2, 1, 5, 1, 3, 2], 3)   // 9 (5 + 1 + 3)
 */
export function maxSubarraySum(nums: number[], k: number): number {
  let maxsum = -Infinity;
  let innersum = nums[0];

  for (let j = 1; j < k; j++) {
    innersum += nums[j];
  }

  if (innersum > maxsum) {
    maxsum = innersum;
  }

  for (let i = 1; i < nums.length - k + 1; i++) {
    innersum = innersum - nums[i - 1] + nums[i + k - 1];

    if (innersum > maxsum) {
      maxsum = innersum;
    }
  }

  return maxsum;
}

/**
 * groupAnagrams
 *
 * Given an array of strings, group anagrams together. Order of groups
 * and order within groups does not matter for the test (it sorts before
 * comparing), but every input string must appear in exactly one group.
 *
 * @example
 * groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
 * // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 */
export function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const anagrams = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const key = `${[...strs[i]].sort()}`;
    const newArray = anagrams.get(key) ?? [];
    newArray?.push(strs[i]);
    anagrams.set(key, newArray);
  }

  anagrams.forEach((value, key) => {
    result.push(value);
  });

  return result;
}

/**
 * moveZeroesToEnd
 *
 * Given an array of integers, move all zeroes to the end while
 * preserving the relative order of the non-zero elements. Mutate
 * the array in place and also return it.
 *
 * @example
 * moveZeroesToEnd([0, 1, 0, 3, 12])   // [1, 3, 12, 0, 0]
 */
export function moveZeroesToEnd(nums: number[]): number[] {
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  for (let i = writeIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

/**
 * twoSumSorted
 *
 * Given an array sorted in ascending order and a target sum, return the
 * pair of indices (0-based) whose values add up to target. Assume
 * exactly one solution exists.
 *
 * @example
 * twoSumSorted([1, 2, 3, 4, 6], 6)   // [1, 3] (2 + 4)
 */
export function twoSumSorted(nums: number[], target: number): [number, number] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else if (nums[left] + nums[right] === target) {
      return [left, right];
    }
  }

  return [left, right];
}

/**
 * subarraySumEquals
 *
 * Given an array of integers and a target sum, return the count of
 * contiguous subarrays whose elements sum to target. Values can be
 * negative.
 *
 * @example
 * subarraySumEquals([1, 1, 1], 2)         // 2 ([1,1] at index 0-1, and index 1-2)
 * subarraySumEquals([1, 2, 3, -3, 3], 3)  // 3
 */
export function subarraySumEquals(nums: number[], target: number): number {
  throw new Error("Not implemented");
}

/**
 * collapseRepeatedChars
 *
 * Given a string, collapse every run of consecutive identical characters
 * down to a single instance of that character. Non-repeated characters
 * are left untouched.
 *
 * @example
 * collapseRepeatedChars("cccab")     // "cab"
 * collapseRepeatedChars("dddabdd")   // "dabd"
 * collapseRepeatedChars("aabbcc")    // "abc"
 *
 * Optimized O(n) reference (the recursive version above is O(n^2) worst
 * case, since every `.slice(i)` copies the remaining string): walk the
 * string once, only appending a character when it differs from the one
 * before it — no re-slicing, no recursion, no repeated work.
 *
 *   function collapseRepeatedCharsIterative(s: string): string {
 *     if (!s.length) return "";
 *     let result = s[0];
 *     for (let i = 1; i < s.length; i++) {
 *       if (s[i] !== s[i - 1]) result += s[i];
 *     }
 *     return result;
 *   }
 */
export function collapseRepeatedChars(s: string): string {
  if (!s.length) {
    return "";
  }

  if (s.length === 1) {
    return s[0];
  }

  let newstring = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[0]) {
      newstring = s[0] + collapseRepeatedChars(s.slice(i));
      return newstring;
    }
  }

  return s[0];
}

/**
 * removeAllDuplicates
 *
 * Given a string, delete every run of 2 or more consecutive identical
 * characters entirely (0 left, not 1). Deleting a run can bring
 * previously separated characters together into a *new* adjacent run —
 * keep resolving until no run of length >= 2 remains anywhere.
 *
 * @example
 * removeAllDuplicates("abccba")    // "" (cc deletes -> abba -> bb deletes -> aa -> deletes -> "")
 * removeAllDuplicates("cccacccaa") // "a" (both ccc runs and the aa run delete; the lone a survives)
 * removeAllDuplicates("abc")       // "abc" (no runs to delete)
 */
export function removeAllDuplicates(s: string): string {
  throw new Error("Not implemented");
}

/**
 * DFS REFERENCE EXAMPLE — depth-first search over a binary tree.
 *
 * This is not a drill to implement — it's a worked reference for the
 * DFS/binary-tree topic that comes after the string drills above.
 *
 * The core idea of DFS: go as deep as possible down one path before
 * backtracking, as opposed to BFS which explores level by level. On a
 * tree, "as deep as possible" means: fully finish the left subtree,
 * then fully finish the right subtree, before returning to the parent.
 *
 * Every recursive tree traversal has the same skeleton:
 *   1. Base case: null node -> nothing to do, return.
 *   2. Recurse into children (order depends on what you're computing).
 *   3. Combine/use results on the way back up (post-order), or process
 *      the node itself on the way down (pre-order) or between children
 *      (in-order).
 */
type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

/**
 * dfsPreorder: node -> left -> right.
 * Visits a node BEFORE its children. Useful when you need to process a
 * node before you know anything about its subtrees (e.g. copying a tree,
 * or serializing it root-first).
 */
export function dfsPreorder(
  root: TreeNode | null,
  out: number[] = [],
): number[] {
  if (root === null) return out; // base case: nothing here, stop descending

  out.push(root.value); // visit node first
  dfsPreorder(root.left, out); // then fully explore left
  dfsPreorder(root.right, out); // then fully explore right

  return out;
}

/**
 * dfsInorder: left -> node -> right.
 * On a binary SEARCH tree, this visits values in sorted order — that's
 * the whole reason in-order traversal is useful/famous.
 */
export function dfsInorder(
  root: TreeNode | null,
  out: number[] = [],
): number[] {
  if (root === null) return out;

  dfsInorder(root.left, out); // exhaust left subtree first
  out.push(root.value); // visit node in the middle
  dfsInorder(root.right, out); // then exhaust right subtree

  return out;
}

/**
 * dfsPostorder: left -> right -> node.
 * Visits a node AFTER both children. Useful when a node's answer depends
 * on its children's answers already being computed — e.g. computing
 * subtree height/size, deleting a tree bottom-up, evaluating an
 * expression tree.
 *
 * maxDepth below is the canonical example of *why* post-order matters:
 * you cannot know a node's depth until you know both children's depths.
 */
export function dfsPostorder(
  root: TreeNode | null,
  out: number[] = [],
): number[] {
  if (root === null) return out;

  dfsPostorder(root.left, out);
  dfsPostorder(root.right, out);
  out.push(root.value); // visit node last, once both children are done

  return out;
}

/**
 * maxDepth: height of the tree (number of nodes on the longest root-to-leaf path).
 *
 * Base case: an empty tree has depth 0.
 * Magic line: a node's depth is 1 (itself) + whichever child subtree is
 * taller. This is a post-order shape even though there's no explicit
 * `out` array — the recursive calls (children) must finish before the
 * `+ 1 + Math.max(...)` line can run.
 *
 * @example
 *        1
 *       / \
 *      2   3
 *     /
 *    4
 * maxDepth(root) // 3  (path 1 -> 2 -> 4)
 */
export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0; // base case

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
