interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;
    handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {

    private nextMiddleware: IMiddleware;

    public handle(request: any): any {
        if(this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
    }

    public next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid;
        return mid;
    }
}

class AuthMiddleware extends AbstractMiddleware {

    public override handle(request: any): any {
        console.log('AuthMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: 'You are not logged in!' };
    }
}

class ValidateMiddleware extends AbstractMiddleware {

    public override handle(request: any): any {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'Body not found!' };
    }
}

class Controller extends AbstractMiddleware {

    public override handle(request: any): any {
        console.log('Controller');
        return { success: request };
    }
}

const auth = new AuthMiddleware();
const validate = new ValidateMiddleware();
const controller = new Controller();

auth.next(validate).next(controller);

console.log(auth.handle({ userId: 3 }));
console.log(auth.handle({ userId: 1 }));
console.log(auth.handle({ userId: 1, body: 'I am OK!' }));