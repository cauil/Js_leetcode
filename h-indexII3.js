/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    var maxH = 0;
    var len = citations.length;
    var low = 0, high = citations.length - 1;
    var cur;
    while(low <= high) {
        cur = Math.floor((low + high) / 2);
        if(citations[cur] === len - cur) return citations[cur];
        else if(citations[cur] > len - cur) {
            high = cur - 1;
        } else {
            low = cur + 1;
        }
    }
    return len - (high + 1);
};
