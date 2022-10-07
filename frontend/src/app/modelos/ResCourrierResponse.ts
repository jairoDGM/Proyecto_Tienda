import { CompraCourrier } from "./CompraCourrier";


export class ResCourrierResponse{
    status: number;
    mensaje: string;
    data:Array<CompraCourrier>;

    constructor(status:number, mensaje:string, data:Array<CompraCourrier>){
        this.status=status;
        this.mensaje=mensaje;
        this.data=data;

    }

}