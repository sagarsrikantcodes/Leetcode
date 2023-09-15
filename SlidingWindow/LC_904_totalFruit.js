/*
904. Fruit Into Baskets
https://leetcode.com/problems/fruit-into-baskets/

Problem:
  input: integer array , fruits
  output: Integer representing the maximum number of fruits we can pick.

  rules:
  Explicit Requirements:
  1. Must try to collect as much fruit as possible.
  2. We have only 2 baskets and each basket can only hold a single type of fruit (like Type 1, Type 2,..etc).
  3. There is no limitation on the amount of fruit each basket can hold.
  4. We can start from any tree of our choice, Must pick exactly one fruit from every tree while moving to the right. The picked fruits must fit in one of our baskets.
  5. Must stop once we reach a tree with fruit that cannot fit in both the baskets.
  6. Must return the maximum number of fruits that we can pick.

  Implicit Requirements:
  1. If the length of fruits array is 1, then we can only pick fruits from one type of fruit. Hence, we return 1 to the calling function. 

Example / Test Cases:

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees. Since basket 1 can only hold fruits of type 1, and basket 2 can only hold fruits of type 2. Hence all the fruit types fit the criteria we can return the length of the maximum subarray while moving from startIndex to endIndex.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1] since basket 1 can only hold fruits of type 0 and basket 2 can only hold fruits of type 1. When we reach index 2 of fruits array we encounter fruits of type 2 which cannot be accomodated either in basket 1 or basket 2. Hence we would need to stop based on the explicit requirements. 
If we start from index 1, we can choose fruits of type 1 for basket 1 and fruits of type 2 for basket 2. We obtain the total number of fruits to be 3 (Length of the subarray [1, 2, 2]). 

Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2] since basket 1 holds fruits of type 1 and basket 2 holds fruits of type 2, once we reach index 2 we encounter fruits of type 3 but we cannot fit this type of fruit on either of our baskets. Hence we must stop at index 2.
If we start from index 1, We can hold fruits of type 2 in basket 1 and fruits of type 3 in basket 2 and continue until the end of the fruits array. We obtain the subarray [2, 3, 2, 2] which is the maximum subarray of fruits array and its length is 4. Hence we return 4 to the calling function. 

Data Structures:
  input: Array of integers
  output: Integer
  Function Execution: Hashset to store just one type of fruit. 

Intuition:
  - Since we are asked to return the maximum number of fruits which can fit in the given 2 baskets, We can think of this problem based on the test cases as maximum length of the subarray of fruits array. In order to obtain the maximum length of the subarray, we can use sliding window technique of variable size. 

Algorithm:
Sliding Window Technique with Variable Size:

1. Initialize variables:

  count: An empty object to keep track of the counts of fruits in the current window.
  l: The left pointer of the window, initially set to 0.
  total: The total number of fruits in the current window, initially set to 0.
  res: The maximum number of fruits collected so far, initially set to 0.

2. Iterate through the fruits array using the r pointer to expand the window from left to right:

  Get the current fruit at fruits[r].
  Check if count contains a property for the current fruit. If not, create one and initialize it to 0.
  Increment the count of the current fruit in the count object.
  Increment the total to keep track of the total number of fruits in the window.

3. While the number of distinct fruits in the count object is greater than 2:

  - Get the leftmost fruit in the window (leftFruit) using the l pointer.
  - Decrement the count of leftFruit in the count object.
  - Decrement the total to reflect the removal of a fruit from the window.
  - If the count of leftFruit becomes 0, delete it from the count object to maintain only 2 distinct fruit types in the window.
  - Increment the l pointer to shrink the window from the left.

4. Update res with the maximum of its current value and total. This keeps track of the maximum number of fruits collected with at most 2 types of fruits in the baskets.

5. Repeat steps 2-4 until you've iterated through the entire fruits array.

6. Return res as the maximum number of fruits you can collect according to the problem's constraints.

The key idea of this algorithm is to maintain a sliding window with at most two types of fruits while keeping track of the total number of fruits in the window. By expanding and shrinking the window, the algorithm finds the maximum number of fruits that can be collected.

Complexity Analysis:
1. Time Complexity: The algorithm iterates through the array once using two pointers, so the time complexity is O(n), where n is the length of the input array.

2. Space Complexity: We use a constant amount of extra space for variables, so the space complexity is O(1).

*/

// Code with Implementation

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length === 1) {
    return 1;
  }

  const count = {};
  let l = 0, total = 0, res = 0;

  for (let r = 0; r < fruits.length; r++) {
    let fruit = fruits[r];

    if (!count.hasOwnProperty(fruit)) {
      count[fruit] = 0;
    }

    count[fruit]++;
    total++;

    while (Object.keys(count).length > 2) {
      const leftFruit = fruits[l];
      count[leftFruit]--;
      total--;
      if (count[leftFruit] === 0) {
        delete count[leftFruit];
      }
      l++;
    }

    res = Math.max(res, total);
  }

  return res;
};

console.log(totalFruit([1, 2, 1]) === 3); // true

console.log(totalFruit([1, 2, 3, 2, 2]) === 4); // true

console.log(totalFruit([0, 1, 2, 2]) === 3); // true
console.log(totalFruit([3]) === 1); // true


