import { Component, OnInit } from '@angular/core';
import { HttpNodejsService } from 'src/app/services/http-nodejs/http-nodejs.service';
import { tap, map } from 'rxjs/operators';
import { VideoJSONClass, VideoResultClass } from 'src/app/classes_interfaces/classes';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  videos_all;
  videos_top;
  breakpoint;
  form_settings: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );



  constructor(
    private videoSvc: HttpNodejsService,
    private breakpointObserver: BreakpointObserver  
  ) { }
/*
  ngOnInit() {
    this.getAllVideos()

  }
*/
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
    this.getAllVideos()
    this.subscribe_breakpoint ()
  }

  subscribe_breakpoint(){
    const t = this;
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;

    t.isHandset$.subscribe(res => {
      console.log(res)
      if (res){
        this.breakpoint = 1
      } else {
        this.breakpoint = 6
      }
    })
  }
/*
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
*/
  getAllVideos(){
    const t = this;
    t.videoSvc.getAllVideos().subscribe((json: VideoJSONClass) => {
      console.log('json', json)
      t.videos_all = Object.assign({}, json) 
    })
  }

  getTopRatedVideos(){
    const t = this;
    t.videoSvc.getTopRatedVideos().subscribe((json: VideoJSONClass) => {
      console.log('json', json)
      t.videos_top = Object.assign({}, json) 
    })
  }

  videoObj(res): VideoResultClass {
    const t= this;

    //const href_base = 'https://image.tmdb.org/t/p/w500'

    return new VideoResultClass(res)
  }

  maxStr(str: string){
    const fixed = 50;
    if (str.length > fixed){
      return str.slice(0,fixed-3) + '...'
    } else {
      return str
    }
  }

}
