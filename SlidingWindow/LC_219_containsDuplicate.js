/*
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/description/

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

Algorithm:
Sliding Window Technique of Fixed Size - 
1. Declare and create an empty hashset named window. 
2. Initialize the left pointer index to 0. 
3. Iterate thr right pointer index from 0 to nums.length - 1. 
    3.1 If window size (right - left) is greater than k
        3.1.1 Remove the element of nums at left pointer index.
        3.1.2. Increment the left pointer index. 
    3.2 If the value nums[right] is present in the hashset, window
        3.2.1 Return true
    3.3 Add the nums value at the right pointer index onto the hashset, window. 
4. Return false onto the main method/calling function if there are no duplicates found within the windows of size k.


Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N), DUe to Hashset.

*/

function closeDuplicates(nums, k) {

  const set = new Set();
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if ((right - left) > k) {
      set.delete(nums[left]);
      left += 1;
    }

    if (set.has(nums[right])) {
      return true;
    }

    set.add(nums[right]);
  }

  return false;
}

console.log(closeDuplicates([1, 2, 3, 2, 3, 3], 3) === true); // true
console.log(closeDuplicates([1, 2, 3, 1], 3) === true); // true
console.log(closeDuplicates([1, 0, 1, 1], 1) === true); // true
console.log(closeDuplicates([1, 2, 3, 1, 2, 3], 2) === false); // true