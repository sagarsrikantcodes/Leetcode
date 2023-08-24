/*
Problem - 
input: Integer array, nums
output: Integer array, answer

rules: 
  Explicit Requirements:- 
  1. Must return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  2. Must write an algorithm in O(n) time complexity without any division operation.

  Implicit Requirements:- 
  1. The product of any prefix or suffix is guaranteed to fit in a 32-bit integer. 

  Constraints:
  1.   2 <= nums.length <= 100000
  2.   -30 <= nums[i] <= 30

Example/Test Cases -

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 
Data Structures - Array of integers. 

Algorithm - 
Prefix Sum Method 

1. Create the arrays - leftProduct, rightProduct, and answer. 
2. Initialize the variables for product, lp and rp to 1. 
3. Iterate through the nums array from forward and reverse direction with 2 pointer indices, i and j respectively. 
    - Compute the left product elements and right product elements and store in leftProduct and rightProduct array. 
    - Check if the elements of leftProduct array are as desired by printing the individual elements. 
    - Similarly check if the elements of rightProduct array are as desired by printing the individual elements. 
4. Iterate once again through the nums array. 
    - For the edge cases when i == 0 and i == nums.length - 1, the answer array at those indices will be 1 * rightProduct[i + 1] 
    and 1 * leftProduct[i - 1] respectively. 
    - Else, answer[i] = leftProduct[i - 1] * rightProduct[i + 1].
5. Verify the output array, answer by printing its elements. 
6. Return the output array, answer onto the main method. 

Analysis - 
1. Time Complexity = O(N)
2. Space Complexity = O(1), since the output array does not count as an extra space for space complexity analysis. 

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Code with Implementation

var productExceptSelf = function (nums) {
  let leftProduct = new Array(nums.length);
  let rightProduct = new Array(nums.length);
  let answer = new Array(nums.length);
  let lp = 1, rp = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i += 1, j -= 1) {
    lp *= nums[i];
    leftProduct[i] = lp;
    rp *= nums[j];
    rightProduct[j] = rp;
  }

  console.log(leftProduct);
  console.log(rightProduct);

  for (let i = 0; i < nums.length; i += 1) {
    if (i === 0) {
      answer[i] = rightProduct[i + 1];
    } else if (i === nums.length - 1) {
      answer[i] = leftProduct[i - 1];
    } else {
      answer[i] = leftProduct[i - 1] * rightProduct[i + 1];
    }
  }

  // console.log(answer);

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

