import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-entrega-tracker',
  templateUrl: './entrega-tracker.component.html',
  styleUrls: ['./entrega-tracker.component.scss']
})
export class EntregaTrackerComponent implements OnInit {

  constructor( private share: ShareService, private fb:FormBuilder) { }
  formGroup: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.formGroup =this.fb.group({
      id_compra:0
    })
    this.share.getEstatus().subscribe(x => {
      console.log(x)
    })
  }

  consulta(){
    
  }

}
