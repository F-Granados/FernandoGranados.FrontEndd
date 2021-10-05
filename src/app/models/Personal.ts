export interface Personal {
    idpersonal?: number;
    appaterno?: string;
    apmaterno?: string;
    nombre1?: string;
    nombre2?: string;
    nombrecompleto?: string;
    fchnac?: Date;
    fchingreso?: Date;
    Dni?:string;
}
export class CPersonal{
        constructor(

        public idpersonal?: number,
        public appaterno?: string,
        public apmaterno?: string,
        public nombre1?: string,
        public nombre2?: string,
        public nombrecompleto?: string,
        public fchnac?: Date,
        public fchingreso?: Date,
        public Dni?:string
        ){}
    }
