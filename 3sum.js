/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arr = [];
    var i = 0,
        j,
        k,
        total,
        len = nums.length;
        
    if(nums.length < 3) return arr;
    nums.sort(function(v1, v2) {return v1 -v2;});
    for(i = 0; i < len - 2; i++) {
        if(i > 0 && nums[i-1] === nums[i]) continue;
        j = i + 1;
        k = len - 1;
        
        while(j < k) {
            total = nums[i] + nums[j] + nums[k];
            if(total < 0) j = j + 1;
            else if(total > 0) k = k - 1;
            else {
                arr[arr.length] = [nums[i], nums[j], nums[k]];
                while( j < k && nums[j] === nums[j+1]) {j = j + 1;}
                while(j < k && nums[k] === nums[k-1]) {k = k - 1;}
                j += 1;
                k -= 1;
            }
        }
    }
    return arr;
};
