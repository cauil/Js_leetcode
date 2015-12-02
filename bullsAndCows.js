/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bull = 0, cow = 0;
    var dict = {};
    var len = secret.length;
    for(var i = 0; i < len; i++) {
        if(!dict[secret[i]]) {
            dict[secret[i]] = {};
            dict[secret[i]].arr = [];
            dict[secret[i]].arr.push(i);
            dict[secret[i]].count = 1;
        } else {
            dict[secret[i]].arr.push(i);
            dict[secret[i]].count++;
        }
    }
    for(i = 0; i < len; i++) {
        if(dict[guess[i]]) {
            if(dict[guess[i]].arr.indexOf(i) !== -1) {
                bull++;
                dict[guess[i]].count--;
            }
        }
    }
    for(i = 0; i < len; i++) {
        if(dict[guess[i]]) {
            if(dict[guess[i]].arr.indexOf(i) === -1 && dict[guess[i]].count > 0) {
                cow++;
                dict[guess[i]].count--;
            }
        }
    }
    return bull + "A" + cow + "B";
};
