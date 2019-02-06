import { Component, OnInit } from "@angular/core";
import { Disaster, Site } from "./model";
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

  sites: Site[] = [];
  disasters: Disaster[];
  filteredSites: Site[] = [];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private siteService: SiteService,
    private disasterService: DisasterService,
    private toastr: ToastrService
  ) {
    this.sites = this.siteService.getSites();
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

      for (let i = 0; i < this.sites.length; i++) {
        const siteLoc = new google.maps.LatLng(
          this.sites[i].lat,
          this.sites[i].lng
        );
        for (let j = 0; j < disastersCenter.length; j++) {
          distanceInKm =
            google.maps.geometry.spherical.computeDistanceBetween(
              siteLoc,
              disastersCenter[i]
            ) / 1000;
        }
        if (distanceInKm < 25) {
          this.filteredSites.push(this.sites[i]);
        }
      }

      this.showSnackbars(this.filteredSites);
    });
  }

  private showSnackbars(filteredSites: Site[]) {
    for (let i = 0; i < this.filteredSites.length; i++) {
      this.toastr.success(filteredSites[i].subtitle, filteredSites[i].title, {
        timeOut: 15000 + i * 500
      });
    }

    this.playAudio();
  }

  private playAudio() {
    const audio = new Audio();
    audio.src = "../assets/worms_incoming.mp3";
    audio.load();
    if (audio) {
      //audio.play();
    }
  }
}
