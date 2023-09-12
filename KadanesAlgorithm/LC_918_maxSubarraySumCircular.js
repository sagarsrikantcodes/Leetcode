/*
918. Maximum Sum Circular Subarray
https://leetcode.com/problems/maximum-sum-circular-subarray/description/

Problem:
  input: Integer array nums
  output: Integer representing a maximum possible sum of a non-empty subarray of nums.

  rules:
  Explicit Requirements:
  1. Circular array: End of the array connects to the beginning of the array,
  Next element of nums[i] is nums[(i + 1) % n]
  Previous element of nums[i] is nums[(i - 1 + n) % n]

  Example / Test Cases:

  Example 1:

Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.

Example 2:

Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

Example 3:

Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.


Data Structures:
input: Array of intgers
output: integer

Algorithm:
Modified Version of Kadane's Algorithm:
1. Declare and Create variables named currMax and currMin initialize it to 0.
2. Declare and Create variables named globalMax and globalMIn initialize it to nums[0].
3. Declare and Create variable named total and initialize it to compute the  cumulative sum of the elements of the given array using reduce() method.
4. Iterate through the given nums array.
  - Reassign the currMax to the maximum value between currMax + nums[i] and nums[i].
  - Reassign the currMin to the minimum value between currMin + nums[i] and nums[i].
  - Reassign the globalMax to the maximum value between globalMax and currMax.
  - Reassign the globalMin to the minimum value between globalMin and currMin.
5. If globalMax is greater than 0, return the maximum value between globalMax and total - globalMin.
Else, Return the globalMax value to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

// Code with Implementation 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let currMax = 0, currMin = 0;
  let globalMax = nums[0], globalMin = nums[0];
  let cumulativeSum = nums.reduce((acc, ele) => acc + ele, 0);

  nums.forEach(number => {
    currMax = Math.max(currMax + number, number);
    currMin = Math.min(currMin + number, number);
    globalMax = Math.max(globalMax, currMax);
    globalMin = Math.min(globalMin, currMin);
  });

  return (globalMax > 0) ? Math.max(cumulativeSum - globalMin, globalMax) : globalMax;
};

// Test Cases 
console.log(maxSubarraySumCircular([1, -2, 3, -2]) === 3); // true
console.log(maxSubarraySumCircular([5, -3, 5]) === 10); // true
console.log(maxSubarraySumCircular([-3, -2, -3]) === -2); // true
