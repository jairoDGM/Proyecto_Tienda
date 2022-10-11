import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catalogo_carrito } from '../modelos/catalogo_carrito';
import { catalogo_carritoResponse } from '../modelos/catalogo_carritoResponse';
import { Cliente } from '../modelos/Cliente';
import { ClienteResponse } from '../modelos/ClienteResponse';
import { ClienteResponseDel } from '../modelos/ClienteResponseDel';
import { ClienteResResponse } from '../modelos/ClienteResResponse';
import { codigoCarritoResponse } from '../modelos/codigoCarritoResponse';
import { CompraRes } from '../modelos/CompraRes';
import { CompraResResponse } from '../modelos/CompraResResponse';
import { insertarCarrito } from '../modelos/insertarCarrito';
import { LoginRequest } from '../modelos/LoginRequest';
import { LoginResponse } from '../modelos/LoginResponse';
import { pagoformulario } from '../modelos/pagoFormulario';
import { pagoFormularioResponse } from '../modelos/pagoFormularioResponse';
import { Producto } from '../modelos/Producto';
import { ProductoResponse } from '../modelos/ProductoResponse';
import { ResCourrierResponse } from '../modelos/ResCourrierResponse';
import { Rol } from '../modelos/Rol';
import { RolResponse } from '../modelos/RolResponse';
import { userCarritoResponse } from '../modelos/userCarritoResponse';

const BE_API = environment.api_backend;
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  insertarCliente(cliente: Cliente){
    console.log(BE_API + '/registro_usuario')
    console.log(cliente)
    return this.httpClient.post<ClienteResponse>(BE_API + '/registro_usuario', cliente,httpOptions);
  }

  obtenerCliente(){
    return this.httpClient.get<ClienteResponse>(BE_API + '/registro_usuario', httpOptions);
  }

  obtenerClienteyRol(){
    return this.httpClient.get<ClienteResponse>(BE_API + '/registro_usuario_con_rol', httpOptions);
  }

  deleteCliente(id_cliente:string){
    return this.httpClient.delete<ClienteResponseDel>(BE_API + '/registro_usuario/'+ id_cliente);
  }

  deleteProducto(codigo_producto:string){
    return this.httpClient.delete<ProductoResponse>(BE_API + '/registro_producto/'+ codigo_producto);
    
  }

  insertarProducto(producto: Producto){
    console.log(BE_API + '/registro_producto')
    console.log(producto)
    return this.httpClient.post<ProductoResponse>(BE_API + '/registro_producto',producto,httpOptions);
  }

  obtenerProducto(){
    return this.httpClient.get<ProductoResponse>(BE_API + '/registro_producto', httpOptions);
  }

  insertarRol(rol: Rol){
    console.log(BE_API + '/registro_Rol')
    console.log(rol)
    return this.httpClient.post<RolResponse>(BE_API + '/registro_Rol', rol,httpOptions);
  }

  inicioSesion(login:LoginRequest){
    console.log(BE_API + '/login')
    console.log(login)
    return this.httpClient.post<LoginResponse>(BE_API + '/login',login, httpOptions);
  }

  inicioSesionAdmin(loginadmin:LoginRequest){
    console.log(BE_API + '/login_dashboard')
    console.log(loginadmin)
    return this.httpClient.post<LoginResponse>(BE_API + '/login_dashboard',loginadmin, httpOptions);
  }


  obtenerCourrier(id_courrier:string){
    return this.httpClient.get<ResCourrierResponse>(BE_API + '/consultaCompra/' + id_courrier, httpOptions);
  }

  insertarPagoFormulario1(pagoformulario: pagoformulario){
    console.log(BE_API + '/ingreso_pagoFormulario1')
    console.log(pagoformulario)
    return this.httpClient.post<pagoFormularioResponse>(BE_API + '/ingreso_pagoFormulario1', pagoformulario,httpOptions);
  }

  insertarPagoFormulario2(form: CompraRes){
    console.log(BE_API + '/ingreso_pagoFormulario2')
    console.log(form)
    return this.httpClient.post<CompraResResponse>(BE_API + '/ingreso_pagoFormulario2', form ,httpOptions);
  }

  obtieneIdCliente(correo:string){
    return this.httpClient.get<ClienteResResponse>(BE_API + '/obtiene_id_cliente/' + correo, httpOptions);
  }

  obtieneIdCompra(id_cliente:number){
    return this.httpClient.get<CompraResResponse>(BE_API + '/obtiene_id_compra/' + id_cliente, httpOptions);
  }

  verificarIdCompra(id_compra:number){
    return this.httpClient.get<pagoFormularioResponse>(BE_API + '/consultarIdCompra/' + id_compra, httpOptions);
  }

  clienteCarrito(correo:string){
    return this.httpClient.get<userCarritoResponse>(BE_API + '/consultarClienteCarrito/' + correo, httpOptions);
  }

  getProducto(id_cliente:number){
    return this.httpClient.get<codigoCarritoResponse>(BE_API + '/consultarCodigoProducto/' + id_cliente, httpOptions);
  }

  traerProductos(codigo_producto:number){
    return this.httpClient.get<codigoCarritoResponse>(BE_API + '/productosTabla/' + codigo_producto, httpOptions);
  }

  insertarCarrito(catalogo_cart: catalogo_carrito){
    console.log(BE_API + '/carrito_insert')
    console.log(catalogo_cart)
    return this.httpClient.post<catalogo_carritoResponse>(BE_API + '/carrito_insert', catalogo_cart ,httpOptions);
  }

  obtenerPart(){
    return this.httpClient.get<catalogo_carritoResponse>(BE_API + '/carrito_insert', httpOptions);
  }

  delCatalogoProducto(){
    return this.httpClient.delete<catalogo_carritoResponse>(BE_API + '/delete_catalogoProducto', httpOptions);
  }

  obtenerTotal(){
    return this.httpClient.get<catalogo_carritoResponse>(BE_API + '/precio_total', httpOptions)
  }
}
