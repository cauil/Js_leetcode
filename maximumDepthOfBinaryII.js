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
var maxDepth = function(root) {
    var stack = [];
    var nextLevel = [];
    var depth = 0;
    var node, i, len;
    
    if(root === null) return 0;
    stack.push(root);
    while(stack.length > 0) {
        nextLevel = [];
        depth += 1;
        for(i = 0, len = stack.length; i < len; i++) {
            if(stack[i].left !== null) nextLevel.push(stack[i].left);
            if(stack[i].right !== null) nextLevel.push(stack[i].right);
        }
        stack = nextLevel;
    }
    return depth;
};
