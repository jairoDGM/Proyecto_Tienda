import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraCourrier } from '../modelos/CompraCourrier';
import { BackendService } from '../services/backend.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-entrega-tracker',
  templateUrl: './entrega-tracker.component.html',
  styleUrls: ['./entrega-tracker.component.scss']
})
export class EntregaTrackerComponent implements OnInit {
  numero_compra:number=0
  arrayCourrier : Array<CompraCourrier> = []
  constructor( private share: ShareService, private fb:FormBuilder, private backend: BackendService) { }
  formGroup: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.formGroup =this.fb.group({
      id_compra:0
    })


    /*this.share.getEstatus().subscribe(x => {
      console.log(x)
    })*/
  }

  consulta(){
    console.log(this.formGroup.controls['id_compra'].value)
    this.numero_compra = this.formGroup.controls['id_compra'].value
    this.backend.obtenerCourrier(this.formGroup.controls['id_compra'].value).subscribe((x) => {
      console.log(x.data)
      this.arrayCourrier=x.data;
      alert(x.mensaje)
      if(this.arrayCourrier.find(courrier => courrier.nombre_courrier ==='GALIEX') ){
        const url_apiCourrier='https://jsonplaceholder.typicode.com/users'
        this.share.getEstatus(url_apiCourrier).subscribe(x => {
          console.log(x)
        })
      }else if(this.arrayCourrier.find(courrier => courrier.nombre_courrier ==='Penelope')){
        const url_apiCourrier2='https://reqres.in/api/users/2'
        this.share.getEstatus(url_apiCourrier2).subscribe(x => {
          console.log(x)
        })
      }
    })
    
  }

}
