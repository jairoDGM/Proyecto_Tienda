import { Cliente } from "./Cliente";

export class ClienteResponse{
    status: number;
    mensaje: string;
    data:Array<Cliente>;

    constructor(status:number, mensaje:string, data:Array<Cliente>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}