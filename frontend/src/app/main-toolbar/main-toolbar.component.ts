import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  data$: Observable<String>;
  constructor(private route:Router, private share: ShareService, private backend:BackendService) {
    this.data$ = share.sharingObservable;
    
  }

  ngOnInit(): void {
    this.share.currentLogin.subscribe(x => {
      if(x == ""){
        this.route.navigateByUrl("/inicio");
      }
    })
  }

  mover1(){
    this.route.navigateByUrl("/landing-page")
  }

  mover2(){
    this.route.navigateByUrl("/productos-catalogo")
  }

  mover3(){
    this.route.navigateByUrl("/informacion")
  }
  
  mover4(){
    this.route.navigateByUrl("/entrega-tracker")
  }

  mover5(){
    this.route.navigateByUrl("/carrito-compra")
  }

  mover6(){
    this.backend.delCatalogoProducto().subscribe(x=>{
      console.log(x);
    });
    localStorage.setItem("token", "")
    this.share.changeLogin("");
  }

}
