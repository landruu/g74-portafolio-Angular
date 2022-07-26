export class Educacion {
    id?:number;
    institucion:String;
    logo:String;
    descripcion:String;
    completo:Boolean;
    duracion:String;

    // Constructor
    constructor(institucion:String, logo:String, descripcion:String, completo:Boolean,duracion:String){
        this.institucion=institucion;
        this.logo=logo;
        this.descripcion=descripcion;
        this.completo=completo;
        this.duracion=duracion;
    }

}
