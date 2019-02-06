import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Site } from "./model";
import { HttpClient } from "@angular/common/http";

const SITES_URL = "sites";

@Injectable()
export class SitesResolverService implements Resolve<Site[]> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Site[]> {
    return this.httpClient.get<Site[]>(SITES_URL);
  }
}
