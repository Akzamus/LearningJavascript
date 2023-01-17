class MyMap {

    private static instance: MyMap;
    map: Map<number, string> = new Map();

    private constructor() {}

    public clean(): void {
        this.map = new Map();
    }

    public static get(): MyMap {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}

class Service1 {
    private myMap: MyMap = MyMap.get();

    public addMap(key: number, value: string): void {
        this.myMap.map.set(key, value);
    }
}

class Service2 {
    private myMap: MyMap = MyMap.get();

    public printValueFromMapByKey(key: number): void {
        console.log(this.myMap.map.get(key));
    }
}

new Service1().addMap(1, 'Work!');
new Service2().printValueFromMapByKey(1);