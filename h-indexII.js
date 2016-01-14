/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var maxH = 0;
    for(var i = 0, len = citations.length; i < len; i++) {
        if(citations[i] >= len - i) maxH = Math.max(maxH, len - i); 
    }
    return maxH;
};
