//modelo para insertar en la base de datos
export class pagoformulario{
    //compra
    nombre_courrier:string;
    compania_tarjeta:string;
    total_pagar:number

    //compra cliente
    id_compra:number;//se obtiene de consulta a db



    constructor(nombre_courrier:string,compania_tarjeta:string,id_compra:number,total_pagar:number){
        this.nombre_courrier=nombre_courrier;
        this.compania_tarjeta=compania_tarjeta;
        this.id_compra = id_compra;
        this.total_pagar=total_pagar;
    }

}