import { ResCourrier } from "./ResCourrier";

export class CourrierResponse{
    status:number;
    mensaje:string;
    data:Array<ResCourrier>;

    constructor(status:number, mensaje:string, data:Array<ResCourrier>){
        this.status=status,
        this.mensaje=mensaje,
        this.data=data
    }
}