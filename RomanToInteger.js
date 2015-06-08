/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var res=0, lastValue=0, digit=0;
    for(var i=s.length-1; i>=0; i--){
        switch(s[i]){
            case 'I': digit=1; break;
            case 'V': digit=5; break;
            case 'X': digit=10; break;
            case 'L': digit=50; break;
            case 'C': digit=100; break;
            case 'D': digit=500; break;
            case 'M': digit=1000; break;
        }
        if(digit>=lastValue){
            res += digit;
            lastValue = digit;
        }else{
            res-=digit;
        }
    }
    return res;
};
