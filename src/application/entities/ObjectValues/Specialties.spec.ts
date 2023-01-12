import { Specialties } from "./Specialties";

describe("Medic Specialties", ()=>{
    it("should be able to create medic's specialties", ()=>{
        const specialties = new Specialties(["CIRURGIA_DE_TORAX", "ANGIOLOGIA"]);

        expect(specialties).toBeTruthy();
    })

    it("should not be able to create less than 2 medic's specialties", ()=>{

        expect(()=> new Specialties(["ALERGOLOGIA"])).toThrow("You must define at least 2 specialties");
    })
})