import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  students:any[];
  constructor()
    {
      this.students=[
      {
        studentid:1,
        name:"suman",
        age:24,
        gender:"male"
      
      },
      {
        studentid:2,
        name:"raju",
        age:22,
        gender:"male"
      
      },
      {
        studentid:3,
        name:"sourav",
        age:23,
        gender:"male"
      
      },
    ];
    }
    addStudent()
    {
      this.students=[
      {
        studentid:1,
        name:"suman",
        age:24,
        gender:"male"
      
      },
      {
        studentid:2,
        name:"raju",
        age:22,
        gender:"male"
      
      },
      {
        studentid:3,
        name:"sourav",
        age:23,
        gender:"male"
      
      },
      {
        studentid:4,
        name:"silpa",
        age:23,
        gender:"female"
      
      }
    ];
    }
    tarckByStudentid(index:number,student:any) :string
    {
      return student.studentid;
    }
    people:any=[
      {
      "name":"sourav",
      "contry":"India"
      },
      {
        "name":"Jack",
        "contry":"Usa"
        },
      
    ];
    getColor(contry)
    {
      switch(contry)
      {
        case("India"):
        return "blue";
        case("Usa"):
        return "red";
      }
    }
}
