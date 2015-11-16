/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var stack = [];
    var node1, node2;
    if(root === null) return true;
    stack.push(root.left);
    stack.push(root.right);
    while(stack.length > 0) {
        node1 = stack.pop();
        node2 = stack.pop();
        if(node1 === null && node2 === null) continue;
        if(node1 === null || node2 === null || node1.val !== node2.val) return false;
        stack.push(node1.left);
        stack.push(node2.right);
        stack.push(node1.right);
        stack.push(node2.left);
    }
    return true;
};
