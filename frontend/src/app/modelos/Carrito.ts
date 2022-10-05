export class Carrito{
    nombre_producto: string;
    precio: number;
    descripcion_producto:string;



    constructor(nombre_producto:string, precio:number, descripcion_producto:string){
        this.nombre_producto=nombre_producto;
        this.precio=precio;
        this.descripcion_producto=descripcion_producto;


    }

}