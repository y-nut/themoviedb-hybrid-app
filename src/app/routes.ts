import { Routes } from "@angular/router";
import { HandleRejectNavComponent } from "./handle-reject/handle-reject-nav/handle-reject-nav.component";
import { OfflineComponent } from "./handle-reject/offline/offline.component";
import { ViewerNavComponent } from "./viewer/viewer-nav/viewer-nav.component";
import { OverviewComponent } from "./viewer/overview/overview.component";




export const ROUTES: Routes = [
    {path: '', redirectTo: 'viewer-nav', pathMatch: 'full'},
    {path: 'viewer-nav', component: ViewerNavComponent, children: [
        {path: '', redirectTo: 'overview', pathMatch: 'full'},
        {path: 'overview', component: OverviewComponent}
    ]},
    {path: 'handle-reject-nav', component: HandleRejectNavComponent, children: [
        {path: 'offline', component: OfflineComponent}
    ]},
];