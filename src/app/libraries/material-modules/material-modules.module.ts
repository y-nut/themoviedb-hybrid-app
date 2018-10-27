import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatProgressBarModule,
  MatRadioModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  MatButtonModule, 
  MatCheckboxModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatProgressBarModule,
  MatRadioModule,
  MatInputModule,
  MatDialogModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModulesModule { }
