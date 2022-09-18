import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntregaTrackerComponent } from './entrega-tracker/entrega-tracker.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { PagoFormularioComponent } from './pago-formulario/pago-formulario.component';
import { ProductosCatalogoComponent } from './productos-catalogo/productos-catalogo.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"registro",component:RegistroComponent},
  {path:"productos-catalogo",component:ProductosCatalogoComponent},
  {path:"pago-formulario",component:PagoFormularioComponent},
  {path:"main-toolbar",component:MainToolbarComponent},
  {path:"entrega-tracker",component:EntregaTrackerComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"carrito-compra",component:CarritoCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
