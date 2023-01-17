import { ValidSpecialties } from "../entities/Specialty";

export class SpecialtyUtils {
    static isValid(specialties: string[]) {
        const response = specialties.map(specialty => {
            if (!ValidSpecialties[specialty]) {
                throw new Error("Specialty not valid. Be aware to write as shown in the documentation");
            }
        });
    }
}