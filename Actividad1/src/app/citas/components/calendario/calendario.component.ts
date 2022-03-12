import { Component, OnInit } from '@angular/core';


//plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionGridPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public events: any[] = [];
  public options: any;

  constructor() { }

  ngOnInit(): void 
  {

    this.options= {
      plugins: [dayGridPlugin, timeGridPlugin, interactionGridPlugin],
      defaultDate: new Date(),
      header:{
        lef: 'prev,next',
        center: 'title',
        right: 'dayGridMonth',
      }
    }

    this.events=[
      {
        title : "Evento 1",
        start: new Date(),
        descripcion: "Evento 1"
      },
      {
        title : "Evento 2",
        start: new Date(new Date().getTime()+ 86400000),
        descripcion: "Evento 2"
      },
      {
        title : "Evento 3",
        start:  new Date(new Date().getTime()+ (86400000*2)),
        end:  new Date(new Date().getTime()+ (86400000*3)) ,
        descripcion: "Evento 3"
      },
      
    ]
  }

}
