import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VideoResultClass } from 'src/app/classes_interfaces_constants/classes';
import { I18nService } from 'src/app/services/i18n/i18n.service';

@Component({
  selector: 'app-view-movie-dialog',
  templateUrl: './view-movie-dialog.component.html',
  styleUrls: ['./view-movie-dialog.component.scss']
})
export class ViewMovieDialogComponent implements OnInit {

  videoObj: VideoResultClass

  constructor(
    public dialogRef: MatDialogRef<ViewMovieDialogComponent>,
    public i18nSvc: I18nService,
    @Inject(MAT_DIALOG_DATA) public data: VideoResultClass
  ) { }

  ngOnInit() {
    console.log(this.data)

    this.setVideo()
  }

  setVideo(){
    const t = this;
    t.videoObj = Object.assign({}, t.data)

  }



}
