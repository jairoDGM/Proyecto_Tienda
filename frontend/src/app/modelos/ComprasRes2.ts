export class CompraRes2{
    id_compra: number
    nombre_courrier: string;
    compania_tarjeta:string;
    estado: number;
    total_pagar: number;

    constructor( id_compra:number ,nombre_courrier:string, compania_tarjeta:string, estado:number, total_pagar:number){
        this.id_compra=id_compra
        this.nombre_courrier=nombre_courrier;
        this.compania_tarjeta=compania_tarjeta;
        this.estado=estado;
        this.total_pagar=total_pagar;
    }

}