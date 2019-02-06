import { Injectable } from "@angular/core";
import { Disaster } from "../model";
import { disastersMock, generateDisastersMock } from "../mocks/disaster.mock";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class DisasterService {
  constructor() {}

  getDisastersFromServer(): Observable<Disaster[]> {
    return of(disastersMock).pipe(delay(2000));
  }

  getGeneratedDisasters(): Disaster[] {
    return generateDisastersMock();
  }
}
