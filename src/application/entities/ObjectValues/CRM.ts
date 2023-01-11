
export class CRM {
    crm: number;

    constructor(crm: number) {
        const isLengthValid = this.validateCRMLength(crm);
        if (!isLengthValid) {
            throw new Error("CRM can't have more than 7 digits");
        }

        this.crm = crm;
    }

    validateCRMLength(crm: number) {
        return crm.toString().length <= 7;
    }

    get value() {
        return this.crm;
    }
}
