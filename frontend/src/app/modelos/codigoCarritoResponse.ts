import { codigoCarrito } from "./codigoCarrito";

export class codigoCarritoResponse{
    status: number;
    mensaje: string;
    data:Array<codigoCarrito>;

    constructor(status:number, mensaje:string, data:Array<codigoCarrito>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}