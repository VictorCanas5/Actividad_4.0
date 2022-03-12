import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { RegistrarCitaComponent } from './pages/registrar-cita/registrar-cita.component';
import { AdminCitasComponent } from './pages/admin-citas/admin-citas.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

import { FullCalendarModule } from 'primeng/fullcalendar';

@NgModule({
  declarations: [
    RegistrarCitaComponent,
    AdminCitasComponent,
    CalendarioComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FullCalendarModule
  ],
  exports:[
      RegistrarCitaComponent,
      AdminCitasComponent,
      FullCalendarModule,
  ]
})
export class CitasModule { }
