/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return;
    var p1 = head;
    var p2 = head.next;
    var tem;
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    var head2 = p1.next;
    p1.next = null;
    
    p2 = head2.next;
    head2.next = null;
    while(p2) {
        p1 = p2.next;
        p2.next = head2;
        head2 = p2;
        p2 = p1;
    }
    
    for(p1 = head, p2 = head2; p1;) {
        tem = p1.next;
        p1.next = p2;
        p1 = p2;
        p2 = tem;
    }
};
