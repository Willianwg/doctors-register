import { Medic } from "../entities/Medic";
import { CRM } from "../entities/ObjectValues/CRM";
import { Name } from "../entities/ObjectValues/Name";
import { Specialty } from "../entities/Specialty";
import { MedicRepository } from "../repositories/MedicRepository";
import { SpecialtyRepository } from "../repositories/SpecialtyRepository";
import { SpecialtyUtils } from "../utils/IsSpecialtyValid";
import { randomUUID } from "node:crypto";

type RegisterMedicRequest = {
    name: string;
    crm: number;
    phone: number;
    cellPhone: number;
    postalCode: number;
    specialties: string[];
}

export class RegisterMedic {
    constructor(private medicRepository: MedicRepository, private specialtiesRepository: SpecialtyRepository) { }
    async execute(request: RegisterMedicRequest) {
        if (request.specialties.length < 2) {
            throw new Error("You must define at least 2 specialties");
        }
        const name = new Name(request.name);
        const crm = new CRM(request.crm);

        SpecialtyUtils.isValid(request.specialties);

        const specialties: Specialty[] = await this.specialtiesRepository.findAllInArray(request.specialties);

        const newMedic = new Medic({
            name,
            crm,
            phone: request.phone,
            cellPhone: request.cellPhone,
            postalCode: request.postalCode,
            specialties
        }, randomUUID())

        await this.medicRepository.registerMedic(newMedic);
    }
}