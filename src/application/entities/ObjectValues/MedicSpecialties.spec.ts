import { Specialty } from "../Specialty";
import { MedicSpecialties } from "./MedicSpecialties";

describe("Medic Specialties", ()=>{
    it("should be able to create medic's specialties", ()=>{
        const firstSpecialty = new Specialty({ name: "CIRURGIA_DE_TORAX" }, "SP1");
        const Secondpecialty = new Specialty({ name: "ANGIOLOGIA" }, "SP2");

        const specialties = new MedicSpecialties([firstSpecialty, Secondpecialty]);

        expect(specialties).toBeTruthy();
    })

    it("should not be able to create less than 2 medic's specialties", ()=>{
        const firstSpecialty = new Specialty({ name: "CIRURGIA_DE_TORAX" }, "SP1");

        expect(()=> new MedicSpecialties([firstSpecialty])).toThrow("You must define at least 2 specialties");
    })
})