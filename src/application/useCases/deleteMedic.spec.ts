import { InMemoryMedicRepository } from "../../../test/inMemoryDatabase/repositories/inMemoryMedicRepository";
import { Medic } from "../entities/Medic";
import { CRM } from "../entities/ObjectValues/CRM";
import { Name } from "../entities/ObjectValues/Name";
import { Specialty } from "../entities/Specialty";
import { DeleteMedic } from "./deleteMedic";

describe("Delete Medic", () => {
    let medicRepository: InMemoryMedicRepository;
    let deleteMedic: DeleteMedic;
    let newMedic: Medic;

    const alergologia = new Specialty({ name: "ALERGOLOGIA" }, "test-id");
    const cardiologia_clinica = new Specialty({ name: "CARDIOLOGIA_CLINICA" }, "test-id");

    beforeEach(() => {
        medicRepository = new InMemoryMedicRepository();
        deleteMedic = new DeleteMedic(medicRepository);

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

    it("should be able to Delete a Medic using a valid id", async () => {

        await deleteMedic.execute({
            id: newMedic.id
        })

        expect(medicRepository.medics[0].deletedAt).toEqual(
            expect.any(Date)
        );

    })

    it("should not be able to Delete a Medic using invalid id", async () => {

        expect(() => deleteMedic.execute({
            id: "wrong-id"
        })
        ).rejects.toThrow();

        expect(medicRepository.medics[0].deletedAt).toBeUndefined();
    })

})