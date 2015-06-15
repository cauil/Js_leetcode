/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var i = 0;
    var result = 0;
    var index = 1;

    if(str[i] == '-' || str[i] == '+'){
        index = (str[i] == '-') ? -1 : 1;
        i++;
    }
    while(i < str.length && ((str[i] - '0') >= 0) && (str[i] != ' ') && ((str[i] - '0') <= 9)){
        result = result * 10 + (str[i] - '0');
        i++;
    }
    result = index * result;
    if(result >= Math.pow(2, 31)){return Math.pow(2, 31) - 1;}
    if(result < -Math.pow(2, 31)){return -Math.pow(2, 31);}
    return result;
};

