/*
Problem -
input: an array of strings, strs
output: string

rules:
  - Explicit Requirements :-
   1. Must return the longest common prefix string amongst an array of strings.
   2. If there is no common prefix, must return an empty string "".
   3. Constraints -
      -    1 <= strs.length <= 200
      -    0 <= strs[i].length <= 200
      -    strs[i] consists of only lowercase English letters.
  - Implicit Requirements :-
    1. The length of array, strs is never equal to zero.

Example/Test Cases -

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Data Structures:-
input - An array of strings
output - string

Algorithm -
1. Initialize the output string, res to an empty string.
2. Declare and create a string variable, strElement and assign it to the value of
the first element of array, strs.
3. Iterate through the string, strElement
    3.1 Capture the character, ch at index i.
    3.2 Iterate from second element of array, strs
        3.2.1 If the character, ch is not equal to character of the remaining array string elements, return res.
    3.3 Add the character, ch onto the output string, res.
4. Return the output string, res onto the main method/calling function.

Analysis -
Time Complexity = O(N * M), N is the average length of the string elements, and M is length of the array of strings.
Space Complexity = O(1), since we are not using additional data structure.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// Code with Implementation 

var longestCommonPrefix = function (strs) {
  let firstString = strs[0], res = "";

  for (let index = 0; index < firstString.length; index += 1) {
    let char = firstString.charAt(index);
    for (let j = 1; j < strs.length; j += 1) {
      let remainingString = strs[j];
      if (index === remainingString.length || char !== remainingString.charAt(index)) {
        return res;
      }
    }
    res += char;
  }

  return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""