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
