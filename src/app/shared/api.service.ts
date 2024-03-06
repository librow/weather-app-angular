import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.tomorrow.io/v4/weather/';

  getRealtime(type: string, location: string, unit: string) {
    const options = {
        headers: {
          accept: 'application/json',
          apikey: environment.weather_api_key,
        },
        // params: {
        //   location: location,
        //   units: unit,
        // }
        // next: {
        //   revalidate: 3600
        // }
      };
    
      const params = new URLSearchParams({ location: location, units: unit });
      const forecastParams = '&timesteps=1d&weatherCodeFullDay';
      const paramsString = params.toString();
      // type === 'forecast' ? paramsString + forecastParams;

      console.log('here')
    
      return this.http.get<RealtimeWeatherData>(`${this.apiUrl}${type}?` + paramsString, options);
  }
}

export interface RealtimeWeatherData {
  data: {
      time: string,
      values: {
          cloudBase: number,
          cloudCeiling: number,
          cloudCover: number,
          dewPoint: number,
          freezingRainIntensity: number,
          humidity: number,
          precipitationProbability: number,
          pressureSurfaceLevel: number,
          rainIntensity: number,
          sleetIntensity: number,
          snowIntensity: number,
          temperature: number,
          temperatureApparent: number,
          uvHealthConcern: number,
          uvIndex: number,
          visibility: number,
          weatherCode: number,
          windDirection: number,
          windGust: number,
          windSpeed: number
      }
  },
  location: {
      lat: string,
      lon: string,
      name: string,
      type: string
  }
}