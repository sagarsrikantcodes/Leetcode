/*
 Problem -
 Input - Given an integer, numRows that belongs to a pascal's triangle. The value at the first row is always 1.
 Output - Return the first numRows of pascal's triangle.

 Example/test Cases - Given in the problem.

 Data Structures -
 Input - Integer data type (i.e, numRows)
 Output - Return the array or arraylist.

 Algorithm -
 1. Initialize the output array, res to an empty array.
 2. Iterate the rows from 1 until numRows.
    2.1 Initialize the value of the output array at the ith row to be an empty array.
    2.2 Initialize the value of the output array at index, i and first column (j = 0) to be 1.
    2.3 Iterate from second column (j = 1) until column less than row index, i.
        2.3.1. The value of the output array at ith row and jth column index is equal
        to the sum of the output array at ()i-1)th row, jth column and (i - 1)th row, (j - 1)th column.
    2.4 Initialize the value of the output array at index, i and last column (j = i) to be 1.
3. Return the 2D output array, res onto the main method/calling function.

Analysis -
Time Complexity = O(N ^ 2)
Space Complexity = O(N ^ 2), If we count the output array as an extra space.

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Code with Implementation 

/*
var generate = function(numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = [];
        res[i][0] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
        }
        res[i][i] = 1;
    }
    return res;
};
*/

var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i += 1) {
    let subArray = [];
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || i === j) {
        subArray.push(1);
      } else {
        subArray.push(res[i - 1][j] + res[i - 1][j - 1]);
      }
    }
    res.push(subArray);
  }

  return res;
}

console.log(generate(5));
// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1));
// [[1]]




