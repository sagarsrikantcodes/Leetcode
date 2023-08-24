/*
Problem -
  input:- An array of integers, nums
  output:- An array of integers sorted in ascending order.

  Rules:-
    Explicit Requirements -
    1. Must solve the problem without using any built-in functions in O(nlogn) time complexity and smallest space complexity possible.
    2. Constraints -
      -   1 <= nums.length <= 50000
      -   -50000 <= nums[i] <= 50000
    3. Must mutate the given input array.

    Implicit Requirements -
    1. If the length of the array is 1, then return the array to the calling function.

Example / Test Cases -
Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Data Structures - An array of integers.

Algorithm -
Sort Array Algorithm (Main Program)
1. Return the value from the invoked function, mergeSort.

Merge Sort Algorithm with nums input -
// Base case condition
1. Check if the length of the nums array is equal to 1, If it is return the nums array to the calling function.
// Recursive condition
1. If the length of the nums array is not equal to 1, compute the mid index by dividing the length of the nums array by 2.
2. Declare and create a variable, leftArr and assign it to the return value of the invoked function mergeSort by passing it the portion of the nums array from
index 0 until mid respectively. (Continue calling the mergeSort function until the length of the nums array becomes equal to 1).
3. Declare and create a variable, rightArr and assign it to the return value of the invoked function mergeSort by passing it the portion of the nums array from
index mid until the length of the array respectively. (Continue calling the mergeSort function until the length of the nums array becomes equal to 1).
4. Return the value of the invoked function merge by passing leftArr and rightArr arguments respectively.


Merge Algorithm with leftArr and rightArr function parameters -
1. Check if the length of the leftArr array is equal to 0, If it is equal to 0 return the rightArr respectively.
2. Similarly check if the length of the rightArr array is equal to 0, If it is equal to 0 return the leftArr respectively.
3. Declare and create resultArr with its length equal to the sum of the lengths of leftArr and rightArr respectively.
4. Initialize the indices for resultArr, leftArr and rightArr to 0.
(k for resultArr, i for leftArr and j for rightArr).
5. As long as the indices , i AND j both are less than lengths of leftArr and rightArr.
  - if the value of the leftArr at index, i is less than or equal to value of rightArr at index, j
    - Equate the value of resultArr at index, k to the value of the leftArr at index, i.
    - Increment index, i by 1
  - Else,
    - Equalte the value of resultArr at index, k to the value of the rightArr at index, j.
    - Increment index, j by 1.
  - Increment the index, k by 1.

6. Continue iterating to check if index, i is still less than the length of the leftArr.
  - If it is, equate the value of resultArr at index, k to the value of leftArr at index, i.
  - Increment both the indices, i and k by 1.
7. Continue iterating to check if index, j is still less than the length of the rightArr.
  - If it is, equate the value of resultArr at index, k to the value of rightArr at index, j.
  - Increment both the indices, j and k by 1.

8. Return the resultArr to the calling function.

Complexity Analysis  -
1. Time Complexity = O(NlogN) where n is the length of the given array.
2. Space Complexity = O(N), Due to resultArr in merge algorithm.

*/

// Code with implementation 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(leftArr, rightArr) {

  if (leftArr.length === 0) {
    return rightArr;
  }

  if (rightArr.length === 0) {
    return leftArr;
  }

  let resultArr = new Array(leftArr.length + rightArr.length);
  let k = 0, i = 0, j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      resultArr[k] = leftArr[i];
      i += 1;
    } else {
      resultArr[k] = rightArr[j];
      j += 1;
    }
    k += 1;
  }

  while (i < leftArr.length) {
    resultArr[k] = leftArr[i];
    i += 1;
    k += 1;
  }

  while (j < rightArr.length) {
    resultArr[k] = rightArr[j];
    j += 1;
    k += 1;
  }

  return resultArr;
}

function mergeSort(nums) {
  if (nums.length !== 1) {
    let mid = Math.floor(nums.length / 2);
    let leftArr = mergeSort(nums.slice(0, mid));
    let rightArr = mergeSort(nums.slice(mid));
    return merge(leftArr, rightArr);
  }

  return nums;
}

var sortArray = function (nums) {
  return mergeSort(nums);
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]





