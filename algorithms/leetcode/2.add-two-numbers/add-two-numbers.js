/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  l1 = LinkedList2Array(l1);
  l2 = LinkedList2Array(l2);
  const n1 = BigInt(l1.reverse().join(''));
  const n2 = BigInt(l2.reverse().join(''));
  const res = (n1 + n2).toString().split('');

  //console.log(n1, n2, res);
  return Array2LinkedList(res);
};

const LinkedList2Array = node => {
  const res = [];
  while (node.next) {
    res.push(node.val);
    node = node.next;
  }
  res.push(node.val);
  return res;
}

const Array2LinkedList = arr => arr.reduce(
  (acc, curr) => ({
    val: curr,
    next: acc,
  }),
  null
);