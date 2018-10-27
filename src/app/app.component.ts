import { Component } from '@angular/core';
import { NConnectionService } from './services/connection/connection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';

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
    private route: ActivatedRoute
  ){
    this.do()

  }

  async do(){
    const t = this;
    t.conSvc.connection()





    
  }
}
