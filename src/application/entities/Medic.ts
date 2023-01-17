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

    get cellPhone() {
        return this.props.cellPhone;
    }

    get postalCode() {
        return this.props.postalCode;
    }

    
    get specialties() {
        return this.props.specialties;
    }
    
    get createdAt() {
    return this.props.createdAt;
    }

    get deletedAt() {
        return this.props.deletedAt;
    }
}