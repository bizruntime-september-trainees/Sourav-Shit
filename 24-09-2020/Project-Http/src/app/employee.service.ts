import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {employees} from './employe'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="/assets/Data/Employee.json"
  constructor(private http:HttpClient) { }
  getEmployee():Observable<employees[]>
  {
    return this.http.get<employees[]>(this._url)
  }
}
