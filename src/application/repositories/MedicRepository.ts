import { Medic } from "../entities/Medic";

export abstract class MedicRepository {
    abstract registerMedic(medic: Medic) :  Promise<void>;
}