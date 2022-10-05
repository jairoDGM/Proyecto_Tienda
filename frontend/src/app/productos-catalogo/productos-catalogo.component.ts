import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CarritoCompraComponent } from '../carrito-compra/carrito-compra.component';
import { Carrito } from '../modelos/Carrito';
import { Producto } from '../modelos/Producto';
import { BackendService } from '../services/backend.service';
import {  ShareService } from '../services/share.service';


@Component({
  selector: 'app-productos-catalogo',
  templateUrl: './productos-catalogo.component.html',
  styleUrls: ['./productos-catalogo.component.scss']
})
export class ProductosCatalogoComponent implements OnInit {
  nombre_producto: string='';
  precio: number=0;
  descripcion_producto: string ='';
  arrayCarrito: Array<Carrito>=[]

  dataSource = new MatTableDataSource(new Array<Producto>);
  displayedColumns =[ 'nombre_producto','precio', 'descripcion_producto', 'imagen','eliminar']
  constructor(private router:Router,private fb:FormBuilder, private backend: BackendService, private share:ShareService) { 
    
  }

  ngOnInit(): void {
    this.backend.obtenerProducto().subscribe(x => {
      this.dataSource.data =x.data
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  enviarCarrito(nombre_producto:string,precio:number,descripcion_producto:string){ 
    alert('Se Ingreso el Producto al Carrito')
    this.arrayCarrito.push(new Carrito(nombre_producto,precio,descripcion_producto))
      
    
  }

}
