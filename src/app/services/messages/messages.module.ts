import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MessageService
  ]
})
export class MessagesModule { }
