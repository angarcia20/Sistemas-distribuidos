import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudiantes';
  estudiantes:any = [];

  constructor(private clienteService: ClienteService){
    this.estudiantes = this.clienteService.getAllEstudents(). subscribe(
      estudent => {
        this.estudiantes.push(estudent);
      }, error => console.error(error)
    )
  }
  
}
