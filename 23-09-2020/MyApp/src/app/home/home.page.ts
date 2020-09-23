export{}
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  name:string;
  pass:any;
 alart:any;
  
  RegBtn()
  {
    console.log("");
  }
  LogBtn(name,pass)
  {
    this.name=name;
    this.pass=pass;
    if(name=="" || pass=="")
    {
      console.log("Inviled input");
      return
      
    }
    else
    console.log("User Name- "+name+" "+"Password- "+pass);

  }
}


