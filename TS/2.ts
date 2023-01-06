function getFullName2(user: {firstname: string, surname: string}): string {
    return `${user.firstname} ${user.surname}`;
}

const mySkills = {
    dev: true,
    devops: false
}

const user: {
    firstname: string;
    surname: string;
    city: string;
    age: number;
    skills: {
        dev: boolean;
        devops: boolean;
    }
} = {
    firstname: 'Akzam',
    surname: 'Khamitov',
    city: 'Almaty',
    age: 19,
    skills: mySkills
};

console.log(getFullName2(user));