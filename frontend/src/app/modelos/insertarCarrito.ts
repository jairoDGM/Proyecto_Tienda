export class insertarCarrito{
    id_cliente:number;
    codigo_producto:number;
    cantidad_producto:number;

    constructor(id_cliente:number,codigo_producto:number, cantidad_producto:number){
        this.id_cliente=id_cliente;
        this.codigo_producto=codigo_producto;
        this.cantidad_producto=cantidad_producto;
    }

}