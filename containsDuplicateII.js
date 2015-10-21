/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var m;
    var obj = {};
    
    if(nums.length <= 1) return false;
    for(m = 0; m < nums.length; m++) {
        if(obj[nums[m]] !== undefined && (m - obj[nums[m]]) <= k) {
            return true;
        } else {
            obj[nums[m]] = m;
        }

    }
    return false;
};
