/**
 * 14. Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string ''.
 * 
 * Example 1:
 * Input: ['flower','flow','flight']
 * Output: 'fl'
 * 
 * Example 2:
 * Input: ['dog','racecar','car']
 * Output: ''
 * Explanation: There is no common prefix among the input strings.
 * 
 * Note:
 * All given inputs are in lowercase letters a-z.
 *
 * https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs == null || strs.length == 0) return '';
  for (var i  = 0; i < strs[0].length; i++) {
      var c = strs[0].charAt(i); // charAt은 문자에 해당 인덱스 한부분만 추출, ()안에는 인덱스값(숫자)를 넣음
      for (var j = 1; j < strs.length; j++) {
          if (i == strs[j].length || strs[j].charAt(i) != c)
              return strs[0].substring(0, i);
      }
  }
  return strs[0];
};


console.log(romanToInt(['flower','flow','flight'])); // 'fl'
console.log(romanToInt(['dog','racecar','car'])); // ''
