/*
1346. Check If N and Its Double Exist
https://leetcode.com/problems/check-if-n-and-its-double-exist/

Problem:
  input: Array of integers
  output: Boolean data type (true / false)

  Rules:
  Explicit Requirements:
  1. Check if two indices exist
  - i !== j
  - 0 <= i, j < arr.length
  - arr[i] === 2 * arr[j]

Example / Test Cases:

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

Data Structures:
input: Array of integers
output: Boolean data type

Algorithm:
1. Declare and create an objectRefVar, elementToIndexMap and initialize it to an empty object.
2. Iterate through arr using for loop.
  - if nums[i] is present in elementToIndexMap AND elementToIndexMap[arr[i]] is not equal to i,
  return true.
3. Return false to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N)

*/

// Code with Implementation

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let elementToIndexMap = {};
  arr.forEach((number, index) => elementToIndexMap[number] = index);
  // console.log(elementToIndexMap);
  for (let i = 0; i < arr.length; i += 1) {
    if (((2 * arr[i]) in elementToIndexMap) && elementToIndexMap[2 * arr[i]] !== i) {
      return true;
    }
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3]) === true); // true
console.log(checkIfExist([3, 1, 7, 11]) === false); // true
console.log(checkIfExist([7, 1, 14, 11]) === true); // true