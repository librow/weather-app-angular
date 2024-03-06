import { Component } from '@angular/core';

import { ApiService, RealtimeWeatherData } from '../../shared/api.service';
import weatherCodeToDescription from '../../shared/helpers/weatherCodeToDescr.component';

@Component({
  selector: 'app-realtime',
  standalone: true,
  imports: [],
  templateUrl: './realtime.component.html',
  styleUrl: './realtime.component.scss'
})
export class RealtimeComponent {
  realtime: RealtimeWeatherData | undefined;
  temperature: number | undefined;
  description: string | undefined;
  windSpeed: number | undefined;
  math = Math;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRealtime('realtime', 'denver', 'imperial')
      // .subscribe(data => this.realtime = { ...data });
      .subscribe(data => {
        this.temperature = data.data.values.temperature;
        this.description = weatherCodeToDescription(data.data.values.weatherCode);
        this.windSpeed = data.data.values.windSpeed;
      })
  }

}
