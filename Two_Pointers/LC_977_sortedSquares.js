/*
977. Squares of a Sorted Array
https://leetcode.com/problems/squares-of-a-sorted-array/description/

Problem:
  input: array of integers
  output: array of integers

  rules:
  Explicit Requirements:
  1. Given integer array nums is sorted in non-decreasing order.
  2. Must return an array of squares of each number sorted in non-decreasing order.

  Implciti Requirements:
  1. If nums.length is equal to 1, then return nums to the calling function.

Example / Test Cases:

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Data Structures:
input: array of integers
output: array of integers

Algorithm:
Two Pointers Method:

1. Declare and create two pointer indexes, i and j to 0 and nums.length - 1 and k to nums.length - 1.
2. Declare and create an arrayRefVar, res and initialize using new operator and set its length equal to the length of the nums array.
3. Run a while loop as long as index i is less than or equal to index j.
  - If nums[j] * nums[j] is greater than or equal to nums[i] * nums[i]
    - Assign nums[j] * nums[j] value to res[k] and decrement j by 1.
    Else, assign nums[i] * nums[i] value to res[k] and increment i by 1.
  - Decrement the index, k by 1.
4. Return the array, res to the calling function.

Complexity Analysis:
1. Time COmplexity = O(N)
2. Space Complxity = O(1)

*/

// Code with Implementation 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  let i = 0, j = nums.length - 1, k = nums.length - 1;
  let res = new Array(nums.length);

  while (i <= j) {
    if (nums[j] * nums[j] >= nums[i] * nums[i]) {
      res[k] = nums[j] * nums[j];
      j -= 1;
    } else {
      res[k] = nums[i] * nums[i];
      i += 1;
    }

    k -= 1;
  }

  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]

