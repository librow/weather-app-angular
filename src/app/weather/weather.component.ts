import { Component } from '@angular/core';
import { RealtimeComponent } from './realtime/realtime.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ApiService } from '../shared/api.service';
import stateNameToAbbreviation from '../shared/helpers/stateNametoAbbr.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RealtimeComponent, ForecastComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  location: string | undefined;
  date: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRealtime('realtime', 'denver', 'imperial')
      .subscribe(data => {
        // this.location = data.location.name;
        const location_split = data.location.name.split(', ');
        this.location = location_split[0] + ', ' + stateNameToAbbreviation(location_split[1]);
        this.date = this.getFormattedDate();
      })
  }

  getFormattedDate() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const today = new Date();
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
  
    return weekdays[day] + ', ' + months[month] + ' ' + date + ', ' + year;
  }
}
