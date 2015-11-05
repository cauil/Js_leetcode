/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums===undefined || nums.length<3){
        return;
    }

    var result = nums[0] + nums[1] + nums[nums.length-1];
    nums.sort(function(a, b){
        return a-b;
    });

    for(var i=0; i<nums.length-2; i++){
        var start=i+1, end=nums.length-1;
        while(start<end){
            var sum=nums[i]+nums[start]+nums[end];
            if(sum==target){
                return target;
            }
            else if(sum>target){
                end--;
            }
            else{
                start++;
            }
            if(Math.abs(sum-target)<Math.abs(result-target)){
                result = sum;
            }
        }
    }
    return result;
};

