import { Specialties } from "./Specialties"

describe("Medic Specialties", ()=>{
    it("should be able to create medic's specialties", ()=>{
        const specialties = new Specialties(["Cirurgia de tórax", "Alergologia"]);

        expect(specialties).toBeTruthy();
    })

    it("should not be able to create less than 2 medic's specialties", ()=>{

        expect(()=> new Specialties(["Alergologia"])).toThrow();
    })
})