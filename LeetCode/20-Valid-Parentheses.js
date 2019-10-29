/**
 * 20. Valid Parentheses
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * Input: '()'
 * Output: true
 * 
 * Example 2:
 * Input: '()[]{}'
 * Output: true
 * 
 * Example 3:
 * Input: '(]'
 * Output: false
 * 
 * Example 4:
 * Input: '([)]'
 * Output: false
 * 
 * Example 5:
 * Input: '{[]}'
 * Output: true
 *
 * https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const sArr = s.split('');
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let tempArr = [];
  for (let i in sArr) {
    for (let j in brackets) {
      if (sArr[i] === j) {
        tempArr.push(sArr[i]);
      }
      if (sArr[i] === brackets[j]) {
        if (i === 0) {
          return false;
        }
        if (tempArr[tempArr.length - 1] === j) {
          tempArr.splice(tempArr.length - 1, 1);
        } else {
          return false;
        }
      }
    }
  }
  return tempArr.length === 0;
};


console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true