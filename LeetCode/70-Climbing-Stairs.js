/**
 * 70. Climbing Stairs
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1) return 1; 
  if (n === 2) return 2;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
