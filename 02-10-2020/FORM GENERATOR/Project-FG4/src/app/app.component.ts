import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

formValues:FormGroup;
  get altMail()
  {
    return this.formValues.get("altMail") as FormArray
  }
addAltMail()
{
  this.altMail.push(this.fb.control(""))
}
  constructor(public fb:FormBuilder){}

ngOnInit(){
      this.formValues=this.fb.group({
       

          userName: ["b"],
          password:[""],

          confirfPassword: [""],
          mail:[""],
          address:this.fb.group({
            city: [""],
            state: [""],
            postal: [""]

      }),
      altMail:this.fb.array([])
    });
  }

    // formValues=new FormGroup({
    //   userName:new FormControl(""),
    //   password:new FormControl(""),
    //   confirfPassword:new FormControl(""),
    //   address:new FormGroup({
    //     city:new FormControl(""),
    //     state:new FormControl(""),
    //     postal:new FormControl("")
    //   })

    // });
    loadData()
    {
    //   this.formValues.setValue({

    //     userName:"sourav",
    //     password:"mkdj",
    //     confirfPassword:"mkdj",
    //     mail:"abc@cba",
    //     address: {
    //       city:"Bankura",
    //       state:"West Bengal",
    //       postal:"722146"

    //   }
    // });
}
// get altUname()
// {
//   return this.formValues.user

// }
}
