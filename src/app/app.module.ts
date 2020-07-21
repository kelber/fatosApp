import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from 'projects/header/src/lib/header.module';
import { SearchComponent } from './search/search.component';
import { EstimateComponent } from './estimate/estimate.component';
import { TicketsComponent } from './estimate/tickets/tickets.component';
import { RoadComponent } from './estimate/road/road.component';
import { FlyComponent } from './estimate/fly/fly.component';
import { OtherComponent } from './estimate/other/other.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EstimateComponent,
    TicketsComponent,
    RoadComponent,
    FlyComponent,
    OtherComponent,
    ResultComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
