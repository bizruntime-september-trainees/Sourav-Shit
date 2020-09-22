import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

 
 
  @Input('parentData') name;
  @Output() public childEvent=new EventEmitter();
  constructor() {
    
  }

  ngOnInit(){
   
    
  }
  fireEvent()
    {
      this.childEvent.emit("This message is send to parent from child");
    }
   
 
 

}
