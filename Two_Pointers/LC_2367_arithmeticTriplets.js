/*
2367. Number of Arithmetic Triplets
https://leetcode.com/problems/number-of-arithmetic-triplets/

You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.
nums[j] = diff + nums[i]
nums[k] = nums[j] + diff => nums[i] + 2 * diff

Example 1:

Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

Example 2:

Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
Explanation:
(0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
(1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

Data Structures:
input: array of integers
output: integer

Algorithm:
0. Declare and create a variable named `count` and initialize to 0.
1. Declare and create a variable named `set` to store unique numbers.
2. Iterate through the nums array to store all the numbers in hashset, set.
3. Iterate through the nums array (from index, i) using for loop.
  3.1 if the set has (nums[i] + diff) AND (nums[i] + 2 * diff):
      3.1.1 Increment the count by 1.
4. Return the value of `count` variable to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N), Due to hashset.

*/

// Code with Implementation 

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  const set = new Set();
  nums.forEach(number => set.add(number));
  // console.log(set);
  nums.forEach(number => {
    if (set.has(number + diff) && set.has(number + 2 * diff)) {
      count += 1;
    }
  });

  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3) === 2); // true
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2) === 2); // true

