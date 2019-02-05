import { Injectable } from "@angular/core";
import { Marker } from "../model";
import { markersMock } from "../mocks/marker.mock";

@Injectable()
export class SiteService {
  constructor() {}

  getSites(): Marker[] {
    return markersMock;
  }
}
