import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/user'
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  addUser=new User("","",0,"","");

}
