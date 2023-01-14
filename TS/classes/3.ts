interface ILogger {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

class Logger1 implements ILogger{
    error(...args: any[]): void {
        // Кинуть во внешнюю систему
        console.log(...args);
    }

    log(...args: any[]): void {
        console.log(...args);
    }
}

type PaymentStatus2 = 'new' | 'paid';

class Payment2 {
    id: number;
    status: PaymentStatus2 = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment2{
    databaseId: number;
    paidAt: Date;

    constructor(id: number) {
        super(id);
    }

    save(databaseId: number) {
        this.databaseId = databaseId;
    }

    override pay(date?: Date) {
        super.pay();
        if(date) {
            this.paidAt = date;
        }
    }
}