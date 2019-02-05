import { DisasterType } from "./disasterType.model";
import { DisasterStrength } from "./disasterStrength.model";

export interface Disaster {
  title?: string;
  subtitle?: string;
  lat: number;
  lng: number;
  label: string;
  type?: DisasterType;
  strength?: DisasterStrength;
  disasterColor?: string;
  image?: string;
  content?: string;
}
