/**
 * 989. Add to Array-Form of Integer
 *
 * For a non-negative integer X, the array-form of X is an array of its digits in left to right order.
 * For example, if X = 1231, then the array form is [1,2,3,1].
 * 
 * Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.
 * 
 * Example 1:
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * 
 * Example 2:
 * Input: A = [2,7,4], K = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * 
 * Example 3:
 * Input: A = [2,1,5], K = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 * 
 * Example 4:
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 *  
 * Note：
 * 1. 1 <= A.length <= 10000
 * 2. 0 <= A[i] <= 9
 * 3. 0 <= K <= 10000
 * 4. If A.length > 1, then A[0] != 0
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// const addToArrayForm = (A, K) => {
//   let result = [];
//   let tempNum = 0;
//   K = (K + '');
//   let loopA = A.length >= K.length ? A : K;
//   for (let i = 1; i <= loopA.length; i++) {
//     let sum = ((K.length - i) > -1 ? parseInt(K[K.length - i]) : 0) + ((A.length - i) > -1 ? A[A.length - i] : 0);

//     if (tempNum) {
//       sum += 1;
//       tempNum = 0;
//     }

//     if (sum > 9) {
//       sum -= 10;
//       tempNum = 1;
//     } else {
//       tempNum = 0;
//     }

//     result.unshift(sum);

//     if (i === loopA.length && tempNum) {
//       result.unshift(1);
//     }
//   }

//   return result;
// };
const addToArrayForm = (A, K) => {
  const N = A.length;
  let cur = K;
  let ans = [];

  let i = N;
  while (--i >= 0 || cur > 0) {
    if (i >= 0) cur += A[i];
    ans.push(cur % 10);
    cur /= 10;
  }

  ans.reverse();
  return ans;
};

console.log(addToArrayForm([1,2,0,0], 34)); // [1,2,3,4]
console.log(addToArrayForm([0], 23)); // [2,3]
console.log(addToArrayForm([6], 809)); // [8,1,5]
console.log(addToArrayForm([2,7,4], 181)); // [4,5,5]
console.log(addToArrayForm([2,1,5], 806)); // [1,0,2,1]
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1)); // [1,0,0,0,0,0,0,0,0,0,0]
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516)); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]


