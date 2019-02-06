import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-adb-header",
  templateUrl: "./adb-header.component.html",
  styleUrls: ["./adb-header.component.scss"]
})
export class AdbHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
