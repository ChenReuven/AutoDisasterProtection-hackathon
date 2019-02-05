import { Injectable } from "@angular/core";
import { Disaster } from "../model";
import { disastersMock, generateDisastersMock } from "../mocks/disaster.mock";

@Injectable()
export class DisasterService {
  constructor() {}

  getDisasters(): Disaster[] {
    return disastersMock;
  }

  getGeneratedDisasters(): Disaster[] {
    return generateDisastersMock();
  }
}
