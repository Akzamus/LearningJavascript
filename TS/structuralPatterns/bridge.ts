interface IProvider {
    sendMessage(message: string): void;
    connect(config: unknown): void;
    disconnect(): void;
}

class TelegramProvider implements IProvider {

    public connect(config: string): void {
        console.log(config);
    }

    public disconnect(): void {
        console.log('Disconnected TG!');
    }

    public sendMessage(message: string): void {
        console.log(message);
    }
}

class WhatsAppProvider implements IProvider {

    public connect(config: string): void {
        console.log(config);
    }

    public disconnect(): void {
        console.log('Disconnected WA!');
    }

    public sendMessage(message: string): void {
        console.log(message);
    }
}

class NotificationSender {

    constructor(private provider: IProvider) { }

    public send(): void {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotificationSender extends NotificationSender {

    constructor(provider: IProvider) {
        super(provider);
    }

    public sendAfterMinutes(minutes: number) {
        console.log(`${minutes} minutes later:`);
        super.send();
    }
}

const senderTG = new NotificationSender(new TelegramProvider());
const senderWA = new NotificationSender(new WhatsAppProvider());
senderTG.send();
senderWA.send()

const delaySenderTG = new DelayNotificationSender(new TelegramProvider());
const delaySenderWA = new DelayNotificationSender(new WhatsAppProvider());
delaySenderTG.sendAfterMinutes(10);
delaySenderWA.sendAfterMinutes(20);

