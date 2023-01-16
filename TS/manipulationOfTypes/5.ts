interface IForm {
    name: string;
    password: string;
}

interface Valid {
    isValid: true;
}

interface Invalid {
    isValid: false;
    errorMessage: string;
}

type Validation<T> = {
    [K in keyof T]: Valid | Invalid;
}

const form: IForm = {
    name: 'Akzam',
    password: '123'
}

const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Password must be longer than 5 characters' }
}
type ReadOrWrite = 'read' | 'write';
type Access = `can${Capitalize<ReadOrWrite>}`;
