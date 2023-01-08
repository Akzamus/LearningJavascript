function checkNumberFormat(num: string | number): void {
    if (typeof num === 'string') {
        console.log('This is a number in string format')
    } else {
        console.log('This is a number')
    }
}

function logObject(obj: {a: number} | {b: number}) {
    if('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

type httpMethod = 'post' | 'get';

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    //some logic
    return 1;
}

fetchWithAuth('s', 'post');
let methodLet = 'post';
fetchWithAuth('s', methodLet as 'post');
const methodConst = 'post';
fetchWithAuth('s', methodConst);



