"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    return str.split("").reverse().join("");
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return "Нет доступных валют";
    }
    return `Доступные валюты:\n${arr
        .filter(item => (item !== missingCurr)).join("\n")}`;
}