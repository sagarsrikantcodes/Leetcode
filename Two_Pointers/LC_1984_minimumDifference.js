/*
1984. Minimum Difference Between Highest and Lowest of K Scores
https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

Problem:
  input: AN integer array and integer, k
  output: integer representing the minimum difference between the highest and lowest scores among k students.

  rules:
  Explicit Requirements:
  1. Must return the minimum possible difference.

  Implicit Requirements:
  1. If the array length is equal to 1 and k is 1, return 0.

Example / Test Cases:

Example 1:

Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.

Example 2:

Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.

Data Structures:
input: An array of integers
output: Integer representing minimum difference.

Algorithm:
Brute Force Method -
0. Declare and create an array reference variable named arrOfDifferences and initialize it to an empty array.
1. Sort the given array in ascending order using the sort method.
2. Iterate through the given array from index , i (0 until length).
  - Declare and create an arrayRefVar, arrPortion and slice it from i until i + k. 
  - Declare and create a variable named `min` and assign it to the minimum value in the `arrPortion` arrayRefvar.
  - Similarly Declare and create a variable named `max` and assign it to the maximum value in the `arrPortion` arrayRefVar.
  - Similarly declare and create a variable named `diff` and assign it to the difference between max and min.
  - Append the `diff` value to the array, ` arrOfDifferences`.
3. Return minimum value of `arrOfDifferences` to the calling function.

Compexity Analysis 
1. TIme Complexity = O(N ^ 2)
2. Space Complexity = O(N)

*/
/*
var minimumDifference = function (nums, k) {
  if (nums.length === 1 && k === 1) {
    return 0;
  }

  let arrOfDifferences = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 1) {
    let j = i + k;
    if (j < nums.length + 1) {
      let arrPortion = nums.slice(i, j);
      let min = Math.min(...arrPortion);
      let max = Math.max(...arrPortion);
      let difference = max - min;
      arrOfDifferences.push(difference);
    }
  }
  // console.log(arrOfDifferences);

  return Math.min(...arrOfDifferences);
};

*/



/*
Optimized Method
Two Pointer Approach

Algorithm - 
1. Sort the input array, nums. 
2. Initialize the left and right pointers to 0 and k - 1 respectively. 
3. Initialize the variable, minDiff to maximum possible integer value. 
4. Iterate the right pointer until the length of the nums array. 
    4.1 Compute the difference in values of nums between left and right pointer indices. 
    4.2 Reassign the minDiff value by comparing minDiff to the output being computed. 
    4.3 Increment the left and right pointer indices.

Analysis -
Time Complexity = O(NlogN), Due to Merge Sort 
Space Complexity = O(1)

*/

var minimumDifference = function (nums, k) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  console.log(nums);
  let left = 0;
  let right = k - 1;
  let res = Number.MAX_VALUE;

  while (right < nums.length) {
    res = Math.min(res, nums[right] - nums[left]);
    left++;
    right++;
  }
  return res;
};

console.log(minimumDifference([90], 1) === 0); // 0
console.log(minimumDifference([9, 4, 1, 7], 2) === 2); // 2