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
var isBalanced = function(root) {
    function treeDepth(r) {
        if(r === null) return 0;
        var leftDepth = treeDepth(r.left);
        var rightDepth = treeDepth(r.right);
        return leftDepth > rightDepth ? (leftDepth + 1) : (rightDepth + 1);
    }
    if(root === null) return true;
    var diff = treeDepth(root.left) - treeDepth(root.right);
    if(diff > 1 || diff < -1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};
