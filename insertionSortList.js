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
var insertionSortList = function(head) {
    if(!head) return head;
    var new_head = new ListNode(0);
    new_head.next = head;
    var pre = new_head;
    var cur = head;
    var temp;
    while(cur) {
        if(cur.next && cur.next.val < cur.val) {
            while(pre.next && pre.next.val < cur.next.val) {
                pre = pre.next;
            }
            temp = pre.next;
            pre.next = cur.next;
            cur.next = cur.next.next;
            pre.next.next = temp;
            pre = new_head;
        } else {
            cur = cur.next;
        }
    }
    return new_head.next;
};
