export class Skill {
    id?:number;
    nombre:String;
    descripcion:String;
    avance:number;

    constructor(nombre:String,descripcion:String,avance:number) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.avance=avance;
    }
}
