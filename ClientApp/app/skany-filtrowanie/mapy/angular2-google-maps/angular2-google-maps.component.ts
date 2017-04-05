import { Component, OnInit } from '@angular/core';

import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
'angular2-google-maps/core';

import { marker } from './map-marker.type';
import { circler } from './map-circler.type';

@Component({
  selector: 'app-angular2-google-maps',
  templateUrl: './angular2-google-maps.component.html',
  styleUrls: ['./angular2-google-maps.component.scss']
})
export class Angular2GoogleMapsComponent implements OnInit {  

  // google maps zoom level
  zoom: number = 6;

  // initial center position for the map
  lat: number = 49.839426;
  lng: number = 24.029996;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  clickedCircle(index: number) {
    console.log(`clicked the marker: ${index}`)
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
/* jakiś error niewiem co kamon
   mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
  */
  /* kurde!!!!!!!!!!!!!!!!!!!!!! jak dodać zmienną w angular ?? 
  let pinezka_dom: string = 'https://maps.gstatic.com/mapfiles/ms2/micons/homegardenbusiness.png';*/

  markers: marker[] = [	  
	  {
		  lat: 48.997633,
      lng: 25.197839,
      tytul: 'Puźniki',
		  label: '',
      draggable: false,
      pinezka: 'https://maps.gstatic.com/mapfiles/ms2/micons/homegardenbusiness.png'
	  }
  ] 

  circlers: circler[] = [
    {
    lat: 48.997633,
    lng: 25.197839,
    rad: 1500,
    barwa: 'red',
    draggable: false,
    editable: false
    }

  ]
  

  constructor() { }

  ngOnInit() {
  }

}
// just an interface for type safety.
