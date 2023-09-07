/*
922. Sort Array By Parity II
https://leetcode.com/problems/sort-array-by-parity-ii/

Problem:
  input: Array of Integers
  output: Array of Integers

  rules:
  Explicit Requirements:
  1. Half of the integers in nums are odd, and the others half are even.
  2. Must sort the array such that when nums[i] is odd, index i is odd and
  when nums[i] is even, index i is even.
  3. nums.length is even.
  4. Half of the integers in nums are even.

Example / Test Cases:

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:

Input: nums = [2,3]
Output: [2,3]

Data Structures:
input: Array of integers
output: Array of integers

Algorithm:
Two Pointers Method:
1. Declare and create two pointer indexes, i and j to 0 and nums.length - 1.
2. Run a while loop as long as index, i is less than nums.length AND index, j is greater than or equal to 0.
  - if nums[i] is even, increment the index , i by 2.
  - Else if nums[j] is odd, decrement the index, j by 2.
  - Else, Swap the values of nums[i] and nums[j] at index i and j. Increment index i by 2 and Decrement index j by 2.
3. Return the modified nums array to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

// Code with Implementation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let i = 0, j = nums.length - 1;

  while (i < nums.length && j >= 0) {
    if (nums[i] % 2 === 0) {
      i += 2;
    } else if (nums[j] % 2 === 1) {
      j -= 2;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 2;
      j -= 2;
    }
  }

  return nums;
};

// Test cases
console.log(sortArrayByParityII([4, 2, 5, 7])); // [4, 5, 2, 7]
console.log(sortArrayByParityII([2, 3])); // [2, 3]
console.log(sortArrayByParityII([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(sortArrayByParityII([2, 4, 3, 1])); // [2, 3, 4, 1]
console.log(sortArrayByParityII([4, 2, 6, 1, 3, 5])); // [4, 3, 6, 1, 2, 5]
console.log(sortArrayByParityII([3, 2, 3, 2])); // [2, 3, 2, 3]
console.log(sortArrayByParityII([3, 2, 2, 3])); // [2, 3, 2, 3]


