import { Component, Input, OnInit } from "@angular/core";
import { Marker } from "../model";

@Component({
  selector: "app-adb-agm-info-window",
  templateUrl: "./adb-agm-info-window.component.html",
  styleUrls: ["./adb-agm-info-window.component.scss"]
})
export class AdbAgmInfoWindowComponent implements OnInit {
  @Input() site: Marker;
  constructor() {}

  ngOnInit() {}
}
