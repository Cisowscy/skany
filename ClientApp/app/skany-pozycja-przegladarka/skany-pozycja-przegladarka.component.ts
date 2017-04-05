import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
    moduleId: module.id,
  selector: 'app-skany-pozycja-przegladarka',
  templateUrl: './skany-pozycja-przegladarka.component.html',
  styleUrls: ['./skany-pozycja-przegladarka.component.scss']
})
export class SkanyPozycjaPrzegladarkaComponent implements OnInit {

  constructor(
        private gaService: GoogleAnalyticsService
    ) { }

    ngOnInit() {
        this.gaService.event.emit({
            category: 'app',
            action: 'bootstrap'
        });
    }

}
