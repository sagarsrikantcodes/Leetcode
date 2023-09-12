/*
978. Longest Turbulent Subarray
https://leetcode.com/problems/longest-turbulent-subarray/

Problem:
  input: integer array arr
  output: integer representing the length of a maximum size turbulent subarray of arr.

  rules:
  Explicit Requirements:
  1. A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

  A subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

  For i <= k < j:
    arr[k] > arr[k + 1] when k is odd, and
    arr[k] < arr[k + 1] when k is even.
  Or, for i <= k < j:
    arr[k] > arr[k + 1] when k is even, and
    arr[k] < arr[k + 1] when k is odd.


  Implicit Requirements:
  1. If the length of the array is 1, return 1.

Example / Test Cases:

Example 1:

Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
Example 2:

Input: arr = [4,8,12,16]
Output: 2
Example 3:

Input: arr = [100]
Output: 1

Data Structures:
Array of integers

Algorithm:
Modified Version of Kadane's Algorithm:
0. Declare and create variables named currSize, maxSize1, maxSize2 and initialize them to 0, 1, 1 respectively.
Edge Case - If the length of arr is 1, return 1.
1. Iterate through the given array, arr.
  If ((k is odd) AND (arr[k] > arr[k + 1])) OR ((k is even) AND (arr[k] < arr[k + 1])))
    - Increment the currSize by 1.
  Else, Reassign the currSize to 1.
  Reassign the maxSize1 to the max value between maxSize1 and currSize.
2. Iterate through the given array, arr.
  if ((k is even) AND (arr[k] > arr[k + 1]) OR ((k is odd) AND (arr[k] < arr[k + 1])))
    - Increment the currSize by 1.
  Else, Reassign the currSize to 1.
  Reassign the maxSize2 to the max value between maxSize2 and currSize.

2. Return the max value between maxSize1 and maxSize2 to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

// Code with Implementation 

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let currSize1 = 1, maxSize1 = 1, maxSize2 = 1, currSize2 = 1;

  if (arr.length === 1) {
    return 1;
  }

  for (let k = 0; k < arr.length - 1; k += 1) {
    if (((k % 2 === 1) && (arr[k] > arr[k + 1])) || ((k % 2 === 0) && (arr[k] < arr[k + 1]))) {
      currSize1 += 1;
    } else {
      currSize1 = 1;
    }

    if (((k % 2 === 1) && (arr[k] < arr[k + 1])) || ((k % 2 === 0) && (arr[k] > arr[k + 1]))) {
      currSize2 += 1;
    } else {
      currSize2 = 1;
    }

    maxSize1 = Math.max(maxSize1, currSize1);
    maxSize2 = Math.max(maxSize2, currSize2);
  }

  return Math.max(maxSize1, maxSize2);
};

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]) === 5); // true
console.log(maxTurbulenceSize([4, 8, 12, 16]) === 2); // true
console.log(maxTurbulenceSize([100]) === 1); // true