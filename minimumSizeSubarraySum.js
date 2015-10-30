/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var total = 0,
        start = 0,
        i = 0,
        len = nums.length,
        minLen = len + 1;
    
    for(i = 0; i < len; i++) {
        total += nums[i];
        while(total >= s) {
            minLen = Math.min(i - start + 1, minLen);
            total = total - nums[start];
            start = start + 1;
        }
    }
    return minLen > len ? 0 : minLen;
};
