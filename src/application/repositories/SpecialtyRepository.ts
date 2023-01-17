import { Specialty } from "../entities/Specialty";

export abstract class SpecialtyRepository {
    abstract findAllInArray(specialties: string[]) :  Promise<Specialty[]>;
}