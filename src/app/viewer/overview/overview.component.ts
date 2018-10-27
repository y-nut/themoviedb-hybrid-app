import { Component, OnInit } from '@angular/core';
import { HttpNodejsService } from 'src/app/services/http-nodejs/http-nodejs.service';
import { tap, map } from 'rxjs/operators';
import { VideoJSONClass, VideoResultClass, SortDirClass } from 'src/app/classes_interfaces/classes';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewMovieDialogComponent } from '../view-movie-dialog/view-movie-dialog.component';
import { videoResultInterface } from 'src/app/classes_interfaces/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  videos_all: VideoJSONClass;
  videos_top: VideoJSONClass;

  form_settings: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );



  constructor(
    private videoSvc: HttpNodejsService,
    private breakpointObserver: BreakpointObserver,
    private _fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initFormSettings()
    this.getAllVideos()
    this.getTopRatedVideos()

  }

  initFormSettings (){
    const t = this;

    t.form_settings = t._fb.group({
      sort_criteria: new FormControl('popular', [Validators.required]),
      videos_sorted: new FormControl(null, [Validators.required])
    })
/*
    t.form_settings.get('videos_sorted').valueChanges.subscribe(ch => { 
      console.log('ch', ch)
      const sortCriteria = t.form_settings.get('sort_criteria').value
      //t.sortBy(sortCriteria, 'desc')
    })*/

    t.form_settings.get('sort_criteria').valueChanges.subscribe(ch => {
      console.log('ch', ch)

      t.sortBy(ch, 'desc')


    })
  }

  /*
  sortBy(type: string){
    const t = this;





    switch(type){
      case 'popular':
/*
        const compare =(a,b) => {
          const a_popularity = a.popularity
          const b_popularity = b.popularity
          if (a_popularity < b_popularity)
            return -1;
          if (a_popularity > b_popularity)
            return 1;
          return 0;
        }*/

        //const sort = t.videos_all.results.sort(compare);
   /*     const sort = t.compare(
          t.videos_all,

        )
        console.log('sort', sort)
        
        t.videos_all.results = sort.slice()

        break;
    }
  }*/

  async sortBy(type: string, dir: string){
    //if (!Array.isArray(arr)) return arr;
    const t = this;
    let key: string;

    switch(type){
      case 'popular':
        //t.videos_sorted = Object.assign({}, t.videos_all)
        /*t.form_settings.get('videos_sorted').setValue(
          Object.assign({},t.videos_all)
        )*/
        key = 'popularity'
        break;
      case 'top':
        t.form_settings.get('videos_sorted').setValue(
          Object.assign({},t.videos_top)
        )
        //t.videos_sorted = Object.assign({}, t.videos_top)
        return
    }

    if (!key) return



    const compare = (a,b) => {
      switch(dir){
        case 'asc':
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        case 'desc':
          if (a[key] > b[key]) return -1;
          if (a[key] < b[key]) return 1;
          return 0;
        default:
          break
      }
    }

    //t.videos_sorted.results = t.videos_all.results.sort(compare).slice()

    t.videos_all.results = t.videos_all.results.sort(compare).slice()

    t.form_settings.get('videos_sorted').setValue(
      //t.videos_all.results.sort(compare).slice()
      Object.assign({},t.videos_all )
      

    )


  }

  getAllVideos(){
    const t = this;
    t.videoSvc.getAllVideos().subscribe((json: VideoJSONClass) => {   
      t.videos_all = Object.assign({}, json) 
      console.log('all videost', t.videos_all)
      const videos: FormControl = <FormControl>t.form_settings.get('videos_sorted')
      if (!videos.value){
        const type = t.form_settings.get('sort_criteria').value
        t.sortBy(type, 'desc')
      }
    })
  }

  getTopRatedVideos(){
    const t = this;
    t.videoSvc.getTopRatedVideos().subscribe((json: VideoJSONClass) => {
      t.videos_top = Object.assign({}, json) 
    })
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
      console.log('data', data)
    })

    
  }



}
