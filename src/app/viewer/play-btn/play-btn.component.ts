import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-play-btn',
  templateUrl: './play-btn.component.html',
  styleUrls: ['./play-btn.component.scss']
})
export class PlayBtnComponent implements OnInit {

  @Input() video;

  constructor(
    private msgSvc: MessageService
  ) { }

  ngOnInit() {
  }

  play(){
    const t = this;
    const msg = 'There are no movies available in this demo!'
    t.msgSvc.openSnack(msg)
  }

}
