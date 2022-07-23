export class Experiencia {
    id?:number;
    nombre:String;
    logo:String;
    descripcion:String;
    alta:String;
    baja:String;

    constructor(nombre:String, logo:String, descripcion:String,alta:String,baja:String) {
        this.nombre= nombre;
        this.logo=logo;
        this.descripcion=descripcion,
        this.alta=alta;
        this.baja=baja;
    }

}
