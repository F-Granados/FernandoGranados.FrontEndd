export interface Hijo {
    idderhab?: number;
    idpersonal?: number;
    appaterno?: string;
    apmaterno?: string;
    nombre1?: string;
    nombre2?: string;
    fchnac?: Date;
    nombrecompleto?: string;
    
}
export class CHijo{
        constructor(

        public idderhab?: number,
        public idpersonal?: number,
        public appaterno?: string,
        public apmaterno?: string,
        public nombre1?: string,
        public nombrecompleto?:string,
        public nombre2?: string,
        public fchnac?: Date,
        ){}
    }