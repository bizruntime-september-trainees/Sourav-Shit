import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridModule , PageService} from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
