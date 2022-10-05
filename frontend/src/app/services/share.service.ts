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
  private loginSource = new BehaviorSubject<String>("")
  private cartSource: BehaviorSubject<CarritoC> = new BehaviorSubject<CarritoC>({nombre_producto:'',precio:0,descripcion_producto:''})
  currentLogin = this.loginSource.asObservable();

  url_apiCourrier='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) {
    

   }

    getEstatus(): Observable<any>{
      return this.http.get(this.url_apiCourrier )
    }
  


  get sharingObservable(){
    return this.currentLogin;
  }


  changeLogin(correo:string){
    this.loginSource.next(correo);
  }
}
