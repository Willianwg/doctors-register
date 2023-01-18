type AvailableSpecialties = "ALERGOLOGIA" | "ANGIOLOGIA" | "BUCOMAXILO" | "CARDIOLOGIA_CLINICA" | "CARDIOLOGIA_INFANTIL" | "CIRURGIA_CABECA_E_PESCOCO" | "CIRURGIA_CARDIACA" | "CIRURGIA_DE_TORAX";

export const validSpecialties : AvailableSpecialties[] = [
    'ALERGOLOGIA',
    'ANGIOLOGIA',
    'BUCOMAXILO',
    'CARDIOLOGIA_CLINICA',
    'CARDIOLOGIA_INFANTIL',
    'CIRURGIA_CABECA_E_PESCOCO',
    'CIRURGIA_CARDIACA',
    'CIRURGIA_DE_TORAX',
]

type SpecialtyProps = {
    name: AvailableSpecialties;
}

export class Specialty {
    private _id: string;
    private props: SpecialtyProps;

    constructor(props: SpecialtyProps, id: string) {
        if(!validSpecialties[props.name]){
            throw new Error("Specialty or format invalid. The only available specialties are: " + validSpecialties );
        }

        this._id = id;
        this.props = props;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this.props.name;
    }

}