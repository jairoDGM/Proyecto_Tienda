export class codigoCarrito{
    codigo_producto:number;
    precio:number;
    nombre_producto:string;
    descripcion_producto:string;

    constructor(codigo_producto:number, precio:number, nombre_producto:string, descripcion_producto:string){
        this.codigo_producto=codigo_producto;
        this.precio=precio;
        this.nombre_producto=nombre_producto;
        this.descripcion_producto=descripcion_producto;
    }
}