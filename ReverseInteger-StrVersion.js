/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr;
    var str;

    str = x.toString().replace(/0+$/, '');
    arr = str.split('');

    if(arr[0] == '-'){
        arr.splice(0, 1);
        str = '-' + arr.reverse().join('');
    }
    else{
        str = arr.reverse().join('');
    }
    x = str - '0';
    //if(!Number.isSafeInteger(x)){
        //return 0;
    //}
    return (x < Math.pow(2, 31) && x > -Math.pow(2, 31)) ? x : 0;
};

