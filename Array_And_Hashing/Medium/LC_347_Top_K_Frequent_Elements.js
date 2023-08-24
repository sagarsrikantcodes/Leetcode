/*
Problem -
input: Intger array, nums and integer, k
output: An array of integers involving k frequent elements.

  rules:
    Explicit Requirements-
    1. Must return the k most frequent elements.
    2. May return the answer in any order.
    3. Constraints :-
      -    1 <= nums.length <= 100000
      -    -10000 <= nums[i] <= 10000
      -    k is in the range of [1, the number of unique elements in the array]
      -    Guaranteed the answer is unique.

    Implicit Requirements-
    1. If the length of the nums array is 1 and k is 1, then return the nums
    array to the calling function.

Example / Test Cases -
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Hashmap of number and its occurrence
1 => 3
2 => 2
3 => 1

Since we need to find the 2 frequent elements based on the occurrence
[1, 2]


Example 2:

Input: nums = [1], k = 1
Output: [1]

Hashmap of number and its occurrence
1 => 1

[1]


Data Structures:-
input - An array of integers, nums and an integer, k.
output - An array of integers of length, k.

Algorithm -
Set - Frequency Counter | Using sort method
Time = O(NlogN) | Space = O(N)

1. Declare and create an empty object, frequency to map the count of the individual array of integers. Where (nums[i] is key and count is value).
2. Iterate through an array of integers, nums.
  - If the frequency object has its own property/key (i.e., nums[i]), increment the value of the key(nums[i]) in the frequency object by 1.
  - Else, assign the value of key (nums[i]) to be 1.
3. Declare and create an array of integers named result and assign it to the mapped transformation of the keys of the frequency object. (The keys of the frequency object is mapped to an array of nums[i] and its count [nums[i], count] )
Eg. result = [[1, 3], [2, 2], [3, 1]]
4. Declare and create a sorted version of the result array, sortedResult and assign it to the sort method of the subarray of the result array for the second element. (Sort it by descending order).
[[1, 3], [2, 2], [3, 1]]
5. Declare and create an empty array named output.
6. Iterate from index, i from zero to k
  - Push the first element of the subarray (sortedResult[i][0]) to the output array.
  [1, 2]
7. Return the output array to the calling function.

*/
/*
// Code with Implementation
var topKFrequent = function (nums, k) {
  let frequency = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (frequency.hasOwnProperty(nums[i])) {
      frequency[nums[i]] += 1;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  let result = Object.keys(frequency).map(key => [Number(key), frequency[key]]);
  console.log("The result array is ");
  console.log(result);
  let sortedResult = result.sort((a, b) => b[1] - a[1]);
  console.log("The sorted array is ")
  console.log(sortedResult);
  let output = [];
  for (let i = 0; i < k; i += 1) {
    output.push(sortedResult[i][0]);
  }

  return output;
};

// Testing 
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
*/

// Optimized Method using Bucket Sort Algorithm 
/*  Time = O(N), Space = O(k)   */
var topKFrequent = function (nums, k) {
  const count = {};
  // const freq = new Array(nums.length + 1).fill(null).map(() => []);
  const freq = [];
  for (let i = 0; i < nums.length + 1; i += 1) {
    freq.push([]);
  }

  console.log(freq); // [[], [], [], [], [], [], []]

  for (const n of nums) {
    count[n] = 1 + (count[n] || 0);
  }

  console.log(count); // { '1': 3, '2': 2, '3': 1 }

  for (const [n, c] of Object.entries(count)) {
    freq[c].push(Number(n));
  }

  console.log(freq);
  /* [[],[ 3 ], [ 2 ],[ 1 ], [],[],[]] */

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (let j = 0; j < freq[i].length; j += 1) {
      // console.log(`n is ${freq[i][j]}`);
      res.push(freq[i][j]);
      if (res.length === k) {
        return res;
      }
    }
  }
};



console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]








