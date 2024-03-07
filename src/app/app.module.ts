import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RealtimeComponent } from './weather/realtime/realtime.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [
    // AppComponent,
    // WeatherComponent,
    // RealtimeComponent,
  ],
  imports: [
    HttpClientModule,
    ForecastComponent,
  ],
  providers: [
    ApiService
  ],
//   bootstrap: [AppComponent]
})
export class AppModule { }
