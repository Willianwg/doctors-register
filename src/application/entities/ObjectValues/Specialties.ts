enum Specialty {
    ALERGOLOGIA = "Alergologia",
    ANGIOLOGIA = "Angiologia",
    BUCOMAXILO = "Buco maxilo",
    CARDIOLOGIA_CLINICA = "Cardiologia clínica",
    CARDIOLOGIA_INFANTIL = "Cardiologia infantil",
    CIRURGIA_CABECA_E_PESCOCO = "Cirurgia cabeça e pescoço",
    CIRURGIA_CARDIACA = "Cirurgia cardíaca",
    CIRURGIA_DE_TORAX = "Cirurgia de tórax",
}

type SpecialtyTypes = "ALERGOLOGIA" | "ANGIOLOGIA" | "BUCOMAXILO" | "CARDIOLOGIA_CLINICA" | "CARDIOLOGIA_INFANTIL" | "CIRURGIA_CABECA_E_PESCOCO" | "CIRURGIA_CARDIACA" | "CIRURGIA_DE_TORAX";

export class Specialties {
    private specialties: SpecialtyTypes[];

    constructor(specialties: SpecialtyTypes[]) {
        if (specialties.length < 2) {
            throw new Error("You must define at least 2 specialties");
        }

        this.value = specialties;
    }

    isSpecialtyValid(specialty: string) {
        return Specialty[specialty] ? true : false;
    }

    set value(specialties: SpecialtyTypes[]){
        const validSpecialties = specialties.map(specialty => {
            const isValid = this.isSpecialtyValid(specialty);
            if (!isValid) throw new Error("Specialty not valid. Be aware to write as shown in the documentation");
            
            return specialty;
        });

        this.specialties = validSpecialties;
    }

    get value(){
        return this.specialties;
    }
}
