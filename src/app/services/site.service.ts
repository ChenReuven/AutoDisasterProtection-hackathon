import { Injectable } from "@angular/core";
import { Site } from "../model";
import { Observable, of } from "rxjs";
import { sitesMock } from "../mocks/site.mock";

@Injectable()
export class SiteService {
  constructor() {}

  getSites(): Site[] {
    return sitesMock;
  }

  getObservableSites(): Observable<Site[]> {
    return of(sitesMock);
  }
}
