/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var maxH = 0;
    var len = citations.length;
    var low = 0, high = citations.length;
    var cur = Math.floor((low + high) / 2);
    while(low < high) {
        if(citations[cur] >= len - cur) {
            maxH = Math.max(maxH, len - cur);
            high = cur;
        } else {
            low = cur + 1;
        }
        cur = Math.floor((low + high) / 2);
    }
    return maxH;
};
