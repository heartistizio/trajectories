import { Profile, ProfileCreator } from './profiles';

export interface Config {
  PORT: number;
  profiles: Record<Profile, ProfileCreator>;
}
