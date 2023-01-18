interface IObserver {
    update(subject: ISubject): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}

class Lead {

    constructor(
        public name: string,
        public phone: string
    ) { }
}

class NewLead implements ISubject {

    private observers: IObserver[] = [];

    public state: Lead;

    public attach(observer: IObserver): void {
        if(!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    public detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    public notify(): void {
        this.observers.forEach(observer => observer.update(this));
    }
}

class NotificationService implements IObserver {

    public update(subject: ISubject): void {
        console.log('NotificationService has received a notification')
        console.log(subject);
    }
}

class LeadService implements IObserver {

    public update(subject: ISubject): void {
        console.log('LeadService has received a notification')
        console.log(subject);
    }
}

const subject = new NewLead();
subject.state = new Lead('Akzam', '+7-(707)-777-77-77');

const subscriber1 = new NotificationService();
const subscriber2 = new LeadService();

subject.attach(subscriber1);
subject.attach(subscriber2);
subject.notify()

subject.detach(subscriber1)
subject.notify()