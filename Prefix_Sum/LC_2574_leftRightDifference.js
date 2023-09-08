/*
2574. Left and Right Sum Differences
https://leetcode.com/problems/left-and-right-sum-differences/

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

 

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105

Data Structures:
Array of integers

Algorithm:
Prefix Sum Method:
1. Declare and Create two Variables leftSum and rightSum and initialize them to 0.
2. Declare and Create arrayRefVar leftSumArr and rightSumArr and use the new operator to assign their lengths equal to the length of the nums array.
3. Iterate through the nums array both forward and backward using indexes i and j 
  - Reassign the value of leftSum by adding its current value with nums[i].
  - Assign the leftSumArr[i] to the updated value of leftSum.
  - Similarly reassign the value of rightSum by adding its current value with nums[j].
  - Assign the rightSumArr[j] to the updated value of rightSum.
4. Declare and Create an arrayRefVar, answer and using new operator assign its length equal to the lenght of the nums array.
5. Iterate through the answer array
  - Assign the value of answer[i] to the absolute difference between leftSumArr[i] and rightSumArr[i].
6. Return the answer array to the calling function. 

COmplexity Analysis:
1. Time COmplexity = O(2 * N) => O(N)
2. Space COmplexity = O(1)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = 0, rightSum = 0;
  let leftSumArr = new Array(nums.length), rightSumArr = new Array(nums.length);

  for (let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i += 1, j -= 1) {
    leftSum += nums[i];
    leftSumArr[i] = leftSum;
    rightSum += nums[j];
    rightSumArr[j] = rightSum;
  }

  // console.log(leftSumArr);
  // console.log(rightSumArr);

  let answer = new Array(nums.length);

  for (let i = 0; i < answer.length; i += 1) {
    answer[i] = Math.abs(leftSumArr[i] - rightSumArr[i]);
  }

  return answer;
};

console.log(leftRightDifference([10, 4, 8, 3])); // [15, 11, 3, 0]
console.log(leftRightDifference([1])); // [0]