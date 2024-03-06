import { Component } from '@angular/core';

import { ApiService, RealtimeWeatherData } from '../../shared/api.service';

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
  description: number | undefined;
  windSpeed: number | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRealtime('realtime', 'denver', 'imperial')
      // .subscribe(data => this.realtime = { ...data });
      .subscribe(data => {
        this.temperature = data.data.values.temperature;
        this.description = data.data.values.weatherCode;
        this.windSpeed = data.data.values.windSpeed;

      })
    console.log(this.temperature);
    // this.description = weatherCodeToDescription(realtime.data.values.weatherCode);
  }

}
