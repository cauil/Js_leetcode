/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    var depth = 0;
    if(root.left === null || root.right === null) {
        depth =  Math.max(minDepth(root.left), minDepth(root.right));
    } else {
        depth =  Math.min(minDepth(root.left), minDepth(root.right));
    }
    return depth + 1;
};
