/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return null;
    if(!head.next) return new TreeNode(head.val);
    var slow = head;
    var fast = head.next.next;
    var tem, root;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    tem = slow.next;
    slow.next = null;
    root = new TreeNode(tem.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(tem.next);
    return root;
