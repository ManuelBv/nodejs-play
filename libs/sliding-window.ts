/**
 * Sliding Window drills — DSA-Interview-Playbook Step 2, pattern 1/10.
 *
 * The pattern: maintain a window [start, end] over an array/string and
 * grow/shrink it based on a condition, instead of recomputing from
 * scratch for every possible window (which is the O(n^2)/O(n*k) instinct
 * this pattern replaces).
 *
 * No hints on which exact technique applies within the pattern (fixed vs
 * variable window) — that's the point. Time yourself against a 5-10 min
 * budget per problem. Implement each function, run `npm run test:watch`,
 * and uncomment its test block in sliding-window.test.ts as you go.
 */

/**
 * maxAverageSubarray
 *
 * Given an array of integers and a window size k, return the maximum
 * average value of any k consecutive elements.
 *
 * @example
 * maxAverageSubarray([1, 12, -5, -6, 50, 3], 4)   // 12.75 ((12-5-6+50)/4)
 */
export function maxAverageSubarray(nums: number[], k: number): number {
  let sumsArray = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  sumsArray.push(sum / k);

  for (let i = 1; i < nums.length - k + 1; i++) {
    const innerSum = (sum - nums[i - 1] + nums[i + k - 1]) / k;
    sumsArray.push(innerSum);
  }

  return Math.max(...sumsArray);
}

/**
 * longestUniqueSubstring
 *
 * Given a string, return the length of the longest substring without
 * repeating characters.
 *
 * @example
 * longestUniqueSubstring("abcabcbb")   // 3 ("abc")
 * longestUniqueSubstring("bbbbb")      // 1 ("b")
 */
export function longestUniqueSubstring(s: string): number {
  throw new Error("Not implemented");
}

/**
 * longestRepeatingCharReplacement
 *
 * Given a string s and an integer k, you can change up to k characters
 * in s to any other character. Return the length of the longest
 * substring containing the same letter after performing at most k
 * changes.
 *
 * @example
 * longestRepeatingCharReplacement("ABAB", 2)    // 4 (replace both B's, or both A's)
 * longestRepeatingCharReplacement("AABABBA", 1) // 4 ("AABA" -> "AAAA", or "ABBA" already 4 with one swap)
 */
export function longestRepeatingCharReplacement(s: string, k: number): number {
  throw new Error("Not implemented");
}

/**
 * maxConsecutiveOnesIII
 *
 * Given a binary array nums and an integer k, return the maximum number
 * of consecutive 1's if you can flip at most k 0's to 1's.
 *
 * @example
 * maxConsecutiveOnesIII([1,1,1,0,0,0,1,1,1,1,0], 2)          // 6
 * maxConsecutiveOnesIII([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) // 10
 */
export function maxConsecutiveOnesIII(nums: number[], k: number): number {
  throw new Error("Not implemented");
}

/**
 * fruitIntoBaskets
 *
 * Given an array `fruits` where fruits[i] is the type of fruit the i-th
 * tree produces, you have exactly 2 baskets, each can hold only one type
 * of fruit (unlimited quantity of that type). Return the maximum number
 * of fruits you can collect picking from a contiguous run of trees.
 * (Equivalent to: longest subarray with at most 2 distinct values.)
 *
 * @example
 * fruitIntoBaskets([1, 2, 1])          // 3
 * fruitIntoBaskets([0, 1, 2, 2])       // 3 ([1,2,2])
 * fruitIntoBaskets([1, 2, 3, 2, 2])    // 4 ([2,3,2,2])
 */
export function fruitIntoBaskets(fruits: number[]): number {
  throw new Error("Not implemented");
}

/**
 * minWindowSubstring
 *
 * Given strings s and t, return the minimum window substring of s such
 * that every character in t (including duplicates) is included in the
 * window. If no such substring exists, return "".
 *
 * @example
 * minWindowSubstring("ADOBECODEBANC", "ABC")   // "BANC"
 * minWindowSubstring("a", "a")                 // "a"
 * minWindowSubstring("a", "aa")                // ""
 */
export function minWindowSubstring(s: string, t: string): string {
  throw new Error("Not implemented");
}

/**
 * slidingWindowMaximum
 *
 * Given an array nums and a window size k, return an array of the
 * maximum value in each window as it slides from the left of the array
 * to the right.
 *
 * @example
 * slidingWindowMaximum([1,3,-1,-3,5,3,6,7], 3)   // [3,3,5,5,6,7]
 * slidingWindowMaximum([1], 1)                   // [1]
 */
export function slidingWindowMaximum(nums: number[], k: number): number[] {
  throw new Error("Not implemented");
}
