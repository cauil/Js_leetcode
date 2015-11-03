/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [];
    var len = nums.length;
    var i, j, k, l;

    if(len < 4) return result;
    nums.sort(function(m, n) {return m-n;});
    for(i = 0; i < len-3; i++) {
        for(j = i+1; j < len-2; j++) {
            k = j + 1;
            l = len - 1;
            while(k < l) {
                total = nums[i] + nums[j] + nums[k] + nums[l];
                if(total < target) k += 1;
                else if(total > target) l -= 1;
                else {
                    result[result.length] = [nums[i], nums[j], nums[k], nums[l]];
                    while(k < l && nums[k] === nums[k+1]) k += 1;
                    while(k < l && nums[l] === nums[l-1]) l -= 1;
                    k += 1;
                    l -= 1;
                }
            }
            while(j < len - 2 && nums[j+1] === nums[j]) j++;
        }
        while(i < len -3 && nums[i+1] === nums[i]) i++;
    }
    return result;
};
