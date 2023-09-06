/*
680. Valid Palindrome II
https://leetcode.com/problems/valid-palindrome-ii/

problem:
  input: string, s
  output: boolean data type (true/ false).

  rules:
  Explicit Requirements:
  1. Must check if the given string, s is a palindrome OR is the string, s is a palindrome if at most one character is deleted from the string, s.

  Implicit Requirements:
  1. If the length of the given string is 1, then return true to the calling function.

  example / test cases:

  example 1:
  input: s = "aba"
  output: true

  example 2:
  input: s = "abca"
  output: true
  Explanation: You could delete the character 'c'.

  example 3:
  input: s = "abc"
  output: false

  Data Structures:
  input: string
  output: boolean 

  Algorithm for main program:

  1. Check if the given string, s is palindromic by invoking the function isPalindrome with low index being 0 and high index being s.length - 1.

  2. Iterate through the given string, s.
    - Declare and create a leftString and assign it a substring from index 0 until index i.
    - Declare and create a rightString and assign it to a substring from index i + 1 until the end of the string.
    - Declare and create variable, restOfString and assign it by concatenating the leftString and rightString together.
    - Determine if the restOfString is palindromic. If it is palindromic return true.
  
  3. Return false to the calling function.

  Algorithm to determine if a given string is a palindrome.

  1. As longs as the low index is less than or equal to high index run a while loop
    - If the character at low index is not equal to the character at the high index, return false.
    - Incrmeent the low index by 1.
    - Decrement the high index by 1.
  2. Return true.

  Complexity Analysis:
  1. Time Complexity = O(N)
  2. Space Complexity = O(1)

*/
/*
function isPalindrome(str) {
  let low = 0;
  let high = str.length - 1;

  while (low <= high) {
    if (str.charAt(low) !== str.charAt(high)) {
      return false;
    }

    low += 1;
    high -= 1;
  }

  return true;
}

var validPalindrome = function (s) {
  if (isPalindrome(s)) {
    return true;
  }

  for (let i = 0; i < s.length; i += 1) {
    let leftString = s.substring(0, i);
    let rightString = s.substring(i + 1);
    let restOfString = leftString + rightString;
    if (isPalindrome(restOfString)) {
      return true;
    }
  }

  return false;
};
*/

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
};

function isPalindrome(str, left, right) {

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("aba") === true); // true
console.log(validPalindrome("abca") === true); // true
console.log(validPalindrome("abc") === false); // true
// All test cases should log true

