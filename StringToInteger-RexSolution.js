/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    var arr = str.match(/^[+-]\D/);
    if(arr){return 0;}
    arr = str.match(/^[-+]?\d+/);
    if(arr == null){return 0;}
    else{
        var num = arr[0] - '0';
        if(num >= Math.pow(2, 31)){return Math.pow(2, 31) - 1}
        else if(num < -Math.pow(2, 31)){
            return -Math.pow(2, 31);
        }
        else{
            return num;
        }
    }
};

