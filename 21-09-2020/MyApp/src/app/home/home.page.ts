import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  value:string="My first ionic program";
  clickIt()
  {
      this.value="It is done";
  }

}
