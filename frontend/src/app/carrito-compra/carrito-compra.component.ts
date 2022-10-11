import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catalogo_carrito } from '../modelos/catalogo_carrito';
import { ClienteRes } from '../modelos/ClienteRes';
import { codigoCarrito } from '../modelos/codigoCarrito';
import { codigoCarritoResponse } from '../modelos/codigoCarritoResponse';
import { userCarrito } from '../modelos/userCarrito';
import { userCarritoResponse } from '../modelos/userCarritoResponse';
import { BackendService } from '../services/backend.service';
import { CarritoC, ShareService } from '../services/share.service';

export interface Transaction {
  nombre_producto: string;
  precio: number;
  descripcion_producto:string;
}

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {
  dataSource = new MatTableDataSource(new Array<catalogo_carrito>);
  dataSource2 = new MatTableDataSource(new Array<catalogo_carrito>);
  displayedColumns = ['codigo_producto', 'nombre_producto','precio'];
  displayedColumns2 = ['precio_total', 'pagar'];

  correo_actual="";

  arrayCliente: Array<ClienteRes>=[];
  arrayProducto: Array<codigoCarrito>=[]; //talvez no se use estee
  listado = new Array<userCarrito>();
  listado_producto = new Array<codigoCarrito>();


  constructor(private route: Router, private share:ShareService, private backend:BackendService) {
    this.share.getsharingObservable2().subscribe(x =>{
      console.log("este es el correo para carrito: " + x)
      this.correo_actual = x
    });

    this.backend.obtenerPart().subscribe(x => {
      this.dataSource.data=x.data
    });

    this.backend.obtenerTotal().subscribe(x => {
      this.dataSource2.data=x.data;
    })

    
  }

  ngOnInit(): void {
    //sacamos el id del usuario actual


    
  }

  eliminar2(){
    
  }

  form(precio:number){
    this.share.addTotal(precio)
    this.route.navigateByUrl("/pago-formulario");
  }

  prod(){
    this.route.navigateByUrl("/productos-catalogo");
  }








}
