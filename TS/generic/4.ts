class Resp<D, E> {

    constructor(
        private data?: D,
        private error?: E
    ) {
        if (data) { this.data  = data }
        if (error) { this.error = error }
    }
}

class HTTPResp<F> extends Resp<string, number> {

    private code: F;

    public setCode(code: F): void {
        this.code = code;
    }
}

const response1 = new Resp<string, number>('data');
const response2 = new HTTPResp();
response2.setCode(505);

console.log(response1);
console.log(response2);