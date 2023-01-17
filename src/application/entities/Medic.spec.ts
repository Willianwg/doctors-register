import { Medic } from "./Medic"
import { CRM } from "./ObjectValues/CRM";
import { Name } from "./ObjectValues/Name";
import { Specialties } from "./ObjectValues/MedicSpecialties";

describe("Medic", ()=>{
    it("should be able to create Medic", ()=>{
        const medic = new Medic({
            name: new Name("Test Name"),
            crm: new CRM(9999999),
            phone: 12341234,
            cellPhone: 955555555,
            postalCode: 11223345,
            specialties: new Specialties(["CIRURGIA_DE_TORAX", "ANGIOLOGIA"]),
        }, "test-id");

        expect(medic).toBeTruthy();
    })
})