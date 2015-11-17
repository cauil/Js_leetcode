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
    var nodeQueue = [];
    var numberQueue = [];
    var node, number;
    
    if(root === null) return 0;
    else {
        nodeQueue.push(root);
        numberQueue.push(root.val);
    }
    while(nodeQueue.length > 0) {
        node = nodeQueue.shift();
        number = numberQueue.shift();
        if(node.left === null && node.right === null) sum += number;
        if(node.left !== null) {
            nodeQueue.push(node.left);
            numberQueue.push(number * 10 + node.left.val);
        }
        if(node.right !== null) {
            nodeQueue.push(node.right);
            numberQueue.push(number * 10 + node.right.val);
        }
    }
    return sum;
};
