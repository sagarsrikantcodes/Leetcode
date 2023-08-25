/*
Problem:
You are tasked with designing an algorithm to encode and decode a list of strings such that the encoded string can be sent over a network and then decoded back to the original list of strings.

input: An array of strings
output: An array of strings

Examples:
Example 1:

Input: ["Hello","World"]
Output: ["Hello","World"]

Example 2:

Input: [""]
Output: [""]

Data Structure:
To encode the list of strings, you can concatenate the strings along with their lengths. To decode, you need to parse this encoded string and extract the lengths and substrings.
input: An array of strings
output: An array of strings

Algorithm:

Encoding Algorithm:

Initialize an empty string encoded to store the encoded string.
Loop through each string s in the input list strs.
Append the length of s as a string, followed by #, and then the string s itself to the encoded string.
Return the encoded string.

Decoding Algorithm:

Initialize an empty array decoded to store the decoded list of strings.
Initialize a variable i to keep track of the current index while parsing the encoded string.
While i is less than the length of the encoded string:
Find the index of the first occurrence of # after index i. Let's call it j.
Parse the substring from index i to index j as an integer, which represents the length of the next string.
Get the substring starting from index j + 1 and of length as the parsed integer. This is the next string.
Append the extracted string to the decoded array.
Update i to j + 1 + length.
Return the decoded array.


*/

// Code with Implementation 

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

var encode = function (strs) {
  let encoded = '';
  for (let s of strs) {
    encoded += s.length + '#' + s;
  }
  return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

var decode = function (s) {
  let decoded = [];
  let i = 0;

  while (i < s.length) {
    const j = s.indexOf('#', i);
    const length = parseInt(s.slice(i, j));
    decoded.push(s.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return decoded;
};


/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */


console.log(encode(["Hello", "World"])); // 5#Hello5#World
console.log(decode(encode(["Hello", "World"]))); // ["Hello", "World"]

console.log(encode([""])); // 0#
console.log(decode(encode([""]))); // ['']

/*

Follow-up:
To handle any possible set of characters, you can encode the strings using a delimiter that is guaranteed not to appear in the original strings. For example, you can use a delimiter like | that is unlikely to be part of the input strings. The rest of the algorithm remains the same.

*/

/*
Complexity Analysis - 

Encoding Algorithm:

Initializing the encoded string: O(1)
Looping through each string in strs and concatenating: O(n), where n is the total length of all strings combined.
Overall Time Complexity for Encoding: O(n)

Space Complexity for Encoding: O(m), where m is the total length of the encoded string (lengths of strings + '#' characters).

Decoding Algorithm:

Initializing the decoded array: O(1)
Looping through the encoded string: O(m), where m is the length of the encoded string.
In each iteration, finding the index of #: O(1)
Extracting the length and substring: O(1)
Appending to the decoded array: O(1)
Overall Time Complexity for Decoding: O(m)

Space Complexity for Decoding: O(n), where n is the total length of all decoded strings combined.

In terms of space complexity, the encoding algorithm requires space for the encoded string, while the decoding algorithm requires space for the array of decoded strings.

In summary:

Encoding Time Complexity: O(n)
Encoding Space Complexity: O(m)
Decoding Time Complexity: O(m)
Decoding Space Complexity: O(n)
Where n represents the total length of all strings combined, and m represents the length of the encoded string.


*/