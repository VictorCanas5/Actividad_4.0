import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { IndexModule } from '../index/index.module';

@NgModule({
  declarations: [
    Error404Component,
  ],
  imports: [
    CommonModule,
    IndexModule
  ],
  exports:[
    Error404Component
  ]
})
export class ErroresModule { }
