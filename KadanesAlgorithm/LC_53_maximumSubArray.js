/*
53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

Problem:
  input: integer array, nums
  output: integer (return the sum of the subarray with the largest sum).

  rules:
  Explicit Requirements:
  1. Given an integer array, nums.
  2. Need to find the subarray with the largest sum and must return the largest sum.

Example / Test Cases:
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Data Structures: 
input: Integer array
output: Integer

Algorithm:
1. Declare and Create a variable named maxSUm and initialize it to the first element (0th index of nums array).
2. Declare and Create a variable named currSum and initialize it to 0.
3. Iterate through the nums array.
  - Reassign the currSum to the maximum value between the current value of currSum and 0. (We are ignoring all the negative values in currSum).
  - Reassign the value of currSum to currSum plus nums[i].
  - Reassign the value of maxSUm to maximum value between maxSum and currSum.
4. Return the value of maxSum to the calling function.

COmplexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = 0;

  nums.forEach(number => {
    currSum = Math.max(currSum, 0);
    currSum += number;
    maxSum = Math.max(maxSum, currSum);
  });

  return maxSum;
};

// Test Cases 
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSubArray([1]) === 1); // true
console.log(maxSubArray([5, 4, -1, 7, 8]) === 23); // true
console.log(maxSubArray([4, -1, 2, -7, 3, 4]) === 7); // true