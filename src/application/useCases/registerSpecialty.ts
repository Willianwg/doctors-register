import { Specialty } from "../entities/Specialty";
import { SpecialtyRepository } from "../repositories/SpecialtyRepository";
import { randomUUID } from "node:crypto";

type RegisterSpecialtyRequest = {
    specialty: string;
}

export class RegisterSpecialty {
    constructor(private specialtiesRepository: SpecialtyRepository) { }
    async execute(request: RegisterSpecialtyRequest) {

        const specialty = new Specialty({ name: request.specialty }, randomUUID());
        await this.specialtiesRepository.registerSpecialty(specialty);

    }
}