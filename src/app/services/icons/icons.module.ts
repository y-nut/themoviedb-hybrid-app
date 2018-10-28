import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from './icon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    IconService
  ]
})
export class IconsModule { }
