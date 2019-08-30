/**
 * 58. Length of Last Word
 *
 * Given a string s consists of upper/lower-case alphabets
 * and empty space characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space characters only.
 *
 * Example:
 * Input: 'Hello World'
 * Output: 5
 *
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const split = s.split(' ').filter(n => n);
  return split[split.length - 1] ? split[split.length - 1].length : 0;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('Length of Last Word'));
console.log(lengthOfLastWord('a '));
console.log(lengthOfLastWord('b   a    '));
