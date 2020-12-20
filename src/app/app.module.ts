import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [					
    AppComponent,
    LoginPipe,
    IpTrackingPipe,
    ScoreboardPipe,
    NotificationsPipe,
    RankingPipe,
      LoginComponent,
      Ip_trackingComponent,
      NotificationsComponent,
      ScoreboardComponent,
      RankingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
