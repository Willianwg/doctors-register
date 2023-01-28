import { InMemoryMedicRepository } from "../../../test/inMemoryDatabase/repositories/inMemoryMedicRepository";
import { InMemorySpecialtyRepository } from "../../../test/inMemoryDatabase/repositories/inMemorySpecialtyRepository";
import { Medic } from "../entities/Medic";
import { CRM } from "../entities/ObjectValues/CRM";
import { Name } from "../entities/ObjectValues/Name";
import { Specialty } from "../entities/Specialty";
import { UpdateMedic } from "./updateMedic";

describe("Update Medic", () => {
    let specialtyRepository : InMemorySpecialtyRepository ;
    let medicRepository : InMemoryMedicRepository;
    let updateMedic : UpdateMedic;
    let newMedic : Medic;

    const alergologia = new Specialty({ name: "ALERGOLOGIA" }, "test-id");
    const cardiologia_clinica = new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id");

    beforeEach(() => {
        specialtyRepository = new InMemorySpecialtyRepository();
        medicRepository = new InMemoryMedicRepository();
        updateMedic = new UpdateMedic(medicRepository, specialtyRepository);

        specialtyRepository.registerSpecialty(alergologia);
        specialtyRepository.registerSpecialty(cardiologia_clinica);

        newMedic = new Medic({
            name: new Name("Foo Bar"),
            crm: new CRM(1234567),
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: [alergologia, cardiologia_clinica],
        }, "test-id");

        medicRepository.registerMedic(newMedic);
    })

    it("should be able to Update a Medic using valid specialty in correct format", async () => {

        await updateMedic.execute({
            id: newMedic.id,
            name: "Foo Bar",
            crm: 1234567,
            cellPhone: 222222222,
            phone: 99999999,
            postalCode: 33333333,
            specialties: ["ALERGOLOGIA", "CARDIOLOGIA_CLINICA"],
        })

        expect(specialtyRepository.specialties[0]).toEqual(expect.objectContaining({ name: 'ALERGOLOGIA' }));

        expect(medicRepository.medics[0].name.value).toEqual("Foo Bar");
        expect(medicRepository.medics[0].crm.value).toEqual(1234567);
        expect(medicRepository.medics[0].specialties).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: "ALERGOLOGIA" }),
                expect.objectContaining({ name: "CARDIOLOGIA_CLINICA" }),
            ]),
        );
        expect(medicRepository.medics[0]).toEqual(expect.objectContaining({
            cellPhone: 222222222,
            phone: 99999999,
            postalCode: 33333333,
        }));

        console.log(medicRepository.medics)
    })

    it("should not be able to Update a Medic using invalid specialty format or type", async () => {
        console.log(medicRepository.medics)
        expect(() => updateMedic.execute({
            id: newMedic.id,
            name: "Foo Bar",
            crm: 1234567,
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: ["cardiologia_clinica", "alergologia"],
        })
        ).rejects.toThrow();
    })

    it("should not be able to Update a Medic sending less than two specialties", async () => {
        console.log(medicRepository.medics)
        expect(() => updateMedic.execute({
            id: newMedic.id,
            name: "Foo Bar",
            crm: 1234567,
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: ["cardiologia_clinica"],
        })
        ).rejects.toThrow();
    })
})