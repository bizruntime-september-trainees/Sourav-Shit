import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data= {
    title:"Project1"
};
change(id1:string)
{
  this.data.title=id1;
}
}
