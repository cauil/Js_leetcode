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
var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    var slow2;
            
    while(fast && fast.next) {

        fast = fast.next.next;
        slow = slow.next;
        
        if(fast == slow) {
            slow2 = head;
            while(slow != slow2) {
                slow = slow.next;
                slow2 = slow2.next
            }
            return slow;
        }
    }
    return null;
};
