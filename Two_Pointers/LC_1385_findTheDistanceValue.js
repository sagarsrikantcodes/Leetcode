/*
Problem:
  input: Array of integers and an integer.
  output: integer

  rules:
  Explicit Requirements:
  1. Must return the distance value between the two arrays.
  2. COndition for distance value
  - Number of elements of arr1 such that
  |arr1[i] - arr2[j]| > d for every element of arr2.

Example / Test Cases:

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation:
For arr1[0]=4 we have:
|4-10|=6 > d=2
|4-9|=5 > d=2
|4-1|=3 > d=2
|4-8|=4 > d=2
For arr1[1]=5 we have:
|5-10|=5 > d=2
|5-9|=4 > d=2
|5-1|=4 > d=2
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2

Example 2:

Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2

Example 3:

Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1

Data Structures:
input: array of integers and an integer
output: integer

Algorithm:
Brute force method:
0. Declare and create a variable named count and initialize it to 0.
1. Iterate through the elements of arr1 using for loop. (index i from 0 until arr1.length)
  1.1 CHeck if every element of arr2 satisfies the condition absolute value of difference between arr1[i] and arr2[j] is greater than d.
    - If it is true, increment count by 1.
2. Return the value of count to the calling function.

COmplexity Analysis:
1. Time Complexity = O(N ^ 2)
2. Space COmplexity = O(1)

*/

// Code with implementation

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
/*
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.every(number => Math.abs(arr1[i] - number) > d)) {
      count += 1;
    }
  }

  return count;
};
*/

/*
Optimized Algorithm:
1. Time COmplexity = O(nlogn)
2. Space COmplexity = O(1)



*/

function isValid(arr2, target, d) {
  let low = 0, high = arr2.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (Math.abs(target - arr2[mid]) <= d) {
      return false;
    }

    if (arr2[mid] < target) {
      low = mid + 1;
    }

    if (arr2[mid] > target) {
      high = mid - 1;
    }
  }

  return true;
}

var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i += 1) {
    if (isValid(arr2, arr1[i], d)) {
      count += 1;
    }
  }

  return count;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2) === 2); // true
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3) === 2); // true
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6) === 1); // true
