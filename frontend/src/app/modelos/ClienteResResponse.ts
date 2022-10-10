import { ClienteRes } from "./ClienteRes";

export class ClienteResResponse{
    status: number;
    mensaje: string;
    data:Array<ClienteRes>;

    constructor(status:number, mensaje:string, data:Array<ClienteRes>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}