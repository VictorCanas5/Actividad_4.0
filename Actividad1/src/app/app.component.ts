import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = 'Actividad1';

  constructor(private localS: LocalStorageService)
  {

  }


  getLocalS(){
    return this.localS.grabar_localstorage();
  }
  
}
