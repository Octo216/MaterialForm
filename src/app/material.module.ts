import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ],
})

export class MaterialModule { }
