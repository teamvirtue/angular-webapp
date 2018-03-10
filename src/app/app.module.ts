import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// To simulate a data server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatSlideToggleModule
} from '@angular/material';
import {MdcTabModule,
        MdcListModule,
        MdcIconModule,
        MdcTypographyModule
} from '@angular-mdc/web';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsDetailsComponent } from './settings/settings-details/settings-details.component';
import { AppRoutingModule } from './app-routing.module';

import { InfoService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailsComponent,
    ReportsComponent,
    SettingsComponent,
    SettingsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdcTabModule,
    MdcListModule,
    MdcIconModule,
    MdcTypographyModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    ChartsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ InfoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
