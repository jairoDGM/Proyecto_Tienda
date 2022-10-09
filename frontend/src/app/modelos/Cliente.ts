export class Cliente{
    nombre: string;
    fecha: string;
    contrasena:string;
    correo: string;


    constructor(nombre:string, fecha:string, contrasena:string, correo:string){
        this.nombre=nombre;
        this.fecha=fecha;
        this.contrasena=contrasena;
        this.correo=correo;
    }

}