interface ILogger {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

class Logger implements ILogger{
    error(...args: any[]): void {
        // Кинуть во внешнюю систему
        console.log(...args);
    }

    log(...args: any[]): void {
        console.log(...args);
    }
}