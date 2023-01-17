import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

export function Positive(
    target: object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    let existsParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    existsParams.push(parameterIndex);
    Reflect.defineMetadata(POSITIVE_METADATA_KEY, existsParams, propertyKey);
}

export function Validate(
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
        if(positiveParams) {
            for(let index of positiveParams) {
                if(args[index] <= 0) {
                    throw new Error('Number must be positive or 0');
                }
            }
        }
        return method?.apply(this, args);
    }
}
