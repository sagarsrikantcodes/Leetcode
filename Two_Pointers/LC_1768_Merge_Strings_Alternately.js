/*
1768. Merge Strings Alternately
https://leetcode.com/problems/merge-strings-alternately/

Problem:
  input: two strings
  output: string

  rules:
  Explicit Requirements:
  1. Must merge the strings by adding letters in alternating order, starting with word1.
  2. If a string is longer than the other, append the additional letters onto the end of the merged stirng.
  3. Must return the merged string.
  4. word1 and word2 consists of lowercase english letters.

  Implicit Requirements:
  1. Assume there is no empty string in word1 and word2.
  2. Assume the minimum length of word1 and word2 is 1 only.

Example / Test Cases:

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d

Data Structures:
Input: strings
Output: Strings
We can use array of strings during function execution.

Algorithm:
1. Declare and create a string variable named `result` and initialize it to an empty string.
2. Declare and create two pointer indexes, i and j and initialize them to 0.
3. Run a while loop as long as both the indexes are less than the length of two strings, word1 and word2
  3.1 Append the character at index, i from word1 onto the `result` string.
  3.2 Similarly append the character at index, j from word2 onto the `result` string.
  3.3 Increment both the indexes by 1.
4. If the length of word1 is greater than word2
    - Run a while loop as long as index, i is less than the length of word1 string.
      - Append the character at index i from word1 onto the `result` string.
      - Increment the index i by 1.

   Else, if the the length of word2 is greater than word1
    - Run a while loop as long as index, j is less than the length of word2 string.
      - Append the character at index j from word2 onto the `result` string.
      - Increment the index j by 1.
5. Return the value of the `result` string to the calling function.

Complexity Analysis:
1. Time Complexity = O(N + M), where N is the length of word1 string and M is the length of word2 string.
2. Space Complexity = O(1)

*/

// Code with Implementation 

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0, j = 0;

  while (i < word1.length && j < word2.length) {
    let chi = word1.charAt(i);
    result += chi;
    let chj = word2.charAt(j);
    result += chj;
    i += 1;
    j += 1;
  }

  // console.log(`The result string after the first while loop is ${result}`);

  while (i < word1.length) {
    let chi = word1.charAt(i);
    result += chi;
    i += 1;
  }

  while (j < word2.length) {
    let chj = word2.charAt(j);
    result += chj;
    j += 1;
  }

  // console.log(`${result}`);

  return result;
};

// Test cases
console.log(mergeAlternately("abc", "pqr") === "apbqcr"); // true
console.log(mergeAlternately("ab", "pqrs") === "apbqrs"); // true 
console.log(mergeAlternately("abcd", "pq") === "apbqcd"); // true 

