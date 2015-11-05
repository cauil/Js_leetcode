/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var matrix1 = [];
    var n = matrix[0].length;
    var len = n * n;
    //if(n === 1 ) return;
    for(var i = 0; i < len; i++) {
        matrix1[i] = matrix[parseInt(i / n)][i % n];
    }
    for(i = 0; i < len; i++) {
        matrix[i % n][n - 1 - parseInt(i / n)] = matrix1[i];
    }
};
