import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

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

   getPostCourrier(url_courrier:string):Observable<any>{
    return this.http.post(url_courrier, httpOptions);
   }
}
