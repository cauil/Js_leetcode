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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var subSum;
    if(root === null) return false;
    else {
        if(root.left === null && root.right === null) return root.val === sum;
        else {
            subSum = sum - root.val;
            return hasPathSum(root.left, subSum) || hasPathSum(root.right, subSum);
        }
    }
};
