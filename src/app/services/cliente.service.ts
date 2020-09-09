import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { estudiante } from 'src/model/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAllEstudents():Observable<estudiante>{
    return this.http.get<estudiante>('http://localhost:8080/user');
  }
}
