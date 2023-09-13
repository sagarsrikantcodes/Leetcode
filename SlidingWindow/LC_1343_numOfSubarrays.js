/*
1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

Problem:
  input: array of integers, arr and two integers, k and threshold
  output: integer represeting number of subarrays of size k and average greater than or equal to k.

Example / Test Cases:

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

Data Structures:
input: array of integers and integers
output: integer

Algorithm:
0. Declare and Create sum, average, and numOfSubArrays and initialize them to 0.
1. Declare and Create two Pointer Indices, left and right and initialize them to 0.
2. Iterate through the arr using right index from 0 until arr.length
  - If the size of the window (right - left + 1) is greater than k.
    - Reassign the sum by decrementing the sum by arr[left].
    - Increment the left pointer index by 1.
3. Increment the sum by nums[right]
4. Assign the value to average variable by computing the average sum of the subarray.
5. If the average is greater than or equal to threshold AND length of the subarray(right - left + 1) is equal to k.
  - Increment the numOfSubArrays by 1.
6. Return the value of numOfSubArrays to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

// Code with Implementation

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0, average = 0, numOfSubArrays = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right += 1) {
    if (right - left + 1 > k) {
      sum -= arr[left];
      left += 1;
    }

    sum += arr[right];
    average = Math.floor(sum / (right - left + 1));
    if (average >= threshold && (right - left + 1 === k)) {
      numOfSubArrays += 1;
    }
  }

  return numOfSubArrays;
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4;
console.log(numOfSubarrays(arr, k, threshold) === 3); // true
arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3]; k = 3; threshold = 5;
console.log(numOfSubarrays(arr, k, threshold) === 6); // true


