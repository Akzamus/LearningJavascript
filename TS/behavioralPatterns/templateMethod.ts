class Form {
    constructor(public name: string) { }
}

abstract class SaveForm<T> {

    public save(form: Form): void {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }

    protected log(data: T): void {
        console.log(data);
    }

    protected abstract fill(form: Form): T;

    protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {

    protected fill(form: Form): string {
        return form.name;
    }

    protected send(data: string): void {
        console.log(`Sending: ${data}`);
    }
}

class SecondAPI extends SaveForm<{ fio: string }> {

    protected fill(form: Form): { fio: string } {
        return { fio: form.name };
    }

    protected send(data: { fio: string }): void {
        console.log(`Sending: ${data}`);
    }
}

const firstAPI = new FirstAPI();
const secondAPI = new SecondAPI();

firstAPI.save(new Form('Akzam'));
secondAPI.save(new Form('Akzam'))

