/*
567. Permutation in String
https://leetcode.com/problems/permutation-in-string/

Problem:
  input: strings
  output: boolean data type (true / false).

  rules:
  Explicit Requirements:

  Implicit Requirements:
  1. If the s2.length < s1.length return false.

Example / Test Cases:

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Data Structures:
input: strings
output: boolean data type (true / false)

Algorithm:
1. Check if the length of s2 is less than the length of s1. If it is, return false because it's impossible for s1 to be a permutation of a longer string s2.

2. Initialize two pointers, left and right, to 0. These pointers represent the current window of characters in s2 that we are considering.

3. Create two empty JavaScript objects, hm1 and hm2, which will serve as hash maps to store the frequency of characters in s1 and the current window of characters in s2, respectively.

4. Loop through s1 to populate hm1 with the frequency of each character in s1.

5. Start iterating through s2 with the right pointer:

- If the size of the current window (i.e., right - left + 1) is greater than the length of s1, move the left pointer to shrink the window. Decrease the count of the character at s2[left] in hm2 and increment left.
- Update the frequency of the character at s2[right] in hm2.
6. Check if the size of the current window (right - left + 1) is equal to the length of s1. If it is, we have a window of the same size as s1, so we compare hm1 and hm2 to see if they contain the same characters and frequencies.

- Count how many characters in hm1 are also present in hm2 with the same frequency. If the count is equal to the number of distinct characters in hm1, it means s1 is a permutation of the current window in s2, so return true.
7. Continue this process until the right pointer reaches the end of s2.

8. If no permutation of s1 is found in s2 after iterating through the entire string, return false.


Complexity Analysis:
1. Time Complexity = O(N), Where N is the length of string s2
2. Space Complexity = O(k) => O(26) => O(1), Where k is the number of unique characters in s1 as s1 contains only uppercase letters. 

*/

// Code with Implementation 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

  if (s2.length < s1.length) {
    return false;
  }

  let left = 0;
  let hm1 = {};
  let hm2 = {};

  for (let i = 0; i < s1.length; i += 1) {
    hm1[s1[i]] = 1 + (hm1[s1[i]] || 0);
  }

  for (let right = 0; right < s2.length; right += 1) {
    if (right - left + 1 > s1.length) {
      hm2[s2[left]] -= 1;
      left += 1;
    }

    hm2[s2[right]] = 1 + (hm2[s2[right]] || 0);

    console.log(hm1);
    console.log(hm2);

    if (right - left + 1 === s1.length) {
      let len = Object.keys(hm1).length;
      let count = 0;
      for (let key in hm1) {
        if (key in hm2 && hm1[key] === hm2[key]) {
          count += 1;
        }
      }

      if (count === len) {
        return true;
      }

    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo") === true); // true
console.log(checkInclusion("ab", "eidboaoo") === false); // true