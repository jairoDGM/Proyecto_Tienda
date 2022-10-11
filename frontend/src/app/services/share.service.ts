import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';



export interface CarritoC{
  nombre_producto:string;
  precio: number;
  descripcion_producto:string;
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private loginSource = new BehaviorSubject<String>("");
  private id = new BehaviorSubject<string>("");
  private currentTotal = new BehaviorSubject<number>(0);

  currentLogin = this.loginSource.asObservable();
  currentLogin2 = this.id.asObservable();
  currentTotal1 = this.currentTotal.asObservable();



  constructor(private http:HttpClient) {
    

   }

  getEstatus(url:string){
      return this.http.get(url)
    }

  


  get sharingObservable(){
    return this.currentLogin;
  }

  getsharingObservable(){
    return this.currentLogin;
  }

  getsharingObservable2(){
    return this.currentLogin2;
  }


  changeLogin(correo:string){
    this.loginSource.next(correo);
  }

  changeLogin1(correo:string){
    this.id.next(correo);
  }

  getsharingObservable3(){
    return this.currentTotal1;
  }

  addTotal(price:number){
    this.currentTotal.next(price);
  }
}
