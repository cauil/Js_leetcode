/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    var dict = {};
    for(var i = 0, len = s.length; i < len; i++) {
        if(!dict[s.charAt(i)]) dict[s.charAt(i)] = 1;
        else dict[s.charAt(i)]++;
        
        if(!dict[t.charAt(i)]) dict[t.charAt(i)] = -1;
        else dict[t.charAt(i)]--;
    }
    for(var ele in dict) {
        if(dict[ele] !== 0) return false;
    }
    return true;
};
