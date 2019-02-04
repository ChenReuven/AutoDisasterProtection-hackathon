import { Disaster, DisasterType } from "../model";
import { DisasterStrength } from "../model/disasterStrength.model";

export const disastersMock: Disaster[] = [
  {
    title: "EARTHQUAKE in Dortmund",
    lat: 51.673858 + 1.1,
    lng: 7.815982,
    label: "A",
    type: DisasterType.EARTHQUAKE,
    strength: DisasterStrength.MEDIUM,
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem"
  },
  {
    title: "TSUNAMI in Dortmund",
    subtitle: "In The City",
    lat: 51.373858,
    lng: 7.215982,
    label: "B",
    type: DisasterType.TSUNAMI,
    strength: DisasterStrength.HIGH,
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem"
  },
  {
    title: "TYPHOON in Dortmund",
    lat: 51.723858 + 0.5,
    lng: 7.895982,
    label: "C",
    type: DisasterType.TYPHOON,
    strength: DisasterStrength.Low,
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem"
  }
];
