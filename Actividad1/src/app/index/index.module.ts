import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    
  ]
})
export class IndexModule { }
