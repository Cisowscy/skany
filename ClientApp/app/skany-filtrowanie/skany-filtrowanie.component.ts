import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
    moduleId: module.id,
  selector: 'app-skany-filtrowanie',
  templateUrl: './skany-filtrowanie.component.html',
  styleUrls: ['./skany-filtrowanie.component.scss']
})
export class SkanyFiltrowanieComponent implements OnInit {

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
