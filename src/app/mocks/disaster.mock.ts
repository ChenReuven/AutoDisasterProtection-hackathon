import { Disaster, DisasterType } from "../model";
import { DisasterStrength } from "../model/disasterStrength.model";

const NUMBER_OF_DISASTERS = 10;

export const disastersMock: Disaster[] = [
  {
    title: "EARTHQUAKE in Dortmund",
    lat: 51.673858 + 1.1,
    lng: 7.815982,
    label: "A",
    type: DisasterType.EARTHQUAKE,
    strength: DisasterStrength.MEDIUM,
    image: "earthquake-icon.png",
    disasterColor: "brown",
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
    image: "tsunami-icon.jpg",
    disasterColor: "blue",
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
    image: "typhoon-icon.png",
    disasterColor: "#3d8aff",
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem"
  },
  {
    title: "EARTHQUAKE in Israel",
    lat: 32.109333,
    lng: 34.855499,
    label: "Israel",
    type: DisasterType.EARTHQUAKE,
    strength: DisasterStrength.MEDIUM,
    image: "earthquake-icon.png",
    disasterColor: "brown",
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
      "Lorem Lorem Lorem Lorem Lorem Lorem"
  }
];

export const generateDisastersMock = (): Disaster[] => {
  const disastersDataMock: Disaster[] = [];
  for (let i = 0; i < NUMBER_OF_DISASTERS; i++) {
    disastersDataMock.push({
      title: "EARTHQUAKE in Dortmund",
      lat: generateLat(i),
      lng: generateLng(i),
      label: "A",
      type: DisasterType.EARTHQUAKE,
      strength: DisasterStrength.MEDIUM,
      image: "earthquake-icon.png",
      disasterColor: "brown",
      content:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem " +
        "Lorem Lorem Lorem Lorem Lorem Lorem"
    });
  }
  return disastersDataMock;
};

function generateLat(i) {
  //return Math.floor(Math.random() * 55) + 50;
  return 51.723858 + Math.random() * i * Math.random();
}

function generateLng(i): number {
  //return Math.floor(Math.random() * 7) + 1;
  return 7.895982 + Math.random() * i * Math.random();
}
