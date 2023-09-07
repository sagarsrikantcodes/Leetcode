/*
821. Shortest Distance to a Character
https://leetcode.com/problems/shortest-distance-to-a-character/description/

Problem:
    input: string 
    output: array of integers

    rules:
    Explicit Requirements:
    1. Must return array of integers such that answer.length === s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

    2. The distance between two indices i and j is abs(i - j).
    3. It is guaranteed that c occurs at least once in s.



Example / Test cases:

Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]

Data Structures:
Input: string
Output: Array of integers

Algorithm:
0. Declare and Create an arrayRefVar, indicesOfChar and initialize it to empty array.
1. Declare and Create an arrayRefVar, answer and initialize it to an empty array.
1. Iterate through the string, s from index, i. 
  - If the character at index, `i` is equal to `c`
      - Push the index, i to the array indicesOfChar.
2. Iterate through the string, s using index, i. 
  - Declare and create an array, arrOfDIff and initialize it to an empty array.
    - Iterate through the array, indicesOfChar using index, j.
      - Compute the absolute difference between i and j indexes and append the abs diff to the arrOfDiff.
  - Compute the minimum value from arrOfDiff and append the min value to the answer array.

3. Return an arrayRefVar, answer to the calling function.

Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(N)

*/

var shortestToChar = function (s, c) {
  let indicesOfChar = [];
  let answer = [];

  for (let i = 0; i < s.length; i += 1) {
    let char = s.charAt(i);
    if (char === c) {
      indicesOfChar.push(i);
    }
  }

  // console.log(indicesOfChar);

  for (let i = 0; i < s.length; i += 1) {
    let arrOfDifferences = [];
    for (let j = 0; j < indicesOfChar.length; j += 1) {
      arrOfDifferences.push(Math.abs(i - indicesOfChar[j]));
    }
    // console.log(arrOfDifferences);
    answer.push(Math.min(...arrOfDifferences));
  }

  return answer;
};

console.log(shortestToChar('loveleetcode', 'e')); // [3,2,1,0,1,0,0,1,2,2,1,0]

console.log(shortestToChar("aaab", "b")); // [3, 2, 1, 0]