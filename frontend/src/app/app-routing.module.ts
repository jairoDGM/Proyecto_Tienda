import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntregaTrackerComponent } from './entrega-tracker/entrega-tracker.component';
import { InformacionComponent } from './informacion/informacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListadoComponent } from './listado/listado.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { PagoFormularioComponent } from './pago-formulario/pago-formulario.component';
import { ProductosCatalogoComponent } from './productos-catalogo/productos-catalogo.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"listado",component:ListadoComponent},
  {path:"registro",component:RegistroComponent},
  {path:"productos-catalogo",component:ProductosCatalogoComponent},
  {path:"pago-formulario",component:PagoFormularioComponent},
  {path:"main-toolbar",component:MainToolbarComponent},
  {path:"entrega-tracker",component:EntregaTrackerComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"carrito-compra",component:CarritoCompraComponent},
  {path:"landing-page",component:LandingPageComponent},
  {path:"informacion",component:InformacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
