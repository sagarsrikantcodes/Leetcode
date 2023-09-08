/*
2465. Number of Distinct Averages
https://leetcode.com/problems/number-of-distinct-averages/

You are given a 0-indexed integer array nums of even length.

As long as nums is not empty, you must repetitively:

Find the minimum number in nums and remove it.
Find the maximum number in nums and remove it.
Calculate the average of the two removed numbers.
The average of two numbers a and b is (a + b) / 2.

For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
Return the number of distinct averages calculated using the above process.

Note that when there is a tie for a minimum or maximum number, any can be removed.

Example 1:

Input: nums = [4,1,4,0,3,5]
Output: 2
Explanation:
1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.

Example 2:

Input: nums = [1,100]
Output: 1
Explanation:
There is only one average to be calculated after removing 1 and 100, so we return 1.

Constraints:

2 <= nums.length <= 100
nums.length is even.
0 <= nums[i] <= 100

Data Structures:
input: Array of integers
output: Integer

Algorithm:
0. Edge case - If nums.length is equal to 2, then return 1.
1. Declare and Create a variable named set and initialize it to an empty set. 
2. Run a while loop as long as the nums.length is greater than 0.
  - Declare and Create a variable named minValue and assign it to minimum value of nums array. 
  - Declare and Create a variable named maxValue and assign it to the maximum value of nums array.
  - Remove the minValue from the nums array.
  - Remove the maxValue from the nums array.
  - Declare and Create a variable named average and assign it to the average value between minValue and maxValue. 
  - Add the value of `average` to the set. 
3. Return the size of the hashset, set to the calling function. 

Complexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space Complexity = O(N)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  if (nums.length === 2) {
    return 1;
  }

  const set = new Set();

  while (nums.length > 0) {
    let minValue = Math.min(...nums);
    let maxValue = Math.max(...nums);
    let average = (minValue + maxValue) / 2;
    nums.splice(nums.indexOf(minValue), 1);
    nums.splice(nums.indexOf(maxValue), 1);
    set.add(average);
  }
  // console.log(set);

  return set.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5]) === 2); // true
console.log(distinctAverages([1, 100]) === 1); // true