/**
 * 83. Remove Duplicates from Sorted List
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 * Input: 1->1->2
 * Output: 1->2
 *
 * Example 2:
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const list1 = new ListNode(1);
const list11 = new ListNode(1);
const list12 = new ListNode(2);
list1.next = list11;
list11.next = list12;

const list2 = new ListNode(1);
const list21 = new ListNode(1);
const list22 = new ListNode(2);
const list23 = new ListNode(3);
const list24 = new ListNode(3);
list2.next = list21;
list21.next = list22;
list22.next = list23;
list23.next = list24;

const list3 = null;

const toArr = (li) => {
  if (!li) { return []; }
  let curr = li.next;
  let arr = [li.val];

  while (curr) {
    arr = [...arr, curr.val];
    curr = curr.next;
  }

  return arr;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let result = head;
  if (head) {
    const newArr = toArr(head).reduce((a,b) => { if(a.indexOf(b)<0) a.push(b); return a; }, []);
    const newList = new ListNode(newArr[0]);
    let curr = newList;
    let i = 1;
    while (i < newArr.length) {
      curr.next = new ListNode(newArr[i]);
      curr = curr.next;
      i += 1;
    }
    result = newList;
  }

  return result;
};

console.log(deleteDuplicates(list1));
console.log(deleteDuplicates(list2));
console.log(deleteDuplicates(list3));
