import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


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


   getPost(url_courrier:string){
    return from(
      fetch(url_courrier, // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
        }
      ));
   }

}
