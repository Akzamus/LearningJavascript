"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let totalArea = 0;
    data.shops.forEach(shop => totalArea += shop.width * shop.length);
    return +totalArea * +data.height * +data.moneyPer1m3 <= +data.budget ?
           "Бюджета достаточно" : "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));