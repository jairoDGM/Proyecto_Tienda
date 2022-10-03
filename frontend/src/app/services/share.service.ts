import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private loginSource = new BehaviorSubject<String>("")
  currentLogin = this.loginSource.asObservable();
  constructor() { }

  changeLogin(correo:string){
    this.loginSource.next(correo);
  }
}
