/*
88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array/

Problem:
  input: Array of integers and length of the array(integer).
  output: void / undefined data type.

  rules:
  Explicit Requirements:
  1. Given two integer arrays nums1 and nums2.
  2. Sorted in non-decreasing order.
  3. nums2.length === n
  4. nums1.length === m + n
  5. Must Merge nums1 and nums2 into a single array sorted in non-decreasing order.
  6. The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

Example / Test Cases:

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Data Structures:
input: Array of integers and integer representing length of arrays.
output: void data type / undefined data type.

Algorithm for main program:
1. Declare and create pointer indexes, i , j and k and initialize all the pointer indexes to 0.
2. Run a while loop as long as index, i is less than m AND index, j is less than n.
  - If nums1[i] is less than or equal than nums2[j]
    - Assign the value of nums1[k] to nums1[i].
    - Increment the index, i by 1.
  - Else,
    - Assign the value of nums[k] to nums2[j].
    - Increment the index, j by 1.
  - Increment the index, k by 1.
3. Run a while loop as long as index, i is less than m.
  - Assign the value of nums1[k] to nums1[i].
  - Increment the index, i by 1.
  - Increment the index, k by 1.
4. Run a while loop as long as index, j is less than n.
  - Assign the value of nums1[k] to nums2[j].
  - Increment the index, j by 1.
  - INcrement the index, k by 1.

Complexity Analysis - 
1. Time Complexity = O(m + n) 
2. Space Complexity = O(1)

*/

// Code with Implementation

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let i = 0, j = 0;
  let res = [];


  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      res.push(nums1[i]);
      i += 1;
    } else {
      res.push(nums2[j]);
      j += 1;
    }
  }

  // console.log(nums1);

  while (i < m) {
    res.push(nums1[i]);
    i += 1;
  }

  while (j < n) {
    res.push(nums2[j]);
    j += 1;
  }

  for (let k = 0; k < res.length; k += 1) {
    nums1[k] = res[k];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

nums1 = [1]; m = 1; nums2 = []; n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); // [1]

nums1 = [0]; m = 0; nums2 = [1]; n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // [1]
