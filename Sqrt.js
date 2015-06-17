/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0){return 0;}
    var left = 1, right = x, ans;
    while(left <= right){
        var mid = left + Math.floor((right - left) / 2);
        if(mid <= Math.floor(x / mid)){
            left = mid + 1;
            ans = mid;
        }
        else{
            right = mid -1;
        }
    }
    return ans;
};

