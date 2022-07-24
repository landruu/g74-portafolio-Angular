export class Usuario {
    id?: number;
    usuario: String;
    password: String;

    constructor(usuario: String, password: String) {
        this.usuario = usuario;
        this.password = password;
    }

}
