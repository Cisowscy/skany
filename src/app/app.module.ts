import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';

import { APP_ROUTES } from "./app.routing";
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgadModule } from './AGAD/agad.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: true }),
    HttpModule,
    environment.production
      ? ServiceWorkerModule.register('/ngsw-worker.js')
      : [],
    AgadModule
  ],
  declarations: [AppComponent],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}
