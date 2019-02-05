import { Component, OnInit } from "@angular/core";
import { Disaster, Marker } from "./model";
import { disastersMock } from "./mocks/disaster.mock";
import { markersMock } from "./mocks/marker.mock";
import { MapsAPILoader } from "@agm/core";
import { SiteService } from "./services/site.service";
declare var google;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "AutoDisasterProtection-hackathon";
  lat = 51.673858;
  lng = 7.815982;

  markers: Marker[] = [];
  disasters: Disaster[] = disastersMock;
  filteredMarkers: Marker[] = [];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private siteService: SiteService
  ) {
    this.markers = this.siteService.getSites();
  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      /*const center = new google.maps.LatLng(
        this.disasters[1].lat,
        this.disasters[1].lng
      );*/
      const disastersCenter = this.disasters.map(d => {
        return new google.maps.LatLng(d.lat, d.lng);
      });

      for (let i = 0; i < this.markers.length; i++) {
        const markerLoc = new google.maps.LatLng(
          this.markers[i].lat,
          this.markers[i].lng
        );
        for (let j = 0; j < disastersCenter.length; j++) {
          const distanceInKm =
            google.maps.geometry.spherical.computeDistanceBetween(
              markerLoc,
              disastersCenter[i]
            ) / 1000;
          if (distanceInKm < 25) {
            this.filteredMarkers.push(this.markers[i]);
          }
        }
      }
    });
  }
}
