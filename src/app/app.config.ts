import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { ApiService } from './shared/api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    ApiService,
  ]
};
