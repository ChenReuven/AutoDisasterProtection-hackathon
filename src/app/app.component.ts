import { Component, OnInit } from "@angular/core";
import { Disaster, Site } from "./model";
import { MapsAPILoader } from "@agm/core";
import { SiteService } from "./services/site.service";
import { DisasterService } from "./services/disaster.service";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

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
  disasters$: Observable<Disaster[]>;
  filteredSites: Site[] = [];
  shouldDiscoverLoading = false;

  constructor(
    private actr: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private siteService: SiteService,
    private disasterService: DisasterService,
    private toastr: ToastrService
  ) {
    /*this.actr.data
      .pipe(
        map(data => {
          return data.sites.json();
        })
      )
      .subscribe(res => {
        this.sites = res;
      });*/
    this.sites = this.siteService.getSites();
  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      console.log("mapsAPILoader is loaded...");
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

  private onDiscover() {
    this.disasters$ = this.disasterService.getDisastersFromServer();
    this.shouldDiscoverLoading = true;

    this.disasters$.subscribe((disasters: Disaster[]) => {
      this.shouldDiscoverLoading = false;
      const disastersCenter = this.getDisastersCenter(disasters);
      this.filteredSites = [];
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

  private getDisastersCenter(disasters: Disaster[]) {
    return disasters.map(d => {
      return new google.maps.LatLng(d.lat, d.lng);
    });
  }
}
