import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import routeConfig from "./app/app.routes";
import { provideAnimations } from '@angular/platform-browser/animations';

import { importProvidersFrom } from '@angular/core';
import { AppModule } from './app/app.module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routeConfig),
      provideAnimations(),
      importProvidersFrom(BrowserModule, AppModule, HttpClientModule),
    ]
  }
).catch((err) => console.error(err));
