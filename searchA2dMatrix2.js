/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var l = 0;
    var r = m * n;
    var k, v;
    while(l !== r) {
        k = parseInt( (l + r) / 2 );
        v = matrix[parseInt(k / n)][k % n];
        if(v === target) return true;
        else if(v < target) l = k + 1;
        else r = k;
    }
    return false;
};
