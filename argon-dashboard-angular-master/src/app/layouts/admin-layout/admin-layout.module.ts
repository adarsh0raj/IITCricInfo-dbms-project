import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MatchComponent } from '../../pages/match/match.component';
import { VenueaddComponent } from '../../pages/venueadd/venueadd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchdetailComponent } from 'src/app/pages/matchdetail/matchdetail.component';
import { VenueComponent } from 'src/app/pages/venue/venue.component';
import { VenuedetailComponent } from 'src/app/pages/venuedetail/venuedetail.component';
import { PointsComponent } from 'src/app/pages/points/points.component';
import { SeasonyearComponent } from 'src/app/pages/seasonyear/seasonyear.component';
import { PlayerComponent } from 'src/app/pages/player/player.component';
import { PlayerlistComponent } from 'src/app/pages/playerlist/playerlist.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgApexchartsModule,
    NgChartsModule
  ],
  declarations: [
    DashboardComponent,
    VenueaddComponent,
    MatchComponent,
    MatchdetailComponent,
    VenueComponent,
    VenuedetailComponent,
    PointsComponent,
    SeasonyearComponent,
    PlayerComponent,
    PlayerlistComponent
  ]
})

export class AdminLayoutModule {}
