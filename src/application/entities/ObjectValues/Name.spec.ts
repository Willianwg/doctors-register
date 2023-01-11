import { Name } from "./Name"

describe("Medic name", ()=>{
    it("should be able to create a medic's name", ()=>{
        const name = new Name("Paulo Muzy");

        expect(name).toBeTruthy();
    })

    it("should not be able to create a medic's name with more than 120 digits", ()=>{

        expect(()=>new Name("A".repeat(121))).toThrow();
    })
})