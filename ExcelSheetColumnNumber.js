/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if(s.length == 0){return '';}
    
    var index = 'A'.charCodeAt();
    var sum = 0;

    for(var i = 0; i < s.length; i++){
        sum += (s[i].charCodeAt() - index + 1) * Math.pow(26, s.length - i - 1);
    }
    return sum;
};

