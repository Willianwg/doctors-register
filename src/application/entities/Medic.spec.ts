import { Medic } from "./Medic"
import { CRM } from "./ObjectValues/CRM";
import { Name } from "./ObjectValues/Name";
import { Specialty } from "./Specialty";

describe("Medic", () => {
    it("should be able to create Medic", () => {

        const specialty1 = new Specialty({ name: "CIRURGIA_DE_TORAX" }, "sp1");
        const specialty2 = new Specialty({ name: "ALERGOLOGIA" }, "sp2");

        const specialties = [specialty1, specialty2];

        const medic = new Medic({
            name: new Name("Test Name"),
            crm: new CRM(9999999),
            phone: 12341234,
            cellPhone: 955555555,
            postalCode: 11223345,
            specialties,
        }, "test-id");

        expect(medic).toBeTruthy();
    })
})