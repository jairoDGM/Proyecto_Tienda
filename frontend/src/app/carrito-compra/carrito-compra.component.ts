import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarritoC, ShareService } from '../services/share.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {


  @Input() nombre_producto: string ="";
  @Input() precio:number=0;
  @Input() descripcion_producto:string="";

  constructor(private route: Router, private share:ShareService) {
    
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
