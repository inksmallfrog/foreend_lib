/*
* @Author: inksmallfrog
* @Date:   2017-04-16 18:25:12
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-16 18:43:21
*/

'use strict';
if(!Number.EPSILON){
    Number.EPSILON = Math.pow(2, -52);
}
if (!Number.isInteger) {
    Number.isInteger = function(num) {
       return typeof num == "number" && num % 1 == 0;
    };
}
if (!Number.isSafeInteger) {
    Number.isSafeInteger = function(num) {
        return Number.isInteger( num ) &&
            Math.abs( num ) <= Number.MAX_SAFE_INTEGER;
    };
}
if (!Number.isNaN) {
    Number.isNaN = function(n) {
        return (
            typeof n === "number" &&
            window.isNaN( n )
        );
    };
}
Number.isNegZero = function isNegZero(n) {
    n = Number( n );
    return (n === 0) && (1 / n === -Infinity);
}

if (!Object.is) {
    Object.is = function(v1, v2) {
        // 判断是否是 -0
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }
        // 判断是否是 NaN
        if (v1 !== v1) {
            return v2 !== v2;
        }
        // 其他情况
        return v1 === v2;
    };
}