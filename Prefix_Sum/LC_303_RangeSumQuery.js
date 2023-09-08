/*
303. Range Sum Query - Immutable
https://leetcode.com/problems/range-sum-query-immutable/

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.

Data Structures:
Array of integers

Algorithm:







*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {

  this.nums = nums;

};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  let prefixSumArr = [];
  let prefixSum = 0;

  for (let index = 0; index < this.nums.length; index += 1) {
    prefixSum += this.nums[index];
    prefixSumArr.push(prefixSum);
  }

  if (left > 0) {
    return prefixSumArr[right] - prefixSumArr[left - 1];

  } else {
    return prefixSumArr[right];
  }

  // return prefixSum;
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/


let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
var param_1 = obj.sumRange(0, 2);
console.log(param_1); // 1

var param_1 = obj.sumRange(2, 5);
console.log(param_1); // -1

var param_1 = obj.sumRange(0, 5);
console.log(param_1); // -3
