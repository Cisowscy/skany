import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
    moduleId: module.id,
  selector: 'app-skany-odfiltrowane',
  templateUrl: './skany-odfiltrowane.component.html',
  styleUrls: ['./skany-odfiltrowane.component.scss']
})
export class SkanyOdfiltrowaneComponent implements OnInit {

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
