import { validSpecialties } from "../entities/Specialty";

export class SpecialtyUtils {
    static isValid(specialties: string[]) {
        specialties.map(specialty => {
            if (!validSpecialties.includes(specialty)) {
                throw new Error("Specialty not valid. Be aware to write as shown in the documentation. The valid specialties are: " + validSpecialties);
            }
        });
    }
}