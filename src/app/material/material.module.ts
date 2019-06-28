import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule,MatInputModule, MatFormFieldModule, MatToolbarModule, MatTabsModule, MatCardModule } from '@angular/material'
var modules = [MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
MatTabsModule,
MatCardModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[...modules]
})
export class MaterialModule { }
