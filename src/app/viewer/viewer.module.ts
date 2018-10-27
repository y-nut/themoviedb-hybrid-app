import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { SharedModulesModule } from '../libraries/shared-modules/shared-modules.module';
import { MaterialModulesModule } from '../libraries/material-modules/material-modules.module';
import { ViewerNavComponent } from './viewer-nav/viewer-nav.component';

@NgModule({
  imports: [
    SharedModulesModule,
    MaterialModulesModule
  ],
  declarations: [
    OverviewComponent, 
    ViewerNavComponent
  ]
})
export class ViewerModule { }
