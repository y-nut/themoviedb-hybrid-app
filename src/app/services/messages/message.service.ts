import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snack: MatSnackBar
  ) { }

  openSnack(msg: string, action?: string, duration?: number){
    const t = this;
    const conf: MatSnackBarConfig = {
      duration: duration || 4000,
      
    }
    const act = action || ''
    t.snack.open(msg,act, conf)
  }
}
