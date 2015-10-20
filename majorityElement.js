/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var i;
    var index;
    var obj = {};
    if(nums.length === 1) return nums[0];
    for(i = 0; i < nums.length; i++) {
        if(nums[i] in obj) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    for(index in obj) {
        if(obj[index] >= nums.length/2) {
            return +index;
        }
    }
};
