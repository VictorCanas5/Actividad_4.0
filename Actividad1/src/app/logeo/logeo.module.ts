import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexModule } from '../index/index.module';
import { LogeoRoutingModule } from './logeo-routing.module';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    IndexModule,
   LogeoRoutingModule,
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
  ]
})
export class LogeoModule { }
