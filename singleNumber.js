/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var dict = {};
    for(var i = 0, len = nums.length; i < len; i++) {
        if(dict[nums[i]] === void 0) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    }
    for(i = 0, len = nums.length; i < len; i++) {
        if(dict[nums[i]] === 1) return nums[i];
    }
};
