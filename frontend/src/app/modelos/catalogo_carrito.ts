export class catalogo_carrito{
    codigo_producto:number;
    nombre_producto:string;
    precio:number;


    constructor(codigo_producto:number,nombre_producto:string, precio:number){
        this.codigo_producto=codigo_producto;
        this.nombre_producto=nombre_producto;
        this.precio=precio;
    }

}