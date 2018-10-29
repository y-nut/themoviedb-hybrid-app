import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VideoJSONClass, VideoResultClass } from 'src/app/classes_interfaces_constants/classes';
import { videoResultInterface } from 'src/app/classes_interfaces_constants/interfaces';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ViewMovieDialogComponent } from '../view-movie-dialog/view-movie-dialog.component';
import { FormGroup } from '@angular/forms';
import { isoLangs } from '../../classes_interfaces_constants/constants';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-grid-movie-list',
  templateUrl: './grid-movie-list.component.html',
  styleUrls: ['./grid-movie-list.component.scss']
})
export class GridMovieListComponent implements OnInit, OnChanges {

  @Input() videos: VideoJSONClass;


  constructor(
    private dialog: MatDialog,
    public i18nSvc: I18nService,
    private msgSvc: MessageService
  ) { }

  ngOnInit() {
    //console.log('isoLangs', isoLangs)
  }

  ngOnChanges(ch: SimpleChanges) { 
    const t = this
    //console.log('ch', ch, 'videos', t.videos)

  }


  videoObj(res): VideoResultClass {
    const t= this;
    return new VideoResultClass(res)
  }

  maxStr(str: string){
    const fixed = 120;
    if (str.length > fixed){
      return str.slice(0,fixed-3) + '...'
    } else {
      return str
    }
  }

  seeMovie(videoObj: videoResultInterface){
    const t = this;

    const nVideoObj = t.videoObj(videoObj)

    const conf: MatDialogConfig = {
      data: nVideoObj as VideoResultClass,
      maxWidth: '500px'
    }

    const dialog = t.dialog.open(
      ViewMovieDialogComponent,
      conf
    )

    dialog.afterClosed().subscribe(data => {
     // console.log('data', data)
    })

    
  }


}
