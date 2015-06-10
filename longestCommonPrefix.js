/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){return "";}
    for(var pos=0; pos<strs[0].length; pos++){
        for(var i=0; i<strs.length; i++){
            if(pos >= strs[i].length || strs[i].substring(pos,pos+1) != strs[0].substring(pos,pos+1)){
                return strs[0].substr(0, pos);
            }
        }
    }
    return strs[0];
};

