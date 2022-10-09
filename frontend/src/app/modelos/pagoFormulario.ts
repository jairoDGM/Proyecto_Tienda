//modelo para insertar en la base de datos
export class pagoformulario{
    //compra
    nombre_courrier:string;
    compania_tarjeta:string;
    monto:number

    //compra cliente
    id_compra:number;//se obtiene de consulta a db



    constructor(nombre_courrier:string,compania_tarjeta:string,id_compra:number,monto:number){
        this.nombre_courrier=nombre_courrier;
        this.compania_tarjeta=compania_tarjeta;
        this.id_compra = id_compra;
        this.monto=monto;
    }

}