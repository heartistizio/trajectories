interface Location {
  lat: number;
  lon: number;
}

export interface Stop {
  name: string;
  location: Location;
}

export type Stops = Record<string, Stop>;
