import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fb:FormBuilder){}

      formValues=this.fb.group({
        passwo:new FormControl(""),

          userName: ["b"],

          confirfPassword: [""],
          address:this.fb.group({
            city: [""],
            state: [""],
            postal: [""]

      }),
      altUname:this.fb.array([])
    });

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
      this.formValues.setValue({

        userName:"sourav",
        password:"mkdj",
        confirfPassword:"mkdj",
        address: {
          city:"Bankura",
          state:"West Bengal",
          postal:"722146"

      }
    });
}
// get altUname()
// {
//   return this.formValues.user

// }
}
