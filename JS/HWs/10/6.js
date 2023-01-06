"use strict";

const lines = 5;
let result = '';

for(let i = 1, j = 0; i <= 11; i = i + 2, j++) {
    for (let k = j; k < lines; k++) {
        result+=" ";
    }
    for(let k = 0; k < i; k++) {
        result+="*";
    }
    result+="\n";
}
console.log(result);
