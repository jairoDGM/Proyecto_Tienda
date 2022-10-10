import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../modelos/LoginRequest';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor(private router:Router, private backend:BackendService, private fb: FormBuilder, private share:ShareService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      correo:'',
      contrasena:''
    })
  }

  login(){
    let loginadmin = new LoginRequest(
      this.formGroup.controls['correo'].value,
      this.formGroup.controls['contrasena'].value,
    );
    this.backend.inicioSesionAdmin(loginadmin).subscribe(x => {
      console.log("Respuesta : " + x);
      alert(x.mensaje)
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('token',x.key);
        this.share.changeLogin(this.formGroup.controls['correo'].value)
        this.router.navigateByUrl("/dashboard");
      }else{
        alert("Su navegador no soporta localStorage")
      }
    });
  }

  moverse(){
    this.router.navigateByUrl("/landing-page");
  }

}
