import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* Additional Modules */
import { UserSubmitModule } from './usersubmit/usersubmit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from '../app/charts/charts.module';
import { HuntersModule } from './hunters/hunters.module';
import { AppRoutingModule, routingComponents } from './routers/router.module';
import { CustomMaterialModule } from './material/material.module';
import { RecentSuspects } from './recent-suspects/recent-suspects.component';
import { Leaderboard } from './leaderboard/leaderboard.component';

/* Base Component */
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    routingComponents,
    RecentSuspects,
    Leaderboard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserSubmitModule,
    ChartModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
