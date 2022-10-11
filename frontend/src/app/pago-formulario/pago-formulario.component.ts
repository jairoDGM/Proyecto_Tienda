import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourrierCService } from '../services/courrier-c.service';
import { ShareService } from '../services/share.service';
import { ignoreElements, Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { pagoformulario } from '../modelos/pagoFormulario';
import { TarjetaService } from '../services/tarjeta.service';
import { Cliente } from '../modelos/Cliente';
import { ClienteRes } from '../modelos/ClienteRes';
import { CompraRes } from '../modelos/CompraRes';
import { CompraRes2 } from '../modelos/ComprasRes2';


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
  total_pagar=0;//me lo envian, faltaa sacarlo
  destinatario="";//
  total=0;
  correo_actual="";
  listado = new Array<pagoformulario>();


  //Arrays Declarados y variables 
  arrayCliente: Array<ClienteRes>=[];
  arrayCompra: Array<CompraRes> = [];
  arrayCompras: Array<pagoformulario> = [];
  id_compra_ale = 0;

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

    this.share.getsharingObservable3().subscribe(x =>{
      console.log(x)
      this.total_pagar = x;
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
    const url_tarjeta = url + "tarjeta="+tarjeta+"&nombre="+this.nombre+"&fecha_venc="+fecha_venc+"&num_seguridad="+num_seguridad+"&monto="+this.total_pagar+"&tienda=CODOTECH&formato=JSON";
    //construccion url

    //obtencion de json del webservice
    this.courrierC.getConsulta(url_tarjeta).subscribe(resp =>{
      console.log(url_tarjeta);
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
    var url_courrier = url+ '/consulta.php?' + "destino="+postal + "&formato=JSON";
    //construccion URL
    
    
    //obtencion de json del web service
    var prueba="";
    this.courrierC.getConsulta2(url_courrier).subscribe(resp =>{
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
    const dest = this.formGroup.controls['destinatario'].value;
    
    //consultas DB para id_cliente
    this.backend.obtieneIdCliente(this.correo_actual).subscribe(resp =>{
      console.log(resp.data);
      this.arrayCliente = resp.data;
      console.log(this.arrayCliente)
    

    for(let actualID of this.arrayCliente){
      console.log('Id Actual prueba 2:' + actualID.id_cliente)
      //insertar en la tabla compras_cliente

        this.id_compra_ale = Math.floor(Math.random() * 100);
        this.backend.verificarIdCompra(this.id_compra_ale).subscribe(x => {
          this.arrayCompras = x.data;
          if(this.arrayCompras.length == 0){
            let formulario = new pagoformulario(
              this.nombre_courrier,
              this.compania_tarjeta,
              this.id_compra = this.id_compra_ale,
              this.total_pagar
            );
            this.backend.insertarPagoFormulario1(formulario).subscribe(resp =>{
              console.log(resp.data);
              alert(resp.mensaje);
              alert("su numero de compra es: " + this.id_compra_ale);
            });

            let form = new CompraRes(
              actualID.id_cliente,
              this.id_compra_ale
            )

            this.backend.insertarPagoFormulario2(form).subscribe(resp =>{
              console.log(resp.data);
            });

            const url_courrier = url + "/envio.php?" + "orden="+ this.id_compra_ale +"&destinatario="+ dest +"&destino="+postal+"&direccion="+this.direccion+"&tienda=CODOTECH";
              this.courrierC.getPost(url_courrier).subscribe(x=>{
                console.log(url_courrier);
              });


            //aca salgoo del buclee
          }else{
            this.id_compra_ale = Math.floor(Math.random() * 100);
            let formulario = new pagoformulario(
              this.nombre_courrier,
              this.compania_tarjeta,
              this.id_compra = this.id_compra_ale,
              this.total_pagar
            );
            this.backend.insertarPagoFormulario1(formulario).subscribe(resp =>{
              console.log(resp.data);
              alert(resp.mensaje);

              let form = new CompraRes(
                actualID.id_cliente,
                this.id_compra_ale
              )

              this.backend.insertarPagoFormulario2(form).subscribe(resp =>{
                console.log(resp.data);
              });

              const url_courrier = url + "/envio.php?" + "orden="+ this.id_compra_ale +"&destinatario="+ dest +"&destino="+postal+"&direccion="+this.direccion+"&tienda=CODOTECH";
              this.courrierC.getPost(url_courrier).subscribe(x=>{
                console.log(url_courrier);
              });

              alert("su numero de compra es: " + this.id_compra_ale);
            });

          
          }
        })

      


      
    }
  });
    


/*this.backend.insertarPagoFormulario2(actualID.id_cliente).subscribe(resp =>{
        console.log(resp);
        alert(resp);
        //consultas DB para id_compra

      }); */
  

    /*this.courrierC.getConsulta(url_courrier).subscribe(x=>{
      console.log(url_courrier);
    });*/
    //pedido a courriers
    
    /*var url_courrier = url + "orden="+ 'aqui va id_compra'+"&destinatario="+ dest +"&destino="+postal+"&direccion="+this.direccion;
          //pedido a courriers
          this.courrierC.getConsulta(url_courrier).subscribe(x=>{
            console.log(url_courrier);
          });
        
   
    */
          //borra datos de compra cuando ejecuta pago
          this.backend.delCatalogoProducto().subscribe(x=>{
            console.log(x);
          });
    
  }
  
}
