import { NgModule } from '@angular/core';
import { OfflineComponent } from './offline/offline.component';
import { HandleRejectNavComponent } from './handle-reject-nav/handle-reject-nav.component';
import { SharedModulesModule } from '../libraries/shared-modules/shared-modules.module';
import { MaterialModulesModule } from '../libraries/material-modules/material-modules.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    SharedModulesModule,
    MaterialModulesModule,
    AppRoutingModule
  ],
  declarations: [
    OfflineComponent, 
    HandleRejectNavComponent
  ]
})
export class HandleRejectModule { }
