/*
942. DI String Match
https://leetcode.com/problems/di-string-match/

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.


Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]


Constraints:

1 <= s.length <= 105
s[i] is either 'I' or 'D'.

Problem:
  input: string, s
  output: Array of integers

  rules:
  Explicit Requirements:
  1. Permutation perm of n + 1 integers is represented in the range [0, n]. n is the length of the string, s.
  - s[i] === 'I' if perm[i] < perm[i + 1]
  - s[i] === 'D' if perm[i] > perm[i + 1]
  2. Need to reconstruct the perm array. If there are multiple valid permutations return any of them.

  Implicit Requirements:
  1. perm[i] !== perm[i + 1] Or perm[i] !== perm[i - 1]

Example / Test Cases:

Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:

Input: s = "III"
Output: [0,1,2,3]

Example 3:

Input: s = "DDI"
Output: [3,2,0,1]

Data Structures:
input: string
output: Array of integers

Algorithm:
Two Pointer Method:
0. Declare and create a variable named `n` and assign it to the length of the string, s.
1. Declare and create a variable named countI and countD and initialize them to 0 and n.
2. Declare and create an arrayRefVar, perm and use new operator with the length n + 1.
3. Iterate through the given string, s using for loop
  - If index, i is not equal to s.length - 1
      - If s[i] is equal to 'I', then assign the value of perm[i] to countI and increment the countI by 1.
      - If s[i] is equal to 'D', then assign the value of perm[i] to countD and decrement the countD by 1.
  - Else,
    - If s[i] is equal to 'I', then assign the value of perm[i] to countI and assign the value of perm[i + 1] to countI + 1.
    - If s[i] is equal to 'D', then assign the value of perm[i] to countD and assign the value of perm[i + 1] to countD - 1.
4. Return the value of perm to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)


*/

// Code with Implementation

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let n = s.length;
  let countI = 0, countD = n;
  let perm = new Array(n + 1);

  for (let i = 0; i < s.length; i += 1) {

    if (i !== s.length - 1) {
      if (s[i] === 'I') {
        perm[i] = countI;
        countI += 1;
      } else {
        perm[i] = countD;
        countD -= 1;
      }
    } else {
      if (s[i] === 'I') {
        perm[i] = countI;
        perm[i + 1] = countI + 1;
      } else {
        perm[i] = countD;
        perm[i + 1] = countD - 1;
      }
    }
  }

  return perm;
};

console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0, 1, 2, 3]
console.log(diStringMatch("DDI")); // [3, 2, 0, 1]
console.log(diStringMatch("I")); // [0, 1]
console.log(diStringMatch("D")); // [1, 0]

