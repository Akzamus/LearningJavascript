function getTimeFromMinutes(minutes) {
    if(
        typeof minutes !== "number"||
        minutes < 0 ||
        !Number.isInteger(minutes)
    ) { return "Ошибка, проверьте данные"; }

    let hour = `${Math.floor(minutes / 60)}`;
    let str;
    minutes -= (+hour * 60);
    switch (hour.substring(hour.length - 1)) {
        case "1":
            str = "час";
            break;
        case "2":
        case "3":
        case "4":
            str = "часа";
            break;
        default:
            str = "часов";
    }
    return `Это ${hour} ${str} и ${minutes} минут`;
}

function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number") { return 0; }
    }
    return Math.max(num1, num2, num3, num4);
}

console.log(findMaxNumber(1, 5, '6', '10'));
