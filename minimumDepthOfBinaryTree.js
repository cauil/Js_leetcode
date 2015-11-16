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
    var stack = [];
    var tuple, node, len, depth;
    
    if(root === null) return 0;
    stack.push([root, 1]);
    while(stack.length > 0) {
        tuple = stack.pop();
        node = tuple[0];
        len = tuple[1];
        if(node.left === null && node.right === null) {
            if(depth === undefined) depth = len;
            else depth = Math.min(depth, len);
        }
        else {
            if(node.left !== null) stack.push([node.left, len + 1]);
            if(node.right !== null) stack.push([node.right, len + 1]);
        }
    }
    return depth;
    
};
