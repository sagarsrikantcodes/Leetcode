/*
2562. Find the Array Concatenation Value
https://leetcode.com/problems/find-the-array-concatenation-value/description/

You are given a 0-indexed integer array nums.

The concatenation of two numbers is the number formed by concatenating their numerals.

For example, the concatenation of 15, 49 is 1549.
The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:

If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
If one element exists, add its value to the concatenation value of nums, then delete it.
Return the concatenation value of the nums.

 

Example 1:

Input: nums = [7,52,2,4]
Output: 596
Explanation: Before performing any operation, nums is [7,52,2,4] and concatenation value is 0.
 - In the first operation:
We pick the first element, 7, and the last element, 4.
Their concatenation is 74, and we add it to the concatenation value, so it becomes equal to 74.
Then we delete them from nums, so nums becomes equal to [52,2].
 - In the second operation:
We pick the first element, 52, and the last element, 2.
Their concatenation is 522, and we add it to the concatenation value, so it becomes equal to 596.
Then we delete them from the nums, so nums becomes empty.
Since the concatenation value is 596 so the answer is 596.
Example 2:

Input: nums = [5,14,13,8,12]
Output: 673
Explanation: Before performing any operation, nums is [5,14,13,8,12] and concatenation value is 0.
 - In the first operation:
We pick the first element, 5, and the last element, 12.
Their concatenation is 512, and we add it to the concatenation value, so it becomes equal to 512.
Then we delete them from the nums, so nums becomes equal to [14,13,8].
 - In the second operation:
We pick the first element, 14, and the last element, 8.
Their concatenation is 148, and we add it to the concatenation value, so it becomes equal to 660.
Then we delete them from the nums, so nums becomes equal to [13].
 - In the third operation:
nums has only one element, so we pick 13 and add it to the concatenation value, so it becomes equal to 673.
Then we delete it from nums, so nums become empty.
Since the concatenation value is 673 so the answer is 673.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 104

Algorithm:
Two Pointers Method:
0. Declare and Create two pointer indexes, i and j and initialize it to 0 and nums.length - 1.
1. Declare and Create an array, arrOfConcat and initialize it to an empty array.
2. Run a while loop as long as low is less than or equal to high.
  - Declare and Create a variable named `firstValue` and assign it to the string of nums[low].
  - Declare and Create a variable named `endValue` and assign it to the string of nums[high].
  - Declare and Create a variable named `concValue` and assign it to the concatenated strings of nums[low] and nums[high].
  - Push the explicit conversion of concatenatedValue to the array, arrOfConcat.
3. Return the cumulative sum of the array, arrOfConcat to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let i = 0, j = nums.length - 1;
  let arrOfConcat = [];
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    if (low !== high) {
      let firstValue = String(nums[low]);
      let endValue = String(nums[high]);
      let concValue = firstValue + endValue;
      arrOfConcat.push(Number(concValue));
    } else {
      arrOfConcat.push(Number(nums[low]));
    }

    low += 1;
    high -= 1;
  }

  return arrOfConcat.reduce((acc, ele) => acc + ele, 0);
};

console.log(findTheArrayConcVal([7, 52, 2, 4]) === 596); // true
console.log(findTheArrayConcVal([5, 14, 13, 8, 12]) === 673); // true