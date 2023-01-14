function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

function getHalf<T>(array: Array<T>): Array<T> {
    return array.slice(0, array.length / 2);
}

const num = logMiddleware<number>(10);
console.log(getHalf([1, 2, 3, 4, 5]));
console.log(num);

function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "number": case "bigint": case "boolean": case "function": case "symbol":
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}