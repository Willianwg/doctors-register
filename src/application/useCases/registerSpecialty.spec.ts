import { InMemorySpecialtyRepository } from "../../../test/inMemoryDatabase/repositories/inMemorySpecialtyRepository";
import { RegisterSpecialty } from "./registerSpecialty";

describe("Register Specialty", () => {
    it("should be able to register a Specialty using valid specialty in correct format", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const registerSpecialty = new RegisterSpecialty(specialtyRepository);

        await registerSpecialty.execute({ specialty: "ALERGOLOGIA" });

        expect(specialtyRepository.specialties[0]).toEqual(expect.objectContaining({ name: 'ALERGOLOGIA' }));
    })

    it("should not be able to register a Specialty using non valid format or specialty", async () => {
        const specialtyRepository = new InMemorySpecialtyRepository();
        const registerSpecialty = new RegisterSpecialty(specialtyRepository);

        expect(async () => registerSpecialty.execute({ specialty: "Alergologia" })).rejects.toThrow();
    })
})