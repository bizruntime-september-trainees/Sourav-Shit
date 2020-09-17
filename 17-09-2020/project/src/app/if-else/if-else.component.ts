import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.scss']
})
export class IfElseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  val=false;
  number=3;

}
