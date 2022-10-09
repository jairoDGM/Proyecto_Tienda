import { pagoformulario } from "./pagoFormulario";


export class pagoFormularioResponse{
    status:number;
    mensaje:string;
    data:Array<pagoformulario>;

    constructor(status:number, mensaje:string, data:Array<pagoformulario>){
        this.status=status,
        this.mensaje=mensaje,
        this.data=data
    }
}