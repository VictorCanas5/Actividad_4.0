import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { RegistrarCitaComponent } from './pages/registrar-cita/registrar-cita.component';
import { AdminCitasComponent } from './pages/admin-citas/admin-citas.component';


@NgModule({
  declarations: [
    RegistrarCitaComponent,
    AdminCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ],
  exports:[
      RegistrarCitaComponent,
      AdminCitasComponent,
  ]
})
export class CitasModule { }
