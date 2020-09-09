import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { estudiante } from 'src/model/usuario.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudiantes';
  usuarios:any = [];

  constructor(private clienteService: ClienteService){
     this.clienteService.getAllEstudents(). subscribe(
      estudent => {
        this.usuarios = estudent;
        console.log(this.usuarios);
        console.log(estudent);
      }, error => console.error(error)
    )
  }
  
}
