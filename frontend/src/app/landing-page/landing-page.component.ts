import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private route:Router, share:ShareService) { }

  ngOnInit(): void {
  }

  mover1(){
    this.route.navigateByUrl("/carrito-compra");
  }
  mover2(){
    this.route.navigateByUrl("/dashboard");
  }
  mover3(){
    this.route.navigateByUrl("/entrega-tracker");
  }
  mover4(){
    this.route.navigateByUrl("/inicio");
  }
  mover5(){
    this.route.navigateByUrl("/main-toolbar");
  }
  mover6(){
    this.route.navigateByUrl("/pago-formulario");
  }
  mover7(){
    this.route.navigateByUrl("/productos-catalogo");
  }
  mover8(){
    this.route.navigateByUrl("/registro");
  }
}
