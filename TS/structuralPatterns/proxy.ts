interface IPaymentDetail {
    id: number;
    sum: number;
}

interface IPaymentAPI {
    getPaymentDetail(id: number): IPaymentDetail | undefined;
}

class PaymentAPI implements IPaymentAPI {

    private data: IPaymentDetail[] = [{ id: 1, sum: 10000 }];

    public getPaymentDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id === id);
    }
}

class PaymentAccessProxy implements IPaymentAPI {

    constructor(private api: PaymentAPI, private userId: number) { }

    getPaymentDetail(id: number): IPaymentDetail | undefined {
        if (this.userId === id) {
            return this.api.getPaymentDetail(id);
        }
        return undefined;
    }
}

const proxy1 = new PaymentAccessProxy(new PaymentAPI(), 1);
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);

console.log(proxy1.getPaymentDetail(1));
console.log(proxy2.getPaymentDetail(1));



