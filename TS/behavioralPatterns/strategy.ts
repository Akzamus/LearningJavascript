class MyUser {

    public githubToken: string;
    public jwtToken: string;
}

interface AuthStrategy {
    auth(user: MyUser): boolean;
}

class JWTStrategy implements AuthStrategy {

    auth(user: MyUser): boolean {
        return !!user.jwtToken;
    }
}

class GithubStrategy implements AuthStrategy {

    auth(user: MyUser): boolean {
        return !!user.githubToken;
    }
}

class Auth {

    constructor(private strategy: AuthStrategy) { }

    public setStrategy(strategy: AuthStrategy): void {
        this.strategy = strategy;
    }

    public authUser(user: MyUser): boolean {
        return this.strategy.auth(user);
    }
}

const userMy = new MyUser();
userMy.jwtToken = 'jwtToken';

const authentication = new Auth(new JWTStrategy());
console.log(authentication.authUser(userMy));
authentication.setStrategy(new GithubStrategy());
console.log(authentication.authUser(userMy));

