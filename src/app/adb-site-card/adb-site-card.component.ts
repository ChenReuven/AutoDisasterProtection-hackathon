import { Component, Input, OnInit } from "@angular/core";
import { Site } from "../model";

@Component({
  selector: "app-adb-site-card",
  templateUrl: "./adb-site-card.component.html",
  styleUrls: ["./adb-site-card.component.scss"]
})
export class AdbSiteCardComponent implements OnInit {
  @Input() site: Site;

  constructor() {}

  ngOnInit() {}
}
