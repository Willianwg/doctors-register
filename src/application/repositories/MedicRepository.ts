import { Medic } from "../entities/Medic";

export abstract class MedicRepository {
    abstract registerMedic(medic: Medic) :  Promise<void>;
    abstract updateMedic(medic: Medic) :  Promise<void>;
    abstract findById(id: string) :  Promise<Medic | null>;
}