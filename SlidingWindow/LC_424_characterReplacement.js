/*
424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/

Problem :
  input: string s and integer k
  output: Integer representing the length of the longest substring containing the same letter after performing k operations.

  rules:
  Explicit Requirements:
  1. 1 <= s.length <= 10 ^ 5
  2. s consists of only uppercase english letters.
  3. 0 <= k <= s.length

Example / Test Cases:

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.

Data Structures:
input: string, s and an integer, k
output: integer

Algorithm:


The problem you've linked to is "Longest Repeating Character Replacement" on LeetCode. Here's the problem statement:

Problem Statement:

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest subarray containing the same character after performing at most k operations.

Example:

vbnet
Copy code
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Now, let's go through the PEDAC process to solve this problem in JavaScript:

Algorithm:

1. Initialize two pointers, left and right, to 0.
2. Initialize a variable maxCount to 0 to keep track of the maximum character count in any substring.
3. Initialize a frequency array charCount to store the count of each character in the current window.
4. Iterate through the string using the right pointer, and for each character:
  - Increment its count in charCount.
  - Update maxCount to be the maximum of maxCount and the count of the most frequent character in charCount.
  - If the length of the current window minus maxCount is greater than k, it means we have more than k characters that are not the most frequent character, so we need to move the left pointer to make the window valid again.
  - While moving the left pointer, decrement the count of the character at the left pointer in charCount.
5. Update the maximum length of the substring as right - left + 1.
6. Repeat steps 4 and 5 until the right pointer reaches the end of the string.
7. Return the maximum length found.

Time Complexity:
The function uses a sliding window approach to traverse the input string s. In the worst case, both the left and right pointers iterate through the entire string once. Therefore, the time complexity of this function is O(N), where N is the length of the input string s.

Space Complexity:
The space complexity of the function is O(26) because it uses an array charCount of length 26 to store the counts of each character. This space complexity is constant, so we can simplify it to O(1) in big O notation since the array's size is not dependent on the size of the input string. The function doesn't use any other data structures or recursive calls, so the overall space complexity is O(1).


*/

// Code with Implementation

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/*
var characterReplacement = function (s, k) {
  const charCount = new Array(26).fill(0); // Initialize an array to store character counts
  let maxCount = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const charIndex = s.charCodeAt(right) - 'A'.charCodeAt(0);
    charCount[charIndex]++;
    maxCount = Math.max(maxCount, charCount[charIndex]);

    if (right - left + 1 - maxCount > k) {
      // If the window size minus maxCount is greater than k, move the left pointer
      const leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
      charCount[leftCharIndex]--;
      left++;
    }
  }

  // The maximum length of the substring is the window size
  return s.length - left;

};
*/

var characterReplacement = function (s, k) {
  let count = {};
  let res = 0;

  let left = 0;
  let maxF = 0;

  for (let right = 0; right < s.length; right += 1) {
    count[s.charAt(right)] = 1 + (count[s.charAt(right)] || 0);
    maxF = Math.max(maxF, count[s.charAt(right)]);

    while (right - left + 1 - maxF > k) {
      count[s.charAt(left)] -= 1;
      left += 1;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
}


console.log(characterReplacement("ABAB", 2) === 4); // true
console.log(characterReplacement("AABABBA", 1) === 4); // true

