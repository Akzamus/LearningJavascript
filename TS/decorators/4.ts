function Max(max: number) {
    return (
        target: object,
        propertyKey: string | symbol
    ) => {
        let value: number;

        const setter = (newValue: number) => {
            if(newValue > max) { console.log(`Value can less than ${max}`) }
            else { value = newValue; }
        }
        const getter = () => value;

        Object.defineProperty(target, propertyKey, {
           set: setter,
           get: getter
        });
    }
}