import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewerModule } from './viewer/viewer.module';
import { ConnectionModule } from './services/connection/connection.module';
import { SharedModulesModule } from './libraries/shared-modules/shared-modules.module';
import { NConnectionService } from './services/connection/connection.service';
import { HandleRejectModule } from './handle-reject/handle-reject.module';
import { ConnectionService } from 'ng-connection-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HandleRejectModule,
    SharedModulesModule,
    ViewerModule,
    ConnectionModule
  ],
  providers: [
    NConnectionService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
