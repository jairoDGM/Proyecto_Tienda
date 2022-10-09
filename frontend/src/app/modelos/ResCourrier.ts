export class ResCourrier{
    nombre_courrier:string;
    compania_tarjeta:string;
    total_pagar:number

    constructor(id_compra:number,nombre_courrier:string,compania_tarjeta:string,total_pagar:number){
        this.nombre_courrier=nombre_courrier;
        this.compania_tarjeta=compania_tarjeta;
        this.total_pagar=total_pagar;
    }

}