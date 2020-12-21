import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as appComponent from './app.component';
import { LoginPipe } from './login.pipe';
import { IpTrackingPipe } from './ip-tracking.pipe';
import { ScoreboardPipe } from './scoreboard.pipe';
import { NotificationsPipe } from './notifications.pipe';
import { RankingPipe } from './ranking.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { Ip_trackingComponent } from './ip_tracking/ip_tracking.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [								
    appComponent.AppComponent,
    LoginPipe,
    IpTrackingPipe,
    ScoreboardPipe,
    NotificationsPipe,
    RankingPipe,
      LoginComponent,
      Ip_trackingComponent,
      NotificationsComponent,
      ScoreboardComponent,
      RankingComponent,
      HomeComponent,
      NotfoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [appComponent.AppComponent]
})
export class AppModule { }
