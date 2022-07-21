export class Proyecto {
    id?:number;
    nombre:String;
    iniciado:String;
    descripcion:String;
    link:URL;

    constructor(nombre:String, inciado:String,descripcion:String,link:URL){
        this.nombre=nombre;
        this.iniciado=inciado;
        this.descripcion=descripcion;
        this.link=link;        
    }
}
