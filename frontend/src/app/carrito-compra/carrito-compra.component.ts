import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  form(){
    this.route.navigateByUrl("/pago-formulario");
  }

  prod(){
    this.route.navigateByUrl("/productos-catalogo");
  }

}
