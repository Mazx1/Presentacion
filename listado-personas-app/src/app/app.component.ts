import { Component, OnInit } from '@angular/core';
import { loggingService } from './loggingService.service';
import { Persona} from './persona.model';
import { PersonasService } from './personasService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listado de personas';
  personas : Persona[] =[];

  constructor(private loggingService: loggingService,
              private personasService: PersonasService ){}
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  personaAgregada(persona: Persona){
  //this.personas.push(persona);
  //this.loggingService.enviaMensajeAConsola("egragamos a persona");
    this.personasService.agregarPersona(persona);
 }


}
