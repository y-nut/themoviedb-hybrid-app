import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { SharedModulesModule } from '../libraries/shared-modules/shared-modules.module';
import { MaterialModulesModule } from '../libraries/material-modules/material-modules.module';
import { ViewerNavComponent } from './viewer-nav/viewer-nav.component';
import { HttpNodejsModule } from '../services/http-nodejs/http-nodejs.module';
import { HttpNodejsService } from '../services/http-nodejs/http-nodejs.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModulesModule,
    MaterialModulesModule,
    HttpNodejsModule
  ],
  declarations: [
    OverviewComponent, 
    ViewerNavComponent
  ],
  providers: [
    //HttpNodejsService
  ]
})
export class ViewerModule { }
