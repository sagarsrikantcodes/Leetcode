/*
344. Reverse String
https://leetcode.com/problems/reverse-string/

Problem:
  input: array of strings
  output: array of strings

  rules:
  Explicit Requirements:
  1. Must the input array in-place with O(1) space complexity.

  Implicit Requirements:
  1. If length of the array is 1, return the given array to the calling function.

Exmaple / Test Cases:

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Data Structures:
input: array of strings
output: array of strings

Algorithm:
Two Pointers Method -
1. Declare and create two pointer indexes, i and j and initialize them to 0 and s.length - 1 respectively.
2. Run a while loop as long as index, i is less than or equal to index, j.
  - Swap the characters at index i and j by invoking the function.
  - Increment the index, i by 1.
  - Decrement the index, j by 1.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

// Code with Implementation

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function swap(s, low, high) {
  [s[low], s[high]] = [s[high], s[low]];
}

var reverseString = function (s) {
  let i = 0, j = s.length - 1;

  while (i <= j) {
    swap(s, i, j);
    i += 1;
    j -= 1;
  }
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]

s = ["H", "a", "n", "n", "a", "h"];
reverseString(s);
console.log(s); // ["h","a","n","n","a","H"]



