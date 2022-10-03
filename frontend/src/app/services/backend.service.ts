import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modelos/Cliente';
import { ClienteResponse } from '../modelos/ClienteResponse';
import { ClienteResponseDel } from '../modelos/ClienteResponseDel';
import { LoginRequest } from '../modelos/LoginRequest';
import { LoginResponse } from '../modelos/LoginResponse';
import { Producto } from '../modelos/Producto';
import { ProductoResponse } from '../modelos/ProductoResponse';
import { Rol } from '../modelos/Rol';
import { RolResponse } from '../modelos/RolResponse';

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
}
