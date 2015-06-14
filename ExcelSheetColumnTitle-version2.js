/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var str = '';


    while(n != 0){
        str = String.fromCharCode((n - 1) % 26 + 'A'.charCodeAt()) + str;
        n = Math.floor((n - 1) / 26);
    }
    return str;
};

