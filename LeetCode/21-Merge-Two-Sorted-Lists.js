/**
 * 21. Merge Two Sorted Lists
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/
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
const list11 = new ListNode(2);
const list12 = new ListNode(4);
list1.next = list11;
list11.next = list12;

const list2 = new ListNode(1);
const list21 = new ListNode(3);
const list22 = new ListNode(4);
list2.next = list21;
list21.next = list22;


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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let newArr = [];
  let result;
  if (!l1 && !l2) {
    result = null;
  } else {
    newArr = toArr(l1).concat(toArr(l2)).sort((a, b) => a - b);

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


console.log(mergeTwoLists(list1, list2));
