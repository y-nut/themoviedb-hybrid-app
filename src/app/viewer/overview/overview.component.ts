import { Component, OnInit } from '@angular/core';
import { HttpNodejsService } from 'src/app/services/http-nodejs/http-nodejs.service';
import { tap, map } from 'rxjs/operators';
import { VideoJSONClass, VideoResultClass } from 'src/app/classes_interfaces/classes';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  videos_all;
  videos_top;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );



  constructor(
    private videoSvc: HttpNodejsService,
    private breakpointObserver: BreakpointObserver  
  ) { }

  ngOnInit() {
    this.getAllVideos()

  }

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

}
