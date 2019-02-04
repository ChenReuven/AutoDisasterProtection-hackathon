import { Component } from "@angular/core";
import { Disaster, Marker } from "./model";
import { disastersMock } from "./mocks/disaster.mock";
import { markersMock } from "./mocks/marker.mock";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AutoDisasterProtection-hackathon";
  lat = 51.673858;
  lng = 7.815982;

  markers: Marker[] = markersMock;
  disasters: Disaster[] = disastersMock;
}
