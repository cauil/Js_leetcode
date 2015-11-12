/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    var stack = [];
    var largestRec = 0;
    var curNum, index;
    height.push(0);
    
    var i = 0;
    var len = height.length;
    
    while(i < len) {
        curNum = height[i];
        if(stack.length === 0 || curNum >= height[stack[stack.length-1]]) {
            stack.push(i);
            i += 1;
        } else {
            index = stack.pop();
            if(stack.length > 0) {
                width = i - stack[stack.length - 1] - 1;
            } else {
                width = i;
            }
            largestRec = Math.max(largestRec, height[index] * width);
        }
    }
    return largestRec;
};
