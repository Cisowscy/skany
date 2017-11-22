import { Routes } from '@angular/router';

import { AGAD_ROUTES } from './AGAD/agad.routing';

import { AgadComponent } from './AGAD/agad.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'www.agad.gov.pl/inwentarze/testy.html', pathMatch: 'full' },
    { path: 'www.agad.gov.pl/inwentarze/testy.html', component: AgadComponent, children: AGAD_ROUTES},
    { path: '**', redirectTo: 'www.agad.gov.pl/inwentarze/testy.html'}
];
