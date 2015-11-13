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
    var findPath = function(node, path) {
        if(!node) return;
        else path += node.val;
        
        if(!node.left && !node.right) return result.push(path);
        else {
            path += "->";
        }
        
        if(node.left) findPath(node.left, path);
        if(node.right) findPath(node.right, path);
    };
    
    findPath(root, "");
    return result;
};
