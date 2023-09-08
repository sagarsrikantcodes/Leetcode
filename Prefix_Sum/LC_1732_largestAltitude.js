/*
1732. Find the Highest Altitude
https://leetcode.com/problems/find-the-highest-altitude/description/

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 

Constraints:

n == gain.length
1 <= n <= 100
-100 <= gain[i] <= 100

Data Structures:
input: Array of integers
output: integer

Algorithm:
Prefix Sum Method:
0. Declare and Create a variable, n and assign it to the length of the gain array.
1. Declare and Create an ArrayRefVar, altitudes and initialize using new operator with the length, n + 1.
2. Declare and create a variable named elevationGain and initialize it to 0.
3. Initialize the value of altitudes[0] to 0.
4. Iterate through the gain array using for loop.
  - Reassign the value of elevationGain by adding its current value with gain[i].
  - Assign the updated value of elevationGain to altitudes[i + 1].
5. Return maximum value from the altitudes array to the calling function.

Complexity Analysis:
1. Time Complexity = O(N)
2. Space Complexity = O(N)

*/

// Code with Implementation

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let n = gain.length;
  let altitudes = new Array(n + 1);
  let elevationGain = 0;
  altitudes[0] = 0;

  for (let i = 0; i < gain.length; i += 1) {
    elevationGain += gain[i];
    altitudes[i + 1] = elevationGain;
  }

  return Math.max(...altitudes);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]) === 1); // true
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]) === 0); // true