import { Component } from '@angular/core';
import { from } from 'rxjs';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-Forms';
  topics=["Html","Css","Javascript","Angular"];
  userModel=new User("","","");
}
