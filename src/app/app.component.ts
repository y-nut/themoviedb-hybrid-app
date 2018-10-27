import { Component } from '@angular/core';
import { NConnectionService } from './services/connection/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seidor-Evaluacion-Desarrollador-Android';

  constructor(
    private conSvc: NConnectionService,
    private router: Router
  ){
    conSvc.online$.subscribe(net => {
      if (!net){
        router.navigate(['handle-reject-nav','offline'])
      } else {
        
      }
    })
    
  }
}
