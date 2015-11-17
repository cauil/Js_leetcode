
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
    if(root === null)
        return [];

    var stack = [];
    var res = [];
    stack.push([root, 0, []]);

    while(stack.length > 0){
        var items = stack.pop();
        var node = items[0];
        var sm = items[1];
        var array = items[2].slice();//deep copy this array
        sm = sm + node.val;
        array.push(node.val);

        if(!node.left && !node.right && sm === sum)
            res.push(array);
        if(node.right)
            stack.push([node.right, sm, array]);
        if(node.left)
            stack.push([node.left, sm, array]);
    }

    return res;
};
