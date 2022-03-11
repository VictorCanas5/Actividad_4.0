import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() 
  {
    //  this.grabar_localstorage();
      this.obtenerLS();
  }

public grabar_localstorage()
{
    let nombre:string="juan";

    let persona = {
      nombre: "Juan",
      edad: 18
    }
    //guardar en local storage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));

}

public obtenerLS()
{
  let nombre= localStorage.getItem("nombre");
  let persona= JSON.parse( localStorage.getItem("persona"));
  
  console.log(nombre);
  console.log(persona);

}

}
