import { SolicitudCourrier } from "./SolicitudCourrier";


export class SolicitudCourrierResponse{

    orden:Array<SolicitudCourrier>;

    constructor(orden:Array<SolicitudCourrier>){
        this.orden=orden
    }

}