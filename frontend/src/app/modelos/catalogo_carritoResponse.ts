import { catalogo_carrito } from "./catalogo_carrito";

export class catalogo_carritoResponse{
    status: number;
    mensaje: string;
    data:Array<catalogo_carrito>;

    constructor(status:number, mensaje:string, data:Array<catalogo_carrito>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}