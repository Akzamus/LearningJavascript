interface IUser {
    name: string;
    age: number;
}

function getValue<T, K extends keyof T> (object: T, key: K) {
    return object[key];
}

const myUser: IUser = {
    name: 'Akzam',
    age: 20
}

console.log(getValue(myUser, 'name'));

type keyOfUser = keyof typeof myUser;
let value1: keyOfUser;
let value2: typeof value1;
value1 = 'name';
value2 = 'age';

console.log(`${value1} - ${value2}`);

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success'? string : Error;
}

const successResponse: HTTPResponse<'success'> = {
    code: 200,
    data: 'Done'
}

const failedResponse: HTTPResponse<'failed'> = {
    code: 505,
    data: new Error('Server error')
}


