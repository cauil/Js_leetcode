/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var str = '';

    if(n == 0){return '';}
    if(n < 27){
        str = String.fromCharCode(n - 1 + 'A'.charCodeAt()) + str;
        return str;
    }

    do{
        str = String.fromCharCode((n - 1) % 26 + 'A'.charCodeAt()) + str;
        n = Math.floor((n - 1) / 26);
    }while(n > 26);
    str = String.fromCharCode((n - 1) % 26 + 'A'.charCodeAt()) + str;
    return str;
};

