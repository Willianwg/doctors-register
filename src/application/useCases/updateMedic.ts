import { Medic } from "../entities/Medic";
import { Specialty } from "../entities/Specialty";
import { MedicRepository } from "../repositories/MedicRepository";
import { SpecialtyRepository } from "../repositories/SpecialtyRepository";
import { SpecialtyUtils } from "../utils/IsSpecialtyValid";

type UpdateMedicRequest = {
    id: string;
    name: string;
    crm: number;
    phone: number;
    cellPhone: number;
    postalCode: number;
    specialties: string[];
}

export class UpdateMedic {
    constructor(private medicRepository: MedicRepository, private specialtiesRepository: SpecialtyRepository) { }
    async execute(request: UpdateMedicRequest) {

        if (request.specialties.length < 2) throw new Error("You must define at least 2 specialties");

        SpecialtyUtils.isValid(request.specialties);
        const medic: Medic = await this.medicRepository.findById(request.id);

        if(!medic) throw new Error("Medic not found");

        const specialties: Specialty[] = await this.specialtiesRepository.findAllInArray(request.specialties);

        medic.phone = request.phone;
        medic.cellPhone = request.cellPhone;
        medic.postalCode = request.postalCode;
        medic.specialties = specialties;


        await this.medicRepository.updateMedic(medic);
    }
}