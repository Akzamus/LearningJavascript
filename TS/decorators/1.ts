import {Positive, Validate} from "./5";

interface IUserService {
    users: number;
    setUsersInDatabase(num: number): void
    getUsersInDatabase(): number;
    throwError(): void;
}

type CreatedAt = {
    createdAt: Date;
}

@nullUsers
@setUsers(100)
@setUsersAdvanced(1000)
@threeUsers
@CreatedAt
class UserService implements IUserService {

    @Max(10000)
    public users: number;

    @Log()
    public getUsersInDatabase(): number {
        return this.users;
    }

    @Validate
    public setUsersInDatabase(@Positive num: number): void {
        this.users = num;
    }

    @Catch({ rethrow: false })
    public throwError(): void {
        throw new Error('ERROR!!!');
    }
}

console.log((new UserService() as IUserService & CreatedAt).createdAt);
console.log(new UserService().getUsersInDatabase());

