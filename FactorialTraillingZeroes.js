/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var count = 0;
    while(n >= 5){
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return count;
};

