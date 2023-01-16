interface Permission {
    endDate: Date;
}

interface Role {
    name: string;
}

interface UserI {
    name: string;
    roles: Role[];
    permission: Permission;
}

const someUser: UserI = {
    name: 'Akzam',
    roles: [],
    permission: {
        endDate: new Date()
    }
}

const username = someUser['name'];
const keyName = 'roles';

type rolesArrayType1 = UserI['roles'];
type rolesArrayType2 = UserI[typeof keyName];
type roleType = UserI['roles'][number];
type dateType = UserI['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const;
type roleTypes = typeof roles[number];
