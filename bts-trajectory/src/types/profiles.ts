import { Stop } from './data';

export enum ProfileEnum {
  religious = 'religious',
  tourist = 'tourist',
  guest = 'guest',
  food = 'food',
}

export type Profile = keyof typeof ProfileEnum;

export type ProfileCreator = () => Stop[];
