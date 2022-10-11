import { insertarCarrito } from "./insertarCarrito";

export class insertarCarritoResponse{
    status: number;
    mensaje: string;
    data:Array<insertarCarrito>;

    constructor(status:number, mensaje:string, data:Array<insertarCarrito>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}