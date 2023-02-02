"use strict";

const restaurantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waiters: [
        {
            name: 'Alice',
            age: 22
        },
        {
            name: 'John',
            age: 24
        }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    return prop ? 'Открыто' : 'Закрыто';
}

console.log(isOpen(restaurantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restaurantData.menu[0], restaurantData.menu[1], restaurantData.averageLunchPrice));

function transferWaiters(data) {
    const copy = Object.assign({}, data);

    copy.waiters = [
        {
            name: 'Mike',
            age: 32
        }
    ];

    return copy;
}

console.log(transferWaiters(restaurantData));
