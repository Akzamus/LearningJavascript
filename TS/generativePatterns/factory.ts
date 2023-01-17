interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {

    public id: number;
    public status: string;
    private vehicle: any;

    public setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('',
            {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            })
        return (await res.json()).isSuccess;
    }
}

class ABInsurance implements IInsurance {

    public id: number;
    public status: string;
    private vehicle: any;

    public setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('',
            {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            })
        return (await res.json()).yes;
    }
}

abstract class InsuranceFactory {
    public db: any;

    public abstract createInsurance(): IInsurance;

    public saveHistory(ins: IInsurance): void {
        this.db.save(ins.id, ins.status);
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    public createInsurance(): TFInsurance{
        return new TFInsurance();
    }

}

class ABInsuranceFactory extends InsuranceFactory{
    public createInsurance(): ABInsurance {
        return new ABInsurance();
    }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const tfIns1 = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(tfIns1);

const abInsuranceFactory = new TFInsuranceFactory();
const abIns1 = abInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(abIns1);

const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
}

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
    public db: any;

    public createInsurance<T extends keyof IT>(type: T): IT[T] {
        return INSURANCE_TYPE[type];
    }

    public saveHistory(ins: IInsurance): void {
        this.db.save(ins.id, ins.status);
    }
}

const insuranceFactoryAlt = new InsuranceFactoryAlt();

const tfIns2 = new (insuranceFactoryAlt.createInsurance('tf'));
insuranceFactoryAlt.saveHistory(tfIns2);

const abIns2 = new (insuranceFactoryAlt.createInsurance('ab'));
insuranceFactoryAlt.saveHistory(abIns2);