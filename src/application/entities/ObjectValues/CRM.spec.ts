import { CRM } from "./CRM"

describe("Medic CRM", ()=>{
    it("should be able to create a medic's CRM", ()=>{
        const crm = new CRM(1234567);

        expect(crm).toBeTruthy();
    })

    it("should not be able to create a medic's CRM with more than 7 digits", ()=>{

        expect(()=>new CRM(123456789)).toThrow();
    })
})