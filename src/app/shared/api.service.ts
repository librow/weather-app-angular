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
    
      return this.http.get<RealtimeWeatherData>(`${this.apiUrl}${type}?` + paramsString, options);
  }

  getForecast(location: string, unit: string) {
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
      const paramsString = params.toString() + '&timesteps=1d&weatherCodeFullDay';
    
      return this.http.get<DailyForecastData>(`${this.apiUrl}forecast?` + paramsString, options);
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

export type DayForecast = {
  time: string,
  values: {
      cloudBaseAvg: number
      cloudBaseMax: number
      cloudBaseMin: number                  
      cloudCeilingAvg: number
      cloudCeilingMax: number
      cloudCeilingMin: number                  
      cloudCoverAvg: number,
      cloudCoverMax: number                    
      cloudCoverMin: number                  
      dewPointAvg: number,
      dewPointMax: number,
      dewPointMin: number
      evapotranspirationAvg: number,
      evapotranspirationMax: number,
      evapotranspirationMin: number                  
      evapotranspirationSum: number,
      freezingRainIntensityAvg: number                  
      freezingRainIntensityMax: number                  
      freezingRainIntensityMin: number                  
      humidityAvg: number,
      humidityMax: number                   
      humidityMin: number,
      iceAccumulationAvg: number                  
      iceAccumulationLweAvg: number                  
      iceAccumulationLweMax: number                  
      iceAccumulationLweMin: number                  
      iceAccumulationLweSum: number                  
      iceAccumulationMax: number                  
      iceAccumulationMin: number                  
      iceAccumulationSum: number                  
      moonriseTime: string,
      moonsetTime: string,
      precipitationProbabilityAvg: number,                   
      precipitationProbabilityMax: number,                 
      precipitationProbabilityMin: number,                
      pressureSurfaceLevelAvg: number,                 
      pressureSurfaceLevelMax: number,                    
      pressureSurfaceLevelMin: number,                    
      rainAccumulationAvg: number,                
      rainAccumulationLweAvg: number,                
      rainAccumulationLweMax: number,                
      rainAccumulationLweMin: number,                
      rainAccumulationMax: number,                
      rainAccumulationMin: number,                
      rainAccumulationSum: number,                
      rainIntensityAvg: number,                
      rainIntensityMax: number,                
      rainIntensityMin: number,                
      sleetAccumulationAvg: number,                
      sleetAccumulationLweAvg: number,                
      sleetAccumulationLweMax: number,                
      sleetAccumulationLweMin: number,                
      sleetAccumulationLweSum: number,                
      sleetAccumulationMax: number,                
      sleetAccumulationMin: number,                
      sleetIntensityAvg: number,                
      sleetIntensityMax: number,                
      sleetIntensityMin: number,                
      snowAccumulationAvg: number,                   
      snowAccumulationLweAvg: number,                
      snowAccumulationLweMax: number,                   
      snowAccumulationLweMin: number,                
      snowAccumulationLweSum: number,                   
      snowAccumulationMax: number,                   
      snowAccumulationMin: number,                
      snowAccumulationSum: number,                   
      snowDepthAvg: number,
      snowDepthMax: number,
      snowDepthMin: number,
      snowDepthSum: number,
      snowIntensityAvg: number,                
      snowIntensityMax: number,                   
      snowIntensityMin: number,                
      sunriseTime: string,
      sunsetTime: string,
      temperatureApparentAvg: number,
      temperatureApparentMax: number,
      temperatureApparentMin: number,
      temperatureAvg: number,
      temperatureMax: number,
      temperatureMin: number,
      uvHealthConcernAvg: number,
      uvHealthConcernMax: number,
      uvHealthConcernMin: number,
      uvIndexAvg: number,
      uvIndexMax: number,
      uvIndexMin: number,
      visibilityAvg: number,
      visibilityMax: number,
      visibilityMin: number,
      weatherCodeMax: number,
      weatherCodeMin: number,
      windDirectionAvg: number,
      windGustAvg: number,
      windGustMax: number,
      windGustMin: number,
      windSpeedAvg: number,
      windSpeedMax: number,
      windSpeedMin: number
  }
}

export interface DailyForecastData {
  timelines: {
      daily: DayForecast[]
  },
  location: {
      lat: string,
      lon: string,
      name: string,
      type: string
  }
}