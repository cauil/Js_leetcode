/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){return false;}
    var p1 = 0, p2 = x;
    while(p2 > 0){
        p1 = p1 * 10 + p2 % 10;
        p2 = Math.floor(p2 / 10);
    }
    return p1 == x;
};

