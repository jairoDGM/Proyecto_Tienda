import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  constructor(private route:Router, private share: ShareService) { }

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
    localStorage.setItem("token", "")
    this.share.changeLogin("");

  }

}
