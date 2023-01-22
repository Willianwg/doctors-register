import { Specialty } from "src/application/entities/Specialty";
import { SpecialtyRepository } from "src/application/repositories/SpecialtyRepository";


export class InMemorySpecialtyRepository implements SpecialtyRepository {
    specialties: Specialty[] = [];

    async findAllInArray(specialties: string[]) {
        const matchSpecialties = this.specialties.map(item => {
            if (specialties.includes(item.name))
                return item;
        });

        return matchSpecialties;
    }

    async registerSpecialty(specialty: Specialty): Promise<void> {
        this.specialties.push(specialty);
    }
}