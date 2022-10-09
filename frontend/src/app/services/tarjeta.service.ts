import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http:HttpClient) { 
    console.log("servicio http de tarjeta corriendo");
  }

  //link de url ya terminada
  getConsulta(url_tarjeta:string):Observable<any>{
    return this.http.get(url_tarjeta); 
  }
}
