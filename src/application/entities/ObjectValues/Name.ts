
export class Name {
    name: string;

    constructor(name: string) {
        const isLengthValid = this.validateNameLength(name);
        if (!isLengthValid) {
            throw new Error("Name can't have more than 120 characters");
        }

        this.name = name;
    }

    validateNameLength(name: string) {
        return name.length <= 120;
    }

    get value() {
        return this.name;
    }
}
