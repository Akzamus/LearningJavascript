interface ID {
    id: number;
}

type sortType = 'asc' | 'desc';

function sortById<T extends ID> (array: Array<T>, type: sortType = 'asc'): Array<T> {
    return array.sort((a, b) => type === 'asc'? (a.id - b.id) : (b.id - a.id));
}

const array = [
    { id: 1, name: 'Name1'},
    { id: 3, name: 'Name1'},
    { id: 2, name: 'Name1'}
];

console.log(sortById(array));
