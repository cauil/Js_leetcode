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
    var result = [];
    var queue = [];
    var nextLevel = [];
    var i, len;
    if(root === null) return [];
    queue.push(root);
    while(queue.length > 0) {
        nextLevel = [];
        result.push(queue[queue.length - 1].val);
        for(i = 0, len = queue.length; i < len; i++) {
            if(queue[i].left !== null) nextLevel.push(queue[i].left);
            if(queue[i].right !== null) nextLevel.push(queue[i].right);
        }
        queue = nextLevel;
    }
    return result;
};
