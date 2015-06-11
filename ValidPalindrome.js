/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g, '');
    if(s === ''){return true;}

    s = s.toLowerCase();
    for(var i = 0, j = s.length-1; i<j; i++, j--){
        if(s.charAt(i) != s.charAt(j)){
            return false;
        }
    }
    return true;
};

