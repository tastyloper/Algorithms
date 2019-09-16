/**
 * 1030. Matrix Cells in Distance Order
 *
 * We have a collection of rocks, each rock has a positive integer weight.
 * 
 * Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 *   * If x == y, both stones are totally destroyed;
 *   * If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
 * 
 * At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
 *
 * Example 1:
 * Input: [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 * We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 * 
 * Note:
 *   * 1 <= stones.length <= 30
 *   * 1 <= stones[i] <= 1000
 *
 * https://leetcode.com/problems/last-stone-weight/
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = stones => {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => b - a);
    if (stones[0] !== stones[1]) {
      stones = [...stones.filter((v, i) => i > 1), Math.abs(stones[0] - stones[1])];
    } else {
      stones = stones.filter((v, i) => i > 1)
    }
  }
  return stones.length ? stones.join() : 0;
};

// const lastStoneWeight = stones => {
//   if(!stones || stones.length == 0) return 0;
  
//   while(stones.length > 1) {
//     stones.sort((a, b) => b - a);
//     let x = stones.shift() - stones.shift();
//     stones.push(x);
//   }
  
//   return stones[0];
// };

// const lastStoneWeight = stones => {
//   if (stones.length === 1) return stones[0];
    
//   const [stoneA, stoneB, ...anyStones] = stones.sort((a, b) => b - a);
//   return lastStoneWeight([...anyStones, Math.abs(stoneA - stoneB)]);
// };

console.log(lastStoneWeight([2,7,4,1,8,1]));
