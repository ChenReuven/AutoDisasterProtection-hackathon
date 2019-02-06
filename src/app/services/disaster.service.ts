import { Injectable } from "@angular/core";
import { Disaster } from "../model";
import { generateDisastersMock } from "../mocks/disaster.mock";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

const DISASTERS_URL = "disasters";

@Injectable()
export class DisasterService {
  constructor(private httpClient: HttpClient) {}

  getDisastersFromServer(): Observable<Disaster[]> {
    return this.httpClient.get<Disaster[]>(DISASTERS_URL).pipe(delay(2000));
  }

  getGeneratedDisasters(): Disaster[] {
    return generateDisastersMock();
  }
}
