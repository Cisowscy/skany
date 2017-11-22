import { Component, OnInit } from '@angular/core';
import { LokalizacjeService } from '../agad.service/lokalizacje.service';
@Component({
  selector: 'app-lokalizacje',
  templateUrl: './lokalizacje.component.html',
  styleUrls: ['./lokalizacje.component.scss']
})
export class LokalizacjeTabContentComponent implements OnInit {

  constructor(private _gpsService: LokalizacjeService) {}

  AGMmarkers = this._gpsService.Lokalizacje;

  ngOnInit() {}
}
