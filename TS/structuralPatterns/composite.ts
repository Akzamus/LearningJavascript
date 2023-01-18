abstract class DeliveryItem {

    public items: DeliveryItem[] = [];

    public addItem(item: DeliveryItem): void {
        this.items.push(item);
    }

    public getItemsPrices(): number {
        return this.items.reduce(
            (price: number, item: DeliveryItem) => price + item.getPrice(), 0
        );
    }

    public abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {

    constructor(private deliveryFee: number) {
        super();
    }

    public getPrice(): number {
        return this.getItemsPrices() + this.deliveryFee;
    }
}

class Package extends DeliveryItem {

    public getPrice(): number {
        return this.getItemsPrices();
    }
}

class MyProduct extends DeliveryItem {

    constructor(public price: number) {
        super();
    }

    public getPrice(): number {
        return this.price;
    }
}

const shop = new DeliveryShop(100);
shop.addItem(new MyProduct(1000));

const pack1 = new Package();
pack1.addItem(new MyProduct(200));
pack1.addItem(new MyProduct(300));
shop.addItem(pack1);

const pack2 = new Package();
pack2.addItem(new MyProduct(30));
shop.addItem(pack2);

console.log(shop.getPrice());