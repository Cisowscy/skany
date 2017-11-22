import { Routes } from '@angular/router';

import { AgadComponent } from './agad.component';
import { LokalizacjeTabContentComponent } from './lokalizacje/lokalizacje.component';
import { WykazTabContentComponent } from './wykaz/wykaz.component';
import { InfoInfoComponentComponent } from './info/info.component';

export const AGAD_ROUTES: Routes = [
    { path: 'www.agad.gov.pl/inwentarze/testy.html', component: AgadComponent, children:[
      { path: '', redirectTo: 'lokalizacje', pathMatch: 'full'},
      { path: 'info', component: InfoInfoComponentComponent },
      { path: 'lokalizacje', component: LokalizacjeTabContentComponent },
      { path: 'wykaz-ksiag', component: WykazTabContentComponent },
    ]}
];
