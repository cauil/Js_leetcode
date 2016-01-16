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
var sortList = function(head) {
    var h = head;
    var vals = [];
    while(h) {
        vals.push(h.val);
        h = h.next;
    }
    vals.sort(function(a, b) {
        return a-b;
    });
    var h1 = head;
    var count = 0;
    while(h1) {
        h1.val = vals[count];
        h1 = h1.next;
        count++;
    }
    return head;
};
