export class Persona {

    id?:number;
    nombre:String;
    apellido:String;
    avatar:URL;
    direccion:String;
    nacimiento:String;
    about:String;
    oficio:String;

    constructor(nombre:String, apellido:String, avatar:URL, direccion:String, nacimiento:String, about:String, oficio:String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.avatar = avatar;
        this.direccion = direccion;
        this.nacimiento = nacimiento;
        this.about = about;
        this.oficio = oficio;
    }
}
