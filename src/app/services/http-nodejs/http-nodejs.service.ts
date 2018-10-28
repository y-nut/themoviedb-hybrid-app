import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { VideoJSONClass } from '../../classes_interfaces_constants/classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpNodejsService {

  constructor(
    private http: HttpClient
  ) {}

  getTopRatedVideos() {
    const t = this;

    const href = 'https://us-central1-test-4a274.cloudfunctions.net/getAllVideos';
    return t.http.get<VideoJSONClass>(href)
  }

  getAllVideos(){
    const t = this;
    const href = 'https://us-central1-test-4a274.cloudfunctions.net/getTopRatedVideos';
    return t.http.get<VideoJSONClass>(href);
  }

}
