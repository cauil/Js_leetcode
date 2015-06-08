/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = 0;
    var pattern = /(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;
    var arr = s.match(pattern);
    function swi(str){
        switch(str){
            case '': return 0;
            case 'M': return 1000;
            case 'MM': return 2000;
            case 'MMM': return 3000;
            case 'C': return 100;
            case 'CC': return 200;
            case 'CCC': return 300;
            case 'CD': return 400;
            case 'D': return 500;
            case 'DC': return 600;
            case 'DCC': return 700;
            case 'DCCC': return 800;
            case 'CM': return 900;
            case 'X': return 10;
            case 'XX': return 20;
            case 'XXX': return 30;
            case 'XL': return 40;
            case 'L': return 50;
            case 'LX': return 60;
            case 'LXX': return 70;
            case 'LXXX': return 80;
            case 'XC': return 90;
            case 'I': return 1;
            case 'II': return 2;
            case 'III': return 3;
            case 'IV': return 4;
            case 'V': return 5;
            case 'VI': return 6;
            case 'VII': return 7;
            case 'VIII': return 8;
            case 'IX': return 9;
        }
    }
    for (var i=1; i<arr.length; i++){
        number += swi(arr[i]);
    }
    return number;
};

