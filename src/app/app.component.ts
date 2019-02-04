import { Component } from "@angular/core";
import { Disaster, DisasterType, Marker } from "./model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AutoDisasterProtection-hackathon";
  lat = 51.673858;
  lng = 7.815982;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "A"
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B"
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "C"
    }
  ];

  disasters: Disaster[] = [
    {
      lat: 51.673858 + 1.1,
      lng: 7.815982,
      label: "A",
      type: DisasterType.EARTHQUAKE
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      type: DisasterType.TSUNAMI
    },
    {
      lat: 51.723858 + 0.5,
      lng: 7.895982,
      label: "C",
      type: DisasterType.TYPHOON
    }
  ];
}
