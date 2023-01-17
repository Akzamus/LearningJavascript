function nullUsers(target: Function): void{
    target.prototype.users = 0;
}

function threeUsers<T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

function setUsers(users: number) {
    return (target: Function) => { target.prototype.users = users };
}

function setUsersAdvanced(users: number) {
    return <T extends { new (...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            users = 3;
        }
    }
}

function CreatedAt<T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor{
        public createdAt: Date = new Date()
    }
}