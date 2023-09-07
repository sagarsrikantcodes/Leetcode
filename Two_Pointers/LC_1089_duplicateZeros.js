/*
1089. Duplicate Zeros
https://leetcode.com/problems/duplicate-zeros/

Problem:
  input: Array of integers
  output: Array of integers

  rules:
  Explicit Requirements:
  1. Must duplicate each occurrence of zero while shifting the remaining elements to the right.
  2. Must do the modifications to the input array and do not return anything.

  Implicit Requirements:
  1. If the length of the given array is 1, then return the given array.

Example / Test Cases:

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

Data Structures:
input: Array of integers
output: Array of integers

Algorithm:
1 Declare and create an index variable i and initialize it to 0.
2. As long as the index, i is less than the length of the array
  - If the value of arr[i] is equal to 0
    - INsert the element at index i with value 0.
    - Pop the last element of the array.
    - Increment the index, i by 2.
  - Else, increment the index, i by 1.

Complexity Analysis:
1. Time Complexity:
The code uses a while loop that iterates over the elements of the arr array. The loop continues until i is less than the length of arr. This means that in the worst case, the loop will iterate through all elements of the array once.

Inside the loop, there is a conditional if (arr[i] === 0) that checks if the current element is 0. If it is, it inserts a 0 at the same index using arr.splice(i, 0, 0), effectively duplicating the 0, and then removes the last element of the array using arr.pop() to maintain the original length of the array. This operation involves shifting all elements to the right of i one position to the right.

If the current element is not 0, it increments i by 1.

In summary, the time complexity of this code is O(n), where 'n' is the length of the input array arr. This is because, in the worst case, the code performs a constant amount of work for each element in the array.

2. Space Complexity:

The space complexity of this code is O(1), which means it uses a constant amount of extra space regardless of the size of the input array arr. This is because it modifies the input array in-place and does not use any additional data structures that depend on the size of the input.

In conclusion, the code has a time complexity of O(n) and a space complexity of O(1).

*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 2;
    } else {
      i += 1;
    }
  }

};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr); // [1,0,0,2,3,0,0,4]

arr = [1, 2, 3];
duplicateZeros(arr);
console.log(arr); // [1, 2, 3]

