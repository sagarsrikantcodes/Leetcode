/*
1099. Two Sum Less Than K
https://leetcode.com/problems/two-sum-less-than-k/

Problem:
  input: array of integers, nums and integer, k
  output: integer

  rules:
  Explicit Requirements:
  1. Must return maximum sum with the following conditions:
    i < j
    nums[i] + nums[j] = sum and sum < k
  2. If no i, j exists satisfying the above condition, return -1.

Example / Test Cases:

Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.

Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.

Data Structures:
input: array of integers, nums and integer, k
output: integer

Algorithm:
Brute Force Algorithm:
0. Declare and create an arrayRefVar, arrOfSum and initialize it to an empty array.
1. Iterate through the nums array using for loop (index i from 0 until nums.length)
  1.1 Iterate through the nums array using for loop (index j from i + 1 until nums.length)
      - If nums[i] + nums[j] is less than k.
        - Push the value `nums[i] + nums[j]` to the array, `arrOfSum`.

2 If the length of arrOfSum is equal to 0, then return -1.
  Else, return the maximum value of the array, `arrOfSum`.

Complexity Anlysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(N)

*/

// Code with Implementation

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
var twoSumLessThanK = function (nums, k) {
  let arrOfSum = [];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] < k) {
        arrOfSum.push(nums[i] + nums[j]);
      }
    }
  }

  if (arrOfSum.length === 0) {
    return -1;
  }

  return Math.max(...arrOfSum);
};
*/

/*
Algorithm:
Two Pointers Method:
1. Declare and create two pointer indexes, i and j to 0 and nums.length - 1.
2. Declare and create a variable named closestSum and initialize it to Number.MIN_VALUE.
3. Sort the nums array in non-descending order.
4. Run a while loop as long as index, i is less than index, j.
  - Declare and Create a variable named sum and assign it to value nums[i] + nums[j].
  - If sum is equal to k - 1, then assign closestSum to k - 1 and break out of while loop.
  - If the sum is greater than k - 1 AND sum is less than k.
    - Reassign the closestSum to max value of closestSum and sum.
  - If the sum is greater than k, then decrement the index j by 1 else, increment the index i by 1.
5. Return the closestSum to the calling function.

COmplexity Analysis
1. Time COmplexity = O(nlogn) + o(n) => O(N logN)
2. Space COmplexity = O(1)

*/

var twoSumLessThanK = function (nums, k) {
  let i = 0, j = nums.length - 1;
  let closestSum = -1;
  nums.sort((a, b) => a - b);

  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum === k - 1) {
      closestSum = sum;
      break;
    }

    if (sum > closestSum && sum < k) {
      closestSum = sum;
    }

    if (sum >= k) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return closestSum;
};


console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)); // 58
console.log(twoSumLessThanK([10, 20, 30], 15)); // -1
console.log(twoSumLessThanK([1, 2, 4, 5], 6)); // 5