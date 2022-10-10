export class ClienteRes{
    id_cliente:number
    nombre: string;
    fecha: string;
    contrasena:string;
    correo: string;


    constructor(id_cliente:number,nombre:string, fecha:string, contrasena:string, correo:string){
        this.id_cliente=id_cliente;
        this.nombre=nombre;
        this.fecha=fecha;
        this.contrasena=contrasena;
        this.correo=correo;
    }

}