import { CompraRes } from "./CompraRes";

export class CompraResResponse{
    status: number;
    mensaje: string;
    data:Array<CompraRes>;

    constructor(status:number, mensaje:string, data:Array<CompraRes>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;
    }

}