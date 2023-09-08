/*
1588. Sum of All Odd Length Subarrays
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.



Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66


Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000


Follow up:

Could you solve this problem in O(n) time complexity?

Data Structures: Array of integers

Algorithm:
Brute Force Method:
1. Declare and create an arrayOfSubarrays and assign it to the return value of the invoked function to get the arrayOfSubarrays.
2. Declare and create an arrayOfOddLengthSubarrays and assign it to the return value of the filter() method for odd lengths of subarrays.
3. Declare and create an arrayOfSumOfSubarrays and assign it to the transformed version of arrayOfOddLengthSubarrays.
4. Return the cumulative sum of arrayOfSumOfSubarrays using reduce() method to the calling function.

Algorithm to generate array of subarrays:
0. Declare and create an arrayOfSubarrays and initialize it to an empty array.
1. Iterate through the nums array in the outer loop with index, i from 0 until nums.length
  1.1 Iterate through the nums array in the inner loop with index, j from i + 1 until nums.length + 1
    - Append the portion of the array from index, i until index, j to the arrayofSubarrays.
2. Return the arrayOfSubarrays to the calling function.

Complexity Analysis:
1. Time Complexity = O(N ^ 2), Due to function invocation for generating subarrays.
2. Space Complexity = O(N)

*/

// Code with Implementation

/**
 * @param {number[]} arr
 * @return {number}
 */

function getArrayOfSubarrays(arr) {
  let arrayOfSubarrays = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length + 1; j += 1) {
      let subArr = arr.slice(i, j);
      arrayOfSubarrays.push(subArr);
    }
  }

  return arrayOfSubarrays;
}


var sumOddLengthSubarrays = function (arr) {
  let arrayOfSubarrays = getArrayOfSubarrays(arr);
  let arrayOfOddLengthSubarrays = arrayOfSubarrays.filter(subArr => subArr.length % 2 === 1);
  let arrayOfSumOfSubarrays = arrayOfOddLengthSubarrays.map(subArr => subArr.reduce((acc, ele) => acc + ele, 0));
  return arrayOfSumOfSubarrays.reduce((acc, ele) => acc + ele, 0);

};


console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]) === 58); // true 
console.log(sumOddLengthSubarrays([1, 2]) === 3); // true
console.log(sumOddLengthSubarrays([10, 11, 12]) === 66); // true