import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getemployees(){ return[
    {
      name:"Sourav",
      age:23,
      city:"bankura"
    },
    {
      name:"Bibek",
      age:25,
      city:"bangalore"
    },{
      name:"Sudip",
      age:24,
      city:"Kolkata"
    }]
  };

  constructor() { }
}
