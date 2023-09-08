/*
724. Find Pivot Index
https://leetcode.com/problems/find-pivot-index/

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Algorithm - 
Optimized Method using prefixsum method - 
1. Declare and Create the variables leftSum and rightSum and initialize them to 0.
2. Declare and Create an arrayRefVar leftSumArr and rightSumArr and initialize them to an empty array.
3. Iterate through the nums array both forward as well as backward using indexes i and j.
  3.1 Reassign the value of variable leftSum to its current value plus nums[i].
  3.2 Assign the updated value of leftSum to the leftSumArr[i].
  3.3 Reassign the value of variable rightSum to its current value plus nums[j].
  3.4 Assign the updated value of rightSum to the rightSumArr[i].
4. Iterate through the leftSumArr or rightSumArr.
  - If the value of leftSumArr at index is equal to rightSumArr at index.
    - Return the index to the calling function.
4. Return -1 to the calling function if no pivot index found.

Analysis - 
Time Complexity = O(N)
Space Complexity = O(1)

*/

var pivotIndex = function (nums) {
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

  for (let index = 0; index < nums.length; index += 1) {
    if (leftSumArr[index] === rightSumArr[index]) {
      return index;
    }
  }

  return -1;
};

// Test Cases 
console.log(pivotIndex([1, 7, 3, 6, 5, 6]) === 3); // true
console.log(pivotIndex([1, 2, 3]) === -1); // true
console.log(pivotIndex([2, 1, -1]) === 0); // true

