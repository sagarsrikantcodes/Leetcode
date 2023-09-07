/*
26. Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/

Problem:
  input: array of integers
  output: integer

  rules:
  Explicit Requirements:
  1. Must remove the duplicates in-place so that the unique element appears only once.
  2. Must return the number of unique elements in nums array.
  3. nums is sorted in non-decreasing order.


Example / Test cases

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Data Structures:
Array of integers

Algorithm:
Two Pointers Method

1. Since we need to remove duplicates in an array, we initialize the
left and right pointer indices to 1 respectively. 
2. Iterate through the nums array as long as right pointer index is less than the length of nums array. 
    2.1 If the value of nums at right - 1 index is not equal to the value of nums at right index. 
        2.1.1 Replace the value of nums array at left pointer index to the nums array at right pointer index. 
        2.1.2 Increment the left pointer index by 1. 
    2.2 Increment the right pointer index by 1. 
3. Return the value of the left pointer index (i.e, equal to the size, k) onto the main method/calling function. 

Analysis - 
Time Complexity = O(N)
Space Complexity = O(1)

*/

// Code with Implementation 
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let left = 1, right = 1;

  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left += 1;
    }

    right += 1;
  }

  return left;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // 2
console.log(nums); // [1, 2, 2]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // 5
console.log(nums); // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]

