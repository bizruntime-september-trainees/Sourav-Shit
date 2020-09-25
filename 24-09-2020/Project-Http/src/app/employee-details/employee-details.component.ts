import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {EmployeeService} from "src/app/employee.service"
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
public emp=[];
  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this._employeeservice.getEmployee().subscribe(data=>this.emp=data);
   
  }

}
