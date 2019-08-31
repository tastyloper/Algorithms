/**
 * 67. Add Binary
 *
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 * Input: a = '11', b = '1'
 * Output: '100'
 *
 * Example 2:
 * Input: a = '1010', b = '1011'
 * Output: '10101'
 *
 * https://leetcode.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let carry = 0;
  let result = '';
  let [aIdx, bIdx] = [a.length - 1, b.length - 1];
  while (aIdx >= 0 || bIdx >= 0) {
    const x = a[aIdx] ? Number(a[aIdx]) : 0;
    const y = b[bIdx] ? Number(b[bIdx]) : 0;
    const sum = carry + x + y;
    result = (sum % 2) + result;
    carry = sum / 2 | 0;
    aIdx--;
    bIdx--;
  }
  return carry ? carry + result : result;
};

console.log(addBinary('11', '1'));
console.log(addBinary('11', '11'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'));
