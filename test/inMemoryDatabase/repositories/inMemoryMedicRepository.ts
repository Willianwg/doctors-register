import { Medic } from "src/application/entities/Medic";
import { MedicRepository } from "src/application/repositories/MedicRepository";


export class InMemoryMedicRepository implements MedicRepository {
    medics : Medic[] = [];

    async registerMedic(medic: Medic): Promise<void> {
        this.medics.push(medic);
    }
}