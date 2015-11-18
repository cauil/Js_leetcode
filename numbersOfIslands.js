/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var row = grid.length;
    if(row === 0) return 0;
    var column = grid[0].length;
    if(column === 0) return 0;
    var islandNumber = 0;
    var i, j;
    var color = Array(row);
    
    var dfs = function(i, j, grid) {
        if(i<0 || i>=row || j<0 || j>=column || color[i][j]) return;
        if(grid[i][j] == 1) {
            color[i][j] = 1;
            dfs(i, j-1, grid);
            dfs(i, j+1, grid);
            dfs(i-1, j, grid);
            dfs(i+1, j, grid);
        }
    };
    
    for(i = 0; i < row; i++) {
        color[i] = Array(column);
    }
    for(i = 0; i < row; i++) {
        for(j = 0; j < column; j++) {
            color[i][j] = 0;
        }
    }
    for(i = 0; i < row; i++) {
        for(j = 0; j < column; j++) {
            if(grid[i][j] == 0) {
                color[i][j] = 1;
            } else if(!color[i][j]) {
                ++islandNumber;
                dfs(i, j, grid);
            }
        }
    }
    return islandNumber;
};
