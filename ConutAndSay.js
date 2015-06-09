/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = '1';
    for (int i=1; i<n; i++){
        s = countIdx(s);
    }
    return s;
};

function countIdx(s){
    var str;
    var c = s.charAt(0);
    var count = 1;
    for(int i=1; i<s.length; i++){
        if(s.charAt(i)==c){
            count++;
        }
        else{
            str = str + count + c;
            c = s.charAt(i);
            count = 1;
        }
    }
    str = str + count + c;
    return str;
}
