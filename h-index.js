/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort(function(a, b) {
        return b - a;
    })
    var maxH = 0;
    for(var i = 0, len = citations.length; i < len; i++) {
        if(citations[i] > i) maxH = Math.max(maxH, i + 1); 
    }
    return maxH;
};
