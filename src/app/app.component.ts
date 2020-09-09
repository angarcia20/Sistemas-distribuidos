import { Component } from '@angular/core';
import { estudiante } from 'src/model/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudiantes';
  usuarios: estudiante[];
}
