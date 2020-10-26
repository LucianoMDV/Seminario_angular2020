import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';

import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { DulcineaHomeComponent } from './dulcinea-home/dulcinea-home.component';
import { DulcineaContactoComponent } from './dulcinea-contacto/dulcinea-contacto.component';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    CarritoComponent,
    DulcineaHomeComponent,
    DulcineaContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
