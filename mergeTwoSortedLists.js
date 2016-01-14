/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    var l, index;
    if(l1.val < l2.val) {
        index = l1;
        l = l1;
        l1 = l1.next;
    } else {
        index = l2;
        l = l2;
        l2 = l2.next;
    }
    while(l1 || l2) {
        if(!l1) {
            index.next = l2;
            return l;
        }
        if(!l2) {
            index.next = l1;
            return l;
        }
        if(l1.val < l2.val) {
            index.next = l1;
            l1 = l1.next;
            index = index.next;
        } else {
            index.next = l2;
            l2 = l2.next;
            index = index.next;
        }
    }
};
