import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }   from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CardComponent } from './components/core/card/card.component';
import { ClockComponent } from './components/blocks/clock/clock.component';
import { WeatherComponent } from './components/blocks/weather/weather.component';
import { BookmarksComponent } from './components/blocks/bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClockComponent,
    WeatherComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
