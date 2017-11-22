import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialsModule } from '../materials/materials.module';

import { RouterModule } from '@angular/router';

import { AGAD_ROUTES } from './agad.routing';
import { AgadComponent } from './agad.component';
import { SharedModule } from '../shared/shared.module';
import { LokalizacjeTabContentComponent } from './lokalizacje/lokalizacje.component';
import { WykazTabContentComponent } from './wykaz/wykaz.component';
import { InfoInfoComponentComponent } from './info/info.component';
import { LokalizacjeService } from './agad.service/lokalizacje.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AGAD_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialsModule,
    SharedModule
  ],
  declarations: [AgadComponent, LokalizacjeTabContentComponent, WykazTabContentComponent, InfoInfoComponentComponent],
  providers: [LokalizacjeService],
  exports: [AgadComponent]
})
export class AgadModule { }
