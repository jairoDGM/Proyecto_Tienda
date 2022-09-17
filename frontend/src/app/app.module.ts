import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntregaTrackerComponent } from './entrega-tracker/entrega-tracker.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { PagoFormularioComponent } from './pago-formulario/pago-formulario.component';
import { ProductosCatalogoComponent } from './productos-catalogo/productos-catalogo.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoCompraComponent,
    DashboardComponent,
    EntregaTrackerComponent,
    InicioComponent,
    MainToolbarComponent,
    PagoFormularioComponent,
    ProductosCatalogoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
