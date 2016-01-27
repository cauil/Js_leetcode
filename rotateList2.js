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
    var slow = dummy;
    var fast = dummy;
    var i;
    for(i = 0; fast.next; i++) {
        fast = fast.next;
    }
    for(var j = i - k % i; j > 0; j--) {
        slow = slow.next;
    }
    fast.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
    
    return dummy.next;
};
