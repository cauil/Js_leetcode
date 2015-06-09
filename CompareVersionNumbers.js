/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    if(version1===version2){return 0;}

    var arr1=version1.split('.');
    var arr2=version2.split('.');
    var len = Math.max(arr1.length, arr2.length);
    //var len = arr1.length>arr2.length ? arr1.length : arr2.length;

    for(var i=0; i<len; i++){
        arr1[i] = arr1[i]===undefined ? 0 : arr1[i]-'0';
        arr2[i] = arr2[i]===undefined ? 0 : arr2[i]-'0';
        if(arr1[i] > arr2[i]){return 1;}
        else if(arr1[i] < arr2[i]){return -1;}
    }
    return 0;
};

