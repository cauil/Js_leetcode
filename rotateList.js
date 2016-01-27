/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;
    var slow = head;
    var fast = head;
    var i = 0;
    
    while(slow) {
        slow = slow.next;
        i++;
    }
    k = k % i;
    slow = head;
    
    for(i = 0; i < k; i++) {
        fast = fast.next;
    }
    while(fast) {
        pre = slow;
        slow = slow.next;
        fast = fast.next;
    }
    pre.next = null;
    pre = dummy;
    while(slow) {
        fast = slow.next;
        pre.next = slow;
        slow.next = head;
        pre = slow;
        slow = fast;
    }
    return dummy.next;
};
