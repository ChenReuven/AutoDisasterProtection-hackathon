import { Component, Input, OnInit } from "@angular/core";
import { Marker } from "../model";

@Component({
  selector: "app-adb-site-card",
  templateUrl: "./adb-site-card.component.html",
  styleUrls: ["./adb-site-card.component.scss"]
})
export class AdbSiteCardComponent implements OnInit {
  @Input() site: Marker;

  constructor() {}

  ngOnInit() {}
}
