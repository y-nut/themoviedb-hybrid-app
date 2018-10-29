import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { SharedModulesModule } from '../libraries/shared-modules/shared-modules.module';
import { MaterialModulesModule } from '../libraries/material-modules/material-modules.module';
import { ViewerNavComponent } from './viewer-nav/viewer-nav.component';
import { HttpNodejsModule } from '../services/http-nodejs/http-nodejs.module';
import { HttpNodejsService } from '../services/http-nodejs/http-nodejs.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewMovieDialogComponent } from './view-movie-dialog/view-movie-dialog.component';
import { GridMovieListComponent } from './grid-movie-list/grid-movie-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { IconsModule } from '../services/icons/icons.module';
import { MessagesModule } from '../services/messages/messages.module';
import { PlayBtnComponent } from './play-btn/play-btn.component';

@NgModule({
  imports: [
    SharedModulesModule,
    MaterialModulesModule,
    HttpNodejsModule,
    IconsModule,
    MessagesModule
  ],
  declarations: [
    OverviewComponent, 
    ViewerNavComponent, 
    ViewMovieDialogComponent, 
    GridMovieListComponent, 
    StarRatingComponent, 
    PlayBtnComponent
  ], 
  providers: [
    //HttpNodejsService
  ],
  entryComponents: [
    ViewMovieDialogComponent,
    GridMovieListComponent,
    StarRatingComponent,
    PlayBtnComponent
  ]
})
export class ViewerModule { }
