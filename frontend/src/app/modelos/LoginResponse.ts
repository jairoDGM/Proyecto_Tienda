export class LoginResponse{
    status:number;
    mensaje:string;
    key:string;

    constructor(status:number, mensaje:string, key:string){
        this.status=status,
        this.mensaje=mensaje,
        this.key=key
    }
}