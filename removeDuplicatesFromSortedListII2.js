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
var deleteDuplicates = function(head) {
    var dummy = new ListNode(0);
    var pt = dummy;
    var repeat = 0;
    
    while(head && head.next) {
        if(head.val !== head.next.val) {
            if(!repeat) {
                pt.next = head;
                pt = pt.next;
            }
            repeat = 0;
        } else {
            repeat = 1;
        }
        head = head.next;
    }
    if(repeat) {
        pt.next = null;
    } else {
        pt.next = head;
    }
    return dummy.next;
};
