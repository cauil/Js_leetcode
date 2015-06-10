/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 0){return '';}
    if(numRows == 1 || s.length <= numRows){return s;}
    var arr = new Array(numRows);
    var index;
    for(var i = 0; i < numRows; i++){
        arr[i] = '';
    }
    for(i = 0; i < s.length; i++){
        index = i % (2 * (numRows - 1));
        if(index < numRows){
            arr[index] = arr[index] + s[i];
        }
        else{
            index = numRows - 2 - index % numRows;
            arr[index] = arr[index] + s[i];
        }
    }
    return arr.join("");
};

