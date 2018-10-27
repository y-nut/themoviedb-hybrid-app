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
  online$: Observable<boolean>;

  constructor(
    private connectionService: ConnectionService,
    private platform: Platform,
    private router: Router
  ) {
    const t = this;

    if (platform.ANDROID.valueOf() === true){
      let handler = Network.addListener('networkStatusChange', (status) => {
        console.log("Network status changed", status);

        t.isConnected = status.connected

      });



    } else if (platform.EDGE.valueOf() || platform.FIREFOX.valueOf() || platform.SAFARI.valueOf() || platform.isBrowser.valueOf()){
      try {
        console.log('check')

        t.online$ = merge(
          of(navigator.onLine),
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false))
        );

        t.online$.subscribe(net => {
          console.log(net)

          t.isConnected = net;
        })


      } catch (error) {
        console.log(error)
      }
    } else {

    }

  }
}
