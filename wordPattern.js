/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var dict = {}, dict1 = {};
    var arr = str.split(" ");
    if(arr.length !== pattern.length) return false;
    for(var i = 0, len = pattern.length; i < len; i++) {
        if(!dict[pattern[i]]) dict[pattern[i]] = arr[i];
        else {
            if(dict[pattern[i]] !== arr[i]) return false;
        }
        if(!dict1[arr[i]]) dict1[arr[i]] = pattern[i];
        else {
            if(dict1[arr[i]] !== pattern[i]) return false;
        }
    }
    return true;
};
