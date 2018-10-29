import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from './offline/offline.component';
import { HandleRejectNavComponent } from './handle-reject-nav/handle-reject-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
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
