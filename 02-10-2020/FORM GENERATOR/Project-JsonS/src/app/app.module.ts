import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DummyComponent} from './dummy.component';
import { JsonSchemaFormModule, Bootstrap3FrameworkModule } from 'angular2-json-schema-form';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    Bootstrap3FrameworkModule,
    JsonSchemaFormModule.forRoot(Bootstrap3FrameworkModule) ],
  declarations: [ AppComponent, HelloComponent, DummyComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents:[
    DummyComponent
  ]
})
export class AppModule { }
