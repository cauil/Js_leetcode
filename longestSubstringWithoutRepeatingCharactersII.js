/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    var len = s.length;
    var i = 0;
    var j = 0;
    var dict = {length: 0};
    var maxlen = 0;
    var cur;
    while(j < len) {
        cur = s.charAt(j);
        if(dict[cur] === void 0) {
            dict[cur] = true;
            dict.length++;
            j++;
            maxlen = Math.max(maxlen, dict.length);
        } else {
            dict[s.charAt(i++)] = void 0;
            dict.length--;
        }
    }
    return maxlen;
};
