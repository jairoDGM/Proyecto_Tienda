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
  private lista: Array<CarritoC>;
  constructor() {
    this.lista=[];
   }

  get getsharingObservableCart(){
    return this.cartSource.asObservable();
  }

  set CurrentCart(currentCart: CarritoC){
    this.lista.push(currentCart)
    this.cartSource.next(currentCart)
  }

  get sharingObservable(){
    return this.currentLogin;
  }


  changeLogin(correo:string){
    this.loginSource.next(correo);
  }
}
