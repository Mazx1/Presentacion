import { Component, EventEmitter, Output } from '@angular/core';
import { loggingService } from '../loggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personasService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  
  nombreInput: string="";
  apellidoInput : string="";

  constructor(private loggingService: loggingService,
              private personasService:PersonasService) {
                this.personasService.saludar.subscribe(
                  (indice: number)=> alert("El indice es:" + indice)
                );
              }


  ngOnInit(){}

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona1);
    //this.loggingService.enviaMensajeAConsola("enviar personA"+ persona1)
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
