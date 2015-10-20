/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var cur = 0;
    var i;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[cur++] = nums[i];
        }
    }
    for(i = cur; i < nums.length; i++ ) {
        nums[i] = 0;
    }
};
