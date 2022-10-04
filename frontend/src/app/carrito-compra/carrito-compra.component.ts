import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarritoC, ShareService } from '../services/share.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {
  data$:Observable<CarritoC>
  constructor(private route: Router, private share:ShareService) {
    this.data$ =share.getsharingObservableCart;
  }

  ngOnInit(): void {
    
  }

  form(){
    this.route.navigateByUrl("/pago-formulario");
  }

  prod(){
    this.route.navigateByUrl("/productos-catalogo");
  }

}
