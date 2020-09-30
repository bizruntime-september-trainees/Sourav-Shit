import { Component, OnInit } from '@angular/core';
import { PageSettingsModel , SortSettingsModel} from '@syncfusion/ej2-angular-treegrid';

import {sampleData} from 'src/app/dataSorce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit():void{
    this.data=sampleData;
    this.pageSetting={pageSize:4};
    this.sortSating={
      columns:[
        {field:"taskName",direction:"Ascending"},
        {field:"taskID",direction:"Descending"}
      ]
    }
  }
  title = 'Project-Grid-Tree';
  public data:object[];
  public pageSetting:PageSettingsModel;
  public sortSating:SortSettingsModel;
}
