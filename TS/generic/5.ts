type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    public items: string[] = [];
}

type ListType = GConstructor<List>;

class ExtendedListClass extends List {
    public first(): string {
        return this.items[0];
    }
}

function ExtendedList<TBase extends ListType> (Base: TBase) {
    return class ExtendedList extends Base {
        public first(): string {
            return this.items[0];
        }
    }
}

const list = ExtendedList(List);
const res2 = new list();