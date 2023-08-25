/*
Problem:
input: Unsorted array of integers, nums
output: Number/Integer, Return the length of the longest consecutive elements sequence.

rules:
  Explicit Requirements: 
  1. Must return the length of the longest consecutive elements sequence.
  2. Must write an algorithm that runs in O(n) time.

  Implicit Requirements:
  1. If the length of the nums array is zero, then return 0. 

  Constraints
    0  <= nums.length <= 100000
    -10 ^ 9 <= nums[i] <= 10 ^ 9 

Examples / Test Cases:
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Data Structures - 
input - Array of integers
output - Integer data type. 

Algorithm - 
// Edge case
1. If the length of the nums array is zero, return zero to the calling function. 
2. Declare and create a hashset, set and initialize it to an empty set.
3. Declare and create a variable, answer and initialize it to 1. 
4. Loop through the nums array and add the distinct elements to the hashset, set. 
5. Again loop through the nums array
  - Check if the set contains number - 1
    - If it contains number - 1, declare and initialize count to be equal to 1. 
    - As long as the hashset, set contains number + 1 continue looping. 
      - Increment the count variable by 1 and also increment the number by 1. 
    - Reassign the value of answer variable by taking the maximum value between the variables count and answer. 
6. Return the value of the answer variable to the calling function. 

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N)

*/

// Code with Implementation
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const set = new Set();
  let answer = 1;
  for (let number of nums) { set.add(number); }
  console.log(set);
  for (let number of nums) {
    if (!set.has(number - 1)) {
      let count = 1;
      while (set.has(number + 1)) {
        count += 1;
        number += 1;
      }
      answer = Math.max(count, answer);
    }
  }

  return answer;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9

/*
Complexity Analysis - 

Time Complexity:

The first loop that adds numbers to the Set: O(n), where n is the number of elements in the nums array.
The second loop that iterates through the nums array: O(n).
The while loop inside this loop runs for O(n) iterations in total, but it's not nested within the first loop, so it's still considered O(n).
Overall Time Complexity: O(n)

Space Complexity:

The Set set is used to store unique numbers from the nums array. The space used by the Set is proportional to the number of unique elements in nums. In the worst case, if all elements are unique, the space complexity would be O(n).
Additional space is used for variables like answer, number, and count, which are constant regardless of the input size.
Overall Space Complexity: O(n)

In summary:

Time Complexity: O(n)
Space Complexity: O(n)
The given code has linear time and space complexity, making it efficient for handling moderate-sized inputs.

*/