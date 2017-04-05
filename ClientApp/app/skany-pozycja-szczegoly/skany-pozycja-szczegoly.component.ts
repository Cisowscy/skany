import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
    moduleId: module.id,
  selector: 'app-skany-pozycja-szczegoly',
  templateUrl: './skany-pozycja-szczegoly.component.html',
  styleUrls: ['./skany-pozycja-szczegoly.component.scss']
})
export class SkanyPozycjaSzczegolyComponent implements OnInit {

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
