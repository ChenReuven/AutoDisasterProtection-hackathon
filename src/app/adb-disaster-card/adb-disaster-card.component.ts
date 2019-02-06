import { Component, Input, OnInit } from "@angular/core";
import { Disaster } from "../model";

@Component({
  selector: "app-adb-disaster-card",
  templateUrl: "./adb-disaster-card.component.html",
  styleUrls: ["./adb-disaster-card.component.scss"]
})
export class AdbDisasterCardComponent implements OnInit {
  @Input() disaster: Disaster;
  constructor() {}

  ngOnInit() {}
}
