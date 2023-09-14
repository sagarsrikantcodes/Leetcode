/*
1838. Frequency of the Most Frequent Element
https://leetcode.com/problems/frequency-of-the-most-frequent-element/

Problem:
  input: Array of integers, nums and Integer, k
  output: Integer to represent the frequency of the most frequent element. 

  rules:
  Explicit Requirements:
  1. For each operation, we can choose an index of nums and increment the element at index by 1.
  i.e, number of operations in an index must be less than or equal to k.

  2. Must return the maximum possible frequency of an element after performing at most k operations.

  Implicit Requirements:
  1. If the length of the nums array is 1, return 1 to the calling function.

Example / Test Cases:

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times (<= k) and the second element two times (<= k) to make nums = [4,4,4].
4 has a frequency of 3.

Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

Example 3:

Input: nums = [3,9,6], k = 2
Output: 1

Data Structures:
input: Array of integers, nums and Integer, k
output: Integer representing the frequency of the most frequent element. 

The goal of this function is to find the maximum length of a subarray in nums such that you can make all the elements in the subarray equal by performing at most k operations, where each operation allows you to increment an element by 1.

Algorithm:
Sliding Window Technique with Variable Size:
1. If the length of the nums array is 1, return 1 because a single-element array can always be made into a subarray of length 1 with at most 0 operations.

2. Sort the nums array in ascending order. Sorting is essential for optimizing the algorithm.

3. Initialize variables: maxLength to keep track of the maximum length of a valid subarray, left and right pointers to define the current subarray, and sum to store the sum of elements in the current subarray.

4. Use a sliding window approach with the left and right pointers to find the maximum length of a subarray that can be made equal by performing at most k operations.

5. While moving the right pointer, update the sum by adding the element at nums[right] to it.
  - If the product of the element at nums[right] and the length of the subarray (right - left + 1) is greater than the current sum + k, it means that the subarray cannot be made equal with at most k operations. In this case, subtract the element at nums[left] from the sum and move the left pointer to the right until the condition is satisfied.

  - Keep track of the maximum length of valid subarrays in the maxLength variable as you iterate through the array.

6. Finally, return maxLength, which represents the maximum length of a subarray that can be made equal with at most k operations.

Complexity Analysis:
1. Time Complexity: The most time-consuming operation in this algorithm is sorting the nums array, which has a time complexity of O(n log n), where n is the length of the nums array. The sliding window approach afterward takes O(n) time, so the overall time complexity is O(n log n).

2. Space Complexity: The algorithm uses a constant amount of extra space for variables, so the space complexity is O(1).

In summary, the code efficiently finds the maximum length of a subarray that can be made equal with at most k operations using a sliding window approach after sorting the input array.


*/

// Code for Optimized Method
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  if (nums.length === 1) {
    return 1;
  }

  nums.sort((a, b) => a - b);

  let maxLength = 0;
  let left = 0, right = 0, sum = 0;

  while (right < nums.length) {
    sum += nums[right];
    while (nums[right] * (right - left + 1) > sum + k) {
      sum -= nums[left];
      left += 1;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right += 1;
  }

  return maxLength;
};

// Test Cases
console.log(maxFrequency([1, 2, 4], 5) === 3); // true
console.log(maxFrequency([1, 4, 8, 13], 5) === 2); // true
console.log(maxFrequency([3, 9, 6], 2) === 1); // true
console.log(maxFrequency([9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902, 9975, 9990, 9922, 9990, 9994, 9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945, 9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907, 9913, 9916, 9993, 9930, 9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904, 9928, 9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983, 9973, 9917, 9995, 9973, 9977, 9947, 9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946, 9966], 3056) === 73); // true