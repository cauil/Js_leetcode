/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var i = nums.indexOf(target);
    var j = nums.lastIndexOf(target);
    return [i, j];
};
