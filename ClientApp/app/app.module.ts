import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, ApplicationInitStatus } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
//import {} from '@angular/platform-server';
import { MaterialModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
//import { MdlModule } from '@angular-mdl/core';
//import { MdlSelectModule } from '@angular-mdl/select';
//import { MdlPopoverModule } from '@angular-mdl/popover';
//import { MdlExpansionPanelModule } from '@angular-mdl/expansion-panel';
//import { PrismDirective } from '@mseemann/prism';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkanyInfoComponent } from './skany-info/skany-info.component';
import { SkanyFiltrowanieComponent } from './skany-filtrowanie/skany-filtrowanie.component';
import { SkanyOdfiltrowaneComponent } from './skany-odfiltrowane/skany-odfiltrowane.component';
import { SkanyPozycjaPrzegladarkaComponent } from './skany-pozycja-przegladarka/skany-pozycja-przegladarka.component';
import { SkanyPozycjaSzczegolyComponent } from './skany-pozycja-szczegoly/skany-pozycja-szczegoly.component';
import { MapyComponent } from './skany-filtrowanie/mapy/mapy.component';
import { Angular2GoogleMapsComponent } from './skany-filtrowanie/mapy/angular2-google-maps/angular2-google-maps.component';
import { StaraWersjaComponent} from './stara-wersja/stara-wersja.component';
// import {DIALOG01, DIALOG02a, DIALOG02b} from './stara-wersja/stara-wersja.component'; 

//
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes),    
    /*[MaterialModule],*/
    MaterialModule.forRoot(),
    FlexLayoutModule,
    GoogleAnalyticsModule.forRoot({
            provide: GA_TOKEN,
            useValue: 'UA-93512619-1'
        }),
   // MdlModule,
  //  MdlSelectModule,
   // MdlPopoverModule,
  //  MdlExpansionPanelModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPPObRPjynWdIGc86wy-kjonb823BBOCg'
    })
  ],
  declarations: [
    AppComponent,
    SkanyInfoComponent,
    SkanyFiltrowanieComponent,
    SkanyOdfiltrowaneComponent,
    SkanyPozycjaPrzegladarkaComponent,
    SkanyPozycjaSzczegolyComponent,
    MapyComponent,
    Angular2GoogleMapsComponent,
    StaraWersjaComponent
  ],
  //providers: [{ provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
