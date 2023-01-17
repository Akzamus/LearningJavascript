class Notify {

    public send(template: string, to: string): void {
        console.log(`Send ${template}: ${to}`);
    }
}

class MyLog {

    public log(message: string): void {
        console.log(message);
    }
}

class Template {

    private templates = [
        { name: 'other', template: '<h1>Pattern!</h1>' }
    ]

    public getByName(name: string) {
        return this.templates.find(t => t.name === name);
    }
}

class NotificationFacade {

    private notify: Notify = new Notify();
    private logger: MyLog = new MyLog();
    private template: Template = new Template();

    public send(to: string, templateName: string): void {
        const data = this.template.getByName(templateName);

        if(!data) {
            this.logger.log('Template not found');
        } else {
            this.notify.send(data.template, to);
            this.logger.log('Template send');
        }
    }
}

const s = new NotificationFacade();
s.send('akzam@mail.ru', 'other');
s.send('akzam@mail.ru', 'someTemplate');