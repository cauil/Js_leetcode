/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length <= 10) return [];
    var result = [];
    var dict = {};
    for(var i = 0, len = s.length; i <= len - 10; i++) {
        if(dict[s.slice(i, i+10)] === void 0) {
            dict[s.slice(i, i+10)] = 1;
        } else if(dict[s.slice(i, i+10)] === 1) {
            result.push(s.slice(i, i+10));
            dict[s.slice(i, i+10)] += 1;
        } else {
            dict[s.slice(i, i+10)] += 1;
        }
    }
    return result;
};
