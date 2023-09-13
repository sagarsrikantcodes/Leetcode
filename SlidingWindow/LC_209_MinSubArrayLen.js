/*
PEDAC (Problem, Examples, Data, Algorithm, and Complexity):

1. Problem:
We have an array of positive integers nums and a positive integer target.
We need to find the minimum length of a contiguous subarray in nums whose sum is at least target.
If no such subarray exists, we return 0.

2. Examples:
Let's start with some examples to understand the problem better:

Example 1:

plaintext
Copy code
Input: nums = [2,3,1,2,4,3], target = 7
Output: 2
Explanation: The subarray [4,3] has a sum of 7, which is the minimum length subarray that meets the condition.

Example 2:
Input: nums = [1,4,4], target = 4
Output: 1
Explanation: The subarray [4] has a sum of 4, which is the minimum length subarray that meets the condition.

Example 3:
Input: nums = [1,1,1,1,1,1,1,1], target = 11
Output: 0
Explanation: There is no subarray with a sum of at least 11.

3. Data:
We are given an array of positive integers nums.
We have a positive integer target as input.
We need to return an integer representing the minimum length of the subarray.

Algorithm:
Initialize two pointers, left and right, both starting at the beginning of the array (0).
Initialize a variable sum to keep track of the current sum of elements within the window.
Initialize a variable length to Number.MAX_VALUE (a large value) to store the minimum subarray length found so far.
Start a loop that iterates through the nums array with the right pointer.
Within the loop, add the value at the right pointer to the sum.
Check if sum is greater than or equal to the target:
If it is, update the length by taking the minimum of the current length and the distance between left and right plus one (right - left + 1).
Subtract the value at the left pointer from sum and increment left by one.
Continue this process in the inner while loop until sum is less than the target or the left pointer reaches the end of the array.
Continue this process by incrementing the right pointer in the outer loop.
Once the loop finishes, return length if it is no longer set to Number.MAX_VALUE, indicating that a subarray with a sum at least the target was found. Otherwise, return 0 if no such subarray exists.

Complexity Analysis:

Time Complexity: O(n), where n is the length of the nums array. Both left and right pointers traverse the array once.
Space Complexity: O(1), as the code uses a constant amount of additional space regardless of the input size.

The code efficiently solves the problem with a sliding window approach, and it has a time complexity of O(n), making it efficient for large arrays.

*/

// Code with Implementation 

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0, sum = 0;
  let length = Number.MAX_VALUE;

  for (let right = 0; right < nums.length; right += 1) {
    sum += nums[right];
    while (sum >= target) {
      length = Math.min(length, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return length === Number.MAX_VALUE ? 0 : length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) === 2); // true
console.log(minSubArrayLen(4, [1, 4, 4]) === 1); // true
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]) === 0); // true