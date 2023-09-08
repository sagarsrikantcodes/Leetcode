/*
1413. Minimum Value to Get Positive Step by Step Sum
https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.



Example 1:

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
Example 2:

Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive.
Example 3:

Input: nums = [1,-2,-3]
Output: 5


Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100

Data Structures:
input: Array of integers
output: Integer

Algorithm:
1. Declare and Create an arrayRefVar named prefixSumArr and initialize it to an empty array.
2. Declare and Create a variable named prefixSum and initialize it to 0.
3. Iterate through the nums array.
  3.1 Reassign prefixSum to its current value plus nums[i].
  3.2 Append the updated value of prefixSum to the prefixSumArr.
4. If every number in prefixSumArr is positive, return 1 to the calling function.
5. Return the aboslute difference between 1 and minimum value of prefixSumArr to the calling function.

Complexity Analysis:
1. Time Complexity = O(2 * N) => O(N)
2. Space Complexity = O(N), Due to PrefixSumArr.

*/

// Code with Implementation

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let prefixSumArr = [];
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    prefixSum += nums[i];
    prefixSumArr.push(prefixSum);
  }

  console.log(prefixSumArr);

  if (prefixSumArr.every(number => number > 0)) {
    return 1;
  }

  return 1 - Math.min(...prefixSumArr);
};

console.log(minStartValue([-3, 2, -3, 4, 2]) === 5); // true
console.log(minStartValue([1, 2]) === 1); // true
console.log(minStartValue([1, -2, -3]) === 5); // true
console.log(minStartValue([2, 3, 5, -5, -1]) === 1); // true



