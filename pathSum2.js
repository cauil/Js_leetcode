/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    function dfs(node, path, remain, res) {
        path.push(node.val);
        if(node.left === null && node.right === null && remain === node.val) {
            res.push(path.slice(0));
        }
        if(node.left !== null) dfs(node.left, path, remain - node.val, res);
        if(node.right !== null) dfs(node.right, path, remain - node.val, res);
        path.pop();
    }
    var result = [];
    var path1 = [];
    if(root === null) return [];
    dfs(root, path1, sum, result);
    return result;
};
