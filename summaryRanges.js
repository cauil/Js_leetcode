/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var i,
        numsResult = [],
        index;
    if(nums.length === 0) return nums;
    if(nums.length === 1) {
        nums[0] = String(nums[0]);
        return nums;
    }
    
    index = nums[0];
    for(i = 1; i < nums.length; i++) {
        if(i == nums.length - 1) {
            if(nums[i] !== nums[i-1] + 1) {
                if(nums[i-1] !== index) {
                    numsResult.push(index + "->" + nums[i-1]);
                    numsResult.push(String(nums[i]));
                } else {
                    numsResult.push(String(index));
                    numsResult.push(String(nums[i]));
                }
            } else {
                numsResult.push(index + "->" + nums[i])
            }
        } else {
            if(nums[i] !== nums[i-1] + 1) {
                if(nums[i-1] !== index) {
                    numsResult.push(index + "->" + nums[i-1]);
                } else {
                    numsResult.push(String(index));
                }
                index = nums[i];
            }
        } 
    }
    return numsResult;
};
