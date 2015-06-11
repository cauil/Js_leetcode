/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function isPare(p1, p2){
        if(p1 === '(' && p2 ===')'){return true;}
        if(p1 === '{' && p2 ==='}'){return true;}
        if(p1 === '[' && p2 ===']'){return true;}
        return false;
    }

    if(s === ''){return true;}
    if(s.length % 2 == 1){return false;}
    var arr = [];
    for(var i = 0; i < s.length; i++){
        if(arr.length == 0 || !isPare(arr[arr.length-1], s.charAt(i))){
            arr.push(s.charAt(i));
        }
        else{
            arr.pop();
        }
    }
    if(arr.length == 0){
        return true;
    }
    else{return false;}
};

