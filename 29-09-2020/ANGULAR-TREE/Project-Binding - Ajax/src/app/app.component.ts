import { Component, OnInit, ViewChild } from '@angular/core';
import { contextMenuClick, PageSettingsModel , SortSettingsModel, TreeGridComponent} from '@syncfusion/ej2-angular-treegrid';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
import {sampleData} from 'src/app/dataSorce';
import {Ajax} from '@syncfusion/ej2-base'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('gridid')
   public gridid:TreeGridComponent;
  ngOnInit():void{




    // this.data=sampleData;
     this.pageSetting={pageSize:10};
     this.sortSating={
     columns:[
         {field:"TaskName",direction:"Ascending"},
         {field:"TaskID",direction:"Descending"}
       ]
     }
  }
  // title = 'Project-Grid-Tree';
     // public data:DataManager
   public pageSetting:PageSettingsModel;
   public sortSating:SortSettingsModel;

   click(e:any):any{
     const ajax=new Ajax(
      'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData', 'GET'
     )

     ajax.send();
     ajax.onSuccess= function(data:string)

     {
       this.gridid.dataSource=JSON.parse(data)
     }.bind(this);
  }


}
