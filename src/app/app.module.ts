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

@NgModule({
  declarations: [
    AppComponent,
    LoginPipe,
    IpTrackingPipe,
    ScoreboardPipe,
    NotificationsPipe,
    RankingPipe
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
