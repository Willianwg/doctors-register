
export class Specialties {
    specialties: string[];

    constructor(specialties: string[]) {
        if (specialties.length < 2) {
            throw new Error("You must define at least 2 specialties");
        }

        this.specialties = specialties;
    }

    get value() {
        return this.specialties;
    }
}
