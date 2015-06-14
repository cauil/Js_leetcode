/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var dict = {};
    var arr = [];

    function getSortedString(str){
        var count = [];
        for(var i = 0; i < 26; i++){
            count[i] = 0;
        }
        for(i = 0; i < str.length; i++){
            count[str[i].charCodeAt() - 'a'.charCodeAt()]++;
        }

        var restr = '';
        for(i = 0; i < 26; i++){
            for(var j = 0; j < count[i]; j++){
                restr = restr + String.fromCharCode('a'.charCodeAt() + i);
            }
        }
        return restr;
    }

    for(var k = 0; k < strs.length; k++){
        var index = getSortedString(strs[k]);
        if(index in dict){
            dict[index] += 1;
        }
        else{dict[index] = 1;}
    }

    for(k = 0; k < strs.length; k++){
        var index = getSortedString(strs[k]);
        if(dict[index] >= 2){
            arr.push(strs[k]);
        }
    }
    return arr;

};

