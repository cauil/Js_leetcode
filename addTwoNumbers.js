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
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var l = head;
    var pl = 0;
    var sum;
    
    while(l1 || l2 || (pl !== 0)) {
        sum = 0;
        if(l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        
        sum = sum + pl;
        pl = sum > 9 ? 1 : 0;
        sum = sum % 10;
        l.next = new ListNode(sum);
        l = l.next;
    }
    return head.next;
};
