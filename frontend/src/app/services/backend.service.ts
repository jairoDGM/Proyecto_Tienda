import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../modelos/Cliente';
import { ClienteResponse } from '../modelos/ClienteResponse';

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
}
