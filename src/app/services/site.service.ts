import { Injectable } from "@angular/core";
import { Marker } from "../model";
import { markersMock } from "../mocks/marker.mock";
import { Observable, of } from "rxjs";

@Injectable()
export class SiteService {
  constructor() {}

  getSites(): Marker[] {
    return markersMock;
  }

  getObservableSites(): Observable<Marker[]> {
    return of(markersMock);
  }
}
