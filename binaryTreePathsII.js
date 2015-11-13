/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    var resultL = [];
    var resultR = [];
    var len, i;
    if(root === null) return result;
    if(root.left === null && root.right === null) {
        result.push("" + root.val);
        return result;
    }
    
    if(root.left !== null) {
        resultL = binaryTreePaths(root.left);
        for(i = 0, len = resultL.length; i < len; i++) {
            result.push(root.val + "->" + resultL[i]);
        }
    }
    
    if(root.right !== null) {
        resultR = binaryTreePaths(root.right);
        for(i = 0, len = resultR.length; i < len; i++) {
            result.push(root.val + "->" + resultR[i]);
        }
    }
    return result;
    
    

};
