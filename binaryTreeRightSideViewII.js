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
var rightSideView = function(root) {
    var res = [];
    function dfs(node, level, res) {
        if(level === res.length) res.push(node.val);
        if(node.right !== null) dfs(node.right, level + 1, res);
        if(node.left !== null) dfs(node.left, level + 1, res);
    }
    if(root === null) return [];
    dfs(root, 0, res);
    return res;
};
