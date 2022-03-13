import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { RegistrarCitaComponent } from './pages/registrar-cita/registrar-cita.component';
import { AdminCitasComponent } from './pages/admin-citas/admin-citas.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

//cosas de fechas
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullCalendarModule } from 'primeng/fullcalendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
    NgxMatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FullCalendarModule,
    
    MatDatepickerModule,
    MatNativeDateModule,
    //no poner nada despues de estas dos
  ],
  exports:[
      RegistrarCitaComponent,
      AdminCitasComponent,
      FullCalendarModule,
  ]
})
export class CitasModule { }
