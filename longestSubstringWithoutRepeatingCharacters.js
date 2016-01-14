/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    var len = s.length;
    var curlen = 0;
    var maxlen = 0;
    var start = 0;
    //var beforestart = 0;
    var dict = {}, cur;
    for(var i = 0; i < len; i++) {
        cur = s.charAt(i);
        if(dict[cur] === void 0 || dict[cur] < start) {
            curlen++;
            dict[cur] = i;
        } else {
            start = dict[cur] + 1;
            curlen = i - start + 1;
            dict[cur] = i;
        }
        maxlen = curlen > maxlen ? curlen : maxlen;
    }
    return maxlen;
};
