import { Component, Input } from '@angular/core';

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
export class GoogleMapsComponent {
  // https://mapstyle.withgoogle.com/
  GMapPosition = [9, 49.125022, 24.729681];
  GMapType = [true, "terrain"];
  GMapViewControl = false;
  GMapScale = true;
  GMapTmp = true; //nic to nie rob
  GMapStyle = [
    {
      elementType: "labels.icon",
      stylers: [
        {
          saturation: -65
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          visibility: "off"
        },
        {
          weight: 2
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        {
          color: "#c0c0c0"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels.text",
      stylers: [
        {
          color: "#c0c0c0"
        },
        {
          weight: 2
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#949494"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#000000"
        }
      ]
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a1c07"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#094212"
        }
      ]
    },
    {
      featureType: "landscape.natural.terrain",
      elementType: "geometry",
      stylers: [
        {
          color: "#7e7e7e"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#555740"
        },
        {
          weight: 1
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#2b8291"
        },
        {
          weight: 2
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d7eef2"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#000000"
        }
      ]
    }
  ];
  labelOptions = {
    color: "#CC40A0",
    fontFamily: "",
    fontSize: "14px",
    fontWeight: "bold",
    text: "Some Text"
  };
  @Input() markers;
  @Input() circles;
  @Input() polygons;
  @Input() polylines;
  @Input() dataLayers;
  @Input() KmlLayers;

  constructor() {}
}
