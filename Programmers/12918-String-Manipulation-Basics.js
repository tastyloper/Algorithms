/**
 * 문자열 다루기 기본
 * 
 * 문제 설명
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
 * 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
 * 
 * 제한 사항
 * s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * 
 * 입출력 예
 * s	    return
 * a234	  false
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12918
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const solution = s => {
  if (!(s.length === 4 || s.length === 6)) return false;
  const regexp = /^[0-9]*$/;
  return regexp.test(s);
};

console.log(solution('a234')); // false
console.log(solution('1234')); // true
