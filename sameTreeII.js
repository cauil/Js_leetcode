/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var stack = [];
    var index, indexP, indexQ;
    if(p === null && q === null) return true;
    else if(p === null || q===null) return false;
    else {
        stack.push([p, q]);
        while(stack && stack.length !==0 ) {
            index = stack.pop();
            indexP = index[0];
            indexQ = index[1];
            if(indexP === null && indexQ === null) continue;
            else if(indexP === null || indexQ === null) return false;
            else {
                if(indexP.val !== indexQ.val) return false;
                stack.push([indexP.left, indexQ.left]);
                stack.push([indexP.right, indexQ.right]);
            }
        }
    }
    return true;
};
