/**
 * 168. Excel Sheet Column Title
 *
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * 
 * For example:
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB 
 *     ...
 * 
 * Example 1:
 * Input: 1
 * Output: "A"
 * 
 * Example 2:
 * Input: 28
 * Output: "AB"
 * 
 * Example 3:
 * Input: 701
 * Output: "ZY"
 *
 * https://leetcode.com/problems/excel-sheet-column-title/
 */

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function(n) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = [];
  while (n > 0) {
    const remainder = n % 26 || 26;
    n = (n - remainder) / 26;
    result.unshift(alphabet[remainder - 1]);
  }
  return result.join('');
};

console.log(convertToTitle(1)); // 'A'
console.log(convertToTitle(26)); // 'Z'
console.log(convertToTitle(28)); // 'AB'
console.log(convertToTitle(52)); // 'AZ'
console.log(convertToTitle(701)); // 'ZY'
console.log(convertToTitle(702)); // 'ZZ'
console.log(convertToTitle(703)); // 'AAA'
console.log(convertToTitle(1048)); // 'ANH'
