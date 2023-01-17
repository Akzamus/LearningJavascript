function Log() {
    return (
        target: object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
    return (
        target: object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const oldMethod = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await oldMethod?.apply(target, args);
            } catch (error) {
                if(error instanceof Error) {
                    console.log(error.message);
                    if (rethrow) {
                        throw error;
                    }
                }
            }
        }
    }
}