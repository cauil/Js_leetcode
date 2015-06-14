/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;

    while(x != 0){
        result = result * 10 + x % 10;
        if(x > 0){x = Math.floor(x / 10);}
        else{x = Math.ceil(x / 10);}
    }
    return (result > -Math.pow(2, 31) && result < Math.pow(2, 31)) ? result : 0;
};

