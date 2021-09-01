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
var addTwoNumbers = function(l1, l2) {
  l1 = LinkedList2Array(l1);
  l2 = LinkedList2Array(l2);
  const n1 = parseInt(l1.reverse().join(''));
  const n2 = parseInt(l2.reverse().join(''));
  const res = (n1 + n2).toString().split('');

  // console.log(n1, n2, res);
  return Array2LinkedList(res);
};

function LinkedList2Array(l) {
  const res = [];
  node = l;
  do {
    res.push(node.val);
    node = node.next;
  } while (node.next);
  res.push(node.val);
  return res;
}

function Array2LinkedList(arr) {
  return arr.reduce((acc, curr, i, arr) => {
    const node = {};
    node.val = curr;
    node.next =  acc;
    return node;
  }, null);
}