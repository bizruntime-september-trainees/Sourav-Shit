import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  student:string="sourav";
  value:any = '';
  update(value: string) { this.value = value; }


}
