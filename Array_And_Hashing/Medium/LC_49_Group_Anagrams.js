/*
Problem - 
  input: An array of strings, strs. 
  output: Return a 2D array of strings which group the anagrams together. 

  Rules:
    Explicit Requirements:- 
    1. Can return the answer in any order.
    2. Definition of Anagram - An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    3. Constraints -
      1.  1 <= strs.length <= 10000
      2.  0 <= strs[i].length <= 100
      3.  strs[i] consists of lowercase English Letters.

    Implicit Requirments:- 
    1. If the given input, strs is a falsy value OR input array of strings, strs contains no string, Return an empty array to the calling function. 

  

Example/Test Cases - 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

"eat" - Frequency String is a1b0c0d0e1.....t1u0v0w0x0y0z0 
"tea" - Frequency String is a1b0c0d0e1.....t1u0v0w0x0y0z0
"tan" - Frequency String is a1b0c0d0e0..n1..t1u0v0w0x0y0z0 
"ate" - Frequency String is a1b0c0d0e1......t1u0v0w0x0y0z0
"nat" - Frequency String is a1b0c0d0e0..n1..t1u0v0w0x0y0z0 
"bat" - Frequency String is a1b1c0d0e0.....t1u0v0w0x0y0z0

HashMap to group the strings having same anagrams are as follows
"a1b0c0d0e1.....t1u0v0w0x0y0z0" => ["eat", "tea", "ate"]
"a1b0c0d0e0..n1..t1u0v0w0x0y0z0 " => ["tan", "nat"]
"a1b1c0d0e0.....t1u0v0w0x0y0z0" => ["bat"]

Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Data Structures - 
input: Array of strings
output: 2D Array of strings

Algorithm - 
Group Anagrams Algorithm (Main Program) -
1. Covering the edge cases from the implicit requirements - If the given input is a falsy value OR the given array of strings has no string contained in an array, return an empty array to the calling function. 

2. Declare and create a Hashmap, frequencyStringsMap to map frequencyString(key) to an array of strings(value). 

3. Iterate through the given input array of strings, strs.
  - Capture the string, str at individual indices, index. 
  - Declare and create a variable named frequencyString and invoke a function (i.e., getFrequencyString) to compute the frequency string of string, str.
  - Check if the frequencyStringsMap already has the frequencyString(key) available.
    - If it does, push the string, str to the value of the frequencyString(key). 
    - Else if it does not, set the frequencyString(key) and string, str(value) onto the frequencyStringsMap.
4. Return an array of values from the frequencyStringsMap to the calling function. 

Algorithm to get the frequency string
getFrequencyString(string) 

1. Declare and create an array of integers, counts to keep the count of all the alphabetical letters in a string and initialize the elements to zero. 
2. Iterate through the given input string. 
  - Capture the character, `char` at index.
  - Reassign the value of counts at specific index position based on the alphabet, char.
  Eg. a at 0, b at 1, z at 25 index positions.
3. Declare and create a string variable, stringBuilder and initialize it to an empty string.
4. Declare and create a string variable, char and initialize it to a character, `a`.
5. Iterate through the counts array
  - Capture the value of count at a particular index. 
  - Reassign the value of stringBuilder by concatenating its current value with the value of count. 
6. Return the value of stringBuilder to the calling function.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function getFrequencyString(string) {
  const counts = new Array(26).fill(0);

  for (let index = 0; index < string.length; index += 1) {
    let char = string.charAt(index);
    counts[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  console.log(`Counts array is ${counts}`);

  let stringBuilder = '';
  let char = 'a';

  for (const count of counts) {
    stringBuilder += char + count;
    char = String.fromCharCode(char.charCodeAt(0) + 1);
  }

  console.log(`The frequency string is ${stringBuilder}`);

  return stringBuilder;
}

var groupAnagrams = function (strs) {
  // Edge cases
  if (!strs || strs.length === 0) {
    return [];
  }

  const frequencyStringsMap = new Map();

  for (let index = 0; index < strs.length; index += 1) {
    let str = strs[index];
    let frequencyString = getFrequencyString(str);
    if (frequencyStringsMap.has(frequencyString)) {
      frequencyStringsMap.get(frequencyString).push(str);
    } else {
      frequencyStringsMap.set(frequencyString, [str]);
    }
  }

  console.log(frequencyStringsMap);

  return [...frequencyStringsMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[]]
console.log(groupAnagrams(["a"])); // [['a']]


