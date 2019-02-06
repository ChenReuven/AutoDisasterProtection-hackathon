import { Component, OnInit } from "@angular/core";
import { Disaster, Marker } from "./model";
import { MapsAPILoader } from "@agm/core";
import { SiteService } from "./services/site.service";
import { DisasterService } from "./services/disaster.service";
import { ToastrService } from "ngx-toastr";

declare var google;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Auto Disaster Protection";
  lat = 51.673858;
  lng = 7.815982;

  markers: Marker[] = [];
  disasters: Disaster[];
  filteredMarkers: Marker[] = [];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private siteService: SiteService,
    private disasterService: DisasterService,
    private toastr: ToastrService
  ) {
    this.markers = this.siteService.getSites();
    //this.disasters = this.disasterService.getGeneratedDisasters();
    this.disasters = this.disasterService.getDisasters();
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
      let distanceInKm = 0;

      for (let i = 0; i < this.markers.length; i++) {
        const markerLoc = new google.maps.LatLng(
          this.markers[i].lat,
          this.markers[i].lng
        );
        for (let j = 0; j < disastersCenter.length; j++) {
          distanceInKm =
            google.maps.geometry.spherical.computeDistanceBetween(
              markerLoc,
              disastersCenter[i]
            ) / 1000;
        }
        if (distanceInKm < 25) {
          this.filteredMarkers.push(this.markers[i]);
        }
      }

      this.showSnackbars(this.filteredMarkers);
    });
  }

  private showSnackbars(filteredMarkers: Marker[]) {
    for (let i = 0; i < this.filteredMarkers.length; i++) {
      this.toastr.success(
        filteredMarkers[i].subtitle,
        filteredMarkers[i].title,
        {
          timeOut: 15000 + i * 500
        }
      );
    }

    this.playAudio();
  }

  private playAudio() {
    const audio = new Audio();
    audio.src = "../assets/worms_incoming.mp3";
    audio.load();
    if (audio) {
      audio.play();
    }
  }
}
