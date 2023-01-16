function runTransaction (transaction: { fromTo: [string, string] }) {
    console.log(transaction);
}

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;

const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['1', '2']
}

runTransaction(transaction);

type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type ModifierToAccess<TYPE> = {
    +readonly [Property in keyof TYPE]-?: boolean;
}

type UserAccess1 = {
    readonly customers: boolean,
    readonly projects: boolean,
    readonly adminPanel: boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>;