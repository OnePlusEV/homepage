import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }   from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CardComponent } from './components/core/card/card.component';
import { ClockComponent } from './components/blocks/clock/clock.component';
import { WeatherComponent } from './components/blocks/weather/weather.component';
import { BookmarksComponent } from './components/blocks/bookmarks/bookmarks.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ColorPickerComponent } from './components/core/color-picker/color-picker.component';
import {MatSliderModule} from "@angular/material/slider";
import { SettingsBlockComponent } from './components/core/settings-block/settings-block.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClockComponent,
    WeatherComponent,
    BookmarksComponent,
    HomeComponent,
    SettingsComponent,
    ColorPickerComponent,
    SettingsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
