"use strict";

function sayHello(name) {
    return `Привет, ${name}!`;
}

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}

function getMathResult(num1, num2) {
    if (num2 <= 0 || typeof num2 === "string") {
        return num1;
    }

    let str = `${num1}`;

    for (let i = 2; i <= num2; i++) {
        str += `---${num1 * i}`;
    }
    return str;
}