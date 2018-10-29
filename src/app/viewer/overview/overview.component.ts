import { Component, OnInit } from '@angular/core';
import { HttpNodejsService } from 'src/app/services/http-nodejs/http-nodejs.service';
import { tap, map } from 'rxjs/operators';
import { VideoJSONClass, VideoResultClass, SortDirClass } from 'src/app/classes_interfaces_constants/classes';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatTabChangeEvent, MatButtonToggleChange } from '@angular/material';
import { ViewMovieDialogComponent } from '../view-movie-dialog/view-movie-dialog.component';
import { videoResultInterface } from 'src/app/classes_interfaces_constants/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  videos_all: VideoJSONClass;
  videos_top: VideoJSONClass;

  //spinner: boolean;

  form_settings: FormGroup;
  dirKey: string;
  changer: boolean;

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
      chosenTab: new FormControl('popular', [Validators.required]),
      sort: t._fb.group({
        popularity: new FormControl('desc', [Validators.required]),
        vote_average: new FormControl(null, [Validators.required]),
      }),
      dirKey: new FormControl('popularity', [Validators.required]),
      videos_sorted: new FormControl(null, [Validators.required])
    })

    t.form_settings.get('chosenTab').valueChanges.subscribe(ch => {
      t.sortBy()
    })


    let sub_pop: Subscription
    let sub_vote: Subscription

    const pop = () => {
      sub_pop = t.form_settings.get('sort.popularity').valueChanges.subscribe(ch => {
        if (sub_vote){
          sub_vote.unsubscribe();
          t.form_settings.get('sort.vote_average').setValue(null);
          vote();
        }

        t.form_settings.get('dirKey').setValue('popularity')
        t.sortBy()
      })
    }

    const vote = () => {
      sub_vote = t.form_settings.get('sort.vote_average').valueChanges.subscribe(ch => {
        if (sub_pop){
          sub_pop.unsubscribe();
          t.form_settings.get('sort.popularity').setValue(null);
          pop();
        }

        t.form_settings.get('dirKey').setValue('vote_average')
        t.sortBy()
      })
    }

    pop();
    vote()


  }


  async sortBy(){
    const t = this;

    

    const key = t.form_settings.get('dirKey').value
    const type: string = t.form_settings.get('chosenTab').value 
    const dir: string = t.form_settings.get('sort').get(key).value

    if (!type || !dir || !key) return

    let videos: VideoJSONClass //= Object.assign({}, t.form_settings.get('videos_sorted').value )

    switch(type){
      case 'popular':
        videos = Object.assign({}, t.videos_all)
        break;
      case 'top':
        videos = Object.assign({}, t.videos_top)
        break;
    }

    if (!key || !videos) return

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

    videos.results = videos.results.sort(compare).slice()

    t.form_settings.get('videos_sorted').setValue(
      Object.assign({}, videos)
    )


  }

  getAllVideos(){
    const t = this;
    t.videoSvc.getAllVideos().subscribe((json: VideoJSONClass) => {   
      //console.log('json', json)
      t.videos_all = Object.assign({}, json) 
      //console.log('all videos', t.videos_all)
      const videos: FormControl = <FormControl>t.form_settings.get('videos_sorted')
      if (!videos.value){
          videos.setValue(json)
        //t.sortBy()
      }
    })
  }

  getTopRatedVideos(){
    const t = this;
    t.videoSvc.getTopRatedVideos().subscribe((json: VideoJSONClass) => {
      t.videos_top = Object.assign({}, json) 
    })
  }


  selectedTabChange($event: MatTabChangeEvent){
    const t = this;

    //console.log('evt', $event)
    let key: string;

    switch($event.index){
      case 0:
        key = 'popular'
        break;
      case 1:
        key = 'top'
        break;
      default:
        break;

    }

    //console.log('key', key)
    t.form_settings.get('chosenTab').setValue(key)


  }

  change($event: MatButtonToggleChange, key: string){
    const t = this;
    //console.log('evt', $event)
    t.form_settings.get('sort').get(key).setValue($event.value)

  }



}
