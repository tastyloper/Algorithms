/**
 * 모의고사
 *
 * 문제 설명
 * 수포자는 수학을 포기한 사람의 준말입니다.
 * 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한 사항
 * 시험은 최대 10,000 문제로 구성되어있습니다.
 * 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
 * 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 *
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: [1]
 *
 * Example 2:
 * Input: [1,3,2,4,2]
 * Output: [1,2,3]
 *
 * https://programmers.co.kr/learn/courses/30/lessons/42840
 */

/**
 * @param {number[]} answers
 * @return {number[]}
 */
const solution = (answers) => {
  if (answers.length > 10000) return null;
  const case1 = [1, 2, 3, 4, 5];
  const case2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const case3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if(case1[i % 5] == answers[i]) count[0]++;
    if(case2[i % 8] == answers[i]) count[1]++;
    if(case3[i % 10] == answers[i]) count[2]++;
  }
  const [count1, count2, count3] = count;
  let max = Math.max(count1, count2, count3);
  let result = [];

  if (count1 === max) { result = [...result, 1] }
  if (count2 === max) { result = [...result, 2] }
  if (count3 === max) { result = [...result, 3] }
  return result;
};

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
