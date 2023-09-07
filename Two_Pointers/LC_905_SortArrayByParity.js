/*
905. Sort Array By Parity
https://leetcode.com/problems/sort-array-by-parity/

Problem:
  input: Array of integers
  output: Array of integers

  rules:
  Explicit Requirements:
  1. Must move all the even integers at the beginning of the array followed by all the odd integers.
  2. Must return an array that satisfies the above requirement.

  Implicit Requirements:
  1. If the length of nums array is 1, return the nums array to the calling function.

Example / Test Cases:

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]

Data Structures:
Array of integers.

Algorithms:
Two Pointers Method:
1. Declare and Create two pointer indexes, left and right and initialize them to 0.

2. Run a while loop as long as index, right is less than nums.length
  - If nums[right] is even, then swap nums[right] with nums[left] and increment the left index.
  - Increment the right index.

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
var sortArrayByParity = function (nums) {
  let left = 0, right = 0;

  while (right < nums.length) {
    if (nums[right] % 2 === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }

    right += 1;
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2, 4, 3, 1]
console.log(sortArrayByParity([0])); // [0]