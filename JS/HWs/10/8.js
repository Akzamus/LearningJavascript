"use strict";

function calculateVolumeAndArea(num) {
    if(typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
        return "При вычислении произошла ошибка";
    }

    let volume = Math.pow(num, 3);
    let area = Math.pow(num, 2) * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

function getCoupeNumber(seatNumber) {
    if(typeof seatNumber !== "number" || !Number.isInteger(seatNumber) || seatNumber < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if(seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(seatNumber / 4);
    }
}