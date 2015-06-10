/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1 || s.length <= numRows){return s;}
    var len = s.length;
    var arr = [];
    for(var i = 0; i < numRows; i++){
        arr[i] = '';
    }
    i = 0;
    while(i < len){
        for(var idx = 0; idx < numRows && i < len; idx ++){
            arr[idx] += s[i];
            i++;
        }
        for(idx = numRows-2; idx >= 1 && i < len; idx --){
            arr[idx] += s[i];
            i++;
        }
    }
    return arr.join("");
};
