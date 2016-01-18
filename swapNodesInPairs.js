/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var cur = head;
    var swap;
    var pre = new ListNode(0);
    var pre1 = pre;
    while(cur && cur.next) {
        swap = cur.next.next;
        pre.next = cur.next;
        cur.next.next = cur;
        cur.next = swap;
        
        pre = cur;
        cur = swap;
    }
    return (pre1.next ? pre1.next : head);
};
