/**
 * 약수의 합
 *
 * 문제 설명
 * 자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * 
 * 제한 사항
 * n은 0 이상 3000이하인 자연수입니다.
 *
 * Example 1:
 * Input: 12
 * Output: 28
 *
 * Example 2:
 * Input: 5
 * Output: 6
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12928
 */

/**
 * @param {number} n
 * @return {number}
 */
const solution = (n) => {
  if (n < 0 && n > 3000) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += String(n/i).indexOf('.') === -1 ? n / i : 0;
  }
  return sum;
};

console.log(solution(12));
console.log(solution(5));
