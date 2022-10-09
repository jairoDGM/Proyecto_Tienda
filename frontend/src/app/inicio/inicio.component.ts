import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../modelos/LoginRequest';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor(private router:Router, private backend:BackendService, private fb: FormBuilder, private share:ShareService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      correo:'',
      contrasena:''
    })
  }

  login(){
    let login = new LoginRequest(
      this.formGroup.controls['correo'].value,
      this.formGroup.controls['contrasena'].value,
    );
    this.backend.inicioSesion(login).subscribe(x => {
      console.log("Respuesta : " + x);
      alert(x.mensaje)
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('token',x.key);
        this.share.changeLogin(this.formGroup.controls['correo'].value)
        this.share.changeLogin1(this.formGroup.controls['correo'].value)
        this.router.navigateByUrl("/landing-page");
      }else{
        alert("Su navegador no soporta localStorage")
      }
    });
  }

  moverse(){
    this.router.navigateByUrl("/registro");
  }

  moverse2(){
    this.router.navigateByUrl("/listado");

  }

  

}
