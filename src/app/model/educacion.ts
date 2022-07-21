export class Educacion {
    id?:number;
    institucion:String;
    logo:URL;
    descripcion:String;
    completo:Boolean;
    duracion:String;

    // Constructor
    constructor(institucion:String, logo:URL, descripcion:String, completo:Boolean,duracion:String){
        this.institucion=institucion;
        this.logo=logo;
        this.descripcion=descripcion;
        this.completo=completo;
        this.duracion=duracion;
    }

}
