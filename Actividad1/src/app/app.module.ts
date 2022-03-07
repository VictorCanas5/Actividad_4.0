import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Componentes/index/index.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { LoginComponent } from './Componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
