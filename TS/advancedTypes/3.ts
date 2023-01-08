interface Dog {
    age: number
}

interface Dog {
    breed: string,
    yearOfBirth?: number
}

const dog: Dog = {
    age: 5,
    breed: 'bulldog'
}

function multiply(first: number = 10, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
};

console.log(multiply());
console.log(multiply(3));
console.log(multiply(3, 6));