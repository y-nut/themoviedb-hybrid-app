import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpNodejsService } from './http-nodejs.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    HttpNodejsService
  ],
  exports: [
    //HttpNodejsService
  ]
})
export class HttpNodejsModule { }
