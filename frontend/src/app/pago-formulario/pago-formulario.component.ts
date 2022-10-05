import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourrierCService } from '../services/courrier-c.service';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pago-formulario',
  templateUrl: './pago-formulario.component.html',
  styleUrls: ['./pago-formulario.component.scss']
})
export class PagoFormularioComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  correo$: Observable<String>;
  respuestas_courrier: any = {};

  constructor( private router:Router,private courrierC: CourrierCService, private fb:FormBuilder, private share:ShareService) { 
    this.correo$ = share.sharingObservable; //obtencion de correo para busqueda en DB
    this.formGroup =this.fb.group({
      destino:'',
      //formato:'', este se asigna en el modelo
      //orden:'', este se tiene que pedir en sql
      destinatario:'',
      direccion:'',
      //tienda:'',  este se asigna en modelo
      url:''
    })  
  }

  ngOnInit(): void {
  }

  verificar_tarjeta(){}


  
  cotizar_courrier(){
    //obtencion valores del html
    var postal = this.formGroup.controls['destino'].value;
    var url = this.formGroup.controls['url'].value;
    //obtencion valores del html


    //construccion URL
    //var url_courrier = url+ "destino="+postal + "&formato=json";
    //construccion URL


    //obtencion de json del web service
    this.courrierC.getConsulta(url).subscribe(resp =>{
      console.log(resp) //json
      this.respuestas_courrier = resp.data;
     /*if(this.respuestas_courrier.cobertura == false){
      this.respuestas_courrier.costo == 0;
     }*/
    })

    //fin obtencion de json del web service





    
  }

}
