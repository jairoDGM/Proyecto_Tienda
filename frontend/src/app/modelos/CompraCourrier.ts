export class CompraCourrier{
    nombre_courrier: string;
    compania_tarjeta:string;
    estado: number;
    total_pagar: number;

    constructor(nombre_courrier:string, compania_tarjeta:string, estado:number, total_pagar:number){
        this.nombre_courrier=nombre_courrier;
        this.compania_tarjeta=compania_tarjeta;
        this.estado=estado;
        this.total_pagar=total_pagar;
    }

}