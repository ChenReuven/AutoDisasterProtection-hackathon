import { DisasterType } from "./disasterType.model";
import { DisasterStrength } from "./disasterStrength.model";

export interface Disaster {
  lat: number;
  lng: number;
  label: string;
  type?: DisasterType;
  strength?: DisasterStrength;
}
