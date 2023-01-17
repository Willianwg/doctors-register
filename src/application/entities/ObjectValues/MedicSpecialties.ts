import { Specialty } from "../Specialty";

enum SpecialtyNames {
    ALERGOLOGIA = "Alergologia",
    ANGIOLOGIA = "Angiologia",
    BUCOMAXILO = "Buco maxilo",
    CARDIOLOGIA_CLINICA = "Cardiologia clínica",
    CARDIOLOGIA_INFANTIL = "Cardiologia infantil",
    CIRURGIA_CABECA_E_PESCOCO = "Cirurgia cabeça e pescoço",
    CIRURGIA_CARDIACA = "Cirurgia cardíaca",
    CIRURGIA_DE_TORAX = "Cirurgia de tórax",
}

export class MedicSpecialties {
    private specialties: Specialty[];

    constructor(specialties: Specialty[]) {
        if (specialties.length < 2) {
            throw new Error("You must define at least 2 specialties");
        }

        this.value = specialties;
    }

    isSpecialtyValid(specialty: string) {
        return SpecialtyNames[specialty] ? true : false;
    }

    set value(specialties: Specialty[]){
        const validSpecialties = specialties.map(specialty => {
            const isValid = this.isSpecialtyValid(specialty.name);
            if (!isValid) throw new Error("Specialty not valid. Be aware to write as shown in the documentation");
            
            return specialty;
        });

        this.specialties = validSpecialties;
    }

    get value(){
        return this.specialties;
    }
}
