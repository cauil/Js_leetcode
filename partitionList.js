/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var hd1 = new ListNode(0);
    var hd2 = new ListNode(0);
    var p1 = hd1;
    var p2 = hd2;
    while(head) {
        if(head.val < x) {
            p1.next = head;
            p1 = p1.next;
        } else {
            p2.next = head;
            p2 = p2.next;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = hd2.next;
    return hd1.next;
};
