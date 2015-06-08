/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0, j=height.length-1, ans=0;
    function min(a, b){
        return (a-b)>0 ?b:a;
    }
    function max(a,b){
        return (a-b)>0 ?a:b;
    }
    while(i<j){
        ans=max(ans, (j-i)*(min(height[i], height[j])));
        height[i]<height[j]?i++:j--;
    }
    return ans;
};

