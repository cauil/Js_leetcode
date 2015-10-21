/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var cur = 0;
    var i;
    var obj = {};
    for(i = 0; i < nums.length; i++){
        if(obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
            nums[cur++] = nums[i];
        } else {
            if(obj[nums[i]] === 1) {
                obj[nums[i]] ++;
                nums[cur++] = nums[i];
            } 
        }
    }
    return cur;
};
