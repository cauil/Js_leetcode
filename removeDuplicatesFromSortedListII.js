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
    var dict = {};
    var node = head;
    var pre;
    while(node) {
        if(!dict[node.val]) {
            dict[node.val] = 1;
        } else {
            dict[node.val] += 1;
        }
        node = node.next;
    }
    node = {};
    node.val = 0;
    node.next = head;
    pre = node;
    while(head) {
        if(dict[head.val] > 1) {
            pre.next = head.next;
        } else {
            pre = head;
        }
        head = head.next;
    }
    return node.next;
};
