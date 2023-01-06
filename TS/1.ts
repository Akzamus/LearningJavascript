let revenue: number = 1000;
let bonus: number = 500;
let result: number = revenue + bonus;
console.log(result);

let str1: string = 'Hello';
let str2: string = 'World';
let str: string = str1 + ' ' + str2;
console.log(str);

let isBoolean: boolean = true;
console.log(isBoolean);

function getFullName1(firstname: string, surname: string): string {
    return `${firstname} ${surname}`;
}
console.log(getFullName1('Akzam', 'Khamitov'));

const sum = (a: number, b: number): number => a + b;
console.log(sum(8, 2));