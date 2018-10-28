import { Component } from '@angular/core';
import { NConnectionService } from './services/connection/connection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { IconService } from './services/icons/icon.service';

const { Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seidor-Evaluacion-Desarrollador-Android';

  constructor(
    private conSvc: NConnectionService,
    private router: Router,
    private route: ActivatedRoute,
    private iconSvc: IconService
  ){
    this.do()

    iconSvc.initSvg()

  }

  async do(){
    const t = this;
    t.conSvc.connection()
  }

}
