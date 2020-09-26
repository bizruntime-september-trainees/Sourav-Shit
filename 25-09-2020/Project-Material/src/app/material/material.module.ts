import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


const materialComponent=[MatButtonModule,MatCardModule,MatInputModule,MatBadgeModule];


@NgModule({

  imports: [
    materialComponent

  ],
  exports:[materialComponent]
})
export class MaterialModule { }
