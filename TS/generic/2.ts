const split: <T> (data: Array<T>) => Array<T> = getHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T;
}

const logLine1: LogLineType<{ message: string }> = {
    timeStamp: new Date(),
    data: {
        message: 'some text'
    }
}

const logLine2: ILogLine<{ message: string }> = {
    timeStamp: new Date(),
    data: {
        message: 'some text'
    }
}

console.log(split([1, 5, 7, 8]));
console.log(logLine1);
console.log(logLine2);