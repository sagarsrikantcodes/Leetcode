/*
Problem:
Problem Statement: Given a string s, find the length of the longest substring without repeating characters.

Input: A string s (1 <= s.length <= 5 * 10^4).

Output: An integer representing the length of the longest substring without repeating characters.

Examples:
Let's start with some examples to understand the problem better:

Example 1:

plaintext
Copy code
Input: s = "abcabcbb"
Output: 3
Explanation: The longest substring without repeating characters is "abc," which has a length of 3.
Example 2:

plaintext
Copy code
Input: s = "bbbbb"
Output: 1
Explanation: The longest substring without repeating characters is "b," which has a length of 1.
Example 3:

plaintext
Copy code
Input: s = "pwwkew"
Output: 3
Explanation: The longest substring without repeating characters is "wke," which has a length of 3.

Data:
We are given a string s as input.
We need to return an integer representing the length of the longest substring without repeating characters.

Algorithm:

1. Initialize the left pointer to 0, the length variable to 0, and create an empty set set to keep track of unique characters within the current substring.

2. Start a loop that iterates through the characters of the input string s using the right pointer.

3. For each character at the right pointer:

  - Check if it is already in the set (i.e., it's a repeating character).
  - If it is in the set, remove characters from the set and increment the left pointer until the character is no longer in the set. This ensures that we maintain a substring without repeating characters.
  - Add the current character to the set.
4. After each iteration, update the length with the maximum value between the current length and the size of the set. This represents the length of the longest substring without repeating characters seen so far.

5. Continue this process until you've processed all characters in the input string.

6. Finally, return length as the result.

Complexity Analysis:
1. Time COmplexity = O(N)
2. Space Complexity = O(min(N, k)) => O(N)

// Code with Implementation
*/
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let length = 0;
  const set = new Set();

  for (let right = 0; right < s.length; right += 1) {

    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }

    set.add(s[right]);
    // console.log(set);
    length = Math.max(length, set.size);
  }

  return length;
};


console.log(lengthOfLongestSubstring("abcabcbb") === 3); // true
console.log(lengthOfLongestSubstring("bbbbb") === 1); // true
console.log(lengthOfLongestSubstring("pwwkew") === 3); // true

