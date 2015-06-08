/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var sum, index=0;
    var i=a.length-1, j=b.length-1;
    var result='';

    while(i>=0 || j>=0 || index==1){
        sum = index;
        if (i>=0){
            sum += a.charAt(i--) - '0';
        }
        if(j>=0){
            sum += b.charAt(j--) - '0';
        }
        index = sum / 2;
        result = (sum % 2) + result;
    }
    return result;
};


