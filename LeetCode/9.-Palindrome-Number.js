/**
 * 9. Palindrome Number
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var temp = x;
  var rev = 0;

  while(temp > 0) {
    rev = (temp % 10) + (rev * 10);
    temp = Math.floor(temp / 10);
  }

  return rev === x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
