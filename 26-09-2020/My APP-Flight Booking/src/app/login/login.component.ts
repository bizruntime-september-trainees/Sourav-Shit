import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  loginValue=true;

logBtn(name:string,pass:string)
{
  if(this.loginValue==true)
  {
    this.router.navigate(['/bookingForm']);
  }
  

}

 
} 
