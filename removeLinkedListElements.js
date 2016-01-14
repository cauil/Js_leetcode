/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return head;
    var a = {val: 0, next: null};
    var b, pre, cur;
    a.next = head;
    b = a;
    pre = b;
    cur = b.next;
    
    while(cur) {
        if(cur.val === val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    return a.next;
};
