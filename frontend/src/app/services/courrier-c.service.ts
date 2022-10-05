import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourrierCService {



  constructor(private http:HttpClient) {    
    console.log("servicio courrier funcionando")
   }
   
   //link de url ya terminada
   getConsulta(url_courrier:string):Observable<any>{
    return this.http.get(url_courrier);
   }
}
