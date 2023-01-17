interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {

    constructor(public email: string, public name: string) { }

    public clone(): UserHistory {
        return new UserHistory(this.email, this.name);
    }
}

const userHistory1 = new UserHistory('a@a.ru', 'Akzam');
const userHistory2 = userHistory1.clone();

console.log(userHistory1);
console.log(userHistory2);

userHistory2.email = 'b@b.kz';

console.log(userHistory1);
console.log(userHistory2);

