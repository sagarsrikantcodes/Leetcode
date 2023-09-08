/*
2570. Merge Two 2D Arrays by Summing Values
https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

You are given two 2D integer arrays nums1 and nums2.

nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
Each array contains unique ids and is sorted in ascending order by id.

Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

Only ids that appear in at least one of the two arrays should be included in the resulting array.
Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
Return the resulting array. The returned array must be sorted in ascending order by id.

 

Example 1:

Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.

Example 2:

Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
Explanation: There are no common ids, so we just include each id with its value in the resulting list.
 

Constraints:

1 <= nums1.length, nums2.length <= 200
nums1[i].length == nums2[j].length == 2
1 <= idi, vali <= 1000
Both arrays contain unique ids.
Both arrays are in strictly ascending order by id.

Algorithms for Main Program:
1. Declare and Create a constant named entries1 and initialize it to the new Map.
2. Declare and Create a constant named object1 and initialize it to object key pair pair by converting the entries into object.
3. Declare and Create a constant named resObject and initialize it to the resultant sum of values for the keys common in object1 and object2, and add key value pairs from object1 and object2 into resObject.
4. Convert the resObject into 2D resultant array, resArray.
5. Sort the resArray based on the object key.

Complexity Analysis:
1. Time Complexity = O(nlogn) + O(n) => O(nlogn)
2. Space Complexity = O(n)

*/

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const entries1 = new Map(nums1);
  const object1 = Object.fromEntries(entries1);
  // console.log(object1);

  const entries2 = new Map(nums2);
  const object2 = Object.fromEntries(entries2);
  // console.log(object2);

  const resObject = {};

  for (let key in object1) {
    if (key in object2) {
      resObject[key] = object1[key] + object2[key];
    } else {
      resObject[key] = object1[key];
    }
  }

  for (let key in object2) {
    if (!(key in object1)) {
      resObject[key] = object2[key];
    }

  }
  // console.log(resObject);
  // Converting into 2D array, resArray
  let resArray = Object.entries(resObject);
  // console.log(resArray);
  for (let i = 0; i < resArray.length; i += 1) {
    resArray[i][0] = Number(resArray[i][0])
  }
  // console.log(resArray);
  // Sort the resArray based on Id number 
  resArray.sort((a, b) => a[0] - b[0]);
  // console.log(resArray);

  return resArray;
};

let nums1 = [[1, 2], [2, 3], [4, 5]], nums2 = [[1, 4], [3, 2], [4, 1]];
console.log(mergeArrays(nums1, nums2)); // [[1,6],[2,3],[3,2],[4,6]]

nums1 = [[2, 4], [3, 6], [5, 5]], nums2 = [[1, 3], [4, 3]]
console.log(mergeArrays(nums1, nums2)); // [[1,3],[2,4],[3,6],[4,3],[5,5]]
