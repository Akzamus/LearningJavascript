"use strict";

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}

function secondTask() {
    const data = [5, 10, "Shopping", 20, "Homework"];

    for (let i = 0; i < data.length; i++) {
        if(typeof data[i] === "string") {
            data[i] = `${data[i]} - done`;
        } else {
            data[i] = data[i] * 2;
        }
    }
    return data;
}

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    const length = data.length;

    for(let i = 0; i < length; i++) {
        result[length - 1 - i] = data[i];
    }
    return result;
}