type AvailableSpecialties = "ALERGOLOGIA" | "ANGIOLOGIA" | "BUCOMAXILO" | "CARDIOLOGIA_CLINICA" | "CARDIOLOGIA_INFANTIL" | "CIRURGIA_CABECA_E_PESCOCO" | "CIRURGIA_CARDIACA" | "CIRURGIA_DE_TORAX";

export enum ValidSpecialties {
    ALERGOLOGIA = "Alergologia",
    ANGIOLOGIA = "Angiologia",
    BUCOMAXILO = "Buco maxilo",
    CARDIOLOGIA_CLINICA = "Cardiologia clínica",
    CARDIOLOGIA_INFANTIL = "Cardiologia infantil",
    CIRURGIA_CABECA_E_PESCOCO = "Cirurgia cabeça e pescoço",
    CIRURGIA_CARDIACA = "Cirurgia cardíaca",
    CIRURGIA_DE_TORAX = "Cirurgia de tórax",
}

type SpecialtyProps = {
    name: AvailableSpecialties;
}

export class Specialty {
    private _id: string;
    private props: SpecialtyProps;

    constructor(props: SpecialtyProps, id: string) {
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