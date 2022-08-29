import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from '../models/employee';
import { Observable } from 'rxjs';
import { API_REST } from './../url.constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API: string=API_REST;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<employee []> {
    return this.http.get<employee []>(
      `${this.API}/employees`);
  }

  getEmployeeById(id: number): Observable<employee> {
    return this.http.get<employee>(`${this.API}/employee/${id}`);
  }
}
