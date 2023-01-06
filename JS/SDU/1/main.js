"use strict";

let num1 = +prompt("num1 =", "0");
let num2 = +prompt("num2 =", "0");
let operation = prompt("operation: ", "+");
let result;
switch (operation) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "/": result = num1 / num2; break;
    case "*": result = num1 * num2; break;
    default: result = 0; break;
}
alert(result);

