import { InMemoryMedicRepository } from "../../../test/inMemoryDatabase/repositories/inMemoryMedicRepository";
import { InMemorySpecialtyRepository } from "../../../test/inMemoryDatabase/repositories/inMemorySpecialtyRepository";
import { Medic } from "../entities/Medic";
import { CRM } from "../entities/ObjectValues/CRM";
import { Name } from "../entities/ObjectValues/Name";
import { Specialty } from "../entities/Specialty";
import { UpdateMedic } from "./updateMedic";

describe("Update Medic", () => {
    it("should be able to Update a Medic using valid specialty in correct format", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const updateMedic = new UpdateMedic(medicRepository, specialtyRepository);

        const alergologia = new Specialty({ name: "ALERGOLOGIA" }, "test-id");
        const cardiologia_clinica = new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id");

        specialtyRepository.registerSpecialty(alergologia);
        specialtyRepository.registerSpecialty(cardiologia_clinica);

        const newMedic = new Medic({
            name: new Name("Foo Bar"),
            crm: new CRM(1234567),
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: [alergologia, cardiologia_clinica],
        }, "test-id");

        medicRepository.registerMedic(newMedic);

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
    })

    it("should not be able to Update a Medic using invalid specialty format or type", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const updateMedic = new UpdateMedic(medicRepository, specialtyRepository);

        const alergologia = new Specialty({ name: "ALERGOLOGIA" }, "test-id");
        const cardiologia_clinica = new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id");

        const newMedic = new Medic({
            name: new Name("Foo Bar"),
            crm: new CRM(1234567),
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: [alergologia, cardiologia_clinica],
        }, "test-id");

        medicRepository.registerMedic(newMedic);

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
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const updateMedic = new UpdateMedic(medicRepository, specialtyRepository);

        const alergologia = new Specialty({ name: "ALERGOLOGIA" }, "test-id");
        const cardiologia_clinica = new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id");

        const newMedic = new Medic({
            name: new Name("Foo Bar"),
            crm: new CRM(1234567),
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: [alergologia, cardiologia_clinica],
        }, "test-id");

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