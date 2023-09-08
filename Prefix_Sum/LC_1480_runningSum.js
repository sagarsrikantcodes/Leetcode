/*
1480. Running Sum of 1d Array
https://leetcode.com/problems/running-sum-of-1d-array/

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

Data Structures:
input: Array of Integers
output: Array of Integers

Algorithm:
Prefix Sum Method:
1. Declare and Create an arrayReferenceVariable named runningSumArray and initialize it to an empty array.
2. Declare and Create a variable named prefixSum and initialize it to 0.
3. Iterate through nums array.
  3.1 Reassign the value of prefixSum by adding its current value with the current element of nums array at index, i.
  3.2 Append the prefixSum to an array, runningSumArray.
4. Return an arrayRefVar, runningSumArray to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let runningSumArray = [];
  let prefixSum = 0;
  nums.forEach(number => {
    prefixSum += number;
    runningSumArray.push(prefixSum);
  });

  return runningSumArray;
};

console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]

