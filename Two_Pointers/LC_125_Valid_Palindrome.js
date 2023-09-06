/*
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

Problem:
  input: string
  output: Boolean data type (true/false) if the phrase is a valid palindrome.

  Rules:
  Explicit Requirement:
  1. Convert all uppercase letters to lowercase letters.
  2. Remove all non-alphanumeric characters.
  3. Characters must read the same forward and backward.
  
  Implicit Requirements:
  1. If the given string is an emoty string or single space character, return true.

Example/Test cases:

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Data Structures:
1. input: string
2. Output: Boolean data type (true / false).

Algorithm:
1. Declare and create a variable named `result` and initialize it to an empty string.
2. Reassign the string, s to its lowercase.
3. Iterate through the string, s.
  - Declare and create a character variable named char.
  - If char is alphanumeric character,
    - Append char to `result`.
4. Invoke a function isPalindrome to check if the result stirng is a palindrome or not.

Algorithm for Palindrome:
1. Declare and create a variable named i and initialize it to 0.
2. Declare and create a variable named j and initialize it to str.length - 1.
3. As long as i is less than or equal to j run while loop:
  - If character at index i is not equal to character at index j,
  return false.
4. Return true to the calling function.

Algorithm to check if the character is alphanumeric:
1. Check if the character is between 'a - z' OR '0 to 9'. If it is return true. ELse Return false.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

function isAlphanumeric(char) {
  return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

var isPalindrome = function (s) {
  // Edge case
  if (s === " ") {
    return true;
  }

  let result = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i += 1) {
    let char = s.charAt(i);
    if (isAlphanumeric(char)) {
      result += char;
    }
  }

  // console.log(result);

  let low = 0;
  let high = result.length - 1;

  while (low <= high) {
    if (result.charAt(low) !== result.charAt(high)) {
      return false;
    }
    low += 1;
    high -= 1;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama") === true);
console.log(isPalindrome("race a car") === false);
console.log(isPalindrome(" ") === true);

// All test cases must log true
