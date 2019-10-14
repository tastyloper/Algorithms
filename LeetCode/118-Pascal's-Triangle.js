/**
 * 118. Pascal's Triangle
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * Input: 5
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 *
 * https://leetcode.com/problems/pascals-triangle/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  let result = [[1]];
  if (numRows === 1) return result;
  result.push([1, 1]);
  if (numRows === 2) return result;
  
};

console.log(generate(5));
/*
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */
