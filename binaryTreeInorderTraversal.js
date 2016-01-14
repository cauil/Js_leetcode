/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null) return [];
    var result = [];
    var helper = function(node) {
        if(node.left) helper(node.left);
        result.push(node.val);
        if(node.right) helper(node.right);
    }
    helper(root);
    return result;
};
