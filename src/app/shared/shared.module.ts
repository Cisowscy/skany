import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialsModule } from '../materials/materials.module';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlXPo-7sGel0p-azJj-RkvilDi_kK0Y-k'
    }),
    AgmSnazzyInfoWindowModule,
    MyMaterialsModule
  ],
  declarations: [GoogleMapsComponent],
  providers: [],
  exports: [GoogleMapsComponent]
  // declarations: [GoogleMapsComponent, TabelaSortowanaFiltrComponent],
  // providers: [FotoPokazService],
  // exports: [GoogleMapsComponent, TabelaSortowanaFiltrComponent]
})
export class SharedModule {}
