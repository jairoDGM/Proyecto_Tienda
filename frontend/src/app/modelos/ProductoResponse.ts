import { Producto } from "./Producto";

export class ProductoResponse{
    status: number;
    mensaje: string;
    data:Array<Producto>;

    constructor(status:number, mensaje:string, data:Array<Producto>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}