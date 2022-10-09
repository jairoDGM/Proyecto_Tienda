import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourrierCService } from '../services/courrier-c.service';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { pagoformulario } from '../modelos/pagoFormulario';
import { TarjetaService } from '../services/tarjeta.service';


@Component({
  selector: 'app-pago-formulario',
  templateUrl: './pago-formulario.component.html',
  styleUrls: ['./pago-formulario.component.scss']
})
export class PagoFormularioComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  correo$: Observable<String>;
  respuestas_courrier: any = {};
  respuestas_tarjeta: any = {};
  pagoformulario: Array<pagoformulario>=[]
  //variables para modelo
  nombre_courrier="";//
  id_cliente=0;
  compania_tarjeta="";//
  id_compra=0;
  //variables para modelo

  direccion="";//
  nombre="";//
  estado_tarjeta="";//
  numero_autorizacion=0;//
  monto=0;//me lo envian, faltaa sacarlo
  destinatario="";//
  total=0;
  correo_actual="";
  listado = new Array<pagoformulario>();

  constructor(private router:Router,private tarjetaservice:TarjetaService ,private courrierC: CourrierCService, private fb:FormBuilder, private share:ShareService, private backend:BackendService) { 
    this.correo$ = share.sharingObservable; //obtencion de correo para busqueda en DB
    this.share.getsharingObservable2().subscribe(x =>{
      console.log(x)
      this.correo_actual = x
    });
    this.formGroup =this.fb.group({
      nombre:'',
      tarjeta:'',
      date_venc:'',
      codigo:'',
      url_tarjeta:'',
      destino:'',
      url_courrier:'',
      destinatario:'',
      direccion:'',
    })  
  }

  ngOnInit(): void {
  }

  pagar_tarjeta(){
    //obtencion valores del html
    var tarjeta = this.formGroup.controls['tarjeta'].value;
    this.nombre = this.formGroup.controls['nombre'].value;
    var fecha_venc = this.formGroup.controls['date_venc'].value;
    var num_seguridad = this.formGroup.controls['codigo'].value;
    var url = this.formGroup.controls['url_tarjeta'].value;
    //obtencion valores del html

     //construccion url
    //var url_tarjeta = url + "tarjeta="+tarjeta+"&nombre="+this.nombre+"&fecha_venc="+fecha_venc+"&num_seguridad"+num_seguridad+"&monto="+this.monto+"&tienda=codotech&formato=JSON";
    //construccion url

    //obtencion de json del webservice
    this.courrierC.getConsulta(url).subscribe(resp =>{
      console.log(resp);
      this.respuestas_tarjeta=resp.autorizacion;
      this.compania_tarjeta=this.respuestas_tarjeta.emisor

      this.numero_autorizacion=this.respuestas_tarjeta.numero;
      if(this.respuestas_tarjeta.status == "1"){
        this.respuestas_tarjeta.status="APROBADO";
      }else if(this.respuestas_tarjeta.status == "0"){
        this.respuestas_tarjeta.status="DENEGADO";
      }
    })
    //obtencion de json del webservice

  }


  
  cotizar_courrier(){
    //obtencion valores del html
    var postal = this.formGroup.controls['destino'].value;
    var url = this.formGroup.controls['url_courrier'].value;
    //obtencion valores del html
    
    
    //construccion URL
    var url_courrier = url+ "destino="+postal + "&formato=JSON";
    //construccion URL
    
    
    //obtencion de json del web service
    var prueba="";
    this.courrierC.getConsulta(url_courrier).subscribe(resp =>{
      console.log(resp) //json
      this.respuestas_courrier = resp.consultaprecio;
      prueba=this.respuestas_courrier.courrier;
      console.log("aca esta prueba" + prueba);
      if(this.respuestas_courrier.cobertura == 'false'){
        this.respuestas_courrier.costo == 0;
        this.respuestas_courrier.cobertura="no hay cobertura";
      }else{
        this.respuestas_courrier.cobertura="si hay cobertura";
      }
      //creacion modelo
      this.nombre_courrier=this.respuestas_courrier.courrier;
      //Creacion modelo
    })
    //obtencion de json del web service 
    
  
    this.direccion=this.formGroup.controls['direccion'].value;
    this.destinatario=this.formGroup.controls['destinatario'].value;
  }


  proceder(){
    var url = this.formGroup.controls['url_courrier'].value;
    var postal = this.formGroup.controls['destino'].value;
    
    //consultas DB para id_cliente
    this.backend.obtieneIdCliente(this.correo_actual).subscribe(resp =>{
      console.log(resp);
      this.id_cliente = parseInt(resp.toString());
    });
    //consultas DB para id_cliente
    
    
    //inserccion en la tabla compras_cliente
    this.backend.insertarPagoFormulario2(this.id_cliente).subscribe(resp =>{
      console.log(resp);
      alert(resp);
    });
    //inserccion en la tabla compras_cliente

    //consultas DB para id_compra
    this.backend.obtieneIdCompra(this.id_cliente).subscribe(resp =>{
      console.log(resp);
      this.id_compra = parseInt(resp.toString());
    });
    //consultas DB para id_compra

    //construccion URL
    var url_courrier = url+ "orden="+this.id_compra+"&destinatario="+this.destinatario +"&destino="+postal+"&direccion="+this.direccion;
    //construccion URL

    
    //pedido a courriers
    this.courrierC.getConsulta(url_courrier).subscribe(x=>{
      console.log(url_courrier);
    });
    //pedido a courriers
    
    let formulario = new pagoformulario(
      this.nombre_courrier,
      this.compania_tarjeta,
      this.id_compra,
      this.monto
    );

    //inserccion en la tabla compra
    this.backend.insertarPagoFormulario1(formulario).subscribe(resp =>{
      console.log(resp);
      alert(resp);
    });
    //inserccion en la tabla compra

    alert("su numero de compra es: " + this.id_compra);
    
    
  }
  
}
