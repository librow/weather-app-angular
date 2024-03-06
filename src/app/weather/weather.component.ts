import { Component } from '@angular/core';
import { RealtimeComponent } from './realtime/realtime.component';
import { ForecastComponent } from './forecast/forecast.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RealtimeComponent, ForecastComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {

}
