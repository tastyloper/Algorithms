/**
 * 사각형 한 개의 좌표
 *
 * 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다.
 * 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때,
 * 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요.
 * 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.
 * 
 * 제한 사항
 * v는 세 점의 좌표가 들어있는 2차원 배열입니다.
 * v의 각 원소는 점의 좌표를 나타내며, 좌표는 [x축 좌표, y축 좌표] 순으로 주어집니다.
 * 좌표값은 1 이상 10억 이하의 자연수입니다.
 * 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return 해주세요.
 *
 * Example 1:
 * Input: [[1, 4], [3, 4], [3, 10]]
 * Output: [1, 10]
 *
 * Example 2:
 * Input: [[1, 1], [2, 2], [1, 2]]
 * Output: [2, 1]
 *
 * https://www.welcomekakao.com/tryouts/3930/challenges/11622?language=javascript
 */

/**
 * @param {number[][]} v
 * @return {number[]}
 */
const solution = (v) => {
  let x = [];
  let y = [];
  for (let i = 0; i < v.length; i++) {
    x = x.indexOf(v[i][0]) === -1 ? [...x, v[i][0]] : x.filter(n => n !== v[i][0]);
    y = y.indexOf(v[i][1]) === -1 ? [...y, v[i][1]] : y.filter(n => n !== v[i][1]);
  }
  return [...x, ...y]
};

console.log(solution([[1, 4], [3, 4], [3, 10]]));
console.log(solution([[1, 1], [2, 2], [1, 2]]));
