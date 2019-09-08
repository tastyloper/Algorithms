/**
 * 7. Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 *
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var arr = String(x).split("");
  var minus = "";
  if (arr.indexOf("-") >= 0) {
      arr.splice(arr.indexOf("-"),1);
      minus = "-";
  }
  var r = arr.reverse();
  var join = r.join("");
  
  var result = Number(minus + join);
  
  if (result > Math.pow(2, 31) - 1) {
      result = 0;
  } else if (result < Math.pow(-2, 31)) {
      result = 0;
  }
  
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
