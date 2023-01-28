import { Replace } from "src/helpers/Replace";
import { CRM } from "./ObjectValues/CRM";
import { Name } from "./ObjectValues/Name";
import { Specialty } from "./Specialty";

type MedicProps = {
    name: Name;
    crm: CRM;
    phone: number;
    cellPhone: number;
    postalCode: number;
    specialties: Specialty[];
    createdAt: Date;
    deletedAt?: Date | null;
}

export class Medic {
    private _id: string;
    private props: MedicProps;

    constructor(props: Replace<MedicProps, { createdAt?: Date }>, id: string){

        this._id = id;
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }
    }

    get id(){
        return this._id;
    }

    get name() {
        return this.props.name;
    }

    get crm() {
        return this.props.crm;
    }

    get phone() {
        return this.props.phone;
    }

    set phone(phone: number) {
        this.props.phone = phone;
    }

    get cellPhone() {
        return this.props.cellPhone;
    }

    set cellPhone(cellPhone: number) {
        this.props.cellPhone = cellPhone;
    }

    get postalCode() {
        return this.props.postalCode;
    }

    set postalCode(postalCode: number) {
        this.props.postalCode = postalCode;
    }

    get specialties() {
        return this.props.specialties;
    }

    set specialties(specialties: Specialty[]) {
        this.props.specialties = specialties;
    }
    
    get createdAt() {
    return this.props.createdAt;
    }

    get deletedAt() {
        return this.props.deletedAt;
    }

    delete(){
        this.props.deletedAt = new Date();
    }
}