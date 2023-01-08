type UserType = {
    name: string,
    age: number,
    skills: string[],
    sayHello: () => string;
}

type RoleType = {
    roleId: number
}

type UserWithRoleType = RoleType & UserType;

interface UserInterface {
    name: string,
    age: number,
    skills: string[],
    sayHello: () => string;
}

interface RoleInterface {
    roleId: number
}

interface UserWithRoleInterface extends UserInterface, RoleInterface{}

let userT: UserWithRoleType = {
    roleId: 1,
    name: 'Name',
    age: 20,
    skills: ['skill1', 'skill2'],
    sayHello: () => 'Hello'
};

let userI: UserWithRoleInterface = {
    roleId: 1,
    name: 'Name',
    age: 20,
    skills: ['skill1', 'skill2'],
    sayHello: () => 'Hello'
};

interface DictionaryI {
    [index: number]: string
}

type DictionaryT = {
    [index: number]: string
}

