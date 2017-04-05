import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-mapy',
  templateUrl: './mapy.component.html',
  styleUrls: ['./mapy.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class MapyComponent implements OnInit {


  asyncTabs: Observable<any>;



  ngOnInit() {
  }

}