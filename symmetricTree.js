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
    function isMirror(p, q) {
        if(p === null && q=== null) return true;
        if(p === null || q === null) return false;
        return p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left);
    }
    if(root === null) return true;
    return isMirror(root.left, root.right);
};
