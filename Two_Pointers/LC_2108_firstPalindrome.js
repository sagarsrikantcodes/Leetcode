/*
2108. Find First Palindromic String in the Array
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.

Algorithm for Main Program:
1. Iterate through the words array using for loop.
  - Declare and create a variable named str and assign it to the value of words array at index, i.
  - If the string, str is palindrome, return the string str.
2. Return an empty string to the calling function.

Algorithm to check if the string is palindrome.
1. Declare and initialize the pointer indexes, low and high to 0 and str.length - 1.
2. Run a while loop as long as low is less than or equal to high
  - If the character at low is not equal to character at high
      - Return false.
  - INcrement the low index by 1.
  - Decrement the high index by 1.
3. Return true to the calling function.

Complexity Analysis:
1. Time Complexity = O(N * M))
2. Space Complexity = O(1)

*/

/**
 * @param {string[]} words
 * @return {string}
 */

function isPalindrome(str) {
  let low = 0, high = str.length - 1;

  while (low <= high) {
    if (str.charAt(low) !== str.charAt(high)) {
      return false;
    }
    low += 1;
    high -= 1;
  }

  return true;
}

var firstPalindrome = function (words) {

  for (let i = 0; i < words.length; i += 1) {
    let str = words[i];
    if (isPalindrome(str)) {
      return str;
    }
  }

  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]) === "ada"); // true
console.log(firstPalindrome(["notapalindrome", "racecar"]) === "racecar"); // true
console.log(firstPalindrome(["def", "ghi"]) === ""); // true