/**
 * 169. Majority Element
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * Example 1:
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *
 * https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  let result = 0;
  let compare = 0;
  let obj = {};
  nums.forEach(v => {
    if (obj.hasOwnProperty(v)) {
      obj[v] += 1;
    } else {
      obj[v] = 1;
    }
  });
  for (let i in obj) {
    if (obj[i] > compare) {
      compare = obj[i];
      result = i;
    }
  }
  return result;
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
