import { Component } from '@angular/core';

import { ForecastItemComponent } from './forecast-item/forecast-item.component';
import { ApiService, DailyForecastData } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [ForecastItemComponent, CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {
  forecast: DailyForecastData | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getForecast('denver', 'imperial')
      .subscribe(data => this.forecast = { ...data });

    this.forecast?.timelines.daily.shift();
  }

}
