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
var sumNumbers = function(root) {
    var sum = 0;
    function call(node, x) {
        if(node.left === null && node.right === null) sum += x;
        if(node.left !== null) call(node.left, x*10 + node.left.val);
        if(node.right !== null) call(node.right, x*10 + node.right.val);
    }
    
    if(root === null) return 0;
    else call(root, root.val);
    return sum;
};
