/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var dict = {};
    var arr = [];

    //strs = strs.map(function(s){
        //return s.split('').sort().join('');
    //})

    for(var k = 0; k < strs.length; k++){
        var index = strs[k].split("").sort().join("");
        if(index in dict){
            dict[index] += 1;
        }
        else{dict[index] = 1;}
    }

    for(k = 0; k < strs.length; k++){
        index = strs[k].split("").sort().join("");
        if(dict[index] >= 2){
            arr.push(strs[k]);
        }
    }
    return arr;

};

