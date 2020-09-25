import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.scss']
})
export class EmployeeNameComponent implements OnInit {
public employees=[];
 
  constructor(private _employeeService: EmployeeService ) {};

  ngOnInit(): void {
    this.employees=this._employeeService.getemployees();

  };

}
