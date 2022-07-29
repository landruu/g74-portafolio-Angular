export class Proyecto {
    id?:number;
    nombre:String;
    iniciado:String;
    descripcion:String;
    link:String;

    constructor(nombre:String, iniciado:String,descripcion:String,link:String){
        this.nombre=nombre;
        this.iniciado=iniciado;
        this.descripcion=descripcion;
        this.link=link;
    }
}
