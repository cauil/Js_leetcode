/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.match(/\w+/g);
    if(arr === null){return 0;}
    else{return arr[arr.length-1].length;}
};

