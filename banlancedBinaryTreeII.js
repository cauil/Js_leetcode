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
    function height(r) {
        if(r === null) return 0;
        var leftH = height(r.left);
        var rightH = height(r.right);
        if(leftH === -1) return -1;
        if(rightH === -1) return -1;
        if(Math.abs(leftH - rightH) > 1) return -1;
        return Math.max(leftH, rightH) + 1;
    }
    return height(root) !== -1;
};
