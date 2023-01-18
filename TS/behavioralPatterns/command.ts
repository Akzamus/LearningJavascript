class User {

    constructor(public userId: number) { }
}

class CommandHistory {

    public commands: Command[] = [];

    public push(command: Command): void {
        this.commands.push(command);
    }

    public remove(command: Command): void {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}

abstract class Command {

    public commandId: number;

    protected constructor(public history: CommandHistory) {
        this.commandId = Math.random();
    }

    public abstract execute(): void;
}

class AddUserCommand extends Command {

    constructor(
        private user: User,
        private receiver: UserService,
        public history: CommandHistory
    ) {
        super(history);
    }

    public execute(): void {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }

    public undo(): void {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

class UserService {

    public saveUser(user: User): void {
        console.log(`Saving user with id: ${user.userId}`)
    }

    public deleteUser(userId: number): void {
        console.log(`Deleting user with id: ${userId}`)
    }
}

class MyController {

    private receiver: UserService;
    private history: CommandHistory = new CommandHistory();

    public addReceiver(receiver: UserService): void {
        this.receiver = receiver;
    }

    public run(): void {
        const addUserCommand = new AddUserCommand(
            new User(1),
            this.receiver,
            this.history
        );

        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}

const myController = new MyController();
myController.addReceiver(new UserService());
myController.run();