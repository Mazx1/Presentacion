import { EventEmitter, Injectable } from "@angular/core";
import { loggingService } from "./loggingService.service";
import { Persona } from "./persona.model";
@Injectable()
export class PersonasService{
    personas : Persona[]=
    [
      new Persona ("juan", "perez"),
      new Persona ("laura", "juaez"),
      new Persona ("manuel", "zarate")
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: loggingService){}

    agregarPersona(persona: Persona){
        this.personas.push(persona);
        this.loggingService.enviaMensajeAConsola("persona agregada: "+ persona.nombre);
       }
}