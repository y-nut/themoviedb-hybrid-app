import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { Platform } from '@angular/cdk/platform';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { mapTo } from 'rxjs/operators';
import { fromEvent, merge, of, Observable } from 'rxjs';

const { Network } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NConnectionService {

  //status = 'ONLINE';
  isConnected = true;
  //online$: Observable<boolean>;

  constructor(
    private connectionService: ConnectionService,
    private platform: Platform,
    private router: Router
  ) {
    //const t = this;


  }

  async connection(){
    const t = this;

/*
    if (t.platform.ANDROID.valueOf() ){

      let handler = Network.addListener('networkStatusChange', (status) => {
        console.log("Network status changed", status);


        t.isConnected = status.connected

        t.check()

      });

      let status = await Network.getStatus();

      t.isConnected = status.connected

      t.check()



    } else*/ if (t.platform.EDGE.valueOf() || t.platform.FIREFOX.valueOf() || t.platform.SAFARI.valueOf() || t.platform.isBrowser.valueOf() || t.platform.ANDROID.valueOf()){
      try {
        //console.log('check')

        const online$ = merge(
          of(navigator.onLine),
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false))
        );

        online$.subscribe(net => {
          //console.log(net)

          t.isConnected = net;

          t.check()
        })



      } catch (error) {
        console.log(error)

      }
    } else {

    }
  }

  check(){
    const t = this;
    console.log('check')
    if (!t.isConnected){
      t.router.navigate(['/handle-reject-nav','offline'])
    } else {
      t.router.navigate(['/viewer-nav'])
    }

  }
}
