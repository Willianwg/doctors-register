import { Specialty } from "./Specialty";

describe("Specialty", () => {
    it("should be able to create Specialty", () => {

        const specialty = new Specialty({ name: "CIRURGIA_DE_TORAX" }, "test-id");

        expect(specialty).toBeTruthy();
    })
})