import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './index/pages/servicios/servicios.component';

//modulos
import { IndexModule } from './index/index.module';
import { ErroresModule } from './errores/errores.module';
import { LogeoModule } from './logeo/logeo.module';


@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ErroresModule,
    LogeoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
