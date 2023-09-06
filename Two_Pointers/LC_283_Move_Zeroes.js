/*
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Problem:
  input: array of integers
  output: void / undefined

  rules:
  Explicit Requirements:
  1. Must move all 0's to the end of it.
  2. Must do the operation in-plce without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Data Structures:
input: array of integers
output: void / undefined data type

Algorithm:
1. Initialize the left and right pointer indices to 0 respectively. 
2. Iterate through the nums array until right pointer index is less than the length of nums array.
    2.1 If the value of nums at right pointer index is not equal to 0, swap the values with the left pointer index
and increment both left and right pointer index. 

Analysis - 
Time Complexity = O(N)
Space Complexity = O(1)

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

*/

var moveZeroes = function (nums) {
  let left = 0, right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
    }

    right += 1;
  }

};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]

nums = [0];
moveZeroes(nums);
console.log(nums); // [0]