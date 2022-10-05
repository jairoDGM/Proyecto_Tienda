import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from '../modelos/Producto';
import { Rol } from '../modelos/Rol';
import { BackendService } from '../services/backend.service';
import { Cliente } from '../modelos/Cliente';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  listado = new Array<Producto>();
  listado2 = new Array<Rol>();
  dataSource = new MatTableDataSource(new Array<Producto>);
  dataSource2 = new MatTableDataSource(new Array<Cliente>);
  dataSource3 = new MatTableDataSource(new Array<Cliente>);
  displayedColumns =['codigo_producto', 'precio', 'nombre_producto', 'cantidad_bodega', 'descripcion_producto', 'imagen','eliminar']
  displayedColumns2 =['id_cliente', 'nombre']
  displayedColumns3 =['id_cliente', 'nombre','correo','tipo_usuario','eliminar']
  constructor(private router:Router,private backend: BackendService, private fb:FormBuilder, private share:ShareService) {
    this.formGroup =this.fb.group({
      precio:0,
      nombre_producto:'',
      cantidad_bodega:0,
      descripcion_producto:'',
      imagen:'',
      tipo_usuario:'',
      id_cliente:0
    })
   }

  ngOnInit(): void {
    this.backend.obtenerProducto().subscribe(x => {
      this.dataSource.data =x.data
    })

    this.backend.obtenerCliente().subscribe(x => {
      this.dataSource2.data =x.data
    })

    this.backend.obtenerClienteyRol().subscribe(x => {
      this.dataSource3.data =x.data
    })

    this.share.currentLogin.subscribe(x => {
      if(x == ""){
        this.router.navigateByUrl("/inicio");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  insertarProducto(){
    let producto = new Producto(
        this.formGroup.controls['precio'].value,
        this.formGroup.controls['nombre_producto'].value,
        this.formGroup.controls['cantidad_bodega'].value,
        this.formGroup.controls['descripcion_producto'].value,
        this.formGroup.controls['imagen'].value
    );
    this.backend.insertarProducto(producto).subscribe(x => {
      console.log("Respuesta : " + x);
      alert(x.mensaje)
    });
    this.backend.obtenerProducto().subscribe(x => {
      this.dataSource.data =x.data
    })
  }

  insertarRol(){
    let rol = new Rol(
      this.formGroup.controls['tipo_usuario'].value,
      this.formGroup.controls['id_cliente'].value
    );
  this.backend.insertarRol(rol).subscribe(x => {
    console.log("Respuesta : " + x);
    alert(x.mensaje)
  });
  this.backend.obtenerClienteyRol().subscribe( x => {
    this.dataSource3.data =x.data;
  })
  }

  eliminar(id_cliente:string){
    this.backend.deleteCliente(id_cliente).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerClienteyRol().subscribe( x => {
        this.dataSource3.data =x.data;
      })
     });
  }

  eliminar2(codigo_producto:string){
    this.backend.deleteProducto(codigo_producto).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerProducto().subscribe( x => {
        this.dataSource.data =x.data;
      })
     });
  }

  mover6(){
    localStorage.setItem("token", "")
    this.share.changeLogin("");

  }

}
