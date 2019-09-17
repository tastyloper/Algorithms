/**
 * 876. Middle of the Linked List
 *
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * 
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 * 
 * Example 2:
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * Note:
 * The number of nodes in the given list will be between 1 and 100.
 *
 * https://leetcode.com/problems/middle-of-the-linked-list/
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
const list111 = new ListNode(3);
const list1111 = new ListNode(4);
const list11111 = new ListNode(5);
list1.next = list11;
list11.next = list111;
list111.next = list1111;
list1111.next = list11111;

const list2 = new ListNode(1);
const list21 = new ListNode(2);
const list211 = new ListNode(3);
const list2111 = new ListNode(4);
const list21111 = new ListNode(5);
const list211111 = new ListNode(6);
list2.next = list21;
list21.next = list211;
list211.next = list2111;
list2111.next = list21111;
list21111.next = list211111;


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = head => {
  let arr = [];
  let node = head;
  
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  arr = arr.filter((v, i) => i >= Math.floor(arr.length / 2));
  const newList = new ListNode(arr[0]);
  let curr = newList;
  let i = 1;

  while (i < arr.length) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
    i += 1;
  }

  return newList;
};

console.log(middleNode(list1));
console.log(middleNode(list2));
