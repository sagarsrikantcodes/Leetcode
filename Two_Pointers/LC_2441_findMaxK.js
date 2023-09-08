/*
2441. Largest Positive Integer That Exists With Its Negative
https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

 

Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.
Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
 

Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
nums[i] != 0

Data Structures:
input: Array of integers
output: integer

Algorithm:
1. Declare and Create a hashset named `set` and initialize it with an empty set.
2. Iterate through the nums array and continue adding the numbers to the set.
3. Declare and Create an arrRefVar, res and initialize it to an empty array. 
4. Iterate through the nums array. 
    - If the number is greater than 0 and its negative value is present in set. Push the number to the res array.
5. Return the maximum number from the res array. 

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set();

  nums.forEach(number => set.add(number));
  // console.log(set);
  let res = [];
  nums.forEach(number => {
    if (number > 0 && set.has(-1 * number)) {
      res.push(number);
    }
  });

  return res.length === 0 ? -1 : Math.max(...res);
};

console.log(findMaxK([-1, 2, -3, 3]) === 3); // true
console.log(findMaxK([-1, 10, 6, 7, -7, 1]) === 7); // true
console.log(findMaxK([-10, 8, 6, 7, -2, -3]) === -1); // true