enum PaymentStatus {
    HELD,
    PROCESSED,
    REVERSED,

}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.HELD;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if(this.status === PaymentStatus.PROCESSED) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = PaymentStatus.REVERSED;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);