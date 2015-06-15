/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2){return 0;};
    var arr = [];
    var sum = 1;
    var upper = Math.sqrt(n);
    for(var i = 3; i < n; i = i + 2){
        if(!arr[i]){
            sum++;
            if(i > upper){continue;}
            for(var j = i * i; j < n; j = j + i){
                arr[j] = true;
            }
        }
    }
    return sum;
};
