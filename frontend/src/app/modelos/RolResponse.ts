import { Rol } from "./Rol";

export class RolResponse{
    status: number;
    mensaje: string;
    data:Array<Rol>;

    constructor(status:number, mensaje:string, data:Array<Rol>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}