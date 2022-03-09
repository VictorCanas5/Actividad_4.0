import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/pages/index/index.component';
import { RegisterComponent } from './logeo/pages/register/register.component';
import { LoginComponent } from './logeo/pages/login/login.component';
import { HeaderComponent } from './index/components/header/header.component';
import { FooterComponent } from './index/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
