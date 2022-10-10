export class CompraRes{
    id_cliente:number;
    id_compra:number;

    constructor(id_cliente:number, id_compra:number){
        this.id_cliente=id_cliente;
        this.id_compra=id_compra;
    }
}