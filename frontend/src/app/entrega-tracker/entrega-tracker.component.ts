import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraCourrier } from '../modelos/CompraCourrier';
import { SolicitudCourrier } from '../modelos/SolicitudCourrier';
import { SolicitudCourrierResponse } from '../modelos/SolicitudCourrierResponse';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-entrega-tracker',
  templateUrl: './entrega-tracker.component.html',
  styleUrls: ['./entrega-tracker.component.scss']
})
export class EntregaTrackerComponent implements OnInit {
  //Declaracion de variables y arrays
  numero_compra:number=0
  arrayCourrier : Array<CompraCourrier> = []

  arrayConsulta:any=[]

  constructor( private share: ShareService, private fb:FormBuilder, private backend: BackendService) { }
  formGroup: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.formGroup =this.fb.group({
      id_compra:0
    })
  }



  consulta(){
    //DECLARAMOS ID COMPRA EN UNA VARIABLE
    this.arrayConsulta=[]
    this.numero_compra = this.formGroup.controls['id_compra'].value
    //SOLICITUD DE COURRIER A BASE DE DATOS Y NOS ENTREGA EL NOMBRE DEL COURRIER
    this.backend.obtenerCourrier(this.formGroup.controls['id_compra'].value).subscribe(x => {
      console.log(x.data)
      //INGRESAMOS EL COURRIER A UN ARRAY TIPO COMPRACOURRIER
      alert(x.mensaje)
      this.arrayCourrier=x.data;
      console.log(this.arrayCourrier)
//Vemos si hay un id_compra 
//-----------------------------------------------------------------------------------------------------------------------------------------------------
      if(this.arrayCourrier.length > 0){
        //Verificamos el courrier del numero de orden y dependiendo el COURRIER se manda a solicitar los datos a su respectivo link
        for(let item of this.arrayCourrier){
          const itemMinuscula = (item.nombre_courrier).toLowerCase()
          console.log('El item es:'+ itemMinuscula)
          //IF PARA VER SI ES GALIEX
//-----------------------------------------------------------------------------------------------------------------------------------------------------
          if(itemMinuscula === 'galiex'){
            //CONSTRUIMOS LINK Y MANDAMOS LA SOLICITUD
            const url_apiGaliex1='../../assets/Pruebas/status.json'
            //const url_apiGaliex1='https://reqres.in/api/users/2' + "/status?" + "orden=" + this.numero_compra +"&tienda=CODOTECH"+"&formato=JSON" 
            this.share.getEstatus(url_apiGaliex1).subscribe(x => {
              console.log(x)
              this.arrayConsulta=x
            })
//-----------------------------------------------------------------------------------------------------------------------------------------------------
          //IF PARA VER SI ES Y&J EXPRESS
          }else if(itemMinuscula === 'y&j express'){
            //CONSTRUIMOS LINK Y MANDAMOS LA SOLICITUD
            const url_apiYJ1='../../assets/Pruebas/status2.json'
            //const url_apiYJ1='URL COURRIER' + "/status?" + "orden=" + this.numero_compra +"&tienda=CODOTECH"+"&formato=JSON" 
            this.share.getEstatus(url_apiYJ1).subscribe(x => {
              console.log("Respuesta:"+ x)
              this.arrayConsulta=x
              //console.log(this.arrayConsulta.orden)
            })
          //IF PARA VER SI ES FORZA
//-----------------------------------------------------------------------------------------------------------------------------------------------------
          }else if(itemMinuscula === 'forzag'){
            //CONSTRUIMOS LINK Y MANDAMOS LA SOLICITUD
            //const url_apiFORZA='../../assets/Pruebas/status3.json'
            const url_apiFORZA1='http://forzagcourrier.herokuapp.com' + "/status.php?" + "orden=" + this.numero_compra +"&tienda=CODOTECH"+"&formato=JSON" 
            this.share.getEstatus(url_apiFORZA1).subscribe(x => {
              console.log(x)
              this.arrayConsulta=x
            })
//-----------------------------------------------------------------------------------------------------------------------------------------------------
          //IF PARA VER SI ES RGX
          }else if(itemMinuscula === 'rgx'){
            //CONSTRUIMOS LINK Y MANDAMOS LA SOLICITUD
            //const url_apiRGX='../../assets/Pruebas/status4.json'
            const url_apiRGX1='http://rutasguatemaltecasexpress.com' + "/status.php?" + "orden=" + this.numero_compra +"&tienda=CODOTECH"+"&formato=JSON" 
            this.share.getEstatus(url_apiRGX1).subscribe(x => {
              console.log(x)
              this.arrayConsulta=x
            })
          }
        }
    //FIN DEL FOR
//-----------------------------------------------------------------------------------------------------------------------------------------------------
      }else{
        alert('NO SE ENCONTRO EL ID COMPRA REGISTRADO')
      }
    })
  //FIN DE LA FUNCION
  }

}
