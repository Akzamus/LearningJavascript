"use strict";

function fib(num) {
    let arr = [0, 1];
    let str = "0 1";

    if(typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
        return "";
    } else if (num === 1) {
        return "0";
    }

    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr [i - 2];
        str += ` ${arr[i]}`;
    }
    return str;
}