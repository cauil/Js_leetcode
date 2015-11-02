/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var i = 0;
    var j = matrix.length;
    var index;
    for(i = 1; i < j; i++) {
        if(matrix[i][0] > target) {
            index = i - 1;
            break;
        }
    }
    index = i - 1;
    j = matrix[index].length;
    for(i = 0; i < j; i++) {
        if(matrix[index][i] === target) return true;
    }
    return false;
};
