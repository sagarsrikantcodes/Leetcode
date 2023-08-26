/*
Problem -
input:- Given an array nums with n objects colored red, white, or blue
output:- void / undefined do not return anything.Sort the nums array in place.
Mutate the nums array.

rules:
Explicit Requirements -
1. Sort the array in-place such that the objects of the same color are adjacent to each other with the color order red, white and blue.
2. Use integers 0, 1 and 2 to represent the colors red, white and blue.
3. Must solve the problem without using the library's sort function.

Implicit Requirements-
1. If nums.length is equal to 1, return nums.

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

Example/Test Cases -

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

Data Structures:- An array of integers

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

The idea of solution is to move curr pointer along the array, if nums[curr] = 0 - swap it with nums[p0], if nums[curr] = 2 - swap it with nums[p2].

Algorithm

Initialise the rightmost boundary of zeros : p0 = 0. During the algorithm execution nums[idx < p0] = 0.

Initialise the leftmost boundary of twos : p2 = n - 1. During the algorithm execution nums[idx > p2] = 2.

Initialise the index of current element to consider : curr = 0.

While curr <= p2 :

If nums[curr] = 0 : swap currth and p0th elements and move both pointers to the right.

If nums[curr] = 2 : swap currth and p2th elements. Move pointer p2 to the left.

If nums[curr] = 1 : move pointer curr to the right.

Implementation

Complexity Analysis -
1. Time Complexity = O(N)
2. Space Complexity = O(1)


*/

// Code with Implementation
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let curr = 0;
  let p0 = 0;
  let n = nums.length;
  let p2 = n - 1;

  while (curr <= p2) {
    if (nums[curr] === 0) {
      [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
      p0 += 1;
      curr += 1;
    } else if (nums[curr] === 2) {
      [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
      p2 -= 1;
    } else {
      curr += 1;
    }
  }
};

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // [0, 0, 1, 1, 2, 2]

nums = [2, 0, 1];
sortColors(nums);
console.log(nums); // [0, 1, 2]

