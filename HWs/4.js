"use strict";

function firstTask() {
    for(let i = 5; i <= 10; i++) {
        console.log(i);
    }

}

function secondTask() {
    for (let i = 20; i >=10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <=10 ; i = i + 2) {
        console.log(i);
    }
}

function fourthTask() {
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for(let i = 5, j = 0; i <=10; i++, j++) {
        arrayOfNumbers[j] = i;
    }
    return arrayOfNumbers;
}