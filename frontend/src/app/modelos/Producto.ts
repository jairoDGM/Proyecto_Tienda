export class Producto{
    precio: number;
    nombre_producto: string;
    cantidad_bodega:number;
    descripcion_producto: string;
    imagen: string;

    constructor(precio:number, nombre_producto:string, cantidad_bodega:number, descripcion_producto:string, imagen:string){
        this.precio=precio;
        this.nombre_producto=nombre_producto;
        this.cantidad_bodega=cantidad_bodega;
        this.descripcion_producto=descripcion_producto;
        this.imagen=imagen;
    }

}