import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAllEstudents(){
    return this.http.get('http://localhost:8080/estudiante');
  }
}
