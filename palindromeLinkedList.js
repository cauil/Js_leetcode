/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    function reverse(curr) {
        var prev = null;
        var next;
        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    var fast = head;
    var slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast) slow = slow.next;
    
    slow = reverse(slow);
    while(slow && head.val === slow.val) {
        head = head.next;
        slow = slow.next;
    }
    return slow === null;
};
