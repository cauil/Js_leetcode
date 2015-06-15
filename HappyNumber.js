/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n <= 0){return false;}
    var sum;
    while(1){
        sum = 0;
        while(n != 0){
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        if(Math.floor(sum / 10) == 0){
            if(sum == 1 || sum == 7){return true;}
            else{return false;}
        }
        n = sum;
    }
};

