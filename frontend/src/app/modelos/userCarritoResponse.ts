import { userCarrito } from "./userCarrito";


export class userCarritoResponse{
    status: number;
    mensaje: string;
    data:Array<userCarrito>;

    constructor(status:number, mensaje:string, data:Array<userCarrito>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}