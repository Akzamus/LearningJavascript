abstract class DocumentItemState {

    public name: string;
    public item: DocumentItem;

    public setContext(item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;

    public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState{

    constructor() {
        super();
        this.name = 'DraftDocument';
    }

    public delete(): void {
        console.log('Document deleted');
    }

    public publish(): void {
        console.log(`Text has been sent to the site: ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }
}

class PublishDocumentItemState extends DocumentItemState{

    constructor() {
        super();
        this.name = 'PublishDocument';
    }

    public delete(): void {
        console.log('Removed from publication');
        this.item.setState(new DraftDocumentItemState());
    }

    public publish(): void {
        console.log('You cannot publish a published document');
    }
}

class DocumentItem {

    public text: string;
    private state: DocumentItemState = new DraftDocumentItemState();

    public getState(): DocumentItemState {
        return this.state;
    }

    public setState(state: DocumentItemState): void {
        this.state = state;
        this.state.setContext(this);
    }

    public publishDoc() {
        this.state.publish();
    }

    public deleteDoc() {
        this.state.delete();
    }
}

const item = new DocumentItem();
item.text = 'My text!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());