/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var newHead = new ListNode(0);
    newHead.next = head;
    var pre = newHead;
    var cur, move;
    for(var i = 0; i < m - 1; i++) {
        pre = pre.next;
    }
    cur = pre.next;
    for(i = m; i < n; i++) {
        move = cur.next;
        cur.next = move.next;
        move.next = pre.next;
        pre.next = move;
    }
    return newHead.next;
};
