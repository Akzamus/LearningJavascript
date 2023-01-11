interface User {
    name: string;
    email: string;
    login: string;
}

interface Admin {
    name: string;
    role: number;
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function setRoleZero(user: User | Admin) {
    if(isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('Пользователь не админ!');
    }
}

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
    return res.status === PaymentStatus.SUCCESS;
}
function getIdFromData(res: Res): number {
    if(isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}