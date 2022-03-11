import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCitaComponent } from './pages/registrar-cita/registrar-cita.component';
import { AdminCitasComponent } from './pages/admin-citas/admin-citas.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'registrarCita',component: RegistrarCitaComponent},
      {path:'verCitas', component:AdminCitasComponent},
      {path: '**',redirectTo: 'registrarCita'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
