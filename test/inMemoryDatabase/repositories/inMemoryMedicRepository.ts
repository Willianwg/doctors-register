import { Medic } from "src/application/entities/Medic";
import { MedicRepository } from "src/application/repositories/MedicRepository";


export class InMemoryMedicRepository implements MedicRepository {
    medics : Medic[] = [];

    async registerMedic(medic: Medic): Promise<void> {
        this.medics.push(medic);
    }

    async updateMedic(medic: Medic): Promise<void> {
        const medicIndex = this.medics.findIndex( item => medic.id === item.id );
        this.medics[medicIndex] = medic;
    }

    async findById(id: string): Promise<Medic | null> {
        const medic = this.medics.find(medic => medic.id === id);

        return medic ? medic : null;
    }
}