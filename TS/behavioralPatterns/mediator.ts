interface Mediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {

    protected mediator: Mediator;

    public setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }
}

class Notifications {

    send() {
        console.log('Sending notifications')
    }
}

class Log1 {

    public log(message: string) {
        console.log(message);
    }
}

class EventHandler extends Mediated {

    public myEvent() {
        this.mediator.notify('EventHandler', 'myEvent')
    }
}

class NotificationMediator implements Mediator {

    constructor(
        public notifications: Notifications,
        public logger: Log1,
        public handler: EventHandler
    ) { }

    public notify(_: string, event: string): void {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Sent');
                break;
        }
    }
}

const handler = new EventHandler();
const log = new Log1();
const notifications = new Notifications();

const m = new NotificationMediator(
    notifications,
    log,
    handler
);

handler.setMediator(m);
handler.myEvent();