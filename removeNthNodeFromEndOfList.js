/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var left, before, right = head;
  left = before = {next: head}; 
  while (n--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return before.next;
};
