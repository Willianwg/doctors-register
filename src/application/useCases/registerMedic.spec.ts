import { InMemoryMedicRepository } from "../../../test/inMemoryDatabase/repositories/inMemoryMedicRepository";
import { InMemorySpecialtyRepository } from "../../../test/inMemoryDatabase/repositories/inMemorySpecialtyRepository";
import { Specialty } from "../entities/Specialty";
import { RegisterMedic } from "./registerMedic";

describe("Register Medic", () => {
    it("should be able to register a Medic using valid specialty in correct format", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const registerMedic = new RegisterMedic(medicRepository, specialtyRepository);

        specialtyRepository.registerSpecialty(new Specialty({ name: "ALERGOLOGIA" }, "test-id"));
        specialtyRepository.registerSpecialty(new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id"));

        await registerMedic.execute({
            name: "Foo Bar",
            crm: 1234567,
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
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
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
        }));
    })

    it("should not be able to register a Medic using invalid specialty format or type", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const registerMedic = new RegisterMedic(medicRepository, specialtyRepository);

        expect(() => registerMedic.execute({
            name: "Foo Bar",
            crm: 1234567,
            cellPhone: 12345678,
            phone: 12345666,
            postalCode: 123123,
            specialties: ["cardiologia_clinica", "alergologia"],
        })
        ).rejects.toThrow();
    })

    it("should not be able to register a Medic sending less than two specialties", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const medicRepository = new InMemoryMedicRepository();
        const registerMedic = new RegisterMedic(medicRepository, specialtyRepository);

        expect(() => registerMedic.execute({
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