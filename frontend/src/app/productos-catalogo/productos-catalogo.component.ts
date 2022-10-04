import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CourrierCService } from '../services/courrier-c.service';

@Component({
  selector: 'app-productos-catalogo',
  templateUrl: './productos-catalogo.component.html',
  styleUrls: ['./productos-catalogo.component.scss']
})
export class ProductosCatalogoComponent implements OnInit {
  constructor(private router:Router,private courrierC:CourrierCService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
