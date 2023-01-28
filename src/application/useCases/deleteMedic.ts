import { Medic } from "../entities/Medic";
import { MedicRepository } from "../repositories/MedicRepository";

type DeleteMedicRequest = {
    id: string;
}

export class DeleteMedic {
    constructor(private medicRepository: MedicRepository) { }
    async execute(request: DeleteMedicRequest) {

        const medic: Medic = await this.medicRepository.findById(request.id);

        if(!medic) throw new Error("Medic not found");

        medic.delete();

        await this.medicRepository.updateMedic(medic);
    }
}