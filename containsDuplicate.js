/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    var i;
    //if(nums.length <= 1) {
      //  return false;
    //}
    for(i = 0; i < nums.length; i++) {
        if(nums[i] in obj) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }
    return false;
};
