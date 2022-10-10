import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../modelos/Cliente';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  listado = new Array<Cliente>();

  constructor( private router:Router,private backend: BackendService, private fb:FormBuilder) { 
    this.formGroup =this.fb.group({
      nombre:'',
      fecha:'',
      contrasena:'',
      correo:''
    })
  
  }

  ngOnInit(): void {
  }

  insertarCliente(){
    let cliente = new Cliente(
        this.formGroup.controls['nombre'].value,
        this.formGroup.controls['fecha'].value,
        this.formGroup.controls['contrasena'].value,
        this.formGroup.controls['correo'].value,
   
    );
    //insert a tabla cliente
    this.backend.insertarCliente(cliente).subscribe(x => {
      console.log("Respuesta : " + x);
      alert(x.mensaje)
    });

  }









}
