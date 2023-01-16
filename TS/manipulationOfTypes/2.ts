interface IData {
    group: number;
    name: string;
}

interface GroupIData<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function groupByKeyName<T extends Record<key, any>> (objects: Array<T>, key:  keyof T): GroupIData<T> {
    return objects.reduce<GroupIData<T>>((map: GroupIData<T>, item) => {
       const itemKey = item[key];
       let currentElement = map[itemKey];
       if(Array.isArray(currentElement)) {
           currentElement.push(item);
       } else {
           currentElement = [item];
       }
       map[itemKey] = currentElement;
       return map;
    }, {});
}

const data: IData[] = [
    { group: 1, name: 'a' },
    { group: 2, name: 'b' },
    { group: 1, name: 'c' },
];

console.log(groupByKeyName<IData>(data, 'group'));
