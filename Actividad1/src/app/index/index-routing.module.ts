import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { IndexComponent } from './pages/index/index.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [

  {
    path:'',
    children:[
      {path:'index',component: IndexComponent},
      {path:'servicios', component:ServiciosComponent},
      {path: '**',redirectTo: 'index'},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
