class KVDatabase {
    private db: Map<string, string> = new Map();

    public save(key: string, value: string) {
        this.db.set(key, value);
    }
}

class PersistentDB {

    savePersistent(data: object) {
        console.log(data);
    }
}

class PersistentDBAdapter extends KVDatabase {

    constructor(public database: PersistentDB) {
        super();
    }

    public override save(key: string, value: string) {
        this.database.savePersistent({ key, value });
    }
}

function run(base: KVDatabase) {
    base.save('key', 'myValue');
}

run(new PersistentDBAdapter(new PersistentDB()));