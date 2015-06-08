/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length==0){return 0;}
    var row = grid.length, col = grid[0].length;

    function min(a, b){
        return (a-b)>0?b:a;
    }

    for(var i=0; i<row; i++){
        for(var j=0; j<col; j++){
            if(i==0 && j==0){
                grid[i][j]=grid[0][0];
            }else if(i==0 && j>0){
                grid[i][j] += grid[i][j-1];
            }else if(j==0 && i>0){
                grid[i][j] += grid[i-1][j];
            }else{
                grid[i][j] += min(grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[row-1][col-1];
};

