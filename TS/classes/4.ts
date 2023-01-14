class Product {

    constructor(
        private readonly id: number,
        private readonly name: string,
        private readonly price: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getId(): number {
        return this.id;
    }

    public getPrice(): number {
        return this.price;
    }
}

class Delivery {

    constructor(private date: Date) {
        this.date = date;
    }
}

class HomeDelivery extends Delivery {

    private address: string;

    constructor(date: Date, address: string) {
        super(date);
        this.address = address;
    }
}

class ShopDelivery extends Delivery {

    constructor(private shopId: number) {
        super(new Date());
        this.shopId = shopId;
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {

    private products: Array<Product> = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public deleteProductById(id: number): void {
        this.products = this.products.filter(product => product.getId() !== id);
    }

    public getTotalPrice(): number {
        return this.products.map(product => product.getPrice())
                            .reduce((a, b) => a + b);
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    public checkOut(): boolean {
        return this.products.length !== 0 && !!this.delivery;
    }
}

const cart = new Cart();

cart.addProduct(new Product(1, 'Cookie', 5));
cart.addProduct(new Product(2, 'Cake', 30));
cart.addProduct(new Product(3, 'Chocolate', 10));

cart.deleteProductById(1);
cart.setDelivery(new HomeDelivery(new Date(), 'Pushkin street, 24'));

if (cart.checkOut()) {
    console.log(cart.getTotalPrice());
}


