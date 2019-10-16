/**
 * 119. Pascal's Triangle II
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * Follow up:
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  if (rowIndex === 0) return [1];
  const result = [];
  for (let i = 0; i <= rowIndex; i++) {
    let currRow = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(currRow);
  }
  return result[rowIndex];
};

console.log(getRow(0)); // [1]
console.log(getRow(3)); // [1,3,3,1]
